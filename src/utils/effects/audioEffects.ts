
export const createPortalSounds = () => {
  console.log('🔊 Creating portal sounds');
  
  try {
    // Try to create audio context
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) {
      console.log('Web Audio API not supported');
      return;
    }
    
    const audioContext = new AudioContext();
    
    // Resume audio context if it's suspended (required by browsers)
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    
    // Deep whoosh sound - much lower and more dramatic
    const createWhoosh = () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();
      
      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(80, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(25, audioContext.currentTime + 2);
      
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, audioContext.currentTime);
      filter.frequency.exponentialRampToValueAtTime(60, audioContext.currentTime + 2);
      
      gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 2);
    };
    
    // Deep portal opening sound with sub-bass
    const createPortalSound = () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const subOscillator = audioContext.createOscillator();
      const subGain = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      subOscillator.connect(subGain);
      subGain.connect(audioContext.destination);
      
      // Main oscillator - deeper
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(60, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.5);
      oscillator.frequency.exponentialRampToValueAtTime(120, audioContext.currentTime + 1.5);
      
      // Sub-bass layer
      subOscillator.type = 'sine';
      subOscillator.frequency.setValueAtTime(30, audioContext.currentTime);
      subOscillator.frequency.exponentialRampToValueAtTime(80, audioContext.currentTime + 1.5);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.3);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);
      
      subGain.gain.setValueAtTime(0.2, audioContext.currentTime);
      subGain.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.3);
      subGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 1.5);
      subOscillator.start();
      subOscillator.stop(audioContext.currentTime + 1.5);
    };
    
    // Deeper energy crackle with more bass
    const createCrackle = () => {
      for (let i = 0; i < 12; i++) {
        setTimeout(() => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          const filter = audioContext.createBiquadFilter();
          
          oscillator.connect(filter);
          filter.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.type = 'square';
          oscillator.frequency.setValueAtTime(400 + Math.random() * 600, audioContext.currentTime);
          
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(1200, audioContext.currentTime);
          
          gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.12);
          
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.12);
        }, i * 180);
      }
    };
    
    createWhoosh();
    setTimeout(createPortalSound, 100);
    setTimeout(createCrackle, 200);
    
  } catch (error) {
    console.log('Audio context error:', error);
  }
};
