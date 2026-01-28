import React from 'react';
import { Upload, Scan, ShieldCheck, GitCompare, CheckCircle, History, ArrowRight } from 'lucide-react';

const validationSteps = [
  { icon: Upload, label: "Upload\nBoleto/NF" },
  { icon: Scan, label: "Extração\nIA/OCR" },
  { icon: ShieldCheck, label: "Validação\nCNPJ" },
  { icon: GitCompare, label: "Confronto\nValores" },
  { icon: CheckCircle, label: "Decisão\nAuto/Manual" },
];

const validationCards = [
  {
    title: "Validação CNPJ",
    description: "NF e Boleto são verificados contra o CNPJ informado",
    color: "cyan"
  },
  {
    title: "Confronto de Valores",
    description: "Tolerância de 0.1% ou R$ 0,50 (o que for maior)",
    color: "blue"
  },
  {
    title: "Detecção de Parcelamento",
    description: "Agrupa boletos pela chave de acesso da NF",
    color: "purple"
  },
  {
    title: "Status de Parcelamento",
    description: "Em aberto, Completo ou Estouro (manual review)",
    color: "amber"
  },
  {
    title: "Envio Automático",
    description: "Só quando validações passam; caso contrário, revisão manual",
    color: "emerald"
  },
  {
    title: "Auditoria Completa",
    description: "Todo o histórico de uploads, validações e envios",
    color: "slate"
  }
];

const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
  cyan: { border: "border-cyan-500/30", bg: "from-cyan-900/20", text: "text-cyan-400" },
  blue: { border: "border-blue-500/30", bg: "from-blue-900/20", text: "text-blue-400" },
  purple: { border: "border-purple-500/30", bg: "from-purple-900/20", text: "text-purple-400" },
  amber: { border: "border-amber-500/30", bg: "from-amber-900/20", text: "text-amber-400" },
  emerald: { border: "border-emerald-500/30", bg: "from-emerald-900/20", text: "text-emerald-400" },
  slate: { border: "border-slate-500/30", bg: "from-slate-800/20", text: "text-slate-400" },
};

export default function ValidationSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">
          Validações Robustas
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Fluxo inteligente que garante precisão em cada envio
        </p>
      </div>
      
      {/* Flow diagram */}
      <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 p-8 rounded-2xl border border-slate-700/50 mb-10">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {validationSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-xs text-gray-400 text-center whitespace-pre-line">{step.label}</span>
              </div>
              {index < validationSteps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-cyan-500/50 hidden sm:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Validation cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {validationCards.map((card, index) => {
          const colors = colorClasses[card.color];
          return (
            <div 
              key={index}
              className={`bg-gradient-to-br ${colors.bg} to-transparent p-5 rounded-xl border ${colors.border} hover:scale-[1.02] transition-all duration-300`}
            >
              <h3 className={`font-semibold ${colors.text} mb-2`}>{card.title}</h3>
              <p className="text-sm text-gray-400">{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
