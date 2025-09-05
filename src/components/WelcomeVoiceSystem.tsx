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
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 10;

  // Enhanced bulletproof voice sequence with multiple fallbacks
  const playWelcomeSequence = async (attempt = 1) => {
    if (!('speechSynthesis' in window)) {
      console.log(`❌ Speech synthesis not supported (attempt ${attempt}/${MAX_RETRIES})`);
      if (attempt < MAX_RETRIES) {
        setTimeout(() => playWelcomeSequence(attempt + 1), 1000);
      }
      return;
    }


    console.log(`🎵 Starting bulletproof welcome voice sequence... (attempt ${attempt}/${MAX_RETRIES})`);
    
    try {
      // Force cancel any existing speech - multiple methods for reliability
      speechSynthesis.cancel();
      if (speechSynthesis.speaking) {
        speechSynthesis.pause();
        speechSynthesis.cancel();
      }
      await new Promise(resolve => setTimeout(resolve, 100)); // Brief pause
      
      const { isMobile, browser, isRestrictive } = getBrowserInfo();
      console.log(`📱 Device: ${isMobile ? 'Mobile' : 'Desktop'}, Browser: ${browser}, Restrictive: ${isRestrictive}`);
      
      // Super robust voice loading with multiple fallback strategies
      let voices = [];
      for (let i = 0; i < 20; i++) {
        voices = speechSynthesis.getVoices();
        if (voices.length > 0) break;
        
        // Try different wake-up methods
        if (i === 5) speechSynthesis.onvoiceschanged = () => voices = speechSynthesis.getVoices();
        if (i === 10) speechSynthesis.cancel(); // Sometimes this helps
        if (i === 15) { 
          // Force a silent utterance to wake up the system
          const wakeup = new SpeechSynthesisUtterance('');
          wakeup.volume = 0;
          speechSynthesis.speak(wakeup);
        }
        
        await new Promise(resolve => setTimeout(resolve, 150));
      }
      
      if (voices.length === 0) {
        console.warn(`🎤 No voices found after extensive loading (attempt ${attempt}/${MAX_RETRIES})`);
        if (attempt < MAX_RETRIES) {
          setTimeout(() => playWelcomeSequence(attempt + 1), 2000);
          return;
        }
        console.error('🎤 Final failure: No voices available after all attempts');
        return;
      }
      
      console.log(`🗣️ SUCCESS! Found ${voices.length} voices after bulletproof loading (attempt ${attempt})`);
      
      // Enhanced voice selection with comprehensive fallbacks
      const selectBestVoice = (preferMale = false) => {
        let candidates = [];
        
        if (preferMale) {
          // Male voice priorities
          candidates = [
            voices.find(v => v.name.toLowerCase().includes('alex')),
            voices.find(v => v.name.toLowerCase().includes('daniel')),
            voices.find(v => v.name.toLowerCase().includes('male')),
            voices.find(v => v.name.toLowerCase().includes('fred')),
            voices.find(v => v.name.toLowerCase().includes('tom')),
            voices.find(v => v.name.toLowerCase().includes('mark')),
          ];
        } else {
          // Female voice priorities
          candidates = [
            voices.find(v => v.lang?.toLowerCase().includes('en-gb')),
            voices.find(v => v.name.toLowerCase().includes('british')),
            voices.find(v => v.name.toLowerCase().includes('victoria')),
            voices.find(v => v.name.toLowerCase().includes('emma')),
            voices.find(v => v.name.toLowerCase().includes('samantha')),
            voices.find(v => v.name.toLowerCase().includes('karen')),
            voices.find(v => v.name.toLowerCase().includes('female')),
          ];
        }
        
        // Find first available candidate
        const selected = candidates.find(v => v) || voices.find(v => v.lang?.startsWith('en')) || voices[0];
        return selected;
      };

      // Create bulletproof utterances with enhanced error handling
      const createBulletproofUtterance = (text: string, config: { rate?: number; pitch?: number; volume?: number } = {}, voiceType = 'female') => {
        const utterance = new SpeechSynthesisUtterance(text);
        const selectedVoice = selectBestVoice(voiceType === 'male');
        
        utterance.voice = selectedVoice;
        utterance.rate = config.rate || 0.7;
        utterance.pitch = config.pitch || 1.0;
        utterance.volume = config.volume || 0.9;
        
        console.log(`🎤 Created "${text}" with voice: ${selectedVoice?.name || 'Default'} (${selectedVoice?.lang || 'Unknown'})`);
        return utterance;
      };

      // Create both messages with bulletproof configuration
      const welcomeMsg = createBulletproofUtterance(
        "WELCOME MASTER", 
        { rate: 0.4, pitch: 0.1, volume: 0.9 }, 
        'male'
      );
      
      const toolsMsg = createBulletproofUtterance(
        "YOU'VE GOT TOOLS", 
        { rate: 0.8, pitch: 1.2, volume: 0.95 }, 
        'female'
      );
      
      // Bulletproof promise-based speech with timeout and retry
      const speakWithTimeout = (utterance, timeoutMs = 10000) => {
        return new Promise((resolve, reject) => {
          let hasResolved = false;
          
          const timeout = setTimeout(() => {
            if (!hasResolved) {
              hasResolved = true;
              speechSynthesis.cancel();
              reject(new Error('Speech timeout'));
            }
          }, timeoutMs);

          utterance.onstart = () => {
            console.log(`🎤 Started: "${utterance.text}"`);
          };

          utterance.onend = () => {
            if (!hasResolved) {
              hasResolved = true;
              clearTimeout(timeout);
              console.log(`✅ Completed: "${utterance.text}"`);
              resolve(true);
            }
          };

          utterance.onerror = (error) => {
            if (!hasResolved) {
              hasResolved = true;
              clearTimeout(timeout);
              console.error(`❌ Error in "${utterance.text}":`, error);
              reject(error);
            }
          };

          // Multiple speak attempts for reliability
          try {
            speechSynthesis.speak(utterance);
            
            // Backup speak attempt if first doesn't trigger onstart
            setTimeout(() => {
              if (!hasResolved && !speechSynthesis.speaking) {
                console.log(`🔄 Backup speak attempt for "${utterance.text}"`);
                speechSynthesis.speak(utterance);
              }
            }, 500);
            
          } catch (error) {
            if (!hasResolved) {
              hasResolved = true;
              clearTimeout(timeout);
              reject(error);
            }
          }
        });
      };

      // Execute the bulletproof sequence
      try {
        console.log('🚀 Starting bulletproof sequence...');
        
        // Play welcome message
        await speakWithTimeout(welcomeMsg, 8000);
        
        // Brief pause between messages
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Play tools message
        await speakWithTimeout(toolsMsg, 8000);
        
        console.log('🎉 BULLETPROOF SUCCESS! Welcome sequence completed flawlessly!');
        setRetryCount(0); // Reset retry count
        
      } catch (error) {
        console.error(`❌ Speech sequence error (attempt ${attempt}/${MAX_RETRIES}):`, error);
        
        if (attempt < MAX_RETRIES) {
          const retryDelay = Math.min(1000 * attempt, 5000); // Progressive backoff
          console.log(`🔄 Retrying in ${retryDelay}ms... (${attempt}/${MAX_RETRIES})`);
          setTimeout(() => {
            setRetryCount(attempt);
            playWelcomeSequence(attempt + 1);
          }, retryDelay);
        } else {
          console.error('🛑 FINAL FAILURE: All retry attempts exhausted');
        }
      }
      
    } catch (error) {
      console.error(`💥 Fatal error in voice system (attempt ${attempt}):`, error);
      if (attempt < MAX_RETRIES) {
        setTimeout(() => playWelcomeSequence(attempt + 1), 2000);
      }
    }
  };
  
  const initializeVoices = async () => {

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
  }, []); // Run only once on component mount

  // This component renders nothing - it's just for voice functionality
  return null;
};

export default WelcomeVoiceSystem;