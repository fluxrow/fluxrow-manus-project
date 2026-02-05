
# Integrar DisplayCards na Seção "Como Trabalhamos"

## Visão Geral

Vamos substituir o layout atual de timeline por um design moderno de **cards empilhados com efeito hover**, mantendo todo o conteúdo das 4 etapas do processo visível e interativo.

---

## Componente DisplayCards

O componente fornecido cria um efeito de **cards empilhados em grade** onde:
- Cards ficam sobrepostos com offsets (translate-x, translate-y)
- Hover revela o card completo (remove grayscale e overlay)
- Transições suaves de hover

---

## Adaptações Necessárias

### 1. Criar Componente Customizado

Criar `src/components/ui/process-cards.tsx` baseado no DisplayCards, mas adaptado para:

| Original | Adaptado |
|----------|----------|
| 3 cards empilhados | 4 cards (etapas do processo) |
| Layout compacto | Layout mais amplo para desktop |
| Cores azuis | Cores por etapa (cyan, purple, green, yellow) |
| Ícone Sparkles | Ícones específicos (Search, Lightbulb, Rocket, TrendingUp) |

### 2. Estrutura do Card Adaptado

```
┌─────────────────────────────────┐
│  🔍  Briefing Inteligente       │  ← Ícone + Título
│                                 │
│  Entendemos seu negócio com um  │  ← Descrição principal
│  quiz interativo que mapeia     │
│  oportunidades e desafios.      │
│                                 │
│  Nossa IA analisa seu mercado,  │  ← Detalhes (visível no hover)
│  concorrência e objetivos...    │
│                                 │
│  Etapa 1 de 4                   │  ← Indicador de progresso
└─────────────────────────────────┘
```

### 3. Layout Desktop

Cards empilhados com offsets diagonais:

```
Card 1 [Briefing]
    Card 2 [Estratégia]
        Card 3 [Criação]
            Card 4 [Otimização]
```

Cada card tem:
- Offset crescente (translate-x e translate-y)
- Grayscale inicial (exceto o último)
- Remove grayscale e overlay no hover

### 4. Layout Mobile

Cards em lista vertical (como está hoje) para melhor usabilidade.

---

## Arquivos a Criar/Modificar

| Arquivo | Ação |
|---------|------|
| `src/components/ui/process-cards.tsx` | **Criar** - Componente DisplayCards adaptado |
| `src/components/agency/ProcessTimeline.tsx` | **Modificar** - Usar novo componente |

---

## Detalhes Técnicos

### ProcessCard Interface

```typescript
interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  step: number;
  totalSteps: number;
  color: "cyan" | "purple" | "green" | "yellow";
  className?: string;
}
```

### Cores por Etapa

| Etapa | Cor | Uso |
|-------|-----|-----|
| 1 - Briefing | Cyan | `text-cyan-500`, `from-cyan-500` |
| 2 - Estratégia | Purple | `text-purple-500`, `from-purple-500` |
| 3 - Criação | Green | `text-green-500`, `from-green-500` |
| 4 - Otimização | Yellow | `text-yellow-500`, `from-yellow-500` |

### Efeitos de Hover

1. Remove grayscale (`grayscale-[100%]` → `grayscale-0`)
2. Remove overlay (`before:opacity-100` → `before:opacity-0`)
3. Move para cima (`hover:-translate-y-4`)
4. Expande detalhes adicionais

### Animações

- `transition-all duration-500` para transições suaves
- Cards com `z-index` crescente para sobreposição correta
- Último card sempre colorido (sem grayscale inicial)

---

## Resultado Visual

**Desktop**: Cards empilhados em diagonal, revelando conteúdo completo no hover
**Mobile**: Lista vertical mantendo toda informação visível

Todas as informações (título, descrição, detalhes) serão visíveis sem precisar de scroll ou clique adicional - o hover apenas destaca e eleva o card.
