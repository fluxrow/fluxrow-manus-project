import { Check, X, MessageCircle, Phone, Bot, BarChart3, Building, Sparkles, Instagram, Facebook, Mail, Trophy, Database, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const includedFeatures = [
  { icon: MessageCircle, text: "WhatsApp como canal principal de atendimento B2C" },
  { icon: Phone, text: "Sistema telefônico com IA que atende ligações automaticamente" },
  { icon: Bot, text: "IA treinada com FAQ completo do shopping (horários, lojas, serviços, eventos)" },
  { icon: Phone, text: "Redirecionamento inteligente: ligação → IA responde → sugere WhatsApp → conversa aberta" },
  { icon: Building, text: "Fluxo B2B para lojistas: IA coleta demanda e encaminha ao setor responsável" },
  { icon: BarChart3, text: "Dashboard básico com métricas de atendimento" },
  { icon: Bot, text: "Atendimento 24/7 sem intervenção humana para dúvidas comuns" },
  { icon: Sparkles, text: "Triagem inteligente: quando precisa de humano, IA direciona automaticamente" },
];

const notIncludedFeatures = [
  { icon: Instagram, text: "Instagram como canal de atendimento" },
  { icon: Facebook, text: "Facebook Messenger" },
  { icon: Mail, text: "Email automatizado" },
  { icon: LineChart, text: "Analytics avançado / BI com índices de comportamento" },
  { icon: Database, text: "Integrações com Group Shopping / BeMall / COM21" },
  { icon: Trophy, text: "Gamificação e ranking para lojistas" },
  { icon: Database, text: "Captura avançada de dados (data fishing)" },
];

const PlansSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
            Investimento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pacote Inicial
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tudo que o shopping precisa para começar a automatizar o atendimento com IA, focado no que gera resultado imediato
          </p>
        </div>

        {/* Single Plan Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="bg-slate-900/50 border-2 border-teal-500 shadow-lg shadow-teal-500/10">
            <CardContent className="p-8">
              {/* Pricing */}
              <div className="text-center mb-8 pb-8 border-b border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-2">WhatsApp + Telefone IA + Lojistas</h3>
                <p className="text-gray-400 text-sm mb-6">Atendimento inteligente para clientes e lojistas</p>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Mensalidade</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-gray-400 text-lg">R$</span>
                      <span className="text-5xl font-bold text-white">500</span>
                      <span className="text-gray-400">/mês</span>
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-slate-700" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Implementação</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-gray-400 text-lg">R$</span>
                      <span className="text-4xl font-bold text-teal-400">2.500</span>
                      <span className="text-gray-400 text-sm">(único)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  O que está incluso
                </h4>
                <div className="space-y-3">
                  {includedFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <feature.icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button
                className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white py-6 text-lg"
                onClick={() => window.open("https://wa.me/5541992361868?text=Olá! Tenho interesse no pacote inicial para o Teresópolis Shopping", "_blank")}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Quero Começar
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Future Upgrades */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-slate-900/30 border border-slate-700/50">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium mb-2">
                  Fase 2
                </span>
                <h4 className="text-xl font-bold text-white mb-2">
                  Upgrades Futuros
                </h4>
                <p className="text-gray-400 text-sm">
                  Depois que o sistema estiver rodando bem, essas funcionalidades podem ser adicionadas ao projeto
                </p>
              </div>

              <div className="space-y-3">
                {notIncludedFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 opacity-60">
                    <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <feature.icon className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-gray-400 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
                <p className="text-gray-500 text-xs">
                  Valores e escopo dos upgrades serão definidos conforme a necessidade do projeto
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
