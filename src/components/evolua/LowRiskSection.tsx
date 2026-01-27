import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  TrendingUp, 
  Package, 
  Unlock, 
  HeartHandshake,
  MapPin,
  Calculator
} from 'lucide-react';

const riskArguments = [
  {
    icon: Calculator,
    title: "Investimento Diluído",
    description: "R$ 4.200/mês por 6 meses — não é um gasto único grande",
    color: "purple",
    bgColor: "from-purple-500/30 to-fuchsia-500/20",
    iconColor: "text-purple-400"
  },
  {
    icon: TrendingUp,
    title: "Fee sobre Resultado",
    description: "3% só incide quando vocês FECHAM vendas",
    color: "emerald",
    bgColor: "from-emerald-500/30 to-teal-500/20",
    iconColor: "text-emerald-400"
  },
  {
    icon: Package,
    title: "Ativo Próprio",
    description: "Vocês ficam donos do sistema — não é aluguel",
    color: "cyan",
    bgColor: "from-cyan-500/30 to-blue-500/20",
    iconColor: "text-cyan-400"
  },
  {
    icon: Unlock,
    title: "Independência Total",
    description: "Após 6 meses, zero custo obrigatório",
    color: "blue",
    bgColor: "from-blue-500/30 to-indigo-500/20",
    iconColor: "text-blue-400"
  },
  {
    icon: HeartHandshake,
    title: "Suporte Opcional",
    description: "Se quiserem ajuda depois, é por escolha de vocês",
    color: "pink",
    bgColor: "from-pink-500/30 to-rose-500/20",
    iconColor: "text-pink-400"
  },
  {
    icon: MapPin,
    title: "Treinamento Real",
    description: "Presencial na Evolua, com a equipe de vocês",
    color: "amber",
    bgColor: "from-amber-500/30 to-orange-500/20",
    iconColor: "text-amber-400"
  },
];

export default function LowRiskSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <Badge className="mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 px-4 py-2">
          <Shield className="w-4 h-4 mr-2" />
          Para a Diretoria
        </Badge>
        <h2 className="text-3xl font-bold text-white mb-3">
          Por Que o Risco é Baixo
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Argumentos sólidos para aprovar este investimento com confiança
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {riskArguments.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card 
              key={index}
              className="border border-slate-600/30 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 group"
            >
              <CardContent className="p-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Destaque do Custo Diário */}
      <Card className="border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-900/20 to-teal-900/10 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/20 mb-4">
            <Calculator className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Menos de <span className="text-emerald-400">R$ 140/dia</span>
          </h3>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Para ter sistema completo + operação ativa + treinamento presencial + transferência total da tecnologia
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 py-2 px-4">
              ✓ Não é gasto, é investimento
            </Badge>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 py-2 px-4">
              ✓ Vocês ficam com o ativo
            </Badge>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 py-2 px-4">
              ✓ Risco compartilhado
            </Badge>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
