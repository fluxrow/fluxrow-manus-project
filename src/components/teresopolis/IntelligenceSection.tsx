import { BarChart3, Clock, CheckCircle, ArrowRightLeft, Timer, Star, MessageSquare, UserPlus, Phone, Store, Heart, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    icon: BarChart3,
    title: "Top 10 Perguntas",
    description: "Quais dúvidas mais aparecem",
    use: "Identificar gaps de comunicação",
  },
  {
    icon: Clock,
    title: "Horários de Pico",
    description: "Quando mais atendimentos acontecem",
    use: "Dimensionar equipe humana",
  },
  {
    icon: CheckCircle,
    title: "Taxa de Resolução",
    description: "% resolvido pela IA vs humano",
    use: "Medir eficiência da automação",
  },
  {
    icon: ArrowRightLeft,
    title: "Transferências por Setor",
    description: "Quais setores recebem mais demandas",
    use: "Otimizar estrutura interna",
  },
  {
    icon: Timer,
    title: "Tempo Médio de Resposta",
    description: "Velocidade de atendimento",
    use: "Monitorar SLA",
  },
  {
    icon: Star,
    title: "Satisfação (NPS)",
    description: "Nota do cliente após atendimento",
    use: "Medir qualidade",
  },
  {
    icon: MessageSquare,
    title: "Canais mais usados",
    description: "WhatsApp vs Insta vs FB",
    use: "Foco de investimento",
  },
];

const dataFishing = [
  { icon: Phone, text: "Nome e telefone capturados" },
  { icon: Store, text: "Lojas de interesse identificadas" },
  { icon: Heart, text: "Preferências mapeadas" },
  { icon: Target, text: "Base para campanhas de marketing" },
];

const topQuestions = [
  { question: "Horário de funcionamento", count: 234, percentage: 100 },
  { question: "Onde fica a Renner?", count: 178, percentage: 76 },
  { question: "Tem estacionamento?", count: 156, percentage: 67 },
  { question: "Posso levar meu pet?", count: 132, percentage: 56 },
  { question: "Quantas salas de cinema?", count: 98, percentage: 42 },
];

const IntelligenceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            Business Intelligence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Índices de Comportamento e Analytics
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dashboard completo com métricas que transformam atendimento em inteligência de negócio
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800 rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-4 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-purple-400" />
                <span className="text-white font-semibold">Dashboard de Atendimentos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm">Ao vivo</span>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-700/50 rounded-xl p-4 text-center">
                  <p className="text-4xl font-bold text-white">847</p>
                  <p className="text-gray-400 text-sm">Hoje</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-medium">+23%</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4 text-center">
                  <p className="text-4xl font-bold text-white">92.3%</p>
                  <p className="text-gray-400 text-sm">Resolv. pela IA</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-medium">Excelente</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4 text-center">
                  <p className="text-4xl font-bold text-white">5s</p>
                  <p className="text-gray-400 text-sm">Resposta média</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Timer className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-medium">Rápido</span>
                  </div>
                </div>
              </div>

              {/* Top Questions Chart */}
              <div>
                <h4 className="text-white font-semibold mb-4">Top Perguntas do Mês</h4>
                <div className="space-y-3">
                  {topQuestions.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="text-gray-400 text-sm w-6">{idx + 1}.</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-200 text-sm">"{item.question}"</span>
                          <span className="text-purple-400 text-sm font-medium">{item.count}</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <metric.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {metric.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {metric.description}
                </p>
                <p className="text-purple-300 text-xs">
                  → {metric.use}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Data Fishing Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <UserPlus className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">
                  "Fishing" de Dados
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Cada interação com a IA captura informações valiosas para formar uma base de clientes qualificada para campanhas futuras:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dataFishing.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-purple-300" />
                    </div>
                    <span className="text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;