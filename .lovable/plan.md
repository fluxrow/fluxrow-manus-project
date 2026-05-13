# Plano: SEO orgânico + Blog automático

## Objetivo
Aumentar tráfego orgânico do fluxrow.com com (1) conteúdos de profundidade, otimizados pra palavras-chave, e (2) um blog bilíngue PT/EN com 1 post novo por dia gerado automaticamente sobre IA, Lovable, automação e ferramentas relacionadas.

## Fase 1 — Infraestrutura de Blog automático

### 1.1 Conexão Firecrawl
- Conectar Firecrawl como connector (vou pedir aprovação dentro do flow). Sem isso, o cron não consegue puxar fontes.

### 1.2 Banco de dados
Tabela `blog_posts`:
- `id`, `slug`, `lang` ('pt'|'en'), `title`, `excerpt`, `body_md`, `cover_image_url`, `tags[]`, `keywords[]`, `sources jsonb` (lista de URLs/títulos das fontes), `seo_title`, `seo_description`, `published_at`, `status` ('draft'|'published'), `view_count`, `created_at`, `updated_at`.
- Índice em `(lang, published_at desc)` e `(slug, lang)` único.
- RLS: leitura pública apenas onde `status='published'`; escrita somente service_role.

Tabela `blog_generation_runs` (auditoria do cron):
- `id`, `started_at`, `finished_at`, `sources_count`, `posts_created`, `error`, `raw_log jsonb`.

### 1.3 Edge function `generate-blog-post`
Roda diariamente. Para cada execução:
1. Scrapeia 6 fontes fixas via Firecrawl (markdown + onlyMainContent):
   - https://lovable.dev/blog
   - https://openai.com/blog
   - https://www.anthropic.com/news
   - https://blog.google/technology/ai/
   - https://techcrunch.com/category/artificial-intelligence/
   - https://news.ycombinator.com/news (filtrar por palavras IA)
2. Extrai 3-5 manchetes mais novas/relevantes que ainda não viraram post (checa `sources` na tabela).
3. Pede ao Lovable AI (`google/gemini-2.5-flash`) pra escrever 1 artigo PT (~1200 palavras) consolidando os achados, com:
   - H1 único, H2/H3 organizados, FAQ, "principais conclusões"
   - tags + keywords + slug + meta title (≤60) + meta description (≤160)
   - citações com link para as fontes originais (ético, não copia texto)
4. Pede a versão EN equivalente (mesmo slug + sufixo idioma já está no schema via `lang`).
5. Insere `pt` e `en` em `blog_posts` com `status='published'`.
6. Loga em `blog_generation_runs`.

Proteções:
- Verifica `apikey` header (já é padrão do projeto).
- Limite: máximo 1 post por idioma por dia.
- Idempotência: hash das URLs-fonte; se já existe post com mesmo conjunto → pula.
- Falha gracefully (log, sem 500 estourado).

### 1.4 Cron (pg_cron + pg_net)
- 09:00 UTC todo dia → chama `generate-blog-post`.

### 1.5 Páginas e rotas
- `/blog` (PT) e `/blog?lang=en`: índice paginado, cards com cover gerada (placeholder gradient + título por enquanto, sem image gen pra economizar), tags, data, tempo de leitura.
- `/blog/[slug]?lang=pt|en`: artigo completo renderizado via `react-markdown` + `remark-gfm`, JSON-LD `Article`, hreflang PT↔EN, breadcrumbs, "leia também" (3 posts da mesma tag), CTA pro AI Operator Kit no fim.
- Sitemap dinâmico (`public/sitemap.xml` regenerado por edge function `regenerate-sitemap` chamada após cada cron) ou rota `/sitemap.xml` server-rendered. Vou usar a segunda: edge function `sitemap` que monta XML em runtime lendo `blog_posts` + páginas estáticas.
- RSS em `/blog/rss.xml` (mesma técnica).
- Update do `public/llms.txt` listando o blog.

### 1.6 SEO técnico do blog
- `<link rel="alternate" hreflang>` PT/EN.
- Open Graph + Twitter card por post.
- JSON-LD Article com `author: Fluxrow`, `datePublished`, `inLanguage`.
- Canonical correto por idioma.

## Fase 2 — Reescrita profunda de /conteudos/*

Páginas curtas (precisam de reescrita completa, ~1500-2200 palavras cada):
- `ConteudoClaudeCode.tsx` (140 linhas hoje)
- `ConteudoClaudeSkills.tsx` (127)
- `ConteudoMCP.tsx` (126)

Páginas médias (expandir + adicionar FAQ + JSON-LD + TOC):
- `ConteudoIAEscalar.tsx`, `ConteudoIAMarketing.tsx`, `ConteudoPrompts.tsx`, `ConteudoRetratoIA.tsx`, `ConteudoTDAH.tsx`, `ConteudoYouTubeMonetizacao.tsx`.

Para cada página:
- H1 com keyword principal, intro com keyword nos primeiros 100 chars
- Sumário (TOC) com âncoras
- 6-10 seções H2 cobrindo subtemas e long-tail
- FAQ (5-7 perguntas reais) com JSON-LD `FAQPage`
- JSON-LD `Article` (já existe `articleSchema.ts`, vou padronizar uso)
- "Conteúdos relacionados" no fim
- CTA pro AI Operator Kit ou Agência conforme contexto

## Fase 3 — Aprofundar Kit (sales + capítulos do reader)

- `AIOperatorKitSales.tsx`: adicionar seções "para quem é", "antes/depois", FAQ longa, prova de mecanismo, comparativo "fazer sozinho vs Kit".
- `kitChapters.ts`: cada capítulo hoje é placeholder de ~200 chars. Reescrever os 10 capítulos PT+EN com 800-1200 palavras cada, exemplos práticos, exercícios, checklists. (Alinhado ao memory `kit voice and tone`.)

## Fase 4 — Home + Agência

- `Index.tsx`: adicionar seção de "casos" com texto otimizado, FAQ home, faixa "ferramentas que dominamos" com keywords (Lovable, Claude, n8n, Supabase…).
- `Agencia.tsx` (93 linhas): expandir com seções de serviço (cada serviço com H2 + descrição rica), processo, perguntas de venda, FAQ, JSON-LD `Service`.

## Fase 5 — Sitemap, robots, indexação

- `/sitemap.xml` dinâmico via edge function (lista todas as rotas + posts do blog em PT e EN com `<xhtml:link rel="alternate" hreflang>`).
- `public/robots.txt` revisado pra liberar tudo público + apontar pro sitemap.
- `public/llms.txt` atualizado com /blog e todos os /conteudos.

## Ordem de execução proposta

Vou rodar em 4 commits sequenciais pra você ir aprovando:

1. **Migration** (tabelas blog_posts + blog_generation_runs + cron schedule placeholder) — pede aprovação separada.
2. **Conexão Firecrawl** (vou disparar o `connect` flow).
3. **Backend do blog**: edge functions `generate-blog-post`, `sitemap`, `blog-rss` + cron + secret check.
4. **Frontend do blog**: páginas /blog e /blog/[slug] + Header link + sitemap/llms.txt.
5. **Fase 2 (reescrita /conteudos/*)** — começo pelas 3 páginas mais curtas (Claude Code, Claude Skills, MCP).
6. **Fase 3 (Kit chapters PT+EN)**.
7. **Fase 4 (Home + Agência)**.

Tempo estimado: blog automático fica funcionando após o passo 4. Reescritas (5-7) vão consumindo turnos seguintes.

## Detalhes técnicos

- Lovable AI (`LOVABLE_API_KEY` já existe). Modelo padrão `google/gemini-2.5-flash`. Custo por post estimado <0,01 USD.
- Firecrawl (`FIRECRAWL_API_KEY` injetado pelo connector). Scrape de 6 URLs/dia → ~6 créditos/dia.
- Cron via `pg_cron` + `pg_net` (já existe padrão no projeto).
- Markdown rendering: `react-markdown` + `remark-gfm` (já listadas no skill Firecrawl, devo precisar `bun add`).
- Reading time: util simples (palavras/200).
- Idempotência por hash MD5 das URLs-fonte salvas em `sources` jsonb.

## O que NÃO faço sem você pedir
- Geração de imagem por post (caro). Uso gradient + tipografia como cover.
- Tradução automática de TODOS os /conteudos pra EN (cada página atual fica só em PT por enquanto; o blog já nasce bilíngue).
- Newsletter / email marketing dos posts novos (posso adicionar depois).

Aprovando, eu começo pela Fase 1.1 (conectar Firecrawl) e sigo em cadeia.