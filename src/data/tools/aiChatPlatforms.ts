
import { Tool } from "@/types/tools";
import { 
  MessageSquare, 
  Users,
  Brain
} from "lucide-react";

export const aiChatPlatforms: Tool[] = [
  {
    icon: MessageSquare,
    title: "Claude",
    description: "Anthropic's advanced AI assistant focused on helpful, harmless, and honest interactions. Excellent for complex reasoning, analysis, and creative tasks with strong ethical guidelines.",
    emoji: "🤖",
    color: "from-orange-500 to-red-600",
    directUrl: "https://claude.ai/",
    videoUrl: "https://www.youtube.com/watch?v=oqUclC3gqKs",
    tags: ["AI assistant", "conversational AI", "reasoning", "analysis", "creative tasks", "ethical AI"],
    category: "AI Chat Platforms",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Users,
    title: "LMSYS CHATBOT ARENA",
    description: "A platform for comparing different AI chatbots side-by-side through blind testing. Users can evaluate responses from various AI models without knowing which model generated each response.",
    emoji: "🥊",
    color: "from-red-500 to-purple-600",
    directUrl: "https://arena.lmsys.org/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-and-electrifying-advertisement-fe.png/:/rs=w:600,cg:true,m/qt=q:98",
    tags: ["AI comparison", "chatbot arena", "model evaluation", "blind testing", "AI benchmarking"],
    category: "AI Chat Platforms",
    rating: 4.5,
    totalVotes: 3234
  },
  {
    icon: Brain,
    title: "Llama by META",
    description: "Meta's open-source large language model family offering powerful AI capabilities for various applications. Available in multiple sizes and configurations for different use cases.",
    emoji: "🦙",
    color: "from-blue-500 to-green-600",
    directUrl: "https://llama.meta.com/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/converted_image.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    tags: ["open source", "large language model", "Meta AI", "LLM", "AI development", "machine learning"],
    category: "AI Chat Platforms",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: MessageSquare,
    title: "ChatGPT",
    description: "OpenAI's flagship conversational AI model that can engage in natural language conversations, answer questions, generate text, and perform various language-based tasks.",
    emoji: "💬",
    color: "from-green-500 to-blue-600",
    directUrl: "https://chat.openai.com/",
    tags: ["conversational AI", "natural language", "text generation", "language model", "OpenAI"],
    category: "AI Chat Platforms",
    rating: 4.9,
    totalVotes: 6789
  },
  {
    icon: MessageSquare,
    title: "Gemini by Google (Bard)",
    description: "Google's AI chatbot designed to provide informative and comprehensive responses. Accesses and processes information from Google Search to provide up-to-date answers.",
    emoji: "♊",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://gemini.google.com/",
    tags: ["AI chatbot", "Google AI", "information retrieval", "search integration", "natural language"],
    category: "AI Chat Platforms",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: MessageSquare,
    title: "Perplexity AI",
    description: "AI-powered search engine that provides direct answers and citations to sources. Combines search and conversational AI for efficient information retrieval.",
    emoji: "❓",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.perplexity.ai/",
    tags: ["AI search engine", "information retrieval", "citations", "conversational AI", "research tool"],
    category: "AI Chat Platforms",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: MessageSquare,
    title: "Pi, Your Personal AI",
    description: "Inflection AI's personal AI assistant designed to provide support, companionship, and information. Focuses on empathetic and personalized interactions.",
    emoji: "🫂",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://pi.ai/",
    tags: ["personal AI", "AI assistant", "companionship", "personalized support", "Inflection AI"],
    category: "AI Chat Platforms",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: MessageSquare,
    title: "YouChat",
    description: "AI-powered chat assistant integrated into the You.com search engine. Provides conversational answers and summaries of search results.",
    emoji: "🤖",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://you.com/",
    tags: ["AI chat assistant", "search engine", "summarization", "conversational AI", "You.com"],
    category: "AI Chat Platforms",
    rating: 4.4,
    totalVotes: 2654
  }
];
