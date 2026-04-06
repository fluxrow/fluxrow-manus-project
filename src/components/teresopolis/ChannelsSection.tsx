import { MessageCircle, Phone, Bot, BarChart3, Users, ChevronDown, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const mainChannels = [
  {
    icon: Phone,
    name: "Telefone",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    features: ["IA atende automaticamente", "Responde perguntas frequentes", "Sugere continuar no WhatsApp"],
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    features: ["Canal principal de atendimento", "Respostas automáticas 24/7", "Link direto enviado pela IA"],
  },
];

const outputs = [
  { icon: BarChart3, name: "Dashboard", description: "Métricas em tempo real", color: "text-purple-400", bgColor: "bg-purple-500/10" },
  { icon: Users, name: "Humano", description: "Quando necessário", color: "text-orange-400", bgColor: "bg-orange-500/10" },
];

const ChannelsSection = () => {
  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Canais de Atendimento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Telefone + WhatsApp em Uma Só Plataforma
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            O cliente liga, a IA atende e redireciona para o WhatsApp — tudo automatizado e integrado
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Input Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {mainChannels.map((channel, index) => (
              <Card
                key={index}
                className={`bg-slate-900/50 ${channel.borderColor} hover:scale-105 transition-all duration-300`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${channel.bgColor} flex items-center justify-center mx-auto mb-4`}>
                    <channel.icon className={`w-8 h-8 ${channel.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
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

          {/* Arrows Down */}
          <div className="flex justify-center gap-16 my-4">
            {mainChannels.map((_, index) => (
              <ChevronDown key={index} className="w-6 h-6 text-teal-400 animate-bounce" style={{ animationDelay: `${index * 100}ms` }} />
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
                  Central de IA
                </h3>
                <p className="text-gray-300 text-sm">
                  Todas as interações passam pela IA que processa, responde e aprende automaticamente
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">🤖 IA Avançada</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">⚡ Tempo Real</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Arrows Down */}
          <div className="flex justify-center gap-16 my-4">
            {outputs.map((_, index) => (
              <ChevronDown key={index} className="w-6 h-6 text-teal-400 animate-bounce" style={{ animationDelay: `${index * 150}ms` }} />
            ))}
          </div>

          {/* Outputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
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
