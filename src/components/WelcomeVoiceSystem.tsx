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

// Global flag to prevent multiple instances across ALL components and pages
let globalVoicePlayed = false;
let globalVoiceInProgress = false;

const WelcomeVoiceSystem = () => {
  const [hasPlayed, setHasPlayed] = useState(false);

  const playWelcomeSequence = () => {
    if (!('speechSynthesis' in window)) {
      console.log('❌ Speech synthesis not supported');
      return;
    }

    // TRIPLE CHECK: Multiple levels of duplicate prevention
    if (hasPlayed || globalVoicePlayed || globalVoiceInProgress) {
      console.log('🚫 BLOCKED: Voice sequence already played or in progress', {
        hasPlayed,
        globalVoicePlayed,
        globalVoiceInProgress
      });
      return;
    }

    console.log('🎵 ✅ STARTING EPIC WELCOME MASTER SEQUENCE - All checks passed!');
    
    // IMMEDIATE BLOCKING: Set ALL flags to prevent any possibility of duplicates
    setHasPlayed(true);
    globalVoicePlayed = true;
    globalVoiceInProgress = true;
    
    // EXTRA SAFETY: Block any new attempts for next 30 seconds
    setTimeout(() => {
      globalVoiceInProgress = false;
      console.log('🔓 Voice system ready for next session (if needed)');
    }, 30000);
    
    try {
      // Cancel any existing speech to prevent conflicts and overlaps
      speechSynthesis.cancel();
      
      // Wait a moment to ensure cancellation is complete
      setTimeout(() => {
        const isMobile = isMobileDevice();
        console.log(`📱 Device: ${isMobile ? 'Mobile' : 'Desktop'}`);
        
        // Get available voices
        const voices = speechSynthesis.getVoices();
        console.log(`🗣️ Found ${voices.length} voices`);
        
        // ===== PHASE 1: DARK GROWL POWER "WELCOME MASTER" =====
        const welcomeMsg = new SpeechSynthesisUtterance("WELCOME MASTER");
        welcomeMsg.rate = 0.4; // Slow for dramatic power
        welcomeMsg.pitch = 0.1; // Very low pitch for dark growl power
        welcomeMsg.volume = 1.0; // Maximum volume for commanding presence
        
        // ENHANCED DARK GROWL POWER VOICE SELECTION
        const findDarkGrowlVoice = () => {
          // Priority 1: Find the deepest, most powerful male voices
          let powerVoice = voices.find(v => {
            const name = v.name.toLowerCase();
            const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
            return isEnglish && (
              // Target the deepest, most powerful voices
              name.includes('fred') || name.includes('albert') || name.includes('bruce') ||
              name.includes('gordon') || name.includes('ralph') || name.includes('nathan') ||
              name.includes('microsoft david') || name.includes('google uk english male') ||
              name.includes('deep') || name.includes('bass') || name.includes('low')
            );
          });
          
          // Priority 2: Any deep commanding male voice
          if (!powerVoice) {
            powerVoice = voices.find(v => {
              const name = v.name.toLowerCase();
              const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
              return isEnglish && (
                name.includes('male') || name.includes('man') ||
                (name.includes('david') || name.includes('alex') || name.includes('daniel')) &&
                !name.includes('female') && !name.includes('high')
              );
            });
          }
          
          // Priority 3: Any non-female English voice for power
          if (!powerVoice) {
            powerVoice = voices.find(v => {
              const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
              return isEnglish && !v.name.toLowerCase().includes('female');
            });
          }
          
          return powerVoice;
        };
        
        const darkGrowlVoice = findDarkGrowlVoice();
        if (darkGrowlVoice) {
          welcomeMsg.voice = darkGrowlVoice;
          console.log('👹 Selected DARK GROWL POWER voice:', darkGrowlVoice.name, 'Lang:', darkGrowlVoice.lang);
        } else {
          console.log('👹 Using default voice for DARK GROWL POWER (no suitable voice found)');
        }
        
        // ===== PHASE 2: BELL SOUND PREPARATION =====
        const playBellSound = () => {
          console.log('🔔 Playing BELL SOUND...');
          
          // Create bell sound using Web Audio API
          try {
            const AudioContextConstructor = window.AudioContext || (window as any).webkitAudioContext;
            const audioContext = new AudioContextConstructor();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            // Bell-like frequency and envelope
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime); // High bell tone
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3); // Decay
            
            gainNode.gain.setValueAtTime(0.8, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.0);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 1.0);
            
            console.log('🔔 BELL SOUND played successfully');
            
            // After bell, start classic AOL voice
            setTimeout(() => {
              playAOLVoice();
            }, 1200); // Wait for bell to finish
            
          } catch (error) {
            console.log('🔔 Bell sound failed, proceeding to British voice:', error);
            // Fallback: proceed without bell to AOL voice
            setTimeout(() => {
              playAOLVoice();
            }, 800);
          }
        };
        
        // ===== PHASE 3: CLASSIC AOL "YOU'VE GOT TOOLS!" =====
        const playAOLVoice = () => {
          console.log('📬 Starting CLASSIC AOL notification voice...');
          
          const toolsMsg = new SpeechSynthesisUtterance("YOU'VE GOT TOOLS!");
          toolsMsg.rate = 1.1; // Slightly faster for that excited AOL notification feel
          toolsMsg.pitch = 1.4; // Higher pitch for that classic AOL cheerful excitement
          toolsMsg.volume = 1.0; // Full volume for that classic notification impact
          
          // ENHANCED CLASSIC AOL VOICE SELECTION
          const findClassicAOLVoice = () => {
            // Priority 1: Find excited, cheerful female voices (like classic AOL)
            let aolVoice = voices.find(v => {
              const name = v.name.toLowerCase();
              const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
              
              return isEnglish && (
                // Target bright, cheerful, clear female voices
                name.includes('samantha') || name.includes('karen') || name.includes('sarah') ||
                name.includes('jessica') || name.includes('michelle') || name.includes('amy') ||
                name.includes('anna') || name.includes('kate') || name.includes('emma') ||
                name.includes('victoria') || name.includes('elizabeth') || name.includes('susan') ||
                // Platform-specific clear voices
                name.includes('microsoft zira') || name.includes('google us english female') ||
                name.includes('enhanced') || name.includes('premium') || name.includes('clear')
              );
            });
            
            // Priority 2: Any clear, energetic female voice
            if (!aolVoice) {
              aolVoice = voices.find(v => {
                const name = v.name.toLowerCase();
                const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
                return isEnglish && (name.includes('female') || name.includes('woman')) &&
                       !name.includes('robot') && !name.includes('monotone') && !name.includes('low');
              });
            }
            
            // Priority 3: US English female voices specifically
            if (!aolVoice) {
              aolVoice = voices.find(v => {
                const lang = v.lang ? v.lang.toLowerCase() : '';
                const name = v.name.toLowerCase();
                return (lang.includes('en-us') || lang.includes('us')) && 
                       (name.includes('female') || name.includes('woman'));
              });
            }
            
            // Priority 4: Any English female voice
            if (!aolVoice) {
              aolVoice = voices.find(v => {
                const name = v.name.toLowerCase();
                const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
                return isEnglish && (name.includes('female') || name.includes('woman'));
              });
            }
            
            return aolVoice;
          };
          
          const classicAOLVoice = findClassicAOLVoice();
          if (classicAOLVoice) {
            toolsMsg.voice = classicAOLVoice;
            console.log('📬 Selected CLASSIC AOL voice:', classicAOLVoice.name, 'Lang:', classicAOLVoice.lang);
          } else {
            console.log('📬 Using default voice for CLASSIC AOL (no suitable voice found)');
          }
          
          // Classic AOL voice events
          toolsMsg.onstart = () => {
            console.log('🎬 📬 VOICE LOG: Playing "YOU\'VE GOT TOOLS!" - CLASSIC AOL Notification Style');
            console.log('🎛️ Classic AOL Voice settings:', {
              rate: toolsMsg.rate,
              pitch: toolsMsg.pitch,
              volume: toolsMsg.volume,
              voice: toolsMsg.voice?.name || 'default'
            });
          };
          
          toolsMsg.onend = () => {
            console.log('🎉 ✨ VOICE LOG: EPIC Welcome sequence COMPLETE - All phases successful!');
            console.log('🏁 DARK GROWL → BELL → CLASSIC AOL sequence finished - User entered AI destiny!');
            console.log('🔓 Unlocking voice system after successful completion');
            
            // Reset in-progress flag since sequence completed successfully
            globalVoiceInProgress = false;
            
            // Dispatch event to let video know voice is complete
            const voiceCompleteEvent = new CustomEvent('welcomeVoiceComplete');
            window.dispatchEvent(voiceCompleteEvent);
            console.log('📢 Dispatched welcomeVoiceComplete event');
          };
          
          // Error handling for British voice
          toolsMsg.onerror = (e) => {
            console.log('❌ Classic AOL voice error:', e);
            console.log('✅ Voice sequence completed (with error)');
            console.log('🔓 Unlocking voice system after error');
            
            // Reset in-progress flag even on error
            globalVoiceInProgress = false;
            
            // Still dispatch completion event
            const voiceCompleteEvent = new CustomEvent('welcomeVoiceComplete');
            window.dispatchEvent(voiceCompleteEvent);
          };
          
          // Start classic AOL voice
          console.log('📬 Speaking: "YOU\'VE GOT TOOLS!" (Classic AOL Notification)');
          speechSynthesis.speak(toolsMsg);
        };
        
        // ===== START THE SEQUENCE =====
        
        // Dark growl power voice events
        welcomeMsg.onstart = () => {
          console.log('🎬 👹 VOICE LOG: Playing "WELCOME MASTER" - Dark Growl Power Voice');
          console.log('🎛️ Dark Growl Voice settings:', {
            rate: welcomeMsg.rate,
            pitch: welcomeMsg.pitch,
            volume: welcomeMsg.volume,
            voice: welcomeMsg.voice?.name || 'default'
          });
        };
        
        welcomeMsg.onend = () => {
          console.log('✅ 👹 VOICE LOG: DARK GROWL POWER "WELCOME MASTER" complete - starting BELL...');
          // Wait a moment then play bell sound
          setTimeout(() => {
            playBellSound();
          }, 800); // Pause before bell for dramatic effect
        };
        
        // Error handling for dark growl voice
        welcomeMsg.onerror = (e) => {
          console.log('❌ Dark growl power voice error:', e);
          console.log('🔓 Unlocking voice system after dark growl error');
          globalVoiceInProgress = false;
          
          // Still try bell and AOL voice even if dark growl fails
          setTimeout(() => {
            console.log('🔄 Dark growl failed, proceeding to bell...');
            playBellSound();
          }, 500);
        };
        
        // START THE EPIC SEQUENCE!
        console.log('🚀 🎬 PHASE 1: Starting DARK GROWL POWER "WELCOME MASTER"...');
        console.log('🔊 Voice system locked - no duplicates possible for 30 seconds');
        speechSynthesis.speak(welcomeMsg);
        
      }, 100); // Small delay to ensure cancellation is complete
      
    } catch (error) {
      console.log('❌ Voice system error:', error);
      console.log('🔓 Unlocking voice system after system error');
      globalVoiceInProgress = false;
      
      // Still dispatch completion event even on error
      setTimeout(() => {
        const voiceCompleteEvent = new CustomEvent('welcomeVoiceComplete');
        window.dispatchEvent(voiceCompleteEvent);
      }, 1000);
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
    // Reset ONLY the played flag, but keep progress flag if in progress
    if (!globalVoiceInProgress) {
      globalVoicePlayed = false;
      console.log('🔄 Reset globalVoicePlayed for new session');
    } else {
      console.log('⏳ Voice system busy - maintaining current state');
    }
    
    console.log('🎬 EPIC VOICE SYSTEM: Initializing...', {
      hasPlayed,
      globalVoicePlayed,
      globalVoiceInProgress
    });
    
    // Check if user has already accepted consent
    const hasSeenConsent = localStorage.getItem('aitools-consent-seen');
    console.log('📋 Consent status:', hasSeenConsent ? 'Already accepted' : 'Not seen yet');
    
    // Listen for the consent acceptance trigger (new users)
    const handleConsentTrigger = () => {
      if (hasPlayed || globalVoicePlayed || globalVoiceInProgress) {
        console.log('🚫 CONSENT TRIGGER BLOCKED: Voice already played or in progress', {
          hasPlayed,
          globalVoicePlayed,
          globalVoiceInProgress
        });
        return;
      }
      
      console.log('🎯 ✅ CONSENT TRIGGER ACCEPTED: Starting EPIC AOL-style Welcome sequence!');
      
      // Small delay to let consent popup close
      setTimeout(() => {
        initializeVoices();
      }, 500);
    };
    
    // Listen for the custom event from consent popup
    window.addEventListener('triggerWelcomeVoice', handleConsentTrigger);
    
    // For returning users - trigger automatically with a small delay
    if (hasSeenConsent) {
      console.log('🔄 Returning user detected - starting voice sequence automatically');
      
      // Auto-trigger for returning users after page loads
      const autoTimer = setTimeout(() => {
        if (!hasPlayed && !globalVoicePlayed) {
          console.log('🚀 AUTO-TRIGGERING voice for returning user');
          initializeVoices();
        }
      }, 1500); // Give page time to load
      
      // Also set up interaction triggers as backup
      const handleUserInteraction = () => {
        if (hasPlayed || globalVoicePlayed || globalVoiceInProgress) {
          console.log('🚫 INTERACTION BLOCKED: Voice already played or in progress');
          return;
        }
        
        console.log('👆 ✅ INTERACTION ACCEPTED: EPIC VOICE STARTING (returning user)');
        clearTimeout(autoTimer);
        
        setTimeout(() => {
          initializeVoices();
        }, 200);
        
        // Remove listeners after first interaction
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };
      
      // Add interaction listeners as backup
      document.addEventListener('click', handleUserInteraction, { once: true });
      document.addEventListener('touchstart', handleUserInteraction, { passive: true, once: true });
      document.addEventListener('keydown', handleUserInteraction, { once: true });
      
      // Cleanup function
      return () => {
        clearTimeout(autoTimer);
        window.removeEventListener('triggerWelcomeVoice', handleConsentTrigger);
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };
    }
    
    return () => {
      window.removeEventListener('triggerWelcomeVoice', handleConsentTrigger);
    };
  }, []);

  // This component renders nothing - it's just for voice functionality
  return null;
};

export default WelcomeVoiceSystem;