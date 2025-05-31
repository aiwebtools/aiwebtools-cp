
import { Tool } from "@/types/tools";
import { BookOpen, HelpCircle, GraduationCap } from "lucide-react";

export const educationalToolsGPTs: Tool[] = [
  {
    icon: HelpCircle,
    title: "Quiz Maker Ai",
    description: "This GPT is ideal for adding quizzes and tests to your courses. Designed to work seamlessly with Course Maker GPT and College Degree GPT, you can easily integrate it into your course whenever you're ready for a quiz by typing \"@\" followed by the GPT's name. Make sure to use it at least once beforehand to have it in your GPT call memory. Additionally, teachers can utilize this GPT to create tests and quizzes for their students.",
    emoji: "❓",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://chatgpt.com/g/g-cUahkn19i-quiz-maker-ai",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-eye-catching-advertisement-for-quiz-maker-.jpeg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    tags: ["quiz creation", "education", "testing", "course integration", "learning assessment"],
    category: "Educational Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: GraduationCap,
    title: "Course Maker GPT",
    description: "A powerful AI tool for creating comprehensive educational courses with structured content, interactive elements, and seamless integration with quiz and assessment tools.",
    emoji: "🎓",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chat.openai.com/g/g-YDzdoqmP9-course-creator-gpt",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377336291427090462/ChatGPT_Image_May_28_2025_01_22_27_PM.png?ex=683897e1&is=68374661&hm=71f0b50e1d34249bf9ed9ca8b7a1b0e45d0d2127cb9e356e2b4c65b35518656a&=&format=webp&quality=lossless&width=2088&height=1392",
    tags: ["course creation", "education", "curriculum design", "online learning", "educational content"],
    category: "Educational Tools",
    rating: 4.7,
    totalVotes: 5234
  }
];
