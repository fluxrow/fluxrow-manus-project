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
  GitBranch
} from 'lucide-react';

const includedItems = [
  { icon: Rocket, text: "Operação completa do sistema" },
  { icon: GraduationCap, text: "Treinamento presencial na Evolua" },
  { icon: Gift, text: "Transferência total ao final" },
  { icon: GitBranch, text: "Sistema White Label seu" },
  { icon: GitBranch, text: "Código-fonte no seu GitHub" },
];

export default function InvestmentSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">
          Investimento
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Modelo híbrido que une operação, capacitação e transferência
        </p>
      </div>

      <Card className="border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-900/20 to-teal-900/10 backdrop-blur-sm shadow-2xl shadow-emerald-500/20 relative overflow-hidden max-w-2xl mx-auto">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
        
        <CardHeader className="text-center pb-4">
          <Badge className="mx-auto mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 px-4 py-2 shadow-lg">
            <Rocket className="w-4 h-4 mr-2" />
            Parceria Híbrida
          </Badge>
          <CardTitle className="text-2xl text-white">
            Operação + Capacitação + Transferência
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Valores Principais */}
          <div className="text-center py-6 bg-gradient-to-br from-emerald-900/40 to-transparent rounded-2xl border border-emerald-500/30">
            <div className="flex items-center justify-center gap-3 mb-2">
              <DollarSign className="w-8 h-8 text-emerald-400" />
              <p className="text-5xl font-bold text-white">4.200</p>
              <span className="text-xl text-gray-400">/mês</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-emerald-300 font-semibold text-lg">
              <Percent className="w-5 h-5" />
              <span>+ 3% sobre contratos fechados via ferramenta</span>
            </div>
          </div>

          {/* Duração */}
          <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/40 rounded-xl">
            <Calendar className="w-6 h-6 text-teal-400" />
            <span className="text-lg text-white font-medium">Duração: <span className="text-teal-300">6 meses de contrato</span></span>
          </div>

          {/* O que está incluso */}
          <div className="space-y-3">
            <h4 className="text-sm text-gray-400 uppercase tracking-wide text-center">O que está incluso:</h4>
            {includedItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-900/30 to-transparent rounded-lg border border-emerald-500/20"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-200">{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* Destaque Fee */}
          <div className="p-4 bg-gradient-to-r from-teal-900/30 to-cyan-900/20 rounded-xl border border-teal-500/30 text-center">
            <p className="text-sm text-gray-300">
              <span className="text-teal-300 font-semibold">💡 O fee de 3%</span> só incide sobre vendas que vieram 
              dos leads gerados pela ferramenta. Vocês só pagam sobre resultado real.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
