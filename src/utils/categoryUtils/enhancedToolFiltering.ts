
import { Tool } from "@/types/tools";
import { mainCategoryKeywordMapping, getMainCategoryFromSubcategory } from "./mainCategoryMapping";

// Enhanced tool filtering that ensures proper categorization
export const getToolsByMainCategoryEnhanced = (tools: Tool[], mainCategoryName: string): Tool[] => {
  console.log(`🎯 Enhanced filtering for "${mainCategoryName}" from ${tools.length} total tools`);
  
  // Get keywords for this main category
  const categoryKeywords = mainCategoryKeywordMapping[mainCategoryName] || [];
  
  // Filter tools that belong to this main category
  const categoryTools = tools.filter(tool => {
    // Check if tool's category maps to this main category
    const toolMainCategory = getMainCategoryFromSubcategory(tool.category || "");
    if (toolMainCategory === mainCategoryName) {
      return true;
    }
    
    // Check if tool matches category keywords
    const titleLower = tool.title.toLowerCase();
    const descriptionLower = tool.description.toLowerCase();
    const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
    const categoryLower = tool.category?.toLowerCase() || '';
    
    const matchesKeywords = categoryKeywords.some(keyword => {
      const keywordLower = keyword.toLowerCase();
      return titleLower.includes(keywordLower) || 
             descriptionLower.includes(keywordLower) || 
             tagsLower.includes(keywordLower) ||
             categoryLower.includes(keywordLower);
    });
    
    if (matchesKeywords) {
      console.log(`✅ Matched "${tool.title}" to "${mainCategoryName}" via keywords`);
      return true;
    }
    
    return false;
  });
  
  // Sort by relevance - exact category matches first, then keyword matches
  const sortedTools = categoryTools.sort((a, b) => {
    const aMainCategory = getMainCategoryFromSubcategory(a.category || "");
    const bMainCategory = getMainCategoryFromSubcategory(b.category || "");
    
    const aExactMatch = aMainCategory === mainCategoryName;
    const bExactMatch = bMainCategory === mainCategoryName;
    
    if (aExactMatch && !bExactMatch) return -1;
    if (!aExactMatch && bExactMatch) return 1;
    
    return 0;
  });
  
  console.log(`🎯 Enhanced filtering found ${sortedTools.length} tools for "${mainCategoryName}"`);
  console.log(`📝 Sample tools:`, sortedTools.slice(0, 10).map(t => `${t.title} (${t.category})`));
  
  return sortedTools;
};

// Enhanced category detection for individual tools
export const detectToolMainCategory = (tool: Tool): string => {
  // First try to get from subcategory mapping
  const fromSubcategory = getMainCategoryFromSubcategory(tool.category || "");
  if (fromSubcategory !== "OTHER") {
    return fromSubcategory;
  }
  
  // Then check keywords
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  
  for (const [mainCategory, keywords] of Object.entries(mainCategoryKeywordMapping)) {
    const matchesKeywords = keywords.some(keyword => {
      const keywordLower = keyword.toLowerCase();
      return titleLower.includes(keywordLower) || 
             descriptionLower.includes(keywordLower) || 
             tagsLower.includes(keywordLower);
    });
    
    if (matchesKeywords) {
      return mainCategory;
    }
  }
  
  return "OTHER";
};
