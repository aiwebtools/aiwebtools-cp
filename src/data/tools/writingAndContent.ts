
import { Tool } from "@/types/tools";
import { 
  PenTool, 
  FileText, 
  BookOpen, 
  Edit3, 
  MessageSquare, 
  Newspaper,
  Scroll,
  Feather,
  Type,
  Hash,
  Mail,
  Megaphone,
  Users,
  Target,
  TrendingUp,
  Calendar,
  Share2,
  Lightbulb,
  Zap,
  Eye
} from "lucide-react";

export const writingAndContent: Tool[] = [
  {
    icon: Newspaper,
    title: "Article Writer GPT",
    description: "Professional article writing assistant for journalists, bloggers, and content creators.",
    emoji: "📰",
    color: "from-blue-500 to-gray-600",
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    tags: ["article writing", "journalism", "blogging", "content creation"],
    category: "Writing & Content",
    rating: 4.5,
    totalVotes: 2654
  },
  {
    icon: BookOpen,
    title: "Book Writer GPT",
    description: "AI-powered book writing assistant that helps authors create compelling narratives, develop characters, and structure their stories professionally.",
    emoji: "📚",
    color: "from-purple-500 to-blue-600",
    videoUrl: "https://www.youtube.com/watch?v=5deYUaqwreo",
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    tags: ["book writing", "storytelling", "publishing", "creative writing", "authors"],
    category: "Writing & Content",
    rating: 4.7,
    totalVotes: 3892
  },
  {
    icon: Eye,
    title: "Clarity Omni",
    description: "Advanced writing assistant that provides comprehensive clarity analysis, readability enhancement, and content optimization for all types of written communication.",
    emoji: "🔍",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://clarityomni.lovable.app/?via=aiwebtools",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377298678930473072/clarity.webp?ex=683874da&is=6837235a&hm=290a2f80b52f013562d0b3f01168973ac86850a011bf4c7dcdfb78ca0e91aad0&=&format=webp&width=2340&height=1312",
    tags: ["writing", "clarity", "readability", "content optimization", "omni", "analysis"],
    category: "Writing & Content",
    rating: 4.5,
    totalVotes: 2876
  },
  {
    icon: BookOpen,
    title: "Children's Picture Book Generator",
    description: "Create engaging children's picture books with AI-generated stories and illustrations. Perfect for parents, educators, and aspiring children's book authors.",
    emoji: "📖",
    color: "from-yellow-500 to-pink-600",
    directUrl: "https://childrenspicturebookgpt.lovable.app/?via=aiwebtools",
    tags: ["children's books", "picture books", "storytelling", "education", "creative writing"],
    category: "Writing & Content",
    rating: 4.6,
    totalVotes: 3245
  }
];
