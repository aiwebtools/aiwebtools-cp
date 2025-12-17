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
    const cloneUrl = "https://lovable.dev/projects/6bc45a49-a34b-46a4-9b9d-c50f06b2d957?via=aiwebtools";
    
    // Close popup immediately
    setIsOpen(false);
    
    // Trigger time warp effect with sound - this will open the URL after the effect
    createTimePortalEffect(cloneUrl, "Clone AI Empire");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl max-w-[95vw] bg-gradient-to-br from-background to-accent/5 border-primary/20 max-h-[90vh] overflow-y-auto z-[60]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            Your AI Empire Awaits!
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            {showCount === 1 ? (
              <>Hey, we're glad you like this website. <span className="text-primary font-semibold">It's actually yours</span> — you just don't know it yet.</>
            ) : (
              <>Just a friendly reminder: This website can be <span className="text-primary font-semibold">100% yours</span> with just one click!</>
            )}
          </DialogDescription>
        </DialogHeader>
        
        {/* Video Section */}
        <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 bg-black">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/lPZVKMfUcrs?autoplay=0&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1&fs=1"
            title="Clone This Website"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
            loading="eager"
          ></iframe>
        </div>

        <div className="flex flex-col gap-4 py-4">
          <p className="text-sm text-muted-foreground">
            Click below to claim it by cloning it now and start building your own AI tools directory!
          </p>
          <Button
            onClick={handleClone}
            className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Copy className="w-5 h-5 mr-2" />
            Clone This Website Now
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            className="w-full"
          >
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CloneOfferPopup;
