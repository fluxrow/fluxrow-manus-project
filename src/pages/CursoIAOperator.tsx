import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useStripeCheckout } from "@/hooks/useStripeCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { BackToHomeButton } from "@/components/ui/BackToHomeButton";
import { Check, Zap, MessageSquare, Workflow, BarChart3, Shield, Calendar } from "lucide-react";

const PRICE_ID = "curso_ia_operator_unico";
const WHATSAPP_URL =
  "https://wa.me/5541992361868?text=Quero%20saber%20mais%20sobre%20o%20Curso%20IA%20Operator%20para%20Empres%C3%A1rios.";

const modules = [
  {
    icon: Zap,
    title: "Mentalidade do Operador",
    desc: "Como pensar processos antes de pensar tecnologia. Onde IA gera caixa e onde só queima tempo.",
  },
  {
    icon: Workflow,
    title: "Stack Mínimo Viável",
    desc: "Claude + n8n + WhatsApp + Sheets. A combinação que resolve 80% dos casos sem engenharia complexa.",
  },
  {
    icon: MessageSquare,
    title: "Primeira Automação: Bot WhatsApp",
    desc: "Atendimento, qualificação de lead e roteirização para vendedor. Do zero ao funcional.",
  },
  {
    icon: BarChart3,
    title: "Automação de Vendas no CRM",
    desc: "Resumo de conversa, follow-up contextual, score de lead. Vendedor recebe o lead pronto.",
  },
  {
    icon: Workflow,
    title: "Automação de Operação",
    desc: "5 fluxos prontos: financeiro, suporte, RH, marketing, dados. Replicáveis na sua empresa.",
  },
  {
    icon: Shield,
    title: "Quando NÃO Automatizar",
    desc: "O critério que separa quem economiza R$10k/mês de quem queima R$10k em ferramentas.",
  },
];

const faqs = [
  {
    q: "Para quem é esse curso?",
    a: "Empresários, sócios e líderes de operação que querem implantar IA na empresa sem virar dev. Não é curso para programador — é curso para quem decide.",
  },
  {
    q: "Preciso saber programar?",
    a: "Não. Tudo é feito em ferramentas no-code/low-code (n8n, Sheets, WhatsApp Business, Claude). Mostro do clique zero.",
  },
  {
    q: "Quanto tempo leva para fazer?",
    a: "6 módulos, em torno de 5–6 horas. Você consegue ter a primeira automação rodando em uma semana.",
  },
  {
    q: "Como funciona o acesso?",
    a: "Acesso vitalício ao conteúdo + atualizações. Pagamento único de R$ 197.",
  },
  {
    q: "E se eu quiser que a Fluxrow implante na minha empresa?",
    a: "Após a compra você ganha uma sessão de diagnóstico de 30min. Se fizer sentido, fechamos um projeto sob medida.",
  },
];

export default function CursoIAOperator() {
  const { openCheckout, checkoutElement, isOpen, closeCheckout } = useStripeCheckout();
  const [email, setEmail] = useState("");

  const handleBuy = () => {
    openCheckout({
      priceId: PRICE_ID,
      customerEmail: email || undefined,
      returnUrl: `${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
    });
  };

  return (
    <div className="min-h-screen bg-[#080807] text-white">
      <Helmet>
        <title>Curso IA Operator para Empresários | Fluxrow</title>
        <meta
          name="description"
          content="Implante IA e automações na sua empresa sem virar dev. 6 módulos práticos, stack mínimo viável, fluxos prontos. R$ 197, acesso vitalício."
        />
        <link rel="canonical" href="https://fluxrow.com/curso-ia-operator" />
        <meta property="og:title" content="Curso IA Operator para Empresários | Fluxrow" />
        <meta
          property="og:description"
          content="Como empresários implantam IA na operação sem queimar tempo nem dinheiro."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Curso IA Operator para Empresários",
            description:
              "Curso prático para empresários implantarem IA e automações na operação. Stack: Claude + n8n + WhatsApp + Sheets.",
            provider: { "@type": "Organization", name: "Fluxrow", url: "https://fluxrow.com" },
            offers: {
              "@type": "Offer",
              price: "197.00",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>

      <PaymentTestModeBanner />
      <BackToHomeButton />

      {/* Hero */}
      <section className="px-6 pt-32 pb-20 max-w-5xl mx-auto text-center">
        <p className="font-dm-mono text-xs uppercase tracking-widest text-emerald-400 mb-6">
          Curso · Pagamento único · Acesso vitalício
        </p>
        <h1 className="font-instrument-serif text-5xl md:text-7xl leading-tight mb-6">
          Implante IA na sua empresa<br />
          <span className="italic text-white/70">sem virar dev.</span>
        </h1>
        <p className="font-dm-mono text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10">
          O método que empresários usam para automatizar atendimento, vendas e operação
          com Claude + n8n + WhatsApp. 6 módulos. Resultado em uma semana.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={handleBuy}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black rounded-md font-dm-mono text-sm transition"
          >
            Comprar por R$ 197 →
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-md font-dm-mono text-sm transition"
          >
            Falar antes de comprar
          </a>
        </div>
        <p className="font-dm-mono text-xs text-white/40 mt-6">
          Garantia incondicional de 7 dias · Pagamento seguro
        </p>
      </section>

      {/* Modules */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="font-instrument-serif text-4xl md:text-5xl text-center mb-16">
          O que você vai aprender
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition"
              >
                <Icon className="w-8 h-8 text-emerald-400 mb-4" strokeWidth={1.5} />
                <p className="font-dm-mono text-xs text-white/40 mb-2">Módulo {i + 1}</p>
                <h3 className="font-instrument-serif text-2xl mb-3">{m.title}</h3>
                <p className="font-dm-mono text-sm text-white/60 leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section id="comprar" className="px-6 py-20 max-w-3xl mx-auto">
        <div className="border border-white/10 rounded-lg p-10 md:p-14 text-center bg-white/[0.02]">
          <p className="font-dm-mono text-xs uppercase tracking-widest text-emerald-400 mb-4">
            Investimento único
          </p>
          <h2 className="font-instrument-serif text-5xl md:text-6xl mb-2">R$ 197</h2>
          <p className="font-dm-mono text-sm text-white/50 mb-8">à vista · acesso vitalício</p>

          <ul className="text-left space-y-3 max-w-md mx-auto mb-10">
            {[
              "6 módulos práticos (5–6h de conteúdo)",
              "Templates de prompts e fluxos n8n prontos",
              "Sessão de diagnóstico de 30min com a Fluxrow",
              "Comunidade de operadores (WhatsApp)",
              "Atualizações vitalícias",
              "Garantia incondicional de 7 dias",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 font-dm-mono text-sm text-white/80">
                <Check className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor email (opcional)"
            className="w-full max-w-md mx-auto block bg-transparent border border-white/15 rounded-md px-4 py-3 mb-3 font-dm-mono text-sm placeholder:text-white/30 focus:border-emerald-400 focus:outline-none"
          />
          <button
            onClick={handleBuy}
            className="w-full max-w-md mx-auto block px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black rounded-md font-dm-mono text-sm transition"
          >
            Comprar agora
          </button>
          <p className="font-dm-mono text-xs text-white/40 mt-4">
            Pagamento processado com segurança. Cartão de crédito.
          </p>
        </div>
      </section>

      {/* Sales meeting CTA */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <Calendar className="w-10 h-10 text-emerald-400 mx-auto mb-6" strokeWidth={1.5} />
        <h2 className="font-instrument-serif text-3xl md:text-4xl mb-4">
          Prefere que a Fluxrow implante para você?
        </h2>
        <p className="font-dm-mono text-sm text-white/60 mb-8 max-w-xl mx-auto">
          Se sua empresa precisa de algo sob medida — integração com sistemas internos,
          agentes específicos, automação fim-a-fim — fale comigo direto.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 border border-white/20 hover:border-emerald-400 hover:text-emerald-400 rounded-md font-dm-mono text-sm transition"
        >
          Agendar reunião de diagnóstico
        </a>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="font-instrument-serif text-4xl md:text-5xl text-center mb-12">
          Perguntas frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="border border-white/10 rounded-lg p-6 group hover:border-white/20 transition"
            >
              <summary className="cursor-pointer font-instrument-serif text-xl flex justify-between items-center">
                {f.q}
                <span className="text-white/40 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="font-dm-mono text-sm text-white/60 mt-4 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="px-6 py-10 text-center font-dm-mono text-xs text-white/40 border-t border-white/5">
        © {new Date().getFullYear()} Fluxrow · Curitiba, Brasil
      </footer>

      {/* Embedded checkout overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-10 px-4"
          onClick={closeCheckout}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full p-2 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCheckout}
              className="absolute -top-10 right-0 text-white/70 hover:text-white font-dm-mono text-sm"
            >
              Fechar ✕
            </button>
            {checkoutElement}
          </div>
        </div>
      )}
    </div>
  );
}
