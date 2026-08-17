import { Tool } from "@/types/tools";

/**
 * Enhanced business category filtering to prevent entertainment tools from appearing in business categories
 */

// Entertainment and gaming keywords that should exclude tools from business categories
const ENTERTAINMENT_EXCLUSION_KEYWORDS = [
  'trivia', 'game', 'gaming', 'entertainment', 'fun', 'party', 'quiz night',
  'imagination traveler', 'fantasy', 'cosmic guide', 'alternate realities',
  'storytelling', 'immersive experiences', 'creative journeys', 'fortune telling',
  'predictions', 'mystical', 'tarot', 'astrology', 'horoscope', 'divination',
  'celebrity chat', 'celebrity simulation', 'fan interaction', 'virtual conversations',
  'comic book', 'comic creation', 'graphic novel', 'meme generator', 'memes',
  'video game', 'game design', 'game development', 'playable', 'interactive game'
];

// Business-specific keywords that confirm a tool belongs in business category
const BUSINESS_CONFIRMATION_KEYWORDS = [
  'productivity', 'workflow', 'business operations', 'management', 'sales',
  'marketing', 'finance', 'accounting', 'crm', 'project management',
  'team collaboration', 'business intelligence', 'analytics', 'reporting',
  'automation', 'efficiency', 'optimization', 'roi', 'revenue', 'profit',
  'enterprise', 'corporate', 'professional', 'b2b', 'business strategy',
  'operations', 'logistics', 'supply chain', 'inventory', 'customer service'
];

/**
 * Check if a tool is clearly entertainment-related and should be excluded from business categories
 */
export const isEntertainmentTool = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  const fullText = `${titleLower} ${descriptionLower} ${tagsLower} ${categoryLower}`;
  
  // Check if any entertainment keywords are present
  const hasEntertainmentKeywords = ENTERTAINMENT_EXCLUSION_KEYWORDS.some(keyword => 
    fullText.includes(keyword)
  );
  
  // Check if it's clearly categorized as entertainment
  const isEntertainmentCategory = categoryLower.includes('entertainment') || 
                                 categoryLower.includes('gaming') ||
                                 categoryLower.includes('creative') ||
                                 categoryLower.includes('fun');
  
  return hasEntertainmentKeywords || isEntertainmentCategory;
};

/**
 * Check if a tool has legitimate business application
 */
export const hasBusinessApplication = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  const fullText = `${titleLower} ${descriptionLower} ${tagsLower} ${categoryLower}`;
  
  // Check if any business keywords are present
  return BUSINESS_CONFIRMATION_KEYWORDS.some(keyword => 
    fullText.includes(keyword)
  );
};

/**
 * Filter tools for business categories, excluding entertainment tools
 */
export const filterBusinessTools = (tools: Tool[]): Tool[] => {
  return tools.filter(tool => {
    // First check if it's an entertainment tool - if so, exclude it
    if (isEntertainmentTool(tool)) {
      if (import.meta.env.DEV) console.log(`❌ Excluding entertainment tool from business category: ${tool.title}`);
      return false;
    }
    
    // If it has business applications, include it
    if (hasBusinessApplication(tool)) {
      return true;
    }
    
    // For AI Web Tools GPTs, be more lenient but still exclude clear entertainment
    if (tool.directUrl?.includes('lovable.app')) {
      // Even AI Web Tools GPTs should not be in business if they're clearly entertainment
      const isObviousEntertainment = ['trivia', 'game', 'imagination', 'fortune', 'celebrity'].some(keyword =>
        tool.title.toLowerCase().includes(keyword)
      );
      
      if (isObviousEntertainment) {
        if (import.meta.env.DEV) console.log(`❌ Excluding AI Web Tools entertainment GPT from business: ${tool.title}`);
        return false;
      }
      
      return true; // Include other AI Web Tools GPTs
    }
    
    // For other tools, check if they match business categories
    const categoryLower = tool.category?.toLowerCase() || '';
    return categoryLower.includes('business') || 
           categoryLower.includes('productivity') || 
           categoryLower.includes('professional');
  });
};

if (import.meta.env.DEV) console.log('🏢 Business category filtering loaded - entertainment tools will be excluded from business categories!');