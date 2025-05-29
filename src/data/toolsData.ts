import { Tool } from "@/types/tools";
import {
  businessTools,
  aiAssistants,
  videoTools,
  aiArtTools,
  audioMusicTools,
  contentCreationTools,
  aiToolsAndDevelopment,
  specializedTools,
  writingAndContent,
  imageAndDesign,
  businessAndProductivity,
  specializedAndNiche,
  educationAndLearning,
  creativeAndEntertainment,
  researchAndLearning,
  aiToolsAndUtilities,
  healthcareProfessionals,
  legalProfessionals,
  emergencyServices,
  creativeServices,
  personalServices,
  specializedPolicyTools,
  artAndCollectibles,
  aiChatPlatforms,
  aiDevelopmentTools,
  localAISolutions,
  aiInferencePlatforms,
  imageGenerationPlatforms,
  aiProductivityTools,
  openSourceAIModels,
  timeAndHistory,
  creativeSuites,
  advancedAITools
} from './tools';

// Combine all tools from different categories with enhanced categorization
export const allTools: Tool[] = [
  ...timeAndHistory,
  ...creativeSuites,
  ...advancedAITools,
  ...aiChatPlatforms,
  ...aiDevelopmentTools,
  ...localAISolutions,
  ...aiInferencePlatforms,
  ...imageGenerationPlatforms,
  ...aiProductivityTools,
  ...openSourceAIModels,
  ...writingAndContent,
  ...imageAndDesign,
  ...videoTools,
  ...audioMusicTools,
  ...businessAndProductivity,
  ...educationAndLearning,
  ...specializedAndNiche,
  ...businessTools,
  ...aiAssistants,
  ...aiArtTools,
  ...contentCreationTools,
  ...aiToolsAndDevelopment,
  ...specializedTools,
  ...creativeAndEntertainment,
  ...researchAndLearning,
  ...aiToolsAndUtilities,
  ...healthcareProfessionals,
  ...legalProfessionals,
  ...emergencyServices,
  ...creativeServices,
  ...personalServices,
  ...specializedPolicyTools,
  ...artAndCollectibles
];

// Create featured tools by selecting diverse tools from different categories
export const featuredTools: Tool[] = [
  allTools.find(tool => tool.title.includes("Claude")) || allTools[0],
  allTools.find(tool => tool.title.includes("Midjourney")) || allTools[1],
  allTools.find(tool => tool.title.includes("SUNO")) || allTools[2],
  allTools.find(tool => tool.title.includes("Business Plan")) || allTools[3],
  allTools.find(tool => tool.title.includes("SORA")) || allTools[4],
  allTools.find(tool => tool.title.includes("Ideogram")) || allTools[5]
];

// Enhanced keyword mapping for intelligent search
const keywordMapping: Record<string, string[]> = {
  // Theater and Performance
  "play": ["playwright", "stagemaster", "theater", "drama", "script", "performance"],
  "theater": ["playwright", "stagemaster", "drama", "script", "performance", "stage"],
  "drama": ["playwright", "stagemaster", "theater", "script", "performance"],
  "script": ["playwright", "stagemaster", "screenwriter", "drama", "theater"],
  "performance": ["stagemaster", "playwright", "theater", "drama"],

  // Writing and Books
  "book": ["writer", "author", "novel", "manuscript", "publish", "literature"],
  "write": ["writer", "author", "content", "blog", "article", "manuscript"],
  "author": ["writer", "book", "novel", "manuscript", "publish"],
  "novel": ["writer", "book", "author", "manuscript", "literature"],
  "manuscript": ["writer", "book", "author", "novel", "publish"],

  // Training and Education
  "train": ["training", "manual", "staff", "employee", "education", "course"],
  "staff": ["training", "manual", "employee", "team", "management"],
  "employee": ["training", "manual", "staff", "team", "management"],
  "manual": ["training", "guide", "documentation", "instruction"],

  // Cannabis related
  "weed": ["cannabis"],
  "pot": ["cannabis"],
  "marijuana": ["cannabis"],
  "hemp": ["cannabis"],
  "cbd": ["cannabis"],
  "thc": ["cannabis"],

  // Learning keywords
  "learn": ["skill", "course", "education", "study", "training", "college", "homeschool"],
  "study": ["learn", "course", "education", "skill", "college", "research"],
  "education": ["learn", "course", "skill", "college", "homeschool", "training"],
  "skill": ["learn", "course", "education", "training", "development"],
  "course": ["learn", "education", "skill", "college", "training"],
  "college": ["education", "learn", "course", "degree", "university"],
  "university": ["college", "education", "learn", "course", "degree"],
  "homeschool": ["education", "learn", "course", "teaching"],

  // Business keywords
  "business": ["entrepreneur", "startup", "company", "brand", "marketing", "analysis", "website", "design"],
  "startup": ["business", "entrepreneur", "company", "venture", "innovation"],
  "entrepreneur": ["business", "startup", "company", "venture"],
  "company": ["business", "startup", "corporate", "enterprise"],
  "brand": ["business", "marketing", "design", "identity", "logo"],
  "marketing": ["business", "brand", "promotion", "advertising", "social"],
  "website": ["web", "design", "development", "site", "online"],
  "analysis": ["data", "analytics", "insight", "research", "statistics"],

  // Data and Analytics
  "data": ["analysis", "analytics", "statistics", "research", "insight"],
  "analytics": ["data", "analysis", "statistics", "research", "metrics"],
  "statistics": ["data", "analysis", "analytics", "research", "metrics"],
  "research": ["data", "analysis", "study", "investigation", "insight"],

  // Creative and Design
  "design": ["graphic", "visual", "creative", "art", "ui", "ux", "website"],
  "art": ["design", "creative", "visual", "drawing", "painting", "illustration"],
  "creative": ["art", "design", "visual", "innovation", "imagination"],
  "drawing": ["art", "sketch", "illustration", "design", "creative"],
  "painting": ["art", "creative", "visual", "design"],

  // Technology and Development
  "code": ["programming", "development", "software", "web", "app"],
  "programming": ["code", "development", "software", "coding"],
  "development": ["code", "programming", "software", "web", "app"],
  "software": ["code", "programming", "development", "app", "tool"],
  "app": ["application", "software", "development", "mobile", "web"],
  "web": ["website", "development", "online", "internet"],

  // Health and Wellness
  "health": ["medical", "wellness", "fitness", "doctor", "healthcare"],
  "medical": ["health", "doctor", "healthcare", "medicine", "clinical"],
  "fitness": ["health", "exercise", "workout", "training", "wellness"],
  "doctor": ["medical", "health", "healthcare", "physician"],

  // Food and Cooking
  "food": ["cooking", "recipe", "chef", "cuisine", "nutrition"],
  "cooking": ["food", "recipe", "chef", "cuisine", "kitchen"],
  "recipe": ["cooking", "food", "chef", "cuisine", "ingredient"],
  "chef": ["cooking", "food", "recipe", "cuisine", "kitchen"],

  // Travel and Adventure
  "travel": ["trip", "vacation", "destination", "tourism", "adventure"],
  "trip": ["travel", "vacation", "journey", "destination"],
  "vacation": ["travel", "trip", "holiday", "destination"],
  "adventure": ["travel", "exploration", "journey"],

  // Entertainment and Fun
  "game": ["gaming", "entertainment", "fun", "play", "interactive"],
  "gaming": ["game", "entertainment", "fun", "play"],
  "entertainment": ["fun", "game", "music", "video", "show"],
  "fun": ["entertainment", "game", "play", "enjoyment"],
  "music": ["audio", "sound", "song", "entertainment"],

  // Financial and Legal
  "money": ["finance", "financial", "investment", "budget", "accounting"],
  "finance": ["money", "financial", "investment", "budget", "accounting"],
  "legal": ["law", "lawyer", "attorney", "contract", "compliance"],
  "law": ["legal", "lawyer", "attorney", "justice"],

  // AI and Technology
  "ai": ["artificial", "intelligence", "machine", "learning", "automation"],
  "artificial": ["ai", "intelligence", "machine", "automation"],
  "intelligence": ["ai", "artificial", "smart", "automation"],
  "automation": ["ai", "automatic", "smart", "efficient"],

  // Communication and Social
  "chat": ["communication", "messaging", "conversation", "talk"],
  "communication": ["chat", "messaging", "conversation", "social"],
  "social": ["communication", "network", "community", "sharing"],

  // Professional Services
  "professional": ["expert", "specialist", "service", "consultant"],
  "expert": ["professional", "specialist", "authority", "master"],
  "consultant": ["professional", "expert", "advisor", "specialist"]
};

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
    
    // Context-aware phrase matching
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

// Helper function to get categories with counts
export const getCategoriesWithCounts = (): Record<string, number> => {
  const categoryCounts: Record<string, number> = {};
  
  allTools.forEach(tool => {
    if (tool.category) {
      categoryCounts[tool.category] = (categoryCounts[tool.category] || 0) + 1;
    }
  });
  
  return categoryCounts;
};

// Helper function to get tools by category
export const getToolsByCategory = (category: string): Tool[] => {
  return allTools.filter(tool => tool.category === category);
};
