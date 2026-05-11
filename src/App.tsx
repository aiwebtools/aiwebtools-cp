
import * as React from 'react'
import { Suspense, lazy } from 'react';
import { Toaster } from "./components/ui/sonner";
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

// Eager load only the disclaimer gate; lazy-load heavy app routes to avoid black-screen startup
import DisclaimerGate from "./pages/DisclaimerGate";

// Retry wrapper for lazy imports — prevents black screen on transient
// "Failed to fetch dynamically imported module" errors (HMR / flaky network).
function lazyWithRetry<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  retries = 2,
  delayMs = 400,
) {
  return lazy(async () => {
    let lastErr: unknown;
    for (let i = 0; i <= retries; i++) {
      try {
        return await factory();
      } catch (err) {
        lastErr = err;
        await new Promise((r) => setTimeout(r, delayMs * (i + 1)));
      }
    }
    throw lastErr;
  });
}

// Generic retry wrapper for non-component dynamic imports (e.g., side-effect modules).
// Prevents "Failed to fetch dynamically imported module" from breaking the app.
async function importWithRetry<T>(
  factory: () => Promise<T>,
  retries = 3,
  delayMs = 500,
): Promise<T | null> {
  let lastErr: unknown;
  for (let i = 0; i <= retries; i++) {
    try {
      return await factory();
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, delayMs * (i + 1)));
    }
  }
  console.warn('[importWithRetry] giving up after retries', lastErr);
  return null;
}

// Lazy load - secondary pages for faster initial load
const ToolDetail = lazyWithRetry(() => import("./pages/ToolDetail"));
const CategoryPage = lazyWithRetry(() => import("./pages/CategoryPage"));
const MainCategoryPage = lazyWithRetry(() => import("./pages/MainCategoryPage"));
const SimilarToolsPage = lazyWithRetry(() => import("./pages/SimilarTools"));
const FavoritesPage = lazyWithRetry(() => import("./pages/FavoritesPage"));
const ToolSubmission = lazyWithRetry(() => import("./pages/ToolSubmission"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));
const DisclaimersPage = lazyWithRetry(() => import("./pages/DisclaimersPage"));
const OurStoryPage = lazyWithRetry(() => import("./pages/OurStoryPage"));
const AIToolsHub = lazyWithRetry(() => import("./pages/AIToolsHub"));
const AIAgentsDirectory = lazyWithRetry(() => import("./pages/AIAgentsDirectory"));
const ChatGPTAlternatives = lazyWithRetry(() => import("./pages/ChatGPTAlternatives"));
const BlogPage = lazyWithRetry(() => import("./pages/BlogPage"));
const BlogPostPage = lazyWithRetry(() => import("./pages/BlogPostPage"));
const GamingEntertainmentPage = lazyWithRetry(() => import("./pages/GamingEntertainmentPage"));
const FAQPage = lazyWithRetry(() => import("./pages/FAQPage"));
const AIToolsPage = lazyWithRetry(() => import("./pages/AIToolsPage"));
const BestAIToolsPage = lazyWithRetry(() => import("./pages/BestAIToolsPage"));
const FreeAIToolsPage = lazyWithRetry(() => import("./pages/FreeAIToolsPage"));
const AIWritingToolsPage = lazyWithRetry(() => import("./pages/AIWritingToolsPage"));
const AIWebToolsPage = lazyWithRetry(() => import("./pages/AIWebToolsPage"));
const AdminAnalytics = lazyWithRetry(() => import("./pages/AdminAnalytics"));

// Lazy load non-critical components — wrapped in retry to prevent black screen
const FloatingCloneButton = lazyWithRetry(() => import("./components/FloatingCloneButton"));
const PinnedVideoPlayer = lazyWithRetry(() => import("./components/PinnedVideoPlayer"));

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

// HTML cube handles cold boot. This React fallback only appears after that cube
// is gone, preventing black screens during lazy route transitions.
const PageLoader = () => {
  if (typeof document !== "undefined" && document.querySelector(".loading-spinner")) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9000] flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-12 w-12 animate-spin rounded-sm border-2 border-primary/40 border-t-primary shadow-[0_0_30px_hsl(var(--primary)/0.35)]" />
        <div className="font-mono text-sm font-bold uppercase tracking-[0.22em] text-primary">
          Stabilizing Matrix Route...
        </div>
      </div>
    </div>
  );
};

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
      <Suspense fallback={<PageLoader />}>
        <Routes location={location}>
          <Route path="/welcome" element={<DisclaimerGate />} />
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
      importWithRetry(() => import("@/utils/categoryUtils/precomputedCache"));
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
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <FloatingCloneButton />
          </Suspense>
        </ErrorBoundary>
      ) : null}
      {/* Pinned rotating video player - lower left corner */}
      {show ? (
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <PinnedVideoPlayer />
          </Suspense>
        </ErrorBoundary>
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
