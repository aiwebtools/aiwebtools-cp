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
      
      // Create first message: "WELCOME MASTER" - deep robot voice (restored slower speed)
      const welcomeMsg = new SpeechSynthesisUtterance("WELCOME MASTER");
      welcomeMsg.rate = 0.2; // MUCH slower and more robotic (restored user preference)
      welcomeMsg.pitch = 0.05; // Even lower pitch for deeper robot effect
      welcomeMsg.volume = 0.9; // Full but not overwhelming
      
      // Standardized voice selection for consistent cross-device experience
      
      // Find deep male voice for "WELCOME MASTER" - robot-like
      const maleVoice = voices.find(v => {
        const name = v.name.toLowerCase();
        const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
        return isEnglish && (
          // Common male voices across platforms
          name.includes('alex') || name.includes('daniel') || name.includes('david') ||
          name.includes('male') || name.includes('fred') || name.includes('tom') ||
          name.includes('paul') || name.includes('mark') || name.includes('richard') ||
          // Platform-specific fallbacks
          name.includes('microsoft david') || name.includes('google uk english male')
        );
      }) || voices.find(v => {
        // Fallback: any English male voice
        const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
        return isEnglish && (v.name.toLowerCase().includes('male') || 
               (!v.name.toLowerCase().includes('female') && !v.name.toLowerCase().includes('woman')));
      });
      
      if (maleVoice) {
        welcomeMsg.voice = maleVoice;
        console.log('🤖 Selected male voice:', maleVoice.name, 'Lang:', maleVoice.lang);
      } else {
        console.log('🤖 Using default voice (no male voice found)');
      }
      
      // Create second message: "YOU'VE GOT TOOLS" - British female AOL-style
      const toolsMsg = new SpeechSynthesisUtterance("YOU'VE GOT TOOLS");
      toolsMsg.rate = 0.8; // Normal conversational pace
      toolsMsg.pitch = 1.2; // Pleasant feminine pitch
      toolsMsg.volume = 0.95; // Clear and friendly
      
      // Find female voice for AOL-style announcement - prioritize quality
      const femaleVoice = voices.find(v => {
        const name = v.name.toLowerCase();
        const lang = v.lang ? v.lang.toLowerCase() : '';
        
        // First priority: British English female voices
        return (lang.includes('en-gb') || lang.includes('gb')) && 
               (name.includes('female') || name.includes('woman') || 
                name.includes('kate') || name.includes('serena') || name.includes('emma') ||
                name.includes('fiona') || name.includes('victoria') || name.includes('susan'));
      }) || voices.find(v => {
        const name = v.name.toLowerCase();
        const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
        
        // Second priority: High-quality English female voices
        return isEnglish && (
          name.includes('samantha') || name.includes('karen') || name.includes('susan') ||
          name.includes('anna') || name.includes('catherine') || name.includes('emma') ||
          name.includes('sarah') || name.includes('jessica') || name.includes('michelle') ||
          name.includes('microsoft zira') || name.includes('google us english female')
        );
      }) || voices.find(v => {
        // Final fallback: any English female voice
        const name = v.name.toLowerCase();
        const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
        return isEnglish && (name.includes('female') || name.includes('woman'));
      });
      
      if (femaleVoice) {
        toolsMsg.voice = femaleVoice;
        console.log('📬 Selected female voice:', femaleVoice.name, 'Lang:', femaleVoice.lang);
      } else {
        console.log('📬 Using default voice (no female voice found)');
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