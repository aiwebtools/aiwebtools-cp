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

    try {
      console.log('🤖 Starting ENHANCED robot voice sequence...');

      // Cancel any ongoing speech
      speechSynthesis.cancel();

      const playVoices = () => {
        const voices = speechSynthesis.getVoices();
        console.log('🗣️ Available voices count:', voices.length);
        console.log('🗣️ Voice names:', voices.map(v => v.name));

        // First voice: "ACCESS GRANTED, welcome master" - DEEP ROBOTIC
        const firstUtterance = new SpeechSynthesisUtterance("ACCESS GRANTED, welcome master");
        firstUtterance.rate = 0.4;  
        firstUtterance.pitch = 0.1; 
        firstUtterance.volume = 0.9;
        
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

        // Second voice: AOL-style "YOU'VE GOT TOOLS" - CLASSIC AOL FEMALE
        const secondUtterance = new SpeechSynthesisUtterance("YOU'VE GOT TOOLS");
        secondUtterance.rate = 0.8;   
        secondUtterance.pitch = 1.2;  
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

        // Enhanced event listeners
        firstUtterance.onstart = () => {
          console.log('🤖 ✅ ROBOTIC VOICE STARTED: "ACCESS GRANTED, welcome master"');
        };
        
        firstUtterance.onend = () => {
          console.log('🤖 ✅ Robotic voice ended, starting AOL voice in 800ms...');
          setTimeout(() => {
            console.log('📬 Playing AOL voice...');
            speechSynthesis.speak(secondUtterance);
          }, 800);
        };
        
        firstUtterance.onerror = (error) => {
          console.log('🤖 ❌ Robotic voice error:', error);
          // Try to play AOL voice anyway
          setTimeout(() => {
            console.log('📬 Trying AOL voice after robotic error...');
            speechSynthesis.speak(secondUtterance);
          }, 500);
        };

        secondUtterance.onstart = () => {
          console.log('📬 ✅ AOL VOICE STARTED: "YOU\'VE GOT TOOLS"');
        };
        
        secondUtterance.onend = () => {
          console.log('📬 ✅ AOL voice ended - VOICE SEQUENCE COMPLETE! 🎉');
        };
        
        secondUtterance.onerror = (error) => {
          console.log('📬 ❌ AOL voice error:', error);
        };

        // Start the sequence
        console.log('🎵 🚀 STARTING ROBOTIC VOICE SEQUENCE NOW...');
        speechSynthesis.speak(firstUtterance);
      };

      // Wait for voices to load if needed
      if (speechSynthesis.getVoices().length === 0) {
        console.log('⏳ Waiting for voices to load...');
        speechSynthesis.onvoiceschanged = () => {
          console.log('✅ Voices loaded, starting sequence');
          playVoices();
        };
      } else {
        console.log('✅ Voices already available, starting immediately');
        playVoices();
      }

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
      // Remove listener after first use
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    }
  };

  useEffect(() => {
    console.log('🚀 Enhanced voice system - useEffect triggered');
    
    if (!hasAttemptedVoices) {
      // Try immediate autoplay first
      console.log('🎵 Attempting immediate voice autoplay...');
      const timer = setTimeout(() => {
        createRobotVoices();
        setHasAttemptedVoices(true);
      }, 500); // Shorter delay

      // Setup fallback for user interaction
      console.log('🎯 Setting up user interaction fallback...');
      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      };
    }
  }, [hasAttemptedVoices]);

  // Never render any UI - this is now a background voice system only
  return null;
};

export default InitialDisclaimerModal;