
import React, { useEffect } from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      emoji: "📘",
      title: "Guia IA Generativa",
      description: "Domine ChatGPT, Gemini e Claude com métodos práticos para negócios."
    },
    {
      emoji: "🤖",
      title: "Automações Reais",
      description: "Templates prontos com n8n, Zapier e WhatsApp API integrados."
    },
    {
      emoji: "💡",
      title: "Estratégia de Crescimento",
      description: "Do lead ao faturamento com planos de ação prontos pra executar."
    },
    {
      emoji: "📈",
      title: "Modelos de Tráfego",
      description: "Campanhas testadas para Meta, Google e Bing IA com baixa concorrência."
    },
    {
      emoji: "🧠",
      title: "Atualizações Semanais",
      description: "Novo conteúdo toda semana com IA aplicada em tempo real."
    },
    {
      emoji: "🌐",
      title: "Comunidade Premium",
      description: "Troca entre membros, mentorias em grupo e insights de bastidor."
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
            <div key={index} className="benefit-card glass-card">
              <div className="benefit-icon text-4xl mb-4">{benefit.emoji}</div>
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
