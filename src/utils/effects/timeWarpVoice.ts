// Time Warp Voice Effect - Plays INSTANTLY when traveling to external tools
export const playTimeWarpVoice = () => {
  console.log('🎤 Playing time warp voice effect - INSTANT');
  
  try {
    const audio = new Audio('/sounds/time-warp-voice.mp3');
    audio.volume = 0.85;
    audio.playbackRate = 1.0;
    
    // Start playing immediately - no delays
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
