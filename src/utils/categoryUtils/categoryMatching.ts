
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "./normalization";
import { DATA_ANALYTICS_PRIORITY_TOOLS, MARKETING_SALES_PRIORITY_TOOLS } from "./constants";

// Special handling for Data & Analytics category
export const getDataAnalyticsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔍 Getting data analytics tools for category: "${categoryName}"`);
  
  // Get tools that match the direct category - including all variations
  const directCategoryTools = tools.filter(tool => 
    tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      isSimilarCategory(tool.category, "Data & Analytics Tools") ||
      isSimilarCategory(tool.category, "DATA & ANALYTICS AI TOOLS") ||
      isSimilarCategory(tool.category, "Data Analytics Tools") ||
      isSimilarCategory(tool.category, "Data Science & Analytics") ||
      isSimilarCategory(tool.category, "Business Intelligence") ||
      isSimilarCategory(tool.category, "Analytics & Insights") ||
      isSimilarCategory(tool.category, "Data & Analytics") ||
      isSimilarCategory(tool.category, "Business & Analytics") ||
      isSimilarCategory(tool.category, "Research & Analytics") ||
      isSimilarCategory(tool.category, "Statistical Analysis Tools") ||
      isSimilarCategory(tool.category, "Data Visualization Tools") ||
      isSimilarCategory(tool.category, "Predictive Analytics Tools")
    )
  );
  
  // Also include tools by title/description matching for key analytics tools
  const priorityTools = tools.filter(tool => 
    DATA_ANALYTICS_PRIORITY_TOOLS.some(priorityName => 
      tool.title.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title.toLowerCase())
    ) ||
    tool.description.toLowerCase().includes('data analysis') ||
    tool.description.toLowerCase().includes('analytics') ||
    tool.description.toLowerCase().includes('statistical analysis') ||
    tool.description.toLowerCase().includes('data visualization') ||
    tool.description.toLowerCase().includes('business intelligence') ||
    tool.description.toLowerCase().includes('predictive modeling') ||
    tool.description.toLowerCase().includes('research analysis') ||
    (tool.title.toLowerCase() === 'claude' && tool.description.toLowerCase().includes('analytical')) ||
    (tool.title.toLowerCase() === 'chatgpt' && tool.description.toLowerCase().includes('data')) ||
    (tool.title.toLowerCase() === 'gemini' && tool.description.toLowerCase().includes('analysis'))
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
    sampleTitles: uniqueTools.slice(0, 10).map(t => `${t.title} (${t.category})`)
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
  console.log(`🔍 Getting communication & collaboration tools for category: "${categoryName}"`);
  
  const directCategoryTools = tools.filter(tool => 
    tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      isSimilarCategory(tool.category, "Communication & Entertainment") ||
      isSimilarCategory(tool.category, "Communication Tools") ||
      isSimilarCategory(tool.category, "COMMUNICATION & COLLABORATION AI TOOLS") ||
      isSimilarCategory(tool.category, "Collaboration Tools") ||
      isSimilarCategory(tool.category, "Entertainment Tools") ||
      isSimilarCategory(tool.category, "Entertainment & Gaming") ||
      isSimilarCategory(tool.category, "Meeting & Transcription Tools") ||
      isSimilarCategory(tool.category, "Email Management Tools") ||
      isSimilarCategory(tool.category, "Social Media Tools") ||
      isSimilarCategory(tool.category, "AI Chat Platforms") ||
      isSimilarCategory(tool.category, "AI Assistants") ||
      isSimilarCategory(tool.category, "Content Creation Tools")
    )
  );
  
  // Also include tools that are clearly communication/collaboration related by content
  const contentMatchedTools = tools.filter(tool => 
    tool.description.toLowerCase().includes('communication') ||
    tool.description.toLowerCase().includes('collaboration') ||
    tool.description.toLowerCase().includes('team') ||
    tool.description.toLowerCase().includes('chat') ||
    tool.description.toLowerCase().includes('messaging') ||
    tool.description.toLowerCase().includes('meeting') ||
    tool.description.toLowerCase().includes('social') ||
    tool.description.toLowerCase().includes('entertainment') ||
    tool.description.toLowerCase().includes('gaming') ||
    tool.description.toLowerCase().includes('trivia') ||
    tool.description.toLowerCase().includes('interactive')
  );
  
  const allTools = [...directCategoryTools, ...contentMatchedTools];
  const uniqueTools = allTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  console.log(`🔍 Communication & Collaboration Tools Debug:`, {
    categoryName,
    directCategoryTools: directCategoryTools.length,
    contentMatchedTools: contentMatchedTools.length,
    uniqueTools: uniqueTools.length,
    sampleTitles: uniqueTools.slice(0, 15).map(t => `${t.title} (${t.category})`)
  });
  
  return uniqueTools;
};
