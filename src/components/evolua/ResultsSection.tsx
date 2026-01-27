import React from 'react';
import { TrendingUp, Clock, Target } from 'lucide-react';

const results = [
  {
    icon: TrendingUp,
    metric: "+300%",
    title: "Mais contatos/dia",
    description: "Comparado com prospecção manual"
  },
  {
    icon: Clock,
    metric: "-70%",
    title: "Menos tempo perdido",
    description: "Com leads que não vão comprar"
  },
  {
    icon: Target,
    metric: "+45%",
    title: "Conversão maior",
    description: "Leads mais qualificados = mais vendas"
  }
];

export default function ResultsSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Resultados Esperados
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          O que distribuidoras como a Evolua podem alcançar
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {results.map((result, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-purple-950/40 to-fuchsia-950/20 p-8 rounded-2xl border border-purple-500/30 text-center hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
              <result.icon className="w-7 h-7 text-purple-400" />
            </div>
            <p className="text-5xl font-bold bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent mb-2">
              {result.metric}
            </p>
            <h3 className="font-semibold text-white mb-1">{result.title}</h3>
            <p className="text-sm text-gray-400">{result.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
