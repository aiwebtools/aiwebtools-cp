
import { Tool } from "@/types/tools";
import { 
  Code, 
  Terminal, 
  FileText, 
  Database, 
  Zap, 
  Settings,
  Bot,
  Cpu,
  Wand2,
  Globe
} from "lucide-react";

export const developerAndCodingTools: Tool[] = [
  {
    icon: Globe,
    title: "Lovable.dev - AI Web App Builder",
    description: "Revolutionary AI-powered web application builder that creates full-stack React applications from natural language prompts. Build complete web apps with modern tech stack including React, TypeScript, and Tailwind CSS in minutes. Perfect for 'make an app' queries.",
    emoji: "🌐",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://lovable.dev/?via=aiwebtools",
    tags: ["AI web builder", "React", "TypeScript", "full-stack", "web development", "no-code", "lovable", "make an app", "create app", "build app", "app builder"],
    category: "DEVELOPMENT & CODING",
    rating: 4.9,
    totalVotes: 6789
  },
  {
    icon: Terminal,
    title: "Cursor AI Coding Agent",
    description: "Advanced AI-powered code editor enhancing developer productivity. Features intelligent autocompletion, error detection, debugging, and AI-driven suggestions for faster, smarter coding. Perfect for web development and app creation.",
    emoji: "💻",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.cursor.com/?via=aiwebtools",
    tags: ["code editor", "AI coding", "autocompletion", "debugging", "productivity", "developer tools", "programming", "web development"],
    category: "DEVELOPMENT & CODING",
    rating: 4.7,
    totalVotes: 5678
  },
  {
    icon: FileText,
    title: "Hugging Face GPT Prompt Library",
    description: "Rich repository of hundreds of ChatGPT prompts for creativity and streamlined AI interactions. Treasure trove for developers, researchers, and writers. 100% free resource.",
    emoji: "📚",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://huggingface.co/datasets/fka/awesome-chatgpt-prompts",
    tags: ["prompts", "ChatGPT", "free", "developers", "researchers", "creativity", "Hugging Face"],
    category: "DEVELOPMENT & CODING",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Settings,
    title: "Engineering GPT AI Suite",
    description: "ENGINEERING GPTs by AiWebTools.Ai is a cutting-edge suite of AI-powered tools designed to provide expert-level support across a wide range of engineering disciplines, including Electrical, Mechanical, Civil, and Software Engineering. These tools deliver comprehensive assistance by offering detailed calculations, design recommendations, optimization strategies, and safety protocols tailored to your specific project needs.",
    emoji: "⚙️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://engineeringgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-engineering-_hEePg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    tags: ["engineering", "calculations", "design", "optimization", "safety protocols", "technical support", "web development", "software engineering"],
    category: "DEVELOPMENT & CODING",
    rating: 4.8,
    totalVotes: 4200
  }
];
