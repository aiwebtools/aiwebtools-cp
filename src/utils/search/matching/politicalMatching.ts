
import { Tool } from "@/types/tools";

// Political activism and government specific matching - ENHANCED FOR SEARCH BAR
export const matchPolitical = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const politicalKeywords = [
    'political', 'politics', 'activism', 'government', 'civic', 'democracy',
    'legislation', 'policy', 'advocacy', 'campaign', 'voting', 'election',
    'grassroots', 'organizing', 'we the people', 'legislative', 'congress',
    'senate', 'house', 'representative', 'senator', 'politician', 'political action',
    'civic engagement', 'public policy', 'government affairs', 'lobbying',
    'political strategy', 'voter engagement', 'political organizing', 'legislator',
    'wethepeople', 'civic power', 'political activism', 'civic activism',
    'testimony', 'public testimony', 'testimony writer', 'legislative testimony'
  ];
  
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || []),
    tool.directUrl || ''
  ].join(' ').toLowerCase();
  
  // Special handling for Public Testimony Writer GPT
  if (tool.title.toLowerCase().includes('public testimony writer') ||
      tool.title.toLowerCase().includes('testimony writer') ||
      tool.directUrl?.includes('publictestimonywriter')) {
    return true;
  }
  
  // Check if search term contains political keywords OR if tool contains political content
  const searchContainsPolitical = politicalKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );
  
  const toolContainsPolitical = politicalKeywords.some(keyword => 
    searchableText.includes(keyword)
  );
  
  // Match if either the search is political OR the tool is political
  return searchContainsPolitical || toolContainsPolitical;
};

export const scorePolitical = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  const searchableText = [
    tool.title,
    tool.description,
    ...(tool.tags || []),
    tool.directUrl || ''
  ].join(' ').toLowerCase();
  
  // Special high priority for Public Testimony Writer GPT
  if (tool.title.toLowerCase().includes('public testimony writer') ||
      tool.title.toLowerCase().includes('testimony writer') ||
      tool.directUrl?.includes('publictestimonywriter')) {
    score += 30000; // Highest priority for testimony-related searches
  }
  
  // Check if this is a political/civic tool specifically
  if (tool.title.toLowerCase().includes('we the people') || 
      tool.title.toLowerCase().includes('legislat') ||
      tool.title.toLowerCase().includes('political') ||
      tool.title.toLowerCase().includes('civic') ||
      tool.title.toLowerCase().includes('politician') ||
      tool.title.toLowerCase().includes('testimony') ||
      tool.description.toLowerCase().includes('political activism') ||
      tool.description.toLowerCase().includes('civic engagement') ||
      tool.description.toLowerCase().includes('testimony') ||
      tool.directUrl?.includes('legislator')) {
    score += 25000; // Very high priority for political searches
  }
  
  // High-value political keywords in search term
  const highValueKeywords = ['political', 'activism', 'democracy', 'legislation', 'we the people', 'civic', 'testimony'];
  for (const keyword of highValueKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 8000;
      }
      if (tool.description.toLowerCase().includes(keyword)) {
        score += 5000;
      }
      if (tool.tags?.some(tag => tag.toLowerCase().includes(keyword))) {
        score += 3000;
      }
    }
  }
  
  // Medium-value political keywords
  const mediumValueKeywords = ['government', 'policy', 'advocacy', 'campaign', 'organizing', 'legislator', 'public testimony'];
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
  
  // Special scoring for testimony-related searches
  if (lowerSearchTerm.includes('testimony') || lowerSearchTerm.includes('public testimony')) {
    if (tool.title.toLowerCase().includes('testimony')) {
      score += 12000;
    }
    if (tool.description.toLowerCase().includes('testimony')) {
      score += 8000;
    }
  }
  
  // Boost score if tool is political and search is general
  if (searchableText.includes('political') || searchableText.includes('civic') || 
      searchableText.includes('legislation') || searchableText.includes('activism') ||
      searchableText.includes('testimony')) {
    score += 2000;
  }
  
  return score;
};
