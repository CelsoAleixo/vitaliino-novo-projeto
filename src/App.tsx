import { Suspense, lazy, ComponentType } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { RouteTracker } from "@/components/shared/RouteTracker";
import { legacyIdToSlug } from "@/data/publications";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

// Retry wrapper for lazy imports — handles stale chunk errors after deploys
function lazyRetry(factory: () => Promise<{ default: ComponentType<any> }>) {
  return lazy(() =>
    factory().catch(() => {
      // Force reload once to get fresh assets
      const key = "chunk-retry";
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
      }
      return factory();
    })
  );
}

// Lazy load all pages for code splitting
const Index = lazyRetry(() => import("./pages/Index"));
const Escritorio = lazyRetry(() => import("./pages/Escritorio"));
const Equipe = lazyRetry(() => import("./pages/Equipe"));
const Atuacao = lazyRetry(() => import("./pages/Atuacao"));
const Publicacoes = lazyRetry(() => import("./pages/Publicacoes"));
const PublicacaoDetalhe = lazyRetry(() => import("./pages/PublicacaoDetalhe"));
const Portugal = lazyRetry(() => import("./pages/Portugal"));
const Contato = lazyRetry(() => import("./pages/Contato"));
const NotFound = lazyRetry(() => import("./pages/NotFound"));

// Áreas de Atuação subpages
const DireitoEmpresarial = lazyRetry(() => import("./pages/areas/DireitoEmpresarial"));
const NegociacaoJuridica = lazyRetry(() => import("./pages/areas/NegociacaoJuridica"));
const DireitoTributario = lazyRetry(() => import("./pages/areas/DireitoTributario"));
const DireitoTrabalhista = lazyRetry(() => import("./pages/areas/DireitoTrabalhista"));
const FamiliaSucessoes = lazyRetry(() => import("./pages/areas/FamiliaSucessoes"));
const DireitoCivil = lazyRetry(() => import("./pages/areas/DireitoCivil"));
const CreditoCarbono = lazyRetry(() => import("./pages/areas/CreditoCarbono"));
const RecuperacaoJudicial = lazyRetry(() => import("./pages/areas/RecuperacaoJudicial"));
const RecuperacaoJudicialAgro = lazyRetry(() => import("./pages/areas/RecuperacaoJudicialAgro"));
const LandingAgro = lazyRetry(() => import("./pages/LandingAgro"));

const queryClient = new QueryClient();

/**
 * LegacyRedirect component for handling old numeric publication URLs
 * Provides 301-style redirects to new SEO-friendly slug URLs
 */
function LegacyPublicationRedirect({ id }: { id: string }) {
  const numericId = parseInt(id, 10);
  
  if (!isNaN(numericId) && legacyIdToSlug[numericId]) {
    return <Navigate to={`/publicacoes/${legacyIdToSlug[numericId]}`} replace />;
  }
  
  // If not a valid legacy ID, go to publications list
  return <Navigate to="/publicacoes" replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider translations={translations}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <RouteTracker />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/escritorio" element={<Escritorio />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/atuacao" element={<Atuacao />} />
              <Route path="/atuacao/direito-empresarial" element={<DireitoEmpresarial />} />
              <Route path="/atuacao/negociacao-juridica" element={<NegociacaoJuridica />} />
              <Route path="/atuacao/direito-tributario" element={<DireitoTributario />} />
              <Route path="/atuacao/direito-trabalhista" element={<DireitoTrabalhista />} />
              <Route path="/atuacao/familia-e-sucessoes" element={<FamiliaSucessoes />} />
              <Route path="/atuacao/direito-civil" element={<DireitoCivil />} />
              <Route path="/atuacao/credito-de-carbono" element={<CreditoCarbono />} />
              <Route path="/atuacao/recuperacao-judicial" element={<RecuperacaoJudicial />} />
              <Route path="/protecao-rural" element={<RecuperacaoJudicialAgro />} />
              <Route path="/agronegocio" element={<LandingAgro />} />
              <Route path="/publicacoes" element={<Publicacoes />} />
              {/* New SEO-friendly slug-based publication URLs */}
              <Route path="/publicacoes/:slug" element={<PublicacaoDetalhe />} />
              <Route path="/portugal" element={<Portugal />} />
              <Route path="/contato" element={<Contato />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
