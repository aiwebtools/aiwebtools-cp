import React, { Suspense, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "@/components/HeroSection";
import ImprovedSEOHead from "@/components/ImprovedSEOHead";
import GoogleRankingBooster from "@/components/seo/GoogleRankingBooster";
import { Button } from "../components/ui/button";
import DeferredMount from "@/components/DeferredMount";
import { lazyWithRetry as lazy } from "@/utils/lazyWithRetry";
import { useMobile } from "@/hooks/useMobile";

const CategoryPageSelection = lazy(() => import("@/components/CategoryPageSelection"));
const SpecialServices = lazy(() => import("@/components/SpecialServices"));
const Footer = lazy(() => import("@/components/Footer"));
const ScrollToTop = lazy(() => import("@/components/ui/scroll-to-top"));
const BookPromotionCard = lazy(() => import("@/components/BookPromotionCard"));
const LazyFeaturedTools = lazy(() => import("@/components/LazyFeaturedTools"));
const LazySearchPortal = lazy(() => import("@/components/LazySearchPortal"));
const InteractiveMatrixBackground = lazy(() => import("@/components/InteractiveMatrixBackground"));
const AnimatedBackground = lazy(() => import("@/components/AnimatedBackground"));
const CloneOfferPopup = lazy(() => import("@/components/CloneOfferPopup"));
const LovableInvitePopup = lazy(() => import("@/components/LovableInvitePopup"));
const AIWebToolsSEOSection = lazy(() => import("@/components/seo/AIWebToolsSEOSection"));
const EthicalAIQuoteSection = lazy(() => import("@/components/EthicalAIQuoteSection"));
const InspirationCarousel = lazy(() => import("@/components/InspirationCarousel"));


// Removed loading spinner - causes perceived slowness on refresh

const Index = () => {
  const navigate = useNavigate();
  const { isMobile } = useMobile();
  // On mobile, defer the heavy matrix canvas way longer so the user's
  // very first scroll-touch isn't fighting a full-screen rAF loop.
  const matrixBgDelay = isMobile ? 2800 : 120;
  const firstScrollSafeDelay = isMobile ? 12000 : 250;

  const [mainVideoActive, setMainVideoActive] = useState(false);

  // Force scroll to top on mount - fixes "start at bottom" glitch after disclaimer
  useEffect(() => {
    // Immediate scroll reset
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Double-check after a frame (catches async layout issues)
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    const id = window.setTimeout(() => {
      window.dispatchEvent(new Event("aiwt:route-ready"));
    }, 160);

    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <ImprovedSEOHead pageType="homepage" />
      
      {/* SEO booster - keep off the first paint path */}
      <DeferredMount delay={firstScrollSafeDelay}>
        <GoogleRankingBooster pageType="homepage" />
      </DeferredMount>
      
      {/* Background effects - on mobile we defer aggressively so the first
          finger-scroll is instant and doesn't fight the matrix canvas rAF. */}
      <DeferredMount delay={matrixBgDelay}>
        <Suspense fallback={null}>
          <InteractiveMatrixBackground />
          <AnimatedBackground />
        </Suspense>
      </DeferredMount>
      
      {/* Fixed Header - outside of relative container */}
      <Header />
      
      <main className="relative z-10 pt-[70px] md:pt-[85px]">
        <HeroSection />
        
        {/* Featured Video Section: lite YouTube embed so mobile scroll never waits on iframe boot. */}
        <section className="py-12 md:py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #001a00 50%, #0a0a0a 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-green-400" style={{ textShadow: '0 0 20px rgba(0, 255, 0, 0.5)' }}>AI TOOLS THAT BEND THE FABRIC OF TIME...LITERALLY</span>
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="relative w-full aspect-video rounded-xl border border-green-500/30 bg-slate-950 overflow-hidden shadow-2xl shadow-green-500/10">
                {mainVideoActive ? (
                  <iframe
                    className="absolute inset-0 w-full h-full bg-slate-950"
                    src="https://www.youtube.com/embed/4zflGSSuBcA?autoplay=1&controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&vq=hd1080&iv_load_policy=3&cc_load_policy=0&fs=1&color=red&theme=dark"
                    title="AI Web Tools Featured Video - 1080p HD"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setMainVideoActive(true)}
                    className="absolute inset-0 w-full h-full group touch-manipulation"
                    aria-label="Play AI Web Tools featured video"
                  >
                    <img
                      src="https://i.ytimg.com/vi/4zflGSSuBcA/hqdefault.jpg"
                      alt="AI Web Tools featured video preview"
                      className="h-full w-full object-cover opacity-80 transition-opacity duration-200 group-hover:opacity-95"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute inset-0 bg-gradient-to-br from-black/30 via-emerald-950/20 to-black/60" />
                    <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
                      <span className="grid h-20 w-20 place-items-center rounded-full bg-green-500/90 text-4xl shadow-2xl shadow-green-400/40 transition-transform duration-200 group-hover:scale-105">▶</span>
                      <span className="rounded-full border border-green-400/40 bg-black/70 px-5 py-2 text-sm font-bold text-green-100 backdrop-blur-sm">Tap to load HD video</span>
                    </span>
                  </button>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  onClick={() => navigate('/main-category/ALL%20AI%20TOOLS')}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-4 text-lg"
                  style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)' }}
                >
                  🚀 Browse All AI Tools
                </Button>
                <Button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500/10 font-bold px-8 py-4 text-lg"
                >
                  🔍 Back to Search
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <DeferredMount delay={3200} fallback={null}>
          <Suspense fallback={null}>
            <div id="categories-section">
              <CategoryPageSelection />
            </div>
          </Suspense>
        </DeferredMount>
        
        <DeferredMount delay={3600} fallback={null}>
          <Suspense fallback={null}>
            <AIWebToolsSEOSection />
          </Suspense>
        </DeferredMount>
   
        <DeferredMount delay={4200} fallback={null}>
          <Suspense fallback={null}>
            <LazyFeaturedTools onToolsLoaded={(count) => {}} />
          </Suspense>
        </DeferredMount>
        
        <DeferredMount delay={4800} fallback={null}>
          <Suspense fallback={null}>
            <SpecialServices />
          </Suspense>
        </DeferredMount>

        <DeferredMount delay={5400} fallback={null}>
          <Suspense fallback={null}>
            <BookPromotionCard />
          </Suspense>
        </DeferredMount>
        
        <DeferredMount delay={6100} fallback={null}>
          <Suspense fallback={null}>
            <section className="py-16 relative" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #001a00 50%, #0a0a0a 100%)' }}>
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    <span className="text-green-400" style={{ textShadow: '0 0 20px rgba(0, 255, 0, 0.5)' }}>🔍 SEARCH ALL AI TOOLS</span>
                  </h2>
                  <p className="text-xl text-green-200 max-w-3xl mx-auto mb-4">
                    Explore our complete database of AI tools with advanced search and filtering
                  </p>
                </div>
                
                <LazySearchPortal />
              </div>
            </section>
          </Suspense>
        </DeferredMount>
        
        <DeferredMount delay={isMobile ? 13500 : 860} fallback={<div className="min-h-[16vh]" aria-hidden="true" />}>
          <Suspense fallback={null}>
            <EthicalAIQuoteSection />
          </Suspense>
        </DeferredMount>
        
        <DeferredMount delay={isMobile ? 14500 : 920} fallback={<div className="min-h-[24vh]" aria-hidden="true" />}>
          <Suspense fallback={null}>
            <InspirationCarousel />
          </Suspense>
        </DeferredMount>

        <Suspense fallback={null}>
          <ScrollToTop />
          <Footer />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <CloneOfferPopup />
        <LovableInvitePopup />
      </Suspense>
    </div>
  );
};

export default Index;
