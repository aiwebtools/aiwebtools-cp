
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

// Specific educational tool titles to prioritize
const educationToolTitles = [
  'learn any course gpt',
  'learn any skill gpt',
  'college degree gpt',
  'home-schooling assistant gpt',
  'homeschool gpt',
  'quiz maker ai',
  'course maker gpt',
  'course creator gpt',
  'training manual generator gpt',
  'music melodies & lessons gpt',
  'educational',
  'learning',
  'school',
  'tutor',
  'teaching'
];

// Educational tool descriptions that should match
const educationDescriptions = [
  'learn any course', 'learn any skill', 'educational experience', 'learning assistant',
  'course creation', 'quiz maker', 'training manual', 'home school', 'homeschool',
  'educational tool', 'learning tool', 'study guide', 'academic', 'curriculum',
  'lesson plan', 'teaching assistant', 'tutor', 'instructor', 'education',
  'skill development', 'knowledge', 'competency', 'certification', 'diploma'
];

export const matchEducation = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  // Check if search term is education-related
  const isEducationSearch = educationKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );

  // If it's an education search, check if tool is educational
  if (isEducationSearch) {
    // Priority 1: Direct education tool title matches
    const isEducationTool = educationToolTitles.some(title => 
      tool.title.toLowerCase().includes(title) || 
      searchableText.includes(title)
    );

    // Priority 2: Education keywords in tool content
    const hasEducationContent = educationKeywords.some(keyword => 
      searchableText.includes(keyword)
    );

    // Priority 3: Education descriptions in tool content
    const hasEducationDescription = educationDescriptions.some(desc => 
      searchableText.includes(desc)
    );

    // Priority 4: Education category
    const isEducationCategory = tool.category?.toLowerCase().includes('education') ||
                               tool.category?.toLowerCase().includes('learning') ||
                               tool.category?.toLowerCase().includes('professional');

    return isEducationTool || hasEducationContent || hasEducationDescription || isEducationCategory;
  }

  // If not an education search, use original matching logic
  const hasEducationKeyword = educationKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || searchableText.includes(keyword)
  );

  const isEducationTool = educationToolTitles.some(title => 
    tool.title.toLowerCase().includes(title) || 
    searchableText.includes(title)
  );

  const isEducationCategory = tool.category?.toLowerCase().includes('education') ||
                             tool.category?.toLowerCase().includes('learning') ||
                             tool.category?.toLowerCase().includes('professional');

  return (hasEducationKeyword || isEducationTool || isEducationCategory);
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

  // Check if this is an education-focused search
  const isEducationSearch = educationKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );

  // MASSIVE boost for education tools when searching education terms
  if (isEducationSearch) {
    // Ultra high priority for core educational tools
    const coreEducationTools = [
      'learn any course gpt',
      'learn any skill gpt', 
      'college degree gpt',
      'course maker gpt',
      'course creator gpt',
      'quiz maker ai',
      'training manual generator gpt',
      'home-schooling assistant gpt',
      'homeschool gpt'
    ];

    for (const coreeTool of coreEducationTools) {
      if (tool.title.toLowerCase().includes(coreeTool)) {
        score += 10000; // Massive boost for core education tools
        // Debug logging disabled by default for performance
        break;
      }
    }

    // High priority for education keywords in title
    for (const keyword of educationKeywords) {
      if (tool.title.toLowerCase().includes(keyword)) {
        score += 8000;
        // Debug logging disabled by default for performance
        break;
      }
    }

    // Medium priority for education content in description
    for (const desc of educationDescriptions) {
      if (tool.description.toLowerCase().includes(desc)) {
        score += 6000;
        // Debug logging disabled by default for performance
        break;
      }
    }

    // Education category bonus
    if (tool.category?.toLowerCase().includes("education") || tool.category?.toLowerCase().includes("learning")) {
      score += 5000;
      // Debug logging disabled by default for performance
    }
  } else {
    // Original scoring for non-education searches
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
