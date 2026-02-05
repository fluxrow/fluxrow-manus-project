import { MessageCircle, Instagram, Facebook, Mail, ArrowDown, Users, BarChart3, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const channels = [
  {
    icon: MessageCircle,
    name: "WhatsApp",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    features: ["Número virtual exclusivo", "Respostas automáticas", "Catálogo de lojas"],
  },
  {
    icon: Instagram,
    name: "Instagram",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    features: ["Respostas a DMs", "Stories interativos", "Link direto para WhatsApp"],
  },
  {
    icon: Facebook,
    name: "Facebook",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    features: ["Messenger automatizado", "FAQ integrado", "Atendimento 24h"],
  },
  {
    icon: Mail,
    name: "Email",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    features: ["Respostas contextuais", "Encaminhamento para setores", "Templates automáticos"],
  },
];

const outputs = [
  { icon: BarChart3, name: "Dashboard Analytics", description: "Métricas em tempo real" },
  { icon: Users, name: "Atendimento Humano", description: "Quando necessário" },
  { icon: Settings, name: "Integrações", description: "BeMall / Group Shopping" },
];

const ChannelsSection = () => {
  return (
    <section className="py-16 md:py-24">
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

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {channels.map((channel, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-700/50 hover:border-blue-500/40 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full ${channel.bgColor} flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className={`w-8 h-8 ${channel.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {channel.name}
                </h3>
                <ul className="space-y-2">
                  {channel.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center my-8">
          <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center animate-bounce">
            <ArrowDown className="w-8 h-8 text-teal-400" />
          </div>
        </div>

        {/* Central AI */}
        <div className="max-w-2xl mx-auto mb-8">
          <Card className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 border-teal-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Central de IA Unificada
              </h3>
              <p className="text-gray-300">
                Todas as mensagens convergem para uma única plataforma inteligente que processa, responde e aprende automaticamente
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center my-8">
          <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center animate-bounce">
            <ArrowDown className="w-8 h-8 text-teal-400" />
          </div>
        </div>

        {/* Outputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {outputs.map((output, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                  <output.icon className="w-6 h-6 text-teal-400" />
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
    </section>
  );
};

export default ChannelsSection;
