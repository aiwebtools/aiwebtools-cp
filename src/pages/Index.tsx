
import React, { useState, useEffect, useRef } from "react";
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
import LazyFeaturedTools from "@/components/LazyFeaturedTools";
import LazySearchPortal from "@/components/LazySearchPortal";
import InteractiveMatrixBackground from "@/components/InteractiveMatrixBackground";
import AnimatedBackground from "@/components/AnimatedBackground";
import CloneOfferPopup from "@/components/CloneOfferPopup";
import AIWebToolsSEOSection from "@/components/seo/AIWebToolsSEOSection";
import AncientArchivesCollection from "@/components/AncientArchivesCollection";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
  </div>
);

const Index = () => {
  // Use fast cached stats initially for better performance
  const [toolStats, setToolStats] = useState(getFastToolCount());
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  
  // Simple ref for video without complex manager to avoid conflicts
  const mainVideoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Set loaded state immediately for faster initial render
    setIsLoaded(true);
    
    // Listen for welcome audio completion to trigger video
    const handleAudioComplete = () => {
      console.log('🎬 Welcome audio complete, starting video unmuted...');
      
      setTimeout(() => {
        const iframe = mainVideoRef.current;
        if (!iframe || videoStarted) return;
        
        setVideoStarted(true);
        console.log('🎥 Playing video with sound at full volume...');
        
        // Video is already unmuted from iframe src, just play it
        try {
          iframe.contentWindow?.postMessage(JSON.stringify({
            event: 'command',
            func: 'playVideo',
            args: ''
          }), '*');
        } catch (e) {
          console.log('Video control error:', e);
        }
      }, 500);
    };

    window.addEventListener('welcomeAudioComplete', handleAudioComplete);
    
    // Load actual stats in background
    const statsTimer = setTimeout(() => {
      const stats = getCurrentToolCount();
      setToolStats(stats);
      updateCachedStats(stats);
    }, 8000);

    return () => {
      clearTimeout(statsTimer);
      window.removeEventListener('welcomeAudioComplete', handleAudioComplete);
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
      
      {/* Background effects */}
      <InteractiveMatrixBackground />
      <AnimatedBackground />
      
      {/* Fixed Header - outside of relative container */}
      <Header />
      
      <div className="relative z-10">
        <HeroSection />
        
        {/* Featured Video Section - Above the fold, autoplay unmuted */}
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
                  src="https://www.youtube.com/embed/4zflGSSuBcA?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&vq=hd1080&loop=0&iv_load_policy=3&cc_load_policy=0&fs=1&color=red&theme=dark"
                  title="AI Web Tools Featured Video - 1080p HD"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  loading="eager"
                  onLoad={() => console.log('🎥 Video iframe loaded and ready')}
                ></iframe>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  onClick={() => {
                    window.location.href = '/main-category/ALL%20AI%20TOOLS';
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg"
                >
                  🚀 Browse All AI Tools
                </Button>
                <Button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold px-8 py-4 text-lg"
                >
                  🔍 Back to Search
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* SEO-optimized AI Web Tools section - Critical for "ai web tools" keyword ranking */}
        <AIWebToolsSEOSection />
        
        {/* Ancient Archives Collection - Showcasing ancient wisdom and historical GPTs */}
        <AncientArchivesCollection />
        
        <div id="categories-section">
          <CategoryPageSelection />
        </div>

        {/* Featured Tools Section */}
        <LazyFeaturedTools onToolsLoaded={(count) => console.log(`Featured tools loaded: ${count}`)} />
        
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
            
            {/* Search Portal Component */}
            <LazySearchPortal />
          </div>
        </section>
        
        <ScrollToTop />
        <Footer />
      </div>
      
      <ConsentPopup />
      <CloneOfferPopup />
    </div>
  );
};

export default Index;
