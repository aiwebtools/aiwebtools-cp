
import { Tool } from "@/types/tools";
import { keywordMapping } from "@/data/keywordMapping";

// Enhanced search function with comprehensive keywords and intelligent matching
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const term = searchTerm.toLowerCase().trim();
  
  // Helper function to get expanded keywords
  const getExpandedKeywords = (searchTerm: string): string[] => {
    const words = searchTerm.split(' ');
    const expandedKeywords = new Set([searchTerm]);
    
    words.forEach(word => {
      if (keywordMapping[word]) {
        keywordMapping[word].forEach(keyword => expandedKeywords.add(keyword));
      }
      expandedKeywords.add(word);
    });
    
    return Array.from(expandedKeywords);
  };

  // Helper function to check if a tool matches the search term
  const matchesTool = (tool: Tool, searchTerm: string): boolean => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
    
    // Get expanded keywords for intelligent matching
    const expandedKeywords = getExpandedKeywords(searchTerm);
    
    // Direct matches with expanded keywords
    for (const keyword of expandedKeywords) {
      if (lowerTitle.includes(keyword) || 
          lowerDescription.includes(keyword) || 
          lowerCategory.includes(keyword) || 
          lowerTags.some(tag => tag.includes(keyword))) {
        return true;
      }
    }
    
    // Context-aware phrase matching with enhanced tool-specific searches
    const contextMatches = [
      // Theater and Performance
      ((searchTerm.includes('make a play') || searchTerm.includes('write a play')) && 
       (lowerTitle.includes('playwright') || lowerTitle.includes('stagemaster'))),
      
      // Writing and Books
      ((searchTerm.includes('write a book') || searchTerm.includes('book writer')) && 
       lowerTitle.includes('writer')),
      
      // Training and Staff
      ((searchTerm.includes('train staff') || searchTerm.includes('training manual')) && 
       lowerTitle.includes('training')),
      
      // Business context
      ((searchTerm.includes('start a business') || searchTerm.includes('build my business') || 
        searchTerm.includes('business tools')) && 
       (lowerCategory.includes('business') || lowerTags.some(tag => tag.includes('business')))),
      
      // Learning context
      ((searchTerm.includes('want to learn') || searchTerm.includes('learning tools')) && 
       (lowerTitle.includes('learn') || lowerCategory.includes('learning'))),
      
      // Data analysis context
      ((searchTerm.includes('data analysis') || searchTerm.includes('analytics tools')) && 
       (lowerTags.some(tag => tag.includes('data') || tag.includes('analytics')))),
      
      // Cannabis variations
      ((searchTerm.includes('weed') || searchTerm.includes('pot') || searchTerm.includes('marijuana')) && 
       lowerTitle.includes('cannabis')),
      
      // Creative context
      ((searchTerm.includes('creative tools') || searchTerm.includes('design tools')) && 
       (lowerCategory.includes('design') || lowerCategory.includes('creative'))),
      
      // AI context
      ((searchTerm.includes('ai tools') || searchTerm.includes('artificial intelligence')) && 
       (lowerTitle.includes('ai') || lowerTitle.includes('gpt'))),
      
      // Video generation context
      ((searchTerm.includes('video generation') || searchTerm.includes('text to video')) && 
       (lowerTitle.includes('video') || lowerTitle.includes('sora') || lowerTitle.includes('runway'))),
      
      // Music generation context
      ((searchTerm.includes('music generation') || searchTerm.includes('create music')) && 
       (lowerTitle.includes('music') || lowerTitle.includes('suno') || lowerTitle.includes('udio'))),
      
      // 3D modeling context
      ((searchTerm.includes('3d modeling') || searchTerm.includes('text to 3d')) && 
       (lowerTitle.includes('3d') || lowerTitle.includes('meshy'))),
    ];
    
    if (contextMatches.some(match => match)) return true;
    
    // Fuzzy matching for tool names
    const titleWords = lowerTitle.split(' ');
    const searchWords = searchTerm.split(' ');
    
    // Check if all search words match at least one title word (partial matching)
    const allWordsMatch = searchWords.every(searchWord => 
      titleWords.some(titleWord => titleWord.includes(searchWord) || searchWord.includes(titleWord))
    );
    
    if (allWordsMatch) return true;
    
    // Category-based matching
    const categoryMatches = [
      (searchTerm.includes('business') && lowerCategory.includes('business')),
      (searchTerm.includes('learning') && lowerCategory.includes('learning')),
      (searchTerm.includes('education') && lowerCategory.includes('education')),
      (searchTerm.includes('creative') && lowerCategory.includes('creative')),
      (searchTerm.includes('design') && lowerCategory.includes('design')),
      (searchTerm.includes('video') && lowerCategory.includes('video')),
      (searchTerm.includes('audio') && lowerCategory.includes('audio')),
      (searchTerm.includes('health') && lowerCategory.includes('health')),
      (searchTerm.includes('legal') && lowerCategory.includes('legal')),
      (searchTerm.includes('professional') && lowerCategory.includes('professional')),
    ];
    
    return categoryMatches.some(match => match);
  };
  
  return tools.filter(tool => matchesTool(tool, term));
};
