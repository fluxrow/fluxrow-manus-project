
# Personalização da Proposta com Dados Reais do Teresópolis Shopping

## Dados Reais Coletados

| Informação | Valor Real |
|------------|------------|
| **Endereço** | Rua Edmundo Bittencourt, 101 - Várzea, Teresópolis - RJ, CEP 25953-030 |
| **Telefone** | (21) 2643-3995 |
| **Inauguração** | 1995 |
| **ABL** | 9.000 m² |
| **Operações** | 80 lojas |
| **Lojas Âncoras** | Lojas Americanas e Renner |
| **Cinema** | 4 salas de cinema (em breve 1 VIP) |
| **Fluxo mensal** | 360 mil clientes/mês |
| **Fluxo veículos** | 19 mil veículos/mês |
| **Serviços** | Fraldário, Achados e Perdidos, Caixa Eletrônico, Bicicletário, Estacionamento coberto com Valet Parking, Vaga Verde, Vaga Autista, Wi-Fi grátis |
| **Pet Friendly** | Sim |
| **Instagram** | @teresopolisshopping (oficial) |

---

## Arquivos a Modificar

### 1. SolutionSection.tsx - Simulação de Chat

**Atualizar conversa simulada com dados reais:**

```
Antes: "Vocês tem loja da Samsung?"
Depois: "Vocês tem Renner?" (loja âncora real)

Antes: "A Samsung fica no 2º piso..."
Depois: "Sim! A Renner é uma das nossas lojas âncoras e fica no térreo. É a única Renner da cidade! Posso ajudar com mais algo?"
```

---

### 2. ScopeB2CSection.tsx - Exemplos de Perguntas B2C

**Atualizar todas as respostas com dados reais:**

| Campo | Valor Atualizado |
|-------|------------------|
| Horários | "O Teresópolis Shopping funciona de segunda a sábado das 10h às 22h, e domingos das 14h às 20h!" (manter, está correto) |
| Lojas | "Sim! A Renner é uma das nossas lojas âncoras, no térreo. Também temos Lojas Americanas! Tel: (21) 2643-3995" |
| Wifi | "Sim! Wi-Fi gratuito em todo o shopping. Conecte-se e aproveite!" |
| Estacionamento | "Estacionamento coberto com Valet Parking disponível. Maior estacionamento da região! Aceitamos cartão e Pix" |
| Cinema | "Sim! Temos 4 salas de cinema, as únicas da cidade! Em breve, 1 sala VIP. Confira a programação no site!" |
| Localização | "Estamos na Rua Edmundo Bittencourt, 101 - Várzea. A 90km do Rio de Janeiro, no coração da cidade!" |
| Achados e Perdidos | "Procure na Central de Atendimento. Também temos Fraldário, Bicicletário e Caixa Eletrônico!" |

---

### 3. ProblemSection.tsx - Mensagens do WhatsApp

**Atualizar perguntas simuladas para refletir dúvidas reais:**

```javascript
const whatsappMessages = [
  { name: "João", message: "Que horas abre domingo?", time: "10:23" },
  { name: "Maria", message: "Tem Renner aí?", time: "10:24" },
  { name: "Pedro", message: "Tem valet parking?", time: "10:25" },
  { name: "Ana", message: "Quantas salas de cinema?", time: "10:26" },
  { name: "Carlos", message: "Posso levar meu pet?", time: "10:27" },
  { name: "Lucia", message: "Qual o CEP?", time: "10:28" },
  { name: "Roberto", message: "Tem Americanas?", time: "10:29" },
  { name: "Fernanda", message: "Tem wifi grátis?", time: "10:30" },
];
```

---

### 4. GamificationSection.tsx - Ranking de Lojistas

**Atualizar com lojas reais do shopping:**

```javascript
const ranking = [
  { position: 1, name: "Renner", points: 847, badge: "🥇", highlight: true, label: "Loja do Mês" },
  { position: 2, name: "Lojas Americanas", points: 623, badge: "🥈", highlight: false },
  { position: 3, name: "Cine Show", points: 512, badge: "🥉", highlight: false },
  { position: 4, name: "Praça de Alimentação", points: 489, badge: "4", highlight: false },
  { position: 5, name: "O Boticário", points: 456, badge: "5", highlight: false },
];
```

---

### 5. ScopeB2BSection.tsx - Portal do Lojista

**Atualizar mockup com loja real:**

```
Antes: "Magazine Luiza - Loja 42"
Depois: "Renner - Loja Âncora"
```

**Atualizar comunicados com contexto real:**
```javascript
const mockCommunications = [
  { title: "Horário especial de Carnaval", date: "28/02", status: "new" },
  { title: "Vaga Verde - Novos procedimentos", date: "05/03", status: "new" },
  { title: "Campanha Dia das Mães 2025", date: "10/03", status: "new" },
];
```

---

### 6. IntelligenceSection.tsx - Dashboard

**Atualizar métricas com dados reais do shopping:**

```javascript
// Top Perguntas baseadas no fluxo real
const topQuestions = [
  { question: "Horário de funcionamento", count: 234, percentage: 100 },
  { question: "Onde fica a Renner?", count: 178, percentage: 76 },
  { question: "Tem estacionamento?", count: 156, percentage: 67 },
  { question: "Posso levar meu pet?", count: 132, percentage: 56 },
  { question: "Quantas salas de cinema?", count: 98, percentage: 42 },
];
```

---

## Resumo das Alterações

| Arquivo | Alteração |
|---------|-----------|
| `SolutionSection.tsx` | Atualizar chat simulado com Renner e dados reais |
| `ScopeB2CSection.tsx` | Atualizar todas as respostas com informações oficiais |
| `ProblemSection.tsx` | Atualizar mensagens do WhatsApp com perguntas reais |
| `GamificationSection.tsx` | Substituir lojas fictícias por lojas reais (Renner, Americanas) |
| `ScopeB2BSection.tsx` | Atualizar portal com Renner e comunicados contextualizados |
| `IntelligenceSection.tsx` | Atualizar dashboard com métricas baseadas no fluxo real (360k/mês) |

---

## Dados Específicos a Inserir

**Informações oficiais do Teresópolis Shopping:**
- Endereço: Rua Edmundo Bittencourt, 101 - Várzea
- CEP: 25953-030
- Telefone: (21) 2643-3995
- 80 operações
- 360 mil clientes/mês
- 4 salas de cinema (únicas da cidade)
- Lojas âncoras: Renner e Lojas Americanas
- Única Renner da cidade
- Pet Friendly
- Wi-Fi gratuito em todo o shopping
- Valet Parking disponível
- Vaga Verde e Vaga Autista
- Fraldário, Bicicletário, Caixa Eletrônico
- Maior estacionamento da região
- 90km do Rio de Janeiro

**Total: 6 arquivos modificados**
