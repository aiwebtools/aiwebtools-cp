import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, SkipForward, Volume2, VolumeX } from "lucide-react";
import { allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";

const SESSION_CLOSED_KEY = "pinned-video-closed";

// Extract YouTube video ID from various URL formats
const extractYouTubeId = (url: string): string | null => {
  if (!url) return null;
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) return match[1];
  }
  return null;
};

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get shuffled tools - computed once per page load (truly random each visit)
const getShuffledToolsWithVideos = (): Tool[] => {
  const filtered = allTools.filter(tool => {
    const videoId = extractYouTubeId(tool.videoUrl || '');
    return videoId !== null;
  });
  return shuffleArray(filtered);
};

const PinnedVideoPlayer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Check if on homepage
  const isHomepage = location.pathname === "/" || location.pathname === "";
  
  // Check if closed this session
  const [isVisible, setIsVisible] = useState(() => {
    return sessionStorage.getItem(SESSION_CLOSED_KEY) !== "true";
  });
  
  // Only require scroll on homepage, show immediately on other pages
  const [hasScrolledEnough, setHasScrolledEnough] = useState(!isHomepage);
  
  // Hide when user is viewing the main tool video on a detail page
  const [isMainVideoVisible, setIsMainVideoVisible] = useState(false);
  // Track if player should be shown with animation
  const [shouldShow, setShouldShow] = useState(true);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  
  // Shuffled tools - computed once when component mounts (random each page load)
  const [toolsWithVideos] = useState(() => getShuffledToolsWithVideos());

  const currentTool: Tool | undefined = toolsWithVideos[currentIndex];
  
  // Handle smooth fade animation when main video visibility changes
  useEffect(() => {
    setShouldShow(!isMainVideoVisible);
  }, [isMainVideoVisible]);
  
  // Listen for main tool video visibility changes
  useEffect(() => {
    const handleToolVideoVisibility = (event: CustomEvent<{ isVisible: boolean }>) => {
      setIsMainVideoVisible(event.detail.isVisible);
    };
    
    window.addEventListener('toolVideoVisibility', handleToolVideoVisibility as EventListener);
    return () => {
      window.removeEventListener('toolVideoVisibility', handleToolVideoVisibility as EventListener);
    };
  }, []);
  const currentVideoId = currentTool ? extractYouTubeId(currentTool.videoUrl || '') : null;

  // Detect scroll position - only needed on homepage
  useEffect(() => {
    // If not on homepage, always show
    if (!isHomepage) {
      setHasScrolledEnough(true);
      return;
    }
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show after scrolling 600px down (past hero and main categories)
      setHasScrolledEnough(scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial position
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  // Listen for YouTube iframe API messages to detect video end
  useEffect(() => {
    if (!isVisible || toolsWithVideos.length === 0) return;

    const handleMessage = (event: MessageEvent) => {
      // YouTube sends messages when video state changes
      if (event.origin !== "https://www.youtube.com") return;
      
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        
        // Check for video ended state (state 0 = ended)
        if (data?.event === "onStateChange" && data?.info === 0) {
          console.log("🎬 Video ended, advancing to next...");
          setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
        }
        
        // Also check for infoDelivery with playerState
        if (data?.info?.playerState === 0) {
          console.log("🎬 Video ended (infoDelivery), advancing to next...");
          setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
        }
      } catch {
        // Ignore parse errors
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isVisible, toolsWithVideos.length]);

  // Reliable fallback: auto-advance every 45 seconds (most YouTube shorts/demos are under this)
  useEffect(() => {
    if (!isVisible || toolsWithVideos.length === 0) return;
    
    const timeout = setTimeout(() => {
      console.log("⏰ Auto-advance timeout triggered");
      setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
    }, 45000); // 45 second fallback - more reasonable for demo videos
    
    return () => clearTimeout(timeout);
  }, [isVisible, toolsWithVideos.length, currentIndex]);

  const handleNextVideo = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
  }, [toolsWithVideos.length]);

  const handleClose = useCallback(() => {
    sessionStorage.setItem(SESSION_CLOSED_KEY, "true");
    setIsVisible(false);
  }, []);

  const handleToolClick = useCallback(() => {
    if (!currentTool) return;
    
    // Generate URL slug from tool title
    const slug = currentTool.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    navigate(`/tool/${slug}`);
  }, [currentTool, navigate]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  // Don't render if permanently closed, no tools, or haven't scrolled past hero yet
  if (!isVisible || !hasScrolledEnough || toolsWithVideos.length === 0 || !currentTool || !currentVideoId) {
    return null;
  }

  // Enable JS API for video end detection - add widget_referrer for proper event delivery
  const videoSrc = `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&widget_referrer=${encodeURIComponent(window.location.href)}`;

  return (
    <div 
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        shouldShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      } ${
        isMinimized 
          ? "bottom-3 left-3 w-12 h-12" 
          : "bottom-3 left-3 w-[200px] sm:w-[180px] md:w-32"
      }`}
    >
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform animate-pulse"
          title="Open Video Player"
        >
          <span className="text-xs">▶</span>
        </button>
      ) : (
        <div 
          className="bg-gray-900/95 backdrop-blur-sm rounded-lg border border-cyan-500/40 overflow-hidden shadow-2xl"
          style={{
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.3), 0 0 30px rgba(168, 85, 247, 0.15), 0 6px 24px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Video Container */}
          <div className="relative aspect-video bg-black" style={{ minHeight: '80px' }}>
            <iframe
              ref={iframeRef}
              key={`${currentVideoId}-${isMuted}-${currentIndex}`}
              src={videoSrc}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title={currentTool.title}
              style={{ minHeight: '80px' }}
            />
            
            {/* Tiny corner controls - top right */}
            <div className="absolute top-1 right-1 flex items-center gap-0.5">
              <button
                onClick={() => setIsMinimized(true)}
                className="w-4 h-4 flex items-center justify-center rounded bg-black/60 hover:bg-yellow-500/70 text-white/80 hover:text-white transition-colors"
                title="Minimize"
              >
                <span className="text-[8px] font-bold leading-none">−</span>
              </button>
              <button
                onClick={handleClose}
                className="w-4 h-4 flex items-center justify-center rounded bg-black/60 hover:bg-red-500/70 text-white/80 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>

          {/* Controls bar - compact */}
          <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-800/95 border-t border-cyan-500/20">
            <button
              onClick={toggleMute}
              className="w-5 h-5 flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-white transition-all"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-2.5 h-2.5" /> : <Volume2 className="w-2.5 h-2.5" />}
            </button>
            <button
              onClick={handleNextVideo}
              className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-500 text-white transition-all"
              title="Next Video"
            >
              <SkipForward className="w-2.5 h-2.5" />
            </button>
            {/* Tool name inline */}
            <p 
              className="flex-1 text-[9px] font-semibold truncate ml-1"
              style={{
                color: '#FFD700',
                textShadow: '0 0 6px #FFD700'
              }}
              title={currentTool.title}
            >
              {currentTool.emoji || "🤖"} {currentTool.title}
            </p>
          </div>
            
          {/* CTA Button */}
          <Button
            onClick={handleToolClick}
            size="sm"
            className="w-full h-6 text-[9px] rounded-none rounded-b-lg bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold"
          >
            🚀 TRY IT
          </Button>
        </div>
      )}
    </div>
  );
};

export default PinnedVideoPlayer;