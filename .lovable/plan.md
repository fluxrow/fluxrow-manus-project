## Mudanças no Diagnóstico IG

### 1. Multi-resposta em 3 perguntas
Liberar seleção múltipla em: **Cargo**, **Dor (área que mais consome tempo)** e **Obstáculo atual**.

**Como vai funcionar no quiz (WhatsApp-style):**
- Cada opção vira um chip toggleável (selecionado = preenchido, não selecionado = outline).
- Botão "Confirmar" aparece quando há ≥1 selecionada e avança o passo.
- As demais 7 perguntas continuam single-select (avanço imediato ao clicar).

**Como vai funcionar no scoring:**
- Quando há múltiplas respostas, somam-se as contribuições por pilar e faz-se média ponderada normal no `computePillarScores` (já é média por pilar, então múltiplos inputs convivem bem).
- Bolha de "você respondeu" no chat mostra as escolhas separadas por vírgula.

### 2. Remover travessões do quiz e da tela de resultado
Varredura em `src/data/diagnosticoIG.ts` e `src/pages/DiagnosticoIG.tsx`:
- Substituir `—` (em dash) e `–` (en dash) por vírgula, ponto ou parênteses conforme o caso natural da frase.
- Não tocar no template de e-mail (`diagnostico-completo.tsx`) nem em outras páginas.

**Exemplos de troca:**
- "Sua operação tem margem real de melhoria. Já identifiquei áreas onde a IA pode reduzir custo e aumentar velocidade — sem precisar contratar mais ninguém."
  → "...aumentar velocidade, sem precisar contratar mais ninguém."
- "O próximo passo é claro e pode ser implementado em semanas." (sem travessão, ok)
- Quick wins: "Automatizar 1-2 etapas críticas com workflow (n8n, Zapier ou IA agente)." (hífen comum, mantém)
- Qualquer "—" usado como separador no card de resultado vira `.` ou `,`.

### Arquivos alterados
- `src/data/diagnosticoIG.ts` — marca `multi: true` nas 3 perguntas; limpa travessões nas copys.
- `src/pages/DiagnosticoIG.tsx` — UI de chips toggleáveis + botão Confirmar para passos multi; limpa travessões nas frases da página/resultado.

### Fora do escopo
- Banco, edge function, e-mail e benchmarks ficam intactos.
