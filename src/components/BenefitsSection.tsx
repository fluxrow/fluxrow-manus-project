
import React, { useEffect } from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      title: "Guia de IA Generativa",
      description: "Aprenda a usar ChatGPT, Gemini e Claude para criar conteúdo, vender e automatizar processos.",
      preview: "Interface completa com prompts testados"
    },
    {
      icon: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
      title: "Automações Reais",
      description: "Tenha acesso a fluxos prontos com n8n, Zapier e WhatsApp API que já estão funcionando em negócios reais.",
      preview: "Fluxos de automação visual"
    },
    {
      icon: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=400&q=80",
      title: "Playbooks de Crescimento",
      description: "Estratégias práticas para sair do zero e começar a faturar com inteligência artificial aplicada.",
      preview: "Dashboard de resultados em tempo real"
    },
    {
      icon: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
      title: "Campanhas Testadas",
      description: "Modelos de tráfego prontos para rodar em Meta, Google e Bing com IA generativa.",
      preview: "ROI de 300%+ comprovado"
    },
    {
      icon: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
      title: "Atualizações Semanais",
      description: "Conteúdos novos toda semana com as tendências mais quentes e tutoriais aplicados.",
      preview: "Biblioteca sempre atualizada"
    },
    {
      icon: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80",
      title: "Comunidade Premium",
      description: "Mentorias em grupo, troca com outros membros e suporte direto com especialistas em IA.",
      preview: "Rede de networking exclusiva"
    }
  ];

  useEffect(() => {
    // Add AOS attributes to cards
    const cards = document.querySelectorAll('.benefit-card');
    cards.forEach((card, index) => {
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', (index * 100).toString());
    });
  }, []);

  return (
    <section id="benefits" className="py-20 bg-black px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title font-space-grotesk" data-aos="fade-up">
          O que você vai <span className="gradient-text">desbloquear</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card glass-card group">
              <div className="benefit-icon relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={benefit.icon} 
                  alt={benefit.title}
                  className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-xs text-white/80 font-space-grotesk">
                  {benefit.preview}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-space-grotesk text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-300 font-space-grotesk leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
