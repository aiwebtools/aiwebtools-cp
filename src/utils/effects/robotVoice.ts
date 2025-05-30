
// Generate contextual robot voice message based on tool name and URL
const generateRobotMessage = (toolName: string, destinationUrl: string): string => {
  console.log('🤖 Generating robot message for tool:', toolName);
  
  // Clean up tool name for speech (remove common suffixes and formatting)
  const cleanToolName = toolName
    .replace(/\s+(GPT|AI|Tool|Platform|Studio|App|Software|Service|Pro|Plus|Premium)(\s|$)/gi, ' ')
    .replace(/\s*[–\-—]\s*.*$/, '') // Remove everything after dash/em-dash
    .replace(/\s*\|\s*.*$/, '') // Remove everything after pipe
    .replace(/\s*\.\s*.*$/, '') // Remove everything after period
    .replace(/\s+/g, ' ')
    .trim() || toolName;
  
  console.log('🎯 Clean tool name for voice:', cleanToolName);
  
  let message = `Opening ${cleanToolName} - `;
  
  // Determine the tool type and create inspiring, shorter contextual messages with variations
  const toolNameLower = toolName.toLowerCase();
  const urlLower = destinationUrl.toLowerCase();
  
  if (toolNameLower.includes('gpt') || toolNameLower.includes('chat') || urlLower.includes('chatgpt') || urlLower.includes('openai')) {
    const variations = [
      `Unlocking infinite wisdom...`,
      `Activating supreme intelligence...`,
      `Welcome to digital consciousness...`,
      `The universe bows to your curiosity...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('college') || toolNameLower.includes('degree') || toolNameLower.includes('education') || toolNameLower.includes('learning')) {
    const variations = [
      `Your academic destiny awaits...`,
      `The towers of learning call you...`,
      `Knowledge is your kingdom...`,
      `Your scholarly empire begins...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('image') || toolNameLower.includes('art') || toolNameLower.includes('photo') || toolNameLower.includes('design') || toolNameLower.includes('visual')) {
    const variations = [
      `Your artistic vision awaits...`,
      `Reality bends to your will...`,
      `Your masterpiece begins creation...`,
      `Reshape the visual realm...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('video') || toolNameLower.includes('movie') || toolNameLower.includes('film') || toolNameLower.includes('cinema')) {
    const variations = [
      `Your cinematic masterpiece awaits...`,
      `Your epic saga unfolds...`,
      `The screen awaits your vision...`,
      `Your blockbuster destiny approaches...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('music') || toolNameLower.includes('audio') || toolNameLower.includes('voice') || toolNameLower.includes('sound')) {
    const variations = [
      `Let innovation begin...`,
      `Your sonic masterpiece awaits...`,
      `The universe awaits your melody...`,
      `Your audio empire resonates...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('business') || toolNameLower.includes('productivity') || toolNameLower.includes('sales') || toolNameLower.includes('marketing')) {
    const variations = [
      `Your empire starts now...`,
      `Your business dynasty begins...`,
      `The marketplace bows to you...`,
      `Your legacy takes flight...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('code') || toolNameLower.includes('develop') || toolNameLower.includes('programming') || toolNameLower.includes('software')) {
    const variations = [
      `Reality bends to your code...`,
      `Your universe awaits construction...`,
      `The code realm yields to you...`,
      `Your software empire executes...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('write') || toolNameLower.includes('content') || toolNameLower.includes('book') || toolNameLower.includes('text')) {
    const variations = [
      `Your words echo through eternity...`,
      `Your masterpiece awaits...`,
      `The word bows to your dominion...`,
      `Your story reshapes reality...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('time') || toolNameLower.includes('history') || toolNameLower.includes('historical')) {
    const variations = [
      `Time converges at your command...`,
      `The timestream yields to you...`,
      `All time becomes your domain...`,
      `Your eternal journey begins...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('god') || toolNameLower.includes('mode') || toolNameLower.includes('supreme')) {
    const variations = [
      `Omnipotence awaits...`,
      `The universe bends to your will...`,
      `Your godlike ascension begins...`,
      `Reality awaits your instruction...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('immortal') || toolNameLower.includes('eternal')) {
    const variations = [
      `Your legacy transcends time...`,
      `Your essence echoes endlessly...`,
      `Immortality is your birthright...`,
      `Your eternal journey begins...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('stage') || toolNameLower.includes('theater') || toolNameLower.includes('performance')) {
    const variations = [
      `Greatness awaits...`,
      `Your performance captivates...`,
      `Reality becomes your amphitheater...`,
      `Your stellar debut awaits...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('finance') || toolNameLower.includes('money') || toolNameLower.includes('trading') || toolNameLower.includes('investment')) {
    const variations = [
      `Your financial empire rises...`,
      `Wealth flows to your command...`,
      `The markets await your wisdom...`,
      `Your prosperity journey begins...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('health') || toolNameLower.includes('medical') || toolNameLower.includes('wellness') || toolNameLower.includes('fitness')) {
    const variations = [
      `Your wellness revolution starts...`,
      `Health and vitality await...`,
      `Your healing journey begins...`,
      `Optimal wellness is yours...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('legal') || toolNameLower.includes('law') || toolNameLower.includes('attorney') || toolNameLower.includes('lawyer')) {
    const variations = [
      `Justice flows through you...`,
      `Your legal mastery awaits...`,
      `The law bends to your wisdom...`,
      `Your advocacy powers activate...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else if (toolNameLower.includes('research') || toolNameLower.includes('analyze') || toolNameLower.includes('study') || toolNameLower.includes('investigation')) {
    const variations = [
      `Your discovery awaits...`,
      `Truth reveals itself to you...`,
      `Your research empire expands...`,
      `Knowledge bows to your quest...`
    ];
    message += variations[Math.floor(Math.random() * variations.length)];
  } else {
    // Create inspiring generic messages with varied phrasing
    const genericMessages = [
      `Your extraordinary destiny awaits...`,
      `Your greatness begins now...`,
      `Excellence calls you forward...`,
      `Your transformation starts here...`,
      `Innovation epicenter reached...`,
      `Your legend commences today...`,
      `Your magnificent future awaits...`,
      `Your hidden potential unlocked...`
    ];
    
    // Select a random inspiring message for variety
    const randomIndex = Math.floor(Math.random() * genericMessages.length);
    message += genericMessages[randomIndex];
  }
  
  return message;
};

// Enhanced robot voice synthesis with whisper-like tone
export const createRobotVoice = (toolName: string, destinationUrl: string) => {
  console.log('🤖 Creating whisper robot voice for:', toolName);
  
  // Check if Speech Synthesis is supported
  if (!('speechSynthesis' in window)) {
    console.log('Speech synthesis not supported');
    return;
  }
  
  try {
    // Generate contextual message
    const message = generateRobotMessage(toolName, destinationUrl);
    console.log('🗣️ Robot whisper message:', message);
    
    const utterance = new SpeechSynthesisUtterance(message);
    
    // Configure voice for mystical whisper effect
    utterance.rate = 0.4; // Much slower for whisper effect
    utterance.pitch = 0.3; // Slightly higher pitch for intimate whisper
    utterance.volume = 0.6; // Lower volume for whisper effect
    
    // Try to find a softer, more intimate voice
    const voices = speechSynthesis.getVoices();
    
    // Prefer female voices for softer whisper effect
    const preferredVoices = voices.filter(voice => 
      voice.name.toLowerCase().includes('female') ||
      voice.name.toLowerCase().includes('samantha') ||
      voice.name.toLowerCase().includes('anna') ||
      voice.name.toLowerCase().includes('karen') ||
      voice.name.toLowerCase().includes('victoria') ||
      voice.name.toLowerCase().includes('fiona') ||
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
    utterance.onstart = () => console.log('🗣️ Robot whisper voice started speaking');
    utterance.onend = () => console.log('🗣️ Robot whisper voice finished speaking');
    utterance.onerror = (error) => console.log('🗣️ Robot whisper voice error:', error);
    
    // Start speaking after a brief delay to sync with visual effects
    setTimeout(() => {
      speechSynthesis.speak(utterance);
    }, 300);
    
  } catch (error) {
    console.log('Robot whisper voice synthesis error:', error);
  }
};
