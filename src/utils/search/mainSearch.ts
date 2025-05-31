
import { Tool } from "@/types/tools";
import { getExpandedKeywords } from "./keywordExpansion";
import { searchAIWebToolsGPTs } from "./aiWebToolsSearch";

export const performMainSearch = (tools: Tool[], searchTerm: string) => {
  const cleanSearchTerm = searchTerm.trim();
  console.log(`🔍 Enhanced search for: "${cleanSearchTerm}"`);

  // Get AI Web Tools specific results first
  const aiWebToolsResults = searchAIWebToolsGPTs(tools, cleanSearchTerm);
  
  // Get expanded keywords for broader search
  const expandedKeywords = getExpandedKeywords(cleanSearchTerm);
  console.log(`🔍 Expanded keywords:`, expandedKeywords);

  // Enhanced search through all tools with better matching
  const allResults = tools.filter(tool => {
    const toolText = `${tool.title} ${tool.description || ''} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
    const lowerSearchTerm = cleanSearchTerm.toLowerCase();

    // PRIORITY 1: Exact title match (highest priority)
    if (tool.title.toLowerCase() === lowerSearchTerm) {
      return true;
    }

    // PRIORITY 2: Title starts with search term
    if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
      return true;
    }

    // PRIORITY 3: Title contains search term
    if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
      return true;
    }

    // PRIORITY 4: Direct match in any field
    if (toolText.includes(lowerSearchTerm)) {
      return true;
    }

    // PRIORITY 5: Check expanded keywords
    const hasKeywordMatch = expandedKeywords.some(keyword => {
      const lowerKeyword = keyword.toLowerCase();
      return toolText.includes(lowerKeyword) || 
             tool.title.toLowerCase().includes(lowerKeyword) ||
             (tool.description && tool.description.toLowerCase().includes(lowerKeyword));
    });

    if (hasKeywordMatch) {
      return true;
    }

    // PRIORITY 6: Fuzzy matching for common typos and partial matches
    if (lowerSearchTerm.length >= 3) {
      // Check if any word in the title starts with the search term
      const titleWords = tool.title.toLowerCase().split(' ');
      const startsWithMatch = titleWords.some(word => word.startsWith(lowerSearchTerm));
      if (startsWithMatch) {
        return true;
      }

      // Check if search term is contained within any word in the title
      const partialWordMatch = titleWords.some(word => word.includes(lowerSearchTerm));
      if (partialWordMatch) {
        return true;
      }
    }

    // PRIORITY 7: Check for substring matches in description for very relevant tools
    if (tool.description && lowerSearchTerm.length >= 4) {
      const descriptionWords = tool.description.toLowerCase().split(' ');
      const relevantDescMatch = descriptionWords.some(word => 
        word.startsWith(lowerSearchTerm) || 
        (word.length >= 6 && word.includes(lowerSearchTerm))
      );
      if (relevantDescMatch) {
        return true;
      }
    }

    return false;
  });

  // Combine and deduplicate results, prioritizing AI Web Tools
  const combinedResults = new Map<string, Tool>();
  
  // Add AI Web Tools results first (higher priority)
  aiWebToolsResults.forEach(tool => {
    combinedResults.set(tool.title, tool);
  });
  
  // Add other results
  allResults.forEach(tool => {
    if (!combinedResults.has(tool.title)) {
      combinedResults.set(tool.title, tool);
    }
  });

  return {
    results: Array.from(combinedResults.values()),
    aiWebToolsCount: aiWebToolsResults.length,
    expandedKeywords
  };
};
