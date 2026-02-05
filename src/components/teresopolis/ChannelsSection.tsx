import { MessageCircle, Instagram, Facebook, Mail, ArrowDown, Users, BarChart3, Settings, Bot, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const channels = [
  {
    icon: MessageCircle,
    name: "WhatsApp",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    features: ["Número virtual exclusivo", "Respostas automáticas", "Catálogo de lojas"],
  },
  {
    icon: Instagram,
    name: "Instagram",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    features: ["Respostas a DMs", "Stories interativos", "Link direto para WhatsApp"],
  },
  {
    icon: Facebook,
    name: "Facebook",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    features: ["Messenger automatizado", "FAQ integrado", "Atendimento 24h"],
  },
  {
    icon: Mail,
    name: "Email",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    features: ["Respostas contextuais", "Encaminhamento para setores", "Templates automáticos"],
  },
];

const outputs = [
  { icon: BarChart3, name: "Dashboard", description: "Métricas em tempo real", color: "text-purple-400", bgColor: "bg-purple-500/10" },
  { icon: Users, name: "Humano", description: "Quando necessário", color: "text-orange-400", bgColor: "bg-orange-500/10" },
  { icon: Settings, name: "Sistemas", description: "BeMall / Group", color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
];

const ChannelsSection = () => {
  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Multicanal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Todos os Canais em Uma Só Plataforma
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unifique WhatsApp, Instagram, Facebook e Email em uma central inteligente
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="max-w-5xl mx-auto">
          {/* Input Channels */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {channels.map((channel, index) => (
              <Card
                key={index}
                className={`bg-slate-900/50 ${channel.borderColor} hover:scale-105 transition-all duration-300`}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-14 h-14 rounded-full ${channel.bgColor} flex items-center justify-center mx-auto mb-3`}>
                    <channel.icon className={`w-7 h-7 ${channel.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {channel.name}
                  </h3>
                  <ul className="space-y-1">
                    {channel.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 text-xs">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Animated Arrows Down */}
          <div className="flex justify-center gap-8 md:gap-16 my-4">
            {channels.map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <ChevronDown className="w-6 h-6 text-teal-400 animate-bounce" style={{ animationDelay: `${index * 100}ms` }} />
              </div>
            ))}
          </div>

          {/* Central AI Hub */}
          <div className="flex justify-center my-6">
            <Card className="bg-gradient-to-r from-blue-600/30 to-teal-600/30 border-teal-500/50 shadow-lg shadow-teal-500/20 max-w-xl w-full">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Central de IA Unificada
                </h3>
                <p className="text-gray-300 text-sm">
                  Todas as mensagens convergem para uma única plataforma inteligente que processa, responde e aprende automaticamente
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">🤖 IA Avançada</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">⚡ Tempo Real</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs">📊 Analytics</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Animated Arrows Down */}
          <div className="flex justify-center gap-8 my-4">
            {outputs.map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <ChevronDown className="w-6 h-6 text-teal-400 animate-bounce" style={{ animationDelay: `${index * 150}ms` }} />
              </div>
            ))}
          </div>

          {/* Outputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {outputs.map((output, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-2xl ${output.bgColor} flex items-center justify-center mx-auto mb-4`}>
                    <output.icon className={`w-7 h-7 ${output.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {output.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {output.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;