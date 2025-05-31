
import { Tool } from "@/types/tools";

// Enhanced regular tool scoring function
export const scoreRegularTool = (tool: Tool, searchTerm: string, expandedKeywords: string[]): number => {
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
