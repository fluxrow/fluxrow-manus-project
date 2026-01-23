
# Plano de Ajuste - Propostas e Exemplos Corporativos

## Objetivo
1. Marcar o módulo "Criador de Propostas" como em finalização
2. Atualizar todos os exemplos para focar em viagens corporativas

---

## Mudanças

### 1. Seção "Criador de Propostas" (linhas 722-761)

**Situação atual:**
- Badge: "Exclusivo Fluxrow.Pro"
- Apresentado como funcionalidade completa e disponível

**Mudanças:**
- Adicionar badge: "Em Finalização"
- Manter a descrição do módulo (ele é valioso)
- Adicionar nota explicando que:
  - Estará disponível no plano contratado
  - Módulo será especialmente útil para a frente de Lazer futuramente
- Ajustar visual para indicar que está "em desenvolvimento"

### 2. Exemplos de Follow-up (linhas 625-649)

**Situação atual:**
```
Maria Silva
Gramado • Família
4 pessoas, Janeiro
Orçamento: R$ 8.000
```

**Mudar para (exemplo corporativo):**
```
Carlos Mendes
Diretor Financeiro • Tech Solutions
Evento corporativo, Março
Orçamento: R$ 25.000 (10 executivos)
```

### 3. Sugestão de Mensagem IA (linhas 680-686)

**Situação atual:**
```
"Oi Maria! 👋 Lembra do pacote para Gramado em janeiro que conversamos? 
Ainda temos disponibilidade para 4 pessoas..."
```

**Mudar para (contexto corporativo):**
```
"Olá Carlos! 👋 Sobre a convenção em São Paulo para março que conversamos, 
conseguimos condições especiais no hotel para os 10 executivos da Tech Solutions. 
O pacote inclui transfer executivo e sala de reunião. Posso enviar a proposta atualizada?"
```

### 4. Card de Notificação - Contexto (linhas 631-649)

**Situação atual:**
- Interesse: "4 pessoas, Janeiro"
- Lead de lazer/família

**Mudar para:**
- Interesse: "10 executivos, Março"
- Viagem corporativa com contexto B2B

### 5. Label do destino

**Situação atual:** 
- "Gramado • Família"

**Mudar para:**
- "Convenção SP • Corporate"

---

## Resumo Visual das Mudanças

```text
ANTES                              DEPOIS
+------------------------------+   +------------------------------+
| Criador de Propostas         |   | Criador de Propostas         |
| [Exclusivo Fluxrow.Pro]      |   | [Em Finalização]             |
| Funcionalidade completa      |   | + Nota: disponível no plano  |
|                              |   | + Obs: ideal para Lazer      |
+------------------------------+   +------------------------------+

+------------------------------+   +------------------------------+
| Maria Silva                  |   | Carlos Mendes                |
| Gramado • Família            |   | Diretor • Tech Solutions     |
| 4 pessoas, Janeiro           |   | 10 executivos, Março         |
| R$ 8.000                     |   | R$ 25.000                    |
+------------------------------+   +------------------------------+

+------------------------------+   +------------------------------+
| "Oi Maria! Lembra do         |   | "Olá Carlos! Sobre a         |
| pacote para Gramado em       |   | convenção em São Paulo para  |
| janeiro que conversamos?     |   | março que conversamos...     |
| 4 pessoas..."                |   | 10 executivos..."            |
+------------------------------+   +------------------------------+
```

---

## Arquivo a Modificar
`src/pages/PropostaPromotrip.tsx`

---

## Detalhes Técnicos

### Seção Criador de Propostas
- Trocar badge de "Exclusivo Fluxrow.Pro" para "Em Finalização"
- Adicionar nota sobre disponibilidade no plano
- Adicionar observação que o módulo será especialmente útil para a frente de Lazer
- Manter toda a descrição das funcionalidades (são reais e valiosas)

### Exemplos de Follow-up
- Trocar "Maria Silva" por "Carlos Mendes" (nome corporativo)
- Trocar "Gramado • Família" por "Convenção SP • Corporate" ou similar
- Trocar "4 pessoas, Janeiro" por "10 executivos, Março"
- Trocar "R$ 8.000" por "R$ 25.000" (orçamento corporativo mais realista)

### Sugestão de Mensagem IA
- Reescrever para contexto B2B
- Mencionar: convenção, executivos, transfer executivo, sala de reunião
- Tom mais formal/profissional

---

## Resultado Esperado

A proposta ficará 100% alinhada com o foco Corporate:
- Módulo de Propostas marcado como futuro (em finalização)
- Todos os exemplos refletindo viagens corporativas
- Nota sobre o módulo ser útil para Lazer prepara o terreno para expansão futura
