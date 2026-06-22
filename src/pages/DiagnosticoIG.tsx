import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";

type Opt = { label: string; score: number; area?: string };
type Step = { key: string; msgs: string[]; opts: Opt[] };

const STEPS: Step[] = [
  {
    key: "cargo",
    msgs: ["Qual é o seu papel na empresa?"],
    opts: [
      { label: "Dono / Sócio", score: 3 },
      { label: "Diretor / C-Level", score: 3 },
      { label: "Gerente / Gestor", score: 2 },
      { label: "Outro cargo", score: 1 },
    ],
  },
  {
    key: "porte",
    msgs: ["Quantas pessoas tem no time?"],
    opts: [
      { label: "Até 10 pessoas", score: 1 },
      { label: "11 a 50 pessoas", score: 2 },
      { label: "51 a 200 pessoas", score: 3 },
      { label: "Mais de 200 pessoas", score: 3 },
    ],
  },
  {
    key: "dor",
    msgs: ["Qual área consome mais tempo do seu time hoje?"],
    opts: [
      { label: "Atendimento ao cliente", score: 2, area: "Atendimento" },
      { label: "Processos manuais e repetitivos", score: 3, area: "Processos" },
      { label: "Captação e qualificação de leads", score: 2, area: "Comercial" },
      { label: "Relatórios e análise de dados", score: 2, area: "Dados" },
      { label: "Gestão interna e aprovações", score: 2, area: "Gestão" },
    ],
  },
  {
    key: "ia",
    msgs: ["A empresa já usa IA ou automação de algum jeito?"],
    opts: [
      { label: "Ainda não usa nada", score: 3 },
      { label: "Usa, mas sem resultado claro", score: 3 },
      { label: "Usa bem em algumas áreas", score: 2 },
      { label: "Tem operação estruturada em IA", score: 1 },
    ],
  },
  {
    key: "obstaculo",
    msgs: ["Última! Qual é o maior obstáculo que você enfrenta agora?"],
    opts: [
      { label: "Custo alto de operação", score: 2 },
      { label: "Time sobrecarregado", score: 2 },
      { label: "Perda de leads e oportunidades", score: 3 },
      { label: "Decisões sem dados confiáveis", score: 2 },
      { label: "Processos lentos e inconsistentes", score: 3 },
    ],
  },
];

const RESULTS = [
  {
    min: 0,
    max: 7,
    tier: "baixa",
    emoji: "🟡",
    titulo: "Operação com potencial represado",
    desc: "Sua operação tem margem real de melhoria. Já identifiquei áreas onde a IA pode reduzir custo e aumentar velocidade — sem precisar contratar mais ninguém.",
    pct: 32,
  },
  {
    min: 8,
    max: 11,
    tier: "media",
    emoji: "🟠",
    titulo: "Operação em transição",
    desc: "Você já saiu do zero, mas ainda depende muito de pessoas pra tarefas que um sistema deveria resolver. O próximo passo é claro e pode ser implementado em semanas.",
    pct: 62,
  },
  {
    min: 12,
    max: 20,
    tier: "alta",
    emoji: "🔴",
    titulo: "Operação pronta pra escalar com IA",
    desc: "Seu negócio tem estrutura pra aplicar IA de forma estratégica. Os resultados podem ser expressivos. Isso merece uma conversa aprofundada.",
    pct: 88,
  },
];

type Bubble = { id: number; kind: "bot" | "usr"; text: string };
type Control =
  | { kind: "none" }
  | { kind: "start" }
  | { kind: "opts"; opts: Opt[] }
  | { kind: "input"; placeholder: string; field: "name" | "whatsapp" };

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

let bubbleId = 0;
const nextId = () => ++bubbleId;

const DiagnosticoIG = () => {
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const leadName = params.get("nome") || params.get("name") || "";

  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [typing, setTyping] = useState(false);
  const [control, setControl] = useState<Control>({ kind: "none" });
  const [status, setStatus] = useState("online agora");
  const [resultCard, setResultCard] = useState<{
    res: typeof RESULTS[number];
    areas: string[];
    msg: string;
  } | null>(null);
  const [barPct, setBarPct] = useState(0);

  const stateRef = useRef({
    step: 0,
    score: 0,
    areas: [] as string[],
    answers: {} as Record<string, string>,
    uname: leadName,
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
      "Antes de a gente começar, me responde algumas perguntas rápidas pra eu entender melhor o seu cenário.",
      "Vai levar menos de 2 minutos. Bora? 👇",
    ];
    for (let i = 0; i < ABERTURA.length; i++) {
      const dur = i === 0 ? 600 : i === 1 ? 500 : i === 2 ? 900 : 700;
      await showTyping(dur);
      await addBubble(ABERTURA[i], "bot");
    }
    setControl({ kind: "start" });
  };

  const runStep = async () => {
    const s = stateRef.current;
    if (s.step < STEPS.length) {
      const step = STEPS[s.step];
      for (let i = 0; i < step.msgs.length; i++) {
        await showTyping(i === 0 ? 650 : 450);
        await addBubble(step.msgs[i], "bot");
      }
      setControl({ kind: "opts", opts: step.opts });
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
        "! Me passa seu WhatsApp pra eu enviar a análise completa.",
      "bot"
    );
    setControl({ kind: "input", placeholder: "(11) 99999-9999", field: "whatsapp" });
  };

  const handlePick = async (o: Opt) => {
    setControl({ kind: "none" });
    const s = stateRef.current;
    s.score += o.score;
    if (o.area) s.areas.push(o.area);
    s.answers[STEPS[s.step].key] = o.label;
    await addBubble(o.label, "usr");
    s.step++;
    await runStep();
  };

  const handleStart = async () => {
    setControl({ kind: "none" });
    await addBubble("Vamos!", "usr");
    await runStep();
  };

  const submitLead = async (whatsapp: string) => {
    const s = stateRef.current;
    const res = RESULTS.find((r) => s.score >= r.min && s.score <= r.max) || RESULTS[1];
    try {
      await supabase.functions.invoke("capture-quiz-lead", {
        body: {
          name: s.uname,
          whatsapp,
          score: s.score,
          result_tier: res.tier,
          areas: s.areas,
          answers: s.answers,
          source: "diagnostico-ig",
          lang: "pt",
          referrer: typeof document !== "undefined" ? document.referrer : null,
        },
      });
    } catch {
      // best effort — não bloqueia o redirect/WhatsApp
    }
    return res;
  };

  const handleInputSubmit = async (value: string, field: "name" | "whatsapp") => {
    const s = stateRef.current;
    setControl({ kind: "none" });
    await addBubble(value, "usr");
    if (field === "name") {
      s.uname = value;
      await askWA();
    } else {
      await showTyping(1200);
      await addBubble("Pronto! Aqui está o seu diagnóstico 👇", "bot");
      const res = await submitLead(value);
      const cl = s.areas.length ? s.areas : ["Processos", "Comercial"];
      const firstName = s.uname ? s.uname.split(" ")[0] : "";
      const msg = `Olá Cauã! Fiz o diagnóstico Fluxrow.${firstName ? " Me chamo " + firstName + "." : ""}`;
      setResultCard({ res, areas: cl, msg });
      setStatus("análise pronta ✓");
      scrollDown();
      setTimeout(() => setBarPct(res.pct), 500);
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

  return (
    <>
      <SEO
        title="Diagnóstico Fluxrow"
        description="Diagnóstico rápido de maturidade em IA da Fluxrow."
        canonicalPath="/diagnostico-ig"
        noindex
      />
      <style>{`
        .dig-wrap{background:#ece5dd;min-height:100vh;display:flex;flex-direction:column;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:430px;margin:0 auto}
        .dig-h{background:#075e54;padding:14px 16px;display:flex;align-items:center;gap:12px}
        .dig-av{width:42px;height:42px;border-radius:50%;background:#FF6B35;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:17px;flex-shrink:0}
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
        .dig-opts{background:#ece5dd;padding:10px 10px 14px;display:flex;flex-direction:column;gap:8px}
        .dig-ob{background:#fff;border:2px solid #ccc;border-radius:12px;padding:14px 18px;font-size:15px;color:#111;cursor:pointer;text-align:left;line-height:1.4;font-family:inherit;font-weight:500;-webkit-tap-highlight-color:transparent;transition:border-color .15s}
        .dig-ob:active{background:#fff5f2;border-color:#FF6B35}
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
        .dig-re{font-size:36px;text-align:center;margin-bottom:10px}
        .dig-rt{font-size:16px;font-weight:700;color:#111;text-align:center;margin-bottom:8px;line-height:1.3}
        .dig-rd{font-size:14px;color:#333;line-height:1.6;margin-bottom:14px;text-align:center}
        .dig-sb-bg{background:#e0e0e0;border-radius:20px;height:9px;overflow:hidden;margin-bottom:4px}
        .dig-sb-fill{height:100%;border-radius:20px;background:#FF6B35;transition:width 1.1s ease}
        .dig-sl{display:flex;justify-content:space-between;font-size:11.5px;color:#999;margin-bottom:14px}
        .dig-chips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px}
        .dig-chip{background:#fff3ef;color:#cc4d1a;border-radius:20px;padding:5px 12px;font-size:13px;font-weight:600;border:1.5px solid #ffd5c2}
        .dig-wab{display:block;width:100%;background:#25D366;color:#fff;border:none;border-radius:24px;padding:14px;font-size:15px;font-weight:700;text-align:center;cursor:pointer;text-decoration:none;font-family:inherit}
        .dig-wa-sub{text-align:center;font-size:12px;color:#999;margin-top:8px}
        @keyframes dig-fi{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
        @keyframes dig-bo{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
        html,body,#root{background:#ece5dd}
      `}</style>

      <div className="dig-wrap">
        <div className="dig-h">
          <div className="dig-av">C</div>
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
          {resultCard && (
            <div className="dig-rc">
              <div className="dig-re">{resultCard.res.emoji}</div>
              <div className="dig-rt">{resultCard.res.titulo}</div>
              <div className="dig-rd">{resultCard.res.desc}</div>
              <div className="dig-sb-bg">
                <div className="dig-sb-fill" style={{ width: `${barPct}%` }} />
              </div>
              <div className="dig-sl">
                <span>Início</span>
                <span>Maturidade plena</span>
              </div>
              <div className="dig-chips">
                {resultCard.areas.map((a) => (
                  <span key={a} className="dig-chip">
                    {a}
                  </span>
                ))}
              </div>
              <a
                className="dig-wab"
                href={`https://wa.me/5541992361868?text=${encodeURIComponent(resultCard.msg)}`}
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

        {control.kind === "input" && (
          <InputBar
            placeholder={control.placeholder}
            onSubmit={(v) => handleInputSubmit(v, control.field)}
          />
        )}
      </div>
    </>
  );
};

const InputBar = ({
  placeholder,
  onSubmit,
}: {
  placeholder: string;
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
        type="text"
        placeholder={placeholder}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") go();
        }}
        maxLength={100}
      />
      <button className="dig-sb" onClick={go} aria-label="Enviar">
        <svg viewBox="0 0 24 24">
          <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
        </svg>
      </button>
    </div>
  );
};

export default DiagnosticoIG;
