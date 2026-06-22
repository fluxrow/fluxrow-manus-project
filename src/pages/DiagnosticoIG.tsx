import { useEffect, useRef, useState } from "react";
import cauaAvatar from "@/assets/caua-avatar.png.asset.json";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";
import {
  STEPS,
  PILLAR_LABELS,
  QUICK_WINS,
  TIERS,
  tierFromScore,
  computePillarScores,
  overallScore,
  weakestPillars,
  estimatedHoursSaved,
  benchmarkFor,
  type Pillar,
  type Opt,
} from "@/data/diagnosticoIG";

type Bubble = { id: number; kind: "bot" | "usr"; text: string };
type Control =
  | { kind: "none" }
  | { kind: "start" }
  | { kind: "opts"; opts: Opt[] }
  | { kind: "multi"; opts: Opt[] }
  | { kind: "input"; placeholder: string; field: "name" | "whatsapp" | "email" }
  | { kind: "yesno"; yes: string; no: string; onYes: () => void; onNo: () => void };

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
let bubbleId = 0;
const nextId = () => ++bubbleId;

const teamSizeLabel = (s?: string) => {
  switch (s) {
    case "ate-10":
      return "até 10 pessoas";
    case "11-50":
      return "11 a 50 pessoas";
    case "51-200":
      return "51 a 200 pessoas";
    case "200+":
      return "mais de 200 pessoas";
    default:
      return "";
  }
};

const QUESTION_LABELS: Record<string, string> = {
  cargo: "Papel na empresa",
  porte: "Tamanho do time",
  dor: "Área que mais consome tempo",
  dados: "Como acompanha resultados",
  atendimento: "Volume de atendimentos/mês",
  comercial: "Leads novos/mês",
  ia: "Uso atual de IA/automação",
  tentativa: "Já tentou automatizar antes",
  repetitivo: "% do tempo em tarefas repetitivas",
  obstaculo: "Maior obstáculo agora",
};

const INTERNAL_NOTIFY_EMAIL = "fbcfarias@icloud.com";

const barColor = (pct: number) => {
  if (pct >= 66) return "#0a8a3a";
  if (pct >= 41) return "#FF6B35";
  return "#cc4d1a";
};

const DiagnosticoIG = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "hide-sofia-widget";
    style.textContent = `iframe[src*="gptmaker"], #click-plug-to-support, [id*="plug-to-support"], div[id*="gptmaker"], div[class*="gptmaker"] { display: none !important; visibility: hidden !important; }`;
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);

  const params = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const leadName = params.get("nome") || params.get("name") || "";

  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [typing, setTyping] = useState(false);
  const [control, setControl] = useState<Control>({ kind: "none" });
  const [status, setStatus] = useState("online agora");
  const [report, setReport] = useState<null | {
    pillars: Record<Pillar, number>;
    overall: number;
    tierKey: keyof typeof TIERS;
    benchmark: number;
    weak: Pillar[];
    hours: number;
    teamSize?: string;
    whatsappMsg: string;
  }>(null);
  const [barWidths, setBarWidths] = useState<Record<Pillar, number>>({
    processos: 0,
    dados: 0,
    atendimento: 0,
    comercial: 0,
    ia: 0,
    pessoas: 0,
  });

  const stateRef = useRef({
    step: 0,
    contributions: [] as Array<Partial<Record<Pillar, number>>>,
    answers: {} as Record<string, string>,
    uname: leadName,
    whatsapp: "",
    teamSize: undefined as string | undefined,
    teamSizeBase: 0,
    repetitivePct: 30,
    leadId: null as string | null,
  });
  const startedRef = useRef(false);
  const mlRef = useRef<HTMLDivElement | null>(null);

  const scrollDown = () => {
    setTimeout(() => {
      const el = mlRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    }, 60);
  };

  const addBubble = async (text: string, kind: "bot" | "usr") => {
    setBubbles((b) => [...b, { id: nextId(), kind, text }]);
    scrollDown();
  };

  const showTyping = async (ms: number) => {
    setTyping(true);
    scrollDown();
    await wait(ms);
    setTyping(false);
  };

  const runAbertura = async () => {
    const greeting = leadName ? "Fala " + leadName.split(" ")[0] + "!" : "Fala!";
    const ABERTURA = [
      greeting + " 👋",
      "Aqui é o Cauã, da Fluxrow.",
      "Muito bom ter você aqui e ver seu interesse em organizar a casa usando mapeamento de setores e IA de forma saudável na operação. 🙌",
      "Vou te fazer 10 perguntas rápidas pra montar um diagnóstico de verdade do seu cenário, com mapa por pilar, comparação com o mercado e os próximos passos.",
      "Leva uns 2 minutos. Bora? 👇",
    ];
    for (let i = 0; i < ABERTURA.length; i++) {
      const dur = i === 0 ? 1100 : i === 1 ? 900 : i === 2 ? 1500 : 1200;
      await showTyping(dur);
      await addBubble(ABERTURA[i], "bot");
      await wait(450);
    }
    setControl({ kind: "start" });
  };

  const runStep = async () => {
    const s = stateRef.current;
    if (s.step < STEPS.length) {
      const step = STEPS[s.step];
      for (let i = 0; i < step.msgs.length; i++) {
        await showTyping(i === 0 ? 1000 : 750);
        await addBubble(step.msgs[i], "bot");
        if (i < step.msgs.length - 1) await wait(350);
      }
      setControl(step.multi ? { kind: "multi", opts: step.opts } : { kind: "opts", opts: step.opts });
    } else if (s.step === STEPS.length) {
      if (!s.uname) {
        await showTyping(600);
        await addBubble("Quase lá! Qual é o seu nome?", "bot");
        setControl({ kind: "input", placeholder: "Seu nome...", field: "name" });
      } else {
        await askWA();
      }
    }
  };

  const askWA = async () => {
    const s = stateRef.current;
    await showTyping(600);
    await addBubble(
      "Ótimo" +
        (s.uname ? ", " + s.uname.split(" ")[0] : "") +
        "! Me passa seu WhatsApp pra eu te chamar depois se fizer sentido.",
      "bot"
    );
    setControl({ kind: "input", placeholder: "(11) 99999-9999", field: "whatsapp" });
  };

  const handlePick = async (o: Opt) => {
    setControl({ kind: "none" });
    const s = stateRef.current;
    if (o.pillars) s.contributions.push(o.pillars);
    if (o.meta?.teamSize) {
      s.teamSize = o.meta.teamSize;
      s.teamSizeBase = o.meta.teamSizeBase ?? 0;
    }
    if (typeof o.meta?.repetitivePct === "number") {
      s.repetitivePct = o.meta.repetitivePct;
    }
    s.answers[STEPS[s.step].key] = o.label;
    await addBubble(o.label, "usr");
    s.step++;
    await runStep();
  };

  const handleMultiConfirm = async (selected: Opt[]) => {
    setControl({ kind: "none" });
    const s = stateRef.current;
    for (const o of selected) {
      if (o.pillars) s.contributions.push(o.pillars);
      if (o.meta?.teamSize) {
        s.teamSize = o.meta.teamSize;
        s.teamSizeBase = o.meta.teamSizeBase ?? 0;
      }
      if (typeof o.meta?.repetitivePct === "number") {
        s.repetitivePct = o.meta.repetitivePct;
      }
    }
    const labels = selected.map((o) => o.label).join(", ");
    s.answers[STEPS[s.step].key] = labels;
    await addBubble(labels, "usr");
    s.step++;
    await runStep();
  };



  const handleStart = async () => {
    setControl({ kind: "none" });
    await addBubble("Bora!", "usr");
    await runStep();
  };

  const buildReport = async (whatsapp: string) => {
    const s = stateRef.current;
    const pillars = computePillarScores(s.contributions);
    const overall = overallScore(pillars);
    const tierKey = tierFromScore(overall);
    const tier = TIERS[tierKey];
    const benchmark = benchmarkFor(s.teamSize);
    const weak = weakestPillars(pillars, 2);
    const hours = s.teamSizeBase
      ? estimatedHoursSaved(s.teamSizeBase, s.repetitivePct)
      : 0;
    const firstName = s.uname ? s.uname.split(" ")[0] : "";
    const teamLabel = s.teamSize
      ? ({ "ate-10": "até 10", "11-50": "11 a 50", "51-200": "51 a 200", "200+": "200+" } as Record<string, string>)[s.teamSize]
      : null;
    const pillarsList = (Object.keys(pillars) as Array<keyof typeof pillars>)
      .map((p) => `- ${PILLAR_LABELS[p]}: ${pillars[p]}%`)
      .join("\n");
    const weakList = weak.map((p) => PILLAR_LABELS[p]).join(" e ");
    const answersList = Object.entries(s.answers)
      .map(([k, v]) => `- ${k}: ${v}`)
      .join("\n");
    const msg = [
      `Olá Cauã! Fiz o diagnóstico Fluxrow.${firstName ? " Me chamo " + firstName + "." : ""}`,
      ``,
      `*Score geral:* ${overall}% (${tier.titulo})`,
      `*Benchmark do meu porte:* ${benchmark}%`,
      teamLabel ? `*Time:* ${teamLabel} pessoas` : null,
      hours ? `*Horas/mês estimadas a recuperar:* ~${hours}h` : null,
      ``,
      `*Maturidade por pilar:*`,
      pillarsList,
      ``,
      `*Pilares mais fracos:* ${weakList}`,
      ``,
      `*Minhas respostas:*`,
      answersList,
      ``,
      `Quero conversar sobre os próximos passos.`,
    ]
      .filter(Boolean)
      .join("\n");

    // best-effort save
    try {
      const { data } = await supabase.functions.invoke("capture-quiz-lead", {
        body: {
          name: s.uname,
          whatsapp,
          score: overall,
          result_tier: tierKey,
          areas: weak.map((p) => PILLAR_LABELS[p]),
          answers: s.answers,
          pillar_scores: pillars,
          team_size: s.teamSize,
          estimated_hours_saved: hours,
          source: "diagnostico-ig",
          lang: "pt",
          referrer: typeof document !== "undefined" ? document.referrer : null,
        },
      });
      const id = (data as { id?: string } | null)?.id;
      if (id) s.leadId = id;
    } catch {
      /* best effort */
    }

    // Internal notification to operator (best-effort, fire-and-forget)
    try {
      const pillarsArr = (Object.keys(pillars) as Pillar[]).map((k) => ({
        key: k,
        label: PILLAR_LABELS[k],
        pct: pillars[k],
      }));
      const answersArr = Object.entries(s.answers).map(([k, v]) => ({
        question: QUESTION_LABELS[k] ?? k,
        answer: String(v),
      }));
      const primaryWeakLabel = weak[0] ? PILLAR_LABELS[weak[0]] : "operacional";
      const secondaryWeakLabel = weak[1] ? PILLAR_LABELS[weak[1]] : "";
      const followUpMessage = [
        `Oi ${firstName || "tudo bem"}, aqui é o Cauã da Fluxrow.`,
        ``,
        `Vi que você acabou de fazer o diagnóstico (score ${overall}% — ${tier.titulo}).`,
        `Reparei que ${primaryWeakLabel}${secondaryWeakLabel ? " e " + secondaryWeakLabel : ""} ${secondaryWeakLabel ? "são" : "é"} o que mais pode destravar resultado pra vocês agora.`,
        hours ? `Pelo porte do time (${teamLabel}), dá pra recuperar uns ${hours}h/mês com IA e automação.` : null,
        ``,
        `Consegue 15min essa semana pra eu te mostrar 2-3 caminhos práticos?`,
      ]
        .filter(Boolean)
        .join("\n");
      const waDeep = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(followUpMessage)}`;
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "diagnostico-lead-interno",
          recipientEmail: INTERNAL_NOTIFY_EMAIL,
          idempotencyKey: `diag-internal-${s.leadId ?? whatsapp}-${overall}`,
          templateData: {
            leadName: s.uname,
            leadWhatsapp: whatsapp,
            leadEmail: "",
            scoreOverall: overall,
            tierTitulo: tier.titulo,
            benchmark,
            teamSizeLabel: teamLabel ?? "",
            hoursSaved: hours,
            pillars: pillarsArr,
            weakestLabels: weak.map((p) => PILLAR_LABELS[p]),
            answers: answersArr,
            whatsappDeepLink: waDeep,
            followUpMessage,
            source: "diagnostico-ig",
            createdAtLabel: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
          },
        },
      });
    } catch {
      /* best effort */
    }

    return { pillars, overall, tierKey, benchmark, weak, hours, msg };
  };

  const handleInputSubmit = async (
    value: string,
    field: "name" | "whatsapp" | "email"
  ) => {
    const s = stateRef.current;
    setControl({ kind: "none" });
    await addBubble(value, "usr");

    if (field === "name") {
      s.uname = value;
      await askWA();
      return;
    }

    if (field === "whatsapp") {
      s.whatsapp = value;
      await showTyping(1100);
      await addBubble("Pronto! Aqui está o seu diagnóstico 👇", "bot");
      const r = await buildReport(value);
      setReport({
        pillars: r.pillars,
        overall: r.overall,
        tierKey: r.tierKey,
        benchmark: r.benchmark,
        weak: r.weak,
        hours: r.hours,
        teamSize: s.teamSize,
        whatsappMsg: r.msg,
      });
      setStatus("análise pronta ✓");
      scrollDown();
      setTimeout(() => setBarWidths(r.pillars), 400);

      await wait(1400);
      await showTyping(700);
      await addBubble(
        "Quer que eu te mande esse diagnóstico completo + um plano detalhado por e-mail?",
        "bot"
      );
      setControl({
        kind: "yesno",
        yes: "Sim, manda aí",
        no: "Pode deixar",
        onYes: async () => {
          setControl({ kind: "none" });
          await addBubble("Sim, manda aí", "usr");
          await showTyping(500);
          await addBubble("Qual seu melhor e-mail?", "bot");
          setControl({
            kind: "input",
            placeholder: "voce@empresa.com",
            field: "email",
          });
        },
        onNo: async () => {
          setControl({ kind: "none" });
          await addBubble("Pode deixar", "usr");
          await showTyping(400);
          await addBubble("Tranquilo. Se quiser, é só me chamar no botão acima. 🙌", "bot");
        },
      });
      return;
    }

    if (field === "email") {
      await showTyping(900);
      const ok = await sendReportEmail(value);
      if (ok) {
        await addBubble(
          `Mandei agora pra ${value}. Dá uma olhada na caixa de entrada (e no spam, só pra garantir).`,
          "bot"
        );
      } else {
        await addBubble(
          "Tive um problema pra mandar agora. Me chama no WhatsApp que eu te envio na hora.",
          "bot"
        );
      }
    }
  };

  const sendReportEmail = async (email: string): Promise<boolean> => {
    if (!report) return false;
    const s = stateRef.current;
    const tier = TIERS[report.tierKey];
    const pillarsArr = (Object.keys(report.pillars) as Pillar[]).map((k) => ({
      key: k,
      label: PILLAR_LABELS[k],
      pct: report.pillars[k],
    }));
    const benchmarkLabel = s.teamSize ? `com ${teamSizeLabel(s.teamSize)}` : "no geral";
    const primaryWeak = report.weak[0];
    try {
      // Persist email separately on the lead row if we have an id
      if (s.leadId) {
        try {
          await supabase.functions.invoke("capture-quiz-lead", {
            body: {
              name: s.uname,
              whatsapp: s.whatsapp,
              score: report.overall,
              result_tier: report.tierKey,
              areas: report.weak.map((p) => PILLAR_LABELS[p]),
              answers: { ...s.answers, _email_added: email },
              pillar_scores: report.pillars,
              team_size: s.teamSize,
              estimated_hours_saved: report.hours,
              email,
              source: "diagnostico-ig-email",
              lang: "pt",
            },
          });
        } catch {
          /* ignore */
        }
      }
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "diagnostico-completo",
          recipientEmail: email,
          idempotencyKey: `diag-ig-${s.leadId ?? Date.now()}`,
          templateData: {
            name: s.uname,
            scoreOverall: report.overall,
            tierTitulo: tier.titulo,
            tierDesc: tier.desc,
            pillars: pillarsArr,
            benchmark: report.benchmark,
            benchmarkLabel,
            weakestLabels: report.weak.map((p) => PILLAR_LABELS[p]),
            quickWins: QUICK_WINS[primaryWeak],
            hoursSaved: report.hours,
            teamSizeLabel: teamSizeLabel(s.teamSize),
            whatsappUrl: `https://wa.me/5541992361868?text=${encodeURIComponent(report.whatsappMsg)}`,
          },
        },
      });
      return !error;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    (async () => {
      await wait(400);
      await runAbertura();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tier = report ? TIERS[report.tierKey] : null;
  const diff = report ? report.overall - report.benchmark : 0;
  const primaryWeak = report?.weak[0];

  return (
    <>
      <SEO
        title="Diagnóstico Fluxrow"
        description="Diagnóstico rápido de maturidade em IA da Fluxrow."
        path="/diagnostico-ig"
      />
      <style>{`
        .dig-wrap{background:#ece5dd;min-height:100vh;display:flex;flex-direction:column;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:430px;margin:0 auto}
        .dig-h{background:#075e54;padding:14px 16px;display:flex;align-items:center;gap:12px;position:sticky;top:0;z-index:10}
        .dig-av{width:42px;height:42px;border-radius:50%;background:#FF6B35;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:17px;flex-shrink:0;overflow:hidden}
        .dig-av img{width:100%;height:100%;object-fit:cover;display:block}
        .dig-h-info p{font-size:16px;font-weight:600;color:#fff;line-height:1.2;margin:0}
        .dig-h-info span{font-size:12px;color:#b2dfdb}
        .dig-ml{flex:1;padding:14px 10px;display:flex;flex-direction:column;gap:8px;overflow-y:auto;min-height:280px}
        .dig-bb{max-width:85%;padding:10px 14px;border-radius:18px;font-size:15px;line-height:1.55;animation:dig-fi .25s ease;word-wrap:break-word}
        .dig-bb.bot{background:#fff;color:#111;border-bottom-left-radius:4px;align-self:flex-start;box-shadow:0 1px 2px rgba(0,0,0,.12)}
        .dig-bb.usr{background:#dcf8c6;color:#111;border-bottom-right-radius:4px;align-self:flex-end;box-shadow:0 1px 2px rgba(0,0,0,.12)}
        .dig-tp{background:#fff;padding:12px 16px;border-radius:18px;border-bottom-left-radius:4px;align-self:flex-start;box-shadow:0 1px 2px rgba(0,0,0,.12)}
        .dig-dots{display:flex;gap:5px;align-items:center;height:16px}
        .dig-dots span{width:8px;height:8px;border-radius:50%;background:#aaa;animation:dig-bo .9s infinite}
        .dig-dots span:nth-child(2){animation-delay:.15s}
        .dig-dots span:nth-child(3){animation-delay:.3s}
        .dig-opts{background:#ece5dd;padding:10px 10px 14px;display:flex;flex-direction:column;gap:8px;position:sticky;bottom:0}
        .dig-ob{background:#fff;border:2px solid #ccc;border-radius:12px;padding:14px 18px;font-size:15px;color:#111;cursor:pointer;text-align:left;line-height:1.4;font-family:inherit;font-weight:500;-webkit-tap-highlight-color:transparent;transition:border-color .15s}
        .dig-ob:active{background:#fff5f2;border-color:#FF6B35}
        .dig-yesno{display:flex;gap:8px}
        .dig-yesno .dig-ob{flex:1;text-align:center}
        .dig-start{background:#ece5dd;padding:10px 10px 14px}
        .dig-start-btn{width:100%;background:#FF6B35;border:none;border-radius:12px;padding:15px;font-size:16px;font-weight:700;color:#fff;cursor:pointer;font-family:inherit;-webkit-tap-highlight-color:transparent}
        .dig-start-btn:active{opacity:.88}
        .dig-ti{background:#ece5dd;padding:10px 10px 14px;display:flex;gap:8px;align-items:center}
        .dig-ti input{flex:1;border:2px solid #ccc;border-radius:24px;padding:12px 16px;font-size:15px;background:#fff;color:#111;outline:none;font-family:inherit}
        .dig-ti input::placeholder{color:#999}
        .dig-ti input:focus{border-color:#075e54}
        .dig-sb{width:44px;height:44px;border-radius:50%;background:#075e54;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0}
        .dig-sb svg{width:20px;height:20px;fill:#fff}
        .dig-rc{background:#fff;border-radius:14px;padding:18px 16px;margin:4px 0;box-shadow:0 2px 6px rgba(0,0,0,.1);animation:dig-fi .35s ease}
        .dig-re{font-size:36px;text-align:center;margin-bottom:8px}
        .dig-rt{font-size:17px;font-weight:700;color:#111;text-align:center;margin-bottom:6px;line-height:1.3}
        .dig-overall{font-size:32px;font-weight:800;color:#FF6B35;text-align:center;margin:0 0 4px;letter-spacing:-0.02em}
        .dig-overall-sub{font-size:12px;text-align:center;color:#888;margin-bottom:14px;letter-spacing:.05em;text-transform:uppercase}
        .dig-rd{font-size:13.5px;color:#444;line-height:1.55;margin-bottom:14px;text-align:center}
        .dig-section-title{font-size:12px;font-weight:700;color:#FF6B35;text-transform:uppercase;letter-spacing:.06em;margin:18px 0 10px}
        .dig-pillar{margin-bottom:10px}
        .dig-pillar-head{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#222;margin-bottom:4px}
        .dig-pillar-name{font-weight:600;display:flex;align-items:center;gap:6px}
        .dig-pillar-pct{font-weight:700;color:#555}
        .dig-gargalo{font-size:10px;background:#FF6B35;color:#fff;padding:2px 6px;border-radius:8px;font-weight:700;text-transform:uppercase;letter-spacing:.05em}
        .dig-pillar-bar{height:8px;background:#eee;border-radius:20px;overflow:hidden}
        .dig-pillar-fill{height:100%;border-radius:20px;transition:width 1s ease;width:0}
        .dig-bench{background:#f6f4f0;border-radius:10px;padding:12px 14px;margin:14px 0;font-size:13px;color:#333;line-height:1.5}
        .dig-bench strong.up{color:#0a8a3a}
        .dig-bench strong.down{color:#cc4d1a}
        .dig-hours{background:#0a8a3a;color:#fff;border-radius:10px;padding:14px 16px;margin:14px 0}
        .dig-hours-label{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#d5f1de;margin-bottom:2px}
        .dig-hours-value{font-size:24px;font-weight:800;margin-bottom:4px}
        .dig-hours-sub{font-size:12.5px;color:#eaf6ee;line-height:1.5}
        .dig-steps{margin-top:6px}
        .dig-step{background:#fafafa;border:1px solid #eee;border-radius:10px;padding:10px 12px;margin-bottom:8px}
        .dig-step-h{font-size:11px;font-weight:700;color:#FF6B35;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px}
        .dig-step-t{font-size:13.5px;color:#222;line-height:1.5}
        .dig-wab{display:block;width:100%;background:#25D366;color:#fff;border:none;border-radius:24px;padding:14px;font-size:15px;font-weight:700;text-align:center;cursor:pointer;text-decoration:none;font-family:inherit;margin-top:14px}
        .dig-wa-sub{text-align:center;font-size:12px;color:#999;margin-top:8px}
        @keyframes dig-fi{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
        @keyframes dig-bo{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
        html,body,#root{background:#ece5dd}
      `}</style>

      <div className="dig-wrap">
        <div className="dig-h">
          <div className="dig-av"><img src={cauaAvatar.url} alt="Cauã Farias" /></div>
          <div className="dig-h-info">
            <p>Cauã Farias · Fluxrow</p>
            <span>{status}</span>
          </div>
        </div>

        <div className="dig-ml" ref={mlRef}>
          {bubbles.map((b) => (
            <div key={b.id} className={`dig-bb ${b.kind}`}>
              {b.text}
            </div>
          ))}
          {typing && (
            <div className="dig-tp">
              <div className="dig-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          {report && tier && (
            <div className="dig-rc">
              <div className="dig-re">{tier.emoji}</div>
              <div className="dig-overall">{report.overall}%</div>
              <div className="dig-overall-sub">Maturidade geral</div>
              <div className="dig-rt">{tier.titulo}</div>
              <div className="dig-rd">{tier.desc}</div>

              <div className="dig-section-title">Mapa por pilar</div>
              {(Object.keys(report.pillars) as Pillar[]).map((p) => {
                const pct = report.pillars[p];
                const isWeak = report.weak.includes(p);
                return (
                  <div key={p} className="dig-pillar">
                    <div className="dig-pillar-head">
                      <span className="dig-pillar-name">
                        {PILLAR_LABELS[p]}
                        {isWeak && <span className="dig-gargalo">gargalo</span>}
                      </span>
                      <span className="dig-pillar-pct">{pct}%</span>
                    </div>
                    <div className="dig-pillar-bar">
                      <div
                        className="dig-pillar-fill"
                        style={{
                          width: `${barWidths[p]}%`,
                          background: barColor(pct),
                        }}
                      />
                    </div>
                  </div>
                );
              })}

              <div className="dig-bench">
                Empresas {stateRef.current.teamSize ? `com ${teamSizeLabel(stateRef.current.teamSize)}` : "no geral"} costumam pontuar <strong>{report.benchmark}%</strong>. Você está{" "}
                <strong className={diff >= 0 ? "up" : "down"}>
                  {diff >= 0 ? "+" : ""}
                  {diff} pts
                </strong>{" "}
                {diff >= 0 ? "acima" : "abaixo"} da média.
              </div>

              {report.hours > 0 && (
                <div className="dig-hours">
                  <div className="dig-hours-label">Potencial estimado</div>
                  <div className="dig-hours-value">~{report.hours}h/mês</div>
                  <div className="dig-hours-sub">
                    de tarefas operacionais que IA e automação podem absorver
                    {stateRef.current.teamSize ? ` (base: ${teamSizeLabel(stateRef.current.teamSize)})` : ""}.
                  </div>
                </div>
              )}

              {primaryWeak && (
                <>
                  <div className="dig-section-title">Próximos passos pra você</div>
                  <div className="dig-steps">
                    <div className="dig-step">
                      <div className="dig-step-h">Próximos 30 dias</div>
                      <div className="dig-step-t">{QUICK_WINS[primaryWeak].d30}</div>
                    </div>
                    <div className="dig-step">
                      <div className="dig-step-h">Em 60 dias</div>
                      <div className="dig-step-t">{QUICK_WINS[primaryWeak].d60}</div>
                    </div>
                    <div className="dig-step">
                      <div className="dig-step-h">Em 90 dias</div>
                      <div className="dig-step-t">{QUICK_WINS[primaryWeak].d90}</div>
                    </div>
                  </div>
                </>
              )}

              <a
                className="dig-wab"
                href={`https://wa.me/5541992361868?text=${encodeURIComponent(report.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com o Cauã no WhatsApp
              </a>
              <p className="dig-wa-sub">Gratuito · Sem compromisso · Resposta em até 24h</p>
            </div>
          )}
        </div>

        {control.kind === "start" && (
          <div className="dig-start">
            <button className="dig-start-btn" onClick={handleStart}>
              Vamos começar 🚀
            </button>
          </div>
        )}

        {control.kind === "opts" && (
          <div className="dig-opts">
            {control.opts.map((o) => (
              <button key={o.label} className="dig-ob" onClick={() => handlePick(o)}>
                {o.label}
              </button>
            ))}
          </div>
        )}

        {control.kind === "multi" && (
          <MultiPicker opts={control.opts} onConfirm={handleMultiConfirm} />
        )}

        {control.kind === "yesno" && (
          <div className="dig-opts">
            <div className="dig-yesno">
              <button className="dig-ob" onClick={control.onYes}>
                {control.yes}
              </button>
              <button className="dig-ob" onClick={control.onNo}>
                {control.no}
              </button>
            </div>
          </div>
        )}

        {control.kind === "input" && (
          <InputBar
            placeholder={control.placeholder}
            type={control.field === "email" ? "email" : "text"}
            onSubmit={(v) => handleInputSubmit(v, control.field)}
          />
        )}
      </div>
    </>
  );
};

const InputBar = ({
  placeholder,
  type,
  onSubmit,
}: {
  placeholder: string;
  type: string;
  onSubmit: (v: string) => void;
}) => {
  const [val, setVal] = useState("");
  const inpRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    setTimeout(() => inpRef.current?.focus(), 100);
  }, []);
  const go = () => {
    const v = val.trim();
    if (v) onSubmit(v);
  };
  return (
    <div className="dig-ti">
      <input
        ref={inpRef}
        type={type}
        placeholder={placeholder}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") go();
        }}
        maxLength={200}
      />
      <button className="dig-sb" onClick={go} aria-label="Enviar">
        <svg viewBox="0 0 24 24">
          <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
        </svg>
      </button>
    </div>
  );
};

const MultiPicker = ({
  opts,
  onConfirm,
}: {
  opts: Opt[];
  onConfirm: (selected: Opt[]) => void;
}) => {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (label: string) => {
    setPicked((p) => (p.includes(label) ? p.filter((x) => x !== label) : [...p, label]));
  };
  const confirm = () => {
    if (!picked.length) return;
    const selected = opts.filter((o) => picked.includes(o.label));
    onConfirm(selected);
  };
  return (
    <div className="dig-opts">
      {opts.map((o) => {
        const on = picked.includes(o.label);
        return (
          <button
            key={o.label}
            className="dig-ob"
            style={
              on
                ? { borderColor: "#FF6B35", background: "#fff5f2" }
                : undefined
            }
            onClick={() => toggle(o.label)}
          >
            <span style={{ marginRight: 8, fontWeight: 700, color: on ? "#FF6B35" : "#bbb" }}>
              {on ? "✓" : "○"}
            </span>
            {o.label}
          </button>
        );
      })}
      <button
        className="dig-start-btn"
        style={{ marginTop: 4, opacity: picked.length ? 1 : 0.5 }}
        disabled={!picked.length}
        onClick={confirm}
      >
        Confirmar {picked.length > 0 ? `(${picked.length})` : ""}
      </button>
    </div>
  );
};

export default DiagnosticoIG;
