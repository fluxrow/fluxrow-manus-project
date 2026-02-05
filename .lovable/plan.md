

# Adicionar Swipe Touch e Expansão de Descrição no Carousel

## Problemas Identificados

### 1. Falta de Suporte a Touch Swipe
O carousel atual usa apenas `overflow-x-auto` para scroll nativo. Não há eventos de drag/swipe com Framer Motion para uma experiência mobile mais fluida.

### 2. Descrição Não Expande
A descrição tem `line-clamp-2` (limita a 2 linhas) mas não há lógica para:
- Expandir ao hover (desktop)
- Expandir ao tap (mobile)

---

## Solução

### 1. Touch Swipe com Framer Motion

Usar `motion.div` com `drag="x"` e constraints para swipe nativo:

```tsx
<motion.div
  drag="x"
  dragConstraints={scrollContainerRef}
  dragElastic={0.1}
  onDragEnd={(e, info) => {
    if (info.offset.x > 100) scroll("left");
    else if (info.offset.x < -100) scroll("right");
  }}
>
```

### 2. Expansão de Descrição

Adicionar estado de expansão no card com animação:

```tsx
const [isExpanded, setIsExpanded] = useState(false);

// No mobile: toggle ao click
// No desktop: expand ao hover via group-hover
```

---

## Arquivos a Modificar

| Arquivo | Mudanças |
|---------|----------|
| `src/components/ui/service-carousel.tsx` | Adicionar drag events + lógica de expansão |

---

## Detalhes da Implementação

### ServiceCard - Expansão de Descrição

```tsx
const [isExpanded, setIsExpanded] = useState(false);

// Descrição com animação
<motion.p 
  className="text-sm text-white/80 leading-relaxed"
  initial={false}
  animate={{ 
    height: isExpanded ? "auto" : "2.5rem",
    opacity: 1 
  }}
  transition={{ duration: 0.3 }}
>
  {service.description}
</motion.p>
```

### ServiceCarousel - Touch Swipe

```tsx
// Refs para controle de drag
const [isDragging, setIsDragging] = useState(false);

// Container com drag
<motion.div
  ref={scrollContainerRef}
  className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-4 md:px-8"
  drag="x"
  dragConstraints={{ left: -((services.length - 1) * 340), right: 0 }}
  dragElastic={0.1}
  onDragStart={() => setIsDragging(true)}
  onDragEnd={() => setIsDragging(false)}
/>
```

### Comportamento da Expansão

| Dispositivo | Trigger | Ação |
|-------------|---------|------|
| Desktop | Hover | Expande automaticamente via `group-hover` |
| Mobile | Tap | Toggle estado `isExpanded` |

---

## Estrutura Visual da Expansão

```
┌─────────────────────────────┐
│      [IMAGEM DE FUNDO]      │
│                             │
│  ┌────────────────────────┐ │
│  │ Tecnologia             │ │  ← Tag
│  └────────────────────────┘ │
│                             │
│  Automações e IA            │  ← Título
│                             │
│  Fluxos inteligentes que    │  ← Descrição (2 linhas)
│  trabalham 24h por você...  │     
│                             │
│  ─────────────────────────  │
│  🤖 Economia 20h/sem    →   │
└─────────────────────────────┘

        ↓ HOVER/TAP ↓

┌─────────────────────────────┐
│      [IMAGEM DE FUNDO]      │
│                             │
│  ┌────────────────────────┐ │
│  │ Tecnologia             │ │
│  └────────────────────────┘ │
│                             │
│  Automações e IA            │
│                             │
│  Fluxos inteligentes que    │  ← Descrição COMPLETA
│  trabalham 24h por você:    │
│  WhatsApp, e-mail, CRM,     │
│  agentes virtuais.          │
│                             │
│  ─────────────────────────  │
│  🤖 Economia 20h/sem    →   │
└─────────────────────────────┘
```

---

## Resultado Esperado

1. **Mobile**: Swipe horizontal fluido + tap para expandir descrição
2. **Desktop**: Hover expande descrição automaticamente
3. **Animação suave** ao expandir/recolher descrição

