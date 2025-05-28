
import { Tool } from "@/types/tools";
import { 
  Scale, FileText, Gavel, Shield, Building, 
  Briefcase, Search, Users, CheckCircle,
  Bot, Clipboard
} from "lucide-react";

export const legalProfessionals: Tool[] = [
  {
    icon: Scale,
    title: "Legal Document Analyzer GPT",
    description: "AI-powered legal document analysis tool for lawyers, providing contract review, legal research, and document drafting assistance.",
    emoji: "⚖️",
    color: "from-blue-500 to-gray-600",
    directUrl: "https://legaldocumentanalyzergpt.lovable.app/?via=aiwebtools",
    tags: ["legal", "document analysis", "contract review", "legal research", "law"],
    category: "Legal Professionals",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: FileText,
    title: "Contract Drafting Assistant GPT",
    description: "Specialized AI assistant for creating and reviewing legal contracts, agreements, and legal documents with professional accuracy.",
    emoji: "📄",
    color: "from-green-500 to-blue-600",
    directUrl: "https://contractdraftinggpt.lovable.app/?via=aiwebtools",
    tags: ["contract drafting", "legal documents", "agreements", "legal writing", "law"],
    category: "Legal Professionals",
    rating: 4.4,
    totalVotes: 3021
  },
  {
    icon: Search,
    title: "Legal Research Assistant GPT",
    description: "Advanced AI tool for legal research, case law analysis, statute interpretation, and legal precedent discovery.",
    emoji: "🔍",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://legalresearchgpt.lovable.app/?via=aiwebtools",
    tags: ["legal research", "case law", "statutes", "precedents", "legal analysis"],
    category: "Legal Professionals",
    rating: 4.2,
    totalVotes: 1987
  },
  {
    icon: Bot,
    title: "Contract Review Bot",
    description: "Advanced AI-powered contract review system that analyzes legal agreements, identifies potential issues, and provides comprehensive contract evaluation and risk assessment.",
    emoji: "🤖",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-Y8u3YrS1p-contract-review-bot",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-humanoid-robot-with-a-sleek-desig.png/:/cr=t:2.6%25,l:5.36%25,w:89.29%25,h:79.58%25/rs=w:1200,h:600,cg:true,m",
    tags: ["contract review", "legal analysis", "risk assessment", "agreement analysis", "legal automation"],
    category: "Legal Professionals",
    rating: 4.5,
    totalVotes: 3456
  }
];
