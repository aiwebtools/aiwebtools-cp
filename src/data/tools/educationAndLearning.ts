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
  Target
} from "lucide-react";

// Update the specific tools that have media:
export const educationAndLearning: Tool[] = [
  {
    icon: GraduationCap,
    title: "COLLEGE DEGREE GPT",
    description: "Comprehensive college and university guidance system for degree planning, course selection, and academic success.",
    emoji: "🎓",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://collegedegreegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Cd8uvD-smlM&list=TLGGLsn0bAvnp3EyODA1MjAyNQ",
    tags: ["college", "degree planning", "academic guidance", "university"],
    category: "Education & Learning",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: BookOpen,
    title: "LEARN ANY COURSE GPT",
    description: "Master any subject with personalized learning paths, course recommendations, and adaptive study strategies for comprehensive education.",
    emoji: "📖",
    color: "from-blue-500 to-green-600",
    directUrl: "https://learnanycourse.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=98fLvWZy9wI",
    category: "Education & Learning",
    tags: ["learning", "courses", "education", "study"],
    rating: 4.6,
    totalVotes: 2987
  },
  {
    icon: Brain,
    title: "LEARN ANY SKILL GPT",
    description: "Develop any skill with structured learning plans, practice exercises, and progress tracking for personal and professional growth.",
    emoji: "🧠",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://learnanyskillgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=q1AY2LukHrk",
    category: "Skill Development",
    tags: ["skill learning", "personal development", "training", "growth"],
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Gavel,
    title: "Public Defender GPT",
    description: "Legal assistance and guidance for public defense cases, legal research, and criminal justice support for defendants and attorneys.",
    emoji: "⚖️",
    color: "from-blue-600 to-gray-700",
    directUrl: "https://publicdefendergpt.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=cQR5eFjsPWw",
    category: "Legal Services",
    tags: ["public defense", "legal aid", "criminal justice", "legal research"],
    rating: 4.4,
    totalVotes: 2134
  },
  {
    icon: Building,
    title: "Property Data Finder GPT",
    description: "Comprehensive property research tool for real estate analysis, market data, property valuations, and investment insights.",
    emoji: "🏢",
    color: "from-green-500 to-blue-600",
    directUrl: "https://propertydatafindergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=0ZGBGn9yYwY",
    category: "Real Estate",
    tags: ["real estate", "property data", "market analysis", "investment"],
    rating: 4.5,
    totalVotes: 2654
  }
];
