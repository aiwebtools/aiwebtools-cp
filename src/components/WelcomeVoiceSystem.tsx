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
      // Cancel any existing speech to prevent conflicts
      speechSynthesis.cancel();
      
      const isMobile = isMobileDevice();
      console.log(`📱 Device: ${isMobile ? 'Mobile' : 'Desktop'}`);
      
      // Get available voices
      const voices = speechSynthesis.getVoices();
      console.log(`🗣️ Found ${voices.length} voices`);
      
      // Create first message: "WELCOME MASTER" - deep robot voice
      const welcomeMsg = new SpeechSynthesisUtterance("WELCOME MASTER");
      welcomeMsg.rate = 0.4; // Slow and deliberate
      welcomeMsg.pitch = 0.1; // Very low pitch for robot effect
      welcomeMsg.volume = 0.9; // Full but not overwhelming
      
      // Find deep male voice for welcome - prioritize robot-like voices
      const maleVoice = voices.find(v => 
        v.name.toLowerCase().includes('alex') ||
        v.name.toLowerCase().includes('daniel') ||
        v.name.toLowerCase().includes('male') ||
        v.name.toLowerCase().includes('fred')
      );
      if (maleVoice) {
        welcomeMsg.voice = maleVoice;
        console.log('🤖 Selected male voice:', maleVoice.name);
      }
      
      // Create second message: "YOU'VE GOT TOOLS" - British female AOL-style
      const toolsMsg = new SpeechSynthesisUtterance("YOU'VE GOT TOOLS");
      toolsMsg.rate = 0.8; // Normal conversational pace
      toolsMsg.pitch = 1.2; // Pleasant feminine pitch
      toolsMsg.volume = 0.95; // Clear and friendly
      
      // Find British female voice for AOL-style announcement
      const britishFemaleVoice = voices.find(v => 
        (v.lang && v.lang.toLowerCase().includes('en-gb')) ||
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
        v.name.toLowerCase().includes('anna') ||
        v.name.toLowerCase().includes('catherine')
      );
      
      if (britishFemaleVoice) {
        toolsMsg.voice = britishFemaleVoice;
        console.log('📬 Selected female voice:', britishFemaleVoice.name);
      }
      
      // Set up sequence timing with proper synchronization
      welcomeMsg.onstart = () => console.log('🤖 Playing: "WELCOME MASTER"');
      welcomeMsg.onend = () => {
        console.log('✅ Welcome message complete, preparing tools message...');
        // Wait for welcome to fully complete before starting tools message
        setTimeout(() => {
          console.log('📬 Starting: "YOU\'VE GOT TOOLS"');
          speechSynthesis.speak(toolsMsg);
        }, 800); // Proper pause between messages
      };
      
      toolsMsg.onstart = () => console.log('📬 Playing: "YOU\'VE GOT TOOLS" (AOL-style)');
      toolsMsg.onend = () => {
        console.log('🎉 Welcome sequence complete - no overlapping voices!');
        // Voice system is now complete and won't interfere with video
      };
      
      // Comprehensive error handling
      welcomeMsg.onerror = (e) => {
        console.log('❌ Welcome message error:', e);
        // Still try tools message even if welcome fails
        setTimeout(() => {
          console.log('🔄 Attempting tools message after welcome error...');
          speechSynthesis.speak(toolsMsg);
        }, 500);
      };
      
      toolsMsg.onerror = (e) => {
        console.log('❌ Tools message error:', e);
        console.log('✅ Voice sequence completed (with error)');
      };
      
      // Start the carefully timed sequence
      console.log('🚀 Starting welcome message...');
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
      
      // Try silent unlock for mobile - using EXACT desktop voice settings to prevent interference
      const unlockMethods = [
        () => {
          const unlockMsg = new SpeechSynthesisUtterance("");
          unlockMsg.volume = 0.001; // Nearly silent
          unlockMsg.rate = 0.4; // SAME as desktop WELCOME MASTER
          unlockMsg.pitch = 0.1; // SAME as desktop WELCOME MASTER
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
    // Only play once per page load - prevent multiple voice overlaps
    if (hasPlayed) {
      console.log('🔄 Voice already played for this page load');
      return;
    }

    console.log('🔍 Voice system check: Setting up welcome sequence (timed with video)');
    
    const isMobile = isMobileDevice();
    // Coordinate with video timing - voice starts AFTER video begins
    const delay = 3000; // 3 seconds to let video start first
    
    const timer = setTimeout(() => {
      console.log('🚀 Timer: Initializing welcome sequence (video should be playing)');
      initializeVoices();
    }, delay);
    
    // Enhanced mobile support - but only after video has had time to start
    const handleUserInteraction = () => {
      if (hasPlayed) return; // Prevent multiple triggers
      
      console.log('👆 User interaction detected - triggering welcome with proper timing');
      clearTimeout(timer);
      
      // Ensure video has time to start before voice begins
      setTimeout(() => {
        initializeVoices();
      }, 1500);
      
      // Remove listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('touchend', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
    
    // Add event listeners for user interaction (but with timing)
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