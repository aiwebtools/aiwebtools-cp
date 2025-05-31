
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getEducationLearningTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎓 EDUCATION & LEARNING enhanced matching for: ${categoryName}`);
  
  const educationLearningKeywords = [
    'learn any course', 'learn any skill', 'college degree', 'homeschool', 'education',
    'learning', 'teaching', 'course', 'lesson', 'tutorial', 'training', 'study',
    'academic', 'school', 'university', 'classroom', 'instructor', 'student',
    'curriculum', 'syllabus', 'assignment', 'quiz', 'test', 'examination',
    'knowledge', 'skill', 'certification', 'degree', 'diploma', 'graduation'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = educationLearningKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('education') ||
      tool.category.toLowerCase().includes('learning') ||
      tool.category.toLowerCase().includes('teaching') ||
      tool.category.toLowerCase().includes('course') ||
      tool.category.toLowerCase().includes('training')
    );

    return keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} education & learning tools`);
  return matchedTools;
};

export const getHealthWellnessTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🏥 HEALTH & WELLNESS enhanced matching for: ${categoryName}`);
  
  const healthWellnessKeywords = [
    'doctor', 'medical', 'health', 'wellness', 'healthcare', 'medicine',
    'therapy', 'treatment', 'diagnosis', 'patient', 'hospital', 'clinic',
    'pharmaceutical', 'drug', 'medication', 'prescription', 'fitness',
    'nutrition', 'diet', 'exercise', 'mental health', 'psychology',
    'veterinary', 'pet care', 'animal health', 'dental', 'surgery'
  ];

  const matchedTools = tools.filter(tool => {
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

  console.log(`✅ Found ${matchedTools.length} health & wellness tools`);
  return matchedTools;
};

export const getSpecializedNicheTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔧 SPECIALIZED & NICHE enhanced matching for: ${categoryName}`);
  
  const specializedNicheKeywords = [
    'specialized', 'niche', 'specific', 'industry', 'professional', 'expert',
    'custom', 'tailored', 'focused', 'dedicated', 'particular', 'unique',
    'special purpose', 'domain specific', 'sector specific', 'field specific'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = specializedNicheKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('specialized') ||
      tool.category.toLowerCase().includes('niche') ||
      tool.category.toLowerCase().includes('specific') ||
      tool.category.toLowerCase().includes('professional')
    );

    return keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} specialized & niche tools`);
  return matchedTools;
};
