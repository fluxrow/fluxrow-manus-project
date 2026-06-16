import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Bot,
  Workflow,
  LineChart,
  Globe,
  Search,
  Lightbulb,
  Rocket,
  TrendingUp,
  Layers,
  Compass,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

import SectionShell from "@/components/fluxrow/SectionShell";
import SectionBadge from "@/components/fluxrow/SectionBadge";
import SoftCard from "@/components/fluxrow/SoftCard";
import Counter from "@/components/fluxrow/Counter";
import { fadeUp } from "@/lib/motion";

import BriefingFlow from "@/components/agency/BriefingFlow";
import { buildHomeFaqSchema } from "@/lib/homeFaqSchema";

const STATS = [
  { value: 120, prefix: "+", suffix: "", label: "automações entregues" },
  { value: 850, prefix: "+", suffix: "", label: "leads gerados" },
  { value: 2500, prefix: "+", suffix: "", label: "horas economizadas" },
  { value: 7, prefix: "", suffix: "d", label: "pra primeiro deploy" },
];

const SERVICES = [
  {
    icon: Bot,
    tag: "AI",
    title: "Agentes de IA",
    body: "Atendimento, qualificação e vendas operadas por agentes especializados — integrados ao seu CRM e WhatsApp.",
  },
  {
    icon: Workflow,
    tag: "Automação",
    title: "Automação de processos",
    body: "Conectamos suas ferramentas com n8n, Make e integrações sob medida. Operação que roda sem que ninguém olhe.",
  },
  {
    icon: Layers,
    tag: "SaaS",
    title: "Sistemas e SaaS sob medida",
    body: "Dashboards, painéis internos e produtos digitais construídos do zero pra rodar a sua operação específica.",
  },
  {
    icon: Globe,
    tag: "Web",
    title: "Sites e landing pages",
    body: "Sites editoriais, institucionais e páginas de conversão com SEO técnico e performance real.",
  },
  {
    icon: LineChart,
    tag: "Growth",
    title: "Growth marketing",
    body: "Tráfego pago, funis e infraestrutura de dados — estratégia data-driven com leitura semanal.",
  },
  {
    icon: Compass,
    tag: "Strategy",
    title: "Consultoria de IA",
    body: "Auditoria da operação atual, mapa de automações priorizadas e roteiro de implementação por fase.",
  },
];

const CASES = [
  {
    meta: "AI · Distribuição",
    title: "Match Solutions",
    body: "6 agentes IA especializados automatizando qualificação até fechamento.",
    metric: "+35%",
    metricLabel: "conversão",
  },
  {
    meta: "Turismo · Tráfego Pago",
    title: "Promotrip",
    body: "Funil de vendas com IA conversacional e nurturing automatizado.",
    metric: "-38%",
    metricLabel: "custo por lead",
  },
  {
    meta: "SaaS · Industrial",
    title: "Fachini",
    body: "SaaS de gestão industrial com integração RD Station e dashboards em tempo real.",
    metric: "-64%",
    metricLabel: "custo operacional",
  },
  {
    meta: "Saúde · Agendamento",
    title: "MedClínica",
    body: "Agendamento inteligente com IA preditiva e lembretes automatizados.",
    metric: "-73%",
    metricLabel: "no-show",
  },
];

const PROCESS = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico",
    body: "Mapeamos a operação atual, gargalos e onde IA gera receita real — não onde fica bonito no slide.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Arquitetura",
    body: "Desenhamos o stack: agentes, integrações, sistema e métricas. Você aprova antes de qualquer linha de código.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Build & deploy",
    body: "Construímos em ciclos curtos, com primeiro deploy em até 7 dias. Você vê funcionando antes do fim do mês.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Operação contínua",
    body: "Monitoramos, ajustamos e escalamos. A operação fica nossa — você foca no negócio.",
  },
];

const WHATSAPP_URL =
  "https://wa.me/5541992361868?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fluxrow%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const Agencia = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F3EE] text-[#1A1A1A]">
      <SEO
        title="Fluxrow · Agência — sistemas, IA e automação sob medida"
        description="Construímos sistemas, agentes de IA e automações do zero ao deploy — e ficamos pra rodar. Stack completo para empresas que querem terceirizar a infraestrutura técnica."
        path="/agencia"
        jsonLd={buildHomeFaqSchema()}
      />

      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <SectionBadge icon={Sparkles} label="FLUXROW · AGÊNCIA" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8 max-w-4xl"
          >
            Construímos a operação de IA{" "}
            <span className="gradient-accent-text italic">do zero ao deploy</span>{" "}
            — e ficamos pra rodar.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed"
          >
            Sistemas, SaaS e automações sob medida pra empresas que querem
            terceirizar a infraestrutura técnica e focar no negócio.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-3 mb-20"
          >
            <button
              onClick={() => scrollTo("briefing")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FF6709] text-[#F5F3EE] font-medium rounded-md hover:bg-[#e85a00] transition-colors"
            >
              Começar um briefing <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 rounded-md hover:border-white/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp direto
            </a>
          </motion.div>

          {/* Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-t border-white/10 pt-10">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
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
        </section>

        {/* Serviços */}
        <SectionShell width="6xl" divided id="services">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start mb-12">
            <div>
              <SectionBadge icon={Layers} label="SERVIÇOS" />
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
                Stack completo.{" "}
                <span className="gradient-accent-text italic">Uma só ponta.</span>
              </h2>
            </div>
            <p className="text-white/65 leading-relaxed lg:pt-12">
              Estratégia, sistema, automação e operação contínua. Tudo construído
              por um time só — sem terceirizar pedaços críticos da sua operação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <SoftCard key={s.title} padding="lg" className="h-full">
                <s.icon className="w-5 h-5 text-white/55 mb-5" strokeWidth={1.6} />
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/55 font-mono mb-3">
                  {s.tag}
                </p>
                <h3 className="font-serif text-2xl mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">{s.body}</p>
              </SoftCard>
            ))}
          </div>
        </SectionShell>

        {/* Cases */}
        <SectionShell width="6xl" divided id="cases">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <SectionBadge icon={TrendingUp} label="CASES" />
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Operações que rodam{" "}
                <span className="gradient-accent-text italic">no mundo real.</span>
              </h2>
            </div>
            <p className="text-sm font-mono text-white/55 max-w-xs">
              Recortes de projetos entregues nos últimos 18 meses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {CASES.map((c) => (
              <SoftCard key={c.title} padding="lg" className="h-full">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/55 font-mono mb-4">
                  {c.meta}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
                  {c.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed mb-6">
                  {c.body}
                </p>
                <div className="flex items-baseline gap-3 pt-5 border-t border-white/10">
                  <p className="font-serif text-3xl gradient-accent-text leading-none">
                    {c.metric}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55 font-mono">
                    {c.metricLabel}
                  </p>
                </div>
              </SoftCard>
            ))}
          </div>
        </SectionShell>

        {/* Processo */}
        <SectionShell width="6xl" divided id="processo">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start mb-12">
            <div>
              <SectionBadge icon={Compass} label="PROCESSO" />
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
                Quatro etapas.{" "}
                <span className="gradient-accent-text italic">Sem mistério.</span>
              </h2>
            </div>
            <p className="text-white/65 leading-relaxed lg:pt-12">
              Diagnóstico, arquitetura, build e operação. Cada fase com entregáveis
              claros e prazo definido — você acompanha tudo em tempo real.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map((p) => (
              <SoftCard key={p.step} padding="lg" className="h-full">
                <div className="flex items-center justify-between mb-6">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/55">
                    {p.step}
                  </p>
                  <p.icon className="w-4 h-4 text-white/55" strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-xl mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">{p.body}</p>
              </SoftCard>
            ))}
          </div>
        </SectionShell>

        {/* Briefing */}
        <section
          id="briefing"
          aria-label="Briefing Inteligente"
          className="border-t border-white/10"
        >
          <BriefingFlow />
        </section>

        {/* CTA final */}
        <SectionShell width="5xl" divided>
          <div className="text-center">
            <SectionBadge icon={Sparkles} label="PRÓXIMO PASSO" />
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Pronto pra terceirizar{" "}
              <span className="gradient-accent-text italic">
                a infraestrutura?
              </span>
            </h2>
            <p className="text-white/65 leading-relaxed max-w-xl mx-auto mb-10">
              Conversa de 30 minutos, sem custo. A gente entende o problema e
              devolve um mapa do que dá pra automatizar primeiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FF6709] text-[#F5F3EE] font-medium rounded-md hover:bg-[#e85a00] transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 rounded-md hover:border-white/30 transition-colors"
              >
                Formulário de contato <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </SectionShell>
      </main>

      <Footer />
    </div>
  );
};

export default Agencia;
