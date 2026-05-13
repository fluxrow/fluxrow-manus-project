import { Search, Settings, Rocket, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const phases = [
  {
    week: "Semana 1",
    title: "Descoberta",
    icon: Search,
    color: "blue",
    tasks: [
      "Mapeamento de FAQs (clientes e lojistas)",
      "Coleta de informações do shopping",
      "Definição de tom de voz da IA",
      "Levantamento de lojas, serviços e setores internos",
    ],
  },
  {
    week: "Semana 2",
    title: "Configuração e Testes",
    icon: Settings,
    color: "teal",
    tasks: [
      "Setup do WhatsApp e sistema telefônico IA",
      "Treinamento da IA com FAQ completo",
      "Configuração do fluxo B2B (lojistas)",
      "Testes internos com equipe do shopping",
    ],
  },
  {
    week: "Semana 3",
    title: "Go-Live",
    icon: Rocket,
    color: "emerald",
    tasks: [
      "Lançamento oficial (B2C + B2B)",
      "Monitoramento intensivo dos primeiros dias",
      "Ajustes finos nas respostas da IA",
      "Dashboard de atendimentos ativo",
    ],
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; border: string; text: string; line: string; glow: string }> = {
    blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", line: "bg-blue-500", glow: "shadow-blue-500/30" },
    teal: { bg: "bg-teal-500/10", border: "border-teal-500/30", text: "text-teal-400", line: "bg-teal-500", glow: "shadow-teal-500/30" },
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", line: "bg-emerald-500", glow: "shadow-emerald-500/30" },
  };
  return colors[color];
};

const TimelineSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Cronograma
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Timeline de Implementação
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Em apenas 3 semanas, o atendimento inteligente do shopping estará funcionando — clientes e lojistas
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {phases.map((phase, index) => {
              const colors = getColorClasses(phase.color);
              return (
                <div key={index} className="relative flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full ${colors.line} border-4 border-slate-900 z-10 shadow-lg ${colors.glow} flex items-center justify-center`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <Card className={`mt-8 bg-slate-900/50 ${colors.border} w-full hover:scale-105 transition-transform`}>
                    <CardContent className="p-5">
                      <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center mb-3 mx-auto`}>
                        <phase.icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <span className={`text-xs font-medium ${colors.text} block text-center`}>
                        {phase.week}
                      </span>
                      <h3 className="text-lg font-semibold text-white mb-3 text-center">
                        {phase.title}
                      </h3>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.line} mt-2 flex-shrink-0`} />
                            <span className="min-w-0 break-words">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-emerald-500" />
          <div className="space-y-6">
            {phases.map((phase, index) => {
              const colors = getColorClasses(phase.color);
              return (
                <div key={index} className="relative flex gap-4">
                  <div className={`w-12 h-12 rounded-full ${colors.line} border-4 border-slate-900 z-10 flex items-center justify-center flex-shrink-0 shadow-lg ${colors.glow}`}>
                    <phase.icon className="w-5 h-5 text-white" />
                  </div>
                  <Card className={`flex-1 bg-slate-900/50 ${colors.border}`}>
                    <CardContent className="p-4">
                      <span className={`text-xs font-medium ${colors.text}`}>
                        {phase.week}
                      </span>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {phase.title}
                      </h3>
                      <ul className="space-y-1">
                        {phase.tasks.map((task, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.line} mt-2 flex-shrink-0`} />
                            <span className="min-w-0 break-words">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="text-center mt-12">
          <Card className="inline-block bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-emerald-500/30">
            <CardContent className="px-8 py-4">
              <p className="text-white font-semibold">
                ⏱️ Prazo total: <span className="text-emerald-400">3 semanas</span> para operação completa (B2C + B2B)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
