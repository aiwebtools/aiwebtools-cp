import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "@/components/HeroSection";
import ImprovedSEOHead from "@/components/ImprovedSEOHead";
import GoogleRankingBooster from "@/components/seo/GoogleRankingBooster";
import { Button } from "../components/ui/button";
import DeferredMount from "@/components/DeferredMount";
import ErrorBoundary from "@/components/ErrorBoundary";

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

const LazySection = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary fallback={null}>
    <Suspense fallback={null}>{children}</Suspense>
  </ErrorBoundary>
);

// Removed loading spinner - causes perceived slowness on refresh

const Index = () => {
  const navigate = useNavigate();

  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed/4zflGSSuBcA?controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&vq=hd1080&iv_load_policy=3&cc_load_policy=0&fs=1&color=red&theme=dark"
  );

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

  const mainVideoRef = useRef<HTMLIFrameElement>(null);

  // Autoplay video UNMUTED when user scrolls to it
  // User already clicked disclaimer button = user interaction = unmuted autoplay allowed
  useEffect(() => {
    const iframe = mainVideoRef.current;
    if (!iframe || hasPlayedOnce) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedOnce) {
            // User interaction already happened on disclaimer gate, so unmuted autoplay is allowed
            setVideoSrc("https://www.youtube.com/embed/4zflGSSuBcA?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&vq=hd1080&loop=0&iv_load_policy=3&cc_load_policy=0&fs=1&color=red&theme=dark");
            setHasPlayedOnce(true);
            localStorage.setItem('mainVideoPlayed', 'true');
          }
        });
      },
      { threshold: 0.1 } // Trigger as soon as 10% visible
    );

    observer.observe(iframe);

    return () => {
      observer.disconnect();
    };
  }, [hasPlayedOnce]);

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <ImprovedSEOHead pageType="homepage" />
      
      {/* SEO booster - keep off the first paint path */}
      <DeferredMount delay={250}>
        <GoogleRankingBooster pageType="homepage" />
      </DeferredMount>
      
      {/* Background effects - defer slightly so the hero appears faster on mobile */}
      <DeferredMount delay={120}>
        <LazySection>
          <InteractiveMatrixBackground />
          <AnimatedBackground />
        </LazySection>
      </DeferredMount>
      
      {/* Fixed Header - outside of relative container */}
      <Header />
      
      <div className="relative z-10 pt-[70px] md:pt-[85px]">
        <HeroSection />
        
        {/* Featured Video Section */}
        <DeferredMount delay={220} fallback={null}>
          <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #001a00 50%, #0a0a0a 100%)' }}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-green-400" style={{ textShadow: '0 0 20px rgba(0, 255, 0, 0.5)' }}>AI TOOLS THAT BEND THE FABRIC OF TIME...LITERALLY</span>
                </h2>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="relative w-full aspect-video">
                  <iframe
                    ref={mainVideoRef}
                    className="absolute inset-0 w-full h-full rounded-xl border border-green-500/30 bg-slate-800"
                    src={videoSrc}
                    title="AI Web Tools Featured Video - 1080p HD"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
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
        </DeferredMount>
        
        <LazySection>
          <div id="categories-section">
            <CategoryPageSelection />
          </div>
        </LazySection>
        
        <DeferredMount delay={320} fallback={null}>
          <LazySection>
            <AIWebToolsSEOSection />
          </LazySection>
        </DeferredMount>
   
        <DeferredMount delay={380} fallback={null}>
          <LazySection>
            <LazyFeaturedTools onToolsLoaded={(count) => {}} />
          </LazySection>
        </DeferredMount>
        
        <DeferredMount delay={520} fallback={null}>
          <LazySection>
            <BookPromotionCard />
          </LazySection>
        </DeferredMount>
        
        <DeferredMount delay={620} fallback={null}>
          <LazySection>
            <InspirationCarousel />
          </LazySection>
        </DeferredMount>
        
        <DeferredMount delay={460} fallback={null}>
          <LazySection>
            <SpecialServices />
          </LazySection>
        </DeferredMount>
        
        <DeferredMount delay={720} fallback={null}>
          <LazySection>
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
          </LazySection>
        </DeferredMount>
        
        <DeferredMount delay={860} fallback={null}>
          <LazySection>
            <EthicalAIQuoteSection />
          </LazySection>
        </DeferredMount>
        
        <LazySection>
          <ScrollToTop />
          <Footer />
        </LazySection>
      </div>
      
      <LazySection>
        <CloneOfferPopup />
        <LovableInvitePopup />
      </LazySection>
    </div>
  );
};

export default Index;
