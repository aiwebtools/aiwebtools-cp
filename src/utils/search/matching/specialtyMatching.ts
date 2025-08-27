
import { Tool } from "@/types/tools";

// Farming/Agriculture specific matching
export const matchFarming = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const farmingKeywords = [
    'agro', 'farming', 'agriculture', 'crop', 'soil', 'irrigation', 
    'pest control', 'harvest', 'cultivation', 'agronomist', 'agricultural',
    'farm management', 'precision farming', 'sustainable farming'
  ];
  
  // FIXED: Only match if the SEARCH TERM contains farming keywords
  const searchTermHasFarmingKeywords = farmingKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );
  
  if (!searchTermHasFarmingKeywords) {
    return false;
  }
  
  // If search term has farming keywords, then check if tool is relevant
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  const toolHasFarmingContent = farmingKeywords.some(keyword => 
    searchableText.includes(keyword)
  );
  
  return toolHasFarmingContent;
};

export const scoreFarming = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // Check if this is the Agronomus tool specifically
  if (tool.title.toLowerCase().includes('agronomus') || 
      tool.title.toLowerCase().includes('farming expert') ||
      tool.directUrl?.includes('agronomus.lovable.app')) {
    score += 25000; // Very high priority for farming searches
  }
  
  // High-value farming keywords
  const highValueKeywords = ['agro', 'farming', 'agriculture', 'agronomist'];
  for (const keyword of highValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 8000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 5000;
      }
    }
  }
  
  // Medium-value farming keywords
  const mediumValueKeywords = ['crop', 'soil', 'irrigation', 'pest control', 'cultivation'];
  for (const keyword of mediumValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 4000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 2500;
      }
    }
  }
  
  return score;
};

// Health specific matching
export const matchHealth = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const healthKeywords = [
    'health', 'medical', 'doctor', 'wellness', 'healthcare', 'medicine',
    'diagnosis', 'treatment', 'therapy', 'clinical', 'patient', 'hospital'
  ];
  
  // FIXED: Only match if the SEARCH TERM contains health keywords
  const searchTermHasHealthKeywords = healthKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );
  
  if (!searchTermHasHealthKeywords) {
    return false;
  }
  
  // If search term has health keywords, then check if tool is relevant
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  const toolHasHealthContent = healthKeywords.some(keyword => 
    searchableText.includes(keyword)
  );
  
  return toolHasHealthContent;
};

export const scoreHealth = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // High-value health keywords
  const highValueKeywords = ['health', 'medical', 'doctor', 'wellness'];
  for (const keyword of highValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 6000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 4000;
      }
    }
  }
  
  return score;
};

// Learning specific matching
export const matchLearning = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const learningKeywords = [
    'learn', 'education', 'course', 'tutorial', 'training', 'study',
    'teaching', 'lesson', 'skill', 'knowledge', 'academic', 'school'
  ];
  
  // FIXED: Only match if the SEARCH TERM contains learning keywords
  const searchTermHasLearningKeywords = learningKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );
  
  if (!searchTermHasLearningKeywords) {
    return false;
  }
  
  // If search term has learning keywords, then check if tool is relevant
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  const toolHasLearningContent = learningKeywords.some(keyword => 
    searchableText.includes(keyword)
  );
  
  return toolHasLearningContent;
};

export const scoreLearning = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // High-value learning keywords
  const highValueKeywords = ['learn', 'education', 'course', 'tutorial'];
  for (const keyword of highValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 5000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 3000;
      }
    }
  }
  
  return score;
};

// Medical specific matching
export const matchMedical = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const medicalKeywords = [
    'medical', 'medicine', 'pharmaceutical', 'drug', 'prescription',
    'diagnosis', 'treatment', 'clinical', 'therapeutic', 'pharmacy'
  ];
  
  // FIXED: Only match if the SEARCH TERM contains medical keywords
  const searchTermHasMedicalKeywords = medicalKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );
  
  if (!searchTermHasMedicalKeywords) {
    return false;
  }
  
  // If search term has medical keywords, then check if tool is relevant
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  const toolHasMedicalContent = medicalKeywords.some(keyword => 
    searchableText.includes(keyword)
  );
  
  return toolHasMedicalContent;
};

export const scoreMedical = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // High-value medical keywords
  const highValueKeywords = ['medical', 'medicine', 'pharmaceutical', 'clinical'];
  for (const keyword of highValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 5500;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 3500;
      }
    }
  }
  
  return score;
};

// Travel specific matching
export const matchTravel = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const travelKeywords = [
    'travel', 'vacation', 'trip', 'holiday', 'tourism', 'flight', 
    'hotel', 'booking', 'destination', 'itinerary', 'journey',
    'travel agent', 'travel advisor', 'travel planning', 'getaway',
    'tour', 'adventure', 'explore', 'wanderlust', 'globe'
  ];
  
  // FIXED: Only match if the SEARCH TERM contains travel keywords
  const searchTermHasTravelKeywords = travelKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );
  
  if (!searchTermHasTravelKeywords) {
    return false;
  }
  
  // If search term has travel keywords, then check if tool is relevant
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  const toolHasTravelContent = travelKeywords.some(keyword => 
    searchableText.includes(keyword)
  );
  
  return toolHasTravelContent;
};

export const scoreTravel = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // Check if this is the Travel Advisor tool specifically
  if (tool.title.toLowerCase().includes('travel advisor') || 
      tool.title.toLowerCase().includes('travel agent') ||
      tool.directUrl?.includes('travelagentgpt.lovable.app')) {
    score += 25000; // Very high priority for travel searches
  }
  
  // High-value travel keywords
  const highValueKeywords = ['travel', 'vacation', 'trip', 'travel agent', 'travel advisor'];
  for (const keyword of highValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 8000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 5000;
      }
    }
  }
  
  // Medium-value travel keywords
  const mediumValueKeywords = ['holiday', 'tourism', 'destination', 'itinerary', 'booking'];
  for (const keyword of mediumValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 4000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 2500;
      }
    }
  }
  
  return score;
};

// Spiritual/Mystical specific matching
export const matchSpiritual = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const spiritualKeywords = [
    'soul', 'map', 'gematria', 'numerology', 'astrology', 'spiritual', 'mystical',
    'essence', 'blueprint', 'soul mapping', 'divine', 'cosmic', 'metaphysical',
    'energy', 'chakra', 'meditation', 'enlightenment', 'wisdom', 'philosophy',
    'tarot', 'crystals', 'healing', 'consciousness', 'manifestation',
    'god', 'gods', 'deities', 'deity', 'religious', 'religion', 'faith', 'prayer'
  ];
  
  // FIXED: Only match if the SEARCH TERM contains spiritual keywords
  // Don't match just because the tool contains spiritual content
  const searchTermHasSpiritualKeywords = spiritualKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );
  
  if (!searchTermHasSpiritualKeywords) {
    return false;
  }
  
  // If search term has spiritual keywords, then check if tool is relevant
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  const toolHasSpiritualContent = spiritualKeywords.some(keyword => 
    searchableText.includes(keyword)
  );
  
  // Enhanced matching for god-related searches
  if (lowerSearchTerm.includes('god') && (
    tool.title.toLowerCase().includes('gods') ||
    tool.title.toLowerCase().includes('talk to the gods') ||
    searchableText.includes('gods') ||
    searchableText.includes('deities')
  )) {
    return true;
  }
  
  return toolHasSpiritualContent;
};

export const scoreSpiritual = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  console.log(`⚡ Scoring spiritual tool "${tool.title}" for search "${searchTerm}"`);
  
  // ENHANCED: Special boost for "TALK TO THE GODS GPT" on god searches
  if ((lowerSearchTerm.includes('god') || lowerSearchTerm.includes('gods')) && 
      (tool.title.toLowerCase().includes('talk to the gods') || 
       tool.title.toLowerCase().includes('gods gpt'))) {
    score += 50000; // Massive boost for god searches
    console.log(`⚡ GODS GPT SUPER BOOST: Adding 50000 to score for ${tool.title}`);
  }
  
  // Check if this is the Soul Map GPT specifically
  if (tool.title.toLowerCase().includes('soul map') || 
      tool.title.toLowerCase().includes('soul scan') ||
      tool.description.toLowerCase().includes('gematria')) {
    score += 25000; // Very high priority for spiritual searches
  }
  
  // High-value spiritual keywords
  const highValueKeywords = ['soul', 'gematria', 'numerology', 'astrology', 'spiritual', 'soul mapping', 'god', 'gods', 'deities'];
  for (const keyword of highValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 8000;
        console.log(`⚡ High value keyword "${keyword}" found in title: Adding 8000`);
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 5000;
        console.log(`⚡ High value keyword "${keyword}" found in description: Adding 5000`);
      }
    }
  }
  
  // Medium-value spiritual keywords
  const mediumValueKeywords = ['mystical', 'essence', 'blueprint', 'divine', 'cosmic', 'metaphysical'];
  for (const keyword of mediumValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 4000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 2500;
      }
    }
  }
  
  console.log(`⚡ Final spiritual score for "${tool.title}": ${score}`);
  return score;
};

// Paranormal/Phenomenon specific matching
export const matchParanormal = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  
  const paranormalKeywords = [
    'phenomenon', 'paranormal', 'ufo', 'ghost', 'ghosthunting', 'supernatural',
    'unexplained', 'mysterious', 'cryptid', 'investigation', 'investigator',
    'explorer', 'phenomena', 'spirits', 'haunted', 'occult', 'mystical',
    'alien', 'extraterrestrial', 'sighting', 'encounter', 'poltergeist',
    'apparition', 'specter', 'phantom'
  ];
  
  // FIXED: Only match if the SEARCH TERM contains paranormal keywords
  const searchTermHasParanormalKeywords = paranormalKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );
  
  if (!searchTermHasParanormalKeywords) {
    return false;
  }
  
  // If search term has paranormal keywords, then check if tool is relevant
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  const toolHasParanormalContent = paranormalKeywords.some(keyword => 
    searchableText.includes(keyword)
  );
  
  return toolHasParanormalContent;
};

// Math/Science specific matching
export const matchMathScience = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const mathKeywords = [
    'math', 'mathematics', 'algebra', 'calculus', 'geometry', 'statistics', 'equation',
    'formula', 'calculation', 'algorithm', 'number', 'probability', 'trigonometry',
    'physics', 'chemistry', 'biology', 'science', 'scientific', 'research'
  ];
  
  // FIXED: Only match if the SEARCH TERM contains math/science keywords
  const searchTermHasMathKeywords = mathKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );
  
  if (!searchTermHasMathKeywords) {
    return false;
  }
  
  // If search term has math keywords, then check if tool is relevant
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  const toolHasMathContent = mathKeywords.some(keyword => 
    searchableText.includes(keyword)
  ) || 
  // Also check for specific math-related tools
  tool.title.toLowerCase().includes('algebraic') ||
  tool.title.toLowerCase().includes('expression') ||
  tool.title.toLowerCase().includes('inventor') ||
  tool.title.toLowerCase().includes('calculation') ||
  tool.title.toLowerCase().includes('probability') ||
  tool.category?.toLowerCase().includes('education') ||
  tool.category?.toLowerCase().includes('learning') ||
  tool.category?.toLowerCase().includes('research');
  
  return toolHasMathContent;
};

export const scoreMathScience = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // Check if this is the Algebraic Expression Inventor specifically
  if (tool.title.toLowerCase().includes('algebraic expression inventor') || 
      tool.title.toLowerCase().includes('probability gpt') ||
      tool.directUrl?.includes('algebraicexpressioninventor.lovable.app') ||
      tool.directUrl?.includes('probabilitygpt.lovable.app')) {
    score += 30000; // Very high priority for math searches
  }
  
  // High-value math keywords
  const highValueKeywords = ['math', 'mathematics', 'algebra', 'calculus', 'probability', 'equation', 'formula'];
  for (const keyword of highValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 8000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 5000;
      }
    }
  }
  
  // Medium-value science keywords
  const mediumValueKeywords = ['science', 'scientific', 'research', 'calculation', 'algorithm'];
  for (const keyword of mediumValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 4000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 2500;
      }
    }
  }
  
  return score;
};

export const scoreParanormal = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // Check if this is the Phenomenon Explorer AI Suite specifically
  if (tool.title.toLowerCase().includes('phenomenon explorer') || 
      tool.title.toLowerCase().includes('phenomenon investigator') ||
      tool.directUrl?.includes('phenomenonexplorer.lovable.app')) {
    score += 30000; // Ultra high priority for paranormal/phenomenon searches
  }
  
  // High-value paranormal keywords that should prioritize Phenomenon Explorer
  const highValueKeywords = ['ufo', 'ghost', 'paranormal', 'phenomenon', 'supernatural', 'unexplained'];
  for (const keyword of highValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      // Give massive boost to Phenomenon Explorer for these searches
      if (tool.title.toLowerCase().includes('phenomenon') || 
          tool.directUrl?.includes('phenomenonexplorer.lovable.app')) {
        score += 25000;
      }
      
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 8000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 5000;
      }
    }
  }
  
  // Medium-value paranormal keywords
  const mediumValueKeywords = ['investigation', 'investigator', 'explorer', 'cryptid', 'mysterious'];
  for (const keyword of mediumValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes('phenomenon') || 
          tool.directUrl?.includes('phenomenonexplorer.lovable.app')) {
        score += 15000;
      }
      
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 4000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 2500;
      }
    }
  }
  
  return score;
};

