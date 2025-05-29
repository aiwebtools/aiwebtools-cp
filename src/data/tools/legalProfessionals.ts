
import { Tool } from "@/types/tools";
import { 
  Scale, 
  FileText, 
  Search, 
  Shield, 
  Gavel, 
  BookOpen, 
  Users, 
  Building, 
  AlertTriangle, 
  CheckCircle,
  Eye,
  Clock,
  Star
} from "lucide-react";

export const legalProfessionals: Tool[] = [
  {
    icon: Scale,
    title: "CoCounsel",
    description: "AI legal assistant that helps with document review, legal research, deposition preparation, and contract analysis.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://casetext.com/cocounsel/",
    tags: ["legal research", "document review", "AI assistant", "contract analysis"],
    category: "Legal Professionals",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: FileText,
    title: "Lawgeex",
    description: "AI-powered contract review platform that automatically identifies legal issues and suggests revisions.",
    emoji: "📄",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.lawgeex.com/",
    tags: ["contract review", "legal AI", "document analysis", "compliance"],
    category: "Legal Professionals",
    rating: 4.4,
    totalVotes: 2890
  },
  {
    icon: Search,
    title: "Westlaw Edge",
    description: "Advanced legal research platform powered by AI that provides comprehensive case law and legal analytics.",
    emoji: "🔍",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://legal.thomsonreuters.com/en/products/westlaw",
    tags: ["legal research", "case law", "analytics", "Thomson Reuters"],
    category: "Legal Professionals",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Shield,
    title: "DoNotPay",
    description: "AI-powered consumer advocacy platform that helps users fight corporations, protect privacy, and save money.",
    emoji: "🛡️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://donotpay.com/",
    tags: ["consumer rights", "legal automation", "privacy protection", "advocacy"],
    category: "Legal Professionals",
    rating: 4.2,
    totalVotes: 3210
  },
  {
    icon: Users,
    title: "Legal Robot",
    description: "AI platform that analyzes legal documents for issues, compliance problems, and suggests improvements.",
    emoji: "🤖",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://legalrobot.com/",
    tags: ["document analysis", "compliance", "legal AI", "automation"],
    category: "Legal Professionals",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Scale,
    title: "Kira Systems",
    description: "Machine learning software for identifying, extracting, and reviewing information in contracts and documents.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://kirasystems.com/",
    tags: ["contract analysis", "machine learning", "due diligence", "document review"],
    category: "Legal Professionals",
    rating: 4.5,
    totalVotes: 3789
  }
];
