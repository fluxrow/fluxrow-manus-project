import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Headphones, 
  CheckCircle, 
  Wrench, 
  Bug, 
  Sparkles, 
  MessageCircle,
  Info
} from 'lucide-react';

const supportFeatures = [
  {
    icon: Wrench,
    title: "Manutenção Técnica",
    description: "Atualizações e ajustes no sistema"
  },
  {
    icon: Bug,
    title: "Correção de Bugs",
    description: "Resolução rápida de problemas"
  },
  {
    icon: Sparkles,
    title: "Pequenas Evoluções",
    description: "Melhorias incrementais no sistema"
  },
  {
    icon: MessageCircle,
    title: "Suporte via WhatsApp",
    description: "Contato direto com nossa equipe"
  },
];

export default function PostContractSupportSection() {
  return (
    <section className="mb-16">
      <Card className="border-2 border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"></div>
        
        <CardHeader className="text-center pb-4">
          <Badge className="mx-auto mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 px-4 py-2">
            <Headphones className="w-4 h-4 mr-2" />
            Após os 6 Meses
          </Badge>
          <CardTitle className="text-2xl md:text-3xl text-white">
            Suporte Pós-Contrato
          </CardTitle>
          <p className="text-gray-300 max-w-2xl mx-auto mt-2">
            Opcional — vocês decidem se precisam após ficar independentes
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Preço */}
          <div className="text-center py-6 bg-gradient-to-br from-blue-900/40 to-transparent rounded-2xl border border-blue-500/30">
            <p className="text-4xl font-bold text-white mb-1">
              R$ 1.200<span className="text-lg text-gray-400">/mês</span>
            </p>
            <p className="text-blue-300 font-medium">Contratação mensal, sem fidelidade</p>
          </div>

          {/* O que inclui */}
          <div className="grid sm:grid-cols-2 gap-4">
            {supportFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
              <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white mb-1 break-words">{feature.title}</h4>
                    <p className="text-sm text-gray-400 break-words">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Destaque - Não é obrigatório */}
          <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-900/30 to-teal-900/20 rounded-xl border border-emerald-500/30">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-semibold text-emerald-300 mb-1">Não é obrigatório!</h4>
              <p className="text-gray-300 text-sm">
                Após os 6 meses, vocês têm <span className="text-emerald-300 font-semibold">total autonomia</span>. 
                O suporte é apenas uma opção para quem preferir ter nossa retaguarda. Muitas empresas operam 100% sozinhas após a transferência.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
