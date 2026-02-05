import { Bot, Zap, MessageCircle, GitMerge, Filter, BarChart3, UserPlus, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/30">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group"
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
