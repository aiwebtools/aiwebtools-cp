import { useEffect, useState } from "react";

// Define capabilities interface for type safety
interface BrowserCapabilities {
  speechSynthesis: boolean;
  webAudio: boolean;
  promises: boolean;
  eventListeners: boolean;
  localStorage: boolean | Storage;
  mediaDevices: boolean;
}

// Universal browser and device detection for maximum compatibility
const getBrowserInfo = (): {
  isMobile: boolean;
  browser: string;
  isRestrictive: boolean;
  capabilities: BrowserCapabilities;
  isChrome: boolean;
  isSafari: boolean;
  isFirefox: boolean;
  isEdge: boolean;
} => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return { 
      isMobile: false, 
      browser: 'unknown', 
      isRestrictive: true, 
      capabilities: {
        speechSynthesis: false,
        webAudio: false,
        promises: false,
        eventListeners: false,
        localStorage: false,
        mediaDevices: false
      },
      isChrome: false,
      isSafari: false,
      isFirefox: false,
      isEdge: false
    };
  }
  
  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform?.toLowerCase() || '';
  
  // Enhanced mobile detection with multiple methods
  const isMobile = !!(
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent) ||
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
    ((navigator as any).msMaxTouchPoints && (navigator as any).msMaxTouchPoints > 0) ||
    window.innerWidth <= 768 ||
    platform.includes('mobile') ||
    platform.includes('android')
  );
  
  // Enhanced browser detection
  const isChrome = userAgent.includes('chrome') && !userAgent.includes('edg');
  const isSafari = userAgent.includes('safari') && !userAgent.includes('chrome');
  const isFirefox = userAgent.includes('firefox');
  const isEdge = userAgent.includes('edg') || userAgent.includes('edge');
  const isOpera = userAgent.includes('opera') || userAgent.includes('opr');
  const isIE = userAgent.includes('trident') || userAgent.includes('msie');
  
  const browser = 
    userAgent.includes('facebook') || userAgent.includes('fban') ? 'facebook' :
    userAgent.includes('instagram') || userAgent.includes('ig_') ? 'instagram' :
    userAgent.includes('twitter') || userAgent.includes('twitterbot') ? 'twitter' :
    userAgent.includes('linkedin') ? 'linkedin' :
    userAgent.includes('whatsapp') ? 'whatsapp' :
    userAgent.includes('telegram') ? 'telegram' :
    isChrome ? 'chrome' :
    isSafari ? 'safari' :
    isFirefox ? 'firefox' :
    isEdge ? 'edge' :
    isOpera ? 'opera' :
    isIE ? 'ie' : 'unknown';
    
  // Enhanced restrictive environment detection
  const isRestrictive = !!(
    userAgent.includes('facebook') ||
    userAgent.includes('instagram') ||
    userAgent.includes('twitter') ||
    userAgent.includes('linkedin') ||
    userAgent.includes('whatsapp') ||
    userAgent.includes('telegram') ||
    userAgent.includes('fban') ||
    userAgent.includes('ig_') ||
    userAgent.includes('wv') || // WebView
    !window.navigator.cookieEnabled ||
    (isSafari && isMobile) || // iOS Safari has strict autoplay
    isIE // IE has limited support
  );
  
  // Check speech synthesis capabilities
  const capabilities = {
    speechSynthesis: !!(window.speechSynthesis && typeof SpeechSynthesisUtterance !== 'undefined'),
    webAudio: !!(window.AudioContext || (window as any).webkitAudioContext),
    promises: typeof Promise !== 'undefined',
    eventListeners: typeof window.addEventListener !== 'undefined',
    localStorage: (() => {
      try {
        return typeof Storage !== 'undefined' && window.localStorage;
      } catch { return false; }
    })(),
    mediaDevices: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
  };
  
  return { isMobile, browser, isRestrictive, capabilities, isChrome, isSafari, isFirefox, isEdge };
};

// Universal voice loading with comprehensive fallbacks for all browsers
const waitForVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    if (!window.speechSynthesis) {
      resolve([]);
      return;
    }

    const getVoices = () => {
      try {
        return speechSynthesis.getVoices() || [];
      } catch (error) {
        console.warn('Error getting voices:', error);
        return [];
      }
    };
    
    // Immediate check
    const initialVoices = getVoices();
    if (initialVoices.length > 0) {
      resolve(initialVoices);
      return;
    }
    
    let attempts = 0;
    let eventListenerAdded = false;
    const maxAttempts = 50; // Increased for slower devices
    
    const checkVoices = () => {
      attempts++;
      const voices = getVoices();
      
      if (voices.length > 0) {
        resolve(voices);
        return;
      }
      
      if (attempts >= maxAttempts) {
        console.warn('Voice loading timeout, using fallback');
        resolve(voices); // Return empty array as last resort
        return;
      }
      
      // Progressive delay increases for different browsers
      const delay = attempts < 10 ? 100 : attempts < 20 ? 200 : 500;
      setTimeout(checkVoices, delay);
    };
    
    // Multiple voice loading strategies for different browsers
    const setupVoiceLoading = () => {
      // Strategy 1: onvoiceschanged event (works in most browsers)
      if (!eventListenerAdded && typeof speechSynthesis.onvoiceschanged !== 'undefined') {
        eventListenerAdded = true;
        speechSynthesis.onvoiceschanged = () => {
          const voices = getVoices();
          if (voices.length > 0) {
            speechSynthesis.onvoiceschanged = null;
            resolve(voices);
          }
        };
      }
      
      // Strategy 2: Polling fallback (for browsers with broken events)
      setTimeout(checkVoices, 50);
      
      // Strategy 3: Force speech synthesis activation (helps some browsers)
      setTimeout(() => {
        try {
          const wakeUp = new SpeechSynthesisUtterance('');
          wakeUp.volume = 0;
          wakeUp.rate = 10;
          speechSynthesis.speak(wakeUp);
        } catch (error) {
          // Ignore errors in wake-up attempt
        }
      }, 100);
      
      // Strategy 4: Additional activation methods for stubborn browsers
      setTimeout(() => {
        try {
          speechSynthesis.cancel(); // Sometimes this triggers voice loading
          const voices = getVoices();
          if (voices.length > 0) {
            resolve(voices);
          }
        } catch (error) {
          // Ignore errors
        }
      }, 300);
    };
    
    setupVoiceLoading();
  });
};

const WelcomeVoiceSystem = () => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 10;

  // Universal voice sequence with maximum browser compatibility
  const playWelcomeSequence = async (attempt = 1) => {
    const { capabilities, browser, isMobile, isRestrictive } = getBrowserInfo();
    
    if (!capabilities.speechSynthesis) {
      console.log(`❌ Speech synthesis not supported in ${browser} (attempt ${attempt}/${MAX_RETRIES})`);
      if (attempt < MAX_RETRIES && !isRestrictive) {
        const retryDelay = isMobile ? 2000 : 1000;
        setTimeout(() => playWelcomeSequence(attempt + 1), retryDelay);
      }
      return;
    }

    // Prevent multiple successful playbacks but allow retries
    if (hasPlayed && attempt === 1) {
      console.log('🔄 Voice sequence already played successfully, skipping...');
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
      
      // Ultra-robust voice loading with browser-specific strategies
      let voices = [];
      try {
        voices = await waitForVoices();
      } catch (error) {
        console.warn('Voice loading error, trying fallback:', error);
        voices = speechSynthesis.getVoices() || [];
      }
      
      // Additional browser-specific activation for stubborn cases
      if (voices.length === 0) {
        const activationStrategies = [
          () => speechSynthesis.cancel(),
          () => speechSynthesis.pause(),
          () => speechSynthesis.resume(),
          () => {
            const silent = new SpeechSynthesisUtterance('');
            silent.volume = 0.001;
            silent.rate = 10;
            speechSynthesis.speak(silent);
          }
        ];
        
        for (const strategy of activationStrategies) {
          try {
            strategy();
            await new Promise(resolve => setTimeout(resolve, 200));
            voices = speechSynthesis.getVoices();
            if (voices.length > 0) break;
          } catch (error) {
            continue;
          }
        }
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
      
      // Universal voice selection with extensive browser compatibility
      const selectBestVoice = (preferMale = false) => {
        if (!voices || voices.length === 0) return null;
        
        const { browser, isMobile } = getBrowserInfo();
        let candidates = [];
        
        // Browser-specific voice optimization
        if (browser === 'chrome') {
          if (preferMale) {
            candidates = [
              voices.find(v => v.name.toLowerCase().includes('google us english') && v.name.toLowerCase().includes('male')),
              voices.find(v => v.name.toLowerCase().includes('alex')),
              voices.find(v => v.name.toLowerCase().includes('daniel')),
            ];
          } else {
            candidates = [
              voices.find(v => v.name.toLowerCase().includes('google us english') && v.name.toLowerCase().includes('female')),
              voices.find(v => v.lang?.toLowerCase().includes('en-gb')),
              voices.find(v => v.name.toLowerCase().includes('samantha')),
            ];
          }
        } else if (browser === 'safari') {
          if (preferMale) {
            candidates = [
              voices.find(v => v.name.toLowerCase().includes('alex')),
              voices.find(v => v.name.toLowerCase().includes('fred')),
              voices.find(v => v.name.toLowerCase().includes('daniel')),
            ];
          } else {
            candidates = [
              voices.find(v => v.name.toLowerCase().includes('samantha')),
              voices.find(v => v.name.toLowerCase().includes('victoria')),
              voices.find(v => v.name.toLowerCase().includes('karen')),
            ];
          }
        } else if (browser === 'firefox') {
          // Firefox uses system voices
          if (preferMale) {
            candidates = [
              voices.find(v => v.name.toLowerCase().includes('male')),
              voices.find(v => v.name.toLowerCase().includes('david')),
            ];
          } else {
            candidates = [
              voices.find(v => v.name.toLowerCase().includes('female')),
              voices.find(v => v.name.toLowerCase().includes('zira')),
            ];
          }
        } else {
          // General fallbacks for other browsers
          if (preferMale) {
            candidates = [
              voices.find(v => v.name.toLowerCase().includes('male')),
              voices.find(v => v.name.toLowerCase().includes('alex')),
              voices.find(v => v.name.toLowerCase().includes('daniel')),
              voices.find(v => v.name.toLowerCase().includes('mark')),
            ];
          } else {
            candidates = [
              voices.find(v => v.name.toLowerCase().includes('female')),
              voices.find(v => v.lang?.toLowerCase().includes('en-gb')),
              voices.find(v => v.name.toLowerCase().includes('samantha')),
              voices.find(v => v.name.toLowerCase().includes('karen')),
            ];
          }
        }
        
        // Enhanced fallback chain
        const fallbackChain = [
          ...candidates.filter(v => v),
          voices.find(v => v.lang?.startsWith('en-US')),
          voices.find(v => v.lang?.startsWith('en-GB')),
          voices.find(v => v.lang?.startsWith('en')),
          voices.find(v => v.default),
          voices[0]
        ];
        
        const selected = fallbackChain.find(v => v);
        
        if (selected) {
          console.log(`🎤 Selected voice for ${browser}: ${selected.name} (${selected.lang})`);
        }
        
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
      
      // Universal speech with maximum compatibility and error resilience
      const speakWithTimeout = (utterance, timeoutMs = 15000) => {
        return new Promise((resolve, reject) => {
          let hasResolved = false;
          let startTime = Date.now();
          const { browser, isMobile } = getBrowserInfo();
          
          // Browser-specific timeout adjustments
          const adjustedTimeout = isMobile ? timeoutMs * 1.5 : timeoutMs;
          
          const timeout = setTimeout(() => {
            if (!hasResolved) {
              hasResolved = true;
              try {
                speechSynthesis.cancel();
              } catch (e) {}
              reject(new Error(`Speech timeout after ${adjustedTimeout}ms in ${browser}`));
            }
          }, adjustedTimeout);

          // Enhanced event handling with browser-specific workarounds
          const handleStart = () => {
            console.log(`🎤 Started: "${utterance.text}" in ${browser}`);
          };

          const handleEnd = () => {
            if (!hasResolved) {
              hasResolved = true;
              clearTimeout(timeout);
              const duration = Date.now() - startTime;
              console.log(`✅ Completed: "${utterance.text}" (${duration}ms)`);
              resolve(true);
            }
          };

          const handleError = (error) => {
            if (!hasResolved) {
              hasResolved = true;
              clearTimeout(timeout);
              console.error(`❌ Speech error in ${browser}:`, error);
              // Don't reject immediately, try to recover
              setTimeout(() => reject(error), 100);
            }
          };

          // Cross-browser event binding with fallbacks
          try {
            utterance.onstart = handleStart;
            utterance.onend = handleEnd;
            utterance.onerror = handleError;
            
            // Additional events for better compatibility
            if (utterance.onboundary) {
              utterance.onboundary = () => {
                if (!hasResolved) {
                  console.log(`📍 Boundary event for "${utterance.text}"`);
                }
              };
            }
          } catch (error) {
            console.warn('Event binding error:', error);
          }

          // Multi-strategy speak execution
          const executeSpeech = () => {
            try {
              // Strategy 1: Direct speak
              speechSynthesis.speak(utterance);
              
              // Strategy 2: Backup for unresponsive browsers
              setTimeout(() => {
                if (!hasResolved && !speechSynthesis.speaking && !speechSynthesis.pending) {
                  console.log(`🔄 Backup speak for "${utterance.text}" in ${browser}`);
                  try {
                    speechSynthesis.speak(utterance);
                  } catch (e) {
                    console.warn('Backup speak failed:', e);
                  }
                }
              }, 800);
              
              // Strategy 3: Force completion check for problematic browsers
              setTimeout(() => {
                if (!hasResolved) {
                  const isActuallySpeaking = speechSynthesis.speaking || speechSynthesis.pending;
                  if (!isActuallySpeaking) {
                    console.log(`🔄 Force completion for "${utterance.text}"`);
                    handleEnd();
                  }
                }
              }, Math.min(utterance.text.length * 100 + 2000, adjustedTimeout - 1000));
              
            } catch (error) {
              console.error('Speech execution error:', error);
              if (!hasResolved) {
                hasResolved = true;
                clearTimeout(timeout);
                reject(error);
              }
            }
          };

          // Execute with small delay for browser readiness
          setTimeout(executeSpeech, browser === 'safari' && isMobile ? 200 : 50);
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
        setHasPlayed(true); // Mark as successfully played
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
          setHasPlayed(true); // Prevent further attempts
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