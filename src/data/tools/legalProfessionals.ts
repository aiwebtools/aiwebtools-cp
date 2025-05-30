
import { Tool } from "@/types/tools";
import { 
  Scale, 
  FileText, 
  Gavel, 
  Shield, 
  Users, 
  BookOpen, 
  AlertTriangle,
  Crown,
  Building,
  Scroll
} from "lucide-react";

export const legalProfessionals: Tool[] = [
  {
    icon: Gavel,
    title: "Legislation Writer GPT",
    description: "Professional legislative drafting assistance for creating bills, legal documents, policy proposals, and regulatory language for lawmakers and legal professionals.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://legislationwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=poOGR-6bb2g",
    tags: ["legislative drafting", "bill writing", "policy proposals", "legal documents", "regulatory language"],
    category: "Legal Professionals",
    rating: 4.7,
    totalVotes: 3890
  },
  {
    icon: FileText,
    title: "Contract Review Bot",
    description: "Advanced contract analysis and review tool for examining legal agreements, identifying key terms, potential issues, and providing legal insight for contracts.",
    emoji: "📄",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-Y8u3YrS1p-contract-review-bot",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298127777693867/contract.webp?ex=68387456&is=683722d6&hm=fc9392c90bdc45653776a3a2b3eac39d7d64eea5906c6732869c59c4298dde40&",
    tags: ["contract review", "legal analysis", "agreement examination", "legal insight", "contract terms"],
    category: "Legal Professionals",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Users,
    title: "Public Testimony Writer GPT",
    description: "Professional assistance for writing public testimony, legislative comments, and official statements for public hearings and government proceedings.",
    emoji: "🗣️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://publictestimonywriter.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=lPJZg3aaVls",
    tags: ["public testimony", "legislative comments", "government proceedings", "public hearings", "official statements"],
    category: "Legal Professionals",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Building,
    title: "Legislator Link GPT",
    description: "Connect with legislators and government officials with tools for finding representatives, understanding legislative processes, and engaging in civic participation.",
    emoji: "🏛️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://legislatorlink.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4&list=TLGGczTnMbeNmL0yODA1MjAyNQ",
    tags: ["government officials", "legislative processes", "civic participation", "representatives", "political engagement"],
    category: "Legal Professionals",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Scale,
    title: "Legal Draftsmith GPT",
    description: "Professional legal document drafting assistance for creating contracts, legal briefs, motions, and other legal documents with proper formatting and language.",
    emoji: "📜",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377297449038643261/legaldraftsmith.webp?ex=683873b4&is=68372234&hm=9003e14db1833059e5fbf672450b1530df6eb5ba9fa33adfa1806876640b0d6a&",
    tags: ["legal drafting", "document creation", "contract writing", "legal briefs", "legal formatting"],
    category: "Legal Professionals",
    rating: 4.3,
    totalVotes: 2876
  }
];
