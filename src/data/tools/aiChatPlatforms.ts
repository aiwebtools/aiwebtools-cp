import { Tool } from "@/types/tools";
import { 
  MessageCircle, 
  Bot, 
  Zap, 
  Brain, 
  Star,
  Globe,
  Users,
  Shield,
  Code,
  Search,
  Eye,
  Gamepad2,
  Target,
  Calculator
} from "lucide-react";

export const aiChatPlatforms: Tool[] = [
  {
    icon: Star,
    title: "GEMINI/GOOGLE AI STUDIO",
    description: "Google's advanced AI chat platform and development studio. Access powerful multimodal AI capabilities, real-time processing, and integrated development tools.",
    emoji: "♊",
    color: "from-blue-500 to-green-600",
    directUrl: "http://g.co/g1referral/911Z9NTK",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/gemini_multimodal_live.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["AI chat", "Google AI", "multimodal AI", "development studio", "real-time"],
    category: "AI Chat Platforms",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: Bot,
    title: "ANYTHING LLM",
    description: "Self-hosted AI chat platform that works with any LLM model, providing complete control over your AI conversations and data privacy.",
    emoji: "🤖",
    color: "from-green-600 to-blue-600",
    directUrl: "https://anythingllm.com/",
    videoUrl: "https://www.youtube.com/watch?v=gd4xkmzLWSQ",
    category: "AI Chat Platforms",
    tags: ["self-hosted", "LLM", "privacy", "open source"],
    rating: 4.6,
    totalVotes: 2456
  },
  {
    icon: Target,
    title: "LMSYS CHATBOT ARENA",
    description: "Compare and evaluate different AI chatbots in head-to-head competitions to find the best AI model for your specific needs.",
    emoji: "🏟️",
    color: "from-purple-600 to-red-600",
    directUrl: "https://arena.lmsys.org/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-and-electrifying-advertisement-fe.png/:/rs=w:600,cg:true,m/qt=q:98",
    category: "AI Chat Platforms",
    tags: ["AI comparison", "chatbot arena", "model evaluation", "benchmarking"],
    rating: 4.7,
    totalVotes: 3245
  },
  {
    icon: Bot,
    title: "Llama by META",
    description: "Meta's advanced large language model for developers and researchers, offering powerful AI capabilities for various applications.",
    emoji: "🦙",
    color: "from-blue-600 to-purple-600",
    directUrl: "https://llama.meta.com/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/converted_image.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    category: "AI Chat Platforms",
    tags: ["Meta", "LLM", "open source", "research"],
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Zap,
    title: "GROK",
    description: "Advanced AI assistant with real-time information access and sophisticated reasoning capabilities for complex queries and analysis.",
    emoji: "⚡",
    color: "from-orange-600 to-red-600",
    directUrl: "https://grok.com/",
    videoUrl: "https://www.youtube.com/watch?v=LTE8js7y-ss",
    category: "AI Chat Platforms",
    tags: ["real-time", "advanced AI", "reasoning", "analysis"],
    rating: 4.6,
    totalVotes: 2987
  },
  {
    icon: Brain,
    title: "BIG-AGI",
    description: "Open-source AI interface that connects to multiple AI providers, offering a unified experience for accessing various AI models.",
    emoji: "🧠",
    color: "from-cyan-600 to-blue-600",
    directUrl: "https://get.big-agi.com/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000003211.jpg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:600,h:300,cg:true/qt=q:98",
    category: "AI Chat Platforms",
    tags: ["open source", "multi-provider", "AI interface", "unified"],
    rating: 4.5,
    totalVotes: 2143
  },
  {
    icon: Shield,
    title: "ChatRTX by NVIDIA",
    description: "Local AI chat application powered by NVIDIA RTX GPUs, providing fast and private AI conversations on your own hardware.",
    emoji: "🛡️",
    color: "from-green-600 to-gray-600",
    directUrl: "https://www.nvidia.com/en-us/ai-on-rtx/chatrtx/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/rtxchat%20pic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    category: "AI Chat Platforms",
    tags: ["NVIDIA", "local AI", "RTX", "private"],
    rating: 4.4,
    totalVotes: 1876
  },
  {
    icon: Shield,
    title: "TheFreedomGPT – Uncensored & Decentralized Chat Tool",
    description: "Decentralized and uncensored AI chat platform focused on free speech and privacy without content restrictions.",
    emoji: "🗽",
    color: "from-red-600 to-orange-600",
    directUrl: "http://shrsl.com/2meh1-3brt-1iyev",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377352651477614672/image.png?ex=6838a71e&is=6837559e&hm=b0dc0aa8fe73a8d3efe08a0bc3e4ac5f04c4bc743d1310505f53e80e933e573a&",
    category: "AI Chat Platforms",
    tags: ["uncensored", "decentralized", "free speech", "privacy"],
    rating: 4.2,
    totalVotes: 1654
  }
];
