
import { Tool } from "@/types/tools";
import { mainCategories } from "@/utils/mainCategoryMapping";
import { isSimilarCategory } from "./normalization";
import { isVideoRelatedTool } from "./videoDetection";
import { 
  getDataAnalyticsTools, 
  getMarketingSalesTools, 
  getCommunicationCollaborationTools 
} from "./categoryMatching";
import { CategoryCounts, MainCategoryCounts } from "./types";

export const getCategoriesWithCounts = (tools: Tool[]): CategoryCounts => {
  const categoryCounts: CategoryCounts = {};
  
  tools.forEach(tool => {
    const category = tool.category;
    if (category) {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
  });
  
  return categoryCounts;
};

export const getToolsByCategory = (tools: Tool[], categoryName: string): Tool[] => {
  // Special handling for Data & Analytics category
  if (categoryName === "DATA & ANALYTICS AI TOOLS" || categoryName === "Data & Analytics Tools") {
    return getDataAnalyticsTools(tools, categoryName);
  }
  
  // Special handling for Marketing & Sales category
  if (categoryName === "MARKETING & SALES AI TOOLS" || categoryName === "Marketing & Analytics" || categoryName === "E-commerce & Marketing Tools" || categoryName === "Business & Sales Tools") {
    return getMarketingSalesTools(tools, categoryName);
  }
  
  // Enhanced handling for Communication & Collaboration category
  if (categoryName === "COMMUNICATION & COLLABORATION AI TOOLS" || categoryName === "Communication & Entertainment" || categoryName === "Communication Tools") {
    return getCommunicationCollaborationTools(tools, categoryName);
  }
  
  // Regular category filtering with enhanced similarity matching
  return tools.filter(tool => tool.category && isSimilarCategory(tool.category, categoryName));
};

export const getMainCategoriesWithCounts = (tools: Tool[]): MainCategoryCounts => {
  const mainCategoryCounts: MainCategoryCounts = {};
  
  mainCategories.forEach(mainCat => {
    let count = 0;
    mainCat.subcategories.forEach(subcat => {
      const categoryTools = getToolsByCategory(tools, subcat);
      count += categoryTools.length;
    });
    mainCategoryCounts[mainCat.name] = count;
  });
  
  return mainCategoryCounts;
};

export const getToolsByMainCategory = (tools: Tool[], mainCategoryName: string): Tool[] => {
  console.log(`🔍 Getting tools for main category: "${mainCategoryName}"`);
  console.log(`📊 Total available tools in database: ${tools.length}`);
  
  // Special case for "ALL AI TOOLS" - return ALL tools with AI Web Tools GPTs prioritized
  if (mainCategoryName === "ALL AI TOOLS") {
    console.log(`🌟 ALL AI TOOLS requested - returning all ${tools.length} tools with prioritization`);
    
    const aiWebToolsGPTs = tools.filter(tool => 
      tool.directUrl?.includes('lovable.app') || 
      tool.directUrl?.includes('aiwebtools')
    );
    
    const otherTools = tools.filter(tool => 
      !tool.directUrl?.includes('lovable.app') && 
      !tool.directUrl?.includes('aiwebtools')
    );
    
    console.log(`🎯 AI Web Tools GPTs: ${aiWebToolsGPTs.length}, Other tools: ${otherTools.length}`);
    
    const allToolsWithPriority = [...aiWebToolsGPTs, ...otherTools];
    console.log(`✅ Returning total of ${allToolsWithPriority.length} tools for ALL AI TOOLS`);
    
    return allToolsWithPriority;
  }
  
  // Special case for "DATA & ANALYTICS AI TOOLS" - use enhanced matching
  if (mainCategoryName === "DATA & ANALYTICS AI TOOLS") {
    console.log(`📊 DATA & ANALYTICS AI TOOLS requested - using enhanced matching`);
    const analyticsTools = getDataAnalyticsTools(tools, mainCategoryName);
    console.log(`✅ Found ${analyticsTools.length} analytics tools`);
    return analyticsTools;
  }
  
  // Special enhanced handling for VIDEO & MULTIMEDIA category
  if (mainCategoryName === "VIDEO & MULTIMEDIA") {
    console.log(`🎬 VIDEO & MULTIMEDIA category requested`);
    
    // Get tools that match video subcategories
    const mainCategory = mainCategories.find(cat => cat.name === mainCategoryName);
    if (!mainCategory) return [];
    
    const categoryTools = tools.filter(tool => {
      if (!tool.category) return false;
      
      return mainCategory.subcategories.some(subcat => {
        const normalizedToolCategory = tool.category.toLowerCase().trim();
        const normalizedSubcat = subcat.toLowerCase().trim();
        
        return normalizedToolCategory === normalizedSubcat ||
               normalizedToolCategory.includes(normalizedSubcat) ||
               normalizedSubcat.includes(normalizedToolCategory);
      });
    });
    
    // Also get tools that are video-related by content analysis
    const videoRelatedTools = tools.filter(tool => isVideoRelatedTool(tool));
    
    // Combine and deduplicate
    const allVideoTools = [...categoryTools, ...videoRelatedTools];
    const uniqueVideoTools = allVideoTools.filter((tool, index, self) => 
      index === self.findIndex(t => t.title === tool.title)
    );
    
    console.log(`🎥 Found ${categoryTools.length} category-matched tools, ${videoRelatedTools.length} content-matched tools, ${uniqueVideoTools.length} total unique video tools`);
    console.log(`🎬 Sample video tools found:`, uniqueVideoTools.slice(0, 10).map(t => ({ title: t.title, category: t.category })));
    
    return uniqueVideoTools;
  }
  
  // Find the main category configuration
  const mainCategory = mainCategories.find(cat => cat.name === mainCategoryName);
  
  if (!mainCategory) {
    console.warn(`❌ Main category "${mainCategoryName}" not found`);
    return [];
  }
  
  console.log(`📂 Found main category with ${mainCategory.subcategories.length} subcategories`);
  
  // Get tools that match any of the subcategories
  const categoryTools = tools.filter(tool => {
    if (!tool.category) return false;
    
    return mainCategory.subcategories.some(subcat => {
      const normalizedToolCategory = tool.category.toLowerCase().trim();
      const normalizedSubcat = subcat.toLowerCase().trim();
      
      return normalizedToolCategory === normalizedSubcat ||
             normalizedToolCategory.includes(normalizedSubcat) ||
             normalizedSubcat.includes(normalizedToolCategory);
    });
  });
  
  console.log(`✅ Found ${categoryTools.length} tools for main category "${mainCategoryName}"`);
  
  return categoryTools;
};
