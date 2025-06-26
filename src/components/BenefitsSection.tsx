
import React from 'react';

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

  return (
    <section id="benefits" className="py-20 bg-black px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 font-space-grotesk">
          O que você vai <span className="gradient-text">desbloquear</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {benefits.map((benefit, index) => (
            <div key={index} className="hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 font-space-grotesk">
                {benefit.emoji} {benefit.title}
              </h3>
              <p className="text-gray-300 font-space-grotesk">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
