import React from 'react';
import { Shield, Users, FileText, Scan, Mail, BarChart3 } from 'lucide-react';

const modules = [
  {
    number: "01",
    icon: Shield,
    title: "Login + RBAC",
    features: [
      "4 perfis: Admin, Operador, Financeiro, Cliente",
      "Permissões granulares por função",
      "Auto-cadastro de clientes via link público"
    ]
  },
  {
    number: "02",
    icon: Users,
    title: "Gestão de Clientes",
    features: [
      "Listagem e busca por CNPJ/razão social",
      "Cadastro manual ou importação CSV",
      "Validações: CNPJ, WhatsApp, e-mail"
    ]
  },
  {
    number: "03",
    icon: FileText,
    title: "Envio de Boleto + NF",
    features: [
      "Upload de Boleto PDF (obrigatório)",
      "Upload de NF (XML e/ou PDF) opcional",
      "Extração automática via IA/OCR"
    ]
  },
  {
    number: "04",
    icon: Scan,
    title: "Validações Inteligentes",
    features: [
      "Confronto: MATCH_TOTAL, MATCH_PARCEL ou MISMATCH",
      "Extração de dados do boleto e NF",
      "Detecção de parcelamento automática"
    ]
  },
  {
    number: "05",
    icon: Mail,
    title: "Fila de Envios",
    features: [
      "WhatsApp + e-mail simultâneos",
      "Status: queued, sent, failed",
      "Retry automático em caso de falha"
    ]
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Relatórios e Baixas",
    features: [
      "Dashboard de boletos enviados e pendentes",
      "Baixa manual ou automática de boletos pagos",
      "Relatórios por período, cliente e status",
      "Exportação em Excel/PDF"
    ]
  }
];

export default function ModulesSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">
          Módulos do Sistema
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Arquitetura completa para gestão de boletos e notas fiscais
        </p>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50" />
        
        <div className="space-y-8">
          {modules.map((module, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-6 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                } max-w-md`}>
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    <span className="text-cyan-400/60 text-sm font-mono">{module.number}</span>
                    <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                  </div>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                    {module.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-gray-400 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Icon circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 flex items-center justify-center">
                <module.icon className="w-7 h-7 text-cyan-400" />
              </div>
              
              {/* Spacer for alignment */}
              <div className="flex-1 hidden lg:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
