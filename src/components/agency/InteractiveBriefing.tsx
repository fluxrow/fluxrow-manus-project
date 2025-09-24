import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, MessageCircle, CheckCircle } from 'lucide-react';

interface BriefingData {
  businessType: string;
  objective: string;
  currentLevel: string;
  challenge: string;
}

const InteractiveBriefing = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [briefingData, setBriefingData] = useState<BriefingData>({
    businessType: '',
    objective: '',
    currentLevel: '',
    challenge: ''
  });

  const questions = [
    {
      id: 'businessType',
      title: 'Qual o tipo do seu negócio?',
      options: [
        { 
          value: 'fisico', 
          label: 'Negócio Físico', 
          description: 'Loja, restaurante, clínica',
          icon: '🏪'
        },
        { 
          value: 'servico', 
          label: 'Serviço / Consultoria', 
          description: 'Advogado, marketing, treinamento',
          icon: '💼'
        },
        { 
          value: 'infoproduto', 
          label: 'Infoproduto', 
          description: 'Curso, mentoria, e-book',
          icon: '📚'
        },
        { 
          value: 'saas', 
          label: 'Startup SaaS', 
          description: 'Software, apps e automações',
          icon: '💻'
        },
        { 
          value: 'criador', 
          label: 'Criador de Conteúdo', 
          description: 'YouTube, Instagram, TikTok',
          icon: '🎬'
        }
      ]
    },
    {
      id: 'objective',
      title: 'O que você quer melhorar agora?',
      options: [
        { 
          value: 'vendas', 
          label: 'Aumentar vendas online', 
          description: 'Conversão e faturamento',
          icon: '📈'
        },
        { 
          value: 'automacao', 
          label: 'Criar automações inteligentes', 
          description: 'Fluxos e IA trabalhando 24h',
          icon: '🤖'
        },
        { 
          value: 'presenca', 
          label: 'Melhorar presença digital', 
          description: 'Site e redes sociais',
          icon: '🌐'
        },
        { 
          value: 'site', 
          label: 'Criar site que converte', 
          description: 'Landing pages e performance',
          icon: '🚀'
        },
        { 
          value: 'produto', 
          label: 'Criar produto/SaaS do zero', 
          description: 'MVP e validação',
          icon: '💡'
        }
      ]
    },
    {
      id: 'currentLevel',
      title: 'Nível atual de operação',
      options: [
        { 
          value: 'inicial', 
          label: 'Não tenho nada estruturado', 
          description: 'Começando do zero',
          icon: '🌱'
        },
        { 
          value: 'basico', 
          label: 'Tenho redes, mas vendo pouco', 
          description: 'Presença sem consistência',
          icon: '📱'
        },
        { 
          value: 'vendendo', 
          label: 'Já vendo, quero escalar', 
          description: 'Revenue established',
          icon: '💰'
        },
        { 
          value: 'automatizado', 
          label: 'Uso automações, quero profissionalizar', 
          description: 'Next level optimization',
          icon: '⚡'
        }
      ]
    }
  ];

  const handleOptionSelect = (questionId: string, value: string) => {
    setBriefingData(prev => ({ ...prev, [questionId]: value }));
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleWhatsAppRedirect = () => {
    const summary = `
📋 *Resumo do Briefing Fluxrow*

🏢 *Tipo de Negócio:* ${briefingData.businessType}
🎯 *Objetivo Principal:* ${briefingData.objective}
📊 *Nível Atual:* ${briefingData.currentLevel}
💭 *Desafio:* ${briefingData.challenge || 'Não informado'}

Olá! Completei o briefing no site da Fluxrow e gostaria de conversar sobre como vocês podem me ajudar.
    `.trim();

    const whatsappUrl = `https://wa.me/5547999999999?text=${encodeURIComponent(summary)}`;
    window.open(whatsappUrl, '_blank');

    // Send to n8n webhook
    fetch('https://webhook.n8n.cloud/fluxrow-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...briefingData,
        timestamp: new Date().toISOString(),
        source: 'agency_briefing'
      })
    }).catch(err => console.log('Webhook error:', err));
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const isCompleted = currentStep >= questions.length;

  return (
    <section id="briefing" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title font-space-grotesk gradient-text">
            Briefing Interativo
          </h2>
          <p className="text-white/80 text-lg">
            Responda algumas perguntas para recebermos um atendimento personalizado
          </p>
        </div>
        
        <div className="glass-card p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-white/80 mb-2">
              <span>Progresso</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {!isCompleted ? (
            <>
              {/* Current Question */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-space-grotesk text-white mb-6">
                  {questions[currentStep]?.title}
                </h3>
                
                <div className="space-y-4">
                  {questions[currentStep]?.options.map((option, index) => (
                    <button
                      key={option.value}
                      onClick={() => handleOptionSelect(questions[currentStep].id, option.value)}
                      className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left group ${
                        briefingData[questions[currentStep].id as keyof BriefingData] === option.value
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/5'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{option.icon}</span>
                        <div className="flex-1">
                          <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {option.label}
                          </div>
                          <div className="text-sm text-white/80">
                            {option.description}
                          </div>
                        </div>
                        {briefingData[questions[currentStep].id as keyof BriefingData] === option.value && (
                          <CheckCircle className="w-5 h-5 text-cyan-400" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Challenge Input (Last Step) */}
              {currentStep === questions.length - 1 && (
                <div className="mb-8">
                  <label className="block text-white font-semibold mb-3">
                    Qual seu maior desafio hoje? (Opcional)
                  </label>
                  <textarea
                    value={briefingData.challenge}
                    onChange={(e) => setBriefingData(prev => ({ ...prev, challenge: e.target.value }))}
                    placeholder="Descreva seu principal obstáculo ou o que mais te preocupa no momento..."
                    className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    rows={4}
                  />
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    currentStep === 0
                      ? 'text-white/60 cursor-not-allowed'
                      : 'text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Anterior
                </button>

                {currentStep === questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentStep(questions.length)}
                    className="cta-primary font-space-grotesk px-8 py-3"
                  >
                    Ver Resumo
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    disabled={!briefingData[questions[currentStep].id as keyof BriefingData]}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      !briefingData[questions[currentStep].id as keyof BriefingData]
                        ? 'text-white/60 cursor-not-allowed'
                        : 'text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Próxima
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Briefing Summary */
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold font-space-grotesk text-white mb-6">
                Briefing Concluído!
              </h3>
              
              <div className="bg-gray-800/50 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
                <h4 className="font-semibold text-cyan-400 mb-4">Resumo das suas respostas:</h4>
                <div className="space-y-3 text-white/80">
                  <p><strong>Tipo de negócio:</strong> {briefingData.businessType}</p>
                  <p><strong>Objetivo principal:</strong> {briefingData.objective}</p>
                  <p><strong>Nível atual:</strong> {briefingData.currentLevel}</p>
                  {briefingData.challenge && (
                    <p><strong>Maior desafio:</strong> {briefingData.challenge}</p>
                  )}
                </div>
              </div>
              
              <p className="text-white/80 mb-8">
                Nosso time vai analisar suas respostas e preparar um atendimento sob medida para o seu negócio.
              </p>
              
              <button
                onClick={handleWhatsAppRedirect}
                className="cta-primary font-space-grotesk text-lg px-10 py-4 group"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Quero falar com a Fluxrow agora
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveBriefing;