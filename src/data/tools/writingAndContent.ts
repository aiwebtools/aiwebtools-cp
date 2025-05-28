
import { Tool } from "@/types/tools";
import { 
  PenTool, FileText, Edit3, BookOpen, Type, Lightbulb,
  Brain, Zap, Star, Award, Crown, Diamond, Rocket,
  Heart, Coffee, Gift, Cake, Sparkles, Wand2,
  Search, Target, TrendingUp, Users, Globe, Settings
} from "lucide-react";

export const writingAndContent: Tool[] = [
  {
    icon: PenTool,
    title: "Grant Writer GPT",
    description: "Professional grant writing assistant for non-profits, researchers, and organizations. Expert guidance on crafting compelling grant proposals, funding applications, and securing financial support.",
    emoji: "💰",
    color: "from-green-500 to-blue-600",
    directUrl: "https://grantwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-illustration-of-an-advertiseme_7T7dn.png/:/cr=t:10.87%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    tags: ["grant writing", "funding", "proposals", "non-profit", "research grants"],
    category: "Writing & Content",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Edit3,
    title: "Article and Blog Rewriter GPT",
    description: "Advanced content rewriting and optimization tool. Transform existing articles, blogs, and content into fresh, unique, and engaging material while maintaining original meaning.",
    emoji: "✏️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005696.jpg/:/cr=t:9.9%25,l:0%25,w:100%25,h:80.21%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["content rewriting", "blog optimization", "article editing", "SEO content", "content creation"],
    category: "Writing & Content",
    rating: 4.2,
    totalVotes: 3234
  }
];
