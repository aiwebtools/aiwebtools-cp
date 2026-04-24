import { Tool } from "@/types/tools";
import { Store, Sparkles, Bot, MessageSquare } from "lucide-react";

export const aiGptStorePlatforms: Tool[] = [
  {
    icon: Store,
    title: "OpenAI GPT Store",
    description: "Official marketplace for custom ChatGPT models (GPTs). Discover, create, and share specialized AI assistants built on GPT-4 for specific tasks and use cases.",
    emoji: "🏪",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://chatgpt.com/gpts",
    tags: ["GPT Store", "custom GPTs", "ChatGPT", "AI assistants", "OpenAI", "GPT-4", "AI marketplace"],
    category: "AI GPT Store & Platforms",
    rating: 4.9,
    totalVotes: 52341
  },
  {
    icon: Sparkles,
    title: "GPTs Hunter",
    description: "Curated directory and search engine for discovering the best custom GPTs. Browse trending GPTs, filter by category, and find specialized AI assistants for your needs.",
    emoji: "🔍",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.gptshunter.com/?via=aiwebtools",
    tags: ["GPT directory", "GPT discovery", "custom GPTs", "AI tools", "GPT search", "curated GPTs"],
    category: "AI GPT Store & Platforms",
    rating: 4.6,
    totalVotes: 8234
  },
  {
    icon: Bot,
    title: "GPT Review",
    description: "Community-driven platform for reviewing and discovering custom GPTs. Read reviews, ratings, and find the best GPTs based on real user experiences.",
    emoji: "⭐",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://gptreview.io/?via=aiwebtools",
    tags: ["GPT reviews", "GPT ratings", "custom GPTs", "community platform", "GPT discovery", "user reviews"],
    category: "AI GPT Store & Platforms",
    rating: 4.5,
    totalVotes: 6789
  },
  {
    icon: MessageSquare,
    title: "Poe (Quora)",
    description: "Multi-model AI platform providing access to ChatGPT, Claude, GPT-4, and other AI models. Create custom bots and chat with multiple AI assistants in one place.",
    emoji: "💬",
    color: "from-red-500 to-orange-600",
    directUrl: "https://poe.com/?via=aiwebtools",
    tags: ["multi-model AI", "AI platform", "ChatGPT", "Claude", "custom bots", "AI assistants", "Quora"],
    category: "AI GPT Store & Platforms",
    rating: 4.7,
    totalVotes: 23456
  }
];
