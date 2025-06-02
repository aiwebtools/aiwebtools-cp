
// Enhanced main category mapping that ensures proper tool categorization
export const mainCategoryKeywordMapping: Record<string, string[]> = {
  "VIDEO & MULTIMEDIA": [
    // Video generation and creation
    "video", "video generation", "video creator", "video maker", "video ai", "ai video",
    "video editing", "video editor", "video production", "video tools", "video content",
    "movie", "film", "cinema", "cinematic", "video synthesis", "video creation",
    "video script", "video marketing", "video business", "video analytics",
    "video streaming", "video platform", "video hosting", "video compression",
    "video enhancement", "video effects", "video animation", "motion graphics",
    "video conferencing", "webinar", "live streaming", "broadcast",
    // Multimedia
    "multimedia", "media", "animation", "motion", "visual effects", "vfx",
    "screen recording", "video capture", "video conversion", "video transcoding"
  ],
  
  "IMAGE & DESIGN GENERATION": [
    // Image generation
    "image", "image generation", "image creator", "image maker", "ai image", "image ai",
    "art", "artwork", "digital art", "ai art", "art generator", "art creation",
    "illustration", "illustrator", "graphic", "graphics", "graphic design",
    "design", "designer", "design tool", "visual design", "creative design",
    "logo", "logo design", "brand", "branding", "brand design",
    "photo", "photography", "photo editing", "photo enhancement", "photo generator",
    "avatar", "profile picture", "character", "character design",
    "drawing", "sketch", "painting", "digital painting", "concept art",
    "background", "background removal", "image editing", "photo manipulation",
    "ui design", "ux design", "web design", "interface design",
    "poster", "banner", "flyer", "marketing design", "social media design"
  ],
  
  "WRITING & CONTENT CREATION": [
    // Writing and content
    "writing", "writer", "content", "content creation", "content writer",
    "blog", "blogging", "article", "copywriting", "copy", "copywriter",
    "text", "text generation", "ai writing", "writing ai", "writing assistant",
    "grammar", "proofreading", "editing", "editor", "text editor",
    "story", "storytelling", "narrative", "creative writing", "fiction",
    "script", "screenplay", "dialogue", "book", "ebook", "novel",
    "email", "email writing", "marketing copy", "sales copy", "ad copy",
    "seo", "seo writing", "content optimization", "keyword research",
    "social media", "social posts", "captions", "hashtags",
    "press release", "news", "journalism", "report", "documentation",
    "resume", "cv", "cover letter", "job application", "proposal"
  ],
  
  "AUDIO & MUSIC TOOLS": [
    // Audio and music
    "audio", "music", "sound", "voice", "speech", "audio ai", "ai audio",
    "music generation", "music creator", "music maker", "ai music", "music ai",
    "voice generation", "voice cloning", "text to speech", "tts", "speech synthesis",
    "voice over", "voiceover", "narration", "dubbing", "voice acting",
    "podcast", "podcasting", "audio editing", "audio production", "audio mixing",
    "sound effects", "sfx", "audio enhancement", "noise reduction", "audio cleanup",
    "singing", "vocals", "harmony", "melody", "composition", "songwriting",
    "beat", "rhythm", "instrumental", "background music", "ambient",
    "audio transcription", "speech to text", "audio analysis",
    "music streaming", "audio platform", "music distribution"
  ],
  
  "AI DEVELOPMENT & PLATFORMS": [
    // AI development and platforms
    "ai development", "ai platform", "machine learning", "ml", "deep learning",
    "neural network", "api", "sdk", "framework", "library", "model",
    "ai model", "language model", "llm", "gpt", "transformer",
    "training", "fine-tuning", "deployment", "inference", "prediction",
    "data science", "analytics", "big data", "data analysis", "statistics",
    "python", "jupyter", "notebook", "code", "programming", "development",
    "cloud", "aws", "azure", "gcp", "docker", "kubernetes", "mlops",
    "automation", "workflow", "pipeline", "integration", "deployment",
    "open source", "hugging face", "tensorflow", "pytorch", "scikit-learn"
  ],
  
  "BUSINESS OPERATIONS & PRODUCTIVITY": [
    // Business and productivity
    "business", "productivity", "management", "operations", "workflow",
    "crm", "customer", "sales", "lead", "pipeline", "conversion",
    "project", "task", "team", "collaboration", "communication",
    "schedule", "calendar", "meeting", "appointment", "booking",
    "finance", "accounting", "invoice", "expense", "budget", "payment",
    "hr", "human resources", "recruitment", "hiring", "employee",
    "document", "file", "storage", "organization", "knowledge base",
    "email", "messaging", "chat", "notification", "alert",
    "dashboard", "reporting", "metrics", "kpi", "performance",
    "automation", "integration", "tool", "utility", "helper"
  ],
  
  "MARKETING & SALES SOLUTIONS": [
    // Marketing and sales
    "marketing", "sales", "advertising", "promotion", "campaign",
    "social media", "facebook", "instagram", "twitter", "linkedin", "tiktok",
    "seo", "search engine", "keywords", "ranking", "optimization",
    "email marketing", "newsletter", "automation", "funnel", "conversion",
    "analytics", "tracking", "metrics", "roi", "performance", "insights",
    "content marketing", "blog", "article", "post", "engagement",
    "influencer", "affiliate", "partnership", "referral", "lead generation",
    "ecommerce", "online store", "shopping", "cart", "checkout", "payment",
    "brand", "branding", "identity", "logo", "design", "creative",
    "ppc", "ads", "google ads", "facebook ads", "advertising platform"
  ],
  
  "COMMUNICATION & COLLABORATION TOOLS": [
    // Communication and collaboration
    "communication", "collaboration", "team", "meeting", "conference",
    "chat", "messaging", "instant message", "slack", "discord", "teams",
    "video call", "video conference", "zoom", "webinar", "presentation",
    "sharing", "file sharing", "document sharing", "screen sharing",
    "whiteboard", "brainstorming", "ideation", "mind map", "planning",
    "notification", "alert", "reminder", "update", "status",
    "workspace", "shared workspace", "project space", "team space",
    "feedback", "review", "approval", "comment", "annotation",
    "translation", "language", "multilingual", "localization"
  ]
};

// Get main category from subcategory or tool
export const getMainCategoryFromSubcategory = (subcategory: string): string => {
  const subcategoryLower = subcategory.toLowerCase();
  
  // Video & Multimedia subcategories
  if (subcategoryLower.includes('video') || 
      subcategoryLower.includes('movie') || 
      subcategoryLower.includes('film') ||
      subcategoryLower.includes('animation') ||
      subcategoryLower.includes('multimedia') ||
      subcategoryLower.includes('streaming') ||
      subcategoryLower.includes('media production') ||
      subcategoryLower.includes('visual effects')) {
    return "VIDEO & MULTIMEDIA";
  }
  
  // Image & Design subcategories
  if (subcategoryLower.includes('image') || 
      subcategoryLower.includes('design') || 
      subcategoryLower.includes('art') ||
      subcategoryLower.includes('graphic') ||
      subcategoryLower.includes('logo') ||
      subcategoryLower.includes('photo') ||
      subcategoryLower.includes('visual') ||
      subcategoryLower.includes('creative') ||
      subcategoryLower.includes('illustration') ||
      subcategoryLower.includes('ui') ||
      subcategoryLower.includes('ux')) {
    return "IMAGE & DESIGN GENERATION";
  }
  
  // Writing & Content subcategories
  if (subcategoryLower.includes('writing') || 
      subcategoryLower.includes('content') || 
      subcategoryLower.includes('copy') ||
      subcategoryLower.includes('blog') ||
      subcategoryLower.includes('article') ||
      subcategoryLower.includes('text') ||
      subcategoryLower.includes('grammar') ||
      subcategoryLower.includes('story') ||
      subcategoryLower.includes('script') ||
      subcategoryLower.includes('book')) {
    return "WRITING & CONTENT CREATION";
  }
  
  // Audio & Music subcategories
  if (subcategoryLower.includes('audio') || 
      subcategoryLower.includes('music') || 
      subcategoryLower.includes('voice') ||
      subcategoryLower.includes('sound') ||
      subcategoryLower.includes('speech') ||
      subcategoryLower.includes('podcast') ||
      subcategoryLower.includes('tts') ||
      subcategoryLower.includes('singing')) {
    return "AUDIO & MUSIC TOOLS";
  }
  
  // AI Development subcategories
  if (subcategoryLower.includes('ai development') || 
      subcategoryLower.includes('machine learning') || 
      subcategoryLower.includes('developer') ||
      subcategoryLower.includes('programming') ||
      subcategoryLower.includes('api') ||
      subcategoryLower.includes('model') ||
      subcategoryLower.includes('platform') ||
      subcategoryLower.includes('framework') ||
      subcategoryLower.includes('data science') ||
      subcategoryLower.includes('analytics')) {
    return "AI DEVELOPMENT & PLATFORMS";
  }
  
  // Business & Productivity subcategories
  if (subcategoryLower.includes('business') || 
      subcategoryLower.includes('productivity') || 
      subcategoryLower.includes('management') ||
      subcategoryLower.includes('workflow') ||
      subcategoryLower.includes('crm') ||
      subcategoryLower.includes('project') ||
      subcategoryLower.includes('task') ||
      subcategoryLower.includes('finance') ||
      subcategoryLower.includes('hr') ||
      subcategoryLower.includes('document')) {
    return "BUSINESS OPERATIONS & PRODUCTIVITY";
  }
  
  // Marketing & Sales subcategories
  if (subcategoryLower.includes('marketing') || 
      subcategoryLower.includes('sales') || 
      subcategoryLower.includes('advertising') ||
      subcategoryLower.includes('social media') ||
      subcategoryLower.includes('seo') ||
      subcategoryLower.includes('email marketing') ||
      subcategoryLower.includes('ecommerce') ||
      subcategoryLower.includes('campaign') ||
      subcategoryLower.includes('promotion')) {
    return "MARKETING & SALES SOLUTIONS";
  }
  
  // Communication & Collaboration subcategories
  if (subcategoryLower.includes('communication') || 
      subcategoryLower.includes('collaboration') || 
      subcategoryLower.includes('meeting') ||
      subcategoryLower.includes('chat') ||
      subcategoryLower.includes('messaging') ||
      subcategoryLower.includes('conference') ||
      subcategoryLower.includes('team') ||
      subcategoryLower.includes('sharing') ||
      subcategoryLower.includes('workspace')) {
    return "COMMUNICATION & COLLABORATION TOOLS";
  }
  
  // Default fallback
  return "OTHER";
};
