import { Tool } from "@/types/tools";

export const getImageAndDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎨 Getting Image & Design tools for category: ${categoryName}`);
  
  return tools.filter(tool => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    
    // Exclude video, music, and performing arts tools explicitly
    const isVideoTool = lowerTitle.includes('video') || lowerTitle.includes('movie') || 
                       lowerDescription.includes('video') || lowerDescription.includes('movie') ||
                       lowerTitle.includes('film') || lowerDescription.includes('film');
    
    const isMusicTool = lowerTitle.includes('music') || lowerDescription.includes('music') ||
                       lowerTitle.includes('audio') || lowerDescription.includes('audio');
    
    const isPerformingArtsTool = lowerTitle.includes('stage') || lowerTitle.includes('performing') ||
                                lowerDescription.includes('stage') || lowerDescription.includes('performing');
    
    // Exclude these tools from Image & Design
    if (isVideoTool || isMusicTool || isPerformingArtsTool) {
      console.log(`🚫 Excluding from Image & Design: ${tool.title} (${isVideoTool ? 'video' : isMusicTool ? 'music' : 'performing arts'})`);
      return false;
    }
    
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
      lowerDescription.includes('graphic design');
    
    if (isImageDesignTool) {
      console.log(`✅ Including in Image & Design: ${tool.title}`);
      return true;
    }
    
    return false;
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
