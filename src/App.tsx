
import * as React from 'react'
import { Suspense } from 'react';
import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
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
import { lazyWithRetry } from "@/utils/lazyWithRetry";

// Eager load only the disclaimer gate; lazy-load heavy app routes to avoid black-screen startup
import DisclaimerGate from "./pages/DisclaimerGate";

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
const Index = lazyWithRetry(() => import("./pages/Index"));
const ToolDetail = lazyWithRetry(() => import("./pages/ToolDetail"));
// Warm ToolDetail only after the opening is safely complete. Pulling it during
// the Matrix handoff imports a lot of tool-detail/data code and can cause the
// exact freeze users were seeing.
if (typeof window !== 'undefined') {
  const warm = () => { import("./pages/ToolDetail").catch(() => {}); };
  setTimeout(() => {
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(warm);
    } else {
      warm();
    }
  }, 18000);
}
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
const PrivacyPolicy = lazyWithRetry(() => import("./pages/PrivacyPolicy"));
const MusicStream = lazyWithRetry(() => import("./pages/MusicStream"));

// Lazy load non-critical components — wrapped in retry to prevent black screen
const FloatingCloneButton = lazyWithRetry(() => import("./components/FloatingCloneButton"));
const PinnedVideoPlayer = lazyWithRetry(() => import("./components/PinnedVideoPlayer"));
const CareBotWidget = lazyWithRetry(() => import("./components/CareBotWidget"));
const BackToMusicPill = lazyWithRetry(() => import("./components/BackToMusicPill"));

// Welcome Neo voice - plays when user lands on main site after accepting disclaimer
const WelcomeNeoVoice = () => {
  const location = useLocation();
  const hasPlayedRef = React.useRef(false);
  const timeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const hasAccepted = getConsentAccepted();

    // Skip entirely if the disclaimer welcome audio just played — they share
    // overlapping content and stacking two <audio> elements during the route
    // transition was a real source of perceived "stutter / second loader".
    let disclaimerPlayedAt = 0;
    try {
      disclaimerPlayedAt = Number(sessionStorage.getItem('aiwt:disclaimer-audio-at') || '0');
    } catch { /* storage may be unavailable */ }
    const recentlyPlayedDisclaimerAudio =
      disclaimerPlayedAt > 0 && Date.now() - disclaimerPlayedAt < 15000;

    // Only play on main page ("/"), after disclaimer accepted, once per session,
    // and NOT if the disclaimer audio fired in the last 15s.
    if (
      location.pathname === '/' &&
      hasAccepted &&
      !hasPlayedRef.current &&
      !recentlyPlayedDisclaimerAudio
    ) {
      hasPlayedRef.current = true;
      (window as any).__aiwtBootTrace?.('welcome-neo-scheduled');

      timeoutRef.current = window.setTimeout(() => {
        try {
          const audio = new Audio('/welcome-neo.mp3');
          audio.volume = 0.7;
          audio.preload = 'none';
          void audio.play().catch(() => {
            // Browser autoplay rules can block this; never let audio affect boot.
          });
        } catch {
          // Audio must never block rendering.
        }
      }, 2000);
    } else if (recentlyPlayedDisclaimerAudio) {
      (window as any).__aiwtBootTrace?.('welcome-neo-skipped-disclaimer-audio');
    }

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [location.pathname]);

  return null;
};

// NOTE: precomputed category cache is initialized AFTER disclaimer acceptance
// to keep the /welcome disclaimer gate load instant.

// Keep a real React fallback mounted behind the HTML cube. If a lazy route or
// HMR handoff stalls, removing the HTML cube reveals this instead of a blank
// dark screen.
const PageLoader = () => {
  return (
    <div data-aiwt-route-fallback="true" className="fixed inset-0 z-[9000] flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <style>{`
        @keyframes pl-rotateCube { from { transform: rotateX(0) rotateY(0); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes pl-pulse { 0%,100% { opacity: 1; text-shadow: 0 0 12px #00ff41; } 50% { opacity: 0.55; text-shadow: 0 0 28px #00ff41; } }
        @keyframes pl-dots { 0%,20% { content: ''; } 40% { content: '.'; } 60% { content: '..'; } 80%,100% { content: '...'; } }
        @keyframes pl-scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        .pl-cube-wrap { perspective: 220px; width: 64px; height: 64px; }
        .pl-cube { width: 64px; height: 64px; position: relative; transform-style: preserve-3d; animation: pl-rotateCube 1.4s linear infinite; will-change: transform; }
        .pl-face { position: absolute; width: 64px; height: 64px; border: 2px solid #00ff41; background: rgba(0,255,65,0.08); box-shadow: 0 0 18px rgba(0,255,65,0.35), inset 0 0 18px rgba(0,255,65,0.15); }
        .pl-face.f { transform: translateZ(32px); }
        .pl-face.b { transform: rotateY(180deg) translateZ(32px); }
        .pl-face.r { transform: rotateY(90deg) translateZ(32px); }
        .pl-face.l { transform: rotateY(-90deg) translateZ(32px); }
        .pl-face.t { transform: rotateX(90deg) translateZ(32px); }
        .pl-face.bt { transform: rotateX(-90deg) translateZ(32px); }
        .pl-label { animation: pl-pulse 1.4s ease-in-out infinite; }
        .pl-label::after { content: ''; display: inline-block; width: 1.2em; text-align: left; animation: pl-dots 1.2s steps(4,end) infinite; }
        .pl-scan { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
        .pl-scan::before { content: ''; position: absolute; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, transparent, rgba(0,255,65,0.08), transparent); animation: pl-scan 2.2s linear infinite; }
      `}</style>
      <div className="pl-scan" />
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="pl-cube-wrap">
          <div className="pl-cube">
            <div className="pl-face f" /><div className="pl-face b" />
            <div className="pl-face r" /><div className="pl-face l" />
            <div className="pl-face t" /><div className="pl-face bt" />
          </div>
        </div>
        <div className="pl-label font-mono text-sm font-bold uppercase tracking-[0.22em] text-[#00ff41]">
          Stabilizing Matrix Route
        </div>
      </div>
    </div>
  );
};

const RouteReadySignal = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  React.useEffect(() => {
    (window as any).__aiwtBootTrace?.('route-component-mounted', location.pathname);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        try {
          document.body.setAttribute('data-aiwt-route-ready', 'true');
          (window as any).__aiwtRouteReady = true;
          (window as any).__aiwtBootTrace?.('route-ready-dispatch', location.pathname);
          window.dispatchEvent(new Event('aiwt:route-ready'));
        } catch { /* loader signal must never break the app */ }
      });
    });
  }, [location.pathname]);

  return <>{children}</>;
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
  
  // Critical paths keep the animated cube visible while lazy chunks reconnect.
  if (location.pathname === '/' || location.pathname === '/welcome') {
    return (
      <Suspense fallback={<PageLoader />}>
        <Routes location={location}>
          <Route path="/welcome" element={<RouteReadySignal><DisclaimerGate /></RouteReadySignal>} />
          <Route path="/" element={<RouteReadySignal><Index /></RouteReadySignal>} />
        </Routes>
      </Suspense>
    );
  }
  
  // Secondary pages use Suspense for lazy loading
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes location={location}>
        <Route path="/category/:categoryName" element={<RouteReadySignal><CategoryPage /></RouteReadySignal>} />
        <Route path="/main-category/:mainCategoryName" element={<RouteReadySignal><MainCategoryPage /></RouteReadySignal>} />
        {/* Tool detail routes: no fallback — instant nav like before */}
        <Route path="/tool/:toolId" element={<Suspense fallback={null}><RouteReadySignal><ToolDetail /></RouteReadySignal></Suspense>} />
        <Route path="/:toolSlug" element={<Suspense fallback={null}><RouteReadySignal><ToolDetail /></RouteReadySignal></Suspense>} />
        <Route path="/privacy-policy" element={<RouteReadySignal><PrivacyPolicy /></RouteReadySignal>} />
        <Route path="/similar-tools/:toolId" element={<RouteReadySignal><SimilarToolsPage /></RouteReadySignal>} />
        <Route path="/ai-tools-hub" element={<RouteReadySignal><AIToolsHub /></RouteReadySignal>} />
        <Route path="/ai-agents-directory" element={<RouteReadySignal><AIAgentsDirectory /></RouteReadySignal>} />
        <Route path="/chatgpt-alternatives" element={<RouteReadySignal><ChatGPTAlternatives /></RouteReadySignal>} />
        <Route path="/blog" element={<RouteReadySignal><BlogPage /></RouteReadySignal>} />
        <Route path="/blog/:slug" element={<RouteReadySignal><BlogPostPage /></RouteReadySignal>} />
        <Route path="/gaming-entertainment" element={<RouteReadySignal><GamingEntertainmentPage /></RouteReadySignal>} />
        <Route path="/faq" element={<RouteReadySignal><FAQPage /></RouteReadySignal>} />
        <Route path="/ai-tools" element={<RouteReadySignal><AIToolsPage /></RouteReadySignal>} />
        <Route path="/best-ai-tools" element={<RouteReadySignal><BestAIToolsPage /></RouteReadySignal>} />
        <Route path="/free-ai-tools" element={<RouteReadySignal><FreeAIToolsPage /></RouteReadySignal>} />
        <Route path="/ai-writing-tools" element={<RouteReadySignal><AIWritingToolsPage /></RouteReadySignal>} />
        <Route path="/ai-web-tools" element={<RouteReadySignal><AIWebToolsPage /></RouteReadySignal>} />
        <Route path="/aiwebtools" element={<RouteReadySignal><AIWebToolsPage /></RouteReadySignal>} />
        <Route path="/favorites" element={<RouteReadySignal><FavoritesPage /></RouteReadySignal>} />
        <Route path="/disclaimers" element={<RouteReadySignal><DisclaimersPage /></RouteReadySignal>} />
        <Route path="/our-story" element={<RouteReadySignal><OurStoryPage /></RouteReadySignal>} />
        <Route path="/submit-tool" element={<RouteReadySignal><ToolSubmission /></RouteReadySignal>} />
        <Route path="/admin/analytics" element={<RouteReadySignal><AdminAnalytics /></RouteReadySignal>} />
        <Route path="/music-stream" element={<Suspense fallback={null}><RouteReadySignal><MusicStream /></RouteReadySignal></Suspense>} />
        <Route path="*" element={<RouteReadySignal><NotFound /></RouteReadySignal>} />
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

    // Defer category cache work until well after the Matrix handoff. It imports
    // the full tool DB and detector modules, so running it during opening can
    // freeze the route before the homepage paints.
    const warmCache = () => {
      importWithRetry(() => import("@/utils/categoryUtils/precomputedCache"))
        .then((mod) => mod?.initializeCategoryCache?.())
        .catch(() => {});
    };

    const id = window.setTimeout(() => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(warmCache);
      } else {
        setTimeout(warmCache, 12000);
      }
    }, 30000);

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
  const [overlaysReady, setOverlaysReady] = React.useState(false);
  const isTouchPhone =
    typeof window !== 'undefined' &&
    (window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent));

  React.useEffect(() => {
    if (!show) {
      setOverlaysReady(false);
      return;
    }

    let timeoutId: number | null = null;
    const enable = () => {
      // Mobile first-scroll must stay completely clear. These overlays import
      // video/search assistant chunks (and some full tool data), so keep them
      // off the main thread until after the visitor has had time to navigate.
      timeoutId = window.setTimeout(() => setOverlaysReady(true), isTouchPhone ? 12000 : 1800);
    };

    if ((window as any).__aiwtRouteReady) {
      enable();
    } else {
      window.addEventListener('aiwt:route-ready', enable, { once: true });
    }

    return () => {
      window.removeEventListener('aiwt:route-ready', enable);
      if (timeoutId !== null) window.clearTimeout(timeoutId);
    };
  }, [show, location.pathname, isTouchPhone]);

  return (
    <>
      {overlaysReady ? <ScrollProgressIndicator /> : null}
      {overlaysReady && !isTouchPhone ? <MatrixCursorEffect /> : null}
      {/* Welcome Neo voice - only plays after disclaimer accepted */}
      <WelcomeNeoVoice />
      {/* Tiny floating clone button - hides on scroll */}
      {overlaysReady ? (
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <FloatingCloneButton />
          </Suspense>
        </ErrorBoundary>
      ) : null}
      {/* Pinned rotating video player - lower left corner */}
      {overlaysReady ? (
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <PinnedVideoPlayer />
          </Suspense>
        </ErrorBoundary>
      ) : null}
      {/* AIWebTools Care Bot — answers any question about our tools */}
      {overlaysReady ? (
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <CareBotWidget />
          </Suspense>
        </ErrorBoundary>
      ) : null}
      {/* Back-to-Music floating pill — appears after visiting Music Stream */}
      {overlaysReady ? (
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <BackToMusicPill />
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
