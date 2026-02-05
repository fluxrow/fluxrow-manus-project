import { Clock, Store, Wifi, Car, Calendar, Tag, MapPin, Search, Bot, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: Clock,
    category: "Horários",
    question: "Que horas abre?",
    answer: "O Teresópolis Shopping funciona de segunda a sábado das 10h às 22h, e domingos das 14h às 20h! 🛍️",
  },
  {
    icon: Store,
    category: "Lojas",
    question: "Tem Renner?",
    answer: "Sim! A Renner é uma das nossas lojas âncoras, no térreo. É a única Renner da cidade! Também temos Lojas Americanas! Tel: (21) 2643-3995 📍",
  },
  {
    icon: Wifi,
    category: "Serviços",
    question: "Tem wifi grátis?",
    answer: "Sim! Wi-Fi gratuito em todo o shopping. Conecte-se e aproveite! 📶",
  },
  {
    icon: Car,
    category: "Estacionamento",
    question: "Tem estacionamento?",
    answer: "Estacionamento coberto com Valet Parking disponível. Maior estacionamento da região! Aceitamos cartão e Pix 🚗",
  },
  {
    icon: Calendar,
    category: "Cinema",
    question: "Tem cinema?",
    answer: "Sim! Temos 4 salas de cinema, as únicas da cidade! Em breve, 1 sala VIP. Confira a programação no site! 🎬",
  },
  {
    icon: Tag,
    category: "Pet Friendly",
    question: "Posso levar meu pet?",
    answer: "Sim! Somos Pet Friendly! 🐾 Traga seu pet e aproveite o passeio. Confira as regras no @teresopolisshopping",
  },
  {
    icon: MapPin,
    category: "Localização",
    question: "Onde fica o shopping?",
    answer: "Rua Edmundo Bittencourt, 101 - Várzea, CEP 25953-030. A 90km do Rio de Janeiro, no coração de Teresópolis! 📍",
  },
  {
    icon: Search,
    category: "Achados e Perdidos",
    question: "Perdi minha carteira",
    answer: "Procure na Central de Atendimento. Também temos Fraldário, Bicicletário e Caixa Eletrônico! 🔍",
  },
];

const ScopeB2CSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Escopo B2C
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Atendimento aos Clientes Finais
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A IA será treinada para responder todas as perguntas mais frequentes dos visitantes do shopping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-700/50 hover:border-blue-500/40 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="p-4 border-b border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.category}
                    </h3>
                  </div>
                </div>

                {/* Chat Simulation */}
                <div className="p-4 space-y-3">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="flex items-end gap-2">
                      <div className="bg-blue-600 text-white rounded-2xl rounded-br-md px-3 py-2 max-w-[85%]">
                        <p className="text-xs">{item.question}</p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <User className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Bot Response */}
                  <div className="flex justify-start">
                    <div className="flex items-end gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-3 h-3 text-white" />
                      </div>
                      <div className="bg-slate-700 text-gray-200 rounded-2xl rounded-bl-md px-3 py-2 max-w-[85%]">
                        <p className="text-xs">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-400 flex items-center gap-1">
                      ✓ Resolvido pela IA
                    </span>
                    <span className="text-gray-500">~3s</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScopeB2CSection;