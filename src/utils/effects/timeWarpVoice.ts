
// Time Warp Voice Effect - Plays when traveling to external tools
export const playTimeWarpVoice = () => {
  console.log('🎤 Playing time warp voice effect');
  
  try {
    const audio = new Audio('/sounds/time-warp-voice.mp3');
    audio.volume = 0.8;
    audio.playbackRate = 1.0;
    
    audio.play().then(() => {
      console.log('🎤 Time warp voice playing successfully');
    }).catch((error) => {
      console.log('🎤 Time warp voice autoplay blocked:', error);
    });
    
    return audio;
  } catch (error) {
    console.log('🎤 Failed to create time warp voice:', error);
    return null;
  }
};
