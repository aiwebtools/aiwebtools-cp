
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
