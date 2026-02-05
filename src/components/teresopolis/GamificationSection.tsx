import { Trophy, Star, Award, TrendingUp, Gift, Sparkles } from "lucide-react";
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
    <section className="py-16 md:py-24 bg-slate-900/30">
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

        {/* How it Works */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <Card className="bg-slate-900/50 border-amber-500/20 h-full">
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
              className="bg-slate-900/50 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group"
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
