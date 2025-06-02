
import { Tool } from "@/types/tools";

export const getImageAndDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎨 Getting Image & Design tools for category: ${categoryName}`);
  
  const imageDesignTools = tools.filter(tool => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    
    // Core image generation and design tools (HIGHEST PRIORITY)
    const isCoreImageTool = 
      lowerTitle.includes('image generator') ||
      lowerTitle.includes('photo generator') ||
      lowerTitle.includes('ai image') ||
      lowerTitle.includes('picture generator') ||
      lowerDescription.includes('image generation') ||
      lowerDescription.includes('ai image') ||
      lowerDescription.includes('generate images') ||
      lowerDescription.includes('create images');
    
    // Design-specific tools (HIGH PRIORITY)
    const isDesignTool = 
      lowerTitle.includes('graphic design') ||
      lowerTitle.includes('logo design') ||
      lowerTitle.includes('design') ||
      lowerTitle.includes('sketch') ||
      lowerTitle.includes('tattoo') ||
      lowerTitle.includes('palette') ||
      lowerTitle.includes('avatar') ||
      lowerTitle.includes('meme') ||
      lowerDescription.includes('design') ||
      lowerDescription.includes('graphic') ||
      lowerDescription.includes('visual design') ||
      lowerDescription.includes('logo design') ||
      lowerDescription.includes('graphic design');
    
    // Category-based inclusion
    const isCategoryMatch = 
      lowerCategory.includes('image') ||
      lowerCategory.includes('design') ||
      lowerCategory.includes('photo') ||
      lowerCategory.includes('graphic');
    
    // Video/Entertainment tools (LOWEST PRIORITY - only include if explicitly design-related)
    const isVideoEntertainmentTool = 
      lowerTitle.includes('movie maker studio') ||
      lowerTitle.includes('music video maker') ||
      lowerTitle.includes('stagemaster') ||
      lowerTitle.includes('video') ||
      lowerTitle.includes('music') ||
      lowerTitle.includes('stage') ||
      lowerTitle.includes('performing');
    
    // Include core image tools first, then design tools, then category matches
    if (isCoreImageTool || isDesignTool || isCategoryMatch) {
      console.log(`✅ Including in Image & Design: ${tool.title} (${isCoreImageTool ? 'core-image' : isDesignTool ? 'design' : 'category-match'})`);
      return true;
    }
    
    // Only include video/entertainment tools if they're explicitly design-related
    if (isVideoEntertainmentTool && (lowerDescription.includes('design') || lowerTitle.includes('design'))) {
      console.log(`✅ Including video/entertainment tool with design elements: ${tool.title}`);
      return true;
    }
    
    return false;
  });

  // Intelligent sorting with priority levels
  return imageDesignTools.sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    const aDesc = a.description.toLowerCase();
    const bDesc = b.description.toLowerCase();
    
    // Priority Level 1: Core AI Image Generators (TOP PRIORITY)
    const aIsCoreImage = aTitle.includes('image generator') || aTitle.includes('ai image') || 
                        aDesc.includes('image generation') || aDesc.includes('generate images');
    const bIsCoreImage = bTitle.includes('image generator') || bTitle.includes('ai image') || 
                        bDesc.includes('image generation') || bDesc.includes('generate images');
    
    if (aIsCoreImage && !bIsCoreImage) return -1;
    if (!aIsCoreImage && bIsCoreImage) return 1;
    
    // Priority Level 2: Design Tools (HIGH PRIORITY)
    const aIsDesign = aTitle.includes('design') || aTitle.includes('graphic') || 
                     aTitle.includes('logo') || aTitle.includes('sketch');
    const bIsDesign = bTitle.includes('design') || bTitle.includes('graphic') || 
                     bTitle.includes('logo') || bTitle.includes('sketch');
    
    if (aIsDesign && !bIsDesign) return -1;
    if (!aIsDesign && bIsDesign) return 1;
    
    // Priority Level 3: Photo/Image Tools (MEDIUM PRIORITY)
    const aIsPhoto = aTitle.includes('photo') || aTitle.includes('image') || aTitle.includes('picture');
    const bIsPhoto = bTitle.includes('photo') || bTitle.includes('image') || bTitle.includes('picture');
    
    if (aIsPhoto && !bIsPhoto) return -1;
    if (!aIsPhoto && bIsPhoto) return 1;
    
    // Priority Level 4: Video/Entertainment Tools (LOWEST PRIORITY)
    const aIsVideo = aTitle.includes('movie') || aTitle.includes('music video') || 
                    aTitle.includes('stage') || aTitle.includes('video') || aTitle.includes('music');
    const bIsVideo = bTitle.includes('movie') || bTitle.includes('music video') || 
                    bTitle.includes('stage') || bTitle.includes('video') || bTitle.includes('music');
    
    if (aIsVideo && !bIsVideo) return 1; // video tools go to bottom
    if (!aIsVideo && bIsVideo) return -1; // non-video tools go to top
    
    // Within same priority level, sort by rating
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
