import React, { useEffect, useState } from 'react';
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: "Briefing Inteligente",
      description: "Entendemos seu negócio com um quiz interativo que mapeia oportunidades e desafios únicos.",
      details: "Nossa IA analisa seu mercado, concorrência e objetivos para criar uma estratégia personalizada.",
      color: "cyan"
    },
    {
      icon: Lightbulb,
      title: "Estratégia e Plano de Ação",
      description: "Definimos o caminho mais rápido para resultado com base em dados e experiência.",
      details: "Priorizamos ações de alto impacto e criamos um roadmap detalhado com metas mensuráveis.",
      color: "purple"
    },
    {
      icon: Rocket,
      title: "Criação e Implementação",
      description: "Sites, conteúdos, automações e fluxos inteligentes executados com excelência.",
      details: "Desenvolvimento ágil com entregas incrementais e testes contínuos de performance.",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Otimização e Escala",
      description: "Ajustes contínuos e resultados medidos para maximizar o retorno do investimento.",
      details: "Monitoramento em tempo real com relatórios detalhados e otimizações baseadas em dados.",
      color: "yellow"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
          setActiveStep(stepIndex);
        }
      });
    }, { threshold: 0.6 });

    document.querySelectorAll('.timeline-step').forEach(step => {
      observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title font-space-grotesk gradient-text">
            Como Trabalhamos
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Um processo testado e refinado que entrega resultados consistentes
          </p>
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 transform -translate-y-1/2">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          
          {/* Steps */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeStep;
              
              return (
                <div 
                  key={index}
                  className={`timeline-step text-center transition-all duration-500 ${
                    isActive ? 'scale-105' : 'scale-95 opacity-70'
                  }`}
                  data-step={index}
                >
                  {/* Icon Circle */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full relative ${
                    isActive 
                      ? `bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 shadow-lg shadow-${step.color}-500/50` 
                      : 'bg-gray-800 border-2 border-gray-700'
                  } transition-all duration-500 flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                    
                    {/* Pulse effect for active step */}
                    {isActive && (
                      <div className={`absolute inset-0 rounded-full bg-${step.color}-500 animate-ping opacity-20`}></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className={`text-lg font-bold font-space-grotesk transition-colors ${
                      isActive ? `text-${step.color}-400` : 'text-gray-400'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-white/90 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    
                    {isActive && (
                      <p className="text-xs text-white/60 animate-fade-in">
                        {step.details}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div 
                key={index}
                className="timeline-step flex items-start gap-6 glass-card p-6"
                data-step={index}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-lg font-bold font-space-grotesk text-${step.color}-400 mb-2`}>
                    {step.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-white/60">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;