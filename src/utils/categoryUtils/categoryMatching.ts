import { Tool } from "@/types/tools";

export const getImageAndDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎨 Getting Image & Design tools for category: ${categoryName}`);
  
  const imageDesignTools = tools.filter(tool => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    
    // Include tools that are specifically image and design related
    const isImageDesignTool = 
      lowerCategory.includes('image') ||
      lowerCategory.includes('design') ||
      lowerCategory.includes('photo') ||
      lowerCategory.includes('graphic') ||
      lowerTitle.includes('design') ||
      lowerTitle.includes('image') ||
      lowerTitle.includes('photo') ||
      lowerTitle.includes('graphic') ||
      lowerTitle.includes('logo') ||
      lowerTitle.includes('palette') ||
      lowerTitle.includes('sketch') ||
      lowerTitle.includes('tattoo') ||
      lowerTitle.includes('avatar') ||
      lowerTitle.includes('meme') ||
      lowerDescription.includes('design') ||
      lowerDescription.includes('image') ||
      lowerDescription.includes('photo') ||
      lowerDescription.includes('graphic') ||
      lowerDescription.includes('visual design') ||
      lowerDescription.includes('logo design') ||
      lowerDescription.includes('graphic design') ||
      // Also include video/entertainment tools but they'll be deprioritized
      lowerTitle.includes('movie maker studio') ||
      lowerTitle.includes('music video maker') ||
      lowerTitle.includes('stagemaster');
    
    if (isImageDesignTool) {
      console.log(`✅ Including in Image & Design: ${tool.title}`);
      return true;
    }
    
    return false;
  });

  // Sort tools to prioritize actual image generators first
  return imageDesignTools.sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    
    // Deprioritize video/entertainment tools (send to bottom)
    const aIsVideoTool = aTitle.includes('movie') || aTitle.includes('music video') || 
                       aTitle.includes('stage') || aTitle.includes('performing');
    const bIsVideoTool = bTitle.includes('movie') || bTitle.includes('music video') || 
                       bTitle.includes('stage') || bTitle.includes('performing');
    
    if (aIsVideoTool && !bIsVideoTool) return 1; // a goes after b
    if (!aIsVideoTool && bIsVideoTool) return -1; // a goes before b
    
    // Prioritize core image generation tools at the top
    const aIsImageGen = aTitle.includes('image') || aTitle.includes('photo') || 
                       aTitle.includes('graphic') || aTitle.includes('logo') ||
                       a.description.toLowerCase().includes('image generation') ||
                       a.description.toLowerCase().includes('ai image');
    const bIsImageGen = bTitle.includes('image') || bTitle.includes('photo') || 
                       bTitle.includes('graphic') || bTitle.includes('logo') ||
                       b.description.toLowerCase().includes('image generation') ||
                       b.description.toLowerCase().includes('ai image');
    
    if (aIsImageGen && !bIsImageGen) return -1; // a goes before b
    if (!aIsImageGen && bIsImageGen) return 1; // a goes after b
    
    // Default sort by rating (highest first)
    return (b.rating || 0) - (a.rating || 0);
  });
};

export const getDataAnalyticsTools = (tools: Tool[], categoryName: string): Tool[] => {
  return tools.filter(tool => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    
    return lowerCategory.includes('data') || 
           lowerCategory.includes('analytics') ||
           lowerCategory.includes('research') ||
           lowerTitle.includes('data') ||
           lowerTitle.includes('analytics') ||
           lowerTitle.includes('research') ||
           lowerDescription.includes('data analysis') ||
           lowerDescription.includes('analytics') ||
           lowerDescription.includes('research');
  });
};

export const getMarketingSalesTools = (tools: Tool[], categoryName: string): Tool[] => {
  return tools.filter(tool => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    
    return lowerCategory.includes('marketing') ||
           lowerCategory.includes('sales') ||
           lowerCategory.includes('business') ||
           lowerTitle.includes('marketing') ||
           lowerTitle.includes('sales') ||
           lowerTitle.includes('business') ||
           lowerDescription.includes('marketing') ||
           lowerDescription.includes('sales') ||
           lowerDescription.includes('business');
  });
};

export const getCommunicationCollaborationTools = (tools: Tool[], categoryName: string): Tool[] => {
  return tools.filter(tool => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    
    return lowerCategory.includes('communication') ||
           lowerCategory.includes('collaboration') ||
           lowerTitle.includes('communication') ||
           lowerTitle.includes('collaboration') ||
           lowerTitle.includes('chat') ||
           lowerDescription.includes('communication') ||
           lowerDescription.includes('collaboration');
  });
};

export const getAutomationPlatformsTools = (tools: Tool[], categoryName: string): Tool[] => {
  return tools.filter(tool => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    
    return lowerCategory.includes('automation') ||
           lowerCategory.includes('workflow') ||
           lowerTitle.includes('automation') ||
           lowerTitle.includes('workflow') ||
           lowerDescription.includes('automation') ||
           lowerDescription.includes('workflow');
  });
};
