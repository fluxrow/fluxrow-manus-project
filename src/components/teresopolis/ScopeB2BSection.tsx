import { Bell, Wrench, Search, Receipt, Calendar, BookOpen, Store, Check, Clock, TrendingUp, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: Bell,
    category: "Comunicados",
    description: "Circulares e avisos importantes do shopping para lojistas",
    examples: ["Novos horários", "Manutenções programadas", "Eventos especiais"],
  },
  {
    icon: Wrench,
    category: "Solicitações",
    description: "Abertura de chamados para manutenção e serviços",
    examples: ["Ar condicionado", "Limpeza", "Segurança"],
  },
  {
    icon: Search,
    category: "Achados e Perdidos",
    description: "Registro e consulta de itens encontrados ou perdidos",
    examples: ["Registrar item", "Consultar status", "Devolução"],
  },
  {
    icon: Receipt,
    category: "Financeiro",
    description: "Informações sobre cobranças e pagamentos",
    examples: ["2ª via de boleto", "Datas de vencimento", "Composição de cobrança"],
  },
  {
    icon: Calendar,
    category: "Eventos",
    description: "Calendário de ações e participação em campanhas",
    examples: ["Datas comemorativas", "Promoções coletivas", "Inscrição em eventos"],
  },
  {
    icon: BookOpen,
    category: "Normas",
    description: "Regras do shopping e procedimentos operacionais",
    examples: ["Horários de carga/descarga", "Regras de vitrine", "Padrões de fachada"],
  },
];

const mockCommunications = [
  { title: "Manutenção ar-condicionado", date: "15/02", status: "new" },
  { title: "Novo horário de carga", date: "16/02", status: "new" },
  { title: "Campanha Dia das Mães", date: "20/02", status: "new" },
];

const mockRequests = [
  { title: "Lâmpada queimada", status: "resolved" },
  { title: "Limpeza urgente", status: "progress" },
];

const ScopeB2BSection = () => {
  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
            Escopo B2B
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Atendimento aos Lojistas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Canal exclusivo para comunicação interna com os lojistas do shopping
          </p>
        </div>

        {/* Portal Mockup */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-slate-800 rounded-2xl border border-teal-500/30 shadow-2xl overflow-hidden">
            {/* Portal Header */}
            <div className="bg-gradient-to-r from-teal-600/30 to-blue-600/30 p-4 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center">
                    <Store className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Portal do Lojista</p>
                    <p className="text-teal-300 text-sm">Magazine Luiza - Loja 42</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-400 text-sm font-bold">3º lugar</span>
                </div>
              </div>
            </div>

            {/* Portal Content */}
            <div className="p-6 space-y-6">
              {/* Comunicados */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-teal-400" />
                    <span className="text-white font-medium">Comunicados</span>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold">
                    3 novos
                  </span>
                </div>
                <div className="space-y-2">
                  {mockCommunications.map((comm, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-slate-700/50 rounded-lg px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-teal-400" />
                        <span className="text-gray-200 text-sm">{comm.title}</span>
                      </div>
                      <span className="text-gray-500 text-xs">{comm.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solicitações */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-4 h-4 text-teal-400" />
                  <span className="text-white font-medium">Minhas Solicitações</span>
                </div>
                <div className="space-y-2">
                  {mockRequests.map((req, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-slate-700/50 rounded-lg px-4 py-3">
                      <span className="text-gray-200 text-sm">{req.title}</span>
                      {req.status === 'resolved' ? (
                        <span className="flex items-center gap-1 text-emerald-400 text-xs">
                          <Check className="w-3 h-3" />
                          Resolvido
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-amber-400 text-xs">
                          <Clock className="w-3 h-3" />
                          Em andamento
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Ranking */}
              <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-4 border border-amber-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-amber-400" />
                    <div>
                      <p className="text-white font-medium">Seu Ranking</p>
                      <p className="text-amber-300 text-sm">3º lugar no mês</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-xl">+45</p>
                    <p className="text-gray-400 text-xs">pontos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.category}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 rounded bg-teal-500/10 text-teal-300 text-xs"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScopeB2BSection;