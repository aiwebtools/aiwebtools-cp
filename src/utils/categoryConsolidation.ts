import { Tool } from "@/types/tools";

// Enhanced mapping with your new consolidated structure
const categoryMapping: Record<string, string> = {
  // AI Development & Platforms
  "AI Development Tools": "AI Development & Platforms",
  "Advanced AI Tools": "AI Development & Platforms", 
  "AI Tools & Development": "AI Development & Platforms",
  "AI Tools & Utilities": "AI Development & Platforms",
  "Developer & Coding Tools": "AI Development & Platforms",
  "Web Development Tools": "AI Development & Platforms",
  "AI Inference Platforms": "AI Development & Platforms",
  "Open Source AI Models": "AI Development & Platforms",
  "AI Agents": "AI Development & Platforms",
  "Developer Tools": "AI Development & Platforms",
  "Comprehensive AI Tools": "AI Development & Platforms",
  "Mind Blowing AI Tools": "AI Development & Platforms",
  "Platforms & Development": "AI Development & Platforms",
  "Local AI Solutions": "AI Development & Platforms",
  "Cloud Services": "AI Development & Platforms",
  "AI Chat Platforms": "AI Development & Platforms",
  "Advanced Chat Platforms": "AI Development & Platforms",
  
  // Writing & Text Generation
  "Writing & Content Creation": "Writing & Text Generation",
  "Content Creation Tools": "Writing & Text Generation",
  "Content Creation & Writing Tools": "Writing & Text Generation",
  "Writing & Content Enhancement": "Writing & Text Generation",
  "Document & Research Tools": "Writing & Text Generation",
  "AI Writing Tools": "Writing & Text Generation",
  "Writing & Content": "Writing & Text Generation",
  
  // Image & Design Generation
  "Image & Design Tools": "Image & Design Generation",
  "AI Art": "Image & Design Generation",
  "Core Image Generators": "Image & Design Generation",
  "Image Editing Tools": "Image & Design Generation",
  "Specialized Image Tools": "Image & Design Generation",
  "Background & Object Tools": "Image & Design Generation",
  "Image Generation Platforms": "Image & Design Generation",
  "Design & Graphics Tools": "Image & Design Generation",
  "Creative Design": "Image & Design Generation",
  "Image & Design": "Image & Design Generation",
  "Design Assistant Tools": "Image & Design Generation",
  
  // Video & Animation Tools
  "Video & Content Creation": "Video & Animation Tools",
  "Video Tools": "Video & Animation Tools",
  "Advanced Video Tools": "Video & Animation Tools",
  "Video & Content Tools": "Video & Animation Tools",
  "Video Editing & Content Tools": "Video & Animation Tools",
  "3D & Animation": "Video & Animation Tools",
  "3D & Visualization Tools": "Video & Animation Tools",
  "3D Tools": "Video & Animation Tools",
  
  // Audio & Music Tools (keep as is - already consolidated)
  "Audio & Music Tools": "Audio & Music Tools",
  "Audio & Voice Tools": "Audio & Music Tools",
  "Audio & Podcasting": "Audio & Music Tools",
  "Text to Speech": "Audio & Music Tools",
  
  // Business Operations & Productivity
  "Business & Productivity": "Business Operations & Productivity",
  "Business Tools": "Business Operations & Productivity",
  "Business & Team Tools": "Business Operations & Productivity",
  "Business Sales Tools": "Business Operations & Productivity",
  "Business & Sales Tools": "Business Operations & Productivity",
  "Resume & Career Tools": "Business Operations & Productivity",
  "Business & Branding": "Business Operations & Productivity",
  "Productivity & Utilities": "Business Operations & Productivity",
  "Utilities Tools": "Business Operations & Productivity",
  "AI Productivity Tools": "Business Operations & Productivity",
  "Utilities & Productivity": "Business Operations & Productivity",
  "Email Management Tools": "Business Operations & Productivity",
  "Meeting & Transcription Tools": "Business Operations & Productivity",
  
  // Automation Platforms
  "Automation & Workflows": "Automation Platforms",
  "Automation & Workflow Tools": "Automation Platforms",
  "Workflow Tools": "Automation Platforms",
  "Process Automation": "Automation Platforms",
  
  // Marketing & Sales Solutions
  "Marketing & Social Media": "Marketing & Sales Solutions",
  "Marketing & Analytics": "Marketing & Sales Solutions",
  "Marketing Tools": "Marketing & Sales Solutions",
  "Social Media Tools": "Marketing & Sales Solutions",
  "Sales & Marketing": "Marketing & Sales Solutions",
  "Ecommerce & Marketing Tools": "Marketing & Sales Solutions",
  "E-commerce & Marketing": "Marketing & Sales Solutions",
  "Social Media & Marketing": "Marketing & Sales Solutions",
  
  // Communication & Collaboration Tools
  "Communication & Collaboration": "Communication & Collaboration Tools",
  "Communication Tools": "Communication & Collaboration Tools",
  "Collaboration Tools": "Communication & Collaboration Tools",
  
  // AI Assistants & Search
  "AI Assistants": "AI Assistants & Search",
  "Search & Productivity Tools": "AI Assistants & Search",
  "AI Chat": "AI Assistants & Search",
  
  // Data Science & Analytics
  "Data & Analytics": "Data Science & Analytics",
  "Data & Analytics Tools": "Data Science & Analytics",
  "Data Analytics Tools": "Data Science & Analytics",
  "Business Intelligence": "Data Science & Analytics",
  "Analytics & Insights": "Data Science & Analytics",
  
  // Education & Research Tools
  "Education & Learning": "Education & Research Tools",
  "Research & Learning": "Education & Research Tools",
  "Learning & Education": "Education & Research Tools",
  "Learning Platforms": "Education & Research Tools",
  "Content Detection Tools": "Education & Research Tools",
  
  // Industry-Specific Solutions
  "Professional Services": "Industry-Specific Solutions",
  "Healthcare Professionals": "Industry-Specific Solutions",
  "Legal Professionals": "Industry-Specific Solutions",
  "Financial & Trading Tools": "Industry-Specific Solutions",
  "Finance & Trading": "Industry-Specific Solutions",
  "Emergency Services": "Industry-Specific Solutions",
  "Legal & Compliance": "Industry-Specific Solutions",
  "Robotics Companies": "Industry-Specific Solutions",
  
  // Creative & Entertainment (General & Gaming)
  "Creative & Entertainment": "Creative & Entertainment (General & Gaming)",
  "Entertainment & Media": "Creative & Entertainment (General & Gaming)",
  "Entertainment Tools": "Creative & Entertainment (General & Gaming)",
  "Creative Platforms": "Creative & Entertainment (General & Gaming)",
  "Art & Collectibles": "Creative & Entertainment (General & Gaming)",
  "Game Design & Development": "Creative & Entertainment (General & Gaming)",
  "Creative Services": "Creative & Entertainment (General & Gaming)",
  "Creative Suites": "Creative & Entertainment (General & Gaming)",
  
  // Health, Wellness & Personal Lifestyle
  "Health & Wellness": "Health, Wellness & Personal Lifestyle",
  "Spirituality & Wellness": "Health, Wellness & Personal Lifestyle",
  "Personal Services": "Health, Wellness & Personal Lifestyle",
  "Health And Wellness Tools": "Health, Wellness & Personal Lifestyle",
  
  // Specialized consolidation
  "Specialized & Niche": "Industry-Specific Solutions",
  "Specialized Niche Tools": "Industry-Specific Solutions",
  "Specialized AI Tools": "Industry-Specific Solutions",
  "Technical & Utility Tools": "Industry-Specific Solutions",
  "Specialized Tools": "Industry-Specific Solutions",
  
  // Time & History (keep unique)
  "Time & History": "Historical & Time-Based AI Tools",
  "Mystical & Esoteric": "Historical & Time-Based AI Tools",
  "Historical Figures": "Historical & Time-Based AI Tools",
  "Science & Mysticism": "Historical & Time-Based AI Tools",
  "Archaeology": "Historical & Time-Based AI Tools",
  "Maritime History": "Historical & Time-Based AI Tools",
  "Historical News": "Historical & Time-Based AI Tools",
  "Philosophy & Spirituality": "Historical & Time-Based AI Tools",
  "Theatrical Writing": "Historical & Time-Based AI Tools",
  "Historical Medicine": "Historical & Time-Based AI Tools"
};

export const consolidateCategory = (category: string): string => {
  return categoryMapping[category] || category;
};

export const consolidateTools = (tools: Tool[]): Tool[] => {
  return tools.map(tool => ({
    ...tool,
    category: consolidateCategory(tool.category)
  }));
};

// Get the final consolidated categories list
export const getConsolidatedCategories = (): string[] => {
  const uniqueCategories = new Set(Object.values(categoryMapping));
  return Array.from(uniqueCategories).sort();
};
