
import { Tool } from "@/types/tools";
import { 
  Scale, FileText, Shield, Gavel, Building,
  Users, Search, Brain, Briefcase, Globe,
  BookOpen, PenTool, Eye, Calculator, TrendingUp,
  Star, Trophy, Award, Crown, Diamond, Rocket,
  Heart, Smile, Coffee, Gift, Cake, PartyPopper,
  Camera, Music, Palette, Brush, Scissors,
  Wand2, Video, ImageIcon, Gamepad2, Sparkles
} from "lucide-react";

export const legalProfessionals: Tool[] = [
  {
    icon: Scale,
    title: "Legal Research Assistant",
    description: "AI-powered legal research tool for case law analysis and legal precedent discovery.",
    emoji: "⚖️",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://legalresearch.ai",
    tags: ["legal research", "case law", "precedents", "analysis"],
    category: "Legal Professionals"
  },
  {
    icon: FileText,
    title: "Contract Analyzer",
    description: "Intelligent contract review and analysis tool for legal professionals.",
    emoji: "📄",
    color: "from-green-500 to-blue-600",
    directUrl: "https://contractai.com",
    tags: ["contract analysis", "legal review", "document analysis"],
    category: "Legal Professionals"
  },
  {
    icon: Gavel,
    title: "Litigation Support AI",
    description: "Comprehensive litigation support and case management for law firms.",
    emoji: "🔨",
    color: "from-red-500 to-purple-600",
    directUrl: "https://litigation.ai",
    tags: ["litigation", "case management", "legal support"],
    category: "Legal Professionals"
  },
  {
    icon: Building,
    title: "Corporate Compliance Monitor",
    description: "AI-driven corporate compliance and regulatory monitoring system.",
    emoji: "🏢",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://compliance.ai",
    tags: ["compliance", "regulatory", "corporate law"],
    category: "Legal Professionals"
  },
  {
    icon: Search,
    title: "Due Diligence Specialist",
    description: "Automated due diligence research and risk assessment for legal transactions.",
    emoji: "🔍",
    color: "from-orange-500 to-red-600",
    directUrl: "https://duediligence.ai",
    tags: ["due diligence", "risk assessment", "legal transactions"],
    category: "Legal Professionals"
  },
  {
    icon: Scale,
    title: "Legal Draftsmith GPT",
    description: "Professional legal document drafting and public defense assistance. Create comprehensive legal documents, defense strategies, and courtroom preparation materials.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-humanoid-robot-dressed-like-a.png/:/cr=t:12.29%25,l:9.16%25,w:89.29%25,h:79.58%25/rs=w:600,h:300,cg:true,m/qt=q:98",
    tags: ["legal drafting", "public defense", "legal documents", "courtroom preparation", "defense strategy"],
    category: "Legal Professionals",
    rating: 4.3,
    totalVotes: 2456
  }
];
