
import { 
  coreAIKeywords, 
  contentKeywords, 
  creativeKeywords, 
  businessKeywords, 
  technicalKeywords, 
  industryKeywords, 
  specialtyKeywords,
  userIntentKeywords,
  searchMetaKeywords
} from "@/data/keywords";

// Enhanced keyword expansion with better educational tool support
export const getExpandedKeywords = (searchTerm: string): string[] => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const expandedKeywords = new Set<string>([searchTerm, lowerSearchTerm]);
  
  // LEARNING AND EDUCATION SPECIFIC EXPANSIONS
  if (lowerSearchTerm.includes('learn')) {
    expandedKeywords.add('learning');
    expandedKeywords.add('education');
    expandedKeywords.add('educational');
    expandedKeywords.add('course');
    expandedKeywords.add('courses');
    expandedKeywords.add('skill');
    expandedKeywords.add('skills');
    expandedKeywords.add('tutorial');
    expandedKeywords.add('tutor');
    expandedKeywords.add('study');
    expandedKeywords.add('training');
    expandedKeywords.add('teaching');
    expandedKeywords.add('instructor');
    expandedKeywords.add('academy');
    expandedKeywords.add('college');
    expandedKeywords.add('university');
    expandedKeywords.add('degree');
    expandedKeywords.add('homeschool');
    expandedKeywords.add('home-school');
    expandedKeywords.add('classroom');
  }
  
  // SKILL-RELATED EXPANSIONS
  if (lowerSearchTerm.includes('skill')) {
    expandedKeywords.add('learn');
    expandedKeywords.add('learning');
    expandedKeywords.add('training');
    expandedKeywords.add('course');
    expandedKeywords.add('education');
    expandedKeywords.add('tutorial');
    expandedKeywords.add('development');
  }
  
  // COURSE-RELATED EXPANSIONS
  if (lowerSearchTerm.includes('course')) {
    expandedKeywords.add('learn');
    expandedKeywords.add('learning');
    expandedKeywords.add('education');
    expandedKeywords.add('skill');
    expandedKeywords.add('training');
    expandedKeywords.add('class');
    expandedKeywords.add('lesson');
    expandedKeywords.add('curriculum');
  }
  
  // Medical/Health expansions
  if (lowerSearchTerm.includes('medical') || lowerSearchTerm.includes('health') || lowerSearchTerm.includes('doctor')) {
    expandedKeywords.add('medical');
    expandedKeywords.add('health');
    expandedKeywords.add('healthcare');
    expandedKeywords.add('doctor');
    expandedKeywords.add('dr');
    expandedKeywords.add('wellness');
    expandedKeywords.add('mental health');
    expandedKeywords.add('physician');
    expandedKeywords.add('clinical');
    expandedKeywords.add('pharmaceutical');
    expandedKeywords.add('veterinarian');
    expandedKeywords.add('vet');
    expandedKeywords.add('pet care');
  }
  
  // GPT-related expansions
  if (lowerSearchTerm.includes('gpt') || lowerSearchTerm.includes('chat')) {
    expandedKeywords.add('gpt');
    expandedKeywords.add('chatgpt');
    expandedKeywords.add('chat');
    expandedKeywords.add('assistant');
    expandedKeywords.add('ai chat');
    expandedKeywords.add('conversation');
    expandedKeywords.add('custom gpt');
  }
  
  // Video/Media expansions
  if (lowerSearchTerm.includes('video')) {
    expandedKeywords.add('video');
    expandedKeywords.add('movie');
    expandedKeywords.add('film');
    expandedKeywords.add('cinema');
    expandedKeywords.add('scene');
    expandedKeywords.add('editing');
    expandedKeywords.add('production');
    expandedKeywords.add('media');
  }
  
  // Writing expansions
  if (lowerSearchTerm.includes('writ')) {
    expandedKeywords.add('writing');
    expandedKeywords.add('writer');
    expandedKeywords.add('content');
    expandedKeywords.add('text');
    expandedKeywords.add('copy');
    expandedKeywords.add('script');
    expandedKeywords.add('book');
    expandedKeywords.add('article');
    expandedKeywords.add('blog');
  }
  
  // Search through all keyword categories for matches
  const allKeywordSets = [
    coreAIKeywords,
    contentKeywords,
    creativeKeywords,
    businessKeywords,
    technicalKeywords,
    industryKeywords,
    specialtyKeywords,
    userIntentKeywords,
    searchMetaKeywords
  ];
  
  allKeywordSets.forEach(keywordSet => {
    Object.entries(keywordSet).forEach(([key, synonyms]) => {
      // Check if search term matches any keyword or synonym
      if (lowerSearchTerm.includes(key.toLowerCase()) || 
          synonyms.some(syn => lowerSearchTerm.includes(syn.toLowerCase()))) {
        expandedKeywords.add(key);
        synonyms.forEach(syn => expandedKeywords.add(syn));
      }
      
      // Also check reverse - if any synonym contains the search term
      if (synonyms.some(syn => syn.toLowerCase().includes(lowerSearchTerm))) {
        expandedKeywords.add(key);
        synonyms.forEach(syn => expandedKeywords.add(syn));
      }
    });
  });
  
  // Add partial matches for longer search terms
  if (lowerSearchTerm.length >= 4) {
    allKeywordSets.forEach(keywordSet => {
      Object.entries(keywordSet).forEach(([key, synonyms]) => {
        if (key.toLowerCase().includes(lowerSearchTerm) || 
            synonyms.some(syn => syn.toLowerCase().includes(lowerSearchTerm))) {
          expandedKeywords.add(key);
          synonyms.forEach(syn => expandedKeywords.add(syn));
        }
      });
    });
  }
  
  return Array.from(expandedKeywords);
};
