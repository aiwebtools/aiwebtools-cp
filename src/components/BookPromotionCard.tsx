import { BookOpen, ExternalLink, Download, Eye, X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";

// Utility function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Lazy YouTube component for book section with play state callback and end detection
const LazyBookVideo = ({ 
  videoId, 
  title, 
  onPlay,
  onEnd,
  autoPlay = false
}: { 
  videoId: string; 
  title: string; 
  onPlay?: () => void;
  onEnd?: () => void;
  autoPlay?: boolean;
}) => {
  const [isLoaded, setIsLoaded] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const stopCurrentVideo = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    try {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
        'https://www.youtube-nocookie.com'
      );
      iframe.src = 'about:blank';
    } catch {
      // ignore YouTube iframe teardown errors
    }
  }, []);

  // React to autoPlay prop changes after mount (e.g. when the previous
  // video ends and the carousel promotes this card to the active slot).
  useEffect(() => {
    if (autoPlay) setIsLoaded(true);
  }, [autoPlay]);

  useEffect(() => {
    return () => {
      stopCurrentVideo();
    };
  }, [stopCurrentVideo, videoId]);

  const handlePlay = () => {
    setIsLoaded(true);
    onPlay?.();
  };

  // Listen for video end via YouTube iframe API
  useEffect(() => {
    if (!isLoaded || !onEnd) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    // Subscribe to YouTube iframe state-change events.
    // The YT iframe API requires us to post a "listening" handshake AND
    // an addEventListener command before it will emit onStateChange.
    const subscribe = () => {
      try {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'listening', id: videoId, channel: 'widget' }),
          'https://www.youtube-nocookie.com'
        );
        iframe.contentWindow?.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'addEventListener',
            args: ['onStateChange'],
            id: videoId,
            channel: 'widget',
          }),
          'https://www.youtube-nocookie.com'
        );
      } catch {
        // ignore
      }
    };

    // Subscribe once the iframe has loaded, and again after a short delay
    // in case the load already happened.
    iframe.addEventListener('load', subscribe);
    const t1 = setTimeout(subscribe, 500);
    const t2 = setTimeout(subscribe, 1500);

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube-nocookie.com') return;
      if (event.source !== iframe.contentWindow) return;
      
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data.event === 'onStateChange' && data.info === 0) {
          // Video ended (state 0)
          onEnd();
        }
      } catch (e) {
        // Ignore parse errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      iframe.removeEventListener('load', subscribe);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isLoaded, onEnd, videoId]);

  if (isLoaded) {
    return (
      <iframe
        ref={iframeRef}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1&fs=1&enablejsapi=1`}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title={title}
        loading="eager"
      />
    );
  }

  return (
    <div 
      className="absolute inset-0 cursor-pointer" 
      onClick={handlePlay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover" loading="lazy" />
      {/* Preload iframe on hover for faster playback */}
      {isHovered && (
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
        </div>
      </div>
    </div>
  );
};

const BookPromotionCard = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);
  // Pause idle auto-cycle by default so the pinned first video stays visible
  // until the user interacts with the carousel.
  const [isPaused, setIsPaused] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  
  // First video is always pinned, rest are shuffled
  const originalVideos = [
    {
      id: "EYnCtw9CsxQ",
      title: "The Book Of Deployable Robot Prompts",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      id: "lG1rMaImBNc",
      title: "The Book Of Deployable Robot Prompts 2",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: "i0zc0aeRCeI",
      title: "Coloring Book Generator Demo",
      gradient: "from-cyan-500/20 to-purple-500/20"
    },
    {
      id: "IHY7AlYJhUc",
      title: "AI Web Tools Showcase",
      gradient: "from-gold-500/20 to-amber-500/20"
    },
    {
      id: "i9e3pRXyP8s",
      title: "Book Deployable Robot Prompts Showcase",
      gradient: "from-orange-500/20 to-pink-500/20"
    },
    {
      id: "v8El2IdTwsE",
      title: "AI Tools Demo 4",
      gradient: "from-green-500/20 to-cyan-500/20"
    },
    {
      id: "LFMtWqoKqyI",
      title: "AI Tools Demo 5",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      id: "1y3zdPnJfQ4",
      title: "AI Tools Demo 6",
      gradient: "from-pink-500/20 to-purple-500/20"
    },
    {
      id: "8afw8Tq94Pg",
      title: "AI Tools Demo 7",
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      id: "864_bIK9Feo",
      title: "AI Tools Demo 8",
      gradient: "from-blue-500/20 to-green-500/20"
    },
    {
      id: "c2UpKrW4IVM",
      title: "AI Tools Demo 9",
      gradient: "from-indigo-500/20 to-violet-500/20"
    },
    {
      id: "1cnzF1bkq3o",
      title: "AI Tools Demo 10",
      gradient: "from-teal-500/20 to-cyan-500/20"
    },
    {
      id: "eAaXtMBYWYs",
      title: "AI Tools Demo 11",
      gradient: "from-violet-500/20 to-fuchsia-500/20"
    },
    {
      id: "YzGrnpsScH0",
      title: "World Reality Decoder GPT Demo",
      gradient: "from-rose-500/20 to-orange-500/20"
    },
    {
      id: "bfRpZ5r88Zg",
      title: "AI Tools Demo 13",
      gradient: "from-amber-500/20 to-rose-500/20"
    },
    {
      id: "mg7F63-PN30",
      title: "AI Web Tools Showcase 14",
      gradient: "from-lime-500/20 to-emerald-500/20"
    },
    {
      id: "us8qYI2plqg",
      title: "AI Web Tools Showcase 15",
      gradient: "from-fuchsia-500/20 to-rose-500/20"
    },
    {
      id: "cB3T05q4294",
      title: "AI Web Tools Showcase 16",
      gradient: "from-sky-500/20 to-indigo-500/20"
    },
    {
      id: "w7udrbcW_4M",
      title: "Book Promotion Feature 17",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: "LHaPL2oBUmY",
      title: "AI Web Tools Showcase 18",
      gradient: "from-emerald-500/20 to-lime-500/20"
    },
    {
      id: "qW_wIgiK3lo",
      title: "AI Web Tools Showcase 19",
      gradient: "from-purple-500/20 to-cyan-500/20"
    },
    {
      id: "uPioA-r3Wyw",
      title: "AI Web Tools Showcase 20",
      gradient: "from-amber-500/20 to-emerald-500/20"
    },
    {
      id: "0e-0hX0Kprg",
      title: "AI Web Tools Showcase 21",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "Gb_KHJjAKHk",
      title: "AI Web Tools Showcase 22",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "r4JyBndX7nk",
      title: "AI Web Tools Showcase 23",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: "mwljVsoKeZU",
      title: "AI Web Tools Showcase 24",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: "sKkiTqYh3P4",
      title: "AI Web Tools Showcase 25",
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      id: "LaQqXZeqb1Y",
      title: "AI Web Tools Showcase 26",
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      id: "DMUCTY3e-Kc",
      title: "AI Web Tools Showcase 27",
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      id: "RMMyWOnBrro",
      title: "AI Web Tools Showcase 28",
      gradient: "from-sky-500/20 to-cyan-500/20"
    },
    {
      id: "f2HJE0rHF88",
      title: "AI Web Tools Showcase 29",
      gradient: "from-teal-500/20 to-emerald-500/20"
    },
    {
      id: "vF_TMbdLCdA",
      title: "AI Web Tools Showcase 30",
      gradient: "from-green-500/20 to-lime-500/20"
    },
    {
      id: "srA41eHKfGc",
      title: "AI Web Tools Showcase 31",
      gradient: "from-yellow-500/20 to-amber-500/20"
    },
    {
      id: "37XnviX1yZ0",
      title: "AI Web Tools Showcase 32",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: "rXgZcgZnIis",
      title: "AI Web Tools Showcase 33",
      gradient: "from-rose-500/20 to-pink-500/20"
    },
    {
      id: "9TflLd00Lhw",
      title: "AI Web Tools Showcase 34",
      gradient: "from-fuchsia-500/20 to-violet-500/20"
    },
    {
      id: "O6DG34FQK6E",
      title: "AI Web Tools Showcase 35",
      gradient: "from-purple-500/20 to-indigo-500/20"
    },
    {
      id: "eQcBgybGwIg",
      title: "AI Web Tools Showcase 36",
      gradient: "from-blue-500/20 to-sky-500/20"
    },
    {
      id: "4_cIoCi9OY8",
      title: "AI Web Tools Showcase 37",
      gradient: "from-cyan-500/20 to-teal-500/20"
    },
    {
      id: "pAkZqkvd-Ak",
      title: "AI Web Tools Showcase 38",
      gradient: "from-emerald-500/20 to-green-500/20"
    },
    {
      id: "qbfeh6We4u0",
      title: "AI Web Tools Showcase 39",
      gradient: "from-lime-500/20 to-yellow-500/20"
    },
    {
      id: "nUfoKuBE9NQ",
      title: "AI Web Tools Showcase 40",
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      id: "Vln79Im3I0g",
      title: "AI Web Tools Showcase 41",
      gradient: "from-red-500/20 to-rose-500/20"
    },
    {
      id: "Yjl6rVHR_jo",
      title: "AI Web Tools Showcase 42",
      gradient: "from-pink-500/20 to-fuchsia-500/20"
    },
    {
      id: "-wZ_fWUE1mg",
      title: "AI Web Tools Showcase 43",
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      id: "Uxl3CIeScvg",
      title: "AI Web Tools Showcase 44",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "Buffx22sp6w",
      title: "AI Web Tools Showcase 45",
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      id: "xsxEBaMW8Ng",
      title: "AI Web Tools Showcase 46",
      gradient: "from-cyan-500/20 to-teal-500/20"
    },
    {
      id: "p1DAS1BFfDY",
      title: "AI Web Tools Showcase 47",
      gradient: "from-emerald-500/20 to-green-500/20"
    },
    {
      id: "me4bSdyssIg",
      title: "AI Web Tools Showcase 48",
      gradient: "from-lime-500/20 to-yellow-500/20"
    },
    {
      id: "BIRVV2retf0",
      title: "AI Web Tools Showcase 49",
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      id: "W4grI_pqzbk",
      title: "AI Web Tools Showcase 50",
      gradient: "from-violet-500/20 to-fuchsia-500/20"
    }
  ];

  // Randomize videos on component mount
  // Pin the newest showcase video first, keep IHY7AlYJhUc at 4th, shuffle the rest
  const videos = useMemo(() => {
    const firstIdx = originalVideos.findIndex(v => v.id === "W4grI_pqzbk");
    const fourthIdx = originalVideos.findIndex(v => v.id === "IHY7AlYJhUc");
    const pinned1 = originalVideos[firstIdx]; // Always first (newest showcase)
    const pinned4 = originalVideos[fourthIdx]; // Always fourth
    const rest = originalVideos.filter((_, i) => i !== firstIdx && i !== fourthIdx);
    const shuffled = shuffleArray(rest);
    // Insert pinned4 at index 3 (4th position)
    return [pinned1, shuffled[0], shuffled[1], pinned4, ...shuffled.slice(2)];
  }, []);

  const videosPerPage = 3;
  const totalDesktopPages = Math.ceil(videos.length / videosPerPage);

  // Handle video end - ALWAYS auto advance to next video and autoplay it (unmuted)
  // This fires regardless of pause state because the user explicitly watched
  // a full video and expects continuous playback.
  const handleVideoEnd = useCallback(() => {
    setCurrentVideoIndex((prev) => {
      const next = (prev + 1) % videos.length;
      setDesktopIndex(Math.floor(next / videosPerPage));
      return next;
    });
    setIsAutoPlaying(true);
    setIsPaused(true); // keep idle cycle off; the next video will autoplay itself
  }, [videos.length, videosPerPage]);

  // Auto-cycle effect - pauses when video is playing
  useEffect(() => {
    if (isPaused || isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % totalDesktopPages);
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000); // 5 seconds between transitions

    return () => clearInterval(interval);
  }, [isPaused, isAutoPlaying, totalDesktopPages, videos.length]);

  const handleVideoPlay = useCallback(() => {
    setIsPaused(true);
    setIsAutoPlaying(false);
  }, []);

  const nextDesktopPage = () => {
    setIsAutoPlaying(false);
    setIsPaused(true);
    setDesktopIndex((prev) => (prev + 1) % totalDesktopPages);
  };

  const prevDesktopPage = () => {
    setIsAutoPlaying(false);
    setIsPaused(true);
    setDesktopIndex((prev) => (prev - 1 + totalDesktopPages) % totalDesktopPages);
  };

  // Get visible videos with proper looping
  const getVisibleDesktopVideos = () => {
    const startIndex = desktopIndex * videosPerPage;
    const result = [];
    for (let i = 0; i < videosPerPage; i++) {
      const index = (startIndex + i) % videos.length;
      result.push({ ...videos[index], originalIndex: index });
    }
    return result;
  };

  const visibleDesktopVideos = getVisibleDesktopVideos();

  const handleBuyBook = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 Book purchase clicked - triggering time warp');
    createTimePortalEffect("https://www.amazon.com/Gospel-Deployable-Robots-Instructions-www-AiWebTools-Ai-ebook/dp/B0DT419F2W?dplnkId=21c79e26-79fa-4837-9c84-4aebe9053749", "The Book Of Deployable Robot Prompts");
  };

  const handleDownloadBook = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('📥 Free book download clicked');
    createTimePortalEffect("https://docs.google.com/document/d/18LHLsPXIjjtZgIAaXry5IktOGm9lacTq/edit?usp=sharing&ouid=116187507271950139405&rtpof=true&sd=true", "Free The Book Of Deployable Robot Prompts Download");
  };

  const nextVideo = () => {
    setIsAutoPlaying(false);
    setIsPaused(true);
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setIsAutoPlaying(false);
    setIsPaused(true);
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Handle touch swipe for mobile carousel
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextVideo();
      } else {
        prevVideo();
      }
    }
  };

  return (
    <section className="py-6 md:py-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #001a00 50%, #0a0a0a 100%)' }}>
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500/30 text-xs font-mono whitespace-nowrap"
            style={{
              left: `${i * 5}%`,
              top: '-100%',
              animation: `matrixRain ${3 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
              textShadow: '0 0 8px #00ff00',
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <div key={j} className="leading-4">
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Matrix Rain Keyframes */}
      <style>{`
        @keyframes matrixRain {
          0% { transform: translateY(0); }
          100% { transform: translateY(200%); }
        }
      `}</style>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cursive Gold Heading */}
          <h2 
            className="text-center mb-3 text-2xl md:text-4xl font-light tracking-wide"
            style={{
              fontFamily: "'Parisienne', 'Dancing Script', 'Great Vibes', cursive",
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #DAA520 75%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(255, 215, 0, 0.4), 0 0 60px rgba(255, 165, 0, 0.2)',
              filter: 'drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))'
            }}
          >
            Light or Fire - Music For the Soul
          </h2>
          
          <div className="bg-gradient-to-r from-green-900/60 to-emerald-900/60 backdrop-blur-sm border border-green-500/40 rounded-2xl overflow-hidden shadow-2xl shadow-green-500/10">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Book Visual - YouTube Videos */}
                <div className="lg:w-1/2 p-3 md:p-5 overflow-visible">
                {/* Desktop: Carousel showing 3 videos at a time */}
                <div className="hidden md:block relative overflow-visible">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={prevDesktopPage}
                      type="button"
                      className="relative z-20 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-900/90 rounded-full text-green-400 border border-green-500/40 transition-colors duration-150 hover:bg-green-800 active:bg-green-700 focus:outline-none cursor-pointer shadow-lg"
                      aria-label="Previous videos"
                    >
                      <ChevronLeft size={24} className="pointer-events-none" />
                    </button>

                    <div className="flex justify-center gap-4 transition-all duration-700 ease-in-out">
                      {visibleDesktopVideos.map((video, index) => (
                        <div key={`${video.originalIndex}-${video.id}`} className="relative w-48 flex-shrink-0 transition-all duration-700 ease-in-out">
                          <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16' }}>
                            <LazyBookVideo 
                              videoId={video.id} 
                              title={video.title} 
                              onPlay={handleVideoPlay}
                              onEnd={handleVideoEnd}
                              autoPlay={isAutoPlaying && video.originalIndex === currentVideoIndex}
                            />
                          </div>
                          <div className={`absolute -inset-2 bg-gradient-to-r ${video.gradient} rounded-lg blur-xl -z-10`}></div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={nextDesktopPage}
                      type="button"
                      className="relative z-20 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-900/90 rounded-full text-green-400 border border-green-500/40 transition-colors duration-150 hover:bg-green-800 active:bg-green-700 focus:outline-none cursor-pointer shadow-lg"
                      aria-label="Next videos"
                    >
                      <ChevronRight size={24} className="pointer-events-none" />
                    </button>
                  </div>

                  {/* Desktop dot indicators */}
                  <div className="flex justify-center gap-2 mt-4">
                    {Array.from({ length: totalDesktopPages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setDesktopIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === desktopIndex ? 'bg-cyan-400' : 'bg-gray-500'
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Mobile: Carousel with swipe and lazy loading */}
                <div 
                  className="md:hidden relative overflow-hidden"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="relative flex justify-center items-center py-2">
                    {/* Peek of previous video */}
                    {(() => {
                      const prevIdx = (currentVideoIndex - 1 + videos.length) % videos.length;
                      const nextIdx = (currentVideoIndex + 1) % videos.length;
                      return (
                        <>
                          <button
                            onClick={prevVideo}
                            type="button"
                            aria-label="Previous video"
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-green-900/90 rounded-full text-green-400 border border-green-500/40 transition-colors duration-150 active:bg-green-700 focus:outline-none cursor-pointer shadow-lg"
                          >
                            <ChevronLeft size={20} className="pointer-events-none" />
                          </button>

                          <div className="flex items-center justify-center gap-2 w-full">
                            {/* Left peek */}
                            <button
                              type="button"
                              onClick={prevVideo}
                              aria-label="Show previous video"
                              className="relative w-16 flex-shrink-0 opacity-50 transition-all duration-500"
                              style={{ aspectRatio: '9/16' }}
                            >
                              <img
                                src={`https://i.ytimg.com/vi/${videos[prevIdx].id}/hqdefault.jpg`}
                                alt={videos[prevIdx].title}
                                className="w-full h-full object-cover rounded-lg"
                                loading="lazy"
                              />
                            </button>

                            {/* Active video */}
                            <div className="relative w-44 flex-shrink-0 transition-all duration-700 ease-in-out">
                              <div className="relative rounded-xl overflow-hidden shadow-2xl ring-2 ring-cyan-400/40" style={{ aspectRatio: '9/16' }}>
                                <LazyBookVideo 
                                  videoId={videos[currentVideoIndex].id} 
                                  title={videos[currentVideoIndex].title} 
                                  onPlay={handleVideoPlay}
                                  onEnd={handleVideoEnd}
                                  autoPlay={isAutoPlaying}
                                />
                              </div>
                              <div className={`absolute -inset-2 bg-gradient-to-r ${videos[currentVideoIndex].gradient} rounded-lg blur-xl -z-10 transition-all duration-700`}></div>
                            </div>

                            {/* Right peek */}
                            <button
                              type="button"
                              onClick={nextVideo}
                              aria-label="Show next video"
                              className="relative w-16 flex-shrink-0 opacity-50 transition-all duration-500"
                              style={{ aspectRatio: '9/16' }}
                            >
                              <img
                                src={`https://i.ytimg.com/vi/${videos[nextIdx].id}/hqdefault.jpg`}
                                alt={videos[nextIdx].title}
                                className="w-full h-full object-cover rounded-lg"
                                loading="lazy"
                              />
                            </button>
                          </div>

                          <button
                            onClick={nextVideo}
                            type="button"
                            aria-label="Next video"
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-green-900/90 rounded-full text-green-400 border border-green-500/40 transition-colors duration-150 active:bg-green-700 focus:outline-none cursor-pointer shadow-lg"
                          >
                            <ChevronRight size={20} className="pointer-events-none" />
                          </button>
                        </>
                      );
                    })()}
                  </div>

                  <div className="flex justify-center gap-2 mt-4">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVideoIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentVideoIndex ? 'bg-cyan-400' : 'bg-gray-500'
                        }`}
                        aria-label={`Go to video ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-3 md:p-5">
                <div className="text-center lg:text-left">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                      The Book Of Deployable Robot Prompts
                    </span>
                  </h2>
                  
                  <p className="text-green-200 text-sm mb-2">
                    By <span className="text-green-400 font-semibold" style={{ textShadow: '0 0 10px #00ff00' }}>AIWebTools.AI</span>
                  </p>
                  
                  <div className="space-y-1 mb-3 text-sm">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-green-300">
                      <span className="text-green-400">🤖</span>
                      <span>Over 60 Deployable Robots & Key AI Insights</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-green-300">
                      <span className="text-green-400">⚡</span>
                      <span>Put you ahead of the game with cutting-edge AI</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-green-300">
                      <span className="text-green-400">📋</span>
                      <span>Copy & paste ready prompts for personal AI tool deployment</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        onClick={handleBuyBook}
                        size="sm"
                        className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-4 py-2 rounded-lg text-sm shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                      >
                        <BookOpen className="mr-1.5" size={16} />
                        📖 Buy on Amazon
                        <ExternalLink className="ml-1.5" size={14} />
                      </Button>

                      <Button
                        onClick={handleDownloadBook}
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-4 py-2 rounded-lg text-sm shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                      >
                        <Download className="mr-1.5" size={16} />
                        📥 Free Copy (DOCX)
                        <ExternalLink className="ml-1.5" size={14} />
                      </Button>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-bold px-4 py-2 rounded-lg text-sm shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 border border-green-400/30"
                        >
                          <Eye className="mr-1.5" size={16} />
                          👁️ View Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl h-[80vh]">
                        <DialogHeader>
                          <DialogTitle>The Book Of Deployable Robot Prompts - Preview</DialogTitle>
                        </DialogHeader>
                        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                          <iframe 
                            src="https://drive.google.com/file/d/18LHLsPXIjjtZgIAaXry5IktOGm9lacTq/preview" 
                            className="w-full flex-1 rounded-lg pointer-events-auto select-text"
                            allow="autoplay"
                            title="The Book Of Deployable Robot Prompts Preview"
                            style={{ userSelect: 'text' }}
                          />
                          <DialogClose asChild>
                            <Button
                              variant="outline"
                              size="lg"
                              className="bg-red-500/10 hover:bg-red-500/20 border-red-500 text-red-500 hover:text-red-600"
                            >
                              <X className="mr-2" size={20} />
                              Close Preview
                            </Button>
                          </DialogClose>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPromotionCard;
