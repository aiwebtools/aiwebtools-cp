
import { Tool } from "@/types/tools";
import { 
  Zap, Brain
} from "lucide-react";

export const aiInferencePlatforms: Tool[] = [
  {
    icon: Zap,
    title: "Groq",
    description: "Ultra-fast AI inference platform with lightning-speed response times for real-time AI applications.",
    emoji: "⚡",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://groq.com/",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377356378594873427/image.png?ex=6838aa96&is=68375916&hm=6055b10a7b77314902941a3c85bc62fca7c4dbc8419cb2a038c69cf5f9c74026&",
    tags: ["fast inference", "real-time", "high performance", "AI applications", "speed"],
    category: "AI Inference Platforms",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Brain,
    title: "BIG-AGI",
    description: "Comprehensive AI platform with multiple AI models and advanced features for developers and power users.",
    emoji: "🧠",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://get.big-agi.com/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000003211.jpg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["AI platform", "multiple models", "developers", "advanced features", "power users"],
    category: "AI Inference Platforms",
    rating: 4.3,
    totalVotes: 2789
  }
];
