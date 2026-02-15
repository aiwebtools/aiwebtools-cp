import { Tool } from "@/types/tools";
import { GraduationCap, BookOpen, Brain, Sparkles, Users, School, Calculator, Globe, FileText, Video, Lightbulb, PenTool } from "lucide-react";

import cogniiHero from "@/assets/tools/cognii-hero.jpg";
import gradescopeHero from "@/assets/tools/gradescope-hero.jpg";
import squirrelAiHero from "@/assets/tools/squirrel-ai-hero.jpg";
import anthologyHero from "@/assets/tools/anthology-hero.jpg";
import classcraftHero from "@/assets/tools/classcraft-hero.jpg";
import edmodoHero from "@/assets/tools/edmodo-hero.jpg";

export const aiEducationalTools: Tool[] = [
  {
    icon: GraduationCap,
    title: "Khan Academy Khanmigo",
    description: "AI-powered tutor built on GPT-4 for personalized learning. Get instant help with math, science, writing, and more. Perfect for students and teachers with guided learning paths.",
    emoji: "🎓",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.khanacademy.org/khan-labs?via=aiwebtools",
    imageUrl: "/src/assets/tools/khanmigo-hero.png",
    tags: ["AI tutor", "personalized learning", "education", "math help", "homework help", "students", "teachers", "K-12", "Tutoring AI", "Learning Platform", "STEM Education"],
    category: "AI Educational Tools",
    rating: 4.9,
    totalVotes: 18234
  },
  {
    icon: Brain,
    title: "Quizlet AI",
    description: "AI-powered study tools with smart flashcards, practice tests, and adaptive learning. Create study sets automatically and get personalized study recommendations.",
    emoji: "🧠",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://quizlet.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/quizlet-ai-hero.png",
    tags: ["flashcards", "study tools", "test prep", "memorization", "learning", "students", "AI study assistant", "Study Tools", "Quiz Maker"],
    category: "AI Educational Tools",
    rating: 4.8,
    totalVotes: 24567
  },
  {
    icon: Calculator,
    title: "Photomath",
    description: "AI-powered math solver that explains step-by-step solutions. Scan math problems with your camera and get instant explanations with detailed working.",
    emoji: "📱",
    color: "from-red-500 to-orange-600",
    directUrl: "https://photomath.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/photomath-hero.png",
    tags: ["math solver", "homework help", "step-by-step", "students", "mathematics", "AI tutor", "camera scanner", "Homework Help", "STEM Education", "Tutoring AI"],
    category: "AI Educational Tools",
    rating: 4.7,
    totalVotes: 16789
  },
  {
    icon: BookOpen,
    title: "Grammarly for Education",
    description: "AI writing assistant for students and teachers. Improve writing quality, check grammar, enhance vocabulary, and provide feedback with AI-powered suggestions.",
    emoji: "✍️",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.grammarly.com/edu?via=aiwebtools",
    imageUrl: "/src/assets/tools/grammarly-hero.png",
    tags: ["writing assistant", "grammar checker", "education", "essay writing", "feedback", "students", "teachers", "Academic Writing", "Study Tools"],
    category: "AI Educational Tools",
    rating: 4.8,
    totalVotes: 21234
  },
  {
    icon: Users,
    title: "Duolingo",
    description: "AI-powered language learning app with personalized lessons, adaptive exercises, and conversational practice. Learn 40+ languages with gamified lessons.",
    emoji: "🦉",
    color: "from-green-400 to-teal-500",
    directUrl: "https://www.duolingo.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/duolingo-hero.png",
    tags: ["language learning", "education", "gamified learning", "AI tutor", "multilingual", "students", "adaptive learning", "Language Learning", "Learning Platform"],
    category: "AI Educational Tools",
    rating: 4.7,
    totalVotes: 32456
  },
  {
    icon: School,
    title: "Coursera (AI Courses)",
    description: "Online learning platform with AI-powered course recommendations, adaptive assessments, and degree programs. Learn from top universities and companies.",
    emoji: "🏫",
    color: "from-blue-600 to-cyan-600",
    directUrl: "https://www.coursera.org/?via=aiwebtools",
    imageUrl: "/src/assets/tools/coursera-ai-hero.png",
    tags: ["online courses", "education", "university courses", "professional development", "AI learning", "certifications", "Learning Platform", "Skill Development", "Professional Training"],
    category: "AI Educational Tools",
    rating: 4.7,
    totalVotes: 19876
  },
  {
    icon: Sparkles,
    title: "Cognii",
    description: "AI-powered virtual learning assistant for K-12 and higher education. Provides conversational tutoring, automated essay grading, and personalized feedback.",
    emoji: "✨",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://www.cognii.com/?via=aiwebtools",
    imageUrl: cogniiHero,
    tags: ["virtual tutor", "essay grading", "K-12", "higher education", "personalized learning", "automated feedback", "Tutoring AI", "Academic Writing"],
    category: "AI Educational Tools",
    rating: 4.5,
    totalVotes: 5678
  },
  {
    icon: Video,
    title: "Edpuzzle AI",
    description: "Interactive video lessons with AI-powered features. Create engaging video assignments, track student progress, and provide instant feedback on comprehension.",
    emoji: "🎬",
    color: "from-red-500 to-pink-600",
    directUrl: "https://edpuzzle.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/edpuzzle-hero.png",
    tags: ["video lessons", "interactive learning", "teachers", "students", "assessments", "educational videos", "Learning Platform", "Study Tools"],
    category: "AI Educational Tools",
    rating: 4.6,
    totalVotes: 8234
  },
  {
    icon: FileText,
    title: "Turnitin",
    description: "AI-powered plagiarism detection and feedback tool for academic writing. Check originality, provide writing feedback, and assess student work with AI insights.",
    emoji: "📄",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.turnitin.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/turnitin-hero.png",
    tags: ["plagiarism checker", "academic integrity", "writing feedback", "teachers", "students", "essay grading", "Academic Writing", "Study Tools"],
    category: "AI Educational Tools",
    rating: 4.4,
    totalVotes: 12456
  },
  {
    icon: Lightbulb,
    title: "Socratic by Google",
    description: "AI-powered homework helper that uses visual explanations and step-by-step guides. Take a photo of your homework and get instant help across subjects.",
    emoji: "💡",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://socratic.org/?via=aiwebtools",
    imageUrl: "/src/assets/tools/socratic-hero.png",
    tags: ["homework help", "visual learning", "students", "AI tutor", "multiple subjects", "Google", "camera scanner", "Homework Help", "Tutoring AI"],
    category: "AI Educational Tools",
    rating: 4.6,
    totalVotes: 14567
  },
  {
    icon: Globe,
    title: "Century Tech",
    description: "AI-powered learning platform that personalizes education paths, identifies knowledge gaps, and provides real-time insights for teachers and students.",
    emoji: "🌍",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://www.century.tech/?via=aiwebtools",
    imageUrl: "/src/assets/tools/century-tech-hero.png",
    tags: ["personalized learning", "adaptive learning", "K-12", "learning analytics", "teachers", "students", "Learning Platform", "Tutoring AI"],
    category: "AI Educational Tools",
    rating: 4.5,
    totalVotes: 6789
  },
  {
    icon: PenTool,
    title: "Gradescope",
    description: "AI-assisted grading platform that streamlines assignment grading, provides consistent feedback, and saves teachers time with automated assessment tools.",
    emoji: "📝",
    color: "from-green-600 to-emerald-700",
    directUrl: "https://www.gradescope.com/?via=aiwebtools",
    imageUrl: gradescopeHero,
    tags: ["grading", "assessment", "teachers", "automated grading", "feedback", "education technology", "Quiz Maker", "Study Tools"],
    category: "AI Educational Tools",
    rating: 4.6,
    totalVotes: 9876
  },
  {
    icon: Brain,
    title: "Squirrel AI",
    description: "Adaptive learning system using AI to create personalized learning paths. Identifies knowledge gaps and adjusts content difficulty in real-time for optimal learning.",
    emoji: "🐿️",
    color: "from-orange-400 to-yellow-500",
    directUrl: "https://squirrelai.com/?via=aiwebtools",
    imageUrl: squirrelAiHero,
    tags: ["adaptive learning", "personalized education", "K-12", "AI tutor", "learning analytics", "students", "Learning Platform", "Tutoring AI"],
    category: "AI Educational Tools",
    rating: 4.5,
    totalVotes: 7234
  },
  {
    icon: BookOpen,
    title: "Anthology Blackboard Intelligence",
    description: "AI-enhanced learning management system with predictive analytics, personalized learning paths, and automated administrative tasks for educational institutions.",
    emoji: "📚",
    color: "from-gray-700 to-gray-900",
    directUrl: "https://www.anthology.com/?via=aiwebtools",
    imageUrl: anthologyHero,
    tags: ["LMS", "learning management", "higher education", "predictive analytics", "institutional", "teachers", "Learning Platform", "College Prep"],
    category: "AI Educational Tools",
    rating: 4.4,
    totalVotes: 11234
  },
  {
    icon: Calculator,
    title: "Wolfram Alpha",
    description: "Computational knowledge engine that answers factual queries with step-by-step solutions. Essential for mathematics, science, engineering, and research.",
    emoji: "🔢",
    color: "from-red-600 to-orange-700",
    directUrl: "https://www.wolframalpha.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/wolfram-alpha-hero.png",
    tags: ["computational engine", "math solver", "science", "research", "students", "step-by-step solutions", "STEM Education", "Homework Help"],
    category: "AI Educational Tools",
    rating: 4.8,
    totalVotes: 15678
  },
  {
    icon: Users,
    title: "Classcraft",
    description: "Gamified classroom management with AI-powered features. Engage students through game-based learning, behavioral management, and collaborative quests.",
    emoji: "🎮",
    color: "from-purple-600 to-indigo-700",
    directUrl: "https://www.classcraft.com/?via=aiwebtools",
    imageUrl: classcraftHero,
    tags: ["classroom management", "gamification", "student engagement", "teachers", "K-12", "behavioral management", "Learning Platform", "Study Tools"],
    category: "AI Educational Tools",
    rating: 4.5,
    totalVotes: 8567
  },
  {
    icon: School,
    title: "Edmodo",
    description: "Educational network connecting teachers, students, and parents. Share resources, assign homework, communicate securely, and track student progress with AI insights.",
    emoji: "🏛️",
    color: "from-blue-600 to-indigo-600",
    directUrl: "https://www.edmodo.com/?via=aiwebtools",
    imageUrl: edmodoHero,
    tags: ["educational network", "classroom communication", "teachers", "students", "parents", "K-12", "homework", "Learning Platform", "Study Tools"],
    category: "AI Educational Tools",
    rating: 4.3,
    totalVotes: 13456
  },
  {
    icon: Sparkles,
    title: "Brainly",
    description: "Peer-to-peer learning community where students help each other with homework. AI moderation ensures quality answers across all subjects and grade levels.",
    emoji: "🤝",
    color: "from-green-500 to-teal-600",
    directUrl: "https://brainly.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/brainly-hero.png",
    tags: ["peer learning", "homework help", "student community", "Q&A", "collaborative learning", "all subjects", "Homework Help", "Study Tools"],
    category: "AI Educational Tools",
    rating: 4.4,
    totalVotes: 18234
  }
];
