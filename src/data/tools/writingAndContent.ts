
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
