
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

  if (false && isHealthTool) {
    if (import.meta.env.DEV) console.log(`🏥 HEALTH & WELLNESS (STRICT): ${tool.title} (${tool.category})`);
  }

  return isHealthTool;
};

export const isCreativeAndEntertainmentTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  const description = tool.description.toLowerCase();
  const category = tool.category?.toLowerCase() || "";
  const tags = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || [];

  // EXPANDED Creative & Entertainment keywords
  const coreCreativeKeywords = [
    // Art & Design
    'art', 'artist', 'artwork', 'illustration', 'illustrator', 'drawing', 'painting',
    'sketch', 'graphic design', 'logo', 'poster', 'creative design', 'visual',
    'design', 'designer', 'creative', 'creativity', 'artistic', 'canvas',
    
    // Entertainment & Gaming
    'game', 'gaming', 'gamer', 'entertainment', 'fun', 'play', 'trivia', 'quiz game',
    'joke', 'humor', 'meme', 'comedy', 'funny', 'celebrity', 'fortune teller',
    'character', 'avatar', 'virtual', 'interactive', 'simulation', 'sim',
    
    // Video & Film
    'movie', 'film', 'cinema', 'animation', 'animate', 'animator', 'cartoon',
    'video maker', 'video creator', 'trailer', 'scene maker', 'storyboard',
    
    // Music & Audio Creative
    'music', 'musical', 'song', 'composer', 'melody', 'beat', 'audio creation',
    'sound effects', 'music video', 'band', 'musician', 'instrument',
    
    // Writing Creative
    'story', 'storytelling', 'novel', 'book writer', 'creative writing', 'script',
    'playwright', 'poetry', 'poem', 'poet', 'children\'s book', 'coloring book',
    'comic', 'fiction', 'narrative', 'author',
    
    // Performance & Theater
    'theater', 'theatre', 'stage', 'performance', 'performer', 'actor', 'actress',
    'drama', 'musical', 'dance', 'choreography', 'performing arts', 'show',
    
    // Photography & Visual
    'photo', 'photography', 'photographer', 'image', 'picture', 'portrait',
    'landscape', 'filter', 'editing', 'enhancement', 'collage',
    
    // Fashion & Style
    'fashion', 'style', 'outfit', 'wardrobe', 'clothing', 'makeup', 'beauty',
    'tattoo', 'hair', 'restyle'
  ];

  // Creative categories
  const strictCreativeCategories = [
    'creative', 'entertainment', 'art', 'design', 'gaming', 'music',
    'video', 'multimedia', 'media', 'photo', 'image', 'graphics'
  ];

  const haystack = `${title} ${description} ${category}`;

  const hasStrongCreativeKeywords = coreCreativeKeywords.some(keyword =>
    haystack.includes(keyword)
  );

  const isStrictlyCreativeCategory = strictCreativeCategories.some(creativeCat =>
    category.includes(creativeCat)
  );

  return hasStrongCreativeKeywords || isStrictlyCreativeCategory;
};
