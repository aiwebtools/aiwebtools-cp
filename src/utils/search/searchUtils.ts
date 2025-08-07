import { Tool } from "@/types/tools";
import { searchAIWebToolsGPTs, scoreAIWebToolsGPT } from "./aiWebToolsSearch";
import { fuzzyMatchTool, phoneticMatch } from "./core/fuzzyMatching";
import { matchVibeCoding, scoreVibeCoding } from "./matching/vibeCodingMatching";
import { matchAgents, scoreAgents } from "./matching/agentMatching";
import { matchCodingAgents, scoreCodingAgents } from "./matching/codingMatching";
import { matchUserTask, smartTypoCorrection, scoreToolByContext, matchTimeTravel, scoreTimeTravel, matchWriting, scoreWriting } from "./core/intelligentTaskMatching";

// Tools to exclude from search results
const EXCLUDED_TOOLS = [
  "PERSONAL CAPITAL",
  "PERSONAL ASSISTANT GPT",
  "personal financial advisor"
];

// Intent detection patterns for better search prioritization - EXPANDED FOR ALL CATEGORIES
const INTENT_PATTERNS = {
  education: {
    triggers: ['college', 'university', 'degree', 'education', 'learn', 'study', 'course', 'school', 'academic', 'skill', 'training', 'lesson', 'class', 'homework', 'tutor', 'teacher', 'student'],
    priority: ['COLLEGE DEGREE GPT', 'LEARN ANY SKILL GPT', 'LEARN ANY COURSE GPT', 'Home-Schooling Assistant GPT', 'HomeSchool GPT', 'Quiz Maker Ai', 'Course Maker GPT'],
    categories: ['Education & Research Tools', 'Learning & Education', 'Educational Tools', 'Education & Learning']
  },
  creative: {
    triggers: ['book', 'write', 'writing', 'author', 'story', 'novel', 'script', 'content', 'blog', 'article', 'creative', 'design', 'art', 'graphic', 'logo', 'image', 'video', 'movie', 'music'],
    priority: ['BOOK WRITER GPT', 'Movie Script Writer GPT', 'Article and Blog Rewriter GPT', 'Graphic & Cover Design GPT', 'Movie Maker Studio AI SUITE', 'Music Video Maker AI Studio', 'RESTYLE ME GPT', 'Sketch Artist GPT'],
    categories: ['Writing & Text Generation', 'Content Creation', 'Creative Tools', 'Creative & Media', 'Creative & Design']
  },
  health: {
    triggers: ['doctor', 'health', 'medical', 'wellness', 'fitness', 'nutrition', 'therapy', 'mental', 'dental', 'veterinarian', 'pet', 'medicine', 'pharmaceutical'],
    priority: ['Personalized DR. GPT (Doctor GPT)', 'Mental Wellness GPT', 'Veterinarian GPT', 'Pharmaceutical Assistant GPT', 'DENTAL GPT', 'SKIN CARE GPT'],
    categories: ['Health & Wellness', 'Healthcare', 'Medical Tools', 'Health, Wellness & Personal Lifestyle']
  },
  business: {
    triggers: ['business', 'marketing', 'finance', 'trading', 'investment', 'money', 'budget', 'startup', 'entrepreneur', 'sales', 'management', 'productivity', 'resume', 'job'],
    priority: ['Business Plan Generator GPT', 'Startup Validator GPT', 'Trader GPT', 'MicroSaaS GPT', 'The Resume & Job Finder Ai Suite', 'Taxes GPT', 'Insurance Claims GPT'],
    categories: ['Business & Productivity', 'Finance & Trading', 'Marketing Tools', 'Business & Finance', 'Business Tools']
  },
  science: {
    triggers: ['science', 'research', 'analysis', 'data', 'laboratory', 'experiment', 'scientific', 'genome', 'dna', 'physics', 'chemistry', 'biology', 'space', 'astronomy'],
    priority: ['Nikola Tesla GPT', 'Stellaris: 🚀AI Space Explorer', 'Genome GPT', 'Alchemist Scientist GPT', 'Data Research Analysis Report GPT'],
    categories: ['Science & Research', 'Research & Learning', 'Scientific Tools', 'Data Analytics']
  },
  technology: {
    triggers: ['ai', 'artificial intelligence', 'machine learning', 'automation', 'coding', 'programming', 'development', 'software', 'tech', 'computer', 'app', 'website'],
    priority: ['GODMODE GPT', 'Engineering GPT AI Suite', 'MULTITASKER GPT', 'Customizable GPT Maker'],
    categories: ['AI & Development', 'Technology Tools', 'Development Tools', 'AI Tools']
  },
  legal: {
    triggers: ['legal', 'law', 'attorney', 'lawyer', 'contract', 'legislation', 'government', 'civic', 'political', 'testimony', 'defender'],
    priority: ['Legal Draftsmith GPT', 'Public Defender GPT', 'Legislation Writer GPT', 'Public Testimony Writer GPT', 'Contract Review Bot'],
    categories: ['Legal & Government', 'Legal Tools', 'Government & Civic']
  },
  entertainment: {
    triggers: ['game', 'gaming', 'entertainment', 'fun', 'trivia', 'celebrity', 'movie', 'film', 'music', 'meme', 'comic'],
    priority: ['Game Design Document / Developer GPT', 'Trivia Night GPT', 'Celebrity Chatline GPT', 'MEME GENERATOR GPT', 'Comic Book Generator GPT'],
    categories: ['Entertainment & Gaming', 'Gaming Tools', 'Entertainment Tools']
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
      .sort((a, b) => {
        // First sort by score (highest first)
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        // Then alphabetically by title
        return a.tool.title.localeCompare(b.tool.title);
      })
      .map(result => result.tool);
    
    const remainingTools = tools.filter(tool => 
      !EXCLUDED_TOOLS.includes(tool.title) &&
      !aiWebToolsResults.some(aiTool => aiTool.title === tool.title)
    );
    
    const regularResults = performEnhancedSearch(remainingTools, searchTerm, searchWords, phoneticVariations, intentConfig);
    return [...scoredAIWebTools, ...regularResults];
  }
  
  // CATEGORY-SPECIFIC PRIORITY MATCHING
  // Health/Medical searches
  if (normalizedSearchTerm.includes('health') || normalizedSearchTerm.includes('medical') || 
      normalizedSearchTerm.includes('doctor') || normalizedSearchTerm.includes('wellness')) {
    const healthTools = tools.filter(tool => 
      tool.category?.toLowerCase().includes('health') ||
      tool.category?.toLowerCase().includes('wellness') ||
      tool.title.toLowerCase().includes('health') ||
      tool.title.toLowerCase().includes('medical') ||
      tool.title.toLowerCase().includes('doctor')
    );
    return performEnhancedSearch([...healthTools, ...tools.filter(t => !healthTools.includes(t))], searchTerm, searchWords, phoneticVariations, intentConfig);
  }
  
  // Business/Finance searches
  if (normalizedSearchTerm.includes('business') || normalizedSearchTerm.includes('finance') || 
      normalizedSearchTerm.includes('money') || normalizedSearchTerm.includes('trading')) {
    const businessTools = tools.filter(tool => 
      tool.category?.toLowerCase().includes('business') ||
      tool.category?.toLowerCase().includes('finance') ||
      tool.title.toLowerCase().includes('business') ||
      tool.title.toLowerCase().includes('finance')
    );
    return performEnhancedSearch([...businessTools, ...tools.filter(t => !businessTools.includes(t))], searchTerm, searchWords, phoneticVariations, intentConfig);
  }
  
  // Creative/Media searches
  if (normalizedSearchTerm.includes('creative') || normalizedSearchTerm.includes('media') || 
      normalizedSearchTerm.includes('video') || normalizedSearchTerm.includes('music') ||
      normalizedSearchTerm.includes('art') || normalizedSearchTerm.includes('design')) {
    const creativeTools = tools.filter(tool => 
      tool.category?.toLowerCase().includes('creative') ||
      tool.category?.toLowerCase().includes('media') ||
      tool.title.toLowerCase().includes('video') ||
      tool.title.toLowerCase().includes('music') ||
      tool.title.toLowerCase().includes('art') ||
      tool.title.toLowerCase().includes('design')
    );
    return performEnhancedSearch([...creativeTools, ...tools.filter(t => !creativeTools.includes(t))], searchTerm, searchWords, phoneticVariations, intentConfig);
  }
  
  // Education/Learning searches
  if (normalizedSearchTerm.includes('learn') || normalizedSearchTerm.includes('education') || 
      normalizedSearchTerm.includes('course') || normalizedSearchTerm.includes('school')) {
    const educationTools = tools.filter(tool => 
      tool.category?.toLowerCase().includes('education') ||
      tool.category?.toLowerCase().includes('learning') ||
      tool.title.toLowerCase().includes('learn') ||
      tool.title.toLowerCase().includes('education')
    );
    return performEnhancedSearch([...educationTools, ...tools.filter(t => !educationTools.includes(t))], searchTerm, searchWords, phoneticVariations, intentConfig);
  }
  
  // Regular enhanced search with improved scoring
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
  // Apply intelligent typo correction first
  const correctedSearchTerm = smartTypoCorrection(searchTerm);
  const normalizedSearchTerm = correctedSearchTerm.toLowerCase().trim();
  
  // Detect user task intent
  const userTask = matchUserTask(normalizedSearchTerm);
  
  console.log(`🧠 Smart search for "${searchTerm}" -> "${correctedSearchTerm}"`, userTask.taskType ? `Task detected: ${userTask.taskType}` : 'No specific task detected');
  
  const results = tools
    .filter(tool => !EXCLUDED_TOOLS.includes(tool.title))
    .map(tool => {
      const lowerTitle = tool.title.toLowerCase();
      const lowerDescription = tool.description.toLowerCase();
      const lowerCategory = tool.category?.toLowerCase() || "";
      const lowerTags = (tool.tags || []).map(tag => tag.toLowerCase());
      
      let score = 0;
      let matched = false;

      // AIWEBTOOLS PRIORITY BOOST - Special handling for our custom GPTs
      if (tool.directUrl?.includes('aiwebtools') || tool.tags?.includes('aiwebtools')) {
        score += 2000; // Base boost for AI Web Tools
        if (lowerTitle.includes(normalizedSearchTerm)) {
          score += 3000; // Additional boost for matching AI Web Tools
        }
      }

      // INTELLIGENT TASK-BASED SCORING: Boost tools that match detected user tasks
      if (userTask.taskType && userTask.score > 0) {
        const contextScore = scoreToolByContext(tool, normalizedSearchTerm, userTask);
        if (contextScore > 0) {
          matched = true;
          score += contextScore;
        }
      }

      // INTENT PRIORITY BOOST: If we detected intent, boost priority tools
      if (intentConfig) {
        // Massive boost for priority tools
        if (intentConfig.priority.some((priorityTool: string) => 
          tool.title.toLowerCase().includes(priorityTool.toLowerCase()) ||
          priorityTool.toLowerCase().includes(lowerTitle)
        )) {
          matched = true;
          score += 25000; // Highest priority
        }
        
        // Boost for matching categories
        if (intentConfig.categories.some((cat: string) => 
          lowerCategory.includes(cat.toLowerCase()) ||
          cat.toLowerCase().includes(lowerCategory)
        )) {
          matched = true;
          score += 5000;
        }
      }

      // SPECIAL MATCHING: Time Travel searches - HIGHEST PRIORITY
      if (matchTimeTravel(tool, normalizedSearchTerm)) {
        matched = true;
        score += scoreTimeTravel(tool, normalizedSearchTerm);
      }

      // SPECIAL MATCHING: Creative Writing searches - HIGH PRIORITY
      if (matchWriting(tool, normalizedSearchTerm)) {
        matched = true;
        score += scoreWriting(tool, normalizedSearchTerm);
      }

      // SPECIAL MATCHING: Vibe Coding Agent searches
      if (matchVibeCoding(tool, normalizedSearchTerm)) {
        matched = true;
        score += scoreVibeCoding(tool, normalizedSearchTerm);
      }

      // SPECIAL MATCHING: AI Agent searches
      if (matchAgents(tool, normalizedSearchTerm)) {
        matched = true;
        score += scoreAgents(tool, normalizedSearchTerm);
      }

      // SPECIAL MATCHING: Coding Agent searches
      if (matchCodingAgents(tool, normalizedSearchTerm)) {
        matched = true;
        score += scoreCodingAgents(tool, normalizedSearchTerm);
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

      // SPELLING CORRECTION AND PHONETIC MATCHING
      for (const variation of phoneticVariations) {
        if (lowerTitle.includes(variation.toLowerCase())) {
          matched = true;
          score += 8000;
        }
        if (lowerDescription.includes(variation.toLowerCase())) {
          matched = true;
          score += 3000;
        }
      }

      // MEDIUM-HIGH PRIORITY: Description contains exact term (check both original and corrected)
      if (lowerDescription.includes(normalizedSearchTerm) || lowerDescription.includes(correctedSearchTerm)) {
        matched = true;
        score += 6000;
      }

      // MEDIUM PRIORITY: Category match (check both original and corrected)
      if (lowerCategory.includes(normalizedSearchTerm) || lowerCategory.includes(correctedSearchTerm)) {
        matched = true;
        score += 4000;
      }

      // MEDIUM PRIORITY: Tag matches (check both original and corrected)
      for (const tag of lowerTags) {
        if (tag.includes(normalizedSearchTerm) || tag.includes(correctedSearchTerm)) {
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
      // Then alphabetically by title
      return a.tool.title.localeCompare(b.tool.title);
    })
    .map(result => result.tool);

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