// Education & Learning subtypes for enhanced categorization

export const educationLearningSubtypes = [
  "Learning Platform",
  "Course Creator",
  "Tutoring AI",
  "Language Learning",
  "Study Tools",
  "Homework Help",
  "Academic Writing",
  "Quiz Maker",
  "Skill Development",
  "STEM Education",
  "Music Education",
  "Homeschool",
  "College Prep",
  "Professional Training"
] as const;

export type EducationLearningSubtype = typeof educationLearningSubtypes[number];

export const educationLearningKeywords: Record<EducationLearningSubtype, string[]> = {
  "Learning Platform": ["learn", "learning", "education", "course", "lesson", "training", "knowledge"],
  "Course Creator": ["course", "curriculum", "lesson plan", "teaching", "instructor", "module"],
  "Tutoring AI": ["tutor", "tutoring", "teach", "explain", "mentor", "coaching", "guidance"],
  "Language Learning": ["language", "translation", "speech", "vocabulary", "grammar", "fluency", "polyglot"],
  "Study Tools": ["study", "flashcard", "quiz", "memorize", "revision", "practice", "test prep"],
  "Homework Help": ["homework", "assignment", "problem solving", "academic help", "student"],
  "Academic Writing": ["essay", "thesis", "paper", "academic", "citation", "research writing"],
  "Quiz Maker": ["quiz", "test", "assessment", "exam", "evaluation", "trivia"],
  "Skill Development": ["skill", "professional", "competency", "mastery", "expertise"],
  "STEM Education": ["math", "science", "engineering", "technology", "stem", "physics", "chemistry", "biology"],
  "Music Education": ["music", "instrument", "melody", "composition", "musical"],
  "Homeschool": ["homeschool", "home education", "parent teaching", "self-paced"],
  "College Prep": ["college", "university", "degree", "admission", "gpa", "sat", "act"],
  "Professional Training": ["training manual", "onboarding", "employee training", "corporate learning"]
};
