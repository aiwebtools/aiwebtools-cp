
import { Tool } from "@/types/tools";
import { scoreAIWebToolsGPT } from "./aiWebToolsSearch";
import { scoreRegularTool } from "./regularToolScoring";

export const sortSearchResults = (results: Tool[], searchTerm: string, expandedKeywords: string[]) => {
  const cleanSearchTerm = searchTerm.trim();
  const lowerSearchTerm = cleanSearchTerm.toLowerCase();
  
  // Separate results into priority groups
  const exactMatches: Tool[] = [];
  const titleStartsWithMatches: Tool[] = [];
  const nonPriorityMatches: Tool[] = [];

  results.forEach(tool => {
    const lowerTitle = tool.title.toLowerCase();
    
    // Perfect exact match gets highest priority
    if (lowerTitle === lowerSearchTerm) {
      exactMatches.push(tool);
    }
    // Title starts with search term gets second highest priority (this will catch your GPTs!)
    else if (lowerTitle.startsWith(lowerSearchTerm)) {
      titleStartsWithMatches.push(tool);
    }
    // Everything else
    else {
      nonPriorityMatches.push(tool);
    }
  });

  console.log(`🎯 EXACT MATCHES found: ${exactMatches.length}`, exactMatches.map(t => t.title));
  console.log(`🚀 TITLE STARTS WITH MATCHES found: ${titleStartsWithMatches.length}`, titleStartsWithMatches.map(t => t.title));

  // Score the title-starts-with matches to prioritize AI Web Tools GPTs
  const scoredTitleStartsWithResults = titleStartsWithMatches.map(tool => ({
    tool,
    score: tool.directUrl?.includes('lovable.app') ? 
      scoreAIWebToolsGPT(tool, cleanSearchTerm) + 1000 : // Extra boost for AI Web Tools GPTs
      scoreRegularTool(tool, cleanSearchTerm, expandedKeywords)
  }));

  // Score non-priority matches normally
  const scoredNonPriorityResults = nonPriorityMatches.map(tool => ({
    tool,
    score: tool.directUrl?.includes('lovable.app') ? 
      scoreAIWebToolsGPT(tool, cleanSearchTerm) : 
      scoreRegularTool(tool, cleanSearchTerm, expandedKeywords)
  }));

  // Sort both groups by score
  scoredTitleStartsWithResults.sort((a, b) => b.score - a.score);
  scoredNonPriorityResults.sort((a, b) => b.score - a.score);

  // GUARANTEE: Exact matches FIRST, then title-starts-with matches, then everything else
  const sortedResults = [
    ...exactMatches, // Perfect matches first
    ...scoredTitleStartsWithResults.map(result => result.tool), // Your GPTs will be here!
    ...scoredNonPriorityResults.map(result => result.tool) // Everything else
  ];

  return {
    sortedResults,
    exactMatchesCount: exactMatches.length,
    titleStartsWithCount: titleStartsWithMatches.length
  };
};
