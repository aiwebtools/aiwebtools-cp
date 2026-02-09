import { Tool } from "@/types/tools";
import { CheckSquare, Trello, Calendar, ListChecks, Sparkles, Target } from "lucide-react";
import asanaHero from "@/assets/tools/asana-hero.jpg";
import mondayComHero from "@/assets/tools/monday-com-hero.jpg";
import clickupHero from "@/assets/tools/clickup-hero.jpg";
import notionPmHero from "@/assets/tools/notion-pm-hero.jpg";
import motionHero from "@/assets/tools/motion-hero.jpg";
import jiraHero from "@/assets/tools/jira-hero.jpg";

export const aiProjectManagementTools: Tool[] = [
  {
    icon: CheckSquare,
    title: "Asana AI",
    description: "AI-powered project management with smart goals, automated workflows, and intelligent insights. Streamline team collaboration and boost productivity with AI assistance.",
    emoji: "✅",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://asana.com/?via=aiwebtools",
    imageUrl: asanaHero,
    tags: ["Productivity Agent", "project management", "team collaboration", "task management", "workflow automation", "AI insights", "productivity", "agent", "Project Management", "Team Collaboration"],
    category: "AI Project Management",
    rating: 4.8,
    totalVotes: 18234
  },
  {
    icon: Trello,
    title: "Monday.com AI",
    description: "AI-enhanced work operating system with smart automation, predictive insights, and intelligent task suggestions. Manage projects, workflows, and teams in one platform.",
    emoji: "🎯",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://monday.com/?via=aiwebtools",
    imageUrl: mondayComHero,
    tags: ["Productivity Agent", "work OS", "project management", "automation", "team collaboration", "workflow", "AI insights", "agent", "Project Management", "Workflow Automation"],
    category: "AI Project Management",
    rating: 4.7,
    totalVotes: 16789
  },
  {
    icon: ListChecks,
    title: "ClickUp AI",
    description: "All-in-one project management with AI writing assistant, automated summaries, and smart task creation. One app to replace them all with AI-powered productivity.",
    emoji: "🚀",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://clickup.com/?via=aiwebtools",
    imageUrl: clickupHero,
    tags: ["Productivity Agent", "project management", "AI writing", "task automation", "team collaboration", "productivity", "all-in-one", "agent", "Project Management", "Automation"],
    category: "AI Project Management",
    rating: 4.8,
    totalVotes: 14567
  },
  {
    icon: Sparkles,
    title: "Notion AI",
    description: "AI-powered workspace for notes, docs, wikis, and projects. Write, brainstorm, and organize with AI assistance. Create databases, wikis, and collaborative workspaces.",
    emoji: "📝",
    color: "from-gray-700 to-gray-900",
    directUrl: "https://www.notion.so/?via=aiwebtools",
    imageUrl: notionPmHero,
    tags: ["Productivity Agent", "workspace", "notes", "AI writing", "documentation", "knowledge base", "collaboration", "productivity", "agent", "Document Management", "Team Collaboration"],
    category: "AI Project Management",
    rating: 4.9,
    totalVotes: 24567
  },
  {
    icon: Calendar,
    title: "Motion",
    description: "AI-powered calendar and project manager that automatically schedules your tasks. Optimize your day with intelligent time-blocking and task prioritization.",
    emoji: "📅",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.usemotion.com/?via=aiwebtools",
    imageUrl: motionHero,
    tags: ["Productivity Agent", "Scheduling Agent", "calendar", "time management", "task scheduling", "AI automation", "productivity", "time blocking", "agent", "Meeting & Scheduling", "Project Management"],
    category: "AI Project Management",
    rating: 4.6,
    totalVotes: 7891
  },
  {
    icon: Target,
    title: "Jira (Atlassian Intelligence)",
    description: "AI-enhanced project tracking and agile development tool. Automate workflows, get smart insights, and improve team velocity with Atlassian's AI features.",
    emoji: "🎲",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://www.atlassian.com/software/jira?via=aiwebtools",
    imageUrl: jiraHero,
    tags: ["Productivity Agent", "agile", "project tracking", "software development", "sprint planning", "issue tracking", "AI automation", "agent", "Project Management", "Team Collaboration"],
    category: "AI Project Management",
    rating: 4.5,
    totalVotes: 19876
  }
];
