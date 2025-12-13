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
  "Learning Platform": ["learn", "learning", "education", "course", "lesson", "training", "knowledge", "educational", "e-learning", "online learning", "study platform", "learning app"],
  "Course Creator": ["course", "curriculum", "lesson plan", "teaching", "instructor", "module", "course builder", "course maker", "create course", "course development"],
  "Tutoring AI": ["tutor", "tutoring", "teach", "explain", "mentor", "coaching", "guidance", "personal tutor", "ai tutor", "virtual tutor", "learning assistant"],
  "Language Learning": ["language", "translation", "speech", "vocabulary", "grammar", "fluency", "polyglot", "foreign language", "multilingual", "language skills", "speak", "translator"],
  "Study Tools": ["study", "flashcard", "quiz", "memorize", "revision", "practice", "test prep", "study aid", "notes", "summarize", "study help", "exam prep"],
  "Homework Help": ["homework", "assignment", "problem solving", "academic help", "student", "school", "help with", "solve problems", "math help", "science help"],
  "Academic Writing": ["essay", "thesis", "paper", "academic", "citation", "research writing", "dissertation", "scholarly", "research paper", "academic paper"],
  "Quiz Maker": ["quiz", "test", "assessment", "exam", "evaluation", "trivia", "questionnaire", "quiz generator", "test maker", "quiz creation"],
  "Skill Development": ["skill", "professional", "competency", "mastery", "expertise", "upskill", "reskill", "skill building", "career development", "professional development"],
  "STEM Education": ["math", "science", "engineering", "technology", "stem", "physics", "chemistry", "biology", "mathematics", "algebra", "geometry", "calculus", "coding education"],
  "Music Education": ["music", "instrument", "melody", "composition", "musical", "piano", "guitar", "music theory", "music lesson", "learn music", "practice music"],
  "Homeschool": ["homeschool", "home education", "parent teaching", "self-paced", "home learning", "homeschooling", "family education"],
  "College Prep": ["college", "university", "degree", "admission", "gpa", "sat", "act", "college application", "higher education", "undergraduate", "graduate"],
  "Professional Training": ["training manual", "onboarding", "employee training", "corporate learning", "professional training", "workplace learning", "business training", "staff training"]
};
