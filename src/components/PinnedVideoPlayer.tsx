import { useState, useEffect, useCallback, useRef, memo, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, SkipForward, Volume2, VolumeX } from "lucide-react";
import { allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";

const SESSION_CLOSED_KEY = "pinned-video-closed";
const SHUFFLED_TOOLS_KEY = "pinned-video-shuffled-tools";
const CURRENT_INDEX_KEY = "pinned-video-current-index";

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

// Get or create shuffled tools - persisted in sessionStorage to survive navigation
const getShuffledToolsWithVideos = (): Tool[] => {
  try {
    const cached = sessionStorage.getItem(SHUFFLED_TOOLS_KEY);
    if (cached) {
      const indices = JSON.parse(cached) as number[];
      return indices.map(i => allTools[i]).filter(Boolean);
    }
  } catch {}
  
  const toolsWithIndices = allTools
    .map((tool, index) => ({ tool, index }))
    .filter(({ tool }) => extractYouTubeId(tool.videoUrl || '') !== null);
  
  const shuffled = shuffleArray(toolsWithIndices);
  
  try {
    sessionStorage.setItem(SHUFFLED_TOOLS_KEY, JSON.stringify(shuffled.map(t => t.index)));
  } catch {}
  
  return shuffled.map(t => t.tool);
};

// Persist current index to survive navigation
const getStoredIndex = (): number => {
  try {
    const stored = sessionStorage.getItem(CURRENT_INDEX_KEY);
    return stored ? parseInt(stored, 10) : 0;
  } catch {
    return 0;
  }
};

const setStoredIndex = (index: number) => {
  try {
    sessionStorage.setItem(CURRENT_INDEX_KEY, String(index));
  } catch {}
};

// Lazy-init tools list ONCE at module level to prevent recalc on re-renders
let cachedToolsWithVideos: Tool[] | null = null;
const getToolsWithVideosCached = (): Tool[] => {
  if (!cachedToolsWithVideos) {
    cachedToolsWithVideos = getShuffledToolsWithVideos();
  }
  return cachedToolsWithVideos;
};

const PinnedVideoPlayer = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerMountedRef = useRef(false);
  
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
  const [shouldShow, setShouldShow] = useState(true);
  
  // Persisted current index - survives navigation
  const [currentIndex, setCurrentIndex] = useState(getStoredIndex);
  const [isMuted, setIsMuted] = useState(true);
  
  // Shuffled tools - computed once at module level, never recalculated
  const toolsWithVideos = useMemo(() => getToolsWithVideosCached(), []);
  
  // Track video src separately to prevent unnecessary iframe reloads
  const [videoSrc, setVideoSrc] = useState<string>("");
  const lastVideoIdRef = useRef<string>("");

  const currentTool: Tool | undefined = toolsWithVideos[currentIndex];
  const currentVideoId = currentTool ? extractYouTubeId(currentTool.videoUrl || '') : null;
  
  // Persist index changes
  useEffect(() => {
    setStoredIndex(currentIndex);
  }, [currentIndex]);
  
  // Update video src only when video ID actually changes
  useEffect(() => {
    if (!currentVideoId) return;
    if (currentVideoId === lastVideoIdRef.current) return;
    
    lastVideoIdRef.current = currentVideoId;
    // Use stable origin reference - enable JS API for state change detection
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const newSrc = `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1&playsinline=1&loop=0&origin=${encodeURIComponent(origin)}&widget_referrer=${encodeURIComponent(origin)}`;
    setVideoSrc(newSrc);
    playerMountedRef.current = true;
  }, [currentVideoId]);
  
  // Handle mute/unmute via postMessage instead of iframe reload
  useEffect(() => {
    if (!iframeRef.current || !playerMountedRef.current) return;
    
    try {
      const command = isMuted ? 'mute' : 'unMute';
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: command }),
        'https://www.youtube.com'
      );
    } catch {}
  }, [isMuted]);
  
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
          setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
          return;
        }
        
        // Also check for infoDelivery with playerState (0 = ended)
        if (data?.info?.playerState === 0) {
          setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
          return;
        }
        
        // Check for onReady event to request state updates
        if (data?.event === "onReady" && iframeRef.current) {
          // Request the player to send state updates
          iframeRef.current.contentWindow?.postMessage(
            JSON.stringify({ event: 'listening' }),
            'https://www.youtube.com'
          );
        }
      } catch {
        // Ignore parse errors
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isVisible, toolsWithVideos.length]);

  // Reliable fallback: auto-advance every 30 seconds (most demo videos are under 30s)
  useEffect(() => {
    if (!isVisible || toolsWithVideos.length === 0) return;
    
    const timeout = setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
    }, 30000);
    
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
  if (!isVisible || !hasScrolledEnough || toolsWithVideos.length === 0 || !currentTool || !currentVideoId || !videoSrc) {
    return null;
  }

  return (
    <div 
      className={`fixed z-50 bottom-3 left-3 w-[160px] sm:w-[150px] md:w-36 ${
        shouldShow ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ transform: 'translateZ(0)', transition: 'opacity 0.3s ease-out' }}
    >
      <div 
        className="bg-gray-900/95 backdrop-blur-sm rounded-lg border border-cyan-500/40 overflow-hidden shadow-2xl"
        style={{
          boxShadow: '0 0 15px rgba(34, 211, 238, 0.3), 0 0 30px rgba(168, 85, 247, 0.15), 0 6px 24px rgba(0, 0, 0, 0.4)'
        }}
      >
        {/* Tool title header with X button - allow wrap */}
        <div className="flex items-start justify-between gap-1 px-1.5 py-1 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-cyan-500/30">
          <p 
            className="text-[7px] font-bold leading-tight flex-1 line-clamp-2"
            style={{
              color: '#FFD700',
              textShadow: '0 0 6px #FFD700'
            }}
            title={`${currentTool.title} - ${currentTool.description?.slice(0, 100) || ''}`}
          >
            {currentTool.emoji || "🤖"} {currentTool.title}
          </p>
          <button
            onClick={handleClose}
            className="w-4 h-4 flex items-center justify-center rounded bg-black/40 hover:bg-red-500/70 text-white/60 hover:text-white transition-colors flex-shrink-0"
            title="Close"
          >
            <X className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Video Container - stable iframe that doesn't remount on navigation */}
        <div className="relative aspect-video bg-black" style={{ minHeight: '70px' }}>
          <iframe
            ref={iframeRef}
            src={videoSrc}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={currentTool.title}
            style={{ minHeight: '70px' }}
          />
        </div>

        {/* Controls bar - mute, next, try */}
        <div className="flex items-center gap-1.5 px-1.5 py-1 bg-gray-800/95 border-t border-cyan-500/20">
          <button
            onClick={toggleMute}
            className="w-5 h-5 flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-white transition-all flex-shrink-0"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-2.5 h-2.5" /> : <Volume2 className="w-2.5 h-2.5" />}
          </button>
          <button
            onClick={handleNextVideo}
            className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-500 text-white transition-all flex-shrink-0"
            title="Next Video"
          >
            <SkipForward className="w-2.5 h-2.5" />
          </button>
          {/* Square TRY button */}
          <Button
            onClick={handleToolClick}
            size="sm"
            className="w-5 h-5 p-0 text-[6px] rounded bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold flex-shrink-0"
          >
            TRY
          </Button>
        </div>
      </div>
    </div>
  );
});

PinnedVideoPlayer.displayName = 'PinnedVideoPlayer';

export default PinnedVideoPlayer;