
import React, { useState, useEffect, useRef, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryPageSelection from "@/components/CategoryPageSelection";
import SpecialServices from "@/components/SpecialServices";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import ImprovedSEOHead from "@/components/ImprovedSEOHead";
import GoogleRankingBooster from "@/components/seo/GoogleRankingBooster";
import ConsentPopup from "@/components/ConsentPopup";
import { Button } from "@/components/ui/button";
import { getFastToolCount, updateCachedStats } from "@/utils/fastToolCounter";
import { getCurrentToolCount } from "@/utils/toolCounter";
import BookPromotionCard from "@/components/BookPromotionCard";

// Lazy load heavy components for better performance
const LazyFeaturedTools = React.lazy(() => import("@/components/LazyFeaturedTools"));
const LazySearchPortal = React.lazy(() => import("@/components/LazySearchPortal"));
const InteractiveMatrixBackground = React.lazy(() => import("@/components/InteractiveMatrixBackground"));
const AnimatedBackground = React.lazy(() => import("@/components/AnimatedBackground"));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
  </div>
);

const Index = () => {
  console.log('🏠 Index page component starting...');
  
  // Use fast cached stats initially for better performance
  const [toolStats, setToolStats] = useState(getFastToolCount());
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  
  // Simple ref for video without complex manager to avoid conflicts
  const mainVideoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Set loaded state immediately for faster initial render
    setIsLoaded(true);
    
    // Auto-start video after 3 seconds - browser-friendly approach
    const videoTimer = setTimeout(() => {
      if (videoStarted) return;
      
      const iframe = mainVideoRef.current;
      if (iframe) {
        setVideoStarted(true);
        console.log('🎥 Starting video autoplay in place...');
        
        // Start video with muted autoplay (browser-compliant) - no scrolling
        const autoplayUrl = "https://www.youtube.com/embed/4zflGSSuBcA?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&hd=1&vq=hd1080&quality=hd1080&loop=0&iv_load_policy=3&cc_load_policy=0&fs=1&color=red&theme=dark";
        iframe.src = autoplayUrl;
        
        // Try to unmute after video starts (user can manually unmute if needed)
        setTimeout(() => {
          try {
            iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
            console.log('🔊 Video unmuted successfully');
          } catch (e) {
            console.log('🔇 Video remains muted due to browser policy - user can unmute manually');
          }
        }, 2000);
      }
    }, 3000); // Reduced to 3 seconds for faster engagement
    
    // Load actual stats in background with longer delay to not block initial render
    const statsTimer = setTimeout(() => {
      const stats = getCurrentToolCount();
      setToolStats(stats);
      updateCachedStats(stats);
    }, 8000); // Much longer delay to prioritize page load speed

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(statsTimer);
    };
  }, [videoStarted]);

  const handleSeeMoreAITools = () => {
    // This function can be removed since FeaturedToolsSection handles it
  };

  // Early return with minimal loading state if not ready
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-3"></div>
          <p className="text-cyan-400 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <ImprovedSEOHead pageType="homepage" />
      <GoogleRankingBooster pageType="homepage" />
      
      {/* Lazy load background effects */}
      <Suspense fallback={null}>
        <InteractiveMatrixBackground />
        <AnimatedBackground />
      </Suspense>
      
      {/* Fixed Header - outside of relative container */}
      <Header />
      
      <div className="relative z-10">
        <HeroSection />
        <div id="categories-section">
          <CategoryPageSelection />
        </div>
        
        {/* Featured Video Section - Lazy loaded and deferred */}
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
                  src="https://www.youtube.com/embed/4zflGSSuBcA?controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&hd=1&vq=hd1080&quality=hd1080&loop=0&iv_load_policy=3&cc_load_policy=0&fs=1&color=red&theme=dark"
                  title="AI Web Tools Featured Video - 1080p HD"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  loading="eager"
                  onLoad={() => console.log('🎥 Video iframe loaded and ready')}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools Section - Lazy loaded for better performance */}
        <Suspense fallback={<LoadingSpinner />}>
          <LazyFeaturedTools onToolsLoaded={(count) => console.log(`Featured tools loaded: ${count}`)} />
        </Suspense>
        
        <BookPromotionCard />
        <SpecialServices />
        
        {/* Bottom Search Portal - positioned below all featured tools */}
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
            
            {/* Search Portal Component - Lazy loaded */}
            <Suspense fallback={<LoadingSpinner />}>
              <LazySearchPortal />
            </Suspense>
          </div>
        </section>
        
        <ScrollToTop />
        <Footer />
      </div>
      
      <ConsentPopup />
    </div>
  );
};

export default Index;
