
export const createPortalSounds = () => {
  console.log('🔊 Creating extended portal sounds');
  
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) {
      console.log('Web Audio API not supported');
      return;
    }
    
    const audioContext = new AudioContext();
    
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    
    // Extended deep whoosh sound - longer duration
    const createWhoosh = () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();
      
      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(80, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(20, audioContext.currentTime + 3.5);
      
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1000, audioContext.currentTime);
      filter.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 3.5);
      
      gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 3.5);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 3.5);
    };
    
    // Extended portal opening sound with sub-bass - longer duration
    const createPortalSound = () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const subOscillator = audioContext.createOscillator();
      const subGain = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      subOscillator.connect(subGain);
      subGain.connect(audioContext.destination);
      
      // Main oscillator - deeper and longer
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(60, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 1);
      oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 3);
      
      // Sub-bass layer - extended
      subOscillator.type = 'sine';
      subOscillator.frequency.setValueAtTime(25, audioContext.currentTime);
      subOscillator.frequency.exponentialRampToValueAtTime(80, audioContext.currentTime + 3);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.6, audioContext.currentTime + 0.5);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 3);
      
      subGain.gain.setValueAtTime(0.2, audioContext.currentTime);
      subGain.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 0.5);
      subGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 3);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 3);
      subOscillator.start();
      subOscillator.stop(audioContext.currentTime + 3);
    };
    
    // Extended energy crackle with more bass - longer duration
    const createCrackle = () => {
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          const filter = audioContext.createBiquadFilter();
          
          oscillator.connect(filter);
          filter.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.type = 'square';
          oscillator.frequency.setValueAtTime(300 + Math.random() * 800, audioContext.currentTime);
          
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(1500, audioContext.currentTime);
          
          gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
          
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.15);
        }, i * 150);
      }
    };
    
    createWhoosh();
    setTimeout(createPortalSound, 100);
    setTimeout(createCrackle, 200);
    
  } catch (error) {
    console.log('Audio context error:', error);
  }
};
