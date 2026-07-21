/**
 * API de Avaliações Google — Instituto Florence
 * 
 * Funcionamento:
 *   - Usa SerpApi (Google Maps Reviews) para buscar avaliações reais
 *   - Faz cache em arquivo JSON para evitar chamadas repetidas (TTL: 12h)
 *   - Expõe GET /api/reviews  →  { reviews, rating, total, cached, fetchedAt }
 * 
 * Setup:
 *   1. npm install express cors node-fetch dotenv
 *   2. Crie .env com SERPAPI_KEY=sua_chave
 *   3. node api/reviews-server.js
 */

require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const fs       = require('fs');
const path     = require('path');
const https    = require('https');

const app   = express();
const PORT  = process.env.PORT || 3001;
const CACHE_FILE = path.join(__dirname, 'reviews-cache.json');
const CACHE_TTL  = 12 * 60 * 60 * 1000; // 12 horas

// Place ID do Instituto Essence no Google Maps
// Como encontrar: abra no Google Maps, copie o link — o place_id aparece na URL
// Ou use: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
const PLACE_ID = process.env.PLACE_ID || 'ChIJ2aKrMTKpiZQRGz6exVyHuJQ';

app.use(cors());
app.use(express.json());

// ─── Helpers ──────────────────────────────────────────────────────────────────

function lerCache() {
  try {
    if (!fs.existsSync(CACHE_FILE)) return null;
    const data = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    const age  = Date.now() - new Date(data.fetchedAt).getTime();
    if (age > CACHE_TTL) return null; // expirado
    return data;
  } catch {
    return null;
  }
}

function salvarCache(data) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2));
}

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); }
        catch (e) { reject(new Error('Resposta inválida da SerpApi')); }
      });
    }).on('error', reject);
  });
}

async function buscarAvaliacoesSerpApi() {
  const key = process.env.SERPAPI_KEY;
  if (!key) throw new Error('SERPAPI_KEY não configurada no .env');
  
  if (!PLACE_ID || PLACE_ID.includes('SUBSTITUA')) {
    throw new Error('PLACE_ID não configurado corretamente no .env');
  }

  const url = `https://serpapi.com/search.json` +
    `?engine=google_maps_reviews` +
    `&place_id=${encodeURIComponent(PLACE_ID)}` +
    `&hl=pt` +
    `&sort_by=qualityScore` +
    `&api_key=${key}`;

  console.log('[reviews-server] Buscando avaliações:', { placeId: PLACE_ID });
  const data = await httpsGet(url);

  if (data.error) throw new Error(`SerpApi: ${data.error}`);

  const reviews = (data.reviews || []).map(r => ({
    nome:      r.user?.name   || 'Usuário Google',
    avatar:    iniciais(r.user?.name),
    foto:      r.user?.thumbnail || null,
    nota:      r.rating        || 5,
    texto:     r.snippet       || '',
    data:      r.date          || '',
    localGuide: r.user?.local_guide || false,
    totalReviews: r.user?.reviews || 0,
  }));

  // Metadados gerais (rating / total) vêm do place_info quando disponível
  const place     = data.place_info || {};
  const rating    = place.rating    || mediaNotas(reviews);
  const total     = place.reviews   || reviews.length;

  return { reviews, rating, total };
}

function iniciais(nome) {
  if (!nome) return '??';
  return nome.split(' ').slice(0, 2).map(n => n[0].toUpperCase()).join('');
}

function mediaNotas(reviews) {
  if (!reviews.length) return 5;
  return +(reviews.reduce((s, r) => s + r.nota, 0) / reviews.length).toFixed(1);
}

// ─── Rotas ────────────────────────────────────────────────────────────────────

// GET /api/reviews
app.get('/api/reviews', async (req, res) => {
  try {
    // 1. Tenta cache
    const cached = lerCache();
    if (cached && !req.query.refresh) {
      return res.json({ ...cached, cached: true });
    }

    // 2. Busca ao vivo
    const fresco = await buscarAvaliacoesSerpApi();
    const payload = { ...fresco, fetchedAt: new Date().toISOString(), cached: false };
    salvarCache(payload);

    res.json(payload);
  } catch (err) {
    console.error('[reviews-server]', err.message);

    // Fallback: retorna cache antigo mesmo expirado
    const stale = lerCache();
    if (stale) return res.json({ ...stale, cached: true, stale: true });

    res.status(500).json({ error: err.message });
  }
});

// GET /api/reviews/status
app.get('/api/reviews/status', (req, res) => {
  const cache = lerCache();
  res.json({
    ok: true,
    hasSerpApiKey: !!process.env.SERPAPI_KEY,
    placeId: PLACE_ID,
    cacheExists: !!cache,
    cacheAge: cache ? Math.round((Date.now() - new Date(cache.fetchedAt).getTime()) / 60000) + ' min' : null,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Reviews API rodando em http://localhost:${PORT}`);
  console.log(`   GET /api/reviews`);
  console.log(`   GET /api/reviews/status`);
  console.log(`   Place ID: ${PLACE_ID}`);
  console.log(`   SerpApi Key: ${process.env.SERPAPI_KEY ? '✓ Configurada' : '✗ NÃO CONFIGURADA'}`);
});
