
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

// Generate contextual robot voice message based on tool name and URL
const generateRobotMessage = (toolName: string, destinationUrl: string): string => {
  console.log('🤖 Generating robot message for tool:', toolName);
  
  // Extract tool category and purpose from name and URL
  const toolNameLower = toolName.toLowerCase();
  const urlLower = destinationUrl.toLowerCase();
  
  // Clean up tool name for speech (remove common suffixes)
  const cleanToolName = toolName
    .replace(/\s+(GPT|AI|Tool|Platform|Studio)$/i, '')
    .trim() || toolName;
  
  let message = "Master, I am now opening ";
  
  // Determine the tool type and create contextual message
  if (toolNameLower.includes('gpt') || toolNameLower.includes('chat')) {
    message += `${cleanToolName} GPT. Initiating neural link... prepare for cognitive enhancement!`;
  } else if (toolNameLower.includes('college') || toolNameLower.includes('degree')) {
    message += `${cleanToolName}. Initiating academic transcendence... knowledge awaits!`;
  } else if (toolNameLower.includes('image') || toolNameLower.includes('art') || toolNameLower.includes('photo')) {
    message += `${cleanToolName}. Initiating visual creation matrix... artistic powers activating!`;
  } else if (toolNameLower.includes('video') || toolNameLower.includes('movie') || toolNameLower.includes('film')) {
    message += `${cleanToolName}. Initiating cinematic dimension... reality becomes your canvas!`;
  } else if (toolNameLower.includes('music') || toolNameLower.includes('audio') || toolNameLower.includes('voice')) {
    message += `${cleanToolName}. Initiating sonic realm... sound waves bend to your will!`;
  } else if (toolNameLower.includes('business') || toolNameLower.includes('productivity')) {
    message += `${cleanToolName}. Initiating enterprise nexus... success protocols engaged!`;
  } else if (toolNameLower.includes('code') || toolNameLower.includes('develop')) {
    message += `${cleanToolName}. Initiating digital forge... reality bends to your commands!`;
  } else if (toolNameLower.includes('write') || toolNameLower.includes('content') || toolNameLower.includes('book')) {
    message += `${cleanToolName}. Initiating literary dimension... words become your weapon!`;
  } else if (toolNameLower.includes('time') || toolNameLower.includes('history')) {
    message += `${cleanToolName}. Initiating temporal nexus... past, present, and future converge!`;
  } else if (toolNameLower.includes('god') || toolNameLower.includes('mode')) {
    message += `${cleanToolName}. Initiating omnipotent protocols... unlimited power awaits!`;
  } else if (toolNameLower.includes('immortal')) {
    message += `${cleanToolName}. Initiating eternal preservation matrix... legacy secured forever!`;
  } else if (toolNameLower.includes('stage') || toolNameLower.includes('theater')) {
    message += `${cleanToolName}. Initiating performance dimension... the stage is yours!`;
  } else {
    message += `${cleanToolName}. Initiating mystical portal... adventure and discovery await!`;
  }
  
  return message;
};

// Enhanced robot voice synthesis with deeper, more mystical tone
export const createRobotVoice = (toolName: string, destinationUrl: string) => {
  console.log('🤖 Creating robot voice for:', toolName);
  
  // Check if Speech Synthesis is supported
  if (!('speechSynthesis' in window)) {
    console.log('Speech synthesis not supported');
    return;
  }
  
  try {
    // Generate contextual message
    const message = generateRobotMessage(toolName, destinationUrl);
    console.log('🗣️ Robot message:', message);
    
    const utterance = new SpeechSynthesisUtterance(message);
    
    // Configure voice for mystical robot effect
    utterance.rate = 0.6; // Even slower for more dramatic effect
    utterance.pitch = 0.2; // Much deeper, more robotic tone
    utterance.volume = 0.9; // Clear and prominent
    
    // Try to find a deeper, more robotic voice
    const voices = speechSynthesis.getVoices();
    
    // Prefer male voices with lower pitch characteristics
    const preferredVoices = voices.filter(voice => 
      voice.name.toLowerCase().includes('male') ||
      voice.name.toLowerCase().includes('david') ||
      voice.name.toLowerCase().includes('alex') ||
      voice.name.toLowerCase().includes('daniel') ||
      voice.name.toLowerCase().includes('microsoft') ||
      voice.lang.startsWith('en')
    );
    
    if (preferredVoices.length > 0) {
      utterance.voice = preferredVoices[0];
    } else if (voices.length > 0) {
      // Fallback to first available English voice
      const englishVoice = voices.find(voice => voice.lang.startsWith('en'));
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
    }
    
    // Add event listeners for debugging
    utterance.onstart = () => console.log('🗣️ Robot voice started speaking');
    utterance.onend = () => console.log('🗣️ Robot voice finished speaking');
    utterance.onerror = (error) => console.log('🗣️ Robot voice error:', error);
    
    // Start speaking after a brief delay to sync with visual effects
    setTimeout(() => {
      speechSynthesis.speak(utterance);
    }, 300);
    
  } catch (error) {
    console.log('Robot voice synthesis error:', error);
  }
};
