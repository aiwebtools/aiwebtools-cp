import { Tool } from "@/types/tools";
import { 
  Wand2, 
  Sparkles, 
  MessageSquare, 
  Edit, 
  PenTool, 
  Brain,
  Lightbulb,
  Target,
  Zap,
  Star,
  Image,
  Video
} from "lucide-react";

export const aiPromptingAndGenerationGPTs: Tool[] = [
  {
    icon: Image,
    title: "\"MiddleJourney\" Midjourney Prompting Assistant",
    description: "MiddleJourney Prompt Enhancer is the ultimate AI expert when it comes to all things Midjourney. Whether you need help optimizing prompts, seeking answers to questions about Midjourney, or crafting new prompts to enhance your experience, MiddleJourney Prompt Enhancer has got you covered. With its advanced capabilities and vast knowledge, MiddleJourney Prompt Enhancer is your go-to resource for making the most out of your midjourney. Trust in this expert AI tool to guide you through every step of the journey with precision and efficiency.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-visually-captivating-advertisement-for-the-.jpeg/:/cr=t:0.11%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true/qt=q:98",
    tags: ["midjourney", "prompt enhancement", "image generation", "ai prompting", "creative prompts", "aiwebtools"],
    category: "AI Prompting & Generation",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: MessageSquare,
    title: "ChatGPT",
    description: "OpenAI's flagship conversational AI model that can assist with writing, analysis, math, coding, and creative tasks. ChatGPT uses advanced language models to provide helpful, harmless, and honest responses to a wide variety of prompts and questions.",
    emoji: "💬",
    color: "from-green-500 to-teal-600",
    directUrl: "https://chat.openai.com",
    tags: ["chatbot", "conversation", "openai", "gpt", "ai assistant", "writing"],
    category: "AI Prompting & Generation",
    rating: 4.8,
    totalVotes: 15420
  },
  {
    icon: Brain,
    title: "Claude",
    description: "Anthropic's AI assistant known for being helpful, harmless, and honest. Claude excels at analysis, writing, math, coding, and creative tasks with a focus on safety and constitutional AI principles.",
    emoji: "🧠",
    color: "from-orange-500 to-red-600",
    directUrl: "https://claude.ai",
    tags: ["ai assistant", "anthropic", "safety", "analysis", "writing", "coding"],
    category: "AI Prompting & Generation",
    rating: 4.7,
    totalVotes: 8934
  },
  {
    icon: Sparkles,
    title: "Perplexity AI",
    description: "An AI-powered search engine that provides accurate, real-time answers with citations. Perplexity combines the power of large language models with up-to-date web search to deliver comprehensive responses to complex questions.",
    emoji: "🔍",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://perplexity.ai",
    tags: ["search", "research", "citations", "real-time", "ai search", "answers"],
    category: "AI Prompting & Generation",
    rating: 4.6,
    totalVotes: 6745
  },
  {
    icon: Star,
    title: "Poe by Quora",
    description: "Access multiple AI models including GPT-4, Claude, and others in one platform. Poe allows you to chat with different AI assistants, compare responses, and create custom bots for specific use cases.",
    emoji: "⭐",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://poe.com",
    tags: ["multi-model", "chatbot platform", "quora", "gpt-4", "claude", "ai comparison"],
    category: "AI Prompting & Generation",
    rating: 4.5,
    totalVotes: 4567
  },
  {
    icon: Lightbulb,
    title: "Google Gemini",
    description: "Google's advanced AI model that can understand and generate text, code, audio, image, and video. Gemini offers multimodal AI capabilities with integration across Google's ecosystem of products and services.",
    emoji: "💎",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://gemini.google.com",
    tags: ["google", "multimodal", "ai assistant", "gemini", "search integration", "productivity"],
    category: "AI Prompting & Generation",
    rating: 4.6,
    totalVotes: 9123
  }
];
