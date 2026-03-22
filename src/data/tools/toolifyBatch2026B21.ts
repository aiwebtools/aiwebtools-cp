import { Tool } from "@/types/tools";
import { Monitor, FileText, Video, Mic, Globe, Search, Users, BarChart3, Bot, Brain, Zap, Calendar, CheckSquare, Cpu, Shield, Database } from "lucide-react";

import chronicleHero from "@/assets/tools/chronicle-ai-hero.jpg";
import tangoHero from "@/assets/tools/tango-hero.jpg";
import tldvHero from "@/assets/tools/tldv-hero.jpg";
import lmntHero from "@/assets/tools/lmnt-hero.jpg";
import loomAiHero from "@/assets/tools/loom-ai-hero.jpg";
import similarwebHero from "@/assets/tools/similarweb-hero.jpg";
import spyfuHero from "@/assets/tools/spyfu-hero.jpg";
import phantombusterHero from "@/assets/tools/phantombuster-hero.jpg";
import mangoolsHero from "@/assets/tools/mangools-hero.jpg";
import codaAiHero from "@/assets/tools/coda-ai-hero.jpg";
import linearHero from "@/assets/tools/linear-hero.jpg";
import heightAiHero from "@/assets/tools/height-ai-hero.jpg";
import fellowAiHero from "@/assets/tools/fellow-ai-hero.jpg";
import spinachAiHero from "@/assets/tools/spinach-ai-hero.jpg";
import jamieAiHero from "@/assets/tools/jamie-ai-hero.jpg";
import geniallyHero from "@/assets/tools/genially-hero.jpg";
import mentimeterHero from "@/assets/tools/mentimeter-hero.jpg";
import amieHero from "@/assets/tools/amie-hero.jpg";
import todoistAiHero from "@/assets/tools/todoist-ai-hero.jpg";
import supernormalHero from "@/assets/tools/supernormal-hero.jpg";
import screenpipeHero from "@/assets/tools/screenpipe-hero.jpg";
import labelboxHero from "@/assets/tools/labelbox-hero.jpg";
import snorkelAiHero from "@/assets/tools/snorkel-ai-hero.jpg";
import dagshubHero from "@/assets/tools/dagshub-hero.jpg";
import hunchlyHero from "@/assets/tools/hunchly-hero.jpg";

export const toolifyBatch2026B21: Tool[] = [
  // === AI PRESENTATIONS ===
  {
    icon: Monitor, title: "Chronicle",
    description: "AI-powered presentation tool that transforms raw thoughts into designer-grade slides. Chronicle combines AI with taste to create beautiful, on-brand presentations in minutes — no design skills required. Collaborate with your team and let AI handle the visual storytelling.",
    emoji: "🎨", color: "from-purple-500 to-indigo-600",
    directUrl: "https://chroniclehq.com/?via=aiwebtools", imageUrl: chronicleHero,
    tags: ["Business & Productivity", "presentations", "AI slides", "design", "collaboration", "pitch decks", "storytelling", "on-brand"], category: "Business & Productivity", rating: 4.7,
  },
  // === WORKFLOW DOCUMENTATION ===
  {
    icon: FileText, title: "Tango",
    description: "Automatically creates step-by-step workflow documentation as you work. Tango captures your clicks and keystrokes to generate interactive how-to guides, SOPs, and training materials instantly — no manual screenshots or writing required.",
    emoji: "💃", color: "from-orange-500 to-red-500",
    directUrl: "https://tango.us/?via=aiwebtools", imageUrl: tangoHero,
    tags: ["Business & Productivity", "workflow documentation", "SOPs", "training materials", "knowledge base", "onboarding", "process documentation"], category: "Business & Productivity", rating: 4.6,
  },
  // === MEETING RECORDING ===
  {
    icon: Video, title: "tl;dv",
    description: "AI meeting recorder that transcribes, summarizes, and highlights key moments from your Google Meet and Zoom calls. Automatically generates meeting notes, action items, and searchable timestamps so you never miss important decisions.",
    emoji: "📹", color: "from-teal-500 to-green-600",
    directUrl: "https://tldv.io/?via=aiwebtools", imageUrl: tldvHero,
    tags: ["Business & Productivity", "meeting recorder", "transcription", "meeting notes", "Zoom", "Google Meet", "action items", "AI summary"], category: "Business & Productivity", rating: 4.7,
  },
  // === VOICE AI ===
  {
    icon: Mic, title: "LMNT",
    description: "Ultra-fast, ultra-realistic AI voice synthesis API designed for developers building voice-first applications. LMNT generates human-quality speech with sub-200ms latency, supporting voice cloning and custom voice creation for conversational AI, gaming, and media.",
    emoji: "🎙️", color: "from-blue-600 to-cyan-500",
    directUrl: "https://lmnt.com/?via=aiwebtools", imageUrl: lmntHero,
    tags: ["Audio & Music", "voice synthesis", "text-to-speech", "voice cloning", "API", "real-time", "conversational AI", "developers"], category: "Audio & Music", rating: 4.5,
  },
  // === ASYNC VIDEO ===
  {
    icon: Video, title: "Loom AI",
    description: "Async video messaging platform with AI-powered features including auto-generated summaries, chapters, titles, and tasks from your recordings. Record your screen and camera, then let AI create shareable video messages that save time and replace unnecessary meetings.",
    emoji: "🎥", color: "from-purple-600 to-purple-400",
    directUrl: "https://loom.com/?via=aiwebtools", imageUrl: loomAiHero,
    tags: ["Business & Productivity", "video messaging", "screen recording", "async communication", "AI summaries", "collaboration", "remote work"], category: "Business & Productivity", rating: 4.7,
  },
  // === WEB ANALYTICS ===
  {
    icon: BarChart3, title: "SimilarWeb",
    description: "Competitive intelligence platform providing comprehensive website traffic analytics, audience insights, and market research data. Analyze any website's traffic sources, engagement metrics, and competitor benchmarks to inform your digital strategy.",
    emoji: "📊", color: "from-blue-500 to-blue-700",
    directUrl: "https://similarweb.com/?via=aiwebtools", imageUrl: similarwebHero,
    tags: ["Marketing & Sales", "web analytics", "competitive intelligence", "traffic analysis", "market research", "SEO", "benchmarking", "audience insights"], category: "Marketing & Sales", rating: 4.6,
  },
  // === SEO COMPETITOR ===
  {
    icon: Search, title: "SpyFu",
    description: "SEO and PPC competitor research tool that reveals every keyword your competitors have bought on Google Ads and every organic rank they hold. Download their most profitable keywords, see ad spend history, and discover content gaps to outrank the competition.",
    emoji: "🕵️", color: "from-red-600 to-red-800",
    directUrl: "https://spyfu.com/?via=aiwebtools", imageUrl: spyfuHero,
    tags: ["Marketing & Sales", "SEO", "competitor analysis", "PPC", "keyword research", "Google Ads", "backlinks", "content strategy"], category: "Marketing & Sales", rating: 4.4,
  },
  // === LEAD GEN AUTOMATION ===
  {
    icon: Bot, title: "PhantomBuster",
    description: "Cloud-based lead generation and data extraction automation platform. PhantomBuster provides 100+ pre-built automations (Phantoms) for LinkedIn, Twitter, Instagram, and other platforms to scrape profiles, enrich data, and automate outreach at scale.",
    emoji: "👻", color: "from-purple-600 to-purple-800",
    directUrl: "https://phantombuster.com/?via=aiwebtools", imageUrl: phantombusterHero,
    tags: ["Marketing & Sales", "lead generation", "automation", "LinkedIn scraping", "data extraction", "outreach", "growth hacking", "social media"], category: "Marketing & Sales", rating: 4.4,
  },
  // === SEO TOOLKIT ===
  {
    icon: Search, title: "Mangools",
    description: "All-in-one SEO toolkit with five powerful tools: KWFinder for keyword research, SERPChecker for SERP analysis, SERPWatcher for rank tracking, LinkMiner for backlink analysis, and SiteProfiler for SEO metrics. Affordable and beginner-friendly alternative to enterprise SEO suites.",
    emoji: "🥭", color: "from-green-500 to-orange-500",
    directUrl: "https://mangools.com/?via=aiwebtools", imageUrl: mangoolsHero,
    tags: ["Marketing & Sales", "SEO", "keyword research", "rank tracking", "backlink analysis", "SERP analysis", "site audit", "affordable SEO"], category: "Marketing & Sales", rating: 4.5,
  },
  // === DOC/WORKFLOW AUTOMATION ===
  {
    icon: FileText, title: "Coda AI",
    description: "All-in-one doc that combines documents, spreadsheets, and apps with built-in AI. Coda AI helps teams build custom workflows, automate repetitive tasks, and create living documents that pull data from integrations — replacing dozens of separate tools with one intelligent workspace.",
    emoji: "📄", color: "from-amber-500 to-orange-600",
    directUrl: "https://coda.io/?via=aiwebtools", imageUrl: codaAiHero,
    tags: ["Business & Productivity", "documents", "workflow automation", "spreadsheets", "project management", "integrations", "no-code", "collaboration"], category: "Business & Productivity", rating: 4.6,
  },
  // === PROJECT MANAGEMENT ===
  {
    icon: Zap, title: "Linear",
    description: "Modern project management tool built for high-performance software teams. Linear features a lightning-fast interface, keyboard-first design, automated workflows, and AI-powered issue triage — making it the preferred tracker for startups and engineering teams who value speed.",
    emoji: "⚡", color: "from-violet-500 to-purple-600",
    directUrl: "https://linear.app/?via=aiwebtools", imageUrl: linearHero,
    tags: ["Business & Productivity", "project management", "issue tracking", "software development", "agile", "sprint planning", "engineering", "startups"], category: "Business & Productivity", rating: 4.8,
  },
  {
    icon: Bot, title: "Height AI",
    description: "Autonomous project management tool where AI handles the busywork. Height automatically triages bugs, writes specs, answers standup questions, and keeps projects organized — freeing your team to focus on building instead of managing tickets and status updates.",
    emoji: "🤖", color: "from-indigo-500 to-violet-600",
    directUrl: "https://height.app/?via=aiwebtools", imageUrl: heightAiHero,
    tags: ["Business & Productivity", "AI Agents", "project management", "autonomous PM", "issue tracking", "bug triage", "standup automation", "engineering"], category: "Business & Productivity", rating: 4.5,
  },
  // === MEETING PRODUCTIVITY ===
  {
    icon: Users, title: "Fellow",
    description: "AI meeting productivity platform that records, transcribes, and summarizes meetings while managing agendas, action items, and 1-on-1s. Fellow integrates with 50+ tools to ensure every meeting has a purpose and every decision gets tracked and followed up.",
    emoji: "🤝", color: "from-green-500 to-emerald-600",
    directUrl: "https://fellow.app/?via=aiwebtools", imageUrl: fellowAiHero,
    tags: ["Business & Productivity", "meetings", "transcription", "action items", "1-on-1s", "agendas", "meeting management", "team productivity"], category: "Business & Productivity", rating: 4.6,
  },
  {
    icon: Bot, title: "Spinach AI",
    description: "AI-powered scrum master that joins your meetings, takes notes, and generates action items, tickets, and sprint updates automatically. Spinach integrates with Slack, Jira, and Notion to keep agile workflows running without human project management overhead.",
    emoji: "🥬", color: "from-green-600 to-green-800",
    directUrl: "https://spinach.io/?via=aiwebtools", imageUrl: spinachAiHero,
    tags: ["Business & Productivity", "AI Agents", "scrum master", "agile", "standup automation", "Jira", "sprint planning", "meeting notes"], category: "Business & Productivity", rating: 4.4,
  },
  {
    icon: FileText, title: "Jamie AI",
    description: "AI meeting assistant that generates executive-quality meeting summaries without needing a bot in the call. Jamie works natively on your device to capture audio and produce structured notes with action items, decisions, and key discussion points — supporting any meeting platform.",
    emoji: "📝", color: "from-amber-400 to-yellow-500",
    directUrl: "https://jamie.ai/?via=aiwebtools", imageUrl: jamieAiHero,
    tags: ["Business & Productivity", "meeting notes", "AI assistant", "transcription", "action items", "privacy-first", "no bot required", "summaries"], category: "Business & Productivity", rating: 4.5,
  },
  // === INTERACTIVE CONTENT ===
  {
    icon: Monitor, title: "Genially",
    description: "Interactive content creation platform for building presentations, infographics, gamified learning, and interactive images with animations and clickable elements. Used by 30M+ educators and professionals to create engaging content that goes far beyond static slides.",
    emoji: "✨", color: "from-pink-500 to-orange-500",
    directUrl: "https://genially.com/?via=aiwebtools", imageUrl: geniallyHero,
    tags: ["Education & Research", "interactive content", "presentations", "infographics", "gamification", "e-learning", "animations", "visual content"], category: "Education & Research", rating: 4.5,
  },
  {
    icon: Users, title: "Mentimeter",
    description: "Real-time audience engagement platform with interactive polls, quizzes, word clouds, and Q&A for presentations and meetings. Mentimeter makes any presentation interactive by letting audiences participate live from their phones — used by 300M+ participants worldwide.",
    emoji: "📊", color: "from-blue-500 to-blue-600",
    directUrl: "https://mentimeter.com/?via=aiwebtools", imageUrl: mentimeterHero,
    tags: ["Education & Research", "audience engagement", "interactive polls", "presentations", "quizzes", "word clouds", "live feedback", "Q&A"], category: "Education & Research", rating: 4.6,
  },
  // === AI CALENDAR ===
  {
    icon: Calendar, title: "Amie",
    description: "Beautiful AI-powered calendar that combines scheduling, tasks, and availability sharing in one elegant interface. Amie uses AI to suggest optimal meeting times, auto-schedule tasks, and integrate with your email — designed for people who want a joyful productivity experience.",
    emoji: "📅", color: "from-pink-300 to-rose-400",
    directUrl: "https://amie.so/?via=aiwebtools", imageUrl: amieHero,
    tags: ["Business & Productivity", "calendar", "scheduling", "task management", "AI scheduling", "availability", "time management", "productivity"], category: "Business & Productivity", rating: 4.6,
  },
  // === TASK MANAGEMENT ===
  {
    icon: CheckSquare, title: "Todoist AI",
    description: "The world's most popular task manager now with AI-powered features including smart task prioritization, natural language processing for quick task entry, and intelligent project templates. Organize your work and personal tasks with cross-platform sync and 80+ integrations.",
    emoji: "✅", color: "from-red-500 to-red-600",
    directUrl: "https://todoist.com/?via=aiwebtools", imageUrl: todoistAiHero,
    tags: ["Business & Productivity", "task management", "to-do list", "AI prioritization", "project management", "GTD", "cross-platform", "integrations"], category: "Business & Productivity", rating: 4.7,
  },
  // === MEETING NOTES ===
  {
    icon: FileText, title: "Supernormal",
    description: "AI meeting notes platform that automatically records, transcribes, and generates structured notes from your video calls. Supernormal creates formatted summaries with action items and sends them to your team within seconds of the meeting ending — supporting Zoom, Meet, and Teams.",
    emoji: "⚡", color: "from-blue-500 to-blue-600",
    directUrl: "https://supernormal.com/?via=aiwebtools", imageUrl: supernormalHero,
    tags: ["Business & Productivity", "meeting notes", "transcription", "AI summaries", "Zoom", "Google Meet", "Teams", "action items"], category: "Business & Productivity", rating: 4.5,
  },
  // === SCREEN RECORDING AI ===
  {
    icon: Monitor, title: "Screenpipe",
    description: "Open-source 24/7 screen and audio recording tool with local AI processing. Screenpipe captures everything on your screen and microphone, then uses AI to make it all searchable and actionable — like having a perfect memory for everything you do on your computer, with full privacy.",
    emoji: "🖥️", color: "from-green-600 to-green-800",
    directUrl: "https://screenpi.pe/?via=aiwebtools", imageUrl: screenpipeHero,
    tags: ["Business & Productivity", "screen recording", "AI memory", "local AI", "open source", "privacy-first", "productivity", "knowledge capture"], category: "Business & Productivity", rating: 4.4,
  },
  // === DATA LABELING ML ===
  {
    icon: Database, title: "Labelbox",
    description: "Enterprise data labeling and AI training platform that accelerates the creation of high-quality training datasets. Labelbox provides collaborative annotation tools, model-assisted labeling, and data management workflows used by Fortune 500 companies to build production AI systems.",
    emoji: "🏷️", color: "from-purple-500 to-violet-600",
    directUrl: "https://labelbox.com/?via=aiwebtools", imageUrl: labelboxHero,
    tags: ["Data & Analytics", "data labeling", "ML training", "annotation", "computer vision", "NLP", "enterprise AI", "datasets"], category: "Data & Analytics", rating: 4.5,
  },
  // === DATA-CENTRIC AI ===
  {
    icon: Brain, title: "Snorkel AI",
    description: "Data-centric AI platform that enables enterprises to build and deploy AI applications by programmatically labeling, augmenting, and curating training data. Snorkel's approach replaces months of manual labeling with programmatic data development at enterprise scale.",
    emoji: "🤿", color: "from-blue-700 to-indigo-800",
    directUrl: "https://snorkel.ai/?via=aiwebtools", imageUrl: snorkelAiHero,
    tags: ["Data & Analytics", "data-centric AI", "programmatic labeling", "enterprise AI", "training data", "ML ops", "data augmentation", "foundation models"], category: "Data & Analytics", rating: 4.5,
  },
  // === ML COLLABORATION ===
  {
    icon: Cpu, title: "DagsHub",
    description: "GitHub for machine learning — a collaborative platform for versioning data, models, experiments, and code. DagsHub integrates with MLflow, DVC, and Label Studio to provide a complete MLOps workspace where data science teams can collaborate, reproduce experiments, and ship models.",
    emoji: "🐶", color: "from-green-600 to-emerald-700",
    directUrl: "https://dagshub.com/?via=aiwebtools", imageUrl: dagshubHero,
    tags: ["Data & Analytics", "MLOps", "experiment tracking", "data versioning", "collaboration", "model management", "DVC", "open source"], category: "Data & Analytics", rating: 4.4,
  },
  // === OSINT INVESTIGATION ===
  {
    icon: Shield, title: "Hunchly",
    description: "Professional OSINT (Open Source Intelligence) investigation tool that automatically captures and preserves web evidence as you browse. Hunchly creates timestamped, hashed evidence packages for investigators, journalists, and researchers conducting online investigations.",
    emoji: "🔍", color: "from-slate-700 to-slate-900",
    directUrl: "https://hunchly.com/?via=aiwebtools", imageUrl: hunchlyHero,
    tags: ["Data & Analytics", "OSINT", "investigation", "evidence capture", "web forensics", "journalism", "research", "digital evidence"], category: "Data & Analytics", rating: 4.3,
  },
];
