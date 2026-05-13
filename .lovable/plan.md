# Reorganização do site Fluxrow

Hub de produtos + agência, consolidar curso, migrar propostas para `/p/:slug`, dois clusters de conteúdo. SEO preservado via redirects 301 e sitemap dinâmico.

## Nova arquitetura de rotas

```text
/                              Home (hub: agência + 2 produtos + conteúdo)
/agencia                       Landing dedicada da agência
/contato                       Contato/briefing

/produtos                      Vitrine dos 2 produtos
/produtos/ai-operator-kit      → hoje /kit (mantém EN)
/produtos/operator-curso       → hoje /curso-ia-operator (PT, premium)

/conteudos                            Hub editorial (linka pros 2 clusters)
/conteudos/ia-empresarial             Cluster A (alimenta agência)
/conteudos/ia-empresarial/:slug       claude-code, mcp, claude-skills, ia-escalar
/conteudos/operador-ia                Cluster B (alimenta Kit)
/conteudos/operador-ia/:slug          prompts, retrato, tdah, youtube, produto-sugerido

/p/:slug                       Propostas privadas (já existe, vira único caminho)
/c/:slug                       Contratos privados (novo, mesmo padrão)

/politica-de-privacidade
/termos-de-uso

# Internas (noindex, fora do menu)
/admin/*, /relatorio/*, /preview/:slug, /briefing-alek
```

## Rotas removidas com redirect 301

| De | Para |
|---|---|
| `/curso`, `/modulos`, `/materiais` | `/produtos/operator-curso` |
| `/modulos/1-premium`, `/2-premium`, `/3-premium` | `/produtos/operator-curso#modulo-N` |
| `/kit`, `/kit/content` | `/produtos/ai-operator-kit` |
| `/curso-ia-operator` | `/produtos/operator-curso` |
| `/propostas/{9 slugs}` | `/p/{slug}` |
| `/propostas/contrato-*` (3) | `/c/{slug}` |
| `/conteudos/{5 posts operador}` | `/conteudos/operador-ia/{slug}` |
| `/conteudos/{4 posts ia empresarial}` | `/conteudos/ia-empresarial/{slug}` |

Redirects via `<Navigate replace>` no React Router + canonical na nova URL.

## Plano em 5 fases (deploy seguro entre cada uma)

### Fase 1 — SEO base e sitemap dinâmico (zero risco visual)
- Criar `scripts/generate-sitemap.ts` com hooks `predev`/`prebuild`
- Sitemap só com rotas públicas
- Atualizar `robots.txt` para nova estrutura
- Verificar canonical via `SEO.tsx` em todas as rotas

### Fase 2 — Hub de produtos + nova home
- Criar `/produtos` (vitrine: card Kit + card Curso)
- Mover `/kit` → `/produtos/ai-operator-kit`, `/kit/content` embutido
- Mover `/curso-ia-operator` → `/produtos/operator-curso`
- Criar `/agencia` (clone da home atual)
- Reescrever `/` como hub coeso (3 blocos: agência, produtos, conteúdo)
- `<Navigate>` em todas URLs antigas
- Atualizar `AgencyNav` e `Footer`

### Fase 3 — Consolidação curso/módulos
- Mover `Modulo1/2/3Premium` para seções com âncora `#modulo-N` dentro de `/produtos/operator-curso`
- Preservar `localStorage` de progresso (premium-module-learning-system)
- Deletar `Curso.tsx`, `Modulos.tsx`, `Materiais.tsx`, 3× `Modulo*Premium.tsx`
- Redirects das URLs antigas

### Fase 4 — Privatização de propostas e contratos
- Estender `/p/:slug` para todos os 9 slugs (já existe via `PropostaPublica.tsx`)
- Criar `/c/:slug` análogo para os 3 contratos
- Remover 9 + 3 rotas hardcoded em `App.tsx` (componentes ficam, são renderizados pelo wrapper)
- `noindex,nofollow` garantido em `/p/*` e `/c/*`
- URLs antigas continuam via `<Navigate>` por 6 meses

### Fase 5 — Reestrutura editorial em 2 clusters
- Criar 2 hub pages: `/conteudos/ia-empresarial` e `/conteudos/operador-ia`
- Cada hub: lista de posts + breadcrumb + JSON-LD `CollectionPage`
- Mover 9 posts para sub-rotas (componentes ficam, muda rota e canonical)
- `/conteudos` vira meta-hub apontando pros 2 clusters
- Internal linking: Cluster A → `/agencia`, Cluster B → `/produtos/ai-operator-kit`
- Redirects 301

## SEO checklist por fase

- [ ] Canonical aponta pra NOVA URL mesmo quando acessada pela antiga
- [ ] Sitemap regenerado
- [ ] `robots.txt` atualizado
- [ ] `<Helmet>`/SEO com title, description, og:* em cada rota nova
- [ ] JSON-LD: `Article` em posts, `Product` no Kit/Curso, `Organization` na home, `BreadcrumbList` em hubs e posts
- [ ] Internal links atualizados (Header, Footer, CTAs)
- [ ] Build verde + QA visual das rotas tocadas

## O que NÃO mexo
- Three.js no hero
- Sistema de relatórios (`/relatorio/*`, `/admin/*`)
- Stripe checkout
- Briefing Alek
- Copy/textos das páginas (só estrutura e rotas)

## Sugestão
Começar pela **Fase 1** porque é base zero-risco para todas as outras. Posso fazer 1+2 juntos, ou ir uma fase por vez. Você decide o ritmo.
