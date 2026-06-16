# Migração visual: linguagem Burati GT → Fluxrow

Mantém a paleta dark Fluxrow (#080807, Instrument Serif, DM Mono) e importa só a **linguagem de composição** do Burati GT. Vou página a página, com aprovação entre cada uma.

## Sistema de design compartilhado (passo 0 — fundação)

Antes de tocar nas páginas, crio primitivas reutilizáveis em `src/components/fluxrow/`:

- **`SectionBadge`** — bolinha de accent + label uppercase tracked `[0.3em]`, padrão de abertura de toda seção.
- **`Counter`** — número que anima de 0 ao valor final via `framer-motion` + `useInView`, com `prefix`/`suffix`.
- **`SoftCard`** — wrapper `rounded-2xl border border-white/10 bg-white/[0.03] p-6/p-8` com hover sutil.
- **`SectionShell`** — `min-h-screen flex items-center px-6 sm:px-10 py-24`, grid `lg:grid-cols-2 gap-12 items-center`, com slot opcional de badge.
- **`fadeUp`** — variant motion compartilhado (já existe inline no Burati, vira `src/lib/motion.ts`).

Adaptação ao dark:
- Bordas Burati `#E5E5E0` → `border-white/10` (hover `white/20`).
- Fundos cream `#FAFAF7` → `bg-white/[0.02]` ou `bg-white/[0.04]` para "ilhas" dentro do dark.
- Accent fica o cyan/serif italic atual da Fluxrow (não importa o laranja Burati).

## Ordem de execução (uma por turno, com aprovação)

### Etapa 1 — Home (`src/pages/Index.tsx`)
- Hero ganha SectionBadge no kicker ("FLUXROW · SISTEMAS COM IA").
- Bloco STATS vira Counters animados em grid 2/4 colunas, mantendo `font-serif` + `gradient-accent-text`.
- "Para quem é" e demais seções viram `SectionShell` `min-h-screen` com grid 2-col (texto + visual/card).
- Cards dos caminhos A/B refatorados pra `SoftCard`.
- Mantém starfield/bg atual da home.

### Etapa 2 — Agência (`src/pages/Agencia.tsx`)
- Mesma fundação: SectionBadge em cada seção, SectionShell, SoftCard pra serviços.
- Métricas de resultado viram Counters.
- Grid 2-col alternando lado do visual (zigzag suave, igual Burati).

### Etapa 3 — Conteúdos + Blog
- `Conteudos.tsx`: hub com SoftCard grid pros artigos, SectionBadge por categoria.
- `Blog.tsx` + `BlogPost.tsx`: badge no topo, layout single-column respirado, related posts em SoftCard.

## Regras de execução

1. **Uma página por turno.** Termino, mostro, espero ok antes da próxima.
2. **Zero mudança de copy** (a menos que peça) — só estrutura visual.
3. **Zero mudança em rotas, lógica ou tracking.**
4. **Componentes do passo 0 são criados junto com a Etapa 1** (não em PR separado), pra você já ver eles em uso.
5. **Memory `mem://style/design-consistency-constraint`** continua válida — nada de SaaS tropes, fundo deep dark, serif + mono mantidos.

## Detalhes técnicos

- `framer-motion` já está no projeto (usado em Burati e outras propostas).
- Novos arquivos: `src/components/fluxrow/SectionBadge.tsx`, `Counter.tsx`, `SoftCard.tsx`, `SectionShell.tsx`, `src/lib/motion.ts`.
- Páginas editadas: `Index.tsx`, `Agencia.tsx`, `Conteudos.tsx`, `Blog.tsx`, `BlogPost.tsx`.
- Header/Footer/SEO permanecem intactos.

Quando aprovar, começo pela **fundação + Etapa 1 (Home)**.
