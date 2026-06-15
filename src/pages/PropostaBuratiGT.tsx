import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Zap, Search, Lightbulb, Settings, GitBranch, TrendingDown, Rocket,
  BarChart2, CreditCard, Kanban, Phone, LayoutDashboard, DollarSign,
  Bot, FileBarChart, GraduationCap, Code, Check, ArrowUpRight,
} from "lucide-react";
import BackToHomeButton from "@/components/ui/BackToHomeButton";

// ============================================================
// Burati GT Hub – Proposta navegável (Fluxrow)
// Paleta oficial Burati GT:  laranja #FF6709 / preto #050505
// ============================================================

const C = {
  primary: "#FF6709",
  black: "#050505",
  secondary: "#1C1C1C",
  white: "#F5F5F5",
  light: "#E7E7E9",
  dark: "#C7C7C7",
};

const WHATSAPP =
  "https://wa.me/5541992361868?text=" +
  encodeURIComponent(
    "Oi! Vi a proposta do Burati GT Hub e quero marcar a reunião de diagnóstico."
  );

/* ---------- helpers ---------- */
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

function SectionBadge({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: C.primary }}
      >
        <Icon className="w-5 h-5 text-white" />
      </span>
      <span
        className="text-xs font-semibold uppercase"
        style={{ letterSpacing: "3px", color: "currentColor" }}
      >
        {label}
      </span>
    </div>
  );
}

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {prefix}
      {v.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

/* ---------- Hero orbit (SVG) ---------- */
function HeroOrbit() {
  const nodes = ["OMIE", "iRecebi", "PipeRun", "VOKI"];
  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto">
      {/* orbit rings */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="hexGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={C.primary} stopOpacity="0.25" />
            <stop offset="100%" stopColor={C.primary} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="170" fill="none" stroke={C.primary} strokeOpacity="0.18" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="130" fill="none" stroke={C.primary} strokeOpacity="0.12" strokeDasharray="2 8" />
        <circle cx="200" cy="200" r="90" fill="url(#hexGrad)" />
        {/* hub hex */}
        <polygon
          points="200,130 260,165 260,235 200,270 140,235 140,165"
          fill={C.black}
          stroke={C.primary}
          strokeWidth="2"
        />
        <text x="200" y="195" textAnchor="middle" fill={C.white} fontSize="18" fontWeight="800" fontFamily="Inter">GT HUB</text>
        <text x="200" y="218" textAnchor="middle" fill={C.primary} fontSize="9" letterSpacing="3" fontFamily="Inter">BURATI</text>
      </svg>

      {/* orbiting logos */}
      <div className="absolute inset-0 animate-[spin_28s_linear_infinite]">
        {nodes.map((n, i) => {
          const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const r = 42; // % from center
          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;
          return (
            <div
              key={n}
              className="absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full text-xs font-bold bg-white shadow-lg"
              style={{ left: `${x}%`, top: `${y}%`, color: C.black, border: `1px solid ${C.primary}40` }}
            >
              {n}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Solution diagram ---------- */
function SolutionDiagram() {
  const modules = ["📊 Dashboard", "💰 Financeiro", "🎯 CRM", "📞 Comunicação", "🤖 IA", "📈 Relatórios"];
  const sources = [
    { name: "OMIE", color: "#10b981" },
    { name: "iRecebi", color: "#059669" },
    { name: "PipeRun", color: "#3b82f6" },
    { name: "VOKI", color: "#8b5cf6" },
  ];
  return (
    <div className="relative w-full max-w-3xl mx-auto py-8">
      <svg viewBox="0 0 800 500" className="w-full h-auto">
        <defs>
          <radialGradient id="hubG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={C.primary} stopOpacity="0.35" />
            <stop offset="100%" stopColor={C.primary} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* connecting lines with animated dash */}
        {sources.map((s, i) => {
          const positions = [
            { x: 90, y: 90 },
            { x: 710, y: 90 },
            { x: 90, y: 320 },
            { x: 710, y: 320 },
          ][i];
          return (
            <g key={s.name}>
              <line
                x1={positions.x}
                y1={positions.y}
                x2={400}
                y2={210}
                stroke={C.primary}
                strokeWidth="1.5"
                strokeDasharray="6 6"
                strokeOpacity="0.5"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.4s" repeatCount="indefinite" />
              </line>
              <circle cx={positions.x} cy={positions.y} r="42" fill={s.color} opacity="0.9" />
              <text x={positions.x} y={positions.y + 5} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700" fontFamily="Inter">
                {s.name}
              </text>
            </g>
          );
        })}

        {/* central hub */}
        <circle cx="400" cy="210" r="120" fill="url(#hubG)" />
        <polygon
          points="400,130 470,170 470,250 400,290 330,250 330,170"
          fill={C.black}
          stroke={C.primary}
          strokeWidth="2.5"
        />
        <text x="400" y="205" textAnchor="middle" fill={C.white} fontSize="22" fontWeight="800" fontFamily="Inter">GT HUB</text>
        <text x="400" y="228" textAnchor="middle" fill={C.primary} fontSize="10" letterSpacing="2" fontFamily="Inter">BURATI</text>

        {/* output to modules */}
        <line x1="400" y1="290" x2="400" y2="380" stroke={C.primary} strokeWidth="2" strokeDasharray="6 6">
          <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.2s" repeatCount="indefinite" />
        </line>
      </svg>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-2">
        {modules.map((m) => (
          <div
            key={m}
            className="text-xs font-semibold text-center px-2 py-2 rounded-xl"
            style={{ backgroundColor: C.secondary, color: C.white }}
          >
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- IA chat demo ---------- */
const IA_QUESTIONS = [
  "Quantos boletos em atraso de 01/06 a 15/06?",
  "Qual consultor fechou mais em maio?",
  "Clientes com NF emitida mas cobrança pendente?",
  "Top 10 devedores do trimestre",
  "LTV médio dos clientes ativos?",
];
function TypingDemo() {
  const [qi, setQi] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    const q = IA_QUESTIONS[qi];
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(q.slice(0, i));
      if (i >= q.length) {
        clearInterval(id);
        setTimeout(() => {
          setText("");
          setQi((x) => (x + 1) % IA_QUESTIONS.length);
        }, 1800);
      }
    }, 45);
    return () => clearInterval(id);
  }, [qi]);
  return (
    <div className="mt-4 rounded-2xl bg-black/20 p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-2 text-xs opacity-70">
        <Bot className="w-3.5 h-3.5" /> burati-gt-ai · pergunte qualquer coisa
      </div>
      <div className="min-h-[2.5rem]">
        <span>{text}</span>
        <span className="inline-block w-2 h-4 bg-black/70 align-middle animate-pulse ml-0.5" />
      </div>
    </div>
  );
}

/* ---------- modules data ---------- */
const MODULES = [
  {
    icon: LayoutDashboard,
    badge: "CEO / GESTÃO",
    title: "Painel Executivo",
    desc: "Dashboard unificado em tempo real. KPIs de todas as áreas numa tela. Fim do relatório manual de final de mês.",
    bullets: [
      "KPIs financeiros (OMIE)",
      "Status cobranças (iRecebi)",
      "Performance comercial",
      "Volume ligações (VOKI)",
      "Alertas automáticos por meta",
    ],
    data: "CEOs com dashboards integrados reduzem 60% do tempo em reuniões de alinhamento. (Bain & Company)",
    dark: true,
  },
  {
    icon: DollarSign,
    badge: "FINANCEIRO",
    title: "Financeiro Inteligente",
    desc: "Sync automático com OMIE e iRecebi. Relatórios gerados automaticamente. Fim das planilhas manuais.",
    bullets: [
      "Conciliação bancária automática",
      "Visão consolidada boletos + NFs",
      "Alertas de vencimento antecipados",
      "Projeção de fluxo de caixa com IA",
      "DRE gerado automaticamente",
    ],
    data: "Automatizar processos financeiros reduz erros operacionais em 87% e libera 12h/semana do time. (Deloitte, 2023)",
    dark: false,
  },
  {
    icon: Kanban,
    badge: "SUBSTITUI O PIPERUN",
    title: "CRM Próprio",
    desc: "Kanban completo com histórico 360° do cliente: ligações, cobranças, contratos e NFs — tudo em um card.",
    bullets: [
      "Funil visual Kanban",
      "Histórico ligações VOKI no card",
      "Status cobrança iRecebi vinculado",
      "Contratos e NFs OMIE acessíveis",
      "Automações de follow-up",
      "Fim da assinatura PipeRun",
    ],
    data: "Vendedores com contexto completo do cliente convertem 47% mais que os que trabalham com sistemas isolados. (Salesforce, 2024)",
    dark: true,
  },
  {
    icon: Phone,
    badge: "VOKI INTEGRADO",
    title: "Comunicação Centralizada",
    desc: "Histórico de ligações, gravações e transcrições vinculadas ao perfil do cliente. Gatilhos automáticos de comunicação.",
    bullets: [
      "Histórico chamadas no card do cliente",
      "Gravações e transcrições automáticas",
      "Gatilho: inadimplência → ligação automática",
      "Discador integrado ao funil",
      "Métricas de atendimento em tempo real",
    ],
    data: "Integrar telefonia ao CRM aumenta a taxa de contato efetivo em 40% e reduz o tempo médio de resolução em 25%. (Aberdeen Group)",
    dark: true,
  },
  {
    icon: Bot,
    badge: "INTELIGÊNCIA ARTIFICIAL",
    title: "Assistente IA",
    desc: "Chat interno estilo ChatGPT que responde perguntas reais do negócio em segundos, cruzando dados de todos os sistemas.",
    bullets: [],
    data: "Empresas com IA para consultas operacionais reduzem 70% o tempo de geração de relatórios gerenciais. (McKinsey Global Institute, 2024)",
    dark: false,
    custom: true,
  },
  {
    icon: FileBarChart,
    badge: "ANALYTICS",
    title: "Relatórios Automáticos",
    desc: "Relatórios por área gerados e enviados automaticamente. Semanal, mensal ou sob demanda.",
    bullets: [
      "Relatório financeiro automático",
      "Performance por consultor",
      "Taxa inadimplência com histórico",
      "Volume ligações x conversões",
      "Exportação PDF e Excel 1 clique",
      "Envio automático por e-mail",
    ],
    data: "Profissionais de finanças gastam 30% do tempo compilando dados manualmente. Automação elimina esse custo completamente. (KPMG, 2023)",
    dark: true,
  },
];

/* ============================================================ */

export default function PropostaBuratiGT() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: C.light, color: C.black, fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <Helmet>
        <title>Burati GT Hub — Proposta de Transformação Digital · Fluxrow</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="De 4 sistemas fragmentados para uma inteligência única. Proposta Fluxrow para Burati GT."
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,700;0,800;1,700;1,800&display=swap"
        />
      </Helmet>

      <BackToHomeButton />

      {/* ====== HERO ====== */}
      <section
        className="relative min-h-screen flex items-center pt-24 pb-16 px-6"
        style={{ backgroundColor: C.light }}
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionBadge icon={Zap} label="BURATI GT HUB" />
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-extrabold leading-[1.02] text-5xl md:text-7xl"
              style={{ color: C.black }}
            >
              De 4 sistemas <br />
              fragmentados para <br />
              <span className="italic font-extrabold" style={{ color: C.primary }}>
                uma inteligência única
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
              className="mt-6 text-lg md:text-xl"
              style={{ color: C.secondary }}
            >
              Seu ecossistema inteligente de gestão, em um único lugar.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-3 mt-8"
            >
              <a
                href="#solucao"
                className="px-6 py-3 rounded-xl font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: C.black }}
              >
                Conheça a solução
              </a>
              <a
                href="#cta"
                className="px-6 py-3 rounded-xl font-semibold text-white transition hover:opacity-90 inline-flex items-center gap-2"
                style={{ backgroundColor: C.primary }}
              >
                Entender a oportunidade <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="show"
              className="mt-10 inline-block px-5 py-3 rounded-2xl shadow-lg animate-pulse"
              style={{ backgroundColor: "#fff", border: `1px solid ${C.primary}40` }}
            >
              <span className="text-sm font-bold" style={{ color: C.primary }}>
                +600MM
              </span>{" "}
              <span className="text-sm" style={{ color: C.black }}>
                recuperados pela Burati GT
              </span>
            </motion.div>
          </div>

          <HeroOrbit />
        </div>
      </section>

      {/* ====== DIAGNÓSTICO ====== */}
      <section className="px-6 py-24" style={{ backgroundColor: C.black, color: C.white }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={Search} label="DIAGNÓSTICO" />
          <h2 className="font-extrabold text-4xl md:text-6xl leading-[1.05]">
            Como a Burati GT opera{" "}
            <span className="italic" style={{ color: C.primary }}>
              hoje
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg" style={{ color: C.dark }}>
            Segundo pesquisa da McKinsey, profissionais gastam em média 19% do tempo de trabalho
            buscando e consolidando informações entre sistemas diferentes. São quase 2 dias por
            semana perdidos em retrabalho.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              {
                icon: BarChart2,
                title: "OMIE — ERP Financeiro",
                fn: "Financeiro, fiscal, NF-e, contas a pagar/receber, DRE",
                problem: "Dados ricos presos no ERP. Sem visão cruzada com comercial ou cobrança.",
                tag: "Núcleo do negócio — mas as informações ficam em silo",
              },
              {
                icon: CreditCard,
                title: "iRecebi — Cobrança Omnichannel",
                fn: "Cobranças via WhatsApp, SMS, e-mail, Voice Bot, boletos, RCS",
                problem: "Réguas de cobrança disparadas sem contexto comercial do cliente.",
                tag: "Cobrança omnichannel recupera até 3x mais inadimplência que canal único",
              },
              {
                icon: Kanban,
                title: "PipeRun — CRM Comercial",
                fn: "Funil de vendas, Kanban, gestão de oportunidades, follow-up",
                problem: "Usado só pelo comercial. Não conversa com financeiro nem cobrança. Alto custo.",
                tag: "CRMs isolados resultam em 27% menos conversão por falta de contexto (Salesforce, 2024)",
              },
              {
                icon: Phone,
                title: "VOKI — Comunicação e Telefonia",
                fn: "Ligações, URA, discador automático, gravações, histórico de chamadas",
                problem: "Histórico de ligações desconectado do perfil do cliente no CRM e financeiro.",
                tag: "Integrar telefonia ao CRM gera 34% mais produtividade no atendimento (Gartner, 2023)",
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="rounded-3xl p-6 transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: C.secondary,
                    borderTop: `4px solid ${C.primary}`,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.30)",
                  }}
                >
                  <Icon className="w-7 h-7 mb-4" style={{ color: C.primary }} />
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm mb-3" style={{ color: C.dark }}>
                    <span className="font-semibold" style={{ color: C.white }}>Função: </span>
                    {card.fn}
                  </p>
                  <p className="text-sm mb-4" style={{ color: C.dark }}>
                    <span className="font-semibold" style={{ color: C.white }}>Problema: </span>
                    {card.problem}
                  </p>
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: `${C.primary}20`, color: C.primary }}
                  >
                    {card.tag}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-extrabold text-3xl md:text-5xl text-center mt-20 leading-tight"
            style={{ color: C.primary }}
          >
            4 sistemas. 4 senhas. 4 relatórios. <br />
            Nenhum deles fala entre si.
          </motion.p>

          <div
            className="mt-16 rounded-2xl p-6 max-w-3xl mx-auto"
            style={{
              backgroundColor: C.secondary,
              borderLeft: `4px solid ${C.primary}`,
            }}
          >
            <p className="italic" style={{ color: C.dark }}>
              Empresas brasileiras de médio porte gastam em média R$ 8.400/mês em assinaturas de
              softwares que se sobrepõem em funcionalidades. (ABES, 2024)
            </p>
          </div>
        </div>
      </section>

      {/* ====== SOLUÇÃO ====== */}
      <section id="solucao" className="px-6 py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={Lightbulb} label="A SOLUÇÃO" />
          <h2 className="font-extrabold text-4xl md:text-6xl leading-[1.05]" style={{ color: C.black }}>
            E se tudo falasse <span className="italic" style={{ color: C.primary }}>a mesma língua?</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg" style={{ color: C.secondary }}>
            O Burati GT Hub centraliza todos os seus sistemas em um banco de dados único e
            inteligente — eliminando retrabalho, conectando áreas e transformando dados em decisões
            em tempo real.
          </p>

          <SolutionDiagram />

          <div
            className="mt-10 rounded-2xl p-6 max-w-3xl mx-auto text-center"
            style={{ backgroundColor: C.black }}
          >
            <p className="italic font-semibold" style={{ color: C.primary }}>
              Organizações com dados integrados têm 23x mais chance de adquirir clientes, 6x mais de
              retê-los e 19x mais de serem lucrativas. (McKinsey & Company)
            </p>
          </div>
        </div>
      </section>

      {/* ====== MÓDULOS ====== */}
      <section className="px-6 py-24" style={{ backgroundColor: C.black, color: C.white }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={Settings} label="MÓDULOS DO SISTEMA" />
          <h2 className="font-extrabold text-4xl md:text-6xl leading-[1.05]">
            6 módulos. <span className="italic" style={{ color: C.primary }}>Um ecossistema completo.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {MODULES.map((m, i) => {
              const Icon = m.icon;
              const orange = !m.dark;
              return (
                <motion.div
                  key={m.title}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="rounded-3xl p-6 transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: orange ? C.primary : C.secondary,
                    color: orange ? C.black : C.white,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.30)",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8" style={{ color: orange ? C.black : C.primary }} />
                    <span
                      className="text-[10px] font-bold uppercase px-2 py-1 rounded-full"
                      style={{
                        letterSpacing: "2px",
                        backgroundColor: orange ? C.black : `${C.primary}25`,
                        color: orange ? C.primary : C.primary,
                      }}
                    >
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold mb-2">{m.title}</h3>
                  <p className="text-sm mb-4 opacity-90">{m.desc}</p>

                  {m.custom ? (
                    <TypingDemo />
                  ) : (
                    <ul className="space-y-1.5 mb-4">
                      {m.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <Check
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: orange ? C.black : C.primary }}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="italic text-xs mt-4 opacity-80 border-t border-current/20 pt-3">
                    {m.data}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== ARQUITETURA ====== */}
      <section className="px-6 py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={GitBranch} label="ARQUITETURA" />
          <h2 className="font-extrabold text-4xl md:text-6xl leading-[1.05]" style={{ color: C.black }}>
            Nenhum dado <span className="italic" style={{ color: C.primary }}>se perde.</span>
          </h2>

          <div className="mt-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#fff" }}>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="space-y-2 text-sm font-semibold">
                {["OMIE API", "iRecebi API", "PipeRun API", "VOKI API"].map((s) => (
                  <div
                    key={s}
                    className="px-4 py-3 rounded-xl text-center"
                    style={{ backgroundColor: C.light, color: C.black }}
                  >
                    {s}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div
                  className="rounded-2xl p-6 inline-block"
                  style={{ backgroundColor: C.black, color: C.white }}
                >
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: C.primary }}>
                    Banco Unificado
                  </div>
                  <div className="font-extrabold text-2xl">BURATI GT</div>
                </div>
                <div className="my-3 text-2xl" style={{ color: C.primary }}>↓</div>
                <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: C.secondary }}>
                  Módulos do Hub
                </div>
              </div>
              <div className="space-y-2 text-sm font-semibold">
                {["Dashboard / IA", "CRM Próprio", "Relatórios", "Comunicação"].map((s) => (
                  <div
                    key={s}
                    className="px-4 py-3 rounded-xl text-center text-white"
                    style={{ backgroundColor: C.primary }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { t: "Dados em tempo real", d: "Qualquer alteração em qualquer sistema aparece imediatamente no Hub." },
              { t: "Uma fonte de verdade", d: "Um dado. Uma versão. Financeiro, comercial e operacional alinhados." },
              { t: "Segurança e controle", d: "Permissões por área, auditoria automática, conformidade LGPD." },
            ].map((b) => (
              <div
                key={b.t}
                className="rounded-2xl p-6 bg-white"
                style={{ borderLeft: `4px solid ${C.primary}` }}
              >
                <h4 className="font-extrabold text-lg mb-2" style={{ color: C.black }}>{b.t}</h4>
                <p className="text-sm" style={{ color: C.secondary }}>{b.d}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-12 rounded-2xl p-8 text-center max-w-3xl mx-auto"
            style={{ backgroundColor: C.black }}
          >
            <p className="italic font-bold text-xl md:text-2xl" style={{ color: C.primary }}>
              Organizações com dados integrados tomam decisões até 5x mais rápido. (Harvard Business
              Review, 2023)
            </p>
          </div>
        </div>
      </section>

      {/* ====== CUSTO DE OPORTUNIDADE ====== */}
      <section className="px-6 py-24" style={{ backgroundColor: C.black, color: C.white }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={TrendingDown} label="CUSTO DE OPORTUNIDADE" />
          <h2 className="font-extrabold text-4xl md:text-6xl leading-[1.05]">
            Quanto custa <span className="italic" style={{ color: C.primary }}>manter o atual?</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { v: <><span style={{ color: C.primary }}>R$ </span><Counter to={8400} />/mês</>, l: "Custo médio de 4 assinaturas sobrepostas para PMEs (ABES, 2024)" },
              { v: <><Counter to={19} suffix="%" /></>, l: "Do tempo perdido buscando informações entre sistemas (McKinsey)" },
              { v: <><Counter to={87} suffix="%" /></>, l: "Redução de erros operacionais com automação financeira (Deloitte, 2023)" },
              { v: <><Counter to={5} suffix="x" /></>, l: "Mais velocidade na tomada de decisão com dados integrados (HBR, 2023)" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ backgroundColor: C.secondary, borderTop: `4px solid ${C.primary}` }}
              >
                <div className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: C.primary }}>
                  {s.v}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: C.dark }}>{s.l}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: C.secondary, borderLeft: `4px solid ${C.dark}` }}
            >
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: C.dark }}>Hoje</div>
              <ul className="space-y-2 text-sm" style={{ color: C.dark }}>
                <li>→ 4 assinaturas separadas</li>
                <li>→ Retrabalho manual</li>
                <li>→ Dados desencontrados</li>
                <li>→ Relatório manual de horas</li>
              </ul>
            </div>
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: C.primary, color: C.black }}
            >
              <div className="text-xs uppercase tracking-widest mb-3 font-bold">Com o Hub</div>
              <ul className="space-y-2 text-sm font-semibold">
                <li>✓ 1 plataforma</li>
                <li>✓ Automação total</li>
                <li>✓ Dados cruzados</li>
                <li>✓ Relatório com 1 clique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====== COMO TRABALHAMOS ====== */}
      <section className="px-6 py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={Rocket} label="COMO TRABALHAMOS" />
          <h2 className="font-extrabold text-4xl md:text-6xl leading-[1.05]" style={{ color: C.black }}>
            Duas formas de{" "}
            <span className="italic" style={{ color: C.primary }}>transformar sua operação.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* Card A */}
            <div
              className="rounded-3xl p-8"
              style={{ backgroundColor: C.secondary, color: C.white, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
            >
              <GraduationCap className="w-10 h-10 mb-4" style={{ color: C.primary }} />
              <h3 className="text-2xl font-extrabold mb-1">Mentoria + Implementação Guiada</h3>
              <p className="text-sm italic mb-4" style={{ color: C.primary }}>
                Você no controle, eu no suporte
              </p>
              <p className="text-sm mb-6 opacity-90">
                Sessões de trabalho práticas onde eu te guio na construção de cada módulo com seu time interno.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Mapeamento dos fluxos atuais",
                  "Arquitetura de dados definida",
                  "Templates de integração via API",
                  "Documentação técnica completa",
                  "Acompanhamento até o go-live",
                  "Treinamento do time",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.primary }} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card B */}
            <div
              className="rounded-3xl p-8"
              style={{ backgroundColor: C.primary, color: C.black, boxShadow: "0 8px 32px rgba(255,103,9,0.25)" }}
            >
              <Code className="w-10 h-10 mb-4" style={{ color: C.black }} />
              <h3 className="text-2xl font-extrabold mb-1">Projeto Completo com Implementação</h3>
              <p className="text-sm italic mb-4 font-semibold">
                Eu projeto, construo e entrego rodando
              </p>
              <p className="text-sm mb-6">
                Cuido de tudo da arquitetura ao deploy. Você recebe o Hub pronto, funcionando e treinado.
              </p>
              <ul className="space-y-2 text-sm font-medium">
                {[
                  "Levantamento detalhado de requisitos",
                  "Desenvolvimento do Hub (React + banco de dados)",
                  "Integrações OMIE + iRecebi + VOKI via API oficial",
                  "CRM próprio substituindo PipeRun",
                  "Assistente IA configurado com seus dados",
                  "Treinamento completo do time",
                  "Suporte 90 dias pós-entrega",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA FINAL ====== */}
      <section id="cta" className="px-6 py-24" style={{ backgroundColor: C.black, color: C.white }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-extrabold text-5xl md:text-7xl leading-[1.02]"
            style={{ color: C.primary }}
          >
            Transforme seus <br />
            sistemas em <br />
            resultados.
          </h2>
          <p className="mt-6 text-lg max-w-2xl" style={{ color: C.dark }}>
            A Burati GT já transforma desafios tributários em soluções. Agora é hora de transformar
            seus sistemas também.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { n: 1, t: "Reunião de Diagnóstico", d: "Mapear fluxos, volumes, dores e prioridades.", time: "60–90 min" },
              { n: 2, t: "Proposta Personalizada", d: "Escopo, arquitetura, prazo e investimento.", time: "3–5 dias úteis" },
              { n: 3, t: "Início do Projeto", d: "Kick-off e primeiras integrações rodando.", time: "Resultados em até 60 dias" },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-2xl p-6"
                style={{ backgroundColor: C.secondary, borderTop: `4px solid ${C.primary}` }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold mb-4"
                  style={{ backgroundColor: C.primary, color: C.black }}
                >
                  {s.n}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.t}</h3>
                <p className="text-sm mb-3" style={{ color: C.dark }}>{s.d}</p>
                <span
                  className="text-[11px] uppercase tracking-widest font-semibold"
                  style={{ color: C.primary }}
                >
                  {s.time}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-extrabold mb-4">
                Vamos marcar a{" "}
                <span className="italic" style={{ color: C.primary }}>reunião de diagnóstico?</span>
              </h3>
              <p style={{ color: C.dark }}>
                Em 60 a 90 minutos mapeamos os fluxos atuais, dores e prioridades — e você já sai
                com clareza do que pode ser automatizado primeiro.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: C.primary }}
              >
                Quero marcar a reunião de diagnóstico <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: C.primary, color: C.black }}
            >
              <p className="font-bold italic">
                Empresas que integram seus sistemas de gestão relatam ROI médio de 250% no primeiro
                ano. (Aberdeen Group, 2024)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="px-6 py-12" style={{ backgroundColor: C.light, color: C.secondary }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-extrabold text-lg" style={{ color: C.black }}>Fluxrow</div>
            <div className="text-xs">Inteligência Criativa</div>
          </div>
          <div className="text-xs text-center">
            © 2026 Fluxrow. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
