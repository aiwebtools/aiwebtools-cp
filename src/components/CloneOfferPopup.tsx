import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Sparkles } from "lucide-react";
import { createTimePortalEffect } from "@/utils/timeEffects";

const CloneOfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCount, setShowCount] = useState(0);

  // Function to pause all videos on the page
  const pauseAllVideos = () => {
    const videos = document.querySelectorAll('video, iframe');
    videos.forEach((video) => {
      if (video instanceof HTMLVideoElement) {
        video.pause();
        video.muted = true;
      } else if (video instanceof HTMLIFrameElement) {
        const src = video.src;
        if (src.includes('youtube.com') || src.includes('youtu.be')) {
          // Send pause command via YouTube iframe API
          try {
            video.contentWindow?.postMessage(JSON.stringify({
              event: 'command',
              func: 'pauseVideo',
              args: ''
            }), '*');
          } catch (e) {
            console.log('Could not pause video:', e);
          }
        }
      }
    });
  };

  useEffect(() => {
    // Check if device is mobile (don't show popup on mobile)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    if (isMobile) {
      return; // Don't show popup on mobile devices
    }

    // Check how many times popup has been shown
    const shownCount = parseInt(sessionStorage.getItem('cloneOfferShowCount') || '0');
    setShowCount(shownCount);

    // If already shown 4 times, don't show again
    if (shownCount >= 4) {
      return;
    }

    // Determine the delay: 7, 12, and 20 minutes (starting at 7 min)
    const delays = [420000, 720000, 1200000, 1500000]; // 7min, 12min, 20min, 25min in ms
    const delay = delays[shownCount] || delays[delays.length - 1];

    const timer = setTimeout(() => {
      pauseAllVideos();
      setIsOpen(true);
      const newCount = shownCount + 1;
      setShowCount(newCount);
      sessionStorage.setItem('cloneOfferShowCount', newCount.toString());
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const handleClone = (e: React.MouseEvent) => {
    e.preventDefault();
    const cloneUrl = "https://lovable.dev/projects/debf21bc-787a-4053-b672-14a326f63643?via=aiwebtools";
    
    // Close popup immediately
    setIsOpen(false);
    
    // Trigger time warp effect with sound - this will open the URL after the effect
    createTimePortalEffect(cloneUrl, "Clone AI Empire");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl max-w-[95vw] bg-gray-900 border-2 border-cyan-500/50 max-h-[90vh] overflow-y-auto z-[9999] shadow-2xl shadow-cyan-500/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl text-white">
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            Your AI Empire Awaits!
          </DialogTitle>
          <DialogDescription className="text-base pt-2 text-gray-300">
            {showCount === 1 ? (
              <>Hey, we're glad you like this website. <span className="text-cyan-400 font-semibold">It's actually yours</span> — you just don't know it yet.</>
            ) : (
              <>Just a friendly reminder: This website can be <span className="text-cyan-400 font-semibold">100% yours</span> with just one click!</>
            )}
          </DialogDescription>
        </DialogHeader>
        
        {/* Video Section */}
        <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 bg-black border border-gray-700">
          <iframe
            width="100%"
            height="100%"
            src={isOpen ? "https://www.youtube.com/embed/lPZVKMfUcrs?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1&fs=1&vq=hd1080&hd=1&quality=hd1080&enablejsapi=1" : ""}
            key={isOpen ? "playing" : "stopped"}
            title="Clone This Website"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
            loading="eager"
          ></iframe>
        </div>

        <div className="flex flex-col gap-4 py-4">
          <p className="text-sm text-gray-400">
            Click below to claim it by cloning it now and start building your own AI tools directory!
          </p>
          
          {/* Main Clone Button - Solid, High Contrast */}
          <Button
            onClick={handleClone}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-6 text-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 border-0 cursor-pointer select-none"
            style={{ 
              position: 'relative', 
              zIndex: 10,
              pointerEvents: 'auto'
            }}
          >
            <Copy className="w-5 h-5 mr-2" />
            Clone This Website Now
          </Button>
          
          {/* Maybe Later Button - Solid Background */}
          <Button
            onClick={() => setIsOpen(false)}
            variant="outline"
            className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border-gray-600 hover:border-gray-500 font-medium py-3 cursor-pointer select-none"
            style={{ 
              position: 'relative', 
              zIndex: 10,
              pointerEvents: 'auto'
            }}
          >
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CloneOfferPopup;
