import { useEffect, useState } from "react";

// Mobile detection utility
const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    window.innerWidth <= 768
  );
};

const WelcomeVoiceSystem = () => {
  const [hasPlayed, setHasPlayed] = useState(false);

  const playWelcomeSequence = () => {
    if (!('speechSynthesis' in window)) {
      console.log('❌ Speech synthesis not supported');
      return;
    }

    // Prevent multiple playbacks
    if (hasPlayed) {
      console.log('🔄 Voice sequence already played, skipping...');
      return;
    }

    console.log('🎵 Starting welcome voice sequence...');
    setHasPlayed(true); // Mark as played immediately to prevent duplicates
    
    try {
      // Cancel any existing speech
      speechSynthesis.cancel();
      
      const isMobile = isMobileDevice();
      console.log(`📱 Device: ${isMobile ? 'Mobile' : 'Desktop'}`);
      
      // Get available voices
      const voices = speechSynthesis.getVoices();
      console.log(`🗣️ Found ${voices.length} voices`);
      
      // Create first message: "WELCOME MASTER"
      const welcomeMsg = new SpeechSynthesisUtterance("WELCOME MASTER");
      welcomeMsg.rate = isMobile ? 0.6 : 0.4;
      welcomeMsg.pitch = isMobile ? 0.3 : 0.1;
      welcomeMsg.volume = isMobile ? 0.8 : 1.0; // Slightly lower volume on mobile
      
      // Find deep male voice for welcome
      const maleVoice = voices.find(v => 
        v.name.toLowerCase().includes('male') ||
        v.name.toLowerCase().includes('david') ||
        v.name.toLowerCase().includes('alex')
      );
      if (maleVoice) welcomeMsg.voice = maleVoice;
      
      // Create second message: "YOU'VE GOT TOOLS" - relaxed and happy pace
      const toolsMsg = new SpeechSynthesisUtterance("YOU'VE GOT TOOLS");
      toolsMsg.rate = isMobile ? 0.85 : 0.75; // Faster than previous but still relaxed
      toolsMsg.pitch = isMobile ? 1.3 : 1.4; // Keep higher pitch for happier tone
      toolsMsg.volume = isMobile ? 0.9 : 1.0; // Slightly lower volume on mobile
      
      // Find British female voice for tools message (AOL-style)
      const britishFemaleVoice = voices.find(v => 
        v.lang.toLowerCase().includes('en-gb') ||
        v.name.toLowerCase().includes('british') ||
        v.name.toLowerCase().includes('uk') ||
        v.name.toLowerCase().includes('victoria') ||
        v.name.toLowerCase().includes('emma') ||
        v.name.toLowerCase().includes('fiona')
      ) || voices.find(v => 
        v.name.toLowerCase().includes('female') ||
        v.name.toLowerCase().includes('samantha') ||
        v.name.toLowerCase().includes('karen') ||
        v.name.toLowerCase().includes('susan') ||
        v.name.toLowerCase().includes('anna')
      );
      if (britishFemaleVoice) toolsMsg.voice = britishFemaleVoice;
      
      // Set up sequence timing
      welcomeMsg.onstart = () => console.log('🤖 Playing: "WELCOME MASTER"');
      welcomeMsg.onend = () => {
        console.log('✅ Welcome message complete, playing tools message...');
        setTimeout(() => {
          speechSynthesis.speak(toolsMsg);
        }, isMobile ? 600 : 700); // Quicker transition
      };
      
      toolsMsg.onstart = () => console.log('📬 Playing: "YOU\'VE GOT TOOLS"');
      toolsMsg.onend = () => {
        console.log('🎉 Welcome sequence complete! Starting video autoplay...');
        
        // Trigger video autoplay after voice completes
        setTimeout(() => {
          const video = document.querySelector('iframe[src*="youtube.com"]') as HTMLIFrameElement;
          if (video) {
            // Update the src to enable autoplay and unmuted
            const currentSrc = video.src;
            const newSrc = currentSrc
              .replace('autoplay=0', 'autoplay=1')
              .replace('mute=1', 'mute=0');
            
            console.log('🎥 Triggering video autoplay unmuted...');
            video.src = newSrc;
          }
        }, 500); // Small delay to ensure smooth transition
      };
      
      // Error handling
      welcomeMsg.onerror = (e) => {
        console.log('❌ Welcome message error:', e);
        setTimeout(() => speechSynthesis.speak(toolsMsg), 500);
      };
      
      toolsMsg.onerror = (e) => console.log('❌ Tools message error:', e);
      
      // Start the sequence
      speechSynthesis.speak(welcomeMsg);
      
    } catch (error) {
      console.log('❌ Voice system error:', error);
    }
  };
  
  const initializeVoices = () => {
    // Prevent multiple initializations
    if (hasPlayed) {
      console.log('🔄 Voice system already initialized, skipping...');
      return;
    }

    const isMobile = isMobileDevice();
    
    if (isMobile) {
      // Mobile: Multiple unlock attempts for better compatibility
      console.log('📱 Mobile detected - unlocking speech synthesis...');
      
      // Try multiple unlock methods for different mobile browsers
      const unlockMethods = [
        () => {
          const unlockMsg = new SpeechSynthesisUtterance(" ");
          unlockMsg.volume = 0.01;
          unlockMsg.rate = 10; // Very fast to minimize sound
          speechSynthesis.speak(unlockMsg);
          return unlockMsg;
        },
        () => {
          const unlockMsg = new SpeechSynthesisUtterance(".");
          unlockMsg.volume = 0.001;
          unlockMsg.pitch = 0.1;
          speechSynthesis.speak(unlockMsg);
          return unlockMsg;
        }
      ];
      
      let unlockAttempt = 0;
      const tryUnlock = () => {
        if (unlockAttempt < unlockMethods.length) {
          const unlockMsg = unlockMethods[unlockAttempt]();
          unlockAttempt++;
          
          unlockMsg.onend = () => {
            console.log('🔓 Mobile speech unlocked, starting sequence...');
            setTimeout(playWelcomeSequence, 200);
          };
          
          unlockMsg.onerror = () => {
            console.log(`❌ Unlock attempt ${unlockAttempt} failed, trying next...`);
            setTimeout(tryUnlock, 100);
          };
        } else {
          // If all unlock attempts fail, try direct playback
          console.log('⚠️ All unlock attempts failed, trying direct playback...');
          setTimeout(playWelcomeSequence, 300);
        }
      };
      
      tryUnlock();
    } else {
      // Desktop: Normal voice loading with enhanced compatibility
      const voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        playWelcomeSequence();
      } else {
        speechSynthesis.onvoiceschanged = () => {
          speechSynthesis.onvoiceschanged = null;
          setTimeout(playWelcomeSequence, 100);
        };
        
        // Fallback timeout for slow voice loading
        setTimeout(() => {
          if (speechSynthesis.onvoiceschanged) {
            speechSynthesis.onvoiceschanged = null;
            playWelcomeSequence();
          }
        }, 2000);
      }
    }
  };

  useEffect(() => {
    // Only play once per page load
    if (hasPlayed) {
      console.log('🔄 Voice already played for this page load');
      return;
    }

    console.log('🔍 Voice system check: Setting up welcome sequence');
    
    const isMobile = isMobileDevice();
    const delay = isMobile ? 500 : 800;
    
    const timer = setTimeout(() => {
      console.log('🚀 Timer: Initializing welcome sequence');
      initializeVoices();
    }, delay);
    
    // Enhanced mobile support - immediate user interaction handling
    const handleUserInteraction = () => {
      if (hasPlayed) return; // Prevent multiple triggers
      
      console.log('👆 User interaction detected - triggering welcome immediately');
      clearTimeout(timer);
      
      initializeVoices();
      
      // Remove listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('touchend', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
    
    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { passive: true, once: true });
    document.addEventListener('touchend', handleUserInteraction, { passive: true, once: true });
    document.addEventListener('keydown', handleUserInteraction, { once: true });
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('touchend', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [hasPlayed]); // Include hasPlayed to prevent multiple runs

  // This component renders nothing - it's just for voice functionality
  return null;
};

export default WelcomeVoiceSystem;