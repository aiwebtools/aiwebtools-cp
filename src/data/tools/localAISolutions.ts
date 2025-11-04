
import { Tool } from "@/types/tools";
import { 
  Cpu, Download, Brain
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
    tags: ["local AI", "NVIDIA", "RTX", "privacy", "performance", "local models"],
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
    tags: ["local AI", "model deployment", "privacy", "self-hosted", "AI models", "local models", "LLM"],
    category: "Local AI Solutions",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: Brain,
    title: "ANYTHING LLM",
    description: "Comprehensive local AI platform for running and managing multiple language models with full privacy control, custom training capabilities, and enterprise-grade features.",
    emoji: "🧠",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://anythingllm.com/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=gd4xkmzLWSQ",
    tags: ["local AI", "language models", "privacy", "enterprise", "custom training", "local models"],
    category: "Local AI Solutions",
    rating: 4.3,
    totalVotes: 2987
  },
  {
    icon: Download,
    title: "Ollama",
    description: "Get up and running with large language models locally. Run Llama 3.3, Phi 4, Gemma 2, and other models. Customize and create your own models with privacy and offline capabilities.",
    emoji: "🦙",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://ollama.com/?via=aiwebtools",
    tags: ["local AI", "local models", "LLM", "Llama", "offline AI", "privacy", "model management", "self-hosted"],
    category: "Local AI Solutions",
    rating: 4.8,
    totalVotes: 5678
  }
];
