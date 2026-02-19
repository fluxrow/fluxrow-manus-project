
# Otimizacao de SEO - Correcao de Dominio e Melhorias

## Problema principal

Todas as URLs de imagem no `index.html` apontam para o dominio de staging (`fluxrow-manus-project.lovable.app`) em vez do dominio de producao (`fluxrow.com`). Isso afeta como o site aparece quando compartilhado no WhatsApp, Facebook, LinkedIn, Twitter e nos resultados do Google.

## Alteracoes no `index.html`

### 1. Corrigir URLs de imagem (OG, Twitter, JSON-LD)
- Linha 21: `og:image` de `fluxrow-manus-project.lovable.app` para `fluxrow.com`
- Linha 37: `logo` no JSON-LD Organization de `fluxrow-manus-project.lovable.app` para `fluxrow.com`
- Linha 84: `twitter:image` de `fluxrow-manus-project.lovable.app` para `fluxrow.com`

### 2. Atualizar titulo e descricao para o padrao da marca
- Titulo: "Fluxrow - Inteligencia Criativa" (alinhado com o branding atual)
- Descricao: "IA generativa, automacoes e growth marketing. A Fluxrow e o laboratorio por tras das marcas que lideram."
- Aplicar nos meta tags: title, description, og:title, og:description, twitter:title, twitter:description

### 3. Adicionar meta robots
- Adicionar `<meta name="robots" content="index, follow" />` para sinalizar explicitamente aos crawlers

### 4. Adicionar BreadcrumbList ao JSON-LD
- Adicionar schema BreadcrumbList no `@graph` existente para melhorar navegacao nos resultados de busca

## Detalhes tecnicos

**Arquivo alterado:** `index.html` (apenas 1 arquivo)

**URLs corrigidas:**
- `https://fluxrow-manus-project.lovable.app/OG_logo_fluxrow.png` → `https://fluxrow.com/OG_logo_fluxrow.png` (3 ocorrencias)

**JSON-LD adicionado:**
```text
BreadcrumbList com:
  Home → https://fluxrow.com/
  Contato → https://fluxrow.com/contato
  Conteudos → https://fluxrow.com/conteudos
```

Nenhuma dependencia nova. Impacto zero na performance.
