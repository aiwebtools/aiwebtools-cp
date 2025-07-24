import { Tool } from "@/types/tools";

export const matchChatAssistant = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // Chat assistant keywords
  const chatKeywords = [
    'chat assistant', 'chatbot', 'ai assistant', 'conversational ai',
    'ai chat', 'chat ai', 'virtual assistant', 'digital assistant',
    'ai companion', 'chat gpt', 'chatgpt', 'claude', 'gemini',
    'ai helper', 'smart assistant', 'personal assistant'
  ];
  
  // Check if search term matches chat assistant intent
  const isChatSearch = chatKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || keyword.includes(lowerSearchTerm)
  );
  
  if (isChatSearch) {
    // Priority AI Web Tools chat assistants (your custom GPTs)
    const priorityAIWebToolsChat = [
      'talk to history gpt',
      'talk to the gods gpt',
      'mary magdalene gpt',
      'albert einstein gpt',
      'nikola tesla gpt',
      'alan watts gpt',
      'celebrity chatline gpt',
      'godmode gpt',
      'clarity omni gpt',
      'multitasker gpt',
      'perfect prompt engine'
    ];
    
    // Top-tier chat assistants
    const topChatTools = [
      'chatgpt', 'claude', 'gemini', 'bard', 'copilot',
      'perplexity', 'poe', 'character.ai', 'replika'
    ];
    
    // Check AI Web Tools first (highest priority)
    if (priorityAIWebToolsChat.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // Check top chat tools
    if (topChatTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // General chat assistant matching
    const chatTerms = [
      'chat', 'conversation', 'talk', 'dialogue', 'interact',
      'communicate', 'speak', 'discuss', 'assistant', 'bot'
    ];
    
    const aiTerms = [
      'ai', 'artificial intelligence', 'smart', 'intelligent',
      'automated', 'virtual', 'digital', 'gpt'
    ];
    
    const hasChatTerm = chatTerms.some(term =>
      lowerTitle.includes(term) || lowerDescription.includes(term) ||
      lowerCategory.includes(term) || lowerTags.some(tag => tag.includes(term))
    );
    
    const hasAITerm = aiTerms.some(term =>
      lowerTitle.includes(term) || lowerDescription.includes(term) ||
      lowerCategory.includes(term) || lowerTags.some(tag => tag.includes(term))
    );
    
    if (hasChatTerm && hasAITerm) {
      return true;
    }
    
    // Check categories
    const chatCategories = [
      'ai chat', 'chat platforms', 'ai assistants', 'conversational ai',
      'virtual assistants', 'chatbots', 'ai companions'
    ];
    
    if (chatCategories.some(cat => lowerCategory.includes(cat))) {
      return true;
    }
  }
  
  return false;
};

export const scoreChatAssistant = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  // Chat assistant keywords
  const chatKeywords = [
    'chat assistant', 'chatbot', 'ai assistant', 'conversational ai',
    'ai chat', 'chat ai', 'virtual assistant', 'digital assistant',
    'ai companion', 'chat gpt', 'chatgpt', 'claude', 'gemini',
    'ai helper', 'smart assistant', 'personal assistant'
  ];
  
  // Check if search term matches chat assistant intent
  const isChatSearch = chatKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || keyword.includes(lowerSearchTerm)
  );
  
  if (isChatSearch) {
    // HIGHEST PRIORITY: AI Web Tools chat assistants (your custom GPTs)
    if (lowerTitle.includes('talk to history gpt')) {
      score += 5000;
    }
    if (lowerTitle.includes('talk to the gods gpt')) {
      score += 4900;
    }
    if (lowerTitle.includes('mary magdalene gpt')) {
      score += 4800;
    }
    if (lowerTitle.includes('albert einstein gpt')) {
      score += 4700;
    }
    if (lowerTitle.includes('nikola tesla gpt')) {
      score += 4600;
    }
    if (lowerTitle.includes('alan watts gpt')) {
      score += 4500;
    }
    if (lowerTitle.includes('celebrity chatline gpt')) {
      score += 4400;
    }
    if (lowerTitle.includes('godmode gpt')) {
      score += 4300;
    }
    if (lowerTitle.includes('clarity omni gpt')) {
      score += 4200;
    }
    if (lowerTitle.includes('multitasker gpt')) {
      score += 4100;
    }
    if (lowerTitle.includes('perfect prompt engine')) {
      score += 4000;
    }
    
    // TOP TIER: Leading chat assistants
    if (lowerTitle.includes('chatgpt') || lowerTitle.includes('chat gpt')) {
      score += 3900;
    }
    if (lowerTitle.includes('claude')) {
      score += 3800;
    }
    if (lowerTitle.includes('gemini')) {
      score += 3700;
    }
    if (lowerTitle.includes('microsoft copilot') || lowerTitle.includes('copilot')) {
      score += 3600;
    }
    if (lowerTitle.includes('perplexity')) {
      score += 3500;
    }
    if (lowerTitle.includes('bard')) {
      score += 3400;
    }
    
    // HIGH TIER: Specialized chat tools
    if (lowerTitle.includes('character.ai')) {
      score += 3300;
    }
    if (lowerTitle.includes('replika')) {
      score += 3200;
    }
    if (lowerTitle.includes('poe by quora') || lowerTitle.includes('poe')) {
      score += 3100;
    }
    if (lowerTitle.includes('chai')) {
      score += 3000;
    }
    if (lowerTitle.includes('janitor ai')) {
      score += 2900;
    }
    
    // Chat-specific terms in title
    if (lowerTitle.includes('chat assistant')) {
      score += 2000;
    }
    if (lowerTitle.includes('ai assistant')) {
      score += 1900;
    }
    if (lowerTitle.includes('chatbot')) {
      score += 1800;
    }
    if (lowerTitle.includes('conversational ai')) {
      score += 1700;
    }
    if (lowerTitle.includes('virtual assistant')) {
      score += 1600;
    }
    if (lowerTitle.includes('ai chat')) {
      score += 1500;
    }
    if (lowerTitle.includes('chat')) {
      score += 1200;
    }
    if (lowerTitle.includes('assistant')) {
      score += 1000;
    }
    
    // Description matches
    if (lowerDescription.includes('chat assistant')) {
      score += 800;
    }
    if (lowerDescription.includes('ai assistant')) {
      score += 700;
    }
    if (lowerDescription.includes('conversational')) {
      score += 600;
    }
    if (lowerDescription.includes('chatbot')) {
      score += 500;
    }
    
    // Category bonuses
    if (lowerCategory.includes('ai chat')) {
      score += 800;
    }
    if (lowerCategory.includes('chat platforms')) {
      score += 700;
    }
    if (lowerCategory.includes('ai assistants')) {
      score += 600;
    }
    if (lowerCategory.includes('conversational ai')) {
      score += 500;
    }
    
    // Tag bonuses
    if (lowerTags.some(tag => tag.includes('chat assistant'))) {
      score += 400;
    }
    if (lowerTags.some(tag => tag.includes('ai assistant'))) {
      score += 300;
    }
    if (lowerTags.some(tag => tag.includes('conversational'))) {
      score += 200;
    }
  }
  
  return score;
};