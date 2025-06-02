
import { Tool } from "@/types/tools";
import { mainCategoryKeywordMapping, getMainCategoryFromSubcategory } from "./mainCategoryMapping";

// FIXED enhanced tool filtering that NEVER loses tools
export const getToolsByMainCategoryEnhanced = (tools: Tool[], mainCategoryName: string): Tool[] => {
  console.log(`🎯 Enhanced filtering for "${mainCategoryName}" from ${tools.length} total tools`);
  
  // Special case for ALL AI TOOLS - return everything
  if (mainCategoryName === "ALL AI TOOLS") {
    console.log(`🎯 ALL AI TOOLS: Returning all ${tools.length} tools`);
    return tools;
  }
  
  // Get keywords for this main category
  const categoryKeywords = mainCategoryKeywordMapping[mainCategoryName] || [];
  
  // Filter tools that belong to this main category
  const categoryTools = tools.filter(tool => {
    // Check if tool's category maps to this main category
    const toolMainCategory = getMainCategoryFromSubcategory(tool.category || "");
    if (toolMainCategory === mainCategoryName) {
      return true;
    }
    
    // For INDUSTRY SPECIFIC AI TOOLS, be more inclusive
    if (mainCategoryName === "INDUSTRY SPECIFIC AI TOOLS") {
      const titleLower = tool.title.toLowerCase();
      const descriptionLower = tool.description.toLowerCase();
      const categoryLower = tool.category?.toLowerCase() || '';
      
      // Industry-specific keywords
      const industryKeywords = [
        "health", "medical", "doctor", "legal", "law", "education", "learning",
        "professional", "specialized", "niche", "emergency", "creative", "entertainment",
        "fitness", "wellness", "therapy", "clinic", "hospital", "pharmacy"
      ];
      
      const isIndustryTool = industryKeywords.some(keyword => 
        titleLower.includes(keyword) || 
        descriptionLower.includes(keyword) || 
        categoryLower.includes(keyword)
      );
      
      if (isIndustryTool) {
        console.log(`✅ Industry match: "${tool.title}" to "${mainCategoryName}"`);
        return true;
      }
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
      console.log(`✅ Keyword match: "${tool.title}" to "${mainCategoryName}"`);
      return true;
    }
    
    return false;
  });
  
  console.log(`🎯 Enhanced filtering found ${categoryTools.length} tools for "${mainCategoryName}"`);
  console.log(`📝 Sample tools:`, categoryTools.slice(0, 5).map(t => `${t.title} (${t.category})`));
  
  return categoryTools;
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
