
import { Tool } from "@/types/tools";
import { 
  Scale, FileText, Gavel, Shield, Building, Search,
  Users, Calculator, Briefcase, Target, Star
} from "lucide-react";

export const legalProfessionals: Tool[] = [
  {
    icon: Scale,
    title: "Legal Draftsmith GPT",
    description: "Professional legal document drafting and contract creation assistant. Generate legal documents, contracts, and legal correspondence with expert guidance.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-humanoid-robot-dressed-like-a.png/:/cr=t:12.29%25,l:9.16%25,w:89.29%25,h:79.58%25/rs=w:600,h:300,cg:true,m/qt=q:98",
    tags: ["legal drafting", "contracts", "legal documents", "professional", "law"],
    category: "Legal Professionals",
    rating: 4.2,
    totalVotes: 1567
  },
  {
    icon: Building,
    title: "Legislator Link GPT",
    description: "Connect with legislators and government officials. Get help with policy research, government communications, and civic engagement initiatives.",
    emoji: "🏛️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://legislatorlink.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4&list=TLGGczTnMbeNmL0yODA1MjAyNQ",
    tags: ["government", "legislation", "policy", "civic engagement", "officials"],
    category: "Legal Professionals",
    rating: 4.1,
    totalVotes: 1234
  }
];
