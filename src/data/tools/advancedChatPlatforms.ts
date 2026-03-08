import { Tool } from "@/types/tools";
import { 
  MessageSquare, 
  Bot, 
  Zap, 
  Brain, 
  Wand2, 
  Search, 
  Users, 
  Star,
  Globe,
  Shield,
  Image,
  Download,
  Building,
  Sparkles
} from "lucide-react";

import chatgptHero from "@/assets/tools/chatgpt-hero.jpg";
import perplexityAiHero from "@/assets/tools/perplexity-ai-hero.jpg";
import poeHero from "@/assets/tools/poe-hero.jpg";

export const advancedChatPlatforms: Tool[] = [
  {
    icon: MessageSquare,
    title: "ChatGPT",
    description: "Advanced conversational AI that can assist with writing, analysis, coding, and creative tasks.",
    emoji: "💬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chat.openai.com/?via=aiwebtools",
    imageUrl: chatgptHero,
    tags: ["conversation", "writing", "coding", "analysis"],
    category: "Advanced Chat Platforms",
    rating: 4.8,
    totalVotes: 15420
  },
  {
    icon: MessageSquare,
    title: "YesChat.ai",
    description: "All-in-one solution harnessing the power of cutting-edge AI models including GPT-4, Dalle3, and Claude2. Access up to 50 GPT-4 messages every 3 hours, engage with documents, images, and real-time information.",
    emoji: "💬",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.yeschat.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/yeschat-hero.png",
    tags: ["GPT-4", "Dalle3", "Claude2", "50 messages/3hrs", "document interaction", "real-time info"],
    category: "Advanced Chat Platforms",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: Image,
    title: "GPT4V Online",
    description: "Chat with images, powered by GPT4. Experience a new level of interaction where you can upload images and engage in text-based conversations based on the contents of those images using GPT4's cutting-edge AI technology.",
    emoji: "🖼️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.gpt4v.net/?via=aiwebtools",
    imageUrl: "/src/assets/tools/gpt4v-hero.png",
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
    directUrl: "https://gpt4all.io/?via=aiwebtools",
    imageUrl: "/src/assets/tools/gpt4all-hero.png",
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
    directUrl: "https://x.com/i/grok/?via=aiwebtools",
    imageUrl: "/src/assets/tools/grok-hero.png",
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
    directUrl: "https://www.microsoft.com/en-us/copilot-app/?via=aiwebtools",
    imageUrl: "/src/assets/tools/microsoft-copilot-hero.png",
    tags: ["Microsoft 365", "Windows integration", "desktop background", "OpenAI partnership", "convenience", "small tasks"],
    category: "Advanced Chat Platforms",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Bot,
    title: "Custom GPT Store",
    description: "Create a custom GPT using your words having a conversation. Creating individualized AIs for specific tasks has never been so easy. ChatGPT Plus exclusive with monetization opportunities for builders.",
    emoji: "🛍️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://chat.openai.com/gpts/?via=aiwebtools",
    imageUrl: "/src/assets/tools/gpt-store-hero.png",
    tags: ["custom GPTs", "ChatGPT Plus", "monetization", "individualized AI", "conversation creation", "builder community"],
    category: "Advanced Chat Platforms",
    rating: 4.9,
    totalVotes: 8956
  },
  {
    icon: Search,
    title: "Perplexity AI",
    description: "Cutting-edge AI-powered search engine and chatbot with advanced NLP and machine learning. GPT-3 model with internet access providing real-time information and content detection capabilities.",
    emoji: "🔍",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.perplexity.ai/?via=aiwebtools",
    imageUrl: perplexityAiHero,
    tags: ["AI search", "real-time information", "content detection", "research", "knowledge engine"],
    category: "Advanced Chat Platforms",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Brain,
    title: "Merlin AI",
    description: "Cutting-edge AI chatbot harnessing NLP, machine learning, and knowledge graphs. Available as Android app and Chrome extension for content creation, customer support, and translation.",
    emoji: "🧙‍♂️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://app.getmerlin.in/plans?ref=mte1mgu4",
    imageUrl: "/src/assets/tools/merlin-ai-hero.png",
    tags: ["AI chatbot", "NLP", "content creation", "browser extension", "multilingual"],
    category: "Advanced Chat Platforms",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: MessageSquare,
    title: "POE",
    description: "Ultimate AI chat assistant driven by Claude, GPT, and Llama models. Free and subscription options with iOS app for convenient AI interactions without ChatGPT login complexities.",
    emoji: "🤖",
    color: "from-green-500 to-blue-600",
    directUrl: "https://poe.com/AI-Tools-GPT/?via=aiwebtools",
    imageUrl: poeHero,
    tags: ["AI chat", "multiple models", "iOS app", "subscription options", "convenient access"],
    category: "Advanced Chat Platforms",
    rating: 4.2,
    totalVotes: 2987
  },
  {
    icon: Wand2,
    title: "ChattyCat",
    description: "AI chatbot embodying adorable cat persona on WhatsApp. Chat, send voice messages, and request images from your virtual feline friend within WhatsApp interface.",
    emoji: "🐱",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://chattycat.ju.mp/?via=aiwebtools",
    imageUrl: "/src/assets/tools/chattycat-hero.png",
    tags: ["WhatsApp bot", "cat persona", "voice messages", "virtual pet", "entertainment"],
    category: "Advanced Chat Platforms",
    rating: 4.0,
    totalVotes: 2234
  }
];
