import { Clock, Store, Wifi, Car, Calendar, Tag, MapPin, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: Clock,
    category: "Horários",
    examples: ['"Que horas abre?"', '"Funciona no feriado?"', '"Abre domingo?"'],
  },
  {
    icon: Store,
    category: "Lojas",
    examples: ['"Tem loja da X?"', '"Onde fica a loja Y?"', '"Telefone da loja Z"'],
  },
  {
    icon: Wifi,
    category: "Serviços",
    examples: ['"Tem wifi?"', '"Onde fica o banheiro?"', '"Tem fraldário?"'],
  },
  {
    icon: Car,
    category: "Estacionamento",
    examples: ['"Quanto custa?"', '"Aceita cartão?"', '"Tem vaga coberta?"'],
  },
  {
    icon: Calendar,
    category: "Eventos",
    examples: ['"Tem cinema?"', '"Qual filme está passando?"', '"Tem evento hoje?"'],
  },
  {
    icon: Tag,
    category: "Promoções",
    examples: ['"Tem promoção hoje?"', '"Como participo?"', '"Quando termina?"'],
  },
  {
    icon: MapPin,
    category: "Localização",
    examples: ['"Como chego aí?"', '"Qual o endereço?"', '"Tem ônibus?"'],
  },
  {
    icon: Search,
    category: "Achados e Perdidos",
    examples: ['"Perdi minha carteira"', '"Onde procuro?"', '"Achei um celular"'],
  },
];

const ScopeB2CSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Escopo B2C
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Atendimento aos Clientes Finais
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A IA será treinada para responder todas as perguntas mais frequentes dos visitantes do shopping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-700/50 hover:border-blue-500/40 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.category}
                </h3>
                <ul className="space-y-2">
                  {item.examples.map((example, idx) => (
                    <li key={idx} className="text-gray-400 text-sm italic">
                      {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScopeB2CSection;
