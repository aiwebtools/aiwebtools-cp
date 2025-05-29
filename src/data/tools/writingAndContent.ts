
import { Tool } from "@/types/tools";
import { 
  PenTool, 
  FileText, 
  BookOpen, 
  Edit3, 
  Type, 
  MessageSquare, 
  Users, 
  Briefcase, 
  Globe, 
  Mail, 
  Target, 
  TrendingUp, 
  Zap, 
  Heart, 
  Coffee, 
  Music, 
  Film, 
  Camera, 
  Palette, 
  Lightbulb,
  Newspaper
} from "lucide-react";

export const writingAndContent: Tool[] = [
  {
    icon: PenTool,
    title: "Book Writer GPT",
    description: "AI-powered book writing assistant that helps authors create compelling narratives, develop characters, and structure their stories professionally.",
    emoji: "📚",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=example",
    tags: ["book writing", "storytelling", "publishing", "creative writing", "authors"],
    category: "Writing & Content",
    rating: 4.7,
    totalVotes: 3892
  },
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
  }
];
