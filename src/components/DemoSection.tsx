
import React, { useEffect } from 'react';

const DemoSection = () => {
  const demos = [
    {
      mockup: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      title: "Fundamentos de IA", 
      description: "Conceitos aplicados de IA generativa, engenharia de prompts e casos de uso reais.",
      highlight: "200+ prompts testados"
    },
    {
      mockup: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      title: "Setups Automatizados",
      description: "Playbooks com passo a passo pra WhatsApp, LinkedIn, e-mail e agendamentos automáticos.",
      highlight: "Automação completa em 30min"
    },
    {
      mockup: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=600&q=80",
      title: "Templates Prontos",
      description: "Mais de 200 modelos de campanhas, propostas, fluxos e landing pages com IA.",
      highlight: "ROI médio de 340%"
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
            <div key={index} className="demo-card glass-card p-0 overflow-hidden group hover:transform hover:scale-105 transition-all duration-500">
              <div className="relative">
                <img 
                  src={demo.mockup} 
                  alt={demo.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-space-grotesk">
                  {demo.highlight}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 font-space-grotesk text-white">
                  {demo.title}
                </h3>
                <p className="text-gray-300 font-space-grotesk leading-relaxed">
                  {demo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
