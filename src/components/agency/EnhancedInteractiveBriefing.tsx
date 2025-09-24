import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight, MessageCircle, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

interface BriefingData {
  businessType: string;
  objective: string;
  currentLevel: string;
  challenge: string;
  budget: string;
  timeline: string;
}

const EnhancedInteractiveBriefing = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [briefingData, setBriefingData] = useState<BriefingData>({
    businessType: '',
    objective: '',
    currentLevel: '',
    challenge: '',
    budget: '',
    timeline: ''
  });

  const questions = [
    {
      title: "Qual o tipo do seu negócio?",
      subtitle: "Vamos personalizar nossa abordagem para seu setor",
      options: [
        {
          value: "ecommerce",
          label: "E-commerce/Loja Online",
          description: "Automatizamos todo seu funil: desde a captação até pós-venda",
          problems: ["Carrinho abandonado", "Atendimento 24h", "Gestão de estoque"],
          icon: "🛒"
        },
        {
          value: "servicos",
          label: "Prestação de Serviços",
          description: "Qualificação automática e agendamentos inteligentes",
          problems: ["Leads desqualificados", "No-show em agendamentos", "Follow-up manual"],
          icon: "⚙️"
        },
        {
          value: "consultoria",
          label: "Consultoria/Coaching",
          description: "Nutrição de leads e vendas de alto ticket automatizadas",
          problems: ["Ciclo de venda longo", "Educação do mercado", "Escalonamento"],
          icon: "💼"
        },
        {
          value: "saas",
          label: "SaaS/Software",
          description: "Onboarding, retenção e upsell automatizados",
          problems: ["Churn alto", "Baixa adoção", "Suporte repetitivo"],
          icon: "💻"
        },
        {
          value: "fisico",
          label: "Negócio Físico",
          description: "Integração online/offline e automação local",
          problems: ["Agendamentos", "Remarketing local", "Gestão de filas"],
          icon: "🏪"
        },
        {
          value: "infoprodutos",
          label: "Infoprodutos/Cursos",
          description: "Funis completos e entrega automatizada de conteúdo",
          problems: ["Baixa conversão", "Evasão de alunos", "Suporte técnico"],
          icon: "📚"
        },
        {
          value: "agencia",
          label: "Agência/Freelancer",
          description: "Automação para captação e gestão de clientes",
          problems: ["Prospecção manual", "Gestão de projetos", "Cobrança de clientes"],
          icon: "🎯"
        }
      ]
    },
    {
      title: "Qual seu principal objetivo?",
      subtitle: "Entenda como podemos acelerar seus resultados",
      options: [
        {
          value: "leads",
          label: "Gerar Mais Leads Qualificados",
          description: "Captação automatizada com IA + qualificação inteligente",
          problems: ["Leads frios", "Baixa qualidade", "Alto CAC"],
          icon: "🎯"
        },
        {
          value: "vendas",
          label: "Aumentar Conversão em Vendas",
          description: "Funis otimizados + follow-up automático + objeções",
          problems: ["Perda de leads", "Ciclo longo", "Baixa conversão"],
          icon: "💰"
        },
        {
          value: "atendimento",
          label: "Automatizar Atendimento",
          description: "ChatBot + IA + integração WhatsApp Business",
          problems: ["Demanda 24h", "Equipe sobrecarregada", "Respostas lentas"],
          icon: "🤖"
        },
        {
          value: "operacional",
          label: "Otimizar Processos Internos",
          description: "Automação de tarefas + integração de sistemas",
          problems: ["Retrabalho", "Erros manuais", "Perda de tempo"],
          icon: "⚡"
        },
        {
          value: "retencao",
          label: "Melhorar Retenção de Clientes",
          description: "Jornada pós-venda + reativação automática",
          problems: ["Churn alto", "Baixo LTV", "Clientes inativos"],
          icon: "🔄"
        },
        {
          value: "escalar",
          label: "Escalar Sem Aumentar Custos",
          description: "Automação completa + IA para crescimento sustentável",
          problems: ["Custos altos", "Gargalos operacionais", "Dependência de pessoas"],
          icon: "📈"
        }
      ]
    },
    {
      title: "Qual seu nível atual de automação?",
      subtitle: "Vamos partir do ponto certo para maximizar seus resultados",
      options: [
        {
          value: "zero",
          label: "Zero Automação",
          description: "Tudo manual - Ideal para começar do básico",
          problems: ["Muito tempo gasto", "Erros frequentes", "Não consegue escalar"],
          icon: "🚀"
        },
        {
          value: "basico",
          label: "Automação Básica",
          description: "Algumas ferramentas - Vamos otimizar e integrar",
          problems: ["Ferramentas isoladas", "Dados espalhados", "Baixo ROI"],
          icon: "⚙️"
        },
        {
          value: "intermediario",
          label: "Nível Intermediário",
          description: "Já usa algumas automações - Vamos profissionalizar",
          problems: ["Falta integração", "Muitas ferramentas", "Processos complexos"],
          icon: "🔧"
        },
        {
          value: "avancado",
          label: "Automação Avançada",
          description: "Sistema robusto - Vamos otimizar performance",
          problems: ["Máximo desempenho", "Otimização fina", "Novos canais"],
          icon: "🎯"
        }
      ]
    },
    {
      title: "Qual seu maior desafio atual?",
      subtitle: "Entenda exatamente onde estamos focando primeiro",
      options: [
        {
          value: "tempo",
          label: "Falta de Tempo",
          description: "Automatizamos 80% das tarefas repetitivas em 30 dias",
          problems: ["Trabalha 12h/dia", "Sem tempo para estratégia", "Burnout"],
          icon: "⏰"
        },
        {
          value: "qualidade",
          label: "Qualidade dos Leads",
          description: "IA qualifica automaticamente + score de prioridade",
          problems: ["Muitos leads frios", "Tempo perdido", "Baixa conversão"],
          icon: "🎯"
        },
        {
          value: "custos",
          label: "Custos Altos de Aquisição",
          description: "Otimização de funis + remarketing automatizado",
          problems: ["CAC alto", "ROI baixo", "Orçamento apertado"],
          icon: "💸"
        },
        {
          value: "concorrencia",
          label: "Concorrência Acirrada",
          description: "Diferenciação com IA + atendimento instantâneo",
          problems: ["Preço baixo", "Comoditização", "Perda de clientes"],
          icon: "⚔️"
        },
        {
          value: "crescimento",
          label: "Dificuldade para Escalar",
          description: "Automação completa + sistemas integrados",
          problems: ["Gargalos", "Dependência pessoal", "Complexidade"],
          icon: "📈"
        }
      ]
    },
    {
      title: "Qual seu investimento mensal em marketing/tecnologia?",
      subtitle: "Vamos dimensionar a solução ideal para seu orçamento",
      options: [
        {
          value: "ate5k",
          label: "Até R$ 5.000",
          description: "Automação essencial + Setup básico + Suporte",
          problems: ["Orçamento limitado", "ROI rápido", "Foco no essencial"],
          icon: "💡"
        },
        {
          value: "5k-15k",
          label: "R$ 5.000 - R$ 15.000",
          description: "Automação avançada + IA + Integrações + Consultoria",
          problems: ["Otimização máxima", "Múltiplos canais", "Escalabilidade"],
          icon: "⚡"
        },
        {
          value: "15k-50k",
          label: "R$ 15.000 - R$ 50.000",
          description: "Solução enterprise + IA avançada + Suporte premium",
          problems: ["Complexidade alta", "Múltiplas marcas", "Performance máxima"],
          icon: "🚀"
        },
        {
          value: "50k+",
          label: "Acima de R$ 50.000",
          description: "Solução customizada + Dedicação exclusiva + Inovação",
          problems: ["Liderança mercado", "Tecnologia própria", "Vantagem competitiva"],
          icon: "👑"
        }
      ]
    },
    {
      title: "Quando você quer ver os primeiros resultados?",
      subtitle: "Vamos alinhar expectativas e cronograma de implementação",
      options: [
        {
          value: "urgente",
          label: "Urgente (até 7 dias)",
          description: "Setup rápido + automações essenciais + suporte intensivo",
          problems: ["Situação crítica", "Perdendo dinheiro", "Precisa agir rápido"],
          icon: "🚨"
        },
        {
          value: "30dias",
          label: "Em até 30 dias",
          description: "Implementação completa + testes + otimização",
          problems: ["Planejamento mensal", "Lançamento produto", "Meta trimestral"],
          icon: "📅"
        },
        {
          value: "60dias",
          label: "Em até 60 dias",
          description: "Projeto robusto + integração completa + treinamento",
          problems: ["Projeto estruturado", "Mudança processos", "Equipe grande"],
          icon: "🏗️"
        },
        {
          value: "trimestre",
          label: "Próximo Trimestre",
          description: "Transformação completa + inovação + resultados sustentáveis",
          problems: ["Planejamento anual", "Orçamento aprovado", "Visão longo prazo"],
          icon: "🎯"
        }
      ]
    }
  ];

  const handleOptionSelect = (value: string) => {
    const newData = { ...briefingData };
    const currentQuestion = questions[currentStep];
    
    switch (currentStep) {
      case 0: newData.businessType = value; break;
      case 1: newData.objective = value; break;
      case 2: newData.currentLevel = value; break;
      case 3: newData.challenge = value; break;
      case 4: newData.budget = value; break;
      case 5: newData.timeline = value; break;
    }
    
    setBriefingData(newData);
    
    // Move to next step or complete
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(questions.length); // This will trigger completion
      }
    }, 300);
  };

  const activateSofIA = async () => {
    const summary = `🚀 *BRIEFING FLUXROW COMPLETO*

📊 *PERFIL DO NEGÓCIO:*
• Tipo: ${briefingData.businessType}
• Objetivo: ${briefingData.objective}
• Nível Atual: ${briefingData.currentLevel}
• Maior Desafio: ${briefingData.challenge}
• Investimento: ${briefingData.budget}
• Timeline: ${briefingData.timeline}

🎯 Quero uma consultoria estratégica personalizada para meu negócio!`;

    // Save briefing context for Sof.IA
    localStorage.setItem('briefingContext', JSON.stringify({
      ...briefingData,
      summary,
      timestamp: new Date().toISOString()
    }));

    // Send to webhook
    try {
      await fetch('https://hook.us1.make.com/YOUR_WEBHOOK_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ briefing: briefingData, timestamp: new Date().toISOString() })
      });
    } catch (error) {
      console.log('Webhook error:', error);
    }

    // Try to activate Sof.IA widget
    try {
      // Method 1: Try to find and click the widget button
      const chatWidget = document.querySelector('[data-gptmaker-widget], .gptmaker-widget, #gptmaker-widget, .chat-widget, [class*="chat"], [class*="widget"]');
      if (chatWidget) {
        (chatWidget as HTMLElement).click();
        console.log('Sof.IA activated via click');
        return;
      }

      // Method 2: Try common global methods
      if ((window as any).gptmaker?.open) {
        (window as any).gptmaker.open();
        console.log('Sof.IA activated via gptmaker.open');
        return;
      }

      if ((window as any).openChat) {
        (window as any).openChat();
        console.log('Sof.IA activated via openChat');
        return;
      }

      // Method 3: Dispatch custom event that might trigger the widget
      window.dispatchEvent(new CustomEvent('activateSofIA', { detail: { briefing: briefingData } }));
      
      // Wait a bit and check if widget opened
      setTimeout(() => {
        const activeWidget = document.querySelector('.chat-open, .widget-open, [class*="active"]');
        if (!activeWidget) {
          // Fallback to WhatsApp
          const whatsappUrl = `https://wa.me/5541992361868?text=${encodeURIComponent(summary)}`;
          window.open(whatsappUrl, '_blank');
        }
      }, 1000);

    } catch (error) {
      console.log('Error activating Sof.IA:', error);
      // Fallback to WhatsApp
      const whatsappUrl = `https://wa.me/5541992361868?text=${encodeURIComponent(summary)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const isComplete = currentStep === questions.length;

  return (
    <section className="py-20 bg-gradient-to-br from-black via-purple-950/20 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,69,255,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Briefing Estratégico <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Inteligente</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Em 2 minutos, nossa IA analisa seu negócio e cria uma estratégia personalizada
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between text-sm text-white/80 mb-2">
            <span>Pergunta {Math.min(currentStep + 1, questions.length)} de {questions.length}</span>
            <span>{Math.round(progress)}% completo</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {!isComplete ? (
          <Card className="max-w-4xl mx-auto bg-black/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {questions[currentStep].title}
                </h3>
                <p className="text-white/80">
                  {questions[currentStep].subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentStep].options.map((option, index) => (
                  <div
                    key={option.value}
                    onClick={() => handleOptionSelect(option.value)}
                    className="p-6 border border-gray-600 rounded-lg cursor-pointer hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">{option.icon}</span>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                          {option.label}
                        </h4>
                        <p className="text-white/80 text-sm mb-3">
                          {option.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {option.problems.map((problem, idx) => (
                            <span key={idx} className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">
                              {problem}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {currentStep > 0 && (
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-4xl mx-auto bg-black/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">
                Análise Completa! 🎯
              </h3>
              
              <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg p-6 mb-8">
                <p className="text-lg text-gray-300 mb-4">
                  Baseado nas suas respostas, identificamos <span className="text-cyan-400 font-bold">oportunidades específicas</span> para automatizar seu negócio e <span className="text-green-400 font-bold">aumentar seus resultados em até 300%</span>.
                </p>
                <p className="text-gray-400">
                  Nossa IA já preparou uma estratégia personalizada. Vamos conversar sobre como implementar?
                </p>
              </div>

              <Button
                onClick={activateSofIA}
                className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white text-lg px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Falar com Consultor
              </Button>
              
              <p className="text-gray-500 text-sm mt-4">
                Consultoria gratuita • Sem compromisso • Resposta em 5 minutos
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default EnhancedInteractiveBriefing;