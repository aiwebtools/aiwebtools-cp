
import { Tool } from "@/types/tools";

export const matchIndustrySpecific = (tool: Tool, searchTerm: string): boolean => {
  const searchLower = searchTerm.toLowerCase();
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // If user searches for "industry specific" or "industry tools"
  if (searchLower.includes('industry specific') || 
      searchLower.includes('industry tools') ||
      searchLower.includes('professional tools')) {
    
    // EXCLUDE creative/entertainment tools
    const excludeKeywords = [
      'art', 'creative', 'entertainment', 'game', 'movie', 'music', 'fun',
      'personal', 'lifestyle', 'dream', 'story', 'book', 'trivia', 'fortune',
      'time machine', 'history', 'celebrity', 'avatar', 'meme', 'tattoo',
      'coloring', 'sketch', 'imagination', 'fantasy', 'spiritual', 'mystical'
    ];
    
    const isExcluded = excludeKeywords.some(keyword => 
      titleLower.includes(keyword) || 
      descriptionLower.includes(keyword)
    );
    
    if (isExcluded) {
      return false;
    }
    
    // INCLUDE professional/industry tools
    const industryKeywords = [
      'medical', 'healthcare', 'doctor', 'legal', 'lawyer', 'attorney',
      'financial', 'accounting', 'engineering', 'professional', 'business',
      'corporate', 'enterprise', 'consultant', 'advisor', 'specialist',
      'expert', 'analyst', 'manager', 'administrator', 'supervisor',
      'technician', 'inspector', 'agent', 'representative', 'coordinator'
    ];
    
    const isIndustryMatch = industryKeywords.some(keyword => 
      titleLower.includes(keyword) || 
      descriptionLower.includes(keyword) ||
      categoryLower.includes(keyword)
    );
    
    return isIndustryMatch;
  }
  
  return false;
};

export const scoreIndustrySpecific = (tool: Tool, searchTerm: string): number => {
  let score = 0;
  const searchLower = searchTerm.toLowerCase();
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  
  // High score for professional/industry terms in title
  if (titleLower.includes('professional') || titleLower.includes('expert') || 
      titleLower.includes('specialist') || titleLower.includes('consultant')) {
    score += 50;
  }
  
  // Score for specific industries
  const industries = ['medical', 'legal', 'financial', 'engineering', 'healthcare'];
  industries.forEach(industry => {
    if (titleLower.includes(industry) || descriptionLower.includes(industry)) {
      score += 30;
    }
  });
  
  // Bonus for GPT tools that are clearly professional
  if (titleLower.includes('gpt') && 
      (titleLower.includes('professional') || titleLower.includes('expert'))) {
    score += 20;
  }
  
  return score;
};
