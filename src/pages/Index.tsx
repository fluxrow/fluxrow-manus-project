import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import FluxrowLogo from "@/components/ui/FluxrowLogo";
import { trackEvent } from "@/utils/tracking";

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

      {/* Hero hub */}
      <header className="border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <FluxrowLogo size="sm" variant="light" />
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm font-mono text-white/60">
            <Link to="/produtos" className="hover:text-white transition-colors">Produtos</Link>
            <Link to="/agencia" className="hover:text-white transition-colors">Agência</Link>
            <Link to="/conteudos" className="hover:text-white transition-colors">Conteúdos</Link>
            <Link to="/contato" className="hover:text-white transition-colors">Contato</Link>
          </div>
        </nav>

        <section className="max-w-5xl mx-auto px-6 pt-24 pb-32 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-mono mb-8">
            Fluxrow · sistemas com IA
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8 max-w-4xl mx-auto">
            Sistemas que rodam sozinhos. Receita que continua entrando.
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto mb-12 leading-relaxed">
            A Fluxrow constrói operações com IA — pra quem quer comprar pronto e operar sozinho, ou pra quem quer terceirizar tudo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/produtos"
              onClick={() => trackEvent("home_path_click", { path: "produtos" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#080807] font-medium rounded-sm hover:bg-white/90 transition-colors w-full sm:w-auto"
            >
              Ver produtos <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/agencia"
              onClick={() => trackEvent("home_path_click", { path: "agencia" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:border-white/40 transition-colors w-full sm:w-auto"
            >
              Conheça a agência
            </Link>
          </div>
        </section>
      </header>

      {/* Os dois caminhos */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-6">
        {/* Caminho A — Produtos */}
        <Link
          to="/produtos"
          onClick={() => trackEvent("home_card_click", { path: "produtos" })}
          className="group block border border-white/10 hover:border-white/30 transition-all p-10 rounded-sm bg-white/[0.02] hover:bg-white/[0.04]"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-mono mb-6">
            Caminho A · Compre o sistema pronto
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-5 leading-tight">
            Operadores solo, criadores e quem quer começar essa semana.
          </h2>
          <p className="text-white/65 mb-8 leading-relaxed">
            O AI Operator Kit (EN) e o Kit Operador IA (PT). Arquitetura de 5 camadas, prompts prontos, sequência de DM, templates n8n. Pagamento único, acesso vitalício.
          </p>
          <ul className="text-sm text-white/55 space-y-1 mb-8 font-mono">
            <li>· A partir de US$ 27</li>
            <li>· Acesso imediato</li>
            <li>· Garantia de 7 dias</li>
          </ul>
          <span className="inline-flex items-center gap-2 text-sm font-mono text-white group-hover:gap-3 transition-all">
            Ver produtos <ArrowRight className="w-4 h-4" />
          </span>
        </Link>

        {/* Caminho B — Agência */}
        <Link
          to="/agencia"
          onClick={() => trackEvent("home_card_click", { path: "agencia" })}
          className="group block border border-white/10 hover:border-white/30 transition-all p-10 rounded-sm bg-white/[0.02] hover:bg-white/[0.04]"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-mono mb-6">
            Caminho B · Construímos pra você
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-5 leading-tight">
            Empresas que precisam de sistema, SaaS ou automação sob medida.
          </h2>
          <p className="text-white/65 mb-8 leading-relaxed">
            Implementação completa: arquitetura, código, integração, deploy e operação contínua. A Fluxrow opera o stack para você focar no negócio.
          </p>
          <ul className="text-sm text-white/55 space-y-1 mb-8 font-mono">
            <li>· Projetos B2B sob medida</li>
            <li>· Discovery em 7 dias</li>
            <li>· Suporte e operação inclusos</li>
          </ul>
          <span className="inline-flex items-center gap-2 text-sm font-mono text-white group-hover:gap-3 transition-all">
            Conheça a agência <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </section>

      {/* Conteúdo + provas */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-end mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-mono mb-4">
              Conteúdos
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Aprenda como a gente constrói. De graça.
            </h2>
          </div>
          <Link
            to="/conteudos"
            className="inline-flex items-center gap-2 text-sm font-mono text-white/70 hover:text-white md:justify-self-end"
          >
            Ler todos <ArrowRight className="w-4 h-4" />
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
              className="block border border-white/10 hover:border-white/25 p-5 rounded-sm transition-colors"
            >
              <p className="font-serif text-lg mb-2">{c.t}</p>
              <span className="text-xs font-mono text-white/40">Ler artigo →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <FluxrowLogo size="sm" variant="light" />
            <p className="text-white/40 mt-3 text-xs font-mono">
              Sistemas com IA · Curitiba, BR
            </p>
          </div>
          <div>
            <h3 className="text-white/80 text-xs uppercase tracking-wider mb-3 font-mono">Navegar</h3>
            <ul className="space-y-2 text-white/55">
              <li><Link to="/produtos" className="hover:text-white">Produtos</Link></li>
              <li><Link to="/agencia" className="hover:text-white">Agência</Link></li>
              <li><Link to="/conteudos" className="hover:text-white">Conteúdos</Link></li>
              <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white/80 text-xs uppercase tracking-wider mb-3 font-mono">Contato</h3>
            <ul className="space-y-2 text-white/55">
              <li className="flex items-center gap-2"><Phone className="w-3 h-3" /> (41) 99236-1868</li>
              <li className="flex items-center gap-2"><Mail className="w-3 h-3" /> contato@fluxrow.com</li>
              <li className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Curitiba, PR</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white/80 text-xs uppercase tracking-wider mb-3 font-mono">Legal</h3>
            <ul className="space-y-2 text-white/55">
              <li><Link to="/politica-de-privacidade" className="hover:text-white">Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="hover:text-white">Termos</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 px-6 py-5 max-w-6xl mx-auto text-xs text-white/30 font-mono flex flex-col sm:flex-row justify-between gap-2">
          <span>CNPJ: 61.260.831/0001-97</span>
          <span>© {new Date().getFullYear()} Fluxrow. Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
