import { Clock, Phone, Users, MessageSquare, AlertTriangle, Building, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Phone,
    title: "Excesso de ligações repetitivas",
    description: '"Qual o horário?", "Tem cinema?" — a maioria dos contatos são por telefone, sempre com as mesmas perguntas',
    impact: "Linha ocupada o dia todo",
  },
  {
    icon: Clock,
    title: "Tempo perdido com perguntas básicas",
    description: 'A equipe gasta horas respondendo horários, endereço, lojas — informações que poderiam ser automáticas',
    impact: "-40% produtividade",
  },
  {
    icon: Users,
    title: "Atendimento centralizado na recepção",
    description: "Um único ponto de contato para todo o shopping, sobrecarregado com demandas simples e complexas juntas",
    impact: "Gargalo crítico",
  },
  {
    icon: MessageSquare,
    title: "Respostas não padronizadas",
    description: "Cada pessoa responde de um jeito diferente, gerando informações inconsistentes",
    impact: "Experiência inconsistente",
  },
  {
    icon: AlertTriangle,
    title: "Sem visibilidade sobre demandas",
    description: "Não sabe quais são as maiores dúvidas dos clientes nem em que horários o volume é maior",
    impact: "Decisões no escuro",
  },
  {
    icon: Building,
    title: "Lojistas sem canal eficiente",
    description: "Demandas internas dos lojistas se perdem — não há fluxo claro para encaminhar solicitações",
    impact: "Retrabalho constante",
  },
];

const phoneMessages = [
  { caller: "Cliente 1", message: "Que horas abre?", time: "09:15" },
  { caller: "Cliente 2", message: "Tem Renner aí?", time: "09:18" },
  { caller: "Cliente 3", message: "Qual o endereço?", time: "09:22" },
  { caller: "Cliente 4", message: "Tem estacionamento?", time: "09:25" },
  { caller: "Cliente 5", message: "Que horas abre domingo?", time: "09:30" },
  { caller: "Lojista", message: "Preciso falar com o financeiro", time: "09:33" },
  { caller: "Cliente 6", message: "Tem cinema?", time: "09:35" },
  { caller: "Cliente 7", message: "Posso levar meu pet?", time: "09:38" },
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
            A maioria dos contatos chega por ligação, sempre com as mesmas perguntas. Isso consome tempo, ocupa a linha e sobrecarrega a equipe.
          </p>
        </div>

        {/* Phone Mockup */}
        <div className="max-w-md mx-auto mb-16">
          <div className="bg-slate-800 rounded-3xl p-4 border border-slate-700 shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Ligações da Recepção</p>
                  <p className="text-gray-400 text-xs">Teresópolis Shopping</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-400 text-sm font-bold">Não para de tocar</span>
              </div>
            </div>

            <div className="space-y-2 max-h-64 overflow-hidden">
              {phoneMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className="bg-slate-700/50 rounded-lg p-3 flex items-center justify-between hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center">
                      <Phone className="w-3 h-3 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{msg.caller}</p>
                      <p className="text-gray-400 text-xs truncate max-w-[180px]">"{msg.message}"</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-xs">{msg.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-700 text-center">
              <p className="text-red-400 text-sm">
                ⚠️ Mesmas perguntas, o dia inteiro, por telefone...
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
