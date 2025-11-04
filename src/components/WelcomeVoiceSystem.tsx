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
  const hasTriedRef = useRef(false);

  useEffect(() => {
    console.log('🎭 WelcomeVoiceSystem mounted - will play on every visit');
    
    // Always try to play after short delay (not just once)
    const timeoutId = setTimeout(() => {
      if (!hasTriedRef.current) {
        hasTriedRef.current = true;
        playWelcomeAudio().catch(() => {
          console.log('Initial audio play failed, waiting for user interaction');
        });
      }
    }, 500);
    
    // Also play on first user interaction if initial play failed
    const handleUserInteraction = () => {
      if (!hasTriedRef.current) {
        hasTriedRef.current = true;
        playWelcomeAudio().catch(console.error);
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
    };
  }, []); // Empty dependency array - only runs once per mount

  return null;
};

export default WelcomeVoiceSystem;
