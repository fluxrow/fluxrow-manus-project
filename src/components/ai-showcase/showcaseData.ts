import promptEngineeringImg from '../../assets/prompt-engineering-avancado.jpg';
import automacaoImg from '../../assets/automacao-marketing.jpg';
import templatesImg from '../../assets/templates-conversao.jpg';
import mobileImg from '../../assets/ia-mobile.jpg';
import resultadosImg from '../../assets/resultados-comprovados.jpg';

export interface ShowcaseItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: any; // Changed to any to accept both string URLs and imported images
  size: 'large' | 'medium' | 'small';
  position: string;
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 'main',
    title: 'Engenharia de Prompts Avançada',
    badge: '200+ PROMPTS TESTADOS',
    description: 'Domine técnicas de prompt engineering que geram resultados consistentes e de alta qualidade.',
    image: promptEngineeringImg,
    size: 'large',
    position: 'main'
  },
  {
    id: 'automation',
    title: 'Automação Completa',
    badge: 'SETUP EM 30MIN',
    description: 'Fluxos prontos para WhatsApp, LinkedIn e email marketing.',
    image: automacaoImg,
    size: 'medium',
    position: 'top-right'
  },
  {
    id: 'templates',
    title: 'Templates que Convertem',
    badge: 'ROI DE 340%',
    description: 'Modelos testados para campanhas, propostas e landing pages.',
    image: templatesImg,
    size: 'medium',
    position: 'middle-right'
  },
  {
    id: 'mobile',
    title: 'IA no Seu Bolso',
    badge: 'MOBILE FIRST',
    description: 'Apps e ferramentas que funcionam 24/7 no seu smartphone.',
    image: mobileImg,
    size: 'small',
    position: 'bottom-left'
  },
  {
    id: 'results',
    title: 'Resultados Comprovados',
    badge: 'CASES REAIS',
    description: 'Estratégias que já geraram milhões em vendas.',
    image: resultadosImg,
    size: 'medium',
    position: 'bottom-right'
  }
];