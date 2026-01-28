
import { Toaster } from "@/components/ui/toaster";
import PropostaPromotrip from "./pages/PropostaPromotrip";
import PropostaComunica from "./pages/PropostaComunica";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Curso from "./pages/Curso";
import Modulos from "./pages/Modulos";
import Materiais from "./pages/Materiais";
import Conteudos from "./pages/Conteudos";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import ConteudoPrompts from "./pages/ConteudoPrompts";
import ConteudoIAMarketing from "./pages/ConteudoIAMarketing";
import ConteudoRetratoIA from "./pages/ConteudoRetratoIA";
import ConteudoTDAH from "./pages/ConteudoTDAH";
import ConteudoYouTubeMonetizacao from "./pages/ConteudoYouTubeMonetizacao";
import ConteudoIAEscalar from "./pages/ConteudoIAEscalar";
import Modulo1Premium from "./pages/Modulo1Premium";
import ClientPreview from "./pages/ClientPreview";
import Propostas from "./pages/Propostas";
import PropostaView from "./pages/PropostaView";
import PropostaMatchSolutions from "./pages/PropostaMatchSolutions";
import PropostaAmandaNeves from "./pages/PropostaAmandaNeves";
import PropostaBaboraSeguros from "./pages/PropostaBaboraSeguros";
import PropostaEvoluaDigital from "./pages/PropostaEvoluaDigital";
import ApresentacaoEvoluaDigital from "./pages/ApresentacaoEvoluaDigital";
import ContratoMatchSolutions from "./pages/ContratoMatchSolutions";
import ContratoAmandaNeves from "./pages/ContratoAmandaNeves";
import ContratoAssinatura from "./pages/ContratoAssinatura";
import ResetContrato from "./pages/ResetContrato";
import RelatorioFachini from "./pages/RelatorioFachini";
import RelatorioSemanalFachini from "./pages/RelatorioSemanalFachini";
import AdminTestReportei from "./pages/AdminTestReportei";
import AdminRelatorios from "./pages/AdminRelatorios";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/contrato/:cliente/assinar" element={<ContratoAssinatura />} />
          <Route path="/admin/reset-contrato" element={<ResetContrato />} />
          <Route path="/admin/test-reportei" element={<AdminTestReportei />} />
          <Route path="/admin/relatorios" element={<AdminRelatorios />} />
          <Route path="/relatorio/fachini-mensal" element={<RelatorioFachini />} />
          <Route path="/relatorio/fachini-semanal" element={<RelatorioSemanalFachini />} />
          <Route path="/conteudos/:slug" element={<div>Página Individual de Conteúdo</div>} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
