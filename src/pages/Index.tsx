import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, BookOpen, Compass, Palette } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trackEvent } from "@/utils/tracking";
import SectionShell from "@/components/fluxrow/SectionShell";
import SectionBadge from "@/components/fluxrow/SectionBadge";
import SoftCard from "@/components/fluxrow/SoftCard";
import Counter from "@/components/fluxrow/Counter";
import { fadeUp } from "@/lib/motion";

const STATS = [
  { value: 120, prefix: "+", suffix: "", label: "automações entregues" },
  { value: 850, prefix: "+", suffix: "", label: "leads gerados" },
  { value: 2500, prefix: "+", suffix: "", label: "horas economizadas" },
  { value: 147, prefix: "R$", suffix: "", label: "menor investimento para começar" },
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
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-3 border border-white/15 bg-white/[0.04] rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/85" />
              <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/70">
                Fluxrow · sistemas com IA
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8 max-w-4xl mx-auto"
          >
            Sistemas que rodam sozinhos.{" "}
            <span className="gradient-accent-text italic">Receita</span> que continua entrando.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Para solo operators e criadores que querem montar sua máquina de IA em dias — e para empresas que querem terceirizar o stack completo e focar no negócio.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8"
          >
            <Link
              to="/produtos"
              onClick={() => trackEvent("home_path_click", { path: "produtos" })}
              className="no-underline"
            >
              <SoftCard interactive padding="md" className="h-full text-left flex flex-col gap-2">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/55 font-mono">CAMINHO A</p>
                <p className="text-xl font-serif text-white">Sou solo operator ou criador</p>
                <p className="text-sm text-white/60 leading-relaxed">Quero comprar o kit pronto e montar minha operação de IA essa semana.</p>
                <ArrowRight className="w-4 h-4 text-white/40 mt-2" />
              </SoftCard>
            </Link>
            <Link
              to="/agencia"
              onClick={() => trackEvent("home_path_click", { path: "agencia" })}
              className="no-underline"
            >
              <SoftCard interactive padding="md" className="h-full text-left flex flex-col gap-2">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/55 font-mono">CAMINHO B</p>
                <p className="text-xl font-serif text-white">Sou gestor ou empresa</p>
                <p className="text-sm text-white/60 leading-relaxed">Quero terceirizar o stack completo — sistema, automação e operação contínua.</p>
                <ArrowRight className="w-4 h-4 text-white/40 mt-2" />
              </SoftCard>
            </Link>
          </motion.div>
        </section>

        {/* Prova social — Counters animados */}
        <SectionShell width="5xl" className="border-b border-white/5 !py-16 md:!py-20">
          <SectionBadge icon={Sparkles} label="NÚMEROS" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="text-center md:text-left"
              >
                <p className="font-serif text-4xl md:text-5xl gradient-accent-text leading-none mb-3">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/55 font-mono">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionShell>

        {/* Para quem é */}
        <SectionShell width="5xl">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
            <div>
              <SectionBadge icon={Users} label="PARA QUEM É" />
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-6">
                Dois perfis.<br />
                Uma missão:{" "}
                <span className="gradient-accent-text italic">operar com IA.</span>
              </h2>
              <p className="text-white/65 leading-relaxed max-w-md">
                Você escolhe o caminho. A gente entrega a infraestrutura — pronta pra rodar ou operada de ponta a ponta.
              </p>
            </div>

            <div className="grid gap-5">
              {/* Perfil 01 */}
              <SoftCard padding="lg">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/55 font-mono mb-4">
                  PERFIL 01
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 leading-tight">
                  Solo operator ou criador
                </h3>
                <p className="text-sm text-white/60 mb-6">
                  Freelancer, creator, consultor, empreendedor solo
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Você faz tudo sozinho e o tempo é seu gargalo principal",
                    "Quer automatizar prospecção, atendimento ou entrega — sem contratar",
                    "Precisa de um sistema pronto para instalar e começar a usar essa semana",
                  ].map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-white/75 leading-relaxed">
                      <span className="gradient-accent-text font-mono shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/produtos"
                  onClick={() => trackEvent("para_quem_cta_produtos")}
                  className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-white/80 group"
                >
                  Ver o AI Operator Kit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </SoftCard>

              {/* Perfil 02 */}
              <SoftCard padding="lg">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/55 font-mono mb-4">
                  PERFIL 02
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 leading-tight">
                  Gestor ou empresa
                </h3>
                <p className="text-sm text-white/60 mb-6">
                  CEO, diretor, gestor de operações, equipe de 5–50 pessoas
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Processos manuais estão travando o crescimento do negócio",
                    "Já testou ferramentas de IA mas sem uma arquitetura que funcione de verdade",
                    "Quer terceirizar o stack completo — sistema, automação e operação contínua",
                  ].map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-white/75 leading-relaxed">
                      <span className="gradient-accent-text font-mono shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/agencia"
                  onClick={() => trackEvent("para_quem_cta_agencia")}
                  className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-white/80 group"
                >
                  Conhecer a agência
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </SoftCard>
            </div>
          </div>
        </SectionShell>

        {/* Conteúdos */}
        <SectionShell width="5xl" divided>
          <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-end mb-12">
            <div>
              <SectionBadge icon={BookOpen} label="CONTEÚDOS" />
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
              <Link key={c.h} to={c.h} className="no-underline">
                <SoftCard interactive padding="md" className="h-full">
                  <Compass className="w-4 h-4 text-white/50 mb-3" strokeWidth={1.6} />
                  <p className="font-serif text-lg mb-3">{c.t}</p>
                  <span className="text-xs font-mono text-white/55 inline-flex items-center gap-1 group-hover:text-white/80 transition-colors">
                    Ler artigo <ArrowRight className="w-3 h-3" />
                  </span>
                </SoftCard>
              </Link>
            ))}
          </div>
        </SectionShell>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
