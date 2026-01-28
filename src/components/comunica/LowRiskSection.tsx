import React from 'react';
import { Zap, Unlock, ShieldCheck, TrendingUp, ArrowUpRight, Headphones, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Implementação Rápida",
    description: "Sistema pronto em dias, não meses"
  },
  {
    icon: Unlock,
    title: "Sem Lock-in",
    description: "Contratação mensal, cancele quando quiser"
  },
  {
    icon: ShieldCheck,
    title: "Validações Evitam Erros",
    description: "Menos retrabalho e reclamações"
  },
  {
    icon: TrendingUp,
    title: "ROI Imediato",
    description: "Economia de horas da equipe desde o primeiro dia"
  },
  {
    icon: ArrowUpRight,
    title: "Escalável",
    description: "Upgrade de plano a qualquer momento"
  },
  {
    icon: Headphones,
    title: "Suporte Incluso",
    description: "Ajuda sempre que precisar"
  }
];

export default function LowRiskSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Por Que o Risco é Baixo
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transparência total para você decidir com confiança
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-5 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Highlight */}
      <div className="p-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/20 rounded-2xl border border-cyan-500/30 text-center">
        <div className="flex items-center justify-center gap-2 text-cyan-300 text-lg font-semibold">
          <Sparkles className="w-5 h-5" />
          <span>Menos de R$ 15/dia para automatizar todo o financeiro</span>
        </div>
      </div>
    </section>
  );
}
