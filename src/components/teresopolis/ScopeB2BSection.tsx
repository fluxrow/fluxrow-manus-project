import { Bell, Wrench, Search, Receipt, Calendar, BookOpen } from "lucide-react";
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

const ScopeB2BSection = () => {
  return (
    <section className="py-16 md:py-24">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 group"
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
