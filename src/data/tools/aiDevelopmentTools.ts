import { Tool } from "@/types/tools";
import { 
  Code, 
  Zap, 
  Brain, 
  Cpu, 
  Database, 
  GitBranch, 
  Terminal, 
  Settings, 
  Wrench,
  Monitor,
  Laptop
} from "lucide-react";

export const aiDevelopmentTools: Tool[] = [
  {
    icon: Monitor,
    title: "COPILOT PC",
    description: "Microsoft Surface Pro with built-in AI Copilot functionality - the ultimate AI-powered laptop for developers, creators, and professionals. Experience next-generation computing with integrated AI assistance.",
    emoji: "💻",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.amazon.com/Microsoft-Surface-Touchscreen-Snapdragon-Platinum/dp/B0CXL5272V?crid=LEMQYHS2J097&dib=eyJ2IjoiMSJ9.cgIGc0pguXJmjkzAEYZvoMbMGxiOv53R9GnfoCYrHdepGLnxnerzdCARMTk8qGAKdPxdHxCFdx__l7vXo3_6p3gPOzJDim9eTDqpD5EaStQpQEg93C-WNjzJhUwltSBGZZMh91eLBlvFgRTmcCqb7gNtokNYCXTIxzw7L7r4zKPHPUS0YxvaGakE1krW2At1zmqkVSKKYajvqd7W0rUaiy231CtJfUNh6U9wP1U3Qw0.gm8NrWZ02ryyenfbhZ7MiB6QKwOAwM0zFRjDJ37sPAA&dib_tag=se&keywords=copilot%2B%2B&qid=1717159625&sprefix=copilot%2B%2Caps%2C159&sr=8-1&th=1&linkCode=ll1&tag=aiwebtools0c-20&linkId=7b82884e1f8b3977a1e4adbd20f3fb94&language=en_US&ref_=as_li_ss_tl",
    tags: ["copilot", "microsoft", "surface pro", "ai laptop", "hardware", "ai pc", "copilot pc"],
    category: "AI Development Tools",
    rating: 4.8,
    totalVotes: 2847
  },
  {
    icon: Code,
    title: "GitHub Copilot",
    description: "Your AI pair programmer. Suggests code and entire functions in real-time, directly from your editor.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://github.com/features/copilot",
    tags: ["ai coding", "code completion", "pair programming", "developer tools"],
    category: "AI Development Tools",
    rating: 4.9,
    totalVotes: 6234
  },
  {
    icon: Zap,
    title: "Codeium",
    description: "Free AI-powered code completion tool that supports over 70+ languages and integrates with all major IDEs.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://codeium.com/",
    tags: ["ai coding", "code completion", "ide integration", "developer tools"],
    category: "AI Development Tools",
    rating: 4.7,
    totalVotes: 5123
  },
  {
    icon: Brain,
    title: " তাবৎ",
    description: "AI-powered platform that helps you generate, understand, and maintain code with natural language processing.",
    emoji: "🧠",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.tabnine.com/",
    tags: ["ai coding", "code generation", "natural language processing", "developer tools"],
    category: "AI Development Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Cpu,
    title: "Mutable.ai",
    description: "AI-powered platform that helps you generate, understand, and modify code with natural language processing.",
    emoji: "⚙️",
    color: "from-red-500 to-purple-600",
    directUrl: "https://mutable.ai/",
    tags: ["ai coding", "code generation", "code modification", "developer tools"],
    category: "AI Development Tools",
    rating: 4.5,
    totalVotes: 4123
  },
  {
    icon: Database,
    title: "SQL Chat",
    description: "AI-powered SQL query generator that helps you write SQL queries with natural language processing.",
    emoji: "🗄️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://sqlchat.ai/",
    tags: ["sql", "query generation", "natural language processing", "database tools"],
    category: "AI Development Tools",
    rating: 4.4,
    totalVotes: 3789
  },
  {
    icon: GitBranch,
    title: "Sourcegraph",
    description: "Code search and intelligence platform that helps you understand, navigate, and automate code at scale.",
    emoji: "🌿",
    color: "from-orange-500 to-red-600",
    directUrl: "https://sourcegraph.com/",
    tags: ["code search", "code intelligence", "code automation", "developer tools"],
    category: "AI Development Tools",
    rating: 4.3,
    totalVotes: 3456
  },
  {
    icon: Terminal,
    title: " টার্মিনাল",
    description: "AI-powered terminal that helps you automate tasks and run commands with natural language processing.",
    emoji: "💻",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.cursor.sh/",
    tags: ["terminal", "automation", "natural language processing", "developer tools"],
    category: "AI Development Tools",
    rating: 4.2,
    totalVotes: 3123
  },
  {
    icon: Settings,
    title: "রাইট সো",
    description: "AI-powered platform that helps you generate, understand, and maintain code with natural language processing.",
    emoji: "⚙️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.writesonic.com/ai-article-writer?via=aiwebtools",
    tags: ["ai coding", "code generation", "natural language processing", "developer tools"],
    category: "AI Development Tools",
    rating: 4.1,
    totalVotes: 2987
  },
  {
    icon: Wrench,
    title: "AskCodi",
    description: "AI-powered coding assistant that helps you generate code, debug errors, and learn new concepts.",
    emoji: "🛠️",
    color: "from-red-500 to-orange-600",
    directUrl: "https://www.askcodi.com/",
    tags: ["ai coding", "code generation", "debugging", "developer tools"],
    category: "AI Development Tools",
    rating: 4.0,
    totalVotes: 2876
  },
  {
    icon: Laptop,
    title: "Replit",
    description: "Collaborative browser-based IDE with AI-powered code completion and debugging tools.",
    emoji: "💻",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://replit.com/",
    tags: ["online ide", "code completion", "debugging", "developer tools"],
    category: "AI Development Tools",
    rating: 4.4,
    totalVotes: 3345
  }
];
