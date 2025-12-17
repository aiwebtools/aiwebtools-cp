import { Tool } from "@/types/tools";
import { isAIWebToolsGPT } from "@/utils/aiWebToolsPrioritization";
import { searchDebugLog } from "@/utils/debug/searchDebug";

/**
 * Apply 2:1 interleaving pattern to search results
 * Pattern: OTHER TOOL, OTHER TOOL, OUR GPT/GEM (repeat)
 *
 * This ensures our Custom GPTs and Gemini Gems are prominently featured
 * but don't overtake the search results.
 */
export const applySearchInterleaving = (tools: Tool[]): Tool[] => {
  if (!tools || tools.length === 0) return tools;

  // Separate our tools (Custom GPTs, Gemini Gems) from external tools
  const ourTools: Tool[] = [];
  const externalTools: Tool[] = [];

  tools.forEach((tool) => {
    if (isAIWebToolsGPT(tool)) {
      ourTools.push(tool);
    } else {
      externalTools.push(tool);
    }
  });

  // If no mix needed, return as-is
  if (ourTools.length === 0 || externalTools.length === 0) {
    return tools;
  }

  searchDebugLog(
    `🔄 Search Interleaving: ${externalTools.length} external tools + ${ourTools.length} Custom GPTs/Gems`
  );

  // Interleave: 2 external tools, then 1 of our tools
  const result: Tool[] = [];
  let externalIndex = 0;
  let ourIndex = 0;

  while (externalIndex < externalTools.length || ourIndex < ourTools.length) {
    // Add up to 2 external tools
    for (let i = 0; i < 2 && externalIndex < externalTools.length; i++) {
      result.push(externalTools[externalIndex++]);
    }

    // Add 1 of our tools (Custom GPT or Gemini Gem)
    if (ourIndex < ourTools.length) {
      result.push(ourTools[ourIndex++]);
    }
  }

  // Add any remaining tools
  while (ourIndex < ourTools.length) {
    result.push(ourTools[ourIndex++]);
  }

  searchDebugLog(
    `✅ Interleaved search results: ${result.length} tools (${ourIndex} Custom GPTs/Gems inserted)`
  );

  return result;
};

/**
 * Check if a tool is one of our Custom GPTs or Gemini Gems
 */
export const isOurCustomTool = (tool: Tool): boolean => {
  return isAIWebToolsGPT(tool);
};
