import React from 'react';
import { Bot, Megaphone, Globe, Palette, Target, Instagram, Lightbulb, Layers } from 'lucide-react';
import sistemasWebImage from '../../assets/sistemas-web-dashboard.jpg';
import { ServiceCarousel, ServiceOffer } from '../ui/service-carousel';

const services: ServiceOffer[] = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Automações e Inteligência Artificial",
    tag: "Tecnologia",
    title: "Automações e IA",
    description: "Fluxos inteligentes que trabalham 24h por você: WhatsApp, e-mail, CRM, agentes virtuais e integrações com IA.",
    icon: Bot,
    benefit: "Economia de 20h/semana",
    href: "#contact",
    fullDescription: "Desenvolvemos fluxos de automação personalizados que eliminam tarefas repetitivas e escalam seu atendimento. Nossos agentes de IA são treinados especificamente para seu negócio, respondendo dúvidas, qualificando leads e agendando reuniões automaticamente — 24 horas por dia, 7 dias por semana.",
    features: [
      "Chatbots inteligentes para WhatsApp, Instagram e site",
      "Automação de e-mail marketing com segmentação dinâmica",
      "Integração com CRMs (RD Station, Pipedrive, HubSpot)",
      "Agentes virtuais com IA generativa (GPT, Claude)",
      "Automações no-code com Make, n8n e Zapier",
      "Fluxos de nutrição e follow-up automáticos"
    ],
    deliverables: [
      "Fluxos documentados",
      "Dashboard de métricas",
      "Treinamento da equipe",
      "Suporte por 30 dias"
    ]
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Marketing e Conteúdo Digital",
    tag: "Criativo",
    title: "Marketing e Conteúdo",
    description: "Criação de posts, campanhas, blogs e social media com consistência e estratégia.",
    icon: Megaphone,
    benefit: "Conteúdo que converte",
    href: "#contact",
    fullDescription: "Planejamos e executamos sua presença digital com conteúdo estratégico que gera autoridade e conversões. Da criação de posts para redes sociais até campanhas completas de tráfego pago, cuidamos de toda a jornada do cliente com copy persuasiva e design que para o scroll.",
    features: [
      "Calendário editorial mensal com posts prontos",
      "Carrosséis informativos e stories engajadores",
      "Gestão de tráfego pago (Meta Ads, Google Ads)",
      "Copywriting persuasivo para anúncios e landing pages",
      "Produção de vídeos curtos (Reels, TikTok)",
      "Relatórios de performance e otimização contínua"
    ],
    deliverables: [
      "Planejamento mensal",
      "Criativos editáveis",
      "Relatório semanal",
      "Calls de alinhamento"
    ]
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Desenvolvimento de Websites",
    tag: "Desenvolvimento",
    title: "Websites e Landing Pages",
    description: "Sites modernos em Lovable ou Webflow, com foco em performance e integração total.",
    icon: Globe,
    benefit: "Alta conversão",
    href: "#contact",
    fullDescription: "Criamos sites e landing pages que não são apenas bonitos — são máquinas de conversão. Utilizamos as plataformas mais modernas do mercado para entregar projetos rápidos, responsivos e totalmente integrados com seu funil de vendas e ferramentas de automação.",
    features: [
      "Design responsivo e mobile-first",
      "Desenvolvimento em Lovable, Webflow ou código customizado",
      "Otimização de velocidade e SEO técnico",
      "Integração com CRM, WhatsApp e ferramentas de marketing",
      "Formulários inteligentes com qualificação de leads",
      "Analytics e heatmaps configurados"
    ],
    deliverables: [
      "Site publicado",
      "Domínio configurado",
      "SSL e segurança",
      "Manual de edição"
    ]
  },
  {
    id: 4,
    imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Branding e Design Criativo",
    tag: "Design",
    title: "Branding e Criativos",
    description: "Identidade visual, carrosséis, renders 3D e designs prontos para engajar e converter.",
    icon: Palette,
    benefit: "Identidade única",
    href: "#contact",
    fullDescription: "Desenvolvemos identidades visuais memoráveis e materiais gráficos que posicionam sua marca como referência no mercado. Do logotipo aos templates de posts, criamos um sistema visual coeso que transmite profissionalismo e gera reconhecimento instantâneo.",
    features: [
      "Criação de logotipo e variações",
      "Manual de identidade visual completo",
      "Templates editáveis para Canva/Figma",
      "Criativos para anúncios (estático e animado)",
      "Renders 3D e mockups profissionais",
      "Design de apresentações comerciais"
    ],
    deliverables: [
      "Arquivos em alta resolução",
      "Versões para web e print",
      "Fontes e paleta de cores",
      "Kit de redes sociais"
    ]
  },
  {
    id: 5,
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Tráfego Pago e Performance",
    tag: "Performance",
    title: "Tráfego Pago",
    description: "Campanhas estratégicas em Meta Ads, Google Ads e LinkedIn para atrair leads qualificados.",
    icon: Target,
    benefit: "ROI mensurável",
    href: "#contact",
    fullDescription: "Criamos e gerenciamos campanhas de tráfego pago com foco em resultados mensuráveis. Desde a estruturação das campanhas até a otimização contínua, garantimos que cada real investido trabalhe para trazer leads qualificados e aumentar suas vendas.",
    features: [
      "Campanhas Meta Ads (Facebook/Instagram)",
      "Google Ads (Search, Display, YouTube)",
      "LinkedIn Ads para B2B",
      "Remarketing inteligente",
      "Testes A/B contínuos",
      "Otimização de conversões"
    ],
    deliverables: [
      "Setup completo",
      "Criativos otimizados",
      "Relatório semanal",
      "Calls de performance"
    ]
  },
  {
    id: 6,
    imageSrc: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Gestão de Redes Sociais",
    tag: "Social Media",
    title: "Redes Sociais",
    description: "Gestão completa de Instagram, Facebook e LinkedIn com conteúdo estratégico e crescimento orgânico.",
    icon: Instagram,
    benefit: "Engajamento real",
    href: "#contact",
    fullDescription: "Assumimos a gestão completa das suas redes sociais com uma abordagem estratégica. Criamos conteúdo que engaja, construímos comunidade e transformamos seguidores em clientes fiéis através de uma presença digital consistente e autêntica.",
    features: [
      "Planejamento estratégico mensal",
      "Criação de posts e stories",
      "Gestão de comunidade",
      "Análise de métricas",
      "Calendário editorial",
      "Interação com seguidores"
    ],
    deliverables: [
      "Posts mensais",
      "Stories",
      "Relatório mensal",
      "Suporte contínuo"
    ]
  },
  {
    id: 7,
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Consultoria e Estratégia Digital",
    tag: "Estratégia",
    title: "Consultoria Digital",
    description: "Diagnóstico completo e plano estratégico personalizado para acelerar seu crescimento digital.",
    icon: Lightbulb,
    benefit: "Direção clara",
    href: "#contact",
    fullDescription: "Realizamos um diagnóstico profundo do seu negócio e mercado para criar um plano estratégico sob medida. Identificamos oportunidades, definimos prioridades e traçamos um roadmap claro para você alcançar seus objetivos de forma estruturada.",
    features: [
      "Diagnóstico de maturidade digital",
      "Análise de concorrência",
      "Plano de ação detalhado",
      "Definição de KPIs",
      "Mapeamento de jornada do cliente",
      "Priorização de investimentos"
    ],
    deliverables: [
      "Relatório diagnóstico",
      "Plano estratégico",
      "Roadmap 90 dias",
      "Sessão de mentoria"
    ]
  },
  {
    id: 8,
    imageSrc: sistemasWebImage,
    imageAlt: "Sistemas e Aplicativos Web",
    tag: "Produto",
    title: "Sistemas Web",
    description: "Aplicações web personalizadas, dashboards e sistemas internos para otimizar operações.",
    icon: Layers,
    benefit: "Solução sob medida",
    href: "#contact",
    fullDescription: "Desenvolvemos aplicações web customizadas que resolvem problemas específicos do seu negócio. De dashboards de BI a sistemas de gestão interna, criamos soluções que automatizam processos e melhoram a tomada de decisão.",
    features: [
      "Dashboards de BI customizados",
      "Sistemas de gestão interna",
      "Portais de clientes",
      "Integrações com APIs",
      "Painéis administrativos",
      "Relatórios automatizados"
    ],
    deliverables: [
      "Sistema publicado",
      "Documentação",
      "Treinamento",
      "Suporte técnico"
    ]
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 px-6">
          <h2 className="section-title font-space-grotesk gradient-text">
            O que fazemos
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Soluções completas que transformam seu negócio em uma máquina de resultados
          </p>
        </div>
        
        <ServiceCarousel services={services} />
      </div>
    </section>
  );
};

export default ServicesGrid;
