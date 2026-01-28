import React from 'react';
import { FileText, TrendingUp } from 'lucide-react';

const plans = [
  {
    name: "Start",
    price: "450",
    nfLimit: "250",
    nfRange: "Até 250",
    description: "Ideal para começar a automatizar",
    borderColor: "border-emerald-500/40",
    bgColor: "from-emerald-900/20",
    iconColor: "text-emerald-400"
  },
  {
    name: "Growth",
    price: "650",
    nfLimit: "500",
    nfRange: "251 a 500",
    description: "Para volume constante",
    borderColor: "border-blue-500/40",
    bgColor: "from-blue-900/20",
    iconColor: "text-blue-400"
  },
  {
    name: "Pro",
    price: "850",
    nfLimit: "750",
    nfRange: "501 a 750",
    description: "Operação crítica",
    borderColor: "border-purple-500/40",
    bgColor: "from-purple-900/20",
    iconColor: "text-purple-400"
  },
  {
    name: "Scale",
    price: "950",
    nfLimit: "1000",
    nfRange: "751 a 1000",
    description: "Grande escala",
    borderColor: "border-cyan-500/40",
    bgColor: "from-cyan-900/20",
    iconColor: "text-cyan-400"
  }
];

export default function PlansSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">
          Pacotes de Envio
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Escolha o plano ideal para o volume da sua operação
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${plan.bgColor} to-transparent p-6 rounded-2xl border ${plan.borderColor} hover:scale-[1.02] transition-all duration-300`}
          >
            <div className="text-center mb-6">
              <h3 className={`text-xl font-bold ${plan.iconColor} mb-2`}>{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-gray-400 text-sm">R$</span>
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 text-sm">/mês</span>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <FileText className={`w-5 h-5 ${plan.iconColor}`} />
                <span>{plan.nfRange} NF/mês</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 text-center">{plan.description}</p>
          </div>
        ))}
      </div>
      
      {/* Upgrade highlight */}
      <div className="mt-8 p-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30 text-center">
        <div className="flex items-center justify-center gap-2 text-cyan-300">
          <TrendingUp className="w-5 h-5" />
          <span className="font-medium">Upgrade disponível a qualquer momento</span>
        </div>
      </div>
    </section>
  );
}
