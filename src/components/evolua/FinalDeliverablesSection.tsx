import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gift, 
  Package, 
  GitBranch, 
  FileText, 
  Video, 
  MessageSquare, 
  BarChart3, 
  Users,
  CheckCircle
} from 'lucide-react';

const deliverables = [
  {
    icon: Package,
    title: "Sistema White Label",
    description: "Plataforma completa com a marca Evolua",
    color: "purple",
    bgColor: "from-purple-500/30 to-fuchsia-500/20",
    iconColor: "text-purple-400"
  },
  {
    icon: GitBranch,
    title: "Código-Fonte",
    description: "Repositório transferido para o GitHub de vocês",
    color: "cyan",
    bgColor: "from-cyan-500/30 to-blue-500/20",
    iconColor: "text-cyan-400"
  },
  {
    icon: FileText,
    title: "Documentação Técnica",
    description: "Manuais de operação e manutenção completos",
    color: "blue",
    bgColor: "from-blue-500/30 to-indigo-500/20",
    iconColor: "text-blue-400"
  },
  {
    icon: Video,
    title: "Gravações",
    description: "Todas as sessões de treinamento gravadas",
    color: "pink",
    bgColor: "from-pink-500/30 to-rose-500/20",
    iconColor: "text-pink-400"
  },
  {
    icon: MessageSquare,
    title: "Templates Prontos",
    description: "Modelos de mensagens que funcionam",
    color: "emerald",
    bgColor: "from-emerald-500/30 to-teal-500/20",
    iconColor: "text-emerald-400"
  },
  {
    icon: BarChart3,
    title: "Dashboard Premium",
    description: "BI completo com métricas em tempo real",
    color: "amber",
    bgColor: "from-amber-500/30 to-orange-500/20",
    iconColor: "text-amber-400"
  },
  {
    icon: Users,
    title: "Equipe Treinada",
    description: "Pessoas capazes de operar e evoluir sozinhas",
    color: "teal",
    bgColor: "from-teal-500/30 to-cyan-500/20",
    iconColor: "text-teal-400"
  },
];

export default function FinalDeliverablesSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <Badge className="mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 px-4 py-2">
          <Gift className="w-4 h-4 mr-2" />
          Ao Final dos 6 Meses
        </Badge>
        <h2 className="text-3xl font-bold text-white mb-3">
          O Que Vocês Recebem no Final
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Tudo isso passa a ser <span className="text-emerald-400 font-semibold">propriedade da Evolua</span> — vocês ficam com o ativo completo
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {deliverables.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card 
              key={index}
              className="border border-slate-600/30 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm hover:border-slate-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Destaque Final */}
      <Card className="mt-8 border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-900/20 to-teal-900/10 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-10 h-10 text-emerald-400" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-white mb-2">
                Sistema 100% de Vocês
              </h4>
              <p className="text-gray-300">
                Diferente de um SaaS com mensalidade eterna, aqui vocês <span className="text-emerald-300 font-semibold">ficam donos do ativo</span>. 
                Podem evoluir, customizar e usar sem pagar mais nada. O conhecimento e a tecnologia ficam na empresa.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
