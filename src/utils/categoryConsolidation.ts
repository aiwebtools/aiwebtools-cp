
import { Tool } from "@/types/tools";

// Enhanced mapping with consolidated industry-specific structure
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
  
  // Creative & Entertainment (General & Gaming)
  "Creative & Entertainment": "Creative & Entertainment (General & Gaming)",
  "Entertainment & Media": "Creative & Entertainment (General & Gaming)",
  "Entertainment Tools": "Creative & Entertainment (General & Gaming)",
  "Creative Platforms": "Creative & Entertainment (General & Gaming)",
  "Creative Suites": "Creative & Entertainment (General & Gaming)",
  
  // Industry Specific AI TOOLS - COMPREHENSIVE MAPPING FOR ALL INDUSTRY-SPECIFIC CATEGORIES
  "Health & Wellness": "Industry Specific AI TOOLS",
  "Health, Wellness & Personal Lifestyle": "Industry Specific AI TOOLS",
  "Healthcare Professionals": "Industry Specific AI TOOLS",
  "Medical AI Tools": "Industry Specific AI TOOLS",
  "Health And Wellness Tools": "Industry Specific AI TOOLS",
  "Spirituality & Wellness": "Industry Specific AI TOOLS",
  "Personal Services": "Industry Specific AI TOOLS",
  "Wellness & Fitness": "Industry Specific AI TOOLS",
  "Lifestyle Tools": "Industry Specific AI TOOLS",
  "Medical & Healthcare": "Industry Specific AI TOOLS",
  "Healthcare & Medicine": "Industry Specific AI TOOLS",
  "Health Tools": "Industry Specific AI TOOLS",
  "Wellness Tools": "Industry Specific AI TOOLS",
  "Medical Tools": "Industry Specific AI TOOLS",
  "Health & Medical": "Industry Specific AI TOOLS",
  "Healthcare": "Industry Specific AI TOOLS",
  "Medicine": "Industry Specific AI TOOLS",
  "Medical": "Industry Specific AI TOOLS",
  "Wellness": "Industry Specific AI TOOLS",
  "Health": "Industry Specific AI TOOLS",
  "Professional Services": "Industry Specific AI TOOLS",
  "Legal Professionals": "Industry Specific AI TOOLS",
  "Emergency Services": "Industry Specific AI TOOLS",
  "Creative Services": "Industry Specific AI TOOLS",
  "Education & Learning": "Industry Specific AI TOOLS",
  "Education & Research Tools": "Industry Specific AI TOOLS",
  "Educational & Research": "Industry Specific AI TOOLS",
  "Research & Learning": "Industry Specific AI TOOLS",
  "Learning & Education": "Industry Specific AI TOOLS",
  "Learning Platforms": "Industry Specific AI TOOLS",
  "Content Detection Tools": "Industry Specific AI TOOLS",
  "Industry-Specific Solutions": "Industry Specific AI TOOLS",
  "Specialized Tools": "Industry Specific AI TOOLS",
  "Specialized & Niche": "Industry Specific AI TOOLS",
  "Specialized Niche Tools": "Industry Specific AI TOOLS",
  "Specialized AI Tools": "Industry Specific AI TOOLS",
  "Technical & Utility Tools": "Industry Specific AI TOOLS",
  "Art & Collectibles": "Industry Specific AI TOOLS",
  "Game Design & Development": "Industry Specific AI TOOLS",
  "Financial & Trading Tools": "Industry Specific AI TOOLS",
  "Finance & Trading": "Industry Specific AI TOOLS",
  "Legal & Compliance": "Industry Specific AI TOOLS",
  "Robotics Companies": "Industry Specific AI TOOLS",
  "Food & Hospitality": "Industry Specific AI TOOLS",
  "Culinary Arts": "Industry Specific AI TOOLS",
  "Graphic Design": "Industry Specific AI TOOLS",
  "Architecture": "Industry Specific AI TOOLS",
  "Engineering": "Industry Specific AI TOOLS",
  "Agriculture": "Industry Specific AI TOOLS",
  "Real Estate": "Industry Specific AI TOOLS",
  "Automotive": "Industry Specific AI TOOLS",
  "Aviation": "Industry Specific AI TOOLS",
  "Maritime": "Industry Specific AI TOOLS",
  "Construction": "Industry Specific AI TOOLS",
  "Mining": "Industry Specific AI TOOLS",
  "Energy": "Industry Specific AI TOOLS",
  "Environmental": "Industry Specific AI TOOLS",
  "Sports": "Industry Specific AI TOOLS",
  "Fashion": "Industry Specific AI TOOLS",
  "Beauty": "Industry Specific AI TOOLS",
  "Photography": "Industry Specific AI TOOLS",
  "Journalism": "Industry Specific AI TOOLS",
  "Broadcasting": "Industry Specific AI TOOLS",
  "Publishing": "Industry Specific AI TOOLS",
  "Library Science": "Industry Specific AI TOOLS",
  "Museums": "Industry Specific AI TOOLS",
  "Archaeology": "Industry Specific AI TOOLS",
  "Anthropology": "Industry Specific AI TOOLS",
  "Psychology": "Industry Specific AI TOOLS",
  "Sociology": "Industry Specific AI TOOLS",
  "Political Science": "Industry Specific AI TOOLS",
  "Economics": "Industry Specific AI TOOLS",
  "Statistics": "Industry Specific AI TOOLS",
  "Research": "Industry Specific AI TOOLS",
  "Scientific Research": "Industry Specific AI TOOLS",
  "Laboratory": "Industry Specific AI TOOLS",
  "Pharmaceutical": "Industry Specific AI TOOLS",
  "Biotechnology": "Industry Specific AI TOOLS",
  "Veterinary": "Industry Specific AI TOOLS",
  "Dental": "Industry Specific AI TOOLS",
  "Nursing": "Industry Specific AI TOOLS",
  "Therapy": "Industry Specific AI TOOLS",
  "Fitness": "Industry Specific AI TOOLS",
  "Nutrition": "Industry Specific AI TOOLS",
  "Mental Health": "Industry Specific AI TOOLS",
  "Social Work": "Industry Specific AI TOOLS",
  "Public Safety": "Industry Specific AI TOOLS",
  "Security": "Industry Specific AI TOOLS",
  "Military": "Industry Specific AI TOOLS",
  "Government": "Industry Specific AI TOOLS",
  "Non-profit": "Industry Specific AI TOOLS",
  "Religious": "Industry Specific AI TOOLS",
  "Spiritual": "Industry Specific AI TOOLS",
  "Philosophy": "Industry Specific AI TOOLS"
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
