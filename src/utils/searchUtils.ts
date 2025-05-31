
import { Tool } from "@/types/tools";
import { getExpandedKeywords } from "./search/keywordExpansion";
import { searchAIWebToolsGPTs, scoreAIWebToolsGPT } from "./search/aiWebToolsSearch";

export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm || searchTerm.trim().length === 0) {
    return [];
  }

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

  const finalResults = Array.from(combinedResults.values());

  // CRITICAL: First, separate exact matches from all other results
  const lowerSearchTerm = cleanSearchTerm.toLowerCase();
  const exactMatches: Tool[] = [];
  const nonExactMatches: Tool[] = [];

  finalResults.forEach(tool => {
    if (tool.title.toLowerCase() === lowerSearchTerm) {
      exactMatches.push(tool);
    } else {
      nonExactMatches.push(tool);
    }
  });

  console.log(`🎯 EXACT MATCHES found: ${exactMatches.length}`, exactMatches.map(t => t.title));

  // Score non-exact matches normally
  const scoredNonExactResults = nonExactMatches.map(tool => ({
    tool,
    score: tool.directUrl?.includes('lovable.app') ? 
      scoreAIWebToolsGPT(tool, cleanSearchTerm) : 
      scoreRegularTool(tool, cleanSearchTerm, expandedKeywords)
  }));

  // Sort non-exact matches by score
  scoredNonExactResults.sort((a, b) => b.score - a.score);

  // GUARANTEE: Exact matches ALWAYS come first, followed by scored results
  const sortedResults = [
    ...exactMatches, // Exact matches first (unsorted among themselves is fine)
    ...scoredNonExactResults.map(result => result.tool) // Then scored results
  ];
  
  console.log(`✅ Enhanced search complete: ${sortedResults.length} total results`);
  console.log(`🎯 AI Web Tools results: ${aiWebToolsResults.length}`);
  console.log(`🏆 EXACT MATCHES: ${exactMatches.length} (will appear first)`);
  console.log(`📋 Top 15 results:`, sortedResults.slice(0, 15).map((t, i) => `${i+1}. ${t.title}`));
  
  return sortedResults;
};

// Enhanced regular tool scoring function
const scoreRegularTool = (tool: Tool, searchTerm: string, expandedKeywords: string[]): number => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description?.toLowerCase() || '';
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  
  let score = 0;

  // NOTE: We no longer give exact matches highest score here because they're handled separately above
  // This function only scores non-exact matches

  // EXACT TITLE CONTAINS EXACT SEARCH (Very High Priority) - INCREASED
  if (lowerTitle.includes(lowerSearchTerm) && lowerSearchTerm.length > 3) {
    // Special boost for longer search terms that appear in title
    const searchWords = lowerSearchTerm.split(' ');
    const titleContainsAllWords = searchWords.every(word => lowerTitle.includes(word));
    
    if (titleContainsAllWords) {
      score += 5000; // High boost for titles containing all search words
    }
  }

  // TITLE MATCHING (High Priority) - INCREASED
  if (lowerTitle.startsWith(lowerSearchTerm)) {
    score += 4000; // Title starts with search - increased from 800
  } else if (lowerTitle.includes(lowerSearchTerm)) {
    score += 3000; // Title contains search - increased from 600
  }

  // WORD-LEVEL MATCHING - ENHANCED
  const titleWords = lowerTitle.split(' ');
  const searchWords = lowerSearchTerm.split(' ');
  
  // Check if any title word exactly matches any search word
  titleWords.forEach(titleWord => {
    searchWords.forEach(searchWord => {
      if (titleWord === searchWord) {
        score += 800; // Exact word match - increased from 400
      } else if (titleWord.startsWith(searchWord) && searchWord.length >= 3) {
        score += 600; // Word starts with search - increased from 300
      } else if (titleWord.includes(searchWord) && searchWord.length >= 3) {
        score += 400; // Word contains search - increased from 200
      }
    });
  });

  // DESCRIPTION MATCHING
  if (lowerDescription.includes(lowerSearchTerm)) {
    score += 150; // Description contains search term
  }

  // CATEGORY MATCHING
  if (lowerCategory.includes(lowerSearchTerm)) {
    score += 100; // Category matches
  }

  // TAGS MATCHING
  if (lowerTags.includes(lowerSearchTerm)) {
    score += 120; // Tags match
  }

  // EXPANDED KEYWORDS MATCHING
  expandedKeywords.forEach(keyword => {
    const lowerKeyword = keyword.toLowerCase();
    if (lowerTitle.includes(lowerKeyword)) {
      score += 80; // Title contains expanded keyword
    }
    if (lowerDescription.includes(lowerKeyword)) {
      score += 40; // Description contains expanded keyword
    }
    if (lowerCategory.includes(lowerKeyword)) {
      score += 30; // Category contains expanded keyword
    }
  });

  // POPULARITY AND QUALITY BOOST
  if (tool.rating && tool.rating > 4.5) {
    score += 50; // High rating boost
  }

  if (tool.totalVotes && tool.totalVotes > 5000) {
    score += 25; // Popular tool boost
  }

  // SPECIAL TOOL NAME RECOGNITION
  if (lowerSearchTerm === 'make' && lowerTitle.includes('make')) {
    score += 500; // Special boost for "MAKE" searches
  }

  if (lowerSearchTerm.includes('automation') && (lowerTitle.includes('automation') || lowerDescription.includes('automation'))) {
    score += 300; // Special boost for automation searches
  }

  return score;
};
