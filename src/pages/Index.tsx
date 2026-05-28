import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trackEvent } from "@/utils/tracking";

const STATS = [
  { value: "+120", label: "automações entregues" },
  { value: "+850", label: "leads gerados" },
  { value: "+2.500", label: "horas economizadas" },
  { value: "R$147", label: "menor investimento para começar" },
];

const Index = () => {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fluxrow",
    url: "https://fluxrow.com",
    logo: "https://fluxrow.com/OG_logo_fluxrow.png",
    sameAs: [
      "https://instagram.com/fluxrow",
      "https://linkedin.com/company/fluxrow",
    ],
  };

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ backgroundColor: "#080807" }}
    >
      <SEO
        title="Fluxrow — sistemas, SaaS e automações com IA"
        description="Compre o sistema pronto ou contrate a operação completa. Fluxrow constrói infraestrutura de IA para quem quer transformar conhecimento em receita."
        path="/"
        jsonLd={orgJsonLd}
      />

      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/55 font-mono mb-8">
            Fluxrow · sistemas com IA
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8 max-w-4xl mx-auto">
            Sistemas que rodam sozinhos.{" "}
            <span className="gradient-accent-text italic">Receita</span> que continua entrando.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Para solo operators e criadores que querem montar sua máquina de IA em dias — e para empresas que querem terceirizar o stack completo e focar no negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/produtos"
              onClick={() => trackEvent("home_path_click", { path: "produtos" })}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#080807] font-medium rounded-md hover:bg-white/90 active:scale-[0.98] transition-all duration-150 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080807]"
            >
              Ver produtos <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/agencia"
              onClick={() => trackEvent("home_path_click", { path: "agencia" })}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white rounded-md hover:border-white/30 hover:bg-white/5 transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080807]"
            >
              Conheça a agência
            </Link>
          </div>
        </section>

        {/* Prova social — métricas tipográficas */}
        <section className="max-w-5xl mx-auto px-6 pb-20 border-b border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="font-serif text-3xl md:text-4xl gradient-accent-text leading-none mb-2">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-white/55 font-mono">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Os dois caminhos */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
          <Link
            to="/produtos"
            onClick={() => trackEvent("home_card_click", { path: "produtos" })}
            className="group flex flex-col h-full border border-white/10 hover:border-white/25 transition-all p-10 rounded-md bg-white/[0.02] hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/55 font-mono mb-6">
              CAMINHO A
            </p>
            <h2 className="font-serif text-xl text-white mb-5 leading-tight">
              Sou solo operator ou criador
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              Quero comprar o kit pronto e montar minha operação de IA essa semana.
            </p>
            <ArrowRight className="w-4 h-4 text-white/40 mt-auto" />
          </Link>

          <Link
            to="/agencia"
            onClick={() => trackEvent("home_card_click", { path: "agencia" })}
            className="group flex flex-col h-full border border-white/10 hover:border-white/25 transition-all p-10 rounded-md bg-white/[0.02] hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/55 font-mono mb-6">
              CAMINHO B
            </p>
            <h2 className="font-serif text-xl text-white mb-5 leading-tight">
              Sou gestor ou empresa
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              Quero terceirizar o stack completo — sistema, automação e operação contínua.
            </p>
            <ArrowRight className="w-4 h-4 text-white/40 mt-auto" />
          </Link>
        </section>

        {/* Conteúdos */}
        <section className="max-w-5xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-end mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/55 font-mono mb-4">
                Conteúdos
              </p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Aprenda como a gente constrói. De graça.
              </h2>
            </div>
            <Link
              to="/conteudos"
              className="inline-flex items-center gap-2 text-sm font-mono text-white/75 hover:text-white md:justify-self-end group"
            >
              Ler todos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { t: "Claude Code", h: "/conteudos/claude-code" },
              { t: "MCP no Claude", h: "/conteudos/mcp-claude" },
              { t: "IA pra escalar negócio", h: "/conteudos/ia-escalar-negocio" },
            ].map((c) => (
              <Link
                key={c.h}
                to={c.h}
                className="group block border border-white/10 hover:border-white/25 hover:bg-white/[0.02] p-5 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
              >
                <p className="font-serif text-lg mb-2">{c.t}</p>
                <span className="text-xs font-mono text-white/55 inline-flex items-center gap-1 group-hover:text-white/80 transition-colors">
                  Ler artigo <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
