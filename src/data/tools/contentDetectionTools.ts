import { Tool } from "@/types/tools";
import { 
  Search, 
  Eye, 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Scan, 
  FileText,
  Target
} from "lucide-react";

export const contentDetectionTools: Tool[] = [
  {
    icon: Eye,
    title: "Originality.ai",
    description: "Cutting-edge AI content detection and plagiarism checker for content marketers, publishers, and writers. Most accurate detection of ChatGPT, Bard, GPT-4, and paraphrasing content.",
    emoji: "👁️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://originality.ai/?lmref=S_Cj-w",
    tags: ["AI detection", "plagiarism checker", "content verification", "ChatGPT detection", "content marketing"],
    category: "Content Detection Tools",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Scan,
    title: "Plag.ai",
    description: "First AI-driven plagiarism checker with over a decade of operation. University-grade detection with billions of articles database and partnerships with scientific article aggregators.",
    emoji: "🔍",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.plag.ai/",
    tags: ["plagiarism detection", "academic integrity", "AI-driven", "university grade", "scientific articles"],
    category: "Content Detection Tools",
    rating: 4.4,
    totalVotes: 2876
  }
];
