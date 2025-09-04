import { useEffect, useState } from "react";

// Enhanced browser detection for better voice compatibility
const getBrowserInfo = (): { isMobile: boolean; isSafari: boolean; isChrome: boolean } => {
  if (typeof window === 'undefined') return { isMobile: false, isSafari: false, isChrome: false };
  
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent) ||
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    window.innerWidth <= 768
  );
  
  const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent);
  const isChrome = /chrome/.test(userAgent);
  
  return { isMobile, isSafari, isChrome };
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

    console.log('🎵 Starting UNIVERSAL welcome voice sequence (same across all devices)...');
    setHasPlayed(true); // Mark as played immediately to prevent duplicates
    
    try {
      // Cancel any existing speech to prevent conflicts
      speechSynthesis.cancel();
      
      const browserInfo = getBrowserInfo();
      console.log(`🌐 Browser: ${browserInfo.isSafari ? 'Safari' : browserInfo.isChrome ? 'Chrome' : 'Other'}, Mobile: ${browserInfo.isMobile}`);
      
      // Get available voices with fallback loading
      let voices = speechSynthesis.getVoices();
      console.log(`🗣️ Found ${voices.length} voices`);
      
      // UNIFIED DESKTOP VOICE SETTINGS FOR ALL PLATFORMS
      // Create first message: "WELCOME MASTER" - deep robot voice (SAME SETTINGS EVERYWHERE)
      const welcomeMsg = new SpeechSynthesisUtterance("WELCOME MASTER");
      welcomeMsg.rate = 0.4; // Slow and deliberate - CONSISTENT
      welcomeMsg.pitch = 0.1; // Very low pitch for robot effect - CONSISTENT
      welcomeMsg.volume = 0.9; // Full but not overwhelming - CONSISTENT
      welcomeMsg.lang = 'en-US'; // Ensure English for consistency
      
      // UNIFIED VOICE SELECTION - prioritize desktop-quality voices across all platforms
      const findBestMaleVoice = (voiceList: SpeechSynthesisVoice[]) => {
        // Desktop-quality voice preferences (same for mobile and desktop)
        const desktopPreferred = voiceList.find(v => 
          v.name.toLowerCase().includes('alex') ||
          v.name.toLowerCase().includes('daniel') ||
          v.name.toLowerCase().includes('fred')
        );
        
        if (desktopPreferred) return desktopPreferred;
        
        // Fallback to any decent male voice
        return voiceList.find(v => 
          v.name.toLowerCase().includes('male') ||
          v.name.toLowerCase().includes('google') ||
          v.name.toLowerCase().includes('microsoft')
        );
      };
      
      const maleVoice = findBestMaleVoice(voices);
      if (maleVoice) {
        welcomeMsg.voice = maleVoice;
        console.log('🤖 Selected UNIFIED male voice:', maleVoice.name);
      }
      
      // Create second message: "YOU'VE GOT TOOLS" - British female AOL-style (SAME SETTINGS EVERYWHERE)
      const toolsMsg = new SpeechSynthesisUtterance("YOU'VE GOT TOOLS");
      toolsMsg.rate = 0.85; // Slightly slower for better clarity on mobile
      toolsMsg.pitch = 1.2; // Pleasant feminine pitch - CONSISTENT
      toolsMsg.volume = 0.95; // Clear and friendly - CONSISTENT
      toolsMsg.lang = 'en-GB'; // British accent preference
      
      // UNIFIED FEMALE VOICE SELECTION - same quality across all platforms
      const findBestFemaleVoice = (voiceList: SpeechSynthesisVoice[]) => {
        // Desktop-quality British voices (same for mobile and desktop)
        const britishVoice = voiceList.find(v => 
          (v.lang && v.lang.toLowerCase().includes('en-gb')) ||
          v.name.toLowerCase().includes('british') ||
          v.name.toLowerCase().includes('uk') ||
          v.name.toLowerCase().includes('victoria') ||
          v.name.toLowerCase().includes('emma') ||
          v.name.toLowerCase().includes('fiona')
        );
        
        if (britishVoice) return britishVoice;
        
        // Fallback to high-quality female voices
        return voiceList.find(v => 
          v.name.toLowerCase().includes('samantha') ||
          v.name.toLowerCase().includes('karen') ||
          v.name.toLowerCase().includes('susan') ||
          v.name.toLowerCase().includes('anna') ||
          v.name.toLowerCase().includes('female')
        );
      };
      
      const femaleVoice = findBestFemaleVoice(voices);
      if (femaleVoice) {
        toolsMsg.voice = femaleVoice;
        console.log('📬 Selected UNIFIED female voice:', femaleVoice.name);
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

    const browserInfo = getBrowserInfo();
    
    // UNIFIED VOICE INITIALIZATION - Same approach for all platforms
    console.log('🌐 UNIVERSAL voice initialization - same quality everywhere...');
    
    // Enhanced voice loading with Safari/Chrome specific optimizations
    const loadVoicesWithFallback = () => {
      let voices = speechSynthesis.getVoices();
      
      // Safari/iOS often needs time to load voices
      if (voices.length === 0 && browserInfo.isSafari) {
        console.log('🍎 Safari detected - waiting for voices to load...');
        return false; // Need to wait
      }
      
      // Chrome usually has voices immediately
      if (voices.length === 0 && browserInfo.isChrome) {
        console.log('🌐 Chrome detected - forcing voice reload...');
        // Force a refresh
        setTimeout(() => {
          voices = speechSynthesis.getVoices();
          if (voices.length > 0) {
            playWelcomeSequence();
          }
        }, 100);
        return false;
      }
      
      return voices.length > 0;
    };
    
    // Universal unlock for mobile (but use same voice settings as desktop)
    if (browserInfo.isMobile) {
      console.log('📱 Mobile detected - using DESKTOP voice settings with mobile unlock...');
      
      // Silent unlock for mobile browsers (required for autoplay)
      const unlockSpeech = () => {
        const silentMsg = new SpeechSynthesisUtterance(" ");
        silentMsg.volume = 0.01; // Nearly silent
        silentMsg.rate = 10; // Very fast
        silentMsg.pitch = 0.1;
        
        silentMsg.onend = () => {
          console.log('🔓 Mobile speech unlocked - using DESKTOP quality voices...');
          setTimeout(() => {
            playWelcomeSequence(); // Same function as desktop
          }, 200);
        };
        
        silentMsg.onerror = () => {
          console.log('⚠️ Mobile unlock failed - trying direct playback with desktop settings...');
          setTimeout(playWelcomeSequence, 300);
        };
        
        speechSynthesis.speak(silentMsg);
      };
      
      unlockSpeech();
      
    } else {
      // Desktop/tablet: Direct initialization
      console.log('💻 Desktop detected - loading desktop-quality voices...');
      
      if (loadVoicesWithFallback()) {
        playWelcomeSequence();
      } else {
        // Wait for voices to load (common in Safari)
        let attemptsLeft = 3;
        
        const waitForVoices = () => {
          if (loadVoicesWithFallback()) {
            playWelcomeSequence();
          } else if (attemptsLeft > 0) {
            attemptsLeft--;
            console.log(`🔄 Waiting for voices... attempts left: ${attemptsLeft}`);
            setTimeout(waitForVoices, 500);
          } else {
            // Force playback even without optimal voices
            console.log('⚠️ Voice loading timeout - proceeding with available voices...');
            playWelcomeSequence();
          }
        };
        
        // Set up voice change listener for Safari
        speechSynthesis.onvoiceschanged = () => {
          speechSynthesis.onvoiceschanged = null; // Remove listener
          setTimeout(playWelcomeSequence, 100);
        };
        
        // Start waiting process
        setTimeout(waitForVoices, 100);
        
        // Ultimate fallback
        setTimeout(() => {
          if (speechSynthesis.onvoiceschanged) {
            speechSynthesis.onvoiceschanged = null;
            playWelcomeSequence();
          }
        }, 3000);
      }
    }
  };

  useEffect(() => {
    // Only play once per page load - prevent multiple voice overlaps
    if (hasPlayed) {
      console.log('🔄 Voice already played for this page load');
      return;
    }

    console.log('🔍 UNIVERSAL Voice System: Same desktop quality across ALL devices and browsers');
    
    const browserInfo = getBrowserInfo();
    // Coordinate with video timing - voice starts AFTER video begins
    const delay = 2500; // Slightly faster timing for better UX
    
    const timer = setTimeout(() => {
      console.log('🚀 Timer: Initializing UNIVERSAL welcome sequence (desktop quality everywhere)');
      initializeVoices();
    }, delay);
    
    // Universal interaction support - same timing for all devices
    const handleUserInteraction = () => {
      if (hasPlayed) return; // Prevent multiple triggers
      
      console.log('👆 User interaction detected - triggering DESKTOP-QUALITY voice on all platforms');
      clearTimeout(timer);
      
      // Quick response for better UX - same timing everywhere
      setTimeout(() => {
        initializeVoices();
      }, 800);
      
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