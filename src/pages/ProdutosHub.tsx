import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import BackToHomeButton from "@/components/ui/BackToHomeButton";
import { ArrowRight } from "lucide-react";

const products = [
  {
    slug: "ai-operator-kit",
    eyebrow: "Starter Kit · English",
    title: "AI Operator Kit",
    desc: "The 5-layer system to launch your AI operation in 7 days. Brain, Queue, Publisher, DM Engine, Revenue.",
    href: "/produtos/ai-operator-kit",
    cta: "Open the Kit",
  },
  {
    slug: "operator-curso",
    eyebrow: "Curso · Português",
    title: "Curso IA Operator para Empresários",
    desc: "Como instalar IA no seu negócio sem virar engenheiro. Stack mínimo viável e automações que geram caixa.",
    href: "/produtos/operator-curso",
    cta: "Ver o curso",
  },
];

const ProdutosHub = () => {
  return (
    <div className="min-h-screen bg-[#080807] text-white">
      <SEO
        title="Produtos Fluxrow — IA Operator Kit e Curso"
        description="Os produtos da Fluxrow para operar IA no seu negócio: o AI Operator Kit (EN) e o Curso IA Operator para empresários (PT)."
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
            Dois caminhos práticos: o Kit para quem quer montar a operação sozinho, e o Curso para quem quer instalar IA na própria empresa.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              to={p.href}
              className="group block border border-white/10 hover:border-white/30 transition-all p-8 rounded-sm bg-white/[0.02] hover:bg-white/[0.04]"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/50 font-mono mb-6">
                {p.eyebrow}
              </p>
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
      </main>
    </div>
  );
};

export default ProdutosHub;
