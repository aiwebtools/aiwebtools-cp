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
  
  // INDUSTRY SPECIFIC AI TOOLS - COMPREHENSIVE MAPPING FOR ALL INDUSTRIES
  "Health & Wellness": "Industry Specific AI Tools",
  "Health, Wellness & Personal Lifestyle": "Industry Specific AI Tools",
  "Healthcare Professionals": "Industry Specific AI Tools",
  "Medical AI Tools": "Industry Specific AI Tools",
  "Health And Wellness Tools": "Industry Specific AI Tools",
  "Spirituality & Wellness": "Industry Specific AI Tools",
  "Personal Services": "Industry Specific AI Tools",
  "Wellness & Fitness": "Industry Specific AI Tools",
  "Lifestyle Tools": "Industry Specific AI Tools",
  "Medical & Healthcare": "Industry Specific AI Tools",
  "Healthcare & Medicine": "Industry Specific AI Tools",
  "Health Tools": "Industry Specific AI Tools",
  "Wellness Tools": "Industry Specific AI Tools",
  "Medical Tools": "Industry Specific AI Tools",
  "Health & Medical": "Industry Specific AI Tools",
  "Healthcare": "Industry Specific AI Tools",
  "Medicine": "Industry Specific AI Tools",
  "Medical": "Industry Specific AI Tools",
  "Wellness": "Industry Specific AI Tools",
  "Health": "Industry Specific AI Tools",
  
  // Legal Industry
  "Legal Professionals": "Industry Specific AI Tools",
  "Legal & Compliance": "Industry Specific AI Tools",
  "Professional Services": "Industry Specific AI Tools",
  
  // Creative Industries
  "Creative & Entertainment": "Industry Specific AI Tools",
  "Entertainment & Media": "Industry Specific AI Tools",
  "Entertainment Tools": "Industry Specific AI Tools",
  "Creative Platforms": "Industry Specific AI Tools",
  "Art & Collectibles": "Industry Specific AI Tools",
  "Game Design & Development": "Industry Specific AI Tools",
  "Creative Services": "Industry Specific AI Tools",
  "Creative Suites": "Industry Specific AI Tools",
  "Creative & Entertainment (General & Gaming)": "Industry Specific AI Tools",
  
  // Emergency & Safety Industries
  "Emergency Services": "Industry Specific AI Tools",
  
  // Financial Industry
  "Financial & Trading Tools": "Industry Specific AI Tools",
  "Finance & Trading": "Industry Specific AI Tools",
  
  // Technology & Hardware Industries
  "Robotics Companies": "Industry Specific AI Tools",
  "Hardware Tools": "Industry Specific AI Tools",
  "IoT Platforms": "Industry Specific AI Tools",
  "Smart Devices": "Industry Specific AI Tools",
  
  // Specialized consolidation
  "Specialized & Niche": "Industry Specific AI Tools",
  "Specialized Niche Tools": "Industry Specific AI Tools",
  "Specialized AI Tools": "Industry Specific AI Tools",
  "Technical & Utility Tools": "Industry Specific AI Tools",
  "Specialized Tools": "Industry Specific AI Tools"
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
