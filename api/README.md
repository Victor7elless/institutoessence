# API de Avaliações Google — Instituto Florence

## Como configurar

### 1. Obter a chave da SerpApi (gratuita)
1. Acesse https://serpapi.com e crie uma conta (plano gratuito: 100 req/mês)
2. Copie sua API Key em https://serpapi.com/manage-api-key

### 2. Obter o Place ID do Instituto Essence
1. Abra https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
2. Pesquise "Instituto Essence Dourados MS"
3. Copie o Place ID (começa com `ChIJ...`)

### 3. Configurar o .env
```bash
cp .env.example .env
# Edite o .env com sua SERPAPI_KEY e PLACE_ID
```

### 4. Instalar e rodar
```bash
npm install
npm start
# Servidor sobe em http://localhost:3001
```

### 5. Configurar o front-end
No arquivo `.env` do projeto React (raiz), adicione:
```
REACT_APP_REVIEWS_API_URL=http://localhost:3001/api/reviews
```
Em produção, troque pelo URL real do servidor (ex: `https://api.seudominio.com/api/reviews`).

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/reviews` | Retorna avaliações (cache 12h) |
| GET | `/api/reviews?refresh=1` | Força busca ao vivo |
| GET | `/api/reviews/status` | Status da API e do cache |

## Resposta `/api/reviews`
```json
{
  "reviews": [
    {
      "nome": "Maria S.",
      "avatar": "MS",
      "foto": "https://...",
      "nota": 5,
      "texto": "Excelente atendimento!",
      "data": "há 2 semanas",
      "localGuide": true,
      "totalReviews": 42
    }
  ],
  "rating": 4.9,
  "total": 87,
  "fetchedAt": "2025-01-15T10:30:00Z",
  "cached": true
}
```

## Comportamento de segurança
- **Cache de 12h** — Google limita requisições frequentes
- **Fallback automático** — se a API falhar, o front exibe avaliações de exemplo
- **Stale cache** — se a SerpApi cair, retorna cache antigo sem erro
- **Sem SERPAPI_KEY no front-end** — a chave fica só no servidor
