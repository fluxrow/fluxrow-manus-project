
# Implementar FocusRail 3D Carousel na Seção de Cases

## Visão Geral
Substituir a grid atual de cards dos cases de sucesso por um carousel 3D interativo (FocusRail) com navegação por swipe, scroll e teclado.

---

## Adaptações Necessárias

### 1. Conversão Next.js → React/Vite
- Remover `"use client"` (não necessário no Vite)
- Substituir `Link` do Next.js por `Link` do react-router-dom
- Ajustar imports para estrutura do projeto

### 2. Paleta de Cores do Site
Adaptar o componente para usar as cores oficiais:

| Original | Adaptado |
|----------|----------|
| Azul genérico | `cyan-400` / `cyan-500` |
| Background roxo | `purple-600` / `purple-800` |
| Acentos | `pink-400` / `pink-500` |
| Background escuro | `#0a0a0a` (já no site) |

### 3. Efeitos de Iluminação Ajustados
```
Background gradient: from-purple-900/30 via-black to-purple-900/30
Glow effects: cyan-500/20, purple-500/30
Border accents: cyan-400, purple-400
```

---

## Arquivos a Criar/Modificar

| Arquivo | Ação |
|---------|------|
| `src/components/ui/focus-rail.tsx` | Criar componente adaptado |
| `src/components/agency/CasesPortfolio.tsx` | Integrar FocusRail com dados dos cases |

---

## Dados dos Cases no Formato FocusRail

```tsx
const CASES_ITEMS: FocusRailItem[] = [
  {
    id: 1,
    title: "Match Solutions - Distribuição",
    description: "6 Agentes IA especializados com 35% aumento em conversões",
    meta: "IA • Distribuição",
    imageSrc: "...",
    href: "#case-match"
  },
  // ... demais cases
];
```

---

## Estrutura Visual Final

```
┌──────────────────────────────────────────────────────────────┐
│                    CASES DE SUCESSO                           │
│                                                               │
│     ┌───┐                                                     │
│   ┌─┤   ├─┐     ┌─────────────────┐     ┌─┐                  │
│   │ │   │ │     │                 │     │ │                  │
│   │ │   │ │     │   CARD ATIVO    │     │ │                  │
│   │ │   │ │     │    (em foco)    │     │ │                  │
│   └─┤   ├─┘     │                 │     └─┘                  │
│     └───┘       └─────────────────┘                          │
│                                                               │
│              ◀  1 / 10  ▶    [Ver Detalhes]                  │
└──────────────────────────────────────────────────────────────┘
```

---

## Interações

- **Swipe/Drag**: Navegar entre cards
- **Scroll horizontal**: Avançar/voltar
- **Teclado**: Setas esquerda/direita
- **Click**: Selecionar card lateral
- **Hover**: Pausar autoplay

---

## Detalhes Técnicos

### Dependência
Framer Motion já está instalado no projeto (`framer-motion: ^12.23.21`)

### Springs de Animação
```tsx
const BASE_SPRING = { stiffness: 300, damping: 30, mass: 1 };
const TAP_SPRING = { stiffness: 450, damping: 18, mass: 1 };
```

### Cores Adaptadas para o Site
```tsx
// Background ambiental
className="bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"

// Glow do card ativo
className="from-cyan-500/30 via-purple-500/20 to-transparent"

// Bordas e acentos
className="border-cyan-400/30 hover:border-purple-400/50"

// Texto gradiente
className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
```

---

## Resultado Esperado
Um carousel 3D cinematográfico que mantém a identidade visual do site, com cards que escalam, rotacionam e desfocam conforme a posição, criando profundidade visual premium.
