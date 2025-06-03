
// Enhanced search function with tool exclusions
export { searchTools as enhancedSearchTools } from './searchUtils';

// Re-export with exclusion wrapper
import { Tool } from "@/types/tools";
import { searchTools as originalSearchTools } from './searchUtils';

const EXCLUDED_TOOLS = [
  "Personal Finance Advisor GPT"
];

export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  // Filter out excluded tools before search
  const filteredTools = tools.filter(tool => !EXCLUDED_TOOLS.includes(tool.title));
  
  // Perform search on filtered tools
  const results = originalSearchTools(filteredTools, searchTerm);
  
  // Double-check to ensure no excluded tools in results
  return results.filter(tool => !EXCLUDED_TOOLS.includes(tool.title));
};
