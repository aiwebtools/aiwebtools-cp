
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
import { useScrollPerformance } from "@/hooks/useScrollPerformance";
import { usePrefetchRoutes } from "@/hooks/usePrefetch";
import ErrorBoundary from "@/components/ErrorBoundary";
import MatrixCursorEffect from "@/components/effects/MatrixCursorEffect";
import "@/styles/loading-cube.css";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import { getConsentAccepted } from "@/utils/consent";
// Eager load - ONLY the disclaimer gate (lightweight, no heavy tool imports)
import DisclaimerGate from "./pages/DisclaimerGate";

// Lazy load Index - it pulls in 3000+ tool images which block initial render
const Index = lazy(() => import("./pages/Index"));

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
const AIWritingToolsPage = lazy(() => import("./pages/AIWritingToolsPage"));
const AIWebToolsPage = lazy(() => import("./pages/AIWebToolsPage"));
const AdminAnalytics = lazy(() => import("./pages/AdminAnalytics"));

// Lazy load non-critical components
const FloatingCloneButton = lazy(() => import("./components/FloatingCloneButton"));
const PinnedVideoPlayer = lazy(() => import("./components/PinnedVideoPlayer"));

// Welcome Neo voice - plays when user lands on main site after accepting disclaimer
const WelcomeNeoVoice = () => {
  const location = useLocation();
  const hasPlayedRef = React.useRef(false);

  React.useEffect(() => {
    const hasAccepted = getConsentAccepted();
    
    // Only play on main page ("/"), after disclaimer accepted, once per session
    if (location.pathname === '/' && hasAccepted && !hasPlayedRef.current) {
      hasPlayedRef.current = true;
      
      // Small delay so it doesn't overlap with disclaimer welcome audio
      setTimeout(() => {
        const audio = new Audio('/welcome-neo.mp3');
        audio.volume = 0.7;
        audio.play().catch(() => {
          // Silently fail if audio can't play
        });
      }, 2000);
    }
  }, [location.pathname]);

  return null;
};

// NOTE: precomputed category cache is initialized AFTER disclaimer acceptance
// to keep the /welcome disclaimer gate load instant.

// Page loader for Suspense — shows Matrix-style loading indicator while lazy pages load
const PageLoader = () => (
  <div className="min-h-screen bg-black flex flex-col items-center justify-center">
    <div className="mb-6" style={{ perspective: '200px' }}>
      <div
        style={{
          width: 50, height: 50, position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'rotateCube 1.2s linear infinite',
        }}
      >
        {[
          { transform: 'translateZ(25px)' },
          { transform: 'rotateY(180deg) translateZ(25px)' },
          { transform: 'rotateY(90deg) translateZ(25px)' },
          { transform: 'rotateY(-90deg) translateZ(25px)' },
          { transform: 'rotateX(90deg) translateZ(25px)' },
          { transform: 'rotateX(-90deg) translateZ(25px)' },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              position: 'absolute', width: 50, height: 50,
              border: '2px solid #00ff41',
              background: 'rgba(0,255,65,0.1)',
              boxShadow: '0 0 15px rgba(0,255,65,0.3)',
              ...s,
            }}
          />
        ))}
      </div>
    </div>
    <p
      className="text-green-400 font-mono text-lg tracking-widest animate-pulse"
      style={{ textShadow: '0 0 20px rgba(0,255,65,0.5)' }}
    >
      LOADING...
    </p>
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

// Routes wrapper - disclaimer gate renders instantly, everything else uses Suspense
const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Disclaimer gate is eager-loaded — render without Suspense for instant load
  if (location.pathname === '/welcome') {
    return (
      <Routes location={location}>
        <Route path="/welcome" element={<DisclaimerGate />} />
      </Routes>
    );
  }
  
  // All other pages (including Index) use Suspense for lazy loading
  if (location.pathname === '/') {
    return (
      <Suspense fallback={<PageLoader />}>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
        </Routes>
      </Suspense>
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
        <Route path="/ai-writing-tools" element={<AIWritingToolsPage />} />
        <Route path="/ai-web-tools" element={<AIWebToolsPage />} />
        <Route path="/aiwebtools" element={<AIWebToolsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/disclaimers" element={<DisclaimersPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/submit-tool" element={<ToolSubmission />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

// Global route guard: instant redirect new visitors to /welcome disclaimer gate
const RouteGuard: React.FC = () => {
  const location = useLocation();
  const hasAccepted = getConsentAccepted();
  
  // Instant redirect using React Router (no page reload)
  if (!hasAccepted && location.pathname !== '/welcome') {
    return <Navigate to="/welcome" replace />;
  }
  
  return <AnimatedRoutes />;
};

const PostAcceptBoot: React.FC = () => {
  const location = useLocation();
  const hasAccepted = getConsentAccepted();

  // Never run heavy boot work on disclaimer gate
  const enabled = hasAccepted && location.pathname !== "/welcome";

  // Prefetch common routes - hook must be called unconditionally (React rules)
  // The hook internally handles the enabled check via useEffect
  React.useEffect(() => {
    if (!enabled) return;
    
    // Prefetch priority routes after disclaimer accepted
    const PRIORITY_ROUTES = [
      '/main-category/ALL%20AI%20TOOLS',
      '/main-category/AI%20AGENTS',
      '/main-category/IMAGE%20%26%20DESIGN',
      '/main-category/VIDEO%20%26%20MULTIMEDIA',
      '/main-category/WRITING%20%26%20CONTENT',
      '/main-category/CODING%20%26%20DEVELOPMENT',
      '/ai-tools-hub',
      '/favorites',
    ];
    
    // Prefetch in microtask to not block render
    queueMicrotask(() => {
      PRIORITY_ROUTES.forEach(route => {
        if (document.querySelector(`link[href="${route}"]`)) return;
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        link.as = 'document';
        document.head.appendChild(link);
      });
    });
  }, [enabled]);

  React.useEffect(() => {
    if (!enabled) return;

    // Defer category cache init until after first paint
    const id = window.setTimeout(() => {
      import("@/utils/categoryUtils/precomputedCache");
    }, 0);

    return () => {
      clearTimeout(id);
    };
  }, [enabled]);

  return null;
};

const GlobalOverlays: React.FC = () => {
  const location = useLocation();
  const hasAccepted = getConsentAccepted();
  const show = hasAccepted && location.pathname !== "/welcome";

  return (
    <>
      {show ? <ScrollProgressIndicator /> : null}
      {show ? <MatrixCursorEffect /> : null}
      {/* Welcome Neo voice - only plays after disclaimer accepted */}
      <WelcomeNeoVoice />
      {/* Tiny floating clone button - hides on scroll */}
      {show ? (
        <Suspense fallback={null}>
          <FloatingCloneButton />
        </Suspense>
      ) : null}
      {/* Pinned rotating video player - lower left corner */}
      {show ? (
        <Suspense fallback={null}>
          <PinnedVideoPlayer />
        </Suspense>
      ) : null}
    </>
  );
};

function App() {
  // Initialize cross-browser optimizations
  useCrossBrowserOptimization();

  // Initialize Chromebook-specific optimizations
  useChromebookOptimization();

  // Scroll performance: adds 'is-scrolling' class during scroll for CSS optimizations
  useScrollPerformance();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <FavoritesProvider>
            <VideoManagerProvider>
              <TooltipProvider>
                <Toaster />
                <BrowserRouter>
                  <RouteGuard />
                  <PostAcceptBoot />
                  <GlobalOverlays />
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
