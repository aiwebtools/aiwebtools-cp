
// Enhanced portal sounds with multiple audio layers for deeper immersion
export const createPortalSounds = () => {
  console.log('🔊 Creating enhanced portal audio effects');
  
  try {
    // Create AudioContext
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Enhanced portal whoosh sound with multiple frequencies
    const createPortalWhoosh = () => {
      const duration = 3.5;
      const sampleRate = audioContext.sampleRate;
      const numFrames = sampleRate * duration;
      const buffer = audioContext.createBuffer(2, numFrames, sampleRate);
      
      for (let channel = 0; channel < 2; channel++) {
        const channelData = buffer.getChannelData(channel);
        
        for (let i = 0; i < numFrames; i++) {
          const t = i / sampleRate;
          const fadeIn = Math.min(1, t * 4);
          const fadeOut = Math.max(0, 1 - (t - 2.5) * 2);
          const envelope = fadeIn * fadeOut;
          
          // Multiple frequency layers for richer sound
          const whoosh1 = Math.sin(2 * Math.PI * (80 + t * 200) * t) * Math.exp(-t * 0.5);
          const whoosh2 = Math.sin(2 * Math.PI * (120 + t * 150) * t) * Math.exp(-t * 0.7);
          const whoosh3 = Math.sin(2 * Math.PI * (60 + t * 300) * t) * Math.exp(-t * 0.3);
          
          // Add some noise for texture
          const noise = (Math.random() - 0.5) * 0.1 * Math.exp(-t * 2);
          
          // Reduced volume from 0.3 to 0.15 for better voice clarity
          channelData[i] = (whoosh1 + whoosh2 * 0.7 + whoosh3 * 0.5 + noise) * envelope * 0.15;
        }
      }
      
      return buffer;
    };

    // Enhanced energy pulse sound
    const createEnergyPulse = () => {
      const duration = 2.0;
      const sampleRate = audioContext.sampleRate;
      const numFrames = sampleRate * duration;
      const buffer = audioContext.createBuffer(2, numFrames, sampleRate);
      
      for (let channel = 0; channel < 2; channel++) {
        const channelData = buffer.getChannelData(channel);
        
        for (let i = 0; i < numFrames; i++) {
          const t = i / sampleRate;
          const pulse = Math.sin(2 * Math.PI * 40 * t) * Math.exp(-t * 3);
          const harmonic = Math.sin(2 * Math.PI * 80 * t) * Math.exp(-t * 4) * 0.5;
          const envelope = Math.exp(-t * 2);
          
          // Reduced volume from 0.4 to 0.2 for better voice clarity
          channelData[i] = (pulse + harmonic) * envelope * 0.2;
        }
      }
      
      return buffer;
    };

    // Create and play portal whoosh
    const whooshBuffer = createPortalWhoosh();
    const whooshSource = audioContext.createBufferSource();
    whooshSource.buffer = whooshBuffer;
    whooshSource.connect(audioContext.destination);
    whooshSource.start();

    // Create and play energy pulse with delay
    setTimeout(() => {
      const pulseBuffer = createEnergyPulse();
      const pulseSource = audioContext.createBufferSource();
      pulseSource.buffer = pulseBuffer;
      pulseSource.connect(audioContext.destination);
      pulseSource.start();
    }, 800);

    console.log('🎵 Portal audio effects created successfully');
    
  } catch (error) {
    console.log('Portal audio creation failed:', error);
  }
};
