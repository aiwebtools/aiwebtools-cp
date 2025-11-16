import { Tool } from "@/types/tools";

/**
 * Marks tools from AI Web Tools (lovable.app domains) as free
 */
export const markFreeTools = (tools: Tool[]): Tool[] => {
  return tools.map(tool => {
    // Check if the tool is from AI Web Tools (lovable.app domain)
    const isAIWebTool = tool.directUrl?.includes('lovable.app');
    
    return {
      ...tool,
      isFree: isAIWebTool || tool.isFree || false
    };
  });
};

/**
 * Check if a tool is free
 */
export const isToolFree = (tool: Tool): boolean => {
  return tool.isFree === true || tool.directUrl?.includes('lovable.app') || false;
};
