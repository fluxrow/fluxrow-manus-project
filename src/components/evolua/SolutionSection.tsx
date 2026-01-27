import React from 'react';
import { Bot, MessageCircle, Filter, BarChart3 } from 'lucide-react';

const solutions = [
  {
    icon: Bot,
    title: "IA faz o primeiro contato",
    description: "Qualifica automaticamente antes do vendedor atender"
  },
  {
    icon: MessageCircle,
    title: "Disparos em escala",
    description: "WhatsApp oficial + não-oficial para máximo alcance"
  },
  {
    icon: Filter,
    title: "Leads quentes na mão",
    description: "Só chegam contatos que demonstraram interesse real"
  },
  {
    icon: BarChart3,
    title: "Dashboard completo",
    description: "Acompanhe métricas e resultados em tempo real"
  }
];

export default function SolutionSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          A Solução Inteligente
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Sistema que trabalha enquanto sua equipe foca em fechar negócios
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {solutions.map((solution, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-emerald-950/30 to-transparent p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
              <solution.icon className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">{solution.title}</h3>
            <p className="text-sm text-gray-400">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
