
export interface MainCategory {
  name: string;
  emoji: string;
  subcategories: string[];
  description: string;
}

// Define the 15 main categories with their subcategories
export const mainCategories: MainCategory[] = [
  {
    name: "VIDEO AI TOOLS",
    emoji: "🎬",
    subcategories: [
      "Video Tools",
      "Video & Animation Tools", 
      "Video & Content Tools",
      "Video Editing & Content Tools",
      "Advanced Video Tools"
    ],
    description: "Complete video creation, editing, and animation solutions"
  },
  {
    name: "IMAGE AI TOOLS", 
    emoji: "🎨",
    subcategories: [
      "AI Art",
      "Image & Design Generation",
      "Core Image Generators",
      "Image Editing Tools",
      "Specialized Image Tools", 
      "Background & Object Tools",
      "Image Generation Platforms",
      "Design & Graphics Tools",
      "Design Assistant Tools"
    ],
    description: "Image generation, editing, and design tools"
  },
  {
    name: "WRITING AI TOOLS",
    emoji: "✍️", 
    subcategories: [
      "Writing & Text Generation",
      "Content Creation & Writing Tools",
      "Writing & Content Enhancement",
      "Document & Research Tools"
    ],
    description: "Writing assistance, content creation, and text generation"
  },
  {
    name: "AUDIO & MUSIC AI TOOLS",
    emoji: "🎵",
    subcategories: [
      "Audio & Music Tools",
      "Audio & Voice Tools", 
      "Meeting & Transcription Tools"
    ],
    description: "Audio generation, music creation, and voice processing"
  },
  {
    name: "BUSINESS & PRODUCTIVITY AI TOOLS",
    emoji: "💼",
    subcategories: [
      "Business Operations & Productivity",
      "Resume & Career Tools",
      "Email Management Tools",
      "Automation Platforms"
    ],
    description: "Business operations, productivity, and workflow automation"
  },
  {
    name: "MARKETING & SALES AI TOOLS", 
    emoji: "📈",
    subcategories: [
      "Marketing & Sales Solutions",
      "Ecommerce & Marketing Tools",
      "Social Media Tools"
    ],
    description: "Marketing automation, sales optimization, and social media management"
  },
  {
    name: "AI DEVELOPMENT & PLATFORMS",
    emoji: "🤖",
    subcategories: [
      "AI Development & Platforms",
      "Open Source AI Models",
      "AI Agents",
      "Local AI Solutions",
      "AI Inference Platforms",
      "Developer Tools",
      "Web Development Tools"
    ],
    description: "AI development tools, platforms, and programming resources"
  },
  {
    name: "COMMUNICATION & COLLABORATION AI TOOLS",
    emoji: "💬", 
    subcategories: [
      "Communication & Collaboration Tools",
      "AI Assistants & Search",
      "AI Chat Platforms",
      "Advanced Chat Platforms"
    ],
    description: "Communication, collaboration, and AI assistant tools"
  },
  {
    name: "DATA & ANALYTICS AI TOOLS",
    emoji: "📊",
    subcategories: [
      "Data Science & Analytics",
      "Content Detection Tools"
    ],
    description: "Data analysis, business intelligence, and content detection"
  },
  {
    name: "EDUCATION & RESEARCH AI TOOLS",
    emoji: "🎓",
    subcategories: [
      "Education & Research Tools",
      "Learning Platforms",
      "News And Information Tools"
    ],
    description: "Educational resources, research tools, and learning platforms"
  },
  {
    name: "INDUSTRY-SPECIFIC AI SOLUTIONS",
    emoji: "🏢",
    subcategories: [
      "Industry-Specific Solutions",
      "Financial & Trading Tools", 
      "Robotics Companies",
      "Technical & Utility Tools",
      "Cloud Services"
    ],
    description: "Specialized solutions for specific industries and professions"
  },
  {
    name: "CREATIVE & ENTERTAINMENT AI TOOLS",
    emoji: "🎭",
    subcategories: [
      "Creative & Entertainment (General & Gaming)",
      "Entertainment Tools",
      "Creative Platforms",
      "Game Design & Development",
      "Creative Services",
      "Creative Suites",
      "Art & Collectibles"
    ],
    description: "Creative tools, entertainment, and gaming solutions"
  },
  {
    name: "HEALTH & WELLNESS AI TOOLS",
    emoji: "🏥",
    subcategories: [
      "Health, Wellness & Personal Lifestyle",
      "Healthcare Professionals",
      "Health And Wellness Tools"
    ],
    description: "Healthcare, wellness, and personal lifestyle tools"
  },
  {
    name: "UTILITIES & GENERAL AI TOOLS",
    emoji: "🛠️",
    subcategories: [
      "Utilities Tools",
      "Communication Tools",
      "Collaboration Tools",
      "3D & Visualization Tools"
    ],
    description: "General utilities, tools, and miscellaneous AI applications"
  },
  {
    name: "SPECIALIZED & NICHE AI TOOLS",
    emoji: "🔮",
    subcategories: [
      "Historical & Time-Based AI Tools",
      "Spirituality Tools",
      "Emergency Services",
      "Personal Services",
      "Legal Professionals",
      "Specialized Policy Tools",
      "Specialized Niche Tools"
    ],
    description: "Specialized, niche, and unique AI applications"
  }
];

// Helper function to get main category for a subcategory
export const getMainCategoryForSubcategory = (subcategory: string): MainCategory | null => {
  return mainCategories.find(mainCat => 
    mainCat.subcategories.some(sub => 
      sub.toLowerCase() === subcategory.toLowerCase()
    )
  ) || null;
};

// Helper function to get all subcategories for a main category
export const getSubcategoriesForMainCategory = (mainCategoryName: string): string[] => {
  const mainCat = mainCategories.find(cat => cat.name === mainCategoryName);
  return mainCat ? mainCat.subcategories : [];
};

// Helper function to get main category counts
export const getMainCategoryCounts = (subcategoryCounts: Record<string, number>): Record<string, number> => {
  const mainCategoryCounts: Record<string, number> = {};
  
  mainCategories.forEach(mainCat => {
    let totalCount = 0;
    mainCat.subcategories.forEach(subcategory => {
      totalCount += subcategoryCounts[subcategory] || 0;
    });
    mainCategoryCounts[mainCat.name] = totalCount;
  });
  
  return mainCategoryCounts;
};

export default mainCategories;
