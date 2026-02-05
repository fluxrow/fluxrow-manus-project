import React from 'react';
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import ProcessCards from '../ui/process-cards';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "Briefing Inteligente",
      description: "Entendemos seu negócio com um quiz interativo que mapeia oportunidades e desafios únicos.",
      details: "Nossa IA analisa seu mercado, concorrência e objetivos para criar uma estratégia personalizada.",
      color: "cyan" as const
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Estratégia e Plano de Ação",
      description: "Definimos o caminho mais rápido para resultado com base em dados e experiência.",
      details: "Priorizamos ações de alto impacto e criamos um roadmap detalhado com metas mensuráveis.",
      color: "purple" as const
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Criação e Implementação",
      description: "Sites, conteúdos, automações e fluxos inteligentes executados com excelência.",
      details: "Desenvolvimento ágil com entregas incrementais e testes contínuos de performance.",
      color: "green" as const
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Otimização e Escala",
      description: "Ajustes contínuos e resultados medidos para maximizar o retorno do investimento.",
      details: "Monitoramento em tempo real com relatórios detalhados e otimizações baseadas em dados.",
      color: "yellow" as const
    }
  ];

  return (
    <section id="process" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-4">
            Como Trabalhamos
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Um processo testado e refinado que entrega resultados consistentes
          </p>
        </div>
        
        {/* Desktop - Stacked Cards */}
        <div className="hidden md:flex justify-center py-12">
          <ProcessCards />
        </div>
        
        {/* Mobile - Vertical List */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const colorClasses = {
              cyan: { icon: "from-cyan-500 to-cyan-600", title: "text-cyan-400" },
              purple: { icon: "from-purple-500 to-purple-600", title: "text-purple-400" },
              green: { icon: "from-green-500 to-green-600", title: "text-green-400" },
              yellow: { icon: "from-yellow-500 to-yellow-600", title: "text-yellow-400" },
            };
            const colors = colorClasses[step.color];
            
            return (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${colors.icon} flex items-center justify-center flex-shrink-0`}>
                  {step.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded">
                      Etapa {index + 1}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold font-space-grotesk ${colors.title} mb-2`}>
                    {step.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">
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