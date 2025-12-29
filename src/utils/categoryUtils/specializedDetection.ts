
import { Tool } from "@/types/tools";

// Helper function to detect major LLMs that should appear in multiple categories
export const isMajorLLM = (tool: Tool): boolean => {
  const majorLLMNames = [
    'chatgpt', 'claude', 'gemini', 'mistral', 'llama', 'anythingllm',
    'gpt-4', 'gpt-3.5', 'anthropic', 'google ai', 'meta ai'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  
  return majorLLMNames.some(llm => 
    titleLower.includes(llm) || 
    descriptionLower.includes(llm) ||
    (llm === 'chatgpt' && (titleLower.includes('chat gpt') || titleLower.includes('openai'))) ||
    (llm === 'anythingllm' && titleLower.includes('anything llm'))
  );
};

// Helper function to detect STRICTLY historical and time-based tools
export const isStrictlyHistoricalTimeRelatedTool = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const categoryLower = tool.category?.toLowerCase() || '';
  const tagsLower = (tool.tags || []).map(t => t.toLowerCase()).join(' ');
  
  // ========== STRICT EXCLUSION LIST ==========
  // These tools should NEVER appear in Historical & Time-Based category
  const excludedTools = [
    // AI/LLM platforms - NOT historical
    'lm studio', 'warmbox', 'bitwarden', 'malwarebytes', 'mailchimp',
    'zapier', 'make.com', 'n8n', 'notion', 'slack', 'discord', 'zoom',
    'canva', 'figma', 'adobe', 'midjourney', 'dall-e', 'stable diffusion',
    'suno', 'udio', 'elevenlabs', 'eleven labs', 'cursor', 'replit',
    'vercel', 'netlify', 'github', 'gitlab', 'stripe', 'shopify',
    'hubspot', 'salesforce', 'asana', 'trello', 'monday', 'clickup',
    'grammarly', 'jasper', 'copy.ai', 'writesonic',
    'buffer', 'hootsuite', 'sprout social', 'semrush', 'ahrefs', 'moz',
    'anthropic', 'openai', 'google ai', 'meta ai', 'microsoft copilot',
    'chatgpt', 'claude', 'gemini', 'perplexity', 'mistral', 'llama',
    '1password', 'lastpass', 'dashlane', 'nordvpn', 'expressvpn',
    'protonmail', 'protonvpn', 'signal', 'telegram', 'whatsapp',
    'quickbooks', 'xero', 'freshbooks', 'wave', 'square', 'paypal',
    'runway', 'pika', 'heygen', 'synthesia', 'descript', 'opus clip',
    'remove.bg', 'cleanup.pictures', 'photoroom', 'magic eraser',
    'ideogram', 'leonardo', 'playground ai', 'craiyon', 'nightcafe',
    'soundraw', 'mubert', 'boomy', 'aiva', 'loudly', 'beatoven',
    'writerly', 'jenni', 'wordtune', 'quillbot', 'sudowrite',
    'huggingface', 'replicate', 'together ai', 'groq', 'cohere',
    'perplexity', 'you.com', 'kagi', 'phind', 'exa', 'tavily',
    'browserless', 'apify', 'firecrawl', 'scraper', 'automation',
    // Specific tools that keep appearing in wrong category
    'ai tools finder', 'restorephotos', 'restore photos', 'restorephoto',
    'myheritage', 'deep nostalgia', 'bbc sound', 'sound effects',
    'character.ai', 'character ai', 'chai', 'replika', 'pi ai',
    'invideo', 'lumen5', 'pictory', 'flexclip', 'kapwing',
    'crisp', 'intercom', 'zendesk', 'freshdesk', 'drift',
    'otter.ai', 'fireflies', 'grain', 'fathom', 'tldv',
    'copy ai', 'anyword', 'hypotenuse', 'rytr', 'simplified',
    'brandmark', 'looka', 'hatchful', 'tailor brands',
    'gamma', 'tome', 'beautiful.ai', 'pitch', 'slides ai'
  ];
  
  // Exclude these tools immediately
  if (excludedTools.some(excluded => titleLower.includes(excluded))) {
    return false;
  }
  
  // Exclude major LLMs and general education tools from historical category
  if (isMajorLLM(tool)) {
    return false;
  }
  
  // ========== EXPLICIT HISTORICAL TOOL NAMES ==========
  // These tools MUST be included in Historical & Time-Based category
  const explicitHistoricalTools = [
    // Time Machine family - ALL VERSIONS (highest priority)
    'time machine gpt', 'time machine', 'time-machine', 'time traveler',
    'native american history time machine', 'native american time machine',
    'black history matters time machine', 'black history matter', 'time machine of unwritten history',
    'unwritten history', 'time traveler gpt', 'time machine gemini',
    
    // Talk to History family - CORE HISTORICAL TOOLS
    'talk to history', 'talk to history gpt',
    
    // Historical Headlines - News from history
    'historical headlines', 'historical headline', 'historical headlines gpt',
    
    // Historical personalities (REAL historical figure GPTs from AIWebTools)
    'nikola tesla gpt', 'nikola tesla',
    'albert einstein gpt', 'albert einstein',
    'alan watts gpt', 'alan watts',
    'mary magdalene gpt', 'mary magdalene',
    'carl sagan gpt', 'carl sagan',
    'paramahansa yogananda gpt', 'paramahansa yogananda', 'yogananda',
    'talk to the gods', 'talk to the gods gpt',
    'sophia aeterna', 'sophia aeterna ai',
    
    // Historical exploration & immersion tools (AIWebTools originals)
    'titanic resurrection', 'titanic resurrections', 'titanic resurrections gpt',
    'oraculum', 'oraculum gpt',
    'interpretis', 'interpretis gpt', // etymology = language history
    'imagination traveler', 'imagination traveler gpt', // cosmic time journeys
    'resurrection gpt', // reconnecting with the past
    'uncovering hidden historical', 'hidden historical patterns', 'historical patterns gpt',
    
    // Archaeology & Ancient exploration
    'archaeologist', 'indiana archaeologist', 'indiana archaeology', 'indiana archeologist',
    'grave decoder', 'gravestone decoder', 'cemetery', 'memorial decoder',
    
    // Historical medicine & alchemy
    'historical apothecary', 'apothecary gpt', 'historical apothecary gpt',
    'alchemist scientist', 'alchemical scientist', 'alchemist scientist gpt',
    
    // Historical voices & records
    'gptpastvoices', 'past voices',
    'ancient calendar', 'historical map explorer', 'historical map',
    'ancient knowledge gpt', 'ancient knowledge',
    
    // Regional/Cultural history tools
    'palestinian history', 'middle east history', 'black history',
    'civilization gpt', 'ancient egypt', 'roman empire', 'medieval history',
    'renaissance', 'dynasty', 'empire explorer', 'heritage explorer',
    'antiquity', 'ancestors', 'ancestry research', 'genealogy', 'lineage',
    
    // Historical education/immersion/simulation
    'historical immersion', 'historical simulation', 'historical figure',
    'historical persona', 'history immersive', 'history simulation',
    'history guide', 'history explorer', 'history preserver',
    
    // Stellaris - space exploration & temporal simulation
    'stellaris', 'stellaris ai space explorer'
  ];
  
  // Check for explicit historical tool names first - highest priority
  if (explicitHistoricalTools.some(name => titleLower.includes(name))) {
    return true;
  }
  
  // ========== STRICT HISTORICAL KEYWORDS ==========
  // Must have CLEAR historical/time context
  const strictHistoricalKeywords = [
    'time travel', 'historical figures', 'ancient calendar',
    'historical map', 'historical photography', 'historical demographics',
    'historical royalty', 'historical geography', 'historical literature',
    'archaeological', 'artifact', 'heritage site', 'medieval history',
    'renaissance art', 'antiquity studies', 'museum collection', 'archive',
    'chronicle', 'manuscript', 'relic', 'fossil', 'paleontology',
    'genealogy research', 'ancestry dna', 'lineage', 'dynasty research',
    'monarchy history', 'empire history', 'kingdom history',
    'revolution history', 'civil war', 'world war', 'battle history',
    'conquest', 'historical discovery', 'exploration history', 'expedition history',
    'prehistoric', 'paleolithic', 'neolithic', 'bronze age', 'iron age', 'stone age',
    'temporal analysis', 'chronological study', 'historical timeline'
  ];
  
  // Check for strict historical keywords with confirmation
  const hasStrictKeyword = strictHistoricalKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    (descriptionLower.includes(keyword) && 
     (descriptionLower.includes('historical') || descriptionLower.includes('history') || 
      descriptionLower.includes('time travel') || descriptionLower.includes('ancient') ||
      descriptionLower.includes('past') || descriptionLower.includes('era')))
  );
  
  if (hasStrictKeyword) {
    return true;
  }
  
  // Check category for historical designation
  if (categoryLower.includes('historical') || categoryLower.includes('time-based') || 
      categoryLower.includes('time & history') || categoryLower.includes('history')) {
    return true;
  }
  
  // Check tags for historical indicators
  if (tagsLower.includes('historical') || tagsLower.includes('time machine') || 
      tagsLower.includes('time travel') || tagsLower.includes('history gpt')) {
    return true;
  }
  
  return false;
};

// Helper function to detect PRIMARY education tools - EXPANDED for comprehensive coverage
export const isPrimaryEducationTool = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const categoryLower = tool.category?.toLowerCase() || '';
  const tagsLower = (tool.tags || []).map(t => t.toLowerCase()).join(' ');
  
  // COMPREHENSIVE education keywords - most AI tools have educational value
  const primaryEducationKeywords = [
    // Direct education terms
    'quiz maker', 'course maker', 'training manual', 'children\'s book', 'homework helper',
    'essay writer', 'learn any course', 'learn any skill', 'college degree', 'home school',
    'education', 'learning', 'educational', 'academic', 'study', 'course', 'curriculum',
    'teaching', 'teacher', 'tutor', 'tutoring', 'lesson', 'homework', 'quiz', 'test',
    'training', 'university', 'college', 'school', 'degree', 'certification',
    'workshop', 'seminar', 'lecture', 'instruction', 'student', 'learner', 'classroom',
    'insect study', 'entomology', 'species research', 'biological studies',
    
    // Knowledge & Research (educational in nature)
    'research', 'researcher', 'knowledge', 'encyclopedia', 'wiki', 'reference',
    'information', 'fact', 'facts', 'data analysis', 'analysis report', 'report',
    'discover', 'discovery', 'explore', 'explorer', 'investigation', 'investigator',
    
    // Language & Communication learning
    'language', 'translation', 'translator', 'grammar', 'vocabulary', 'speech',
    'writing', 'writer', 'read', 'reader', 'literacy', 'communication',
    
    // Science & STEM education
    'science', 'scientific', 'math', 'mathematics', 'physics', 'chemistry', 'biology',
    'engineering', 'technology', 'stem', 'coding', 'programming', 'computer science',
    'algorithm', 'data science', 'statistics', 'calculus', 'algebra', 'geometry',
    
    // History & Social Studies
    'history', 'historical', 'geography', 'culture', 'cultural', 'civilization',
    'archaeology', 'anthropology', 'sociology', 'politics', 'government', 'economics',
    
    // Arts & Humanities education
    'music lesson', 'art lesson', 'creative writing', 'literature', 'poetry',
    'philosophy', 'ethics', 'psychology', 'theology', 'religion', 'mythology',
    
    // Professional development & Skills
    'skill', 'skills', 'professional development', 'career', 'job training',
    'certification', 'competency', 'expertise', 'mastery', 'proficiency',
    'how to', 'guide', 'tutorial', 'explain', 'teaches', 'instructor'
  ];
  
  // Educational categories
  const educationCategories = [
    'education', 'learning', 'academic', 'research', 'knowledge', 'tutorial',
    'training', 'development', 'study', 'educational'
  ];
  
  // Exclude major LLMs from being classified as primary education tools
  if (isMajorLLM(tool)) {
    return false;
  }
  
  // Check if it's explicitly an education tool by category
  const isEducationByCategory = educationCategories.some(cat => 
    categoryLower.includes(cat)
  );
  
  // Check by title or description
  const haystack = `${titleLower} ${descriptionLower} ${tagsLower}`;
  const isEducationByContent = primaryEducationKeywords.some(keyword => 
    haystack.includes(keyword)
  );
  
  return isEducationByCategory || isEducationByContent;
};

// Helper function to detect education-related tools (broader scope)
export const isEducationRelatedTool = (tool: Tool): boolean => {
  return isPrimaryEducationTool(tool);
};

// Helper function to detect content creation tools
export const isContentCreationTool = (tool: Tool): boolean => {
  const contentKeywords = [
    'writing', 'content creation', 'blog', 'article', 'copywriting', 'content generator',
    'text generation', 'story writing', 'book writing', 'screenplay', 'script',
    'marketing copy', 'social media content', 'email writing', 'creative writing',
    'grammar', 'proofreading', 'editing', 'content enhancement', 'seo writing'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const categoryLower = tool.category?.toLowerCase() || '';
  
  return contentKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    categoryLower.includes(keyword)
  ) || isMajorLLM(tool); // Include major LLMs in content creation
};

// Helper function to detect data analytics tools
export const isDataAnalyticsTool = (tool: Tool): boolean => {
  const analyticsKeywords = [
    'data analysis', 'analytics', 'statistics', 'data science', 'data visualization',
    'business intelligence', 'reporting', 'dashboard', 'metrics', 'insights',
    'predictive analytics', 'machine learning', 'ai analysis', 'data mining',
    'research analysis', 'data processing', 'computational analysis'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const categoryLower = tool.category?.toLowerCase() || '';
  
  return analyticsKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    categoryLower.includes(keyword)
  ) || isMajorLLM(tool); // Include major LLMs in data analytics
};

// Helper function to detect AI Web Tools GPTs, Custom GPTs, and Custom Gemini Gems
export const isAIWebToolsGPT = (tool: Tool): boolean => {
  // Check for Custom GPT tag (the primary identifier after tagging initiative)
  const hasCustomGPTTag = tool.tags?.some(tag => 
    tag.toLowerCase() === 'custom gpt' || 
    tag.toLowerCase().includes('custom gpt')
  );
  
  // Check for Gemini Gem indicators
  const hasGeminiGemTag = tool.tags?.some(tag => 
    tag.toLowerCase().includes('gemini gem') || 
    tag.toLowerCase().includes('custom gem')
  );
  const isGeminiGemUrl = tool.directUrl?.includes('gemini.google.com/gem/');
  const isGeminiGemCategory = tool.category?.toLowerCase().includes('gemini gem');
  
  // Check for AIWebTools indicators
  const hasAIWebToolsUrl = tool.directUrl?.includes('lovable.app') || 
                            tool.directUrl?.includes('aiwebtools');
  const hasAIWebToolsDescription = tool.description?.toLowerCase().includes('aiwebtools');
  const hasAIWebToolsTag = tool.tags?.some(tag => tag.toLowerCase().includes('aiwebtools'));
  
  // Check for ChatGPT.com GPT URLs (custom GPTs hosted on OpenAI)
  const isChatGPTCustomGPT = tool.directUrl?.includes('chatgpt.com/g/g-');
  
  return hasCustomGPTTag || hasGeminiGemTag || isGeminiGemUrl || isGeminiGemCategory || 
         hasAIWebToolsUrl || hasAIWebToolsDescription || hasAIWebToolsTag || isChatGPTCustomGPT;
};

// Helper function to detect AI Chat & Assistant tools with enhanced matching - EXPANDED
export const isAIChatAssistantTool = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  const directUrl = (tool.directUrl || '').toLowerCase();
  
  // EXPANDED chat/assistant keywords
  const chatKeywords = [
    // Core chat terms
    'chat', 'chatbot', 'assistant', 'conversational', 'conversation',
    'dialogue', 'dialog', 'messaging', 'message', 'talk to', 'speak to',
    
    // AI assistants & platforms
    'chatgpt', 'gpt', 'claude', 'gemini', 'bard', 'copilot', 'llm',
    'language model', 'ai companion', 'virtual assistant', 'personal ai',
    'digital assistant', 'smart assistant', 'ai helper', 'ai bot',
    
    // Functional assistants
    'advisor', 'consultant', 'counselor', 'guide', 'mentor', 'coach',
    'recommendation', 'suggestion', 'question answering', 'q&a',
    'support', 'help desk', 'customer service', 'interactive',
    
    // Custom GPT indicators
    'custom gpt', 'gpt store', 'gpts'
  ];

  const haystack = `${titleLower} ${descriptionLower} ${tagsLower} ${categoryLower}`;
  
  const hasChatKeyword = chatKeywords.some(keyword => haystack.includes(keyword));
  
  // Custom GPTs are chat tools
  const isCustomGPT = directUrl.includes('chatgpt.com/g/g-') || 
                      directUrl.includes('.lovable.app') ||
                      directUrl.includes('gemini.google.com/gem/');
  
  return hasChatKeyword || isCustomGPT || isMajorLLM(tool);
};
