import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Workflow, Brain, Compass } from "lucide-react";
import BackToHomeButton from "@/components/ui/BackToHomeButton";
import FluxrowLogo from "@/components/ui/FluxrowLogo";
import LeadRoutingPanel from "@/components/positivo/LeadRoutingPanel";
import DoresGrid from "@/components/positivo/DoresGrid";
import CronogramaTimeline from "@/components/positivo/CronogramaTimeline";
import MagneticCTA from "@/components/positivo/MagneticCTA";
import EsteiraLogistica from "@/components/positivo/EsteiraLogistica";
import { PILARES, VISAO_FUTURO, INVESTIMENTO } from "@/data/propostaPositivo";
import { Check } from "lucide-react";


const PILAR_ICONS = [Workflow, Brain, Compass];

export default function PropostaPositivo() {
  const scrollNext = () =>
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      <Helmet>
        <title>Proposta Estratégica Positivo · Fluxrow</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Ecossistema unificado de atendimento, IA SDR e roteamento de leads desenvolvido pela Fluxrow para a Positivo."
        />
      </Helmet>

      <BackToHomeButton />
      <MagneticCTA />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <FluxrowLogo size="md" />
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-slate-400">
            <span className="hidden md:inline">Proposta confidencial</span>
            <span className="px-2 py-0.5 rounded-full bg-[#f9b217]/10 text-[#f9b217] border border-[#f9b217]/30">
              POSITIVO · 2026
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
              "radial-gradient(800px circle at 50% 30%, rgba(249,178,23,0.08), transparent 60%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#f9b217] font-mono mb-6">
            Proposta exclusiva · Fluxrow para Positivo
          </p>
          <h1 className="font-serif text-4xl md:text-7xl leading-[1.05] text-white mb-8">
            Omnichannel, IA SDR e{" "}
            <span className="italic text-[#f9b217]">Inteligência de Dados</span>{" "}
            para o próximo patamar da Positivo.
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
            Um ecossistema unificado de atendimento, qualificação e ativação que
            transforma Meta, LinkedIn e Google Meu Negócio em uma esteira
            inteligente — entregando o lead certo ao vendedor certo em menos de
            3 segundos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500">
            <span>Emissão · Junho 2026</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Validade · 30 dias</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Apresentação técnica · 22/06</span>
          </div>
          <button
            onClick={scrollNext}
            className="mt-16 inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#f9b217] transition-colors"
          >
            ler proposta
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </motion.div>
      </section>

      {/* Sumário Executivo */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9b217] font-mono mb-4">
          01 · Sumário executivo
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-8">
          O ponto de inflexão.
        </h2>
        <div className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg">
          <p>
            Como a maior empresa de seu segmento na América Latina, a Positivo
            atingiu um patamar de escala onde a eficiência operacional e a
            experiência do cliente não podem sofrer fricção.
          </p>
          <p>
            Atualmente, o ecossistema de atendimento e qualificação de leads
            enfrenta um gargalo crítico: soluções isoladas no WhatsApp que não
            cumprem o escopo técnico prometido, geram desalinhamento e operam de
            forma cega em relação aos dados gerados nas principais vitrines
            digitais da marca — Meta, LinkedIn e Google Meu Negócio.
          </p>
          <p className="text-white">
            Esta proposta não substitui uma ferramenta. Implanta um{" "}
            <span className="text-[#f9b217]">
              Ecossistema Unificado de Atendimento, Qualificação (SDR) e
              Ativação de Dados
            </span>
            — transformando canais de tráfego em uma esteira automatizada que
            identifica intenção, segmenta por linha de produto e direciona com
            precisão cirúrgica para o vendedor responsável.
          </p>
        </div>
      </section>

      {/* Lead Routing Panel */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9b217] font-mono mb-4">
            02 · Esteira inteligente
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl mx-auto">
            Da origem do lead ao vendedor certo —{" "}
            <span className="italic text-[#f9b217]">em menos de 3 segundos.</span>
          </h2>
        </div>
        <LeadRoutingPanel />
      </section>

      {/* Pilares da Solução */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="text-center mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9b217] font-mono mb-4">
            03 · Arquitetura da solução
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
            Três camadas. Uma operação fluida.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PILARES.map((p, i) => {
            const Icon = PILAR_ICONS[i];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 hover:border-[#f9b217]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#f9b217]/10 border border-[#f9b217]/30">
                    <Icon className="w-5 h-5 text-[#f9b217]" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">{p.numero}</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">{p.titulo}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.descricao}</p>
              </motion.div>
            );
          })}
        </div>
        <EsteiraLogistica />
      </section>


      {/* Dores */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="text-center mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9b217] font-mono mb-4">
            04 · Engenharia de dores
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl mx-auto">
            Diagnóstico técnico —{" "}
            <span className="italic text-[#f9b217]">passe o mouse para revelar a solução.</span>
          </h2>
        </div>
        <DoresGrid />
      </section>

      {/* Cronograma */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9b217] font-mono mb-4">
            05 · Cronograma
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl">
            Entrega ágil em fases modulares.
          </h2>
        </div>
        <CronogramaTimeline />
      </section>

      {/* Visão de Futuro */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9b217] font-mono mb-4">
              06 · Visão de futuro
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl">
              A Fluxrow não é fornecedor.{" "}
              <span className="italic text-[#f9b217]">É parceira estratégica de longo prazo.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {VISAO_FUTURO.map((v, i) => (
              <motion.div
                key={v.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950 p-7"
              >
                <Sparkles className="w-5 h-5 text-[#f9b217] mb-4" />
                <h3 className="font-serif text-2xl text-white mb-3">{v.titulo}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {v.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Investimento */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9b217] font-mono mb-4">
            07 · Investimento
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl">
            Estrutura comercial enxuta —{" "}
            <span className="italic text-[#f9b217]">setup único + sustentação contínua.</span>
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
                card.id === "setup"
                  ? "border-[#f9b217]/40 bg-gradient-to-br from-[#f9b217]/5 to-slate-950"
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
                    <Check className="w-4 h-4 mt-0.5 text-[#f9b217] flex-shrink-0" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-xs font-mono text-slate-500 text-center">
          Mídia paga e custos de terceiros (cloud, APIs oficiais) não inclusos · faturamento direto pelo fornecedor.
        </p>
      </section>

      {/* Fechamento */}

      <section className="max-w-3xl mx-auto px-6 py-24 text-center border-t border-slate-900">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#f9b217] font-mono mb-4">
          08 · Próximos passos
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-6">
          Pronto para iniciar o setup?
        </h2>
        <p className="text-slate-400 mb-2">
          Aceite a proposta e a Fluxrow agenda o kickoff técnico em até 48h.
        </p>
        <p className="text-xs font-mono text-slate-600">
          Fluxrow 2026 · Confidencialidade estrita para Positivo.
        </p>
      </section>
    </div>
  );
}
