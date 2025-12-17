
import * as React from 'react'
import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { FavoritesProvider } from "@/hooks/useFavorites";
import { useCrossBrowserOptimization } from "@/hooks/useCrossBrowserOptimization";
import { useChromebookOptimization } from "@/hooks/useChromebookOptimization";
import { usePrefetchRoutes } from "@/hooks/usePrefetch";
import ErrorBoundary from "@/components/ErrorBoundary";
import PageTransition from "@/components/navigation/PageTransition";
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
const GamingEntertainmentPage = lazy(() => import("./pages/GamingEntertainmentPage"));

// Lazy load non-critical components
const FloatingCloneButton = lazy(() => import("./components/FloatingCloneButton"));

// Welcome Neo voice - plays only on main site after disclaimer accepted
const WelcomeNeoVoice = () => {
  const location = (window as any).__REACT_ROUTER_LOCATION__;
  const hasAccepted = typeof window !== "undefined" && window.localStorage.getItem("aitools-consent-v3");
  const hasPlayedRef = React.useRef(false);

  React.useEffect(() => {
    // Only play on main site, not on /welcome, and only once per session
    if (hasAccepted && !hasPlayedRef.current) {
      hasPlayedRef.current = true;
      
      const playWelcome = () => {
        const audio = new Audio('/welcome-neo.mp3');
        audio.volume = 0.7;
        audio.play().then(() => {
          console.log('🎵 Playing Welcome Neo audio...');
        }).catch(() => {
          console.log('⏳ Audio requires user interaction');
        });
      };

      // Small delay to let page settle
      setTimeout(playWelcome, 500);
    }
  }, [hasAccepted]);

  return null;
};

// Pre-initialize category cache for instant category page loads
import "@/utils/categoryUtils/precomputedCache";

// Loading fallback with Matrix rain effect
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
    {/* Matrix rain columns */}
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 text-green-500 text-sm font-mono opacity-70 animate-pulse"
          style={{
            left: `${(i / 25) * 100}%`,
            animation: `matrixFall ${2 + Math.random() * 3}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {Array.from({ length: 15 }).map((_, j) => (
            <div key={j} style={{ opacity: 1 - j * 0.06 }}>
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      ))}
    </div>
    {/* Center spinner */}
    <div className="z-10 flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
      <div className="text-green-400 text-sm font-mono animate-pulse">Loading...</div>
    </div>
    {/* Keyframe for matrix fall animation */}
    <style>{`
      @keyframes matrixFall {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100vh); }
      }
    `}</style>
  </div>
);

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

// Animated routes wrapper with Suspense for lazy loaded pages
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <Suspense fallback={<PageLoader />}>
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/welcome" element={<DisclaimerGate />} />
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
    </Suspense>
  );
};

// Global route guard to enforce disclaimer gate BEFORE any page
const RouteGuard: React.FC = () => {
  const location = useLocation();
  const hasAccepted =
    typeof window !== "undefined" &&
    window.localStorage.getItem("aitools-consent-v3");

  console.log("🔐 RouteGuard check - hasAccepted v3:", hasAccepted, "path:", location.pathname);

  // If user has NOT accepted and is not already on /welcome, force them there
  if (!hasAccepted && location.pathname !== "/welcome") {
    return (
      <PageTransition key="welcome-redirect">
        <Routes>
          <Route path="*" element={<DisclaimerGate />} />
        </Routes>
      </PageTransition>
    );
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
              </BrowserRouter>
            </TooltipProvider>
          </FavoritesProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
