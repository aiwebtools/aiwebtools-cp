import { Tool } from "@/types/tools";
import { mainCategories } from "./mainCategoryMapping";

// Tools that should appear in Data & Analytics even if they exist elsewhere
const DATA_ANALYTICS_PRIORITY_TOOLS = [
  "Claude",
  "ChatGPT", 
  "Gemini",
  "Data Research Analysis Report GPT",
  "Data Analysis Report AI",
  "Research Report & Data Analysis AI"
];

// Tools that should appear in Marketing & Sales even if they exist elsewhere
const MARKETING_SALES_PRIORITY_TOOLS = [
  "HubSpot",
  "Salesforce",
  "Mailchimp",
  "SalesFlow",
  "Outranking",
  "Scalenut",
  "SurferSEO",
  "Meet Alfred",
  "SENDER AI",
  "ActiveCampaign",
  "GetResponse",
  "Hunter.io"
];

export const getCategoriesWithCounts = (tools: Tool[]): Record<string, number> => {
  const categoryCounts: Record<string, number> = {};
  
  tools.forEach(tool => {
    const category = tool.category;
    if (category) {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
  });
  
  return categoryCounts;
};

// Enhanced category name normalization
const normalizeCategoryName = (categoryName: string): string => {
  return categoryName
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, ' ')
    .trim();
};

// Check if two category names are similar enough to be considered the same
const isSimilarCategory = (cat1: string, cat2: string): boolean => {
  const norm1 = normalizeCategoryName(cat1);
  const norm2 = normalizeCategoryName(cat2);
  
  // Exact match after normalization
  if (norm1 === norm2) return true;
  
  // One contains the other (for variations like "Health & Wellness" vs "Health & Wellness Tools")
  if (norm1.includes(norm2) || norm2.includes(norm1)) return true;
  
  // Check for common variations
  const variations = [
    ['ai tools and development', 'ai development tools'],
    ['business and productivity', 'business tools'],
    ['content creation and writing tools', 'writing and content'],
    ['video editing and content tools', 'video tools'],
    ['data and analytics tools', 'data analytics tools'],
    ['marketing and sales ai tools', 'marketing tools'],
    ['communication and collaboration ai tools', 'communication tools']
  ];
  
  for (const [var1, var2] of variations) {
    if ((norm1.includes(var1) && norm2.includes(var2)) || 
        (norm1.includes(var2) && norm2.includes(var1))) {
      return true;
    }
  }
  
  return false;
};

export const getToolsByCategory = (tools: Tool[], categoryName: string): Tool[] => {
  // Special handling for Data & Analytics category
  if (categoryName === "DATA & ANALYTICS AI TOOLS" || categoryName === "Data & Analytics Tools") {
    const directCategoryTools = tools.filter(tool => 
      tool.category && (
        isSimilarCategory(tool.category, categoryName) ||
        isSimilarCategory(tool.category, "Data & Analytics Tools") ||
        isSimilarCategory(tool.category, "DATA & ANALYTICS AI TOOLS") ||
        isSimilarCategory(tool.category, "Data Analytics Tools")
      )
    );
    
    // Add priority tools that should appear in Data & Analytics
    const priorityTools = tools.filter(tool => 
      DATA_ANALYTICS_PRIORITY_TOOLS.some(priorityName => 
        tool.title.toLowerCase().includes(priorityName.toLowerCase()) ||
        priorityName.toLowerCase().includes(tool.title.toLowerCase())
      )
    );
    
    // Combine and deduplicate by title
    const allTools = [...directCategoryTools, ...priorityTools];
    const uniqueTools = allTools.filter((tool, index, self) => 
      index === self.findIndex(t => t.title === tool.title)
    );
    
    return uniqueTools;
  }
  
  // Special handling for Marketing & Sales category
  if (categoryName === "MARKETING & SALES AI TOOLS" || categoryName === "Marketing & Analytics" || categoryName === "E-commerce & Marketing Tools" || categoryName === "Business & Sales Tools") {
    const directCategoryTools = tools.filter(tool => 
      tool.category && (
        isSimilarCategory(tool.category, categoryName) ||
        isSimilarCategory(tool.category, "Marketing & Analytics") ||
        isSimilarCategory(tool.category, "E-commerce & Marketing Tools") ||
        isSimilarCategory(tool.category, "Business & Sales Tools") ||
        isSimilarCategory(tool.category, "MARKETING & SALES AI TOOLS") ||
        isSimilarCategory(tool.category, "Marketing Tools") ||
        isSimilarCategory(tool.category, "Marketing Sales Tools")
      )
    );
    
    // Add priority tools that should appear in Marketing & Sales
    const priorityTools = tools.filter(tool => 
      MARKETING_SALES_PRIORITY_TOOLS.some(priorityName => 
        tool.title.toLowerCase().includes(priorityName.toLowerCase()) ||
        priorityName.toLowerCase().includes(tool.title.toLowerCase())
      )
    );
    
    // Combine and deduplicate by title
    const allTools = [...directCategoryTools, ...priorityTools];
    const uniqueTools = allTools.filter((tool, index, self) => 
      index === self.findIndex(t => t.title === tool.title)
    );
    
    return uniqueTools;
  }
  
  // Enhanced handling for Communication & Collaboration category
  if (categoryName === "COMMUNICATION & COLLABORATION AI TOOLS" || categoryName === "Communication & Entertainment" || categoryName === "Communication Tools") {
    const directCategoryTools = tools.filter(tool => 
      tool.category && (
        isSimilarCategory(tool.category, categoryName) ||
        isSimilarCategory(tool.category, "Communication & Entertainment") ||
        isSimilarCategory(tool.category, "Communication Tools") ||
        isSimilarCategory(tool.category, "COMMUNICATION & COLLABORATION AI TOOLS") ||
        isSimilarCategory(tool.category, "Collaboration Tools") ||
        isSimilarCategory(tool.category, "Entertainment Tools")
      )
    );
    
    return directCategoryTools;
  }
  
  // Regular category filtering with enhanced similarity matching
  return tools.filter(tool => tool.category && isSimilarCategory(tool.category, categoryName));
};

export const getMainCategoriesWithCounts = (tools: Tool[]): Record<string, number> => {
  const mainCategoryCounts: Record<string, number> = {};
  
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
  
  // Special case for "ALL AI TOOLS" - return ALL tools with AI Web Tools GPTs prioritized
  if (mainCategoryName === "ALL AI TOOLS") {
    console.log(`🌟 ALL AI TOOLS requested - returning all ${tools.length} tools with prioritization`);
    
    // Get AI Web Tools GPTs first (these should be prioritized)
    const aiWebToolsGPTs = tools.filter(tool => 
      tool.directUrl?.includes('lovable.app') || 
      tool.directUrl?.includes('aiwebtools')
    );
    
    // Get all other tools
    const otherTools = tools.filter(tool => 
      !tool.directUrl?.includes('lovable.app') && 
      !tool.directUrl?.includes('aiwebtools')
    );
    
    console.log(`🎯 AI Web Tools GPTs: ${aiWebToolsGPTs.length}, Other tools: ${otherTools.length}`);
    
    // Return all tools with AI Web Tools GPTs first
    return [...aiWebToolsGPTs, ...otherTools];
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
      // Normalize both strings for comparison
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
