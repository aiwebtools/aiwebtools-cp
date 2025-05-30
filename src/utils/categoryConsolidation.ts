import { Tool } from "@/types/tools";

// Enhanced mapping with better organization and consolidation
const categoryMapping: Record<string, string> = {
  // AI & Development consolidation
  "AI Tools & Development": "AI Development Tools",
  "AI Tools & Utilities": "AI Development Tools",
  "Developer & Coding Tools": "AI Development Tools",
  "Web Development Tools": "AI Development Tools",
  "AI Inference Platforms": "Advanced AI Tools",
  "Open Source AI Models": "Advanced AI Tools",
  "AI Agents": "Advanced AI Tools",
  "Developer Tools": "AI Development Tools",
  "Comprehensive AI Tools": "Advanced AI Tools",
  "Mind Blowing AI Tools": "Advanced AI Tools",
  
  // Content Creation consolidation
  "Video Tools": "Video & Content Creation",
  "Advanced Video Tools": "Video & Content Creation",
  "Video & Content Tools": "Video & Content Creation",
  "Video Editing & Content Tools": "Video & Content Creation",
  "Video & Marketing": "Video & Content Creation",
  "Video & Streaming": "Video & Content Creation",
  
  "Image & Design": "Image & Design Tools",
  "AI Art": "Image & Design Tools",
  "Core Image Generators": "Image & Design Tools",
  "Image Editing Tools": "Image & Design Tools",
  "Specialized Image Tools": "Image & Design Tools",
  "Background & Object Tools": "Image & Design Tools",
  "Image Generation Platforms": "Image & Design Tools",
  "Design & Graphics Tools": "Image & Design Tools",
  "Creative Design": "Image & Design Tools",
  
  "Writing & Content": "Writing & Content Creation",
  "Content Creation Tools": "Writing & Content Creation",
  "Content Creation & Writing Tools": "Writing & Content Creation",
  "Writing & Content Enhancement": "Writing & Content Creation",
  "Document & Research Tools": "Writing & Content Creation",
  "AI Writing Tools": "Writing & Content Creation",
  
  "Audio & Music Tools": "Audio & Voice Tools",
  "Audio & Podcasting": "Audio & Voice Tools",
  "Text to Speech": "Audio & Voice Tools",
  
  // Business & Professional consolidation
  "Business Tools": "Business & Productivity",
  "Business & Team Tools": "Business & Productivity",
  "Business Sales Tools": "Business & Productivity",
  "Business & Sales Tools": "Business & Productivity",
  "Resume & Career Tools": "Business & Productivity",
  "Business & Branding": "Business & Productivity",
  "Productivity & Utilities": "Business & Productivity",
  "Utilities Tools": "Business & Productivity",
  
  "Social Media & Marketing": "Marketing & Social Media",
  "Marketing & Analytics": "Marketing & Social Media",
  "Marketing Tools": "Marketing & Social Media",
  "Social Media Tools": "Marketing & Social Media",
  "Sales & Marketing": "Marketing & Social Media",
  "Ecommerce & Marketing Tools": "Marketing & Social Media",
  "E-commerce & Marketing": "Marketing & Social Media",
  
  "Collaboration & Communication": "Communication & Collaboration",
  "Communication Tools": "Communication & Collaboration",
  "Collaboration Tools": "Communication & Collaboration",
  "Email Management Tools": "Communication & Collaboration",
  "Meeting & Transcription Tools": "Communication & Collaboration",
  
  "Healthcare Professionals": "Professional Services",
  "Legal Professionals": "Professional Services",
  "Financial & Trading Tools": "Professional Services",
  "Finance & Trading": "Professional Services",
  
  // Technical & Data consolidation
  "Data & Analytics Tools": "Data & Analytics",
  "Data Analytics Tools": "Data & Analytics",
  "Business Intelligence": "Data & Analytics",
  "Analytics & Insights": "Data & Analytics",
  
  "Automation & Workflow Tools": "Automation & Workflows",
  "Workflow Tools": "Automation & Workflows",
  "Process Automation": "Automation & Workflows",
  
  "Cloud & Infrastructure": "Cloud Services",
  
  "Utilities & Productivity": "Utilities & Productivity",
  
  // Industry Specific
  "Research & Learning": "Education & Learning",
  "Learning & Education": "Education & Learning",
  "Learning Platforms": "Education & Learning",
  
  "Health & Wellness": "Health & Wellness",
  
  "Finance Tools": "Finance & Trading",
  "Financial Tools": "Finance & Trading",
  
  "Legal Tools": "Legal & Compliance",
  "Legal Services": "Legal & Compliance",
  
  // Creative & Entertainment
  "Entertainment & Media": "Creative & Entertainment",
  "Entertainment Tools": "Creative & Entertainment",
  "Creative Platforms": "Creative & Entertainment",
  "Art & Collectibles": "Creative & Entertainment",
  
  "3D & Visualization Tools": "3D & Animation",
  "3D Tools": "3D & Animation",
  "Visualization Tools": "3D & Animation",
  
  // Specialized consolidation
  "Specialized & Niche": "Specialized Tools",
  "Specialized Niche Tools": "Specialized Tools",
  "Specialized AI Tools": "Specialized Tools",
  "Technical & Utility Tools": "Specialized Tools",
  
  // Unique categories remain the same
  "Game Design & Development": "Game Design & Development",
  "Emergency Services": "Emergency Services",
  "Time & History": "Time & History",
  "Spirituality & Wellness": "Spirituality & Wellness",
  
  // Historical and niche mappings
  "Mystical & Esoteric": "Spirituality & Wellness",
  "Historical Figures": "Time & History",
  "Science & Mysticism": "Time & History",
  "Archaeology": "Time & History",
  "Maritime History": "Time & History",
  "Historical News": "Time & History",
  "Philosophy & Spirituality": "Spirituality & Wellness",
  "Theatrical Writing": "Creative & Entertainment",
  "Historical Medicine": "Time & History"
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
