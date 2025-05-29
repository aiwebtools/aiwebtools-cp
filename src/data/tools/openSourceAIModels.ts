
import { Tool } from "@/types/tools";
import { 
  Brain
} from "lucide-react";

export const openSourceAIModels: Tool[] = [
  {
    icon: Brain,
    title: "Llama by META",
    description: "Meta's open-source large language model family offering powerful AI capabilities for developers and researchers with transparent development.",
    emoji: "🦙",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://llama.meta.com/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/converted_image.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["open source", "language model", "Meta", "developers", "research"],
    category: "Open Source AI Models",
    rating: 4.5,
    totalVotes: 4321
  }
];
