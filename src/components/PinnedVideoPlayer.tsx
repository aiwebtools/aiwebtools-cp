import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Check if closed this session
  const [isVisible, setIsVisible] = useState(() => {
    return sessionStorage.getItem(SESSION_CLOSED_KEY) !== "true";
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  
  // Shuffled tools - computed once when component mounts (random each page load)
  const [toolsWithVideos] = useState(() => getShuffledToolsWithVideos());

  const currentTool: Tool | undefined = toolsWithVideos[currentIndex];
  const currentVideoId = currentTool ? extractYouTubeId(currentTool.videoUrl || '') : null;

  // Listen for YouTube iframe API messages to detect video end
  useEffect(() => {
    if (!isVisible || toolsWithVideos.length === 0) return;

    const handleMessage = (event: MessageEvent) => {
      // YouTube sends messages when video state changes
      if (event.origin !== "https://www.youtube.com") return;
      
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        // State 0 = ended
        if (data?.event === "onStateChange" && data?.info === 0) {
          setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
        }
      } catch {
        // Ignore parse errors
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isVisible, toolsWithVideos.length]);

  // Fallback: auto-advance every 90 seconds if video end detection fails
  useEffect(() => {
    if (!isVisible || toolsWithVideos.length === 0) return;
    
    const timeout = setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
    }, 90000); // 90 second fallback
    
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

  if (!isVisible || toolsWithVideos.length === 0 || !currentTool || !currentVideoId) {
    return null;
  }

  // Enable JS API for video end detection
  const videoSrc = `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&origin=${window.location.origin}`;

  return (
    <div 
      className={`fixed z-50 transition-all duration-300 ${
        isMinimized 
          ? "bottom-3 left-3 w-8 h-8" 
          : "bottom-3 left-3 w-32"
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
        <div className="bg-gray-900/95 backdrop-blur-sm rounded border border-cyan-500/30 shadow-xl shadow-cyan-500/10 overflow-hidden">
          {/* Tiny header with controls */}
          <div className="flex items-center justify-end gap-0.5 px-1 py-0.5 bg-gray-800/80">
            <button
              onClick={toggleMute}
              className="p-0.5 hover:bg-gray-700/50 rounded text-gray-400 hover:text-white transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-2.5 h-2.5" /> : <Volume2 className="w-2.5 h-2.5" />}
            </button>
            <button
              onClick={handleNextVideo}
              className="p-0.5 hover:bg-gray-700/50 rounded text-gray-400 hover:text-white transition-colors"
              title="Next"
            >
              <SkipForward className="w-2.5 h-2.5" />
            </button>
            <button
              onClick={() => setIsMinimized(true)}
              className="p-0.5 hover:bg-gray-700/50 rounded text-gray-400 hover:text-yellow-400 transition-colors"
              title="Minimize"
            >
              <span className="text-[8px]">−</span>
            </button>
            <button
              onClick={handleClose}
              className="p-0.5 hover:bg-gray-700/50 rounded text-gray-400 hover:text-red-400 transition-colors"
              title="Close"
            >
              <X className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* Tiny Video Container */}
          <div className="relative aspect-video bg-black">
            <iframe
              ref={iframeRef}
              key={`${currentVideoId}-${isMuted}-${currentIndex}`}
              src={videoSrc}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={currentTool.title}
            />
          </div>

          {/* Tiny CTA */}
          <Button
            onClick={handleToolClick}
            size="sm"
            className="w-full h-5 text-[8px] rounded-none bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold"
          >
            🚀 USE THIS TOOL
          </Button>
        </div>
      )}
    </div>
  );
};

export default PinnedVideoPlayer;