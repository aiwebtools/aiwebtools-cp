
import { Tool } from "@/types/tools";
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Database, 
  GitBranch, 
  Layers,
  Zap,
  Bot,
  Settings,
  Package,
  Globe,
  Wand2
} from "lucide-react";

export const aiDevelopmentTools: Tool[] = [
  {
    icon: Wand2,
    title: "GOOGLE LABS & GOOGLE FLOW",
    description: "Google's experimental lab featuring cutting-edge AI tools and technologies. Explore innovative AI projects, experimental features, and next-generation development tools from Google's research teams.",
    emoji: "🧪",
    color: "from-blue-500 to-green-600",
    directUrl: "https://labs.google/",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377359942578864258/image.png?ex=6838ade8&is=68375c68&hm=2c5d8dca1bb48660d84d1b8c6152d535a0b3ee3b8efb6f162286901003896fc4&",
    tags: ["google labs", "experimental ai", "google flow", "ai research", "innovation", "development tools", "google ai"],
    category: "AI Development Tools",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: Code2,
    title: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster and with less work. Get AI suggestions for whole lines or entire functions right in your editor.",
    emoji: "👨‍💻",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://github.com/features/copilot",
    tags: ["code completion", "AI programming", "GitHub", "code suggestions", "developer tools"],
    category: "AI Development Tools",
    rating: 4.7,
    totalVotes: 8934
  },
  {
    icon: Terminal,
    title: "Replit Ghostwriter",
    description: "AI-powered code completion and generation in the cloud-based IDE. Write, run, and collaborate on code with AI assistance.",
    emoji: "👻",
    color: "from-orange-500 to-red-600",
    directUrl: "https://replit.com/",
    tags: ["cloud IDE", "code completion", "collaboration", "AI coding", "web development"],
    category: "AI Development Tools",
    rating: 4.5,
    totalVotes: 5432
  },
  {
    icon: Bot,
    title: "Tabnine",
    description: "AI code completion tool that predicts and suggests your next lines of code. Supports multiple programming languages and IDEs.",
    emoji: "🤖",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://www.tabnine.com/",
    tags: ["code completion", "multiple languages", "IDE support", "AI predictions", "productivity"],
    category: "AI Development Tools",
    rating: 4.4,
    totalVotes: 6543
  },
  {
    icon: Zap,
    title: "Cursor",
    description: "AI-first code editor built for productivity. Write, edit, and chat about your code with AI assistance integrated directly into the editor.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://cursor.sh/",
    tags: ["AI editor", "code chat", "productivity", "integrated AI", "smart editing"],
    category: "AI Development Tools",
    rating: 4.6,
    totalVotes: 4321
  }
];
