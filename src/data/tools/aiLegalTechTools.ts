import { Tool } from "@/types/tools";
import { Scale, FileText, Search, Brain, BookOpen, Gavel } from "lucide-react";

import harveyAiHero from "@/assets/tools/harvey-ai-hero.jpg";
export const aiLegalTechTools: Tool[] = [
  {
    icon: Scale,
    title: "Harvey AI",
    description: "AI-powered legal assistant built for law firms and legal departments. Research cases, draft documents, analyze contracts, and get instant legal insights with GPT-4.",
    emoji: "⚖️",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.harvey.ai/?via=aiwebtools",
    imageUrl: harveyAiHero,
    tags: ["legal AI", "contract analysis", "legal research", "document drafting", "law firms", "legal assistant"],
    category: "AI Legal Tech",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: Search,
    title: "Casetext CoCounsel",
    description: "AI legal assistant that researches cases, reviews documents, drafts legal memoranda, and provides litigation support. Built on GPT-4 for legal professionals.",
    emoji: "🔍",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://casetext.com/cocounsel?via=aiwebtools",
    imageUrl: "/src/assets/tools/casetext-cocounsel-hero.png",
    tags: ["legal research", "case law", "document review", "litigation support", "AI assistant", "memoranda"],
    category: "AI Legal Tech",
    rating: 4.7,
    totalVotes: 5678
  },
  {
    icon: BookOpen,
    title: "LexisNexis AI",
    description: "AI-powered legal research platform with intelligent search, case analysis, and predictive analytics. Access comprehensive legal databases with AI-enhanced insights.",
    emoji: "📚",
    color: "from-red-500 to-orange-600",
    directUrl: "https://www.lexisnexis.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/lexisnexis-ai-hero.png",
    tags: ["legal research", "case law", "legal database", "predictive analytics", "legal intelligence", "comprehensive"],
    category: "AI Legal Tech",
    rating: 4.7,
    totalVotes: 9876
  },
  {
    icon: FileText,
    title: "Luminance",
    description: "AI platform for contract review, due diligence, and legal document analysis. Machine learning technology that understands legal language and identifies risks.",
    emoji: "💡",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.luminance.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/luminance-hero.png",
    tags: ["contract review", "due diligence", "document analysis", "risk identification", "M&A", "legal AI"],
    category: "AI Legal Tech",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Brain,
    title: "Westlaw Edge AI",
    description: "AI-enhanced legal research platform with intelligent brief analysis, citation recommendations, and predictive analytics. Thomson Reuters' advanced legal research tool.",
    emoji: "🧠",
    color: "from-blue-600 to-cyan-700",
    directUrl: "https://legal.thomsonreuters.com/en/products/westlaw?via=aiwebtools",
    imageUrl: "/src/assets/tools/westlaw-edge-hero.png",
    tags: ["legal research", "brief analysis", "citations", "predictive analytics", "Thomson Reuters", "case law"],
    category: "AI Legal Tech",
    rating: 4.7,
    totalVotes: 8234
  },
  {
    icon: Gavel,
    title: "Ironclad",
    description: "AI-powered contract lifecycle management platform. Draft, negotiate, approve, and manage contracts with intelligent automation and collaboration tools.",
    emoji: "🔨",
    color: "from-gray-700 to-gray-900",
    directUrl: "https://ironcladapp.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/ironclad-hero.png",
    tags: ["contract management", "CLM", "contract automation", "contract negotiation", "workflow automation", "legal operations"],
    category: "AI Legal Tech",
    rating: 4.6,
    totalVotes: 6789
  },
  {
    icon: FileText,
    title: "Kira Systems",
    description: "Machine learning software for contract analysis and due diligence. Quickly identify, extract, and analyze provisions from contracts and legal documents.",
    emoji: "📄",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://kirasystems.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/kira-systems-hero.png",
    tags: ["contract analysis", "due diligence", "document extraction", "machine learning", "M&A", "legal review"],
    category: "AI Legal Tech",
    rating: 4.5,
    totalVotes: 5234
  }
];
