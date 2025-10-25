
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
    videoUrl: "https://youtu.be/IYi4mYtDIVA?si=J2aT8BTetKRU-Z6q",
    tags: ["legal defense", "legal research", "evidence analysis", "trial strategy", "legal assistance"],
    category: "Legal Professionals",
    rating: 4.7,
    totalVotes: 3890
  }
];
