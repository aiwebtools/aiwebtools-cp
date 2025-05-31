
import { Tool } from "@/types/tools";

export const getAIDevelopmentPlatformsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔍 Getting AI Development & Platforms tools for category: "${categoryName}"`);
  
  // Get AI Web Tools GPTs first (priority)
  const aiWebToolsGPTs = tools.filter(tool => 
    tool.directUrl?.includes('lovable.app') || 
    tool.directUrl?.includes('aiwebtools')
  );
  
  // More specific matching for AI Development tools - exclude niche/specialized tools
  const aiDevelopmentTools = tools.filter(tool => {
    if (!tool.category) return false;
    
    const normalizedCategory = tool.category.toLowerCase().trim();
    const normalizedTitle = tool.title.toLowerCase();
    const normalizedDescription = tool.description.toLowerCase();
    
    // Exclude tools that are clearly niche/specialized
    const isNicheTool = 
      normalizedTitle.includes('immortalize') ||
      normalizedTitle.includes('resurrect') ||
      normalizedTitle.includes('time machine') ||
      normalizedTitle.includes('historical') ||
      normalizedTitle.includes('spiritual') ||
      normalizedTitle.includes('mystical') ||
      normalizedTitle.includes('fortune') ||
      normalizedTitle.includes('tarot') ||
      normalizedTitle.includes('psychic') ||
      normalizedDescription.includes('spiritual') ||
      normalizedDescription.includes('mystical') ||
      normalizedDescription.includes('supernatural');
    
    if (isNicheTool) return false;
    
    // Only include tools that are clearly AI development related
    const isAIDevelopment = 
      normalizedCategory.includes('ai development') ||
      normalizedCategory.includes('developer') ||
      normalizedCategory.includes('development') ||
      normalizedCategory.includes('coding') ||
      normalizedCategory.includes('programming') ||
      (normalizedCategory.includes('ai tools') && (
        normalizedTitle.includes('development') ||
        normalizedTitle.includes('coding') ||
        normalizedTitle.includes('programming') ||
        normalizedTitle.includes('api') ||
        normalizedTitle.includes('sdk') ||
        normalizedTitle.includes('framework') ||
        normalizedTitle.includes('platform') ||
        normalizedTitle.includes('github') ||
        normalizedTitle.includes('copilot')
      ));
    
    return isAIDevelopment;
  });
  
  // Combine with AI Web Tools GPTs that are development-related first
  const developmentRelatedGPTs = aiWebToolsGPTs.filter(tool => {
    const normalizedTitle = tool.title.toLowerCase();
    const normalizedDescription = tool.description.toLowerCase();
    
    return normalizedTitle.includes('engineering') ||
           normalizedTitle.includes('developer') ||
           normalizedTitle.includes('coding') ||
           normalizedDescription.includes('development') ||
           normalizedDescription.includes('engineering') ||
           normalizedDescription.includes('technical');
  });
  
  // Remove duplicates and combine
  const allDevelopmentTools = [
    ...developmentRelatedGPTs,
    ...aiDevelopmentTools.filter(tool => 
      !developmentRelatedGPTs.some(gpt => gpt.title === tool.title)
    )
  ];
  
  console.log(`✅ Found ${allDevelopmentTools.length} AI development & platforms tools`);
  return allDevelopmentTools;
};
