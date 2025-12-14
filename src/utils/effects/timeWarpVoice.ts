
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

// Deep bass impact for dramatic emphasis - audible on all speakers
const createBassImpact = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a punchy bass hit with harmonics (audible on laptop/phone speakers)
    const oscillator = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator(); // Harmonic for speaker audibility
    const gainNode = audioContext.createGain();
    const gainNode2 = audioContext.createGain();
    
    oscillator.connect(gainNode);
    oscillator2.connect(gainNode2);
    gainNode.connect(audioContext.destination);
    gainNode2.connect(audioContext.destination);
    
    // Main bass (100Hz - audible on most speakers)
    oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(60, audioContext.currentTime + 0.15);
    oscillator.type = 'sine';
    
    // Harmonic layer (200Hz - definitely audible)
    oscillator2.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator2.frequency.exponentialRampToValueAtTime(120, audioContext.currentTime + 0.15);
    oscillator2.type = 'sine';
    
    // Punchy attack, quick decay
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.7, audioContext.currentTime + 0.01); // VERY fast attack
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25); // Quick decay
    
    gainNode2.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode2.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 0.01);
    gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
    oscillator2.start(audioContext.currentTime);
    oscillator2.stop(audioContext.currentTime + 0.25);
    
    console.log('🔊 Bass impact triggered');
  } catch (error) {
    console.log('Bass impact failed:', error);
  }
};
