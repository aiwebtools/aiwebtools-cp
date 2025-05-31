
import { Tool } from "@/types/tools";
import { 
  Scale, 
  FileText, 
  Gavel, 
  Shield, 
  BookOpen, 
  Search,
  Users,
  PenTool,
  Building,
  AlertTriangle
} from "lucide-react";

export const legalProfessionals: Tool[] = [
  {
    icon: FileText,
    title: "Contract Review Bot",
    description: "Contract Review Bot, presented by AiWebTools.Ai, is an advanced AI assistant designed to simplify and streamline the contract review process by breaking down complex legal language into clear, easy-to-understand terms. It identifies risks, ensures fairness, and provides insights to protect your interests.",
    emoji: "📄",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://chatgpt.com/g/g-Y8u3YrS1p-contract-review-bot",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-humanoid-robot-with-a-sleek-desig.png/:/cr=t:2.6%25,l:5.36%25,w:89.29%25,h:79.58%25/rs=w:1200,h:600,cg:true,m",
    tags: ["contract review", "legal analysis", "risk assessment", "legal language", "contract protection"],
    category: "Legal Professionals",
    rating: 4.8,
    totalVotes: 4234
  },
  {
    icon: Scale,
    title: "Public Defender GPT",
    description: "As your dedicated Public Defender AI, I am an advanced legal assistant designed to support you in all aspects of your defense, including legal research, document drafting, evidence analysis, and trial strategy simulation. My ultimate goal is to assist you and your lawyer in proving your innocence and securing the best possible outcome for your situation.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://publicdefendergpt.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=cQR5eFjsPWw",
    tags: ["legal defense", "legal research", "evidence analysis", "trial strategy", "legal assistance"],
    category: "Legal Professionals",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: Gavel,
    title: "Legal Document Generator",
    description: "AI-powered tool for creating legal documents, contracts, and forms with professional formatting and compliance.",
    emoji: "📝",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://example.com/legaldocuments",
    tags: ["legal documents", "contracts", "legal forms", "document generation", "legal compliance"],
    category: "Legal Professionals",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Shield,
    title: "Compliance Monitor",
    description: "Comprehensive compliance tracking and regulatory monitoring system for legal and business requirements.",
    emoji: "🛡️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://example.com/compliancemonitor",
    tags: ["compliance tracking", "regulatory monitoring", "legal requirements", "business compliance", "regulatory alerts"],
    category: "Legal Professionals",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Users,
    title: "Client Management System",
    description: "Comprehensive client relationship management system designed specifically for law firms and legal practices.",
    emoji: "👥",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://example.com/clientmanagement",
    tags: ["client management", "law firm software", "legal CRM", "case management", "client communication"],
    category: "Legal Professionals",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: PenTool,
    title: "Legal Brief Writer",
    description: "AI assistant for drafting legal briefs, motions, and court documents with proper legal formatting and citations.",
    emoji: "✒️",
    color: "from-red-500 to-pink-600",
    directUrl: "https://example.com/legalbriefs",
    tags: ["legal briefs", "court documents", "legal writing", "motions", "legal citations"],
    category: "Legal Professionals",
    rating: 4.5,
    totalVotes: 3234
  },
  {
    icon: Building,
    title: "Corporate Law Assistant",
    description: "Specialized AI tool for corporate law matters including mergers, acquisitions, corporate governance, and securities law.",
    emoji: "🏢",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://example.com/corporatelaw",
    tags: ["corporate law", "mergers and acquisitions", "corporate governance", "securities law", "business law"],
    category: "Legal Professionals",
    rating: 4.6,
    totalVotes: 3567
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment Tool",
    description: "Legal risk assessment and mitigation tool for identifying potential legal issues and compliance risks.",
    emoji: "⚠️",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://example.com/legalrisk",
    tags: ["risk assessment", "legal risks", "compliance risks", "risk mitigation", "legal advisory"],
    category: "Legal Professionals",
    rating: 4.2,
    totalVotes: 2543
  }
];
