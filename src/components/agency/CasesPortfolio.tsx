import React, { useState } from 'react';
import { ExternalLink, ArrowRight, TrendingUp } from 'lucide-react';
import ImageWithFallback from '../ui/image-with-fallback';
import { GlowCard } from '../ui/spotlight-card';
import fachiniImage from '../../assets/fachini-industrial.jpg';
import medclinicaImage from '../../assets/medclinica-saude.jpg';

const CasesPortfolio = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const [showMore, setShowMore] = useState(false);

  const baseCases = [
    {
      title: "Promotrip - Turismo",
      challenge: "Site manual, apresentações repetitivas e baixo ROI em tráfego pago",
      solution: "Implementamos automação completa: Site responsivo, Landing Pages otimizadas, Apresentações automatizadas, CRM integrado, Automação de tráfego Meta/Google e gestão de redes sociais com IA.",
      result: "Aumento de 47% nas conversões, economia de 6.5h/dia e ROI de 312% em campanhas",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["Turismo", "Tráfego Pago", "CRM"],
      color: "cyan"
    },
    {
      title: "Maranata - Consórcios",
      challenge: "Captação de leads dispersa e atendimento descentralizado",
      solution: "Criamos ecossistema completo: Redes sociais automatizadas, Site otimizado, Simulador de consórcios integrado, Home equity calculator, Captação automática com direcionamento inteligente para consultores qualificados.",
      result: "Aumento de 83% em leads qualificados e redução de 71% no tempo de resposta",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["Consórcios", "Lead Generation", "Automação"],
      color: "purple"
    },
    {
      title: "Fachini - Industrial",
      challenge: "Controle interno manual, pós-venda deficiente e logística desorganizada",
      solution: "Desenvolvemos SaaS personalizado para suporte e controle interno, automação completa do comercial, sistema de pós-venda automatizado, logística integrada e follow-up inteligente via RD Station.",
      result: "Redução de 64% nos custos operacionais e aumento de 91% na satisfação do cliente",
      image: fachiniImage,
      tags: ["SaaS", "Industrial", "RD Station"],
      color: "green"
    }
  ];

  const additionalCases = [
    {
      title: "MedClínica - Saúde",
      challenge: "Agendamentos manuais, filas longas e baixa retenção de pacientes",
      solution: "Sistema completo: Agendamento online com IA, confirmação automática via WhatsApp, lembretes personalizados, telemedicina integrada, prontuário digital e automação de receitas.",
      result: "Redução de 73% no no-show, aumento de 89% na retenção e economia de 4.2h/dia",
      image: medclinicaImage,
      tags: ["Saúde", "Agendamento", "Telemedicina"],
      color: "blue"
    },
    {
      title: "EduTech - Ensino Online",
      challenge: "Baixa conversão de trials, alta evasão e suporte repetitivo",
      solution: "Plataforma educacional completa: Onboarding automatizado, trilhas personalizadas por IA, chatbot para dúvidas frequentes, sistema de gamificação e acompanhamento inteligente.",
      result: "Aumento de 156% na conversão trial-pago e redução de 68% na evasão",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      tags: ["Educação", "IA", "Gamificação"],
      color: "orange"
    },
    {
      title: "FitLife - Academia",
      challenge: "Baixa frequência de alunos, cobrança manual e falta de engajamento",
      solution: "Ecossistema fitness: App personalizado com treinos por IA, cobrança automática, programa de recompensas, aulas online integradas e nutrição automatizada.",
      result: "Aumento de 124% na frequência e redução de 82% na inadimplência",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop",
      tags: ["Fitness", "App Mobile", "Cobrança"],
      color: "red"
    },
    {
      title: "LogiExpress - Transportes",
      challenge: "Rastreamento manual, atrasos constantes e comunicação falha",
      solution: "Sistema logístico inteligente: Rastreamento GPS em tempo real, notificações automáticas aos clientes, otimização de rotas por IA e gestão automática de frotas.",
      result: "Redução de 59% nos atrasos e aumento de 143% na satisfação do cliente",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop",
      tags: ["Logística", "GPS", "Otimização"],
      color: "yellow"
    },
    {
      title: "BellaEstética - Estética",
      challenge: "Agenda desorganizada, follow-up manual e baixo ticket médio",
      solution: "Plataforma de beleza: Agendamento inteligente, sequências de cuidados automatizadas, programa de fidelidade, avaliações por foto-IA e upsell automático.",
      result: "Aumento de 267% no ticket médio e melhoria de 94% na organização",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      tags: ["Estética", "Fidelidade", "IA Visual"],
      color: "pink"
    },
    {
      title: "TechStartup - SaaS B2B",
      challenge: "Vendas complexas, ciclo longo e baixa adoção de features",
      solution: "Funil enterprise: Qualificação por IA, demos automatizadas, trials personalizados, onboarding progressivo e upsell baseado em uso real.",
      result: "Redução de 45% no ciclo de vendas e aumento de 178% no upsell",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      tags: ["B2B", "Enterprise", "Upsell"],
      color: "indigo"
    }
  ];

  const cases = showMore ? [...baseCases, ...additionalCases] : baseCases;

  return (
    <section id="cases" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title font-space-grotesk gradient-text">
            Cases de Sucesso
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Resultados reais que transformaram negócios com tecnologia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((case_item, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedCase(selectedCase === index ? null : index)}
            >
              <GlowCard 
                glowColor={case_item.color as 'blue' | 'purple' | 'green' | 'red' | 'orange'}
                customSize={true}
                className="overflow-hidden hover:scale-105 transition-all duration-500 h-full"
              >
                {/* Case Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={case_item.image} 
                    alt={case_item.title}
                    fallbackSrc="/placeholder.svg"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${case_item.color}-900/80 to-transparent`}></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Case Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold font-space-grotesk text-white">
                      {case_item.title}
                    </h3>
                    <TrendingUp className={`w-5 h-5 text-${case_item.color}-400`} />
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {case_item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-3 py-1 text-xs rounded-full bg-${case_item.color}-500/20 text-${case_item.color}-400 border border-${case_item.color}-500/30`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Preview Info */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-500 text-sm">Desafio:</span>
                      <p className="text-gray-300 text-sm">{case_item.challenge}</p>
                    </div>
                    
                    {selectedCase === index && (
                      <div className="space-y-3 animate-fade-in">
                        <div>
                          <span className="text-gray-500 text-sm">Solução:</span>
                          <p className="text-gray-300 text-sm">{case_item.solution}</p>
                        </div>
                        
                        <div>
                          <span className="text-gray-500 text-sm">Resultado:</span>
                          <p className={`text-${case_item.color}-400 font-semibold text-sm`}>
                            {case_item.result}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Expand indicator */}
                  <div className="flex items-center justify-center mt-4 pt-4 border-t border-gray-700">
                    <ArrowRight 
                      className={`w-4 h-4 text-${case_item.color}-400 transition-transform ${
                        selectedCase === index ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
        
        {/* CTA to see more cases */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full font-semibold font-space-grotesk hover:bg-cyan-500/10 transition-all duration-300"
          >
            {showMore ? 'Ver Menos Cases' : 'Ver Mais Cases'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasesPortfolio;