import { Tool } from "@/types/tools";

export const matchVideoGeneration = (tool: Tool, searchTerm: string): boolean => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  // Video generation keywords
  const videoKeywords = [
    'video generat', 'video maker', 'video creator', 'video ai',
    'text to video', 'text-to-video', 'ai video', 'video creation',
    'video editor', 'video editing', 'create video', 'make video',
    'generate video', 'video tool', 'video platform'
  ];
  
  // Check if search term matches video generation intent
  const isVideoSearch = videoKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || keyword.includes(lowerSearchTerm)
  );
  
  if (isVideoSearch) {
    // Priority AI Web Tools video generators (your custom GPTs)
    const priorityAIWebToolsVideo = [
      'movie maker studio ai suite',
      'music video maker ai studio', 
      'movie script writer gpt',
      'movie scene maker gpt',
      'sora prompt assistant',
      'luma dream machine prompt assistant',
      'video second-by-second analysis gpt',
      'middlejourney prompt enhancer'
    ];
    
    // Top-tier video generation tools
    const topVideoTools = [
      'sora', 'runway', 'pika', 'kling', 'luma', 'hailuo',
      'gen-2', 'gen-3', 'veo', 'stable video',
      'invideo', 'synthesia', 'heygen', 'd-id'
    ];
    
    // Check AI Web Tools first (highest priority)
    if (priorityAIWebToolsVideo.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // Check top video tools
    if (topVideoTools.some(tool => lowerTitle.includes(tool))) {
      return true;
    }
    
    // General video generation matching
    const videoTerms = [
      'video', 'film', 'movie', 'animation', 'motion', 'clip',
      'footage', 'cinematic', 'visual', 'scene'
    ];
    
    const generationTerms = [
      'generat', 'creat', 'mak', 'produc', 'build', 'design',
      'ai', 'artificial intelligence', 'automated', 'smart'
    ];
    
    const hasVideoTerm = videoTerms.some(term =>
      lowerTitle.includes(term) || lowerDescription.includes(term) ||
      lowerCategory.includes(term) || lowerTags.some(tag => tag.includes(term))
    );
    
    const hasGenerationTerm = generationTerms.some(term =>
      lowerTitle.includes(term) || lowerDescription.includes(term)
    );
    
    if (hasVideoTerm && hasGenerationTerm) {
      return true;
    }
    
    // Check categories
    const videoCategories = [
      'video generation', 'video editing', 'video tools', 'ai video',
      'content creation', 'creative tools', 'media tools'
    ];
    
    if (videoCategories.some(cat => lowerCategory.includes(cat))) {
      return true;
    }
  }
  
  return false;
};

export const scoreVideoGeneration = (tool: Tool, searchTerm: string): number => {
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;
  
  // Video generation keywords
  const videoKeywords = [
    'video generat', 'video maker', 'video creator', 'video ai',
    'text to video', 'text-to-video', 'ai video', 'video creation',
    'video editor', 'video editing', 'create video', 'make video',
    'generate video', 'video tool', 'video platform'
  ];
  
  // Check if search term matches video generation intent
  const isVideoSearch = videoKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || keyword.includes(lowerSearchTerm)
  );
  
  if (isVideoSearch) {
    // HIGHEST PRIORITY: AI Web Tools video generators (your custom GPTs)
    if (lowerTitle.includes('movie maker studio ai suite')) {
      score += 5000;
    }
    if (lowerTitle.includes('music video maker ai studio')) {
      score += 4900;
    }
    if (lowerTitle.includes('movie script writer gpt')) {
      score += 4800;
    }
    if (lowerTitle.includes('movie scene maker gpt')) {
      score += 4700;
    }
    if (lowerTitle.includes('sora prompt assistant')) {
      score += 4600;
    }
    if (lowerTitle.includes('luma dream machine prompt assistant')) {
      score += 4500;
    }
    if (lowerTitle.includes('video second-by-second analysis gpt')) {
      score += 4400;
    }
    if (lowerTitle.includes('middlejourney prompt enhancer')) {
      score += 4300;
    }
    
    // TOP TIER: Leading video generation tools
    if (lowerTitle.includes('sora by openai') || lowerTitle.includes('sora')) {
      score += 4000;
    }
    if (lowerTitle.includes('runway') || lowerTitle.includes('gen-2') || lowerTitle.includes('gen-3')) {
      score += 3900;
    }
    if (lowerTitle.includes('pika labs') || lowerTitle.includes('pika')) {
      score += 3800;
    }
    if (lowerTitle.includes('kling ai') || lowerTitle.includes('kling')) {
      score += 3700;
    }
    if (lowerTitle.includes('luma ai') || lowerTitle.includes('dream machine')) {
      score += 3600;
    }
    if (lowerTitle.includes('hailuo ai') || lowerTitle.includes('minimax')) {
      score += 3500;
    }
    if (lowerTitle.includes('veo') || lowerTitle.includes('google veo')) {
      score += 3400;
    }
    if (lowerTitle.includes('stable video')) {
      score += 3300;
    }
    
    // HIGH TIER: Professional video tools
    if (lowerTitle.includes('synthesia')) {
      score += 3200;
    }
    if (lowerTitle.includes('heygen')) {
      score += 3100;
    }
    if (lowerTitle.includes('invideo')) {
      score += 3000;
    }
    if (lowerTitle.includes('d-id')) {
      score += 2900;
    }
    if (lowerTitle.includes('fliki')) {
      score += 2800;
    }
    if (lowerTitle.includes('pictory')) {
      score += 2700;
    }
    
    // Video-specific terms in title
    if (lowerTitle.includes('video generat')) {
      score += 2000;
    }
    if (lowerTitle.includes('text-to-video') || lowerTitle.includes('text to video')) {
      score += 1900;
    }
    if (lowerTitle.includes('ai video')) {
      score += 1800;
    }
    if (lowerTitle.includes('video maker')) {
      score += 1700;
    }
    if (lowerTitle.includes('video creator')) {
      score += 1600;
    }
    if (lowerTitle.includes('video')) {
      score += 1200;
    }
    
    // Description matches
    if (lowerDescription.includes('video generat')) {
      score += 1000;
    }
    if (lowerDescription.includes('text-to-video') || lowerDescription.includes('text to video')) {
      score += 900;
    }
    if (lowerDescription.includes('ai video')) {
      score += 800;
    }
    if (lowerDescription.includes('create video') || lowerDescription.includes('generate video')) {
      score += 700;
    }
    
    // Category bonuses
    if (lowerCategory.includes('video generation')) {
      score += 800;
    }
    if (lowerCategory.includes('video tools')) {
      score += 700;
    }
    if (lowerCategory.includes('ai video')) {
      score += 600;
    }
    if (lowerCategory.includes('content creation')) {
      score += 400;
    }
    
    // Tag bonuses
    if (lowerTags.some(tag => tag.includes('video generation'))) {
      score += 500;
    }
    if (lowerTags.some(tag => tag.includes('text-to-video'))) {
      score += 400;
    }
    if (lowerTags.some(tag => tag.includes('ai video'))) {
      score += 300;
    }
  }
  
  return score;
};