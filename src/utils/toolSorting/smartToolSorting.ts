import { Tool } from "@/types/tools";
import { isAIWebToolsGPT } from "@/utils/aiWebToolsPrioritization";

// Common default phone assistants that everyone already has - deprioritize these
const DEPRIORITIZED_TOOLS = [
  'siri', 'google assistant', 'alexa', 'cortana', 'bixby',
  'google now', 'samsung bixby', 'apple siri', 'amazon alexa',
  'microsoft cortana', 'hey google', 'ok google'
];

// Cache for deprioritization checks to avoid repeated string operations
const deprioritizedCache = new WeakMap<Tool, boolean>();

// Check if a tool is a common default assistant
export const isDeprioritizedTool = (tool: Tool): boolean => {
  if (deprioritizedCache.has(tool)) {
    return deprioritizedCache.get(tool)!;
  }
  const titleLower = tool.title.toLowerCase();
  const result = DEPRIORITIZED_TOOLS.some(name => titleLower.includes(name));
  deprioritizedCache.set(tool, result);
  return result;
};

// Sort A-Z by title
export const sortToolsAZ = (tools: Tool[]): Tool[] => {
  return [...tools].sort((a, b) => a.title.localeCompare(b.title));
};

// Sort Z-A by title
export const sortToolsZA = (tools: Tool[]): Tool[] => {
  return [...tools].sort((a, b) => b.title.localeCompare(a.title));
};

/**
 * Smart interleaved sorting:
 * 1. Deprioritizes common default assistants (Siri, Alexa, etc.)
 * 2. Shows external tools that match the category
 * 3. Interleaves AIWebTools GPTs after every 2 external tools
 * 4. Ensures AIWebTools GPTs shown are relevant to the category
 */
export const applySmartInterleavedSorting = (
  tools: Tool[],
  categoryContext?: string
): Tool[] => {
  if (!tools || tools.length === 0) return tools;
  
  // Separate tools into groups
  const deprioritized: Tool[] = [];
  const aiWebToolsGPTs: Tool[] = [];
  const externalTools: Tool[] = [];
  
  tools.forEach(tool => {
    if (isDeprioritizedTool(tool)) {
      deprioritized.push(tool);
    } else if (isAIWebToolsGPT(tool)) {
      aiWebToolsGPTs.push(tool);
    } else {
      externalTools.push(tool);
    }
  });
  
  console.log(`🎯 Smart Sort: ${externalTools.length} external, ${aiWebToolsGPTs.length} AIWebTools GPTs, ${deprioritized.length} deprioritized`);
  
  // If we have a category context, sort AIWebTools GPTs by relevance to category
  const sortedAIWebToolsGPTs = categoryContext 
    ? sortByRelevanceToCategory(aiWebToolsGPTs, categoryContext)
    : aiWebToolsGPTs;
  
  // Interleave: 2 external tools, then 1 AIWebTools GPT
  const interleaved: Tool[] = [];
  let externalIndex = 0;
  let gptIndex = 0;
  
  while (externalIndex < externalTools.length || gptIndex < sortedAIWebToolsGPTs.length) {
    // Add up to 2 external tools
    for (let i = 0; i < 2 && externalIndex < externalTools.length; i++) {
      interleaved.push(externalTools[externalIndex++]);
    }
    
    // Add 1 AIWebTools GPT if available
    if (gptIndex < sortedAIWebToolsGPTs.length) {
      interleaved.push(sortedAIWebToolsGPTs[gptIndex++]);
    }
  }
  
  // Add remaining GPTs if any
  while (gptIndex < sortedAIWebToolsGPTs.length) {
    interleaved.push(sortedAIWebToolsGPTs[gptIndex++]);
  }
  
  // Add deprioritized tools at the end
  return [...interleaved, ...deprioritized];
};

// Sort tools by relevance to a category
const sortByRelevanceToCategory = (tools: Tool[], categoryContext: string): Tool[] => {
  const categoryLower = categoryContext.toLowerCase();
  const categoryWords = categoryLower.split(/[\s&]+/).filter(w => w.length > 2);
  
  return [...tools].sort((a, b) => {
    const scoreA = getRelevanceScore(a, categoryWords);
    const scoreB = getRelevanceScore(b, categoryWords);
    return scoreB - scoreA; // Higher score first
  });
};

// Calculate relevance score based on title, description, tags matching category words
const getRelevanceScore = (tool: Tool, categoryWords: string[]): number => {
  let score = 0;
  const titleLower = tool.title.toLowerCase();
  const descLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(t => t.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  categoryWords.forEach(word => {
    if (titleLower.includes(word)) score += 10;
    if (categoryLower.includes(word)) score += 8;
    if (tagsLower.includes(word)) score += 5;
    if (descLower.includes(word)) score += 2;
  });
  
  return score;
};

// Apply alphabetical sorting with deprioritization
export const applyAlphabeticalWithDeprioritization = (
  tools: Tool[],
  direction: 'asc' | 'desc'
): Tool[] => {
  const deprioritized: Tool[] = [];
  const normalTools: Tool[] = [];
  
  tools.forEach(tool => {
    if (isDeprioritizedTool(tool)) {
      deprioritized.push(tool);
    } else {
      normalTools.push(tool);
    }
  });
  
  // Sort both groups alphabetically
  const sortFn = direction === 'asc' 
    ? (a: Tool, b: Tool) => a.title.localeCompare(b.title)
    : (a: Tool, b: Tool) => b.title.localeCompare(a.title);
  
  normalTools.sort(sortFn);
  deprioritized.sort(sortFn);
  
  // Normal tools first, deprioritized at end
  return [...normalTools, ...deprioritized];
};

export type SortMode = 'smart' | 'az' | 'za' | 'shuffle';
