
import { Tool } from "@/types/tools";

// Enhanced education and school matching
export const matchEducation = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  // Direct education/school terms
  const educationTerms = [
    'school', 'education', 'learn', 'learning', 'teach', 'teaching', 'tutor', 'tutoring',
    'course', 'class', 'lesson', 'study', 'student', 'academic', 'curriculum',
    'homework', 'assignment', 'quiz', 'test', 'exam', 'grade', 'college', 'university',
    'degree', 'diploma', 'certificate', 'skill', 'training', 'knowledge',
    'homeschool', 'homeschooling', 'home school', 'home-school', 'educational'
  ];

  // Check if search term matches education concepts
  const isEducationSearch = educationTerms.some(term => 
    lowerSearchTerm.includes(term) || term.includes(lowerSearchTerm)
  );

  if (!isEducationSearch) return false;

  // Specific education tool matching
  const educationTools = [
    'learn any course',
    'learn any skill', 
    'college degree',
    'home-schooling',
    'homeschool',
    'quiz maker',
    'course maker',
    'children\'s picture book',
    'training manual',
    'music melodies',
    'education',
    'learning',
    'tutoring'
  ];

  return educationTools.some(eduTool => 
    searchableText.includes(eduTool) || 
    tool.title.toLowerCase().includes(eduTool)
  );
};

export const scoreEducation = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const toolTitle = tool.title.toLowerCase();
  const toolDescription = tool.description.toLowerCase();
  let score = 0;

  // Highest priority for direct school/education tools
  const highPriorityTools = [
    'learn any course gpt',
    'learn any skill gpt',
    'college degree gpt',
    'home-schooling assistant gpt',
    'quiz maker ai',
    'course maker gpt'
  ];

  for (const priorityTool of highPriorityTools) {
    if (toolTitle.includes(priorityTool.toLowerCase())) {
      score += 8000;
      break;
    }
  }

  // School-specific term matching
  if (lowerSearchTerm === 'school') {
    if (toolTitle.includes('school') || toolTitle.includes('education') || 
        toolTitle.includes('learn') || toolTitle.includes('course')) {
      score += 7000;
    }
    if (toolDescription.includes('school') || toolDescription.includes('education') ||
        toolDescription.includes('learning') || toolDescription.includes('course')) {
      score += 5000;
    }
  }

  // Education category bonus
  if (tool.category?.toLowerCase().includes('education') || 
      tool.category?.toLowerCase().includes('learning')) {
    score += 3000;
  }

  // Learning-related tags
  if (tool.tags) {
    const learningTags = ['education', 'learning', 'course', 'skill', 'training', 'academic', 'study'];
    for (const tag of tool.tags) {
      if (learningTags.some(learningTag => tag.toLowerCase().includes(learningTag))) {
        score += 1000;
      }
    }
  }

  return score;
};
