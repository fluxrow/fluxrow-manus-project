export interface ShowcaseItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  size: 'large' | 'medium' | 'small';
  position: string;
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 'main',
    title: 'Engenharia de Prompts Avançada',
    badge: '200+ PROMPTS TESTADOS',
    description: 'Domine técnicas de prompt engineering que geram resultados consistentes e de alta qualidade.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    size: 'large',
    position: 'main'
  },
  {
    id: 'automation',
    title: 'Automação Completa',
    badge: 'SETUP EM 30MIN',
    description: 'Fluxos prontos para WhatsApp, LinkedIn e email marketing.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
    size: 'medium',
    position: 'top-right'
  },
  {
    id: 'templates',
    title: 'Templates que Convertem',
    badge: 'ROI DE 340%',
    description: 'Modelos testados para campanhas, propostas e landing pages.',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=600&q=80',
    size: 'medium',
    position: 'middle-right'
  },
  {
    id: 'mobile',
    title: 'IA no Seu Bolso',
    badge: 'MOBILE FIRST',
    description: 'Apps e ferramentas que funcionam 24/7 no seu smartphone.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
    size: 'small',
    position: 'bottom-left'
  },
  {
    id: 'results',
    title: 'Resultados Comprovados',
    badge: 'CASES REAIS',
    description: 'Estratégias que já geraram milhões em vendas.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    size: 'medium',
    position: 'bottom-right'
  }
];