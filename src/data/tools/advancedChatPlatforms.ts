
import { Tool } from "@/types/tools";
import { 
  MessageSquare, 
  Bot, 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Users, 
  Search, 
  Image as ImageIcon, 
  Video, 
  Code, 
  Sparkles,
  Download,
  Building
} from "lucide-react";

export const advancedChatPlatforms: Tool[] = [
  {
    icon: MessageSquare,
    title: "ChatGPT",
    description: "Advanced conversational AI that can assist with writing, analysis, coding, and creative tasks.",
    emoji: "💬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chat.openai.com/",
    tags: ["conversation", "writing", "coding", "analysis"],
    category: "Advanced Chat Platforms",
    rating: 4.8,
    totalVotes: 15420
  },
  {
    icon: Bot,
    title: "Claude",
    description: "AI assistant by Anthropic focused on being helpful, harmless, and honest in conversations.",
    emoji: "🤖",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://claude.ai/",
    tags: ["assistant", "conversation", "helpful", "analysis"],
    category: "Advanced Chat Platforms",
    rating: 4.7,
    totalVotes: 8930
  },
  {
    icon: MessageSquare,
    title: "YesChat.ai",
    description: "All-in-one solution harnessing the power of cutting-edge AI models including GPT-4, Dalle3, and Claude2. Access up to 50 GPT-4 messages every 3 hours, engage with documents, images, and real-time information.",
    emoji: "💬",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.yeschat.ai",
    tags: ["GPT-4", "Dalle3", "Claude2", "50 messages/3hrs", "document interaction", "real-time info"],
    category: "Advanced Chat Platforms",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: ImageIcon,
    title: "GPT4V Online",
    description: "Chat with images, powered by GPT4. Experience a new level of interaction where you can upload images and engage in text-based conversations based on the contents of those images using GPT4's cutting-edge AI technology.",
    emoji: "🖼️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.gpt4v.net/",
    tags: ["GPT-4", "image interaction", "visual content", "image analysis", "cutting-edge AI", "seamless platform"],
    category: "Advanced Chat Platforms",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: Download,
    title: "GPT4ALL",
    description: "Versatile and privacy-conscious AI chatbot that runs locally without the need for a GPU or internet connection. Real-time inference on M1 Macs, train and deploy customized large language models on your hardware.",
    emoji: "💾",
    color: "from-purple-500 to-cyan-600",
    directUrl: "https://gpt4all.io",
    tags: ["local AI", "no internet required", "privacy-conscious", "M1 Mac support", "customizable models", "uncensored"],
    category: "Advanced Chat Platforms",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Zap,
    title: "Grok by X",
    description: "X's frontier language model with state-of-the-art reasoning capabilities. Includes Grok-2 and Grok-2 mini, with FLUX image generator incorporated. Grok-1 is open source and available on GitHub.",
    emoji: "⚡",
    color: "from-blue-500 to-green-600",
    directUrl: "https://x.com/i/grok",
    tags: ["state-of-the-art", "Grok-2", "FLUX generator", "open source", "reasoning capabilities", "Twitter integration"],
    category: "Advanced Chat Platforms",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Building,
    title: "Microsoft Copilot",
    description: "OpenAI partnership with Microsoft creating GPT integrated within Windows browser. Seamlessly integrated, operates directly within desktop background, Microsoft 365 complete compatibility.",
    emoji: "🏢",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.microsoft.com/en-us/copilot-app",
    tags: ["Microsoft 365", "Windows integration", "desktop background", "OpenAI partnership", "convenience", "small tasks"],
    category: "Advanced Chat Platforms",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Sparkles,
    title: "Gemini by Google",
    description: "Extraordinary AI tool with unique multimodal capabilities, seamlessly processes text, images, video, audio, and code. Gemini Ultra's human-level expertise surpasses experts in Massive Multitask Language Understanding.",
    emoji: "💎",
    color: "from-rainbow-500 to-purple-600",
    directUrl: "g.co/g1referral/911Z9NTK",
    tags: ["multimodal", "human-level expertise", "text/image/video/audio", "state-of-the-art", "responsible AI", "transformative"],
    category: "Advanced Chat Platforms",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Bot,
    title: "Custom GPT Store",
    description: "Create a custom GPT using your words having a conversation. Creating individualized AIs for specific tasks has never been so easy. ChatGPT Plus exclusive with monetization opportunities for builders.",
    emoji: "🛍️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://chat.openai.com/gpts",
    tags: ["custom GPTs", "ChatGPT Plus", "monetization", "individualized AI", "conversation creation", "builder community"],
    category: "Advanced Chat Platforms",
    rating: 4.9,
    totalVotes: 8956
  }
];
