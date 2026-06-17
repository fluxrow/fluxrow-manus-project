import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";
import { trackEvent } from "@/utils/tracking";
import { detectLang, persistLang } from "@/utils/langDetect";

const COPY = {
  pt: {
    eyebrow: "AI Operator Kit",
    h1: "O sistema de IA que opera sua operação.",
    intro:
      "Brain, fila, publicador, engine de DM e receita — montados em 5 camadas pra você abrir e rodar essa semana. Não é curso. É um kit de campo.",
    cardEyebrow: "AI Operator Kit · v1",
    cardH2: "Construa o sistema de IA que roda sua operação.",
    cardP:
      "Um stack pronto com Brain, fila, publicador, engine de DM e receita. Você abre, conecta e roda — em dias, não em meses.",
    features: [
      "Arquitetura de 5 camadas (Brain → Queue → Publisher → DM → Revenue)",
      "3 caminhos de execução (Fast / Stable / Scale)",
      "15 prompts prontos · sequência ManyChat · templates n8n",
      "Operator Repository com 5 skill files (formato SKILL.md)",
      "Checklists de lançamento: Fast (2 dias), Stable (7 dias)",
      "Revenue math + upgrade path (10/30/100 vendas)",
    ],
    cta: "Acessar o Kit",
    invest: "Investimento",
    price: "R$ 147",
    priceNote: "à vista · acesso imediato",
    secondary: "Outside Brazil? US$ 27 USD",
    guarantee: "Garantia de 7 dias · Pagamento único · Acesso vitalício",
    customH2: "Precisa de algo sob medida?",
    customP:
      "Construímos sistemas, SaaS e automações para empresas. Implementação completa, suporte e operação contínua.",
    customCta: "Falar com a Fluxrow",
    toggle: "EN",
  },
  en: {
    eyebrow: "AI Operator Kit",
    h1: "The AI system that runs your operation.",
    intro:
      "Brain, queue, publisher, DM engine, and revenue — assembled in 5 layers so you can open and run it this week. Not a course. A field kit.",
    cardEyebrow: "AI Operator Kit · v1",
    cardH2: "Build the AI system that runs your operation.",
    cardP:
      "A ready stack with Brain, queue, publisher, DM engine, and revenue. You open it, connect, and run — in days, not months.",
    features: [
      "5-layer architecture (Brain → Queue → Publisher → DM → Revenue)",
      "3 execution paths (Fast / Stable / Scale)",
      "15 ready prompts · ManyChat sequence · n8n templates",
      "Operator Repository with 5 skill files (SKILL.md format)",
      "Launch checklists: Fast (2 days), Stable (7 days)",
      "Revenue math + upgrade path (10/30/100 sales)",
    ],
    cta: "Access the Kit",
    invest: "Investment",
    price: "US$ 27",
    priceNote: "one-time · instant access",
    secondary: "No Brasil? R$ 147 BRL",
    guarantee: "7-day guarantee · One-time payment · Lifetime access",
    customH2: "Need something custom?",
    customP:
      "We build systems, SaaS, and automations for companies. Full implementation, support, and ongoing operation.",
    customCta: "Talk to Fluxrow",
    toggle: "PT",
  },
};

const ProdutosHub = () => {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  useEffect(() => {
    setLang(detectLang());
  }, []);

  const c = COPY[lang];

  const switchLang = () => {
    const next = lang === "pt" ? "en" : "pt";
    setLang(next);
    persistLang(next);
    // Reflect choice in URL so it stays sticky on refresh / share.
    if (typeof window !== "undefined") {
      const u = new URL(window.location.href);
      u.searchParams.set("lang", next);
      window.history.replaceState({}, "", u.toString());
    }
  };

  return (
    <div className="min-h-screen bg-[#080807] text-[#1A1A1A]">
      <SEO
        title={lang === "pt" ? "AI Operator Kit — Fluxrow" : "AI Operator Kit — Fluxrow"}
        description={c.intro}
        path="/produtos"
        lang={lang === "pt" ? "pt-BR" : "en-US"}
        locale={lang === "pt" ? "pt_BR" : "en_US"}
        bilingual
      />
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-16 flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#1A1A1A]/55 font-mono">
              {c.eyebrow}
            </p>
            <button
              onClick={switchLang}
              className="text-xs font-mono text-[#1A1A1A]/55 hover:text-[#1A1A1A] border border-[#1A1A1A]/12 hover:border-white/30 px-3 py-1.5 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
              aria-label="Toggle language"
            >
              {c.toggle}
            </button>
          </div>
          <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl break-words">
            {c.h1}
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/55 max-w-2xl leading-relaxed">{c.intro}</p>
        </header>

        <section className="mb-16">
          <article className="border border-[#1A1A1A]/12 hover:border-white/25 transition-all rounded-md bg-white/[0.02] overflow-hidden">
            <div className="grid md:grid-cols-[1.4fr_1fr]">
              <div className="p-6 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#1A1A1A]/12">
                <p className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/55 font-mono mb-6">
                  {c.cardEyebrow}
                </p>
                <h2 className="text-[1.65rem] sm:text-3xl md:text-4xl font-serif mb-4 leading-tight break-words">
                  {c.cardH2}
                </h2>
                <p className="text-[#1A1A1A]/75 mb-8 leading-relaxed">{c.cardP}</p>

                <ul className="space-y-2 text-sm text-[#1A1A1A]/75 mb-10">
                  {c.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="w-4 h-4 text-[#1A1A1A]/55 shrink-0 mt-0.5" />
                      <span className="min-w-0 flex-1 safe-wrap">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/produtos/ai-operator-kit?lang=${lang}`}
                  onClick={() =>
                    trackEvent("product_card_click", {
                      product: "ai_operator_kit",
                      lang,
                    })
                  }
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6709] text-[#F5F3EE] font-medium rounded-md hover:bg-[#e85a00] active:scale-[0.98] transition-all duration-150 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6709]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F3EE]"
                >
                  {c.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-6 sm:p-8 md:p-10 bg-white/[0.015]">
                <p className="text-xs font-mono text-[#1A1A1A]/55 mb-4 uppercase tracking-wider">
                  {c.invest}
                </p>

                <p className="text-5xl font-serif mb-2 gradient-accent-text">
                  {c.price}
                </p>
                <p className="text-xs text-[#1A1A1A]/55 font-mono mb-6">
                  {c.priceNote}
                </p>

                <div className="pt-6 border-t border-[#1A1A1A]/12">
                  <button
                    onClick={switchLang}
                    className="text-xs text-[#1A1A1A]/55 hover:text-[#1A1A1A] font-mono transition-colors"
                  >
                    {c.secondary} →
                  </button>
                </div>
              </div>
            </div>
          </article>

          <p className="text-xs text-[#1A1A1A]/55 mt-6 font-mono text-center">
            {c.guarantee}
          </p>
        </section>

        <section className="border-t border-[#1A1A1A]/12 pt-12">
          <h2 className="text-2xl font-serif mb-3">{c.customH2}</h2>
          <p className="text-[#1A1A1A]/75 mb-6 max-w-2xl">{c.customP}</p>
          <Link
            to="/contato"
            onClick={() =>
              trackEvent("agency_lead_click", { source: "produtos_hub" })
            }
            className="inline-flex items-center gap-2 text-sm font-mono text-[#1A1A1A]/75 hover:text-[#1A1A1A] group"
          >
            {c.customCta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProdutosHub;
