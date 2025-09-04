
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
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
  </div>
);

const Index = () => {
  // Performance monitoring
  const { startTimer, endTimer } = usePerformanceMonitor();
  
  // Use fast cached stats initially for better performance
  const [toolStats, setToolStats] = useState(getFastToolCount());
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  
  // Simple ref for video without complex manager to avoid conflicts
  const mainVideoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Performance monitoring for initial load
    const loadStartTime = startTimer('page-load');
    
    // Set loaded state immediately for faster initial render
    setIsLoaded(true);
    
    endTimer(loadStartTime, 'Initial page load', 1000);
    
    // EPIC INTRO: Coordinate video autoplay with voice system for perfect timing
    const startVideoUnmute = () => {
      const iframe = mainVideoRef.current;
      if (!iframe || videoStarted) return;
      
      setVideoStarted(true);
      console.log('🎥 EPIC VIDEO: Starting autoplay and preparing for voice coordination...');
      
      // ENHANCED: Force autoplay with multiple attempts for universal compatibility
      const forceAutoplay = (attempts = 0) => {
        if (attempts >= 3) {
          console.log('🎥 Video autoplay established');
          return;
        }
        
        setTimeout(() => {
          try {
            const autoplayCommands = [
              '{"event":"command","func":"playVideo","args":""}',
              '{"event":"command","func":"setVolume","args":[0]}', // Start muted for autoplay
              '{"event":"command","func":"seekTo","args":[0, true]}' // Ensure starts from beginning
            ];
            
            autoplayCommands.forEach(command => {
              iframe.contentWindow?.postMessage(command, '*');
            });
            
            console.log(`🎥 Autoplay attempt ${attempts + 1}/3`);
            
            if (attempts < 2) {
              forceAutoplay(attempts + 1);
            }
          } catch (e) {
            console.log(`🎥 Autoplay attempt ${attempts + 1} failed:`, e.message);
            if (attempts < 2) {
              forceAutoplay(attempts + 1);
            }
          }
        }, 500 + (attempts * 300)); // Quick successive attempts
      };

      // Enhanced unmute strategy AFTER voice sequence completes
      const attemptUnmute = (attempts = 0) => {
        if (attempts >= 5) {
          console.log('🔇 Video remains muted - browser policy enforced');
          return;
        }
        
        setTimeout(() => {
          try {
            // Multiple methods to attempt unmuting AFTER epic voice
            const commands = [
              '{"event":"command","func":"unMute","args":""}',
              '{"event":"command","func":"setVolume","args":[85]}', // Higher volume for impact
              '{"event":"command","func":"playVideo","args":""}'
            ];
            
            commands.forEach(command => {
              iframe.contentWindow?.postMessage(command, '*');
            });
            
            console.log(`🔊 EPIC UNMUTE attempt ${attempts + 1}/5 (coordinated with voice)`);
            
            // Retry if needed with progressive delays
            if (attempts < 4) {
              attemptUnmute(attempts + 1);
            }
          } catch (e) {
            console.log(`🔇 Unmute attempt ${attempts + 1} failed:`, e.message);
            if (attempts < 4) {
              attemptUnmute(attempts + 1);
            }
          }
        }, 800 + (attempts * 400)); // Longer delays for unmuting
      };
      
      // CRITICAL TIMING: Start autoplay immediately, wait for voice to finish before unmute
      forceAutoplay();
      
      // Listen for voice completion to coordinate timing
      let voiceCompleted = false;
      const handleVoiceCompletion = () => {
        voiceCompleted = true;
        console.log('🎵 Voice sequence completed - now safe to unmute video');
        
        // Start unmute sequence after voice is done
        setTimeout(() => {
          console.log('🔊 Starting video unmute sequence AFTER epic voice...');
          attemptUnmute();
        }, 1000);
      };
      
      // Listen for voice completion event
      window.addEventListener('welcomeVoiceComplete', handleVoiceCompletion);
      
      // Fallback: If no voice completion event after 10 seconds, proceed anyway
      setTimeout(() => {
        if (!voiceCompleted) {
          console.log('🔄 Voice timeout - proceeding with video unmute (fallback)');
          attemptUnmute();
        }
      }, 10000);
      
      // Enhanced interaction-based sound enabling
      const enableSoundOnInteraction = () => {
        try {
          const enhancedCommands = [
            '{"event":"command","func":"unMute","args":""}',
            '{"event":"command","func":"setVolume","args":[85]}',
            '{"event":"command","func":"playVideo","args":""}'
          ];
          
          enhancedCommands.forEach(command => {
            iframe.contentWindow?.postMessage(command, '*');
          });
          
          console.log('🔊 EPIC SOUND: Enabled via user interaction');
        } catch (e) {
          console.log('🔇 Sound enable failed:', e.message);
        }
      };
      
      // Add comprehensive interaction listeners for sound
      ['click', 'touchstart', 'touchend', 'keydown', 'scroll', 'mousemove'].forEach(event => {
        document.addEventListener(event, enableSoundOnInteraction, { once: true, passive: true });
      });
    };

    // IMMEDIATE: Start video autoplay immediately for instant visual impact
    const videoTimer = setTimeout(startVideoUnmute, 200); // Much faster video start
    
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
                  src="https://www.youtube.com/embed/4zflGSSuBcA?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1&hd=1&vq=hd1080&quality=hd1080&loop=0&iv_load_policy=3&cc_load_policy=0&fs=1&color=red&theme=dark"
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
