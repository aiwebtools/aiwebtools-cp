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
  console.log('🚀 InitialDisclaimerModal - Auto voice system initializing...');
  
  const [hasPlayedVoices, setHasPlayedVoices] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const createRobotVoices = () => {
    if (!('speechSynthesis' in window)) {
      console.log('Speech synthesis not supported');
      return;
    }

    try {
      console.log('🤖 Starting ENHANCED robot voice sequence...');

      const playVoices = () => {
        const voices = speechSynthesis.getVoices();
        console.log('🗣️ Available voices:', voices.length);

        // First voice: "ACCESS GRANTED, welcome master" - DEEP ROBOTIC
        const firstUtterance = new SpeechSynthesisUtterance("ACCESS GRANTED, welcome master");
        firstUtterance.rate = 0.4;  // Much slower for robotic effect
        firstUtterance.pitch = 0.1; // Much lower pitch for deep robot voice
        firstUtterance.volume = 0.9;
        
        // Try to find the deepest/most robotic voice available
        const roboticVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('male') ||
          voice.name.toLowerCase().includes('david') ||
          voice.name.toLowerCase().includes('alex') ||
          voice.name.toLowerCase().includes('daniel') ||
          voice.name.toLowerCase().includes('mark')
        ) || voices.find(voice => voice.lang.startsWith('en'));
        
        if (roboticVoice) {
          console.log('🤖 Using deep robotic voice:', roboticVoice.name);
          firstUtterance.voice = roboticVoice;
        }

        // Second voice: AOL-style "YOU'VE GOT TOOLS" - CLASSIC AOL FEMALE
        const secondUtterance = new SpeechSynthesisUtterance("YOU'VE GOT TOOLS");
        secondUtterance.rate = 0.8;   // Faster, more energetic like AOL
        secondUtterance.pitch = 1.2;  // Higher pitch for classic AOL feel
        secondUtterance.volume = 1.0;
        
        // Try to find a classic female voice for AOL effect
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
        }

        // Enhanced event listeners for better debugging and timing
        firstUtterance.onstart = () => {
          console.log('🤖 ROBOTIC VOICE STARTED: "ACCESS GRANTED, welcome master"');
        };
        
        firstUtterance.onend = () => {
          console.log('🤖 Robotic voice ended, starting AOL voice in 800ms...');
          setTimeout(() => {
            console.log('📬 Playing AOL voice...');
            speechSynthesis.speak(secondUtterance);
          }, 800); // Longer pause for dramatic effect
        };
        
        firstUtterance.onerror = (error) => console.log('🤖 Robotic voice error:', error);

        secondUtterance.onstart = () => {
          console.log('📬 AOL VOICE STARTED: "YOU\'VE GOT TOOLS"');
        };
        
        secondUtterance.onend = () => {
          console.log('📬 AOL voice ended - VOICE SEQUENCE COMPLETE! 🎉');
          console.log('🎬 Video should start playing now...');
        };
        
        secondUtterance.onerror = (error) => console.log('📬 AOL voice error:', error);

        // Start the robotic sequence immediately
        console.log('🎵 Starting robotic voice sequence NOW...');
        speechSynthesis.speak(firstUtterance);
      };

      // Wait for voices to load if they haven't already
      if (speechSynthesis.getVoices().length === 0) {
        console.log('⏳ Waiting for voices to load...');
        speechSynthesis.onvoiceschanged = () => {
          console.log('✅ Voices loaded, starting robotic sequence');
          playVoices();
        };
      } else {
        console.log('✅ Voices already available, starting immediately');
        playVoices();
      }

    } catch (error) {
      console.log('🤖 Robot voice error:', error);
    }
  };

  useEffect(() => {
    console.log('🚀 Auto voice system - useEffect triggered');
    
    // Check if it's a mobile device
    const mobile = isMobileDevice();
    setIsMobile(mobile);
    console.log('📱 Mobile device detected:', mobile);
    
    // Only auto-play on desktop devices and only once per session
    if (!mobile && !hasPlayedVoices) {
      const hasPlayedThisSession = sessionStorage.getItem("voicesPlayedThisSession");
      
      if (!hasPlayedThisSession) {
        console.log('🎵 Starting auto voice sequence in 1 second...');
        const timer = setTimeout(() => {
          console.log('🤖 Auto-playing robot voices on page load');
          createRobotVoices();
          sessionStorage.setItem("voicesPlayedThisSession", "true");
          setHasPlayedVoices(true);
        }, 1000); // 1 second delay to let page settle

        return () => {
          console.log('🧹 Cleanup timer');
          clearTimeout(timer);
        };
      } else {
        console.log('🚫 Voices already played this session');
        setHasPlayedVoices(true);
      }
    } else {
      console.log('📱 Mobile device - skipping auto voices');
      setHasPlayedVoices(true);
    }
  }, [hasPlayedVoices]);

  // Never render any UI - this is now a background voice system only
  return null;
};

export default InitialDisclaimerModal;