
import { Tool } from "@/types/tools";

// Travel specific matching
export const matchTravel = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const travelKeywords = [
    'travel', 'vacation', 'trip', 'holiday', 'tourism', 'flight', 
    'hotel', 'booking', 'destination', 'itinerary', 'journey',
    'travel agent', 'travel advisor', 'travel planning', 'getaway',
    'tour', 'adventure', 'explore', 'wanderlust', 'globe',
    'passport', 'luggage', 'backpack', 'cruise', 'safari'
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
