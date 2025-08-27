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

const WelcomeVoiceSystem = () => {
  const [hasPlayed, setHasPlayed] = useState(false);

  const playWelcomeSequence = () => {
    if (!('speechSynthesis' in window)) {
      console.log('❌ Speech synthesis not supported');
      return;
    }

    console.log('🎵 Starting welcome voice sequence...');
    
    try {
      // Cancel any existing speech
      speechSynthesis.cancel();
      
      const isMobile = isMobileDevice();
      console.log(`📱 Device: ${isMobile ? 'Mobile' : 'Desktop'}`);
      
      // Get available voices
      const voices = speechSynthesis.getVoices();
      console.log(`🗣️ Found ${voices.length} voices`);
      
      // Create first message: "WELCOME MASTER"
      const welcomeMsg = new SpeechSynthesisUtterance("WELCOME MASTER");
      welcomeMsg.rate = isMobile ? 0.5 : 0.4;
      welcomeMsg.pitch = isMobile ? 0.2 : 0.1;
      welcomeMsg.volume = 1.0;
      
      // Find deep male voice for welcome
      const maleVoice = voices.find(v => 
        v.name.toLowerCase().includes('male') ||
        v.name.toLowerCase().includes('david') ||
        v.name.toLowerCase().includes('alex')
      );
      if (maleVoice) welcomeMsg.voice = maleVoice;
      
      // Create second message: "YOU'VE GOT TOOLS"
      const toolsMsg = new SpeechSynthesisUtterance("YOU'VE GOT TOOLS");
      toolsMsg.rate = isMobile ? 0.8 : 0.7;
      toolsMsg.pitch = isMobile ? 0.6 : 0.5;
      toolsMsg.volume = 1.0;
      
      // Find female voice for tools message
      const femaleVoice = voices.find(v => 
        v.name.toLowerCase().includes('female') ||
        v.name.toLowerCase().includes('samantha') ||
        v.name.toLowerCase().includes('karen')
      );
      if (femaleVoice) toolsMsg.voice = femaleVoice;
      
      // Set up sequence timing
      welcomeMsg.onstart = () => console.log('🤖 Playing: "WELCOME MASTER"');
      welcomeMsg.onend = () => {
        console.log('✅ Welcome message complete, playing tools message...');
        setTimeout(() => {
          speechSynthesis.speak(toolsMsg);
        }, isMobile ? 600 : 800);
      };
      
      toolsMsg.onstart = () => console.log('📬 Playing: "YOU\'VE GOT TOOLS"');
      toolsMsg.onend = () => console.log('🎉 Welcome sequence complete!');
      
      // Error handling
      welcomeMsg.onerror = (e) => {
        console.log('❌ Welcome message error:', e);
        setTimeout(() => speechSynthesis.speak(toolsMsg), 500);
      };
      
      toolsMsg.onerror = (e) => console.log('❌ Tools message error:', e);
      
      // Start the sequence
      speechSynthesis.speak(welcomeMsg);
      
    } catch (error) {
      console.log('❌ Voice system error:', error);
    }
  };
  
  const initializeVoices = () => {
    // Wait for voices to load
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      playWelcomeSequence();
    } else {
      // Wait for voices to load
      speechSynthesis.onvoiceschanged = () => {
        speechSynthesis.onvoiceschanged = null; // Remove listener
        playWelcomeSequence();
      };
    }
  };

  useEffect(() => {
    // Check if already played this session
    const sessionKey = "welcomeVoicePlayed";
    const hasPlayedThisSession = sessionStorage.getItem(sessionKey);
    
    if (!hasPlayedThisSession && !hasPlayed) {
      console.log('🚀 First visit - preparing welcome sequence');
      
      const isMobile = isMobileDevice();
      const delay = isMobile ? 800 : 1000; // Shorter delay on mobile
      
      // Single reliable attempt
      const timer = setTimeout(() => {
        setHasPlayed(true);
        sessionStorage.setItem(sessionKey, "true");
        initializeVoices();
      }, delay);
      
      // Fallback for user interaction
      const handleUserClick = () => {
        if (!hasPlayed) {
          console.log('👆 User clicked - triggering welcome');
          setHasPlayed(true);
          sessionStorage.setItem(sessionKey, "true");
          initializeVoices();
          document.removeEventListener('click', handleUserClick);
          document.removeEventListener('touchstart', handleUserClick);
        }
      };
      
      document.addEventListener('click', handleUserClick);
      document.addEventListener('touchstart', handleUserClick);
      
      return () => {
        clearTimeout(timer);
        document.removeEventListener('click', handleUserClick);
        document.removeEventListener('touchstart', handleUserClick);
      };
    }
  }, [hasPlayed]);

  // This component renders nothing - it's just for voice functionality
  return null;
};

export default WelcomeVoiceSystem;