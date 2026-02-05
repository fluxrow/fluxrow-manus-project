import { Building2, Users, Smartphone, ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const integrations = [
  {
    name: "Group Shopping",
    company: "Group Software",
    icon: Building2,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    description: "Sistema de gestão financeira para shoppings",
    possibilities: [
      "Consulta de boletos em aberto",
      "Status de contratos",
      "Histórico de pagamentos",
      "Composição de cobrança",
    ],
  },
  {
    name: "BeMall CRM",
    company: "Be Sistemas",
    icon: Users,
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    description: "CRM especializado para shoppings centers",
    possibilities: [
      "Sincronizar dados de clientes",
      "Integração com promoções",
      "Portal do lojista",
      "Campanhas de marketing",
    ],
  },
  {
    name: "COM21 Online",
    company: "Group Software",
    icon: Smartphone,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    description: "App de gestão condominial e comunicação",
    possibilities: [
      "Notificações push",
      "Comunicados internos",
      "Portal do lojista mobile",
      "Abertura de chamados",
    ],
  },
];

const IntegrationsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Integrações
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Conexão com Seus Sistemas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Possibilidade de integração com os sistemas que o shopping já utiliza, conforme disponibilidade de APIs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-700/50 hover:border-blue-500/40 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl ${integration.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <integration.icon className={`w-8 h-8 ${integration.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">
                  {integration.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  {integration.company}
                </p>
                <p className="text-gray-400 mb-6">
                  {integration.description}
                </p>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    Possibilidades:
                  </p>
                  <ul className="space-y-2">
                    {integration.possibilities.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/50">
                  <span className="text-xs text-gray-500">
                    * Integração sob demanda, conforme APIs disponíveis
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
