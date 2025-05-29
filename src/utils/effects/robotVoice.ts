
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
  
  // Determine the tool type and create inspiring, unique contextual message
  if (toolNameLower.includes('gpt') || toolNameLower.includes('chat')) {
    message += `${cleanToolName} - Please stand by as we unlock the gates to infinite conversation and wisdom. Your AI companion awaits your commands!`;
  } else if (toolNameLower.includes('college') || toolNameLower.includes('degree')) {
    message += `${cleanToolName} - Please stand by as we transport you to the halls of eternal knowledge. Your academic destiny unfolds before you!`;
  } else if (toolNameLower.includes('image') || toolNameLower.includes('art') || toolNameLower.includes('photo')) {
    message += `${cleanToolName} - Please stand by as we breach the veil between imagination and reality. Your artistic vision shall manifest!`;
  } else if (toolNameLower.includes('video') || toolNameLower.includes('movie') || toolNameLower.includes('film')) {
    message += `${cleanToolName} - Please stand by as we enter the realm where stories come alive. Your cinematic masterpiece awaits creation!`;
  } else if (toolNameLower.includes('music') || toolNameLower.includes('audio') || toolNameLower.includes('voice')) {
    message += `${cleanToolName} - Please stand by as we tune into the frequencies of pure creation. Let the symphony of innovation begin!`;
  } else if (toolNameLower.includes('business') || toolNameLower.includes('productivity')) {
    message += `${cleanToolName} - Please stand by as we ascend to the pinnacle of entrepreneurial excellence. Your empire of success starts now!`;
  } else if (toolNameLower.includes('code') || toolNameLower.includes('develop')) {
    message += `${cleanToolName} - Please stand by as we dive into the matrix of digital creation. Reality bends to your programming will!`;
  } else if (toolNameLower.includes('write') || toolNameLower.includes('content') || toolNameLower.includes('book')) {
    message += `${cleanToolName} - Please stand by as we journey to the sacred library of infinite stories. Your words shall echo through eternity!`;
  } else if (toolNameLower.includes('time') || toolNameLower.includes('history')) {
    message += `${cleanToolName} - Please stand by as we breach the temporal barriers of space and time. Past, present, and future converge at your command!`;
  } else if (toolNameLower.includes('god') || toolNameLower.includes('mode')) {
    message += `${cleanToolName} - Please stand by as we activate the ultimate protocols of limitless power. Omnipotence is now within your grasp!`;
  } else if (toolNameLower.includes('immortal')) {
    message += `${cleanToolName} - Please stand by as we enter the sanctuary of eternal preservation. Your digital legacy shall transcend time itself!`;
  } else if (toolNameLower.includes('stage') || toolNameLower.includes('theater')) {
    message += `${cleanToolName} - Please stand by as we raise the curtain on infinite possibilities. The spotlight of greatness shines upon you!`;
  } else if (toolNameLower.includes('3d') || toolNameLower.includes('print')) {
    message += `${cleanToolName} - Please stand by as we materialize dreams into tangible reality. Your creations shall take physical form!`;
  } else if (toolNameLower.includes('micro') || toolNameLower.includes('saas')) {
    message += `${cleanToolName} - Please stand by as we launch your rocket ship to entrepreneurial stardom. Your software empire begins its ascension!`;
  } else if (toolNameLower.includes('big') || toolNameLower.includes('agi')) {
    message += `${cleanToolName} - Please stand by as we connect to the neural network of supreme intelligence. The future of AI is at your fingertips!`;
  } else {
    // Create inspiring generic messages with varied phrasing
    const genericMessages = [
      `${cleanToolName} - Please stand by as we unlock the gateway to your extraordinary destiny. Adventure and discovery await your arrival!`,
      `${cleanToolName} - Please stand by as we activate the portal to infinite possibilities. Your journey to greatness begins now!`,
      `${cleanToolName} - Please stand by as we open the dimensional door to your next breakthrough. Excellence is calling your name!`,
      `${cleanToolName} - Please stand by as we initiate your passage to realms of unlimited potential. Your transformation starts here!`,
      `${cleanToolName} - Please stand by as we transport you to the epicenter of innovation. Your moment of triumph approaches!`
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
