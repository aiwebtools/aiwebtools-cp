
// Time Warp Voice Effect - Plays when traveling to external tools
export const playTimeWarpVoice = () => {
  console.log('🎤 Playing time warp voice effect');
  
  try {
    const audio = new Audio('/sounds/time-warp-voice.mp3');
    audio.volume = 0.8;
    audio.playbackRate = 1.0;
    
    audio.play().then(() => {
      console.log('🎤 Time warp voice playing successfully');
      
      // 🔊 BASS IMPACT - hits when voice says "initializing" (~0.8 seconds in)
      setTimeout(() => {
        createBassImpact();
      }, 800);
      
    }).catch((error) => {
      console.log('🎤 Time warp voice autoplay blocked:', error);
    });
    
    return audio;
  } catch (error) {
    console.log('🎤 Failed to create time warp voice:', error);
    return null;
  }
};

// Deep bass impact for dramatic emphasis
const createBassImpact = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a powerful sub-bass hit
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Sub-bass frequency (around 40-60Hz for that chest-thumping feel)
    oscillator.frequency.setValueAtTime(50, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(25, audioContext.currentTime + 0.3);
    oscillator.type = 'sine';
    
    // Punchy attack, quick decay
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.6, audioContext.currentTime + 0.02); // Fast attack
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4); // Decay
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
    
    console.log('🔊 Bass impact triggered');
  } catch (error) {
    console.log('Bass impact failed:', error);
  }
};
