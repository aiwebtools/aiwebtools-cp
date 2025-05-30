
import { Tool } from "@/types/tools";
import { 
  Code, 
  Terminal, 
  Cpu, 
  Bot, 
  Zap, 
  Brain,
  Settings,
  FileText,
  GitBranch,
  Bug
} from "lucide-react";

export const aiCodeAssistants: Tool[] = [
  {
    icon: Code,
    title: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster and with less work. Provides intelligent code completions and suggestions powered by OpenAI.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://github.com/features/copilot",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop",
    tags: ["code completion", "pair programming", "GitHub", "OpenAI", "developer tools"],
    category: "AI Development Tools",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Terminal,
    title: "Tabnine",
    description: "AI code assistant that provides intelligent code completions for all programming languages and IDEs. Privacy-focused with on-device processing options.",
    emoji: "⚡",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.tabnine.com/",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop",
    tags: ["code completion", "privacy-focused", "multi-language", "IDE integration", "on-device"],
    category: "AI Development Tools",
    rating: 4.6,
    totalVotes: 3987
  },
  {
    icon: Brain,
    title: "Cursor",
    description: "AI-first code editor built for pair programming with AI. Features intelligent code generation, editing, and debugging assistance with advanced AI models.",
    emoji: "🧠",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://cursor.sh/",
    imageUrl: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=200&fit=crop",
    tags: ["AI editor", "pair programming", "code generation", "debugging", "intelligent editing"],
    category: "AI Development Tools",
    rating: 4.7,
    totalVotes: 4234
  },
  {
    icon: Bot,
    title: "Amazon CodeWhisperer",
    description: "AI coding companion that generates code suggestions in real-time. Trained on billions of lines of code and supports multiple programming languages.",
    emoji: "🤖",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://aws.amazon.com/codewhisperer/",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    tags: ["AWS", "code suggestions", "real-time", "multi-language", "coding companion"],
    category: "AI Development Tools",
    rating: 4.5,
    totalVotes: 3456
  }
];
