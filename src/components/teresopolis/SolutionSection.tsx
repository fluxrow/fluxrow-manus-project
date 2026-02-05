import { Bot, Zap, MessageCircle, GitMerge, Filter, BarChart3, UserPlus, Building, Check, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const solutions = [
  {
    icon: Bot,
    title: "IA responde 24/7",
    description: "Atendimento automático para dúvidas comuns, qualquer hora do dia ou da noite",
  },
  {
    icon: Zap,
    title: "Respostas em <5 segundos",
    description: "Cliente pergunta, IA responde instantaneamente sem espera",
  },
  {
    icon: MessageCircle,
    title: "Linguagem adaptada",
    description: "Tom conservador e claro para o público do shopping",
  },
  {
    icon: GitMerge,
    title: "Todos os canais unificados",
    description: "WhatsApp + Instagram + Facebook + Email em uma só tela",
  },
  {
    icon: Filter,
    title: "Triagem inteligente",
    description: "IA identifica casos que precisam de humano e direciona automaticamente",
  },
  {
    icon: BarChart3,
    title: "Dashboard de insights",
    description: "Veja as maiores demandas, horários de pico, satisfação em tempo real",
  },
  {
    icon: UserPlus,
    title: "Captura automática de dados",
    description: "Forma base de clientes para campanhas futuras automaticamente",
  },
  {
    icon: Building,
    title: "Portal do Lojista integrado",
    description: "Canal exclusivo para comunicação B2B com lojistas",
  },
];

const chatSimulation = [
  { type: "user", message: "Oi, que horas o shopping abre?", delay: 0 },
  { type: "bot", message: "Olá! 😊 O Teresópolis Shopping funciona de segunda a sábado das 10h às 22h, e domingos das 14h às 20h. Posso ajudar com mais algo?", delay: 1500 },
  { type: "user", message: "Vocês tem Renner?", delay: 3000 },
  { type: "bot", message: "Sim! A Renner é uma das nossas lojas âncoras e fica no térreo. É a única Renner da cidade! 🛍️ O shopping fica na Rua Edmundo Bittencourt, 101. Posso ajudar com mais algo?", delay: 4500 },
];

const SolutionSection = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages(prev => {
        if (prev >= chatSimulation.length) {
          // Reset after showing all
          setTimeout(() => setVisibleMessages(0), 3000);
          return prev;
        }
        
        const nextMessage = chatSimulation[prev];
        if (nextMessage?.type === 'bot') {
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 1000);
        }
        
        return prev + 1;
      });
    }, 2000);

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
            Central de IA Multicanal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma plataforma completa que resolve cada um dos problemas identificados com tecnologia de ponta e simplicidade de uso
          </p>
        </div>

        {/* Chat Simulation */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-6 border border-emerald-500/30 shadow-2xl">
            {/* Chat Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Assistente IA</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs">Online 24/7</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs">Teresópolis Shopping</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4 min-h-[280px]">
              {chatSimulation.slice(0, visibleMessages).map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mr-2 flex-shrink-0">
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
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mr-2">
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

            {/* Status Footer */}
            {visibleMessages >= chatSimulation.length && (
              <div className="mt-6 pt-4 border-t border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-medium">Atendimento resolvido pela IA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">8 segundos</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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