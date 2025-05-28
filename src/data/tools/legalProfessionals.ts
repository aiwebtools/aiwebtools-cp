
import { Tool } from "@/types/tools";
import { 
  Scale, Gavel
} from "lucide-react";

export const legalProfessionals: Tool[] = [
  {
    icon: Gavel,
    title: "Public Defender GPT",
    description: "Legal defense assistance and public defender support. Get guidance on criminal defense strategies, legal procedures, case preparation, and constitutional rights protection for legal professionals.",
    emoji: "⚖️",
    color: "from-blue-500 to-purple-600",
    category: "Legal Professionals",
    directUrl: "https://publicdefendergpt.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=cQR5eFjsPWw",
    tags: ["legal defense", "criminal law", "public defender", "constitutional rights", "legal procedures"],
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Scale,
    title: "Contract Review Bot",
    description: "Advanced AI contract analysis and review assistant. Get expert help with contract terms, legal language interpretation, and risk assessment for various legal documents.",
    emoji: "⚖️",
    color: "from-blue-500 to-gray-600",
    category: "Legal Professionals",
    directUrl: "https://chatgpt.com/g/g-Y8u3YrS1p-contract-review-bot",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-humanoid-robot-with-a-sleek-desig.png/:/cr=t:2.6%25,l:5.36%25,w:89.29%25,h:79.58%25/rs=w:1200,h:600,cg:true,m",
    tags: ["contract review", "legal", "analysis", "risk assessment", "documentation"],
    rating: 4.3,
    totalVotes: 2789
  },
  {
    icon: Scale,
    title: "Criminologist GPT",
    description: "Expert criminology and forensic science AI assistant. Analyze crime patterns, understand criminal behavior, and explore forensic investigation techniques.",
    emoji: "🔍",
    color: "from-red-500 to-black-600",
    category: "Legal Professionals",
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jgvqpqmRJi8",
    tags: ["criminology", "forensics", "investigation", "crime analysis", "law enforcement"],
    rating: 4.1,
    totalVotes: 2067
  }
];
