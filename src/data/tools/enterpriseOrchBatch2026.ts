import { Tool } from "@/types/tools";
import { Globe, Brain, Shield, Search, Bot, Workflow, Code, Database, Zap, Megaphone, Monitor } from "lucide-react";

import flotorchHero from "@/assets/tools/flotorch-hero.jpg";
import wizrHero from "@/assets/tools/wizr-ai-hero.jpg";
import shakudoHero from "@/assets/tools/shakudo-hero.jpg";
import lumayHero from "@/assets/tools/lumay-hero.jpg";
import gosearchHero from "@/assets/tools/gosearch-hero.jpg";
import twinHero from "@/assets/tools/twin-hero.jpg";
import parabolaHero from "@/assets/tools/parabola-hero.jpg";
import textBlazeHero from "@/assets/tools/text-blaze-hero.jpg";
import prophetSecurityHero from "@/assets/tools/prophet-security-hero.jpg";
import looperHero from "@/assets/tools/looper-hero.jpg";
import averiHero from "@/assets/tools/averi-hero.jpg";
import storychiefHero from "@/assets/tools/storychief-hero.jpg";
import ardigenHero from "@/assets/tools/ardigen-hero.jpg";
import accuknoxHero from "@/assets/tools/accuknox-hero.jpg";
import openwebuiHero from "@/assets/tools/openwebui-hero.jpg";
import chromadbHero from "@/assets/tools/chromadb-hero.jpg";
import qdrantHero from "@/assets/tools/qdrant-hero.jpg";
import whisperCppHero from "@/assets/tools/whisper-cpp-hero.jpg";

export const enterpriseOrchBatch2026: Tool[] = [
  {
    icon: Globe, title: "FloTorch",
    description: "The leading 'Control Plane' for enterprise AI; connects agents from different platforms (UiPath, Salesforce, N8N) under one unified, secure gateway with real-time cost and latency monitoring.",
    emoji: "🔥", color: "from-blue-600 to-green-600",
    directUrl: "https://flotorch.ai/?via=aiwebtools", imageUrl: flotorchHero,
    tags: ["AI Agents", "Business & Productivity", "enterprise", "control plane", "orchestration", "multi-platform", "governance", "monitoring"], category: "Business & Productivity", rating: 4.6,
  },
  {
    icon: Workflow, title: "Wizr AI",
    description: "A platform-enabled service that standardizes 'Glidepath AI' for software delivery, helping enterprises move from pilots to production-ready autonomous operations seamlessly.",
    emoji: "🛤️", color: "from-purple-500 to-gold-500",
    directUrl: "https://wizr.ai/?via=aiwebtools", imageUrl: wizrHero,
    tags: ["AI Agents", "Business & Productivity", "enterprise", "software delivery", "production deployment", "autonomous operations", "DevOps"], category: "Business & Productivity", rating: 4.4,
  },
  {
    icon: Shield, title: "Shakudo",
    description: "Provides a 'Privacy-First' architecture for managing data and model pipelines in highly regulated, multi-cloud environments. Enterprise-grade data sovereignty for AI deployments.",
    emoji: "🔒", color: "from-teal-500 to-teal-700",
    directUrl: "https://shakudo.io/?via=aiwebtools", imageUrl: shakudoHero,
    tags: ["Security & Privacy", "Developer Tools", "privacy-first", "multi-cloud", "regulated industries", "data pipelines", "compliance"], category: "Security & Privacy", rating: 4.5,
  },
  {
    icon: Brain, title: "LuMay AI",
    description: "The 2026 'Editor's Choice' for regulated industries. A unified platform for finance, healthcare, and manufacturing that balances total autonomy with strict compliance and ISO/Quality automation.",
    emoji: "🏭", color: "from-blue-700 to-blue-900",
    directUrl: "https://lumay.ai/?via=aiwebtools", imageUrl: lumayHero,
    tags: ["AI Agents", "Business & Productivity", "regulated industries", "compliance", "healthcare", "finance", "manufacturing", "ISO"], category: "Business & Productivity", rating: 4.7,
  },
  {
    icon: Search, title: "GoSearch",
    description: "The leading AI-native enterprise search agent. Connects Slack, Jira, Salesforce, and SharePoint to execute cross-system workflows and generate 'AI Artifacts' (reports/docs) instantly.",
    emoji: "🔍", color: "from-blue-500 to-orange-500",
    directUrl: "https://gosearch.ai/?via=aiwebtools", imageUrl: gosearchHero,
    tags: ["AI Agents", "Business & Productivity", "enterprise search", "cross-system", "Slack", "Jira", "Salesforce", "knowledge management"], category: "Business & Productivity", rating: 4.6,
  },
  {
    icon: Monitor, title: "Twin",
    description: "A browser-based automation tool that acts like a human on the screen—moving the mouse, clicking—instead of relying on fragile API connections. Visual browser automation for any workflow.",
    emoji: "👯", color: "from-cyan-500 to-blue-700",
    directUrl: "https://twin.so/?via=aiwebtools", imageUrl: twinHero,
    tags: ["AI Agents", "Automation & Workflows", "browser automation", "visual automation", "no-code", "RPA", "screen automation"], category: "Automation & Workflows", rating: 4.4,
  },
  {
    icon: Database, title: "Parabola",
    description: "A specialized agent for 'Messy Data' that pulls information from complex PDFs and emails to automate supply chain and finance workflows without coding.",
    emoji: "📊", color: "from-purple-500 to-green-500",
    directUrl: "https://parabola.io/?via=aiwebtools", imageUrl: parabolaHero,
    tags: ["Data & Analytics", "Automation & Workflows", "messy data", "PDF extraction", "supply chain", "finance", "no-code", "data automation"], category: "Data & Analytics", rating: 4.5,
  },
  {
    icon: Zap, title: "Text Blaze",
    description: "A lightweight automation agent for repetitive communication. Uses dynamic snippets to fill out forms and emails anywhere on the web for pennies on the dollar.",
    emoji: "⚡", color: "from-orange-500 to-red-500",
    directUrl: "https://blaze.today/?via=aiwebtools", imageUrl: textBlazeHero,
    tags: ["Productivity & Utilities", "Automation & Workflows", "text expansion", "snippets", "form filling", "email automation", "lightweight"], category: "Productivity & Utilities", rating: 4.3,
  },
  {
    icon: Shield, title: "Prophet Security",
    description: "An autonomous 'Security Operations Center' analyst that triages and investigates security alerts 24/7 with human-like forensic rigor. AI-powered SOC automation.",
    emoji: "🕵️", color: "from-red-600 to-black",
    directUrl: "https://prophetsecurity.ai/?via=aiwebtools", imageUrl: prophetSecurityHero,
    tags: ["Security & Privacy", "AI Agents", "SOC", "security alerts", "forensics", "autonomous", "threat investigation", "Cybersecurity"], category: "Security & Privacy", rating: 4.6,
  },
  {
    icon: Shield, title: "LoOper",
    description: "An agent framework built for restricted environments (government/secure finance) where agents cannot open background threads or connect to unauthorized external APIs.",
    emoji: "🔐", color: "from-green-700 to-gold-600",
    directUrl: "https://looper.ai/?via=aiwebtools", imageUrl: looperHero,
    tags: ["Security & Privacy", "AI Agents", "government", "secure finance", "restricted environments", "compliance", "agent framework"], category: "Security & Privacy", rating: 4.4,
  },
  {
    icon: Megaphone, title: "Averi",
    description: "A 'Content Engine' that maintains a persistent 'Brand Core'—it doesn't just write posts; it remembers your entire product history and positioning for everything it creates.",
    emoji: "✨", color: "from-pink-500 to-purple-600",
    directUrl: "https://averi.ai/?via=aiwebtools", imageUrl: averiHero,
    tags: ["Marketing & Sales", "Content Creation", "brand memory", "content engine", "brand consistency", "product positioning", "AI content"], category: "Marketing & Sales", rating: 4.5,
  },
  {
    icon: Bot, title: "StoryChief AI",
    description: "An agent handling multimodal fluency—a single agent can storyboard a video, write the script, and generate LinkedIn thumbnails simultaneously. Complete content workflow automation.",
    emoji: "📖", color: "from-blue-500 to-orange-500",
    directUrl: "https://storychief.io/?via=aiwebtools", imageUrl: storychiefHero,
    tags: ["Marketing & Sales", "Content Creation", "multimodal", "video storyboard", "script writing", "social media", "content workflow"], category: "Marketing & Sales", rating: 4.5,
  },
  {
    icon: Brain, title: "Ardigen",
    description: "Predictive platforms that simulate cellular behavior. Researchers use these agents to virtually test molecular structures before they ever hit a real wet lab. Digital cell modeling for biotech.",
    emoji: "🧬", color: "from-green-500 to-blue-600",
    directUrl: "https://ardigen.com/?via=aiwebtools", imageUrl: ardigenHero,
    tags: ["Healthcare & Medical AI", "AI Agents", "biotech", "cellular simulation", "molecular testing", "drug discovery", "digital cell models"], category: "Healthcare & Medical AI", rating: 4.6,
  },
  {
    icon: Shield, title: "AccuKnox",
    description: "Specialized in 'Zero-Trust' enforcement for Kubernetes and cloud-native apps. Autonomously generates security policies as your infrastructure scales.",
    emoji: "🛡️", color: "from-blue-600 to-red-500",
    directUrl: "https://accuknox.com/?via=aiwebtools", imageUrl: accuknoxHero,
    tags: ["Security & Privacy", "Developer Tools", "zero-trust", "Kubernetes", "cloud-native", "security policies", "infrastructure", "Cybersecurity"], category: "Security & Privacy", rating: 4.5,
  },
  {
    icon: Code, title: "Open WebUI",
    description: "The best open-source front-end for AI. Looks exactly like ChatGPT but connects to your local Ollama or vLLM server for complete privacy and data sovereignty.",
    emoji: "🖥️", color: "from-gray-600 to-cyan-600",
    directUrl: "https://openwebui.com/?via=aiwebtools", imageUrl: openwebuiHero,
    tags: ["Open Source AI Models", "AI Chat Platforms", "local AI", "privacy", "Ollama", "vLLM", "self-hosted", "ChatGPT alternative"], category: "AI Chat Platforms", rating: 4.7,
  },
  {
    icon: Database, title: "ChromaDB",
    description: "Open-source vector database that stores your company's data so AI agents can 'remember' it without hallucinations. The essential 'Memory Bank' for RAG applications.",
    emoji: "🌈", color: "from-yellow-500 to-purple-600",
    directUrl: "https://www.trychroma.com/?via=aiwebtools", imageUrl: chromadbHero,
    tags: ["Developer Tools", "Open Source AI Models", "vector database", "RAG", "embeddings", "AI memory", "knowledge base", "open source"], category: "Developer Tools", rating: 4.6,
  },
  {
    icon: Database, title: "Qdrant",
    description: "High-performance open-source vector search engine for AI agents. Store and retrieve high-dimensional data with blazing speed for similarity search and recommendations.",
    emoji: "🔮", color: "from-purple-500 to-teal-500",
    directUrl: "https://qdrant.tech/?via=aiwebtools", imageUrl: qdrantHero,
    tags: ["Developer Tools", "Open Source AI Models", "vector search", "similarity search", "embeddings", "high-performance", "open source", "database"], category: "Developer Tools", rating: 4.6,
  },
  {
    icon: Code, title: "Whisper.cpp",
    description: "The best open-source 'Ears' for AI agents. Provides 50x faster speech-to-text on a standard CPU, essential for building voice agents without cloud dependencies.",
    emoji: "👂", color: "from-green-600 to-black",
    directUrl: "https://github.com/ggerganov/whisper.cpp/?via=aiwebtools", imageUrl: whisperCppHero,
    tags: ["Audio & Voice", "Open Source AI Models", "speech-to-text", "STT", "local AI", "voice recognition", "C++", "fast transcription"], category: "Audio & Voice", rating: 4.7,
  },
];
