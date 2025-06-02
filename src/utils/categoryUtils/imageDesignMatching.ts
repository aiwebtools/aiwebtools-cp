
import { Tool } from "@/types/tools";
import { isVideoEntertainmentTool, isCoreImageTool, isPureDesignTool, isCategoryMatch } from "./exclusions";

/**
 * Priority tools that should appear at the top of Image & Design category
 */
const PRIORITY_IMAGE_TOOLS = [
  "GPT-4o Image Generation",
  "Google Whisk", 
  "Midjourney",
  "Leonardo AI",
  "Ideogram",
  "Flux AI"
];

/**
 * Check if a tool is one of the priority image tools
 */
const isPriorityImageTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  return PRIORITY_IMAGE_TOOLS.some(priorityTool => {
    const priorityLower = priorityTool.toLowerCase();
    return title.includes(priorityLower) || 
           title.includes(priorityLower.replace(/\s+/g, '')) ||
           (priorityTool === "Midjourney" && title.includes("midjourney")) ||
           (priorityTool === "Leonardo AI" && title.includes("leonardo")) ||
           (priorityTool === "Ideogram" && title.includes("ideogram")) ||
           (priorityTool === "Flux AI" && title.includes("flux")) ||
           (priorityTool === "Google Whisk" && title.includes("whisk")) ||
           (priorityTool === "GPT-4o Image Generation" && (title.includes("gpt-4o") || title.includes("dalle")));
  });
};

/**
 * Get tools specifically for Image & Design category with strict filtering and priority ordering
 */
export const getImageAndDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎨 Getting Image & Design tools for category: ${categoryName}`);
  
  const imageDesignTools = tools.filter(tool => {
    // EXCLUDE video/entertainment tools FIRST (HIGHEST EXCLUSION PRIORITY)
    if (isVideoEntertainmentTool(tool)) {
      console.log(`❌ EXCLUDING video/entertainment tool: ${tool.title}`);
      return false;
    }
    
    // Include tools that match image/design criteria OR are priority tools
    if (isPriorityImageTool(tool) || isCoreImageTool(tool) || isPureDesignTool(tool) || isCategoryMatch(tool)) {
      const matchType = isPriorityImageTool(tool) ? 'PRIORITY' : 
                       isCoreImageTool(tool) ? 'core-image' : 
                       isPureDesignTool(tool) ? 'pure-design' : 'category-match';
      console.log(`✅ Including in Image & Design: ${tool.title} (${matchType})`);
      return true;
    }
    
    return false;
  });

  // Sort with PRIORITY tools at the very top
  return imageDesignTools.sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    const aDesc = a.description.toLowerCase();
    const bDesc = b.description.toLowerCase();
    
    // PRIORITY LEVEL 0: Featured Priority Tools (ABSOLUTE TOP PRIORITY)
    const aIsPriority = isPriorityImageTool(a);
    const bIsPriority = isPriorityImageTool(b);
    
    if (aIsPriority && !bIsPriority) return -1;
    if (!aIsPriority && bIsPriority) return 1;
    
    // Within priority tools, maintain the specified order
    if (aIsPriority && bIsPriority) {
      const aIndex = PRIORITY_IMAGE_TOOLS.findIndex(tool => 
        aTitle.includes(tool.toLowerCase()) || 
        aTitle.includes(tool.toLowerCase().replace(/\s+/g, ''))
      );
      const bIndex = PRIORITY_IMAGE_TOOLS.findIndex(tool => 
        bTitle.includes(tool.toLowerCase()) || 
        bTitle.includes(tool.toLowerCase().replace(/\s+/g, ''))
      );
      
      // If both found in priority list, sort by index
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }
      
      // If only one found, prioritize the found one
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
    }
    
    // Priority Level 1: Core AI Image Generators (HIGH PRIORITY)
    const aIsCoreImage = isCoreImageTool(a);
    const bIsCoreImage = isCoreImageTool(b);
    
    if (aIsCoreImage && !bIsCoreImage) return -1;
    if (!aIsCoreImage && bIsCoreImage) return 1;
    
    // Priority Level 2: Pure Design Tools (MEDIUM PRIORITY - NO VIDEO/MUSIC)
    const aIsPureDesign = isPureDesignTool(a);
    const bIsPureDesign = isPureDesignTool(b);
    
    if (aIsPureDesign && !bIsPureDesign) return -1;
    if (!aIsPureDesign && bIsPureDesign) return 1;
    
    // Priority Level 3: Photo/Image Tools (LOWER PRIORITY)
    const aIsPhoto = (aTitle.includes('photo') || aTitle.includes('image') || aTitle.includes('picture')) &&
                     !aTitle.includes('movie') && !aTitle.includes('music') && !aTitle.includes('video');
    const bIsPhoto = (bTitle.includes('photo') || bTitle.includes('image') || bTitle.includes('picture')) &&
                     !bTitle.includes('movie') && !bTitle.includes('music') && !bTitle.includes('video');
    
    if (aIsPhoto && !bIsPhoto) return -1;
    if (!aIsPhoto && bIsPhoto) return 1;
    
    // Priority Level 4: Other Design-related Tools (LOWEST PRIORITY)
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
