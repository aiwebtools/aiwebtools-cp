
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

import zapierHero from "@/assets/tools/zapier-hero.jpg";
import makeHero from "@/assets/tools/make-integromat-hero.jpg";
import n8nHero from "@/assets/tools/n8n-hero.jpg";
import powerAutomateHero from "@/assets/tools/power-automate-hero.jpg";
import githubActionsHero from "@/assets/tools/github-actions-hero.jpg";
import iftttHero from "@/assets/tools/ifttt-hero.jpg";
import browseAiHero from "@/assets/tools/browse-ai-hero.jpg";

export const automationAndWorkflowTools: Tool[] = [
  {
    icon: Zap,
    title: "Zapier",
    description: "Automation platform that connects your apps and services. Create workflows that automatically move info between your web apps.",
    emoji: "⚡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://zapier.com/",
    imageUrl: zapierHero,
    tags: ["Automation Agent", "automation", "workflow", "app integration", "productivity", "no-code", "agent", "Automation", "Workflow Automation"],
    category: "Automation & Workflow Tools",
    rating: 4.8,
    totalVotes: 8567
  },
  {
    icon: Bot,
    title: "Make (Integromat)",
    description: "Visual platform for creating, building and automating workflows. Connect apps and services with powerful automation scenarios.",
    emoji: "🤖",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.make.com/",
    imageUrl: makeHero,
    tags: ["Automation Agent", "visual automation", "workflow builder", "integration", "scenarios", "advanced automation", "agent", "Automation", "Workflow Automation"],
    category: "Automation & Workflow Tools",
    rating: 4.7,
    totalVotes: 7456
  },
  {
    icon: Workflow,
    title: "n8n",
    description: "Free and source-available workflow automation tool. Easily automate tasks across different services with a visual interface.",
    emoji: "🔗",
    color: "from-green-500 to-purple-600",
    directUrl: "https://n8n.io/",
    imageUrl: n8nHero,
    tags: ["Automation Agent", "open source", "workflow automation", "self-hosted", "visual builder", "free automation", "agent", "Automation", "Workflow Automation"],
    category: "Automation & Workflow Tools",
    rating: 4.6,
    totalVotes: 6234
  },
  {
    icon: Settings,
    title: "Microsoft Power Automate",
    description: "Workflow automation service that helps automate repetitive business processes across applications and services.",
    emoji: "⚙️",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://powerautomate.microsoft.com/",
    imageUrl: powerAutomateHero,
    tags: ["Automation Agent", "Microsoft", "business automation", "workflow", "enterprise", "process automation", "agent", "Automation", "Workflow Automation"],
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
    imageUrl: githubActionsHero,
    tags: ["Automation Agent", "CI/CD", "GitHub", "software automation", "deployment", "development workflow", "agent", "Automation"],
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
    imageUrl: iftttHero,
    tags: ["Automation Agent", "conditional automation", "IoT", "smart home", "simple automation", "applets", "agent", "Automation"],
    category: "Automation & Workflow Tools",
    rating: 4.2,
    totalVotes: 2987
  },
  {
    icon: Repeat,
    title: "Browse AI",
    description: "Scrape and monitor data from any website at scale—no-code bots extract structured data and track changes reliably.",
    emoji: "🕸️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.browse.ai/?via=aiwebtools",
    imageUrl: browseAiHero,
    tags: ["Web Tasks Agent", "web scraping", "data extraction", "monitoring", "automation", "no-code", "bots", "agent", "Automation", "Analytics & Reporting"],
    category: "Automation & Workflow Tools",
    rating: 4.6,
    totalVotes: 4100
  }
];
