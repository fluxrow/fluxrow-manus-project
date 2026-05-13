import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const COPY = {
  pt: {
    title: "Pagamento confirmado",
    body: "Confira seu email: enviamos um link de acesso ao Kit. Basta clicar pra entrar — sem senha.",
    sessionLabel: "ID da sessão:",
    home: "Voltar para a home",
    wa: "Tirar dúvida no WhatsApp",
    waMsg: "Acabei de comprar o AI Operator Kit. Quero confirmar o acesso.",
    notFound: "Sessão não encontrada",
    back: "Voltar para o produto",
    noEmail: "Não recebeu o email em alguns minutos? Verifique a caixa de spam ou nos chame no WhatsApp.",
  },
  en: {
    title: "Payment confirmed",
    body: "Check your email: we sent you a Kit access link. Just click to sign in — no password.",
    sessionLabel: "Session ID:",
    home: "Back to home",
    wa: "Ask on WhatsApp",
    waMsg: "I just purchased the AI Operator Kit. I'd like to confirm my access.",
    notFound: "Session not found",
    back: "Back to product",
    noEmail: "Didn't get the email after a few minutes? Check your spam folder or message us on WhatsApp.",
  },
} as const;

export default function CheckoutReturn() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const langParam = searchParams.get("lang");
  const lang: "pt" | "en" = langParam === "en" ? "en" : "pt";
  const t = COPY[lang];

  return (
    <div className="min-h-screen bg-[#080807] text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center space-y-6">
        {sessionId ? (
          <>
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
            <h1 className="font-instrument-serif text-4xl md:text-5xl">{t.title}</h1>
            <p className="text-white/70 font-dm-mono text-sm">{t.body}</p>
            <p className="text-white/40 font-dm-mono text-xs">{t.noEmail}</p>
            <p className="text-white/30 font-dm-mono text-[10px] break-all">
              {t.sessionLabel} {sessionId}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to={`/produtos/ai-operator-kit?lang=${lang}`}
                className="px-6 py-3 border border-white/20 hover:border-white/40 transition rounded-md font-dm-mono text-sm"
              >
                {t.home}
              </Link>
              <a
                href={`https://wa.me/5541992361868?text=${encodeURIComponent(t.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black transition rounded-md font-dm-mono text-sm"
              >
                {t.wa}
              </a>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-instrument-serif text-3xl">{t.notFound}</h1>
            <Link
              to={`/produtos/ai-operator-kit?lang=${lang}`}
              className="text-emerald-400 underline font-dm-mono text-sm"
            >
              {t.back}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
