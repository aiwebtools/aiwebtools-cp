
import { Tool } from "@/types/tools";

export const isHealthAndWellnessTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  const category = tool.category?.toLowerCase() || "";

  // MUCH MORE RESTRICTIVE - Only tools PRIMARILY focused on health/wellness
  const strictHealthKeywords = [
    // Medical & Healthcare (specific)
    'doctor', 'medical', 'healthcare', 'hospital', 'clinic', 'physician', 'nurse',
    'diagnosis', 'treatment', 'therapy', 'patient care', 'clinical',
    
    // Veterinary (specific)
    'veterinarian', 'vet', 'pet care', 'animal health', 'animal doctor',
    
    // Mental Health (specific)  
    'mental health', 'mental wellness', 'therapy', 'counseling', 'psychology',
    'psychiatry', 'depression', 'anxiety', 'stress management',
    
    // Fitness & Wellness (specific)
    'fitness', 'workout', 'exercise', 'gym', 'training', 'nutrition',
    'diet', 'weight loss', 'health coach', 'wellness coach',
    
    // Pharmaceutical (specific)
    'pharmaceutical', 'pharmacy', 'drug', 'medication', 'prescription',
    'medicine', 'supplement', 'vitamin',
    
    // Insurance (specific)
    'insurance', 'health insurance', 'medical insurance', 'claims'
  ];

  // RESTRICTIVE Health categories - only obviously health-related ones
  const strictHealthCategories = [
    'health', 'healthcare', 'medical', 'wellness', 'fitness',
    'mental health', 'veterinary', 'pharmacy', 'pharmaceutical',
    'insurance', 'health & wellness', 'healthcare professionals'
  ];

  // Must have STRONG health indicators in title or be clearly health category
  const hasStrongHealthKeywords = strictHealthKeywords.some(keyword =>
    title.includes(keyword) || description.includes(keyword)
  );

  const isStrictlyHealthCategory = strictHealthCategories.some(healthCat =>
    category.includes(healthCat) || category === healthCat
  );

  // Only count if it's obviously health-related
  const isObviouslyHealth = title.includes('health') || title.includes('medical') || 
    title.includes('doctor') || title.includes('vet') || title.includes('fitness') ||
    title.includes('wellness') || title.includes('therapy');

  const isHealthTool = (hasStrongHealthKeywords && isStrictlyHealthCategory) || isObviouslyHealth;

  if (isHealthTool) {
    console.log(`🏥 HEALTH & WELLNESS (STRICT): ${tool.title} (${tool.category})`);
  }

  return isHealthTool;
};

export const isCreativeAndEntertainmentTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  const category = tool.category?.toLowerCase() || "";
  const tags = tool.tags?.map(tag => tag.toLowerCase()) || [];

  // MUCH MORE RESTRICTIVE - Only tools PRIMARILY focused on creativity/entertainment
  const coreCreativeKeywords = [
    // Art & Design (specific)
    'art generator', 'digital art', 'artwork', 'illustration', 'drawing', 'painting', 'sketch artist',
    'graphic design', 'logo design', 'poster design', 'creative design', 'visual art',
    
    // Entertainment & Gaming (specific)  
    'game', 'gaming', 'entertainment', 'fun', 'play', 'trivia', 'joke', 'humor', 'meme',
    'movie maker', 'film maker', 'animation', 'cartoon', 'character creation',
    
    // Music & Audio Creative (specific)
    'music creation', 'music maker', 'song', 'composer', 'music video', 'audio creation',
    'sound effects', 'music generation', 'beat maker', 'melody',
    
    // Writing Creative (specific)
    'story', 'novel', 'book writer', 'creative writing', 'script writer', 'playwright',
    'poetry', 'children\'s book', 'coloring book', 'comic',
    
    // Performance & Theater (specific)
    'theater', 'stage', 'performance', 'actor', 'drama', 'comedy', 'musical',
    'performing arts', 'dance', 'choreography'
  ];

  // RESTRICTIVE Creative categories - only obviously creative ones
  const strictCreativeCategories = [
    'creative & entertainment',
    'creative design', 
    'art', 'arts',
    'entertainment',
    'gaming', 'games',
    'music creation',
    'creative writing',
    'design & graphics',
    'multimedia & creative'
  ];

  // Must have STRONG creative indicators
  const hasStrongCreativeKeywords = coreCreativeKeywords.some(keyword =>
    title.includes(keyword) ||
    description.includes(keyword)
  );

  // Must be in a clearly creative category
  const isStrictlyCreativeCategory = strictCreativeCategories.some(creativeCat =>
    category.includes(creativeCat) || category === creativeCat
  );

  // Only count if BOTH conditions are met OR if it's obviously creative by title
  const isObviouslyCreative = title.includes('art') || title.includes('design') || 
    title.includes('game') || title.includes('entertainment') || title.includes('creative') ||
    title.includes('music') || title.includes('video maker') || title.includes('animation');

  const isCreativeTool = (hasStrongCreativeKeywords && isStrictlyCreativeCategory) || isObviouslyCreative;

  if (isCreativeTool) {
    console.log(`🎭 CREATIVE & ENTERTAINMENT (STRICT): ${tool.title} (${tool.category})`);
  }

  return isCreativeTool;
};
