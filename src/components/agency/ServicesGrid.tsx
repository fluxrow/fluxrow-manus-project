import React from 'react';
import { Bot, Megaphone, Globe, Palette } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Bot,
      title: "Automações e IA",
      description: "Fluxos inteligentes que trabalham 24h por você: WhatsApp, e-mail, CRM, agentes virtuais e integrações com IA.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Megaphone,
      title: "Marketing e Conteúdo",
      description: "Criação de posts, campanhas, blogs e social media com consistência e estratégia.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Globe,
      title: "Websites e Landing Pages",
      description: "Sites modernos em Lovable ou Webflow, com foco em performance e integração total.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Palette,
      title: "Branding e Criativos",
      description: "Identidade visual, carrosséis, renders 3D e designs prontos para engajar e converter.",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title font-space-grotesk gradient-text">
            O que fazemos
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Soluções completas que transformam seu negócio em uma máquina de resultados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 font-space-grotesk text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-cyan-500/50 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;