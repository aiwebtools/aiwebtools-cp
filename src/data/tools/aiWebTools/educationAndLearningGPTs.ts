import { Tool } from "@/types/tools";
import { BookOpen, GraduationCap, Brain, Calculator, Globe, Languages, Music, Palette, Code, Microscope, Heart, Users, Building, FileText, Award } from "lucide-react";

import universalSpeechMasteryHero from "@/assets/tools/universal-speech-mastery-hero.jpg";
import educationalTutorHero from "@/assets/tools/educational-tutor-hero.jpg";
import cursiveTeacherHero from "@/assets/tools/cursive-teacher-hero.jpg";
import learnAnyCourseGptHero from "@/assets/tools/learn-any-course-gpt-hero.jpg";

export const educationAndLearningGPTs: Tool[] = [
  {
    icon: Languages,
    title: "Universal Speech Mastery GPT",
    description: "Universal Speech Mastery AI — my mission is to transform you into a fluent multilingual communicator across any world language. This advanced language learning assistant provides personalized instruction, conversation practice, and cultural insights to help you master foreign languages with confidence and fluency.",
    emoji: "🗣️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://chatgpt.com/g/g-68ae26360d448191b25842afb8d2f66b-lingua-champion-universal-speech-mastery-ai/",
    imageUrl: universalSpeechMasteryHero,
    tags: ["language learning", "multilingual", "speech mastery", "foreign languages", "conversation practice", "fluency training", "lingua champion", "universal speech", "language education", "communication skills", "Language Learning", "Tutoring AI"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 3245
  },
  {
    icon: Music,
    title: "Music Melodies & Lessons GPT",
    description: "Music Melodies & Lessons GPT is your ultimate musical companion, here to inspire and guide you on your musical journey. Whether you're learning to play an instrument, perfecting your vocals, or writing your own songs, I provide step-by-step guidance, accurate lyrics, and easy-to-follow tablature. I tailor lessons to your goals, help you master techniques, and offer personalized advice on instrument selection and sound improvement. From beginners to experienced musicians, I'm here to make learning fun, creative, and engaging, helping you achieve your musical dreams with clarity and ease.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://musicmelodiesandlessonsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/8aPpUPiDBJ4?si=4ERg7NITSKCePyHF",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-music-melodi_LBv7r.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["music education", "instrument learning", "music lessons", "personalized learning", "music theory", "vocal training", "songwriting", "musical instruments", "Music Education", "Tutoring AI", "Skill Development"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: BookOpen,
    title: "LEARN ANY COURSE GPT",
    description: "Learn Any Course GPT is your dedicated AI-powered tutor, here to guide you through comprehensive, step-by-step courses on any subject you choose. Whether you want to master 12th-grade English, dive into advanced coding, or explore a specialized university degree, this tool brings a personalized, classroom-style experience right to your screen. Unlike static resources, Learn Any Course GPT combines rich, text-based explanations, curated YouTube video recommendations, and engaging visuals to deepen your understanding of complex subjects. on any subject you desire! #FreeEducation #EducationForAll #AnyAGE #SelfTaught #BelieveinYourself",
    emoji: "📚",
    color: "from-blue-500 to-green-600",
    directUrl: "https://learnanycourse.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=98fLvWZy9wI",
    imageUrl: learnAnyCourseGptHero,
    tags: ["education", "learning", "courses", "tutoring", "self-learning", "aiwebtools", "Learning Platform", "Course Creator", "Tutoring AI"],
    category: "Education & Learning",
    rating: 4.7,
    totalVotes: 6789
  },
  {
    icon: Brain,
    title: "LEARN ANY SKILL GPT",
    description: "Learn Any Skill GPT by AiWebTools.AI is a dynamic AI-powered educational assistant that guides users through learning any skill, from beginner to expert. It combines step-by-step explanations, curated YouTube videos, and web-sourced visuals for an interactive, multimedia learning experience. Designed for adaptability, it breaks down complex topics into manageable modules, ensuring thorough understanding at every stage. Whether mastering practical skills or academic knowledge, Learn Any Skill GPT is your ultimate guide to success.",
    emoji: "🧠",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://learnanyskillgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=q1AY2LukHrk",
    tags: ["skill learning", "education", "training", "personal development", "tutorial", "aiwebtools", "Skill Development", "Tutoring AI", "Learning Platform"],
    category: "Education & Learning",
    rating: 4.6,
    totalVotes: 5432
  },
  {
    icon: GraduationCap,
    title: "COLLEGE DEGREE GPT",
    description: "College Degree GPT teaches you every college class for any degree you desire, mirroring the exact structure of your chosen institution or university. While it doesn't provide an accredited degree, it delivers a full, in-depth educational experience as if you were earning one. We believe that access to education is a fundamental human right, and it should be free for everyone. That's why we've open-sourced the prompt for you to save for your personal records. 🕊️",
    emoji: "🎓",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://college-degree-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/VkD_dX8kPy0",
    tags: ["college education", "degree programs", "university courses", "higher education", "academic learning", "aiwebtools", "College Prep", "Learning Platform", "Course Creator"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 7654
  },
  {
    icon: Building,
    title: "Home-Schooling Assistant GPT",
    description: "Presented by AIWEBTOOLS.AI, Home School GPT is your all-in-compassing AI-powered assistant designed to empower parents in their homeschooling journey. It provides precise, state-specific legal guidance and a wealth of educational resources, ensuring compliance and enhancing the homeschooling experience. With Home School GPT, you have a trusted partner to help create a successful and nurturing learning environment for your child.",
    emoji: "🏠",
    color: "from-green-500 to-blue-600",
    directUrl: "https://homeschoolgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/dHirW5bIT34",
    tags: ["homeschooling", "education", "parenting", "curriculum", "learning resources", "aiwebtools", "Homeschool", "Course Creator", "Learning Platform"],
    category: "Education & Learning",
    rating: 4.5,
    totalVotes: 3876
  },
  {
    icon: FileText,
    title: "Quiz Maker Ai",
    description: "This GPT is ideal for adding quizzes and tests to your courses. Designed to work seamlessly with Course Maker GPT and College Degree GPT, you can easily integrate it into your course whenever you're ready for a quiz by typing \"@\" followed by the GPT's name. Make sure to use it at least once beforehand to have it in your GPT call memory. Additionally, teachers can utilize this GPT to create tests and quizzes for their students.",
    emoji: "📝",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://chatgpt.com/g/g-cUahkn19i-quiz-maker-ai",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-eye-catching-advertisement-for-quiz-maker-.jpeg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    tags: ["quiz creation", "education", "assessment", "testing", "course integration", "teaching tools", "aiwebtools", "Quiz Maker", "Study Tools"],
    category: "Education & Learning",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Award,
    title: "Course Maker GPT",
    description: "Course Maker GPT is an advanced AI-powered educational tool designed to create comprehensive, structured courses on any subject. Whether you're an educator, trainer, or content creator, this GPT helps you develop engaging curricula with clear learning objectives, detailed lesson plans, and interactive elements. It seamlessly integrates with Quiz Maker AI to provide complete educational experiences with assessments and evaluations.",
    emoji: "🏆",
    color: "from-orange-500 to-red-600",
    directUrl: "https://chat.openai.com/g/g-YDzdoqmP9-course-creator-gpt",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377336291427090462/ChatGPT_Image_May_28_2025_01_22_27_PM.png?ex=683897e1&is=68374661&hm=71f0b50e1d34249bf9ed9ca8b7a1b0e45d0d2127cb9e356e2b4c65b35518656a&=&format=webp&quality=lossless&width=2088&height=1392",
    tags: ["course creation", "curriculum development", "education", "training", "lesson planning", "instructional design", "aiwebtools", "Course Creator", "Professional Training"],
    category: "Education & Learning",
    rating: 4.7,
    totalVotes: 4321
  },
  {
    icon: GraduationCap,
    title: "EDUCATIONAL TUTOR GPT",
    description: "A patient AI tutor that explains step by step and adapts to your learning style. Using the creator's recommended model: GPT-4o. Personalized educational support for all learning levels.",
    emoji: "👨‍🏫",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-68bb71f1dca88191866a1a0bfdff7ca0-educational-tutor-gpt/",
    imageUrl: educationalTutorHero,
    tags: ["tutoring", "personalized learning", "education", "learning support", "academic help", "study assistance", "aiwebtools", "Tutoring AI", "Study Tools"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 3456
  },
  {
    icon: Palette,
    title: "Cursive Teacher GPT",
    description: "Cursive Teacher GPT is your specialized AI instructor for learning beautiful cursive handwriting. This educational tool provides step-by-step guidance on cursive letter formation, proper pen grip, writing techniques, and practice exercises. Whether you're a student learning cursive for the first time, a parent helping your child, or an adult wanting to improve your handwriting, this GPT offers personalized instruction and engaging activities to master the art of cursive writing.",
    emoji: "✍️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-68cb403167a88191ae07062124d32bbb-cursive-teacher-gpt/",
    imageUrl: cursiveTeacherHero,
    tags: ["cursive writing", "handwriting", "education", "penmanship", "writing skills", "learning", "teaching", "aiwebtools", "Skill Development", "Tutoring AI"],
    category: "Education & Learning",
    rating: 4.6,
    totalVotes: 2134
  }
];
