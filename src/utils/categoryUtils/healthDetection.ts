
import { Tool } from "@/types/tools";

// COMPREHENSIVE Helper function to detect ALL health and wellness related tools
export const isHealthAndWellnessTool = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // COMPREHENSIVE health and wellness keywords - EXPANDED to catch ALL related tools
  const healthWellnessKeywords = [
    // Core health terms
    'health', 'medical', 'wellness', 'healthcare', 'medicine', 'doctor', 'physician',
    'nurse', 'pharmacy', 'pharmaceutical', 'clinic', 'hospital', 'patient', 'therapy',
    'treatment', 'diagnosis', 'mental health', 'dental', 'veterinary', 'fitness',
    'nutrition', 'diet', 'exercise', 'lifestyle', 'personal care', 'skincare',
    'cannabis', 'insurance claims', 'genome', 'pharma', 'drug', 'medication',
    'therapeutic', 'clinical', 'surgical', 'psychiatry', 'psychology', 'counseling',
    'rehabilitation', 'recovery', 'addiction', 'substance abuse', 'pain management',
    'chronic illness', 'disease', 'disorder', 'syndrome', 'condition', 'symptom',
    'prevention', 'screening', 'immunization', 'vaccination', 'public health',
    'biomedical', 'biotechnology', 'life sciences', 'clinical trials', 'telemedicine',
    
    // Mental health and wellness
    'mental wellness', 'emotional support', 'stress management', 'anxiety', 'depression',
    'ptsd', 'trauma', 'grief', 'bereavement', 'mindfulness', 'meditation', 'yoga',
    'mental health', 'psychological', 'psychiatry', 'therapy', 'counseling', 'cbt',
    'cognitive behavioral therapy', 'emotional wellness', 'mental wellbeing',
    
    // Spiritual and philosophy wellness
    'spiritual', 'spirituality', 'philosophy', 'philosophical', 'wisdom', 'enlightenment',
    'meditation', 'mindfulness', 'consciousness', 'awakening', 'inner peace',
    'self discovery', 'personal growth', 'life coaching', 'wellness coaching',
    'holistic health', 'alternative medicine', 'naturopathy', 'homeopathy',
    'energy healing', 'chakra', 'aura', 'crystal healing', 'reiki',
    
    // Relationship and social wellness
    'marriage', 'relationship', 'couples', 'family', 'social wellness', 'communication',
    'intimacy', 'love', 'dating', 'marriage counseling', 'relationship therapy',
    'family therapy', 'social support', 'community wellness', 'marriage mender',
    
    // Physical wellness and fitness
    'fitness', 'exercise', 'workout', 'physical therapy', 'sports medicine',
    'nutrition', 'diet', 'weight management', 'body wellness', 'physical health',
    'strength training', 'cardio', 'flexibility', 'mobility', 'rehabilitation',
    
    // Lifestyle and personal wellness
    'lifestyle', 'life balance', 'work life balance', 'stress reduction',
    'relaxation', 'sleep', 'rest', 'recovery', 'rejuvenation', 'self care',
    'personal development', 'self improvement', 'life enhancement',
    'quality of life', 'wellbeing', 'life satisfaction', 'happiness',
    
    // Beauty and personal care
    'skincare', 'beauty', 'cosmetics', 'dermatology', 'skin health',
    'anti aging', 'beauty advice', 'personal care', 'grooming',
    
    // Food and culinary wellness
    'culinary', 'cooking', 'chef', 'nutrition', 'healthy eating', 'diet',
    'food quality', 'food safety', 'organic', 'natural foods', 'supplements',
    'mixologist', 'food inspector',
    
    // Veterinary and pet wellness
    'veterinary', 'pet health', 'animal wellness', 'pet care', 'animal medicine',
    
    // Additional specific terms from tool names
    'alan watts', 'mary magdalene', 'sophia aeterna', 'talk to the gods',
    'fortune teller', 'dream interpreter', 'manifestation', 'inner child',
    'stress relief', 'habit builder', 'life coach', 'purpose finder',
    'gratitude', 'mindfulness mentor', 'self-esteem', 'clarity coach'
  ];
  
  // Specific tool names that should DEFINITELY be in health & wellness
  const specificHealthTools = [
    'mental wellness gpt', 'personalized dr. gpt', 'doctor gpt', 'veterinarian gpt',
    'pharmaceutical assistant gpt', 'pharma research pro', 'genome gpt', 'marriage mender gpt',
    'skin care gpt', 'skincare gpt', 'dental gpt', 'cannabis gpt', 'insurance claims gpt',
    'food quality inspector gpt', 'mixologist gpt', 'chef', 'culinary assistant',
    'alan watts gpt', 'mary magdalene gpt', 'talk to the gods', 'sophia aeterna',
    'fortune teller gpt', 'wellness coach', 'fitness coach', 'nutrition advisor',
    'therapy assistant', 'meditation guide', 'mindfulness coach', 'spiritual guide',
    'life coach', 'relationship counselor', 'marriage advisor', 'family therapist',
    'dream interpreter', 'manifestation mentor', 'inner child healer', 'stress relief coach',
    'habit builder gpt', 'purpose finder gpt', 'gratitude guide gpt', 'mindfulness mentor gpt',
    'self-esteem booster gpt', 'clarity coach gpt', 'name insight research & predictor gpt'
  ];
  
  // Check if tool name explicitly contains "health" or "wellness"
  const hasHealthInName = titleLower.includes('health') || 
                         titleLower.includes('wellness') || 
                         titleLower.includes('medical') ||
                         titleLower.includes('dr.') ||
                         titleLower.includes('doctor');
  
  // Check if it's a specific health tool
  const isSpecificHealthTool = specificHealthTools.some(healthTool => 
    titleLower.includes(healthTool) || titleLower === healthTool ||
    descriptionLower.includes(healthTool)
  );
  
  // Check against comprehensive health keywords
  const isHealthByKeyword = healthWellnessKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  );
  
  // Check if category explicitly contains health-related terms
  const isHealthCategory = categoryLower.includes('health') || 
                          categoryLower.includes('medical') || 
                          categoryLower.includes('wellness') ||
                          categoryLower.includes('healthcare') ||
                          categoryLower.includes('pharma') ||
                          categoryLower.includes('fitness') ||
                          categoryLower.includes('nutrition') ||
                          categoryLower.includes('lifestyle') ||
                          categoryLower.includes('personal') ||
                          categoryLower.includes('spiritual');
  
  const isHealthTool = hasHealthInName || isSpecificHealthTool || isHealthByKeyword || isHealthCategory;
  
  if (isHealthTool) {
    console.log(`🏥 HEALTH & WELLNESS: Detected tool: ${tool.title} (Category: ${tool.category})`);
  }
  
  return isHealthTool;
};

// Helper function to detect creative and entertainment tools
export const isCreativeAndEntertainmentTool = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descriptionLower = tool.description.toLowerCase();
  const tagsLower = tool.tags?.map(tag => tag.toLowerCase()).join(' ') || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  
  // Creative and entertainment keywords
  const creativeKeywords = [
    // Core creative terms
    'creative', 'entertainment', 'art', 'design', 'music', 'video', 'movie', 'film',
    'game', 'gaming', 'fun', 'play', 'entertainment', 'media', 'artistic', 'visual',
    'audio', 'sound', 'voice', 'singing', 'dancing', 'performance', 'theater',
    'drama', 'comedy', 'sketch', 'drawing', 'painting', 'illustration', 'graphic',
    'animation', 'cartoon', 'character', 'story', 'narrative', 'fiction', 'fantasy',
    'adventure', 'mystery', 'romance', 'action', 'thriller', 'horror', 'sci-fi',
    
    // Specific creative tools
    'coloring book', 'tattoo', 'celebrity chat', 'trivia', 'quiz', 'game design',
    'movie maker', 'video maker', 'music video', 'script writer', 'playwriter',
    'sketch artist', 'graphic design', 'cover design', 'restyle', 'celebrity',
    'entertainment', 'fortune teller', 'time machine', 'talk to history',
    'imagination traveler', 'phenomenon explorer', 'oraculum', 'stellaris',
    
    // Gaming and interactive
    'game', 'gaming', 'interactive', 'virtual', 'simulation', 'role play',
    'character creation', 'world building', 'adventure', 'quest', 'puzzle'
  ];
  
  // Specific creative tool names
  const specificCreativeTools = [
    'coloring book generator gpt', 'tattoo designer gpt', 'celebrity chatline gpt',
    'trivia night gpt', 'game design document', 'movie maker studio', 'music video maker',
    'sketch artist gpt', 'graphic & cover design gpt', 'restyle me gpt', 'fortune teller gpt',
    'time machine gpt', 'talk to history gpt', 'imagination traveler gpt', 'stellaris',
    'phenomenon explorer', 'oraculum', 'enter the matrix gpt', 'neo matrix gpt',
    'playwriter gpt', 'movie script writer gpt', 'movie scene maker gpt'
  ];
  
  // Check against creative keywords
  const isCreativeByKeyword = creativeKeywords.some(keyword => 
    titleLower.includes(keyword) || 
    descriptionLower.includes(keyword) || 
    tagsLower.includes(keyword) ||
    categoryLower.includes(keyword)
  );
  
  // Check if it's a specific creative tool
  const isSpecificCreativeTool = specificCreativeTools.some(creativeTool => 
    titleLower.includes(creativeTool) || titleLower === creativeTool ||
    descriptionLower.includes(creativeTool)
  );
  
  // Check if category explicitly contains creative-related terms
  const isCreativeCategory = categoryLower.includes('creative') || 
                            categoryLower.includes('entertainment') || 
                            categoryLower.includes('game') ||
                            categoryLower.includes('media') ||
                            categoryLower.includes('art') ||
                            categoryLower.includes('design') ||
                            categoryLower.includes('video') ||
                            categoryLower.includes('music');
  
  const isCreativeTool = isCreativeByKeyword || isSpecificCreativeTool || isCreativeCategory;
  
  if (isCreativeTool) {
    console.log(`🎭 CREATIVE & ENTERTAINMENT: Detected tool: ${tool.title} (Category: ${tool.category})`);
  }
  
  return isCreativeTool;
};
