
import { Tool } from "@/types/tools";

// Farming/Agriculture specific matching
export const matchFarming = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const farmingKeywords = [
    'agro', 'farming', 'agriculture', 'crop', 'soil', 'irrigation', 
    'pest control', 'harvest', 'cultivation', 'agronomist', 'agricultural',
    'farm management', 'precision farming', 'sustainable farming'
  ];
  
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return farmingKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || searchableText.includes(keyword)
  );
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
  
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return healthKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || searchableText.includes(keyword)
  );
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
  
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return learningKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || searchableText.includes(keyword)
  );
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
  
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return medicalKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || searchableText.includes(keyword)
  );
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
  
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return travelKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || searchableText.includes(keyword)
  );
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
    'god', 'gods', 'deities', 'deity', 'religious', 'religion', 'faith', 'prayer',
    'mary magdalene', 'alan watts', 'sophia aeterna', 'oraculum', 'neo matrix',
    'immortalize', 'talk to history', 'talk to the gods'
  ];
  
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  console.log(`⚡ Checking spiritual match for "${tool.title}" with search "${searchTerm}"`);
  
  const matches = spiritualKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || searchableText.includes(keyword)
  );
  
  // Enhanced matching for god-related searches - catch ALL spiritual tools for "god" search
  if (lowerSearchTerm.includes('god')) {
    const titleLower = tool.title.toLowerCase();
    if (
      // Primary spiritual tools
      titleLower.includes('mary magdalene') || titleLower.includes('🕊️mary magdalene') ||
      titleLower.includes('talk to the gods') || titleLower.includes('gods gpt') ||
      titleLower.includes('alan watts') || titleLower.includes('sophia aeterna') ||
      titleLower.includes('oraculum') || 
      (titleLower.includes('neo') && titleLower.includes('matrix')) ||
      titleLower.includes('immortalizeme') || titleLower.includes('immortalize me') ||
      titleLower.includes('talk to history') || titleLower.includes('soul map') ||
      // Additional spiritual indicators
      searchableText.includes('gods') || searchableText.includes('deities') ||
      searchableText.includes('spiritual') || searchableText.includes('divine') ||
      searchableText.includes('mystical') || searchableText.includes('enlightenment')
    ) {
      console.log(`⚡ ENHANCED GOD MATCH FOUND: ${tool.title}`);
      return true;
    }
  }
  
  if (matches) {
    console.log(`⚡ SPIRITUAL MATCH FOUND: ${tool.title}`);
  }
  
  return matches;
};

export const scoreSpiritual = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  console.log(`⚡ Scoring spiritual tool "${tool.title}" for search "${searchTerm}"`);
  
  // PRIORITY ORDER for "god" searches - Mary Magdalene GPT FIRST
  if (lowerSearchTerm.includes('god') || lowerSearchTerm.includes('gods') || lowerSearchTerm.includes('divine')) {
    const titleLower = tool.title.toLowerCase();
    const descLower = tool.description.toLowerCase();
    
    // #1 PRIORITY: Talk to the Gods GPT - FIRST for god searches
    if (titleLower.includes('talk to the gods') || titleLower.includes('gods gpt')) {
      score += 100000;
      console.log(`⚡ TALK TO GODS GPT TOP PRIORITY: Adding 100000 to score for ${tool.title}`);
    }
    // #2 PRIORITY: Mary Magdalene GPT
    else if (titleLower.includes('mary magdalene') || titleLower.includes('🕊️mary magdalene')) {
      score += 95000;
      console.log(`⚡ MARY MAGDALENE GPT HIGH PRIORITY: Adding 95000 to score for ${tool.title}`);
    }
    // #3 PRIORITY: Alan Watts GPT
    else if (titleLower.includes('alan watts')) {
      score += 85000;
      console.log(`⚡ ALAN WATTS GPT HIGH PRIORITY: Adding 85000 to score for ${tool.title}`);
    }
    // #4 PRIORITY: Sophia Aeterna AI
    else if (titleLower.includes('sophia aeterna')) {
      score += 80000;
      console.log(`⚡ SOPHIA AETERNA HIGH PRIORITY: Adding 80000 to score for ${tool.title}`);
    }
    // #5 PRIORITY: Oraculum
    else if (titleLower.includes('oraculum') || descLower.includes('oraculum')) {
      score += 75000;
      console.log(`⚡ ORACULUM HIGH PRIORITY: Adding 75000 to score for ${tool.title}`);
    }
    // #6 PRIORITY: Neo Matrix GPT
    else if (titleLower.includes('neo') && (titleLower.includes('matrix') || titleLower.includes('👁️matrix'))) {
      score += 70000;
      console.log(`⚡ NEO MATRIX HIGH PRIORITY: Adding 70000 to score for ${tool.title}`);
    }
    // #7 PRIORITY: ImmortalizeME
    else if (titleLower.includes('immortalizeme') || titleLower.includes('immortalize me')) {
      score += 65000;
      console.log(`⚡ IMMORTALIZEME HIGH PRIORITY: Adding 65000 to score for ${tool.title}`);
    }
    // #8 PRIORITY: Talk to History GPT
    else if (titleLower.includes('talk to history')) {
      score += 60000;
      console.log(`⚡ TALK TO HISTORY HIGH PRIORITY: Adding 60000 to score for ${tool.title}`);
    }
    // Other spiritual tools get medium priority
    else if (titleLower.includes('soul map') || titleLower.includes('soul scan') || descLower.includes('gematria')) {
      score += 55000;
      console.log(`⚡ SOUL MAP HIGH PRIORITY: Adding 55000 to score for ${tool.title}`);
    }
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
  console.log(`🛸 Checking paranormal match for "${tool.title}" with search "${searchTerm}"`);
  
  const paranormalKeywords = [
    'phenomenon', 'paranormal', 'ufo', 'ghost', 'ghosthunting', 'supernatural',
    'unexplained', 'mysterious', 'cryptid', 'investigation', 'investigator',
    'explorer', 'phenomena', 'spirits', 'haunted', 'occult', 'mystical',
    'alien', 'extraterrestrial', 'sighting', 'encounter', 'poltergeist',
    'apparition', 'specter', 'phantom'
  ];
  
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  const matches = paranormalKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || searchableText.includes(keyword)
  );
  
  if (matches) {
    console.log(`🛸 PARANORMAL MATCH FOUND: ${tool.title}`);
  }
  
  return matches;
};

export const scoreParanormal = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  console.log(`🛸 Scoring paranormal for "${tool.title}" with search "${searchTerm}"`);
  
  // Check if this is the Phenomenon Explorer AI Suite specifically
  if (tool.title.toLowerCase().includes('phenomenon explorer') || 
      tool.title.toLowerCase().includes('phenomenon investigator') ||
      tool.directUrl?.includes('phenomenonexplorer.lovable.app')) {
    score += 30000; // Ultra high priority for paranormal/phenomenon searches
    console.log(`🛸 PHENOMENON EXPLORER DETECTED: Adding 30000 to score for ${tool.title}`);
  }
  
  // High-value paranormal keywords that should prioritize Phenomenon Explorer
  const highValueKeywords = ['ufo', 'ghost', 'paranormal', 'phenomenon', 'supernatural', 'unexplained'];
  for (const keyword of highValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      console.log(`🛸 High-value keyword "${keyword}" found in search`);
      
      // Give massive boost to Phenomenon Explorer for these searches
      if (tool.title.toLowerCase().includes('phenomenon') || 
          tool.directUrl?.includes('phenomenonexplorer.lovable.app')) {
        score += 25000;
        console.log(`🛸 PHENOMENON TOOL BOOST: Adding 25000 for ${tool.title}`);
      }
      
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 8000;
        console.log(`🛸 Title keyword match: Adding 8000 for ${tool.title}`);
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 5000;
        console.log(`🛸 Description keyword match: Adding 5000 for ${tool.title}`);
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
        console.log(`🛸 Medium keyword boost for phenomenon tool: Adding 15000 for ${tool.title}`);
      }
      
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 4000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 2500;
      }
    }
  }
  
  console.log(`🛸 Final paranormal score for "${tool.title}": ${score}`);
  return score;
};
