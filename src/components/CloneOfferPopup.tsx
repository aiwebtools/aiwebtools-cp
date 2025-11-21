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
import { createConfettiCelebration } from "@/utils/effects/confettiCelebration";

const CloneOfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCount, setShowCount] = useState(0);

  // Function to mute and pause all videos on the page
  const muteAllVideos = () => {
    console.log('🔇 Muting all videos for clone popup...');
    const videos = document.querySelectorAll('video, iframe');
    videos.forEach((video) => {
      if (video instanceof HTMLVideoElement) {
        video.muted = true;
        video.pause();
      } else if (video instanceof HTMLIFrameElement) {
        const src = video.src;
        if (src.includes('youtube.com') || src.includes('youtu.be')) {
          // Send mute and pause commands to YouTube iframe
          try {
            video.contentWindow?.postMessage(JSON.stringify({
              event: 'command',
              func: 'mute',
              args: ''
            }), '*');
            
            video.contentWindow?.postMessage(JSON.stringify({
              event: 'command',
              func: 'pauseVideo',
              args: ''
            }), '*');
          } catch (e) {
            console.log('Error muting video:', e);
          }
        }
      }
    });
  };

  useEffect(() => {
    // Check how many times popup has been shown
    const shownCount = parseInt(sessionStorage.getItem('cloneOfferShowCount') || '0');
    setShowCount(shownCount);

    // If already shown 1 time, don't show again
    if (shownCount >= 1) {
      return;
    }

    // Determine the delay: 7 minutes (after videos complete)
    const delays = [420000]; // 7min in ms
    const delay = delays[shownCount] || delays[delays.length - 1];

    const timer = setTimeout(() => {
      muteAllVideos();
      setIsOpen(true);
      const newCount = shownCount + 1;
      setShowCount(newCount);
      sessionStorage.setItem('cloneOfferShowCount', newCount.toString());
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const handleClone = (e: React.MouseEvent) => {
    e.preventDefault();
    const cloneUrl = "https://lovable.dev/projects/7bf28873-9bfc-4e4a-b2dd-f4eb84d9eec6?via=aiwebtools";
    
    // Trigger confetti celebration
    createConfettiCelebration();
    
    // Create time portal effect (same as FloatingCloneButton)
    const createTimePortalEffect = (targetUrl: string, title: string) => {
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: radial-gradient(circle at center, 
          rgba(0, 255, 0, 0.1) 0%, 
          rgba(0, 0, 0, 0.95) 100%);
        z-index: 99999;
        pointer-events: none;
        animation: matrixPortal 2s ease-in-out;
      `;

      const style = document.createElement('style');
      style.textContent = `
        @keyframes matrixPortal {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0; transform: scale(1.5); }
        }
      `;
      document.head.appendChild(style);

      const centerText = document.createElement('div');
      centerText.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #00ff00;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        z-index: 100000;
        text-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
        animation: pulse 1s ease-in-out;
        font-family: 'Courier New', monospace;
      `;
      centerText.textContent = title;

      document.body.appendChild(overlay);
      document.body.appendChild(centerText);

      setTimeout(() => {
        window.open(targetUrl, '_blank');
        setTimeout(() => {
          document.body.removeChild(overlay);
          document.body.removeChild(centerText);
          document.head.removeChild(style);
        }, 500);
      }, 1500);
    };

    createTimePortalEffect(cloneUrl, "🌀 CLONING YOUR AI EMPIRE 🌀");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl bg-gradient-to-br from-background to-accent/5 border-primary/20">
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
            src="https://www.youtube.com/embed/S_0SSog3tNo?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            title="Clone This Website"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
