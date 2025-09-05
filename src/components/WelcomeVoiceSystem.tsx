import { useEffect, useState } from "react";

// Enhanced browser and device detection
const getBrowserInfo = () => {
  if (typeof window === 'undefined') return { isMobile: false, browser: 'unknown' };
  
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent) ||
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    window.innerWidth <= 768
  );
  
  const browser = 
    userAgent.includes('facebook') ? 'facebook' :
    userAgent.includes('chrome') ? 'chrome' :
    userAgent.includes('safari') ? 'safari' :
    userAgent.includes('firefox') ? 'firefox' :
    userAgent.includes('edge') ? 'edge' : 'unknown';
    
  // Check for restrictive browser environments
  const isRestrictive = (
    userAgent.includes('facebook') ||
    userAgent.includes('instagram') ||
    userAgent.includes('twitter') ||
    !window.navigator.cookieEnabled
  );
  
  return { isMobile, browser, isRestrictive };
};

// Check if voices are properly loaded with retries
const waitForVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    const getVoices = () => speechSynthesis.getVoices();
    
    if (getVoices().length > 0) {
      resolve(getVoices());
      return;
    }
    
    let attempts = 0;
    const checkVoices = () => {
      attempts++;
      const voices = getVoices();
      
      if (voices.length > 0 || attempts >= 10) {
        resolve(voices);
      } else {
        setTimeout(checkVoices, 200);
      }
    };
    
    // Listen for voices loaded event
    speechSynthesis.onvoiceschanged = () => {
      speechSynthesis.onvoiceschanged = null;
      resolve(getVoices());
    };
    
    // Start checking as backup
    setTimeout(checkVoices, 100);
  });
};

const WelcomeVoiceSystem = () => {
  const [hasPlayed, setHasPlayed] = useState(false);

  const playWelcomeSequence = async () => {
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
      
      const { isMobile, browser, isRestrictive } = getBrowserInfo();
      console.log(`📱 Device: ${isMobile ? 'Mobile' : 'Desktop'}, Browser: ${browser}, Restrictive: ${isRestrictive}`);
      
      // Enhanced voice loading with retries for browser compatibility
      const voices = await waitForVoices();
      console.log(`🗣️ Found ${voices.length} voices after enhanced loading`);
      
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
  
  const initializeVoices = async () => {
    // Prevent multiple initializations
    if (hasPlayed) {
      console.log('🔄 Voice system already initialized, skipping...');
      return;
    }

    const { isMobile, browser, isRestrictive } = getBrowserInfo();
    
    if (isRestrictive) {
      console.log('⚠️ Restrictive browser detected - waiting for explicit user interaction');
      // In restrictive environments, only play after guaranteed user interaction
      return;
    }
    
    if (isMobile) {
      // Mobile: Enhanced unlock with cookie-independent approach
      console.log('📱 Mobile detected - unlocking speech synthesis with enhanced compatibility...');
      
      try {
        // Single, reliable unlock method for your perfect desktop voice
        const unlockMsg = new SpeechSynthesisUtterance(" ");
        unlockMsg.volume = 0.001;
        unlockMsg.rate = 10;
        unlockMsg.pitch = 0.1;
        
        unlockMsg.onend = () => {
          console.log('🔓 Mobile speech unlocked successfully, starting sequence...');
          setTimeout(playWelcomeSequence, 200);
        };
        
        unlockMsg.onerror = () => {
          console.log('❌ Mobile unlock failed, trying direct playback...');
          setTimeout(playWelcomeSequence, 300);
        };
        
        speechSynthesis.speak(unlockMsg);
      } catch (error) {
        console.log('❌ Mobile unlock error:', error);
        setTimeout(playWelcomeSequence, 500);
      }
    } else {
      // Desktop: Enhanced loading with proper voice waiting
      console.log('🖥️ Desktop detected - loading voices...');
      
      try {
        await playWelcomeSequence();
      } catch (error) {
        console.log('❌ Desktop voice error:', error);
        // Retry once after short delay
        setTimeout(playWelcomeSequence, 1000);
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
    
    const { isMobile, browser, isRestrictive } = getBrowserInfo();
    
    // Enhanced timing based on browser type and restrictions
    const delay = isRestrictive ? 0 : (isMobile ? 2000 : 3000);
    
    const timer = setTimeout(() => {
      console.log(`🚀 Timer: Initializing welcome sequence for ${browser} browser (restrictive: ${isRestrictive})`);
      initializeVoices();
    }, delay);
    
    // Enhanced interaction handling for restrictive browsers
    const handleUserInteraction = () => {
      if (hasPlayed) return; // Prevent multiple triggers
      
      console.log(`👆 User interaction detected on ${browser} - triggering welcome`);
      clearTimeout(timer);
      
      // Immediate playback for restrictive browsers, delayed for others
      const interactionDelay = isRestrictive ? 100 : 1500;
      setTimeout(() => {
        initializeVoices();
      }, interactionDelay);
      
      // Remove listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('touchend', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
    
    // Enhanced event listeners with better browser support
    const eventOptions = { once: true, passive: true };
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, eventOptions);
    document.addEventListener('touchend', handleUserInteraction, eventOptions);
    document.addEventListener('keydown', handleUserInteraction, { once: true });
    
    // Additional events for restrictive browsers
    if (isRestrictive) {
      document.addEventListener('scroll', handleUserInteraction, eventOptions);
      document.addEventListener('mousemove', handleUserInteraction, eventOptions);
    }
    
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