import { Tool } from "@/types/tools";

// Enhanced mapping of old categories to new consolidated categories
const categoryMapping: Record<string, string> = {
  // Video consolidation
  "Video Tools": "Video & Content Creation",
  "Advanced Video Tools": "Video & Content Creation",
  "Video & Content Tools": "Video & Content Creation",
  "Video Editing & Content Tools": "Video & Content Creation",
  "Video & Marketing": "Video & Content Creation",
  "Video & Streaming": "Video & Content Creation",
  
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
  "Business & Sales Tools": "Business & Productivity",
  "Ecommerce & Marketing Tools": "Business & Productivity",
  "Email Management Tools": "Business & Productivity",
  "Meeting & Transcription Tools": "Business & Productivity",
  "Resume & Career Tools": "Business & Productivity",
  "Business & Branding": "Business & Productivity",
  
  // Writing consolidation
  "Writing & Content": "Writing & Content Creation",
  "Content Creation Tools": "Writing & Content Creation",
  "Content Creation & Writing Tools": "Writing & Content Creation",
  "Writing & Content Enhancement": "Writing & Content Creation",
  "Document & Research Tools": "Writing & Content Creation",
  
  // AI Tools consolidation
  "AI Tools & Development": "AI Development Tools",
  "AI Tools & Utilities": "AI Development Tools",
  "AI Development Tools": "AI Development Tools",
  "Developer & Coding Tools": "AI Development Tools",
  "Web Development Tools": "AI Development Tools",
  "AI Inference Platforms": "AI Development Tools",
  "Open Source AI Models": "AI Development Tools",
  "AI Agents": "AI Development Tools",
  "Developer Tools": "AI Development Tools",
  
  // Audio consolidation
  "Audio & Music Tools": "Audio & Voice Tools",
  "Audio & Voice Tools": "Audio & Voice Tools",
  "Audio & Podcasting": "Audio & Voice Tools",
  "Audio & Music Tools": "Audio & Voice Tools",
  "Text to Speech": "Audio & Voice Tools",
  
  // Education & Learning consolidation
  "Research & Learning": "Education & Learning",
  "Learning & Education": "Education & Learning",
  "Learning Platforms": "Education & Learning",
  
  // Entertainment & Media consolidation
  "Entertainment & Media": "Creative & Entertainment",
  "Creative & Entertainment": "Creative & Entertainment",
  "Entertainment Tools": "Creative & Entertainment",
  
  // Professional Services consolidation
  "Healthcare Professionals": "Professional Services",
  "Legal Professionals": "Professional Services",
  "Professional Services": "Professional Services",
  "Financial & Trading Tools": "Professional Services",
  "Finance & Trading": "Professional Services",
  
  // Data and Analytics consolidation
  "Data & Analytics Tools": "Data & Analytics",
  "Data Analytics Tools": "Data & Analytics",
  "Business Intelligence": "Data & Analytics",
  "Analytics & Insights": "Data & Analytics",
  
  // 3D and Animation consolidation
  "3D & Visualization Tools": "3D & Animation",
  "3D Tools": "3D & Animation",
  "Visualization Tools": "3D & Animation",
  "3D & Animation": "3D & Animation",
  
  // Automation consolidation
  "Automation & Workflow Tools": "Automation & Workflows",
  "Workflow Tools": "Automation & Workflows",
  "Process Automation": "Automation & Workflows",
  
  // New category consolidations
  "Social Media & Marketing": "Marketing & Social Media",
  "Marketing & Analytics": "Marketing & Social Media",
  "Marketing Tools": "Marketing & Social Media",
  "Social Media Tools": "Marketing & Social Media",
  "Sales & Marketing": "Marketing & Social Media",
  
  "Collaboration & Communication": "Communication & Collaboration",
  "Communication Tools": "Communication & Collaboration",
  "Collaboration Tools": "Communication & Collaboration",
  
  "Productivity & Utilities": "Utilities & Productivity",
  "Utilities Tools": "Utilities & Productivity",
  
  "Creative Platforms": "Creative & Design",
  "Creative Suites": "Creative & Design",
  "Creative & Design": "Creative & Design",
  
  "Cloud & Infrastructure": "Cloud Services",
  "Cloud Services": "Cloud Services",
  
  "News & Information": "Information & Research",
  "Information & Research": "Information & Research",
  
  "Health & Wellness": "Health & Wellness",
  "Health & Fitness": "Health & Wellness",
  
  // New specialized categories
  "AI Chat & Assistants": "AI Chat & Assistants",
  "Customer Service": "Customer Service",
  "Gaming & Streaming": "Gaming & Streaming",
  "E-commerce & Shopping": "E-commerce & Marketing",
  "E-commerce & Marketing": "E-commerce & Marketing",
  "Food & Cooking": "Lifestyle & Personal",
  
  // Specialized consolidation
  "Specialized & Niche": "Specialized Tools",
  "Specialized Niche Tools": "Specialized Tools",
  "Specialized AI Tools": "Specialized Tools",
  "Technical & Utility Tools": "Specialized Tools",
  "Specialized Tools": "Specialized Tools",
  
  // Single/small category consolidations
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
