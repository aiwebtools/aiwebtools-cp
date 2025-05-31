import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getEducationLearningTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎓 EDUCATION & LEARNING enhanced matching for: ${categoryName}`);
  
  // Priority Education & Learning Tools (first priority - user specified)
  const priorityEducationLearningTools = [
    'COLLEGE DEGREE GPT',
    'College Degree GPT',
    'LEARN ANY COURSE GPT',
    'Learn Any Course GPT',
    'LEARN ANY SKILL GPT',
    'Learn Any Skill GPT',
    'Home-Schooling Assistant GPT',
    'HomeSchool GPT',
    'Training Manual Generator GPT',
    'Training Manual Generator',
    'Children\'s Picture Book Maker GPT',
    'Children\'s Picture Book Maker',
    'Stellaris: 🚀AI Space Explorer',
    'Stellaris',
    'Engineering GPT Suite',
    'Engineering GPT',
    'Nikola Tesla GPT',
    'Tesla Einstein GPT',
    'Albert Einstein GPT',
    'Genome GPT',
    'Probability GPT',
    'Algebraic Expression Inventor GPT',
    'Algebraic Expression Creative Inventor GPT',
    'Alchemist Scientist GPT',
    'Uncovering Hidden Historical Patterns GPT',
    'Hidden Historical Pattern Recognition GPT',
    'Language Tutor AI',
    'Homework Helper Bot',
    'AI Essay Writer',
    'Khan Academy Khanmigo',
    'Duolingo',
    'Coursera',
    'Coursera AI',
    'Wolfram Alpha',
    'Century Tech',
    'Socratic by Google',
    'Yippity.io',
    'Originality.ai',
    'Plag.ai',
    'Khan Academy',
    'freeCodeCamp',
    'Brilliant',
    'Education Consultant GPT',
    'Course Maker GPT',
    'Quiz Maker AI',
    'Quiz Maker GPT',
    'Globe Ai'
  ];

  const educationLearningKeywords = [
    'college degree gpt', 'learn any course', 'learn any skill', 'homeschool', 'training manual',
    'children\'s picture book', 'stellaris', 'engineering gpt', 'nikola tesla', 'albert einstein',
    'genome gpt', 'probability gpt', 'algebraic expression', 'alchemist scientist',
    'historical patterns', 'language tutor', 'homework helper', 'essay writer',
    'khan academy', 'duolingo', 'coursera', 'wolfram alpha', 'century tech',
    'socratic', 'yippity', 'originality', 'plag', 'freecodecamp', 'brilliant',
    'course maker', 'quiz maker', 'globe ai', 'education', 'learning', 'teaching',
    'course', 'lesson', 'tutorial', 'training', 'study', 'academic', 'school',
    'university', 'classroom', 'instructor', 'student', 'curriculum', 'syllabus',
    'assignment', 'quiz', 'test', 'examination', 'knowledge', 'skill',
    'certification', 'degree', 'diploma', 'graduation'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
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

  // Separate tools into priority groups
  const priorityTools = categoryMatchedTools.filter(tool => 
    priorityEducationLearningTools.some(priorityName => 
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

  console.log(`✅ Found ${finalTools.length} education & learning tools (${priorityTools.length} priority, ${remainingTools.length} remaining)`);
  return finalTools;
};

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
