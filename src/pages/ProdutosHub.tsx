import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import BackToHomeButton from "@/components/ui/BackToHomeButton";
import { ArrowRight, Check, Globe } from "lucide-react";
import { trackEvent } from "@/utils/tracking";

const features = [
  "5-layer system architecture (Brain → Queue → Publisher → DM → Revenue)",
  "3 execution paths (Fast / Stable / Scale)",
  "15 prompts prontos · ManyChat sequence · n8n templates",
  "Operator Repository com 5 skill files (formato SKILL.md)",
  "Launch checklists: Fast (2 dias), Stable (7 dias)",
  "Revenue math + upgrade path (10/30/100 vendas)",
];

const ProdutosHub = () => {
  return (
    <div className="min-h-screen bg-[#080807] text-white">
      <SEO
        title="Produtos Fluxrow — AI Operator Kit (PT/EN)"
        description="O AI Operator Kit: sistema de 5 camadas para operar IA em conteúdo, DMs e vendas. Disponível em português e inglês, preço por moeda."
        path="/produtos"
      />
      <BackToHomeButton />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
            Produtos
          </p>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Um sistema. Dois idiomas. Sua moeda.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            O AI Operator Kit em uma versão única, completa, disponível em português e inglês — com preço ajustado pra quem está no Brasil ou fora.
          </p>
        </header>

        {/* Único card de produto */}
        <section className="mb-16">
          <article className="border border-white/10 hover:border-white/30 transition-all rounded-sm bg-white/[0.02] overflow-hidden">
            <div className="grid md:grid-cols-[1.4fr_1fr]">
              {/* Lado esquerdo — produto */}
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="w-3.5 h-3.5 text-white/40" />
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono">
                    AI Operator Kit · PT + EN
                  </p>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Build the AI system that runs your operation.
                </h2>
                <p className="text-white/65 mb-8 leading-relaxed">
                  Brain, fila, publicador, engine de DM, receita. Não é curso — é um kit de campo pra abrir e rodar essa semana.
                </p>

                <ul className="space-y-2 text-sm text-white/75 mb-10">
                  {features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="w-4 h-4 text-white/50 shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/produtos/ai-operator-kit?lang=pt"
                    onClick={() => trackEvent("product_card_click", { product: "ai_operator_kit", lang: "pt" })}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#080807] font-medium rounded-sm hover:bg-white/90 transition-colors text-sm"
                  >
                    Ver em Português · R$ 147 <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/produtos/ai-operator-kit?lang=en"
                    onClick={() => trackEvent("product_card_click", { product: "ai_operator_kit", lang: "en" })}
                    className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 text-white font-medium rounded-sm hover:border-white/40 transition-colors text-sm"
                  >
                    Read in English · $27 <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Lado direito — pricing */}
              <div className="p-8 md:p-10 bg-white/[0.015]">
                <p className="text-xs font-mono text-white/50 mb-4 uppercase tracking-wider">
                  Investimento
                </p>

                <div className="space-y-6 mb-8">
                  <div className="pb-6 border-b border-white/10">
                    <p className="text-xs font-mono text-white/40 mb-1">Brasil · BRL</p>
                    <p className="text-4xl font-serif">R$ 147</p>
                    <p className="text-xs text-white/40 mt-1 font-mono">à vista · acesso imediato</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/40 mb-1">Global · USD</p>
                    <p className="text-4xl font-serif">$27</p>
                    <p className="text-xs text-white/40 mt-1 font-mono">one-time · instant access</p>
                  </div>
                </div>

                <p className="text-xs text-white/40 font-mono leading-relaxed">
                  Detectamos seu idioma automaticamente.<br />
                  Você pode trocar PT/EN a qualquer momento.
                </p>
              </div>
            </div>
          </article>

          <p className="text-xs text-white/40 mt-6 font-mono text-center">
            Garantia de 7 dias · Pagamento único · Acesso vitalício
          </p>
        </section>

        {/* CTA agência */}
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
