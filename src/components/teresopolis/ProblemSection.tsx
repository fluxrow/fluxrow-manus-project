import { Clock, Users, MessageSquare, AlertTriangle, Database, Shuffle, Building, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    title: "Tempo perdido com perguntas repetitivas",
    description: '"Qual horário?", "Onde fica a loja X?" consomem horas da recepção',
    impact: "-40% produtividade",
  },
  {
    icon: Users,
    title: "Atendimento centralizado na recepção",
    description: "Um único ponto de contato para todo o shopping",
    impact: "Gargalo crítico",
  },
  {
    icon: MessageSquare,
    title: "Respostas não padronizadas",
    description: "Cada pessoa responde de um jeito diferente",
    impact: "Experiência inconsistente",
  },
  {
    icon: Clock,
    title: "Demora no tempo de resposta",
    description: "Clientes aguardando por informações básicas",
    impact: "Perda de satisfação",
  },
  {
    icon: AlertTriangle,
    title: "Sem visibilidade sobre demandas",
    description: "Não sabe quais são as maiores dúvidas",
    impact: "Decisões no escuro",
  },
  {
    icon: Database,
    title: "Dados de clientes perdidos",
    description: "Não captura informações de quem entra em contato",
    impact: "Base zero para campanhas",
  },
  {
    icon: Shuffle,
    title: "Canais fragmentados",
    description: "WhatsApp, Instagram, Facebook separados",
    impact: "Esforço multiplicado",
  },
  {
    icon: Building,
    title: "Lojistas sem canal eficiente",
    description: "Comunicação interna fragmentada",
    impact: "Retrabalho constante",
  },
];

const whatsappMessages = [
  { name: "João", message: "Que horas abre?", time: "10:23" },
  { name: "Maria", message: "Tem loja da Samsung?", time: "10:24" },
  { name: "Pedro", message: "Onde estaciono?", time: "10:25" },
  { name: "Ana", message: "Que horas fecha?", time: "10:26" },
  { name: "Carlos", message: "Tem cinema?", time: "10:27" },
  { name: "Lucia", message: "Qual o endereço?", time: "10:28" },
  { name: "Roberto", message: "Abre domingo?", time: "10:29" },
  { name: "Fernanda", message: "Tem wifi grátis?", time: "10:30" },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-4">
            Desafios Atuais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Os Problemas que Precisamos Resolver
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Identificamos 8 gargalos críticos na operação atual que impactam diretamente a experiência do cliente e a produtividade da equipe
          </p>
        </div>

        {/* WhatsApp Mockup - Visual do Problema */}
        <div className="max-w-md mx-auto mb-16">
          <div className="bg-slate-800 rounded-3xl p-4 border border-slate-700 shadow-2xl">
            {/* Phone Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">WhatsApp Recepção</p>
                  <p className="text-gray-400 text-xs">Teresópolis Shopping</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-400 text-sm font-bold">342 não lidas</span>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-2 max-h-64 overflow-hidden">
              {whatsappMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className="bg-slate-700/50 rounded-lg p-3 flex items-center justify-between hover:bg-slate-700 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{msg.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{msg.name}</p>
                      <p className="text-gray-400 text-xs truncate max-w-[180px]">"{msg.message}"</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-gray-500 text-xs">{msg.time}</span>
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">1</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer message */}
            <div className="mt-4 pt-3 border-t border-slate-700 text-center">
              <p className="text-red-400 text-sm">
                ⚠️ Mesmas perguntas, todos os dias...
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-red-500/20 hover:border-red-500/40 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {problem.description}
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium">
                  {problem.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;