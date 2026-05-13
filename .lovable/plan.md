## Auditoria Sênior de UI — Fluxrow (visão geral)

Olhei `/`, `/agencia`, `/produtos`, `/conteudos`, `/contato`, header, footer. A identidade nova (preto profundo, Instrument Serif, DM Mono, mono + acento gradiente do logo) é forte, mas a aplicação está irregular. Abaixo, o que vi e o que precisa virar prioridade.

---

### 1. Inconsistências críticas (corrigir primeiro)

**1.1 `/agencia` quebra a identidade do resto do site**

- Renderiza um "FLUXROW" gigante em gradiente neon ocupando ~40% do viewport, com borda em vidro escuro. Conflita visualmente com o tom editorial sóbrio da home.
- Header da página é diferente: nav em inglês ("Services / Cases / Process / Briefing / Contact"), toggle "🇧🇷 PT" e CTA "Get in Touch" (pílula preta) — enquanto o resto do site usa nav PT e CTA "Falar com a gente".
- Stats pills ("+118 automations / +835 leads / +2458 hours") aparecem soltas acima do título, sem hierarquia clara.

**Fix:** unificar com o `<Header>` global, traduzir copy default para PT (manter toggle PT/EN consistente no site todo), reduzir o título FLUXROW (de `text-8xl` pra `text-5xl/6xl`), reposicionar stats logo abaixo do subtítulo como métricas tipográficas (DM Mono, sem pílulas).

**1.2 `/produtos` mostra preço em USD com copy em PT**

- Headline e descrição em português, mas card de investimento exibe `$27 · one-time · instant access` e só uma linha pequena `No Brasil? R$ 147 BRL`.
- Quebra a regra de produto bilíngue: PT default deveria mostrar **R$ 147** com `?lang=en` para USD.

**Fix:** detectar idioma e moeda na fonte; PT → R$ 147 BRL grande, EN → $27 grande; toggle visível.

**1.3 Header inconsistente entre páginas**

- Home: 4 links (Produtos, Agência, Conteúdos, Contato), sem CTA.
- `/conteudos`, `/contato`: 6 links + "Início" + CTA "Falar com a gente" pílula branca.
- `/agencia`: outro header completamente diferente.

**Fix:** um único `<Header>` em todas as rotas públicas, com lógica de "active link" e CTA opcional via prop, não duplicação.

---

### 2. Hierarquia e ritmo (alto impacto, médio esforço)

**2.1 Home está vazia acima da dobra**

- Hero ocupa ~700px com só headline + sub + 2 CTAs. Em 1021×743 o usuário não vê nenhum sinal de "o que essa empresa entrega" sem rolar.
- Falta: 1 linha de prova social (logos de clientes ou métrica tipográfica), preview de produto/case ou tira numerada de "como funciona".

**Fix:** adicionar uma faixa fina logo abaixo do hero — 3–4 métricas (DM Mono, números grandes em serif), ou tira de logos discreta em `text-white/40`.

**2.2 Espaçamento vertical excessivo**

- Várias seções usam `py-24`/`py-32` em telas médias. Em 743px de altura, o usuário rola muito sem ganhar densidade de informação.
- Padronizar: hero `pt-20 pb-24`, seções `py-20 md:py-24`, divisores `border-t border-white/5`.

**2.3 Falta hierarquia tipográfica intermediária**

- Hoje só tem H1 serif gigante e body `text-lg text-white/65`.
- Adicionar: eyebrow (DM Mono uppercase tracking-widest text-xs `text-white/45`), H2 serif `text-3xl/4xl`, lead `text-xl text-white/75`, body `text-base text-white/65`, caption `text-sm text-white/50`.

---

### 3. Acessibilidade e legibilidade

**3.1 Contraste de texto secundário**

- `text-white/65` em fundo `#080807` dá ~7:1 (OK), mas `text-white/45`, `text-white/30`, `text-white/40` (usados em footer e captions) caem para ~3.5:1 ou menos — falham WCAG AA pra texto normal.

**Fix:** subir mínimos: caption usa `text-white/55` (≥4.5:1), labels mono usam `text-white/60`, dividers ficam em `border-white/8`.

**3.2 Foco visível**

- Não vi `focus-visible` ring custom em nenhuma página. Botões e links precisam de `focus-visible:ring-1 ring-white/40 ring-offset-2 ring-offset-[#080807]`.

**3.3 Tamanho mínimo de toque mobile**

- Vários CTAs e links de nav têm `py-2` — em mobile fica abaixo de 44px de altura.

---

### 4. Microinteração e polimento

**4.1 Botões sem estado**

- Botões primários (branco) e secundários (outline) não mostram hover/active no screenshot. Adicionar:
  - Primário: `hover:bg-white/90`, `active:scale-[0.98]`, `transition-all duration-150`.
  - Secundário (outline): `hover:border-white/30 hover:bg-white/5`.
  - Link textual: underline no hover com `decoration-white/30 underline-offset-4`.

**4.2 Cards de conteúdo (`/conteudos`)**

- Cards funcionam mas são estáticos. Adicionar `hover:border-white/15 hover:bg-white/[0.02]` + `group-hover:translate-x-1` na seta "Ler artigo →".

**4.3 Chat widget flutuante**

- O ícone de chat (canto direito) tem cor padrão azul e fundo branco — destoa total. Reestilizar pra `bg-white/10 text-white border border-white/15` ou esconder em telas onde não é prioridade.

**4.4 Logo gradiente vs identidade mono**

- O logo "FLUXROW" no header é gradiente cyan→roxo→rosa (decisão sua, mantida). Está OK como assinatura, mas evite repeti-lo em outras superfícies — só na marca + nos detalhes `gradient-accent-*` autorizados.

---

### 5. Componentes específicos


| Página       | Problema                                     | Recomendação                                                         |
| ------------ | -------------------------------------------- | -------------------------------------------------------------------- |
| `/` (home)   | Hero estático, sem prova                     | Métricas tipográficas + tira de logos opcional                       |
| `/agencia`   | Identidade off-brand, header próprio         | Unificar com `<Header>`, reduzir hero, integrar com tom editorial    |
| `/produtos`  | Moeda/idioma desalinhados                    | Implementar lógica i18n já memorizada                                |
| `/conteudos` | Cards sem hover, sem categorização visual    | Hover sutil + categoria como chip mono no topo                       |
| `/contato`   | Cards de canal sem ícone com peso suficiente | Aumentar ícone p/ 24px, adicionar tempo de resposta médio em DM Mono |
| `/blog`      | Não inspecionado a fundo                     | Verificar consistência com `/conteudos`                              |
| Footer       | Texto em `text-white/30` (falha AA)          | Subir para `text-white/55`                                           |


---

### 6. Plano de implementação sugerido (4 fases)

```text
Fase 1 — Correções críticas (1 sessão)
  ├─ Unificar Header em todas as rotas
  ├─ Refatorar /agencia hero (tipografia, stats, CTA)
  └─ Arrumar moeda/idioma em /produtos

Fase 2 — Hierarquia e densidade (1 sessão)
  ├─ Tokenizar escala tipográfica (eyebrow/H1/H2/lead/body/caption)
  ├─ Padronizar espaçamentos verticais
  └─ Adicionar prova social no hero da home

Fase 3 — Acessibilidade e microinteração (1 sessão)
  ├─ Subir contrastes para AA
  ├─ Estados de hover/focus/active em botões e cards
  └─ Reestilizar chat widget

Fase 4 — Polimento final (1 sessão)
  ├─ Revisão mobile (320–768px)
  ├─ Animações de entrada sutis (opacity + y) em headings
  └─ Snapshot baseline pros testes Playwright
```

---

### Detalhes técnicos

- Tokens novos no `index.css`: `--text-eyebrow`, `--text-caption`, `--text-lead`, alinhados com Tailwind `text-*` semânticos.
- `Header.tsx` precisa aceitar prop `cta?: { label, href }` opcional, removendo o header local de `/agencia`.
- `/produtos` usa o hook de i18n existente (memória `mem://architecture/internationalization-system`) para renderizar moeda condicional.
- Gradient accent fica restrito ao logo + classes `.gradient-accent-*` — guardrail já está nos testes.

---

**O que eu preciso de você antes de começar:**

1. Pode confirmar que quero unificar o header da `/agencia` com o do resto do site (perdendo a nav inglesa local "Services / Cases / Process / Briefing")? sim
2. Posso reduzir o "FLUXROW" gigante do hero da `/agencia` pra um título serif normal com a palavra em gradiente sutil? sim
3. Adiciono prova social na home (3–4 métricas tipográficas estilo DM Mono) ou prefere manter o hero clean como está? voce decide, voce é o expert de UI
4. Quer que eu execute todas as 4 fases em sequência ou pausa pra aprovação entre cada uma?  como preferir