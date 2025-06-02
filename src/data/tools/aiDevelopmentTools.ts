import { Tool } from "@/types/tools";
import { 
  Code, 
  Cpu, 
  Database, 
  GitBranch, 
  Terminal, 
  Zap,
  Bot,
  Wrench,
  Brain,
  Settings
} from "lucide-react";

export const aiDevelopmentTools: Tool[] = [
  {
    icon: Code,
    title: "GitHub Copilot",
    description: "AI pair programmer that suggests code completions and helps write code faster. Integrates with popular IDEs and code editors.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://github.com/features/copilot",
    tags: ["AI coding", "code completion", "pair programming", "IDE integration", "developer tools"],
    category: "AI Development Tools",
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: Cpu,
    title: "Amazon CodeWhisperer",
    description: "AI coding companion that provides code recommendations, security scans, and code transformation suggestions. Enhances developer productivity.",
    emoji: "💻",
    color: "from-orange-500 to-red-600",
    directUrl: "https://aws.amazon.com/codewhisperer/",
    tags: ["AI coding", "code recommendations", "security scans", "code transformation", "AWS"],
    category: "AI Development Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Database,
    title: "SQLCoder",
    description: "AI-powered tool that generates SQL queries from natural language. Simplifies database interactions and accelerates data analysis workflows.",
    emoji: "📊",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.seaql.io/",
    tags: ["SQL generation", "natural language", "database queries", "data analysis", "AI tool"],
    category: "AI Development Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: GitBranch,
    title: " তাবলা",
    description: "AI-powered tool that generates Git commit messages from code changes. Improves code review process and enhances team collaboration.",
    emoji: "🌱",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.tablable.com/",
    tags: ["Git commit messages", "code review", "team collaboration", "AI tool", "version control"],
    category: "AI Development Tools",
    rating: 4.4,
    totalVotes: 3234
  },
  {
    icon: Terminal,
    title: "CodiumAI",
    description: "AI-powered tool that generates meaningful tests for your code. Catches bugs before they reach production and improves code reliability.",
    emoji: "🧪",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://www.codium.ai/",
    tags: ["AI testing", "code reliability", "bug detection", "test generation", "developer tools"],
    category: "AI Development Tools",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Zap,
    title: "Mutable.ai",
    description: "AI-powered platform that helps developers generate, modify, and understand code faster. Automates repetitive tasks and accelerates development workflows.",
    emoji: "⚡",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://mutable.ai/",
    tags: ["AI coding", "code generation", "code modification", "code understanding", "automation"],
    category: "AI Development Tools",
    rating: 4.6,
    totalVotes: 3890
  },
  {
    icon: Bot,
    title: "BuildAI",
    description: "No-code platform for building AI-powered applications and chatbots. Create custom AI solutions without programming knowledge.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://gumroad.com/a/815886803/cahfki",
    tags: ["no-code", "AI applications", "chatbots", "custom AI", "drag-and-drop"],
    category: "AI Development Tools",
    rating: 4.2,
    totalVotes: 2876
  },
  {
    icon: Wrench,
    title: "Adrenaline",
    description: "AI-powered tool that automatically fixes bugs in your code. Reduces debugging time and improves code quality.",
    emoji: "🛠️",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.adrenaline.com/",
    tags: ["AI debugging", "bug fixing", "code quality", "automation", "developer tools"],
    category: "AI Development Tools",
    rating: 4.3,
    totalVotes: 2654
  },
  {
    icon: Brain,
    title: "Mintlify Doc Writer",
    description: "AI-powered tool that automatically generates documentation for your code. Simplifies documentation process and improves code maintainability.",
    emoji: "🧠",
    color: "from-green-500 to-cyan-600",
    directUrl: "https://mintlify.com/",
    tags: ["AI documentation", "code documentation", "documentation generation", "automation", "developer tools"],
    category: "AI Development Tools",
    rating: 4.5,
    totalVotes: 3123
  },
  {
    icon: Settings,
    title: "v0 by Vercel",
    description: "AI-powered tool that generates React code from text descriptions. Simplifies UI development and accelerates front-end development workflows.",
    emoji: "⚙️",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://v0.dev/",
    tags: ["AI code generation", "React code", "UI development", "front-end development", "Vercel"],
    category: "AI Development Tools",
    rating: 4.6,
    totalVotes: 3567
  }
];
