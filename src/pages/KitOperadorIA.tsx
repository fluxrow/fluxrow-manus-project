import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import BackToHomeButton from "@/components/ui/BackToHomeButton";
import { ArrowRight, Languages } from "lucide-react";
import { trackEvent } from "@/utils/tracking";

const KitOperadorIA = () => {
  return (
    <div className="min-h-screen bg-[#080807] text-white">
      <SEO
        title="Kit Operador IA — instale IA na sua operação em 7 dias"
        description="A versão em português do AI Operator Kit. Sistema de 5 camadas para operar IA no seu negócio: Cérebro, Fila, Publicador, DM e Receita."
        path="/produtos/kit-operador-ia"
      />
      <Helmet>
        <link rel="alternate" hrefLang="pt-BR" href="https://fluxrow.com/produtos/kit-operador-ia" />
        <link rel="alternate" hrefLang="en" href="https://fluxrow.com/produtos/ai-operator-kit" />
        <link rel="alternate" hrefLang="x-default" href="https://fluxrow.com/produtos" />
      </Helmet>
      <BackToHomeButton />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
            Kit Operador IA · Português
          </p>
          <h1 className="text-5xl md:text-6xl font-serif leading-[1.05] mb-6">
            Instale IA na sua operação em 7 dias.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            O sistema completo que usamos para transformar conhecimento de IA em receita recorrente. Sem virar engenheiro, sem montar agência, sem 40 horas de curso.
          </p>
        </header>

        <section className="grid md:grid-cols-5 gap-3 mb-16">
          {[
            { n: "01", t: "Cérebro" },
            { n: "02", t: "Fila" },
            { n: "03", t: "Publicador" },
            { n: "04", t: "DM Engine" },
            { n: "05", t: "Receita" },
          ].map((l) => (
            <div key={l.n} className="border border-white/10 p-4 rounded-sm">
              <p className="font-mono text-xs text-white/40 mb-2">{l.n}</p>
              <p className="text-sm">{l.t}</p>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-serif mb-6">O que vem dentro</h2>
          <ul className="space-y-3 text-white/75">
            <li>• Arquitetura completa do sistema de 5 camadas</li>
            <li>• 3 caminhos de execução (Rápido / Estável / Escala)</li>
            <li>• 15 prompts prontos pra copiar e colar</li>
            <li>• Sequência de 5 mensagens DM no ManyChat</li>
            <li>• Repositório do Operador (skills + workflows n8n)</li>
            <li>• Matemática da receita até R$ 25k/mês</li>
            <li>• Plano de upgrade pós primeiras 10, 30 e 100 vendas</li>
          </ul>
        </section>

        <section className="border border-white/15 bg-white/[0.03] p-8 rounded-sm mb-12">
          <div className="flex items-start gap-3 mb-4">
            <Languages className="w-5 h-5 text-white/60 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium mb-2">Material entregue em inglês</h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Os documentos, prompts e templates do Kit estão em inglês — é a língua do ecossistema (Claude, ManyChat, n8n). Esta página resume em português; o conteúdo completo segue o padrão internacional.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/produtos/ai-operator-kit"
            onClick={() => trackEvent("kit_cta_click", { source: "kit_pt", destination: "kit_en" })}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-sm hover:bg-white/90 transition-colors"
          >
            Acessar o Kit (EN) <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://wa.me/5541992361868?text=Quero+saber+mais+sobre+o+Kit+Operador+IA"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { source: "kit_pt" })}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:border-white/40 transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
};

export default KitOperadorIA;
