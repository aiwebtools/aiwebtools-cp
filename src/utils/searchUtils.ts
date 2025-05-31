
import { Tool } from "@/types/tools";
import { performMainSearch } from "./search/mainSearch";
import { sortSearchResults } from "./search/resultsSorting";

export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm || searchTerm.trim().length === 0) {
    return [];
  }

  // Perform the main search
  const { results, aiWebToolsCount, expandedKeywords } = performMainSearch(tools, searchTerm);

  // Sort and prioritize results
  const { sortedResults, exactMatchesCount, titleStartsWithCount } = sortSearchResults(
    results, 
    searchTerm, 
    expandedKeywords
  );
  
  console.log(`✅ Enhanced search complete: ${sortedResults.length} total results`);
  console.log(`🎯 AI Web Tools results: ${aiWebToolsCount}`);
  console.log(`🏆 EXACT MATCHES: ${exactMatchesCount} (will appear first)`);
  console.log(`🚀 TITLE STARTS WITH: ${titleStartsWithCount} (will appear second)`);
  console.log(`📋 Top 15 results:`, sortedResults.slice(0, 15).map((t, i) => `${i+1}. ${t.title}`));
  
  return sortedResults;
};
