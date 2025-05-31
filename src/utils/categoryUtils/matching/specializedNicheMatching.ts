
import { Tool } from "@/types/tools";

export const getSpecializedNicheTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔍 Getting Specialized & Niche tools for category: "${categoryName}"`);
  
  // Get AI Web Tools GPTs first (priority)
  const aiWebToolsGPTs = tools.filter(tool => 
    tool.directUrl?.includes('lovable.app') || 
    tool.directUrl?.includes('aiwebtools')
  );
  
  // Filter for specialized/niche tools
  const specializedTools = tools.filter(tool => {
    if (!tool.category) return false;
    
    const normalizedCategory = tool.category.toLowerCase().trim();
    const normalizedTitle = tool.title.toLowerCase();
    const normalizedDescription = tool.description.toLowerCase();
    
    // Check for niche/specialized keywords
    const isSpecializedTool = 
      normalizedCategory.includes('specialized') ||
      normalizedCategory.includes('niche') ||
      normalizedCategory.includes('mystical') ||
      normalizedCategory.includes('spiritual') ||
      normalizedCategory.includes('historical') ||
      normalizedCategory.includes('time') ||
      normalizedCategory.includes('unusual') ||
      normalizedCategory.includes('mysterious') ||
      normalizedTitle.includes('immortalize') ||
      normalizedTitle.includes('resurrect') ||
      normalizedTitle.includes('time machine') ||
      normalizedTitle.includes('historical') ||
      normalizedTitle.includes('spiritual') ||
      normalizedTitle.includes('mystical') ||
      normalizedTitle.includes('fortune') ||
      normalizedTitle.includes('tarot') ||
      normalizedTitle.includes('psychic') ||
      normalizedTitle.includes('phenomenon') ||
      normalizedTitle.includes('supernatural') ||
      normalizedDescription.includes('spiritual') ||
      normalizedDescription.includes('mystical') ||
      normalizedDescription.includes('supernatural') ||
      normalizedDescription.includes('paranormal');
    
    return isSpecializedTool;
  });
  
  // Get specialized AI Web Tools GPTs
  const specializedGPTs = aiWebToolsGPTs.filter(tool => {
    const normalizedTitle = tool.title.toLowerCase();
    const normalizedDescription = tool.description.toLowerCase();
    
    return normalizedTitle.includes('immortalize') ||
           normalizedTitle.includes('resurrect') ||
           normalizedTitle.includes('time machine') ||
           normalizedTitle.includes('historical') ||
           normalizedTitle.includes('spiritual') ||
           normalizedTitle.includes('mystical') ||
           normalizedTitle.includes('phenomenon') ||
           normalizedDescription.includes('spiritual') ||
           normalizedDescription.includes('mystical') ||
           normalizedDescription.includes('supernatural');
  });
  
  // Combine with priority for AI Web Tools GPTs
  const allSpecializedTools = [
    ...specializedGPTs,
    ...specializedTools.filter(tool => 
      !specializedGPTs.some(gpt => gpt.title === tool.title)
    )
  ];
  
  console.log(`✅ Found ${allSpecializedTools.length} specialized & niche tools`);
  return allSpecializedTools;
};
