
import { Tool } from "@/types/tools";

// STRICT helper function to detect ONLY truly industry-specific tools
// This should NOT include general creative, video, audio, education, or health tools
// It should only include tools that are SPECIALIZED for a particular industry/profession
export const isIndustrySpecificTool = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // EXCLUDE general creative/multimedia tools - these belong in other categories
  const excludePatterns = [
    'video generation', 'video editing', 'video maker', 'video creator',
    'image generation', 'image editing', 'image maker', 'photo editing',
    'audio generation', 'music generation', 'voice synthesis',
    'text to video', 'text to image', 'text to speech', 'text to audio',
    'ai chat', 'chatbot', 'chat assistant', 'writing assistant',
    'code generation', 'coding assistant', 'programming assistant',
    'general assistant', 'all-purpose', 'multipurpose',
    'ai tools finder', 'tool finder', 'tools directory'
  ];
  
  const isExcluded = excludePatterns.some(pattern => 
    titleLower.includes(pattern) || descriptionLower.includes(pattern)
  );
  
  if (isExcluded) {
    return false;
  }
  
  // STRICT industry-specific keywords - only very specific professions/industries
  const strictIndustryKeywords = [
    // Legal (but not "legislation" in general content)
    'attorney', 'lawyer', 'law firm', 'legal defense', 'paralegal', 'public defender',
    'contract review', 'litigation', 'court case', 'legal document',
    
    // Medical/Healthcare professionals (not general wellness)
    'doctor', 'physician', 'surgeon', 'nurse', 'pharmacist', 'dentist',
    'veterinarian', 'vet ', 'pet care', 'clinical', 'diagnosis tool',
    'pharmaceutical', 'pharma research', 'medical professional',
    
    // Trades & Skilled Labor
    'electrician', 'plumber', 'carpenter', 'mechanic', 'hvac',
    'welder', 'machinist', 'contractor', 'construction crew',
    'home renovator', 'home renovation', 'repair service',
    
    // Agriculture & Farming
    'farmer', 'farming', 'agronomist', 'crop management', 'livestock',
    'agricultural', 'agronomy', 'harvest', 'soil analysis', 'irrigation',
    
    // Emergency Services
    'firefighter', 'fire department', 'paramedic', 'emt', 'first responder',
    'police', 'law enforcement', 'security officer', 'rescue team',
    
    // Real Estate specific
    'real estate agent', 'realtor', 'property appraiser', 'home inspector',
    'mortgage broker', 'property manager', 'land assessor',
    
    // Finance specific professionals
    'accountant', 'tax preparer', 'financial advisor', 'insurance agent',
    'loan officer', 'credit analyst', 'investment advisor',
    
    // Food Industry professionals
    'chef', 'culinary', 'restaurant manager', 'food inspector',
    'mixologist', 'bartender', 'sommelier', 'catering',
    
    // Scientific Research (specific)
    'archaeologist', 'geologist', 'marine biologist', 'entomologist',
    'criminologist', 'forensic', 'laboratory technician',
    
    // Specialized Appraisal/Valuation
    'antique appraiser', 'art appraiser', 'collectible appraisal',
    'jewelry appraiser', 'vintage valuation', 'material valuation',
    
    // Insurance specific
    'insurance claims', 'claims adjuster', 'insurance underwriter',
    
    // Automotive specific
    'auto mechanic', 'auto repair', 'car dealer', 'automobile',
    
    // Energy sector
    'oil and gas', 'drill', 'solar installer', 'energy auditor',
    'utility technician', 'power plant',
    
    // Outdoor/Nature professions
    'fisherman', 'hunting guide', 'park ranger', 'wildlife',
    'forestry', 'conservation', 'survivalist',
    
    // Specialized niche
    'tattoo artist', 'tattoo designer', 'body art',
    'firearms instructor', 'gun safety', 'shooting range',
    'cannabis', 'dispensary', 'hemp',
    'mushroom', 'fungus', 'mycology'
  ];
  
  // Check if tool matches STRICT industry-specific keywords
  const matchesStrictKeywords = strictIndustryKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword)
  );
  
  // Also check for industry-specific categories (very strict)
  const strictIndustryCategories = [
    'legal professionals', 'healthcare professionals', 'emergency services',
    'professional services', 'specialized niche', 'specialized tools',
    'industry specific', 'trade professionals', 'field specialists'
  ];
  
  const isInStrictIndustryCategory = strictIndustryCategories.some(category => 
    categoryLower.includes(category)
  );
  
  const isIndustryTool = matchesStrictKeywords || isInStrictIndustryCategory;
  
  if (isIndustryTool) {
    console.log(`🏭 INDUSTRY: Detected industry-specific tool: ${tool.title} (Category: ${tool.category})`);
  }
  
  return isIndustryTool;
};
