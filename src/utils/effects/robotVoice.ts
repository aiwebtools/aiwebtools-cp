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
  
  // Determine the tool type and create inspiring, shorter contextual messages with variations
  if (toolNameLower.includes('gpt') || toolNameLower.includes('chat')) {
    const variations = [
      `${cleanToolName} - Unlocking infinite wisdom. Prepare for enlightened discourse!`,
      `${cleanToolName} - Activating supreme intelligence. Your AI companion awaits!`,
      `${cleanToolName} - Opening the oracle of endless knowledge. Welcome to digital consciousness!`,
      `${cleanToolName} - Breaching dimensional barriers. The universe bows to your curiosity!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('college') || toolNameLower.includes('degree')) {
    const variations = [
      `${cleanToolName} - Enter the halls of eternal knowledge. Your academic destiny awaits!`,
      `${cleanToolName} - Unlocking scholarly excellence. The towers of learning call you!`,
      `${cleanToolName} - Opening intellectual supremacy. Knowledge is your kingdom!`,
      `${cleanToolName} - Activating infinite learning. Your scholarly empire begins!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('image') || toolNameLower.includes('art') || toolNameLower.includes('photo')) {
    const variations = [
      `${cleanToolName} - Breaching imagination and reality. Your artistic vision awaits!`,
      `${cleanToolName} - Opening visual magnificence. Reality bends to your will!`,
      `${cleanToolName} - Activating digital artistry. Your masterpiece begins creation!`,
      `${cleanToolName} - Unlocking infinite beauty. Reshape the visual realm!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('video') || toolNameLower.includes('movie') || toolNameLower.includes('film')) {
    const variations = [
      `${cleanToolName} - Stories come alive. Your cinematic masterpiece awaits!`,
      `${cleanToolName} - Entering infinite storytelling. Your epic saga unfolds!`,
      `${cleanToolName} - Activating dream theater. The screen awaits your vision!`,
      `${cleanToolName} - Opening dimensional cinema. Your blockbuster destiny approaches!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('music') || toolNameLower.includes('audio') || toolNameLower.includes('voice')) {
    const variations = [
      `${cleanToolName} - Tuning pure creation frequencies. Let innovation begin!`,
      `${cleanToolName} - Opening cosmic recording studio. Your sonic masterpiece awaits!`,
      `${cleanToolName} - Activating digital composition. The universe awaits your melody!`,
      `${cleanToolName} - Breaching sound barriers. Your audio empire resonates!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('business') || toolNameLower.includes('productivity')) {
    const variations = [
      `${cleanToolName} - Ascending entrepreneurial excellence. Your empire starts now!`,
      `${cleanToolName} - Unlocking infinite prosperity. Your business dynasty begins!`,
      `${cleanToolName} - Activating commercial domination. The marketplace bows to you!`,
      `${cleanToolName} - Breaching corporate stratosphere. Your legacy takes flight!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('code') || toolNameLower.includes('develop')) {
    const variations = [
      `${cleanToolName} - Diving into digital creation matrix. Reality bends to your code!`,
      `${cleanToolName} - Breaching existence source code. Your universe awaits construction!`,
      `${cleanToolName} - Activating infinite algorithms. The code realm yields to you!`,
      `${cleanToolName} - Unlocking programming pantheon. Your software empire executes!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('write') || toolNameLower.includes('content') || toolNameLower.includes('book')) {
    const variations = [
      `${cleanToolName} - Journey to infinite stories. Your words echo through eternity!`,
      `${cleanToolName} - Unlocking literary greatness. Your masterpiece awaits!`,
      `${cleanToolName} - Activating destiny's quill. The word bows to your dominion!`,
      `${cleanToolName} - Breaching narrative supremacy. Your story reshapes reality!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('time') || toolNameLower.includes('history')) {
    const variations = [
      `${cleanToolName} - Breaching temporal barriers. Time converges at your command!`,
      `${cleanToolName} - Activating chronological nexus. The timestream yields to you!`,
      `${cleanToolName} - Unlocking historical infinity. All time becomes your domain!`,
      `${cleanToolName} - Breaching cosmic clock. Your eternal journey begins!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('god') || toolNameLower.includes('mode')) {
    const variations = [
      `${cleanToolName} - Activating limitless power protocols. Omnipotence awaits!`,
      `${cleanToolName} - Breaching divine algorithms. The universe bends to your will!`,
      `${cleanToolName} - Unlocking celestial command. Your godlike ascension begins!`,
      `${cleanToolName} - Activating omnipotent interface. Reality awaits your instruction!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('immortal')) {
    const variations = [
      `${cleanToolName} - Entering eternal preservation. Your legacy transcends time!`,
      `${cleanToolName} - Activating infinity protocols. Your essence echoes endlessly!`,
      `${cleanToolName} - Breaching digital eternity. Immortality is your birthright!`,
      `${cleanToolName} - Unlocking perpetual existence. Your eternal journey begins!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('stage') || toolNameLower.includes('theater')) {
    const variations = [
      `${cleanToolName} - Raising the curtain on infinite possibilities. Greatness awaits!`,
      `${cleanToolName} - Activating grand dream theater. Your performance captivates!`,
      `${cleanToolName} - Breaching dimensional stage. Reality becomes your amphitheater!`,
      `${cleanToolName} - Unlocking cosmic auditorium. Your stellar debut awaits!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else {
    // Create inspiring generic messages with varied phrasing
    const genericMessages = [
      `${cleanToolName} - Unlocking your extraordinary destiny. Adventure awaits!`,
      `${cleanToolName} - Activating infinite possibilities. Your greatness begins!`,
      `${cleanToolName} - Opening dimensional breakthrough. Excellence calls you!`,
      `${cleanToolName} - Initiating unlimited potential. Your transformation starts!`,
      `${cleanToolName} - Transporting to innovation epicenter. Triumph approaches!`,
      `${cleanToolName} - Breaching cosmic success barriers. Your legend commences!`,
      `${cleanToolName} - Activating magnificent future. Destiny awaits your command!`,
      `${cleanToolName} - Unlocking hidden potential. Your greatness has arrived!`
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
