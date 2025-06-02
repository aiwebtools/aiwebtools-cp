
import { Tool } from "@/types/tools";

// COMPREHENSIVE Helper function to detect ALL industry-specific tools
export const isIndustrySpecificTool = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // COMPREHENSIVE industry keywords covering ALL major industries
  const industryKeywords = [
    // Legal & Government
    'legal', 'law', 'attorney', 'lawyer', 'court', 'judge', 'contract', 'litigation',
    'compliance', 'legislation', 'defender', 'justice', 'paralegal', 'government',
    'civic', 'policy', 'regulation', 'constitutional', 'criminal law', 'civil law',
    'corporate law', 'intellectual property', 'patent', 'trademark', 'copyright',
    'real estate law', 'family law', 'immigration law', 'tax law', 'employment law',
    
    // Education & Academic
    'education', 'learning', 'educational', 'academic', 'study', 'course', 'curriculum',
    'teaching', 'teacher', 'tutor', 'tutoring', 'lesson', 'homework', 'quiz', 'test',
    'training', 'university', 'college', 'school', 'degree', 'certification',
    'insect study', 'entomology', 'species research', 'biological studies',
    'research', 'scientific', 'laboratory', 'experiment', 'analysis',
    
    // Creative Arts & Design
    'graphic design', 'design', 'art', 'creative', 'illustration', 'photography',
    'video editing', 'animation', 'music', 'audio', 'tattoo', 'sketch', 'drawing',
    'painting', 'sculpture', 'pottery', 'crafts', 'fashion', 'interior design',
    'architecture', 'typography', 'branding', 'logo', 'visual', 'aesthetic',
    'multimedia', 'digital art', 'concept art', 'character design', 'game art',
    
    // Culinary & Food Industry
    'cooking', 'chef', 'culinary', 'recipe', 'food', 'restaurant', 'kitchen',
    'baking', 'pastry', 'nutrition', 'mixologist', 'bartender', 'cocktail',
    'food quality', 'cuisine', 'gastronomy', 'menu', 'dining', 'catering',
    'hospitality', 'beverage', 'wine', 'brewing', 'food safety', 'food service',
    
    // Agriculture & Farming
    'farming', 'agriculture', 'crop', 'livestock', 'harvest', 'soil', 'irrigation',
    'greenhouse', 'organic', 'pesticide', 'fertilizer', 'agronomist', 'agronomy',
    'horticulture', 'aquaculture', 'forestry', 'sustainable farming', 'precision agriculture',
    
    // Real Estate & Property
    'real estate', 'property', 'housing', 'mortgage', 'rental', 'appraisal',
    'land', 'construction', 'renovation', 'home', 'building', 'architecture',
    'urban planning', 'zoning', 'development', 'commercial real estate',
    
    // Finance & Trading
    'finance', 'trading', 'investment', 'banking', 'insurance', 'accounting',
    'tax', 'credit', 'loan', 'budget', 'financial planning', 'wealth management',
    'cryptocurrency', 'blockchain', 'fintech', 'payment processing', 'mortgages',
    
    // Transportation & Automotive
    'automotive', 'car', 'vehicle', 'transportation', 'logistics', 'shipping',
    'trucking', 'aviation', 'maritime', 'railway', 'fleet management', 'supply chain',
    
    // Manufacturing & Industrial
    'manufacturing', 'industrial', 'factory', 'production', 'assembly',
    'quality control', 'supply chain', 'robotics', 'automation', 'machinery',
    'operations', 'process optimization', 'lean manufacturing', 'six sigma',
    
    // Energy & Utilities
    'energy', 'solar', 'renewable', 'electricity', 'oil', 'gas', 'utility',
    'power generation', 'grid', 'sustainable', 'wind power', 'hydroelectric',
    'nuclear energy', 'geothermal', 'energy efficiency', 'carbon footprint',
    
    // Entertainment & Media
    'entertainment', 'media', 'broadcasting', 'journalism', 'publishing',
    'film', 'television', 'radio', 'gaming', 'sports', 'theater', 'performance',
    'streaming', 'podcast', 'content creation', 'social media', 'influencer',
    
    // Science & Research
    'research', 'laboratory', 'scientific', 'experiment', 'analysis',
    'archaeology', 'geology', 'biology', 'chemistry', 'physics',
    'astronomy', 'meteorology', 'environmental science', 'marine biology',
    'genetics', 'microbiology', 'biochemistry', 'neuroscience', 'psychology',
    
    // Emergency & Safety Services
    'emergency', 'firefighter', 'police', 'security', 'safety', 'rescue',
    'disaster', 'crisis management', 'first aid', 'paramedic', 'emt',
    'homeland security', 'cybersecurity', 'surveillance', 'investigation',
    
    // Retail & E-commerce
    'retail', 'e-commerce', 'shopping', 'merchandising', 'inventory',
    'customer service', 'sales', 'marketing', 'advertising', 'point of sale',
    'supply chain', 'distribution', 'fulfillment', 'logistics',
    
    // Tourism & Hospitality
    'tourism', 'hospitality', 'hotel', 'travel', 'vacation', 'booking',
    'restaurant', 'catering', 'event planning', 'cruise', 'airline',
    'destination management', 'tour guide', 'concierge', 'resort',
    
    // Telecommunications & IT
    'telecommunications', 'telecom', 'network', 'wireless', 'internet',
    'communication', 'phone', 'mobile', 'broadband', 'data center',
    'cloud computing', 'software development', 'cybersecurity', 'it support',
    
    // Textiles & Fashion
    'fashion', 'textile', 'clothing', 'apparel', 'fabric', 'garment',
    'styling', 'trend', 'runway', 'boutique', 'manufacturing', 'retail fashion',
    
    // Sports & Recreation
    'sports', 'fitness', 'recreation', 'athletic', 'coaching', 'training',
    'exercise', 'gym', 'wellness', 'outdoor', 'adventure', 'competition',
    
    // Specialized Industries
    'appraisal', 'valuation', 'collectibles', 'antiques', 'auction',
    'investigation', 'forensics', 'detective', 'surveillance', 'background check',
    'consulting', 'advisory', 'strategy', 'management', 'human resources',
    'recruitment', 'staffing', 'training', 'development', 'organizational'
  ];
  
  // Check if tool matches any industry-specific keywords
  const matchesIndustryKeywords = industryKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  );
  
  // Also include tools that are already in known industry categories
  const industryCategories = [
    'legal', 'education', 'creative', 'entertainment',
    'professional services', 'emergency', 'finance', 'specialized', 'robotics',
    'design', 'culinary', 'food', 'agriculture',
    'real estate', 'property', 'automotive', 'transportation', 'manufacturing',
    'energy', 'utilities', 'science', 'research', 'retail', 'tourism',
    'hospitality', 'telecommunications', 'fashion', 'sports', 'fitness'
  ];
  
  const isInIndustryCategory = industryCategories.some(category => 
    categoryLower.includes(category)
  );
  
  const isIndustryTool = matchesIndustryKeywords || isInIndustryCategory;
  
  if (isIndustryTool) {
    console.log(`🏭 INDUSTRY: Detected industry-specific tool: ${tool.title} (Category: ${tool.category})`);
  }
  
  return isIndustryTool;
};
