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
    href: "#contact"
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
    href: "#contact"
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
    href: "#contact"
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
    href: "#contact"
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
