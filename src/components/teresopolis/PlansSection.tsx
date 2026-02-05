import { Check, MessageCircle, Zap, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essencial",
    subtitle: "Atendimento Básico",
    price: "1.800",
    implementation: "1.500",
    icon: MessageCircle,
    color: "blue",
    popular: false,
    description: "Ideal para começar a automatizar",
    features: [
      "WhatsApp + 1 canal adicional (Insta OU Facebook)",
      "IA treinada com FAQ do shopping",
      "Respostas automáticas B2C",
      "Dashboard básico",
      "Suporte por email",
    ],
    notIncluded: [
      "Atendimento B2B (lojistas)",
      "Analytics avançado",
      "Integrações com sistemas",
      "Gamificação",
    ],
  },
  {
    name: "Profissional",
    subtitle: "Multicanal Completo",
    price: "3.400",
    implementation: "3.000",
    icon: Zap,
    color: "teal",
    popular: true,
    description: "Ideal para operação completa",
    features: [
      "Todos os canais (WhatsApp + Insta + FB + Email)",
      "IA para B2C + B2B (lojistas)",
      "Triagem inteligente para setores",
      "Dashboard de analytics completo",
      "Captura de dados de clientes",
      "Suporte prioritário",
    ],
    notIncluded: [
      "Integrações com sistemas",
      "Gamificação para lojistas",
      "BI avançado",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Inteligência Total",
    price: "4.200",
    implementation: "4.000",
    icon: Crown,
    color: "purple",
    popular: false,
    description: "Ideal para transformação digital completa",
    features: [
      "Tudo do Profissional +",
      "Integrações com Group Shopping / BeMall",
      "Sistema de gamificação para lojistas",
      "BI avançado com insights de comportamento",
      "Reuniões mensais de otimização",
      "Suporte premium (WhatsApp direto)",
    ],
    notIncluded: [],
  },
];

const PlansSection = () => {
  const getColorClasses = (color: string, popular: boolean) => {
    const colors: Record<string, { border: string; bg: string; text: string; button: string }> = {
      blue: {
        border: popular ? "border-blue-500" : "border-blue-500/20",
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        button: "bg-blue-600 hover:bg-blue-700",
      },
      teal: {
        border: popular ? "border-teal-500" : "border-teal-500/20",
        bg: "bg-teal-500/10",
        text: "text-teal-400",
        button: "bg-teal-600 hover:bg-teal-700",
      },
      purple: {
        border: popular ? "border-purple-500" : "border-purple-500/20",
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        button: "bg-purple-600 hover:bg-purple-700",
      },
    };
    return colors[color];
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
            Investimento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Planos por Valor Entregue
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta às necessidades do shopping. Todos incluem setup completo e suporte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.popular);
            return (
              <Card
                key={index}
                className={`relative bg-slate-900/50 ${colors.border} ${plan.popular ? "border-2 scale-105" : ""} transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-teal-500 text-white text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-2">
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <p className={`text-sm ${colors.text}`}>{plan.subtitle}</p>
                </CardHeader>

                <CardContent className="pt-4">
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-gray-400 text-lg">R$</span>
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">/mês</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">
                      Implementação: R$ {plan.implementation}
                    </p>
                  </div>

                  <p className="text-gray-400 text-sm text-center mb-6 pb-6 border-b border-slate-700/50">
                    {plan.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-700/50">
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 opacity-50">
                          <span className="w-5 h-5 flex items-center justify-center text-gray-500">—</span>
                          <span className="text-gray-500 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button
                    className={`w-full ${colors.button} text-white`}
                    onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Tenho interesse no plano " + plan.name + " para o Teresópolis Shopping", "_blank")}
                  >
                    Escolher {plan.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Valores podem ser ajustados conforme necessidades específicas do projeto
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
