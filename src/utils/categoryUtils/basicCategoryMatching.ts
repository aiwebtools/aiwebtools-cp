
import { Tool } from "@/types/tools";
import { applyAIWebToolsPrioritization } from "@/utils/aiWebToolsPrioritization";

/**
 * Get tools for Data & Analytics category
 */
export const getDataAnalyticsTools = (tools: Tool[], categoryName: string): Tool[] => {
  const filtered = tools.filter(tool => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    
    return lowerCategory.includes('data') || 
           lowerCategory.includes('analytics') ||
           lowerCategory.includes('research') ||
           lowerTitle.includes('data') ||
           lowerTitle.includes('analytics') ||
           lowerTitle.includes('research') ||
           lowerDescription.includes('data analysis') ||
           lowerDescription.includes('analytics') ||
           lowerDescription.includes('research');
  });
  
  return applyAIWebToolsPrioritization(filtered);
};

/**
 * Get tools for Marketing & Sales category
 */
export const getMarketingSalesTools = (tools: Tool[], categoryName: string): Tool[] => {
  const filtered = tools.filter(tool => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    
    return lowerCategory.includes('marketing') ||
           lowerCategory.includes('sales') ||
           lowerCategory.includes('business') ||
           lowerTitle.includes('marketing') ||
           lowerTitle.includes('sales') ||
           lowerTitle.includes('business') ||
           lowerDescription.includes('marketing') ||
           lowerDescription.includes('sales') ||
           lowerDescription.includes('business');
  });
  
  return applyAIWebToolsPrioritization(filtered);
};

/**
 * Get tools for Communication & Collaboration category
 */
export const getCommunicationCollaborationTools = (tools: Tool[], categoryName: string): Tool[] => {
  const filtered = tools.filter(tool => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    
    return lowerCategory.includes('communication') ||
           lowerCategory.includes('collaboration') ||
           lowerCategory.includes('chat') ||
           lowerTitle.includes('communication') ||
           lowerTitle.includes('collaboration') ||
           lowerTitle.includes('chat') ||
           lowerDescription.includes('communication') ||
           lowerDescription.includes('collaboration') ||
           lowerDescription.includes('chat');
  });
  
  return applyAIWebToolsPrioritization(filtered);
};

/**
 * Get tools for Automation Platforms category
 */
export const getAutomationPlatformsTools = (tools: Tool[], categoryName: string): Tool[] => {
  const filtered = tools.filter(tool => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    
    return lowerCategory.includes('automation') ||
           lowerCategory.includes('workflow') ||
           lowerTitle.includes('automation') ||
           lowerTitle.includes('workflow') ||
           lowerDescription.includes('automation') ||
           lowerDescription.includes('workflow');
  });
  
  return applyAIWebToolsPrioritization(filtered);
};
