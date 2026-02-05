import React from 'react';
import { Bot, Megaphone, Globe, Palette } from 'lucide-react';
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
