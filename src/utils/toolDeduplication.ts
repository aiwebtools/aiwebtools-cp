
import { Tool } from "@/types/tools";

// Remove duplicate tools based on title and URL
export const deduplicateTools = (tools: Tool[]): Tool[] => {
  const seen = new Set<string>();
  const uniqueTools: Tool[] = [];
  
  for (const tool of tools) {
    // Create a unique key based on title and directUrl
    const key = `${tool.title.toLowerCase().trim()}|${tool.directUrl?.toLowerCase().trim() || ''}`;
    
    if (!seen.has(key)) {
      seen.add(key);
      uniqueTools.push(tool);
    } else {
      console.log(`Duplicate tool removed: ${tool.title}`);
    }
  }
  
  console.log(`Deduplication: ${tools.length} -> ${uniqueTools.length} tools`);
  return uniqueTools;
};

// Create a deduplication function that maintains diversity
export const createDeduplicatedToolsList = (tools: Tool[], maxRepeats: number = 8): Tool[] => {
  const toolFrequency = new Map<string, number>();
  const result: Tool[] = [];
  
  for (const tool of tools) {
    const count = toolFrequency.get(tool.title) || 0;
    
    if (count < maxRepeats) {
      result.push(tool);
      toolFrequency.set(tool.title, count + 1);
    }
  }
  
  return result;
};

// Deduplicate tools within categories
export const deduplicateByCategory = (tools: Tool[]): Tool[] => {
  const categoryMap = new Map<string, Set<string>>();
  const uniqueTools: Tool[] = [];
  
  for (const tool of tools) {
    const category = tool.category || 'Uncategorized';
    
    if (!categoryMap.has(category)) {
      categoryMap.set(category, new Set());
    }
    
    const categorySet = categoryMap.get(category)!;
    const toolKey = tool.title.toLowerCase().trim();
    
    if (!categorySet.has(toolKey)) {
      categorySet.add(toolKey);
      uniqueTools.push(tool);
    }
  }
  
  return uniqueTools;
};
