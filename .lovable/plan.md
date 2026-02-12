
# Atualizar Open Graph — Titulo e Descricao

## Resumo

Atualizar as meta tags de titulo e descricao no `index.html` para refletir a identidade da marca Fluxrow.

## Alteracoes no `index.html`

| Tag | Valor Atual | Novo Valor |
|-----|------------|------------|
| `<title>` | Fluxrow - A Inteligencia por Tras do Crescimento | **Fluxrow - Inteligencia Criativa** |
| `og:title` | Fluxrow - A Inteligencia por Tras do Crescimento | **Fluxrow - Inteligencia Criativa** |
| `og:description` | Domine IA generativa, automacoes e estrategias de crescimento. Fluxrow e o laboratorio por tras das marcas que lideram. | **IA generativa, automacoes e growth marketing. A Fluxrow e o laboratorio por tras das marcas que lideram.** |
| `meta description` | (mesmo texto antigo) | **(mesmo novo texto do og:description)** |
| `twitter:site` | @lovable_dev | **@fluxrow** (ou remover se nao tiver perfil) |
| `meta author` | Lovable | **Fluxrow** |

## Detalhes tecnicos

Serao editadas 6 linhas no arquivo `index.html`:
- Linha 10: `<title>`
- Linha 11: `<meta name="description">`
- Linha 13: `<meta name="author">`
- Linha 16: `<meta property="og:title">`
- Linha 17: `<meta property="og:description">`
- Linha 26: `<meta name="twitter:site">`

Nenhum outro arquivo precisa ser alterado.

Apos publicar, use o [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) para limpar o cache e ver a preview atualizada.
