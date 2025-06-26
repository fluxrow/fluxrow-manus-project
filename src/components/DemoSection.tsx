
import React from 'react';

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

  return (
    <section id="demo" className="py-20 px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-space-grotesk">
          Veja o que está <span className="gradient-text">lá dentro</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {demos.map((demo, index) => (
            <div key={index} className="hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 font-space-grotesk">
                {demo.emoji} {demo.title}
              </h3>
              <p className="text-gray-300 font-space-grotesk">{demo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
