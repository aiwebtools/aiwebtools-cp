
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

export const getToolsByCategory = (tools: Tool[], categoryName: string): Tool[] => {
  // Special handling for Data & Analytics category
  if (categoryName === "DATA & ANALYTICS AI TOOLS" || categoryName === "Data & Analytics Tools") {
    const directCategoryTools = tools.filter(tool => 
      tool.category === categoryName || 
      tool.category === "Data & Analytics Tools" ||
      tool.category === "DATA & ANALYTICS AI TOOLS"
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
      tool.category === categoryName || 
      tool.category === "Marketing & Analytics" ||
      tool.category === "E-commerce & Marketing Tools" ||
      tool.category === "Business & Sales Tools" ||
      tool.category === "MARKETING & SALES AI TOOLS"
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
  
  // Regular category filtering for other categories
  return tools.filter(tool => tool.category === categoryName);
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
  const mainCategory = mainCategories.find(cat => cat.name === mainCategoryName);
  if (!mainCategory) return [];
  
  const allCategoryTools: Tool[] = [];
  
  mainCategory.subcategories.forEach(subcategory => {
    const categoryTools = getToolsByCategory(tools, subcategory);
    allCategoryTools.push(...categoryTools);
  });
  
  // Remove exact duplicates by title
  const uniqueTools = allCategoryTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  return uniqueTools;
};
