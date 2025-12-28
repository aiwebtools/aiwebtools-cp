import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, SkipForward, Volume2, VolumeX } from "lucide-react";
import { allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";

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

const PinnedVideoPlayer = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Get all tools with valid YouTube videos and shuffle them
  const toolsWithVideos = useMemo(() => {
    const filtered = allTools.filter(tool => {
      const videoId = extractYouTubeId(tool.videoUrl || '');
      return videoId !== null;
    });
    return shuffleArray(filtered);
  }, []);

  const currentTool: Tool | undefined = toolsWithVideos[currentIndex];
  const currentVideoId = currentTool ? extractYouTubeId(currentTool.videoUrl || '') : null;

  // Auto-advance to next video every 60 seconds
  useEffect(() => {
    if (!isVisible || toolsWithVideos.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
    }, 60000); // 60 seconds per video
    
    return () => clearInterval(interval);
  }, [isVisible, toolsWithVideos.length]);

  const handleNextVideo = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % toolsWithVideos.length);
  }, [toolsWithVideos.length]);

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

  return (
    <div 
      className={`fixed z-50 transition-all duration-300 ${
        isMinimized 
          ? "bottom-4 left-4 w-12 h-12" 
          : "bottom-4 left-4 w-48 sm:w-56"
      }`}
    >
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform animate-pulse"
          title="Open Video Player"
        >
          <span className="text-lg">▶</span>
        </button>
      ) : (
        <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden">
          {/* Header with controls */}
          <div className="flex items-center justify-between px-2 py-1 bg-gray-800/80 border-b border-gray-700/50">
            <span className="text-[10px] text-cyan-400 font-medium truncate max-w-[100px]">
              🎬 Tool Showcase
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={toggleMute}
                className="p-1 hover:bg-gray-700/50 rounded text-gray-400 hover:text-white transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
              </button>
              <button
                onClick={handleNextVideo}
                className="p-1 hover:bg-gray-700/50 rounded text-gray-400 hover:text-white transition-colors"
                title="Next Video"
              >
                <SkipForward className="w-3 h-3" />
              </button>
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 hover:bg-gray-700/50 rounded text-gray-400 hover:text-yellow-400 transition-colors"
                title="Minimize"
              >
                <span className="text-xs">−</span>
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-gray-700/50 rounded text-gray-400 hover:text-red-400 transition-colors"
                title="Close"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video bg-black">
            <iframe
              key={`${currentVideoId}-${isMuted}`}
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${currentVideoId}&controls=0&modestbranding=1&rel=0&showinfo=0`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={currentTool.title}
            />
          </div>

          {/* Tool Info & CTA */}
          <div className="p-2 space-y-2">
            <p className="text-[10px] text-gray-300 truncate" title={currentTool.title}>
              {currentTool.emoji || "🤖"} {currentTool.title}
            </p>
            <Button
              onClick={handleToolClick}
              size="sm"
              className="w-full h-7 text-xs bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold shadow-lg"
            >
              🚀 USE THIS TOOL
            </Button>
          </div>

          {/* Progress indicator */}
          <div className="h-0.5 bg-gray-700">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-[progress_60s_linear_infinite]"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PinnedVideoPlayer;