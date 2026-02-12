
# Briefing Inteligente - Redesign Conversacional

## Objetivo
Transformar o briefing de um formulario multi-step tradicional "pesado" em uma experiencia conversacional fluida estilo Typeform, com transicoes suaves, visual limpo e feedback contextual em tempo real.

## Problemas Identificados

- **6 etapas com excesso de informacao por card** (label + descricao + 3 tags de problema por opcao)
- **Zero animacao entre steps** - transicao abrupta sem feedback visual
- **Progress bar generica** sem indicacao visual dos steps
- **Cards densos demais** no mobile especialmente
- **Tela de conclusao fraca** - nao gera urgencia nem mostra valor
- **Falta de contexto progressivo** - usuario nao ve suas escolhas anteriores

## Solucao Proposta: Formato Conversacional com Transicoes

### 1. Layout "Uma Pergunta por Vez" (estilo Typeform)
- Cada step ocupa a tela inteira da secao (fullscreen dentro da section)
- Pergunta centralizada com tipografia grande e clara
- Opcoes apresentadas como botoes/pills limpos (sem descricoes longas)
- A descricao detalhada aparece apenas no hover/tap da opcao selecionada

### 2. Transicoes Animadas com Framer Motion
- AnimatePresence com slide vertical entre perguntas (entra de baixo, sai pra cima)
- Opcoes entram com stagger animation (uma a uma, 80ms delay)
- Ao selecionar, a opcao faz um pulse/scale antes de transicionar

### 3. Step Indicators Visuais
- Substituir a progress bar por step dots interativos (circulos clicaveis)
- Step ativo tem glow + scale maior
- Steps completados mostram icone de check com a cor do tema
- Steps futuros ficam dimmed

### 4. Cards de Opcao Simplificados
- Mostrar apenas: icone + label (primeira camada)
- Descricao aparece com animacao ao hover/focus
- Remover as tags de "problems" da visualizacao principal
- No mobile: opcoes em lista vertical com icone a esquerda

### 5. Resumo Lateral Progressivo (desktop)
- Mini sidebar/floating card mostrando as escolhas feitas ate agora
- Cada escolha anterior aparece como um chip clicavel (para editar)
- No mobile: resumo aparece como um drawer de baixo pra cima acessivel por um botao

### 6. Tela de Conclusao Premium
- Animacao de confetti/particles ao completar
- Card de resultado com "diagnostico" baseado nas escolhas
- Recomendacao personalizada (texto diferente por combinacao de respostas)
- CTA mais forte com contagem regressiva ou vagas limitadas
- Botoes de acao: WhatsApp + Agendar Call

### 7. Reducao de Steps
- Combinar "Nivel de automacao" + "Maior desafio" em um unico step com sub-selecao
- Resultado: 5 steps ao inves de 6, fluxo mais rapido

## Detalhes Tecnicos

### Arquivo a editar
- `src/components/agency/EnhancedInteractiveBriefing.tsx` (rewrite completo)

### Dependencias existentes utilizadas
- `framer-motion` (ja instalado) - AnimatePresence, motion.div para transicoes
- `lucide-react` (ja instalado) - icones dos steps e opcoes
- Tailwind CSS para styling

### Estrutura do Componente

```text
EnhancedInteractiveBriefing
+-- Section container (fullscreen-like, min-h-[80vh])
+-- StepIndicator (dots navegaveis no topo)
+-- AnimatePresence (wrapper de transicao)
|   +-- QuestionStep (uma pergunta por vez)
|       +-- Titulo animado
|       +-- OptionGrid (opcoes simplificadas com stagger)
|       +-- BackButton (sutil, posicao inferior)
+-- SelectionSummary (floating card, desktop only)
+-- CompletionScreen (com diagnostico + CTA)
```

### Animacoes Principais
- **Entre steps**: `motion.div` com `initial={{ opacity: 0, y: 40 }}`, `animate={{ opacity: 1, y: 0 }}`, `exit={{ opacity: 0, y: -40 }}`
- **Opcoes (stagger)**: cada opcao com `transition={{ delay: index * 0.08 }}`
- **Selecao**: `whileTap={{ scale: 0.95 }}` + flash de cor antes de transicionar
- **Step dots**: `layoutId` para o indicador ativo se mover suavemente

### Dados Simplificados
- Manter as mesmas 5 perguntas (combinando steps 3+4)
- Opcoes: manter value/label/icon, mover description para tooltip/hover
- Remover array `problems` da renderizacao principal
