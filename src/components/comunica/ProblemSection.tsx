import React from 'react';
import { Clock, AlertTriangle, Eye, FileSearch } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: "Envio manual é lento",
    description: "Horas gastas enviando boletos um a um por WhatsApp ou e-mail"
  },
  {
    icon: AlertTriangle,
    title: "Erros de CNPJ/valores",
    description: "NF enviada para cliente errado ou com valor divergente"
  },
  {
    icon: Eye,
    title: "Sem controle de entregas",
    description: "Não sabe se o cliente recebeu, abriu ou viu"
  },
  {
    icon: FileSearch,
    title: "Tempo perdido conferindo",
    description: "Validação manual de XML, PDF, valores e CNPJ"
  }
];

export default function ProblemSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Os Desafios do Financeiro
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Esses são os problemas que vemos em operações financeiras manuais
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
