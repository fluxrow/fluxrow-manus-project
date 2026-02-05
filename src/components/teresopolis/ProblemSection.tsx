import { Clock, Users, MessageSquare, AlertTriangle, Database, Shuffle, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    title: "Tempo perdido com perguntas repetitivas",
    description: '"Qual horário?", "Onde fica a loja X?" consomem horas da recepção',
    impact: "-40% produtividade",
  },
  {
    icon: Users,
    title: "Atendimento centralizado na recepção",
    description: "Um único ponto de contato para todo o shopping",
    impact: "Gargalo crítico",
  },
  {
    icon: MessageSquare,
    title: "Respostas não padronizadas",
    description: "Cada pessoa responde de um jeito diferente",
    impact: "Experiência inconsistente",
  },
  {
    icon: Clock,
    title: "Demora no tempo de resposta",
    description: "Clientes aguardando por informações básicas",
    impact: "Perda de satisfação",
  },
  {
    icon: AlertTriangle,
    title: "Sem visibilidade sobre demandas",
    description: "Não sabe quais são as maiores dúvidas",
    impact: "Decisões no escuro",
  },
  {
    icon: Database,
    title: "Dados de clientes perdidos",
    description: "Não captura informações de quem entra em contato",
    impact: "Base zero para campanhas",
  },
  {
    icon: Shuffle,
    title: "Canais fragmentados",
    description: "WhatsApp, Instagram, Facebook separados",
    impact: "Esforço multiplicado",
  },
  {
    icon: Building,
    title: "Lojistas sem canal eficiente",
    description: "Comunicação interna fragmentada",
    impact: "Retrabalho constante",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-4">
            Desafios Atuais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Os Problemas que Precisamos Resolver
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Identificamos 8 gargalos críticos na operação atual que impactam diretamente a experiência do cliente e a produtividade da equipe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {problem.description}
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium">
                  {problem.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
