import { Tool } from "@/types/tools";

// Keywords that indicate a spiritual/religious tool
const SPIRITUALITY_KEYWORDS = [
  'spiritual', 'spirituality', 'god', 'divine', 'soul', 'meditation', 'enlightenment',
  'religion', 'religious', 'faith', 'sacred', 'holy', 'mystical', 'mysticism',
  'prophet', 'saint', 'deity', 'buddha', 'jesus', 'christ', 'allah', 'krishna',
  'yoga', 'chakra', 'mantra', 'prayer', 'worship', 'temple', 'church', 'mosque',
  'torah', 'bible', 'quran', 'vedas', 'dharma', 'karma', 'reincarnation',
  'afterlife', 'heaven', 'nirvana', 'moksha', 'salvation', 'redemption',
  'gnostic', 'kabbalah', 'sufi', 'zen', 'tao', 'shinto', 'hindu', 'buddhist',
  'christian', 'islamic', 'jewish', 'pagan', 'wiccan', 'shamanic',
  'angel', 'archangel', 'seraph', 'cherub', 'demon', 'spirit',
  'consciousness', 'awakening', 'transcendence', 'ascension',
  'orisha', 'yemaya', 'quan yin', 'bodhisattva', 'guru', 'swami', 'roshi',
  'mani', 'manicheism', 'zoroastrian', 'essene', 'gnostic'
];

// Keywords that indicate tools needing SIMULATION tag for liability protection
const SIMULATION_KEYWORDS = [
  // Spiritual/Divine personas
  'light', 'illumination', 'luminous', 'radiant',
  'philosophy', 'philosopher', 'socrates', 'plato', 'aristotle',
  'marcus aurelius', 'stoic', 'stoicism', 'epicurus', 'seneca',
  'rumi', 'lao tzu', 'confucius', 'buddha', 'jesus', 'muhammad',
  'alan watts', 'eckhart', 'yogananda', 'krishnamurti',
  'god', 'gods', 'deity', 'deities', 'divine', 'prophet', 'saint',
  'mary magdalene', 'council of light', 'breathlight', 'lightworker',
  'talk to history', 'talk to the gods', 'resurrection',
  'carl sagan', 'hypatia', 'tesla', 'einstein', 'nikola tesla',
  
  // Medical/Health - liability risk
  'doctor', 'medical', 'diagnosis', 'treatment', 'symptom', 'disease',
  'health', 'healthcare', 'medicine', 'prescription', 'pharmaceutical',
  'therapy', 'therapist', 'counseling', 'mental health', 'wellness',
  'veterinarian', 'vet', 'pet care', 'animal health',
  'pharmacist', 'pharmacy', 'drug', 'medication',
  'nurse', 'clinical', 'patient',
  
  // Legal - liability risk
  'lawyer', 'legal', 'attorney', 'law', 'court', 'judge',
  'contract', 'litigation', 'defense', 'prosecutor',
  'public defender', 'legal advice', 'legal document',
  
  // Financial - liability risk
  'trader', 'trading', 'invest', 'investment', 'stock', 'crypto',
  'financial advisor', 'finance', 'portfolio', 'market analysis',
  'credit score', 'tax', 'taxes', 'accounting',
  'insurance', 'claims',
  
  // Predictions/Fortune - liability risk
  'fortune', 'fortune teller', 'predict', 'prediction', 'prophecy',
  'psychic', 'tarot', 'astrology', 'horoscope', 'divination',
  'probability', 'future', 'forecast',
  'dream interpret', 'dream analysis',
  
  // Historical figures - persona simulation
  'historical', 'history', 'time machine', 'time travel',
  'celebrity', 'famous', 'titanic',
  
  // Safety/Inspection - professional liability
  'inspector', 'inspection', 'safety', 'compliance', 'audit',
  'firefighter', 'fire safety', 'emergency',
  
  // Professional services - liability risk
  'appraisal', 'valuation', 'appraiser',
  'real estate', 'property',
  
  // Persona simulations
  'gpt embodiment', 'speaks as', 'embodies', 'reborn',
  'chatline', 'talk to', 'speak with'
];

// Keywords that indicate 18+ adult content tools
const ADULT_CONTENT_KEYWORDS = [
  // Firearms/Weapons
  'firearm', 'firearms', 'gun', 'guns', 'weapon', 'weapons', 'ammunition', 'ammo',
  'shooting', 'rifle', 'pistol', 'handgun', 'shotgun',
  
  // Alcohol
  'alcohol', 'alcoholic', 'mixology', 'mixologist', 'bartender', 'cocktail', 'cocktails',
  'whiskey', 'vodka', 'rum', 'tequila', 'gin', 'bourbon', 'wine', 'beer', 'liquor',
  'bar', 'drinking', 'drunk',
  
  // Cannabis/Drugs
  'cannabis', 'marijuana', 'weed', 'hemp', 'cbd', 'thc', 'dispensary',
  
  // Gambling
  'gambling', 'casino', 'betting', 'poker', 'blackjack', 'slots',
  
  // Trading/Investment (financial risk)
  'day trading', 'forex', 'options trading', 'leverage',
  
  // Other adult topics
  'tobacco', 'cigarette', 'vape', 'vaping', 'nicotine'
];

// Check if a tool matches spiritual keywords
const isSpiritualTool = (tool: Tool): boolean => {
  const searchText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return SPIRITUALITY_KEYWORDS.some(keyword => searchText.includes(keyword.toLowerCase()));
};

// Check if a tool needs simulation tag for liability protection
const needsSimulationTag = (tool: Tool): boolean => {
  const searchText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return SIMULATION_KEYWORDS.some(keyword => searchText.includes(keyword.toLowerCase()));
};

// Check if a tool is 18+ adult content
const isAdultContent = (tool: Tool): boolean => {
  const searchText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return ADULT_CONTENT_KEYWORDS.some(keyword => searchText.includes(keyword.toLowerCase()));
};

// Apply spiritual and simulation tags to tools
export const applySpirtualTags = (tools: Tool[]): Tool[] => {
  return tools.map(tool => {
    const tags = [...(tool.tags || [])];
    const isSpiritual = isSpiritualTool(tool);
    const needsSimulation = needsSimulationTag(tool);
    const isAdult = isAdultContent(tool);
    
    // Add Spirituality tag to spiritual tools
    if (isSpiritual && !tags.includes('Spirituality')) {
      tags.push('Spirituality');
    }
    
    // Add Simulation tag to all liability-risk tools
    if (needsSimulation && !tags.includes('Simulation')) {
      tags.push('Simulation');
    }
    
    // Add 18+ tag to adult content tools
    if (isAdult && !tags.includes('18+')) {
      tags.push('18+');
    }
    
    // Spiritual simulation tools also get Spirituality tag
    if (needsSimulation && isSpiritual && !tags.includes('Spirituality')) {
      tags.push('Spirituality');
    }
    
    return { ...tool, tags };
  });
};
