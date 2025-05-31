
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getHealthWellnessTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🏥 HEALTH & WELLNESS enhanced matching for: ${categoryName}`);
  
  // Priority Health & Wellness Tools (first priority - user specified)
  const priorityHealthWellnessTools = [
    'Personalized DR. GPT (Doctor GPT)',
    'Personalized Doctor GPT',
    'Doctor GPT',
    'SKIN CARE GPT',
    'Skin Care GPT',
    '🐾Veterinarian GPT',
    'Veterinarian GPT',
    'Pharmaceutical Assistant GPT',
    'Mental Wellness GPT',
    'Relationship Advisor GPT',
    'Marriage Mender GPT',
    'Personal Life Coach GPT',
    'Home Organization Expert GPT',
    'Personal Travel Planner GPT',
    'Communication Coach GPT',
    'Personal Finance Advisor GPT',
    'Gift Ideas Generator GPT',
    'Daily Routine Optimizer GPT',
    'Mindfulness & Meditation Guide GPT',
    'DENTAL GPT',
    'Dental GPT',
    'EMDR Assistant',
    'PathAI',
    'Healthcare Advisor GPT'
  ];

  const healthWellnessKeywords = [
    'personalized dr gpt', 'doctor gpt', 'skin care gpt', 'veterinarian gpt', 'pharmaceutical assistant',
    'mental wellness', 'relationship advisor', 'marriage mender', 'personal life coach', 
    'home organization', 'personal travel planner', 'communication coach', 'personal finance advisor',
    'gift ideas generator', 'daily routine optimizer', 'mindfulness', 'meditation guide',
    'dental gpt', 'emdr assistant', 'pathai', 'healthcare advisor',
    'doctor', 'medical', 'health', 'wellness', 'healthcare', 'medicine',
    'therapy', 'treatment', 'diagnosis', 'patient', 'hospital', 'clinic',
    'pharmaceutical', 'drug', 'medication', 'prescription', 'fitness',
    'nutrition', 'diet', 'exercise', 'mental health', 'psychology',
    'veterinary', 'pet care', 'animal health', 'dental', 'surgery'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = healthWellnessKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('health') ||
      tool.category.toLowerCase().includes('wellness') ||
      tool.category.toLowerCase().includes('medical') ||
      tool.category.toLowerCase().includes('healthcare') ||
      tool.category.toLowerCase().includes('fitness')
    );

    return keywordMatch || categoryMatch;
  });

  // Separate tools into priority groups
  const priorityTools = categoryMatchedTools.filter(tool => 
    priorityHealthWellnessTools.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '') ||
      tool.title?.toLowerCase() === priorityName.toLowerCase()
    )
  );

  const remainingTools = categoryMatchedTools.filter(tool => 
    !priorityTools.includes(tool)
  );

  // Combine in priority order
  const finalTools = [
    ...priorityTools,
    ...remainingTools
  ];

  console.log(`✅ Found ${finalTools.length} health & wellness tools (${priorityTools.length} priority, ${remainingTools.length} remaining)`);
  return finalTools;
};
