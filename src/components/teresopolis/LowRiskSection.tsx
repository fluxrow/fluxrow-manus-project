import { Shield, Puzzle, Wallet, TrendingUp, Users, Clock, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const arguments_ = [
  {
    icon: Shield,
    title: "V1 Simples",
    description: "Começamos com atendimento informativo, sem transações complexas. Risco mínimo de erros.",
  },
  {
    icon: Puzzle,
    title: "Sem Integração Inicial",
    description: "Primeira versão não depende de APIs externas. Funciona de forma independente.",
  },
  {
    icon: Wallet,
    title: "Investimento Acessível",
    description: "A partir de R$ 60/dia. Menos que o custo de um atendente de meio período.",
  },
  {
    icon: TrendingUp,
    title: "Escalamento Gradual",
    description: "Comece no plano Essencial e migre para Enterprise conforme resultados.",
  },
  {
    icon: Users,
    title: "IA Complementa",
    description: "Não substitui humanos. Libera a equipe para atividades que realmente precisam de pessoas.",
  },
  {
    icon: Clock,
    title: "Prazo Curto",
    description: "4 semanas para primeira entrega. Resultados rápidos e tangíveis.",
  },
  {
    icon: Eye,
    title: "Resultados Visíveis",
    description: "Dashboard mostra a economia e eficiência desde o primeiro dia de operação.",
  },
];

const LowRiskSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Segurança
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por Que o Risco é Baixo?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Projetamos uma implementação gradual e segura para garantir sucesso sem surpresas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {arguments_.map((arg, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <arg.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {arg.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {arg.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Card className="inline-block bg-gradient-to-r from-emerald-600/20 to-green-600/20 border-emerald-500/30 max-w-2xl">
            <CardContent className="px-8 py-6">
              <p className="text-white text-lg">
                💡 <span className="font-semibold">Resumindo:</span> Você tem muito a ganhar e pouco a perder. 
                A IA vai trabalhar 24h por dia, 7 dias por semana, sem férias, sem erros por cansaço.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LowRiskSection;
