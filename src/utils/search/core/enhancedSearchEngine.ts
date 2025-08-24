import { Tool } from "@/types/tools";
import { performIntelligentPartialMatching, PartialMatchResult } from "./intelligentPartialMatching";
import { performUltraIntelligentMatching, UltraMatchResult } from "./ultraIntelligentMatching";
import { fuzzyMatchTool } from "./fuzzyMatching";

// Enhanced search result with detailed matching information
interface EnhancedSearchResult {
  tool: Tool;
  totalScore: number;
  matchTypes: string[];
  matchedTerms: string[];
  relevanceFactors: string[];
}

// Super intelligent search engine that combines all matching strategies
export const performSuperIntelligentSearch = (
  tools: Tool[], 
  searchTerm: string
): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = normalizedSearchTerm.split(/[\s,.-]+/).filter(word => word.length > 0);
  
  console.log(`🧠 Super intelligent search for: "${searchTerm}" (${searchWords.length} words)`);
  
  // PRIORITY: Ultra intelligent matching for very short searches (1-4 characters)
  if (normalizedSearchTerm.length <= 4) {
    const ultraResults = performUltraIntelligentMatching(tools, normalizedSearchTerm);
    if (ultraResults.length > 0) {
      console.log(`🚀 Ultra intelligent found ${ultraResults.length} results for short search`);
      return ultraResults.map(result => result.tool);
    }
  }
  
  const enhancedResults: EnhancedSearchResult[] = [];
  
  for (const tool of tools) {
    const result: EnhancedSearchResult = {
      tool,
      totalScore: 0,
      matchTypes: [],
      matchedTerms: [],
      relevanceFactors: []
    };
    
    // 1. EXACT MATCHING - Highest Priority
    const exactScore = performExactMatching(tool, normalizedSearchTerm);
    if (exactScore > 0) {
      result.totalScore += exactScore;
      result.matchTypes.push('exact');
      result.relevanceFactors.push('Exact match found');
    }
    
    // 2. INTELLIGENT PARTIAL MATCHING - Very High Priority
    const partialResults = performIntelligentPartialMatching([tool], normalizedSearchTerm);
    if (partialResults.length > 0) {
      const partialResult = partialResults[0];
      result.totalScore += partialResult.score;
      result.matchTypes.push(partialResult.matchType);
      result.matchedTerms.push(...partialResult.matchedWords);
      result.relevanceFactors.push(`${partialResult.matchType} matching`);
    }
    
    // 3. MULTI-WORD INTELLIGENT MATCHING
    if (searchWords.length > 1) {
      const multiWordScore = performMultiWordMatching(tool, searchWords);
      if (multiWordScore.score > 0) {
        result.totalScore += multiWordScore.score;
        result.matchTypes.push('multi-word');
        result.matchedTerms.push(...multiWordScore.matchedWords);
        result.relevanceFactors.push('Multi-word relevance');
      }
    }
    
    // 4. CONTEXT-AWARE MATCHING
    const contextScore = performContextAwareMatching(tool, normalizedSearchTerm);
    if (contextScore > 0) {
      result.totalScore += contextScore;
      result.matchTypes.push('contextual');
      result.relevanceFactors.push('Context relevance');
    }
    
    // 5. SEMANTIC MATCHING
    const semanticScore = performSemanticMatching(tool, normalizedSearchTerm);
    if (semanticScore > 0) {
      result.totalScore += semanticScore;
      result.matchTypes.push('semantic');
      result.relevanceFactors.push('Semantic relevance');
    }
    
    // 6. POPULARITY AND QUALITY BOOST
    const qualityBoost = calculateQualityBoost(tool);
    result.totalScore += qualityBoost;
    
    if (result.totalScore > 0) {
      enhancedResults.push(result);
    }
  }
  
  // Sort by total score with intelligent tie-breaking
  const sortedResults = enhancedResults.sort((a, b) => {
    // Primary sort by total score
    if (b.totalScore !== a.totalScore) {
      return b.totalScore - a.totalScore;
    }
    
    // Tie-breaker 1: Prefer exact matches
    const aHasExact = a.matchTypes.includes('exact');
    const bHasExact = b.matchTypes.includes('exact');
    if (aHasExact !== bHasExact) {
      return aHasExact ? -1 : 1;
    }
    
    // Tie-breaker 2: Prefer predictive matches
    const aHasPredictive = a.matchTypes.includes('predictive');
    const bHasPredictive = b.matchTypes.includes('predictive');
    if (aHasPredictive !== bHasPredictive) {
      return aHasPredictive ? -1 : 1;
    }
    
    // Tie-breaker 3: Prefer higher rated tools
    const aRating = a.tool.rating || 0;
    const bRating = b.tool.rating || 0;
    if (bRating !== aRating) {
      return bRating - aRating;
    }
    
    // Final tie-breaker: Alphabetical by title
    return a.tool.title.localeCompare(b.tool.title);
  });
  
  const finalResults = sortedResults.map(result => result.tool);
  
  // Log search performance for top results
  if (sortedResults.length > 0) {
    console.log(`🎯 Top search results for "${searchTerm}":`);
    sortedResults.slice(0, 5).forEach((result, index) => {
      console.log(`  ${index + 1}. ${result.tool.title} (Score: ${result.totalScore}, Types: ${result.matchTypes.join(', ')})`);
    });
  }
  
  return finalResults;
};

// Exact matching with various forms
const performExactMatching = (tool: Tool, searchTerm: string): number => {
  const titleLower = tool.title.toLowerCase();
  const descLower = tool.description.toLowerCase();
  const categoryLower = tool.category?.toLowerCase() || '';
  
  let score = 0;
  
  // Perfect title match
  if (titleLower === searchTerm) {
    score += 20000;
  }
  // Title starts with search term
  else if (titleLower.startsWith(searchTerm)) {
    score += 15000;
  }
  // Title contains exact term
  else if (titleLower.includes(searchTerm)) {
    score += 10000;
  }
  
  // Description exact match
  if (descLower.includes(searchTerm)) {
    score += 5000;
  }
  
  // Category exact match
  if (categoryLower.includes(searchTerm)) {
    score += 7000;
  }
  
  return score;
};

// Multi-word matching with intelligent word order and relevance
const performMultiWordMatching = (
  tool: Tool, 
  searchWords: string[]
): { score: number; matchedWords: string[] } => {
  let score = 0;
  const matchedWords: string[] = [];
  
  const titleWords = tool.title.toLowerCase().split(/[\s\-_]+/);
  const descWords = tool.description.toLowerCase().split(/[\s\-_]+/);
  const categoryWords = tool.category?.toLowerCase().split(/[\s\-_]+/) || [];
  
  let titleMatches = 0;
  let descMatches = 0;
  let categoryMatches = 0;
  
  for (const searchWord of searchWords) {
    if (searchWord.length < 2) continue;
    
    // Check title matches
    for (const titleWord of titleWords) {
      if (titleWord.includes(searchWord)) {
        titleMatches++;
        matchedWords.push(titleWord);
        
        // Bonus for exact word match
        if (titleWord === searchWord) {
          score += 3000;
        }
        // Bonus for prefix match
        else if (titleWord.startsWith(searchWord)) {
          score += 2000;
        }
        // Partial match
        else {
          score += 1000;
        }
        break; // Only count first match per search word
      }
    }
    
    // Check description matches
    for (const descWord of descWords) {
      if (descWord.includes(searchWord)) {
        descMatches++;
        matchedWords.push(descWord);
        score += 500;
        break;
      }
    }
    
    // Check category matches
    for (const categoryWord of categoryWords) {
      if (categoryWord.includes(searchWord)) {
        categoryMatches++;
        matchedWords.push(categoryWord);
        score += 800;
        break;
      }
    }
  }
  
  // Bonus for matching multiple words
  const totalMatches = titleMatches + descMatches + categoryMatches;
  if (totalMatches > 1) {
    score += totalMatches * 1000;
  }
  
  // Special bonus for matching all search words
  if (titleMatches === searchWords.length) {
    score += 5000;
  }
  
  return { score, matchedWords: [...new Set(matchedWords)] };
};

// Context-aware matching based on tool relationships and categories
const performContextAwareMatching = (tool: Tool, searchTerm: string): number => {
  let score = 0;
  
  // Category-specific context boosting
  const categoryContexts: Record<string, string[]> = {
    'education': ['learn', 'study', 'course', 'school', 'teach', 'lesson'],
    'health': ['medical', 'doctor', 'wellness', 'fitness', 'nutrition'],
    'business': ['finance', 'money', 'trading', 'marketing', 'startup'],
    'creative': ['art', 'design', 'video', 'music', 'writing', 'book'],
    'game': ['gaming', 'entertainment', 'play', 'fun', 'interactive'],
    'ai': ['artificial', 'intelligence', 'machine', 'automation', 'gpt']
  };
  
  const toolCategory = tool.category?.toLowerCase() || '';
  const toolTags = (tool.tags || []).join(' ').toLowerCase();
  const toolDesc = tool.description.toLowerCase();
  
  for (const [context, keywords] of Object.entries(categoryContexts)) {
    if (toolCategory.includes(context) || toolTags.includes(context)) {
      for (const keyword of keywords) {
        if (searchTerm.includes(keyword)) {
          score += 2000;
        }
      }
    }
  }
  
  return score;
};

// Semantic matching for related concepts and synonyms
const performSemanticMatching = (tool: Tool, searchTerm: string): number => {
  let score = 0;
  
  // Semantic relationships
  const semanticMappings: Record<string, string[]> = {
    'ai': ['artificial intelligence', 'machine learning', 'automation', 'gpt', 'bot'],
    'game': ['gaming', 'entertainment', 'play', 'interactive', 'video game'],
    'health': ['medical', 'wellness', 'fitness', 'doctor', 'healthcare'],
    'business': ['finance', 'money', 'corporate', 'professional', 'commercial'],
    'education': ['learning', 'teaching', 'academic', 'school', 'university'],
    'creative': ['artistic', 'design', 'media', 'content', 'visual'],
    'write': ['writing', 'author', 'content', 'text', 'document'],
    'music': ['audio', 'sound', 'melody', 'song', 'composition']
  };
  
  const toolText = `${tool.title} ${tool.description} ${tool.category} ${(tool.tags || []).join(' ')}`.toLowerCase();
  
  for (const [concept, synonyms] of Object.entries(semanticMappings)) {
    if (searchTerm.includes(concept)) {
      for (const synonym of synonyms) {
        if (toolText.includes(synonym)) {
          score += 1500;
        }
      }
    }
  }
  
  return score;
};

// Calculate quality boost based on tool metrics
const calculateQualityBoost = (tool: Tool): number => {
  let boost = 0;
  
  // Rating boost
  if (tool.rating) {
    boost += tool.rating * 100;
  }
  
  // Vote count boost (popularity)
  if (tool.totalVotes) {
    boost += Math.min(tool.totalVotes / 10, 500); // Cap at 500 bonus points
  }
  
  // AI Web Tools originals get priority
  if (tool.directUrl?.includes('aiwebtools')) {
    boost += 1000;
  }
  
  return boost;
};