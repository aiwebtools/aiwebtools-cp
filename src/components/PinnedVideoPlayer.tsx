import { useState, useEffect, useCallback, useRef, memo, useMemo } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, X, SkipForward, SkipBack, Volume2, VolumeX } from "lucide-react";
import { allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";

const YT_EMBED_ORIGIN = "https://www.youtube-nocookie.com";
const YT_API_ORIGIN_FALLBACK = "https://www.youtube.com";

const SESSION_CLOSED_KEY = "pinned-video-closed";
const SHUFFLED_TOOLS_KEY = "pinned-video-shuffled-tools";
const CURRENT_INDEX_KEY = "pinned-video-current-index";

// Keep slug behavior consistent across the app
const slugifyToolTitle = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// Fast lookup for /:toolSlug routes (avoid treating /faq, /blog, etc. as tool pages)
const TOOL_SLUG_SET = new Set(allTools.map(t => slugifyToolTitle(t.title)));

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
  const isToolDetailPage = useMemo(() => {
    const p = location.pathname || "";
    if (p.startsWith("/tool/")) return true;

    // ToolDetail also supports /:toolSlug. Only treat single-segment paths as tool pages
    // if the segment matches a known tool slug.
    const segments = p.split("/").filter(Boolean);
    if (segments.length !== 1) return false;
    return TOOL_SLUG_SET.has(segments[0]);
  }, [location.pathname]);
  
  // Check if closed this session
  const [isVisible, setIsVisible] = useState(() => {
    return sessionStorage.getItem(SESSION_CLOSED_KEY) !== "true";
  });
  
  // Show player after 25% of viewport height scroll
  // Using Math.max with inner height so works on any screen size
  const viewportQuarter = typeof window !== 'undefined' ? Math.round(window.innerHeight * 0.25) : 200;
  const hasScrolledEnough = useScrollThreshold(isHomepage ? viewportQuarter : 100, {
    enabled: true,
    allowReset: false, // Once shown, stay shown
  });
  
  // Hide when user is viewing the main tool video on a detail page
  const [isMainVideoVisible, setIsMainVideoVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  
  // Persisted current index - survives navigation
  const [currentIndex, setCurrentIndex] = useState(getStoredIndex);
  
  // Try to start UNMUTED per Master's request. If browser blocks autoplay-with-sound,
  // user can tap unmute. We aggressively retry unMute commands on every load.
  const [isMuted, setIsMuted] = useState(false);
  const initialMuteEnforcedRef = useRef(false);
  
  // Shuffled tools - kept in state so we can reshuffle on round wrap
  // (so every video plays once before any repeat)
  const [toolsWithVideos, setToolsWithVideos] = useState<Tool[]>(() => getToolsWithVideosCached());
  
  const currentTool: Tool | undefined = toolsWithVideos[currentIndex];
  const currentVideoId = currentTool ? extractYouTubeId(currentTool.videoUrl || '') : null;
  
  // Track if this is the first video load (to set initial mute state)
  const isFirstVideoRef = useRef(true);
  const userMutePreferenceRef = useRef<boolean | null>(null);
  
  // Track video src separately to prevent unnecessary iframe reloads
  // Initialize with actual video URL to prevent "null" blocking first render
  // Use youtube-nocookie.com for faster loads and better privacy
  const [videoSrc, setVideoSrc] = useState<string>(() => {
    if (!currentVideoId) return "";
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    return `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1&playsinline=1&loop=0&origin=${encodeURIComponent(origin)}&widget_referrer=${encodeURIComponent(origin)}`;
  });
  const lastVideoIdRef = useRef<string>(currentVideoId || "");
  
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
    
    // ALWAYS start muted - browser autoplay policies require it on ALL devices
    // This also prevents the "audio without visible player" bug
    // User can unmute manually after seeing the player
    // Default: UNMUTED. Respect explicit user mute preference if set.
    let shouldMute: boolean;
    if (userMutePreferenceRef.current !== null) {
      shouldMute = userMutePreferenceRef.current;
    } else {
      shouldMute = false;
    }
    isFirstVideoRef.current = false;
    
    // Build video URL - ALWAYS start with mute=1 for reliable autoplay on ALL browsers
    // User must explicitly click unmute button to hear audio
    // Use youtube-nocookie.com for faster loads and better privacy
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const muteParam = shouldMute ? 1 : 0;
    const newSrc = `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=${muteParam}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1&playsinline=1&loop=0&origin=${encodeURIComponent(origin)}&widget_referrer=${encodeURIComponent(origin)}`;
    setVideoSrc(newSrc);
    playerMountedRef.current = true;
    
    // Sync UI state - always start muted
    setIsMuted(shouldMute);
    
    // Aggressively retry unMute for every new video so sound is always on.
    if (!shouldMute) {
      const retryDelays = [200, 400, 700, 1100, 1600, 2200, 3000, 4000, 5500];
      const timers = retryDelays.map(delay =>
        setTimeout(() => {
          sendYTCommand('unMute');
          sendYTCommand('playVideo');
        }, delay)
      );
      // Cleanup in case video changes again quickly
      return () => timers.forEach(clearTimeout);
    }
    
    // If unmuted, notify tool page videos to mute
    if (!shouldMute) {
      window.dispatchEvent(new CustomEvent('pinnedPlayerPlaying'));
    }
  }, [currentVideoId]); // Only depend on video ID, not mute state
  
  // Handle mute/unmute via postMessage instead of iframe reload
  // Send to ALL possible YouTube origins + wildcard for maximum mobile compatibility
  const sendYTCommand = useCallback((command: string) => {
    if (!iframeRef.current?.contentWindow) return;
    const msg = JSON.stringify({ event: 'command', func: command });
    try {
      // Send to both origins — mobile Chrome often only responds to one
      iframeRef.current.contentWindow.postMessage(msg, YT_EMBED_ORIGIN);
      iframeRef.current.contentWindow.postMessage(msg, YT_API_ORIGIN_FALLBACK);
      // Wildcard fallback for edge cases (cross-origin redirects inside YT embed)
      iframeRef.current.contentWindow.postMessage(msg, '*');
    } catch {}
  }, []);

  // Sync mute state to iframe whenever isMuted changes
  useEffect(() => {
    if (!iframeRef.current || !playerMountedRef.current) return;
    const command = isMuted ? 'mute' : 'unMute';
    sendYTCommand(command);
    const retry = setTimeout(() => sendYTCommand(command), 300);
    return () => clearTimeout(retry);
  }, [isMuted, sendYTCommand]);

  // When video ID changes and user wants unmuted, force-send unmute
  // (covers the case where isMuted is already false so the above effect doesn't re-fire)
  useEffect(() => {
    if (!currentVideoId || !playerMountedRef.current) return;
    if (userMutePreferenceRef.current === false) {
      const timers = [800, 1500, 2500].map(d => setTimeout(() => sendYTCommand('unMute'), d));
      return () => timers.forEach(clearTimeout);
    }
  }, [currentVideoId, sendYTCommand]);
  
  // Handle smooth fade animation when main video visibility changes
  useEffect(() => {
    // Only hide the pinned player when the user is actively viewing a tool's main video
    // (this event can fire from other embeds on the homepage, causing an "audio-only" bug)
    if (!isToolDetailPage) {
      setShouldShow(true);
      return;
    }

    setShouldShow(!isMainVideoVisible);
  }, [isMainVideoVisible, isToolDetailPage]);
  
  // Mute pinned player when tool page video starts playing
  useEffect(() => {
    const handleToolVideoPlaying = () => {
      // Mute pinned player when tool video plays - use postMessage for immediate effect
      setIsMuted(true);
      sendYTCommand('mute');
    };
    
    window.addEventListener('toolVideoPlaying', handleToolVideoPlaying);
    return () => {
      window.removeEventListener('toolVideoPlaying', handleToolVideoPlaying);
    };
  }, []);
  
  // Listen for main tool video visibility changes - with stable state management
  const visibilityDebounceRef = useRef<NodeJS.Timeout | null>(null);
  const lastMainVideoVisibleRef = useRef(false);
  
  useEffect(() => {
    const handleToolVideoVisibility = (event: CustomEvent<{ isVisible: boolean }>) => {
      // Ignore these events unless we're on a tool detail page.
      // Prevents the pinned player from being hidden on the homepage while still playing audio.
      if (!isToolDetailPage) return;

      const newVisible = event.detail.isVisible;
      
      // Skip if no change
      if (lastMainVideoVisibleRef.current === newVisible) return;
      
      // Clear any pending update
      if (visibilityDebounceRef.current) {
        clearTimeout(visibilityDebounceRef.current);
      }
      
      // Apply with slight debounce to prevent flickering
      visibilityDebounceRef.current = setTimeout(() => {
        lastMainVideoVisibleRef.current = newVisible;
        setIsMainVideoVisible(newVisible);
      }, 100);
    };
    
    window.addEventListener('toolVideoVisibility', handleToolVideoVisibility as EventListener);
    return () => {
      window.removeEventListener('toolVideoVisibility', handleToolVideoVisibility as EventListener);
      if (visibilityDebounceRef.current) {
        clearTimeout(visibilityDebounceRef.current);
      }
    };
  }, [isToolDetailPage]);

  // NOTE: scroll threshold is handled by useScrollThreshold

  // Auto-advance function. Plays every video in the shuffled order before any
  // can repeat. When we wrap past the last video, invalidate the cache so the
  // next render generates a fresh random order for the new round.
  const advanceToNextVideo = useCallback(() => {
    setCurrentIndex(prev => {
      const next = prev + 1;
      if (next >= toolsWithVideos.length) {
        // Reshuffle the playlist for a brand-new random round — no recent repeats
        cachedToolsWithVideos = null;
        lastGenerationTime = 0;
        const fresh = getShuffledToolsWithVideos();
        // Avoid starting the new round with the exact video that just played
        if (fresh.length > 1 && toolsWithVideos[prev] && fresh[0].title === toolsWithVideos[prev].title) {
          [fresh[0], fresh[1]] = [fresh[1], fresh[0]];
        }
        setToolsWithVideos(fresh);
        return 0;
      }
      return next;
    });
  }, [toolsWithVideos]);

  // Track when video started to prevent premature skipping
  const videoStartTimeRef = useRef<number>(Date.now());
  const hasReceivedPlayStateRef = useRef(false);
  // Dynamic duration detection from YouTube iframe API
  const detectedDurationRef = useRef<number | null>(null);
  
  // Reset timing when video changes
  useEffect(() => {
    videoStartTimeRef.current = Date.now();
    hasReceivedPlayStateRef.current = false;
    detectedDurationRef.current = null; // Reset so we pick up new video's duration
  }, [currentVideoId]);

  // Listen for YouTube iframe API messages to detect video end
  useEffect(() => {
    if (!isVisible || toolsWithVideos.length === 0) return;

    const handleMessage = (event: MessageEvent) => {
      // YouTube sends messages when video state changes
      if (event.origin !== YT_EMBED_ORIGIN && event.origin !== YT_API_ORIGIN_FALLBACK) return;
      
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        
        // Capture video duration from YouTube's infoDelivery messages
        // YouTube automatically sends these with {currentTime, duration, ...}
        if (data?.info?.duration && data.info.duration > 0 && !detectedDurationRef.current) {
          detectedDurationRef.current = data.info.duration;
          console.log('[PinnedPlayer] Detected video duration:', data.info.duration, 'seconds for', currentTool?.title);
        }
        
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
        const MIN_PLAY_TIME = 9000; // 9 seconds minimum
        
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

  // Reliable fixed-interval auto-skip: every video plays for ~28 seconds,
  // then advances to the next. The onStateChange "ended" listener above will
  // still trigger early advance for shorter clips. This guarantees the
  // carousel always moves forward and never gets stuck on long videos.
  useEffect(() => {
    if (!isVisible || toolsWithVideos.length === 0) return;

    // Clear any existing timeout
    if (advanceTimeoutRef.current) {
      clearTimeout(advanceTimeoutRef.current);
    }

    const AUTO_SKIP_MS = 15000; // 15 seconds per video per Master's request

    advanceTimeoutRef.current = setTimeout(() => {
      console.log('[PinnedPlayer] Auto-skip after 15s:', currentTool?.title);
      advanceToNextVideo();
    }, AUTO_SKIP_MS);

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
    const slug = slugifyToolTitle(currentTool.title);
    
    navigate(`/tool/${slug}`);
  }, [currentTool, navigate]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const newMuted = !prev;
      // Store user preference for subsequent videos
      userMutePreferenceRef.current = newMuted;
      // If unmuting pinned player, notify tool page video to mute
      if (!newMuted) {
        window.dispatchEvent(new CustomEvent('pinnedPlayerPlaying'));
      }
      // Force-send command immediately on user gesture (critical for mobile Chrome)
      // User gesture context is required for unmuting on mobile browsers
      const command = newMuted ? 'mute' : 'unMute';
      sendYTCommand(command);
      // Extra retry specifically for mobile — gesture window is short
      setTimeout(() => sendYTCommand(command), 100);
      setTimeout(() => sendYTCommand(command), 500);
      return newMuted;
    });
  }, [sendYTCommand]);

  const handlePlayVideo = useCallback(() => {
    userMutePreferenceRef.current = false;
    setIsMuted(false);
    sendYTCommand('unMute');
    sendYTCommand('playVideo');
    window.dispatchEvent(new CustomEvent('pinnedPlayerPlaying'));
    [120, 350, 800, 1400].forEach(delay => {
      window.setTimeout(() => {
        sendYTCommand('unMute');
        sendYTCommand('playVideo');
      }, delay);
    });
  }, [sendYTCommand]);

  // Don't render if not on homepage, permanently closed, no tools, or haven't scrolled past hero yet
  if (!isHomepage || !isVisible || !hasScrolledEnough || toolsWithVideos.length === 0 || !currentTool || !currentVideoId || !videoSrc) {
    return null;
  }

  const playerUi = (
    <div
      className={shouldShow ? "opacity-100" : "opacity-0 pointer-events-none"}
      style={{
        // CRITICAL: Inline fixed positioning - cannot be overridden by CSS
        position: 'fixed',
        // Responsive sizing & safe-area support (iOS notch, etc.)
        width: "clamp(148px, 36vw, 208px)",
        bottom: "calc(0.5rem + env(safe-area-inset-bottom, 0px))",
        left: "calc(0.5rem + env(safe-area-inset-left, 0px))",
        // Portal + max z-index prevents the "audio-only" bug caused by stacking contexts/overlays.
        zIndex: 2147483647,
        transform: "translateZ(0)",
        transition: "opacity 0.3s ease-out",
        visibility: shouldShow ? "visible" : "hidden",
        pointerEvents: shouldShow ? "auto" : "none",
        isolation: "isolate",
      }}
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            title={currentTool.title}
            style={{ minHeight: '70px' }}
          />
        </div>

        {/* Controls bar - compact square buttons */}
        <div className="flex justify-center py-1 px-1.5 bg-gray-800/95 border-t border-cyan-500/20">
          <div className="grid grid-cols-3 gap-0.5">
            <button
              onClick={handlePlayVideo}
              className="w-6 h-6 flex items-center justify-center rounded bg-green-500 hover:bg-green-400 text-black"
              title="Play with sound"
            >
              <Play className="w-3 h-3" />
            </button>
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

  // Render via portal to escape any parent stacking context (common cause of hidden UI with audible media)
  if (typeof document === 'undefined') return null;
  return createPortal(playerUi, document.body);
});

PinnedVideoPlayer.displayName = 'PinnedVideoPlayer';

export default PinnedVideoPlayer;