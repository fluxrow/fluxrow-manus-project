import { useEffect, useRef, useState } from "react";
import cauaAvatar from "@/assets/caua-avatar.png.asset.json";
import SEO from "@/components/SEO";

type Opt = { label: string; val: string };
type Step = {
  key: "negocio" | "canal" | "dor" | "volume" | "sistema" | "objetivo";
  msgs: string[];
  opts: Opt[];
  multi?: boolean;
};

const STEPS: Step[] = [
  {
    key: "negocio",
    msgs: [
      "Pra começar, qual é o seu negócio principal?",
      "O que você já faz hoje ou quer transformar.",
    ],
    opts: [
      { label: "🏥 Saúde — dentista, médico, terapeuta", val: "Saúde (dentista, médico, terapeuta)" },
      { label: "🎓 Educação, mentoria ou coach", val: "Educação / Mentoria / Coach" },
      { label: "💼 Serviços — agência, consultor, freelancer", val: "Serviços (agência, consultor, freelancer)" },
      { label: "🛍️ Comércio ou produto físico", val: "Comércio / Produto físico" },
      { label: "✦ Outro", val: "Outro negócio" },
    ],
  },
  {
    key: "canal",
    msgs: ["Como você vende hoje?", "Pode marcar mais de uma."],
    multi: true,
    opts: [
      { label: "👥 Indicação de clientes", val: "Indicação de clientes" },
      { label: "📱 Instagram / redes sociais", val: "Instagram / redes sociais" },
      { label: "🎯 Anúncios pagos (Meta, Google)", val: "Anúncios pagos (Meta, Google)" },
      { label: "💬 WhatsApp direto", val: "WhatsApp direto" },
      { label: "🌱 Ainda não vendo / estou começando", val: "Ainda não vendo / estou começando" },
    ],
  },
  {
    key: "dor",
    msgs: ["Quais são suas maiores dores com leads?", "Pode marcar mais de uma."],
    multi: true,
    opts: [
      { label: "⏱️ Demoro pra responder e perco o lead", val: "Demoro pra responder e perco o lead" },
      { label: "🔕 Não faço follow-up, esqueço dos leads", val: "Não faço follow-up, esqueço dos leads" },
      { label: "📊 Não sei quais leads estão quentes", val: "Não sei quais leads estão quentes" },
      { label: "🔁 Gasto muito tempo em conversas repetitivas", val: "Gasto muito tempo em conversas repetitivas" },
      { label: "🔍 Não tenho leads suficientes ainda", val: "Não tenho leads suficientes ainda" },
    ],
  },
  {
    key: "volume",
    msgs: ["Quantos leads chegam por mês?", "WhatsApp, DM, formulários — tudo junto."],
    opts: [
      { label: "👤 Menos de 20 por mês", val: "Menos de 20 leads/mês" },
      { label: "👥 Entre 20 e 100 por mês", val: "Entre 20 e 100 leads/mês" },
      { label: "🚀 Mais de 100 por mês", val: "Mais de 100 leads/mês" },
    ],
  },
  {
    key: "sistema",
    msgs: ["Você organiza seus leads de alguma forma?"],
    opts: [
      { label: "🧠 Nada — tudo na cabeça ou no WhatsApp", val: "Nada — tudo na cabeça ou no WhatsApp" },
      { label: "📋 Planilha", val: "Uso planilha" },
      { label: "⚙️ Algum CRM ou app", val: "Uso algum CRM ou app" },
    ],
  },
  {
    key: "objetivo",
    msgs: ["O que você mais precisa agora?", "Pode marcar mais de uma."],
    multi: true,
    opts: [
      { label: "🚀 Vender mais a minha mentoria/serviço", val: "Vender mais a minha mentoria ou serviço" },
      { label: "🤖 Automatizar o atendimento e ganhar tempo", val: "Automatizar o atendimento e ganhar tempo" },
      { label: "📌 Organizar os leads e parar de perder venda", val: "Organizar os leads e parar de perder venda" },
      { label: "📅 Ter uma régua de follow-up automática", val: "Ter uma régua de follow-up automática" },
    ],
  },
];

type Fit = "alto" | "medio" | "baixo";

const FIT: Record<Fit, { emoji: string; badge: string; title: (n: string) => string; desc: string; recs: string[] }> = {
  alto: {
    emoji: "⚡",
    badge: "FIT ALTO — pronto pra escalar",
    title: (n) => `${n ? n + ", " : ""}você está perdendo dinheiro agora`,
    desc: "Seu perfil mostra que os leads chegam mas a operação não acompanha. Um agente de WhatsApp com kanban mudaria sua conversão já na primeira semana.",
    recs: [
      "Agente respondendo e qualificando leads 24h no WhatsApp",
      "Kanban de vendas com visibilidade total do funil",
      "Régua de follow-up automática até o fechamento",
    ],
  },
  medio: {
    emoji: "🎯",
    badge: "FIT MÉDIO — hora de organizar",
    title: (n) => `${n ? n + ", " : ""}você está pronto pro próximo passo`,
    desc: "Seus leads chegam mas não são trabalhados do jeito certo. Com follow-up e organização você aumenta a conversão sem precisar gerar mais tráfego.",
    recs: [
      "Follow-up automático nos leads que sumiram",
      "Organização por etapas no kanban de vendas",
      "Agente treinado com as objeções do seu nicho",
    ],
  },
  baixo: {
    emoji: "🌱",
    badge: "PRIMEIRO: construir a base",
    title: (n) => `${n ? n + ", " : ""}vamos construir a base certa`,
    desc: "Antes de automatizar, precisamos garantir um fluxo consistente de leads. Quando isso estiver funcionando, a automação vai multiplicar o resultado.",
    recs: [
      "Funil de captação com anúncio + agente qualificador",
      "Estratégia de conteúdo para gerar leads orgânicos",
      "Sistema pronto para escalar quando os leads chegarem",
    ],
  },
};

function calcFit(answers: Record<string, string>): Fit {
  let score = 0;
  const v = answers.volume || "";
  if (v.includes("100")) score += 3;
  else if (v.includes("20 e 100")) score += 2;
  else score += 1;
  const s = answers.sistema || "";
  if (s.includes("Nada")) score += 2;
  else if (s.includes("planilha")) score += 1;
  const d = answers.dor || "";
  if (d.includes("responder") || d.includes("follow")) score += 2;
  const c = answers.canal || "";
  if (c.includes("Anúncios")) score += 2;
  if (score >= 6) return "alto";
  if (score >= 3) return "medio";
  return "baixo";
}

type Bubble = { id: number; kind: "bot" | "usr"; text: string };
type Control =
  | { kind: "none" }
  | { kind: "start" }
  | { kind: "opts"; opts: Opt[] }
  | { kind: "multi"; opts: Opt[] }
  | { kind: "input"; placeholder: string; field: "name" | "whatsapp" };

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
let bid = 0;
const nextId = () => ++bid;

const Diagnostico = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "hide-sofia-widget-diag";
    style.textContent = `iframe[src*="gptmaker"], #click-plug-to-support, [id*="plug-to-support"], div[id*="gptmaker"], div[class*="gptmaker"] { display: none !important; visibility: hidden !important; }`;
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);

  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const leadName = params.get("nome") || params.get("name") || "";

  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [typing, setTyping] = useState(false);
  const [control, setControl] = useState<Control>({ kind: "none" });
  const [status, setStatus] = useState("online agora");
  const [report, setReport] = useState<null | { fit: Fit; whatsappMsg: string }>(null);

  const stateRef = useRef({
    step: 0,
    answers: {} as Record<string, string>,
    uname: leadName,
    whatsapp: "",
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
    const greeting = leadName ? "Opa " + leadName.split(" ")[0] + "! Tudo certo por aí?" : "Opa! Tudo certo por aí?";
    const ABERTURA = [
      greeting + " 👋",
      "Aqui é o Cauã, da Fluxrow.",
      "Vou te fazer 6 perguntas rápidas pra entender seu cenário com leads e WhatsApp, e te devolver um diagnóstico de verdade — com próximos passos práticos.",
      "Leva menos de 2 minutos. Bora? 👇",
    ];
    for (let i = 0; i < ABERTURA.length; i++) {
      await showTyping(i === 0 ? 1000 : 900);
      await addBubble(ABERTURA[i], "bot");
      await wait(400);
    }
    setControl({ kind: "start" });
  };

  const runStep = async () => {
    const s = stateRef.current;
    if (s.step < STEPS.length) {
      const step = STEPS[s.step];
      for (let i = 0; i < step.msgs.length; i++) {
        await showTyping(i === 0 ? 950 : 700);
        await addBubble(step.msgs[i], "bot");
        if (i < step.msgs.length - 1) await wait(300);
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
      "Ótimo" + (s.uname ? ", " + s.uname.split(" ")[0] : "") + "! Me passa seu WhatsApp pra eu te chamar depois se fizer sentido.",
      "bot"
    );
    setControl({ kind: "input", placeholder: "(41) 99999-0000", field: "whatsapp" });
  };

  const handlePick = async (o: Opt) => {
    setControl({ kind: "none" });
    const s = stateRef.current;
    s.answers[STEPS[s.step].key] = o.val;
    await addBubble(o.label, "usr");
    s.step++;
    await runStep();
  };

  const handleMultiConfirm = async (selected: Opt[]) => {
    setControl({ kind: "none" });
    const s = stateRef.current;
    s.answers[STEPS[s.step].key] = selected.map((o) => o.val).join(" + ");
    await addBubble(selected.map((o) => o.label).join(", "), "usr");
    s.step++;
    await runStep();
  };

  const handleStart = async () => {
    setControl({ kind: "none" });
    await addBubble("Bora!", "usr");
    await runStep();
  };

  const buildMsg = (fit: Fit) => {
    const s = stateRef.current;
    return [
      `Olá Cauã! Fiz o diagnóstico no site 👇`,
      ``,
      `*Nome:* ${s.uname}`,
      `*Negócio:* ${s.answers.negocio || "-"}`,
      `*Vende por:* ${s.answers.canal || "-"}`,
      `*Maiores dores:* ${s.answers.dor || "-"}`,
      `*Leads/mês:* ${s.answers.volume || "-"}`,
      `*Sistema atual:* ${s.answers.sistema || "-"}`,
      `*Precisa de:* ${s.answers.objetivo || "-"}`,
      ``,
      `*Diagnóstico: FIT ${fit.toUpperCase()}*`,
      ``,
      `Quero entender como isso funciona!`,
    ].join("\n");
  };

  const handleInputSubmit = async (value: string, field: "name" | "whatsapp") => {
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
      const fit = calcFit(s.answers);
      setReport({ fit, whatsappMsg: buildMsg(fit) });
      setStatus("análise pronta ✓");
      scrollDown();
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

  const fitData = report ? FIT[report.fit] : null;
  const firstName = stateRef.current.uname ? stateRef.current.uname.split(" ")[0] : "";

  return (
    <>
      <SEO
        title="Diagnóstico gratuito — Fluxrow"
        description="Descubra o que está travando suas vendas no WhatsApp e o que fazer agora."
        path="/diagnostico"
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
        .dig-badge{display:block;text-align:center;font-size:11px;font-weight:700;color:#FF6B35;text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px}
        .dig-rt{font-size:17px;font-weight:700;color:#111;text-align:center;margin-bottom:8px;line-height:1.3}
        .dig-rd{font-size:13.5px;color:#444;line-height:1.6;margin-bottom:14px;text-align:center}
        .dig-section-title{font-size:12px;font-weight:700;color:#FF6B35;text-transform:uppercase;letter-spacing:.06em;margin:18px 0 10px}
        .dig-rec{display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-top:1px solid #eee;font-size:13.5px;color:#333;line-height:1.5}
        .dig-rec-dot{width:6px;height:6px;border-radius:50%;background:#FF6B35;flex-shrink:0;margin-top:7px}
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
            <div key={b.id} className={`dig-bb ${b.kind}`}>{b.text}</div>
          ))}
          {typing && (
            <div className="dig-tp">
              <div className="dig-dots"><span></span><span></span><span></span></div>
            </div>
          )}
          {report && fitData && (
            <div className="dig-rc">
              <div className="dig-re">{fitData.emoji}</div>
              <span className="dig-badge">{fitData.badge}</span>
              <div className="dig-rt">{fitData.title(firstName)}</div>
              <div className="dig-rd">{fitData.desc}</div>

              <div className="dig-section-title">Próximos passos pra você</div>
              {fitData.recs.map((r, i) => (
                <div key={i} className="dig-rec">
                  <div className="dig-rec-dot"></div>
                  <span>{r}</span>
                </div>
              ))}

              <a
                className="dig-wab"
                href={`https://wa.me/5541992361868?text=${encodeURIComponent(report.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Receber meu diagnóstico no WhatsApp
              </a>
              <p className="dig-wa-sub">Você vai pro WhatsApp com as respostas já formatadas.</p>
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
              <button key={o.val} className="dig-ob" onClick={() => handlePick(o)}>
                {o.label}
              </button>
            ))}
          </div>
        )}

        {control.kind === "multi" && (
          <MultiPicker opts={control.opts} onConfirm={handleMultiConfirm} />
        )}

        {control.kind === "input" && (
          <InputBar
            placeholder={control.placeholder}
            type={control.field === "whatsapp" ? "tel" : "text"}
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
        onKeyDown={(e) => { if (e.key === "Enter") go(); }}
        maxLength={200}
      />
      <button className="dig-sb" onClick={go} aria-label="Enviar">
        <svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
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
  const toggle = (val: string) => {
    setPicked((p) => (p.includes(val) ? p.filter((x) => x !== val) : [...p, val]));
  };
  const confirm = () => {
    if (!picked.length) return;
    onConfirm(opts.filter((o) => picked.includes(o.val)));
  };
  return (
    <div className="dig-opts">
      {opts.map((o) => {
        const on = picked.includes(o.val);
        return (
          <button
            key={o.val}
            className="dig-ob"
            style={on ? { borderColor: "#FF6B35", background: "#fff5f2" } : undefined}
            onClick={() => toggle(o.val)}
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

export default Diagnostico;
