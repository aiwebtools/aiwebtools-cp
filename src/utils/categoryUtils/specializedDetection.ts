
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
  // First check if it's primarily an educational tool - if so, exclude it from historical category
  if (isPrimaryEducationTool(tool)) {
    return false;
  }

  const strictHistoricalKeywords = [
    'time machine', 'time travel', 'historical figures', 'talk to history', 'historical headlines',
    'titanic resurrection', 'native american history', 'ancient calendar', 'historical map',
    'historical photography', 'historical demographics', 'historical royalty', 'historical geography',
    'historical literature', 'oraculum', 'interpretis', 'phenomenon explorer', 'hidden histories',
    'archaeological', 'artifact', 'heritage', 'medieval', 'renaissance', 'antiquity',
    'museum', 'archive', 'chronicle', 'manuscript', 'relic', 'fossil',
    'genealogy', 'ancestry', 'lineage', 'dynasty', 'monarchy', 'empire', 'kingdom', 'gravestone', 'cemetery', 'grave decoder', 'memorial',
    'revolution', 'war', 'battle', 'conquest', 'discovery', 'exploration', 'expedition',
    'prehistoric', 'paleolithic', 'neolithic', 'bronze age', 'iron age', 'stone age',
    'mystical', 'esoteric', 'occult', 'temporal', 'chronological', 'anachronism'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  
  // Exclude major LLMs and general education tools from historical category
  if (isMajorLLM(tool)) {
    return false;
  }
  
  // Check for specific historical tool names
  const historicalToolNames = [
    'time machine gpt', 'talk to history', 'historical headlines', 'titanic resurrection',
    'native american history', 'oraculum', 'interpretis', 'phenomenon explorer',
    'hidden histories', 'nikola tesla gpt', 'albert einstein gpt'
  ];
  
  const isHistoricalToolByName = historicalToolNames.some(name => 
    titleLower.includes(name)
  );
  
  if (isHistoricalToolByName) {
    return true;
  }
  
  // Check for strict historical keywords in title or primary description
  return strictHistoricalKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    (descriptionLower.includes(keyword) && 
     (descriptionLower.includes('historical') || descriptionLower.includes('history') || 
      descriptionLower.includes('time travel') || descriptionLower.includes('ancient')))
  );
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
