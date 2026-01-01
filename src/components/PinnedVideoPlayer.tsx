import { useState, useEffect, useCallback, useRef, memo, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, SkipForward, SkipBack, Volume2, VolumeX } from "lucide-react";
import { allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";

const SESSION_CLOSED_KEY = "pinned-video-closed";
const SHUFFLED_TOOLS_KEY = "pinned-video-shuffled-tools";
const CURRENT_INDEX_KEY = "pinned-video-current-index";

// Detect if device is mobile
const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
};

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

// Priority "wow factor" tools that blow minds - these play FIRST
const WOW_FACTOR_TOOLS = new Set([
  // Creative powerhouses
  "Book Writer GPT",
  "Movie Script Writer GPT", 
  "Movie Scriptwriter GPT",
  "Movie Scene Maker GPT",
  "Movie Maker Studio AI SUITE",
  "Music Video Maker AI Studio",
  "Children's Picture Book Maker GPT",
  "Playwriter GPT",
  "Podcast Script Writer GPT",
  
  // Mind-blowing educational
  "College Degree GPT",
  "Learn Any Course GPT",
  "Learn Any Skill GPT",
  "Home-Schooling Assistant GPT",
  "HomeSchool GPT",
  
  // Time & history experiences
  "Time Machine GPT",
  "Talk to History GPT",
  "Talk to the Gods GPT",
  "Resurrection GPT",
  "Titanic Resurrections GPT",
  "Native American History Time Machine GPT",
  "Historical Headlines GPT",
  
  // Space & exploration
  "Stellaris: AI Space Explorer",
  "Phenomenon Explorer AI Suite",
  
  // Self-sufficiency & survival - HELP THE MEEK THRIVE
  "Survivalist GPT",
  "Agronomus",
  "Agronomus AI Farming Expert",
  "Fisherman GPT",
  "Fungus GPT",
  "Fungus Whisperer GPT",
  "Home Renovator GPT",
  "Solar Land Assessor GPT",
  "Sustainable Futures GPT",
  "Food Quality Inspector GPT",
  
  // Automotive & practical life
  "Automobile GPT",
  
  // Health & wellness - EMPOWER THE PEOPLE
  "Personalized DR. GPT",
  "Veterinarian GPT",
  "Pet Care GPT",
  "Mental Wellness GPT",
  "Cannabis GPT",
  "Pharmaceutical Assistant GPT",
  
  // Financial empowerment
  "Trader GPT",
  "Taxes GPT",
  "Insurance Claims GPT",
  "Property Data Finder GPT",
  "Predictive Credit Score GPT",
  
  // Legal & civic empowerment - VOICE FOR THE VOICELESS
  "Public Defender GPT",
  "Legislation Writer GPT",
  "Legislator Link GPT",
  "Public Testimony Writer GPT",
  "Contract Review Bot",
  "Legal Draftsmith GPT",
  
  // Career & business
  "Resume & Job Finder Ai Suite",
  "Business Plan Generator GPT",
  "Startup Validator GPT",
  "Training Manual Generator GPT",
  "Grant Writer GPT",
  
  // Mind-expanding
  "GODMODE GPT",
  "Illuminous World Data Explorer GPT",
  "NEO MATRIX GPT",
  "Oraculum",
  "Fortune Teller GPT",
  "Dream Interpreter GPT",
  "Imagination Traveler GPT",
  
  // Unique & groundbreaking
  "ImmortalizeME",
  "ImmortalizeMe",
  "Nikola Tesla GPT",
  "Albert Einstein GPT",
  "Alan Watts GPT",
  "Mary Magdalene GPT",
  "Sophia Aeterna",
  
  // Professional game-changers
  "Engineering GPT AI Suite",
  "Data Research Analysis Report GPT",
  "Drill Baby Drill Ai Suite",
  
  // Creative design
  "Graphic & Cover Design GPT",
  "Tattoo Designer GPT",
  "RESTYLE ME GPT",
  "Coloring Book Generator GPT",
  
  // Investigation & analysis
  "Criminologist GPT",
  "Fact Checker GPT",
  "Indiana Archaeologist GPT",
  "Historical Apothecary GPT",
  "Alchemist Scientist GPT",
  
  // Social good & peace
  "Social Safety Net GPT",
  "Global Peace Restoration GPT",
  "UBI Strategist GPT",
  "Marriage Mender GPT",
  
  // Safety & emergency
  "Firefighter GPT",
  "Firearms Safety Instructor GPT",
  "Cyber Security GPT",
  
  // Collectibles & appraisal
  "Antique and Collectible Appraisal GPT",
  "Artwork & Vintage Appraisal GPT",
  "Material Valuation GPT",
]);

// Get shuffled tools with priority ordering - FRESH every page load
const getShuffledToolsWithVideos = (): Tool[] => {
  // Always generate fresh random order (no caching)
  const toolsWithVideos = allTools
    .filter(tool => extractYouTubeId(tool.videoUrl || '') !== null);
  
  // Separate into priority tiers
  const wowFactorTools: Tool[] = [];
  const regularTools: Tool[] = [];
  
  toolsWithVideos.forEach(tool => {
    // Check if tool title matches any wow factor tool (case-insensitive partial match)
    const isWowFactor = Array.from(WOW_FACTOR_TOOLS).some(wowTitle => 
      tool.title.toLowerCase().includes(wowTitle.toLowerCase()) ||
      wowTitle.toLowerCase().includes(tool.title.toLowerCase())
    );
    
    if (isWowFactor) {
      wowFactorTools.push(tool);
    } else {
      regularTools.push(tool);
    }
  });
  
  // Shuffle each tier independently for variety
  const shuffledWow = shuffleArray(wowFactorTools);
  const shuffledRegular = shuffleArray(regularTools);
  
  // Wow factor tools first, then regular tools
  const result = [...shuffledWow, ...shuffledRegular];
  
  // Store indices in session for navigation persistence only (not order persistence)
  try {
    const indices = result.map(tool => allTools.indexOf(tool));
    sessionStorage.setItem(SHUFFLED_TOOLS_KEY, JSON.stringify(indices));
  } catch {}
  
  return result;
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

// Generate fresh shuffled list on each page load
let cachedToolsWithVideos: Tool[] | null = null;
let lastGenerationTime = 0;

const getToolsWithVideosCached = (): Tool[] => {
  const now = Date.now();
  // Regenerate if more than 1 second since last generation (new page load)
  // or if not yet generated
  if (!cachedToolsWithVideos || (now - lastGenerationTime > 1000)) {
    cachedToolsWithVideos = getShuffledToolsWithVideos();
    lastGenerationTime = now;
    // Reset index to 0 for fresh experience
    setStoredIndex(0);
  }
  return cachedToolsWithVideos;
};

const PinnedVideoPlayer = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerMountedRef = useRef(false);
  const advanceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
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
  
  // Start unmuted on desktop, muted on mobile (browser autoplay policy)
  const [isMuted, setIsMuted] = useState(() => isMobileDevice());
  
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
    const isMobile = isMobileDevice();
    // Use stable origin reference - enable JS API for state change detection
    // Start muted for mobile (browser requirement), unmuted for desktop
    const muteParam = isMobile ? '1' : '0';
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const newSrc = `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=${muteParam}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1&playsinline=1&loop=0&origin=${encodeURIComponent(origin)}&widget_referrer=${encodeURIComponent(origin)}`;
    setVideoSrc(newSrc);
    playerMountedRef.current = true;
    
    // Update mute state to match
    setIsMuted(isMobile);
    
    // If starting unmuted (desktop), notify tool page videos to mute
    if (!isMobile) {
      window.dispatchEvent(new CustomEvent('pinnedPlayerPlaying'));
    }
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
  
  // Mute pinned player when tool page video starts playing
  useEffect(() => {
    const handleToolVideoPlaying = () => {
      // Mute pinned player when tool video plays
      setIsMuted(true);
    };
    
    window.addEventListener('toolVideoPlaying', handleToolVideoPlaying);
    return () => {
      window.removeEventListener('toolVideoPlaying', handleToolVideoPlaying);
    };
  }, []);
  
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
  // Use multiple detection methods for maximum browser compatibility
  useEffect(() => {
    // If not on homepage, always show
    if (!isHomepage) {
      setHasScrolledEnough(true);
      return;
    }
    
    const getScrollY = (): number => {
      // Try multiple methods for maximum browser compatibility
      if (typeof window.scrollY === 'number') return window.scrollY;
      if (typeof window.pageYOffset === 'number') return window.pageYOffset;
      if (document.documentElement) return document.documentElement.scrollTop;
      if (document.body) return document.body.scrollTop;
      return 0;
    };
    
    const handleScroll = () => {
      const scrollY = getScrollY();
      // Show after scrolling 600px down (past hero and main categories)
      setHasScrolledEnough(scrollY > 600);
    };

    // Listen on multiple targets for maximum compatibility
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    
    // Check initial position
    handleScroll();
    
    // Also check periodically in case scroll events are missed (some embedded browsers)
    const intervalId = setInterval(handleScroll, 1000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, [isHomepage]);

  // Auto-advance function
  const advanceToNextVideo = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
  }, [toolsWithVideos.length]);

  // Track when video started to prevent premature skipping
  const videoStartTimeRef = useRef<number>(Date.now());
  const hasReceivedPlayStateRef = useRef(false);
  
  // Reset timing when video changes
  useEffect(() => {
    videoStartTimeRef.current = Date.now();
    hasReceivedPlayStateRef.current = false;
  }, [currentVideoId]);

  // Listen for YouTube iframe API messages to detect video end
  useEffect(() => {
    if (!isVisible || toolsWithVideos.length === 0) return;

    const handleMessage = (event: MessageEvent) => {
      // YouTube sends messages when video state changes
      if (event.origin !== "https://www.youtube.com") return;
      
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        
        // Track when we receive a "playing" state (state 1)
        if (data?.event === "onStateChange" && data?.info === 1) {
          hasReceivedPlayStateRef.current = true;
          videoStartTimeRef.current = Date.now();
        }
        if (data?.info?.playerState === 1) {
          hasReceivedPlayStateRef.current = true;
          videoStartTimeRef.current = Date.now();
        }
        
        // Only advance if video has been playing for at least 8 seconds
        // This prevents false "ended" signals during loading
        const timeSinceStart = Date.now() - videoStartTimeRef.current;
        const MIN_PLAY_TIME = 8000; // 8 seconds minimum
        
        // Check for video ended state (state 0 = ended)
        if (data?.event === "onStateChange" && data?.info === 0) {
          if (hasReceivedPlayStateRef.current && timeSinceStart > MIN_PLAY_TIME) {
            console.log('[PinnedPlayer] Video ended via onStateChange after', timeSinceStart, 'ms, advancing...');
            advanceToNextVideo();
          } else {
            console.log('[PinnedPlayer] Ignoring premature end signal, only', timeSinceStart, 'ms elapsed');
          }
          return;
        }
        
        // Also check for infoDelivery with playerState (0 = ended)
        if (data?.info?.playerState === 0) {
          if (hasReceivedPlayStateRef.current && timeSinceStart > MIN_PLAY_TIME) {
            console.log('[PinnedPlayer] Video ended via infoDelivery after', timeSinceStart, 'ms, advancing...');
            advanceToNextVideo();
          }
          return;
        }
        
        // Check for onReady event to request state updates
        if (data?.event === "onReady" && iframeRef.current) {
          console.log('[PinnedPlayer] YouTube player ready, listening for state changes');
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
  }, [isVisible, toolsWithVideos.length, advanceToNextVideo, currentVideoId]);

  // Reliable fallback: auto-advance every 20 seconds to ensure videos cycle
  useEffect(() => {
    if (!isVisible || toolsWithVideos.length === 0) return;
    
    // Clear any existing timeout
    if (advanceTimeoutRef.current) {
      clearTimeout(advanceTimeoutRef.current);
    }
    
    console.log('[PinnedPlayer] Setting 20s auto-advance timer for:', currentTool?.title);
    
    advanceTimeoutRef.current = setTimeout(() => {
      console.log('[PinnedPlayer] Auto-advancing after 20s timeout');
      advanceToNextVideo();
    }, 20000);
    
    return () => {
      if (advanceTimeoutRef.current) {
        clearTimeout(advanceTimeoutRef.current);
      }
    };
  }, [isVisible, toolsWithVideos.length, currentIndex, advanceToNextVideo, currentTool?.title]);

  const handleNextVideo = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
  }, [toolsWithVideos.length]);

  const handlePrevVideo = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + toolsWithVideos.length) % toolsWithVideos.length);
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
    setIsMuted(prev => {
      const newMuted = !prev;
      // If unmuting pinned player, notify tool page video to mute
      if (!newMuted) {
        window.dispatchEvent(new CustomEvent('pinnedPlayerPlaying'));
      }
      return newMuted;
    });
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

        {/* Controls bar - 2x2 grid compact square buttons */}
        <div className="flex justify-center py-1 px-1.5 bg-gray-800/95 border-t border-cyan-500/20">
          <div className="grid grid-cols-2 gap-0.5">
            <button
              onClick={toggleMute}
              className="w-6 h-6 flex items-center justify-center rounded bg-cyan-500 hover:bg-cyan-400 text-white"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
            </button>
            <button
              onClick={handlePrevVideo}
              className="w-6 h-6 flex items-center justify-center rounded bg-gray-600 hover:bg-gray-500 text-white"
              title="Previous Video"
            >
              <SkipBack className="w-3 h-3" />
            </button>
            <button
              onClick={handleNextVideo}
              className="w-6 h-6 flex items-center justify-center rounded bg-gray-600 hover:bg-gray-500 text-white"
              title="Next Video"
            >
              <SkipForward className="w-3 h-3" />
            </button>
            <button
              onClick={handleToolClick}
              className="w-6 h-6 text-[6px] rounded bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-bold animate-pulse"
              style={{
                boxShadow: '0 0 12px rgba(255, 215, 0, 0.8), 0 0 24px rgba(255, 215, 0, 0.5), 0 0 36px rgba(255, 215, 0, 0.3)'
              }}
            >
              TRY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

PinnedVideoPlayer.displayName = 'PinnedVideoPlayer';

export default PinnedVideoPlayer;