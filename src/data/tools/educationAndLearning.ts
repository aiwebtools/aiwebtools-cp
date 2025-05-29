
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

// Removed duplicate "LEARN ANY COURSE GPT", "LEARN ANY SKILL GPT", "Public Defender GPT", "Property Data Finder GPT"
// Keeping only "COLLEGE DEGREE GPT" which is unique to education
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
  }
];
