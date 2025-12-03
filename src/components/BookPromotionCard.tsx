import { BookOpen, ExternalLink, Download, Eye, X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { useState, useRef, useEffect, useCallback } from "react";

// Lazy YouTube component for book section with play state callback
const LazyBookVideo = ({ 
  videoId, 
  title, 
  onPlay 
}: { 
  videoId: string; 
  title: string; 
  onPlay?: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const handlePlay = () => {
    setIsLoaded(true);
    onPlay?.();
  };

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1`}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    );
  }

  return (
    <div className="absolute inset-0 cursor-pointer" onClick={handlePlay}>
      <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover" loading="lazy" />
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
  const [isPaused, setIsPaused] = useState(false);
  
  const videos = [
    {
      id: "lG1rMaImBNc",
      title: "The Book Of Deployable Robot Prompts",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      id: "i0zc0aeRCeI",
      title: "Coloring Book Generator Demo",
      gradient: "from-cyan-500/20 to-purple-500/20"
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
    }
  ];

  const videosPerPage = 3;
  const totalDesktopPages = Math.ceil(videos.length / videosPerPage);

  // Auto-cycle effect - pauses when video is playing
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % totalDesktopPages);
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000); // 5 seconds between transitions

    return () => clearInterval(interval);
  }, [isPaused, totalDesktopPages, videos.length]);

  const handleVideoPlay = useCallback(() => {
    setIsPaused(true);
  }, []);

  const nextDesktopPage = () => {
    setDesktopIndex((prev) => (prev + 1) % totalDesktopPages);
  };

  const prevDesktopPage = () => {
    setDesktopIndex((prev) => (prev - 1 + totalDesktopPages) % totalDesktopPages);
  };

  const visibleDesktopVideos = videos.slice(
    desktopIndex * videosPerPage,
    desktopIndex * videosPerPage + videosPerPage
  );

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
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
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
    <section className="py-16 bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Book Visual - YouTube Videos */}
              <div className="lg:w-1/2 p-8">
                {/* Desktop: Carousel showing 3 videos at a time */}
                <div className="hidden md:block relative">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={prevDesktopPage}
                      className="p-2 bg-purple-900/80 rounded-full text-white hover:bg-purple-800 transition-colors z-10"
                      aria-label="Previous videos"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <div className="flex justify-center gap-4 transition-all duration-700 ease-in-out">
                      {visibleDesktopVideos.map((video, index) => (
                        <div key={desktopIndex * videosPerPage + index} className="relative w-48 flex-shrink-0 transition-all duration-700 ease-in-out">
                          <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16' }}>
                            <LazyBookVideo videoId={video.id} title={video.title} onPlay={handleVideoPlay} />
                          </div>
                          <div className={`absolute -inset-2 bg-gradient-to-r ${video.gradient} rounded-lg blur-xl -z-10`}></div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={nextDesktopPage}
                      className="p-2 bg-purple-900/80 rounded-full text-white hover:bg-purple-800 transition-colors z-10"
                      aria-label="Next videos"
                    >
                      <ChevronRight size={24} />
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
                  className="md:hidden relative"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="flex justify-center items-center">
                    <button
                      onClick={prevVideo}
                      className="absolute left-0 z-10 p-2 bg-purple-900/80 rounded-full text-white hover:bg-purple-800 transition-colors"
                      aria-label="Previous video"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <div className="relative w-48 flex-shrink-0 mx-auto transition-all duration-700 ease-in-out">
                      <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16' }}>
                        <LazyBookVideo 
                          videoId={videos[currentVideoIndex].id} 
                          title={videos[currentVideoIndex].title} 
                          onPlay={handleVideoPlay}
                        />
                      </div>
                      <div className={`absolute -inset-2 bg-gradient-to-r ${videos[currentVideoIndex].gradient} rounded-lg blur-xl -z-10 transition-all duration-700`}></div>
                    </div>

                    <button
                      onClick={nextVideo}
                      className="absolute right-0 z-10 p-2 bg-purple-900/80 rounded-full text-white hover:bg-purple-800 transition-colors"
                      aria-label="Next video"
                    >
                      <ChevronRight size={24} />
                    </button>
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
              <div className="lg:w-1/2 p-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                      The Book Of Deployable Robot Prompts
                    </span>
                  </h2>
                  
                  <p className="text-purple-200 text-lg mb-4">
                    By <span className="text-cyan-400 font-semibold">AIWebTools.AI</span>
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-purple-300">
                      <span className="text-cyan-400">🤖</span>
                      <span>Over 60 Deployable Robots & Key AI Insights</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-purple-300">
                      <span className="text-cyan-400">⚡</span>
                      <span>Put you ahead of the game with cutting-edge AI</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-purple-300">
                      <span className="text-cyan-400">📋</span>
                      <span>Copy & paste ready prompts for personal AI tool deployment</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={handleBuyBook}
                        size="lg"
                        className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                      >
                        <BookOpen className="mr-2" size={20} />
                        📖 Buy on Amazon
                        <ExternalLink className="ml-2" size={16} />
                      </Button>

                      <Button
                        onClick={handleDownloadBook}
                        size="lg"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-6 py-4 rounded-xl text-base shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                      >
                        <Download className="mr-2" size={20} />
                        📥 Download Free Copy (DOCX)
                        <ExternalLink className="ml-2" size={16} />
                      </Button>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                        >
                          <Eye className="mr-2" size={20} />
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
