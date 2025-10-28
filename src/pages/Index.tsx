
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
import { getShuffledVideoPlaylist, createPlaylistEmbedUrl } from "@/utils/videoPlaylist";

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
  
  // Video playlist state
  const [videoPlaylist, setVideoPlaylist] = useState<string[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Simple ref for video without complex manager to avoid conflicts
  const mainVideoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Initialize video playlist on mount
    const playlist = getShuffledVideoPlaylist();
    setVideoPlaylist(playlist);
    console.log(`🎬 Initialized video playlist with ${playlist.length} videos`);
  }, []);

  useEffect(() => {
    // Set loaded state immediately for faster initial render
    setIsLoaded(true);
    
    // Check if video has already played on first visit
    const hasVideoPlayed = localStorage.getItem('heroVideoPlayed');
    
    // Only autoplay and unmute on first visit
    if (!hasVideoPlayed && !videoStarted) {
      const startVideoUnmute = () => {
        const iframe = mainVideoRef.current;
        if (!iframe || videoStarted) return;
        
        setVideoStarted(true);
        localStorage.setItem('heroVideoPlayed', 'true');
        console.log('🎥 Video loaded, attempting to unmute (first visit)...');
        
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
                '{"event":"command","func":"setVolume","args":[75]}',
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
          }, 1000 + (attempts * 500)); // Staggered delays
        };
        
        // Start unmute attempts after iframe is fully loaded
        attemptUnmute();
        
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

      // Start video unmute attempts after short delay to ensure iframe is loaded
      const videoTimer = setTimeout(startVideoUnmute, 1500);
      
      return () => {
        clearTimeout(videoTimer);
      };
    }
    
    // Load actual stats in background
    const statsTimer = setTimeout(() => {
      const stats = getCurrentToolCount();
      setToolStats(stats);
      updateCachedStats(stats);
    }, 8000);

    return () => {
      clearTimeout(statsTimer);
    };
  }, [videoStarted]);

  // Listen for YouTube player events to auto-advance videos
  useEffect(() => {
    if (videoPlaylist.length === 0) return;

    const handleMessage = (event: MessageEvent) => {
      // Listen for YouTube IFrame API messages
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        
        // Video ended (state 0)
        if (data.event === 'onStateChange' && data.info === 0) {
          console.log(`🎬 Video ${currentVideoIndex + 1}/${videoPlaylist.length} ended, advancing to next...`);
          
          // Move to next video in playlist
          setCurrentVideoIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % videoPlaylist.length;
            console.log(`🎬 Now playing video ${nextIndex + 1}/${videoPlaylist.length}`);
            return nextIndex;
          });
        }
      } catch (e) {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [videoPlaylist, currentVideoIndex]);

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
                  key={`video-${currentVideoIndex}`}
                  className="absolute inset-0 w-full h-full rounded-xl border border-cyan-500/30 bg-slate-800"
                  src={createPlaylistEmbedUrl(videoPlaylist, currentVideoIndex)}
                  title={`AI Web Tools Featured Video ${currentVideoIndex + 1}/${videoPlaylist.length} - 1080p HD`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  loading="eager"
                  onLoad={() => console.log(`🎥 Video ${currentVideoIndex + 1}/${videoPlaylist.length} iframe loaded and ready`)}
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
