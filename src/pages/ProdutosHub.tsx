import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import BackToHomeButton from "@/components/ui/BackToHomeButton";
import { ArrowRight, Check } from "lucide-react";
import { trackEvent } from "@/utils/tracking";

const features = [
  "Arquitetura de 5 camadas (Brain → Queue → Publisher → DM → Revenue)",
  "3 caminhos de execução (Fast / Stable / Scale)",
  "15 prompts prontos · sequência ManyChat · templates n8n",
  "Operator Repository com 5 skill files (formato SKILL.md)",
  "Checklists de lançamento: Fast (2 dias), Stable (7 dias)",
  "Revenue math + upgrade path (10/30/100 vendas)",
];

function detectLang(): "pt" | "en" {
  if (typeof window === "undefined") return "pt";
  const stored = localStorage.getItem("aok_lang");
  if (stored === "pt" || stored === "en") return stored;
  const nav = navigator.language?.toLowerCase() || "";
  return nav.startsWith("pt") ? "pt" : "en";
}

const ProdutosHub = () => {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  useEffect(() => {
    setLang(detectLang());
  }, []);

  const isPT = lang === "pt";
  const primaryPrice = isPT ? "R$ 147" : "$27";
  const secondaryNote = isPT ? "Outside Brazil? $27 USD" : "No Brasil? R$ 147 BRL";

  return (
    <div className="min-h-screen bg-[#080807] text-white">
      <SEO
        title="AI Operator Kit — Fluxrow"
        description="Brain, fila, publicador, engine de DM e receita. O kit de campo pra abrir e rodar seu sistema de IA essa semana."
        path="/produtos"
      />
      <BackToHomeButton />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
            AI Operator Kit
          </p>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            O sistema de IA que opera sua operação.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Brain, fila, publicador, engine de DM e receita — montados em 5 camadas pra você abrir e rodar essa semana. Não é curso. É um kit de campo.
          </p>
        </header>

        <section className="mb-16">
          <article className="border border-white/10 hover:border-white/30 transition-all rounded-sm bg-white/[0.02] overflow-hidden">
            <div className="grid md:grid-cols-[1.4fr_1fr]">
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-6">
                  AI Operator Kit · v1
                </p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Construa o sistema de IA que roda sua operação.
                </h2>
                <p className="text-white/65 mb-8 leading-relaxed">
                  Um stack pronto com Brain, fila, publicador, engine de DM e receita. Você abre, conecta e roda — em dias, não em meses.
                </p>

                <ul className="space-y-2 text-sm text-white/75 mb-10">
                  {features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="w-4 h-4 text-white/50 shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/produtos/ai-operator-kit"
                  onClick={() => trackEvent("product_card_click", { product: "ai_operator_kit", lang })}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#080807] font-medium rounded-sm hover:bg-white/90 transition-colors text-sm"
                >
                  Acessar o Kit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-8 md:p-10 bg-white/[0.015]">
                <p className="text-xs font-mono text-white/50 mb-4 uppercase tracking-wider">
                  Investimento
                </p>

                <p className="text-5xl font-serif mb-2">{primaryPrice}</p>
                <p className="text-xs text-white/50 font-mono mb-6">
                  {isPT ? "à vista · acesso imediato" : "one-time · instant access"}
                </p>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-white/40 font-mono">{secondaryNote}</p>
                </div>
              </div>
            </div>
          </article>

          <p className="text-xs text-white/40 mt-6 font-mono text-center">
            Garantia de 7 dias · Pagamento único · Acesso vitalício
          </p>
        </section>

        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-serif mb-3">Precisa de algo sob medida?</h2>
          <p className="text-white/65 mb-6 max-w-2xl">
            Construímos sistemas, SaaS e automações para empresas. Implementação completa, suporte e operação contínua.
          </p>
          <Link
            to="/contato"
            onClick={() => trackEvent("agency_lead_click", { source: "produtos_hub" })}
            className="inline-flex items-center gap-2 text-sm font-mono text-white/80 hover:text-white"
          >
            Falar com a Fluxrow <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default ProdutosHub;
