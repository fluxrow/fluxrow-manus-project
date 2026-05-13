import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";

const COPY = {
  pt: {
    title: "Acessar o Kit",
    subtitle: "Digite o email que você usou na compra. Vamos enviar um link de acesso.",
    email: "seu@email.com",
    cta: "Receber link de acesso",
    sending: "Enviando…",
    sent: "Link enviado",
    sentBody:
      "Se você comprou o Kit, vai receber um email em segundos com o link pra entrar.",
    sentHint: "Não chegou? Confira spam ou peça outro link em 1 minuto.",
    back: "Voltar",
    error: "Não consegui enviar agora. Tenta de novo em alguns segundos.",
  },
  en: {
    title: "Access the Kit",
    subtitle: "Enter the email you used at checkout. We'll send you an access link.",
    email: "you@email.com",
    cta: "Send access link",
    sending: "Sending…",
    sent: "Link sent",
    sentBody:
      "If you purchased the Kit, you'll receive an email within seconds with the link to sign in.",
    sentHint: "Didn't arrive? Check spam or request another link in 1 minute.",
    back: "Back",
    error: "Couldn't send right now. Try again in a few seconds.",
  },
} as const;

export default function Login() {
  const [params] = useSearchParams();
  const lang: "pt" | "en" = params.get("lang") === "en" ? "en" : "pt";
  const t = COPY[lang];
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: {
        emailRedirectTo: `${window.location.origin}/kit?lang=${lang}`,
        shouldCreateUser: true,
      },
    });
    setState(error ? "error" : "sent");
  };

  return (
    <div className="min-h-screen bg-[#080807] text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <Link
          to={`/produtos/ai-operator-kit?lang=${lang}`}
          className="text-white/40 hover:text-white/70 font-dm-mono text-xs mb-8 inline-block"
        >
          ← {t.back}
        </Link>

        {state === "sent" ? (
          <div className="text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-white mx-auto" />
            <h1 className="font-instrument-serif text-3xl">{t.sent}</h1>
            <p className="text-white/70 font-dm-mono text-sm">{t.sentBody}</p>
            <p className="text-white/40 font-dm-mono text-xs">{t.sentHint}</p>
          </div>
        ) : (
          <>
            <h1 className="font-instrument-serif text-4xl mb-3">{t.title}</h1>
            <p className="text-white/60 font-dm-mono text-sm mb-8">{t.subtitle}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.email}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-md font-dm-mono text-sm focus:outline-none focus:border-white/30"
                />
              </div>
              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full py-3 bg-white text-black font-dm-mono text-sm rounded-md hover:bg-white/90 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {state === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> {t.sending}
                  </>
                ) : (
                  t.cta
                )}
              </button>
              {state === "error" && (
                <p className="text-red-400 font-dm-mono text-xs text-center">{t.error}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
