
# Planos com Upgrades Visíveis + Detalhamento Completo

## Resumo das Alterações

Transformar o `InvestmentSection.tsx` para mostrar **múltiplos planos lado a lado**, deixando claro o que está incluso no plano inicial e quais são as opções de upgrade. Também adicionar as informações de horas de treinamento ao `DeliveryTimelineSection.tsx`.

---

## Nova Estrutura de Planos

```text
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            ESCOLHA O PLANO IDEAL                                     │
├──────────────────────────┬──────────────────────────┬────────────────────────────────┤
│       STARTER            │       GROWTH             │         SCALE                  │
│     (Plano Atual)        │      (Upgrade)           │       (Upgrade)                │
│      RECOMENDADO         │                          │                                │
├──────────────────────────┼──────────────────────────┼────────────────────────────────┤
│   R$ 4.200/mês           │   R$ 5.800/mês           │   R$ 7.400/mês                 │
│   + 3% fee               │   + 3% fee               │   + 3% fee                     │
├──────────────────────────┼──────────────────────────┼────────────────────────────────┤
│   50.000 msgs/mês        │   100.000 msgs/mês       │   200.000 msgs/mês             │
│   45 vendedores          │   80 vendedores          │   150 vendedores               │
│   48h treinamento        │   48h treinamento        │   48h treinamento              │
├──────────────────────────┼──────────────────────────┼────────────────────────────────┤
│   Ideal para começar     │   Para escalar rápido    │   Operação em grande escala    │
└──────────────────────────┴──────────────────────────┴────────────────────────────────┘

          💡 Upgrade disponível a qualquer momento durante o contrato
```

---

## Detalhamento dos Planos

| Plano | Mensalidade | Mensagens/mês | Vendedores | Treinamento | Indicado para |
|-------|-------------|---------------|------------|-------------|---------------|
| **Starter** | R$ 4.200/mês | 50.000 | 45 | 48h | Iniciar operação |
| **Growth** | R$ 5.800/mês | 100.000 | 80 | 48h | Escalar resultados |
| **Scale** | R$ 7.400/mês | 200.000 | 150 | 48h | Grande escala |

**Nota**: O fee de 3% permanece igual em todos os planos.

---

## Arquivos a Modificar

### 1. InvestmentSection.tsx

**Mudanças principais:**
- Criar array de planos com dados estruturados
- Layout de 3 cards lado a lado (responsivo em mobile)
- Destaque visual no plano "Starter" como recomendado
- Badge "UPGRADE" nos planos Growth e Scale
- Informações claras: mensagens, vendedores, horas de treinamento
- Destaque no final: "Upgrade disponível a qualquer momento"

**Estrutura do código:**
```tsx
const plans = [
  {
    name: "Starter",
    recommended: true,
    price: "4.200",
    messages: "50.000",
    users: "45",
    training: "48h",
    description: "Ideal para iniciar a operação"
  },
  {
    name: "Growth",
    recommended: false,
    price: "5.800",
    messages: "100.000",
    users: "80",
    training: "48h",
    description: "Para escalar os resultados"
  },
  {
    name: "Scale",
    recommended: false,
    price: "7.400",
    messages: "200.000",
    users: "150",
    training: "48h",
    description: "Operação em grande escala"
  }
];
```

**Elementos visuais:**
- Card Starter: borda verde (emerald), badge "RECOMENDADO"
- Card Growth: borda azul (blue), badge "UPGRADE"
- Card Scale: borda roxa (purple), badge "UPGRADE"
- Cada card mostra: preço, mensagens, vendedores, horas de treinamento
- Ícones: MessageSquare, Users, Clock, Percent

---

### 2. DeliveryTimelineSection.tsx

**Mudanças principais:**
- Atualizar o destaque de treinamento no final
- Especificar "48 horas de treinamento presencial"
- Adicionar subdescription: "~8 horas por mês"

**Alteração no bloco de destaque (linhas 175-184):**
```tsx
<div className="mt-8 p-6 bg-gradient-to-r from-amber-900/30 to-orange-900/20 rounded-2xl border border-amber-500/30 text-center">
  <div className="flex items-center justify-center gap-2 text-amber-300 font-semibold text-lg mb-2">
    <MapPin className="w-5 h-5" />
    <Clock className="w-5 h-5" />
    <span>48 horas de treinamento presencial na Evolua</span>
  </div>
  <p className="text-gray-300 max-w-2xl mx-auto">
    ~8 horas por mês, lado a lado com nossos especialistas. 
    Mostramos na prática as ferramentas que usamos para criar e evoluir o sistema.
  </p>
</div>
```

---

## Layout Responsivo

- **Desktop**: 3 cards lado a lado (grid-cols-3)
- **Tablet**: 3 cards lado a lado (pode ser menor)
- **Mobile**: 1 card por linha (grid-cols-1)

---

## O Que Cada Card do Plano Mostra

```text
┌─────────────────────────────┐
│  [BADGE: RECOMENDADO]       │
│                             │
│       STARTER               │
│                             │
│     R$ 4.200/mês            │
│     + 3% fee                │
│                             │
├─────────────────────────────┤
│  📧 50.000 mensagens/mês    │
│  👥 45 vendedores           │
│  ⏰ 48h de treinamento      │
├─────────────────────────────┤
│  Ideal para iniciar         │
│  a operação                 │
└─────────────────────────────┘
```

---

## Benefícios Desta Abordagem

1. **Transparência**: Cliente vê todas as opções de uma vez
2. **Ancoragem de Preço**: O Starter parece mais acessível comparado aos outros
3. **Facilita Upgrade**: Cliente já sabe quanto custa escalar
4. **Profissionalismo**: Proposta parece mais estruturada e madura
5. **Menos Perguntas**: "E se eu precisar de mais?" já está respondido

---

## O Que Está Incluso em TODOS os Planos

Manter lista abaixo dos cards:
- Operação completa do sistema
- Treinamento presencial na Evolua (48h)
- Transferência total ao final
- Sistema White Label
- Código-fonte no GitHub de vocês
- Fee de 3% sobre vendas fechadas

---

## Ícones a Usar

| Item | Ícone |
|------|-------|
| Mensagens | MessageSquare |
| Vendedores | Users |
| Treinamento | Clock |
| Fee | Percent |
| Recomendado | Star |
| Upgrade | ArrowUp |

---

## Resumo Final da Proposta

| Item | Starter | Growth | Scale |
|------|---------|--------|-------|
| Mensalidade | R$ 4.200 | R$ 5.800 | R$ 7.400 |
| Mensagens/mês | 50k | 100k | 200k |
| Vendedores | 45 | 80 | 150 |
| Treinamento | 48h | 48h | 48h |
| Fee | 3% | 3% | 3% |
| Duração | 6 meses | 6 meses | 6 meses |

Todos incluem: operação + treinamento presencial + transferência + código-fonte
