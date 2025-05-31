
import { Tool } from "@/types/tools";

export const getEducationLearningTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎓 Getting education & learning tools for category: "${categoryName}"`);
  
  const educationKeywords = [
    'education', 'learning', 'course', 'skill', 'college', 'degree', 'school', 'tutoring',
    'homework', 'essay', 'khan academy', 'coursera', 'duolingo', 'brilliant', 'quiz',
    'children', 'book', 'training', 'manual', 'stellaris', 'engineering', 'tesla',
    'einstein', 'genome', 'probability', 'algebraic', 'alchemist', 'historical patterns',
    'language tutor', 'homework helper', 'wolfram alpha', 'socratic', 'yippity',
    'originality', 'plag', 'freecodecamp', 'globe ai', 'khanmigo'
  ];
  
  const aiWebToolsEducation = tools.filter(tool => {
    const hasEducationUrl = tool.directUrl?.includes('lovable.app') || tool.directUrl?.includes('aiwebtools');
    const hasEducationContent = educationKeywords.some(keyword => 
      tool.title.toLowerCase().includes(keyword) || 
      tool.description.toLowerCase().includes(keyword) ||
      (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(keyword)))
    );
    return hasEducationUrl && hasEducationContent;
  });
  
  const otherEducationTools = tools.filter(tool => {
    const isNotAIWebTools = !tool.directUrl?.includes('lovable.app') && !tool.directUrl?.includes('aiwebtools');
    const hasEducationContent = educationKeywords.some(keyword => 
      tool.title.toLowerCase().includes(keyword) || 
      tool.description.toLowerCase().includes(keyword) ||
      (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(keyword)))
    );
    const hasEducationCategory = tool.category && (
      tool.category.toLowerCase().includes('education') ||
      tool.category.toLowerCase().includes('learning')
    );
    return isNotAIWebTools && (hasEducationContent || hasEducationCategory);
  });
  
  const educationTools = [...aiWebToolsEducation, ...otherEducationTools];
  console.log(`✅ Found ${educationTools.length} education & learning tools`);
  
  return educationTools;
};

export const getHealthWellnessTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🏥 Getting health & wellness tools for category: "${categoryName}"`);
  
  const healthKeywords = [
    'health', 'wellness', 'medical', 'doctor', 'healthcare', 'fitness', 'nutrition',
    'mental', 'therapy', 'pharmaceutical', 'veterinarian', 'dental', 'skincare',
    'meditation', 'mindfulness', 'relationship', 'life coach', 'personal', 'emdr',
    'pathological', 'diagnosis', 'research', 'ada health', 'myfitnesspal', 'fitbit'
  ];
  
  const aiWebToolsHealth = tools.filter(tool => {
    const hasHealthUrl = tool.directUrl?.includes('lovable.app') || tool.directUrl?.includes('aiwebtools');
    const hasHealthContent = healthKeywords.some(keyword => 
      tool.title.toLowerCase().includes(keyword) || 
      tool.description.toLowerCase().includes(keyword) ||
      (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(keyword)))
    );
    return hasHealthUrl && hasHealthContent;
  });
  
  const otherHealthTools = tools.filter(tool => {
    const isNotAIWebTools = !tool.directUrl?.includes('lovable.app') && !tool.directUrl?.includes('aiwebtools');
    const hasHealthContent = healthKeywords.some(keyword => 
      tool.title.toLowerCase().includes(keyword) || 
      tool.description.toLowerCase().includes(keyword) ||
      (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(keyword)))
    );
    const hasHealthCategory = tool.category && (
      tool.category.toLowerCase().includes('health') ||
      tool.category.toLowerCase().includes('wellness') ||
      tool.category.toLowerCase().includes('medical')
    );
    return isNotAIWebTools && (hasHealthContent || hasHealthCategory);
  });
  
  const healthTools = [...aiWebToolsHealth, ...otherHealthTools];
  console.log(`✅ Found ${healthTools.length} health & wellness tools`);
  
  return healthTools;
};

export const getSpecializedNicheTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔧 Getting specialized & niche tools for category: "${categoryName}"`);
  
  const specializedKeywords = [
    'specialized', 'niche', 'gods', 'mary magdalene', 'oraculum', 'sophia aeterna',
    'alan watts', 'native american', 'phenomenon', 'firefighter', 'survivalist',
    'firearms', 'social safety', 'criminologist', 'real estate', 'legal', 'home services',
    'construction', 'automotive', 'culinary', 'photography', 'music producer',
    'environmental', 'aquaculture', 'fungus', 'financial advisor', 'urban planner',
    'security', 'public defender', 'if ai ruled', 'artwork', 'antique', 'material valuation',
    'trader', 'taxes', 'cyber security', 'tattoo', 'automobile', 'cannabis', 'fisherman',
    'home renovator', 'immortalizeme', 'dream interpreter', 'food quality', 'time machine',
    'titanic', 'historical headlines', 'interpretis', 'stellaris', 'nikola tesla',
    'alchemist', 'genome', 'global peace', 'enter the matrix', 'legislator', 'customer service',
    'auto mechanic', 'interior designer', 'chef', 'fishing guide', 'agricultural',
    'electrician', 'plumber', 'arborist', 'mixologist', 'policy', 'regulatory',
    'international relations', 'public safety', 'electoral', 'legislative', 'restyle',
    'binary', 'unitree', 'boston dynamics', 'agility robotics', 'honda robotics',
    'tesla bot', 'hanson robotics', 'spiritual guidance', 'chakra', 'ancient egypt',
    'world history', 'this day in history', 'ancient roman', 'age of exploration',
    'time traveler', 'vectra ai', 'crowdstrike', 'kensho', 'alphasense', 'yodlee',
    'mint', 'zest ai', 'lexisnexis', 'westlaw', 'kira systems', 'ross intelligence',
    'luminance', 'forex', 'd-wave', 'uber', 'insect study', 'fruit nutrition',
    'recipe generator', 'airesume', 'final round', 'distrokid', 'nucleus ai',
    'ai tools list', 'akto'
  ];
  
  const aiWebToolsSpecialized = tools.filter(tool => {
    const hasSpecializedUrl = tool.directUrl?.includes('lovable.app') || tool.directUrl?.includes('aiwebtools');
    const hasSpecializedContent = specializedKeywords.some(keyword => 
      tool.title.toLowerCase().includes(keyword) || 
      tool.description.toLowerCase().includes(keyword) ||
      (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(keyword)))
    );
    return hasSpecializedUrl && hasSpecializedContent;
  });
  
  const otherSpecializedTools = tools.filter(tool => {
    const isNotAIWebTools = !tool.directUrl?.includes('lovable.app') && !tool.directUrl?.includes('aiwebtools');
    const hasSpecializedContent = specializedKeywords.some(keyword => 
      tool.title.toLowerCase().includes(keyword) || 
      tool.description.toLowerCase().includes(keyword) ||
      (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(keyword)))
    );
    const hasSpecializedCategory = tool.category && (
      tool.category.toLowerCase().includes('specialized') ||
      tool.category.toLowerCase().includes('niche') ||
      tool.category.toLowerCase().includes('industry') ||
      tool.category.toLowerCase().includes('robotics') ||
      tool.category.toLowerCase().includes('spirituality') ||
      tool.category.toLowerCase().includes('historical') ||
      tool.category.toLowerCase().includes('mysterious')
    );
    return isNotAIWebTools && (hasSpecializedContent || hasSpecializedCategory);
  });
  
  const specializedTools = [...aiWebToolsSpecialized, ...otherSpecializedTools];
  console.log(`✅ Found ${specializedTools.length} specialized & niche tools`);
  
  return specializedTools;
};
