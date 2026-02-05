import { Trophy, Star, Award, TrendingUp, Gift, Sparkles, Medal, Crown, Target, MessageSquare, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const howItWorks = [
  {
    step: "1",
    title: "Lojista usa a plataforma",
    description: "Responde solicitações, envia informações de vendas, participa de eventos",
  },
  {
    step: "2",
    title: "Ganha pontos automaticamente",
    description: "Cada interação positiva gera pontos no sistema",
  },
  {
    step: "3",
    title: "Sobe no ranking",
    description: "Lojistas mais engajados aparecem em destaque",
  },
  {
    step: "4",
    title: "Recebe benefícios",
    description: "Prêmios, visibilidade e indicações inteligentes",
  },
];

const ranking = [
  { position: 1, name: "Renner", points: 847, badge: "🥇", highlight: true, label: "Loja do Mês" },
  { position: 2, name: "Lojas Americanas", points: 623, badge: "🥈", highlight: false },
  { position: 3, name: "Cine Show", points: 512, badge: "🥉", highlight: false },
  { position: 4, name: "Praça de Alimentação", points: 489, badge: "4", highlight: false },
  { position: 5, name: "O Boticário", points: 456, badge: "5", highlight: false },
];

const pointsRules = [
  { action: "Responder comunicados", points: "+10 pts", icon: MessageSquare },
  { action: "Enviar relatório de vendas", points: "+20 pts", icon: BarChart3 },
  { action: "Participar de eventos", points: "+50 pts", icon: Target },
];

const benefits = [
  {
    icon: Trophy,
    title: "Loja do Mês",
    description: "Destaque especial para o lojista mais engajado",
  },
  {
    icon: Star,
    title: "Indicações Inteligentes",
    description: '"Procurando X? Veja a loja Y que responde rápido!"',
  },
  {
    icon: Award,
    title: "Ranking Semanal",
    description: "Visibilidade entre os lojistas mais ativos",
  },
  {
    icon: Gift,
    title: "Prêmios Exclusivos",
    description: "Benefícios para os mais engajados",
  },
];

const GamificationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
            Gamificação
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sistema de Pontos para Lojistas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Incentive o engajamento dos lojistas com um sistema de recompensas inteligente
          </p>
        </div>

        {/* Ranking Mockup */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-slate-800 rounded-2xl border border-amber-500/30 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600/30 to-orange-600/30 p-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-amber-400" />
                <span className="text-white font-semibold">Ranking de Lojistas - Janeiro 2025</span>
              </div>
            </div>

            {/* Ranking List */}
            <div className="p-6">
              <div className="space-y-3">
                {ranking.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40' 
                        : 'bg-slate-700/30 hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{item.badge}</span>
                      <div>
                        <p className="text-white font-semibold">{item.name}</p>
                        {item.label && (
                          <span className="text-amber-400 text-xs font-medium">{item.label}</span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">{item.points} pts</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Points Rules */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h4 className="text-white font-semibold mb-4">Como ganhar pontos:</h4>
                <div className="space-y-3">
                  {pointsRules.map((rule, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                          <rule.icon className="w-4 h-4 text-amber-400" />
                        </div>
                        <span className="text-gray-300 text-sm">{rule.action}</span>
                      </div>
                      <span className="text-amber-400 font-medium text-sm">{rule.points}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <Card className="bg-slate-900/50 border-amber-500/20 h-full hover:scale-105 transition-transform">
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-900 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="text-white font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shopping Benefits */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 border-amber-500/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-white">
                  Benefícios para o Shopping
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  Incentiva uso ativo da plataforma
                </li>
                <li className="flex items-center gap-2 text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  Melhora comunicação com lojistas
                </li>
                <li className="flex items-center gap-2 text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  Dados de engajamento para gestão
                </li>
                <li className="flex items-center gap-2 text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  Diferencial competitivo no mercado
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;