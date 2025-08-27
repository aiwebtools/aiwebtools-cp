import { useState, useEffect } from "react";

// Simple mobile detection
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    window.innerWidth <= 768
  );
};

const InitialDisclaimerModal = () => {
  console.log('🚀 InitialDisclaimerModal - Enhanced voice system initializing...');
  
  const [hasAttemptedVoices, setHasAttemptedVoices] = useState(false);

  const createRobotVoices = () => {
    if (!('speechSynthesis' in window)) {
      console.log('❌ Speech synthesis not supported in this browser');
      return;
    }

    const isMobile = isMobileDevice();
    console.log(`🤖 Starting robot voice sequence... (Mobile: ${isMobile})`);

    try {
      // Cancel any ongoing speech
      speechSynthesis.cancel();

      const playVoices = () => {
        const voices = speechSynthesis.getVoices();
        console.log('🗣️ Available voices count:', voices.length);
        console.log('🗣️ Voice names:', voices.map(v => v.name));

        // If no voices available, try again with delay
        if (voices.length === 0) {
          console.log('⚠️ No voices available, retrying in 500ms...');
          setTimeout(() => createRobotVoices(), 500);
          return;
        }

        // First voice: "ACCESS GRANTED, welcome master" - DEEP ROBOTIC
        const firstUtterance = new SpeechSynthesisUtterance("ACCESS GRANTED, welcome master");
        firstUtterance.rate = isMobile ? 0.5 : 0.4;  // Slightly faster on mobile
        firstUtterance.pitch = isMobile ? 0.2 : 0.1; // Slightly higher pitch on mobile for clarity
        firstUtterance.volume = 1.0; // Maximum volume
        
        // Try to find the best robotic voice
        const roboticVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('male') ||
          voice.name.toLowerCase().includes('david') ||
          voice.name.toLowerCase().includes('alex') ||
          voice.name.toLowerCase().includes('daniel') ||
          voice.name.toLowerCase().includes('mark')
        ) || voices.find(voice => voice.lang.startsWith('en'));
        
        if (roboticVoice) {
          console.log('🤖 Using robotic voice:', roboticVoice.name);
          firstUtterance.voice = roboticVoice;
        } else {
          console.log('🤖 No specific robotic voice found, using default');
        }

        // Second voice: "You've got tools" - DIFFERENT VOICE
        const secondUtterance = new SpeechSynthesisUtterance("You've got tools");
        secondUtterance.rate = isMobile ? 0.8 : 0.7;  // Slightly faster on mobile
        secondUtterance.pitch = isMobile ? 0.6 : 0.5; // Higher pitch on mobile
        secondUtterance.volume = 1.0;
        
        // Try to find a female voice for AOL effect
        const aolVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('female') ||
          voice.name.toLowerCase().includes('samantha') ||
          voice.name.toLowerCase().includes('karen') ||
          voice.name.toLowerCase().includes('susan') ||
          voice.name.toLowerCase().includes('victoria')
        ) || voices.find(voice => voice.lang.startsWith('en') && voice !== roboticVoice);
        
        if (aolVoice) {
          console.log('📬 Using AOL-style voice:', aolVoice.name);
          secondUtterance.voice = aolVoice;
        } else {
          console.log('📬 No specific AOL voice found, using default');
        }

        // Enhanced event listeners with mobile optimization
        firstUtterance.onstart = () => {
          console.log('🤖 ✅ FIRST VOICE STARTED: "ACCESS GRANTED, welcome master"');
        };

        firstUtterance.onend = () => {
          console.log('🎤 First voice completed, starting second voice after pause...');
          const pauseDuration = isMobile ? 600 : 800; // Shorter pause on mobile
          setTimeout(() => {
            console.log('🎵 Playing second voice: "You\'ve got tools"');
            speechSynthesis.speak(secondUtterance);
          }, pauseDuration);
        };

        firstUtterance.onerror = (error) => {
          console.log('🤖 ❌ First voice error:', error);
          // Try to play second voice anyway after a short delay
          setTimeout(() => {
            console.log('🎵 Trying second voice after first voice error...');
            speechSynthesis.speak(secondUtterance);
          }, 500);
        };

        secondUtterance.onstart = () => {
          console.log('📬 ✅ SECOND VOICE STARTED: "You\'ve got tools"');
        };
        
        secondUtterance.onend = () => {
          console.log('📬 ✅ Second voice ended - VOICE SEQUENCE COMPLETE! 🎉');
        };
        
        secondUtterance.onerror = (error) => {
          console.log('📬 ❌ Second voice error:', error);
        };

        // Start the sequence - simplified approach
        console.log('🎵 🚀 STARTING VOICE SEQUENCE NOW...');
        speechSynthesis.speak(firstUtterance);
      };

      // ROBUST voice loading with multiple fallbacks
      const waitForVoices = (retryCount = 0, maxRetries = 5) => {
        const voices = speechSynthesis.getVoices();
        
        if (voices.length > 0) {
          console.log('✅ Voices available, starting sequence');
          playVoices();
          return;
        }
        
        if (retryCount >= maxRetries) {
          console.log('⚠️ Max retries reached, playing without voice selection');
          playVoices();
          return;
        }
        
        console.log(`⏳ Waiting for voices... attempt ${retryCount + 1}/${maxRetries + 1}`);
        
        // Set up one-time voice change listener
        const voiceChangeHandler = () => {
          console.log('✅ Voices loaded via event, starting sequence');
          speechSynthesis.onvoiceschanged = null; // Clear the listener
          playVoices();
        };
        
        speechSynthesis.onvoiceschanged = voiceChangeHandler;
        
        // Also retry after delay as fallback
        setTimeout(() => {
          if (speechSynthesis.onvoiceschanged === voiceChangeHandler) {
            speechSynthesis.onvoiceschanged = null; // Clear if still waiting
            waitForVoices(retryCount + 1, maxRetries);
          }
        }, 300);
      };

      waitForVoices();

    } catch (error) {
      console.log('🤖 ❌ Robot voice system error:', error);
    }
  };

  // Add click handler for fallback activation
  const handleUserInteraction = () => {
    if (!hasAttemptedVoices) {
      console.log('👆 User interaction detected, triggering voice sequence');
      createRobotVoices();
      setHasAttemptedVoices(true);
      sessionStorage.setItem("voicesPlayedThisSession", "true");
      // Remove listener after first use
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    }
  };

  useEffect(() => {
    console.log('🚀 Enhanced voice system - useEffect triggered');
    
    // Check if voices have been played this session
    const hasPlayedThisSession = sessionStorage.getItem("voicesPlayedThisSession");
    
    if (!hasPlayedThisSession && !hasAttemptedVoices) {
      console.log('🎵 First visit this session - starting voice sequence...');
      
      const isMobile = isMobileDevice();
      console.log(`📱 Device type: ${isMobile ? 'Mobile' : 'Desktop'}`);
      
      // Mobile-optimized timing attempts
      const mobileDelays = [300, 1000, 2500]; // Faster attempts for mobile
      const desktopDelays = [500, 1500, 3000]; // Original timing for desktop
      const delays = isMobile ? mobileDelays : desktopDelays;
      
      const timers = delays.map((delay, index) => 
        setTimeout(() => {
          if (!hasAttemptedVoices) {
            console.log(`🚀 ${isMobile ? 'Mobile' : 'Desktop'} attempt ${index + 1} - ${delay}ms delay`);
            createRobotVoices();
            sessionStorage.setItem("voicesPlayedThisSession", "true");
            setHasAttemptedVoices(true);
          }
        }, delay)
      );

      // Setup fallback for user interaction if autoplay fails
      console.log('🎯 Setting up user interaction fallback...');
      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);

      return () => {
        timers.forEach(timer => clearTimeout(timer));
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        // Clean up any pending voice change listeners
        speechSynthesis.onvoiceschanged = null;
      };
    } else {
      console.log('🚫 Voices already played this session - skipping');
      setHasAttemptedVoices(true);
    }
  }, [hasAttemptedVoices]);

  // Never render any UI - this is now a background voice system only
  return null;
};

export default InitialDisclaimerModal;