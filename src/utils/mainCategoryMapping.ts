
// Main category structure mapping subcategories to main categories
export interface MainCategory {
  name: string;
  emoji: string;
  description: string;
  subcategories: string[];
}

export const mainCategories: MainCategory[] = [
  {
    name: "VIDEO AI TOOLS",
    emoji: "🎬",
    description: "Complete video creation, editing, and enhancement tools",
    subcategories: [
      "Video Tools",
      "Video & Content Tools", 
      "Video Editing & Content Tools",
      "Advanced Video Tools"
    ]
  },
  {
    name: "IMAGE AI TOOLS", 
    emoji: "🖼️",
    description: "Image generation, editing, and design platforms",
    subcategories: [
      "AI Art",
      "Art & Design",
      "Core Image Generators",
      "Creative Design Tools", 
      "Design & Graphics Tools",
      "Image & Design",
      "Image Editing Tools",
      "Image Generation Platforms",
      "Specialized Image Tools",
      "Background & Object Tools"
    ]
  },
  {
    name: "AUDIO & MUSIC AI",
    emoji: "🎵", 
    description: "Audio generation, music creation, and voice synthesis",
    subcategories: [
      "Audio & Music",
      "Audio & Voice Tools"
    ]
  },
  {
    name: "WRITING & CONTENT AI",
    emoji: "✍️",
    description: "Writing assistance, content creation, and text enhancement", 
    subcategories: [
      "Writing & Content",
      "Content Creation Tools",
      "Content Creation & Writing Tools",
      "Writing & Content Enhancement"
    ]
  },
  {
    name: "BUSINESS & PRODUCTIVITY",
    emoji: "💼",
    description: "Business tools, productivity enhancement, and automation",
    subcategories: [
      "Business Tools",
      "Business & Productivity", 
      "Business & Team Tools",
      "Business Sales Tools",
      "Search & Productivity Tools",
      "AI Productivity Tools",
      "Resume & Career Tools",
      "Ecommerce & Marketing Tools",
      "Meeting & Transcription Tools",
      "Email Management Tools"
    ]
  },
  {
    name: "AI DEVELOPMENT & CODING",
    emoji: "⚙️",
    description: "Development tools, coding assistance, and technical utilities",
    subcategories: [
      "AI Development Tools",
      "AI Tools & Development", 
      "AI Tools & Utilities",
      "Developer & Coding Tools",
      "Platforms & Development",
      "Web Development Tools",
      "Technical & Utility Tools"
    ]
  },
  {
    name: "AI CHAT & ASSISTANTS",
    emoji: "🤖",
    description: "AI assistants, chatbots, and conversational platforms",
    subcategories: [
      "AI Assistants",
      "AI Chat Platforms",
      "Advanced Chat Platforms",
      "AI Agents"
    ]
  },
  {
    name: "EDUCATION & LEARNING",
    emoji: "📚", 
    description: "Educational tools, learning platforms, and knowledge enhancement",
    subcategories: [
      "Education & Learning",
      "Learning & Education", 
      "Research & Learning"
    ]
  },
  {
    name: "PROFESSIONAL SERVICES",
    emoji: "🏥",
    description: "Specialized professional and industry-specific tools",
    subcategories: [
      "Healthcare Professionals",
      "Legal Professionals",
      "Emergency Services",
      "Professional Services",
      "Creative Services",
      "Personal Services"
    ]
  },
  {
    name: "CREATIVE & ENTERTAINMENT",
    emoji: "🎭",
    description: "Creative tools, entertainment, and artistic applications",
    subcategories: [
      "Creative & Entertainment",
      "Game Design & Development",
      "Creative Suites",
      "Entertainment & Media"
    ]
  },
  {
    name: "RESEARCH & ANALYSIS",
    emoji: "🔬",
    description: "Research tools, data analysis, and content detection",
    subcategories: [
      "Content Detection Tools",
      "Document & Research Tools",
      "Financial & Trading Tools"
    ]
  },
  {
    name: "AI INFRASTRUCTURE",
    emoji: "🏗️", 
    description: "AI platforms, models, and infrastructure services",
    subcategories: [
      "Local AI Solutions",
      "AI Inference Platforms", 
      "Open Source AI Models"
    ]
  },
  {
    name: "SPECIALIZED & NICHE",
    emoji: "🎯",
    description: "Specialized tools for specific use cases and industries",
    subcategories: [
      "Specialized Tools",
      "Specialized & Niche",
      "Specialized Niche Tools", 
      "Specialized AI Tools",
      "Specialized Policy Tools",
      "Art & Collectibles",
      "Time & History",
      "Spirituality"
    ]
  },
  {
    name: "ADVANCED AI TOOLS",
    emoji: "🚀",
    description: "Cutting-edge and experimental AI technologies",
    subcategories: [
      "Advanced AI Tools",
      "Raw / Uncut"
    ]
  },
  {
    name: "UNCATEGORIZED",
    emoji: "📦",
    description: "Tools that don't fit into other main categories",
    subcategories: []
  }
];

// Create reverse mapping from subcategory to main category
export const subcategoryToMainCategory: Record<string, string> = {};
mainCategories.forEach(mainCat => {
  mainCat.subcategories.forEach(subCat => {
    subcategoryToMainCategory[subCat] = mainCat.name;
  });
});

// Get main category for a subcategory
export const getMainCategoryForSubcategory = (subcategory: string): string => {
  return subcategoryToMainCategory[subcategory] || "UNCATEGORIZED";
};

// Get all subcategories for a main category
export const getSubcategoriesForMainCategory = (mainCategory: string): string[] => {
  const category = mainCategories.find(cat => cat.name === mainCategory);
  return category ? category.subcategories : [];
};

// Get main category info
export const getMainCategoryInfo = (mainCategory: string): MainCategory | undefined => {
  return mainCategories.find(cat => cat.name === mainCategory);
};
