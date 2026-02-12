

# Atualizar OG Image + Adicionar SEO (Canonical + JSON-LD)

## 1. Nova imagem OG

- Copiar `logo_fluxrow_1080_x_1080_px.png` para `public/OG_logo_fluxrow.png` (substituindo a anterior)
- A imagem e 1080x1080px — atualizar `og:image:width` e `og:image:height` para 1080
- As URLs das meta tags `og:image` e `twitter:image` permanecem as mesmas (mesmo nome de arquivo)

## 2. Meta tag canonica

Adicionar no `<head>` do `index.html`:
```html
<link rel="canonical" href="https://fluxrow.com/" />
```

## 3. Structured Data (JSON-LD)

Adicionar script JSON-LD no `<head>` com dados da organizacao:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fluxrow",
  "url": "https://fluxrow.com",
  "logo": "https://fluxrow-manus-project.lovable.app/OG_logo_fluxrow.png",
  "description": "IA generativa, automacoes e growth marketing. A Fluxrow e o laboratorio por tras das marcas que lideram.",
  "sameAs": ["https://twitter.com/fluxrow"]
}
```

## Resumo das alteracoes

- **1 arquivo copiado**: nova imagem OG substituindo a anterior
- **1 arquivo editado**: `index.html` (dimensoes da imagem, canonical, JSON-LD)

