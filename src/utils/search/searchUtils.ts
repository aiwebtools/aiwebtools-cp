import { Tool } from "@/types/tools";
import { searchAIWebToolsGPTs, scoreAIWebToolsGPT } from "./aiWebToolsSearch";
import { fuzzyMatchTool, phoneticMatch } from "./core/fuzzyMatching";

// Tools to exclude from search results
const EXCLUDED_TOOLS = [
  "PERSONAL CAPITAL",
  "PERSONAL ASSISTANT GPT",
  "personal financial advisor"
];

// Intent detection patterns for better search prioritization
const INTENT_PATTERNS = {
  education: {
    triggers: ['college', 'university', 'degree', 'education', 'learn', 'study', 'course', 'school', 'academic', 'skill', 'training', 'lesson', 'class', 'homework', 'tutor', 'teacher'],
    priority: ['COLLEGE DEGREE GPT', 'LEARN ANY SKILL GPT', 'LEARN ANY COURSE GPT', 'Home-Schooling Assistant GPT', 'HomeSchool GPT'],
    categories: ['Education & Research Tools', 'Learning & Education', 'Educational Tools']
  },
  creative: {
    triggers: ['book', 'write', 'writing', 'author', 'story', 'novel', 'script', 'content', 'blog', 'article'],
    priority: ['BOOK WRITER GPT', 'Movie Script Writer GPT', 'Article and Blog Rewriter GPT', 'Creative Writing Tools'],
    categories: ['Writing & Text Generation', 'Content Creation', 'Creative Tools']
  },
  health: {
    triggers: ['doctor', 'health', 'medical', 'wellness', 'fitness', 'nutrition', 'therapy', 'mental'],
    priority: ['Personalized DR. GPT (Doctor GPT)', 'Mental Wellness GPT', 'Veterinarian GPT'],
    categories: ['Health & Wellness', 'Healthcare', 'Medical Tools']
  },
  business: {
    triggers: ['business', 'marketing', 'finance', 'trading', 'investment', 'money', 'budget', 'startup'],
    priority: ['Business Plan Generator GPT', 'Startup Validator GPT', 'Trader GPT', 'MicroSaaS GPT'],
    categories: ['Business & Productivity', 'Finance & Trading', 'Marketing Tools']
  }
};

// Detect user intent based on search term
const detectIntent = (searchTerm: string): string | null => {
  const lowerTerm = searchTerm.toLowerCase();
  
  for (const [intent, config] of Object.entries(INTENT_PATTERNS)) {
    if (config.triggers.some(trigger => lowerTerm.includes(trigger))) {
      console.log(`🎯 Detected intent: ${intent} for search: ${searchTerm}`);
      return intent;
    }
  }
  
  return null;
};

// Enhanced search function with intent detection and optimized performance
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) {
    return tools.filter(tool => !EXCLUDED_TOOLS.includes(tool.title));
  }

  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = normalizedSearchTerm.split(/[\s,.-]+/).filter(word => word.length > 1);
  
  // Fast phonetic variations (only for performance-critical terms)
  const phoneticVariations = searchTerm.length <= 6 ? phoneticMatch(normalizedSearchTerm) : [];
  
  // Quick intent detection without heavy processing
  const userIntent = detectIntent(normalizedSearchTerm);
  const intentConfig = userIntent ? INTENT_PATTERNS[userIntent as keyof typeof INTENT_PATTERNS] : null;
  
  // PRIORITY: For "personal" searches, prioritize AI Web Tools GPTs
  if (normalizedSearchTerm.includes('personal')) {
    const aiWebToolsResults = searchAIWebToolsGPTs(tools, searchTerm);
    
    const scoredAIWebTools = aiWebToolsResults
      .map(tool => ({ tool, score: scoreAIWebToolsGPT(tool, searchTerm) }))
      .sort((a, b) => b.score - a.score)
      .map(result => result.tool);
    
    const remainingTools = tools.filter(tool => 
      !EXCLUDED_TOOLS.includes(tool.title) &&
      !aiWebToolsResults.some(aiTool => aiTool.title === tool.title)
    );
    
    const regularResults = performEnhancedSearch(remainingTools, searchTerm, searchWords, phoneticVariations, intentConfig);
    return [...scoredAIWebTools, ...regularResults];
  }
  
  // Regular enhanced search
  return performEnhancedSearch(tools, searchTerm, searchWords, phoneticVariations, intentConfig);
};

// Perform enhanced search with intent prioritization and fuzzy matching
const performEnhancedSearch = (
  tools: Tool[], 
  searchTerm: string, 
  searchWords: string[], 
  phoneticVariations: string[],
  intentConfig: any
): Tool[] => {
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  
  const results = tools
    .filter(tool => !EXCLUDED_TOOLS.includes(tool.title))
    .map(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || "";
      const lowerTags = (tool.tags || []).map(tag => tag.toLowerCase());
      
      let score = 0;
      let matched = false;

      // INTENT PRIORITY BOOST: If we detected intent, boost priority tools
      if (intentConfig) {
        // Massive boost for priority tools
        if (intentConfig.priority.some((priorityTool: string) => 
          tool.title.toLowerCase().includes(priorityTool.toLowerCase()) ||
          priorityTool.toLowerCase().includes(lowerTitle)
        )) {
          matched = true;
          score += 25000; // Highest priority
          console.log(`🚀 Intent priority boost for: ${tool.title}`);
        }
        
        // Boost for matching categories
        if (intentConfig.categories.some((cat: string) => 
          lowerCategory.includes(cat.toLowerCase()) ||
          cat.toLowerCase().includes(lowerCategory)
        )) {
          matched = true;
          score += 5000;
          console.log(`📂 Category boost for: ${tool.title}`);
        }
      }

      // HIGHEST PRIORITY: Exact title match
      if (lowerTitle === normalizedSearchTerm) {
        matched = true;
        score += 20000;
      }
      // VERY HIGH PRIORITY: Title starts with search term
      else if (lowerTitle.startsWith(normalizedSearchTerm)) {
        matched = true;
        score += 15000;
      }
      // HIGH PRIORITY: Title contains search term
      else if (lowerTitle.includes(normalizedSearchTerm)) {
        matched = true;
        score += 10000;
      }

      // PHONETIC AND SYNONYM MATCHING
      for (const variation of phoneticVariations) {
        if (lowerTitle.includes(variation.toLowerCase())) {
          matched = true;
          score += 8000;
          console.log(`🔤 Phonetic match: ${variation} in ${tool.title}`);
        }
        if (lowerDescription.includes(variation.toLowerCase())) {
          matched = true;
          score += 3000;
        }
      }

      // Fuzzy matching only for longer terms to avoid performance issues
      if (normalizedSearchTerm.length >= 5) {
        const fuzzyResult = fuzzyMatchTool(tool, searchTerm);
        if (fuzzyResult.matched) {
          matched = true;
          score += fuzzyResult.score;
          // Removed console.log for performance
        }
      }

      // MEDIUM-HIGH PRIORITY: Description contains exact term
      if (lowerDescription.includes(normalizedSearchTerm)) {
        matched = true;
        score += 6000;
      }

      // MEDIUM PRIORITY: Category match
      if (lowerCategory.includes(normalizedSearchTerm)) {
        matched = true;
        score += 4000;
      }

      // MEDIUM PRIORITY: Tag matches
      for (const tag of lowerTags) {
        if (tag.includes(normalizedSearchTerm)) {
          matched = true;
          score += 3000;
        }
      }

      // LOWER PRIORITY: Individual word matches
      for (const word of searchWords) {
        if (word.length < 2) continue;
        
        if (lowerTitle.includes(word)) {
          matched = true;
          score += 2000;
        }
        if (lowerDescription.includes(word)) {
          matched = true;
          score += 1000;
        }
        if (lowerCategory.includes(word)) {
          matched = true;
          score += 500;
        }
        for (const tag of lowerTags) {
          if (tag.includes(word)) {
            matched = true;
            score += 300;
          }
        }
      }

      return { tool, score, matched };
    })
    .filter(result => result.matched)
    .sort((a, b) => {
      // First sort by score (highest first)
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      // Then by title length (shorter titles first, often more relevant)
      return a.tool.title.length - b.tool.title.length;
    })
    .map(result => result.tool);

  // Removed console.log for performance
  return results;
};

// Remove duplicate tools
export const removeDuplicateTools = (tools: Tool[]): Tool[] => {
  const seen = new Set<string>();
  return tools.filter(tool => {
    if (EXCLUDED_TOOLS.includes(tool.title)) {
      return false;
    }
    
    if (seen.has(tool.title)) {
      return false;
    }
    seen.add(tool.title);
    return true;
  });
};