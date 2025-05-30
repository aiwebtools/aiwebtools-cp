
import { Tool } from "@/types/tools";
import { allTools } from "@/data/toolsData";

export const getContextAwareSimilarTools = (
  currentTools: Tool[], 
  searchTerm: string = "", 
  selectedCategory: string | null = null,
  minRecommendations: number = 6
): Tool[] => {
  // If we already have enough tools, return empty array
  if (currentTools.length >= minRecommendations) {
    return [];
  }

  const currentToolTitles = new Set(currentTools.map(tool => tool.title));
  
  // Get your AI Web Tools LLC creations for strategic placement
  const aiWebToolsCreations = allTools.filter(tool => 
    tool.directUrl?.includes('lovable.app') && 
    !currentToolTitles.has(tool.title)
  );
  
  // Find similar tools based on search context or category
  const similarTools = allTools.filter(tool => {
    // Skip if already in current tools
    if (currentToolTitles.has(tool.title)) return false;
    
    // If user searched for something, prioritize tools matching search terms
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      const toolText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ') || ''}`.toLowerCase();
      
      // Check if tool matches search keywords
      const searchWords = lowerSearchTerm.split(' ').filter(word => word.length > 2);
      const hasSearchMatch = searchWords.some(word => toolText.includes(word));
      
      if (hasSearchMatch) return true;
    }
    
    // If user selected a category, prioritize tools from similar categories
    if (selectedCategory) {
      if (tool.category === selectedCategory) return true;
      
      // Find tools from related categories
      const relatedCategories = getRelatedCategories(selectedCategory);
      if (relatedCategories.includes(tool.category || '')) return true;
    }
    
    // Fallback: check for similar categories from current tools
    const currentCategories = new Set(currentTools.map(t => t.category));
    if (currentCategories.has(tool.category)) return true;
    
    // Check for shared tags
    const currentTags = new Set(
      currentTools.flatMap(t => t.tags || []).map(tag => tag.toLowerCase())
    );
    if (tool.tags?.some(tag => currentTags.has(tag.toLowerCase()))) return true;
    
    return false;
  });

  // Strategic mixing: Include 1-2 of your tools in every recommendation set
  const needed = minRecommendations - currentTools.length;
  const aiWebToolsToInclude = Math.min(Math.ceil(needed * 0.3), 2); // 30% or max 2 tools
  const regularToolsNeeded = needed - aiWebToolsToInclude;
  
  // Select your tools strategically
  const selectedAIWebTools = aiWebToolsCreations
    .sort(() => Math.random() - 0.5)
    .slice(0, aiWebToolsToInclude);
  
  // Select other similar tools
  const selectedSimilarTools = similarTools
    .filter(tool => !aiWebToolsCreations.some(awt => awt.title === tool.title))
    .sort(() => Math.random() - 0.5)
    .slice(0, regularToolsNeeded);
  
  // Combine and shuffle for natural distribution
  const finalTools = [...selectedAIWebTools, ...selectedSimilarTools]
    .sort(() => Math.random() - 0.5);
  
  return finalTools.slice(0, needed);
};

// Helper function to get related categories
const getRelatedCategories = (category: string): string[] => {
  const categoryGroups: Record<string, string[]> = {
    "AI Chat": ["AI Assistants", "Conversational AI", "Customer Service"],
    "AI Assistants": ["AI Chat", "Productivity", "Business"],
    "Content Creation": ["Writing", "Marketing", "Design"],
    "Writing": ["Content Creation", "Marketing", "Education"],
    "Image Generation": ["Design", "Art", "Creative"],
    "Design": ["Image Generation", "Creative", "Art"],
    "Video": ["Content Creation", "Entertainment", "Marketing"],
    "Audio": ["Music", "Content Creation", "Entertainment"],
    "Business": ["Productivity", "Sales", "Marketing"],
    "Productivity": ["Business", "Automation", "AI Assistants"],
    "Education": ["Learning", "Research", "Writing"],
    "Healthcare": ["Medical", "Wellness", "Research"],
    "Development": ["Programming", "Web Development", "AI Tools"],
    "Research": ["Education", "Academic", "Data Analysis"],
    "Entertainment": ["Games", "Fun", "Creative"],
    "Finance": ["Business", "Analytics", "Trading"],
    "Marketing": ["Business", "Content Creation", "Sales"],
    "E-commerce": ["Business", "Marketing", "Sales"]
  };

  return categoryGroups[category] || [];
};

export const shouldShowSimilarTools = (toolsCount: number, minRecommendations: number = 6): boolean => {
  return toolsCount < minRecommendations && toolsCount > 0;
};
