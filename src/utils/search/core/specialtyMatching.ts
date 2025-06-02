
import { Tool } from "@/types/tools";

export const matchNameInsightTool = (tool: Tool, searchTerm: string): { score: number; matched: boolean } => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  let matched = false;

  console.log(`🏷️ Checking tool "${tool.title}" for name search "${searchTerm}"`);

  // SPECIAL PRIORITY FOR NAME INSIGHT RESEARCH & PREDICTOR GPT - ABSOLUTE HIGHEST PRIORITY
  if (lowerSearchTerm.includes('name') || lowerSearchTerm.includes('meaning') || 
      lowerSearchTerm.includes('identity') || lowerSearchTerm.includes('personality') ||
      lowerSearchTerm.includes('numerology') || lowerSearchTerm.includes('insight')) {
    
    console.log(`🏷️ Name-related search detected for: ${tool.title}`);
    
    // Enhanced checking for Name Insight tool with multiple possible title variations
    const titleLower = tool.title.toLowerCase();
    const isNameInsightTool = (
      titleLower.includes('name insight research') || 
      titleLower.includes('name insight research & predictor') ||
      titleLower.includes('name meaning') ||
      titleLower.includes('name predictor') ||
      tool.directUrl?.includes('whatsmynamegpt') ||
      (titleLower.includes('name') && titleLower.includes('insight')) ||
      (titleLower.includes('name') && titleLower.includes('research')) ||
      (titleLower.includes('name') && titleLower.includes('predictor'))
    );
    
    if (isNameInsightTool) {
      matched = true;
      score += 50000; // Ultra high priority for name searches
      console.log(`🎯 ABSOLUTE NAME MATCH FOUND: ${tool.title} with score ${score}`);
    }
    
    // Check description and tags for name-related content
    const nameKeywords = ['name analysis', 'personality insights', 'numerology', 'cultural significance', 'name meaning', 'identity', 'personal discovery'];
    for (const keyword of nameKeywords) {
      if (tool.description.toLowerCase().includes(keyword) || 
          tool.tags?.some(tag => tag.toLowerCase().includes(keyword))) {
        matched = true;
        score += 15000;
        console.log(`🏷️ Name keyword "${keyword}" found in ${tool.title}, adding 15000 to score`);
      }
    }
    
    // Extra broad matching for any tool with "name" in title or description when searching for "name"
    if (lowerSearchTerm === 'name' || lowerSearchTerm === 'names') {
      if (titleLower.includes('name') || tool.description.toLowerCase().includes('name')) {
        matched = true;
        score += 8000;
        console.log(`🏷️ Broad name match for ${tool.title}, adding 8000 to score`);
      }
    }
  }

  console.log(`🏷️ Final result for "${tool.title}": matched=${matched}, score=${score}`);
  return { score, matched };
};
