import { Tool } from "@/types/tools";

// Ultra intelligent matching for single character and partial searches
export interface UltraMatchResult {
  tool: Tool;
  score: number;
  matchReason: string;
  confidence: number;
}

// Single character intelligence mappings with high confidence predictions
const SINGLE_CHAR_INTELLIGENCE: Record<string, Array<{word: string, confidence: number, category?: string}>> = {
  'c': [
    { word: 'college', confidence: 0.95, category: 'education' },
    { word: 'course', confidence: 0.9, category: 'education' },
    { word: 'creative', confidence: 0.85, category: 'creative' },
    { word: 'content', confidence: 0.8, category: 'creative' },
    { word: 'custom', confidence: 0.75 },
    { word: 'cannabis', confidence: 0.7, category: 'health' },
    { word: 'chef', confidence: 0.65, category: 'food' },
    { word: 'celebrity', confidence: 0.6, category: 'entertainment' },
    { word: 'contract', confidence: 0.55, category: 'legal' },
    { word: 'clarity', confidence: 0.5 },
    { word: 'criminologist', confidence: 0.45, category: 'legal' }
  ],
  'g': [
    { word: 'game', confidence: 0.95, category: 'entertainment' },
    { word: 'graphic', confidence: 0.9, category: 'creative' },
    { word: 'government', confidence: 0.85, category: 'legal' },
    { word: 'generator', confidence: 0.8 },
    { word: 'global', confidence: 0.75 },
    { word: 'genome', confidence: 0.7, category: 'science' },
    { word: 'grant', confidence: 0.65, category: 'business' }
  ],
  'b': [
    { word: 'book', confidence: 0.95, category: 'creative' },
    { word: 'business', confidence: 0.9, category: 'business' },
    { word: 'binary', confidence: 0.85, category: 'technology' },
    { word: 'budget', confidence: 0.8, category: 'business' },
    { word: 'blockchain', confidence: 0.75, category: 'technology' },
    { word: 'brain', confidence: 0.7, category: 'health' }
  ],
  'm': [
    { word: 'music', confidence: 0.95, category: 'creative' },
    { word: 'movie', confidence: 0.9, category: 'creative' },
    { word: 'medical', confidence: 0.85, category: 'health' },
    { word: 'marketing', confidence: 0.8, category: 'business' },
    { word: 'money', confidence: 0.75, category: 'business' },
    { word: 'mental', confidence: 0.7, category: 'health' },
    { word: 'material', confidence: 0.65 }
  ],
  'h': [
    { word: 'health', confidence: 0.95, category: 'health' },
    { word: 'home', confidence: 0.9, category: 'lifestyle' },
    { word: 'history', confidence: 0.85, category: 'education' },
    { word: 'hotel', confidence: 0.8, category: 'travel' },
    { word: 'help', confidence: 0.75 }
  ],
  'v': [
    { word: 'video', confidence: 0.95, category: 'creative' },
    { word: 'voice', confidence: 0.9, category: 'creative' },
    { word: 'virtual', confidence: 0.85, category: 'technology' },
    { word: 'veterinarian', confidence: 0.8, category: 'health' },
    { word: 'venture', confidence: 0.75, category: 'business' }
  ],
  'w': [
    { word: 'writing', confidence: 0.95, category: 'creative' },
    { word: 'web', confidence: 0.9, category: 'technology' },
    { word: 'weather', confidence: 0.85 },
    { word: 'wellness', confidence: 0.8, category: 'health' },
    { word: 'world', confidence: 0.75 }
  ],
  't': [
    { word: 'travel', confidence: 0.95, category: 'travel' },
    { word: 'trading', confidence: 0.9, category: 'business' },
    { word: 'therapy', confidence: 0.85, category: 'health' },
    { word: 'tattoo', confidence: 0.8, category: 'creative' },
    { word: 'taxes', confidence: 0.75, category: 'business' },
    { word: 'trivia', confidence: 0.7, category: 'entertainment' }
  ],
  'l': [
    { word: 'legal', confidence: 0.95, category: 'legal' },
    { word: 'learn', confidence: 0.9, category: 'education' },
    { word: 'language', confidence: 0.85, category: 'education' },
    { word: 'law', confidence: 0.8, category: 'legal' },
    { word: 'life', confidence: 0.75, category: 'lifestyle' }
  ],
  'd': [
    { word: 'doctor', confidence: 0.95, category: 'health' },
    { word: 'design', confidence: 0.9, category: 'creative' },
    { word: 'data', confidence: 0.85, category: 'technology' },
    { word: 'dream', confidence: 0.8, category: 'lifestyle' },
    { word: 'diet', confidence: 0.75, category: 'health' }
  ],
  'r': [
    { word: 'research', confidence: 0.95, category: 'science' },
    { word: 'resume', confidence: 0.9, category: 'business' },
    { word: 'real', confidence: 0.85 },
    { word: 'recipe', confidence: 0.8, category: 'food' }
  ],
  'f': [
    { word: 'finance', confidence: 0.95, category: 'business' },
    { word: 'food', confidence: 0.9, category: 'food' },
    { word: 'fitness', confidence: 0.85, category: 'health' },
    { word: 'fashion', confidence: 0.8, category: 'creative' },
    { word: 'fact', confidence: 0.75 }
  ],
  's': [
    { word: 'spiritual', confidence: 0.95, category: 'spiritual' },
    { word: 'school', confidence: 0.9, category: 'education' },
    { word: 'startup', confidence: 0.85, category: 'business' },
    { word: 'stock', confidence: 0.8, category: 'business' },
    { word: 'social', confidence: 0.75 }
  ],
  'a': [
    { word: 'ai', confidence: 0.95, category: 'technology' },
    { word: 'art', confidence: 0.9, category: 'creative' },
    { word: 'analysis', confidence: 0.85, category: 'science' },
    { word: 'agent', confidence: 0.8, category: 'technology' },
    { word: 'automatic', confidence: 0.75, category: 'technology' },
    { word: 'astrology', confidence: 0.7, category: 'spiritual' },
    { word: 'audio', confidence: 0.65, category: 'creative' }
  ],
  'p': [
    { word: 'perplexity', confidence: 0.95, category: 'technology' },
    { word: 'personal', confidence: 0.9 },
    { word: 'professional', confidence: 0.85, category: 'business' },
    { word: 'property', confidence: 0.8, category: 'business' },
    { word: 'podcast', confidence: 0.75, category: 'creative' },
    { word: 'pharmaceutical', confidence: 0.7, category: 'health' }
  ]
};

// Two character intelligence with even higher precision
const TWO_CHAR_INTELLIGENCE: Record<string, Array<{word: string, confidence: number, exactMatch?: boolean}>> = {
  'co': [
    { word: 'college', confidence: 0.98, exactMatch: true },
    { word: 'course', confidence: 0.95 },
    { word: 'content', confidence: 0.9 },
    { word: 'custom', confidence: 0.85 },
    { word: 'contract', confidence: 0.8 },
    { word: 'coloring', confidence: 0.75 },
    { word: 'coding', confidence: 0.7 },
    { word: 'copywriting', confidence: 0.65 },
    { word: 'comet', confidence: 0.95 } // Added for Perplexity Comet
  ],
  'ga': [
    { word: 'game', confidence: 0.98, exactMatch: true },
    { word: 'gambling', confidence: 0.85 },
    { word: 'garden', confidence: 0.7 },
    { word: 'garage', confidence: 0.65 }
  ],
  'bo': [
    { word: 'book', confidence: 0.98, exactMatch: true },
    { word: 'bookmaker', confidence: 0.85 },
    { word: 'bot', confidence: 0.8 },
    { word: 'body', confidence: 0.75 }
  ],
  'mu': [
    { word: 'music', confidence: 0.98, exactMatch: true },
    { word: 'multiple', confidence: 0.8 },
    { word: 'multi', confidence: 0.75 }
  ],
  'mo': [
    { word: 'movie', confidence: 0.98, exactMatch: true },
    { word: 'money', confidence: 0.9 },
    { word: 'mobile', confidence: 0.85 }
  ],
  'he': [
    { word: 'health', confidence: 0.98, exactMatch: true },
    { word: 'help', confidence: 0.85 },
    { word: 'heart', confidence: 0.8 }
  ],
  'ho': [
    { word: 'home', confidence: 0.98, exactMatch: true },
    { word: 'hospital', confidence: 0.85 },
    { word: 'hotel', confidence: 0.8 }
  ],
  'hi': [
    { word: 'history', confidence: 0.98, exactMatch: true },
    { word: 'historical', confidence: 0.9 }
  ],
  'vi': [
    { word: 'video', confidence: 0.98, exactMatch: true },
    { word: 'voice', confidence: 0.9 },
    { word: 'virtual', confidence: 0.85 },
    { word: 'vision', confidence: 0.8 }
  ],
  'wr': [
    { word: 'writing', confidence: 0.98, exactMatch: true },
    { word: 'writer', confidence: 0.95 }
  ],
  'we': [
    { word: 'web', confidence: 0.98, exactMatch: true },
    { word: 'wellness', confidence: 0.9 },
    { word: 'weather', confidence: 0.85 }
  ],
  'tr': [
    { word: 'travel', confidence: 0.98, exactMatch: true },
    { word: 'trading', confidence: 0.9 },
    { word: 'therapy', confidence: 0.85 },
    { word: 'training', confidence: 0.8 }
  ],
  'le': [
    { word: 'legal', confidence: 0.98, exactMatch: true },
    { word: 'learn', confidence: 0.9 },
    { word: 'lesson', confidence: 0.85 }
  ],
  'do': [
    { word: 'doctor', confidence: 0.98, exactMatch: true },
    { word: 'document', confidence: 0.85 }
  ],
  'de': [
    { word: 'design', confidence: 0.98, exactMatch: true },
    { word: 'developer', confidence: 0.9 },
    { word: 'dental', confidence: 0.85 }
  ],
  'da': [
    { word: 'data', confidence: 0.98, exactMatch: true },
    { word: 'database', confidence: 0.9 }
  ],
  're': [
    { word: 'research', confidence: 0.98, exactMatch: true },
    { word: 'resume', confidence: 0.9 },
    { word: 'real', confidence: 0.85 },
    { word: 'recipe', confidence: 0.8 }
  ],
  'fi': [
    { word: 'finance', confidence: 0.98, exactMatch: true },
    { word: 'fitness', confidence: 0.9 },
    { word: 'financial', confidence: 0.85 },
    { word: 'fire', confidence: 0.8 }
  ],
  'fo': [
    { word: 'food', confidence: 0.98, exactMatch: true },
    { word: 'fortune', confidence: 0.85 },
    { word: 'forex', confidence: 0.8 }
  ],
  'sp': [
    { word: 'spiritual', confidence: 0.98, exactMatch: true },
    { word: 'space', confidence: 0.9 },
    { word: 'speech', confidence: 0.85 }
  ],
  'sc': [
    { word: 'school', confidence: 0.98, exactMatch: true },
    { word: 'science', confidence: 0.9 },
    { word: 'script', confidence: 0.85 }
  ],
  'st': [
    { word: 'startup', confidence: 0.98, exactMatch: true },
    { word: 'stock', confidence: 0.9 },
    { word: 'student', confidence: 0.85 }
  ],
  'pe': [
    { word: 'perplexity', confidence: 0.98, exactMatch: true },
    { word: 'personal', confidence: 0.9 },
    { word: 'pet', confidence: 0.85 }
  ]
};

// Ultra intelligent matching that handles single characters and partial words
export const performUltraIntelligentMatching = (
  tools: Tool[], 
  searchTerm: string
): UltraMatchResult[] => {
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const results: UltraMatchResult[] = [];
  
  // Skip if search term is too long for ultra matching
  if (normalizedSearchTerm.length > 4) {
    return results;
  }
  
  console.log(`🧠 Ultra intelligent matching for: "${searchTerm}" (${normalizedSearchTerm.length} chars)`);
  
  // Get intelligence mappings based on search term length
  let intelligenceMappings: Array<{word: string, confidence: number, exactMatch?: boolean, category?: string}> = [];
  
  if (normalizedSearchTerm.length === 1) {
    intelligenceMappings = SINGLE_CHAR_INTELLIGENCE[normalizedSearchTerm] || [];
  } else if (normalizedSearchTerm.length === 2) {
    intelligenceMappings = TWO_CHAR_INTELLIGENCE[normalizedSearchTerm] || [];
  } else {
    // For 3-4 character terms, check if they're prefixes of known words
    for (const [key, mappings] of Object.entries(TWO_CHAR_INTELLIGENCE)) {
      if (normalizedSearchTerm.startsWith(key)) {
        intelligenceMappings.push(...mappings.map(m => ({
          ...m,
          confidence: m.confidence * 0.8 // Reduce confidence for partial matches
        })));
      }
    }
  }
  
  if (intelligenceMappings.length === 0) {
    console.log(`❌ No intelligence mappings found for "${normalizedSearchTerm}"`);
    return results;
  }
  
  console.log(`🎯 Found ${intelligenceMappings.length} intelligence mappings:`, 
              intelligenceMappings.slice(0, 5).map(m => `${m.word}(${m.confidence})`));
  
  // Match tools against intelligence mappings
  for (const tool of tools) {
    let bestScore = 0;
    let bestReason = '';
    let bestConfidence = 0;
    
    const titleLower = tool.title.toLowerCase();
    const descLower = tool.description.toLowerCase();
    const categoryLower = tool.category?.toLowerCase() || '';
    const tagsLower = (tool.tags || []).join(' ').toLowerCase();
    
    for (const mapping of intelligenceMappings) {
      let score = 0;
      let reason = '';
      
      // Check for matches in different fields
      if (titleLower.includes(mapping.word)) {
        // Bonus for word boundary matches
        const wordBoundaryRegex = new RegExp(`\\b${mapping.word}\\b`, 'i');
        if (wordBoundaryRegex.test(titleLower)) {
          score += mapping.confidence * 15000; // High score for exact word in title
          reason = `Title contains "${mapping.word}" (exact word)`;
        } else {
          score += mapping.confidence * 12000; // Good score for partial match in title
          reason = `Title contains "${mapping.word}"`;
        }
      }
      
      if (descLower.includes(mapping.word)) {
        score += mapping.confidence * 8000;
        if (!reason) reason = `Description contains "${mapping.word}"`;
      }
      
      if (categoryLower.includes(mapping.word)) {
        score += mapping.confidence * 10000;
        if (!reason) reason = `Category contains "${mapping.word}"`;
      }
      
      if (tagsLower.includes(mapping.word)) {
        score += mapping.confidence * 6000;
        if (!reason) reason = `Tags contain "${mapping.word}"`;
      }
      
      // Category matching bonus
      if (mapping.category && categoryLower.includes(mapping.category)) {
        score += mapping.confidence * 5000;
        reason += ` (category match: ${mapping.category})`;
      }
      
      // Exact match bonus for two-character searches
      if (mapping.exactMatch && normalizedSearchTerm.length === 2) {
        score += mapping.confidence * 3000;
        reason += ' (exact match bonus)';
      }
      
      if (score > bestScore) {
        bestScore = score;
        bestReason = reason;
        bestConfidence = mapping.confidence;
      }
    }
    
    if (bestScore > 0) {
      results.push({
        tool,
        score: bestScore,
        matchReason: bestReason,
        confidence: bestConfidence
      });
    }
  }
  
  // Sort by score and confidence
  const sortedResults = results.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.confidence - a.confidence;
  });
  
  if (sortedResults.length > 0) {
    console.log(`🎯 Ultra intelligent results for "${searchTerm}":`);
    sortedResults.slice(0, 5).forEach((result, index) => {
      console.log(`  ${index + 1}. ${result.tool.title} (Score: ${result.score}, Confidence: ${result.confidence}, Reason: ${result.matchReason})`);
    });
  }
  
  return sortedResults;
};