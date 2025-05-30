
import { Tool } from "@/types/tools";
import { 
  Zap, 
  Settings, 
  Bot, 
  Workflow, 
  GitBranch,
  Cpu,
  Link,
  Timer,
  Repeat,
  Target
} from "lucide-react";

export const automationAndWorkflowTools: Tool[] = [
  {
    icon: Zap,
    title: "Zapier",
    description: "Automation platform that connects your apps and services. Create workflows that automatically move info between your web apps.",
    emoji: "⚡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://zapier.com/",
    tags: ["automation", "workflow", "app integration", "productivity", "no-code"],
    category: "Automation & Workflow Tools",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Bot,
    title: "Make (Integromat)",
    description: "Visual platform for creating, building and automating workflows. Connect apps and services with powerful automation scenarios.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.make.com/",
    tags: ["visual automation", "workflow builder", "integration", "scenarios", "advanced automation"],
    category: "Automation & Workflow Tools",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Settings,
    title: "Microsoft Power Automate",
    description: "Workflow automation service that helps automate repetitive business processes across applications and services.",
    emoji: "⚙️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://powerautomate.microsoft.com/",
    tags: ["Microsoft", "business automation", "workflow", "enterprise", "process automation"],
    category: "Automation & Workflow Tools",
    rating: 4.4,
    totalVotes: 3789
  },
  {
    icon: GitBranch,
    title: "GitHub Actions",
    description: "Automation platform that makes it easy to automate all your software workflows with CI/CD. Build, test, and deploy your code.",
    emoji: "🔀",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://github.com/features/actions",
    tags: ["CI/CD", "GitHub", "software automation", "deployment", "development workflow"],
    category: "Automation & Workflow Tools",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Link,
    title: "IFTTT",
    description: "Connect different services and devices to create simple conditional statements called applets. If This Then That automation.",
    emoji: "🔗",
    color: "from-green-500 to-blue-600",
    directUrl: "https://ifttt.com/",
    tags: ["conditional automation", "IoT", "smart home", "simple automation", "applets"],
    category: "Automation & Workflow Tools",
    rating: 4.2,
    totalVotes: 2987
  }
];
