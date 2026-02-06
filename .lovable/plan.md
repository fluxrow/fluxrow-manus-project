

# Atualização do Briefing Alek — Script e Contexto Arena 10

## Objetivo

Adicionar ao briefing existente:
1. **Contexto Estratégico da Arena 10** — para a equipe entender o que é o espaço
2. **Script de Narração OFF** — texto base para aprovação e execução
3. **Notas Obrigatórias de Captação** — mecânicas que precisam ser registradas

---

## Novas Seções a Adicionar

### 1. Card "Arena 10 - Seara Experience" (Contexto Estratégico)

Posicionar **antes do card Vídeo 02 - Seara**, com cor rosa/magenta para diferenciar.

**Conteúdo:**
- O que é: Mercado vivo e imersivo simulando PDV real
- 8 Categorias (Congelados, Frios, Açougue, Gourmet, Margarina, Linha Seca, Food Service, Loja Mais)
- Estrutura fechada com cobertura preta (isolamento sensorial)
- Zonas de áudio direcionais
- Dinâmica de engajamento (cartela de jornada + carimbos + brinde)

**Destaque visual:**
- Alerta: "Esta mecânica PRECISA ser captada obrigatoriamente"

---

### 2. Card "Script Base — Vídeo Seara" (Para Aprovação)

Posicionar **dentro ou logo após o card Vídeo 02**, com destaque especial (borda dourada/amarela) indicando que é para aprovação.

**Estrutura do Script:**

```text
┌─────────────────────────────────────────────────────────────────┐
│  ABERTURA                                                        │
│  ═════════════════════════════════════════════════════════════   │
│                                                                  │
│  "Na Arena 10 Seara Experience, o varejo deixa de ser           │
│   conceito e passa a ser prática."                              │
│                                                                  │
│  Imagens: impacto do estande, entrada, fluxo de pessoas         │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  DESENVOLVIMENTO                                                 │
│  ═════════════════════════════════════════════════════════════   │
│                                                                  │
│  "Aqui, dados se transformam em experiência.                    │
│   E execução se transforma em resultado."                       │
│                                                                  │
│  Cortes mostrando:                                              │
│  • Congelados com LED Touch                                     │
│  • Frios em sala imersiva + planogramas 1:1                     │
│  • Açougue com consultoria em tempo real via tablet             │
│  • Gourmet com apetite appeal                                   │
│  • Margarinas com navegação touch                               │
│  • Linha Seca com gamificação                                   │
│  • Food Service com soluções B2B                                │
│  • Loja Mais com inteligência regional                          │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  SENSORIALIDADE                                                  │
│  ═════════════════════════════════════════════════════════════   │
│                                                                  │
│  Cada bloco deve mostrar:                                       │
│  • Pessoas interagindo                                          │
│  • Reações                                                      │
│  • Toque nas telas                                              │
│  • Áudio ambiente                                               │
│  • Promotoras conduzindo                                        │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  ENGAJAMENTO                                                     │
│  ═════════════════════════════════════════════════════════════   │
│                                                                  │
│  "Mais do que visitar, os participantes vivenciam               │
│   a execução."                                                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Notas importantes:**
- Este vídeo DEVE TER NARRAÇÃO EM OFF
- Foco em entendimento, não apenas estética
- Todas as trilhas e áudios do circuito estarão disponíveis para edição

---

### 3. Card "Captação Obrigatória" (Alerta Visual)

Posicionar como um destaque de alerta (cor vermelha/laranja) dentro da seção do Vídeo Seara:

**Itens obrigatórios a captar:**
- Mecânica da cartela de jornada + carimbos
- Promotoras em ação (mais de 20 ativas)
- Participantes interagindo com as tecnologias
- Momento do brinde exclusivo
- Estande fechado com cobertura preta (impacto visual)

---

## Estrutura Visual Atualizada

```text
┌─────────────────────────────────────────────────────────────────┐
│  BRIEFING ALEK - PROJETO SEARA X PROMOVA                        │
├─────────────────────────────────────────────────────────────────┤
│  [Contexto Geral]                                               │
│  [Cronograma Visual]                                            │
│  [Vídeo 01 - Promova] (com ASMR)                                │
│                                                                  │
│  [NOVO] Arena 10 - Contexto Estratégico (Rosa/Magenta)          │
│                                                                  │
│  [Vídeo 02 - Seara] (Atualizado)                                │
│     └── [NOVO] Script Base para Aprovação (Dourado)             │
│     └── [NOVO] Captação Obrigatória (Alerta Laranja)            │
│                                                                  │
│  [Fotografia]                                                   │
│  [Especificações Técnicas] (atualizar com trilhas disponíveis)  │
│  [Checklist]                                                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Cores das Novas Seções

| Seção | Cor Principal |
|-------|---------------|
| Arena 10 - Contexto | Pink/Magenta (`pink-500`) |
| Script Base | Gold/Amber (`amber-400` border, slate bg) |
| Captação Obrigatória | Orange/Red (`orange-500` border) |

---

## Arquivo a Modificar

| Arquivo | Alteração |
|---------|-----------|
| `src/pages/BriefingAlek.tsx` | Adicionar 3 novas seções conforme estrutura acima |

---

## Resumo das Adições

1. **Seção Arena 10**: Contexto estratégico do espaço imersivo, 8 categorias, dinâmica de engajamento
2. **Seção Script Base**: Texto completo de narração OFF para aprovação e uso pelo video maker
3. **Seção Captação Obrigatória**: Checklist visual de cenas que PRECISAM estar no vídeo
4. **Atualização Specs Técnicas**: Nota sobre trilhas disponíveis para edição

