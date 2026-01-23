

# Plano de Ajuste - Bloco "10x" para Produtividade

## Objetivo
Trocar a abordagem apelativa "10x multiplique seu faturamento" por uma mais tangível e real: **comparação de produtividade entre agente IA vs trabalho manual**.

---

## Situação Atual (linhas 846-857)

```
- Número: "10x"
- Título: "Multiplique seu Faturamento"
- Texto: "Com agentes trabalhando 24/7..."
```

---

## Nova Abordagem

### Conceito: Mostrar a Realidade

Em vez de prometer "10x faturamento", vamos mostrar **dados reais de produtividade**:

**Trabalho Manual (uma pessoa):**
- Envia ~50 mensagens personalizadas/dia
- Disponível 8h comerciais
- Responde quando consegue
- 1 pessoa = custo fixo de salário

**Agente IA:**
- Envia 3.000+ mensagens/dia (a base inteira)
- Disponível 24/7, inclusive feriados
- Responde em segundos, qualquer horário
- Custo fixo de R$ 2.200/mês

---

## Mudanças no Card

### Número/Destaque
**Antes:** "10x"
**Depois:** Visual comparativo ou ícone de "⚡ vs 🐢"

### Título
**Antes:** "Multiplique seu Faturamento"
**Depois:** "Produtividade Real: IA vs Manual"

### Texto
**Antes:** 
"Com agentes trabalhando 24/7 e controle centralizado, você atende 10x mais clientes sem aumentar equipe..."

**Depois:**
"Um atendente envia ~50 mensagens personalizadas por dia. O agente IA envia para sua base inteira de 3.000 contatos em horas. Funciona 24/7, responde em segundos e nunca tira férias."

---

## Opção: Mini-comparativo Visual

Podemos transformar em um mini-comparativo lado a lado:

```text
+---------------------------+---------------------------+
|      👤 MANUAL            |      🤖 AGENTE IA         |
+---------------------------+---------------------------+
| ~50 mensagens/dia         | 3.000+ mensagens/dia      |
| 8h comerciais             | 24/7                      |
| Resposta em minutos/horas | Resposta em segundos      |
| Custo: CLT + encargos     | Custo fixo: R$ 2.200      |
+---------------------------+---------------------------+
```

---

## Detalhes Técnicos

### Arquivo
`src/pages/PropostaPromotrip.tsx`

### Linhas a modificar
846-857

### Estrutura proposta

```tsx
<Card className="bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 border-emerald-500/30 ...">
  <CardContent className="p-6">
    {/* Ícone comparativo */}
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="text-2xl">👤</span>
      <span className="text-emerald-400 font-bold">vs</span>
      <span className="text-2xl">🤖</span>
    </div>
    
    <h3 className="text-xl font-bold text-white mb-3 text-center">
      Produtividade Real
    </h3>
    
    {/* Mini comparativo */}
    <div className="grid grid-cols-2 gap-3 text-sm">
      <div className="bg-slate-800/50 p-3 rounded-lg">
        <p className="text-gray-500 text-xs mb-1">Manual</p>
        <p className="text-white font-medium">~50 msg/dia</p>
      </div>
      <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30">
        <p className="text-emerald-400 text-xs mb-1">Agente IA</p>
        <p className="text-white font-medium">3.000+/dia</p>
      </div>
    </div>
    
    <p className="text-gray-400 text-sm mt-4 text-center">
      O agente trabalha 24/7, responde em segundos e nunca tira férias.
    </p>
  </CardContent>
</Card>
```

---

## Resultado Esperado

- Mensagem mais **honesta e tangível**
- Foco em **dados reais** de produtividade
- Conecta com a realidade deles (base de 3.000 contatos)
- Menos "promessa de vendedor", mais "proposta de parceiro"
- Pega no coração mostrando o trabalho que eles **não vão ter que fazer manualmente**

