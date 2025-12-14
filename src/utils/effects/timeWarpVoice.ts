// Time Warp Voice Effect - Plays INSTANTLY when traveling to external tools
export const playTimeWarpVoice = () => {
  console.log('🎤 Playing time warp voice effect - INSTANT');
  
  try {
    const audio = new Audio('/sounds/time-warp-voice.mp3');
    audio.volume = 0.85;
    audio.playbackRate = 1.0;
    
    // Start playing immediately - no waiting
    const playPromise = audio.play();
    
    // Fire bass impact at "initializing" word (~0.7s) - slightly earlier for punch
    setTimeout(createBassImpact, 700);
    
    if (playPromise) {
      playPromise.then(() => {
        console.log('🎤 Voice playing');
      }).catch((error) => {
        console.log('🎤 Autoplay blocked:', error);
      });
    }
    
    return audio;
  } catch (error) {
    console.log('🎤 Voice failed:', error);
    return null;
  }
};

// LOUD punchy bass impact - hits hard on all speakers
const createBassImpact = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Three-layer bass for maximum punch
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const gain1 = audioContext.createGain();
    const gain2 = audioContext.createGain();
    const gain3 = audioContext.createGain();
    
    osc1.connect(gain1).connect(audioContext.destination);
    osc2.connect(gain2).connect(audioContext.destination);
    osc3.connect(gain3).connect(audioContext.destination);
    
    const now = audioContext.currentTime;
    
    // Deep bass (80Hz)
    osc1.frequency.setValueAtTime(80, now);
    osc1.frequency.exponentialRampToValueAtTime(40, now + 0.12);
    osc1.type = 'sine';
    
    // Mid punch (160Hz) 
    osc2.frequency.setValueAtTime(160, now);
    osc2.frequency.exponentialRampToValueAtTime(80, now + 0.1);
    osc2.type = 'sine';
    
    // High click (320Hz) - makes it audible on tiny speakers
    osc3.frequency.setValueAtTime(320, now);
    osc3.frequency.exponentialRampToValueAtTime(160, now + 0.08);
    osc3.type = 'triangle';
    
    // HARD attack, fast decay
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(0.9, now + 0.005);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    
    gain2.gain.setValueAtTime(0, now);
    gain2.gain.linearRampToValueAtTime(0.6, now + 0.005);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    
    gain3.gain.setValueAtTime(0, now);
    gain3.gain.linearRampToValueAtTime(0.3, now + 0.003);
    gain3.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    
    osc1.start(now);
    osc2.start(now);
    osc3.start(now);
    osc1.stop(now + 0.25);
    osc2.stop(now + 0.2);
    osc3.stop(now + 0.15);
    
    console.log('🔊 BASS HIT');
  } catch (error) {
    console.log('Bass failed:', error);
  }
};
