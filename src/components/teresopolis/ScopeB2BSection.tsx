import { MessageCircle, Bot, Building, Send, ArrowRight, Check, Clock, Wrench, Receipt, Bell, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const flowSteps = [
  {
    step: "1",
    icon: MessageCircle,
    title: "Lojista envia mensagem",
    description: "O lojista entra em contato pelo WhatsApp do shopping com sua demanda",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    step: "2",
    icon: Bot,
    title: "IA coleta os detalhes",
    description: "A IA faz perguntas para entender o que precisa: qual loja, tipo de demanda, urgência, detalhes",
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
  },
  {
    step: "3",
    icon: Send,
    title: "Encaminha ao setor responsável",
    description: "Com todas as informações organizadas, a IA envia a solicitação para o setor correto dar andamento",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
];

const demandTypes = [
  { icon: Wrench, label: "Manutenção", example: "Ar condicionado com problema na loja 12" },
  { icon: Receipt, label: "Financeiro", example: "Preciso da 2ª via do boleto de março" },
  { icon: Bell, label: "Comunicados", example: "Quero saber sobre o horário especial de feriado" },
  { icon: HelpCircle, label: "Dúvidas gerais", example: "Como funciona a reserva de espaço para evento?" },
];

const ScopeB2BSection = () => {
  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
            Escopo B2B
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Atendimento aos Lojistas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fluxo simples e eficiente: o lojista fala com a IA, ela coleta os detalhes e encaminha para o setor responsável
          </p>
        </div>

        {/* Flow Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flowSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className={`bg-slate-900/50 border-slate-700/50 hover:scale-105 transition-all duration-300 h-full`}>
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {step.step}
                    </div>
                    <div className={`w-14 h-14 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto mb-4`}>
                      <step.icon className={`w-7 h-7 ${step.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-teal-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Demand Types */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-white text-center mb-6">
            Tipos de demandas que a IA consegue coletar e encaminhar:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {demandTypes.map((demand, index) => (
              <Card key={index} className="bg-slate-900/50 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <demand.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{demand.label}</h4>
                    <p className="text-gray-400 text-xs italic">Ex: "{demand.example}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              💡 A IA não resolve a demanda — ela organiza e encaminha. O setor responsável recebe tudo pronto para agir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopeB2BSection;
