
import * as React from 'react'
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { FavoritesProvider } from "@/hooks/useFavorites";
import { useCrossBrowserOptimization } from "@/hooks/useCrossBrowserOptimization";
import { useChromebookOptimization } from "@/hooks/useChromebookOptimization";
import ErrorBoundary from "@/components/ErrorBoundary";
import PageTransition from "@/components/navigation/PageTransition";
import MatrixCursorEffect from "@/components/effects/MatrixCursorEffect";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import MainCategoryPage from "./pages/MainCategoryPage";
import ToolDetail from "./pages/ToolDetail";
import SimilarToolsPage from "./pages/SimilarTools";
import FavoritesPage from "./pages/FavoritesPage";
import ToolSubmission from "./pages/ToolSubmission";
import NotFound from "./pages/NotFound";
import DisclaimersPage from "./pages/DisclaimersPage";
import OurStoryPage from "./pages/OurStoryPage";
import FloatingCloneButton from "./components/FloatingCloneButton";
import WelcomeVoiceSystem from "./components/WelcomeVoiceSystem";
import AIToolsHub from "./pages/AIToolsHub";
import AIAgentsDirectory from "./pages/AIAgentsDirectory";
import ChatGPTAlternatives from "./pages/ChatGPTAlternatives";
import BlogPage from "./pages/BlogPage";
import GamingEntertainmentPage from "./pages/GamingEntertainmentPage";

const queryClient = new QueryClient();

// Animated routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/main-category/:mainCategoryName" element={<MainCategoryPage />} />
        <Route path="/tool/:toolId" element={<ToolDetail />} />
        <Route path="/:toolSlug" element={<ToolDetail />} />
        <Route path="/similar-tools/:toolId" element={<SimilarToolsPage />} />
        <Route path="/ai-tools-hub" element={<AIToolsHub />} />
        <Route path="/ai-agents-directory" element={<AIAgentsDirectory />} />
        <Route path="/chatgpt-alternatives" element={<ChatGPTAlternatives />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gaming-entertainment" element={<GamingEntertainmentPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/disclaimers" element={<DisclaimersPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/submit-tool" element={<ToolSubmission />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

function App() {
  // Initialize cross-browser optimizations
  useCrossBrowserOptimization();
  
  // Initialize Chromebook-specific optimizations
  useChromebookOptimization();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <FavoritesProvider>
            <TooltipProvider>
              <Toaster />
              <WelcomeVoiceSystem />
              <MatrixCursorEffect />
              <BrowserRouter>
                <AnimatedRoutes />
                
                {/* Tiny floating clone button - hides on scroll */}
                <FloatingCloneButton />
              </BrowserRouter>
            </TooltipProvider>
          </FavoritesProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
