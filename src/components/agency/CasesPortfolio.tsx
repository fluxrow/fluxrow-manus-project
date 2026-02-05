import React from 'react';
import { FocusRail, type FocusRailItem } from '../ui/focus-rail';
import fachiniImage from '../../assets/fachini-industrial.jpg';
import medclinicaImage from '../../assets/medclinica-saude.jpg';

const CasesPortfolio = () => {
  const casesItems: FocusRailItem[] = [
    {
      id: 1,
      title: "Match Solutions - Distribuição",
      description: "6 Agentes IA especializados com 35% aumento em conversões e economia de 12h/dia",
      meta: "IA • Distribuição",
      imageSrc: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      href: "#case-match"
    },
    {
      id: 2,
      title: "Promotrip - Turismo",
      description: "Aumento de 47% nas conversões com automação completa de tráfego e CRM",
      meta: "Turismo • Tráfego Pago",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      href: "#case-promotrip"
    },
    {
      id: 3,
      title: "Maranata - Consórcios",
      description: "83% mais leads qualificados com simulador integrado e captação automática",
      meta: "Consórcios • Lead Generation",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      href: "#case-maranata"
    },
    {
      id: 4,
      title: "Fachini - Industrial",
      description: "Redução de 64% nos custos operacionais com SaaS personalizado e RD Station",
      meta: "SaaS • Industrial",
      imageSrc: fachiniImage,
      href: "#case-fachini"
    },
    {
      id: 5,
      title: "MedClínica - Saúde",
      description: "73% menos no-show com agendamento IA e telemedicina integrada",
      meta: "Saúde • Telemedicina",
      imageSrc: medclinicaImage,
      href: "#case-medclinica"
    },
    {
      id: 6,
      title: "EduTech - Ensino Online",
      description: "156% mais conversão trial-pago com trilhas personalizadas por IA",
      meta: "Educação • IA",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      href: "#case-edutech"
    },
    {
      id: 7,
      title: "FitLife - Academia",
      description: "124% mais frequência com app personalizado e programa de recompensas",
      meta: "Fitness • App Mobile",
      imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      href: "#case-fitlife"
    },
    {
      id: 8,
      title: "LogiExpress - Transportes",
      description: "59% menos atrasos com rastreamento GPS e otimização de rotas por IA",
      meta: "Logística • Otimização",
      imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      href: "#case-logiexpress"
    },
    {
      id: 9,
      title: "BellaEstética - Estética",
      description: "267% maior ticket médio com avaliações foto-IA e upsell automático",
      meta: "Estética • IA Visual",
      imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      href: "#case-bellaestetica"
    },
    {
      id: 10,
      title: "TechStartup - SaaS B2B",
      description: "45% menos ciclo de vendas com demos automatizadas e onboarding progressivo",
      meta: "B2B • Enterprise",
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      href: "#case-techstartup"
    }
  ];

  return (
    <section id="cases" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cases de Sucesso
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Resultados reais que transformaram negócios com tecnologia
          </p>
        </div>
        
        <FocusRail 
          items={casesItems} 
          autoPlay={true}
          interval={5000}
          loop={true}
        />
      </div>
    </section>
  );
};

export default CasesPortfolio;
