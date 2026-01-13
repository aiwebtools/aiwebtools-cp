import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryPageSelection from "@/components/CategoryPageSelection";
import SpecialServices from "@/components/SpecialServices";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import ImprovedSEOHead from "@/components/ImprovedSEOHead";
import GoogleRankingBooster from "@/components/seo/GoogleRankingBooster";
import { Button } from "@/components/ui/button";
import BookPromotionCard from "@/components/BookPromotionCard";
import LazyFeaturedTools from "@/components/LazyFeaturedTools";
import LazySearchPortal from "@/components/LazySearchPortal";
import InteractiveMatrixBackground from "@/components/InteractiveMatrixBackground";
import AnimatedBackground from "@/components/AnimatedBackground";
import CloneOfferPopup from "@/components/CloneOfferPopup";
import AIWebToolsSEOSection from "@/components/seo/AIWebToolsSEOSection";
import DeferredMount from "@/components/DeferredMount";
import EthicalAIQuoteSection from "@/components/EthicalAIQuoteSection";


// Removed loading spinner - causes perceived slowness on refresh

const Index = () => {
  const navigate = useNavigate();

  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed/4zflGSSuBcA?controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&vq=hd1080&iv_load_policy=3&cc_load_policy=0&fs=1&color=red&theme=dark"
  );

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
      
      {/* SEO booster - minimal delay */}
      <DeferredMount delay={0}>
        <GoogleRankingBooster pageType="homepage" />
      </DeferredMount>
      
      {/* Background effects - render immediately */}
      <DeferredMount delay={0}>
        <InteractiveMatrixBackground />
        <AnimatedBackground />
      </DeferredMount>
      
      {/* Fixed Header - outside of relative container */}
      <Header />
      
      <div className="relative z-10 pt-[70px] md:pt-[85px]">
        <HeroSection />
        
        {/* Featured Video Section */}
        <DeferredMount delay={0} fallback={null}>
          <section className="py-16 bg-gradient-to-br from-slate-900 to-purple-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-cyan-400">AI TOOLS THAT BEND THE FABRIC OF TIME...LITERALLY</span>
                </h2>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="relative w-full aspect-video">
                  <iframe
                    ref={mainVideoRef}
                    className="absolute inset-0 w-full h-full rounded-xl border border-cyan-500/30 bg-slate-800"
                    src={videoSrc}
                    title="AI Web Tools Featured Video - 1080p HD"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                
                {/* Quick Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button
                    onClick={() => navigate('/main-category/ALL%20AI%20TOOLS')}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg"
                  >
                    🚀 Browse All AI Tools
                  </Button>
                  <Button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold px-8 py-4 text-lg"
                  >
                    🔍 Back to Search
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </DeferredMount>
        
        {/* Category Selection - Tools First */}
        <div id="categories-section">
          <CategoryPageSelection />
        </div>
        
        {/* SEO-optimized AI Web Tools section - Compact version for SEO only */}
        <AIWebToolsSEOSection />
   
        {/* Featured Tools Section - no loading spinner, renders when ready */}
        <DeferredMount delay={0} fallback={null}>
          <LazyFeaturedTools onToolsLoaded={(count) => {}} />
        </DeferredMount>
        
        {/* Custom GPTs Video Section - render immediately */}
        <SpecialServices />
        
        {/* Book of Deployable Robots - positioned above search */}
        <DeferredMount delay={0} fallback={null}>
          <BookPromotionCard />
        </DeferredMount>
        
        {/* Bottom Search Portal */}
        <DeferredMount delay={0} fallback={null}>
          <section className="py-16 bg-gradient-to-br from-gray-900 to-black relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  <span className="text-cyan-400">🔍 SEARCH ALL AI TOOLS</span>
                </h2>
                <p className="text-xl text-cyan-200 max-w-3xl mx-auto mb-4">
                  Explore our complete database of AI tools with advanced search and filtering
                </p>
              </div>
              
              {/* Search Portal Component */}
              <LazySearchPortal />
            </div>
          </section>
        </DeferredMount>
        
        {/* Ethical AI Quote Section */}
        <DeferredMount delay={0} fallback={null}>
          <EthicalAIQuoteSection />
        </DeferredMount>
        
        <ScrollToTop />
        <Footer />
      </div>
      
      <CloneOfferPopup />
    </div>
  );
};

export default Index;
