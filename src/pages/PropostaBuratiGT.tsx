import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Zap, Layers, Search, Lightbulb, GitBranch, Grid, TrendingUp, Rocket,
  BarChart2, CreditCard, Kanban, CheckSquare, Users, PieChart, Trello,
  LayoutDashboard, DollarSign, FileText, Scale, Mail, Bot, Brain,
  Link as LinkIcon, Minimize2, GraduationCap, Code2, Check, X,
  AlertTriangle, AlertCircle, ArrowUpRight,
} from "lucide-react";
import BackToHomeButton from "@/components/ui/BackToHomeButton";

// ============================================================
// Burati GT Hub — Proposta navegável v2.0 (Fluxrow)
// Paleta oficial Burati GT: laranja #FF6709 / preto #050505
// 15 sistemas reais identificados
// ============================================================

const C = {
  primary: "#FF6709",
  black: "#050505",
  secondary: "#1C1C1C",
  dark: "#101211",
  white: "#F5F5F5",
  light: "#E7E7E9",
  gray: "#C7C7C7",
  red: "#BF1935",
  yellow: "#F5B400",
};

const WHATSAPP =
  "https://wa.me/5541992361868?text=" +
  encodeURIComponent("Oi! Vi a proposta do Burati GT Hub e quero marcar a reunião de diagnóstico.");

/* ---------- helpers ---------- */
const fadeUp: any = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

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

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
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

/* ---------- DATA ---------- */
const SYSTEM_GROUPS = [
  {
    area: "RH", icon: Users, color: "#8B5CF6",
    systems: [
      { name: "Flash", desc: "Multibenefícios, cartão corporativo, controle de jornada e despesas" },
      { name: "Mindsight", desc: "Recrutamento, desempenho, engajamento e jornada do colaborador" },
    ],
    overlap: { level: "warning", text: "⚠️ SOBREPOSIÇÃO PARCIAL" },
  },
  {
    area: "Financeiro", icon: DollarSign, color: "#10B981",
    systems: [
      { name: "OMIE", desc: "ERP financeiro, fiscal, NF-e, DRE, contas a pagar/receber" },
      { name: "iRecebi", desc: "Cobrança omnichannel — WhatsApp, SMS, boletos, Voice Bot" },
    ],
  },
  {
    area: "Fiscal", icon: FileText, color: "#3B82F6",
    border: C.red,
    systems: [
      { name: "HubCount", desc: "BI fiscal — dashboards, relatórios contábeis automatizados" },
      { name: "MA Tecnologia", desc: "Apuração de impostos, SPED, obrigações acessórias" },
      { name: "MR Tecnologia", desc: "Software fiscal especializado — apuração e compliance" },
    ],
    overlap: { level: "critical", text: "🚨 ALERTA: 3 SISTEMAS NA MESMA ÁREA" },
  },
  {
    area: "Jurídico", icon: Scale, color: "#F59E0B",
    systems: [
      { name: "Leviatan", desc: "Backup e gestão de documentos jurídicos (CPJ)" },
      { name: "Preâmbulo", desc: "Contratos, gestão processual, documentos jurídicos" },
    ],
  },
  {
    area: "Comercial", icon: Kanban, color: "#FF6709",
    systems: [
      { name: "PipeRun", desc: "CRM com funil de vendas, Kanban, automações — usado por todas as áreas" },
    ],
  },
  {
    area: "Projetos", icon: CheckSquare, color: "#06B6D4",
    border: C.yellow,
    systems: [
      { name: "ClickUp", desc: "Gestão de tarefas, projetos e sprints — Btax" },
      { name: "Atlassian (Jira/Confluence)", desc: "Gestão ágil de projetos e documentação — Marketing" },
    ],
    overlap: { level: "warning", text: "⚠️ SOBREPOSIÇÃO: MESMA FUNÇÃO, 2 CONTRATOS" },
  },
  {
    area: "Marketing & Infra", icon: Mail, color: "#EC4899",
    systems: [
      { name: "Mailchimp", desc: "E-mail marketing e automação de campanhas" },
      { name: "Kinghost", desc: "Hospedagem, e-mail corporativo e domínios" },
      { name: "Ingram", desc: "Gestão de licenças e distribuição de tecnologia" },
    ],
  },
];

const MODULES = [
  {
    n: 1, bg: C.black, fg: "#fff", accent: C.primary,
    icon: LayoutDashboard, badge: "CEO / GESTÃO", title: "Painel Executivo",
    desc: "Dashboard unificado de todas as 7 áreas em tempo real. Uma tela. Todas as métricas que importam.",
    items: [
      "KPIs financeiros (OMIE + iRecebi)",
      "Status de cobranças e inadimplência",
      "Performance comercial (PipeRun)",
      "Headcount e custo por colaborador (Flash + Mindsight)",
      "Volume de projetos em andamento (ClickUp + Atlassian)",
      "Alertas automáticos por meta",
    ],
    stat: "CEOs com dashboards integrados reduzem 60% do tempo em reuniões de alinhamento. (Bain & Company)",
  },
  {
    n: 2, bg: C.primary, fg: C.black, accent: C.black,
    icon: DollarSign, badge: "FINANCEIRO", title: "Financeiro Inteligente",
    desc: "Sync automático com OMIE e iRecebi. Visão consolidada de tudo que entra e sai — sem planilha manual.",
    items: [
      "Conciliação bancária automática (OMIE)",
      "Boletos e cobranças em tempo real (iRecebi)",
      "Projeção de fluxo de caixa com IA",
      "DRE gerado automaticamente",
      "Alertas de vencimento antecipados",
      "Custo por colaborador cruzado com RH (Flash)",
    ],
    stat: "Automatizar processos financeiros reduz erros operacionais em 87% e libera 12h/semana do time. (Deloitte, 2023)",
  },
  {
    n: 3, bg: C.black, fg: "#fff", accent: C.primary,
    icon: FileText, badge: "FISCAL — 3 SISTEMAS → 1 VISÃO", title: "Fiscal Unificado",
    desc: "HubCount, MA Tecnologia e MR Tecnologia passam a alimentar uma única visão fiscal — sem cruzar dados manualmente entre plataformas.",
    items: [
      "Dashboard fiscal consolidado",
      "Apuração unificada por período",
      "Alertas de obrigações acessórias",
      "Cruzamento NFs emitidas (OMIE) × obrigações fiscais",
      "Histórico tributário completo",
      "Relatórios automáticos para a contabilidade",
    ],
    stat: "Empresas com compliance fiscal automatizado reduzem em 73% os erros em obrigações acessórias. (Deloitte Tax Survey, 2023)",
  },
  {
    n: 4, bg: C.secondary, fg: "#fff", accent: C.primary,
    icon: Kanban, badge: "SUBSTITUI / COMPLEMENTA PIPERUN", title: "CRM Próprio",
    desc: "Funil de vendas completo com histórico 360° do cliente — ligações, cobranças, contratos e NFs num único card.",
    items: [
      "Kanban visual de oportunidades",
      "Histórico de cobranças iRecebi no card do cliente",
      "Contratos jurídicos vinculados (Leviatan + Preâmbulo)",
      "NFs OMIE acessíveis no perfil",
      "Automações de follow-up",
      "Relatório de conversão por consultor",
    ],
    stat: "Vendedores com contexto completo do cliente convertem 47% mais. (Salesforce State of Sales, 2024)",
  },
  {
    n: 5, bg: C.primary, fg: C.black, accent: C.black,
    icon: Users, badge: "RH — FLASH + MINDSIGHT CONECTADOS", title: "RH Integrado",
    desc: "Os dados de Flash e Mindsight chegam ao Hub e, pela primeira vez, se conectam ao financeiro — mostrando o custo real de cada colaborador.",
    items: [
      "Headcount por área em tempo real",
      "Custo total por colaborador (salário + benefícios Flash)",
      "Pipeline de recrutamento (Mindsight)",
      "Indicadores de engajamento e desempenho",
      "Alertas de turnover por área",
      "Cruzamento com produtividade por área",
    ],
    stat: "Empresas que integram RH ao financeiro têm 2,5x mais precisão no planejamento orçamentário. (PwC Workforce Survey, 2023)",
  },
  {
    n: 6, bg: C.black, fg: "#fff", accent: C.primary,
    icon: CheckSquare, badge: "PROJETOS — CLICKUP + ATLASSIAN CONECTADOS", title: "Gestão de Projetos Unificada",
    desc: "ClickUp (Btax) e Atlassian (Marketing) alimentam um painel único de projetos — com visão consolidada de entregas, prazos e times.",
    items: [
      "Painel de projetos de todas as áreas",
      "Status de tarefas em tempo real",
      "Cruzamento de entregas com metas comerciais",
      "Carga de trabalho por time",
      "Relatório de projetos atrasados",
      "Visibilidade total para o gestor — sem precisar acessar as duas ferramentas",
    ],
    stat: "Times com visibilidade unificada de projetos entregam 28% mais dentro do prazo. (PMI Pulse, 2024)",
  },
  {
    n: 7, bg: C.secondary, fg: "#fff", accent: C.primary,
    icon: Scale, badge: "JURÍDICO — CPJ INTEGRADO", title: "Jurídico Conectado",
    desc: "Contratos do Leviatan e Preâmbulo vinculados ao cliente no CRM e às NFs no OMIE — rastreabilidade jurídica completa.",
    items: [
      "Contratos vinculados ao perfil do cliente",
      "Alertas de vencimento de contratos",
      "NFs emitidas vinculadas ao contrato correspondente",
      "Status processual por cliente",
      "Documentos acessíveis diretamente do CRM",
      "Histórico jurídico completo por empresa atendida",
    ],
    stat: "Empresas com gestão jurídica integrada ao financeiro reduzem em 40% o tempo de recuperação de créditos vencidos. (IBGE/FGV, 2023)",
  },
  {
    n: 8, bg: C.primary, fg: C.black, accent: C.black, isAI: true,
    icon: Bot, badge: "INTELIGÊNCIA ARTIFICIAL", title: "Assistente IA Interno",
    desc: "Chat interno estilo ChatGPT que responde perguntas reais do negócio em segundos — cruzando dados das 7 áreas e dos 15 sistemas.",
    items: [],
    stat: "Empresas com IA para consultas operacionais reduzem em 70% o tempo de geração de relatórios gerenciais. (McKinsey Global Institute, 2024)",
  },
];

const AI_QUESTIONS = [
  {
    q: "Qual o faturamento consolidado da Btax, Bcont e Bprev no mês passado?",
    sources: ["OMIE", "iRecebi", "PipeRun"],
    a: "R$ 2,84M consolidado — Btax R$ 1,12M · Bcont R$ 980k · Bprev R$ 740k. Crescimento de 8,2% vs. mês anterior.",
  },
  {
    q: "Quantos projetos estão atrasados essa semana e quem é o responsável?",
    sources: ["Gestão de Projetos", "RH"],
    a: "7 projetos atrasados: 4 sob a equipe Fiscal (resp. Carla) e 3 no time Contábil (resp. Marcos). 2 com SLA vencendo em 48h.",
  },
  {
    q: "Quais obrigações fiscais vencem nos próximos 7 dias?",
    sources: ["OMIE", "Calendário Fiscal"],
    a: "12 obrigações: 5 SPED Fiscal, 4 DCTFWeb, 3 EFD-Contribuições. Total de tributos a recolher: R$ 487k.",
  },
  {
    q: "Qual o ticket médio e LTV dos clientes ativos da Btax?",
    sources: ["PipeRun", "iRecebi"],
    a: "Ticket médio mensal: R$ 4.200. LTV médio: R$ 138k (33 meses de retenção). Top 10 clientes = 41% do MRR.",
  },
];

/* ---------- AI Chat Demo ---------- */
function AIChat() {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const current = AI_QUESTIONS[idx] ?? AI_QUESTIONS[0];

  useEffect(() => {
    const q = (AI_QUESTIONS[idx] ?? AI_QUESTIONS[0])?.q ?? "";
    setTyped(""); setShowAnswer(false);
    if (!q) return;
    let i = 0;
    const typer = setInterval(() => {
      i++;
      setTyped(q.slice(0, i));
      if (i >= q.length) {
        clearInterval(typer);
        setTimeout(() => setShowAnswer(true), 500);
        setTimeout(() => setIdx((p) => (p + 1) % AI_QUESTIONS.length), 5400);
      }
    }, 28);
    return () => clearInterval(typer);
  }, [idx]);

  return (
    <div className="rounded-2xl overflow-hidden border shadow-sm" style={{ backgroundColor: "#fff", borderColor: "#E5E5E0" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "#E5E5E0" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: C.primary }}>
            <Bot size={15} color="#fff" />
          </div>
          <div>
            <div className="text-sm font-semibold" style={{ color: C.black }}>Burati GT Assistant</div>
            <div className="text-[10px] flex items-center gap-1.5" style={{ color: C.secondary }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Online · conectado aos 15 sistemas
            </div>
          </div>
        </div>
        <span className="text-[10px] px-2 py-1 rounded-md" style={{ backgroundColor: "#F5F5F0", color: C.secondary }}>IA Interna</span>
      </div>

      {/* Conversation */}
      <div className="px-5 py-5 space-y-3 min-h-[220px]" style={{ backgroundColor: "#FAFAF7" }}>
        <div className="flex justify-end">
          <div className="max-w-[88%] rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm leading-snug" style={{ backgroundColor: C.black, color: "#fff" }}>
            {typed}{!showAnswer && <span className="animate-pulse">▍</span>}
          </div>
        </div>

        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="max-w-[92%] space-y-2">
              <div className="rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed border" style={{ backgroundColor: "#fff", borderColor: "#E5E5E0", color: C.black }}>
                {current.a}
              </div>
              <div className="flex items-center gap-1.5 flex-wrap pl-1">
                <span className="text-[10px] uppercase tracking-wider" style={{ color: C.secondary }}>Fontes:</span>
                {current.sources.map((s) => (
                  <span key={s} className="text-[10px] px-2 py-0.5 rounded-full border" style={{ borderColor: C.primary, color: C.primary }}>
                    {s}
                  </span>
                ))}
                <span className="text-[10px] ml-auto" style={{ color: C.secondary }}>respondido em 1.8s</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input */}
      <div className="px-3 py-3 border-t" style={{ borderColor: "#E5E5E0", backgroundColor: "#fff" }}>
        <div className="flex items-center gap-2 rounded-xl border px-3 py-2" style={{ borderColor: "#E5E5E0" }}>
          <input
            readOnly
            placeholder="Pergunte algo sobre o negócio…"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-neutral-400"
            style={{ color: C.black }}
          />
          <button type="button" className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: C.primary }} aria-label="Enviar">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 14V3M8 3L3 8M8 3L13 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Architecture Diagram (15 nodes) ---------- */
function ArchDiagram() {
  const groups = SYSTEM_GROUPS;
  const cx = 400, cy = 400;
  const R = 260;
  const R_sys = 340;
  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg viewBox="-60 -60 920 920" className="w-full h-auto">
        <defs>
          <radialGradient id="hubGlow">
            <stop offset="0%" stopColor={C.primary} stopOpacity="0.4" />
            <stop offset="100%" stopColor={C.primary} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={cx} cy={cy} r="120" fill="url(#hubGlow)" />

        {/* area title labels (rendered first so lines/nodes sit on top) */}
        {groups.map((g, gi) => {
          const groupAngle = (gi / groups.length) * Math.PI * 2 - Math.PI / 2;
          const gx = cx + Math.cos(groupAngle) * R;
          const gy = cy + Math.sin(groupAngle) * R;
          return (
            <text key={`t-${gi}`} x={gx} y={gy - 42} textAnchor="middle" fill={g.color} fontSize="11" fontWeight="700" letterSpacing="2">
              {g.area.toUpperCase()}
            </text>
          );
        })}

        {/* lines + nodes */}
        {groups.map((g, gi) => {
          const groupAngle = (gi / groups.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <g key={gi}>
              {g.systems.map((s, si) => {
                const spread = (si - (g.systems.length - 1) / 2) * 0.18;
                const a = groupAngle + spread;
                const x = cx + Math.cos(a) * R_sys;
                const y = cy + Math.sin(a) * R_sys;
                return (
                  <g key={si}>
                    <motion.line
                      x1={cx} y1={cy} x2={x} y2={y}
                      stroke={g.color} strokeWidth="1.5" strokeOpacity="0.4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: gi * 0.1 + si * 0.05 }}
                    />
                    <motion.circle
                      cx={x} cy={y} r="22" fill={g.color}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + si * 0.05 + 0.5, type: "spring" }}
                    />
                    <text x={x} y={y + 38} textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600">
                      {s.name.split(" ")[0]}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}

        {/* central hexagon */}
        <motion.g
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <polygon
            points={`${cx},${cy - 75} ${cx + 65},${cy - 37} ${cx + 65},${cy + 37} ${cx},${cy + 75} ${cx - 65},${cy + 37} ${cx - 65},${cy - 37}`}
            fill={C.primary}
            stroke="#fff" strokeWidth="2"
          />
          <text x={cx} y={cy + 6} textAnchor="middle" fill="#fff" fontSize="22" fontWeight="900">GT HUB</text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ---------- Hero Orbit ---------- */
function HeroOrbit() {
  const orbits = [
    { r: 110, dur: 22, items: [{ n: "OMIE", c: "#10B981" }, { n: "iRecebi", c: "#10B981" }] },
    { r: 180, dur: 32, items: [{ n: "PipeRun", c: "#FF6709" }, { n: "ClickUp", c: "#06B6D4" }, { n: "Flash", c: "#8B5CF6" }] },
    { r: 250, dur: 44, items: [{ n: "HubCount", c: "#3B82F6" }, { n: "Atlassian", c: "#06B6D4" }] },
  ];
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      {orbits.map((o, oi) => (
        <motion.div
          key={oi}
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px dashed ${C.dark}`,
            margin: `calc(50% - ${o.r}px)`,
            width: o.r * 2, height: o.r * 2, left: "50%", top: "50%",
            transform: "translate(-50%,-50%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "linear" }}
        >
          {o.items.map((it, i) => {
            const a = (i / o.items.length) * Math.PI * 2;
            const x = Math.cos(a) * o.r;
            const y = Math.sin(a) * o.r;
            return (
              <motion.div
                key={i}
                animate={{ rotate: -360 }}
                transition={{ duration: o.dur, repeat: Infinity, ease: "linear" }}
                className="absolute w-14 h-14 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg"
                style={{
                  backgroundColor: it.c,
                  left: `calc(50% + ${x}px - 28px)`,
                  top: `calc(50% + ${y}px - 28px)`,
                }}
              >
                {it.n}
              </motion.div>
            );
          })}
        </motion.div>
      ))}
      {/* center */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex flex-col items-center justify-center"
        style={{
          backgroundColor: C.black,
          color: "#fff",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          border: `2px solid ${C.primary}`,
        }}
      >
        <span className="text-2xl font-black leading-none">GT</span>
        <span className="text-2xl font-black leading-none" style={{ color: C.primary }}>HUB</span>
      </motion.div>

      {/* floating card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 rounded-2xl p-4 max-w-[200px] shadow-2xl"
        style={{ backgroundColor: C.black, color: "#fff" }}
      >
        <div className="text-[10px] font-semibold mb-1" style={{ letterSpacing: "2px", color: C.primary }}>
          ⚡ ALTA PERFORMANCE
        </div>
        <div className="text-sm font-bold leading-tight">
          <span style={{ color: C.primary }}>+600MM</span> recuperados pela Burati GT
        </div>
      </motion.div>
    </div>
  );
}

/* =================================================================
   PAGE
   ================================================================= */
export default function PropostaBuratiGT() {
  const [form, setForm] = useState({ nome: "", empresa: "", cargo: "", whats: "", dor: "" });

  return (
    <div style={{ backgroundColor: C.light, color: C.black, fontFamily: "Inter, system-ui, sans-serif" }}>
      <Helmet>
        <title>Burati GT Hub — Proposta de Transformação Digital</title>
        <meta name="description" content="De 15 sistemas fragmentados para uma inteligência única. Proposta Fluxrow para o ecossistema Burati GT e Btax." />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>
      <BackToHomeButton />

      {/* ============ 1. HERO ============ */}
      <section className="min-h-screen flex items-center px-6 sm:px-10 py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <SectionBadge icon={Zap} label="Burati GT Hub" />
            <h1 className="font-black leading-[0.95] text-5xl sm:text-6xl lg:text-[72px] tracking-tight">
              {["Transformando", "15 sistemas", "em uma única"].map((t, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" animate="show" custom={i}>
                  {t}
                </motion.div>
              ))}
              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="italic" style={{ color: C.primary }}>
                inteligência
              </motion.div>
            </h1>
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={5}
              className="mt-8 text-lg sm:text-xl max-w-xl"
              style={{ color: C.secondary }}
            >
              O ecossistema integrado da Burati GT e da Btax — onde cada dado de cada área alimenta uma única fonte de decisão.
            </motion.p>
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={7}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#diagnostico" className="px-7 py-4 rounded-xl font-bold text-sm sm:text-base"
                style={{ backgroundColor: C.black, color: "#fff" }}>
                Ver o diagnóstico
              </a>
              <a href="#solucao" className="px-7 py-4 rounded-xl font-bold text-sm sm:text-base inline-flex items-center gap-2"
                style={{ backgroundColor: C.primary, color: C.black }}>
                Conhecer a solução <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
          <HeroOrbit />
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden py-4" style={{ backgroundColor: C.primary }}>
        <motion.div
          className="flex gap-8 whitespace-nowrap font-bold text-sm sm:text-base"
          style={{ color: C.black, letterSpacing: "2px" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {Array(6).fill(0).map((_, i) => (
            <span key={i}>BURATI GT HUB • 15 SISTEMAS INTEGRADOS • DADOS EM TEMPO REAL •</span>
          ))}
        </motion.div>
      </div>

      {/* ============ 2. ESCALA DO PROBLEMA ============ */}
      <section className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.black, color: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={Layers} label="O Ecossistema Atual" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] mb-8">
            15 sistemas.<br />
            7 áreas.<br />
            <span style={{ color: C.primary }} className="italic">Zero conversa entre eles.</span>
          </h2>
          <p className="text-lg max-w-3xl mb-16" style={{ color: C.gray }}>
            Pesquisa da McKinsey aponta que profissionais perdem 19% do tempo de trabalho buscando e consolidando informações entre sistemas, quase 2 dias inteiros por semana em retrabalho puro.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {SYSTEM_GROUPS.map((g, gi) => (
              <motion.div
                key={gi}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={gi % 4}
                className="rounded-3xl p-6"
                style={{
                  backgroundColor: C.secondary,
                  border: g.border ? `2px solid ${g.border}` : "1px solid #2a2a2a",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: g.color }}>
                    <g.icon className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-[11px] font-bold uppercase" style={{ letterSpacing: "3px", color: g.color }}>
                    {g.area}
                  </span>
                </div>
                <div className="space-y-3">
                  {g.systems.map((s, si) => (
                    <div key={si} className="rounded-xl p-4" style={{ backgroundColor: C.black }}>
                      <div className="font-bold text-base mb-1" style={{ color: C.primary }}>{s.name}</div>
                      <div className="text-sm" style={{ color: C.gray }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
                {g.overlap && (
                  <div
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-bold"
                    style={{
                      backgroundColor: g.overlap.level === "critical" ? C.red : C.yellow,
                      color: g.overlap.level === "critical" ? "#fff" : C.black,
                    }}
                  >
                    {g.overlap.text}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mt-20 text-center font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight"
            style={{ color: C.primary }}
          >
            15 sistemas. Nenhum dado cruzado.<br />
            Toda decisão estratégica baseada em informação incompleta.
          </motion.p>
        </div>
      </section>

      {/* ============ 3. DIAGNÓSTICO ============ */}
      <section id="diagnostico" className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.secondary, color: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={Search} label="Diagnóstico" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[52px] leading-[1.05] mb-8">
            O custo oculto<br />
            de sistemas <span className="italic" style={{ color: C.primary }}>fragmentados.</span>
          </h2>
          <p className="text-lg max-w-3xl mb-16" style={{ color: C.gray }}>
            Antes de integrar, precisamos identificar o que pode ser eliminado. Aqui estão as sobreposições mapeadas no ecossistema atual.
          </p>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                level: "critical", icon: AlertTriangle, color: C.red, badge: "PRIORIDADE ALTA",
                title: "Área Fiscal: 3 sistemas", systems: "HubCount + MA Tecnologia + MR Tecnologia",
                desc: "Três plataformas atuando sobre a mesma base de dados fiscais. Alta probabilidade de redundância de funcionalidades e custo triplicado em compliance.",
                impact: "Potencial de consolidação: 1–2 contratos eliminados",
              },
              {
                level: "warning", icon: AlertCircle, color: C.yellow, badge: "PRIORIDADE MÉDIA",
                title: "Gestão de Projetos: 2 sistemas", systems: "ClickUp (Btax) + Atlassian (Marketing)",
                desc: "ClickUp e Atlassian/Jira resolvem o mesmo problema: gestão de tarefas, sprints e documentação. Dois contratos separados para a mesma função, em empresas do mesmo grupo.",
                impact: "Unificação possível em 1 plataforma",
              },
              {
                level: "warning", icon: AlertCircle, color: C.yellow, badge: "PRIORIDADE MÉDIA",
                title: "RH: Jornada em dois sistemas", systems: "Flash + Mindsight",
                desc: "Flash cobre benefícios, cartão e jornada. Mindsight cobre recrutamento e desempenho. Há sobreposição no módulo de gestão de pessoas — e nenhum dos dois fala com o financeiro para calcular custo real por colaborador.",
                impact: "Integração pode eliminar entrada manual de dados",
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-3xl p-6 relative overflow-hidden"
                style={{ backgroundColor: C.black, borderLeft: `6px solid ${c.color}` }}
              >
                <c.icon className="w-8 h-8 mb-4" style={{ color: c.color }} />
                <h3 className="font-bold text-xl mb-2">{c.title}</h3>
                <div className="text-xs font-semibold mb-4" style={{ color: c.color, letterSpacing: "1px" }}>
                  {c.systems}
                </div>
                <p className="text-sm mb-5" style={{ color: C.gray }}>{c.desc}</p>
                <div className="text-sm font-bold mb-4" style={{ color: C.primary }}>{c.impact}</div>
                <span
                  className="inline-block px-3 py-1 rounded-md text-[10px] font-bold"
                  style={{ backgroundColor: c.color, color: c.level === "critical" ? "#fff" : C.black, letterSpacing: "1px" }}
                >
                  {c.badge}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ backgroundColor: C.black }}>
            {[
              { v: "3–5", l: "contratos com sobreposição de função" },
              { v: "19%", l: "do tempo perdido em retrabalho entre sistemas (McKinsey)" },
              { v: "R$ 8.400/mês", l: "custo médio de licenças sobrepostas em PMEs (ABES, 2024)" },
              { v: "0", l: "dados cruzados entre as 7 áreas hoje" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-black text-4xl mb-2" style={{ color: C.primary }}>{s.v}</div>
                <div className="text-sm" style={{ color: C.gray }}>{s.l}</div>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 italic text-base" style={{ color: C.gray }}>
            E tudo isso antes de falar em integração. O primeiro passo é saber o que pode ser eliminado.
          </p>
        </div>
      </section>

      {/* ============ 4. SOLUÇÃO ============ */}
      <section id="solucao" className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={Lightbulb} label="A Solução" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[52px] leading-[1.05] mb-8" style={{ color: C.black }}>
            E se todas as suas áreas<br />
            falassem a<br />
            <span className="italic" style={{ color: C.primary }}>mesma língua?</span>
          </h2>
          <p className="text-lg max-w-3xl mb-16" style={{ color: C.secondary }}>
            O Burati GT Hub não é só uma integração. É uma camada de inteligência que se conecta aos seus sistemas via API, unifica os dados em um banco central e entrega visão completa do negócio em tempo real, sem trocar o que já funciona.
          </p>

          <div className="space-y-6 mb-16">
            {[
              { bg: C.black, fg: "#fff", icon: LinkIcon, accent: C.primary, t: "Conectar o que pode ser conectado", d: "Via APIs oficiais de cada plataforma, os dados passam a fluir automaticamente para o banco central. Nenhuma alteração nos sistemas atuais." },
              { bg: C.primary, fg: C.black, icon: Minimize2, accent: C.black, t: "Identificar e eliminar redundâncias", d: "Com o mapa completo de funções e custos, fica claro o que pode ser consolidado, substituído ou eliminado — gerando economia real mensurável." },
              { bg: C.black, fg: "#fff", icon: Brain, accent: C.primary, t: "Transformar dados em decisão", d: "Dashboard unificado, relatórios automáticos e assistente IA que responde perguntas reais do negócio em segundos — cruzando dados de todas as 7 áreas." },
            ].map((l, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-3xl p-8 flex gap-6 items-start"
                style={{ backgroundColor: l.bg, color: l.fg, borderLeft: l.bg === C.black ? `6px solid ${C.primary}` : "none" }}
              >
                <span className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: l.accent + "22" }}>
                  <l.icon className="w-7 h-7" style={{ color: l.accent }} />
                </span>
                <div>
                  <div className="text-xs font-bold mb-2" style={{ color: l.accent, letterSpacing: "2px" }}>CAMADA {i + 1}</div>
                  <h3 className="font-bold text-2xl mb-3">{l.t}</h3>
                  <p className="text-base opacity-90 leading-relaxed">{l.d}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl p-10 text-center" style={{ backgroundColor: C.black }}>
            <p className="font-bold text-xl sm:text-2xl leading-tight" style={{ color: C.primary }}>
              "Organizações com dados integrados têm 23x mais chance de adquirir clientes, 6x mais de retê-los e 19x mais de serem lucrativas."
            </p>
            <p className="mt-4 text-sm" style={{ color: C.gray }}>McKinsey & Company</p>
          </div>
        </div>
      </section>

      {/* ============ 5. ARQUITETURA ============ */}
      <section className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.black, color: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={GitBranch} label="Arquitetura" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[52px] leading-[1.05] mb-12">
            Nenhum dado<br />
            <span className="italic" style={{ color: C.primary }}>se perde.</span>
          </h2>

          <ArchDiagram />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { t: "Tempo real", d: "Qualquer dado alterado em qualquer sistema aparece instantaneamente no Hub" },
              { t: "Uma fonte de verdade", d: "Um número. Uma versão. Todas as áreas alinhadas" },
              { t: "Segurança e LGPD", d: "Permissões por área, auditoria completa, conformidade total" },
            ].map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-2xl p-6"
                style={{ backgroundColor: C.secondary, borderLeft: `4px solid ${C.primary}` }}
              >
                <h3 className="font-bold text-xl mb-2">{c.t}</h3>
                <p className="text-sm" style={{ color: C.gray }}>{c.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl p-8 text-center" style={{ backgroundColor: C.primary, color: C.black }}>
            <p className="font-bold text-xl sm:text-2xl">
              "Empresas com dados integrados tomam decisões até 5x mais rápido que as que operam com sistemas isolados."
            </p>
            <p className="mt-3 text-sm opacity-80">Harvard Business Review, 2023</p>
          </div>
        </div>
      </section>

      {/* ============ 6. MÓDULOS ============ */}
      <section className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={Grid} label="Módulos do Sistema" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[52px] leading-[1.05] mb-16" style={{ color: C.black }}>
            8 módulos.<br />
            Um ecossistema<br />
            <span className="italic" style={{ color: C.primary }}>completo.</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {MODULES.map((m, i) => (
              <motion.div
                key={m.n}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i % 2}
                className="rounded-3xl p-8 flex flex-col"
                style={{ backgroundColor: m.bg, color: m.fg }}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: m.accent + "22" }}>
                    <m.icon className="w-6 h-6" style={{ color: m.accent }} />
                  </span>
                  <span className="text-[10px] font-bold opacity-80" style={{ letterSpacing: "2px", color: m.accent }}>
                    {m.badge}
                  </span>
                </div>
                <h3 className="font-black text-2xl sm:text-3xl mb-3">{m.title}</h3>
                <p className="text-base mb-6 opacity-90 leading-relaxed">{m.desc}</p>

                {m.isAI ? (
                  <AIChat />
                ) : (
                  <ul className="space-y-2 mb-6 flex-1">
                    {m.items.map((it, ii) => (
                      <li key={ii} className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: m.accent }} />
                        <span className="opacity-90">{it}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 pt-5 border-t text-xs italic opacity-80" style={{ borderColor: m.accent + "44" }}>
                  {m.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. IMPACTO ============ */}
      <section className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.black, color: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={TrendingUp} label="Impacto Real" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[52px] leading-[1.05] mb-16">
            O que muda<br />
            com a integração<br />
            já no <span className="italic" style={{ color: C.primary }}>segundo mês.</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { v: 87, suf: "%", l: "Redução de erros operacionais com automação financeira (Deloitte, 2023)" },
              { v: 19, suf: "%", l: "Do tempo de trabalho recuperado ao eliminar busca manual entre sistemas (McKinsey)" },
              { v: 5, suf: "x", l: "Mais velocidade nas decisões com dados integrados (HBR, 2023)" },
              { v: 250, suf: "%", l: "ROI médio no primeiro ano com integração de sistemas de gestão (Aberdeen Group, 2024)" },
            ].map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-2xl p-6"
                style={{ backgroundColor: C.secondary }}
              >
                <div className="font-black text-5xl sm:text-6xl mb-3" style={{ color: C.primary }}>
                  <Counter to={c.v} suffix={c.suf} />
                </div>
                <div className="text-sm" style={{ color: C.gray }}>{c.l}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-3xl p-8" style={{ backgroundColor: C.secondary }}>
              <div className="text-xs font-bold mb-5" style={{ color: C.red, letterSpacing: "3px" }}>ANTES</div>
              <ul className="space-y-3">
                {[
                  "15 logins diferentes todo dia",
                  "Relatório mensal leva 3–5 dias para compilar",
                  "Decisões baseadas em dados parciais e desatualizados",
                  "3 sistemas fiscais sem comunicação",
                  "CRM sem histórico de cobranças ou contratos",
                  "RH desconectado do financeiro",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: C.gray }}>
                    <X className="w-5 h-5 shrink-0" style={{ color: C.red }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl p-8" style={{ backgroundColor: C.secondary, borderLeft: `4px solid ${C.primary}` }}>
              <div className="text-xs font-bold mb-5" style={{ color: C.primary, letterSpacing: "3px" }}>DEPOIS</div>
              <ul className="space-y-3">
                {[
                  "1 login. Todas as áreas. Todos os dados",
                  "Relatório automático disponível em segundos",
                  "Decisões baseadas em dados cruzados em tempo real",
                  "1 visão fiscal unificada com alertas automáticos",
                  "CRM com histórico 360° — jurídico, financeiro e comercial",
                  "Custo real por colaborador visível no dashboard",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <Check className="w-5 h-5 shrink-0" style={{ color: C.primary }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl p-8" style={{ backgroundColor: C.secondary, borderLeft: `6px solid ${C.primary}` }}>
            <div className="text-xs font-bold mb-4" style={{ color: C.primary, letterSpacing: "3px" }}>POTENCIAL DE CONSOLIDAÇÃO IDENTIFICADO</div>
            <ul className="space-y-2 text-base" style={{ color: C.gray }}>
              <li>• 3 a 5 contratos com sobreposição de função</li>
              <li>• 12+ horas semanais de retrabalho eliminadas por área</li>
              <li>• Relatórios manuais substituídos por automação</li>
              <li>• Decisões estratégicas baseadas em dados reais pela primeira vez</li>
            </ul>
            <p className="mt-6 italic text-sm" style={{ color: C.primary }}>
              Os valores exatos serão levantados na reunião de diagnóstico.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 8. COMO TRABALHAMOS ============ */}
      <section className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionBadge icon={Rocket} label="Como Trabalhamos" />
          <h2 className="font-black text-4xl sm:text-5xl lg:text-[52px] leading-[1.05] mb-16" style={{ color: C.black }}>
            Duas formas de<br />
            transformar sua<br />
            <span className="italic" style={{ color: C.primary }}>operação.</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                bg: C.black, fg: "#fff", accent: C.primary, icon: GraduationCap,
                title: "Mentoria Estratégica", sub: "Você no controle, eu na orientação",
                desc: "Sessões de trabalho práticas onde mapeamos juntos cada fluxo, definimos a arquitetura e eu guio o time interno na implementação — passo a passo.",
                items: [
                  "Mapeamento completo dos 15 sistemas",
                  "Diagnóstico de sobreposições com custo real",
                  "Arquitetura de banco de dados definida",
                  "Templates de integração via API",
                  "Documentação técnica completa",
                  "Acompanhamento até o go-live",
                  "Treinamento do time",
                ],
              },
              {
                bg: C.primary, fg: C.black, accent: C.black, icon: Code2,
                title: "Projeto Completo", sub: "Eu projeto, construo e entrego rodando",
                desc: "Do mapeamento ao deploy — meu time cuida de tudo. Você recebe o Hub funcionando, o time treinado e os dados integrados.",
                items: [
                  "Mapeamento e diagnóstico completo",
                  "Desenvolvimento do Hub (React + banco de dados)",
                  "Integrações via APIs oficiais de todos os sistemas",
                  "Módulos personalizados para cada área",
                  "Assistente IA configurado com os dados da empresa",
                  "Treinamento completo de todos os times",
                  "90 dias de suporte pós-entrega",
                  "SLA de uptime garantido",
                ],
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-3xl p-8"
                style={{ backgroundColor: c.bg, color: c.fg }}
              >
                <span className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: c.accent + "22" }}>
                  <c.icon className="w-7 h-7" style={{ color: c.accent }} />
                </span>
                <h3 className="font-black text-3xl mb-2">{c.title}</h3>
                <p className="text-base mb-5 opacity-80">{c.sub}</p>
                <p className="text-base mb-6 leading-relaxed opacity-90">{c.desc}</p>
                <ul className="space-y-2">
                  {c.items.map((it, ii) => (
                    <li key={ii} className="flex gap-2 text-sm">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: c.accent }} />
                      <span className="opacity-90">{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 9. CTA FINAL ============ */}
      <section className="px-6 sm:px-10 py-24" style={{ backgroundColor: C.black, color: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-black text-center text-5xl sm:text-6xl lg:text-[80px] leading-[0.95] mb-8"
            style={{ color: C.primary }}
          >
            Transforme seus<br />sistemas em<br />resultados.
          </motion.h2>
          <p className="text-center text-lg sm:text-xl max-w-2xl mx-auto mb-20" style={{ color: C.gray }}>
            A Burati GT e a Btax já transformam desafios tributários em soluções. Agora é hora de transformar a operação interna também.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-20 relative">
            {[
              { t: "Reunião de Diagnóstico", d: "Entendemos os fluxos atuais, volumes de dados, dores por área e mapeamos todas as integrações possíveis e os contratos com sobreposição.", time: "60–90 minutos" },
              { t: "Proposta Personalizada", d: "Com base no diagnóstico, entregamos escopo detalhado, arquitetura de dados, cronograma e investimento — sem surpresas.", time: "3–5 dias úteis" },
              { t: "Início do Projeto", d: "Kick-off, setup do ambiente, primeiras integrações rodando e dashboard com dados reais — em até 30 dias.", time: "Primeiros resultados em 30 dias" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="rounded-3xl p-6" style={{ backgroundColor: C.secondary }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-xl mb-5"
                  style={{ backgroundColor: C.primary, color: C.black }}>
                  {i + 1}
                </div>
                <h3 className="font-bold text-xl mb-3">{s.t}</h3>
                <p className="text-sm mb-4" style={{ color: C.gray }}>{s.d}</p>
                <span className="text-xs font-bold" style={{ color: C.primary, letterSpacing: "2px" }}>{s.time}</span>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <div className="rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto" style={{ backgroundColor: C.secondary }}>
            <h3 className="font-black text-2xl sm:text-3xl mb-6">Marque a reunião de diagnóstico</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const msg = `Olá! Quero marcar a reunião de diagnóstico do Burati GT Hub.%0A%0ANome: ${form.nome}%0AEmpresa: ${form.empresa}%0ACargo: ${form.cargo}%0AWhatsApp: ${form.whats}%0ADor: ${form.dor}`;
                window.open(`https://wa.me/5541992361868?text=${msg}`, "_blank");
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="px-4 py-3 rounded-xl bg-transparent border outline-none focus:border-orange-500"
                  style={{ borderColor: C.gray, color: "#fff" }} />
                <input required placeholder="Empresa" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  className="px-4 py-3 rounded-xl bg-transparent border outline-none focus:border-orange-500"
                  style={{ borderColor: C.gray, color: "#fff" }} />
                <input required placeholder="Cargo" value={form.cargo} onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                  className="px-4 py-3 rounded-xl bg-transparent border outline-none focus:border-orange-500"
                  style={{ borderColor: C.gray, color: "#fff" }} />
                <input required placeholder="WhatsApp" value={form.whats} onChange={(e) => setForm({ ...form, whats: e.target.value })}
                  className="px-4 py-3 rounded-xl bg-transparent border outline-none focus:border-orange-500"
                  style={{ borderColor: C.gray, color: "#fff" }} />
              </div>
              <textarea required rows={4} placeholder="Qual é a maior dor operacional hoje?"
                value={form.dor} onChange={(e) => setForm({ ...form, dor: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-transparent border outline-none focus:border-orange-500 resize-none"
                style={{ borderColor: C.gray, color: "#fff" }} />
              <button type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2"
                style={{ backgroundColor: C.primary, color: C.black }}>
                Quero marcar a reunião de diagnóstico <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="block mt-6 text-center text-sm underline" style={{ color: C.gray }}>
              ou fale direto pelo WhatsApp
            </a>
          </div>

          <div className="mt-16 rounded-3xl p-8 text-center" style={{ backgroundColor: C.primary, color: C.black }}>
            <p className="font-bold text-xl sm:text-2xl">
              "Empresas que integram seus sistemas de gestão relatam ROI médio de 250% no primeiro ano de operação."
            </p>
            <p className="mt-3 text-sm opacity-80">Aberdeen Group, 2024</p>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="px-6 sm:px-10 py-12" style={{ backgroundColor: C.light, color: C.black }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <div className="font-black text-2xl mb-2">Fluxrow</div>
            <div className="text-sm mb-4" style={{ color: C.secondary }}>Inteligência Criativa</div>
            <div className="text-xs" style={{ color: C.secondary }}>
              © 2024 Fluxrow Inteligência Criativa. Todos os direitos reservados.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-bold mb-3" style={{ color: C.primary, letterSpacing: "2px" }}>O HUB</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#diagnostico">Diagnóstico</a></li>
                <li><a href="#solucao">Arquitetura</a></li>
                <li><a href="#solucao">Módulos</a></li>
                <li><a href="#solucao">IA</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold mb-3" style={{ color: C.primary, letterSpacing: "2px" }}>CONTATO</div>
              <ul className="space-y-2 text-sm">
                <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Reunião</a></li>
                <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
