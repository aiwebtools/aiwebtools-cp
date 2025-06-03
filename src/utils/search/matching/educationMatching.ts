
import { Tool } from "@/types/tools";

// Comprehensive education-related keywords
const educationKeywords = [
  'school', 'education', 'educational', 'learning', 'learn', 'study', 'studying',
  'class', 'classes', 'classroom', 'course', 'courses', 'lesson', 'lessons',
  'homework', 'assignment', 'assignments', 'test', 'testing', 'quiz', 'exam',
  'college', 'university', 'degree', 'diploma', 'academic', 'academics',
  'student', 'students', 'teacher', 'teachers', 'tutor', 'tutoring',
  'instruction', 'instructional', 'training', 'tutorial', 'tutorials',
  'curriculum', 'syllabus', 'textbook', 'lecture', 'lectures',
  'grade', 'grades', 'grading', 'assessment', 'evaluation',
  'knowledge', 'skill', 'skills', 'competency', 'competencies',
  'homeschool', 'homeschooling', 'home school', 'home-school',
  'online learning', 'e-learning', 'distance learning', 'remote learning',
  'pedagogy', 'teaching', 'coaching', 'mentoring', 'guidance'
];

const educationToolTitles = [
  'learn any course gpt',
  'learn any skill gpt',
  'college degree gpt',
  'home-schooling assistant gpt',
  'homeschool gpt',
  'quiz maker ai',
  'course maker gpt',
  'training manual generator gpt',
  'music melodies & lessons gpt',
  'educational',
  'learning',
  'school',
  'tutor',
  'teaching'
];

export const matchEducation = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  // Direct education keyword matching
  const hasEducationKeyword = educationKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || searchableText.includes(keyword)
  );

  // Tool title matching for education tools
  const isEducationTool = educationToolTitles.some(title => 
    tool.title.toLowerCase().includes(title) || 
    searchableText.includes(title)
  );

  // Category-based matching
  const isEducationCategory = tool.category?.toLowerCase().includes('education') ||
                             tool.category?.toLowerCase().includes('learning') ||
                             tool.category?.toLowerCase().includes('professional');

  // Check if search term is education-related
  const isEducationSearch = educationKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );

  return (hasEducationKeyword || isEducationTool || (isEducationSearch && isEducationCategory));
};

export const scoreEducation = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  let score = 0;

  // High priority for exact education tool matches
  const exactMatches = [
    'learn any course gpt',
    'learn any skill gpt', 
    'college degree gpt',
    'home-schooling assistant gpt',
    'homeschool gpt',
    'quiz maker ai',
    'course maker gpt',
    'training manual generator gpt',
    'music melodies & lessons gpt'
  ];

  for (const exactMatch of exactMatches) {
    if (tool.title.toLowerCase().includes(exactMatch)) {
      score += 5000;
      break;
    }
  }

  // Medium priority for education keywords in title
  for (const keyword of educationKeywords) {
    if (tool.title.toLowerCase().includes(keyword)) {
      score += 3000;
      break;
    }
  }

  // Lower priority for education keywords in description
  for (const keyword of educationKeywords) {
    if (tool.description.toLowerCase().includes(keyword)) {
      score += 1500;
      break;
    }
  }

  // Education category bonus
  if (tool.category?.toLowerCase().includes('education') || 
      tool.category?.toLowerCase().includes('learning')) {
    score += 1000;
  }

  // Tag matching bonus
  if (tool.tags) {
    for (const tag of tool.tags) {
      for (const keyword of educationKeywords) {
        if (tag.toLowerCase().includes(keyword)) {
          score += 800;
        }
      }
    }
  }

  return score;
};
