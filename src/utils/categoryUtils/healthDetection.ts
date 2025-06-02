
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
    'family therapy', 'social support', 'community wellness',
    
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
    
    // Veterinary and pet wellness
    'veterinary', 'pet health', 'animal wellness', 'pet care', 'animal medicine'
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
    'life coach', 'relationship counselor', 'marriage advisor', 'family therapist'
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
