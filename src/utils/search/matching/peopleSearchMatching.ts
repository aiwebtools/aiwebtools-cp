import { Tool } from "@/types/tools";

export const calculatePeopleSearchScore = (tool: Tool, searchTerm: string): number => {
  if (!searchTerm || searchTerm.length < 2) return 0;
  
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  let score = 0;
  
  // Define people/person search keywords
  const peopleSearchKeywords = [
    'person information finder',
    'person finder',
    'people search',
    'background research',
    'find people',
    'contact finder',
    'public records',
    'people finder',
    'information finder',
    'background check',
    'profile finder',
    'contact verification',
    'social media search'
  ];
  
  // Check if search term contains people search related terms
  const searchContainsPeopleTerms = peopleSearchKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || keyword.includes(lowerSearchTerm)
  );
  
  if (!searchContainsPeopleTerms) {
    return 0;
  }
  
  // Special ultra-high priority for Person Information Finder GPT
  if (tool.title.toLowerCase().includes('person information finder') ||
      tool.title.toLowerCase().includes('person finder') ||
      tool.directUrl?.includes('personfindergpt')) {
    score += 25000; // Highest priority for person finder searches
  }
  
  // High priority for other people search tools
  if (tool.title.toLowerCase().includes('background research') ||
      tool.title.toLowerCase().includes('public records') ||
      tool.title.toLowerCase().includes('contact finder')) {
    score += 15000;
  }
  
  // Medium priority for related tools
  if (tool.description.toLowerCase().includes('person information') ||
      tool.description.toLowerCase().includes('background research') ||
      tool.description.toLowerCase().includes('public records') ||
      tool.description.toLowerCase().includes('contact finding')) {
    score += 10000;
  }
  
  // Tag-based scoring
  if (tool.tags) {
    const peopleSearchTags = [
      'background research', 'public records', 'social media search',
      'contact verification', 'profile compilation', 'people search',
      'contact finding', 'information gathering'
    ];
    
    for (const tag of tool.tags) {
      const lowerTag = tag.toLowerCase();
      for (const searchTag of peopleSearchTags) {
        if (lowerTag.includes(searchTag) || searchTag.includes(lowerTag)) {
          score += 5000;
        }
      }
    }
  }
  
  // Partial word matching for "person" searches
  if (lowerSearchTerm.includes('person') && tool.title.toLowerCase().includes('person')) {
    score += 8000;
  }
  
  // Partial word matching for "finder" searches
  if (lowerSearchTerm.includes('finder') && tool.title.toLowerCase().includes('finder')) {
    score += 8000;
  }
  
  // Partial word matching for "information" searches
  if (lowerSearchTerm.includes('information') && tool.title.toLowerCase().includes('information')) {
    score += 6000;
  }
  
  return score;
};