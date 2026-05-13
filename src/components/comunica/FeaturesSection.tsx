import React from 'react';
import { FileText, ShieldCheck, GitCompare, Layers, MessageCircle, History, BarChart3, Headphones, FileCheck, PieChart } from 'lucide-react';

const features = [
  { icon: FileText, label: "Envio de NF (PDF/XML) + boleto" },
  { icon: ShieldCheck, label: "Validação de CNPJ automática" },
  { icon: GitCompare, label: "Confronto NF x boleto" },
  { icon: Layers, label: "Detecção de parcelamento" },
  { icon: MessageCircle, label: "WhatsApp + e-mail simultâneos" },
  { icon: History, label: "Histórico e auditoria completa" },
  { icon: BarChart3, label: "Dashboard de acompanhamento" },
  { icon: FileCheck, label: "Baixa de boletos pagos" },
  { icon: PieChart, label: "Relatórios gerenciais" },
  { icon: Headphones, label: "Suporte técnico incluso" },
];

export default function FeaturesSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Incluso em Todos os Planos
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Funcionalidades completas independente do pacote escolhido
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl border border-slate-700/50"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <feature.icon className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-gray-300 text-sm min-w-0 break-words">{feature.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
