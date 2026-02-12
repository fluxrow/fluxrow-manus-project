
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy-loaded routes for code splitting
const Curso = React.lazy(() => import("./pages/Curso"));
const Modulos = React.lazy(() => import("./pages/Modulos"));
const Materiais = React.lazy(() => import("./pages/Materiais"));
const Conteudos = React.lazy(() => import("./pages/Conteudos"));
const Contato = React.lazy(() => import("./pages/Contato"));
const ConteudoPrompts = React.lazy(() => import("./pages/ConteudoPrompts"));
const ConteudoIAMarketing = React.lazy(() => import("./pages/ConteudoIAMarketing"));
const ConteudoRetratoIA = React.lazy(() => import("./pages/ConteudoRetratoIA"));
const ConteudoTDAH = React.lazy(() => import("./pages/ConteudoTDAH"));
const ConteudoYouTubeMonetizacao = React.lazy(() => import("./pages/ConteudoYouTubeMonetizacao"));
const ConteudoIAEscalar = React.lazy(() => import("./pages/ConteudoIAEscalar"));
const Modulo1Premium = React.lazy(() => import("./pages/Modulo1Premium"));
const Modulo2Premium = React.lazy(() => import("./pages/Modulo2Premium"));
const ClientPreview = React.lazy(() => import("./pages/ClientPreview"));
const Propostas = React.lazy(() => import("./pages/Propostas"));
const PropostaView = React.lazy(() => import("./pages/PropostaView"));
const PropostaMatchSolutions = React.lazy(() => import("./pages/PropostaMatchSolutions"));
const PropostaAmandaNeves = React.lazy(() => import("./pages/PropostaAmandaNeves"));
const PropostaBaboraSeguros = React.lazy(() => import("./pages/PropostaBaboraSeguros"));
const PropostaPromotrip = React.lazy(() => import("./pages/PropostaPromotrip"));
const PropostaEvoluaDigital = React.lazy(() => import("./pages/PropostaEvoluaDigital"));
const PropostaComunica = React.lazy(() => import("./pages/PropostaComunica"));
const ApresentacaoEvoluaDigital = React.lazy(() => import("./pages/ApresentacaoEvoluaDigital"));
const ContratoMatchSolutions = React.lazy(() => import("./pages/ContratoMatchSolutions"));
const ContratoAmandaNeves = React.lazy(() => import("./pages/ContratoAmandaNeves"));
const ContratoAssinatura = React.lazy(() => import("./pages/ContratoAssinatura"));
const ContratoPromotrip = React.lazy(() => import("./pages/ContratoPromotrip"));
const ResetContrato = React.lazy(() => import("./pages/ResetContrato"));
const RelatorioFachini = React.lazy(() => import("./pages/RelatorioFachini"));
const RelatorioSemanalFachini = React.lazy(() => import("./pages/RelatorioSemanalFachini"));
const AdminTestReportei = React.lazy(() => import("./pages/AdminTestReportei"));
const AdminRelatorios = React.lazy(() => import("./pages/AdminRelatorios"));
const PropostaTeresopolis = React.lazy(() => import("./pages/PropostaTeresopolis"));
const BriefingAlek = React.lazy(() => import("./pages/BriefingAlek"));
const PoliticaPrivacidade = React.lazy(() => import("./pages/PoliticaPrivacidade"));
const TermosDeUso = React.lazy(() => import("./pages/TermosDeUso"));

const queryClient = new QueryClient();

const LazyFallback = () => (
  <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LazyFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/curso" element={<Curso />} />
            <Route path="/modulos" element={<Modulos />} />
            <Route path="/materiais" element={<Materiais />} />
            <Route path="/conteudos" element={<Conteudos />} />
            <Route path="/conteudos/prompts-economia" element={<ConteudoPrompts />} />
            <Route path="/conteudos/produto-sugerido-ia" element={<ConteudoIAMarketing />} />
            <Route path="/conteudos/retrato-viral-ia" element={<ConteudoRetratoIA />} />
            <Route path="/conteudos/ia-tdah-organizacao" element={<ConteudoTDAH />} />
            <Route path="/conteudos/youtube-monetizacao-ia" element={<ConteudoYouTubeMonetizacao />} />
            <Route path="/conteudos/ia-escalar-negocio" element={<ConteudoIAEscalar />} />
            <Route path="/modulos/1-premium" element={<Modulo1Premium />} />
            <Route path="/modulos/2-premium" element={<Modulo2Premium />} />
            <Route path="/preview/:slug" element={<ClientPreview />} />
            <Route path="/propostas" element={<Propostas />} />
            <Route path="/proposta/:clienteSlug" element={<PropostaView />} />
            <Route path="/match-solutions" element={<PropostaMatchSolutions />} />
            <Route path="/amanda-neves-store" element={<PropostaAmandaNeves />} />
            <Route path="/babora-seguros" element={<PropostaBaboraSeguros />} />
            <Route path="/promotrip" element={<PropostaPromotrip />} />
            <Route path="/evolua-digital" element={<PropostaEvoluaDigital />} />
            <Route path="/propostas/comunica" element={<PropostaComunica />} />
            <Route path="/apresentacao-evolua-digital" element={<ApresentacaoEvoluaDigital />} />
            <Route path="/contrato-match-solutions" element={<ContratoMatchSolutions />} />
            <Route path="/contrato-amanda-neves" element={<ContratoAmandaNeves />} />
            <Route path="/contrato-promotrip" element={<ContratoPromotrip />} />
            <Route path="/contrato/:cliente/assinar" element={<ContratoAssinatura />} />
            <Route path="/admin/reset-contrato" element={<ResetContrato />} />
            <Route path="/admin/test-reportei" element={<AdminTestReportei />} />
            <Route path="/admin/relatorios" element={<AdminRelatorios />} />
            <Route path="/relatorio/fachini-mensal" element={<RelatorioFachini />} />
            <Route path="/relatorio/fachini-semanal" element={<RelatorioSemanalFachini />} />
            <Route path="/proposta-teresopolis" element={<PropostaTeresopolis />} />
            <Route path="/briefing-alek" element={<BriefingAlek />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            <Route path="/conteudos/:slug" element={<div>Página Individual de Conteúdo</div>} />
            <Route path="/contato" element={<Contato />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
