
import { Tool } from "@/types/tools";
import { aiWebToolsKeywords } from "@/data/keywords/aiWebToolsKeywords";

// Enhanced search specifically for AI Web Tools GPTs
export const searchAIWebToolsGPTs = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm || searchTerm.length < 2) return [];
  
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = lowerSearchTerm.split(/\s+/);
  
  console.log(`🔍 AI Web Tools search for: "${searchTerm}"`);
  
  // Filter AI Web Tools GPTs - include both lovable.app and chat.openai.com URLs from our custom GPTs
  const aiWebToolsGPTs = tools.filter(tool => 
    tool.directUrl?.includes('lovable.app') || 
    tool.directUrl?.includes('aiwebtools') ||
    tool.directUrl?.includes('chat.openai.com') ||
    tool.directUrl?.includes('chatgpt.com') ||
    tool.title.includes('GPT')
  );
  
  const results = aiWebToolsGPTs.filter(tool => {
    const toolText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
    
    // PRIORITY 1: Exact keyword match in title (highest priority)
    if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 2: Title starts with search term
    if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 3: Any word in title starts with search term
    const titleWords = tool.title.toLowerCase().split(' ');
    if (titleWords.some(word => word.startsWith(lowerSearchTerm))) {
      return true;
    }
    
    // PRIORITY 4: Direct text match in any field
    if (toolText.includes(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 5: Word-by-word matching
    const hasAllWords = searchWords.every(word => toolText.includes(word));
    if (hasAllWords) {
      return true;
    }
    
    // Enhanced keyword matching for AI Web Tools
    for (const [keyword, synonyms] of Object.entries(aiWebToolsKeywords)) {
      if (lowerSearchTerm.includes(keyword) || synonyms.some(syn => lowerSearchTerm.includes(syn))) {
        if (synonyms.some(syn => toolText.includes(syn)) || toolText.includes(keyword)) {
          return true;
        }
      }
    }
    
    // THEATRE/PERFORMING ARTS SPECIFIC MATCHING
    if (lowerSearchTerm.includes('theatre') || lowerSearchTerm.includes('theater') || 
        lowerSearchTerm.includes('stage') || lowerSearchTerm.includes('performing') ||
        lowerSearchTerm.includes('drama') || lowerSearchTerm.includes('acting')) {
      if (tool.title.toLowerCase().includes('stagemaster') || 
          tool.title.toLowerCase().includes('stage master') ||
          toolText.includes('performing arts') || 
          toolText.includes('stage production') ||
          toolText.includes('theatre') || 
          toolText.includes('theater') ||
          toolText.includes('choreography') ||
          toolText.includes('costume') ||
          toolText.includes('lighting') ||
          toolText.includes('set design')) {
        return true;
      }
    }
    
    // COMPREHENSIVE CATEGORY TRIGGER MATCHING
    const categoryTriggers = [
      // Spirituality & Religion
      { search: 'spirit', matches: ['spiritual', 'spirituality', 'soul', 'consciousness', 'enlightenment', 'divine', 'religious', 'talk to gods', 'mary magdalene', 'sophia aeterna', 'alan watts', 'resurrection', 'oraculum', 'arius', 'council of light'] },
      { search: 'spirituality', matches: ['spiritual', 'spirit', 'soul', 'consciousness', 'enlightenment', 'divine', 'religious', 'talk to gods', 'mary magdalene', 'sophia aeterna', 'alan watts', 'resurrection', 'oraculum', 'arius', 'council of light', 'philosophy', 'wisdom'] },
      { search: 'spiritual', matches: ['spirituality', 'spirit', 'soul', 'consciousness', 'enlightenment', 'divine', 'religious', 'talk to gods', 'mary magdalene', 'sophia aeterna', 'alan watts', 'resurrection', 'oraculum', 'arius', 'council of light', 'philosophy', 'wisdom'] },
      { search: 'religious', matches: ['religion', 'spiritual', 'spirituality', 'talk to gods', 'mary magdalene', 'faith', 'belief', 'divine', 'deity', 'arius', 'council of light'] },
      { search: 'religion', matches: ['religious', 'spiritual', 'spirituality', 'talk to gods', 'mary magdalene', 'faith', 'belief', 'divine', 'deity'] },
      
      // Writing & Content
      { search: 'writing', matches: ['book', 'script', 'content', 'writer', 'author', 'novel', 'literature', 'article', 'blog', 'screenplay', 'playwriter', 'manuscript', 'publish'] },
      { search: 'writer', matches: ['book writer', 'script writer', 'content', 'author', 'writing', 'novelist', 'article rewriter', 'playwriter'] },
      { search: 'write', matches: ['book', 'script', 'content', 'writer', 'author', 'writing', 'article', 'blog', 'manuscript'] },
      
      // AI Agents
      { search: 'agent', matches: ['agents', 'autonomous', 'automation', 'bot', 'assistant', 'ai agent', 'intelligent agent', 'multi-agent'] },
      { search: 'agents', matches: ['agent', 'autonomous', 'automation', 'bot', 'assistant', 'ai agent', 'intelligent agent', 'multi-agent'] },
      
      // Learning & Education
      { search: 'learn', matches: ['learn', 'education', 'course', 'skill', 'study', 'tutorial', 'learning', 'college', 'school', 'homeschool', 'training'] },
      { search: 'education', matches: ['learn', 'learning', 'course', 'school', 'college', 'university', 'study', 'tutorial', 'homeschool', 'training'] },
      
      // Health & Medical
      { search: 'medical', matches: ['doctor', 'health', 'wellness', 'dr', 'healthcare', 'medicine', 'diagnosis', 'treatment', 'therapy', 'personalized doctor'] },
      { search: 'health', matches: ['medical', 'doctor', 'wellness', 'mental', 'healthcare', 'medicine', 'therapy', 'personalized doctor'] },
      { search: 'wellness', matches: ['health', 'mental wellness', 'medical', 'therapy', 'mindfulness', 'wellbeing'] },
      
      // Creative & Design
      { search: 'design', matches: ['graphic', 'creative', 'designer', 'visual', 'artistic', 'art', 'illustration', 'logo', 'branding'] },
      { search: 'art', matches: ['graphic design', 'artwork', 'sketch', 'creative', 'artistic', 'drawing', 'painting', 'illustration', 'restyle'] },
      
      // Business & Finance
      { search: 'business', matches: ['startup', 'entrepreneur', 'company', 'enterprise', 'business plan', 'finance', 'investment', 'trading'] },
      { search: 'finance', matches: ['business', 'trader', 'investment', 'money', 'banking', 'stocks', 'credit', 'taxes'] },
      
      // Video & Multimedia
      { search: 'video', matches: ['movie', 'scene', 'sora', 'film', 'cinema', 'multimedia', 'animation', 'luma', 'kling'] },
      { search: 'movie', matches: ['video', 'film', 'cinema', 'script', 'scene', 'movie maker', 'movie scene'] },
      
      // Theatre & Performing Arts
      { search: 'theatre', matches: ['stage', 'performing', 'drama', 'acting', 'stagemaster', 'choreography'] },
      { search: 'theater', matches: ['stage', 'performing', 'drama', 'acting', 'stagemaster', 'choreography'] },
      
      // Legacy matches
      { search: 'chatgpt', matches: ['gpt', 'chat'] },
      { search: 'openai', matches: ['gpt', 'artificial intelligence'] },
      { search: 'personal', matches: ['honest advice', 'life coach', 'personal development', 'self-discovery', 'guidance'] }
    ];
    
    for (const trigger of categoryTriggers) {
      if (lowerSearchTerm.includes(trigger.search)) {
        if (trigger.matches.some(match => toolText.includes(match))) {
          return true;
        }
      }
    }
    
    // Category-based matching for broader searches
    if (lowerSearchTerm.includes('spiritual') || lowerSearchTerm.includes('spirit')) {
      if (tool.category?.toLowerCase().includes('spirituality') || 
          tool.tags?.some(tag => tag.toLowerCase().includes('spiritual') || tag.toLowerCase().includes('religious') || tag.toLowerCase().includes('philosophy'))) {
        return true;
      }
    }
    
    if (lowerSearchTerm.includes('writing') || lowerSearchTerm.includes('write') || lowerSearchTerm.includes('writer')) {
      if (tool.category?.toLowerCase().includes('writing') || 
          tool.tags?.some(tag => tag.toLowerCase().includes('writing') || tag.toLowerCase().includes('writer') || tag.toLowerCase().includes('author'))) {
        return true;
      }
    }
    
    if (lowerSearchTerm.includes('agent')) {
      if (tool.title.toLowerCase().includes('agent') || 
          tool.category?.toLowerCase().includes('agent') ||
          tool.tags?.some(tag => tag.toLowerCase().includes('agent'))) {
        return true;
      }
    }
    
    return false;
  });
  
  console.log(`🎯 AI Web Tools search found ${results.length} results`);
  return results;
};

// Enhanced search scoring for AI Web Tools GPTs
export const scoreAIWebToolsGPT = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const toolText = `${tool.title} ${tool.description}`.toLowerCase();
  const titleWords = tool.title.toLowerCase().split(' ');
  
  // Normalize for better matching
  const normalizedTitle = tool.title.toLowerCase().replace(/\s+/g, ' ').trim();
  const normalizedSearch = lowerSearchTerm.replace(/\s+/g, ' ').trim();
  const titleNoSpaces = normalizedTitle.replace(/\s+/g, '');
  const searchNoSpaces = normalizedSearch.replace(/\s+/g, '');
  const searchWords = normalizedSearch.split(/\s+/).filter(w => w.length > 1);
  
  let score = 0;
  
  // PERFECT exact match
  if (normalizedTitle === normalizedSearch) {
    score += 100000;
  }
  
  // Check if all search words appear in title in order
  let allWordsInOrder = true;
  let lastIndex = -1;
  for (const word of searchWords) {
    const index = normalizedTitle.indexOf(word, lastIndex + 1);
    if (index === -1) {
      allWordsInOrder = false;
      break;
    }
    lastIndex = index;
  }
  if (allWordsInOrder && searchWords.length >= 2) {
    score += 90000; // Very high for ordered matches
  }
  
  // Number/spacing variation (VEO3 vs VEO 3)
  if (titleNoSpaces.includes(searchNoSpaces) && searchNoSpaces.length > 3) {
    score += 85000;
  }
  
  // All search words match title words
  const matchedWords = searchWords.filter(sw => 
    titleWords.some(tw => tw === sw || tw.startsWith(sw))
  );
  if (matchedWords.length === searchWords.length && searchWords.length >= 2) {
    score += 80000;
  }
  
  // PRIORITY BOOST FOR "PERSONAL" SEARCHES - Custom GPTs first
  if (lowerSearchTerm.includes('personal')) {
    // Boost AI Web Tools custom GPTs significantly for "personal" searches
    if (tool.directUrl?.includes('lovable.app') || 
        tool.directUrl?.includes('aiwebtools') ||
        tool.directUrl?.includes('chat.openai.com') ||
        tool.directUrl?.includes('chatgpt.com')) {
      score += 2000; // Massive boost for custom GPTs
    }
    
    // Specific boosts for personal development tools
    if (tool.title.toLowerCase().includes('honest advice gpt')) {
      score += 1500; // High priority for Honest Advice GPT
    }
    if (tool.title.toLowerCase().includes('personal life coach gpt')) {
      score += 1400; // High priority for Personal Life Coach GPT
    }
    if (toolText.includes('personal development') || toolText.includes('self-discovery')) {
      score += 1200;
    }
    if (toolText.includes('guidance') || toolText.includes('advice')) {
      score += 1100;
    }
  }
  
  // THEATRE/PERFORMING ARTS PRIORITY BOOST
  if (lowerSearchTerm.includes('theatre') || lowerSearchTerm.includes('theater') || 
      lowerSearchTerm.includes('stage') || lowerSearchTerm.includes('performing')) {
    if (tool.title.toLowerCase().includes('stagemaster')) {
      score += 1500; // High priority for Stagemaster AI Suite
    }
    if (toolText.includes('performing arts') || toolText.includes('stage production')) {
      score += 1200;
    }
    if (toolText.includes('choreography') || toolText.includes('costume') || toolText.includes('lighting')) {
      score += 1000;
    }
  }
  
  // LEARNING/EDUCATIONAL TOOLS PRIORITY
  if (lowerSearchTerm.includes('learn')) {
    // Exact matches get highest priority
    if (tool.title.toLowerCase().includes('learn any skill gpt')) {
      score += 1000; // Highest priority for "Learn Any Skill GPT"
    }
    if (tool.title.toLowerCase().includes('learn any course gpt')) {
      score += 950; // Second highest for "Learn Any Course GPT"
    }
    if (tool.title.toLowerCase().includes('college degree gpt')) {
      score += 900; // Third for "College Degree GPT"
    }
    if (tool.title.toLowerCase().includes('home-schooling') || tool.title.toLowerCase().includes('homeschool')) {
      score += 850; // Fourth for homeschooling tools
    }
    // General learning tools
    if (titleWords.some(word => word.startsWith('learn'))) {
      score += 800;
    }
    if (toolText.includes('education') || toolText.includes('learning') || toolText.includes('course')) {
      score += 700;
    }
  }
  
  // EXACT WORD MATCHING IN TITLE (Very High Priority)
  if (titleWords.some(word => word === lowerSearchTerm)) {
    score += 800; // Exact word match in title
  }
  
  // TITLE STARTS WITH SEARCH TERM
  if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
    score += 700;
  }
  
  // ANY WORD IN TITLE STARTS WITH SEARCH TERM
  if (titleWords.some(word => word.startsWith(lowerSearchTerm))) {
    score += 600;
  }
  
  // PRIORITY SCORING FOR MEDICAL/DOCTOR SEARCHES - Doctor GPT MUST be first
  const isDoctorSearch = lowerSearchTerm === 'doctor' || lowerSearchTerm === 'doc' || lowerSearchTerm === 'dr' || lowerSearchTerm.includes('doctor');
  const isMedicalSearch = lowerSearchTerm.includes('medical') || lowerSearchTerm.includes('health') || lowerSearchTerm.includes('wellness') || lowerSearchTerm.includes('symptoms');
  
  if (isDoctorSearch) {
    // Doctor GPT gets massive boost for "doctor" searches
    if (toolText.includes('personalized dr. gpt') || toolText.includes('doctor gpt') || tool.title.toLowerCase().includes('doctor')) {
      score += 8000; // Massive priority for direct doctor search
    }
  }
  
  if (isDoctorSearch || isMedicalSearch) {
    if (toolText.includes('personalized dr. gpt') || toolText.includes('doctor gpt')) {
      score += 1500;
    }
    if (toolText.includes('mental wellness gpt')) {
      score += 800;
    }
    if (toolText.includes('veterinarian gpt')) {
      score += 700;
    }
    if (toolText.includes('pharmaceutical assistant')) {
      score += 600;
    }
  }
  
  // Exact title match gets highest score
  if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
    score += 500;
  }
  
  // Description match
  if (tool.description?.toLowerCase().includes(lowerSearchTerm)) {
    score += 250;
  }
  
  // Tag matches
  if (tool.tags?.some(tag => tag.toLowerCase().includes(lowerSearchTerm))) {
    score += 200;
  }
  
  // Category match
  if (tool.category?.toLowerCase().includes(lowerSearchTerm)) {
    score += 150;
  }
  
  // Keyword enhancement scoring
  for (const [keyword, synonyms] of Object.entries(aiWebToolsKeywords)) {
    if (lowerSearchTerm.includes(keyword)) {
      if (toolText.includes(keyword)) score += 100;
      if (synonyms.some(syn => toolText.includes(syn))) score += 75;
    }
  }
  
  // Boost for AI Web Tools original GPTs (all our custom GPTs)
  if (tool.directUrl?.includes('lovable.app') || 
      tool.directUrl?.includes('chat.openai.com') ||
      tool.directUrl?.includes('chatgpt.com')) {
    score += 50;
  }
  
  return score;
};
