import { Tool } from "@/types/tools";
import { Bot, Code, Mail, Target, Users, Search, Box, Video, Camera, FileText, Mic, Globe, BookOpen, Brain, Briefcase, Sparkles } from "lucide-react";

import lertyHero from "@/assets/tools/lerty-ai-hero.jpg";
import abridgeHero from "@/assets/tools/abridge-hero.jpg";
import mintlifyHero from "@/assets/tools/mintlify-hero.jpg";
import outbondHero from "@/assets/tools/outbond-ai-hero.jpg";
import revioHero from "@/assets/tools/revio-hero.jpg";
import buddyProHero from "@/assets/tools/buddy-pro-hero.jpg";
import lavenderHero from "@/assets/tools/lavender-hero.jpg";
import sixSenseHero from "@/assets/tools/6sense-hero.jpg";
import lumaGenieHero from "@/assets/tools/luma-genie-hero.jpg";
import vidioHero from "@/assets/tools/vidio-ai-hero.jpg";
import mokkerHero from "@/assets/tools/mokker-hero.jpg";
import humataHero from "@/assets/tools/humata-hero.jpg";
import eightifyHero from "@/assets/tools/eightify-hero.jpg";
import geneiHero from "@/assets/tools/genei-hero.jpg";
import scribbrHero from "@/assets/tools/scribbr-hero.jpg";
import whisperflowHero from "@/assets/tools/whisperflow-hero.jpg";

export const nicheSpecialty2026B1: Tool[] = [
  {
    icon: Bot, title: "Lerty AI",
    description: "White-label platform for building and selling AI agent services to your own clients. Create branded AI solutions, deploy custom agents, and monetize your AI expertise with a fully customizable infrastructure.",
    emoji: "🏷️", color: "from-purple-500 to-blue-600",
    directUrl: "https://lerty.ai/?via=aiwebtools", imageUrl: lertyHero,
    tags: ["AI Agents", "white-label", "AI platform", "agent builder", "SaaS", "monetization", "no-code", "agent"],
    category: "AI Development Tools", rating: 4.3,
  },
  {
    icon: Mic, title: "Abridge",
    description: "AI-powered medical conversation transcription tool that automatically documents patient-clinician conversations into structured clinical notes. HIPAA-compliant, trusted by major health systems to reduce documentation burden.",
    emoji: "🏥", color: "from-blue-500 to-teal-600",
    directUrl: "https://abridge.com/?via=aiwebtools", imageUrl: abridgeHero,
    tags: ["healthcare AI", "medical transcription", "HIPAA", "clinical notes", "documentation", "health information help"],
    category: "AI Healthcare", rating: 4.7,
  },
  {
    icon: Code, title: "Mintlify",
    description: "Automatically scans your codebase to generate beautiful, up-to-date developer documentation. AI-powered docs that stay in sync with your code, featuring search, versioning, and custom branding.",
    emoji: "📝", color: "from-green-500 to-emerald-600",
    directUrl: "https://mintlify.com/?via=aiwebtools", imageUrl: mintlifyHero,
    tags: ["documentation", "developer tools", "API docs", "auto-generation", "codebase", "technical writing"],
    category: "Developer Tools", rating: 4.5,
  },
  {
    icon: Mail, title: "Outbond AI",
    description: "End-to-end AI sales agent that finds prospects and sends highly personalized video and email outreach at scale. Automates the entire outbound sales pipeline from prospecting to booking meetings.",
    emoji: "📤", color: "from-orange-500 to-red-600",
    directUrl: "https://outbond.ai/?via=aiwebtools", imageUrl: outbondHero,
    tags: ["Sales Agent", "outbound sales", "email outreach", "video prospecting", "lead generation", "sales automation", "agent"],
    category: "Marketing & Sales", rating: 4.4,
  },
  {
    icon: Target, title: "Revio",
    description: "AI-powered Sales CRM that turns your social media followers into revenue. Revio qualifies prospects, books appointments using a fine-tuned AI engine, and helps you land more sales through automated social selling workflows.",
    emoji: "🎯", color: "from-indigo-500 to-purple-600",
    directUrl: "https://getrevio.com/?via=aiwebtools", imageUrl: revioHero,
    tags: ["Sales CRM", "social selling", "AI sales", "lead qualification", "appointment booking", "revenue optimization"],
    category: "Marketing & Sales", rating: 4.3,
  },
  {
    icon: Users, title: "Buddy Pro",
    description: "AI platform for experts and coaches to clone their expertise into 24/7 AI coaching bots. Turn your knowledge into a personalized AI assistant that delivers tailored advice to unlimited clients, creating recurring revenue while maintaining your unique methodology.",
    emoji: "🤝", color: "from-yellow-500 to-orange-600",
    directUrl: "https://buddypro.ai/?via=aiwebtools", imageUrl: buddyProHero,
    tags: ["AI Coaching", "Expert AI", "Knowledge Cloning", "AI Assistant", "Recurring Revenue", "SaaS"],
    category: "Business & Productivity", rating: 4.2,
  },
  {
    icon: Mail, title: "Lavender",
    description: "AI email coach that analyzes psychology and data to help you write better sales emails. Provides real-time scoring, suggestions, and personalization tips to dramatically improve reply rates.",
    emoji: "💜", color: "from-purple-400 to-purple-600",
    directUrl: "https://lavender.ai/?via=aiwebtools", imageUrl: lavenderHero,
    tags: ["email coaching", "sales emails", "reply rates", "email optimization", "personalization", "sales productivity"],
    category: "Marketing & Sales", rating: 4.5,
  },
  {
    icon: Search, title: "6sense",
    description: "AI-powered Account-Based Marketing platform that reveals which companies are actively in-market for your product. Uses intent signals and predictive analytics to prioritize accounts and accelerate pipeline.",
    emoji: "📡", color: "from-green-500 to-blue-600",
    directUrl: "https://6sense.com/?via=aiwebtools", imageUrl: sixSenseHero,
    tags: ["ABM", "account-based marketing", "intent data", "predictive analytics", "B2B marketing", "pipeline acceleration"],
    category: "Marketing & Sales", rating: 4.6,
  },
  {
    icon: Box, title: "Luma Genie",
    description: "Creates high-quality 3D models from simple text prompts in seconds. Part of Luma Labs' AI suite, Genie transforms descriptions into detailed, usable 3D assets for games, design, and visualization.",
    emoji: "🧞", color: "from-amber-500 to-purple-600",
    directUrl: "https://lumalabs.ai/genie?via=aiwebtools", imageUrl: lumaGenieHero,
    tags: ["3D generation", "text-to-3D", "3D modeling", "game assets", "visualization", "generative AI"],
    category: "3D & VISUALIZATION", rating: 4.4,
  },
  {
    icon: Video, title: "Vidio AI",
    description: "AI-powered video translation and dubbing tool that automatically translates and dubs videos into dozens of languages while preserving the original speaker's voice and natural lip movements.",
    emoji: "🌍", color: "from-blue-500 to-green-600",
    directUrl: "https://vidio.ai/?via=aiwebtools", imageUrl: vidioHero,
    tags: ["video translation", "AI dubbing", "lip-sync", "multilingual video", "localization", "voice preservation"],
    category: "Video Generation", rating: 4.3,
  },
  {
    icon: Camera, title: "Mokker",
    description: "Upload a simple product photo and Mokker's AI instantly places it into professional studio-quality scenes. Generate hundreds of product photography variations without expensive photo shoots.",
    emoji: "📸", color: "from-pink-500 to-rose-600",
    directUrl: "https://mokker.ai/?via=aiwebtools", imageUrl: mokkerHero,
    tags: ["product photography", "AI backgrounds", "e-commerce", "photo studio", "Image Generator", "marketing visuals"],
    category: "Image & Design Tools", rating: 4.4,
  },
  {
    icon: FileText, title: "Humata",
    description: "ChatGPT for your files — upload massive PDFs and get instant, cited answers. Specializes in analyzing lengthy documents, research papers, and contracts with precise source citations.",
    emoji: "📄", color: "from-blue-500 to-indigo-600",
    directUrl: "https://humata.ai/?via=aiwebtools", imageUrl: humataHero,
    tags: ["PDF analysis", "document chat", "research", "citations", "file analysis", "document AI"],
    category: "Document & Research Tools", rating: 4.5,
  },
  {
    icon: Sparkles, title: "Eightify",
    description: "Chrome extension that provides instant, high-quality summaries of any YouTube video. Get key takeaways, timestamps, and structured highlights without watching the entire video.",
    emoji: "⚡", color: "from-red-500 to-orange-600",
    directUrl: "https://eightify.app/?via=aiwebtools", imageUrl: eightifyHero,
    tags: ["YouTube summary", "Chrome extension", "video summary", "key takeaways", "productivity", "content consumption"],
    category: "Productivity & Utilities", rating: 4.4,
  },
  {
    icon: BookOpen, title: "Genei",
    description: "AI-powered research tool that summarizes articles and helps you take structured notes. Automatically extracts key insights from academic papers and web articles for faster research workflows.",
    emoji: "🔬", color: "from-blue-500 to-cyan-600",
    directUrl: "https://genei.io/?via=aiwebtools", imageUrl: geneiHero,
    tags: ["research tool", "article summary", "note-taking", "academic", "Literature Review", "knowledge extraction"],
    category: "AI Research & Academic", rating: 4.3,
  },
  {
    icon: Brain, title: "Scribbr AI",
    description: "Suite of AI tools for students and researchers including proofreading, plagiarism detection, citation generation, and grammar checking. Trusted by millions of students for academic writing excellence.",
    emoji: "🎓", color: "from-teal-500 to-green-600",
    directUrl: "https://scribbr.com/ai-tools?via=aiwebtools", imageUrl: scribbrHero,
    tags: ["proofreading", "plagiarism detection", "academic writing", "citation", "student tools", "grammar"],
    category: "Writing & Content", rating: 4.5,
  },
  {
    icon: Mic, title: "Whisper Flow",
    description: "High-speed dictation tool powered by OpenAI's Whisper model that turns your voice into perfect text anywhere on your computer. Blazing fast, accurate speech-to-text for professionals.",
    emoji: "🌊", color: "from-cyan-500 to-blue-600",
    directUrl: "https://whisperflow.com/?via=aiwebtools", imageUrl: whisperflowHero,
    tags: ["dictation", "speech-to-text", "Whisper", "voice typing", "transcription", "productivity"],
    category: "Audio & Music Tools", rating: 4.3,
  },
];
