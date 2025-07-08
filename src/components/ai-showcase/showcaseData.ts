
import techWorkspace from '../../assets/tech-workspace.jpg';
import aiAutomation from '../../assets/ai-automation.jpg';
import templates from '../../assets/templates.jpg';
import mobileTech from '../../assets/mobile-tech.jpg';
import results from '../../assets/results.jpg';

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
    image: techWorkspace,
    size: 'large',
    position: 'main'
  },
  {
    id: 'automation',
    title: 'Automação Completa',
    badge: 'SETUP EM 30MIN',
    description: 'Fluxos prontos para WhatsApp, LinkedIn e email marketing.',
    image: aiAutomation,
    size: 'medium',
    position: 'top-right'
  },
  {
    id: 'templates',
    title: 'Templates que Convertem',
    badge: 'ROI DE 340%',
    description: 'Modelos testados para campanhas, propostas e landing pages.',
    image: templates,
    size: 'medium',
    position: 'middle-right'
  },
  {
    id: 'mobile',
    title: 'IA no Seu Bolso',
    badge: 'MOBILE FIRST',
    description: 'Apps e ferramentas que funcionam 24/7 no seu smartphone.',
    image: mobileTech,
    size: 'small',
    position: 'bottom-left'
  },
  {
    id: 'results',
    title: 'Resultados Comprovados',
    badge: 'CASES REAIS',
    description: 'Estratégias que já geraram milhões em vendas.',
    image: results,
    size: 'medium',
    position: 'bottom-right'
  }
];
