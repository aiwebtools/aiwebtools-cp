
import { Tool } from "@/types/tools";

// STRICT Helper function to detect ONLY professional industry-specific tools
export const isIndustrySpecificTool = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // EXCLUDE video, image, creative tools from industry category
  const excludeKeywords = [
    'video', 'image', 'photo', 'art', 'design', 'creative', 'music', 'audio',
    'generator', 'maker', 'creator', 'editing', 'animation', 'multimedia'
  ];
  
  const hasExcludedKeywords = excludeKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    categoryLower.includes(keyword)
  );
  
  if (hasExcludedKeywords) {
    return false;
  }
  
  // STRICT industry-specific professional keywords
  const strictIndustryKeywords = [
    // Legal & Government
    'criminologist', 'legal', 'law', 'attorney', 'lawyer', 'defender', 'legislation',
    'contract', 'compliance', 'paralegal', 'judicial', 'court', 'justice',
    
    // Healthcare & Medical  
    'doctor', 'medical', 'healthcare', 'physician', 'clinic', 'hospital',
    'pharmaceutical', 'pharmacy', 'veterinarian', 'vet', 'patient care',
    
    // Education & Academic
    'professor', 'teacher', 'academic', 'university', 'college', 'school',
    'curriculum', 'educational research', 'academic research',
    
    // Science & Research
    'archaeologist', 'scientist', 'researcher', 'laboratory', 'geology',
    'biology', 'chemistry', 'physics', 'astronomy', 'meteorology',
    'genetics', 'microbiology', 'neuroscience', 'psychology',
    
    // Emergency & Safety
    'firefighter', 'emergency', 'police', 'security', 'safety', 'rescue',
    'paramedic', 'emt', 'first aid', 'disaster management',
    
    // Finance & Trading (Professional)
    'financial advisor', 'investment banker', 'trader', 'accountant',
    'insurance agent', 'mortgage broker', 'tax professional',
    
    // Real Estate Professional
    'real estate agent', 'property appraiser', 'property assessor',
    'property manager', 'real estate broker',
    
    // Agriculture & Farming
    'farmer', 'agriculturalist', 'agronomist', 'veterinarian',
    'crop specialist', 'livestock manager',
    
    // Engineering & Technical
    'engineer', 'technician', 'architect', 'construction manager',
    'project manager', 'quality control', 'inspector',
    
    // Culinary Professional
    'chef', 'culinary', 'food inspector', 'restaurant manager',
    'sommelier', 'nutritionist', 'dietitian',
    
    // Transportation & Logistics
    'pilot', 'driver', 'logistics coordinator', 'supply chain manager',
    'shipping coordinator', 'fleet manager',
    
    // Specialized Services
    'appraiser', 'valuator', 'inspector', 'consultant', 'advisor',
    'specialist', 'expert', 'professional services'
  ];
  
  // Check if tool matches professional industry keywords
  const matchesIndustryKeywords = strictIndustryKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  );
  
  // Check for specific professional tool patterns
  const professionalPatterns = [
    /gpt$/i, // Tools ending with GPT (like Criminologist GPT)
    /assistant$/i, // Professional assistants
    /advisor$/i, // Professional advisors
    /specialist$/i, // Specialists
    /expert$/i, // Experts
    /professional$/i // Professionals
  ];
  
  const matchesProfessionalPattern = professionalPatterns.some(pattern => 
    pattern.test(tool.title)
  );
  
  // Also include tools that are explicitly in professional categories
  const professionalCategories = [
    'healthcare professionals', 'legal professionals', 'emergency services',
    'professional services', 'specialized tools', 'specialized & niche',
    'specialized ai tools', 'technical & utility tools'
  ];
  
  const isInProfessionalCategory = professionalCategories.some(category => 
    categoryLower.includes(category.toLowerCase())
  );
  
  const isIndustryTool = matchesIndustryKeywords || matchesProfessionalPattern || isInProfessionalCategory;
  
  if (isIndustryTool) {
    console.log(`🏭 INDUSTRY: Detected professional industry tool: ${tool.title} (Category: ${tool.category})`);
  }
  
  return isIndustryTool;
};
