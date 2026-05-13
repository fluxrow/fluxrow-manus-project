
import React, { useEffect } from 'react';
import ImageWithFallback from './ui/image-with-fallback';
import techWorkspace from '../assets/tech-workspace.jpg';
import playbooks from '../assets/playbooks.webp';
import templatesProntos from '../assets/templates-prontos.webp';

const DemoSection = () => {
  const demos = [
    {
      mockup: techWorkspace,
      title: "Fundamentos de IA", 
      description: "Conceitos aplicados de IA generativa, engenharia de prompts e casos de uso reais.",
      highlight: "200+ prompts testados"
    },
    {
      mockup: playbooks,
      title: "Setups Automatizados",
      description: "Playbooks com passo a passo pra WhatsApp, LinkedIn, e-mail e agendamentos automáticos.",
      highlight: "Automação completa em 30min"
    },
    {
      mockup: templatesProntos,
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
                <ImageWithFallback 
                  src={demo.mockup} 
                  alt={demo.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/5 text-white text-xs px-3 py-1 rounded-full font-space-grotesk">
                  {demo.highlight}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 font-space-grotesk text-white">
                  {demo.title}
                </h3>
                <p className="text-white/90 font-space-grotesk leading-relaxed">
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
