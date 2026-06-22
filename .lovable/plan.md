# Diagnóstico IG v2 — mais profundidade, mais valor

Mantém o tom WhatsApp do Cauã. Expande o quiz, mostra resultado por pilar com benchmark, gera quick wins acionáveis, estima horas economizadas e oferece relatório por e-mail.

## 1. Perguntas reorganizadas por pilar (10 perguntas)

Cada resposta agora contribui pra um **pilar** específico (0-10 pontos por pilar). Pilares:

- **Processos** — repetição manual, padronização
- **Dados** — visibilidade, decisões com dado
- **Atendimento** — volume, SLA, qualificação
- **Comercial** — captação, follow-up, conversão
- **IA/Automação** — uso atual e maturidade
- **Pessoas** — sobrecarga, alocação

Distribuição (mantém perguntas atuais + 5 novas):

| # | Pergunta | Pilar |
|---|---|---|
| 1 | Papel na empresa | contexto (não pontua) |
| 2 | Tamanho do time | contexto (usado no cálculo) |
| 3 | Área que mais consome tempo | Processos |
| 4 | Uso atual de IA/automação | IA |
| 5 | Maior obstáculo | varia |
| 6 | **Volume de atendimentos/mês** | Atendimento |
| 7 | **Como acompanha resultados hoje** (planilha/BI/nada) | Dados |
| 8 | **Quantos leads/mês entram** | Comercial |
| 9 | **% do tempo do time em tarefas repetitivas** (slider 0-100) | Pessoas/Processos |
| 10 | **Já tentou automatizar antes?** (sim com sucesso / tentou e parou / nunca) | IA |

Pergunta de cargo continua só pra contexto. "Última!" muda pra "Última!" na #10.

## 2. Resultado por pilar (substitui card único)

Card "Mapa de maturidade" com **6 barras** (uma por pilar), cada uma com label, % e cor (verde/amarelo/vermelho conforme score). Score geral fica em cima como hoje (emoji + título + descrição).

```text
🟠 Operação em transição              68%
─────────────────────────────────────
Processos     ████████░░░░░░░░  45%
Dados         ██░░░░░░░░░░░░░░  18%   ← gargalo
Atendimento   ███████████░░░░░  72%
Comercial     █████████░░░░░░░  58%
IA            ██░░░░░░░░░░░░░░  20%   ← gargalo
Pessoas       █████░░░░░░░░░░░  35%
```

## 3. Benchmark vs mercado

Abaixo das barras, linha curta:

> "Empresas com **11-50 pessoas** costumam pontuar **52%** em maturidade. Você está **+16 pts acima** da média."

Valores fixos (tabela hardcoded por faixa de porte) — não precisa de chamada externa.

## 4. Quick wins 30/60/90 dias

Bloco "Próximos passos pra você" com 3 cards curtos baseados nos **2 pilares mais fracos**:

- **30 dias** — ação rápida (ex: "Mapear os 3 processos mais repetitivos do time")
- **60 dias** — implementação (ex: "Automatizar coleta de leads do WhatsApp + planilha única de funil")
- **90 dias** — escala (ex: "Agente IA de qualificação + dashboard semanal automático")

Mapeamento fixo: pra cada pilar fraco existe um conjunto de quick wins. Sem IA generativa — regra determinística pra ficar previsível.

## 5. Estimativa de horas economizadas

Cálculo:

```text
horas/mês = tamanho_time × 160h × (% tempo repetitivo / 100) × fator_automação
fator_automação = 0.35 (padrão conservador)
```

Mostra em destaque: "Potencial estimado: **~340h/mês** liberadas (≈ 2 pessoas em tempo integral)".
Quando o usuário escolhe "Mais de 200 pessoas" usa 200 como base; quando não responde slider, usa 30%.

## 6. Relatório completo por e-mail (opcional)

Depois do card de resultado, novo passo:

> "Quer que eu te mande esse diagnóstico completo + um plano detalhado por e-mail?"
> [ Sim, manda aí ]  [ Pode deixar ]

Se sim → input de e-mail → dispara app email (`diagnostico-completo`) com:
- Saudação + nome
- Score geral + barras por pilar
- Benchmark
- Quick wins 30/60/90 (mais detalhados que no card)
- Horas estimadas
- CTA pra WhatsApp

**Requer e-mail domain configurado**. Se não tiver, eu mostro o diálogo de setup antes de implementar o passo de e-mail (resto do quiz funciona normal).

## 7. Persistência

Tabela `quiz_leads` ganha colunas:
- `pillar_scores` jsonb — `{ processos: 45, dados: 18, ... }`
- `email` text nullable
- `team_size` text nullable
- `estimated_hours_saved` integer nullable
- `report_sent_at` timestamptz nullable

Edge function `capture-quiz-lead` aceita esses campos novos (todos opcionais pra não quebrar). Nova edge function `send-quiz-report` (ou reaproveita `send-transactional-email`) dispara o e-mail e marca `report_sent_at`.

## 8. UI / tom

- Mantém bolhas WhatsApp, mesma cara
- O card de resultado fica mais alto (mais conteúdo), com scroll natural
- Pilar fraco ganha pequeno badge "gargalo" laranja
- Tudo em PT-BR, mesmo tom do Cauã

## Arquivos afetados

- `src/pages/DiagnosticoIG.tsx` — perguntas, lógica de scoring por pilar, card expandido, passo de e-mail
- `src/data/diagnosticoIG.ts` (novo) — perguntas, mapa pilar→quick wins, benchmarks por porte
- Migration: novas colunas em `quiz_leads`
- `supabase/functions/capture-quiz-lead/index.ts` — aceitar novos campos
- `supabase/functions/_shared/transactional-email-templates/diagnostico-completo.tsx` (novo) + registry
- Possível setup de e-mail domain antes (se ainda não tiver)

## Fora de escopo

- Não muda nada nas propostas Positivo/Burati
- Não muda outras rotas
- Sem IA generativa — todo conteúdo é determinístico (rápido, previsível, sem custo de inferência)
