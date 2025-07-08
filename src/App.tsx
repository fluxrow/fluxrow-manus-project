
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Modulos from "./pages/Modulos";
import Materiais from "./pages/Materiais";
import Conteudos from "./pages/Conteudos";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import ConteudoPrompts from "./pages/ConteudoPrompts";
import ConteudoIAMarketing from "./pages/ConteudoIAMarketing";
import ConteudoRetratoIA from "./pages/ConteudoRetratoIA";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/modulos" element={<Modulos />} />
          <Route path="/materiais" element={<Materiais />} />
          <Route path="/conteudos" element={<Conteudos />} />
          <Route path="/conteudos/prompts-economia" element={<ConteudoPrompts />} />
          <Route path="/conteudos/produto-sugerido-ia" element={<ConteudoIAMarketing />} />
          <Route path="/conteudos/retrato-viral-ia" element={<ConteudoRetratoIA />} />
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
