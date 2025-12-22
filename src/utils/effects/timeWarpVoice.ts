// Time Warp Voice Effect - Preloaded for instant playback

// Preload audio on module load
let preloadedAudio: HTMLAudioElement | null = null;

const preloadAudio = () => {
  if (typeof window === 'undefined') return;
  
  preloadedAudio = new Audio('/sounds/time-warp-voice.mp3');
  preloadedAudio.preload = 'auto';
  preloadedAudio.volume = 0.85;
  preloadedAudio.load(); // Force browser to buffer the audio
};

// Start preloading immediately when module loads
preloadAudio();

export const playTimeWarpVoice = () => {
  console.log('🎤 Playing time warp voice - INSTANT');

  try {
    // Use preloaded audio for instant playback
    if (preloadedAudio) {
      preloadedAudio.currentTime = 0; // Reset to start
      preloadedAudio.play().catch(() => {});
      
      // Preload a fresh copy for the next click
      setTimeout(preloadAudio, 100);
      return preloadedAudio;
    }
    
    // Fallback: create new audio if preload failed
    const audio = new Audio('/sounds/time-warp-voice.mp3');
    audio.volume = 0.85;
    audio.play().catch(() => {});
    return audio;
  } catch (error) {
    console.log('🎤 Voice failed:', error);
    return null;
  }
};
