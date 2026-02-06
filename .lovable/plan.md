

# Briefing Alek - Projeto Seara x Promova

## Visao Geral

Criacao de uma nova pagina `/briefing-alek` com design visual e fluxo logico para que a equipe de producao da Alek possa executar o projeto com tranquilidade.

---

## Estrutura da Pagina

### 1. Header Principal
- Badge: "Briefing de Producao"
- Titulo: "Projeto Seara x Promova"
- Subtitulo: "Taua Resort - Atibaia/SP"
- Produtora: Alek

### 2. Contexto Geral (Card destacado)
- Local: Taua Resort & Convention Atibaia
- Endereco: Rod. Dom Pedro I, Km 86 - Atibaia/SP
- Cliente final: Seara
- Agencia/Execucao: Promova
- Producao: Alek

### 3. Cronograma Visual (Timeline horizontal)
| Dia | Data | Foco | Duracao |
|-----|------|------|---------|
| Dia 08 | Making Off | Montagem e bastidores | 2h video + foto |
| Dia 10 | Evento | Captacao oficial | 4h video + foto |
| Dia 11 | Evento | Captacao oficial | 4h video + foto |

### 4. Video 01 - Promova (Card azul/cyan)
**Objetivo:** Conteudo institucional Promova

**Conceito:** "Do zero ao extraordinario"

**Captacao - Dia 08 (2h):**
- Equipe descarregando/montando
- Close em detalhes tecnicos
- Interacao do time
- Timelapse / planos acelerados
- Expressoes humanas

**Estilo de Camera:**
- Dinamico
- Planos fechados + medios
- Gimbal sempre que possivel
- Estetica documental

**Audio e Edicao (DESTAQUE ESPECIAL):**

```text
┌─────────────────────────────────────────────────────────────────┐
│  INICIO DO VIDEO (0:00 - ~0:30)                                 │
│  ═══════════════════════════════════════════════════════════    │
│                                                                 │
│  🎧 MODO ASMR / SOM AMBIENTE                                    │
│                                                                 │
│  - SEM trilha sonora                                            │
│  - Foco total nos sons reais:                                   │
│    • Ferramentas sendo usadas                                   │
│    • Passos no chao                                             │
│    • Estruturas sendo encaixadas                                │
│    • Conversas abafadas ao fundo                                │
│    • Fitas sendo puxadas                                        │
│    • Metal batendo                                              │
│                                                                 │
│  Sensacao: intimidade, realidade, "estar la"                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  TRANSICAO (~0:30)                                              │
│  ═══════════════════════════════════════════════════════════    │
│                                                                 │
│  🔊 ENTRADA DA TRILHA = "O PAU TORA"                            │
│                                                                 │
│  - Trilha entra de forma impactante                             │
│  - Pode coincidir com um corte forte                            │
│  - Sugestao: sincronizar com uma acao (ex: luz acendendo,       │
│    estrutura sendo levantada, porta abrindo)                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  RESTANTE DO VIDEO (~0:30 - 1:30)                               │
│  ═══════════════════════════════════════════════════════════    │
│                                                                 │
│  🎵 TRILHA FORTE + RITMO ACELERADO                              │
│                                                                 │
│  - Musica com crescimento progressivo                           │
│  - Cortes rapidos                                               │
│  - Transicoes modernas                                          │
│  - Final epico com espaco pronto                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Nota para Captacao de Audio:**
- Gravar audio ambiente limpo durante a montagem
- Microfone captando detalhes sonoros
- Sons isolados para ter opcoes na edicao

**Entrega:**
- Vertical 9:16
- Ate 1min30
- Instagram / LinkedIn / Portfolio

### 5. Video 02 - Seara (Card violeta/roxo)
**Objetivo:** Aftermovie institucional Seara

**Conceito:** "A experiencia vivida"

**Captacao - Dias 10 e 11 (4h + 4h):**
- Visao geral do evento
- Detalhes cenografia/iluminacao
- Pessoas interagindo
- Reacoes espontaneas
- Close elementos Seara
- Momentos-chave

**Estilo de Camera:**
- Cinematografico
- Planos abertos + closes sensoriais
- Movimento suave
- Estetica premium

**Edicao:**
- Ritmo envolvente
- Musica com identidade forte
- Foco em experiencia real

**Entrega:**
- Vertical 9:16
- Ate 1min30
- Institucional Seara

### 6. Fotografia (Card verde/teal)
**Todos os dias:**
- Ate 50 fotos/dia
- Estilo documental + institucional
- Verticais prioritariamente
- Foco: pessoas, detalhes, ambiente, marca

### 7. Especificacoes Tecnicas (Card slate)
**Videos:**
- Formato: MP4 / H.264 ou H.265
- Resolucao: 4K
- Aspecto: 9:16 (vertical)
- Audio: Captar som ambiente limpo (essencial para Video Promova)

**Fotos:**
- Formato: JPEG alta resolucao
- RAW sob consulta

### 8. Checklist Resumo (Footer visual)
Cards de checklist para cada dia com os itens principais

---

## Arquivos a Criar

| Arquivo | Descricao |
|---------|-----------|
| `src/pages/BriefingAlek.tsx` | Pagina principal do briefing |

## Arquivo a Modificar

| Arquivo | Alteracao |
|---------|-----------|
| `src/App.tsx` | Adicionar rota `/briefing-alek` |

---

## Design Visual

- Background: Gradiente dark (slate-950 via purple-950)
- Efeitos: Blur orbs animados (consistente com outras paginas)
- Cards coloridos por tipo de conteudo
- Timeline visual para cronograma
- Icones Lucide para cada secao
- Botao BackToHomeButton padrao
- Responsivo mobile-first
- **Secao de Audio/Edicao do Video Promova em destaque especial** com visual diferenciado (borda destacada, icone de fone de ouvido)

## Cores por Secao

| Secao | Cor Principal |
|-------|---------------|
| Video Promova | Cyan/Blue |
| Video Seara | Violet/Purple |
| Fotografia | Teal/Green |
| Specs Tecnicas | Slate/Gray |
| Cronograma | Amber/Orange |
| Destaque ASMR | Gradient Cyan-Purple com borda animada |

