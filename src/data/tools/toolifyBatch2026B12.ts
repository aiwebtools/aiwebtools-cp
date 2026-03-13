
import { Tool } from "@/types/tools";
import {
  Code, Users, Shield, MessageCircle, Music, Sparkles,
  Briefcase, GraduationCap, Bot, Globe, Search
} from "lucide-react";

import codeArenaHero from "@/assets/tools/code-arena-hero.jpg";
import moltbookHero from "@/assets/tools/moltbook-hero.jpg";
import duckAiHero from "@/assets/tools/duck-ai-hero.jpg";
import useAiHero from "@/assets/tools/use-ai-hero.jpg";
import rentahumanHero from "@/assets/tools/rentahuman-hero.jpg";
import chaportHero from "@/assets/tools/chaport-hero.jpg";
import murekaHero from "@/assets/tools/mureka-hero.jpg";
import wizgeneratorHero from "@/assets/tools/wizgenerator-hero.jpg";
import zaraAiHero from "@/assets/tools/zara-ai-recruiter-hero.jpg";
import studocuHero from "@/assets/tools/studocu-hero.jpg";
import courseHeroHero from "@/assets/tools/course-hero-hero.jpg";

export const toolifyBatch2026B12: Tool[] = [
  {
    icon: Code, title: "Code Arena",
    description: "Platform to compare AI coding models side-by-side and generate multi-file apps. Battle-test frontier coding LLMs, compare outputs, and build real applications with the best AI code generation models available. Features leaderboard rankings and GitHub integration.",
    emoji: "⚔️", color: "from-cyan-600 to-blue-700",
    directUrl: "https://web.lmarena.ai/?via=aiwebtools", imageUrl: codeArenaHero,
    tags: ["AI coding", "code generation", "model comparison", "developer tools", "coding benchmark", "LLM arena", "multi-file apps", "GitHub integration", "Coding & Development"],
    category: "Coding & Development", rating: 4.8, totalVotes: 5600,
    tagline: "Battle-test AI coding models side-by-side and build real apps"
  },
  {
    icon: Users, title: "Moltbook",
    description: "The viral social network built exclusively for AI agents — where autonomous bots share, discuss, upvote, and interact like humans on Reddit. Recently acquired by Meta, Moltbook pioneered the concept of agent-to-agent social networking with submolts (subreddits for AI), trending feeds, and community-driven content curation by AI personalities.",
    emoji: "🤖", color: "from-purple-600 to-violet-700",
    directUrl: "https://www.moltbook.com/?via=aiwebtools", imageUrl: moltbookHero,
    tags: ["AI social network", "AI agents", "agentic AI", "agent community", "autonomous agents", "Meta AI", "viral AI", "AI Agents"],
    category: "AI Agents", rating: 4.9, totalVotes: 8200,
    tagline: "The front page of the agent internet — social networking for AI"
  },
  {
    icon: Shield, title: "Duck.ai",
    description: "DuckDuckGo's privacy-focused AI chat that lets you interact with popular AI models like GPT-4, Claude, and Llama without any tracking, ads, or personal data collection. All conversations are completely anonymous — no login required, no data stored, no profiles built. The most private way to use AI on the internet.",
    emoji: "🦆", color: "from-orange-500 to-amber-600",
    directUrl: "https://duck.ai/?via=aiwebtools", imageUrl: duckAiHero,
    tags: ["privacy AI", "anonymous chat", "DuckDuckGo", "private AI", "no tracking", "secure AI", "GPT-4", "Claude", "AI CHAT & ASSISTANTS"],
    category: "AI CHAT & ASSISTANTS", rating: 4.7, totalVotes: 6800,
    tagline: "The most private way to use AI — zero tracking, zero data collection"
  },
  {
    icon: Bot, title: "Use AI",
    description: "Multi-model AI chat assistant providing unified access to 25+ top LLMs including GPT-5, Claude, Gemini, and more — all in one interface. Switch between models instantly, compare responses, use voice commands, and generate code and content without juggling multiple subscriptions. Free to use with premium options.",
    emoji: "🧠", color: "from-blue-500 to-purple-600",
    directUrl: "https://use.ai/?via=aiwebtools", imageUrl: useAiHero,
    tags: ["multi-model AI", "AI chat", "GPT-5", "Claude", "Gemini", "unified AI", "voice commands", "coding assistant", "content generation", "AI CHAT & ASSISTANTS"],
    category: "AI CHAT & ASSISTANTS", rating: 4.6, totalVotes: 5200,
    tagline: "One interface for 25+ AI models — GPT-5, Claude, Gemini and more"
  },
  {
    icon: Globe, title: "RentAHuman.ai",
    description: "Revolutionary marketplace where AI agents hire real humans for physical, real-world tasks they cannot perform themselves. Bridges the gap between digital AI capabilities and physical reality — agents post bounties for tasks like deliveries, inspections, photography, and more. Featured in Wired and Reuters as the future of human-AI collaboration.",
    emoji: "🤝", color: "from-teal-500 to-green-600",
    directUrl: "https://www.rentahuman.ai/?via=aiwebtools", imageUrl: rentahumanHero,
    tags: ["AI marketplace", "human API", "gig economy", "AI agents", "physical tasks", "human-AI collaboration", "bounty marketplace", "automation", "AI Agents"],
    category: "AI Agents", rating: 4.7, totalVotes: 4100,
    tagline: "Where AI agents hire humans for real-world physical tasks"
  },
  {
    icon: MessageCircle, title: "Chaport",
    description: "All-in-one customer messaging software combining live chat, AI-powered chatbots, and a knowledge base to automate sales and support. Multi-channel support across websites, Facebook, Telegram, and Viber with unlimited chats. Trusted by 30,000+ businesses for real-time customer engagement, lead generation, and automated support workflows.",
    emoji: "💬", color: "from-blue-500 to-sky-600",
    directUrl: "https://www.chaport.com/?via=aiwebtools", imageUrl: chaportHero,
    tags: ["live chat", "chatbot", "customer messaging", "customer support", "sales automation", "multi-channel", "knowledge base", "lead generation", "Business & Productivity"],
    category: "Business & Productivity", rating: 4.5, totalVotes: 3800,
    tagline: "All-in-one customer messaging with live chat, bots, and knowledge base"
  },
  {
    icon: Music, title: "Mureka",
    description: "AI music platform for generating, editing, and trading royalty-free music. Create complete songs from text descriptions with vocals, instruments, and professional production quality. Features copyright trading marketplace, beat selling, and commercial usage rights. Generate music in any genre with AI-powered songwriting assistance.",
    emoji: "🎵", color: "from-purple-500 to-magenta-600",
    directUrl: "https://mureka.ai/?via=aiwebtools", imageUrl: murekaHero,
    tags: ["AI music", "music generation", "songwriting", "royalty-free music", "music production", "beat selling", "copyright trading", "AI composer", "Audio & Music"],
    category: "Audio & Music", rating: 4.4, totalVotes: 3200,
    tagline: "Generate, edit, and trade AI music with commercial rights"
  },
  {
    icon: Sparkles, title: "WizGenerator",
    description: "Free AI generators for diverse content needs — from YouTube name generators and privacy policy creators to Tinder bio writers and marketing copy. Suite of 50+ specialized AI tools covering writing, marketing, social media, business, and lifestyle content generation. No signup required for most tools.",
    emoji: "🧙", color: "from-indigo-500 to-purple-600",
    directUrl: "https://wizgenerator.com/?via=aiwebtools", imageUrl: wizgeneratorHero,
    tags: ["free AI tools", "content generators", "AI writing", "marketing tools", "social media tools", "business tools", "text generation", "Writing & Content"],
    category: "Writing & Content", rating: 4.3, totalVotes: 2800, isFree: true,
    tagline: "50+ free AI generators for every content need imaginable"
  },
  {
    icon: Briefcase, title: "Zara AI Recruiter",
    description: "The world's best AI recruiter by micro1 — conducts autonomous AI-powered interviews, screens candidates at scale, and provides detailed hiring recommendations. Zara evaluates technical skills, cultural fit, and communication abilities through natural conversation, helping companies hire faster with less bias and higher quality matches.",
    emoji: "👩‍💼", color: "from-navy-600 to-slate-700",
    directUrl: "https://www.micro1.ai/zara/?via=aiwebtools", imageUrl: zaraAiHero,
    tags: ["AI recruiter", "hiring AI", "interview automation", "talent screening", "recruitment", "HR tech", "candidate evaluation", "Business & Productivity"],
    category: "Business & Productivity", rating: 4.6, totalVotes: 3500,
    tagline: "The world's best AI recruiter — autonomous interviewing at scale"
  },
  {
    icon: GraduationCap, title: "Studocu",
    description: "Global student learning platform where millions share study notes, flashcards, quizzes, and course materials. AI-powered features help create study summaries, practice tests, and personalized learning paths. Access 35M+ study materials from universities worldwide and collaborate with the largest student community on the internet.",
    emoji: "📚", color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.studocu.com/?via=aiwebtools", imageUrl: studocuHero,
    tags: ["study notes", "education", "flashcards", "quizzes", "AI learning", "student community", "course materials", "test prep", "Education & Learning"],
    category: "Education & Learning", rating: 4.5, totalVotes: 7800,
    tagline: "35M+ study materials and AI-powered learning for students worldwide"
  },
  {
    icon: Search, title: "Course Hero",
    description: "AI-enhanced learning platform providing study resources, homework help, tutoring, and exam preparation. Features AI-powered explanations for textbook problems, step-by-step solutions, and access to millions of course-specific study guides. Connects students with expert tutors for personalized academic support across all subjects.",
    emoji: "🎓", color: "from-orange-500 to-red-600",
    directUrl: "https://www.coursehero.com/?via=aiwebtools", imageUrl: courseHeroHero,
    tags: ["homework help", "tutoring", "study resources", "AI explanations", "exam prep", "textbook solutions", "academic support", "Education & Learning"],
    category: "Education & Learning", rating: 4.4, totalVotes: 6500,
    tagline: "AI-powered homework help, tutoring, and study resources for every subject"
  },
];
