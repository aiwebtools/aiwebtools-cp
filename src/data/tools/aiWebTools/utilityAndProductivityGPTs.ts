
import { Tool } from "@/types/tools";
import { 
  Wrench, 
  Calculator, 
  Clock, 
  FileText, 
  Search, 
  Database,
  Settings,
  Zap,
  Target,
  BarChart3,
  Brain,
  Lightbulb,
  Binary
} from "lucide-react";

export const utilityAndProductivityGPTs: Tool[] = [
  {
    icon: Search,
    title: "AI Tools Finder GPT",
    description: "Your own personal expert in the world of Ai Tools and knowledge. Locate the best Ai tools for your projects and be presented with step by step guides on any Ai tool that exists.",
    emoji: "🔍",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://aitoolfinder.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=IrKKi3SX89g",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377297452717310022/ai_tools.webp",
    tags: ["ai tools", "tool finder", "ai discovery", "productivity tools", "tool search", "aiwebtools"],
    category: "Utility & Productivity",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Zap,
    title: "MULTITASKER GPT",
    description: "You can give me multiple unrelated tasks at once, and I will work to complete them all for you. Fire away!",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://multitaskergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=y-YZCOzIuDg",
    tags: ["multitasking", "productivity", "task management", "efficiency", "workflow optimization", "aiwebtools"],
    category: "Utility & Productivity",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: Target,
    title: "PERFECT PROMPT ENGINE",
    description: "The Prompt Perfect Engine effortlessly optimizes all your chat prompts. Crafted by prompt engineers, it's perfect for maximizing your potential, whether you're a beginner or aiming for perfection. Additionally, it can execute tasks flawlessly based on the generated prompts. Prompt Perfect Engine is your #1 personal prompt engineer, designed to fit in your pocket and ensure your success.",
    emoji: "🎯",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://perfectpromptengine.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-humanoid-robot-controlli.png/:/cr=t:9.25%25,l:11.96%25,w:73.53%25,h:65.54%25/rs=w:1200,h:600,cg:true,m",
    tags: ["prompt optimization", "ai prompting", "prompt engineering", "productivity", "ai assistance", "aiwebtools"],
    category: "Utility & Productivity",
    rating: 4.9,
    totalVotes: 6789
  },
  {
    icon: FileText,
    title: "Legal Draftsmith GPT",
    description: "Legal Draftsmith GPT by AI Web Tools LLC is your specialized AI-powered legal document creation assistant, bringing precision and professionalism to legal writing through advanced AI technology and comprehensive legal knowledge.",
    emoji: "⚖️",
    color: "from-blue-500 to-gray-600",
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377297449038643261/legaldraftsmith.webp",
    tags: ["legal drafting", "legal documents", "legal assistance", "document creation", "legal writing"],
    category: "Utility & Productivity",
    rating: 4.6,
    totalVotes: 4123
  },
  {
    icon: Lightbulb,
    title: "Custom GPT Ideas & Brainstorming Assistant",
    description: "GPT Ideas and Instructions Assistant",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377297448258764892/gpt_idea_creator.webp",
    tags: ["GPT creation", "brainstorming", "idea generation", "AI assistant", "custom tools"],
    category: "Utility & Productivity",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Binary,
    title: "Binary-Text-Image Converter GPT",
    description: "Unlock the power of binary with the Binary-Text Image Converter GPT by AI Web Tools! This fun and intuitive tool allows you to effortlessly convert text to binary and binary to text, making it simple to communicate in the language of computers.",
    emoji: "🔢",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://binarytoconvertergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377298036224561183/binary.webp",
    tags: ["binary conversion", "text conversion", "coding utilities", "data conversion", "programming tools"],
    category: "Utility & Productivity",
    rating: 4.3,
    totalVotes: 2987
  }
];
