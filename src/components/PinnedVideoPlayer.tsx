import { useState, useEffect, useCallback, useRef, memo, useMemo } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Pause, X, SkipForward, SkipBack, Volume2, VolumeX } from "lucide-react";
import { allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import { playTimeWarpVoice } from "@/utils/effects/audioEffects";
import mtvAiWebToolsLogo from "@/assets/mtv-aiwebtools-logo.png";

const YT_EMBED_ORIGIN = "https://www.youtube-nocookie.com";
const YT_API_ORIGIN_FALLBACK = "https://www.youtube.com";

const SESSION_CLOSED_KEY = "pinned-video-closed";
const SHUFFLED_TOOLS_KEY = "pinned-video-shuffled-tools";
const CURRENT_INDEX_KEY = "pinned-video-current-index";
const MODE_SESSION_KEY = "pinned-video-mode"; // 'idle' | 'tools' | 'music'

// Curated AIWebTools.ai 9:16 vertical original music-video gallery.
// These play in the music-video mode of the pinned player. All link to the
// Music Video Maker AI Studio tool.
//
// ORDERING RULE: Real cinematic music videos (with actual visuals) play FIRST.
// Suno-style lyric/audio tracks (just lyrics on screen) play LAST, so the reel
// always leads with the most eye-catching content.
const MUSIC_VIDEO_GALLERY: Array<{ id: string; title: string }> = [
  // ── VISUAL MUSIC VIDEOS (real cinematic clips, lead the reel) ──
  { id: "eG-TvPPKBpw", title: "AI Web Tools 9:16 Vertical Showcase — Newest Drop" },
  { id: "3XaTLuJ0kak", title: "AI Web Tools 9:16 Vertical Showcase — Brand New Cinematic Drop" },
  { id: "RVBmL7FEtQk", title: "AI Web Tools 9:16 Vertical Showcase — Latest Cinematic Drop" },
  { id: "htVLYZPHehk", title: "New Cinematic Drop — Music Video" },
  { id: "bBZT8sPWvRY", title: "Awakening Anthem — Music Video" },
  { id: "AFwPVOQV0SE", title: "My Name Is Irrelevant — Music Video" },
  { id: "M5l6VJAh2-Y", title: "Ai Might Be The Devil — Music Video" },
  { id: "TlAgmV_2hXs", title: "Mushroomhead Style — Music Video" },
  { id: "bhC9aTQGbGI", title: "Holodeck — Music Video" },
  { id: "qxIYhAAkko8", title: "Mirror Mirror (Fire In Your Dreams) — Music Video" },
  { id: "1yajmSLnPTs", title: "Mirror Mirror On The Wall — Music Video" },
  { id: "hKZhXxV8KiA", title: "Truth Breaks The Ice Once More — Music Video" },
  { id: "VGZdXt3shq8", title: "Left In This Place — Music Video" },
  { id: "c2UpKrW4IVM", title: "Tear Me Open — Music Video" },
  { id: "W4grI_pqzbk", title: "Chaos Order Spin Spin Spin — Music Video" },
  { id: "YzGrnpsScH0", title: "And This Is Where It All Falls — Music Video" },
  { id: "Zi-8M6zY8sU", title: "My Name Is Irrelevant — Music Video (Alt)" },
  { id: "IHY7AlYJhUc", title: "As They Blow It All Away — Music Video" },
  { id: "i9e3pRXyP8s", title: "Tears Timeline — Official Music Video" },
  { id: "lG1rMaImBNc", title: "Life Is But A Dream — Official Music Video" },
  { id: "1y3zdPnJfQ4", title: "CherryPie Goodbye — Official Music Video" },
  { id: "i0zc0aeRCeI", title: "Something More — Official Music Video" },
  { id: "v8El2IdTwsE", title: "Plastic Face — Official Music Video" },
  { id: "bfRpZ5r88Zg", title: "Wake The F Up — Music Video" },
  { id: "864_bIK9Feo", title: "Love Or Fall — Music Video" },
  { id: "cKHZ7X0qx_Y", title: "In The Shadows — Music Video" },
  { id: "-MSiCn4Fts8", title: "Through The Veil — Music Video" },
  { id: "mg7F63-PN30", title: "Inner Fire Rising — Music Video" },
  { id: "EYnCtw9CsxQ", title: "Eyes Of The Soul — Music Video" },
  { id: "QCJCKhbwxhA", title: "Walk Through Fire — Music Video" },
  { id: "Twl5-MsgmoI", title: "Hidden Truths Revealed — Music Video" },
  { id: "1cnzF1bkq3o", title: "What's The Plan? — Music Video" },
  { id: "8afw8Tq94Pg", title: "Deep Inside (Remastered) — Music Video" },
  { id: "eAaXtMBYWYs", title: "The Empire Has Fallen — Music Video" },
  { id: "cB3T05q4294", title: "Earth Monopoly — Music Video" },
  { id: "LFMtWqoKqyI", title: "Candy Cane Rain — Music Video" },
  { id: "us8qYI2plqg", title: "Prison Gates — Music Video" },
  { id: "ZMxg9PMHmos", title: "Portal Fall Again (Remix) — Music Video" },
  // ── SUNO / LYRIC TRACKS (audio with lyrics on screen, play LAST) ──
  { id: "FHEWZkP_3ew", title: "It's In The Code Polly — Track" },
  { id: "KIqBIh6TZ04", title: "Cosmic Light Code Within — Track" },
  { id: "UlYYh-8pjS8", title: "Portal Through The Light — Track" },
  { id: "NglQB5OVmqk", title: "Cosmic Code — Track" },
  { id: "yZ9Jt1canjE", title: "Cosmic Truth Within You — Track" },
  { id: "O9n0tKbbI2E", title: "The Cosmic Light Is Within You — Track" },
  { id: "-I0LGUP9xso", title: "Cosmic Light Inner Cosmos Rap — Track" },
  { id: "6NeNA-KGz2s", title: "My Eyes (Remix) — Track" },
  { id: "siddzjKXd9o", title: "Rome Fell Once — Track" },
  { id: "0IfbFWirwTg", title: "Father Of Living Light — Track" },
  { id: "u8Rs0KH2XTg", title: "My Eyes — Track" },
  { id: "8y6irP9OPJ0", title: "Fall Again — Track" },
  { id: "uPioA-r3Wyw", title: "Truth. Light. Now. — Track" },
];

const MUSIC_VIDEO_TOOL_URL = "https://musicvideomakergpt.lovable.app/?via=aiwebtools";

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

// Build a randomized music-video order that ALWAYS leads with real cinematic
// music videos and pushes Suno-style lyric tracks to the back of the line.
// Within each group we shuffle so playback still feels fresh on every round.
const buildMusicOrder = (): typeof MUSIC_VIDEO_GALLERY => {
  const titleLooksLyric = (t: string) => / — Track$/i.test(t);
  const visuals = MUSIC_VIDEO_GALLERY.filter(v => !titleLooksLyric(v.title));
  const lyrics  = MUSIC_VIDEO_GALLERY.filter(v =>  titleLooksLyric(v.title));
  return [...shuffleArray(visuals), ...shuffleArray(lyrics)];
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

  // Dedupe by YouTube video ID — multiple tools (e.g. Web3 .worldpeace /
  // .worldtrade domain pages) often share the same promo video. Keep only the
  // first occurrence so the pinned player never replays the same clip twice
  // in a row across different tool entries.
  const seenVideoIds = new Set<string>();
  const uniqueByVideo = toolsWithVideos.filter(tool => {
    const id = extractYouTubeId(tool.videoUrl || '');
    if (!id) return false;
    if (seenVideoIds.has(id)) return false;
    seenVideoIds.add(id);
    return true;
  });

  // Separate into priority tiers
  const wowFactorTools: Tool[] = [];
  const regularTools: Tool[] = [];

  uniqueByVideo.forEach(tool => {
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
  const pauseOtherYouTubePlayers = useCallback(() => {
    if (typeof document === 'undefined') return;
    const currentFrame = iframeRef.current;
    document
      .querySelectorAll<HTMLIFrameElement>('iframe[src*="youtube.com/embed"], iframe[src*="youtube-nocookie.com/embed"]')
      .forEach((frame) => {
        if (!frame?.contentWindow || frame === currentFrame) return;
        try {
          frame.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'mute' }), '*');
          frame.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo' }), '*');
        } catch {
          return;
        }
      });
  }, []);
  
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
  
  // Wait for the user to scroll past the hero/search area on the homepage before
  // popping the pinned player open. Tool pages still use a small scroll threshold
  // so the player doesn't cover the primary tool media.
  const hasScrolledEnough = useScrollThreshold(isHomepage ? 650 : 100, {
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
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Shuffled tools - kept in state so we can reshuffle on round wrap
  // (so every video plays once before any repeat)
  const [toolsWithVideos, setToolsWithVideos] = useState<Tool[]>(() => getToolsWithVideosCached());

  // Shuffled music-video order — every video plays once before any repeat.
  // Reshuffled when we wrap past the end so the next round is a fresh random order.
  const [musicOrder, setMusicOrder] = useState<typeof MUSIC_VIDEO_GALLERY>(() => buildMusicOrder());

  // Mode: idle = show overlay with "Whatcha in the mood for?" buttons.
  // tools = play tool showcase videos (original behavior). music = 9:16 music videos.
  const [mode, setMode] = useState<'idle' | 'tools' | 'music'>(() => {
    try {
      const stored = sessionStorage.getItem(MODE_SESSION_KEY);
      if (stored === 'tools' || stored === 'music') return stored;
    } catch {}
    return 'idle';
  });

  useEffect(() => {
    try { sessionStorage.setItem(MODE_SESSION_KEY, mode); } catch {}
  }, [mode]);

  // Reset playlist index when switching modes so each gallery starts fresh
  const handleSelectMode = useCallback((next: 'tools' | 'music') => {
    pauseOtherYouTubePlayers();
    // Play the "WEB TOOLS INITIALIZING" voice on mode select for extra flair.
    // Wrap in try/catch and defer to next frame so it never blocks playlist setup
    // or causes a render-time crash on mode switch.
    try {
      requestAnimationFrame(() => {
        try { playTimeWarpVoice(); } catch {}
      });
    } catch {}
    setCurrentIndex(0);
    if (next === 'music') {
      setMusicOrder(buildMusicOrder());
    }
    setMode(next);
    userPausedRef.current = false;
    userMutePreferenceRef.current = false;
    setIsMuted(false);
    setIsPlaying(true);
  }, [pauseOtherYouTubePlayers]);

  // Active playlist length and current video for the chosen mode
  const isMusicMode = mode === 'music';
  const activeLength = isMusicMode ? musicOrder.length : toolsWithVideos.length;
  const currentTool: Tool | undefined = isMusicMode ? undefined : toolsWithVideos[currentIndex];
  const currentMusicVideo = isMusicMode ? musicOrder[currentIndex % musicOrder.length] : undefined;
  const currentVideoId = isMusicMode
    ? (currentMusicVideo?.id ?? null)
    : (currentTool ? extractYouTubeId(currentTool.videoUrl || '') : null);
  const currentTitle = isMusicMode
    ? (currentMusicVideo?.title ?? "AIWebTools Music Video")
    : (currentTool?.title ?? "");
  const currentEmoji = isMusicMode ? "🎵" : (currentTool?.emoji || "🤖");
  
  // Track if this is the first video load (to set initial mute state)
  const isFirstVideoRef = useRef(true);
  const userMutePreferenceRef = useRef<boolean | null>(null);
  // Tracks whether the user explicitly paused the current video so background
  // retry timers (unmute/playVideo loops) don't sneak it back to playing.
  const userPausedRef = useRef(false);

  // Handle mute/unmute via postMessage instead of iframe reload.
  // Send to ALL possible YouTube origins + wildcard for maximum mobile compatibility.
  const sendYTCommand = useCallback((command: string) => {
    if (!iframeRef.current?.contentWindow) return;
    const msg = JSON.stringify({ event: 'command', func: command });
    try {
      iframeRef.current.contentWindow.postMessage(msg, YT_EMBED_ORIGIN);
      iframeRef.current.contentWindow.postMessage(msg, YT_API_ORIGIN_FALLBACK);
      iframeRef.current.contentWindow.postMessage(msg, '*');
    } catch {
      return;
    }
  }, []);
  
  // Derive videoSrc SYNCHRONOUSLY from currentVideoId so the iframe never mounts
  // with a stale URL. This was the root cause of the "music button plays AI tools"
  // bug — the iframe was mounting with a previously-cached tool URL before a
  // useEffect could swap it to the music URL, briefly playing the wrong video.
  // Mute is controlled via postMessage (not src) so toggling it does not reload.
  const videoSrc = useMemo(() => {
    if (!currentVideoId) return "";
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    return `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1&playsinline=1&loop=0&vq=hd1080&hd=1&origin=${encodeURIComponent(origin)}&widget_referrer=${encodeURIComponent(origin)}`;
  }, [currentVideoId]);
  const lastVideoIdRef = useRef<string>(currentVideoId || "");
  
  // Persist index changes
  useEffect(() => {
    setStoredIndex(currentIndex);
  }, [currentIndex]);
  
  // React to video ID changes: kick mute/play retry loop. videoSrc itself is
  // derived synchronously above so no need to setVideoSrc here.
  useEffect(() => {
    if (!currentVideoId) return;
    if (currentVideoId === lastVideoIdRef.current) return;
    lastVideoIdRef.current = currentVideoId;

    const shouldMute = userMutePreferenceRef.current !== null
      ? userMutePreferenceRef.current
      : false;
    isFirstVideoRef.current = false;
    playerMountedRef.current = true;
    setIsMuted(shouldMute);

    if (!shouldMute) {
      pauseOtherYouTubePlayers();
      window.dispatchEvent(new CustomEvent('pinnedPlayerPlaying'));
      const retryDelays = [200, 400, 700, 1100, 1600, 2200, 3000, 4000, 5500];
      const timers = retryDelays.map(delay =>
        setTimeout(() => {
          if (userPausedRef.current) return;
          pauseOtherYouTubePlayers();
          sendYTCommand('unMute');
          sendYTCommand('playVideo');
        }, delay)
      );
      return () => timers.forEach(clearTimeout);
    }
  }, [currentVideoId, pauseOtherYouTubePlayers, sendYTCommand]);

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
      const timers = [800, 1500, 2500].map(d => setTimeout(() => {
        if (userPausedRef.current) return;
        sendYTCommand('unMute');
      }, d));
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
      if (isMusicMode) {
        if (next >= musicOrder.length) {
          // Reshuffle for a fresh random round — every video plays once before repeating.
          let fresh = buildMusicOrder();
          // Don't start the new round with the same video that just played.
          if (fresh.length > 1 && musicOrder[prev] && fresh[0].id === musicOrder[prev].id) {
            [fresh[0], fresh[1]] = [fresh[1], fresh[0]];
          }
          setMusicOrder(fresh);
          return 0;
        }
        return next;
      }
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
  }, [toolsWithVideos, isMusicMode, musicOrder]);

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
    // New video = fresh play intent
    userPausedRef.current = false;
  }, [currentVideoId]);

  // Listen for YouTube iframe API messages to detect video end
  useEffect(() => {
    if (!isVisible || !hasScrolledEnough || toolsWithVideos.length === 0) return;

    let didAdvanceForVideo = false;

    const handleMessage = (event: MessageEvent) => {
      // YouTube sends messages when video state changes
      if (event.origin !== YT_EMBED_ORIGIN && event.origin !== YT_API_ORIGIN_FALLBACK) return;
      // CRITICAL: only react to messages from OUR iframe — other YouTube
      // iframes on the page (book carousel, tool pages) also post state
      // changes and were causing the pinned player to advance prematurely
      // when a different video on the page ended.
      if (!iframeRef.current || event.source !== iframeRef.current.contentWindow) return;

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
          didAdvanceForVideo = false;
          // If the user just paused, immediately re-pause so retry timers
          // or YouTube's own autoplay don't override the pause intent.
          if (userPausedRef.current) {
            sendYTCommand('pauseVideo');
          } else {
            setIsPlaying(true);
          }
        }
        if (data?.info?.playerState === 1) {
          hasReceivedPlayStateRef.current = true;
          videoStartTimeRef.current = Date.now();
          didAdvanceForVideo = false;
          if (userPausedRef.current) {
            sendYTCommand('pauseVideo');
          } else {
            setIsPlaying(true);
          }
        }
        if (data?.event === "onStateChange" && data?.info === 2) {
          setIsPlaying(false);
        }
        if (data?.info?.playerState === 2) {
          setIsPlaying(false);
        }
        
        // Only advance if video has been playing for at least 8 seconds
        // This prevents false "ended" signals during loading
        const timeSinceStart = Date.now() - videoStartTimeRef.current;
        // For music mode: require ~90% of the detected duration before
        // treating an "ended" signal as real. This prevents long music
        // videos from skipping early due to spurious state changes.
        const detected = detectedDurationRef.current;
        const MIN_PLAY_TIME = isMusicMode && detected
          ? Math.max(9000, detected * 1000 * 0.9)
          : 9000;
        
        // Check for video ended state (state 0 = ended)
        if (data?.event === "onStateChange" && data?.info === 0) {
          if (didAdvanceForVideo) return;
          if (hasReceivedPlayStateRef.current && timeSinceStart > MIN_PLAY_TIME) {
            didAdvanceForVideo = true;
            console.log('[PinnedPlayer] Video ended via onStateChange after', timeSinceStart, 'ms, advancing...');
            advanceToNextVideo();
          } else {
            console.log('[PinnedPlayer] Ignoring premature end signal, only', timeSinceStart, 'ms elapsed');
          }
          return;
        }
        
        // Also check for infoDelivery with playerState (0 = ended)
        if (data?.info?.playerState === 0) {
          if (didAdvanceForVideo) return;
          if (hasReceivedPlayStateRef.current && timeSinceStart > MIN_PLAY_TIME) {
            didAdvanceForVideo = true;
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
  }, [isVisible, hasScrolledEnough, toolsWithVideos.length, advanceToNextVideo, currentVideoId, isMusicMode]);

  // Reliable fixed-interval auto-skip: every video plays for ~28 seconds,
  // then advances to the next. The onStateChange "ended" listener above will
  // still trigger early advance for shorter clips. This guarantees the
  // carousel always moves forward and never gets stuck on long videos.
  useEffect(() => {
    if (!isVisible || !hasScrolledEnough || toolsWithVideos.length === 0) return;

    // Clear any existing timeout
    if (advanceTimeoutRef.current) {
      clearTimeout(advanceTimeoutRef.current);
    }

    // In music mode, let the full video play to completion (advance via ended event).
    // In tool showcase mode, keep the 15s rotation.
    if (isMusicMode) {
      return;
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
  }, [isVisible, hasScrolledEnough, toolsWithVideos.length, currentIndex, advanceToNextVideo, currentTool?.title, isMusicMode]);

  const handleNextVideo = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % activeLength);
  }, [activeLength]);

  const handlePrevVideo = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + activeLength) % activeLength);
  }, [activeLength]);

  const handleClose = useCallback(() => {
    sessionStorage.setItem(SESSION_CLOSED_KEY, "true");
    setIsVisible(false);
  }, []);

  const handleToolClick = useCallback(() => {
    if (isMusicMode) {
      // Open the Music Video Maker AI Studio tool in a new tab
      try {
        window.open(MUSIC_VIDEO_TOOL_URL, '_blank', 'noopener,noreferrer');
      } catch {}
      return;
    }
    if (!currentTool) return;
    
    // Generate URL slug from tool title
    const slug = slugifyToolTitle(currentTool.title);
    
    navigate(`/tool/${slug}`);
  }, [currentTool, navigate, isMusicMode]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const newMuted = !prev;
      // Store user preference for subsequent videos
      userMutePreferenceRef.current = newMuted;
      // If unmuting pinned player, notify tool page video to mute
      if (!newMuted) {
        pauseOtherYouTubePlayers();
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
  }, [sendYTCommand, pauseOtherYouTubePlayers]);

  const handlePlayVideo = useCallback(() => {
    pauseOtherYouTubePlayers();
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
  }, [sendYTCommand, pauseOtherYouTubePlayers]);

  const handleTogglePlay = useCallback(() => {
    if (isPlaying) {
      userPausedRef.current = true;
      sendYTCommand('pauseVideo');
      setIsPlaying(false);
      // Re-assert pause shortly after in case a background timer fires playVideo.
      [120, 400, 900].forEach(d => window.setTimeout(() => sendYTCommand('pauseVideo'), d));
    } else {
      pauseOtherYouTubePlayers();
      userPausedRef.current = false;
      userMutePreferenceRef.current = false;
      setIsMuted(false);
      sendYTCommand('unMute');
      sendYTCommand('playVideo');
      setIsPlaying(true);
      [150, 500, 1200].forEach(d => window.setTimeout(() => {
        if (userPausedRef.current) return;
        sendYTCommand('unMute');
        sendYTCommand('playVideo');
      }, d));
    }
  }, [isPlaying, sendYTCommand, pauseOtherYouTubePlayers]);

  const handleIframeLoad = useCallback(() => {
    playerMountedRef.current = true;
    if (!isMuted) {
      [100, 300, 700, 1200, 2200].forEach(delay => {
        window.setTimeout(() => {
          if (userPausedRef.current) return;
          pauseOtherYouTubePlayers();
          sendYTCommand('unMute');
          sendYTCommand('playVideo');
        }, delay);
      });
    }
  }, [isMuted, sendYTCommand, pauseOtherYouTubePlayers]);

  // Don't render if not on homepage, permanently closed, no tools, or haven't scrolled past hero yet
  if (!isHomepage || !isVisible || !hasScrolledEnough || toolsWithVideos.length === 0) {
    return null;
  }
  // Once a mode is chosen, require a video to render
  if (mode !== 'idle' && (!currentVideoId || !videoSrc)) {
    return null;
  }

  const playerUi = (
    <div
      className={shouldShow ? "opacity-100" : "opacity-0 pointer-events-none"}
      style={{
        // CRITICAL: Inline fixed positioning - cannot be overridden by CSS
        position: 'fixed',
        // Responsive sizing & safe-area support (iOS notch, etc.)
        width: isMusicMode ? "clamp(130px, 30vw, 180px)" : "clamp(148px, 36vw, 208px)",
        // Lift the player on mobile so the idle mode buttons (esp. MUSIC_GALLERY.exe)
        // never get clipped by the bottom of the viewport / nav UI.
        bottom: mode === 'idle'
          ? "calc(4.5rem + env(safe-area-inset-bottom, 0px))"
          : "calc(1rem + env(safe-area-inset-bottom, 0px))",
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
            className="text-[10px] font-bold leading-[1.15] flex-1 line-clamp-3 break-words"
            style={{
              color: '#FFD700',
              textShadow: '0 0 6px #FFD700'
            }}
            title={currentTitle}
          >
            {mode === 'idle'
              ? '🎬 Whatcha in the mood for?'
              : `${currentEmoji} ${currentTitle}`}
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
        <div
          className="group relative bg-black"
          style={{
            // In idle mode let the content (3 buttons + label) define the height
            // so MUSIC_GALLERY.exe never gets clipped on small mobile screens.
            aspectRatio: mode === 'idle' ? 'auto' : (isMusicMode ? '9 / 16' : '16 / 9'),
            minHeight: mode === 'idle' ? undefined : '70px',
          }}
        >
          {mode === 'idle' ? (
            <div className="relative flex flex-col items-center justify-center gap-1.5 p-1.5 bg-black overflow-hidden">
              <style>{`@keyframes matrixRain { 0% { transform: translateY(-50%);} 100% { transform: translateY(50%);} }`}</style>
              {/* Matrix streaming code background */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  background:
                    "repeating-linear-gradient(180deg, rgba(0,255,70,0.18) 0 1px, transparent 1px 3px)",
                  animation: "matrixRain 2.5s linear infinite",
                  textShadow: "0 0 6px #00ff41",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none font-mono text-[8px] leading-[9px] text-[#00ff41]/70 select-none overflow-hidden whitespace-pre"
                style={{
                  animation: "matrixRain 6s linear infinite",
                  textShadow: "0 0 4px #00ff41",
                }}
              >
                {"01010\n10110\n11001\n01110\n10011\n01101\n10100\n01011\n11010\n00111\n10101\n01100\n11011\n00101\n10010\n01001"}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

              <p
                className="relative z-10 text-[9px] uppercase tracking-[0.2em] text-center font-mono font-bold"
                style={{ color: "#00ff41", textShadow: "0 0 8px #00ff41" }}
              >
                &gt; select_mode
              </p>

              <button
                onClick={() => handleSelectMode('tools')}
                className="relative z-10 group w-full px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#00ff41] bg-black/70 border border-[#00ff41]/60 hover:bg-[#00ff41]/15 hover:border-[#00ff41] active:scale-95 transition-all"
                style={{
                  clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)",
                  textShadow: "0 0 6px #00ff41",
                  boxShadow: "0 0 10px rgba(0,255,65,0.35), inset 0 0 8px rgba(0,255,65,0.15)",
                }}
                title="Browse our AI tools showcase"
              >
                ▶ AI_TOOLS.exe
              </button>
              <button
                onClick={() => handleSelectMode('music')}
                className="relative z-10 group w-full px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#a855f7] bg-black/70 border border-[#a855f7]/60 hover:bg-[#a855f7]/15 hover:border-[#a855f7] active:scale-95 transition-all"
                style={{
                  clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)",
                  textShadow: "0 0 6px #a855f7",
                  boxShadow: "0 0 10px rgba(168,85,247,0.35), inset 0 0 8px rgba(168,85,247,0.15)",
                }}
                title="Watch our original AI musical art gallery"
              >
                ♪ MUSIC_GALLERY.exe
              </button>
            </div>
          ) : (
            <>
              <iframe
                ref={iframeRef}
                src={videoSrc}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
                title={currentTitle}
                style={{ minHeight: '70px' }}
                onLoad={handleIframeLoad}
              />
              <button
                type="button"
                onClick={handleTogglePlay}
                className="absolute inset-0 bg-transparent"
                title={isPlaying ? "Pause" : "Play with sound"}
                aria-label={isPlaying ? "Pause pinned video" : "Play pinned video with sound"}
              />
            </>
          )}
        </div>

        {/* Controls bar - compact square buttons */}
        {mode !== 'idle' && (
        <div className="flex justify-center py-1 px-1.5 bg-gray-800/95 border-t border-cyan-500/20">
          <div className="grid grid-cols-3 gap-1 w-full">
            <button
              onClick={handleTogglePlay}
              className="h-7 w-full flex items-center justify-center rounded bg-green-500 hover:bg-green-400 text-black"
              title={isPlaying ? "Pause" : "Play with sound"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handlePrevVideo}
              className="h-7 w-full flex items-center justify-center rounded bg-gray-600 hover:bg-gray-500 text-white"
              title="Previous Video"
            >
              <SkipBack className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNextVideo}
              className="h-7 w-full flex items-center justify-center rounded bg-gray-600 hover:bg-gray-500 text-white"
              title="Next Video"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={toggleMute}
              className="h-7 w-full flex items-center justify-center rounded bg-cyan-500 hover:bg-cyan-400 text-white"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handleToolClick}
              className="col-span-2 h-7 w-full text-[12px] tracking-wider rounded bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 hover:from-amber-400 hover:via-yellow-200 hover:to-amber-400 text-black font-extrabold animate-pulse hover:scale-105 active:scale-95 transition-transform bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite]"
              style={{
                boxShadow: '0 0 12px rgba(255, 215, 0, 0.8), 0 0 24px rgba(255, 215, 0, 0.5), 0 0 36px rgba(255, 215, 0, 0.3)'
              }}
            >
              ▶ TRY NOW
            </button>
          </div>
        </div>
        )}
        {mode !== 'idle' && (
          <button
            onClick={() => setMode('idle')}
            className="w-full text-[9px] uppercase tracking-wider py-0.5 bg-black/60 text-cyan-300 hover:text-white hover:bg-black/80 border-t border-cyan-500/20"
            title="Switch between Tools and Music Video gallery"
          >
            ⇄ Switch Mode
          </button>
        )}
      </div>
    </div>
  );

  // Render via portal to escape any parent stacking context (common cause of hidden UI with audible media)
  if (typeof document === 'undefined') return null;
  return createPortal(playerUi, document.body);
});

PinnedVideoPlayer.displayName = 'PinnedVideoPlayer';

export default PinnedVideoPlayer;