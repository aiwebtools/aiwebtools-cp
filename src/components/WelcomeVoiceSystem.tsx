import { useEffect, useRef } from 'react';

const playWelcomeAudio = () => {
  return new Promise<void>((resolve, reject) => {
    try {
      const audio = new Audio('/welcome-neo.mp3');
      audio.volume = 0.7;
      
      audio.onended = () => {
        console.log('✅ Welcome Neo audio finished');
        // Dispatch custom event to trigger video playback
        window.dispatchEvent(new CustomEvent('welcomeAudioComplete'));
        resolve();
      };
      
      audio.onerror = (error) => {
        console.log('❌ Audio error:', error);
        reject(error);
      };
      
      audio.play().then(() => {
        console.log('🎵 Playing Welcome Neo audio...');
      }).catch(error => {
        console.log('Audio playback requires user interaction:', error);
        reject(error);
      });
    } catch (error) {
      console.log('Error creating audio:', error);
      reject(error);
    }
  });
};

const WelcomeVoiceSystem = () => {
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    console.log('🎭 WelcomeVoiceSystem mounted - will play on every visit');
    
    // Handle user interaction to play audio (Chrome requirement)
    const handleUserInteraction = () => {
      if (!hasPlayedRef.current) {
        hasPlayedRef.current = true;
        console.log('🎵 User interaction detected, playing Welcome Neo audio...');
        playWelcomeAudio().catch((error) => {
          console.log('Audio playback failed:', error);
        });
      }
    };
    
    // Try immediate playback first (works in some browsers)
    const timeoutId = setTimeout(() => {
      playWelcomeAudio().then(() => {
        hasPlayedRef.current = true;
      }).catch(() => {
        console.log('⏳ Audio requires user interaction - waiting for click/tap...');
        // Wait for user interaction
        const events = ['click', 'touchstart', 'keydown', 'scroll'];
        events.forEach(event => {
          window.addEventListener(event, handleUserInteraction, { once: true, passive: true });
        });
      });
    }, 300);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [])

  return null;
};

export default WelcomeVoiceSystem;
