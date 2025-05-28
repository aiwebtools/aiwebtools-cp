import { Tool } from "@/types/tools";
import { 
  Scale, FileText, Briefcase, Shield, 
  BookOpen, Search, Gavel, Users,
  Building, Globe, Youtube
} from "lucide-react";

export const legalProfessionals: Tool[] = [
  {
    icon: Scale,
    title: "Legal Research Assistant",
    description: "AI-powered legal research tool for case analysis, precedent finding, and legal document preparation.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-500",
    directUrl: "https://legal-research.ai",
    tags: ["legal research", "case analysis", "precedents", "legal documents"],
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
    description: "Professional legal document drafting assistant for contracts, agreements, and legal correspondence with expert guidance.",
    emoji: "📄",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-humanoid-robot-dressed-like-a.png/:/cr=t:12.29%25,l:9.16%25,w:89.29%25,h:79.58%25/rs=w:600,h:300,cg:true,m/qt=q:98",
    tags: ["legal drafting", "contracts", "agreements", "legal documents", "professional"],
    category: "Legal Professionals",
    rating: 4.2,
    totalVotes: 1876
  },
  {
    icon: Building,
    title: "Legislator Link GPT",
    description: "Connect with legislators and understand governmental processes. Navigate political systems and legislative procedures with AI assistance.",
    emoji: "🏛️",
    color: "from-red-500 to-blue-600",
    directUrl: "https://legislatorlink.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4&list=TLGGczTnMbeNmL0yODA1MjAyNQ",
    tags: ["legislation", "government", "political process", "lawmakers", "civic engagement"],
    category: "Legal Professionals",
    rating: 4.1,
    totalVotes: 1654
  }
];
