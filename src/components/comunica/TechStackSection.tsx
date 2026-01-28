import React from 'react';
import { MessageCircle, Mail, Cloud, Scan } from 'lucide-react';

const integrations = [
  {
    icon: MessageCircle,
    title: "Provedor WhatsApp",
    description: "Endpoint + token configurável para sua API de WhatsApp"
  },
  {
    icon: Mail,
    title: "Provedor E-mail",
    description: "SMTP ou API de envio de e-mails transacionais"
  },
  {
    icon: Cloud,
    title: "Storage de Arquivos",
    description: "Links seguros para download de boletos e NFs"
  },
  {
    icon: Scan,
    title: "IA para Extração",
    description: "OCR + parsing inteligente de documentos"
  }
];

export default function TechStackSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Tecnologia e Integrações
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Sistema flexível que se adapta à sua infraestrutura
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {integrations.map((integration, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <integration.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{integration.title}</h3>
                <p className="text-sm text-gray-400">{integration.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-gray-500 text-sm mt-6">
        Configurações gerenciadas pelo Admin no painel do sistema
      </p>
    </section>
  );
}
