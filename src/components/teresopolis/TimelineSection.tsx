import { Search, Settings, TestTube, Rocket, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const phases = [
  {
    week: "Semana 1",
    title: "Descoberta",
    icon: Search,
    color: "blue",
    tasks: [
      "Mapeamento de FAQs",
      "Coleta de informações do shopping",
      "Definição de tom de voz",
      "Levantamento de lojas e serviços",
    ],
  },
  {
    week: "Semana 2",
    title: "Configuração",
    icon: Settings,
    color: "teal",
    tasks: [
      "Setup dos canais (WhatsApp, Insta, FB)",
      "Treinamento da IA",
      "Configuração do dashboard",
      "Integração inicial",
    ],
  },
  {
    week: "Semana 3",
    title: "Testes",
    icon: TestTube,
    color: "purple",
    tasks: [
      "Ambiente de testes com equipe",
      "Simulações de atendimento",
      "Ajustes finos de respostas",
      "Validação com stakeholders",
    ],
  },
  {
    week: "Semana 4",
    title: "Go-Live B2C",
    icon: Rocket,
    color: "emerald",
    tasks: [
      "Lançamento oficial",
      "Monitoramento intensivo",
      "Ajustes em tempo real",
      "Treinamento da equipe",
    ],
  },
  {
    week: "Semana 5*",
    title: "B2B",
    icon: Building,
    color: "amber",
    tasks: [
      "Lançamento canal lojistas",
      "Portal do lojista ativo",
      "Comunicados automatizados",
      "Sistema de chamados",
    ],
    note: "* Apenas para planos Profissional e Enterprise",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; border: string; text: string; line: string }> = {
    blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", line: "bg-blue-500" },
    teal: { bg: "bg-teal-500/10", border: "border-teal-500/30", text: "text-teal-400", line: "bg-teal-500" },
    purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", line: "bg-purple-500" },
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", line: "bg-emerald-500" },
    amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", line: "bg-amber-500" },
  };
  return colors[color];
};

const TimelineSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Cronograma
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Timeline de Implementação
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Em apenas 4-5 semanas, sua central de atendimento multicanal estará funcionando
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full" />

          <div className="grid grid-cols-5 gap-4">
            {phases.map((phase, index) => {
              const colors = getColorClasses(phase.color);
              return (
                <div key={index} className="relative">
                  {/* Dot on line */}
                  <div className={`absolute top-[92px] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${colors.line} border-4 border-slate-900 z-10`} />

                  <Card className={`bg-slate-900/50 ${colors.border} h-full`}>
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}>
                        <phase.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <span className={`text-xs font-medium ${colors.text}`}>
                        {phase.week}
                      </span>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {phase.title}
                      </h3>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, idx) => (
                          <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.line} mt-1.5 flex-shrink-0`} />
                            {task}
                          </li>
                        ))}
                      </ul>
                      {phase.note && (
                        <p className="text-gray-500 text-xs mt-4 italic">
                          {phase.note}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-4">
          {phases.map((phase, index) => {
            const colors = getColorClasses(phase.color);
            return (
              <Card key={index} className={`bg-slate-900/50 ${colors.border}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <phase.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
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
                            {task}
                          </li>
                        ))}
                      </ul>
                      {phase.note && (
                        <p className="text-gray-500 text-xs mt-3 italic">
                          {phase.note}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary */}
        <div className="text-center mt-12">
          <Card className="inline-block bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-emerald-500/30">
            <CardContent className="px-8 py-4">
              <p className="text-white font-semibold">
                ⏱️ Prazo total: <span className="text-emerald-400">4 semanas</span> para operação B2C completa
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
