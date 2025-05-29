
import { Tool } from "@/types/tools";

// Mapping of old categories to new consolidated categories
const categoryMapping: Record<string, string> = {
  // Video consolidation
  "Video Tools": "Video & Content Creation",
  "Advanced Video Tools": "Video & Content Creation",
  "Video & Content Tools": "Video & Content Creation",
  "Video Editing & Content Tools": "Video & Content Creation",
  
  // Image consolidation
  "Image & Design": "Image & Design Tools",
  "AI Art": "Image & Design Tools",
  "Core Image Generators": "Image & Design Tools",
  "Image Editing Tools": "Image & Design Tools",
  "Specialized Image Tools": "Image & Design Tools",
  "Background & Object Tools": "Image & Design Tools",
  "Image Generation Platforms": "Image & Design Tools",
  "Design & Graphics Tools": "Image & Design Tools",
  
  // Business consolidation
  "Business Tools": "Business & Productivity",
  "Business & Team Tools": "Business & Productivity",
  "Business Sales Tools": "Business & Productivity",
  "Ecommerce & Marketing Tools": "Business & Productivity",
  
  // Writing consolidation
  "Writing & Content": "Writing & Content Creation",
  "Content Creation Tools": "Writing & Content Creation",
  "Content Creation & Writing Tools": "Writing & Content Creation",
  "Writing & Content Enhancement": "Writing & Content Creation",
  
  // AI Tools consolidation
  "AI Tools & Development": "AI Development Tools",
  "AI Tools & Utilities": "AI Development Tools",
  "AI Development Tools": "AI Development Tools",
  "Developer & Coding Tools": "AI Development Tools",
  
  // Audio consolidation
  "Audio & Music Tools": "Audio & Voice Tools",
  "Audio & Voice Tools": "Audio & Voice Tools",
  
  // Research consolidation
  "Research & Learning": "Education & Learning",
  "Learning & Education": "Education & Learning",
  "Document & Research Tools": "Education & Learning",
  
  // Specialized consolidation
  "Specialized & Niche": "Specialized Tools",
  "Specialized Niche Tools": "Specialized Tools",
  "Specialized AI Tools": "Specialized Tools",
  "Technical & Utility Tools": "Specialized Tools"
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
