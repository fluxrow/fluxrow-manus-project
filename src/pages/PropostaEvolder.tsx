import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowDown, Check, Smartphone, Globe, Database, CreditCard, Bell, Shield, AppWindow, Info } from "lucide-react";
import BackToHomeButton from "@/components/ui/BackToHomeButton";
import FluxrowLogo from "@/components/ui/FluxrowLogo";
import AppMockup from "@/components/evolder/AppMockup";
import CronogramaEvolder from "@/components/evolder/CronogramaEvolder";
import MagneticCTAEvolder from "@/components/evolder/MagneticCTAEvolder";
import {
  ESCOPO_SITE,
  ESCOPO_APP,
  ARQUITETURA,
  INFRA_CUSTOS,
  INVESTIMENTO,
  EVOLDER_COLORS,
  WHATSAPP_ERICSON,
} from "@/data/propostaEvolder";

const ARQ_ICONS = [Smartphone, Database, CreditCard, Bell, AppWindow];

export default function PropostaEvolder() {
  const scrollNext = () => window.scrollTo({ top: window.innerHeight, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      <Helmet>
        <title>Proposta Estratégica Evolder · Fluxrow</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="App de assinatura de manutenção de ar-condicionado e ajustes no site Evolder, desenvolvido pela Fluxrow."
        />
      </Helmet>

      <BackToHomeButton />
      <MagneticCTAEvolder />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <FluxrowLogo size="md" />
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-slate-400">
            <span className="hidden md:inline">Proposta confidencial</span>
            <span
              className="px-2 py-0.5 rounded-full border"
              style={{
                color: EVOLDER_COLORS.primary,
                borderColor: `${EVOLDER_COLORS.primary}55`,
                backgroundColor: `${EVOLDER_COLORS.primary}15`,
              }}
            >
              EVOLDER · 2026
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px circle at 50% 30%, rgba(16,185,129,0.10), transparent 60%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-mono mb-6" style={{ color: EVOLDER_COLORS.primary }}>
            Proposta exclusiva · Fluxrow para Evolder
          </p>
          <h1 className="font-serif text-4xl md:text-7xl leading-[1.05] text-white mb-8">
            Um app de assinatura que coloca a{" "}
            <span className="italic" style={{ color: EVOLDER_COLORS.primary }}>
              manutenção de climatização
            </span>{" "}
            no piloto automático.
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
            Ajustes estratégicos no site evolderenergy.com.br + aplicativo nativo
            (iOS e Android) para assinatura de manutenção preventiva — PF e PJ —
            com painel administrativo para o Ericson controlar tudo.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500">
            <span>Emissão · Junho 2026</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Validade · 30 dias</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Para · Ericson</span>
          </div>
          <button
            onClick={scrollNext}
            className="mt-16 inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
          >
            ler proposta
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </motion.div>
      </section>

      {/* 01 Sumário */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-[10px] uppercase tracking-[0.3em] font-mono mb-4" style={{ color: EVOLDER_COLORS.primary }}>
          01 · Sumário
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-8">
          Duas frentes. Um único objetivo: vender e fidelizar.
        </h2>
        <div className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg">
          <p>
            A Evolder já tem produto, marca e operação. O que falta é{" "}
            <span className="text-white">canal estruturado de venda</span> e um
            mecanismo recorrente de receita por meio de manutenção preventiva.
          </p>
          <p>
            Esta proposta oficializa o valor combinado com o Ericson e organiza
            o trabalho em dois entregáveis: <span className="text-white">ajustes no site</span>{" "}
            atual (catálogo + venda via WhatsApp) e um{" "}
            <span style={{ color: EVOLDER_COLORS.primary }}>aplicativo de assinatura</span>{" "}
            para manutenção de ar-condicionado, com área administrativa completa.
          </p>
        </div>
      </section>

      {/* 02 Site */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-mono mb-4" style={{ color: EVOLDER_COLORS.primary }}>
              02 · Escopo · Site
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-6">
              Ajustes no site evolderenergy.com.br
            </h2>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-mono text-emerald-300">
                WhatsApp do vendedor · {WHATSAPP_ERICSON}
              </span>
            </div>
          </div>
          <div className="space-y-4">
            {ESCOPO_SITE.map((e, i) => (
              <motion.div
                key={e.titulo}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <h3 className="font-serif text-xl text-white mb-2">{e.titulo}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{e.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 App */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="text-center mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] font-mono mb-4" style={{ color: EVOLDER_COLORS.primary }}>
            03 · Escopo · App
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl mx-auto">
            App de assinatura —{" "}
            <span className="italic" style={{ color: EVOLDER_COLORS.primary }}>
              simples para o cliente, completo para a operação.
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {ESCOPO_APP.map((e, i) => (
            <motion.div
              key={e.titulo}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:border-emerald-500/40 transition-colors"
            >
              <Check className="w-5 h-5 mb-3" style={{ color: EVOLDER_COLORS.primary }} />
              <h3 className="font-serif text-2xl text-white mb-2">{e.titulo}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{e.descricao}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 04 Mockup */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] font-mono mb-4" style={{ color: EVOLDER_COLORS.primary }}>
            04 · Como vai parecer
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl mx-auto">
            Mockup interativo do aplicativo.
          </h2>
          <p className="text-sm text-slate-500 mt-3 font-mono">
            Layout final será refinado no onboarding aplicando o ID visual da Evolder.
          </p>
        </div>
        <AppMockup />
      </section>

      {/* 05 Arquitetura */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] font-mono mb-4" style={{ color: EVOLDER_COLORS.primary }}>
            05 · Arquitetura técnica
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl">
            O que está por trás do app — em linguagem clara.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ARQUITETURA.map((a, i) => {
            const Icon = ARQ_ICONS[i] ?? Shield;
            return (
              <motion.div
                key={a.titulo}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border"
                  style={{
                    borderColor: `${EVOLDER_COLORS.primary}40`,
                    backgroundColor: `${EVOLDER_COLORS.primary}10`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: EVOLDER_COLORS.primary }} />
                </div>
                <h3 className="font-serif text-xl text-white mb-2">{a.titulo}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{a.descricao}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 06 Infra Custos */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.3em] font-mono mb-4" style={{ color: EVOLDER_COLORS.primary }}>
            06 · Infraestrutura
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl">
            Custos contínuos do app —{" "}
            <span className="italic" style={{ color: EVOLDER_COLORS.primary }}>
              transparência total.
            </span>
          </h2>
        </div>

        <div className="flex items-start gap-3 mb-8 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
          <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-100/90 leading-relaxed">
            Os custos abaixo são <span className="font-semibold">de responsabilidade da Evolder</span> e
            são pagos diretamente aos fornecedores (Apple, Google, provedor de
            nuvem, gateway). A Fluxrow desenvolve e configura — mas não cobra
            essas mensalidades por dentro do projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {INFRA_CUSTOS.map((c, i) => (
            <motion.div
              key={c.titulo}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-serif text-lg text-white">{c.titulo}</h3>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full border whitespace-nowrap"
                  style={{
                    color: EVOLDER_COLORS.primary,
                    borderColor: `${EVOLDER_COLORS.primary}50`,
                    backgroundColor: `${EVOLDER_COLORS.primary}10`,
                  }}
                >
                  {c.custoEstimado}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{c.descricao}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 07 Cronograma */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] font-mono mb-4" style={{ color: EVOLDER_COLORS.primary }}>
            07 · Cronograma
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl">
            Entrega em <span className="italic" style={{ color: EVOLDER_COLORS.primary }}>2 meses</span>,
            começando pelo onboarding.
          </h2>
          <p className="text-sm text-slate-400 mt-4 max-w-2xl leading-relaxed">
            Ao fechar a proposta, iniciamos com um onboarding dedicado com o
            Ericson para definir layout, funcionalidades e prioridades —
            garantindo que o app reflita exatamente a visão dele, com nossas
            recomendações técnicas para melhor desempenho.
          </p>
        </div>
        <CronogramaEvolder />
      </section>

      {/* 08 Investimento */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] font-mono mb-4" style={{ color: EVOLDER_COLORS.primary }}>
            08 · Investimento
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl">
            Valores oficiais combinados com o Ericson.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {INVESTIMENTO.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl border p-8 ${
                card.id === "app"
                  ? "border-emerald-500/40 bg-gradient-to-br from-emerald-500/5 to-slate-950"
                  : "border-slate-800 bg-slate-900/60"
              }`}
            >
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-slate-700 bg-slate-950 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                {card.tipo}
              </span>
              <h3 className="font-serif text-2xl text-white mt-5 mb-6">{card.titulo}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-serif text-5xl text-white">{card.valor}</span>
                <span className="text-xs font-mono text-slate-500">{card.unidade}</span>
              </div>
              <ul className="space-y-3">
                {card.entregas.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: EVOLDER_COLORS.primary }} />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-xs font-mono text-slate-500 text-center">
          Custos de infraestrutura, lojas e gateway de pagamento são pagos diretamente pela Evolder aos fornecedores.
        </p>
      </section>

      {/* 09 Fechamento */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center border-t border-slate-900">
        <p className="text-[10px] uppercase tracking-[0.3em] font-mono mb-4" style={{ color: EVOLDER_COLORS.primary }}>
          09 · Próximos passos
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-6">
          Pronto para iniciar o onboarding?
        </h2>
        <p className="text-slate-400 mb-2">
          Ao aceitar, agendamos o onboarding com o Ericson em até 48h e damos
          início ao cronograma de 2 meses.
        </p>
        <p className="text-xs font-mono text-slate-600 mt-6">
          Fluxrow 2026 · Confidencialidade estrita para Evolder.
        </p>
      </section>
    </div>
  );
}
