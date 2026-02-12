

# Open Graph — Imagem de Preview nos Links

## O que sera feito

1. Copiar a imagem `OG_logo_fluxrow.png` para a pasta `public/` (necessario para meta tags OG, que precisam de URL publica direta)

2. Atualizar o `index.html` com as seguintes alteracoes nas meta tags:
   - `og:image` → `https://fluxrow-manus-project.lovable.app/OG_logo_fluxrow.png`
   - `twitter:image` → mesma URL
   - Adicionar `og:image:width` (1200) e `og:image:height` (630) para renderizacao otimizada

## Observacao importante

Depois de publicar, as plataformas (WhatsApp, Facebook, LinkedIn) podem demorar um pouco para atualizar o cache. Para forcar a atualizacao no Facebook/WhatsApp, voce pode usar o [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) e colar o link do site.

