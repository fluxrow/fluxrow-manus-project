import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  CheckCircle,
  Calendar,
  Percent,
  Rocket,
  GraduationCap,
  Gift,
  GitBranch,
  MessageSquare,
  Users,
  Clock,
  Star,
  ArrowUp,
  TrendingUp
} from 'lucide-react';

const plans = [
  {
    name: "Starter",
    recommended: true,
    price: "4.200",
    messages: "50.000",
    users: "45",
    training: "48h",
    description: "Ideal para iniciar a operação",
    borderColor: "border-emerald-500/60",
    bgColor: "from-emerald-900/30",
    badgeColor: "bg-emerald-500/30 text-emerald-200 border-emerald-500/50",
    iconColor: "text-emerald-400",
    glowColor: "shadow-emerald-500/20",
  },
  {
    name: "Growth",
    recommended: false,
    price: "5.800",
    messages: "100.000",
    users: "80",
    training: "48h",
    description: "Para escalar os resultados",
    borderColor: "border-blue-500/40",
    bgColor: "from-blue-900/20",
    badgeColor: "bg-blue-500/30 text-blue-200 border-blue-500/50",
    iconColor: "text-blue-400",
    glowColor: "shadow-blue-500/10",
  },
  {
    name: "Scale",
    recommended: false,
    price: "7.400",
    messages: "200.000",
    users: "150",
    training: "48h",
    description: "Operação em grande escala",
    borderColor: "border-purple-500/40",
    bgColor: "from-purple-900/20",
    badgeColor: "bg-purple-500/30 text-purple-200 border-purple-500/50",
    iconColor: "text-purple-400",
    glowColor: "shadow-purple-500/10",
  }
];

const includedItems = [
  { icon: Rocket, text: "Operação completa do sistema" },
  { icon: GraduationCap, text: "Treinamento presencial na Evolua (48h)" },
  { icon: Gift, text: "Transferência total ao final" },
  { icon: GitBranch, text: "Sistema White Label seu" },
  { icon: GitBranch, text: "Código-fonte no seu GitHub" },
  { icon: Percent, text: "Fee de 3% sobre vendas fechadas" },
];

export default function InvestmentSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">
          Escolha o Plano Ideal
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Modelo híbrido que une operação, capacitação e transferência — com upgrade disponível a qualquer momento
        </p>
      </div>

      {/* Cards dos Planos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {plans.map((plan, index) => (
          <Card 
            key={plan.name}
            className={`border-2 ${plan.borderColor} bg-gradient-to-br ${plan.bgColor} to-transparent backdrop-blur-sm relative overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-lg ${plan.glowColor} ${plan.recommended ? 'ring-2 ring-emerald-400/50' : ''}`}
          >
            {/* Barra superior */}
            {plan.recommended && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
            )}
            
            <CardHeader className="text-center pb-2">
              {/* Badge */}
              <Badge className={`mx-auto mb-3 ${plan.badgeColor} border px-3 py-1`}>
                {plan.recommended ? (
                  <>
                    <Star className="w-3 h-3 mr-1" />
                    RECOMENDADO
                  </>
                ) : (
                  <>
                    <ArrowUp className="w-3 h-3 mr-1" />
                    UPGRADE
                  </>
                )}
              </Badge>
              
              {/* Nome do Plano */}
              <CardTitle className="text-xl text-white">
                {plan.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Preço */}
              <div className="text-center py-4 bg-slate-800/40 rounded-xl">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-sm text-gray-400">R$</span>
                  <p className="text-3xl font-bold text-white">{plan.price}</p>
                  <span className="text-sm text-gray-400">/mês</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-sm text-teal-300">
                  <Percent className="w-3 h-3" />
                  <span>+ 3% fee</span>
                </div>
              </div>

              {/* Recursos */}
              <div className="space-y-3">
                <div className={`flex items-center gap-3 p-2.5 bg-slate-800/30 rounded-lg`}>
                  <MessageSquare className={`w-4 h-4 ${plan.iconColor} flex-shrink-0`} />
                  <span className="text-sm text-gray-200">
                    <span className="font-semibold text-white">{plan.messages}</span> msgs/mês
                  </span>
                </div>
                
                <div className={`flex items-center gap-3 p-2.5 bg-slate-800/30 rounded-lg`}>
                  <Users className={`w-4 h-4 ${plan.iconColor} flex-shrink-0`} />
                  <span className="text-sm text-gray-200">
                    <span className="font-semibold text-white">{plan.users}</span> vendedores
                  </span>
                </div>
                
                <div className={`flex items-center gap-3 p-2.5 bg-slate-800/30 rounded-lg`}>
                  <Clock className={`w-4 h-4 ${plan.iconColor} flex-shrink-0`} />
                  <span className="text-sm text-gray-200">
                    <span className="font-semibold text-white">{plan.training}</span> treinamento
                  </span>
                </div>
              </div>

              {/* Descrição */}
              <p className="text-center text-sm text-gray-400 pt-2 border-t border-slate-700/50">
                {plan.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Destaque Upgrade */}
      <div className="mb-8 p-4 bg-gradient-to-r from-teal-900/30 to-cyan-900/20 rounded-xl border border-teal-500/30 text-center">
        <div className="flex items-center justify-center gap-2 text-teal-300 font-semibold mb-1">
          <TrendingUp className="w-5 h-5" />
          <span>Upgrade disponível a qualquer momento</span>
        </div>
        <p className="text-sm text-gray-400">
          Comece com o plano Starter e escale conforme sua necessidade durante o contrato
        </p>
      </div>

      {/* Duração e o que está incluso */}
      <Card className="border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm max-w-3xl mx-auto">
        <CardContent className="pt-6 space-y-4">
          {/* Duração */}
          <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/60 rounded-xl">
            <Calendar className="w-6 h-6 text-teal-400" />
            <span className="text-lg text-white font-medium">
              Duração: <span className="text-teal-300">6 meses de contrato</span>
            </span>
          </div>

          {/* O que está incluso */}
          <div className="space-y-2">
            <h4 className="text-sm text-gray-400 uppercase tracking-wide text-center mb-3">
              Incluso em todos os planos:
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {includedItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-2.5 bg-gradient-to-r from-slate-800/60 to-transparent rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Destaque Fee */}
          <div className="p-4 bg-gradient-to-r from-amber-900/20 to-orange-900/10 rounded-xl border border-amber-500/20 text-center">
            <p className="text-sm text-gray-300">
              <span className="text-amber-300 font-semibold">💡 O fee de 3%</span> só incide sobre vendas que vieram 
              dos leads gerados pela ferramenta. Vocês só pagam sobre resultado real.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
