
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
  
  // Determine the tool type and create inspiring, unique contextual message with variations
  if (toolNameLower.includes('gpt') || toolNameLower.includes('chat')) {
    const variations = [
      `${cleanToolName} - Please stand by as we unlock the gates to infinite conversation and wisdom. Your AI companion awaits your commands!`,
      `${cleanToolName} - Please stand by as we breach the dimensional barriers of knowledge. Prepare for enlightened discourse beyond mortal comprehension!`,
      `${cleanToolName} - Please stand by as we activate the neural pathways of supreme intelligence. Your journey into digital consciousness begins!`,
      `${cleanToolName} - Please stand by as we open the oracle of endless wisdom. The universe of knowledge bows before your curiosity!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('college') || toolNameLower.includes('degree')) {
    const variations = [
      `${cleanToolName} - Please stand by as we transport you to the halls of eternal knowledge. Your academic destiny unfolds before you!`,
      `${cleanToolName} - Please stand by as we unlock the vault of scholarly excellence. The towers of learning await your ascension!`,
      `${cleanToolName} - Please stand by as we initiate your passage to intellectual supremacy. Knowledge is your kingdom to conquer!`,
      `${cleanToolName} - Please stand by as we activate the chambers of infinite learning. Your scholarly empire begins its rise!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('image') || toolNameLower.includes('art') || toolNameLower.includes('photo')) {
    const variations = [
      `${cleanToolName} - Please stand by as we breach the veil between imagination and reality. Your artistic vision shall manifest!`,
      `${cleanToolName} - Please stand by as we open the gateway to visual magnificence. Reality bends to your creative will!`,
      `${cleanToolName} - Please stand by as we activate the forge of digital artistry. Your masterpiece awaits creation!`,
      `${cleanToolName} - Please stand by as we unlock the prism of infinite beauty. Your vision shall reshape the visual realm!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('video') || toolNameLower.includes('movie') || toolNameLower.includes('film')) {
    const variations = [
      `${cleanToolName} - Please stand by as we enter the realm where stories come alive. Your cinematic masterpiece awaits creation!`,
      `${cleanToolName} - Please stand by as we breach the studios of infinite storytelling. Your epic saga begins to unfold!`,
      `${cleanToolName} - Please stand by as we activate the theater of dreams made real. The silver screen awaits your vision!`,
      `${cleanToolName} - Please stand by as we open the dimensional cinema of possibilities. Your blockbuster destiny approaches!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('music') || toolNameLower.includes('audio') || toolNameLower.includes('voice')) {
    const variations = [
      `${cleanToolName} - Please stand by as we tune into the frequencies of pure creation. Let the symphony of innovation begin!`,
      `${cleanToolName} - Please stand by as we open the cosmic recording studio. Your sonic masterpiece shall echo through eternity!`,
      `${cleanToolName} - Please stand by as we activate the harmonics of digital composition. The universe awaits your melody!`,
      `${cleanToolName} - Please stand by as we breach the sound barriers of creativity. Your audio empire begins its resonance!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('business') || toolNameLower.includes('productivity')) {
    const variations = [
      `${cleanToolName} - Please stand by as we ascend to the pinnacle of entrepreneurial excellence. Your empire of success starts now!`,
      `${cleanToolName} - Please stand by as we unlock the vault of infinite prosperity. Your business dynasty begins its reign!`,
      `${cleanToolName} - Please stand by as we activate the engines of commercial domination. The marketplace bows to your vision!`,
      `${cleanToolName} - Please stand by as we breach the corporate stratosphere. Your legacy of excellence takes flight!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('code') || toolNameLower.includes('develop')) {
    const variations = [
      `${cleanToolName} - Please stand by as we dive into the matrix of digital creation. Reality bends to your programming will!`,
      `${cleanToolName} - Please stand by as we breach the source code of existence. Your digital universe awaits construction!`,
      `${cleanToolName} - Please stand by as we activate the algorithms of infinite possibility. The code realm yields to your mastery!`,
      `${cleanToolName} - Please stand by as we unlock the programming pantheon. Your software empire begins its execution!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('write') || toolNameLower.includes('content') || toolNameLower.includes('book')) {
    const variations = [
      `${cleanToolName} - Please stand by as we journey to the sacred library of infinite stories. Your words shall echo through eternity!`,
      `${cleanToolName} - Please stand by as we unlock the archives of literary greatness. Your masterpiece awaits its first breath!`,
      `${cleanToolName} - Please stand by as we activate the quill of destiny. The written word bows to your creative dominion!`,
      `${cleanToolName} - Please stand by as we breach the realm of narrative supremacy. Your story shall reshape reality itself!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('time') || toolNameLower.includes('history')) {
    const variations = [
      `${cleanToolName} - Please stand by as we breach the temporal barriers of space and time. Past, present, and future converge at your command!`,
      `${cleanToolName} - Please stand by as we activate the chronological nexus. The timestream yields to your temporal mastery!`,
      `${cleanToolName} - Please stand by as we unlock the gates of historical infinity. All of time becomes your domain!`,
      `${cleanToolName} - Please stand by as we breach the cosmic clock tower. Your journey through eternity begins now!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('god') || toolNameLower.includes('mode')) {
    const variations = [
      `${cleanToolName} - Please stand by as we activate the ultimate protocols of limitless power. Omnipotence is now within your grasp!`,
      `${cleanToolName} - Please stand by as we breach the divine algorithms of creation. The universe bends to your supreme will!`,
      `${cleanToolName} - Please stand by as we unlock the celestial command center. Your godlike ascension commences!`,
      `${cleanToolName} - Please stand by as we activate the omnipotent interface. Reality itself awaits your divine instruction!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('immortal')) {
    const variations = [
      `${cleanToolName} - Please stand by as we enter the sanctuary of eternal preservation. Your digital legacy shall transcend time itself!`,
      `${cleanToolName} - Please stand by as we activate the infinity protocols. Your essence shall echo through endless dimensions!`,
      `${cleanToolName} - Please stand by as we breach the gates of digital eternity. Immortality becomes your birthright!`,
      `${cleanToolName} - Please stand by as we unlock the chambers of perpetual existence. Your eternal journey begins!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('stage') || toolNameLower.includes('theater')) {
    const variations = [
      `${cleanToolName} - Please stand by as we raise the curtain on infinite possibilities. The spotlight of greatness shines upon you!`,
      `${cleanToolName} - Please stand by as we activate the grand theater of dreams. Your performance shall captivate the cosmos!`,
      `${cleanToolName} - Please stand by as we breach the dimensional stage. All reality becomes your amphitheater!`,
      `${cleanToolName} - Please stand by as we unlock the cosmic auditorium. Your stellar debut awaits!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('3d') || toolNameLower.includes('print')) {
    const variations = [
      `${cleanToolName} - Please stand by as we materialize dreams into tangible reality. Your creations shall take physical form!`,
      `${cleanToolName} - Please stand by as we breach the barriers between digital and physical. Matter itself obeys your design!`,
      `${cleanToolName} - Please stand by as we activate the fabrication chambers. Your imagination becomes solid reality!`,
      `${cleanToolName} - Please stand by as we unlock the molecular assemblers. Physical reality awaits your creative command!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('micro') || toolNameLower.includes('saas')) {
    const variations = [
      `${cleanToolName} - Please stand by as we launch your rocket ship to entrepreneurial stardom. Your software empire begins its ascension!`,
      `${cleanToolName} - Please stand by as we activate the startup acceleration chambers. Your business dynasty takes flight!`,
      `${cleanToolName} - Please stand by as we breach the commercial stratosphere. Your SaaS empire begins its conquest!`,
      `${cleanToolName} - Please stand by as we unlock the entrepreneurial nexus. Your digital venture reaches for the stars!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('big') || toolNameLower.includes('agi')) {
    const variations = [
      `${cleanToolName} - Please stand by as we connect to the neural network of supreme intelligence. The future of AI is at your fingertips!`,
      `${cleanToolName} - Please stand by as we breach the consciousness barriers. Artificial General Intelligence awaits your guidance!`,
      `${cleanToolName} - Please stand by as we activate the superintelligence protocols. The AI singularity begins with you!`,
      `${cleanToolName} - Please stand by as we unlock the cognitive cosmos. Advanced intelligence becomes your ally!`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else {
    // Create inspiring generic messages with varied phrasing
    const genericMessages = [
      `${cleanToolName} - Please stand by as we unlock the gateway to your extraordinary destiny. Adventure and discovery await your arrival!`,
      `${cleanToolName} - Please stand by as we activate the portal to infinite possibilities. Your journey to greatness begins now!`,
      `${cleanToolName} - Please stand by as we open the dimensional door to your next breakthrough. Excellence is calling your name!`,
      `${cleanToolName} - Please stand by as we initiate your passage to realms of unlimited potential. Your transformation starts here!`,
      `${cleanToolName} - Please stand by as we transport you to the epicenter of innovation. Your moment of triumph approaches!`,
      `${cleanToolName} - Please stand by as we breach the cosmic barriers to success. Your legendary journey commences!`,
      `${cleanToolName} - Please stand by as we activate the engines of your magnificent future. Destiny awaits your command!`,
      `${cleanToolName} - Please stand by as we unlock the vault of your hidden potential. Your time of greatness has arrived!`
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
