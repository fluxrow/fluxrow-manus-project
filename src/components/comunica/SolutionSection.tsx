import React from 'react';
import { ShieldCheck, Send, Layers, BarChart3 } from 'lucide-react';

const solutions = [
  {
    icon: ShieldCheck,
    title: "Validação automática",
    description: "IA extrai e valida CNPJ, valores e confronta NF x Boleto"
  },
  {
    icon: Send,
    title: "Envio em massa",
    description: "WhatsApp + e-mail simultâneos com templates prontos"
  },
  {
    icon: Layers,
    title: "Detecção de parcelamento",
    description: "Sistema identifica e agrupa parcelas automaticamente"
  },
  {
    icon: BarChart3,
    title: "Dashboard completo",
    description: "Acompanhe status de envios, aberturas e confirmações"
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
          Sistema que trabalha enquanto sua equipe foca no que importa
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {solutions.map((solution, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-cyan-950/30 to-transparent p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
              <solution.icon className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">{solution.title}</h3>
            <p className="text-sm text-gray-400">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
