import { useState, useEffect } from 'react';
import { AlertTriangle, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Robot voice effects for the disclaimer popup
const playAccessGrantedVoices = () => {
  console.log('🤖 Playing access granted voices');
  
  // First robotic voice: "ACCESS GRANTED, welcome master"
  const playRoboticVoice = () => {
    if ('speechSynthesis' in window) {
      const utterance1 = new SpeechSynthesisUtterance('ACCESS GRANTED, welcome master');
      
      // Configure for robotic sound
      utterance1.rate = 0.7; // Slower
      utterance1.pitch = 0.3; // Lower pitch
      utterance1.volume = 0.8;
      
      // Try to find a robotic-sounding voice
      const voices = speechSynthesis.getVoices();
      const roboticVoice = voices.find(voice => 
        voice.name.toLowerCase().includes('daniel') || 
        voice.name.toLowerCase().includes('fred') ||
        voice.name.toLowerCase().includes('junior') ||
        voice.name.toLowerCase().includes('bad news') ||
        voice.lang.includes('en')
      );
      
      if (roboticVoice) {
        utterance1.voice = roboticVoice;
      }
      
      speechSynthesis.speak(utterance1);
      
      // Second AOL-style voice: "YOU'VE GOT TOOLS" after first one finishes
      utterance1.onend = () => {
        setTimeout(() => {
          const utterance2 = new SpeechSynthesisUtterance("YOU'VE GOT TOOLS");
          
          // Configure for AOL-style sound (more upbeat)
          utterance2.rate = 1.1;
          utterance2.pitch = 1.2; // Higher pitch for AOL style
          utterance2.volume = 0.9;
          
          // Try to find a friendlier voice for AOL style
          const aolVoice = voices.find(voice => 
            voice.name.toLowerCase().includes('samantha') || 
            voice.name.toLowerCase().includes('alex') ||
            voice.name.toLowerCase().includes('karen') ||
            voice.name.toLowerCase().includes('victoria') ||
            (voice.lang.includes('en') && voice.name.toLowerCase().includes('female'))
          );
          
          if (aolVoice) {
            utterance2.voice = aolVoice;
          }
          
          speechSynthesis.speak(utterance2);
        }, 500); // Small delay between voices
      };
    }
  };

  // Ensure voices are loaded before playing
  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.addEventListener('voiceschanged', () => {
      playRoboticVoice();
    }, { once: true });
  } else {
    playRoboticVoice();
  }
};

// Function to enable autoplay on videos after user interaction
const enableVideoAutoplay = () => {
  console.log('🎥 Enabling video autoplay after user interaction');
  
  // Find all YouTube iframes and trigger play
  const iframes = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="youtu.be"]');
  iframes.forEach((iframe) => {
    const src = iframe.getAttribute('src');
    if (src && src.includes('autoplay=1')) {
      // Reload the iframe to trigger autoplay now that we have user interaction
      iframe.setAttribute('src', src);
      console.log('🎥 Reloaded iframe to enable autoplay:', src);
    }
  });

  // Also try to play any HTML5 video elements
  const videos = document.querySelectorAll('video');
  videos.forEach((video) => {
    if (video.autoplay) {
      video.play().catch(e => console.log('Video play failed:', e));
    }
  });
};

const InitialDisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('aiwebtools-disclaimer-seen');
    
    if (!hasSeenDisclaimer) {
      // Show disclaimer after a brief delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Play the robotic voices
    playAccessGrantedVoices();
    
    // Enable video autoplay after user interaction
    enableVideoAutoplay();
    
    // Mark disclaimer as seen
    localStorage.setItem('aiwebtools-disclaimer-seen', 'true');
    setIsOpen(false);
  };

  const handleClose = () => {
    // Don't mark as permanently seen if they just close it
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-black/95 border border-yellow-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-yellow-400">
            <AlertTriangle className="w-5 h-5" />
            Important Notice
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-sm leading-relaxed">
            <div className="space-y-3">
              <p>
                Welcome to <span className="text-cyan-400 font-semibold">AIWebTools.AI</span>! 
                Please understand that:
              </p>
              
              <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                <ul className="space-y-1 text-xs">
                  <li>• All AI tools are for <span className="text-blue-300 font-medium">educational and informational purposes only</span></li>
                  <li>• Some tools are <span className="text-orange-300 font-medium">experimental in nature</span></li>
                  <li>• These do <span className="text-red-300 font-medium">NOT constitute real human or professional advice</span></li>
                  <li>• Always consult qualified professionals for important decisions</li>
                </ul>
              </div>

              <p className="text-xs text-gray-400">
                By using this platform, you acknowledge these limitations and use all tools at your own discretion.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter className="flex gap-2 sm:gap-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleClose}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <X className="w-3 h-3 mr-1" />
            Close
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
          >
            <Check className="w-3 h-3 mr-1" />
            I Understand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InitialDisclaimerPopup;