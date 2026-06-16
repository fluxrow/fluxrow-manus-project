# Página /diagnostico — Standalone com ID Burati

## Objetivo
Publicar o HTML enviado em `fluxrow.com/diagnostico`, sem entrar no menu de navegação, aplicando a identidade visual da Burati (laranja `#FF6709` + preto `#050505` + Inter).

## Abordagem
Servir o arquivo como HTML puro (sem React Router), preservando 100% do conteúdo, lógica e estrutura. Só os tokens visuais mudam.

### 1. Arquivo
- Criar `public/diagnostico/index.html` com o conteúdo enviado (361 linhas, preservado integralmente).
- Vite serve `public/` como estático. URL final: `fluxrow.com/diagnostico` (acessa o `index.html` da pasta automaticamente).
- Não adicionar link no `Header.tsx` / nav — fica acessível apenas via URL direta.
- Adicionar `<meta name="robots" content="noindex,nofollow">` para não aparecer em busca (página de compartilhamento direto).

### 2. Aplicar ID Burati (apenas tokens no `:root`)
Trocas pontuais no `<style>`, sem mexer em estrutura/markup:

```text
--bg:     #0a0a0a  →  #050505   (preto Burati)
--bg2:    #111111  →  #0d0d0d
--bg3:    #1a1a1a  →  #161616
--green:  #1D9E75  →  #FF6709   (laranja Burati, vira --accent)
rgba(29,158,117, …) → rgba(255,103,9, …)  (badges, hovers, focus rings)
```

Fonte Inter mantida (Burati também usa Inter, mesmo import do Google Fonts já presente no HTML).

### 3. SPA fallback
Como `public/diagnostico/index.html` é um arquivo real, o Vite/hosting serve ele direto antes de cair no fallback do React Router — não há conflito com as rotas existentes.

## Fora de escopo
- Mudanças no React app, no Header, em rotas existentes.
- Edição de conteúdo/copy do diagnóstico.
- Sitemap (página é noindex, compartilhamento direto).
