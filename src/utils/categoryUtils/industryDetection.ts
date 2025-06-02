
import { Tool } from "@/types/tools";

// STRICT Helper function to detect ONLY truly industry-specific tools
export const isIndustrySpecificTool = (tool: Tool): boolean => {
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
  const isIndustryTool = (matchesStrictIndustryKeywords || isInProfessionalCategory) && !isGeneralTool;
  
  if (isIndustryTool) {
    console.log(`🏭 INDUSTRY: Detected truly industry-specific tool: ${tool.title} (Category: ${tool.category})`);
  } else if (categoryLower.includes('industry') || categoryLower.includes('professional')) {
    console.log(`📦 MOVING TO OTHER: ${tool.title} - not truly industry-specific`);
  }
  
  return isIndustryTool;
};
