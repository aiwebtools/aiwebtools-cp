/**
 * Semantic keyword mappings for intelligent search
 * Maps search terms to related concepts, synonyms, and categories
 */

export const SEMANTIC_KEYWORDS: Record<string, string[]> = {
  // Farming & Agriculture
  'garden': ['farm', 'farming', 'agriculture', 'plant', 'crop', 'soil', 'horticulture', 'botanical', 'harvest', 'greenhouse', 'agronomist', 'agronomus'],
  'farm': ['garden', 'farming', 'agriculture', 'plant', 'crop', 'soil', 'agricultural', 'agronomist', 'agronomus'],
  'farming': ['farm', 'garden', 'agriculture', 'plant', 'crop', 'soil', 'agricultural', 'agronomist', 'agronomus'],
  'agriculture': ['farm', 'farming', 'garden', 'plant', 'crop', 'soil', 'agricultural', 'agronomist', 'agronomus'],
  'plant': ['garden', 'farm', 'farming', 'botanical', 'flora', 'vegetation', 'horticulture', 'agronomist'],
  'crop': ['farm', 'farming', 'harvest', 'agriculture', 'plant', 'agronomist'],
  'horticulture': ['garden', 'plant', 'botanical', 'farm', 'farming'],
  'agronomist': ['farm', 'farming', 'agriculture', 'plant', 'crop', 'soil', 'garden'],
  'agronomus': ['farm', 'farming', 'agriculture', 'plant', 'crop', 'soil', 'garden', 'agronomist'],
  
  // AI Agents
  'agent': ['ai agent', 'chatbot', 'bot', 'assistant', 'automation', 'workflow', 'autonomous'],
  'agents': ['agent', 'ai agent', 'chatbot', 'bots', 'assistants', 'automation'],
  'ai agent': ['agent', 'agents', 'chatbot', 'assistant', 'autonomous ai', 'ai assistant'],
  'chatbot': ['agent', 'bot', 'ai agent', 'assistant', 'chat assistant', 'conversational ai'],
  'bot': ['agent', 'chatbot', 'ai agent', 'assistant', 'automation'],
  'assistant': ['agent', 'ai agent', 'chatbot', 'helper', 'support'],
  'automation': ['agent', 'workflow', 'automate', 'automated', 'autonomous'],
  
  // Video & Media
  'video': ['movie', 'film', 'motion', 'footage', 'clip', 'recording', 'cinematic'],
  'movie': ['video', 'film', 'cinema', 'cinematic', 'motion picture'],
  'film': ['movie', 'video', 'cinema', 'cinematic', 'motion picture'],
  'text to video': ['video generation', 'ai video', 'video maker', 'video creator'],
  'sora': ['video generation', 'text to video', 'ai video', 'openai video'],
  'luma': ['video generation', 'text to video', 'ai video', 'dream machine'],
  
  // Writing & Content
  'write': ['writer', 'writing', 'author', 'content', 'compose', 'draft', 'create content'],
  'writer': ['write', 'writing', 'author', 'content creator', 'copywriter'],
  'writing': ['write', 'writer', 'content', 'composition', 'authoring'],
  'book': ['ebook', 'novel', 'publication', 'manuscript', 'author', 'writer', 'writing'],
  'blog': ['article', 'post', 'content', 'writing', 'blogger'],
  'article': ['blog', 'post', 'content', 'writing', 'essay'],
  'content': ['writing', 'creation', 'generate', 'produce', 'creator'],
  
  // Design & Creative
  'design': ['designer', 'creative', 'graphic', 'visual', 'ui', 'ux', 'layout'],
  'image': ['picture', 'photo', 'graphic', 'visual', 'illustration', 'artwork'],
  'logo': ['brand', 'identity', 'design', 'graphic', 'branding'],
  'graphic': ['design', 'visual', 'image', 'illustration', 'artwork'],
  '3d': ['three d', 'three dimensional', '3-d', 'model', 'modeling', 'render', 'rendering'],
  'model': ['3d', 'modeling', 'render', 'mesh', 'asset'],
  
  // Audio & Music
  'music': ['audio', 'sound', 'song', 'melody', 'composition', 'track'],
  'audio': ['music', 'sound', 'voice', 'recording', 'podcast'],
  'voice': ['audio', 'speech', 'vocal', 'tts', 'text to speech'],
  'podcast': ['audio', 'show', 'episode', 'broadcasting'],
  
  // Business & Productivity
  'business': ['enterprise', 'company', 'corporate', 'commercial', 'professional'],
  'productivity': ['efficiency', 'workflow', 'task', 'management', 'organization'],
  'project': ['management', 'planning', 'task', 'workflow', 'organization'],
  'task': ['todo', 'project', 'workflow', 'management', 'productivity'],
  
  // Development & Coding
  'code': ['coding', 'programming', 'developer', 'development', 'software'],
  'coding': ['code', 'programming', 'developer', 'development'],
  'developer': ['coding', 'programming', 'coder', 'engineer', 'software'],
  'programming': ['code', 'coding', 'developer', 'software', 'development'],
  'website': ['site', 'web', 'webpage', 'landing page', 'web app'],
  'app': ['application', 'software', 'program', 'tool', 'saas'],
  
  // AI & Machine Learning
  'ai': ['artificial intelligence', 'machine learning', 'ml', 'neural', 'gpt', 'llm'],
  'gpt': ['chatgpt', 'openai', 'ai', 'llm', 'language model'],
  'chatgpt': ['gpt', 'openai', 'ai chat', 'llm'],
  'llm': ['language model', 'ai', 'gpt', 'large language model'],
  
  // Education & Learning
  'learn': ['learning', 'education', 'study', 'course', 'tutorial', 'training'],
  'education': ['learning', 'learn', 'study', 'course', 'school', 'teaching'],
  'course': ['learning', 'education', 'class', 'lesson', 'training'],
  'tutorial': ['guide', 'learning', 'howto', 'lesson', 'course'],
  
  // Finance & Money
  'finance': ['financial', 'money', 'investment', 'trading', 'accounting'],
  'money': ['finance', 'financial', 'payment', 'currency', 'cash'],
  'trading': ['trade', 'trader', 'stocks', 'forex', 'investment'],
  'crypto': ['cryptocurrency', 'bitcoin', 'blockchain', 'digital currency'],
  
  // Health & Medical
  'health': ['medical', 'healthcare', 'wellness', 'fitness', 'doctor'],
  'medical': ['health', 'healthcare', 'medicine', 'clinical', 'doctor'],
  'doctor': ['physician', 'medical', 'healthcare', 'health', 'clinic'],
  'fitness': ['health', 'wellness', 'exercise', 'workout', 'training'],
  
  // Real Estate & Property
  'property': ['real estate', 'realestate', 'home', 'house', 'land', 'building'],
  'real estate': ['property', 'realestate', 'home', 'house', 'land'],
  'realestate': ['property', 'real estate', 'home', 'house', 'land'],
  'home': ['house', 'property', 'real estate', 'residence', 'dwelling'],
  
  // Social & Communication
  'social': ['social media', 'networking', 'community', 'interaction'],
  'chat': ['messaging', 'communication', 'conversation', 'chatbot', 'talk'],
  'messaging': ['chat', 'message', 'communication', 'text'],
  
  // Games & Entertainment
  'game': ['gaming', 'games', 'video game', 'videogame', 'play'],
  'gaming': ['game', 'games', 'video game', 'gamer', 'esports'],
};

/**
 * Get semantically related terms for a search query
 */
export const getSemanticTerms = (searchTerm: string): string[] => {
  const lower = searchTerm.toLowerCase().trim();
  const related = new Set<string>();
  
  // Add the original term
  related.add(lower);
  
  // Check for exact matches in semantic keywords
  if (SEMANTIC_KEYWORDS[lower]) {
    SEMANTIC_KEYWORDS[lower].forEach(term => related.add(term));
  }
  
  // Check for partial matches (if search term is part of a key)
  Object.entries(SEMANTIC_KEYWORDS).forEach(([key, terms]) => {
    if (key.includes(lower) || lower.includes(key)) {
      terms.forEach(term => related.add(term));
    }
  });
  
  return Array.from(related);
};

/**
 * Calculate semantic relevance score for a tool
 */
export const calculateSemanticScore = (
  tool: any,
  searchTerm: string,
  semanticTerms: string[]
): number => {
  const toolText = `${tool.title} ${tool.description} ${tool.category} ${(tool.tags || []).join(' ')}`.toLowerCase();
  const lowerTitle = tool.title.toLowerCase();
  let score = 0;
  
  // High score for exact search term matches
  const exactSearchTerm = searchTerm.toLowerCase().trim();
  if (lowerTitle === exactSearchTerm) score += 50000;
  if (lowerTitle.includes(exactSearchTerm)) score += 20000;
  if (toolText.includes(exactSearchTerm)) score += 8000;
  
  // Score for semantic matches
  semanticTerms.forEach(term => {
    if (lowerTitle.includes(term)) score += 3000;
    if (toolText.includes(term)) score += 1000;
    
    // Bonus for word boundary matches
    const wordBoundaryRegex = new RegExp(`\\b${term}\\b`, 'i');
    if (wordBoundaryRegex.test(lowerTitle)) score += 2000;
    if (wordBoundaryRegex.test(toolText)) score += 500;
  });
  
  return score;
};
