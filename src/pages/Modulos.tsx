
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, Play, Clock, BookOpen } from 'lucide-react';

const Modulos = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const navigate = useNavigate();

  const stats = [
    { number: '6', label: 'Módulos' },
    { number: '42', label: 'Aulas' },
    { number: '8h', label: 'Conteúdo' },
    { number: '15', label: 'Templates' }
  ];

  const modules = [
    {
      id: 1,
      title: 'Fundamentos da IA para Negócios',
      duration: '90min',
      lessons: 8,
      icon: '🎯',
      description: 'Aprenda os conceitos básicos de IA aplicados aos negócios e como identificar oportunidades.',
      topics: [
        'Introdução à Inteligência Artificial',
        'IA vs Automação: Qual a diferença?',
        'Identificando oportunidades com IA',
        'Ferramentas essenciais (ChatGPT, Claude, Gemini)',
        'Primeiros prompts que geram receita',
        'Casos de uso práticos',
        'Ética e responsabilidade na IA',
        'Plano de ação personalizado'
      ]
    },
    {
      id: 2,
      title: 'Automação de Vendas com IA',
      duration: '75min',
      lessons: 6,
      icon: '💰',
      description: 'Configure sistemas completos de vendas automatizadas usando inteligência artificial.',
      topics: [
        'Criando chatbots de vendas',
        'Automação de WhatsApp Business',
        'Sequências de e-mail inteligentes',
        'Qualificação automática de leads',
        'Follow-up inteligente',
        'Integração com CRM'
      ]
    },
    {
      id: 3,
      title: 'Criação de Conteúdo Escalável',
      duration: '85min',
      lessons: 7,
      icon: '✨',
      description: 'Produza conteúdo de alta qualidade em escala usando ferramentas de IA.',
      topics: [
        'Estratégia de conteúdo com IA',
        'Criação de posts para redes sociais',
        'Geração de artigos e blogs',
        'Vídeos e thumbnails automáticos',
        'Calendário editorial inteligente',
        'Análise de performance',
        'Otimização para SEO'
      ]
    },
    {
      id: 4,
      title: 'Marketing de Performance + IA',
      duration: '95min',
      lessons: 8,
      icon: '📈',
      description: 'Otimize campanhas de tráfego pago usando inteligência artificial.',
      topics: [
        'Análise preditiva de campanhas',
        'Otimização automática de anúncios',
        'Segmentação inteligente',
        'Copy e criativos com IA',
        'Bidding strategies automáticas',
        'Tracking e atribuição avançada',
        'ROI optimization',
        'Relatórios automatizados'
      ]
    },
    {
      id: 5,
      title: 'Atendimento Inteligente',
      duration: '60min',
      lessons: 5,
      icon: '🤖',
      description: 'Implemente sistemas de atendimento 24/7 com IA que convertem mais.',
      topics: [
        'Chatbots para atendimento',
        'FAQ inteligente e dinâmico',
        'Escalação humana inteligente',
        'Análise de sentimento',
        'Métricas de satisfação'
      ]
    },
    {
      id: 6,
      title: 'Implementação e Escala',
      duration: '70min',
      lessons: 8,
      icon: '🚀',
      description: 'Coloque tudo em prática e escale seus resultados de forma sustentável.',
      topics: [
        'Plano de implementação 30 dias',
        'KPIs e métricas importantes',
        'Escalando operações',
        'Time e recursos necessários',
        'Troubleshooting comum',
        'Próximos passos',
        'Comunidade e networking',
        'Certificação final'
      ]
    }
  ];

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Header Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">Módulos do Curso</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-space-grotesk">
              6 módulos práticos para transformar IA em receita recorrente
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text font-space-grotesk">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-space-grotesk">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules List */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {modules.map((module) => (
                <div key={module.id} className="glass-card overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer flex items-center justify-between hover:bg-white/5 transition-colors"
                    onClick={() => toggleModule(module.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{module.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold font-space-grotesk text-white mb-2">
                          Módulo {module.id}: {module.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-400 font-space-grotesk">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{module.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{module.lessons} aulas</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      {expandedModule === module.id ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </div>
                  
                  {expandedModule === module.id && (
                    <div className="px-6 pb-6 border-t border-gray-700">
                      <p className="text-gray-300 font-space-grotesk mb-4 pt-4">
                        {module.description}
                      </p>
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-cyan-400 font-space-grotesk">
                          O que você vai aprender:
                        </h4>
                        <ul className="space-y-1">
                          {module.topics.map((topic, index) => (
                            <li key={index} className="flex items-center space-x-2 text-gray-300 font-space-grotesk">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button 
                        onClick={() => module.id === 1 ? navigate('/modulos/1-premium') : module.id === 2 ? navigate('/modulos/2-premium') : null}
                        className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold font-space-grotesk hover:from-pink-600 hover:to-cyan-600 transition-all duration-300"
                      >
                        <Play className="w-4 h-4" />
                        <span>Começar Módulo</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Modulos;
