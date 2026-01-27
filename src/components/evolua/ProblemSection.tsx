import React from 'react';
import { Clock, UserX, TrendingDown, Target } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: "Prospecção manual é lenta",
    description: "Horas da equipe consumidas em tarefas repetitivas"
  },
  {
    icon: UserX,
    title: "Leads frios não convertem",
    description: "Contatos que não respondem ou não têm interesse"
  },
  {
    icon: TrendingDown,
    title: "Tempo perdido com curiosos",
    description: "Vendedores gastam energia com quem não vai comprar"
  },
  {
    icon: Target,
    title: "Difícil escalar com qualidade",
    description: "Crescer o volume sem perder a personalização"
  }
];

export default function ProblemSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          O Desafio da Prospecção
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Esses são os problemas que vemos em distribuidoras como a Evolua
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {problems.map((problem, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-red-950/30 to-transparent p-6 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
              <problem.icon className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">{problem.title}</h3>
            <p className="text-sm text-gray-400">{problem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
