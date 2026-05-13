import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutReturn() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen bg-[#080807] text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center space-y-6">
        {sessionId ? (
          <>
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
            <h1 className="font-instrument-serif text-4xl md:text-5xl">Pagamento concluído</h1>
            <p className="text-white/70 font-dm-mono text-sm">
              Em instantes você receberá um email com o acesso ao curso e instruções.
            </p>
            <p className="text-white/40 font-dm-mono text-xs break-all">
              ID da sessão: {sessionId}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="px-6 py-3 border border-white/20 hover:border-white/40 transition rounded-md font-dm-mono text-sm"
              >
                Voltar para a home
              </Link>
              <a
                href="https://wa.me/5541992361868?text=Acabei%20de%20comprar%20o%20Curso%20IA%20Operator.%20Quero%20agendar%20a%20reuni%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black transition rounded-md font-dm-mono text-sm"
              >
                Agendar reunião pelo WhatsApp
              </a>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-instrument-serif text-3xl">Sessão não encontrada</h1>
            <Link to="/curso-ia-operator" className="text-emerald-400 underline font-dm-mono text-sm">
              Voltar para a página do curso
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
