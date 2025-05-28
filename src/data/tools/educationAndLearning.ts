import { Tool } from "@/types/tools";
import { 
  BookOpen, GraduationCap, Users, Brain, Lightbulb, 
  Calculator, Globe, Microscope, Atom, Telescope,
  PenTool, Youtube, Target
} from "lucide-react";

export const educationAndLearning: Tool[] = [
  {
    icon: BookOpen,
    title: "Algebraic Expression Creative Inventor GPT",
    description: "AI tool to tackle mathematical challenges by crafting custom algebraic expressions, solving equations with Python, visualizing data, and offering clear results.",
    emoji: "🔢",
    color: "from-blue-500 to-purple-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-futuristic-advertisement-for-alg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    tags: ["mathematics", "algebra", "equations", "problem solving", "visualization", "Python"],
    category: "Education & Learning"
  },
  {
    icon: Youtube,
    title: "College Degree GPT",
    description: "Teaches every college class for any desired degree, mirroring chosen institution's structure. For educational experience, not accredited degree. Open-sourced prompt available.",
    emoji: "🎓",
    color: "from-purple-500 to-blue-500",
    videoUrl: "https://www.youtube.com/watch?v=Cd8uvD-smlM&list=TLGGLsn0bAvnp3EyODA1MjAyNQ",
    directUrl: "https://college-degree-gpt.lovable.app/?via=aiwebtools",
    tags: ["college", "degree", "education", "university", "courses", "learning", "academic"],
    category: "Education & Learning"
  },
  {
    icon: BookOpen,
    title: "Course Maker GPT",
    description: "AI tool for creating comprehensive courses. Works seamlessly with Quiz Maker AI for complete educational experiences.",
    emoji: "📚",
    color: "from-green-500 to-blue-500",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377336291427090462/ChatGPT_Image_May_28_2025_01_22_27_PM.png?ex=683897e1&is=68374661&hm=71f0b50e1d34249bf9ed9ca8b7a1b0e45d0d2127cb9e356e2b4c65b35518656a&=&format=webp&quality=lossless&width=2088&height=1392",
    directUrl: "https://chat.openai.com/g/g-YDzdoqmP9-course-creator-gpt",
    tags: ["course creation", "education", "curriculum", "learning", "instructional design"],
    category: "Education & Learning"
  },
  {
    icon: BookOpen,
    title: "Firearms Safety Education Instruction GPT",
    description: "Personal all-in-one AI firearms instructor for safety, legal guidance, and skills improvement with comprehensive training protocols.",
    emoji: "🎯",
    color: "from-red-500 to-orange-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-shooting-a-gun-at-a-targ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://firearmsafetyeducationgpt.lovable.app/?via=aiwebtools",
    tags: ["firearms", "safety", "education", "training", "legal guidance", "instruction"],
    category: "Education & Learning"
  },
  {
    icon: BookOpen,
    title: "Home School GPT",
    description: "AI-powered assistant for homeschooling parents, providing state-specific legal guidance and comprehensive educational resources.",
    emoji: "🏠",
    color: "from-green-500 to-blue-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-parent-teaching-their-ki-0096e43.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://homeschoolgpt.lovable.app/?via=aiwebtools",
    tags: ["homeschooling", "education", "parenting", "curriculum", "legal guidance", "teaching"],
    category: "Education & Learning"
  },
  {
    icon: Youtube,
    title: "Learn Any Course GPT",
    description: "AI-powered tutor for step-by-step courses on any subject, combining text, YouTube recommendations, and interactive visuals.",
    emoji: "📖",
    color: "from-blue-500 to-purple-500",
    videoUrl: "https://www.youtube.com/watch?v=98fLvWZy9wI",
    directUrl: "https://learnanycourse.lovable.app/?via=aiwebtools",
    tags: ["learning", "courses", "education", "tutor", "skill development", "YouTube integration"],
    category: "Education & Learning"
  },
  {
    icon: Youtube,
    title: "Learn Any Skill GPT",
    description: "Dynamic AI educational assistant guides users through learning any skill (beginner to expert) with explanations, YouTube videos, and visuals.",
    emoji: "🎯",
    color: "from-purple-500 to-pink-500",
    videoUrl: "https://www.youtube.com/watch?v=q1AY2LukHrk",
    directUrl: "https://learnanyskillgpt.lovable.app/?via=aiwebtools",
    tags: ["skills", "learning", "education", "training", "beginner", "expert", "YouTube"],
    category: "Education & Learning"
  },
  {
    icon: BookOpen,
    title: "Music Melodies & Lessons GPT",
    description: "Musical companion for learning instruments, vocals, songwriting. Provides step-by-step guidance, lyrics, tablature, and personalized advice.",
    emoji: "🎵",
    color: "from-purple-500 to-pink-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-music-melodi_LBv7r.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    directUrl: "https://musicmelodiesandlessonsgpt.lovable.app/?via=aiwebtools",
    tags: ["music", "lessons", "theory", "composition", "education", "learning", "instruments", "vocals", "songwriting"],
    category: "Education & Learning"
  },
  {
    icon: BookOpen,
    title: "Probability GPT",
    description: "AI Truth Seeker that provides precise probability scores and unbiased truth analysis to cut through misinformation with statistical accuracy.",
    emoji: "🎲",
    color: "from-blue-500 to-green-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-and-futuristic-scene-featuring-a.png/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://probabilitygpt.lovable.app/?via=aiwebtools",
    tags: ["probability", "statistics", "truth", "analysis", "misinformation", "mathematics"],
    category: "Education & Learning"
  },
  {
    icon: BookOpen,
    title: "Quiz Maker AI",
    description: "Ideal for adding quizzes and tests to courses. Works seamlessly with Course Maker GPT and College Degree GPT. Perfect for teachers and educators.",
    emoji: "❓",
    color: "from-orange-500 to-red-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-eye-catching-advertisement-for-quiz-maker-.jpeg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://chatgpt.com/g/g-cUahkn19i-quiz-maker-ai",
    tags: ["quiz", "assessment", "education", "testing", "teachers", "learning evaluation"],
    category: "Education & Learning"
  },
  {
    icon: Calculator,
    title: "Algebraic Expression Inventor GPT",
    description: "Master algebraic expressions and mathematical creativity. Generate complex algebraic formulas, solve mathematical problems, and explore advanced mathematical concepts with AI assistance.",
    emoji: "🔢",
    color: "from-blue-500 to-purple-600",
    category: "Education & Learning",
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-futuristic-advertisement-for-alg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["algebra", "mathematics", "expressions", "formulas", "problem solving"],
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Youtube,
    title: "LEARN ANY SKILL GPT",
    description: "Comprehensive skill acquisition assistant for learning any ability. Get structured learning paths, practice exercises, and expert guidance for mastering new skills efficiently.",
    emoji: "🎯",
    color: "from-green-500 to-blue-600",
    category: "Education & Learning",
    directUrl: "https://learnanyskillgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=q1AY2LukHrk",
    tags: ["skill learning", "education", "practice", "mastery", "development"],
    rating: 4.4,
    totalVotes: 3234
  }
];
