// Time Warp Voice Effect - Plays immediately on user click

export const playTimeWarpVoice = () => {
  console.log('🎤 Playing time warp voice effect');

  try {
    // Create fresh audio each time to avoid stale state issues
    const audio = new Audio('/sounds/time-warp-voice.mp3');
    audio.volume = 0.85;
    audio.playbackRate = 1.0;
    
    // Play immediately - this is called from a click handler so autoplay works
    const playPromise = audio.play();
    
    if (playPromise) {
      playPromise
        .then(() => {
          console.log('🎤 Time warp voice playing successfully');
        })
        .catch((error) => {
          console.log('🎤 Voice playback failed:', error.message);
        });
    }

    return audio;
  } catch (error) {
    console.log('🎤 Voice creation failed:', error);
    return null;
  }
};
