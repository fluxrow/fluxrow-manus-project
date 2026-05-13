## Objetivo

Aplicar a mesma linguagem visual da home (`/`) em todas as páginas públicas, removendo cores vibrantes (cyan/roxo/rosa neon, gradientes saturados, verde WhatsApp gritante) e padronizando tipografia, bordas e espaçamento.

A logo FLUXROW continua com gradiente cyan→roxo→rosa — é a única assinatura colorida do site.

## Páginas no escopo

- `/` (home) — referência, já está no padrão
- `/produtos` (ProdutosHub)
- `/produtos/ai-operator-kit` (AIOperatorKitSales)
- `/conteudos` + todas as `/conteudos/*` (8 artigos PT + 1 EN)
- `/agencia` (Agencia + componentes em `src/components/agency/`)
- `/blog` + `/blog/:slug`
- `/contato`
- `/politica-de-privacidade`, `/termos-de-uso`
- `Header`, `Footer` globais

**Fora do escopo:** propostas (`/propostas/*`, `/p/*`), contratos, relatórios, briefing, admin, kit reader, login.

## Sistema de design unificado

**Cores (atualizar `src/index.css` e `tailwind.config.ts`)**
- Background: `#080807` (já é o padrão na home)
- Texto: `white`, `white/65` (corpo), `white/40` (mono labels)
- Bordas: `white/5`, `white/10`, hover `white/25–30`
- Superfícies: `white/[0.02]` em cards, hover `white/[0.04]`
- CTA primário: fundo branco + texto `#080807` (sólido, sem gradiente)
- CTA secundário: borda `white/20` + texto branco
- Acento sutil: branco puro em hover/foco — sem cyan, sem magenta, sem roxo neon
- WhatsApp: trocar verde fluorescente por botão branco com ícone

**Tipografia**
- Display/H1–H3: Instrument Serif (já carregada na home via `font-serif`)
- Corpo: Space Grotesk (mantém)
- Labels/meta/eyebrows: DM Mono (`font-mono`), tracking 0.2em–0.3em, uppercase, `text-xs`
- Logo: Akony (intocada)

**Bordas e raios**
- `rounded-sm` em tudo (cards, botões, inputs) — abandonar `rounded-full`/`rounded-xl`/`rounded-3xl`
- Bordas finas 1px translúcidas, sem sombras coloridas

**Espaçamento**
- Containers `max-w-5xl`/`max-w-6xl` `mx-auto px-6`
- Seções `py-20`/`py-24` separadas por `border-t border-white/5`

**Animações**
- Remover partículas, grids flutuantes, splash cursor, gradientes animados, shimmer neon
- Manter só transições `transition-colors` e `transition-all` curtas no hover

## Plano de execução (em fases para revisão)

```text
Fase 1 — Fundação
  1. Atualizar src/index.css: tokens shadcn alinhados ao tema (background 0 0% 3%, 
     primary branco, border white/10), remover --accent-magenta/--accent-blue
  2. tailwind.config.ts: adicionar font-serif (Instrument Serif) + font-mono (DM Mono)
  3. Refatorar Header global e Footer global no estilo da home
     (remover botão verde WhatsApp do Footer atual)

Fase 2 — Páginas marketing principais
  4. /produtos (ProdutosHub)
  5. /produtos/ai-operator-kit (manter copy, trocar visual)
  6. /agencia + componentes em src/components/agency/

Fase 3 — Conteúdo
  7. /conteudos (hub) + 9 páginas de artigo
     (já estão parcialmente no padrão; padronizar TOC, FAQ, CTAs e cards)
  8. LeadCaptureForm: input/botão no padrão branco/translúcido
  9. /blog + /blog/:slug

Fase 4 — Auxiliares
 10. /contato, /politica-de-privacidade, /termos-de-uso
 11. SEO.tsx: revisar OG defaults se necessário
 12. Remover componentes obsoletos não usados (BackgroundEffects neon,
     splash-cursor, etc.) — só apaga o que ninguém importa
```

## Detalhes técnicos

- **Tokens HSL no `index.css`**: substituir `--primary: 263 70% 50%` (roxo) por `0 0% 100%` (branco) com `--primary-foreground: 0 0% 4%`. Atualizar `--border`, `--input`, `--ring` para tons neutros translúcidos.
- **Fontes**: adicionar `<link>` para Instrument Serif e DM Mono no `index.html` se ainda não estiverem; mapear no Tailwind como `font-serif` e `font-mono`.
- **FluxrowLogo**: mantém gradiente atual (decisão do usuário) — é a única assinatura colorida.
- **Compatibilidade**: páginas fora do escopo (propostas, contratos, relatórios) não são tocadas. Como elas usam classes Tailwind explícitas, não vão quebrar com a mudança de tokens shadcn — mas vou validar visualmente uma proposta após a Fase 1.
- **Sem mudanças de copy, rotas, lógica ou backend.** Só apresentação.

## Entregáveis por fase

Cada fase termina com preview navegável; você aprova antes da próxima. Começo pela Fase 1 (fundação + Header/Footer) porque ela já dá uma sensação visível em todo o site.
