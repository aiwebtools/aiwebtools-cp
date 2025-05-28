import { Tool } from "@/types/tools";
import { 
  Settings, Wrench, Code, Terminal, Database, 
  Search, Filter, Download, Upload, Zap,
  Cpu, HardDrive, Monitor, Wifi, Bluetooth,
  FileText, ImageIcon as Image, Video, Music, Archive,
  Binary, Calculator, Clock, Globe, Shield
} from "lucide-react";

export const aiToolsAndUtilities: Tool[] = [
  {
    icon: Zap,
    title: "GODMODE GPT",
    description: "Unlock advanced AI capabilities with unlimited potential. Access powerful AI features, advanced reasoning, and enhanced creative capabilities in one comprehensive tool.",
    emoji: "⚡",
    color: "from-purple-500 to-red-600",
    category: "AI Tools & Utilities",
    directUrl: "https://godmodegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=or3JtZsq6Bc",
    tags: ["advanced AI", "unlimited", "powerful", "enhanced", "capabilities"],
    rating: 4.4,
    totalVotes: 4123
  },
  {
    icon: Search,
    title: "PERFECT PROMPT ENGINE",
    description: "Craft the perfect AI prompts for any task. Advanced prompt engineering tool that helps you create optimized prompts for maximum AI performance and results.",
    emoji: "🎯",
    color: "from-blue-500 to-cyan-600",
    category: "AI Tools & Utilities",
    directUrl: "https://perfectpromptengine.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-humanoid-robot-controlli.png/:/cr=t:9.25%25,l:11.96%25,w:73.53%25,h:65.54%25/rs=w:1200,h:600,cg:true,m",
    tags: ["prompt engineering", "optimization", "AI performance", "productivity", "tools"],
    rating: 4.3,
    totalVotes: 3456
  },
  {
    icon: MessageSquare,
    title: "Clarity Omni GPT",
    description: "Clear and comprehensive AI assistant for complex problem-solving. Get crystal-clear explanations, detailed analysis, and omniscient insights on any topic.",
    emoji: "🔮",
    color: "from-cyan-500 to-purple-600",
    category: "AI Tools & Utilities",
    directUrl: "https://clarityomni.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-scene-of-an-ai-agent-with-a-halo.jpeg/:/cr=t:2.83%25,l:2.83%25,w:94.34%25,h:94.34%25/rs=w:1200,cg:true,m",
    tags: ["clarity", "analysis", "problem solving", "insights", "comprehensive"],
    rating: 4.2,
    totalVotes: 2789
  },
  {
    icon: Binary,
    title: "Binary-Text-Image Converter GPT",
    description: "Advanced conversion tool for binary, text, and image formats. Convert between different data formats, encode/decode information, and handle various file conversions.",
    emoji: "🔄",
    color: "from-green-500 to-blue-600",
    category: "AI Tools & Utilities",
    directUrl: "https://binarytoconvertergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-sophisticated-and-futuristic-advertisement-.jpeg/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    tags: ["binary conversion", "text conversion", "image conversion", "data formats", "encoding"],
    rating: 4.2,
    totalVotes: 2345
  },
  {
    icon: Database,
    title: "ANYTHING LLM",
    description: "Full-stack application for creating private ChatGPT with any documents. Build your own knowledge base and AI assistant with complete privacy and control.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    category: "AI Tools & Utilities",
    directUrl: "https://anythingllm.com/",
    videoUrl: "https://www.youtube.com/watch?v=gd4xkmzLWSQ",
    tags: ["private AI", "knowledge base", "documents", "chatbot", "privacy"],
    rating: 4.5,
    totalVotes: 3456
  }
];
