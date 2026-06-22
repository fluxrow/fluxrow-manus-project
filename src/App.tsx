
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import LangBootstrap from "@/components/LangBootstrap";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
const Agencia = React.lazy(() => import("./pages/Agencia"));

// Lazy-loaded routes for code splitting
const Conteudos = React.lazy(() => import("./pages/Conteudos"));
const Contato = React.lazy(() => import("./pages/Contato"));
const ConteudoPrompts = React.lazy(() => import("./pages/ConteudoPrompts"));
const ConteudoIAMarketing = React.lazy(() => import("./pages/ConteudoIAMarketing"));
const ConteudoRetratoIA = React.lazy(() => import("./pages/ConteudoRetratoIA"));
const ConteudoTDAH = React.lazy(() => import("./pages/ConteudoTDAH"));
const ConteudoYouTubeMonetizacao = React.lazy(() => import("./pages/ConteudoYouTubeMonetizacao"));
const ConteudoIAEscalar = React.lazy(() => import("./pages/ConteudoIAEscalar"));
const ContentAIScaleBusiness = React.lazy(() => import("./pages/ContentAIScaleBusiness"));
const ConteudoClaudeCode = React.lazy(() => import("./pages/ConteudoClaudeCode"));
const ConteudoMCP = React.lazy(() => import("./pages/ConteudoMCP"));
const ConteudoClaudeSkills = React.lazy(() => import("./pages/ConteudoClaudeSkills"));
const ConteudoAICustomerSupport = React.lazy(() => import("./pages/ConteudoAICustomerSupport"));
const ClientPreview = React.lazy(() => import("./pages/ClientPreview"));
const Propostas = React.lazy(() => import("./pages/Propostas"));
const PropostaView = React.lazy(() => import("./pages/PropostaView"));
const PropostaMatchSolutions = React.lazy(() => import("./pages/PropostaMatchSolutions"));
const PropostaAmandaNeves = React.lazy(() => import("./pages/PropostaAmandaNeves"));
const PropostaBaboraSeguros = React.lazy(() => import("./pages/PropostaBaboraSeguros"));
const PropostaPromotrip = React.lazy(() => import("./pages/PropostaPromotrip"));
const PropostaEvoluaDigital = React.lazy(() => import("./pages/PropostaEvoluaDigital"));
const PropostaComunica = React.lazy(() => import("./pages/PropostaComunica"));
const PropostaBatavo = React.lazy(() => import("./pages/PropostaBatavo"));
const PropostaTeresopolis = React.lazy(() => import("./pages/PropostaTeresopolis"));
const PropostaGracieBarra = React.lazy(() => import("./pages/PropostaGracieBarra"));
const PropostaPositivo = React.lazy(() => import("./pages/PropostaPositivo"));
const PropostaEvolder = React.lazy(() => import("./pages/PropostaEvolder"));
const PropostaBuratiGT = React.lazy(() => import("./pages/PropostaBuratiGT"));
const ApresentacaoEvoluaDigital = React.lazy(() => import("./pages/ApresentacaoEvoluaDigital"));
const ContratoMatchSolutions = React.lazy(() => import("./pages/ContratoMatchSolutions"));
const ContratoAmandaNeves = React.lazy(() => import("./pages/ContratoAmandaNeves"));
const ContratoAssinatura = React.lazy(() => import("./pages/ContratoAssinatura"));
const ContratoPromotrip = React.lazy(() => import("./pages/ContratoPromotrip"));
const ResetContrato = React.lazy(() => import("./pages/ResetContrato"));
const BriefingAlek = React.lazy(() => import("./pages/BriefingAlek"));
const PropostaPublica = React.lazy(() => import("./pages/PropostaPublica"));
const PoliticaPrivacidade = React.lazy(() => import("./pages/PoliticaPrivacidade"));
const TermosDeUso = React.lazy(() => import("./pages/TermosDeUso"));
const AIOperatorKit = React.lazy(() => import("./pages/AIOperatorKit"));
const AIOperatorKitSales = React.lazy(() => import("./pages/AIOperatorKitSales"));
const ProdutosHub = React.lazy(() => import("./pages/ProdutosHub"));

const CheckoutReturn = React.lazy(() => import("./pages/CheckoutReturn"));
const Login = React.lazy(() => import("./pages/Login"));
const KitReader = React.lazy(() => import("./pages/KitReader"));
const Unsubscribe = React.lazy(() => import("./pages/Unsubscribe"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogPost = React.lazy(() => import("./pages/BlogPost"));
const Diagnostico = React.lazy(() => import("./pages/Diagnostico"));
const DiagnosticoIG = React.lazy(() => import("./pages/DiagnosticoIG"));

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
        <LangBootstrap />
        <Suspense fallback={<LazyFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/diagnostico" element={<Diagnostico />} />
            <Route path="/diagnostico-ig" element={<DiagnosticoIG />} />
            <Route path="/diagn%C3%B3stico-ig" element={<DiagnosticoIG />} />
            <Route path="/diagn%C3%B3stico-IG" element={<DiagnosticoIG />} />
            <Route path="/agencia" element={<Agencia />} />
            {/* Curso descontinuado — redirect 301 para /produtos */}
            <Route path="/curso" element={<Navigate to="/produtos" replace />} />
            <Route path="/modulos" element={<Navigate to="/produtos" replace />} />
            <Route path="/materiais" element={<Navigate to="/produtos" replace />} />
            <Route path="/modulos/1-premium" element={<Navigate to="/produtos" replace />} />
            <Route path="/modulos/2-premium" element={<Navigate to="/produtos" replace />} />
            <Route path="/modulos/3-premium" element={<Navigate to="/produtos" replace />} />
            <Route path="/curso-ia-operator" element={<Navigate to="/produtos" replace />} />
            <Route path="/produtos/operator-curso" element={<Navigate to="/produtos" replace />} />
            <Route path="/conteudos" element={<Conteudos />} />
            <Route path="/conteudos/prompts-economia" element={<ConteudoPrompts />} />
            <Route path="/conteudos/produto-sugerido-ia" element={<ConteudoIAMarketing />} />
            <Route path="/conteudos/retrato-viral-ia" element={<ConteudoRetratoIA />} />
            <Route path="/conteudos/ia-tdah-organizacao" element={<ConteudoTDAH />} />
            <Route path="/conteudos/youtube-monetizacao-ia" element={<ConteudoYouTubeMonetizacao />} />
            <Route path="/conteudos/ia-escalar-negocio" element={<ConteudoIAEscalar />} />
            <Route path="/content/ai-scale-business" element={<ContentAIScaleBusiness />} />
            <Route path="/conteudos/claude-code" element={<ConteudoClaudeCode />} />
            <Route path="/conteudos/mcp-claude" element={<ConteudoMCP />} />
            <Route path="/conteudos/claude-skills" element={<ConteudoClaudeSkills />} />
            <Route path="/conteudos/ai-for-customer-support" element={<ConteudoAICustomerSupport />} />
            <Route path="/preview/:slug" element={<ClientPreview />} />
            <Route path="/propostas" element={<Propostas />}>
              <Route path="match-solutions" element={<PropostaMatchSolutions />} />
              <Route path="amanda-neves" element={<PropostaAmandaNeves />} />
              <Route path="babora-seguros" element={<PropostaBaboraSeguros />} />
              <Route path="promotrip" element={<PropostaPromotrip />} />
              <Route path="evolua-digital" element={<PropostaEvoluaDigital />} />
              <Route path="comunica" element={<PropostaComunica />} />
              <Route path="batavo" element={<PropostaBatavo />} />
              <Route path="teresopolis" element={<PropostaTeresopolis />} />
              <Route path="gracie-barra" element={<PropostaGracieBarra />} />
              <Route path="positivo" element={<PropostaPositivo />} />
              <Route path="evolder" element={<PropostaEvolder />} />
              <Route path="burati-gt" element={<PropostaBuratiGT />} />
              <Route path="contrato-match-solutions" element={<ContratoMatchSolutions />} />
              <Route path="contrato-amanda-neves" element={<ContratoAmandaNeves />} />
              <Route path="contrato-promotrip" element={<ContratoPromotrip />} />
              <Route path="contrato/:cliente/assinar" element={<ContratoAssinatura />} />
              <Route path=":clienteSlug" element={<PropostaView />} />
            </Route>
            <Route path="/apresentacao-evolua-digital" element={<ApresentacaoEvoluaDigital />} />
            <Route path="/admin/reset-contrato" element={<ResetContrato />} />
            <Route path="/briefing-alek" element={<BriefingAlek />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            <Route path="/conteudos/:slug" element={<div>Página Individual de Conteúdo</div>} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/p/:slug" element={<PropostaPublica />} />
            {/* Login + Kit gated reader */}
            <Route path="/login" element={<Login />} />
            <Route path="/kit" element={<KitReader />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route path="/kit/content" element={<AIOperatorKit />} />
            {/* Hub de produtos + Kit bilingue */}
            <Route path="/produtos" element={<ProdutosHub />} />
            <Route path="/produtos/ai-operator-kit" element={<AIOperatorKitSales />} />
            <Route path="/produtos/kit-operador-ia" element={<Navigate to="/produtos/ai-operator-kit?lang=pt" replace />} />
            <Route path="/checkout/return" element={<CheckoutReturn />} />
            {/* Blog automático bilíngue */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
