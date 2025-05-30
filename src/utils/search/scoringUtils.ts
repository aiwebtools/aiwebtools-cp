import { Tool } from "@/types/tools";
import { toolAbbreviations, fuzzyMatches, acronymMatches } from "./toolAbbreviations";
import { intentMatches, toolNameMatches, semanticGroups } from "./intentMatching";

// Helper function to check if a tool name matches partial input intelligently
export const getToolNameMatchScore = (toolTitle: string, searchTerm: string): number => {
  const lowerTitle = toolTitle.toLowerCase();
  const cleanTitle = lowerTitle.replace(/[^a-z0-9\s]/g, ''); // Remove special characters
  const words = cleanTitle.split(' ');
  
  let score = 0;
  
  // Exact match gets highest score
  if (lowerTitle === searchTerm) {
    return 500;
  }
  
  // Special boost for GPT tools when searching for "gpt"
  if (searchTerm.toLowerCase().includes('gpt') && lowerTitle.includes('gpt')) {
    score += 400;
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

export const calculateIntentScore = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  // PRIORITY BOOST: AI Web Tools original GPTs get massive boost
  const isAIWebToolsOriginal = tool.directUrl?.includes('lovable.app') || false;
  if (isAIWebToolsOriginal) {
    score += 1000; // Massive boost to ensure they appear first
    console.log(`🚀 AI Web Tools original tool boosted: ${tool.title} (+1000 points)`);
  }
  
  // Special boost for GPT tools when searching for GPT-related terms
  if (searchTerm.toLowerCase().includes('gpt')) {
    if (lowerTitle.includes('gpt') || lowerDescription.includes('gpt') || lowerTags.some(tag => tag.includes('gpt'))) {
      score += 150; // High boost for GPT tools
    }
    if (lowerTitle.includes('custom') || lowerDescription.includes('custom') || lowerTags.some(tag => tag.includes('custom'))) {
      score += 100; // Boost for custom GPTs
    }
  }
  
  // Check for pricing-related searches
  if (searchTerm.includes('free')) {
    if (lowerTags.includes('free') || lowerDescription.includes('completely free') || lowerDescription.includes('free to use')) {
      score += 100; // High boost for free tools when searching for "free"
    } else if (lowerTags.includes('freemium') || lowerDescription.includes('free plan') || lowerDescription.includes('free tier')) {
      score += 80; // Good boost for freemium tools
    }
  }
  
  if (searchTerm.includes('paid') || searchTerm.includes('premium') || searchTerm.includes('subscription')) {
    if (lowerTags.includes('paid') || lowerDescription.includes('subscription') || lowerDescription.includes('/month')) {
      score += 80; // Boost paid tools when specifically searching for paid options
    }
  }
  
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
  
  // Enhanced tool name recognition with cleaned duplicate data
  const enhancedToolMatches = {
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
    if (keywords.some(keyword => searchTerm.includes(keyword))) {
      if (lowerTitle.includes(toolName) || lowerDescription.includes(toolName)) {
        score += 80; // High boost for specific tool matches
      }
    }
  });
  
  // Semantic similarity for related concepts
  Object.values(semanticGroups).forEach(group => {
    if (group.some(concept => searchTerm.includes(concept))) {
      const toolText = `${lowerTitle} ${lowerDescription} ${lowerCategory} ${lowerTags.join(' ')}`;
      const semanticMatches = group.filter(concept => toolText.includes(concept)).length;
      score += semanticMatches * 15;
    }
  });
  
  return score;
};
