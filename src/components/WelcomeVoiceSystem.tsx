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

// Global flag to prevent multiple instances across all components
let globalVoicePlayed = false;

const WelcomeVoiceSystem = () => {
  const [hasPlayed, setHasPlayed] = useState(false);

  const playWelcomeSequence = () => {
    if (!('speechSynthesis' in window)) {
      console.log('❌ Speech synthesis not supported');
      return;
    }

    // ENHANCED: Double check both local and global flags
    if (hasPlayed || globalVoicePlayed) {
      console.log('🔄 Voice sequence already played (local or global), skipping...');
      return;
    }

    console.log('🎵 Starting welcome voice sequence...');
    
    // CRITICAL: Set both flags immediately to prevent any duplicates
    setHasPlayed(true);
    globalVoicePlayed = true;
    
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
        
        // Create first message: "WELCOME MASTER" - EPIC AOL-STYLE INTRO
        const welcomeMsg = new SpeechSynthesisUtterance("WELCOME MASTER");
        welcomeMsg.rate = 0.4; // Much slower for epic, mystical AOL-style login experience
        welcomeMsg.pitch = 0.2; // Very low pitch for commanding, destiny-like presence
        welcomeMsg.volume = 1.0; // Maximum volume for commanding presence
        
        // Enhanced voice selection for EPIC quality
        
        // Priority 1: Find the most epic, authoritative male voice
        const epicMaleVoice = voices.find(v => {
          const name = v.name.toLowerCase();
          const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
          return isEnglish && (
            // Premium quality voices for epic effect
            name.includes('alex') || name.includes('daniel') || name.includes('david') ||
            name.includes('aaron') || name.includes('arthur') || name.includes('bruce') ||
            name.includes('gordon') || name.includes('ryan') || name.includes('evan') ||
            // Platform-specific premium voices
            name.includes('microsoft david desktop') || name.includes('google uk english male') ||
            name.includes('enhanced') || name.includes('premium')
          );
        }) || voices.find(v => {
          // Fallback: Best available English male voice
          const name = v.name.toLowerCase();
          const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
          return isEnglish && (
            name.includes('male') || 
            (name.includes('david') || name.includes('alex') || name.includes('daniel'))
          );
        }) || voices.find(v => {
          // Final fallback: Any decent quality voice
          const isEnglish = !v.lang || v.lang.toLowerCase().startsWith('en');
          return isEnglish && !v.name.toLowerCase().includes('female');
        });
        
        if (epicMaleVoice) {
          welcomeMsg.voice = epicMaleVoice;
          console.log('🎭 Selected EPIC voice for WELCOME MASTER:', epicMaleVoice.name, 'Lang:', epicMaleVoice.lang);
        } else {
          console.log('🎭 Using default voice for WELCOME MASTER');
        }
        
        // Create second message: "YOU'VE GOT TOOLS" - EPIC AOL-style destiny announcement
        const toolsMsg = new SpeechSynthesisUtterance("YOU'VE GOT TOOLS");
        toolsMsg.rate = 0.5; // Slower for mystical, destiny-revealing experience
        toolsMsg.pitch = 1.2; // Moderately higher pitch for contrast but still mystical
        toolsMsg.volume = 1.0; // Full volume for impact
        
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
        
        // Set up sequence timing with proper synchronization and detailed logging
        welcomeMsg.onstart = () => {
          console.log('🎬 🤖 VOICE LOG: Playing "WELCOME MASTER" - Epic AOL-style entry');
          console.log('🎛️ Voice settings:', {
            rate: welcomeMsg.rate,
            pitch: welcomeMsg.pitch,
            volume: welcomeMsg.volume,
            voice: welcomeMsg.voice?.name || 'default'
          });
        };
        
        welcomeMsg.onend = () => {
          console.log('✅ 🤖 VOICE LOG: "WELCOME MASTER" complete - preparing destiny revelation...');
          // Wait for welcome to fully complete before starting tools message - longer pause for epic effect
          setTimeout(() => {
            console.log('🎬 📬 VOICE LOG: Starting "YOU\'VE GOT TOOLS" - The destiny is revealed');
            speechSynthesis.speak(toolsMsg);
          }, 1200); // Longer pause for more mystical, destiny-like experience
        };
        
        toolsMsg.onstart = () => {
          console.log('🎬 📬 VOICE LOG: Playing "YOU\'VE GOT TOOLS" - AOL-style destiny announcement');
          console.log('🎛️ Voice settings:', {
            rate: toolsMsg.rate,
            pitch: toolsMsg.pitch,
            volume: toolsMsg.volume,
            voice: toolsMsg.voice?.name || 'default'
          });
        };
        
        toolsMsg.onend = () => {
          console.log('🎉 ✨ VOICE LOG: EPIC Welcome sequence complete - User has entered the destiny of AI tools!');
          console.log('🔇 No more voices will play - video can now proceed without interference');
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
        
      }, 100); // Small delay to ensure cancellation is complete
      
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
    // Reset global flag on every page load for consistent experience
    globalVoicePlayed = false;
    
    console.log('🎬 EPIC VOICE SYSTEM: Waiting for consent acceptance to trigger WELCOME MASTER sequence');
    
    // Listen for the consent acceptance trigger
    const handleConsentTrigger = () => {
      if (hasPlayed || globalVoicePlayed) {
        console.log('🔄 Voice already played, skipping consent trigger');
        return;
      }
      
      console.log('🎯 CONSENT TRIGGER RECEIVED: Starting EPIC AOL-style Welcome sequence!');
      
      // Small delay to let consent popup close
      setTimeout(() => {
        initializeVoices();
      }, 500);
    };
    
    // Listen for the custom event from consent popup
    window.addEventListener('triggerWelcomeVoice', handleConsentTrigger);
    
    // For users who have already accepted consent, trigger on interaction
    const hasSeenConsent = localStorage.getItem('aitools-consent-seen');
    if (hasSeenConsent) {
      console.log('🔄 User has already seen consent, setting up interaction triggers');
      
      const handleUserInteraction = () => {
        if (hasPlayed || globalVoicePlayed) return;
        
        console.log('👆 User interaction detected - EPIC VOICE STARTING (no consent needed)');
        
        setTimeout(() => {
          initializeVoices();
        }, 200);
        
        // Remove listeners after first interaction
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };
      
      // Add interaction listeners for returning users
      document.addEventListener('click', handleUserInteraction, { once: true });
      document.addEventListener('touchstart', handleUserInteraction, { passive: true, once: true });
      document.addEventListener('keydown', handleUserInteraction, { once: true });
      
      // Cleanup function
      return () => {
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