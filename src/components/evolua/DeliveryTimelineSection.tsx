import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Settings, 
  TrendingUp, 
  LineChart, 
  Database,
  MessageCircle,
  Bot,
  GitBranch,
  CheckCircle,
  MapPin
} from 'lucide-react';

const timelineData = [
  {
    month: 1,
    title: "Implementação",
    color: "blue",
    borderColor: "border-blue-500/40",
    bgColor: "from-blue-900/30",
    badgeColor: "bg-blue-500/30 text-blue-200 border-blue-500/50",
    iconColor: "text-blue-400",
    icon: Settings,
    items: [
      { icon: Settings, text: "Setup completo do sistema" },
      { icon: MessageCircle, text: "Configuração das instâncias WhatsApp" },
      { icon: TrendingUp, text: "Primeiros disparos piloto" },
      { icon: MapPin, text: "Treinamento presencial: introdução ao sistema e ferramentas" },
    ]
  },
  {
    month: 2,
    title: "Escala + Operação",
    color: "purple",
    borderColor: "border-purple-500/40",
    bgColor: "from-purple-900/30",
    badgeColor: "bg-purple-500/30 text-purple-200 border-purple-500/50",
    iconColor: "text-purple-400",
    icon: TrendingUp,
    items: [
      { icon: TrendingUp, text: "Aumento gradual do volume de disparos" },
      { icon: Bot, text: "IA de qualificação ativa e otimizada" },
      { icon: LineChart, text: "Dashboard liberado para acompanhamento" },
      { icon: MapPin, text: "Treinamento presencial: métricas e operação de disparos" },
    ]
  },
  {
    month: 3,
    title: "Otimização",
    color: "teal",
    borderColor: "border-teal-500/40",
    bgColor: "from-teal-900/30",
    badgeColor: "bg-teal-500/30 text-teal-200 border-teal-500/50",
    iconColor: "text-teal-400",
    icon: LineChart,
    items: [
      { icon: LineChart, text: "Análise de resultados e ajustes" },
      { icon: Settings, text: "Otimizações baseadas em dados reais" },
      { icon: MapPin, text: "Treinamento presencial: banco de dados e backend" },
    ]
  },
  {
    month: 4,
    title: "Capacitação Técnica I",
    color: "cyan",
    borderColor: "border-cyan-500/40",
    bgColor: "from-cyan-900/30",
    badgeColor: "bg-cyan-500/30 text-cyan-200 border-cyan-500/50",
    iconColor: "text-cyan-400",
    icon: MessageCircle,
    items: [
      { icon: MapPin, text: "Treinamento presencial: WhatsApp APIs (oficial e não-oficial)" },
      { icon: Settings, text: "Como as automações funcionam por dentro" },
      { icon: GitBranch, text: "Acesso completo ao código-fonte" },
    ]
  },
  {
    month: 5,
    title: "Capacitação Técnica II",
    color: "pink",
    borderColor: "border-pink-500/40",
    bgColor: "from-pink-900/30",
    badgeColor: "bg-pink-500/30 text-pink-200 border-pink-500/50",
    iconColor: "text-pink-400",
    icon: Bot,
    items: [
      { icon: MapPin, text: "Treinamento presencial: IA e qualificação de leads" },
      { icon: Settings, text: "Como customizar fluxos e mensagens" },
      { icon: Database, text: "Como integrar novas bases de leads" },
    ]
  },
  {
    month: 6,
    title: "Transferência",
    color: "emerald",
    borderColor: "border-emerald-500/40",
    bgColor: "from-emerald-900/30",
    badgeColor: "bg-emerald-500/30 text-emerald-200 border-emerald-500/50",
    iconColor: "text-emerald-400",
    icon: GitBranch,
    items: [
      { icon: GitBranch, text: "Migração do código para o GitHub de vocês" },
      { icon: CheckCircle, text: "Documentação completa entregue" },
      { icon: CheckCircle, text: "Sistema White Label configurado" },
      { icon: CheckCircle, text: "Equipe 100% autônoma" },
    ]
  },
];

export default function DeliveryTimelineSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">
          O Que Entregamos
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Cronograma detalhado mês a mês — cada fase com entregas claras e treinamento presencial
        </p>
      </div>

      <div className="space-y-4">
        {timelineData.map((phase, index) => {
          const PhaseIcon = phase.icon;
          return (
            <Card 
              key={phase.month}
              className={`border-2 ${phase.borderColor} bg-gradient-to-br ${phase.bgColor} to-transparent backdrop-blur-sm relative overflow-hidden hover:scale-[1.01] transition-all duration-300`}
            >
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Badge className={`${phase.badgeColor} w-fit`}>
                    Mês {phase.month}
                  </Badge>
                  <CardTitle className={`text-xl flex items-center gap-2 ${phase.iconColor}`}>
                    <PhaseIcon className="w-5 h-5" />
                    <span className="text-white">{phase.title}</span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {phase.items.map((item, itemIndex) => {
                    const ItemIcon = item.icon;
                    const isPresencial = item.icon === MapPin;
                    return (
                      <div 
                        key={itemIndex}
                        className={`flex items-start gap-3 p-3 rounded-lg ${
                          isPresencial 
                            ? 'bg-amber-900/30 border border-amber-500/30' 
                            : 'bg-slate-800/40'
                        }`}
                      >
                        <ItemIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          isPresencial ? 'text-amber-400' : phase.iconColor
                        }`} />
                        <span className={`text-sm ${isPresencial ? 'text-amber-200' : 'text-gray-300'}`}>
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Destaque Treinamento */}
      <div className="mt-8 p-6 bg-gradient-to-r from-amber-900/30 to-orange-900/20 rounded-2xl border border-amber-500/30 text-center">
        <div className="flex items-center justify-center gap-2 text-amber-300 font-semibold text-lg mb-2">
          <MapPin className="w-5 h-5" />
          <span>Todos os treinamentos são presenciais na Evolua</span>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Mostramos na prática as ferramentas que usamos para criar e evoluir o sistema. 
          A equipe aprende fazendo, lado a lado com nossos especialistas.
        </p>
      </div>
    </section>
  );
}
