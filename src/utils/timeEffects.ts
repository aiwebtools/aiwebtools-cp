

export const createTimePortalEffect = (destinationUrl: string) => {
  console.log('🌀 Creating time portal effect for URL:', destinationUrl);
  
  // Create container for all effects
  const effectsContainer = document.createElement('div');
  effectsContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
  `;
  document.body.appendChild(effectsContainer);

  // Apply time warp filter to body
  document.body.style.filter = 'hue-rotate(0deg) saturate(1) brightness(1)';
  document.body.style.transition = 'filter 0.2s ease-out';
  
  setTimeout(() => {
    document.body.style.filter = 'hue-rotate(360deg) saturate(1.5) brightness(1.2)';
  }, 50);

  // Create particle explosion
  const createParticles = () => {
    console.log('✨ Creating particles');
    const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'explosion-particle';
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        top: 50%;
        left: 50%;
        box-shadow: 0 0 10px currentColor;
        animation: particle-explosion 1s ease-out forwards;
        transform-origin: center;
      `;
      
      const angle = (i / particleCount) * 360;
      const velocity = 150 + Math.random() * 200;
      particle.style.setProperty('--angle', `${angle}deg`);
      particle.style.setProperty('--velocity', `${velocity}px`);
      
      effectsContainer.appendChild(particle);
    }
  };

  // Create vortex rings
  const createVortexRings = () => {
    console.log('🌀 Creating vortex rings');
    for (let i = 0; i < 3; i++) {
      const ring = document.createElement('div');
      ring.className = 'vortex-ring';
      ring.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        border: 3px solid rgba(0, 255, 255, 0.8);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: vortex-spin 1.2s ease-out forwards;
        animation-delay: ${i * 0.1}s;
      `;
      effectsContainer.appendChild(ring);
    }
  };

  // Create energy waves
  const createEnergyWaves = () => {
    console.log('⚡ Creating energy waves');
    for (let i = 0; i < 2; i++) {
      const wave = document.createElement('div');
      wave.className = 'energy-wave';
      wave.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        border: 2px solid rgba(255, 0, 255, 0.6);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: energy-pulse 1s ease-out forwards;
        animation-delay: ${i * 0.2}s;
      `;
      effectsContainer.appendChild(wave);
    }
  };

  // Create lightning bolts
  const createLightning = () => {
    console.log('⚡ Creating lightning bolts');
    for (let i = 0; i < 6; i++) {
      const bolt = document.createElement('div');
      bolt.className = 'lightning-bolt';
      bolt.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 80px;
        background: linear-gradient(0deg, transparent, #ffff00, transparent);
        transform-origin: bottom center;
        transform: translate(-50%, -100%) rotate(${i * 60}deg);
        animation: lightning-flash 0.6s ease-out forwards;
        animation-delay: ${i * 0.05}s;
        box-shadow: 0 0 15px #ffff00;
      `;
      effectsContainer.appendChild(bolt);
    }
  };

  // Create full-screen flash
  const createFlash = () => {
    console.log('💥 Creating flash effect');
    const flash = document.createElement('div');
    flash.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(0,255,255,0.4) 50%, transparent 100%);
      animation: flash-fade 0.8s ease-out forwards;
    `;
    effectsContainer.appendChild(flash);
  };

  // Generate portal sounds using Web Audio API
  const createPortalSounds = () => {
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
      
      // Whoosh sound - extended duration
      const createWhoosh = () => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 2);
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2000, audioContext.currentTime);
        filter.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 2);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 2);
      };
      
      // Portal opening sound - extended duration
      const createPortalSound = () => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.5);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 1.5);
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 0.3);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1.5);
      };
      
      // Energy crackle - more crackles over longer duration
      const createCrackle = () => {
        for (let i = 0; i < 12; i++) {
          setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(800 + Math.random() * 1200, audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
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

  // Execute all effects
  createParticles();
  createVortexRings();
  createEnergyWaves();
  createLightning();
  createFlash();
  createPortalSounds();

  // Cleanup and open in new tab - changed from 1500ms to 2500ms
  setTimeout(() => {
    console.log('🧹 Cleaning up effects and opening in new tab:', destinationUrl);
    document.body.style.filter = '';
    document.body.style.transition = '';
    effectsContainer.remove();
    
    // Open destination URL in new tab if URL exists
    if (destinationUrl && destinationUrl.trim()) {
      window.open(destinationUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.log('No destination URL provided');
    }
  }, 2500);
};

