import { Tool } from "@/types/tools";
import { 
  Zap, 
  GitBranch, 
  Settings, 
  Bot, 
  Workflow, 
  Timer, 
  Link, 
  Repeat,
  Play,
  Shuffle,
  Cpu
} from "lucide-react";

export const automationAndWorkflowTools: Tool[] = [
  {
    icon: Workflow,
    title: "Make.com",
    description: "Visual automation platform that connects your apps and services to automate workflows without coding. Create powerful integrations and streamline your business processes.",
    emoji: "🔗",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.make.com/en/register?pc=aiwebtools",
    tags: ["automation", "workflow", "integration", "no-code", "business process"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 3847
  },
  {
    icon: Zap,
    title: "Zapier",
    description: "Connect your apps and automate workflows. Zapier moves info between your web apps automatically, so you can focus on your most important work.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://zapier.com/",
    tags: ["automation", "integration", "workflow", "no-code", "productivity"],
    category: "Business & Productivity",
    rating: 4.7,
    totalVotes: 4231
  },
  {
    icon: GitBranch,
    title: "IFTTT",
    description: "Create simple applets to automate tasks between your favorite apps and devices. Connect your smart home devices, social media accounts, and more.",
    emoji: "⚙️",
    color: "from-green-500 to-blue-600",
    directUrl: "https://ifttt.com/",
    tags: ["automation", "smart home", "applets", "integration", "productivity"],
    category: "Home Automation",
    rating: 4.5,
    totalVotes: 3567
  },
  {
    icon: Settings,
    title: "UiPath",
    description: "End-to-end automation platform with robotic process automation (RPA) capabilities. Automate repetitive tasks and streamline your business operations.",
    emoji: "🤖",
    color: "from-red-500 to-purple-600",
    directUrl: "https://www.uipath.com/",
    tags: ["rpa", "automation", "business process", "enterprise", "workflow"],
    category: "Business & Productivity",
    rating: 4.4,
    totalVotes: 3123
  },
  {
    icon: Bot,
    title: "Microsoft Power Automate",
    description: "Automate repetitive tasks with Microsoft's cloud-based automation platform. Connect your apps and services to streamline your workflows.",
    emoji: "☁️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://powerautomate.microsoft.com/",
    tags: ["automation", "microsoft", "cloud", "workflow", "integration"],
    category: "Business & Productivity",
    rating: 4.3,
    totalVotes: 2876
  },
  {
    icon: Timer,
    title: "Integromat",
    description: "Visual platform for connecting apps and automating workflows with advanced data mapping and transformation capabilities.",
    emoji: "⏱️",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.integromat.com/",
    tags: ["automation", "integration", "workflow", "data mapping", "no-code"],
    category: "Business & Productivity",
    rating: 4.2,
    totalVotes: 2543
  },
  {
    icon: Link,
    title: "Workato",
    description: "Enterprise automation platform for integrating applications and automating business processes with advanced security and governance features.",
    emoji: "🔗",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.workato.com/",
    tags: ["automation", "enterprise", "integration", "business process", "security"],
    category: "Business & Productivity",
    rating: 4.1,
    totalVotes: 2234
  },
  {
    icon: Repeat,
    title: "Automate.io",
    description: "Connect your apps and automate workflows with a simple, drag-and-drop interface. Automate marketing, sales, and customer support tasks.",
    emoji: "🔄",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://automate.io/",
    tags: ["automation", "integration", "workflow", "marketing", "sales"],
    category: "Business & Productivity",
    rating: 4.0,
    totalVotes: 2123
  },
  {
    icon: Play,
    title: "n8n",
    description: "Free and open workflow automation tool. Self-hostable, easily extendable, and comes with fair-code license.",
    emoji: "▶️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://n8n.io/",
    tags: ["automation", "workflow", "open source", "self-hosted"],
    category: "Business & Productivity",
    rating: 4.3,
    totalVotes: 2654
  },
  {
    icon: Shuffle,
    title: "Pipedream",
    description: "Integration platform for connecting APIs and building event-driven workflows. Serverless functions, triggers, and pre-built components.",
    emoji: "🔀",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://pipedream.com/",
    tags: ["integration", "api", "workflow", "serverless", "event-driven"],
    category: "AI Development Tools",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Cpu,
    title: "Project Atlas Cheat Layer",
    description: "AI-powered automation platform that can automate any website or software using natural language commands. Build complex automations without coding knowledge.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://cheatlayer.com/?ref=zta2nth",
    tags: ["automation", "natural language", "website automation", "no-code", "AI commands"],
    category: "Business & Productivity",
    rating: 4.3,
    totalVotes: 1876
  }
];
