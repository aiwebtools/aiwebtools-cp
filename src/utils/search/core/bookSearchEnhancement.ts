
import { Tool } from "@/types/tools";

// Enhanced search specifically for book and ebook related queries
export const enhanceBookSearch = (tools: Tool[], searchTerm: string): Tool[] => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  
  // If searching for ebook/e-book, prioritize book writing tools
  if (lowerSearchTerm.includes('ebook') || lowerSearchTerm.includes('e-book') || lowerSearchTerm === 'book') {
    return tools.filter(tool => {
      const searchableText = [
        tool.title,
        tool.description,
        tool.category,
        ...(tool.tags || [])
      ].join(' ').toLowerCase();
      
      // Prioritize tools with "book" in title or description
      return searchableText.includes('book') || 
             searchableText.includes('writer') ||
             searchableText.includes('writing') ||
             searchableText.includes('author') ||
             searchableText.includes('publishing');
    });
  }
  
  return tools;
};

export const scoreBookSearchTerms = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // Special handling for ebook searches
  if (lowerSearchTerm.includes('ebook') || lowerSearchTerm.includes('e-book')) {
    if (tool.title.toLowerCase().includes('book writer')) {
      score += 6000; // Very high priority for "BOOK WRITER GPT"
    } else if (tool.title.toLowerCase().includes('book')) {
      score += 4500;
    }
  }
  
  return score;
};
