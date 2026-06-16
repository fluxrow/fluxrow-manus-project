import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Workflow, Brain, Compass, Zap, Layers, GitBranch, TrendingUp, Check, Calendar, Wallet } from "lucide-react";
import BackToHomeButton from "@/components/ui/BackToHomeButton";
import LeadRoutingPanel from "@/components/positivo/LeadRoutingPanel";
import DoresGrid from "@/components/positivo/DoresGrid";
import CronogramaTimeline from "@/components/positivo/CronogramaTimeline";
import MagneticCTA from "@/components/positivo/MagneticCTA";
import EsteiraLogistica from "@/components/positivo/EsteiraLogistica";
import { PILARES, VISAO_FUTURO, INVESTIMENTO } from "@/data/propostaPositivo";

const C = {
  primary: "#FF6709",
  black: "#050505",
  secondary: "#1C1C1C",
  white: "#F5F5F5",
  light: "#F5F3EE",
  gray: "#C7C7C7",
  ink: "#1A1A1A",
};

const fadeUp: any = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

const PILAR_ICONS = [Workflow, Brain, Compass];

function SectionBadge({ icon: Icon, label, dark = false }: { icon: any; label: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span
        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: C.primary }}
      >
        <Icon className="w-5 h-5" style={{ color: dark ? C.black : "#fff" }} />
      </span>
      <span
        className="text-[11px] font-semibold uppercase"
        style={{ letterSpacing: "3px", color: C.primary }}
      >
        {label}
      </span>
    </div>
  );
}

export default function PropostaPositivo() {
  return (
    <div style={{ backgroundColor: C.light, color: C.ink, fontFamily: "Inter, system-ui, sans-serif" }}>
      <Helmet>
        <title>Proposta Estratégica · Fluxrow</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Ecossistema unificado de atendimento, IA SDR e roteamento de leads desenvolvido pela Fluxrow."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>

      <BackToHomeButton />
      <MagneticCTA />

      {/* ============ HERO ============ */}
      <section className="min-h-screen flex items-center px-6 sm:px-10 py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-7xl mx-auto w-full">
          <SectionBadge icon={Zap} label="Proposta Exclusiva · Fluxrow" />
          <h1 className="font-black leading-[0.95] text-5xl sm:text-6xl lg:text-[84px] tracking-tight max-w-5xl">
            {["Omnichannel,", "IA SDR e dados", "no centro"].map((t, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" animate="show" custom={i}>
                {t}
              </motion.div>
            ))}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="italic"
              style={{ color: C.primary }}
            >
              da operação.
            </motion.div>
          </h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-8 text-lg sm:text-xl max-w-2xl"
            style={{ color: C.secondary }}
          >
            Um ecossistema unificado de atendimento, qualificação e ativação que transforma
            Meta, LinkedIn e Google Meu Negócio em uma esteira inteligente — entregando o
            lead certo ao vendedor certo em menos de 3 segundos.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={7}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#diagnostico"
              className="px-7 py-4 rounded-xl font-bold text-sm sm:text-base"
              style={{ backgroundColor: C.black, color: "#fff" }}
            >
              Ver o diagnóstico
            </a>
            <a
              href="#investimento"
              className="px-7 py-4 rounded-xl font-bold text-sm sm:text-base inline-flex items-center gap-2"
              style={{ backgroundColor: C.primary, color: C.black }}
            >
              Conhecer a solução <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="mt-16 flex flex-wrap items-center gap-6 text-xs font-semibold uppercase" style={{ letterSpacing: "2px", color: C.secondary }}>
            <span>Emissão · Junho 2026</span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: C.ink, opacity: 0.3 }} />
            <span>Validade · 30 dias</span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: C.ink, opacity: 0.3 }} />
            <span>Apresentação técnica · 22/06</span>
          </div>
        </div>
      </section>

      {/* Ticker laranja */}
      <div className="overflow-hidden py-4" style={{ backgroundColor: C.primary }}>
        <motion.div
          className="flex gap-8 whitespace-nowrap font-bold text-sm sm:text-base"
          style={{ color: C.black, letterSpacing: "2px" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {Array(6).fill(0).map((_, i) => (
            <span key={i}>OMNICHANNEL • IA SDR • ROTEAMENTO PREDITIVO • DADOS EM TEMPO REAL •</span>
          ))}
        </motion.div>
      </div>

      {/* ============ SUMÁRIO EXECUTIVO ============ */}
      <section className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-4xl mx-auto">
          <SectionBadge icon={Layers} label="01 · Sumário Executivo" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] mb-10" style={{ color: C.ink }}>
            O ponto <span className="italic" style={{ color: C.primary }}>de inflexão.</span>
          </h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: C.secondary }}>
            <p>
              Como a maior empresa de seu segmento na América Latina, atingiu-se um patamar
              de escala onde a eficiência operacional e a experiência do cliente não podem
              sofrer fricção.
            </p>
            <p>
              Atualmente, o ecossistema de atendimento e qualificação de leads enfrenta um
              gargalo crítico: soluções isoladas no WhatsApp que não cumprem o escopo técnico
              prometido, geram desalinhamento e operam de forma cega em relação aos dados
              gerados nas principais vitrines digitais — Meta, LinkedIn e Google Meu Negócio.
            </p>
            <p className="font-bold" style={{ color: C.ink }}>
              Esta proposta não substitui uma ferramenta. Implanta um{" "}
              <span style={{ color: C.primary }}>
                Ecossistema Unificado de Atendimento, Qualificação (SDR) e Ativação de Dados
              </span>
              {" "}— transformando canais de tráfego em uma esteira automatizada que identifica
              intenção, segmenta por linha de produto e direciona com precisão cirúrgica para
              o vendedor responsável.
            </p>
          </div>
        </div>
      </section>

      {/* ============ ESTEIRA INTELIGENTE (bloco escuro) ============ */}
      <section className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.black, color: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={GitBranch} label="02 · Esteira Inteligente" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] mb-6">
            Da origem do lead ao vendedor certo —<br />
            <span className="italic" style={{ color: C.primary }}>em menos de 3 segundos.</span>
          </h2>
          <p className="text-lg max-w-3xl mb-14" style={{ color: C.gray }}>
            Toda a jornada do lead acontece dentro de uma camada proprietária Fluxrow:
            captação, normalização, leitura de intenção e roteamento preditivo.
          </p>
          <LeadRoutingPanel />
        </div>
      </section>

      {/* ============ PILARES ============ */}
      <section className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={Workflow} label="03 · Arquitetura da Solução" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] mb-14" style={{ color: C.ink }}>
            Três camadas. <span className="italic" style={{ color: C.primary }}>Uma operação fluida.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {PILARES.map((p, i) => {
              const Icon = PILAR_ICONS[i];
              const dark = i === 1; // pilar central destacado
              return (
                <motion.div
                  key={p.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="rounded-3xl p-8"
                  style={{
                    backgroundColor: dark ? C.black : "#fff",
                    color: dark ? "#fff" : C.ink,
                    border: dark ? "none" : "1px solid rgba(26,26,26,0.08)",
                  }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: C.primary }}
                    >
                      <Icon className="w-5 h-5" style={{ color: dark ? C.black : C.black }} />
                    </span>
                    <span
                      className="text-[11px] font-bold uppercase"
                      style={{ letterSpacing: "3px", color: dark ? C.primary : C.secondary }}
                    >
                      {p.numero}
                    </span>
                  </div>
                  <h3 className="font-black text-2xl sm:text-3xl mb-4 leading-tight">{p.titulo}</h3>
                  <p className="text-base leading-relaxed" style={{ color: dark ? C.gray : C.secondary }}>
                    {p.descricao}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <EsteiraLogistica />
        </div>
      </section>

      {/* ============ DORES ============ */}
      <section id="diagnostico" className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.secondary, color: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={Sparkles} label="04 · Engenharia de Dores" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] mb-6">
            Diagnóstico técnico —<br />
            <span className="italic" style={{ color: C.primary }}>passe o mouse para revelar a solução.</span>
          </h2>
          <p className="text-lg max-w-3xl mb-14" style={{ color: C.gray }}>
            Cada sintoma abaixo é um gargalo mapeado em conversas, dashboards e relatórios.
            A coluna escondida é a resposta da Fluxrow.
          </p>
          <DoresGrid />
        </div>
      </section>

      {/* ============ CRONOGRAMA ============ */}
      <section className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-5xl mx-auto">
          <SectionBadge icon={Calendar} label="05 · Cronograma" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] mb-14" style={{ color: C.ink }}>
            Entrega ágil <span className="italic" style={{ color: C.primary }}>em fases modulares.</span>
          </h2>
          <CronogramaTimeline />
        </div>
      </section>

      {/* ============ VISÃO DE FUTURO ============ */}
      <section className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.black, color: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <SectionBadge icon={TrendingUp} label="06 · Visão de Futuro" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] mb-14">
            A Fluxrow não é fornecedor.<br />
            <span className="italic" style={{ color: C.primary }}>É parceira estratégica de longo prazo.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {VISAO_FUTURO.map((v, i) => (
              <motion.div
                key={v.titulo}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="rounded-3xl p-8"
                style={{ backgroundColor: C.secondary, border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: C.primary }}
                >
                  <Sparkles className="w-5 h-5" style={{ color: C.black }} />
                </span>
                <h3 className="font-black text-2xl sm:text-3xl mb-4 leading-tight">{v.titulo}</h3>
                <p className="text-base leading-relaxed" style={{ color: C.gray }}>
                  {v.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INVESTIMENTO ============ */}
      <section id="investimento" className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={Wallet} label="07 · Investimento" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] mb-14" style={{ color: C.ink }}>
            Estrutura comercial enxuta —<br />
            <span className="italic" style={{ color: C.primary }}>setup único + sustentação contínua.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {INVESTIMENTO.map((card, i) => {
              const highlight = card.id === "setup";
              return (
                <motion.div
                  key={card.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="relative rounded-3xl p-8 sm:p-10"
                  style={{
                    backgroundColor: highlight ? C.black : "#fff",
                    color: highlight ? "#fff" : C.ink,
                    border: highlight ? "none" : "1px solid rgba(26,26,26,0.08)",
                  }}
                >
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase"
                    style={{
                      letterSpacing: "2px",
                      backgroundColor: highlight ? C.primary : C.ink,
                      color: highlight ? C.black : "#fff",
                    }}
                  >
                    {card.tipo}
                  </span>
                  <h3 className="font-black text-3xl sm:text-4xl mt-6 mb-8 leading-tight">{card.titulo}</h3>
                  <div className="flex items-baseline gap-3 mb-10">
                    <span className="font-black text-5xl sm:text-6xl" style={{ color: highlight ? C.primary : C.ink }}>
                      {card.valor}
                    </span>
                    <span className="text-sm font-semibold uppercase" style={{ letterSpacing: "2px", color: highlight ? C.gray : C.secondary }}>
                      {card.unidade}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {card.entregas.map((e) => (
                      <li key={e} className="flex items-start gap-3 text-base">
                        <span
                          className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: C.primary }}
                        >
                          <Check className="w-3 h-3" style={{ color: C.black }} strokeWidth={3} />
                        </span>
                        <span style={{ color: highlight ? "#fff" : C.secondary }}>{e}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-10 text-sm text-center" style={{ color: C.secondary }}>
            Mídia paga e custos de terceiros (cloud, APIs oficiais) não inclusos · faturamento direto pelo fornecedor.
          </p>
        </div>
      </section>

      {/* ============ FECHAMENTO ============ */}
      <section className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.black, color: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <SectionBadge icon={ArrowUpRight} label="08 · Próximos Passos" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] mb-6">
            Pronto para <span className="italic" style={{ color: C.primary }}>iniciar o setup?</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: C.gray }}>
            Aceite a proposta e a Fluxrow agenda o kickoff técnico em até 48h.
          </p>
          <p className="text-xs uppercase font-semibold" style={{ letterSpacing: "3px", color: C.gray, opacity: 0.6 }}>
            Fluxrow 2026 · Confidencialidade estrita.
          </p>
        </div>
      </section>
    </div>
  );
}
