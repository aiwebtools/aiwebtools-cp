
import { Tool } from "@/types/tools";
import { 
  Bot, Brain, MessageSquare, Users, Shield
} from "lucide-react";

export const aiChatPlatforms: Tool[] = [
  {
    icon: Bot,
    title: "GROK",
    description: "Advanced AI assistant by xAI with real-time information access and cutting-edge conversational capabilities for complex problem-solving.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://grok.com/",
    videoUrl: "https://www.youtube.com/watch?v=LTE8js7y-ss",
    tags: ["AI assistant", "real-time", "conversational AI", "xAI", "advanced"],
    category: "AI Chat Platforms",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Brain,
    title: "Claude",
    description: "Advanced AI assistant by Anthropic with sophisticated reasoning capabilities, ethical AI principles, and comprehensive knowledge across various domains.",
    emoji: "🤖",
    color: "from-blue-500 to-green-600",
    directUrl: "https://claude.ai/",
    videoUrl: "https://www.youtube.com/watch?v=oqUclC3gqKs",
    tags: ["AI assistant", "reasoning", "ethical AI", "conversational", "comprehensive"],
    category: "AI Chat Platforms",
    rating: 4.7,
    totalVotes: 6789
  },
  {
    icon: Brain,
    title: "Mistral",
    description: "Advanced open-source AI language model with sophisticated reasoning capabilities and multilingual support.",
    emoji: "🧠",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://chat.mistral.ai/chat",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377358724829810719/image.png?ex=6838acc6&is=68375b46&hm=ab683553ec132d326caf50834883a32cdf8e3230bfa35299cf360227757a75fc&=&format=webp&quality=lossless&width=2848&height=1002",
    tags: ["open source", "language model", "multilingual", "reasoning", "advanced"],
    category: "AI Chat Platforms",
    rating: 4.4,
    totalVotes: 3123
  },
  {
    icon: Users,
    title: "Hugging Face Chat",
    description: "Open-source AI chat platform with access to various language models and community-driven AI development.",
    emoji: "🤗",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://huggingface.co/chat/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005663.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["open source", "language models", "community", "AI development", "chat"],
    category: "AI Chat Platforms",
    rating: 4.4,
    totalVotes: 3567
  },
  {
    icon: Shield,
    title: "TheFreedomGPT – Uncensored & Decentralized Chat Tool",
    description: "Decentralized and uncensored AI chat platform for free expression and open dialogue without restrictions.",
    emoji: "🔓",
    color: "from-red-500 to-purple-600",
    directUrl: "http://shrsl.com/2meh1-3brt-1iyev",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377352651477614672/image.png?ex=6838a71e&is=6837559e&hm=b0dc0aa8fe73a8d3efe08a0bc3e4ac5f04c4bc743d1310505f53e80e933e573a&",
    tags: ["uncensored", "decentralized", "free expression", "open dialogue", "privacy"],
    category: "AI Chat Platforms",
    rating: 4.0,
    totalVotes: 1654
  }
];
