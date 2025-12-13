
import { Tool } from "@/types/tools";

// EXPANDED helper function to detect industry-specific tools
// This includes tools specialized for particular industries/professions
export const isIndustrySpecificTool = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  const haystack = `${titleLower} ${descriptionLower} ${tagsLower} ${categoryLower}`;
  
  // EXPANDED industry-specific keywords
  const industryKeywords = [
    // Legal
    'attorney', 'lawyer', 'law firm', 'legal', 'paralegal', 'public defender',
    'contract review', 'litigation', 'court', 'legislation', 'law', 'judicial',
    'compliance', 'regulatory', 'patent', 'trademark', 'copyright',
    
    // Medical/Healthcare professionals
    'doctor', 'physician', 'surgeon', 'nurse', 'pharmacist', 'dentist',
    'veterinarian', 'vet', 'pet care', 'animal health', 'clinical', 'diagnosis',
    'pharmaceutical', 'pharma', 'medical', 'healthcare', 'hospital', 'clinic',
    'patient', 'treatment', 'prescription', 'drug', 'medicine', 'therapy',
    
    // Trades & Skilled Labor
    'electrician', 'plumber', 'carpenter', 'mechanic', 'hvac', 'welder',
    'machinist', 'contractor', 'construction', 'home renovator', 'renovation',
    'repair', 'maintenance', 'handyman', 'technician', 'installer',
    
    // Agriculture & Farming
    'farmer', 'farming', 'agronomist', 'crop', 'livestock', 'agricultural',
    'agronomy', 'harvest', 'soil', 'irrigation', 'ranch', 'garden', 'plant',
    
    // Emergency Services
    'firefighter', 'fire department', 'paramedic', 'emt', 'first responder',
    'police', 'law enforcement', 'security', 'rescue', 'emergency',
    
    // Real Estate
    'real estate', 'realtor', 'property', 'home inspector', 'mortgage',
    'land', 'housing', 'residential', 'commercial property',
    
    // Finance professionals
    'accountant', 'tax', 'taxes', 'financial advisor', 'insurance',
    'loan', 'credit', 'investment', 'banking', 'audit', 'bookkeeping',
    'trader', 'trading', 'stock', 'forex', 'crypto trading',
    
    // Food Industry
    'chef', 'culinary', 'restaurant', 'food inspector', 'food quality',
    'mixologist', 'bartender', 'sommelier', 'catering', 'kitchen', 'cook',
    
    // Scientific Research
    'archaeologist', 'archaeology', 'geologist', 'marine biologist',
    'criminologist', 'forensic', 'laboratory', 'scientist', 'researcher',
    'genome', 'dna', 'genetic', 'biology', 'chemistry', 'physics',
    
    // Appraisal & Valuation
    'antique', 'appraiser', 'appraisal', 'collectible', 'valuation',
    'jewelry', 'vintage', 'art appraisal', 'material valuation',
    
    // Automotive
    'auto', 'automobile', 'car', 'vehicle', 'automotive', 'dealer',
    
    // Energy sector
    'oil', 'gas', 'drill', 'solar', 'energy', 'power plant', 'utility',
    
    // Outdoor/Nature professions
    'fisherman', 'fishing', 'hunting', 'park ranger', 'wildlife',
    'forestry', 'conservation', 'survivalist', 'outdoor',
    
    // Specialized niche
    'tattoo', 'body art', 'firearms', 'gun safety', 'shooting',
    'cannabis', 'dispensary', 'hemp', 'mushroom', 'fungus', 'mycology',
    
    // HR & Recruitment
    'hr', 'human resources', 'recruitment', 'hiring', 'resume', 'job finder',
    'career', 'employment', 'staffing', 'onboarding',
    
    // Travel & Hospitality
    'travel', 'tourism', 'hotel', 'hospitality', 'flight', 'vacation',
    'trip', 'booking', 'destination'
  ];
  
  const matchesKeywords = industryKeywords.some(keyword => haystack.includes(keyword));
  
  // Industry-specific categories
  const industryCategories = [
    'legal', 'healthcare', 'medical', 'professional', 'trade', 'agriculture',
    'emergency', 'real estate', 'finance', 'insurance', 'food', 'culinary',
    'scientific', 'research', 'appraisal', 'automotive', 'energy', 'outdoor',
    'specialized', 'niche', 'industry', 'hr', 'recruitment', 'travel', 'hospitality'
  ];
  
  const isIndustryCategory = industryCategories.some(cat => categoryLower.includes(cat));
  
  return matchesKeywords || isIndustryCategory;
};
