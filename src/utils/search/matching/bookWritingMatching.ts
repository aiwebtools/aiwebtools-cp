
import { Tool } from "@/types/tools";

// Enhanced book writing matching for ebook searches
export const matchBookWriting = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  // Direct book writing tool matches
  const bookWritingKeywords = [
    'book', 'ebook', 'e-book', 'writer', 'writing', 'author', 'publishing',
    'manuscript', 'novel', 'story', 'chapter', 'publication', 'bookwriting',
    'book writer', 'book writing', 'story writing', 'creative writing',
    'fiction', 'non-fiction', 'autobiography', 'biography', 'memoir'
  ];

  // Check if tool is a book writing tool
  const isBookWritingTool = tool.title.toLowerCase().includes('book') ||
                           tool.title.toLowerCase().includes('writer') ||
                           tool.description.toLowerCase().includes('book') ||
                           tool.description.toLowerCase().includes('writing');

  if (!isBookWritingTool) return false;

  // Check for keyword matches
  return bookWritingKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || keyword.includes(lowerSearchTerm)
  );
};

export const scoreBookWriting = (tool: Tool, searchTerm: string): number => {
  if (!matchBookWriting(tool, searchTerm)) return 0;

  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;

  // Higher scores for specific ebook-related searches
  if (lowerSearchTerm.includes('ebook') || lowerSearchTerm.includes('e-book')) {
    if (tool.title.toLowerCase().includes('book')) {
      score += 5000; // Very high score for book tools when searching ebook
    }
  }

  // Score for book-related terms
  if (lowerSearchTerm.includes('book')) {
    if (tool.title.toLowerCase().includes('book')) {
      score += 4000;
    }
  }

  // Score for writing-related terms
  if (lowerSearchTerm.includes('writer') || lowerSearchTerm.includes('writing')) {
    if (tool.title.toLowerCase().includes('writer')) {
      score += 3500;
    }
  }

  // Bonus for GPT tools that are book-related
  if (tool.title.toLowerCase().includes('gpt') && tool.title.toLowerCase().includes('book')) {
    score += 1500;
  }

  return score;
};
