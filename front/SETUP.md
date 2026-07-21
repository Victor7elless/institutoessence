# Setup - Instituto Florence

## Configuração Completa

### 1. Instalar dependências da API

```bash
cd api
npm install
cd ..
```

### 2. Variáveis de ambiente já configuradas

O arquivo `.env` na raiz do projeto e `api/.env` já foram configurados com as chaves fornecidas:

**`api/.env`:**
```
SERPAPI_KEY=9e54896d3db11bafc3921bbd30d10812de2401c6380d9508e1d6ff29c2e64725
PLACE_ID=ChIJ2aKrMTKpiZQRGz6exVyHuJQ
PORT=3001
```

**`.env` (raiz):**
```
REACT_APP_REVIEWS_API_URL=http://localhost:3001/api/reviews
```

### 3. Executar em desenvolvimento

**Terminal 1 - API:**
```bash
cd api
npm start
```

A API iniciará em `http://localhost:3001`

**Terminal 2 - Frontend:**
```bash
npm start
```

O React iniciará em `http://localhost:3000`

### 4. Verificar status da API

Acesse `http://localhost:3001/api/reviews/status` para verificar se:
- ✓ A chave SerpAPI está configurada
- ✓ O Place ID está correto
- ✓ O cache está funcionando

### 5. Testar as avaliações

Acesse `http://localhost:3000` e navegue até a seção de avaliações. Você deve ver:
- Avaliações em tempo real do Google
- Rating geral
- Total de avaliações
- Badge "●" indicando que as avaliações estão sendo carregadas da API

## Troubleshooting

### Avaliações não aparecem
1. Verifique se a API está rodando: `curl http://localhost:3001/api/reviews`
2. Verifique o console da API para erros
3. Verifique se o `.env` contém as chaves corretas

### Erro "SERPAPI_KEY não configurada"
- Certifique-se de que o arquivo `api/.env` existe e contém a chave

### Erro "PLACE_ID não configurado"
- Verifique se o arquivo `api/.env` contém o Place ID correto

## Notas

- O cache das avaliações é atualizado a cada 12 horas
- Para forçar atualização: `http://localhost:3001/api/reviews?refresh=true`
- As avaliações são ordenadas por qualidade (melhor primeiro)
