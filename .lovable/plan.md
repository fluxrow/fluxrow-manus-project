## Objetivo

Deixar conteúdos 2, 3 e 4 escritos (PT+EN), salvos como `scheduled` no banco, e publicados automaticamente por um cron — sem repetir tópicos já cobertos e sem perder o controle do que está na fila.

## Estado atual

- Já publicados: `prova-futuro-ia-maio-2026` e `ia-agentes-futuro-negocios-2026`.
- `generate-blog-post` raspa notícias (Lovable, Anthropic, OpenAI…) e publica na hora — não é Semrush-driven, não tem agendamento.
- Reader filtra `status='published'` mas **não** checa `published_at <= now()`.
- Não há cron configurado para o blog.

## O que vou fazer

### 1. Pesquisa Semrush (briefing dos 3 tópicos)
Rodar `keyword_compare` em 6–8 candidatos alinhados ao Fluxrow (Lovable, agentes IA, n8n, automação operacional, Claude Skills, MCP) no database `br`. Escolher 3 com volume ≥ 200 e KDI ≤ 50, sem sobrepor os 2 posts já no ar.

### 2. Geração dos 3 posts (PT + EN)
Para cada keyword vencedora, chamar o Lovable AI Gateway diretamente do meu shell (`gemini-2.5-pro`) com o mesmo prompt do edge function — estrutura H2 + FAQ + "Como aplicar" + tom praticante. Salvar 6 linhas (`pt` + `en`) em `blog_posts` com:
- `status = 'scheduled'`
- `published_at` futuro (D+1, D+3, D+5 às 09:00 BRT)
- `sources_hash` único (hash do briefing Semrush, não de notícia)

### 3. Cron de publicação
Adicionar nova edge function `publish-scheduled-posts` que faz `UPDATE blog_posts SET status='published' WHERE status='scheduled' AND published_at <= now()`. Agendar via `pg_cron` a cada 15 minutos (insert tool, não migration — contém URL do projeto e anon key).

### 4. Defesa no reader
Adicionar `.lte('published_at', new Date().toISOString())` em `Blog.tsx`, `BlogPost.tsx` e `blog-rss/index.ts` — assim mesmo se alguém marcar `published` cedo demais, não vaza.

### 5. Plano vivo
Criar `.lovable/plan.md` com tabela:

```text
| # | Slug | Keyword | Volume | KDI | Publica em | Status |
| - | ---- | ------- | ------ | --- | ---------- | ------ |
```

Cada vez que rodarmos a próxima leva, atualizo essa tabela. É o nosso source of truth pra não repetir tópico nem perder agendamento.

## O que NÃO vou mexer agora

- O `generate-blog-post` antigo (continua funcionando pra raspagem de notícia se quisermos).
- O sitemap (vai pegar os novos posts automaticamente quando publicarem).
- Layout do blog.

## Detalhes técnicos

- Migration: nenhuma. `status` e `published_at` já existem na tabela.
- Insert tool: usado pra (a) gravar os 6 rows, (b) criar o cron job.
- Edge function nova: `publish-scheduled-posts` com `verify_jwt = false` + checagem de `apikey`.
- Idempotência: `sources_hash` evita duplicidade se rodar 2x.

Confirma que posso ir em frente?
