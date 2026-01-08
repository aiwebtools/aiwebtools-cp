
import { Tool } from "@/types/tools";
import { 
  Code, 
  GitBranch, 
  Terminal, 
  Database, 
  Globe,
  Package,
  Settings,
  Monitor,
  Zap,
  Box
} from "lucide-react";

export const developerTools: Tool[] = [
  {
    icon: GitBranch,
    title: "GitHub",
    description: "World's largest software development platform with Git version control, collaboration tools, and project management features.",
    emoji: "🐙",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://github.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/github-hero.png",
    tags: ["Version Control", "version control", "Git", "collaboration", "open source", "repositories"],
    category: "DEVELOPMENT & CODING",
    rating: 4.8,
    totalVotes: 8765
  },
  {
    icon: Code,
    title: "Visual Studio Code",
    description: "Free source-code editor with debugging, syntax highlighting, intelligent code completion, and extensive extensions.",
    emoji: "💻",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://code.visualstudio.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/vscode-hero.png",
    tags: ["IDE", "code editor", "debugging", "extensions", "Microsoft", "free"],
    category: "DEVELOPMENT & CODING",
    rating: 4.9,
    totalVotes: 9876
  },
  {
    icon: Package,
    title: "npm",
    description: "Package manager for JavaScript and Node.js. Discover, install, and publish packages to build amazing applications.",
    emoji: "📦",
    color: "from-red-500 to-orange-600",
    directUrl: "https://npmjs.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/npm-hero.png",
    tags: ["Backend", "package manager", "JavaScript", "Node.js", "dependencies", "modules"],
    category: "DEVELOPMENT & CODING",
    rating: 4.7,
    totalVotes: 6789
  },
  {
    icon: Terminal,
    title: "Stack Overflow",
    description: "Question and answer site for professional and enthusiast programmers. Get help, share knowledge, and build careers.",
    emoji: "❓",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://stackoverflow.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/stackoverflow-hero.png",
    tags: ["Code Assistant", "programming help", "Q&A", "community", "knowledge sharing", "debugging"],
    category: "DEVELOPMENT & CODING",
    rating: 4.6,
    totalVotes: 7890
  },
  {
    icon: Globe,
    title: "CodePen",
    description: "Online code editor and learning environment for front-end languages. Write, test, and showcase HTML, CSS, and JavaScript.",
    emoji: "✏️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://codepen.io/?via=aiwebtools",
    imageUrl: "/src/assets/tools/codepen-hero.png",
    tags: ["IDE", "Frontend", "online editor", "front-end", "HTML", "CSS", "JavaScript", "showcase"],
    category: "DEVELOPMENT & CODING",
    rating: 4.5,
    totalVotes: 5432
  }
];
