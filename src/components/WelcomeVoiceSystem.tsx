import { useEffect, useRef } from 'react';

const playWelcomeAudio = () => {
  try {
    const audio = new Audio('/welcome-neo.mp3');
    audio.volume = 0.7;
    audio.play().catch(error => {
      console.log('Audio playback failed (requires user interaction):', error);
    });
  } catch (error) {
    console.log('Error creating audio:', error);
  }
};

const WelcomeVoiceSystem = () => {
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    console.log('WelcomeVoiceSystem mounted');
    
    // Try to play after short delay
    const timeoutId = setTimeout(() => {
      if (!hasPlayedRef.current) {
        playWelcomeAudio();
        hasPlayedRef.current = true;
      }
    }, 1000);
    
    // Also play on user interaction if not played yet
    const handleUserInteraction = () => {
      if (!hasPlayedRef.current) {
        playWelcomeAudio();
        hasPlayedRef.current = true;
      }
    };
    
    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      window.addEventListener(event, handleUserInteraction, { once: true, passive: true });
    });
    
    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => {
        window.removeEventListener(event, handleUserInteraction);
      });
      hasPlayedRef.current = false;
    };
  }, []);

  return null;
};

export default WelcomeVoiceSystem;
