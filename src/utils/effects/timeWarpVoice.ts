// Time Warp Voice Effect - Preloaded so it plays immediately on click

let cachedVoiceAudio: HTMLAudioElement | null = null;

const getPreloadedVoiceAudio = () => {
  if (typeof window === 'undefined') return null;

  if (!cachedVoiceAudio) {
    const audio = new Audio('/sounds/time-warp-voice.mp3');
    audio.preload = 'auto';
    audio.volume = 0.85;
    audio.playbackRate = 1.0;

    // Kick off buffering ASAP
    try {
      audio.load();
    } catch {
      // ignore
    }

    cachedVoiceAudio = audio;
  }

  return cachedVoiceAudio;
};

// Start buffering immediately (no autoplay)
getPreloadedVoiceAudio();

export const playTimeWarpVoice = () => {
  console.log('🎤 Playing time warp voice effect - PRELOADED');

  try {
    const audio = getPreloadedVoiceAudio();
    if (!audio) return null;

    // Always restart from the beginning
    try {
      audio.currentTime = 0;
    } catch {
      // ignore
    }

    const playPromise = audio.play();
    if (playPromise) {
      playPromise.catch((error) => {
        console.log('🎤 Autoplay blocked:', error);
      });
    }

    return audio;
  } catch (error) {
    console.log('🎤 Voice failed:', error);
    return null;
  }
};
