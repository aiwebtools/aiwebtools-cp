
import { Tool } from "@/types/tools";
import { 
  Scale, FileText, Search, Shield, Gavel, BookOpen,
  Users, Building, Eye, Lock, CheckSquare, Zap
} from "lucide-react";

export const aiLegalTools: Tool[] = [
  {
    icon: Scale,
    title: "LexisNexis+",
    description: "AI-powered legal research platform with predictive analytics and comprehensive case law analysis.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.lexisnexis.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/lexisnexis-hero.png",
    tags: ["legal research", "case law", "predictive analytics", "legal AI"],
    category: "Professional Services",
    rating: 4.6,
    totalVotes: 2345
  },
  {
    icon: FileText,
    title: "Westlaw Edge",
    description: "AI-enhanced legal research with intelligent document analysis and citation network visualization.",
    emoji: "📄",
    color: "from-green-500 to-blue-600",
    directUrl: "https://legal.thomsonreuters.com/en/products/westlaw?via=aiwebtools",
    imageUrl: "/src/assets/tools/westlaw-edge-hero.png",
    tags: ["legal research", "document analysis", "citation analysis", "Thomson Reuters"],
    category: "Professional Services",
    rating: 4.5,
    totalVotes: 1987
  },
  {
    icon: Gavel,
    title: "Kira Systems",
    description: "AI contract analysis platform that extracts and analyzes key information from legal documents.",
    emoji: "🔨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://kirasystems.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/kira-systems-hero.png",
    tags: ["contract analysis", "document review", "legal AI", "due diligence"],
    category: "Professional Services",
    rating: 4.4,
    totalVotes: 1654
  },
  {
    icon: Search,
    title: "ROSS Intelligence",
    description: "AI legal research assistant that understands natural language queries and provides relevant case law.",
    emoji: "🔍",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://rossintelligence.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/ross-intelligence-hero.png",
    tags: ["legal AI", "natural language", "case research", "legal assistant"],
    category: "Professional Services",
    rating: 4.3,
    totalVotes: 1432
  },
  {
    icon: Eye,
    title: "Luminance",
    description: "AI platform for legal document review and analysis with machine learning-powered contract intelligence.",
    emoji: "👁️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.luminance.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/luminance-hero.png",
    tags: ["document review", "contract intelligence", "legal AI", "machine learning"],
    category: "Professional Services",
    rating: 4.2,
    totalVotes: 1876
  }
];
