
import { Tool } from "@/types/tools";

// Political activism and government specific matching
export const matchPolitical = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const politicalKeywords = [
    'political', 'politics', 'activism', 'government', 'civic', 'democracy',
    'legislation', 'policy', 'advocacy', 'campaign', 'voting', 'election',
    'grassroots', 'organizing', 'we the people', 'legislative', 'congress',
    'senate', 'house', 'representative', 'senator', 'politician', 'political action',
    'civic engagement', 'public policy', 'government affairs', 'lobbying',
    'political strategy', 'voter engagement', 'political organizing'
  ];
  
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return politicalKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || searchableText.includes(keyword)
  );
};

export const scorePolitical = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // Check if this is the WE THE PEOPLE AI tool specifically
  if (tool.title.toLowerCase().includes('we the people ai') || 
      tool.title.toLowerCase().includes('legislation writer') ||
      tool.description.toLowerCase().includes('political activism') ||
      tool.description.toLowerCase().includes('civic engagement power hub')) {
    score += 25000; // Very high priority for political searches
  }
  
  // High-value political keywords
  const highValueKeywords = ['political', 'activism', 'democracy', 'legislation', 'we the people'];
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
  
  // Medium-value political keywords
  const mediumValueKeywords = ['government', 'civic', 'policy', 'advocacy', 'campaign', 'organizing'];
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
  
  // Special scoring for "WE THE PEOPLE" phrase
  if (lowerSearchTerm.includes('we the people') || lowerSearchTerm.includes('wethepeople')) {
    if (tool.title.toLowerCase().includes('we the people')) {
      score += 15000;
    }
    if (tool.description.toLowerCase().includes('we the people')) {
      score += 10000;
    }
  }
  
  return score;
};
