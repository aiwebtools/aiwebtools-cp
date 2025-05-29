
import { Tool } from "@/types/tools";
import { 
  BookOpen, 
  GraduationCap, 
  Brain, 
  Users, 
  TrendingUp, 
  Building, 
  FileText, 
  Stethoscope,
  Calculator,
  Gavel,
  Target,
  Eye,
  Palette
} from "lucide-react";

export const educationAndLearning: Tool[] = [
  {
    icon: GraduationCap,
    title: "COLLEGE DEGREE GPT",
    description: "Comprehensive college and university guidance system for degree planning, course selection, and academic success.",
    emoji: "🎓",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://college-degree-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Cd8uvD-smlM&list=TLGGLsn0bAvnp3EyODA1MjAyNQ",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298792230944880/college.webp?ex=683874f5&is=68372375&hm=4047e0ba45bbee11764edb04f7bad458dbc1414f7afbdbfd000263dcfac170ac&",
    tags: ["college", "degree planning", "academic guidance", "university"],
    category: "Education & Learning",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: BookOpen,
    title: "Children's Picture Book Generator",
    description: "Educational tool for creating engaging children's books, perfect for teachers, parents, and educational content creators.",
    emoji: "📖",
    color: "from-yellow-500 to-pink-600",
    directUrl: "https://childrenspicturebookgpt.lovable.app/?via=aiwebtools",
    tags: ["education", "children's education", "teaching tools", "early learning"],
    category: "Education & Learning",
    rating: 4.6,
    totalVotes: 3245
  },
  {
    icon: Eye,
    title: "Clarity Omni",
    description: "Educational writing assistant for improving academic writing, clarity, and communication skills for students and educators.",
    emoji: "🔍",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://clarityomni.lovable.app/?via=aiwebtools",
    tags: ["academic writing", "education", "writing skills", "student tools"],
    category: "Education & Learning",
    rating: 4.5,
    totalVotes: 2876
  },
  {
    icon: Palette,
    title: "Art & Design Education GPT",
    description: "Educational resource for art and design students, covering techniques, history, and creative development.",
    emoji: "🎨",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://graphicdesigngpt.lovable.app/?via=aiwebtools",
    tags: ["art education", "design learning", "creative education", "visual arts"],
    category: "Education & Learning",
    rating: 4.5,
    totalVotes: 2987
  }
];
