import { Tool } from "@/types/tools";
import { 
  Briefcase, BarChart3, FileText, Calculator, TrendingUp,
  Users, Building, Target, Lightbulb, Star, Trophy,
  Award, Crown, Diamond, Rocket, Heart, Smile, Coffee,
  Gift, Cake, PartyPopper, Camera, Music, Palette,
  Brush, PenTool, Scissors, Wand2, Video, ImageIcon,
  Gamepad2, Sparkles, Globe, Code, Zap
} from "lucide-react";

export const businessAndProductivity: Tool[] = [
  {
    icon: Briefcase,
    title: "Business Plan AI",
    description: "AI-powered business plan generator for startups and entrepreneurs.",
    emoji: "💼",
    color: "from-green-400 to-blue-500",
    directUrl: "https://www.simplified.com/ai-business-plan-generator",
    tags: ["business", "startup", "entrepreneur", "planning"],
    category: "Business & Productivity Tools"
  },
  {
    icon: BarChart3,
    title: "SheetAI",
    description: "Generate content, translate, extract data, and more directly in your Google Sheets using AI.",
    emoji: "📊",
    color: "from-yellow-400 to-orange-500",
    directUrl: "https://sheetai.app/",
    tags: ["spreadsheets", "google sheets", "automation", "productivity"],
    category: "Business & Productivity Tools"
  },
  {
    icon: FileText,
    title: "ChatWithPDF",
    description: "Interact with PDF documents using AI-powered chat for summaries and insights.",
    emoji: "📄",
    color: "from-red-400 to-pink-500",
    directUrl: "https://www.chatwithpdf.com/",
    tags: ["pdf", "chat", "summarization", "analysis"],
    category: "Business & Productivity Tools"
  },
  {
    icon: Calculator,
    title: "Taxes GPT",
    description: "Intelligent tax preparation and advisory tool providing guidance on tax calculations, deductions, and compliance for individuals and businesses.",
    emoji: "💰",
    color: "from-green-500 to-blue-600",
    directUrl: "https://taxesgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xkcsSVbBhf4",
    tags: ["taxes", "finance", "accounting", "deductions", "compliance"],
    category: "Business & Productivity Tools"
  },
  {
    icon: TrendingUp,
    title: "Predictive Credit Score Checker GPT",
    description: "Advanced AI tool for analyzing and predicting credit scores, providing insights into credit health and improvement strategies.",
    emoji: "📊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://predictivecreditscoregpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-screenshot-of-a-web-app-with-the-text-predic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["credit score", "finance", "banking", "prediction", "analysis"],
    category: "Business & Productivity Tools"
  },
  {
    icon: Zap,
    title: "MAKE - AUTOMATIONS PLATFORM",
    description: "Powerful automation platform for creating workflows, integrating apps, and streamlining business processes with no-code solutions.",
    emoji: "⚡",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.make.com/en/register?pc=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-striking-advertisement-for-the-ai-tool-make.jpeg/:/cr=t:2.61%25,l:0%25,w:100%25,h:75%25/rs=w:1152,h:576,cg:true",
    tags: ["automation", "workflow", "integration", "no-code", "productivity"],
    category: "Business & Productivity Tools"
  }
];
