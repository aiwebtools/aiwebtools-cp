
// Simple and accurate main category mapping - NO TOOL DELETION
export const mainCategoryKeywordMapping: Record<string, string[]> = {
  "VIDEO & MULTIMEDIA": [
    "video", "movie", "film", "animation", "multimedia", "streaming", "cinema",
    "video editing", "video generation", "video creation", "video maker"
  ],
  
  "IMAGE & DESIGN GENERATION": [
    "image", "design", "art", "graphic", "logo", "photo", "illustration",
    "ui", "ux", "creative", "visual", "drawing", "sketch"
  ],
  
  "WRITING & CONTENT CREATION": [
    "writing", "content", "blog", "copy", "text", "article", "story",
    "script", "book", "email", "seo", "grammar"
  ],
  
  "AUDIO & MUSIC TOOLS": [
    "audio", "music", "voice", "sound", "speech", "podcast", "tts",
    "singing", "melody", "beat"
  ],
  
  "AI DEVELOPMENT & PLATFORMS": [
    "ai development", "machine learning", "api", "platform", "framework",
    "model", "programming", "code", "development"
  ],
  
  "BUSINESS OPERATIONS & PRODUCTIVITY": [
    "business", "productivity", "management", "crm", "sales", "project",
    "workflow", "finance", "hr", "document"
  ],
  
  "MARKETING & SALES SOLUTIONS": [
    "marketing", "advertising", "social media", "seo", "email marketing",
    "ecommerce", "campaign", "analytics"
  ],
  
  "COMMUNICATION & COLLABORATION TOOLS": [
    "communication", "collaboration", "meeting", "chat", "messaging",
    "conference", "team", "sharing"
  ]
};

// SIMPLE mapping - just check if tool category contains certain words
export const getMainCategoryFromSubcategory = (subcategory: string): string => {
  if (!subcategory) return "OTHER";
  
  const categoryLower = subcategory.toLowerCase();
  
  // Check each main category
  for (const [mainCategory, keywords] of Object.entries(mainCategoryKeywordMapping)) {
    const matches = keywords.some(keyword => categoryLower.includes(keyword.toLowerCase()));
    if (matches) {
      return mainCategory;
    }
  }
  
  // Industry specific categories - be very specific
  const industryKeywords = [
    "health", "medical", "legal", "education", "learning", "professional",
    "specialized", "niche", "emergency", "creative", "entertainment"
  ];
  
  if (industryKeywords.some(keyword => categoryLower.includes(keyword))) {
    return "INDUSTRY SPECIFIC AI TOOLS";
  }
  
  return "OTHER";
};
