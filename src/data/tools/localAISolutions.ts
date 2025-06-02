import { Tool } from "@/types/tools";
import { 
  Cpu, 
  HardDrive, 
  Shield, 
  Download, 
  Lock, 
  Server, 
  Terminal, 
  Database,
  Zap,
  Brain
} from "lucide-react";

export const localAISolutions: Tool[] = [
  {
    icon: Cpu,
    title: "ChatRTX by NVIDIA",
    description: "Local AI chat assistant powered by NVIDIA RTX technology for enhanced privacy and performance.",
    emoji: "💻",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.nvidia.com/en-us/ai-on-rtx/chatrtx/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/rtxchat%20pic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["local AI", "NVIDIA", "RTX", "privacy", "performance"],
    category: "Local AI Solutions",
    rating: 4.2,
    totalVotes: 2345
  },
  {
    icon: Download,
    title: "LM STUDIO – Run AI Locally & Download & Deploy Countless AI Models",
    description: "Local AI model deployment platform for running and managing AI models on your own hardware with privacy and control.",
    emoji: "💾",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://lmstudio.ai/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=yBI1nPep72Q",
    tags: ["local AI", "model deployment", "privacy", "self-hosted", "AI models"],
    category: "Local AI Solutions",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: Brain,
    title: "Freedom GPT",
    description: "Uncensored AI chatbot that runs locally on your device, providing privacy-focused conversations without content restrictions or data collection.",
    emoji: "🧠",
    color: "from-green-500 to-blue-600",
    directUrl: "http://shrsl.com/2meh1-3brt-1iyev",
    tags: ["uncensored AI", "local AI", "privacy", "chatbot", "no restrictions"],
    category: "AI Assistants",
    rating: 4.2,
    totalVotes: 2876
  },
  {
    icon: Brain,
    title: "ANYTHING LLM",
    description: "Comprehensive local AI platform for running and managing multiple language models with full privacy control, custom training capabilities, and enterprise-grade features.",
    emoji: "🧠",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://anythingllm.com/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=gd4xkmzLWSQ",
    tags: ["local AI", "language models", "privacy", "enterprise", "custom training"],
    category: "Local AI Solutions",
    rating: 4.3,
    totalVotes: 2987
  }
];
