
import { Tool } from "@/types/tools";
import { isVideoEntertainmentTool, isCoreImageTool, isPureDesignTool, isCategoryMatch } from "./exclusions";

/**
 * Get tools specifically for Image & Design category with strict filtering
 */
export const getImageAndDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎨 Getting Image & Design tools for category: ${categoryName}`);
  
  const imageDesignTools = tools.filter(tool => {
    // EXCLUDE video/entertainment tools FIRST (HIGHEST EXCLUSION PRIORITY)
    if (isVideoEntertainmentTool(tool)) {
      console.log(`❌ EXCLUDING video/entertainment tool: ${tool.title}`);
      return false;
    }
    
    // Include tools that match image/design criteria
    if (isCoreImageTool(tool) || isPureDesignTool(tool) || isCategoryMatch(tool)) {
      const matchType = isCoreImageTool(tool) ? 'core-image' : 
                       isPureDesignTool(tool) ? 'pure-design' : 'category-match';
      console.log(`✅ Including in Image & Design: ${tool.title} (${matchType})`);
      return true;
    }
    
    return false;
  });

  // Sort with strict priority - pure image tools first, video tools completely excluded
  return imageDesignTools.sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    const aDesc = a.description.toLowerCase();
    const bDesc = b.description.toLowerCase();
    
    // Priority Level 1: Core AI Image Generators (ABSOLUTE TOP PRIORITY)
    const aIsCoreImage = isCoreImageTool(a);
    const bIsCoreImage = isCoreImageTool(b);
    
    if (aIsCoreImage && !bIsCoreImage) return -1;
    if (!aIsCoreImage && bIsCoreImage) return 1;
    
    // Priority Level 2: Pure Design Tools (HIGH PRIORITY - NO VIDEO/MUSIC)
    const aIsPureDesign = isPureDesignTool(a);
    const bIsPureDesign = isPureDesignTool(b);
    
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
    
    // Within same priority level, sort by rating then alphabetically
    const ratingDiff = (b.rating || 0) - (a.rating || 0);
    if (ratingDiff !== 0) return ratingDiff;
    
    return aTitle.localeCompare(bTitle);
  });
};
