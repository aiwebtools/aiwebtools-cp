import { Tool } from "@/types/tools";

// Enhanced deduplication function that preserves custom GPTs
export const deduplicateTools = (tools: Tool[]): Tool[] => {
  const seen = new Map<string, Tool>();
  const duplicatesFound: string[] = [];
  
  for (const tool of tools) {
    // Create multiple keys to catch different variations of the same tool
    const normalizedTitle = tool.title.toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s]/g, '')
      .trim();
    
    const urlKey = tool.directUrl?.toLowerCase().replace(/^https?:\/\//, '').replace(/\/$/, '') || '';
    
    // Create compound key for more accurate detection
    const primaryKey = `${normalizedTitle}|${urlKey}`;
    const titleOnlyKey = normalizedTitle;
    
    // Check if this is a custom GPT (preserve all custom GPTs)
    const isCustomGPT = tool.directUrl?.includes('lovable.app') || 
                       tool.directUrl?.includes('chatgpt.com/g/') ||
                       tool.title.includes('GPT') && (
                         tool.directUrl?.includes('lovable.app') ||
                         tool.description.includes('aiwebtools')
                       );
    
    if (isCustomGPT) {
      // Always keep custom GPTs, don't deduplicate them
      seen.set(`custom_${tool.title}_${Date.now()}`, tool);
      continue;
    }
    
    // Check for existing tool with same primary key
    if (seen.has(primaryKey)) {
      duplicatesFound.push(tool.title);
      continue;
    }
    
    // Check for title-only duplicates
    let foundDuplicate = false;
    for (const [existingKey, existingTool] of seen.entries()) {
      if (existingKey.startsWith('custom_')) continue; // Skip custom GPTs
      
      const existingTitle = existingTool.title.toLowerCase()
        .replace(/\s+/g, ' ')
        .replace(/[^\w\s]/g, '')
        .trim();
      
      if (existingTitle === titleOnlyKey) {
        duplicatesFound.push(tool.title);
        foundDuplicate = true;
        break;
      }
    }
    
    if (!foundDuplicate) {
      seen.set(primaryKey, tool);
    }
  }
  
  console.log(`🧹 COMPREHENSIVE DUPLICATE CLEANUP:`);
  console.log(`Original tools: ${tools.length}`);
  console.log(`Unique tools: ${seen.size}`);
  console.log(`Duplicates removed: ${duplicatesFound.length}`);
  if (duplicatesFound.length > 0) {
    console.log(`Removed duplicates: ${duplicatesFound.join(', ')}`);
  }
  
  return Array.from(seen.values());
};

// Create a deduplication function that maintains diversity
export const createDeduplicatedToolsList = (tools: Tool[], maxRepeats: number = 1): Tool[] => {
  const toolFrequency = new Map<string, number>();
  const result: Tool[] = [];
  
  for (const tool of tools) {
    const normalizedTitle = tool.title.toLowerCase().trim();
    const count = toolFrequency.get(normalizedTitle) || 0;
    
    // Always allow custom GPTs
    const isCustomGPT = tool.directUrl?.includes('lovable.app') || 
                       tool.directUrl?.includes('chatgpt.com/g/') ||
                       tool.title.includes('GPT') && (
                         tool.directUrl?.includes('lovable.app') ||
                         tool.description.includes('aiwebtools')
                       );
    
    if (isCustomGPT || count < maxRepeats) {
      result.push(tool);
      if (!isCustomGPT) {
        toolFrequency.set(normalizedTitle, count + 1);
      }
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
    
    // Always allow custom GPTs
    const isCustomGPT = tool.directUrl?.includes('lovable.app') || 
                       tool.directUrl?.includes('chatgpt.com/g/') ||
                       tool.title.includes('GPT') && (
                         tool.directUrl?.includes('lovable.app') ||
                         tool.description.includes('aiwebtools')
                       );
    
    if (isCustomGPT || !categorySet.has(toolKey)) {
      if (!isCustomGPT) {
        categorySet.add(toolKey);
      }
      uniqueTools.push(tool);
    }
  }
  
  return uniqueTools;
};
