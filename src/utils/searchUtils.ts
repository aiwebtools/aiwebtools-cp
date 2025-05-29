import { Tool } from "@/types/tools";
import { keywordMapping } from "@/data/keywordMapping";

// Enhanced search function with comprehensive keywords and intelligent matching
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const term = searchTerm.toLowerCase().trim();
  
  // Minimum length check to prevent single character searches from triggering keyword expansion
  const isShortSearch = term.length <= 2;
  
  // Helper function to check if a tool name matches partial input intelligently
  const getToolNameMatchScore = (toolTitle: string, searchTerm: string): number => {
    const lowerTitle = toolTitle.toLowerCase();
    const cleanTitle = lowerTitle.replace(/[^a-z0-9\s]/g, ''); // Remove special characters
    const words = cleanTitle.split(' ');
    
    let score = 0;
    
    // Exact match gets highest score
    if (lowerTitle === searchTerm) {
      return 500;
    }
    
    // Check if search term matches beginning of title
    if (lowerTitle.startsWith(searchTerm)) {
      score += 400;
    }
    
    // Check if search term matches beginning of any word in title
    const startsWithWord = words.some(word => word.startsWith(searchTerm));
    if (startsWithWord) {
      score += 350;
    }
    
    // For very short searches (2-3 characters), be more intelligent about matching
    if (searchTerm.length >= 2 && searchTerm.length <= 3) {
      // Special handling for common tool abbreviations and partial names
      const toolAbbreviations: Record<string, string[]> = {
        'ch': ['chatgpt', 'chat', 'character'],
        'cl': ['claude', 'clone', 'clean'],
        'cla': ['claude'],
        'gp': ['gpt', 'chatgpt'],
        'gpt': ['gpt', 'chatgpt'],
        'ai': ['ai', 'artificial'],
        'da': ['dalle', 'data'],
        'dall': ['dalle'],
        'mid': ['midjourney'],
        'sta': ['stable', 'start'],
        'gen': ['generator', 'generate'],
        'wr': ['write', 'writer'],
        'wri': ['write', 'writer', 'writing'],
        'des': ['design', 'designer'],
        'art': ['art', 'artist'],
        'mus': ['music', 'musician'],
        'vid': ['video'],
        'aud': ['audio'],
        'ima': ['image'],
        'pic': ['picture'],
        'pho': ['photo'],
        'bus': ['business'],
        'pro': ['productivity', 'professional'],
        'lea': ['learn', 'learning'],
        'edu': ['education', 'educational'],
        'hea': ['health', 'healthcare'],
        'fin': ['finance', 'financial'],
        'leg': ['legal'],
        'cod': ['code', 'coding'],
        'dev': ['development', 'developer'],
        'web': ['web', 'website'],
        'app': ['app', 'application'],
        'pla': ['platform'],
        'too': ['tool', 'tools'],
        'ass': ['assistant'],
        'hel': ['helper', 'help'],
        'gui': ['guide'],
        'sup': ['support'],
        'cre': ['create', 'creative', 'creator'],
        'mak': ['make', 'maker'],
        'bui': ['build', 'builder'],
        'edi': ['edit', 'editor'],
        'ana': ['analyze', 'analysis'],
        'res': ['research', 'resume'],
        'stu': ['study', 'student'],
        'tea': ['teach', 'teacher'],
        'tut': ['tutorial'],
        'cou': ['course'],
        'train': ['training', 'translate'],
        'med': ['medical', 'media'],
        'soc': ['social'],
        'mar': ['marketing'],
        'sal': ['sales'],
        'aut': ['automation', 'automotive'],
        'car': ['car', 'career'],
        'auto': ['automotive', 'automation'],
        'gam': ['game', 'gaming'],
        'ent': ['entertainment'],
        'fun': ['fun'],
        'spi': ['spiritual'],
        'rel': ['relaxation', 'religion'],
        'medi': ['meditation', 'medical'],
        'pea': ['peace'],
        'cal': ['calm', 'calendar'],
        'zen': ['zen'],
        'dre': ['dream'],
        'sle': ['sleep'],
        'ast': ['astrology'],
        'tar': ['tarot'],
        'ang': ['angel'],
        'can': ['cannabis'],
        'fis': ['fishing'],
        'cel': ['celebrity'],
        'ein': ['einstein'],
        'bin': ['binary'],
        'foo': ['food'],
        'qua': ['quality'],
        'his': ['history', 'historian'],
        'tim': ['time'],
        'travel': ['travel', 'training'],
        'dir': ['director'],
        'ske': ['sketch'],
        'sto': ['story', 'storyboard']
      };
      
      // Check if the search term matches any abbreviation
      if (toolAbbreviations[searchTerm]) {
        const matchingConcepts = toolAbbreviations[searchTerm];
        const hasConceptMatch = matchingConcepts.some(concept => 
          lowerTitle.includes(concept) || cleanTitle.includes(concept)
        );
        if (hasConceptMatch) {
          score += 300;
        }
      }
    }
    
    // Check for partial matches within words (for longer searches)
    if (searchTerm.length >= 3) {
      const hasPartialMatch = words.some(word => word.includes(searchTerm));
      if (hasPartialMatch) {
        score += 250;
      }
    }
    
    // Check if title contains search term anywhere
    if (lowerTitle.includes(searchTerm)) {
      score += 200;
    }
    
    // Fuzzy matching for common typos and variations
    if (searchTerm.length >= 3) {
      const fuzzyMatches: Record<string, string[]> = {
        'chatgpt': ['chatgpt', 'chat gpt', 'gpt chat', 'gpt'],
        'claude': ['claude', 'claud'],
        'midjourney': ['midjourney', 'mid journey', 'midjorney'],
        'dalle': ['dalle', 'dall-e', 'dal-e', 'dali'],
        'stable': ['stable', 'stabl'],
        'openai': ['openai', 'open ai'],
        'anthropic': ['anthropic', 'antropic'],
        'google': ['google', 'googl'],
        'microsoft': ['microsoft', 'micro soft'],
        'generator': ['generator', 'generater', 'genrator'],
        'assistant': ['assistant', 'assitant', 'asistant'],
        'creative': ['creative', 'creativ', 'creatve'],
        'business': ['business', 'bussiness', 'busines'],
        'productivity': ['productivity', 'productivty', 'productiviy'],
        'education': ['education', 'educaton', 'educaion'],
        'development': ['development', 'developement', 'devlopment'],
        'professional': ['professional', 'proffesional', 'profesional']
      };
      
      Object.entries(fuzzyMatches).forEach(([correct, variants]) => {
        if (variants.some(variant => variant.includes(searchTerm) || searchTerm.includes(variant))) {
          if (lowerTitle.includes(correct)) {
            score += 180;
          }
        }
      });
    }
    
    // Acronym matching (e.g., "AI" matches "Artificial Intelligence")
    if (searchTerm.length >= 2) {
      const acronymMatches: Record<string, string[]> = {
        'ai': ['artificial intelligence', 'ai'],
        'ml': ['machine learning'],
        'nlp': ['natural language processing'],
        'gpt': ['generative pre-trained transformer', 'gpt'],
        'ui': ['user interface'],
        'ux': ['user experience'],
        'seo': ['search engine optimization'],
        'api': ['application programming interface'],
        'sdk': ['software development kit'],
        'cms': ['content management system'],
        'crm': ['customer relationship management'],
        'erp': ['enterprise resource planning'],
        'hr': ['human resources'],
        'it': ['information technology'],
        'qa': ['quality assurance'],
        'cv': ['computer vision', 'curriculum vitae'],
        'ar': ['augmented reality'],
        'vr': ['virtual reality'],
        'iot': ['internet of things'],
        'saas': ['software as a service'],
        'b2b': ['business to business'],
        'b2c': ['business to consumer'],
        'roi': ['return on investment'],
        'kpi': ['key performance indicator']
      };
      
      if (acronymMatches[searchTerm]) {
        const matchingTerms = acronymMatches[searchTerm];
        const hasAcronymMatch = matchingTerms.some(term => lowerTitle.includes(term));
        if (hasAcronymMatch) {
          score += 160;
        }
      }
    }
    
    return score;
  };
  
  // Helper function to get expanded keywords with better matching
  const getExpandedKeywords = (searchTerm: string): string[] => {
    // For very short searches, don't expand keywords to prevent false matches
    if (searchTerm.length <= 2) {
      return [searchTerm];
    }
    
    const words = searchTerm.split(' ');
    const expandedKeywords = new Set([searchTerm]);
    
    // Add the full search term
    expandedKeywords.add(searchTerm);
    
    // Add individual words (only if they're longer than 2 characters)
    words.forEach(word => {
      if (word.length > 2) {
        expandedKeywords.add(word);
        
        // Check if any keyword mapping key contains this word or vice versa
        Object.keys(keywordMapping).forEach(key => {
          if (key.includes(word) || word.includes(key)) {
            keywordMapping[key].forEach(keyword => expandedKeywords.add(keyword));
          }
        });
        
        // Direct keyword mapping
        if (keywordMapping[word]) {
          keywordMapping[word].forEach(keyword => expandedKeywords.add(keyword));
        }
      }
    });
    
    // Special handling for partial matches in keyword mapping (only for longer terms)
    if (searchTerm.length > 3) {
      Object.keys(keywordMapping).forEach(key => {
        if (searchTerm.includes(key) || key.includes(searchTerm)) {
          keywordMapping[key].forEach(keyword => expandedKeywords.add(keyword));
        }
      });
    }
    
    return Array.from(expandedKeywords);
  };

  // Helper function to check if a tool matches the search term with scoring
  const getToolMatchScore = (tool: Tool, searchTerm: string): number => {
    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
    
    let score = 0;
    
    // First, check for intelligent tool name matching
    const nameMatchScore = getToolNameMatchScore(tool.title, searchTerm);
    score += nameMatchScore;
    
    // For very short searches, prioritize name matching
    if (isShortSearch) {
      // If we have a good name match, boost it significantly
      if (nameMatchScore > 200) {
        return score + 1000; // High priority for good name matches on short searches
      }
      
      // Only match if the search term is at the beginning of words for other content
      const titleWords = lowerTitle.split(' ');
      const hasWordStart = titleWords.some(word => word.startsWith(searchTerm));
      const categoryWords = lowerCategory.split(' ');
      const hasCategoryWordStart = categoryWords.some(word => word.startsWith(searchTerm));
      
      if (hasWordStart) score += 100;
      if (hasCategoryWordStart) score += 50;
      
      // Also check tags for word starts
      const hasTagWordStart = lowerTags.some(tag => 
        tag.split(' ').some(word => word.startsWith(searchTerm))
      );
      if (hasTagWordStart) score += 30;
      
      return score;
    }
    
    // Get expanded keywords for intelligent matching (only for longer searches)
    const expandedKeywords = getExpandedKeywords(searchTerm);
    
    // Exact title matches get highest score
    if (lowerTitle === searchTerm) {
      score += 200;
    }
    
    // Direct title matches get very high score
    if (lowerTitle.includes(searchTerm)) {
      score += 100;
    }
    
    // Partial title matches
    const searchWords = searchTerm.split(' ');
    const titleMatchCount = searchWords.filter(word => lowerTitle.includes(word)).length;
    score += titleMatchCount * 25;
    
    // Category matches
    if (lowerCategory.includes(searchTerm)) {
      score += 50;
    }
    
    // Tag matches
    const tagMatchCount = lowerTags.filter(tag => 
      tag.includes(searchTerm) || searchTerm.includes(tag)
    ).length;
    score += tagMatchCount * 20;
    
    // Description matches
    if (lowerDescription.includes(searchTerm)) {
      score += 30;
    }
    
    // Expanded keyword matches (only for longer searches)
    if (!isShortSearch) {
      expandedKeywords.forEach(keyword => {
        if (keyword !== searchTerm) { // Don't double count the original term
          if (lowerTitle.includes(keyword)) score += 30;
          if (lowerDescription.includes(keyword)) score += 20;
          if (lowerCategory.includes(keyword)) score += 25;
          if (lowerTags.some(tag => tag.includes(keyword))) score += 15;
        }
      });
    }
    
    // Intent-based intelligent matching for common search patterns
    const intentMatches = {
      // Learning and education intent
      learn: ["learn", "skill", "education", "course", "tutorial", "training", "teach"],
      help: ["help", "assist", "guide", "support", "aid"],
      create: ["create", "make", "generate", "build", "design", "produce"],
      write: ["write", "content", "text", "article", "blog", "copy"],
      chat: ["chat", "talk", "conversation", "speak", "communicate"],
      art: ["art", "draw", "paint", "design", "creative", "visual"],
      business: ["business", "work", "professional", "corporate", "enterprise"],
      fun: ["fun", "entertainment", "game", "play", "enjoy"],
      health: ["health", "wellness", "fitness", "medical", "therapy"],
      spiritual: ["spiritual", "meditation", "peace", "zen", "mindfulness", "astrology", "tarot"]
    };
    
    // Check for intent matches
    Object.entries(intentMatches).forEach(([intent, keywords]) => {
      if (keywords.some(keyword => searchTerm.includes(keyword))) {
        // Boost tools that match this intent
        if (intent === "learn" && (lowerTitle.includes("learn") || lowerTitle.includes("skill") || lowerTitle.includes("course") || lowerTitle.includes("education"))) {
          score += 60;
        }
        if (intent === "help" && (lowerTitle.includes("assistant") || lowerTitle.includes("helper") || lowerTitle.includes("guide"))) {
          score += 50;
        }
        if (intent === "create" && (lowerTitle.includes("generator") || lowerTitle.includes("creator") || lowerTitle.includes("maker"))) {
          score += 55;
        }
        if (intent === "write" && (lowerTitle.includes("writing") || lowerTitle.includes("content") || lowerTitle.includes("text"))) {
          score += 60;
        }
        if (intent === "chat" && (lowerTitle.includes("chat") || lowerTitle.includes("conversation") || lowerTitle.includes("talk"))) {
          score += 65;
        }
        if (intent === "art" && (lowerTitle.includes("art") || lowerTitle.includes("design") || lowerTitle.includes("creative"))) {
          score += 55;
        }
        if (intent === "business" && (lowerCategory.includes("business") || lowerTags.some(tag => tag.includes("business")))) {
          score += 50;
        }
        if (intent === "fun" && (lowerCategory.includes("entertainment") || lowerCategory.includes("game"))) {
          score += 45;
        }
        if (intent === "health" && (lowerCategory.includes("health") || lowerCategory.includes("wellness"))) {
          score += 55;
        }
        if (intent === "spiritual" && (lowerCategory.includes("spiritual") || lowerCategory.includes("wellness"))) {
          score += 60;
        }
      }
    });
    
    // Specific tool name recognition for popular tools
    const toolNameMatches = {
      "einstein": ["einstein", "physics", "scientist", "genius", "albert"],
      "cannabis": ["cannabis", "marijuana", "weed", "hemp", "cbd", "thc"],
      "fishing": ["fishing", "fish", "angling", "catch", "rod", "bait"],
      "dream": ["dream", "sleep", "interpretation", "meaning", "subconscious"],
      "celebrity": ["celebrity", "famous", "star", "actor", "musician"],
      "binary": ["binary", "converter", "code", "programming", "computer"],
      "peace": ["peace", "meditation", "calm", "zen", "tranquil"],
      "automotive": ["automotive", "car", "automobile", "vehicle", "auto"],
      "food": ["food", "nutrition", "recipe", "cooking", "meal", "diet"],
      "quality": ["quality", "standard", "grade", "assessment", "rating"]
    };
    
    Object.entries(toolNameMatches).forEach(([toolName, keywords]) => {
      if (keywords.some(keyword => searchTerm.includes(keyword))) {
        if (lowerTitle.includes(toolName) || lowerDescription.includes(toolName)) {
          score += 80; // High boost for specific tool matches
        }
      }
    });
    
    // Boost for exact tool name matches (case insensitive)
    if (lowerTitle.replace(/[^a-z0-9]/g, '').includes(searchTerm.replace(/[^a-z0-9]/g, ''))) {
      score += 50;
    }
    
    // Semantic similarity for related concepts
    const semanticGroups = {
      creativity: ["art", "design", "creative", "draw", "paint", "sketch", "illustration"],
      communication: ["chat", "talk", "conversation", "communicate", "speak", "message"],
      productivity: ["work", "business", "productivity", "efficiency", "automation"],
      learning: ["learn", "education", "skill", "course", "tutorial", "training"],
      entertainment: ["fun", "game", "entertainment", "play", "enjoy", "leisure"],
      wellness: ["health", "wellness", "fitness", "meditation", "peace", "calm"]
    };
    
    Object.values(semanticGroups).forEach(group => {
      if (group.some(concept => searchTerm.includes(concept))) {
        const toolText = `${lowerTitle} ${lowerDescription} ${lowerCategory} ${lowerTags.join(' ')}`;
        const semanticMatches = group.filter(concept => toolText.includes(concept)).length;
        score += semanticMatches * 15;
      }
    });
    
    return score;
  };
  
  // Get all tools with their match scores
  const toolsWithScores = tools.map(tool => ({
    tool,
    score: getToolMatchScore(tool, term)
  }));
  
  // Filter tools with score > 0 and sort by score (descending)
  return toolsWithScores
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.tool);
};
