
// Generate contextual robot voice message based on tool name and URL
const generateRobotMessage = (toolName: string, destinationUrl: string): string => {
  console.log('🤖 Generating robot message for tool:', toolName);
  
  // Extract tool category and purpose from name and URL
  const toolNameLower = toolName.toLowerCase();
  const urlLower = destinationUrl.toLowerCase();
  
  // Clean up tool name for speech (remove common suffixes)
  const cleanToolName = toolName
    .replace(/\s+(GPT|AI|Tool|Platform|Studio|–.*|-)$/i, '')
    .replace(/\s+$/, '')
    .trim() || toolName;
  
  let message = `Opening ${cleanToolName} - `;
  
  // Determine the tool type and create inspiring, shorter contextual messages with variations
  if (toolNameLower.includes('gpt') || toolNameLower.includes('chat')) {
    const variations = [
      `Unlocking infinite wisdom!`,
      `Activating supreme intelligence!`,
      `Welcome to digital consciousness!`,
      `The universe bows to your curiosity!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('college') || toolNameLower.includes('degree')) {
    const variations = [
      `Your academic destiny awaits!`,
      `The towers of learning call you!`,
      `Knowledge is your kingdom!`,
      `Your scholarly empire begins!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('image') || toolNameLower.includes('art') || toolNameLower.includes('photo')) {
    const variations = [
      `Your artistic vision awaits!`,
      `Reality bends to your will!`,
      `Your masterpiece begins creation!`,
      `Reshape the visual realm!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('video') || toolNameLower.includes('movie') || toolNameLower.includes('film')) {
    const variations = [
      `Your cinematic masterpiece awaits!`,
      `Your epic saga unfolds!`,
      `The screen awaits your vision!`,
      `Your blockbuster destiny approaches!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('music') || toolNameLower.includes('audio') || toolNameLower.includes('voice')) {
    const variations = [
      `Let innovation begin!`,
      `Your sonic masterpiece awaits!`,
      `The universe awaits your melody!`,
      `Your audio empire resonates!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('business') || toolNameLower.includes('productivity')) {
    const variations = [
      `Your empire starts now!`,
      `Your business dynasty begins!`,
      `The marketplace bows to you!`,
      `Your legacy takes flight!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('code') || toolNameLower.includes('develop')) {
    const variations = [
      `Reality bends to your code!`,
      `Your universe awaits construction!`,
      `The code realm yields to you!`,
      `Your software empire executes!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('write') || toolNameLower.includes('content') || toolNameLower.includes('book')) {
    const variations = [
      `Your words echo through eternity!`,
      `Your masterpiece awaits!`,
      `The word bows to your dominion!`,
      `Your story reshapes reality!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('time') || toolNameLower.includes('history')) {
    const variations = [
      `Time converges at your command!`,
      `The timestream yields to you!`,
      `All time becomes your domain!`,
      `Your eternal journey begins!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('god') || toolNameLower.includes('mode')) {
    const variations = [
      `Omnipotence awaits!`,
      `The universe bends to your will!`,
      `Your godlike ascension begins!`,
      `Reality awaits your instruction!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('immortal')) {
    const variations = [
      `Your legacy transcends time!`,
      `Your essence echoes endlessly!`,
      `Immortality is your birthright!`,
      `Your eternal journey begins!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('stage') || toolNameLower.includes('theater')) {
    const variations = [
      `Greatness awaits!`,
      `Your performance captivates!`,
      `Reality becomes your amphitheater!`,
      `Your stellar debut awaits!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else {
    // Create inspiring generic messages with varied phrasing
    const genericMessages = [
      `Your extraordinary destiny awaits!`,
      `Your greatness begins now!`,
      `Excellence calls you forward!`,
      `Your transformation starts here!`,
      `Innovation epicenter reached!`,
      `Your legend commences today!`,
      `Your magnificent future awaits!`,
      `Your hidden potential unlocked!`
    ];
    
    // Select a random inspiring message for variety
    const randomIndex = Math.floor(Math.random() * genericMessages.length);
    message += genericMessages[randomIndex];
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
