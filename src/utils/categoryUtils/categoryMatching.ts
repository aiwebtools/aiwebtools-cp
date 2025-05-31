
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

// Special handling for Automation Platforms category
export const getAutomationPlatformsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🤖 Getting automation platform tools for category: "${categoryName}"`);
  
  const directCategoryTools = tools.filter(tool => 
    tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      isSimilarCategory(tool.category, "Automation Platforms") ||
      isSimilarCategory(tool.category, "Automation & Workflows") ||
      isSimilarCategory(tool.category, "Automation & Workflow Tools") ||
      isSimilarCategory(tool.category, "Workflow Tools") ||
      isSimilarCategory(tool.category, "Process Automation") ||
      isSimilarCategory(tool.category, "Business Process Automation") ||
      isSimilarCategory(tool.category, "Workflow Automation") ||
      isSimilarCategory(tool.category, "Task Automation") ||
      isSimilarCategory(tool.category, "AI Automation") ||
      isSimilarCategory(tool.category, "Business & Productivity") ||
      isSimilarCategory(tool.category, "Business Tools") ||
      isSimilarCategory(tool.category, "Productivity & Utilities") ||
      isSimilarCategory(tool.category, "Utilities Tools") ||
      isSimilarCategory(tool.category, "AI Productivity Tools") ||
      isSimilarCategory(tool.category, "Utilities & Productivity") ||
      isSimilarCategory(tool.category, "Business Operations & Productivity") ||
      isSimilarCategory(tool.category, "Email Management Tools") ||
      isSimilarCategory(tool.category, "Meeting & Transcription Tools") ||
      isSimilarCategory(tool.category, "Productivity & Automation Tools") ||
      isSimilarCategory(tool.category, "Business & Team Tools") ||
      isSimilarCategory(tool.category, "Collaboration Tools") ||
      isSimilarCategory(tool.category, "Communication & Collaboration") ||
      isSimilarCategory(tool.category, "Technical & Utility Tools") ||
      isSimilarCategory(tool.category, "Search & Productivity Tools") ||
      isSimilarCategory(tool.category, "Developer & Coding Tools") ||
      isSimilarCategory(tool.category, "Web Development Tools") ||
      isSimilarCategory(tool.category, "AI Tools & Utilities") ||
      isSimilarCategory(tool.category, "Comprehensive AI Tools")
    )
  );
  
  // Also include tools by description matching for automation-related tools
  const automationKeywordTools = tools.filter(tool => 
    tool.description.toLowerCase().includes('automation') ||
    tool.description.toLowerCase().includes('workflow') ||
    tool.description.toLowerCase().includes('automate') ||
    tool.description.toLowerCase().includes('productivity') ||
    tool.description.toLowerCase().includes('integrate') ||
    tool.description.toLowerCase().includes('zapier') ||
    tool.description.toLowerCase().includes('webhook') ||
    tool.description.toLowerCase().includes('api integration') ||
    tool.description.toLowerCase().includes('no-code') ||
    tool.description.toLowerCase().includes('low-code') ||
    tool.description.toLowerCase().includes('business process') ||
    tool.description.toLowerCase().includes('task management') ||
    tool.description.toLowerCase().includes('scheduling') ||
    tool.description.toLowerCase().includes('pipeline') ||
    tool.description.toLowerCase().includes('connector') ||
    tool.title.toLowerCase().includes('zapier') ||
    tool.title.toLowerCase().includes('make') ||
    tool.title.toLowerCase().includes('integromat') ||
    tool.title.toLowerCase().includes('automate') ||
    tool.title.toLowerCase().includes('workflow') ||
    tool.title.toLowerCase().includes('ifttt') ||
    tool.title.toLowerCase().includes('n8n') ||
    tool.title.toLowerCase().includes('power automate')
  );
  
  const allTools = [...directCategoryTools, ...automationKeywordTools];
  const uniqueTools = allTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  console.log(`🤖 Automation Platform Tools Debug:`, {
    categoryName,
    directCategoryTools: directCategoryTools.length,
    automationKeywordTools: automationKeywordTools.length,
    uniqueTools: uniqueTools.length,
    sampleTitles: uniqueTools.slice(0, 15).map(t => `${t.title} (${t.category})`)
  });
  
  return uniqueTools;
};
