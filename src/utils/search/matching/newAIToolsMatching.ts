import { Tool } from "@/types/tools";

// Matching and scoring for major AI platforms and new tools
export const matchNewAITools = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerTags = (tool.tags || []).join(' ').toLowerCase();

  // ChatGPT and OpenAI related searches
  if (lowerSearchTerm.includes('chatgpt') || lowerSearchTerm.includes('openai') || lowerSearchTerm.includes('gpt')) {
    return lowerTitle.includes('chatgpt') || 
           lowerTitle.includes('openai') ||
           lowerTitle.includes('gpt') ||
           lowerDescription.includes('chatgpt') ||
           lowerDescription.includes('openai');
  }

  // Claude and Anthropic related searches
  if (lowerSearchTerm.includes('claude') || lowerSearchTerm.includes('anthropic')) {
    return lowerTitle.includes('claude') || 
           lowerTitle.includes('anthropic') ||
           lowerDescription.includes('claude') ||
           lowerDescription.includes('anthropic');
  }

  // Google AI related searches
  if (lowerSearchTerm.includes('gemini') || lowerSearchTerm.includes('google ai') || lowerSearchTerm.includes('bard')) {
    return lowerTitle.includes('gemini') || 
           lowerTitle.includes('google') ||
           lowerDescription.includes('gemini') ||
           lowerDescription.includes('google');
  }

  // Perplexity AI searches
  if (lowerSearchTerm.includes('perplexity') || lowerSearchTerm.includes('comet')) {
    return lowerTitle.includes('perplexity') || 
           lowerTitle.includes('comet') ||
           lowerDescription.includes('perplexity') ||
           lowerDescription.includes('comet');
  }

  // Video generation tools
  if (lowerSearchTerm.includes('runway') || lowerSearchTerm.includes('video generation') || lowerSearchTerm.includes('ai video')) {
    return lowerTitle.includes('runway') || 
           lowerTitle.includes('video') ||
           lowerDescription.includes('video generation') ||
           lowerDescription.includes('ai video');
  }

  // Voice and audio AI
  if (lowerSearchTerm.includes('elevenlabs') || lowerSearchTerm.includes('voice') || lowerSearchTerm.includes('ai voice')) {
    return lowerTitle.includes('elevenlabs') || 
           lowerTitle.includes('voice') ||
           lowerDescription.includes('voice generation') ||
           lowerDescription.includes('ai voice');
  }

  // Leonardo AI and image generation
  if (lowerSearchTerm.includes('leonardo') || lowerSearchTerm.includes('ai art') || lowerSearchTerm.includes('image generation')) {
    return lowerTitle.includes('leonardo') || 
           lowerTitle.includes('art') ||
           lowerDescription.includes('image generation') ||
           lowerDescription.includes('ai art');
  }

  // Synthesia and AI avatars
  if (lowerSearchTerm.includes('synthesia') || lowerSearchTerm.includes('ai avatar') || lowerSearchTerm.includes('virtual presenter')) {
    return lowerTitle.includes('synthesia') || 
           lowerTitle.includes('avatar') ||
           lowerDescription.includes('ai avatar') ||
           lowerDescription.includes('virtual presenter');
  }

  // Luma Dream Machine
  if (lowerSearchTerm.includes('luma') || lowerSearchTerm.includes('dream machine') || lowerSearchTerm.includes('3d video')) {
    return lowerTitle.includes('luma') || 
           lowerTitle.includes('dream machine') ||
           lowerDescription.includes('3d video') ||
           lowerDescription.includes('luma');
  }

  // Business and productivity tools
  if (lowerSearchTerm.includes('jasper') || lowerSearchTerm.includes('copy.ai') || lowerSearchTerm.includes('notion') || lowerSearchTerm.includes('grammarly')) {
    return lowerTitle.includes('jasper') || 
           lowerTitle.includes('copy.ai') ||
           lowerTitle.includes('notion') ||
           lowerTitle.includes('grammarly') ||
           lowerDescription.includes('content creation') ||
           lowerDescription.includes('business writing');
  }

  // Health and wellness tools
  if (lowerSearchTerm.includes('myfitnesspal') || lowerSearchTerm.includes('headspace') || lowerSearchTerm.includes('calm')) {
    return lowerTitle.includes('myfitnesspal') || 
           lowerTitle.includes('headspace') ||
           lowerTitle.includes('calm') ||
           lowerDescription.includes('fitness tracking') ||
           lowerDescription.includes('meditation') ||
           lowerDescription.includes('mental wellness');
  }

  // Research tools
  if (lowerSearchTerm.includes('consensus') || lowerSearchTerm.includes('elicit') || lowerSearchTerm.includes('semantic scholar') || lowerSearchTerm.includes('research rabbit')) {
    return lowerTitle.includes('consensus') || 
           lowerTitle.includes('elicit') ||
           lowerTitle.includes('semantic scholar') ||
           lowerTitle.includes('research rabbit') ||
           lowerDescription.includes('academic search') ||
           lowerDescription.includes('research assistant');
  }

  // Illuminous World Data Explorer - truth seeking and predictions
  if (lowerSearchTerm.includes('truth') || lowerSearchTerm.includes('illuminous') || lowerSearchTerm.includes('data explorer') || lowerSearchTerm.includes('predictions')) {
    return lowerTitle.includes('illuminous') || 
           lowerTitle.includes('world data explorer') ||
           lowerDescription.includes('predictions') ||
           lowerDescription.includes('data analysis') ||
           lowerDescription.includes('truth');
  }

  return false;
};

export const scoreNewAITools = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  let score = 0;

  // High priority for exact matches of major AI platforms
  const majorAIPlatforms = ['chatgpt', 'claude', 'gemini', 'perplexity', 'comet', 'runway', 'elevenlabs', 'leonardo', 'synthesia', 'luma'];
  
  for (const platform of majorAIPlatforms) {
    if (lowerSearchTerm.includes(platform)) {
      if (lowerTitle.includes(platform)) {
        score += 8000; // High score for title match
      }
      if (lowerDescription.includes(platform)) {
        score += 4000; // Medium score for description match
      }
    }
  }

  // Category-specific scoring
  if (lowerSearchTerm.includes('video') && (lowerTitle.includes('video') || lowerDescription.includes('video'))) {
    score += 3000;
  }

  if (lowerSearchTerm.includes('voice') && (lowerTitle.includes('voice') || lowerDescription.includes('voice'))) {
    score += 3000;
  }

  if (lowerSearchTerm.includes('research') && (lowerTitle.includes('research') || lowerDescription.includes('research'))) {
    score += 3000;
  }

  if (lowerSearchTerm.includes('health') && (lowerTitle.includes('health') || lowerDescription.includes('health'))) {
    score += 3000;
  }

  if (lowerSearchTerm.includes('business') && (lowerTitle.includes('business') || lowerDescription.includes('business'))) {
    score += 3000;
  }

  // Truth and predictions - Illuminous World Data Explorer
  if (lowerSearchTerm.includes('truth') && (lowerTitle.includes('illuminous') || lowerDescription.includes('predictions'))) {
    score += 5000; // High priority for truth searches
  }

  return score;
};