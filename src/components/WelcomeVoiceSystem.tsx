import { useEffect, useRef, useCallback } from "react";

// Enhanced cross-browser compatibility and device detection
const getBrowserInfo = () => {
  if (typeof window === 'undefined') return { 
    isMobile: false, 
    browser: 'unknown', 
    isRestrictive: false,
    supportsVoice: false 
  };
  
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent) ||
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    window.innerWidth <= 768
  );
  
  // Enhanced browser detection with version info
  const browser = 
    userAgent.includes('facebook') ? 'facebook' :
    userAgent.includes('instagram') ? 'instagram' :
    userAgent.includes('twitter') ? 'twitter' :
    userAgent.includes('edg/') ? 'edge' :
    userAgent.includes('chrome') && !userAgent.includes('edg') ? 'chrome' :
    userAgent.includes('safari') && !userAgent.includes('chrome') ? 'safari' :
    userAgent.includes('firefox') ? 'firefox' :
    userAgent.includes('opera') ? 'opera' : 'unknown';
    
  // Check for restrictive browser environments
  const isRestrictive = (
    userAgent.includes('facebook') ||
    userAgent.includes('instagram') ||
    userAgent.includes('twitter') ||
    userAgent.includes('linkedin') ||
    !window.navigator.cookieEnabled ||
    // iOS Safari in private mode
    (isMobile && userAgent.includes('safari') && !window.indexedDB)
  );
  
  // Check speech synthesis support
  const supportsVoice = (
    'speechSynthesis' in window &&
    typeof speechSynthesis.speak === 'function' &&
    typeof speechSynthesis.getVoices === 'function'
  );
  
  return { isMobile, browser, isRestrictive, supportsVoice };
};

// Enhanced voice loading with multiple fallback strategies
const waitForVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    const getVoices = () => {
      try {
        return speechSynthesis.getVoices() || [];
      } catch (error) {
        console.log('⚠️ Error getting voices:', error);
        return [];
      }
    };
    
    // Immediate check
    const initialVoices = getVoices();
    if (initialVoices.length > 0) {
      console.log(`✅ Voices available immediately: ${initialVoices.length}`);
      resolve(initialVoices);
      return;
    }
    
    let attempts = 0;
    let voicesChangedFired = false;
    const maxAttempts = 20; // Increased for better reliability
    
    const checkVoices = () => {
      attempts++;
      const voices = getVoices();
      console.log(`🔄 Voice loading attempt ${attempts}/${maxAttempts}: Found ${voices.length} voices`);
      
      if (voices.length > 0) {
        console.log(`✅ Voices loaded after ${attempts} attempts`);
        resolve(voices);
      } else if (attempts >= maxAttempts) {
        console.log(`⏰ Max attempts reached, resolving with ${voices.length} voices`);
        resolve(voices);
      } else {
        setTimeout(checkVoices, 150);
      }
    };
    
    // Primary: Listen for voices loaded event
    const onVoicesChanged = () => {
      if (voicesChangedFired) return;
      voicesChangedFired = true;
      
      const voices = getVoices();
      console.log(`🎯 onvoiceschanged event: Found ${voices.length} voices`);
      
      // Clean up
      speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
      speechSynthesis.onvoiceschanged = null;
      
      resolve(voices);
    };
    
    // Set up event listeners (multiple approaches for different browsers)
    speechSynthesis.addEventListener('voiceschanged', onVoicesChanged, { once: true });
    speechSynthesis.onvoiceschanged = onVoicesChanged;
    
    // Secondary: Start polling as backup
    setTimeout(checkVoices, 100);
    
    // Tertiary: Force resolve after timeout
    setTimeout(() => {
      if (!voicesChangedFired) {
        console.log('⏰ Force resolving voices after timeout');
        voicesChangedFired = true;
        speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
        speechSynthesis.onvoiceschanged = null;
        resolve(getVoices());
      }
    }, 5000);
  });
};

const WelcomeVoiceSystem = () => {
  const hasPlayedRef = useRef(false);
  const isPlayingRef = useRef(false);
  const retryCountRef = useRef(0);

  const playWelcomeSequence = useCallback(async () => {
    const { supportsVoice, browser, isMobile, isRestrictive } = getBrowserInfo();
    
    if (!supportsVoice) {
      console.log('❌ Speech synthesis not supported in this browser');
      return;
    }

    if (isPlayingRef.current) {
      console.log('⚠️ Voice sequence already playing, skipping...');
      return;
    }

    isPlayingRef.current = true;
    console.log(`🎵 Starting welcome voice sequence on ${browser} (mobile: ${isMobile}, restrictive: ${isRestrictive})...`);
    
    try {
      // Enhanced speech synthesis preparation
      try {
        speechSynthesis.cancel();
        await new Promise(resolve => setTimeout(resolve, 100)); // Let cancel complete
      } catch (cancelError) {
        console.log('⚠️ Cancel error (expected on some browsers):', cancelError);
      }
      
      console.log(`📱 Environment: ${isMobile ? 'Mobile' : 'Desktop'} ${browser} ${isRestrictive ? '(Restrictive)' : ''}`);
      
      // Enhanced voice loading with multiple strategies
      const voices = await waitForVoices();
      console.log(`🗣️ Voice system loaded: ${voices.length} voices available`);
      
      if (voices.length === 0) {
        console.log('⚠️ No voices available, using default system voice');
      }
      
      // Create first message: "WELCOME MASTER" - deep robot voice
      const welcomeMsg = new SpeechSynthesisUtterance("WELCOME MASTER");
      welcomeMsg.rate = 0.4; // Slow and deliberate
      welcomeMsg.pitch = 0.1; // Very low pitch for robot effect
      welcomeMsg.volume = 0.9; // Full but not overwhelming
      
      // Enhanced deep male voice selection for consistent robot effect across all devices
      const maleVoice = voices.find(v => 
        v.name.toLowerCase().includes('alex') ||
        v.name.toLowerCase().includes('daniel') ||
        v.name.toLowerCase().includes('fred') ||
        v.name.toLowerCase().includes('male') ||
        (v.name.toLowerCase().includes('google') && v.name.toLowerCase().includes('male')) ||
        v.name.toLowerCase().includes('david') ||
        v.name.toLowerCase().includes('microsoft david') ||
        v.name.toLowerCase().includes('mark')
      ) || voices.find(v => 
        // Fallback to any English male voice with consistent characteristics
        v.lang && v.lang.startsWith('en') && 
        (v.name.toLowerCase().includes('male') || 
         v.name.toLowerCase().includes('man') ||
         !v.name.toLowerCase().includes('female'))
      ) || voices.find(v => 
        // Final fallback to first English voice for consistency
        v.lang && v.lang.startsWith('en')
      );
      if (maleVoice) {
        welcomeMsg.voice = maleVoice;
        console.log('🤖 Selected CONSISTENT robot voice:', maleVoice.name, '| Language:', maleVoice.lang);
      } else {
        console.log('⚠️ No suitable male voice found, using system default (may affect quality)');
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
      
      // Enhanced sequence timing with cross-browser reliability
      welcomeMsg.onstart = () => {
        console.log('🤖 Voice started: "WELCOME MASTER"');
        hasPlayedRef.current = true;
      };
      
      welcomeMsg.onend = () => {
        console.log('✅ Welcome message complete, preparing tools message...');
        // Enhanced timing for different browsers
        const delay = isMobile ? 1000 : (browser === 'safari' ? 900 : 800);
        setTimeout(() => {
          console.log('📬 Starting: "YOU\'VE GOT TOOLS"');
          try {
            speechSynthesis.speak(toolsMsg);
          } catch (error) {
            console.log('⚠️ Error starting tools message:', error);
            isPlayingRef.current = false;
          }
        }, delay);
      };
      
      toolsMsg.onstart = () => console.log('📬 Voice started: "YOU\'VE GOT TOOLS" (AOL-style)');
      toolsMsg.onend = () => {
        console.log('🎉 Welcome sequence complete - voices ready for next visit!');
        isPlayingRef.current = false;
        hasPlayedRef.current = true;
      };
      
      // Comprehensive error handling with retry logic
      welcomeMsg.onerror = (e) => {
        console.log('❌ Welcome message error:', e);
        isPlayingRef.current = false;
        
        // Retry logic for failed voices
        if (retryCountRef.current < 2) {
          retryCountRef.current++;
          console.log(`🔄 Retrying welcome sequence (attempt ${retryCountRef.current + 1}/3)...`);
          setTimeout(() => playWelcomeSequence(), 1000);
          return;
        }
        
        // Still try tools message even if welcome fails
        setTimeout(() => {
          console.log('🔄 Attempting tools message after welcome error...');
          try {
            speechSynthesis.speak(toolsMsg);
          } catch (error) {
            console.log('❌ Final fallback failed:', error);
            isPlayingRef.current = false;
          }
        }, 500);
      };
      
      toolsMsg.onerror = (e) => {
        console.log('❌ Tools message error:', e);
        console.log('✅ Voice sequence completed (with error)');
        isPlayingRef.current = false;
      };
      
      // Start the enhanced sequence with browser-specific handling
      console.log('🚀 Initiating welcome message with enhanced reliability...');
      
      // Browser-specific preparation
      if (browser === 'safari' || browser === 'firefox') {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      speechSynthesis.speak(welcomeMsg);
      
    } catch (error) {
      console.log('❌ Voice system error:', error);
      isPlayingRef.current = false;
      
      // Enhanced error recovery
      if (retryCountRef.current < 1) {
        retryCountRef.current++;
        console.log('🔄 Attempting recovery after error...');
        setTimeout(() => playWelcomeSequence(), 2000);
      }
    }
  }, []);
  
  const initializeVoices = useCallback(async () => {
    const { isMobile, browser, isRestrictive, supportsVoice } = getBrowserInfo();
    
    if (!supportsVoice) {
      console.log('❌ Speech synthesis not supported, skipping voice initialization');
      return;
    }
    
    if (isRestrictive) {
      console.log('⚠️ Restrictive browser detected - will wait for user interaction');
      return;
    }
    
    if (isMobile) {
      console.log('📱 Mobile device detected - enhanced mobile voice initialization...');
      
      try {
        // Enhanced mobile unlock strategy
        const unlockMsg = new SpeechSynthesisUtterance(" ");
        unlockMsg.volume = 0.001;
        unlockMsg.rate = 10;
        unlockMsg.pitch = 0.1;
        
        let unlockCompleted = false;
        
        const proceedToWelcome = () => {
          if (unlockCompleted) return;
          unlockCompleted = true;
          console.log('🔓 Mobile speech system ready, starting welcome...');
          
          // Enhanced delay for mobile reliability
          const mobileDelay = browser === 'safari' ? 500 : 300;
          setTimeout(() => {
            playWelcomeSequence();
          }, mobileDelay);
        };
        
        unlockMsg.onend = proceedToWelcome;
        unlockMsg.onerror = (e) => {
          console.log('⚠️ Mobile unlock error (proceeding anyway):', e);
          proceedToWelcome();
        };
        
        // Backup timeout for mobile
        setTimeout(proceedToWelcome, 1000);
        
        speechSynthesis.speak(unlockMsg);
      } catch (error) {
        console.log('❌ Mobile initialization error:', error);
        setTimeout(() => playWelcomeSequence(), 800);
      }
    } else {
      console.log('🖥️ Desktop browser detected - direct voice initialization...');
      
      try {
        // Desktop can usually handle direct playback
        await playWelcomeSequence();
      } catch (error) {
        console.log('❌ Desktop voice error, retrying...', error);
        setTimeout(() => playWelcomeSequence(), 1500);
      }
    }
  }, [playWelcomeSequence]);

  useEffect(() => {
    console.log('🔍 Enhanced voice system: Initializing cross-browser welcome sequence...');
    
    const { isMobile, browser, isRestrictive, supportsVoice } = getBrowserInfo();
    
    if (!supportsVoice) {
      console.log('❌ Speech synthesis not supported in this browser');
      return;
    }
    
    // Enhanced timing strategy for maximum reliability
    const getOptimalDelay = () => {
      if (isRestrictive) return 0;
      if (isMobile) {
        return browser === 'safari' ? 2500 : 2000;
      }
      return browser === 'firefox' ? 3500 : 3000;
    };
    
    const delay = getOptimalDelay();
    console.log(`⏰ Setting ${delay}ms delay for ${browser} (mobile: ${isMobile}, restrictive: ${isRestrictive})`);
    
    const timer = setTimeout(() => {
      console.log(`🚀 Timer fired: Initializing voices for ${browser}...`);
      initializeVoices();
    }, delay);
    
    // Enhanced user interaction handling
    const handleUserInteraction = (eventType: string) => {
      console.log(`👆 User ${eventType} detected on ${browser} - triggering welcome sequence`);
      
      // Prevent multiple triggers
      if (hasPlayedRef.current || isPlayingRef.current) {
        console.log('⚠️ Voice already played or playing, ignoring interaction');
        return;
      }
      
      clearTimeout(timer);
      
      // Smart delay based on browser and restriction level
      const getInteractionDelay = () => {
        if (isRestrictive) return 200;
        if (isMobile) return 800;
        return 1000;
      };
      
      setTimeout(() => {
        if (!hasPlayedRef.current && !isPlayingRef.current) {
          initializeVoices();
        }
      }, getInteractionDelay());
      
      // Clean up listeners
      removeAllListeners();
    };
    
    // Create bound event handlers
    const clickHandler = () => handleUserInteraction('click');
    const touchStartHandler = () => handleUserInteraction('touchstart');
    const touchEndHandler = () => handleUserInteraction('touchend');
    const keyHandler = () => handleUserInteraction('keydown');
    const scrollHandler = () => handleUserInteraction('scroll');
    const mouseHandler = () => handleUserInteraction('mousemove');
    
    const removeAllListeners = () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('touchstart', touchStartHandler);
      document.removeEventListener('touchend', touchEndHandler);
      document.removeEventListener('keydown', keyHandler);
      document.removeEventListener('scroll', scrollHandler);
      document.removeEventListener('mousemove', mouseHandler);
    };
    
    // Enhanced event registration
    const eventOptions = { once: true, passive: true };
    document.addEventListener('click', clickHandler, { once: true });
    document.addEventListener('touchstart', touchStartHandler, eventOptions);
    document.addEventListener('touchend', touchEndHandler, eventOptions);
    document.addEventListener('keydown', keyHandler, { once: true });
    
    // Additional events for restrictive environments
    if (isRestrictive) {
      console.log('🔒 Adding extra interaction listeners for restrictive browser');
      document.addEventListener('scroll', scrollHandler, eventOptions);
      document.addEventListener('mousemove', mouseHandler, eventOptions);
    }
    
    // Cleanup function
    return () => {
      clearTimeout(timer);
      removeAllListeners();
      
      // Reset state for fresh initialization on next mount
      isPlayingRef.current = false;
      retryCountRef.current = 0;
    };
  }, [initializeVoices]); // Depend on initializeVoices

  // This component renders nothing - it's just for voice functionality
  return null;
};

export default WelcomeVoiceSystem;