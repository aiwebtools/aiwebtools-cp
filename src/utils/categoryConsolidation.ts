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
  
  // KEEP TRUE INDUSTRY SPECIFIC TOOLS IN INDUSTRY CATEGORY
  "Health & Wellness": "Industry Specific AI Tools",
  "Health, Wellness & Personal Lifestyle": "Industry Specific AI Tools",
  "Healthcare Professionals": "Industry Specific AI Tools",
  "Medical AI Tools": "Industry Specific AI Tools",
  "Health And Wellness Tools": "Industry Specific AI Tools",
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
  
  // Emergency & Safety Industries
  "Emergency Services": "Industry Specific AI Tools",
  
  // Financial Industry
  "Financial & Trading Tools": "Industry Specific AI Tools",
  "Finance & Trading": "Industry Specific AI Tools",
  
  // Technology & Hardware Industries
  "Robotics Companies": "Industry Specific AI Tools",
  "Hardware Tools": "Industry Specific AI Tools",
  "IoT Platforms": "Industry Specific AI Tools",
  "Smart Devices": "Industry Specific AI Tools"
};

export const consolidateCategory = (category: string): string => {
  return categoryMapping[category] || category;
};

export const consolidateTools = (tools: Tool[]): Tool[] => {
  return tools.map(tool => {
    // Apply industry-specific logic first
    const isIndustryTool = isIndustrySpecificTool(tool);
    
    // If it's NOT truly industry-specific but currently in an industry category, move to OTHER
    if (!isIndustryTool && tool.category && (
      tool.category.includes("Industry") || 
      tool.category.includes("Professional") ||
      tool.category === "Specialized & Niche" ||
      tool.category === "Time & History" ||
      tool.category === "Creative & Entertainment" ||
      tool.category === "Art & Collectibles" ||
      tool.category === "Spirituality & Wellness" ||
      tool.category === "Raw Uncut Tools" ||
      tool.category === "Entertainment & Media" ||
      tool.category === "Game Design & Development" ||
      tool.category === "Creative Suites"
    )) {
      console.log(`🔄 MOVING TO OTHER: ${tool.title} - not truly industry-specific`);
      return {
        ...tool,
        category: "OTHER"
      };
    }
    
    // Apply normal category consolidation
    return {
      ...tool,
      category: consolidateCategory(tool.category)
    };
  });
};

// Helper function to detect ONLY truly industry-specific tools
const isIndustrySpecificTool = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // STRICT industry keywords - only for tools that are clearly profession/industry specific
  const strictIndustryKeywords = [
    // Healthcare & Medical (clearly professional)
    'doctor', 'physician', 'nurse', 'medical diagnosis', 'patient care', 'hospital', 'clinic',
    'pharmaceutical', 'medicine prescription', 'medical research', 'surgery', 'therapy',
    'veterinarian', 'vet', 'veterinary', 'animal health', 'pet care',
    
    // Legal (clearly professional)
    'attorney', 'lawyer', 'law firm', 'legal practice', 'court case', 'litigation',
    'contract law', 'legal document', 'paralegal', 'judge', 'legal defense',
    'public defender', 'legal advice', 'legal research', 'case law',
    
    // Emergency Services (clearly professional)
    'firefighter', 'fire department', 'emergency response', 'paramedic', 'emt',
    'police', 'law enforcement', 'security professional', 'first responder',
    
    // Financial Professional Services (clearly professional)
    'financial advisor', 'investment banker', 'trading professional', 'accountant',
    'tax professional', 'insurance agent', 'financial planning', 'wealth management',
    
    // Specialized Technical Industries
    'aerospace engineer', 'mechanical engineer', 'civil engineer', 'electrical engineer',
    'software engineer professional', 'architect professional', 'construction management',
    
    // Agriculture & Farming (clearly professional)
    'farmer', 'agronomist', 'agricultural specialist', 'crop management', 'livestock management',
    'farming operation', 'agricultural research', 'soil analysis',
    
    // Food Industry Professional
    'chef professional', 'restaurant management', 'food safety inspector', 'culinary professional',
    'food service industry', 'restaurant owner', 'food quality control',
    
    // Real Estate Professional
    'real estate agent', 'property appraiser', 'real estate broker', 'property management',
    'real estate investment', 'property development',
    
    // Education Professional
    'teacher', 'educator', 'school administration', 'curriculum development', 
    'educational institution', 'academic research', 'university professor'
  ];
  
  // Check if tool matches STRICT industry-specific keywords
  const matchesStrictIndustryKeywords = strictIndustryKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword)
  );
  
  // Check for tools that are clearly in professional industry categories
  const professionalIndustryCategories = [
    'healthcare professionals', 'medical ai tools', 'legal professionals',
    'emergency services', 'professional services', 'robotics companies'
  ];
  
  const isInProfessionalCategory = professionalIndustryCategories.some(category => 
    categoryLower.includes(category)
  );
  
  // EXCLUDE general/broad tools that shouldn't be industry-specific
  const generalToolKeywords = [
    'general purpose', 'everyday use', 'personal use', 'hobby', 'entertainment',
    'creative writing', 'art creation', 'music creation', 'video editing',
    'social media', 'content creation', 'blogging', 'personal productivity',
    'time management', 'note taking', 'task management', 'calendar',
    'general ai', 'chatbot', 'assistant', 'helper', 'utility', 'tool',
    'generator', 'creator', 'maker', 'builder', 'analyzer', 'converter'
  ];
  
  const isGeneralTool = generalToolKeywords.some(keyword =>
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword)
  );
  
  // Only return true if it's clearly industry-specific AND not a general tool
  return (matchesStrictIndustryKeywords || isInProfessionalCategory) && !isGeneralTool;
};

// Get the final consolidated categories list
export const getConsolidatedCategories = (): string[] => {
  const uniqueCategories = new Set(Object.values(categoryMapping));
  return Array.from(uniqueCategories).sort();
};
