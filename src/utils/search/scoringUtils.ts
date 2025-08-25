
import { Tool } from "@/types/tools";
import { toolAbbreviations, fuzzyMatches, acronymMatches } from "./toolAbbreviations";
import { intentMatches, toolNameMatches, semanticGroups } from "./intentMatching";

// Helper function to check if a tool name matches partial input intelligently
export const getToolNameMatchScore = (toolTitle: string, searchTerm: string): number => {
  const lowerTitle = toolTitle.toLowerCase();
  const cleanTitle = lowerTitle.replace(/[^a-z0-9\s]/g, ''); // Remove special characters
  const words = cleanTitle.split(' ');
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  let score = 0;
  
  // IMAGE SEARCH SPECIAL PRIORITY
  if (lowerSearchTerm.includes('image')) {
    if (lowerTitle.includes('midjourney')) {
      return 3000; // Highest priority for Midjourney
    }
    if (lowerTitle.includes('leonardo')) {
      return 2900; // Second highest for Leonardo AI
    }
    if (lowerTitle.includes('dall·e') || lowerTitle.includes('dalle') || lowerTitle.includes('gpt-4o') || lowerTitle.includes('gpt4o')) {
      return 2800; // Third highest for GPT-4o/DALL-E
    }
  }
  
  // PROPERTY/REAL ESTATE SEARCH SPECIAL PRIORITY
  if (lowerSearchTerm.includes('property') || lowerSearchTerm.includes('real estate') || lowerSearchTerm.includes('realestate')) {
    if (lowerTitle.includes('property data finder')) {
      return 3000; // Highest priority for Property Data Finder GPT
    }
    if (lowerTitle.includes('property') || lowerTitle.includes('real estate') || lowerTitle.includes('realestate')) {
      return 2500; // High priority for property/real estate tools
    }
    if (lowerTitle.includes('home') || lowerTitle.includes('house') || lowerTitle.includes('land') || lowerTitle.includes('mortgage')) {
      return 2000; // Medium-high priority for home/housing related tools
    }
  }
  
  // LEARNING TOOLS SPECIAL PRIORITY
  if (lowerSearchTerm.includes('learn')) {
    if (lowerTitle.includes('learn any skill gpt')) {
      return 2000; // Highest priority
    }
    if (lowerTitle.includes('learn any course gpt')) {
      return 1900; // Second highest
    }
    if (lowerTitle.includes('college degree gpt')) {
      return 1800; // Third highest
    }
    if (lowerTitle.includes('homeschool') || lowerTitle.includes('home-school')) {
      return 1700; // Fourth
    }
  }
  
  // Exact match gets highest score for non-learning searches
  if (lowerTitle === lowerSearchTerm) {
    return 1500;
  }
  
  // EXACT WORD MATCHING (Very High Priority)
  if (words.some(word => word === lowerSearchTerm)) {
    score += 1200; // Exact word match
  }
  
  // Special boost for GPT tools when searching for "gpt"
  if (lowerSearchTerm.includes('gpt') && lowerTitle.includes('gpt')) {
    score += 800;
  }
  
  // Check if search term matches beginning of title
  if (lowerTitle.startsWith(lowerSearchTerm)) {
    score += 700;
  }
  
  // Check if search term matches beginning of any word in title
  const startsWithWord = words.some(word => word.startsWith(lowerSearchTerm));
  if (startsWithWord) {
    score += 600;
  }
  
  // For very short searches (2-3 characters), be more intelligent about matching
  if (lowerSearchTerm.length >= 2 && lowerSearchTerm.length <= 3) {
    // Check if the search term matches any abbreviation
    if (toolAbbreviations[lowerSearchTerm]) {
      const matchingConcepts = toolAbbreviations[lowerSearchTerm];
      const hasConceptMatch = matchingConcepts.some(concept => 
        lowerTitle.includes(concept) || cleanTitle.includes(concept)
      );
      if (hasConceptMatch) {
        score += 500;
      }
    }
  }
  
  // Check for partial matches within words (for longer searches)
  if (lowerSearchTerm.length >= 3) {
    const hasPartialMatch = words.some(word => word.includes(lowerSearchTerm));
    if (hasPartialMatch) {
      score += 400;
    }
  }
  
  // Check if title contains search term anywhere
  if (lowerTitle.includes(lowerSearchTerm)) {
    score += 300;
  }
  
  // Fuzzy matching for common typos and variations
  if (lowerSearchTerm.length >= 3) {
    Object.entries(fuzzyMatches).forEach(([correct, variants]) => {
      if (variants.some(variant => variant.includes(lowerSearchTerm) || lowerSearchTerm.includes(variant))) {
        if (lowerTitle.includes(correct)) {
          score += 250;
        }
      }
    });
  }
  
  // Acronym matching (e.g., "AI" matches "Artificial Intelligence")
  if (lowerSearchTerm.length >= 2) {
    if (acronymMatches[lowerSearchTerm]) {
      const matchingTerms = acronymMatches[lowerSearchTerm];
      const hasAcronymMatch = matchingTerms.some(term => lowerTitle.includes(term));
      if (hasAcronymMatch) {
        score += 200;
      }
    }
  }
  
  return score;
};

export const calculateIntentScore = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  const lowerSearchTerm = searchTerm.toLowerCase();
  const titleWords = lowerTitle.split(' ');
  
  let score = 0;
  
  // IMAGE SEARCH SPECIAL PRIORITY
  if (lowerSearchTerm.includes('image')) {
    if (lowerTitle.includes('midjourney')) {
      score += 3000; // Highest priority for Midjourney
    }
    if (lowerTitle.includes('leonardo')) {
      score += 2900; // Second highest for Leonardo AI
    }
    if (lowerTitle.includes('dall·e') || lowerTitle.includes('dalle') || lowerTitle.includes('gpt-4o') || lowerTitle.includes('gpt4o')) {
      score += 2800; // Third highest for GPT-4o/DALL-E
    }
    
    // General image generation tools
    if (lowerTitle.includes('image generation') || lowerTitle.includes('ai art') || lowerTitle.includes('text-to-image')) {
      score += 2000;
    }
    if (lowerCategory.includes('image') || lowerCategory.includes('design')) {
      score += 1800;
    }
    if (lowerTags.some(tag => tag.includes('image') || tag.includes('art') || tag.includes('design'))) {
      score += 1600;
    }
  }
  
  // PROPERTY/REAL ESTATE SEARCH SPECIAL PRIORITY
  if (lowerSearchTerm.includes('property') || lowerSearchTerm.includes('real estate') || lowerSearchTerm.includes('realestate')) {
    // Exact matches get highest priority
    if (lowerTitle.includes('property data finder')) {
      score += 3000; // Highest priority for Property Data Finder GPT
    }
    if (lowerTitle.includes('property') || lowerTitle.includes('real estate') || lowerTitle.includes('realestate')) {
      score += 2500; // High priority for property/real estate tools
    }
    
    // Related real estate terms
    if (lowerTitle.includes('home') || lowerTitle.includes('house') || lowerTitle.includes('land')) {
      score += 2000;
    }
    if (lowerTitle.includes('mortgage') || lowerTitle.includes('loan') || lowerTitle.includes('finance')) {
      score += 1800;
    }
    if (lowerTitle.includes('appraisal') || lowerTitle.includes('valuation') || lowerTitle.includes('assessment')) {
      score += 1700;
    }
    if (lowerTitle.includes('renovation') || lowerTitle.includes('repair') || lowerTitle.includes('construction')) {
      score += 1600;
    }
    
    // Category and tag matching
    if (lowerCategory.includes('real estate') || lowerCategory.includes('property') || lowerCategory.includes('housing')) {
      score += 1500;
    }
    if (lowerTags.some(tag => tag.includes('property') || tag.includes('real estate') || tag.includes('housing') || tag.includes('home'))) {
      score += 1400;
    }
    
    // Description matching
    if (lowerDescription.includes('property') || lowerDescription.includes('real estate') || lowerDescription.includes('housing')) {
      score += 1300;
    }
  }
  
  // ENHANCED LEARNING/EDUCATIONAL TOOLS PRIORITIZATION
  if (lowerSearchTerm.includes('learn')) {
    // Exact matches get highest priority
    if (lowerTitle.includes('learn any skill gpt')) {
      score += 2000; // Highest priority
    }
    if (lowerTitle.includes('learn any course gpt')) {
      score += 1900; // Second highest
    }
    if (lowerTitle.includes('college degree gpt')) {
      score += 1800; // Third
    }
    if (lowerTitle.includes('homeschool') || lowerTitle.includes('home-school')) {
      score += 1700; // Fourth
    }
    
    // General learning-related terms
    if (titleWords.some(word => word.startsWith('learn'))) {
      score += 1500;
    }
    if (lowerTitle.includes('education') || lowerTitle.includes('educational')) {
      score += 1400;
    }
    if (lowerTitle.includes('course') || lowerTitle.includes('skill')) {
      score += 1300;
    }
    if (lowerTitle.includes('tutorial') || lowerTitle.includes('training')) {
      score += 1200;
    }
    if (lowerCategory.includes('education') || lowerCategory.includes('learning')) {
      score += 1100;
    }
    if (lowerTags.some(tag => tag.includes('education') || tag.includes('learning') || tag.includes('course'))) {
      score += 1000;
    }
  }
  
  // SKILL-RELATED SEARCHES
  if (lowerSearchTerm.includes('skill')) {
    if (lowerTitle.includes('learn any skill gpt')) {
      score += 1900;
    }
    if (lowerTitle.includes('skill')) {
      score += 1500;
    }
    if (lowerTitle.includes('learn') || lowerTitle.includes('training')) {
      score += 1300;
    }
  }
  
  // COURSE-RELATED SEARCHES
  if (lowerSearchTerm.includes('course')) {
    if (lowerTitle.includes('learn any course gpt')) {
      score += 1900;
    }
    if (lowerTitle.includes('college degree gpt')) {
      score += 1800;
    }
    if (lowerTitle.includes('course')) {
      score += 1500;
    }
    if (lowerTitle.includes('learn') || lowerTitle.includes('education')) {
      score += 1300;
    }
  }
  
  // EXACT WORD MATCHING IN TITLE (Very High Priority for all searches)
  if (titleWords.some(word => word === lowerSearchTerm)) {
    score += 1000;
  }
  
  // ENHANCED MEDICAL SEARCH PRIORITIZATION for AI Web Tools GPTs
  if (lowerSearchTerm.includes('medical') || lowerSearchTerm.includes('health') || lowerSearchTerm.includes('doctor') || lowerSearchTerm.includes('wellness')) {
    if (lowerTitle.includes('personalized dr. gpt') || lowerTitle.includes('doctor gpt')) {
      score += 800;
    }
    if (lowerTitle.includes('mental wellness gpt')) {
      score += 790;
    }
    if (lowerTitle.includes('veterinarian gpt') || lowerTitle.includes('pet')) {
      score += 600;
    }
    if (lowerTitle.includes('pharmaceutical assistant')) {
      score += 580;
    }
    
    if (lowerCategory.includes('healthcare') || lowerTags.some(tag => tag.includes('medical') || tag.includes('health'))) {
      score += 400;
    }
  }
  
  // Special boost for GPT tools when searching for GPT-related terms
  if (lowerSearchTerm.includes('gpt')) {
    if (lowerTitle.includes('gpt') || lowerDescription.includes('gpt') || lowerTags.some(tag => tag.includes('gpt'))) {
      score += 600;
    }
    if (lowerTitle.includes('custom') || lowerDescription.includes('custom') || lowerTags.some(tag => tag.includes('custom'))) {
      score += 500;
    }
  }
  
  // Check for pricing-related searches
  if (lowerSearchTerm.includes('free')) {
    if (lowerTags.includes('free') || lowerDescription.includes('completely free') || lowerDescription.includes('free to use')) {
      score += 400;
    } else if (lowerTags.includes('freemium') || lowerDescription.includes('free plan') || lowerDescription.includes('free tier')) {
      score += 300;
    }
  }
  
  if (lowerSearchTerm.includes('paid') || lowerSearchTerm.includes('premium') || lowerSearchTerm.includes('subscription')) {
    if (lowerTags.includes('paid') || lowerDescription.includes('subscription') || lowerDescription.includes('/month')) {
      score += 300;
    }
  }
  
  // Check for intent matches
  Object.entries(intentMatches).forEach(([intent, keywords]) => {
    if (keywords.some(keyword => lowerSearchTerm.includes(keyword))) {
      if (intent === "learn" && (lowerTitle.includes("learn") || lowerTitle.includes("skill") || lowerTitle.includes("course") || lowerTitle.includes("education"))) {
        score += 300;
      }
      if (intent === "help" && (lowerTitle.includes("assistant") || lowerTitle.includes("helper") || lowerTitle.includes("guide"))) {
        score += 250;
      }
      if (intent === "create" && (lowerTitle.includes("generator") || lowerTitle.includes("creator") || lowerTitle.includes("maker"))) {
        score += 275;
      }
      if (intent === "write" && (lowerTitle.includes("writing") || lowerTitle.includes("content") || lowerTitle.includes("text"))) {
        score += 300;
      }
      if (intent === "chat" && (lowerTitle.includes("chat") || lowerTitle.includes("conversation") || lowerTitle.includes("talk"))) {
        score += 325;
      }
      if (intent === "art" && (lowerTitle.includes("art") || lowerTitle.includes("design") || lowerTitle.includes("creative"))) {
        score += 275;
      }
      if (intent === "business" && (lowerCategory.includes("business") || lowerTags.some(tag => tag.includes("business")))) {
        score += 250;
      }
      if (intent === "fun" && (lowerCategory.includes("entertainment") || lowerCategory.includes("game"))) {
        score += 225;
      }
      if (intent === "health" && (lowerCategory.includes("health") || lowerCategory.includes("wellness"))) {
        score += 275;
      }
      if (intent === "spiritual" && (lowerCategory.includes("spiritual") || lowerCategory.includes("wellness"))) {
        score += 300;
      }
    }
  });
  
  // Enhanced tool name recognition
  const enhancedToolMatches = {
    "learn": ["learn any skill", "learn any course", "college degree", "education", "learning"],
    "skill": ["learn any skill", "skill development", "training", "education"],
    "course": ["learn any course", "college degree", "education", "curriculum"],
    "property": ["property data finder", "real estate", "property management", "property valuation", "property assessment"],
    "real estate": ["property data finder", "property", "housing", "real estate tools", "property management"],
    "replika": ["replika", "ai companion", "personal ai", "friend ai"],
    "character": ["character.ai", "character ai", "roleplay ai"],
    "perplexity": ["perplexity", "ai search", "research ai"],
    "runway": ["runway", "runway ml", "video ai", "text to video"],
    "otter": ["otter", "otter.ai", "meeting notes", "transcription"],
    "synthesia": ["synthesia", "ai presenter", "ai avatar", "video presenter"],
    "remove": ["remove.bg", "rembg", "background removal"],
    "lensa": ["lensa", "ai portrait", "avatar creator"],
    "notion": ["notion ai", "notion", "productivity ai"],
    "topaz": ["topaz", "video upscaling", "ai enhancement"],
    "faceapp": ["faceapp", "face editing", "age filter"],
    "murf": ["murf", "text to speech", "ai voice"],
    "descript": ["descript", "video editing", "text based editing"],
    "aiva": ["aiva", "ai music", "ai composer"],
    "photoshop": ["photoshop ai", "adobe firefly", "generative fill"],
    "copilot": ["github copilot", "ai coding", "code assistant"],
    "deepl": ["deepl", "ai translator", "translation"],
    "grammarly": ["grammarly", "grammar check", "writing assistant"],
    "stable": ["stable diffusion", "ai art", "open source ai"],
    "jasper": ["jasper", "ai copywriting", "marketing ai"],
    "chatgpt": ["chatgpt", "openai", "gpt"],
    "midjourney": ["midjourney", "ai art", "discord bot"],
    "claude": ["claude", "anthropic", "ai assistant"]
  };
  
  Object.entries({ ...toolNameMatches, ...enhancedToolMatches }).forEach(([toolName, keywords]) => {
    if (keywords.some(keyword => lowerSearchTerm.includes(keyword))) {
      if (lowerTitle.includes(toolName) || lowerDescription.includes(toolName)) {
        score += 400;
      }
    }
  });
  
  // Semantic similarity for related concepts
  Object.values(semanticGroups).forEach(group => {
    if (group.some(concept => lowerSearchTerm.includes(concept))) {
      const toolText = `${lowerTitle} ${lowerDescription} ${lowerCategory} ${lowerTags.join(' ')}`;
      const semanticMatches = group.filter(concept => toolText.includes(concept)).length;
      score += semanticMatches * 50;
    }
  });
  
  return score;
};
