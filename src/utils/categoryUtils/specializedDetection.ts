
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
    'genealogy', 'ancestry', 'lineage', 'dynasty', 'monarchy', 'empire', 'kingdom',
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

// Helper function to detect PRIMARY education tools
export const isPrimaryEducationTool = (tool: Tool): boolean => {
  const primaryEducationKeywords = [
    'quiz maker', 'course maker', 'training manual', 'children\'s book', 'homework helper',
    'essay writer', 'learn any course', 'learn any skill', 'college degree', 'home school',
    'education', 'learning', 'educational', 'academic', 'study', 'course', 'curriculum',
    'teaching', 'teacher', 'tutor', 'tutoring', 'lesson', 'homework', 'quiz', 'test',
    'training', 'university', 'college', 'school', 'degree', 'certification',
    'workshop', 'seminar', 'lecture', 'instruction', 'student', 'learner', 'classroom',
    'insect study', 'entomology', 'species research', 'biological studies'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // Exclude major LLMs from being classified as primary education tools
  if (isMajorLLM(tool)) {
    return false;
  }
  
  // CRITICAL: Force Insect Study Tool to be education
  if (titleLower.includes('insect study')) {
    console.log(`🎓 FORCE: Insect Study Tool detected as PRIMARY EDUCATION tool`);
    return true;
  }
  
  // Check if it's explicitly an education tool by name or category
  const isEducationByCategory = categoryLower.includes('education') || 
                               categoryLower.includes('learning');
  
  const isEducationByTitle = primaryEducationKeywords.some(keyword => 
    titleLower.includes(keyword)
  );
  
  return isEducationByCategory || isEducationByTitle;
};

// Helper function to detect education-related tools (broader scope)
export const isEducationRelatedTool = (tool: Tool): boolean => {
  return isPrimaryEducationTool(tool) || 
         (tool.category?.toLowerCase().includes('education')) ||
         (tool.category?.toLowerCase().includes('learning'));
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

// Helper function to detect AI Web Tools GPTs
export const isAIWebToolsGPT = (tool: Tool): boolean => {
  return tool.directUrl?.includes('lovable.app') || 
         tool.directUrl?.includes('aiwebtools') ||
         tool.description?.toLowerCase().includes('aiwebtools') ||
         tool.tags?.some(tag => tag.toLowerCase().includes('aiwebtools'));
};

// Helper function to detect AI Chat & Assistant tools with enhanced matching
export const isAIChatAssistantTool = (tool: Tool): boolean => {
  const chatKeywords = [
    'chat', 'chatbot', 'assistant', 'conversational ai', 'ai chat', 'dialogue',
    'conversation', 'virtual assistant', 'personal ai', 'ai companion', 'smart assistant',
    'digital assistant', 'voice assistant', 'text assistant', 'ai support', 'chatgpt',
    'claude', 'gemini', 'bard', 'ai helper', 'task assistant', 'productivity assistant',
    'ai bot', 'smart bot', 'intelligent assistant', 'language model', 'llm', 'gpt',
    'ai communication', 'messaging ai', 'interactive ai', 'natural language ai',
    'ai interaction', 'response ai', 'query ai', 'question answering', 'ai guidance',
    'ai advisor', 'consultation ai', 'recommendation ai', 'planning ai', 'strategy ai'
  ];
  
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  return chatKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  ) || isMajorLLM(tool); // Include major LLMs in chat category
};
