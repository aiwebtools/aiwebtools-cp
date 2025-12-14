// Time Warp Voice Effect - Plays INSTANTLY when traveling to external tools
export const playTimeWarpVoice = () => {
  console.log('🎤 Playing time warp voice effect - INSTANT');
  
  try {
    const audio = new Audio('/sounds/time-warp-voice.mp3');
    audio.volume = 0.85;
    audio.playbackRate = 1.0;
    
    // Start playing immediately
    const playPromise = audio.play();
    
    // 💓 HEARTBEAT PATTERN: boom-boom, boom-boom, boom-boom
    // Each pair is ~300ms apart, pairs are ~400ms apart
    
    // First heartbeat pair
    setTimeout(() => createHeartbeatBoom(0.9, 'lub'), 400);
    setTimeout(() => createHeartbeatBoom(1.0, 'dub'), 550);
    
    // Second heartbeat pair (loudest, right before URL opens)
    setTimeout(() => createHeartbeatBoom(1.2, 'lub'), 850);
    setTimeout(() => createHeartbeatBoom(1.3, 'dub'), 1000);
    
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

// 💓 Heartbeat boom - "lub" is deeper/softer, "dub" is punchier
const createHeartbeatBoom = (volumeMultiplier: number = 1.0, type: 'lub' | 'dub' = 'lub') => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const masterGain = audioContext.createGain();
    masterGain.connect(audioContext.destination);
    masterGain.gain.value = volumeMultiplier;
    
    const now = audioContext.currentTime;
    
    if (type === 'lub') {
      // LUB - deeper, slightly softer first beat
      const osc1 = audioContext.createOscillator();
      const osc2 = audioContext.createOscillator();
      const gain1 = audioContext.createGain();
      const gain2 = audioContext.createGain();
      
      osc1.connect(gain1).connect(masterGain);
      osc2.connect(gain2).connect(masterGain);
      
      // Deep thump
      osc1.frequency.setValueAtTime(50, now);
      osc1.frequency.exponentialRampToValueAtTime(25, now + 0.12);
      osc1.type = 'sine';
      
      // Mid body
      osc2.frequency.setValueAtTime(100, now);
      osc2.frequency.exponentialRampToValueAtTime(50, now + 0.1);
      osc2.type = 'sine';
      
      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(0.8, now + 0.01);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      
      gain2.gain.setValueAtTime(0, now);
      gain2.gain.linearRampToValueAtTime(0.6, now + 0.01);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      
      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.2);
      osc2.stop(now + 0.15);
      
    } else {
      // DUB - punchier, sharper second beat
      const osc1 = audioContext.createOscillator();
      const osc2 = audioContext.createOscillator();
      const osc3 = audioContext.createOscillator();
      const gain1 = audioContext.createGain();
      const gain2 = audioContext.createGain();
      const gain3 = audioContext.createGain();
      
      osc1.connect(gain1).connect(masterGain);
      osc2.connect(gain2).connect(masterGain);
      osc3.connect(gain3).connect(masterGain);
      
      // Punchy bass
      osc1.frequency.setValueAtTime(80, now);
      osc1.frequency.exponentialRampToValueAtTime(40, now + 0.08);
      osc1.type = 'sine';
      
      // Mid punch
      osc2.frequency.setValueAtTime(160, now);
      osc2.frequency.exponentialRampToValueAtTime(80, now + 0.06);
      osc2.type = 'sine';
      
      // Click transient
      osc3.frequency.setValueAtTime(400, now);
      osc3.frequency.exponentialRampToValueAtTime(150, now + 0.03);
      osc3.type = 'triangle';
      
      // Sharper attack
      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(1.0, now + 0.003);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      
      gain2.gain.setValueAtTime(0, now);
      gain2.gain.linearRampToValueAtTime(0.8, now + 0.002);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      
      gain3.gain.setValueAtTime(0, now);
      gain3.gain.linearRampToValueAtTime(0.5, now + 0.001);
      gain3.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      
      osc1.start(now);
      osc2.start(now);
      osc3.start(now);
      osc1.stop(now + 0.15);
      osc2.stop(now + 0.1);
      osc3.stop(now + 0.08);
    }
    
    console.log('💓', type.toUpperCase());
  } catch (error) {
    console.log('Heartbeat failed:', error);
  }
};
