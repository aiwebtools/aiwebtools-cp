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
    
    // Pure design-specific tools (HIGH PRIORITY)
    const isPureDesignTool = 
      lowerTitle.includes('graphic design') ||
      lowerTitle.includes('logo design') ||
      lowerTitle.includes('sketch') ||
      lowerTitle.includes('tattoo') ||
      lowerTitle.includes('palette') ||
      lowerTitle.includes('avatar') ||
      lowerTitle.includes('meme') ||
      (lowerTitle.includes('design') && !lowerTitle.includes('movie') && !lowerTitle.includes('music') && !lowerTitle.includes('video')) ||
      lowerDescription.includes('graphic design') ||
      lowerDescription.includes('logo design') ||
      lowerDescription.includes('visual design');
    
    // Category-based inclusion for actual image/design categories
    const isCategoryMatch = 
      lowerCategory.includes('image') ||
      (lowerCategory.includes('design') && !lowerCategory.includes('creative')) ||
      lowerCategory.includes('photo') ||
      lowerCategory.includes('graphic');
    
    // Video/Entertainment tools (LOWEST PRIORITY - reluctant inclusion)
    const isVideoEntertainmentTool = 
      lowerTitle.includes('movie maker studio') ||
      lowerTitle.includes('music video maker') ||
      lowerTitle.includes('stagemaster') ||
      lowerTitle.includes('video') ||
      lowerTitle.includes('music') ||
      lowerTitle.includes('stage') ||
      lowerTitle.includes('performing');
    
    // Include core image tools first, then pure design tools, then category matches
    if (isCoreImageTool || isPureDesignTool || isCategoryMatch) {
      console.log(`✅ Including in Image & Design: ${tool.title} (${isCoreImageTool ? 'core-image' : isPureDesignTool ? 'pure-design' : 'category-match'})`);
      return true;
    }
    
    // Only include video/entertainment tools if they have some design elements BUT rank them very low
    if (isVideoEntertainmentTool && (lowerDescription.includes('design') || lowerCategory.includes('design'))) {
      console.log(`⬇️ Including video/entertainment tool with design elements (low priority): ${tool.title}`);
      return true;
    }
    
    return false;
  });

  // Intelligent sorting with strict priority levels to push video tools down
  return imageDesignTools.sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    const aDesc = a.description.toLowerCase();
    const bDesc = b.description.toLowerCase();
    
    // Priority Level 1: Core AI Image Generators (ABSOLUTE TOP PRIORITY)
    const aIsCoreImage = aTitle.includes('image generator') || aTitle.includes('ai image') || 
                        aDesc.includes('image generation') || aDesc.includes('generate images') ||
                        aTitle.includes('photo generator') || aTitle.includes('picture generator');
    const bIsCoreImage = bTitle.includes('image generator') || bTitle.includes('ai image') || 
                        bDesc.includes('image generation') || bDesc.includes('generate images') ||
                        bTitle.includes('photo generator') || bTitle.includes('picture generator');
    
    if (aIsCoreImage && !bIsCoreImage) return -1;
    if (!aIsCoreImage && bIsCoreImage) return 1;
    
    // Priority Level 2: Pure Design Tools (HIGH PRIORITY - NO VIDEO/MUSIC)
    const aIsPureDesign = (aTitle.includes('design') || aTitle.includes('graphic') || 
                          aTitle.includes('logo') || aTitle.includes('sketch') ||
                          aTitle.includes('tattoo') || aTitle.includes('palette')) &&
                          !aTitle.includes('movie') && !aTitle.includes('music') && 
                          !aTitle.includes('video') && !aTitle.includes('stage');
    const bIsPureDesign = (bTitle.includes('design') || bTitle.includes('graphic') || 
                          bTitle.includes('logo') || bTitle.includes('sketch') ||
                          bTitle.includes('tattoo') || bTitle.includes('palette')) &&
                          !bTitle.includes('movie') && !bTitle.includes('music') && 
                          !bTitle.includes('video') && !bTitle.includes('stage');
    
    if (aIsPureDesign && !bIsPureDesign) return -1;
    if (!aIsPureDesign && bIsPureDesign) return 1;
    
    // Priority Level 3: Photo/Image Tools (MEDIUM PRIORITY)
    const aIsPhoto = (aTitle.includes('photo') || aTitle.includes('image') || aTitle.includes('picture')) &&
                     !aTitle.includes('movie') && !aTitle.includes('music') && !aTitle.includes('video');
    const bIsPhoto = (bTitle.includes('photo') || bTitle.includes('image') || bTitle.includes('picture')) &&
                     !bTitle.includes('movie') && !bTitle.includes('music') && !bTitle.includes('video');
    
    if (aIsPhoto && !bIsPhoto) return -1;
    if (!aIsPhoto && bIsPhoto) return 1;
    
    // Priority Level 4: Other Design-related Tools (LOWER PRIORITY)
    const aIsOtherDesign = aDesc.includes('design') && !aTitle.includes('movie') && 
                          !aTitle.includes('music') && !aTitle.includes('video') && !aTitle.includes('stage');
    const bIsOtherDesign = bDesc.includes('design') && !bTitle.includes('movie') && 
                          !bTitle.includes('music') && !bTitle.includes('video') && !bTitle.includes('stage');
    
    if (aIsOtherDesign && !bIsOtherDesign) return -1;
    if (!aIsOtherDesign && bIsOtherDesign) return 1;
    
    // Priority Level 5: Video/Entertainment Tools (ABSOLUTE LOWEST PRIORITY)
    const aIsVideo = aTitle.includes('movie') || aTitle.includes('music video') || 
                    aTitle.includes('stage') || aTitle.includes('video') || aTitle.includes('music') ||
                    aTitle.includes('movie maker studio') || aTitle.includes('stagemaster');
    const bIsVideo = bTitle.includes('movie') || bTitle.includes('music video') || 
                    bTitle.includes('stage') || bTitle.includes('video') || bTitle.includes('music') ||
                    bTitle.includes('movie maker studio') || bTitle.includes('stagemaster');
    
    if (aIsVideo && !bIsVideo) return 1; // video tools go to bottom
    if (!aIsVideo && bIsVideo) return -1; // non-video tools go to top
    
    // Within same priority level, sort by rating then alphabetically
    const ratingDiff = (b.rating || 0) - (a.rating || 0);
    if (ratingDiff !== 0) return ratingDiff;
    
    return aTitle.localeCompare(bTitle);
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
