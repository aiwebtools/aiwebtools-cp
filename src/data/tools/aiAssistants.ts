
import { Tool } from "@/types/tools";
import { BookOpen, Youtube } from "lucide-react";

export const aiAssistants: Tool[] = [
  {
    icon: Youtube,
    title: "Claude",
    description: "Advanced AI assistant by Anthropic for conversations, writing, analysis, and complex reasoning tasks.",
    emoji: "🤖",
    color: "from-orange-500 to-red-500",
    videoUrl: "https://www.youtube.com/watch?v=oqUclC3gqKs",
    directUrl: "https://claude.ai/",
    tags: ["AI assistant", "conversation", "analysis", "reasoning", "anthropic", "chat"],
    category: "AI Assistants"
  },
  {
    icon: Youtube,
    title: "GROK",
    description: "Advanced AI assistant by xAI with real-time information access and conversational capabilities.",
    emoji: "🤖",
    color: "from-black-500 to-blue-500",
    videoUrl: "https://www.youtube.com/watch?v=LTE8js7y-ss",
    directUrl: "https://grok.com/",
    tags: ["AI assistant", "real-time", "conversation", "xAI", "elon musk", "twitter"],
    category: "AI Assistants"
  },
  {
    icon: BookOpen,
    title: "Mistral",
    description: "Advanced AI language model with strong reasoning capabilities. Access sophisticated AI for complex tasks and conversations.",
    emoji: "🌟",
    color: "from-orange-500 to-red-500",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377358724829810719/image.png?ex=6838acc6&is=68375b46&hm=ab683553ec132d326caf50834883a32cdf8e3230bfa35299cf360227757a75fc&=&format=webp&quality=lossless&width=2848&height=1002",
    directUrl: "https://chat.mistral.ai/chat",
    tags: ["language model", "reasoning", "AI assistant", "advanced", "french ai"],
    category: "AI Assistants"
  },
  {
    icon: BookOpen,
    title: "TheFreedomGPT – Uncensored & Decentralized Chat Tool",
    description: "Access uncensored AI conversations with decentralized technology. Experience free and open AI communication without restrictions.",
    emoji: "🆓",
    color: "from-red-500 to-black-500",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377352651477614672/image.png?ex=6838a71e&is=6837559e&hm=b0dc0aa8fe73a8d3efe08a0bc3e4ac5f04c4bc743d1310505f53e80e933e573a&",
    directUrl: "http://shrsl.com/2meh1-3brt-1iyev",
    tags: ["uncensored", "decentralized", "freedom", "chat", "open source"],
    category: "AI Assistants"
  }
];
