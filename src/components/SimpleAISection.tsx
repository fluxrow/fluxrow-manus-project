import React from 'react';

const SimpleAISection = () => {
  const features = [
    {
      title: 'Engenharia de Prompts Avançada',
      badge: '200+ PROMPTS TESTADOS',
      description: 'Domine técnicas de prompt engineering que geram resultados consistentes e de alta qualidade.'
    },
    {
      title: 'Automação Completa',
      badge: 'SETUP EM 30MIN',
      description: 'Fluxos prontos para WhatsApp, LinkedIn e email marketing.'
    },
    {
      title: 'Templates que Convertem',
      badge: 'ROI DE 340%',
      description: 'Modelos testados para campanhas, propostas e landing pages.'
    },
    {
      title: 'IA no Seu Bolso',
      badge: 'MOBILE FIRST',
      description: 'Apps e ferramentas que funcionam 24/7 no seu smartphone.'
    },
    {
      title: 'Resultados Comprovados',
      badge: 'CASES REAIS',
      description: 'Estratégias que já geraram milhões em vendas.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-black" id="ai-showcase">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
            <span className="gradient-text">Domine a IA</span>
            <br />
            <span className="text-white">Em Todas as Frentes</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-space-grotesk">
            Veja como nossa metodologia transforma cada aspecto da inteligência artificial em resultados reais para seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/[0.02] backdrop-blur-[10px] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
            >
              <div className="mb-4">
                <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-sm px-3 py-1 rounded-full font-space-grotesk">
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">
                {feature.title}
              </h3>
              <p className="text-white/90 font-space-grotesk">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleAISection;