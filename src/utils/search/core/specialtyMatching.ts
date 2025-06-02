
import { Tool } from "@/types/tools";

export const matchNameInsightTool = (tool: Tool, searchTerm: string): { score: number; matched: boolean } => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  let matched = false;

  // SPECIAL PRIORITY FOR NAME INSIGHT RESEARCH & PREDICTOR GPT - ABSOLUTE HIGHEST PRIORITY
  if (lowerSearchTerm.includes('name') || lowerSearchTerm.includes('meaning') || 
      lowerSearchTerm.includes('identity') || lowerSearchTerm.includes('personality') ||
      lowerSearchTerm.includes('numerology') || lowerSearchTerm.includes('insight')) {
    
    // Check if this is the Name Insight Research & Predictor GPT tool by title or URL
    if (tool.title.toLowerCase().includes('name insight research') || 
        tool.title.toLowerCase().includes('name meaning') ||
        tool.title.toLowerCase().includes('name predictor') ||
        tool.directUrl?.includes('whatsmynamegpt') ||
        (tool.title.toLowerCase().includes('name') && tool.title.toLowerCase().includes('insight'))) {
      matched = true;
      score += 25000; // Even higher priority for name searches
      console.log(`🎯 ABSOLUTE NAME MATCH FOUND: ${tool.title} with score ${score}`);
    }
    
    // Check description and tags for name-related content
    const nameKeywords = ['name analysis', 'personality insights', 'numerology', 'cultural significance', 'name meaning', 'identity', 'personal discovery'];
    for (const keyword of nameKeywords) {
      if (tool.description.toLowerCase().includes(keyword) || 
          tool.tags?.some(tag => tag.toLowerCase().includes(keyword))) {
        matched = true;
        score += 10000;
      }
    }
  }

  return { score, matched };
};
