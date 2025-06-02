
import { Tool } from "@/types/tools";

// PRECISE Helper function to detect ONLY truly industry-specific tools
export const isIndustrySpecificTool = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // EXCLUDE creative/entertainment tools that are NOT industry-specific
  const excludeKeywords = [
    'art generator', 'image generator', 'creative', 'entertainment', 'game', 'gaming',
    'movie', 'music video', 'coloring book', 'tattoo design', 'avatar', 'meme',
    'fortune teller', 'time machine', 'history', 'talk to', 'celebrity', 'character',
    'story', 'book writer', 'script writer', 'trivia', 'quiz', 'fun', 'hobby',
    'personal', 'lifestyle', 'dream', 'imagination', 'fantasy', 'mystical',
    'spiritual', 'philosophy', 'wisdom', 'ancient', 'mythology', 'gods',
    'resurrection', 'immortalize', 'time travel', 'alternate reality'
  ];
  
  // Check if tool should be excluded (not industry-specific)
  const shouldExclude = excludeKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword)
  );
  
  if (shouldExclude) {
    console.log(`🚫 EXCLUDING non-industry tool: ${tool.title}`);
    return false;
  }
  
  // STRICT industry keywords - only for professional/business use
  const industryKeywords = [
    // Medical & Healthcare (PROFESSIONAL)
    'medical', 'healthcare', 'doctor', 'physician', 'nurse', 'hospital', 'clinic',
    'patient', 'diagnosis', 'treatment', 'pharmaceutical', 'pharmacy', 'medicine',
    'dental', 'veterinarian', 'vet', 'health professional', 'medical assistant',
    
    // Legal & Government (PROFESSIONAL)
    'legal', 'law', 'attorney', 'lawyer', 'court', 'judge', 'contract', 'litigation',
    'compliance', 'legislation', 'defender', 'justice', 'paralegal', 'government',
    'civic', 'policy', 'regulation', 'constitutional', 'criminal law', 'civil law',
    
    // Financial Services (PROFESSIONAL)
    'banking', 'finance professional', 'financial advisor', 'accountant', 'accounting',
    'tax professional', 'insurance agent', 'credit analyst', 'loan officer',
    'investment advisor', 'financial planning', 'audit', 'bookkeeping',
    
    // Education (PROFESSIONAL)
    'teacher', 'educator', 'professor', 'instructor', 'tutor', 'school administrator',
    'curriculum', 'educational institution', 'academic', 'university', 'college',
    'training professional', 'educational consultant',
    
    // Engineering & Technical (PROFESSIONAL)
    'engineer', 'engineering', 'technical', 'architect', 'construction', 'building',
    'mechanical engineer', 'electrical engineer', 'civil engineer', 'software engineer',
    'project manager', 'technical consultant',
    
    // Real Estate (PROFESSIONAL)
    'real estate agent', 'realtor', 'property manager', 'real estate broker',
    'property appraisal', 'real estate professional', 'property development',
    
    // Agriculture & Farming (PROFESSIONAL)
    'farmer', 'agriculture professional', 'agronomist', 'farming', 'agricultural',
    'crop management', 'livestock', 'agricultural consultant',
    
    // Emergency Services (PROFESSIONAL)
    'firefighter', 'police', 'emergency', 'first responder', 'paramedic', 'emt',
    'security professional', 'safety inspector', 'emergency management',
    
    // Food Industry (PROFESSIONAL)
    'chef professional', 'restaurant owner', 'food service', 'culinary professional',
    'food safety inspector', 'nutritionist', 'dietitian', 'food quality',
    
    // Transportation & Logistics (PROFESSIONAL)
    'logistics', 'supply chain', 'transportation', 'shipping', 'freight',
    'fleet management', 'warehouse', 'distribution',
    
    // Manufacturing & Industrial (PROFESSIONAL)
    'manufacturing', 'industrial', 'factory', 'production manager',
    'quality control', 'operations manager', 'plant manager',
    
    // Energy & Utilities (PROFESSIONAL)
    'energy professional', 'utility', 'power generation', 'solar installer',
    'energy consultant', 'utilities management',
    
    // Retail & Sales (PROFESSIONAL)
    'sales professional', 'retail manager', 'store manager', 'merchandising',
    'customer service professional', 'sales representative'
  ];
  
  // Check if tool matches STRICT industry-specific keywords
  const matchesIndustryKeywords = industryKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  );
  
  // Also include tools that are already in known PROFESSIONAL industry categories
  const professionalCategories = [
    'healthcare professionals', 'legal professionals', 'emergency services',
    'professional services', 'financial services', 'medical', 'healthcare',
    'legal', 'finance', 'education professionals', 'engineering',
    'real estate professionals', 'agriculture professionals'
  ];
  
  const isInProfessionalCategory = professionalCategories.some(category => 
    categoryLower.includes(category)
  );
  
  const isIndustryTool = matchesIndustryKeywords || isInProfessionalCategory;
  
  if (isIndustryTool) {
    console.log(`🏭 INDUSTRY: Detected industry-specific tool: ${tool.title} (Category: ${tool.category})`);
  }
  
  return isIndustryTool;
};
