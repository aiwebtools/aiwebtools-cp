
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
    
    // Enhanced video autoplay with cross-browser compatibility
    const startVideoAutoplay = () => {
      if (videoStarted) return;
      
      const iframe = mainVideoRef.current;
      if (!iframe) return;
      
      setVideoStarted(true);
      console.log('🎥 Starting enhanced video autoplay...');
      
      // Detect if user is on mobile for different handling
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      
      // Enhanced autoplay URL with better browser compatibility
      const autoplayParams = new URLSearchParams({
        autoplay: '1',
        mute: '1', // Always start muted for browser compliance
        controls: '1',
        rel: '0',
        modestbranding: '1',
        enablejsapi: '1',
        playsinline: '1', // Critical for mobile
        hd: '1',
        vq: 'hd1080',
        quality: 'hd1080',
        loop: '0',
        iv_load_policy: '3',
        cc_load_policy: '0',
        fs: '1',
        color: 'red',
        theme: 'dark',
        origin: window.location.origin,
        widget_referrer: window.location.href
      });
      
      const autoplayUrl = `https://www.youtube.com/embed/4zflGSSuBcA?${autoplayParams.toString()}`;
      iframe.src = autoplayUrl;
      
      // Enhanced unmute strategy with multiple attempts
      const attemptUnmute = (attempts = 0) => {
        if (attempts >= 3) {
          console.log('🔇 Video remains muted - browser policy enforced');
          return;
        }
        
        setTimeout(() => {
          try {
            // Multiple methods to attempt unmuting
            const commands = [
              '{"event":"command","func":"unMute","args":""}',
              '{"event":"command","func":"setVolume","args":[100]}',
              '{"event":"command","func":"playVideo","args":""}'
            ];
            
            commands.forEach(command => {
              iframe.contentWindow?.postMessage(command, '*');
            });
            
            console.log(`🔊 Unmute attempt ${attempts + 1}/3`);
            
            // Retry if needed
            if (attempts < 2) {
              attemptUnmute(attempts + 1);
            }
          } catch (e) {
            console.log(`🔇 Unmute attempt ${attempts + 1} failed:`, e.message);
            if (attempts < 2) {
              attemptUnmute(attempts + 1);
            }
          }
        }, 1500 + (attempts * 1000)); // Staggered delays
      };
      
      // Start unmute attempts
      if (!isMobile) {
        attemptUnmute();
      }
      
      // Fallback: Listen for user interaction to enable sound
      const enableSoundOnInteraction = () => {
        try {
          iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
          console.log('🔊 Sound enabled via user interaction');
        } catch (e) {
          console.log('🔇 Sound enable failed:', e.message);
        }
      };
      
      // Add interaction listeners
      ['click', 'touchstart', 'keydown'].forEach(event => {
        document.addEventListener(event, enableSoundOnInteraction, { once: true, passive: true });
      });
    };

    // Start video with proper timing
    const videoTimer = setTimeout(startVideoAutoplay, 2000); // Reduced delay for faster start
    
    // Load actual stats in background
    const statsTimer = setTimeout(() => {
      const stats = getCurrentToolCount();
      setToolStats(stats);
      updateCachedStats(stats);
    }, 8000);

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
      
      {/* Background effects */}
      <InteractiveMatrixBackground />
      <AnimatedBackground />
      
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
    </div>
  );
};

export default Index;
