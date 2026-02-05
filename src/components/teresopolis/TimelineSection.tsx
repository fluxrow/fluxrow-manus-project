import { Search, Settings, TestTube, Rocket, Building, Check } from "lucide-react";
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
  const colors: Record<string, { bg: string; border: string; text: string; line: string; glow: string }> = {
    blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", line: "bg-blue-500", glow: "shadow-blue-500/30" },
    teal: { bg: "bg-teal-500/10", border: "border-teal-500/30", text: "text-teal-400", line: "bg-teal-500", glow: "shadow-teal-500/30" },
    purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", line: "bg-purple-500", glow: "shadow-purple-500/30" },
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", line: "bg-emerald-500", glow: "shadow-emerald-500/30" },
    amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", line: "bg-amber-500", glow: "shadow-amber-500/30" },
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
            Em apenas 4-5 semanas, sua central de atendimento multicanal estará funcionando
          </p>
        </div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-[88px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500 via-teal-500 via-purple-500 to-emerald-500 rounded-full" />

          <div className="grid grid-cols-5 gap-4">
            {phases.map((phase, index) => {
              const colors = getColorClasses(phase.color);
              return (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Dot with glow */}
                  <div className={`w-8 h-8 rounded-full ${colors.line} border-4 border-slate-900 z-10 shadow-lg ${colors.glow} flex items-center justify-center`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>

                  {/* Card */}
                  <Card className={`mt-8 bg-slate-900/50 ${colors.border} w-full hover:scale-105 transition-transform`}>
                    <CardContent className="p-4">
                      <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center mb-3 mx-auto`}>
                        <phase.icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <span className={`text-xs font-medium ${colors.text} block text-center`}>
                        {phase.week}
                      </span>
                      <h3 className="text-base font-semibold text-white mb-3 text-center">
                        {phase.title}
                      </h3>
                      <ul className="space-y-1">
                        {phase.tasks.map((task, idx) => (
                          <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                            <div className={`w-1 h-1 rounded-full ${colors.line} mt-1.5 flex-shrink-0`} />
                            {task}
                          </li>
                        ))}
                      </ul>
                      {phase.note && (
                        <p className="text-gray-500 text-xs mt-3 italic text-center">
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

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-emerald-500" />

          <div className="space-y-6">
            {phases.map((phase, index) => {
              const colors = getColorClasses(phase.color);
              return (
                <div key={index} className="relative flex gap-4">
                  {/* Dot */}
                  <div className={`w-12 h-12 rounded-full ${colors.line} border-4 border-slate-900 z-10 flex items-center justify-center flex-shrink-0 shadow-lg ${colors.glow}`}>
                    <phase.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Card */}
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
                            {task}
                          </li>
                        ))}
                      </ul>
                      {phase.note && (
                        <p className="text-gray-500 text-xs mt-3 italic">
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