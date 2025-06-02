
import { Tool } from "@/types/tools";

export const isHealthAndWellnessTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  const category = tool.category?.toLowerCase() || "";
  const tags = tool.tags?.map(tag => tag.toLowerCase()) || [];

  // Health and wellness keywords
  const healthKeywords = [
    'health', 'wellness', 'medical', 'healthcare', 'fitness', 'nutrition', 'diet',
    'mental health', 'therapy', 'doctor', 'patient', 'clinical', 'pharmaceutical',
    'medicine', 'treatment', 'diagnosis', 'symptom', 'disease', 'hospital',
    'veterinarian', 'vet', 'pet care', 'animal health', 'meditation', 'mindfulness',
    'exercise', 'workout', 'yoga', 'stress', 'anxiety', 'depression', 'counseling',
    'insurance', 'claims', 'pharmacy', 'drug', 'supplement', 'vitamin'
  ];

  // Check if any health keywords are present
  const hasHealthKeywords = healthKeywords.some(keyword =>
    title.includes(keyword) ||
    description.includes(keyword) ||
    category.includes(keyword) ||
    tags.some(tag => tag.includes(keyword))
  );

  // Specific health-related categories
  const healthCategories = [
    'health', 'wellness', 'medical', 'healthcare', 'fitness',
    'veterinarian', 'insurance', 'pharmacy', 'mental wellness'
  ];

  const isHealthCategory = healthCategories.some(healthCat =>
    category.includes(healthCat)
  );

  const isHealthTool = hasHealthKeywords || isHealthCategory;

  if (isHealthTool) {
    console.log(`🏥 HEALTH & WELLNESS: Detected tool: ${tool.title} (Category: ${tool.category})`);
  }

  return isHealthTool;
};

export const isCreativeAndEntertainmentTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  const category = tool.category?.toLowerCase() || "";
  const tags = tool.tags?.map(tag => tag.toLowerCase()) || [];

  // EXPANDED Creative and entertainment keywords
  const creativeKeywords = [
    // Core Creative
    'creative', 'art', 'design', 'graphics', 'visual', 'aesthetic', 'artistic',
    'drawing', 'painting', 'illustration', 'sketch', 'canvas', 'brush', 'color',
    'palette', 'creative design', 'graphic design', 'cover design',
    
    // Writing & Content
    'writing', 'writer', 'author', 'book', 'novel', 'story', 'script', 'screenplay',
    'content', 'blog', 'article', 'copywriting', 'creative writing', 'storytelling',
    'narrative', 'character', 'plot', 'dialogue', 'prose', 'poetry', 'poem',
    'children\'s book', 'picture book', 'coloring book',
    
    // Entertainment & Media
    'entertainment', 'game', 'gaming', 'play', 'fun', 'movie', 'film', 'cinema',
    'video', 'multimedia', 'animation', 'cartoon', 'character', 'avatar',
    'music', 'audio', 'sound', 'song', 'melody', 'rhythm', 'beat', 'composer',
    'musician', 'instrument', 'recording', 'studio', 'producer',
    
    // Theater & Performance
    'theater', 'theatre', 'stage', 'performance', 'actor', 'acting', 'drama',
    'comedy', 'musical', 'opera', 'dance', 'choreography', 'performer',
    'stagemaster', 'performing arts', 'play', 'playwright', 'script',
    
    // Digital Media
    'digital art', 'pixel art', 'digital design', 'web design', 'ui design',
    'logo', 'branding', 'poster', 'banner', 'flyer', 'card', 'template',
    'mockup', 'prototype', 'wireframe',
    
    // Photography & Visual
    'photo', 'photography', 'camera', 'image', 'picture', 'visual', 'snapshot',
    'portrait', 'landscape', 'studio', 'editing', 'filter', 'effects',
    
    // Innovation & Imagination
    'imagination', 'imaginary', 'fantasy', 'magical', 'mystical', 'adventure',
    'journey', 'exploration', 'discovery', 'wonder', 'mystery', 'dream',
    'vision', 'concept', 'idea', 'brainstorm', 'innovation', 'invention',
    
    // Specialized Creative
    'tattoo', 'fashion', 'style', 'trend', 'beauty', 'makeover', 'restyle',
    'interior design', 'architecture', 'landscaping', 'decoration',
    'craft', 'diy', 'hobby', 'collection', 'vintage', 'antique',
    
    // Spiritual & Philosophical (Creative aspects)
    'spiritual', 'mystical', 'philosophical', 'wisdom', 'enlightenment',
    'meditation', 'mindfulness', 'consciousness', 'awakening', 'transformation',
    'divination', 'fortune', 'tarot', 'prophecy', 'oracle', 'revelation',
    
    // Historical & Cultural (Creative aspects)
    'historical', 'history', 'culture', 'heritage', 'tradition', 'legend',
    'mythology', 'folklore', 'ancient', 'classical', 'renaissance', 'vintage',
    'time travel', 'time machine', 'historical figures', 'past', 'era',
    
    // Educational Creative
    'tutorial', 'lesson', 'course', 'learn', 'teach', 'guide', 'instruction',
    'training', 'skill', 'technique', 'method', 'practice', 'exercise',
    
    // Technology Creative
    'ai art', 'generative', 'neural', 'algorithm', 'procedural', 'automated',
    'machine learning', 'artificial intelligence', 'deep learning', 'gpt',
    
    // Social & Communication Creative
    'social', 'community', 'sharing', 'collaboration', 'interactive', 'engaging',
    'conversation', 'chat', 'dialogue', 'communication', 'expression'
  ];

  // EXPANDED Creative categories
  const creativeCategories = [
    // Core Creative
    'creative', 'art', 'design', 'graphics', 'visual arts', 'creative design',
    'graphic design', 'creative & design', 'creative & entertainment',
    
    // Writing & Content
    'writing', 'content creation', 'content', 'storytelling', 'creative writing',
    'writing & text generation', 'content creation & writing', 'text generation',
    'book writing', 'script writing', 'copywriting', 'blog writing',
    
    // Entertainment & Media
    'entertainment', 'gaming', 'games', 'multimedia', 'media', 'video',
    'animation', 'cinema', 'film', 'movie', 'entertainment & media',
    'video & multimedia', 'audio & voice', 'music', 'sound',
    
    // Educational Creative
    'education', 'learning', 'educational', 'tutorial', 'course', 'training',
    'education & research', 'education & learning', 'educational tools',
    
    // Historical & Cultural
    'historical', 'history', 'cultural', 'time-based', 'heritage',
    'historical & time-based', 'historical & cultural', 'spirituality',
    'spirituality tools', 'philosophy', 'mysticism',
    
    // Industry Specific Creative
    'industry specific', 'specialized', 'niche', 'custom', 'personalized',
    'professional services', 'creative services', 'artistic services',
    
    // AI Development (Creative)
    'ai development', 'ai platforms', 'generative', 'artificial intelligence',
    'machine learning', 'ai tools', 'automation', 'innovation',
    
    // Communication Creative
    'communication', 'collaboration', 'social', 'interactive', 'engagement',
    'communication & collaboration', 'community', 'sharing'
  ];

  // Check for creative keywords in any field
  const hasCreativeKeywords = creativeKeywords.some(keyword =>
    title.includes(keyword) ||
    description.includes(keyword) ||
    category.includes(keyword) ||
    tags.some(tag => tag.includes(keyword))
  );

  // Check for creative categories
  const isCreativeCategory = creativeCategories.some(creativeCat =>
    category.includes(creativeCat)
  );

  // Special handling for AI Web Tools GPTs (many are creative)
  const isAIWebToolsCreative = (
    (title.includes('gpt') || description.includes('gpt') || tags.includes('aiwebtools')) &&
    (hasCreativeKeywords || isCreativeCategory)
  );

  // Combine all checks
  const isCreativeTool = hasCreativeKeywords || isCreativeCategory || isAIWebToolsCreative;

  if (isCreativeTool) {
    console.log(`🎭 CREATIVE & ENTERTAINMENT: Detected tool: ${tool.title} (Category: ${tool.category})`);
  }

  return isCreativeTool;
};
