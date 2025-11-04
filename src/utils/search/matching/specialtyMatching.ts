
import { Tool } from "@/types/tools";

// Farming/Agriculture specific matching
export const matchFarming = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const farmingKeywords = [
    'agro', 'farming', 'agriculture', 'crop', 'soil', 'irrigation', 
    'pest control', 'harvest', 'cultivation', 'agronomist', 'agricultural',
    'farm management', 'precision farming', 'sustainable farming', 'farm', 'farms',
    'find farm', 'find farms', 'farm finder', 'farming tools'
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
  const lowerTitle = tool.title.toLowerCase();
  let score = 0;
  
  // ULTIMATE PRIORITY: "find farm" or "find farms" searches should show Farm Finder GPT first
  if ((lowerSearchTerm.includes('find') && (lowerSearchTerm.includes('farm') || lowerSearchTerm.includes('farms'))) ||
      lowerSearchTerm.includes('farm finder')) {
    if (lowerTitle.includes('farm finder') || tool.directUrl?.includes('farmfinder')) {
      score += 35000; // Highest priority for Farm Finder GPT on "find farm" searches
    }
  }
  
  // Check if this is the Farm Finder GPT specifically for any farm-related search
  if (lowerTitle.includes('farm finder') || tool.directUrl?.includes('farmfinder')) {
    if (lowerSearchTerm.includes('farm') || lowerSearchTerm.includes('farms')) {
      score += 28000; // Very high priority for farm searches
    }
  }
  
  // Check if this is the Agronomus tool specifically
  if (tool.title.toLowerCase().includes('agronomus') || 
      tool.title.toLowerCase().includes('farming expert') ||
      tool.directUrl?.includes('agronomus.lovable.app')) {
    score += 25000; // Very high priority for farming searches
  }
  
  // High-value farming keywords with enhanced "farm/farms" detection
  const highValueKeywords = ['agro', 'farming', 'agriculture', 'agronomist', 'farm', 'farms'];
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
  const mediumValueKeywords = ['crop', 'soil', 'irrigation', 'pest control', 'cultivation', 'find farm'];
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

// Spiritual/Mystical specific matching - OPTIMIZED FOR ACCURACY
export const matchSpiritual = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  
  // Only match if the search term contains spiritual keywords
  const spiritualKeywords = [
    'soul', 'map', 'gematria', 'numerology', 'astrology', 'spiritual', 'mystical',
    'essence', 'blueprint', 'soul mapping', 'divine', 'cosmic', 'metaphysical',
    'energy', 'chakra', 'meditation', 'enlightenment', 'wisdom', 'philosophy',
    'tarot', 'crystals', 'healing', 'consciousness', 'manifestation',
    'god', 'gods', 'deities', 'deity', 'religious', 'religion', 'faith', 'prayer'
  ];
  
  // STRICT CHECK: Only match if search term contains spiritual keywords
  const searchContainsSpiritualKeywords = spiritualKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );
  
  if (!searchContainsSpiritualKeywords) {
    return false; // Don't match spiritual tools for non-spiritual searches
  }
  
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  // Enhanced matching for god-related searches only when searching for "god"
  if (lowerSearchTerm.includes('god') && (
    tool.title.toLowerCase().includes('gods') ||
    tool.title.toLowerCase().includes('talk to the gods') ||
    searchableText.includes('gods') ||
    searchableText.includes('deities')
  )) {
    return true;
  }
  
  // Only return true if tool actually contains spiritual content
  return spiritualKeywords.some(keyword => searchableText.includes(keyword));
};

export const scoreSpiritual = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // REDUCED: More reasonable boost for "TALK TO THE GODS GPT" on god searches
  if ((lowerSearchTerm.includes('god') || lowerSearchTerm.includes('gods')) && 
      (tool.title.toLowerCase().includes('talk to the gods') || 
       tool.title.toLowerCase().includes('gods gpt'))) {
    score += 15000; // Reduced from 50000 to 15000
  }
  
  // Check if this is the Soul Map GPT specifically
  if (tool.title.toLowerCase().includes('soul map') || 
      tool.title.toLowerCase().includes('soul scan') ||
      tool.description.toLowerCase().includes('gematria')) {
    score += 12000; // Reduced from 25000 to 12000
  }
  
  // High-value spiritual keywords
  const highValueKeywords = ['soul', 'gematria', 'numerology', 'astrology', 'spiritual', 'soul mapping', 'god', 'gods', 'deities'];
  for (const keyword of highValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 4000; // Reduced from 8000
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 2500; // Reduced from 5000
      }
    }
  }
  
  // Medium-value spiritual keywords
  const mediumValueKeywords = ['mystical', 'essence', 'blueprint', 'divine', 'cosmic', 'metaphysical'];
  for (const keyword of mediumValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 2000; // Reduced from 4000
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 1250; // Reduced from 2500
      }
    }
  }
  
  return score;
};

// Paranormal/Phenomenon specific matching - OPTIMIZED FOR ACCURACY
export const matchParanormal = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  
  const paranormalKeywords = [
    'phenomenon', 'paranormal', 'ufo', 'ghost', 'ghosthunting', 'supernatural',
    'unexplained', 'mysterious', 'cryptid', 'investigation', 'investigator',
    'explorer', 'phenomena', 'spirits', 'haunted', 'occult', 'mystical',
    'alien', 'extraterrestrial', 'sighting', 'encounter', 'poltergeist',
    'apparition', 'specter', 'phantom'
  ];
  
  // STRICT CHECK: Only match if search term contains paranormal keywords
  const searchContainsParanormalKeywords = paranormalKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );
  
  if (!searchContainsParanormalKeywords) {
    return false; // Don't match paranormal tools for non-paranormal searches
  }
  
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return paranormalKeywords.some(keyword => searchableText.includes(keyword));
};

export const scoreParanormal = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // Check if this is the Phenomenon Explorer AI Suite specifically
  if (tool.title.toLowerCase().includes('phenomenon explorer') || 
      tool.title.toLowerCase().includes('phenomenon investigator') ||
      tool.directUrl?.includes('phenomenonexplorer.lovable.app')) {
    score += 15000; // Reduced from 30000
  }
  
  // High-value paranormal keywords that should prioritize Phenomenon Explorer
  const highValueKeywords = ['ufo', 'ghost', 'paranormal', 'phenomenon', 'supernatural', 'unexplained'];
  for (const keyword of highValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      // Give reasonable boost to Phenomenon Explorer for these searches
      if (tool.title.toLowerCase().includes('phenomenon') || 
          tool.directUrl?.includes('phenomenonexplorer.lovable.app')) {
        score += 8000; // Reduced from 25000
      }
      
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 4000; // Reduced from 8000
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 2500; // Reduced from 5000
      }
    }
  }
  
  // Medium-value paranormal keywords
  const mediumValueKeywords = ['investigation', 'investigator', 'explorer', 'cryptid', 'mysterious'];
  for (const keyword of mediumValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes('phenomenon') || 
          tool.directUrl?.includes('phenomenonexplorer.lovable.app')) {
        score += 5000; // Reduced from 15000
      }
      
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 2000; // Reduced from 4000
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 1250; // Reduced from 2500
      }
    }
  }
  
  return score;
};
