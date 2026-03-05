import { Tool } from "@/types/tools";
import { Globe, Bot, Mic, Users, Mail, Brain, Code, Search, BarChart3, Cpu, Shield, Lightbulb, Music, Monitor, Megaphone, Zap } from "lucide-react";

import flyIoHero from "@/assets/tools/fly-io-hero.jpg";
import yapperHero from "@/assets/tools/yapper-hero.jpg";
import teammatesHero from "@/assets/tools/teammates-ai-hero.jpg";
import thelibrarianHero from "@/assets/tools/thelibrarian-hero.jpg";
import mailmodoHero from "@/assets/tools/mailmodo-hero.jpg";
import stediHero from "@/assets/tools/stedi-hero.jpg";
import moveworksHero from "@/assets/tools/moveworks-hero.jpg";
import aiseraHero from "@/assets/tools/aisera-hero.jpg";
import paperHero from "@/assets/tools/paper-co-hero.jpg";
import vibeOtterHero from "@/assets/tools/vibe-otter-hero.jpg";
import aimakesongHero from "@/assets/tools/aimakesong-hero.jpg";
import sevenTapsHero from "@/assets/tools/7taps-hero.jpg";
import handingerHero from "@/assets/tools/handinger-hero.jpg";
import aarenaHero from "@/assets/tools/aarena-hero.jpg";
import blocksTeamHero from "@/assets/tools/blocks-team-hero.jpg";
import dspyHero from "@/assets/tools/dspy-hero.jpg";
import seedreamHero from "@/assets/tools/seedream-hero.jpg";
import operatorHero from "@/assets/tools/operator-openai-hero.jpg";
import mightybotHero from "@/assets/tools/mightybot-hero.jpg";
import lumioHero from "@/assets/tools/lumio-ai-hero.jpg";

export const frontierInfraBatch2026C2: Tool[] = [
  {
    icon: Globe, title: "Fly.io",
    description: "Run agent workloads close to the user, reducing latency for interactive edge-computing agents. Deploy globally distributed applications with built-in GPU support for AI inference at the edge.",
    emoji: "✈️", color: "from-purple-600 to-purple-800",
    directUrl: "https://fly.io/?via=aiwebtools", imageUrl: flyIoHero,
    tags: ["Developer Tools", "AI Agents", "edge computing", "low latency", "global deployment", "GPU", "infrastructure"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Mic, title: "Yapper",
    description: "A voice-to-text agent for Mac that is 3.75x faster than standard typing and operates 100% offline for total privacy. Speak your code, emails, and documents with zero lag and perfect formatting.",
    emoji: "🎙️", color: "from-green-500 to-green-700",
    directUrl: "https://yapper.app/?via=aiwebtools", imageUrl: yapperHero,
    tags: ["Productivity & Utilities", "voice-to-text", "dictation", "Mac", "offline", "privacy", "speed typing"], category: "Productivity & Utilities", rating: 4.5,
  },
  {
    icon: Users, title: "Teammates.ai",
    description: "Offers autonomous 'Teammates' that take on entire business functions, such as an end-to-end Finance Ops agent. Digital employees that handle complete workflows from intake to completion.",
    emoji: "🤝", color: "from-blue-500 to-blue-700",
    directUrl: "https://teammates.ai/?via=aiwebtools", imageUrl: teammatesHero,
    tags: ["AI Agents", "Business & Productivity", "digital employees", "Finance Ops", "autonomous", "business functions", "Automation Agent"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Bot, title: "TheLibrarian.io",
    description: "A WhatsApp-based personal assistant agent that helps users manage their day through a chat interface they already use. Schedule tasks, set reminders, and organize your life via familiar messaging.",
    emoji: "📚", color: "from-green-500 to-green-600",
    directUrl: "https://thelibrarian.io/?via=aiwebtools", imageUrl: thelibrarianHero,
    tags: ["Productivity & Utilities", "AI Agents", "WhatsApp", "personal assistant", "task management", "messaging", "daily planning"], category: "Productivity & Utilities", rating: 4.3,
  },
  {
    icon: Mail, title: "Mailmodo AI",
    description: "An email marketing agent that autonomously optimizes send times and subject lines based on real-time recipient behavior. Interactive AMP emails with AI-driven personalization and campaign automation.",
    emoji: "📧", color: "from-blue-500 to-indigo-600",
    directUrl: "https://mailmodo.com/?via=aiwebtools", imageUrl: mailmodoHero,
    tags: ["Marketing & Sales", "AI Agents", "email marketing", "send optimization", "subject lines", "personalization", "AMP emails"], category: "Marketing & Sales", rating: 4.5,
  },
  {
    icon: Shield, title: "Stedi",
    description: "A specialized agent for healthcare clearinghouses that autonomously processes medical claims and EDI transactions. Streamlines the complex world of healthcare data exchange with modern APIs.",
    emoji: "🏥", color: "from-blue-400 to-blue-600",
    directUrl: "https://stedi.com/?via=aiwebtools", imageUrl: stediHero,
    tags: ["Health & Wellness", "AI Agents", "healthcare", "EDI", "medical claims", "clearinghouse", "data exchange"], category: "Health & Wellness", rating: 4.5,
  },
  {
    icon: Brain, title: "Moveworks",
    description: "An employee-support agent that uses 'Reasoning over Knowledge' to resolve IT and HR tickets without human intervention. Connects to enterprise knowledge bases for autonomous issue resolution.",
    emoji: "💼", color: "from-blue-600 to-blue-800",
    directUrl: "https://moveworks.com/?via=aiwebtools", imageUrl: moveworksHero,
    tags: ["AI Agents", "Business & Productivity", "IT support", "HR tickets", "knowledge reasoning", "enterprise", "autonomous resolution"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: BarChart3, title: "Aisera",
    description: "A predictive analytics agent that handles service management tasks and supports thousands of enterprise app integrations. AI-powered ITSM, HR, and customer service with proactive issue prevention.",
    emoji: "🔮", color: "from-purple-500 to-pink-600",
    directUrl: "https://aisera.com/?via=aiwebtools", imageUrl: aiseraHero,
    tags: ["AI Agents", "Business & Productivity", "predictive analytics", "ITSM", "service management", "enterprise integrations"], category: "AI Agents", rating: 4.5,
  },
  {
    icon: Monitor, title: "Paper",
    description: "A groundbreaking software design agent that turns high-level ideas into functional, beautiful UI prototypes. Describe what you want and get production-ready designs without manual wireframing.",
    emoji: "📄", color: "from-purple-500 to-purple-700",
    directUrl: "https://paper.co/?via=aiwebtools", imageUrl: paperHero,
    tags: ["Image & Design", "AI Agents", "UI design", "prototyping", "software design", "wireframing", "design automation"], category: "Image & Design", rating: 4.4,
  },
  {
    icon: Globe, title: "Vibe Otter",
    description: "A zero-learning-curve website builder for small businesses that uses an AI agent to do the design work humans can't afford. Get a professional website live in minutes with conversational AI guidance.",
    emoji: "🦦", color: "from-green-400 to-green-600",
    directUrl: "https://vibeotter.com/?via=aiwebtools", imageUrl: vibeOtterHero,
    tags: ["No Code/Low Code", "AI Agents", "website builder", "small business", "zero learning curve", "AI design"], category: "No Code/Low Code", rating: 4.4,
  },
  {
    icon: Music, title: "AIMakeSong",
    description: "A creative agent that transforms text-based ideas into fully produced music tracks with just a few clicks. Generate complete songs with lyrics, melody, and instrumentation from simple text prompts.",
    emoji: "🎵", color: "from-pink-500 to-purple-600",
    directUrl: "https://aimakesong.com/?via=aiwebtools", imageUrl: aimakesongHero,
    tags: ["Audio & Music", "AI Agents", "music generation", "text-to-music", "song creation", "AI music", "creative"], category: "Audio & Music", rating: 4.4,
  },
  {
    icon: Lightbulb, title: "7Taps",
    description: "A highly specialized agent focused on 'Micro-Learning,' autonomously turning long training manuals into 7-minute mobile courses. Bite-sized education for modern workforce training.",
    emoji: "📱", color: "from-orange-500 to-orange-700",
    directUrl: "https://7taps.com/?via=aiwebtools", imageUrl: sevenTapsHero,
    tags: ["Education & Learning", "AI Agents", "micro-learning", "training", "mobile courses", "workforce development", "Learning Platform"], category: "Education & Learning", rating: 4.4,
  },
  {
    icon: Code, title: "Handinger",
    description: "A specialized extraction agent that uses a 20x cheaper API to pull clean content from websites for other AI agents to consume. Essential infrastructure for building web-aware agent pipelines.",
    emoji: "🔗", color: "from-gray-600 to-gray-800",
    directUrl: "https://handinger.com/?via=aiwebtools", imageUrl: handingerHero,
    tags: ["Developer Tools", "AI Agents", "web extraction", "content parsing", "API", "data pipeline", "web scraping"], category: "AI Agents", rating: 4.3,
  },
  {
    icon: Zap, title: "AARENA",
    description: "A 'Battlefield for Models' where developers can test and compare their AI agents against others in anonymous, real-time battles. Benchmark agent performance with competitive evaluation.",
    emoji: "⚔️", color: "from-red-600 to-red-800",
    directUrl: "https://aarena.ai/?via=aiwebtools", imageUrl: aarenaHero,
    tags: ["Developer Tools", "AI Agents", "benchmarking", "model comparison", "competitive testing", "evaluation", "leaderboard"], category: "AI Agents", rating: 4.4,
  },
  {
    icon: Code, title: "Blocks Team",
    description: "A specialized platform that brings coding agents directly into a team's existing Git and Jira development workflows. AI pair programming integrated with your project management tools.",
    emoji: "🧱", color: "from-blue-500 to-blue-700",
    directUrl: "https://blocks.team/?via=aiwebtools", imageUrl: blocksTeamHero,
    tags: ["Developer Tools", "AI Agents", "Git", "Jira", "coding agents", "team workflows", "project management", "Coding Agent"], category: "Coding & Development", rating: 4.4,
  },
  {
    icon: Brain, title: "DSPy",
    description: "A Stanford framework that treats prompting as an optimization problem, allowing agents to self-improve their instructions over time. Declarative, self-improving language model pipelines.",
    emoji: "📐", color: "from-red-600 to-red-800",
    directUrl: "https://github.com/stanfordnlp/dspy/?via=aiwebtools", imageUrl: dspyHero,
    tags: ["Developer Tools", "AI Agents", "Stanford", "prompt optimization", "self-improving", "framework", "Multi-Agent Framework"], category: "AI Agents", rating: 4.6,
  },
  {
    icon: Megaphone, title: "Seedream",
    description: "A specialized creative agent for product visuals, allowing brands to generate high-end studio photography for their goods. AI-powered product photography without the studio costs.",
    emoji: "📸", color: "from-amber-500 to-amber-700",
    directUrl: "https://seedream.ai/?via=aiwebtools", imageUrl: seedreamHero,
    tags: ["Image & Design", "AI Agents", "product photography", "studio visuals", "brand content", "e-commerce", "creative"], category: "Image & Design", rating: 4.4,
  },
  {
    icon: Globe, title: "Operator (OpenAI)",
    description: "A browser-based autonomous agent by OpenAI designed to perform tasks like travel booking and grocery ordering on your behalf. Navigates websites, fills forms, and completes transactions autonomously.",
    emoji: "🤖", color: "from-green-600 to-green-800",
    directUrl: "https://openai.com/operator/?via=aiwebtools", imageUrl: operatorHero,
    tags: ["AI Agents", "Productivity & Utilities", "OpenAI", "browser automation", "task execution", "travel booking", "Web Tasks Agent"], category: "AI Agents", rating: 4.7,
  },
  {
    icon: BarChart3, title: "MightyBot",
    description: "The industry's first autonomous agentic AI designed specifically for transforming the lending and finance sector. Automates loan processing, risk assessment, and compliance documentation.",
    emoji: "🏦", color: "from-green-600 to-green-800",
    directUrl: "https://mightybot.ai/?via=aiwebtools", imageUrl: mightybotHero,
    tags: ["AI Agents", "Business & Productivity", "lending", "finance", "loan processing", "risk assessment", "autonomous"], category: "Business & Productivity", rating: 4.4,
  },
  {
    icon: Cpu, title: "Lumio AI",
    description: "A unified model interface that lets professionals switch between ChatGPT, Gemini, and Claude in one window based on task cost. Compare model outputs side-by-side with transparent pricing.",
    emoji: "💡", color: "from-purple-500 to-purple-700",
    directUrl: "https://lumio.ai/?via=aiwebtools", imageUrl: lumioHero,
    tags: ["Productivity & Utilities", "AI Agents", "multi-model", "ChatGPT", "Gemini", "Claude", "cost optimization", "unified interface"], category: "Productivity & Utilities", rating: 4.5,
  },
];
