# Plano — Refino visual /agencia

## Diagnóstico

**1. Cards "cinzas e sem harmonia"**
O `SoftCard` foi desenhado pra fundo escuro (`bg-white/[0.03]`, `border-white/10`). Os overrides globais traduzem isso pra `rgba(26,26,26,0.04)` sobre cream, resultando em blocos quase invisíveis, sem hierarquia e sem peso visual. Falta cor de superfície, sombra suave e ritmo.

**2. Briefing "horroroso"**
`EnhancedInteractiveBriefing` (457 linhas) usa:
- Confetti com cores neon (cyan/purple/pink) que brigam com o laranja Burati
- Emojis (🛒⚙️💼) misturados em cards — quebra a estética editorial
- Botões e gradientes pensados para tema escuro
- Step indicator e cards de opção com classes dark que viram blocos cinzas

## Mudanças

### Etapa A — Refino do SoftCard (afeta Home + Agência)

Reescrever `src/components/fluxrow/SoftCard.tsx` com tokens próprios da paleta Burati, sem depender dos overrides:

- **Surface:** `#FAF8F2` (cream levemente mais claro que o fundo `#F5F3EE`) → cria separação real
- **Border:** `rgba(26,26,26,0.08)` → linha fina editorial
- **Shadow:** `0 1px 2px rgba(26,26,26,0.04), 0 8px 24px -12px rgba(26,26,26,0.08)` → flutuação sutil
- **Hover (interactive):** border `rgba(255,103,9,0.35)` + shadow um pouco mais densa
- **Radius:** mantém `rounded-2xl`

Resultado: cards com presença sem virar bloco pesado. Hierarquia clara contra o fundo.

### Etapa B — Reconstrução do Briefing

Substituir `EnhancedInteractiveBriefing` por um novo `BriefingFlow` na linguagem Burati. Manter a mesma lógica de perguntas (i18n keys + `sessionStorage` + WhatsApp ao fim), trocar apenas a casca visual.

Estrutura nova:
```text
┌─────────────────────────────────────────────┐
│  PROGRESS · 02 / 05         ← voltar        │
├─────────────────────────────────────────────┤
│                                             │
│   Pergunta 02                               │
│   Qual o seu maior objetivo?                │
│   subtítulo discreto em DM Mono             │
│                                             │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│   │ Leads    │ │ Vendas   │ │ Atend.   │   │
│   │ desc...  │ │ desc...  │ │ desc...  │   │
│   └──────────┘ └──────────┘ └──────────┘   │
│                                             │
│              [continuar →]                  │
└─────────────────────────────────────────────┘
```

Decisões:
- **Sem emojis nos cards** (mantém ícones lucide pequenos, monocromáticos)
- **Sem confetti neon** → tela final com `Sparkles` em laranja e mensagem editorial
- **Step indicator** vira barra fina cream + segmento laranja preenchendo
- **Cards de opção** usam o novo SoftCard com estado `selected` (border laranja sólido + fundo cream-claro)
- **Transições Typeform-style** (slide + fade) com `framer-motion` — já temos `fadeUp` em `@/lib/motion`
- **Tela final** com resumo das respostas + CTA WhatsApp (preserva tracking via `sessionStorage`)
- **Mantém `useTranslation`** — não mexe em copy nem keys

### Etapa C — Pequenos ajustes de harmonia

- `border-t border-white/10` nas SectionShells → trocar por `border-t border-[#1A1A1A]/8` direto na Agencia/Home pra não depender do override
- Hover dos links do nav: já está em laranja, manter
- Counters do hero da Agência: garantir que o `border-t` acima dos números fique no tom certo

## Detalhes técnicos

**Arquivos alterados:**
- `src/components/fluxrow/SoftCard.tsx` — reescrita completa
- `src/components/agency/BriefingFlow.tsx` — novo arquivo (~250 linhas)
- `src/pages/Agencia.tsx` — troca import `EnhancedInteractiveBriefing` → `BriefingFlow`
- `src/components/fluxrow/SectionShell.tsx` — ajuste do `divided` para cor neutra

**Arquivos preservados (não tocar):**
- `EnhancedInteractiveBriefing.tsx` fica no repo (caso queira reverter)
- i18n (`src/i18n/locales/*.json`) — usa as mesmas keys do briefing antigo

**Sem mudanças em:** rotas, dados, lógica de submit, tracking, SEO.

## Ordem de execução

1. SoftCard novo (impacto imediato Home + Agência)
2. BriefingFlow novo + swap no Agencia.tsx
3. Ajustes finos de divisores

Posso seguir?