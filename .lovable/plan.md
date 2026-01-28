

# Ajustes na Proposta Comunica

## Resumo das Alterações

1. **Ajustar preço do plano Start** de R$ 450 para R$ 550
2. **Adicionar taxa de setup** de R$ 1.800,00 para todos os planos
3. **Incluir módulo de Relatórios e Baixas de Boletos** no sistema

---

## Arquivos a Modificar

### 1. PlansSection.tsx

**Alterações:**
- Mudar o preço do Start de "450" para "550"
- Adicionar campo `setup: "1.800"` em todos os planos
- Exibir a taxa de setup abaixo do preço mensal em cada card

**Estrutura atualizada dos planos:**
```text
┌──────────────┬──────────────┬──────────────┬──────────────┐
│    START     │    GROWTH    │     PRO      │    SCALE     │
├──────────────┼──────────────┼──────────────┼──────────────┤
│  R$ 550/mês  │  R$ 650/mês  │  R$ 850/mês  │  R$ 950/mês  │
│ Setup: 1.800 │ Setup: 1.800 │ Setup: 1.800 │ Setup: 1.800 │
├──────────────┼──────────────┼──────────────┼──────────────┤
│  Até 250     │  251 a 500   │  501 a 750   │  751 a 1000  │
│  NF/mês      │  NF/mês      │  NF/mês      │  NF/mês      │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

**Visual do setup:**
- Linha adicional em cada card: "+ Setup único: R$ 1.800"
- Texto em tom mais discreto (gray-400)
- Separado do preço mensal para clareza

---

### 2. ModulesSection.tsx

**Adicionar Módulo 06 - Relatórios e Baixas:**

```tsx
{
  number: "06",
  icon: BarChart3,  // ou FileCheck
  title: "Relatórios e Baixas",
  features: [
    "Dashboard de boletos enviados e pendentes",
    "Baixa manual ou automática de boletos pagos",
    "Relatórios por período, cliente e status",
    "Exportação em Excel/PDF"
  ]
}
```

Este novo módulo aparecerá na timeline após "Fila de Envios".

---

### 3. FeaturesSection.tsx

**Adicionar novas features relacionadas:**

```tsx
{ icon: FileCheck, label: "Baixa de boletos pagos" },
{ icon: PieChart, label: "Relatórios gerenciais" },
```

Ou ajustar os existentes para incluir:
- "Relatórios por período e cliente"
- "Baixa manual e automática de boletos"

---

## Detalhamento Visual

### Card de Plano (após alteração)

```text
┌─────────────────────────────┐
│         START               │
│                             │
│      R$ 550/mês             │
│   + Setup único: R$ 1.800   │
│                             │
├─────────────────────────────┤
│  📄 Até 250 NF/mês          │
├─────────────────────────────┤
│  Ideal para começar         │
│  a automatizar              │
└─────────────────────────────┘
```

### Novo Módulo na Timeline

```text
┌─────────────────────────────┐
│  06  RELATÓRIOS E BAIXAS    │
├─────────────────────────────┤
│  • Dashboard de boletos     │
│    enviados e pendentes     │
│  • Baixa manual/automática  │
│    de boletos pagos         │
│  • Relatórios por período,  │
│    cliente e status         │
│  • Exportação Excel/PDF     │
└─────────────────────────────┘
```

---

## Resumo de Alterações por Arquivo

| Arquivo | Alterações |
|---------|------------|
| `PlansSection.tsx` | Preço Start → 550, adicionar setup R$ 1.800 em todos |
| `ModulesSection.tsx` | Adicionar módulo 06 "Relatórios e Baixas" |
| `FeaturesSection.tsx` | Incluir "Baixa de boletos" e "Relatórios gerenciais" |

---

## Ícones a Usar

| Contexto | Ícone Lucide |
|----------|--------------|
| Relatórios | BarChart3 ou PieChart |
| Baixas | FileCheck ou CheckCircle2 |
| Exportação | Download |
| Dashboard | LayoutDashboard |

