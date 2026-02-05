
# Transformar Seção "O que fazemos" em Carousel de Serviços

## Visão Geral
Substituir a grid atual de serviços por um carousel horizontal interativo baseado no componente `OfferCarousel`, adaptado para mostrar os 4 serviços da Fluxrow com visual premium.

---

## Adaptações Necessárias

### 1. Estrutura do Card
O componente original é para "ofertas/promoções". Vamos adaptar para "serviços":

| Campo Original | Adaptado para Serviços |
|----------------|------------------------|
| `imageSrc` | Imagem de fundo representando o serviço |
| `tag` | Categoria do serviço (ex: "Tecnologia", "Criativo") |
| `title` | Nome do serviço |
| `description` | Descrição completa |
| `brandLogoSrc` | Ícone Lucide renderizado |
| `brandName` | Benefício principal |
| `promoCode` | Remover (não aplicável) |
| `href` | Link para seção ou página de detalhes |

### 2. Paleta de Cores (adaptar para Fluxrow)

```tsx
// Cores originais genéricas → Cores Fluxrow
background: "bg-[#0a0a0a]"
borders: "border-cyan-500/30" 
tags: "bg-cyan-500/20 text-cyan-400"
hover effects: "from-purple-500/20 to-cyan-500/20"
buttons: "bg-gradient-to-r from-cyan-500 to-purple-500"
```

### 3. Dados dos Serviços

```tsx
const services: ServiceOffer[] = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995", // AI/Automation
    imageAlt: "Automações e Inteligência Artificial",
    tag: "Tecnologia",
    title: "Automações e IA",
    description: "Fluxos inteligentes que trabalham 24h por você: WhatsApp, e-mail, CRM, agentes virtuais.",
    icon: Bot,
    benefit: "Economia de 20h/semana",
    href: "#services"
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113", // Marketing
    tag: "Criativo",
    title: "Marketing e Conteúdo",
    description: "Criação de posts, campanhas, blogs e social media com consistência e estratégia.",
    icon: Megaphone,
    benefit: "Conteúdo que converte",
    href: "#services"
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", // Web Development
    tag: "Desenvolvimento",
    title: "Websites e Landing Pages", 
    description: "Sites modernos em Lovable ou Webflow, com foco em performance e integração total.",
    icon: Globe,
    benefit: "Alta conversão",
    href: "#services"
  },
  {
    id: 4,
    imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5", // Branding
    tag: "Design",
    title: "Branding e Criativos",
    description: "Identidade visual, carrosséis, renders 3D e designs prontos para engajar e converter.",
    icon: Palette,
    benefit: "Identidade única",
    href: "#services"
  }
];
```

---

## Arquivos a Criar/Modificar

| Arquivo | Ação |
|---------|------|
| `src/components/ui/service-carousel.tsx` | Criar componente adaptado |
| `src/components/agency/ServicesGrid.tsx` | Substituir conteúdo pelo novo carousel |

---

## Estrutura Visual Final

```
┌──────────────────────────────────────────────────────────────────┐
│                      O QUE FAZEMOS                                │
│        Soluções completas que transformam seu negócio             │
│                                                                   │
│  ◀  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ▶         │
│     │   [IMAGEM]  │  │   [IMAGEM]  │  │   [IMAGEM]  │            │
│     │             │  │             │  │             │            │
│     │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │            │
│     │ │Tecnologia│ │  │ │Criativo │ │  │ │Desenvol.│ │            │
│     │ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │            │
│     │ Automações  │  │ Marketing   │  │ Websites    │            │
│     │ e IA        │  │ e Conteúdo  │  │ e LPs       │            │
│     │             │  │             │  │             │            │
│     │ 🤖 20h/sem  │  │ 📢 Converte │  │ 🌐 Alta CVR │            │
│     └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## Detalhes Técnicos

### Dependências
- `framer-motion` - Já instalado (^12.23.21)
- `lucide-react` - Já instalado (^0.462.0)

### Animações do Card
```tsx
// Hover effect com Framer Motion
whileHover={{ y: -8, scale: 1.02 }}
transition={{ duration: 0.3, ease: "easeOut" }}
```

### Cores Adaptadas (CSS Classes)

```tsx
// Tag badge
"bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"

// Card background
"bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl"

// Card border
"border border-white/10 hover:border-cyan-500/50"

// Icon container
"bg-gradient-to-r from-cyan-500 to-purple-500"

// Seta/botão
"bg-white/10 hover:bg-cyan-500/20 text-white"
```

### Scroll Behavior
- Scroll horizontal com botões
- Suporte a swipe em mobile
- Scroll suave com `behavior: "smooth"`

---

## Resultado Esperado
Um carousel horizontal moderno e interativo que substitui a grid estática, mantendo a identidade visual Fluxrow (cyan/purple/pink) e melhorando a experiência de navegação nos serviços.
