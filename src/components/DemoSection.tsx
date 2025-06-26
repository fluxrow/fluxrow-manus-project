
import React, { useEffect } from 'react';

const DemoSection = () => {
  const demos = [
    {
      emoji: "🔍",
      title: "Fundamentos de IA", 
      description: "Conceitos aplicados de IA generativa, engenharia de prompts e casos de uso reais."
    },
    {
      emoji: "⚙️",
      title: "Setups Automatizados",
      description: "Playbooks com passo a passo pra WhatsApp, LinkedIn, e-mail e agendamentos automáticos."
    },
    {
      emoji: "📦",
      title: "Templates Prontos",
      description: "Mais de 200 modelos de campanhas, propostas, fluxos e landing pages com IA."
    }
  ];

  useEffect(() => {
    // Add AOS attributes
    const demoCards = document.querySelectorAll('.demo-card');
    demoCards.forEach((card, index) => {
      card.setAttribute('data-aos', 'zoom-in');
      card.setAttribute('data-aos-delay', (index * 150).toString());
    });
  }, []);

  return (
    <section id="demo" className="py-20 px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title font-space-grotesk text-center" data-aos="fade-up">
          Veja o que está <span className="gradient-text">lá dentro</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">  
          {demos.map((demo, index) => (
            <div key={index} className="demo-card glass-card p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">{demo.emoji}</div>
              <h3 className="text-xl font-semibold mb-4 font-space-grotesk text-white">
                {demo.title}
              </h3>
              <p className="text-gray-300 font-space-grotesk leading-relaxed">
                {demo.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
