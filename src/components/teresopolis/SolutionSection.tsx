import { Bot, Zap, MessageCircle, Filter, BarChart3, Building, Check, Clock, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const solutions = [
  {
    icon: Phone,
    title: "Telefone com IA",
    description: "IA atende ligações automaticamente, responde perguntas frequentes e sugere continuar pelo WhatsApp",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp 24/7",
    description: "Canal principal de atendimento, com respostas instantâneas para qualquer dúvida do shopping",
  },
  {
    icon: Zap,
    title: "Respostas em segundos",
    description: "Cliente pergunta, IA responde instantaneamente — sem espera na linha ou fila",
  },
  {
    icon: Filter,
    title: "Triagem inteligente",
    description: "IA identifica quando precisa de humano e direciona automaticamente para a equipe",
  },
  {
    icon: Building,
    title: "Fluxo para lojistas",
    description: "Lojistas enviam demandas pelo WhatsApp, IA coleta os detalhes e encaminha ao setor responsável",
  },
  {
    icon: BarChart3,
    title: "Dashboard de atendimentos",
    description: "Acompanhe volume de atendimentos, principais dúvidas e horários de pico",
  },
];

const phoneCallSimulation = [
  { type: "system", message: "📞 Ligação recebida...", delay: 0 },
  { type: "bot", message: "Olá! Bem-vindo ao Teresópolis Shopping! Sou a assistente virtual. Como posso ajudar?", delay: 1500 },
  { type: "user", message: "Que horas o shopping abre no domingo?", delay: 3000 },
  { type: "bot", message: "Aos domingos, funcionamos das 14h às 20h! 😊 Posso te enviar mais informações pelo WhatsApp? Assim você tem tudo salvo e pode consultar quando quiser.", delay: 4500 },
  { type: "user", message: "Pode sim!", delay: 6500 },
  { type: "bot", message: "Perfeito! Vou te enviar um link agora. É só clicar e a conversa no WhatsApp já abre direto. Obrigada pela ligação! 💚", delay: 8000 },
];

const SolutionSection = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages(prev => {
        if (prev >= phoneCallSimulation.length) {
          setTimeout(() => setVisibleMessages(0), 4000);
          return prev;
        }
        
        const nextMessage = phoneCallSimulation[prev];
        if (nextMessage?.type === 'bot') {
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 1000);
        }
        
        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-slate-900/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Nossa Solução
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Atendimento Inteligente: Telefone + WhatsApp
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A IA atende as ligações, responde as dúvidas e redireciona o cliente para o WhatsApp — onde a conversa continua automaticamente
          </p>
        </div>

        {/* Flow: Phone → AI → WhatsApp */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <Phone className="w-6 h-6 text-blue-400" />
              <span className="text-blue-300 font-medium">Cliente liga</span>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-500 rotate-90 md:rotate-0" />
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-teal-500/10 border border-teal-500/30">
              <Bot className="w-6 h-6 text-teal-400" />
              <span className="text-teal-300 font-medium">IA atende e responde</span>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-500 rotate-90 md:rotate-0" />
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-green-500/10 border border-green-500/30">
              <MessageCircle className="w-6 h-6 text-green-400" />
              <span className="text-green-300 font-medium">Conversa no WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Phone Call Simulation */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-6 border border-emerald-500/30 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Simulação: Ligação com IA</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs">IA atendendo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 min-h-[320px]">
              {phoneCallSimulation.slice(0, visibleMessages).map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : msg.type === 'system' ? 'justify-center' : 'justify-start'} animate-fade-in`}
                >
                  {msg.type === 'system' ? (
                    <div className="px-4 py-2 rounded-full bg-slate-700/50 text-gray-400 text-sm">
                      {msg.message}
                    </div>
                  ) : (
                    <>
                      {msg.type === 'bot' && (
                        <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center mr-2 flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div 
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          msg.type === 'user' 
                            ? 'bg-blue-600 text-white rounded-br-md' 
                            : 'bg-slate-700 text-gray-200 rounded-bl-md'
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                      </div>
                      {msg.type === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center ml-2 flex-shrink-0">
                          <span className="text-white text-xs font-bold">👤</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center mr-2">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-slate-700 rounded-2xl px-4 py-3 rounded-bl-md">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {visibleMessages >= phoneCallSimulation.length && (
              <div className="mt-6 pt-4 border-t border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-medium">Cliente redirecionado ao WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">30 segundos</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
