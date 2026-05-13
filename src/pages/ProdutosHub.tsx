import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import BackToHomeButton from "@/components/ui/BackToHomeButton";
import { ArrowRight } from "lucide-react";

const products = [
  {
    slug: "ai-operator-kit",
    flag: "EN",
    eyebrow: "AI Operator Kit · English",
    title: "AI Operator Kit",
    desc: "The 5-layer system to launch your AI operation in 7 days. Brain, Queue, Publisher, DM Engine, Revenue.",
    href: "/produtos/ai-operator-kit",
    cta: "Open the Kit",
  },
  {
    slug: "kit-operador-ia",
    flag: "PT",
    eyebrow: "Kit Operador IA · Português",
    title: "Kit Operador IA",
    desc: "O sistema completo para instalar IA na sua operação em 7 dias. Versão em português, conteúdo entregue em inglês.",
    href: "/produtos/kit-operador-ia",
    cta: "Ver o Kit",
  },
];

const ProdutosHub = () => {
  return (
    <div className="min-h-screen bg-[#080807] text-white">
      <SEO
        title="Produtos Fluxrow — sistemas para operar IA no seu negócio"
        description="O AI Operator Kit em inglês e a versão Kit Operador IA em português. Sistemas prontos para transformar IA em operação que gera receita."
        path="/produtos"
      />
      <BackToHomeButton />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
            Produtos
          </p>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Sistemas para operar IA no seu negócio.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Compre o sistema pronto e comece a operar essa semana. Escolha o idioma.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              to={p.href}
              className="group block border border-white/10 hover:border-white/30 transition-all p-8 rounded-sm bg-white/[0.02] hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50 font-mono">
                  {p.eyebrow}
                </p>
                <span className="text-[10px] font-mono px-2 py-1 border border-white/15 text-white/60">
                  {p.flag}
                </span>
              </div>
              <h2 className="text-3xl font-serif mb-4 group-hover:text-white">
                {p.title}
              </h2>
              <p className="text-white/65 mb-8 leading-relaxed">{p.desc}</p>
              <span className="inline-flex items-center gap-2 text-sm font-mono text-white/80 group-hover:text-white">
                {p.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-24 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-serif mb-3">Precisa de algo sob medida?</h2>
          <p className="text-white/65 mb-6 max-w-2xl">
            Construímos sistemas, SaaS e automações para empresas. Implementação completa, suporte e operação contínua.
          </p>
          <Link
            to="/contato"
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
