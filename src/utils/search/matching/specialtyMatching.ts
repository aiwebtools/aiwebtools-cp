
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
