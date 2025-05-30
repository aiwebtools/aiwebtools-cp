
// Enhanced portal sounds with deep bass guitar time warp effect
export const createPortalSounds = () => {
  console.log('🔊 Creating bass guitar time warp portal effects');
  
  try {
    // Create AudioContext
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create deep bass guitar time warp sound
    const createBassTimeWarp = () => {
      const duration = 4.0;
      const sampleRate = audioContext.sampleRate;
      const numFrames = sampleRate * duration;
      const buffer = audioContext.createBuffer(2, numFrames, sampleRate);
      
      for (let channel = 0; channel < 2; channel++) {
        const channelData = buffer.getChannelData(channel);
        
        for (let i = 0; i < numFrames; i++) {
          const t = i / sampleRate;
          const fadeIn = Math.min(1, t * 3);
          const fadeOut = Math.max(0, 1 - (t - 2.8) * 3);
          const envelope = fadeIn * fadeOut;
          
          // Deep bass guitar fundamental (starting low, bending down)
          const bassFund = Math.sin(2 * Math.PI * (80 - t * 25) * t) * Math.exp(-t * 0.3);
          
          // Bass harmonics for richness
          const bassHarm1 = Math.sin(2 * Math.PI * (160 - t * 50) * t) * Math.exp(-t * 0.4) * 0.6;
          const bassHarm2 = Math.sin(2 * Math.PI * (240 - t * 75) * t) * Math.exp(-t * 0.5) * 0.3;
          
          // Time warp effect - pitch bending down with vibrato
          const vibrato = Math.sin(2 * Math.PI * 4 * t) * 0.1;
          const pitchBend = 1 - (t * 0.4) + vibrato;
          
          // Combine bass elements with time warp modulation
          const bassGuitar = (bassFund + bassHarm1 + bassHarm2) * pitchBend;
          
          // Add some reverb-like echo
          const echoDelay = Math.floor(sampleRate * 0.2);
          const echo = i > echoDelay ? channelData[i - echoDelay] * 0.3 : 0;
          
          // Final bass guitar time warp sound
          channelData[i] = (bassGuitar + echo) * envelope * 0.4;
        }
      }
      
      return buffer;
    };

    // Create dimensional shift whoosh (complementary effect)
    const createDimensionalShift = () => {
      const duration = 3.0;
      const sampleRate = audioContext.sampleRate;
      const numFrames = sampleRate * duration;
      const buffer = audioContext.createBuffer(2, numFrames, sampleRate);
      
      for (let channel = 0; channel < 2; channel++) {
        const channelData = buffer.getChannelData(channel);
        
        for (let i = 0; i < numFrames; i++) {
          const t = i / sampleRate;
          const envelope = Math.exp(-t * 1.2);
          
          // Low frequency dimensional shift
          const shift1 = Math.sin(2 * Math.PI * (45 + t * 100) * t) * Math.exp(-t * 0.8);
          const shift2 = Math.sin(2 * Math.PI * (65 + t * 150) * t) * Math.exp(-t * 1.0);
          
          // Add filtered noise for texture
          const noise = (Math.random() - 0.5) * 0.08 * Math.exp(-t * 3);
          
          channelData[i] = (shift1 + shift2 * 0.7 + noise) * envelope * 0.25;
        }
      }
      
      return buffer;
    };

    // Create and play bass guitar time warp
    const bassWarpBuffer = createBassTimeWarp();
    const bassWarpSource = audioContext.createBufferSource();
    bassWarpSource.buffer = bassWarpBuffer;
    bassWarpSource.connect(audioContext.destination);
    bassWarpSource.start();

    // Create and play dimensional shift with delay
    setTimeout(() => {
      const shiftBuffer = createDimensionalShift();
      const shiftSource = audioContext.createBufferSource();
      shiftSource.buffer = shiftBuffer;
      shiftSource.connect(audioContext.destination);
      shiftSource.start();
    }, 600);

    console.log('🎸 Bass guitar time warp effects created successfully');
    
  } catch (error) {
    console.log('Bass guitar portal audio creation failed:', error);
  }
};
