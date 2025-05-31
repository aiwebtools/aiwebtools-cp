import { Tool } from "@/types/tools";
import { isSimilarCategory } from "./normalization";
import { DATA_ANALYTICS_PRIORITY_TOOLS, MARKETING_SALES_PRIORITY_TOOLS } from "./constants";

// Special handling for Data & Analytics category
export const getDataAnalyticsTools = (tools: Tool[], categoryName: string): Tool[] => {
  const directCategoryTools = tools.filter(tool => 
    tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      isSimilarCategory(tool.category, "Data & Analytics Tools") ||
      isSimilarCategory(tool.category, "DATA & ANALYTICS AI TOOLS") ||
      isSimilarCategory(tool.category, "Data Analytics Tools") ||
      isSimilarCategory(tool.category, "Data Science & Analytics") ||
      isSimilarCategory(tool.category, "Business Intelligence") ||
      isSimilarCategory(tool.category, "Analytics & Insights")
    )
  );
  
  // Also include tools by title/content matching for key analytics tools
  const priorityTools = tools.filter(tool => 
    DATA_ANALYTICS_PRIORITY_TOOLS.some(priorityName => 
      tool.title.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title.toLowerCase()) ||
      tool.description.toLowerCase().includes('data analysis') ||
      tool.description.toLowerCase().includes('analytics') ||
      tool.description.toLowerCase().includes('statistical analysis') ||
      tool.description.toLowerCase().includes('data visualization') ||
      tool.description.toLowerCase().includes('business intelligence')
    )
  );
  
  const allTools = [...directCategoryTools, ...priorityTools];
  const uniqueTools = allTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  console.log(`🔍 Data Analytics Tools Debug:`, {
    categoryName,
    directCategoryTools: directCategoryTools.length,
    priorityTools: priorityTools.length,
    uniqueTools: uniqueTools.length,
    sampleTitles: uniqueTools.slice(0, 10).map(t => t.title)
  });
  
  return uniqueTools;
};

// Special handling for Marketing & Sales category
export const getMarketingSalesTools = (tools: Tool[], categoryName: string): Tool[] => {
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
  
  const priorityTools = tools.filter(tool => 
    MARKETING_SALES_PRIORITY_TOOLS.some(priorityName => 
      tool.title.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title.toLowerCase())
    )
  );
  
  const allTools = [...directCategoryTools, ...priorityTools];
  const uniqueTools = allTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  return uniqueTools;
};

// Enhanced handling for Communication & Collaboration category
export const getCommunicationCollaborationTools = (tools: Tool[], categoryName: string): Tool[] => {
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
};
