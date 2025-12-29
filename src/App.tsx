
import * as React from 'react'
import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { FavoritesProvider } from "@/hooks/useFavorites";
import { VideoManagerProvider } from "@/hooks/useGlobalVideoManager";
import { useCrossBrowserOptimization } from "@/hooks/useCrossBrowserOptimization";
import { useChromebookOptimization } from "@/hooks/useChromebookOptimization";
import { usePrefetchRoutes } from "@/hooks/usePrefetch";
import ErrorBoundary from "@/components/ErrorBoundary";
import MatrixCursorEffect from "@/components/effects/MatrixCursorEffect";

// Eager load - critical path (home page AND disclaimer gate for instant first load)
import Index from "./pages/Index";
import DisclaimerGate from "./pages/DisclaimerGate";

// Lazy load - secondary pages for faster initial load
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const MainCategoryPage = lazy(() => import("./pages/MainCategoryPage"));
const ToolDetail = lazy(() => import("./pages/ToolDetail"));
const SimilarToolsPage = lazy(() => import("./pages/SimilarTools"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ToolSubmission = lazy(() => import("./pages/ToolSubmission"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DisclaimersPage = lazy(() => import("./pages/DisclaimersPage"));
const OurStoryPage = lazy(() => import("./pages/OurStoryPage"));
const AIToolsHub = lazy(() => import("./pages/AIToolsHub"));
const AIAgentsDirectory = lazy(() => import("./pages/AIAgentsDirectory"));
const ChatGPTAlternatives = lazy(() => import("./pages/ChatGPTAlternatives"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const GamingEntertainmentPage = lazy(() => import("./pages/GamingEntertainmentPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const AIToolsPage = lazy(() => import("./pages/AIToolsPage"));
const BestAIToolsPage = lazy(() => import("./pages/BestAIToolsPage"));
const FreeAIToolsPage = lazy(() => import("./pages/FreeAIToolsPage"));

// Lazy load non-critical components
const FloatingCloneButton = lazy(() => import("./components/FloatingCloneButton"));
const PinnedVideoPlayer = lazy(() => import("./components/PinnedVideoPlayer"));

// Welcome Neo voice - plays when user lands on main site after accepting disclaimer
const WelcomeNeoVoice = () => {
  const location = useLocation();
  const hasPlayedRef = React.useRef(false);

  React.useEffect(() => {
    const hasAccepted = localStorage.getItem("aitools-consent-v3");
    
    // Only play on main page ("/"), after disclaimer accepted, once per session
    if (location.pathname === '/' && hasAccepted && !hasPlayedRef.current) {
      hasPlayedRef.current = true;
      
      // Small delay to let page render
      setTimeout(() => {
        const audio = new Audio('/welcome-neo.mp3');
        audio.volume = 0.7;
        audio.play().then(() => {
          console.log('🎵 Playing Welcome Neo audio...');
        }).catch((err) => {
          console.log('⏳ Audio requires user interaction:', err);
        });
      }, 300);
    }
  }, [location.pathname]);

  return null;
};

// Pre-initialize category cache for instant category page loads
import "@/utils/categoryUtils/precomputedCache";

// Loading screen with rotating messages and animated progress
import LoadingScreen from "@/components/LoadingScreen";

const PageLoader = () => <LoadingScreen />;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Routes wrapper - eager pages render instantly, lazy pages show loader
const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Critical paths render without Suspense for instant load
  if (location.pathname === '/' || location.pathname === '/welcome') {
    return (
      <Routes location={location}>
        <Route path="/welcome" element={<DisclaimerGate />} />
        <Route path="/" element={<Index />} />
      </Routes>
    );
  }
  
  // Secondary pages use Suspense for lazy loading
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes location={location}>
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/main-category/:mainCategoryName" element={<MainCategoryPage />} />
        <Route path="/tool/:toolId" element={<ToolDetail />} />
        <Route path="/:toolSlug" element={<ToolDetail />} />
        <Route path="/similar-tools/:toolId" element={<SimilarToolsPage />} />
        <Route path="/ai-tools-hub" element={<AIToolsHub />} />
        <Route path="/ai-agents-directory" element={<AIAgentsDirectory />} />
        <Route path="/chatgpt-alternatives" element={<ChatGPTAlternatives />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/gaming-entertainment" element={<GamingEntertainmentPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/ai-tools" element={<AIToolsPage />} />
        <Route path="/best-ai-tools" element={<BestAIToolsPage />} />
        <Route path="/free-ai-tools" element={<FreeAIToolsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/disclaimers" element={<DisclaimersPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/submit-tool" element={<ToolSubmission />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

// Global route guard: instant redirect new visitors to /welcome disclaimer gate
const RouteGuard: React.FC = () => {
  const location = useLocation();
  const hasAccepted = localStorage.getItem("aitools-consent-v3");
  
  // Instant redirect using React Router (no page reload)
  if (!hasAccepted && location.pathname !== '/welcome') {
    return <Navigate to="/welcome" replace />;
  }
  
  return <AnimatedRoutes />;
};
function App() {
  // Initialize cross-browser optimizations
  useCrossBrowserOptimization();
  
  // Initialize Chromebook-specific optimizations
  useChromebookOptimization();
  
  // Prefetch common routes for instant navigation
  usePrefetchRoutes();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <FavoritesProvider>
            <VideoManagerProvider>
              <TooltipProvider>
                <Toaster />
                <MatrixCursorEffect />
                <BrowserRouter>
                  <RouteGuard />
                  {/* Welcome Neo voice - only plays after disclaimer accepted */}
                  <WelcomeNeoVoice />
                  {/* Tiny floating clone button - hides on scroll */}
                  <Suspense fallback={null}>
                    <FloatingCloneButton />
                  </Suspense>
                  {/* Pinned rotating video player - lower left corner */}
                  <Suspense fallback={null}>
                    <PinnedVideoPlayer />
                  </Suspense>
                </BrowserRouter>
              </TooltipProvider>
            </VideoManagerProvider>
          </FavoritesProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
