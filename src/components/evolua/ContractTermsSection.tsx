import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  ShieldCheck, 
  Building2, 
  GitBranch,
  Clock,
  CheckCircle
} from 'lucide-react';

const terms = [
  {
    icon: ShieldCheck,
    title: "Cláusula de Não-Revenda",
    description: "O sistema não pode ser comercializado ou vendido para terceiros por um período de 2 anos após a transferência.",
    highlight: "2 anos",
    color: "amber"
  },
  {
    icon: Building2,
    title: "Uso Interno Exclusivo",
    description: "O sistema é destinado exclusivamente para operação interna da Evolua Digital e suas operações de prospecção.",
    highlight: "Uso próprio",
    color: "blue"
  },
  {
    icon: GitBranch,
    title: "Propriedade do Código",
    description: "O código-fonte é transferido integralmente ao final do contrato. Vocês podem modificar, evoluir e adaptar como preferirem.",
    highlight: "100% de vocês",
    color: "emerald"
  },
];

export default function ContractTermsSection() {
  return (
    <section className="mb-16">
      <Card className="border-2 border-slate-600/30 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <Badge className="mx-auto mb-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white border-0 px-4 py-2">
            <FileText className="w-4 h-4 mr-2" />
            Termos do Contrato
          </Badge>
          <CardTitle className="text-2xl md:text-3xl text-white">
            Condições e Cláusulas
          </CardTitle>
          <p className="text-gray-400 max-w-2xl mx-auto mt-2">
            Transparência total sobre os termos da nossa parceria
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {terms.map((term, index) => {
            const Icon = term.icon;
            const colorClasses = {
              amber: {
                border: "border-amber-500/30",
                bg: "from-amber-900/20",
                icon: "bg-amber-500/20 text-amber-400",
                highlight: "text-amber-300"
              },
              blue: {
                border: "border-blue-500/30",
                bg: "from-blue-900/20",
                icon: "bg-blue-500/20 text-blue-400",
                highlight: "text-blue-300"
              },
              emerald: {
                border: "border-emerald-500/30",
                bg: "from-emerald-900/20",
                icon: "bg-emerald-500/20 text-emerald-400",
                highlight: "text-emerald-300"
              }
            };
            const colors = colorClasses[term.color as keyof typeof colorClasses];

            return (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-start gap-4 p-5 bg-gradient-to-r ${colors.bg} to-transparent rounded-xl border ${colors.border}`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4 className="font-semibold text-white">{term.title}</h4>
                    <Badge className={`${colors.icon} border-0`}>
                      {term.highlight}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm">{term.description}</p>
                </div>
              </div>
            );
          })}

          {/* Resumo */}
          <div className="mt-6 p-5 bg-slate-800/40 rounded-xl text-center">
            <p className="text-gray-300">
              <CheckCircle className="w-5 h-5 text-emerald-400 inline-block mr-2" />
              Estes termos garantem que ambas as partes tenham clareza sobre direitos e responsabilidades. 
              O objetivo é uma <span className="text-emerald-300 font-semibold">parceria transparente e de longo prazo</span>.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
