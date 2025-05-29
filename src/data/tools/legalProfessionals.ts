
import { Tool } from "@/types/tools";
import { 
  Scale, 
  FileText, 
  Gavel, 
  Shield, 
  Book,
  Users,
  Search,
  AlertTriangle,
  Building
} from "lucide-react";

export const legalProfessionals: Tool[] = [
  {
    icon: Scale,
    title: "AI Legal Assistant",
    description: "AI-powered legal assistance for research, document review, and case strategy.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-500",
    directUrl: "https://example.com/ai-legal-assistant",
    tags: ["legal", "AI", "research", "document review"],
    category: "Legal Professionals",
    rating: 4.5,
    totalVotes: 120
  },
  {
    icon: FileText,
    title: "Legal Document Generator",
    description: "Generate legal documents quickly and easily with AI-powered templates.",
    emoji: "📄",
    color: "from-green-500 to-blue-500",
    directUrl: "https://example.com/legal-document-generator",
    tags: ["legal", "documents", "templates", "AI"],
    category: "Legal Professionals",
    rating: 4.2,
    totalVotes: 95
  },
  {
    icon: Gavel,
    title: "AI Contract Analyzer",
    description: "Analyze contracts for potential risks and issues with AI-driven insights.",
    emoji: "🔨",
    color: "from-yellow-500 to-orange-500",
    directUrl: "https://example.com/ai-contract-analyzer",
    tags: ["legal", "contracts", "analysis", "AI"],
    category: "Legal Professionals",
    rating: 4.0,
    totalVotes: 80
  },
  {
    icon: Shield,
    title: "AI Compliance Checker",
    description: "Ensure compliance with legal regulations using AI-powered tools.",
    emoji: "🛡️",
    color: "from-red-500 to-yellow-500",
    directUrl: "https://example.com/ai-compliance-checker",
    tags: ["legal", "compliance", "regulations", "AI"],
    category: "Legal Professionals",
    rating: 4.3,
    totalVotes: 110
  },
  {
    icon: Book,
    title: "AI Legal Research Tool",
    description: "Conduct legal research efficiently with AI-driven search and analysis.",
    emoji: "📚",
    color: "from-purple-500 to-red-500",
    directUrl: "https://example.com/ai-legal-research-tool",
    tags: ["legal", "research", "search", "AI"],
    category: "Legal Professionals",
    rating: 4.6,
    totalVotes: 130
  },
  {
    icon: FileText,
    title: "Contract Review Bot",
    description: "AI-powered contract analysis and review tool for legal professionals with risk assessment and clause optimization.",
    emoji: "📋",
    color: "from-blue-500 to-gray-700",
    directUrl: "https://chatgpt.com/g/g-Y8u3YrS1p-contract-review-bot",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-humanoid-robot-with-a-sleek-desig.png/:/cr=t:2.6%25,l:5.36%25,w:89.29%25,h:79.58%25/rs=w:1200,h:600,cg:true,m",
    category: "Legal Professionals",
    tags: ["contract review", "legal analysis", "risk assessment", "document review", "legal AI"],
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: Users,
    title: "Legislator Link GPT",
    description: "Connect with legislators and government officials with contact information, policy tracking, and civic engagement tools.",
    emoji: "🏛️",
    color: "from-blue-600 to-red-600",
    directUrl: "https://legislatorlink.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4&list=TLGGczTnMbeNmL0yODA1MjAyNQ",
    category: "Legal Professionals",
    tags: ["government", "legislators", "civic engagement", "policy tracking", "political"],
    rating: 4.3,
    totalVotes: 1987
  },
  {
    icon: Scale,
    title: "Criminologist GPT",
    description: "Criminal justice research and analysis assistant for law enforcement, legal professionals, and criminology students.",
    emoji: "🔍",
    color: "from-red-500 to-gray-600",
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jgvqpqmRJi8",
    tags: ["criminology", "criminal justice", "law enforcement", "research"],
    category: "Legal Professionals",
    rating: 4.4,
    totalVotes: 2567
  },
  {
    icon: FileText,
    title: "Legislation Writer GPT",
    description: "Professional legislative drafting assistant for creating, analyzing, and improving legal documents and policies.",
    emoji: "📜",
    color: "from-blue-600 to-gray-700",
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=poOGR-6bb2g",
    tags: ["legislation", "legal drafting", "policy writing", "legal documents"],
    category: "Legal Professionals",
    rating: 4.5,
    totalVotes: 2876
  },
  {
    icon: Shield,
    title: "Public Defender GPT",
    description: "AI assistant for public defenders providing legal research, case preparation, and client advocacy support for criminal defense.",
    emoji: "🛡️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    tags: ["public defender", "criminal defense", "legal aid", "case preparation", "legal research"],
    category: "Legal Professionals",
    rating: 4.3,
    totalVotes: 2123
  }
];
