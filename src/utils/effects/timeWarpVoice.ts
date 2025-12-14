// Time Warp Voice Effect - Plays INSTANTLY when traveling to external tools
export const playTimeWarpVoice = () => {
  console.log('🎤 Playing time warp voice effect - INSTANT');
  
  try {
    const audio = new Audio('/sounds/time-warp-voice.mp3');
    audio.volume = 0.85;
    audio.playbackRate = 1.0;
    
    // Start playing immediately
    const playPromise = audio.play();
    
    // 🔊 THREE BASS HITS for maximum impact
    setTimeout(() => createBassImpact(1.0), 700);    // Hit 1: "initializing"
    setTimeout(() => createBassImpact(1.2), 1200);   // Hit 2: mid-effect punch
    setTimeout(() => createBassImpact(1.4), 1500);   // Hit 3: right before URL opens
    
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

// MAXIMUM LOUD bass impact - triple layer for all speakers
const createBassImpact = (volumeMultiplier: number = 1.0) => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create master gain for overall volume
    const masterGain = audioContext.createGain();
    masterGain.connect(audioContext.destination);
    masterGain.gain.value = volumeMultiplier;
    
    // Four oscillators for MAXIMUM audibility
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const osc4 = audioContext.createOscillator();
    const gain1 = audioContext.createGain();
    const gain2 = audioContext.createGain();
    const gain3 = audioContext.createGain();
    const gain4 = audioContext.createGain();
    
    osc1.connect(gain1).connect(masterGain);
    osc2.connect(gain2).connect(masterGain);
    osc3.connect(gain3).connect(masterGain);
    osc4.connect(gain4).connect(masterGain);
    
    const now = audioContext.currentTime;
    
    // Sub bass (60Hz) - felt more than heard
    osc1.frequency.setValueAtTime(60, now);
    osc1.frequency.exponentialRampToValueAtTime(30, now + 0.15);
    osc1.type = 'sine';
    
    // Low bass (120Hz) - the thump
    osc2.frequency.setValueAtTime(120, now);
    osc2.frequency.exponentialRampToValueAtTime(60, now + 0.12);
    osc2.type = 'sine';
    
    // Mid punch (240Hz) - audible on all speakers
    osc3.frequency.setValueAtTime(240, now);
    osc3.frequency.exponentialRampToValueAtTime(120, now + 0.1);
    osc3.type = 'sine';
    
    // High transient click (500Hz) - the "crack" that cuts through
    osc4.frequency.setValueAtTime(500, now);
    osc4.frequency.exponentialRampToValueAtTime(200, now + 0.05);
    osc4.type = 'triangle';
    
    // MAXIMUM LOUD - hard attack
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(1.0, now + 0.003);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    
    gain2.gain.setValueAtTime(0, now);
    gain2.gain.linearRampToValueAtTime(1.0, now + 0.003);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    
    gain3.gain.setValueAtTime(0, now);
    gain3.gain.linearRampToValueAtTime(0.8, now + 0.002);
    gain3.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    
    gain4.gain.setValueAtTime(0, now);
    gain4.gain.linearRampToValueAtTime(0.6, now + 0.001);
    gain4.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    
    osc1.start(now);
    osc2.start(now);
    osc3.start(now);
    osc4.start(now);
    osc1.stop(now + 0.3);
    osc2.stop(now + 0.25);
    osc3.stop(now + 0.2);
    osc4.stop(now + 0.1);
    
    console.log('🔊 BASS HIT x' + volumeMultiplier);
  } catch (error) {
    console.log('Bass failed:', error);
  }
};
