import { Tool } from "@/types/tools";
import {
  Bot, Brain, Code, Shield, Users, Search, Zap, Globe,
  Video, Sparkles, Eye, Lock, Briefcase, BarChart3, Cpu,
  FileText, Megaphone, Layers, Wand2, MessageSquare, Rocket,
  Target, Database, Workflow, Radio
} from "lucide-react";

import mulerunHero from "@/assets/tools/mulerun-hero.jpg";
import aidentHero from "@/assets/tools/aident-ai-hero.jpg";
import onyxSecurityHero from "@/assets/tools/onyx-security-hero.jpg";
import datagrailVeraHero from "@/assets/tools/datagrail-vera-hero.jpg";
import mirothinkerHero from "@/assets/tools/mirothinker-hero.jpg";
import perfectlyAiHero from "@/assets/tools/perfectly-ai-hero.jpg";
import superpowersAiHero from "@/assets/tools/superpowers-ai-hero.jpg";
import anythingApiHero from "@/assets/tools/anything-api-hero.jpg";
import omniaHero from "@/assets/tools/omnia-hero.jpg";
import sierraAiHero from "@/assets/tools/sierra-ai-hero.jpg";
import writerAiHero from "@/assets/tools/writer-ai-hero.jpg";
import poolsideHero from "@/assets/tools/poolside-hero.jpg";
import fireworksAiHero from "@/assets/tools/fireworks-ai-hero.jpg";
import heliconeHero from "@/assets/tools/helicone-hero.jpg";
import portketHero from "@/assets/tools/portkey-hero.jpg";
import arizeHero from "@/assets/tools/arize-hero.jpg";
import cometMlHero from "@/assets/tools/comet-ml-hero.jpg";
import langsmithHero from "@/assets/tools/langsmith-hero.jpg";
import dustHero from "@/assets/tools/dust-tt-hero.jpg";
import fixieHero from "@/assets/tools/fixie-hero.jpg";
import rekaHero from "@/assets/tools/reka-ai-hero.jpg";
import hammerHero from "@/assets/tools/hammer-ai-hero.jpg";
import comfyuiHero from "@/assets/tools/comfyui-hero.jpg";
import civitaiHero from "@/assets/tools/civitai-hero.jpg";
import tensorArtHero from "@/assets/tools/tensor-art-hero.jpg";

export const hotNewBatch2026March: Tool[] = [
  {
    icon: Bot,
    title: "MuleRun",
    description: "Self-evolving personal AI digital employee that handles complex workflows around the clock. Zero technical barriers — command your own dedicated AI worker for tasks like research, outreach, and data processing.",
    emoji: "🫏",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://mulerun.ai/?via=aiwebtools",
    imageUrl: mulerunHero,
    tags: ["AI Agent", "Digital Employee", "Automation", "Self-Evolving", "Personal AI", "Workflow", "No-Code", "Agentic"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 1840
  },
  {
    icon: Code,
    title: "Aident AI",
    description: "Natural language automation platform that replaces flowchart-based tools. Describe what you want in plain English and Aident builds the automation — no boxes, arrows, or coding required.",
    emoji: "⚡",
    color: "from-violet-500 to-purple-700",
    directUrl: "https://aident.ai/?via=aiwebtools",
    imageUrl: aidentHero,
    tags: ["Automation", "No-Code", "Natural Language", "Workflow", "Integration", "AI Agent", "Productivity"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 2100
  },
  {
    icon: Shield,
    title: "Onyx Security",
    description: "The secure AI control plane for enterprises. Monitors, governs, and protects all AI agent activity across your organization with real-time threat detection and policy enforcement.",
    emoji: "🛡️",
    color: "from-slate-700 to-gray-900",
    directUrl: "https://onyx.security/?via=aiwebtools",
    imageUrl: onyxSecurityHero,
    tags: ["Cybersecurity", "AI Security", "Enterprise", "Governance", "Threat Detection", "Agent Security", "Compliance"],
    category: "Security & Privacy",
    rating: 4.8,
    totalVotes: 1560
  },
  {
    icon: Lock,
    title: "DataGrail Vera",
    description: "The first complete AI privacy agent. Automates privacy compliance, data subject requests, and regulatory workflows at scale. Handles GDPR, CCPA, and emerging AI regulations autonomously.",
    emoji: "🔐",
    color: "from-teal-500 to-cyan-700",
    directUrl: "https://www.datagrail.io/?via=aiwebtools",
    imageUrl: datagrailVeraHero,
    tags: ["Privacy", "Compliance", "GDPR", "CCPA", "AI Agent", "Data Protection", "Enterprise", "Legal Tech"],
    category: "Security & Privacy",
    rating: 4.7,
    totalVotes: 1890
  },
  {
    icon: Brain,
    title: "MiroThinker H1",
    description: "Verification-centric heavy-duty research agent that outperforms GPT-5.4 and Claude-4.6-Opus on BrowseComp benchmarks. Multi-step deep research with source verification and fact-checking.",
    emoji: "🔬",
    color: "from-blue-600 to-indigo-800",
    directUrl: "https://miromind.ai/?via=aiwebtools",
    imageUrl: mirothinkerHero,
    tags: ["Research Agent", "Deep Research", "Fact-Checking", "Verification", "AI Reasoning", "Academic", "Benchmark Leader"],
    category: "Research & Academic",
    rating: 4.9,
    totalVotes: 2340
  },
  {
    icon: Users,
    title: "Perfectly AI",
    description: "AI-native recruiting agency that automates sourcing, outreach, screening, and qualification. Agent Paul delivers interview-ready candidates directly to Slack in days, not weeks.",
    emoji: "💼",
    color: "from-emerald-500 to-green-700",
    directUrl: "https://perfectly.ai/?via=aiwebtools",
    imageUrl: perfectlyAiHero,
    tags: ["Recruiting", "HR", "Hiring", "AI Agent", "Talent Sourcing", "Screening", "Enterprise", "Slack Integration"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 1670
  },
  {
    icon: Eye,
    title: "SuperPowers AI",
    description: "Real-time ambient visual agents for phones and wearables. Claude-grade AI agents that see what you see — solve visual problems instantly on your phone or smart glasses, no coding needed.",
    emoji: "👓",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://superpowers.ai/?via=aiwebtools",
    imageUrl: superpowersAiHero,
    tags: ["Visual AI", "Wearables", "Augmented Reality", "Phone AI", "Computer Vision", "Smart Glasses", "Real-Time"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 1920
  },
  {
    icon: Globe,
    title: "Anything API",
    description: "Turn any website into a production-ready API. Describe the task and AI agents build a custom function that calls the site directly. Deploy serverless, schedule on cron, or call via webhook.",
    emoji: "🔌",
    color: "from-orange-500 to-red-600",
    directUrl: "https://anythingapi.com/?via=aiwebtools",
    imageUrl: anythingApiHero,
    tags: ["API", "Web Scraping", "Automation", "Developer Tools", "Serverless", "No-Code", "Data Extraction"],
    category: "Coding & Development",
    rating: 4.5,
    totalVotes: 2050
  },
  {
    icon: Megaphone,
    title: "Omnia",
    description: "Become the brand AI recommends. Omnia optimizes your digital presence so AI chatbots, search engines, and recommendation systems actively suggest your brand to users asking questions.",
    emoji: "🎯",
    color: "from-purple-600 to-pink-600",
    directUrl: "https://omniaresults.com/?via=aiwebtools",
    imageUrl: omniaHero,
    tags: ["SEO", "AI Optimization", "Brand Marketing", "GEO", "Growth Hacking", "AI Discovery", "Digital Marketing"],
    category: "Marketing & Sales",
    rating: 4.6,
    totalVotes: 1780
  },
  {
    icon: MessageSquare,
    title: "Sierra AI",
    description: "Conversational AI platform for customer experience built by former Salesforce CEO Bret Taylor. Enterprise-grade AI agents that handle customer service with empathy, accuracy, and brand voice.",
    emoji: "🏔️",
    color: "from-sky-500 to-blue-700",
    directUrl: "https://sierra.ai/?via=aiwebtools",
    imageUrl: sierraAiHero,
    tags: ["Customer Service", "Conversational AI", "Enterprise", "AI Agent", "Support", "CX", "Brand Voice"],
    category: "Business & Productivity",
    rating: 4.8,
    totalVotes: 2670
  },
  {
    icon: FileText,
    title: "Writer Enterprise AI",
    description: "Full-stack generative AI platform for enterprises. Custom LLMs trained on your data, AI writing assistants, and workflow automation — all with enterprise security and governance.",
    emoji: "✍️",
    color: "from-indigo-500 to-blue-600",
    directUrl: "https://writer.com/?via=aiwebtools",
    imageUrl: writerAiHero,
    tags: ["Enterprise AI", "Custom LLM", "Content Generation", "Writing", "Governance", "Security", "Workflow"],
    category: "Writing & Content",
    rating: 4.7,
    totalVotes: 3120
  },
  {
    icon: Code,
    title: "Poolside AI",
    description: "Next-generation code generation AI backed by $500M+ in funding. Purpose-built foundation model for software engineering with deep code understanding and multi-file reasoning.",
    emoji: "🏊",
    color: "from-blue-400 to-cyan-600",
    directUrl: "https://poolside.ai/?via=aiwebtools",
    imageUrl: poolsideHero,
    tags: ["Code Generation", "AI Coding", "Foundation Model", "Software Engineering", "Developer Tools", "Multi-File"],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 1450
  },
  {
    icon: Cpu,
    title: "Fireworks AI",
    description: "Blazing-fast AI inference platform serving open-source and custom models at production scale. Sub-100ms latency with support for LLMs, image models, and embedding models.",
    emoji: "🎆",
    color: "from-orange-600 to-red-700",
    directUrl: "https://fireworks.ai/?via=aiwebtools",
    imageUrl: fireworksAiHero,
    tags: ["AI Inference", "API Platform", "Fast Inference", "Open Source Models", "LLM Hosting", "Developer Tools", "Production"],
    category: "Coding & Development",
    rating: 4.6,
    totalVotes: 2890
  },
  {
    icon: BarChart3,
    title: "Helicone",
    description: "Open-source LLM observability platform. Monitor, debug, and optimize your AI applications with request logging, cost tracking, prompt versioning, and performance analytics.",
    emoji: "📊",
    color: "from-sky-400 to-blue-600",
    directUrl: "https://helicone.ai/?via=aiwebtools",
    imageUrl: heliconeHero,
    tags: ["LLM Observability", "Monitoring", "Developer Tools", "Cost Tracking", "Prompt Management", "Analytics", "Open Source"],
    category: "Coding & Development",
    rating: 4.5,
    totalVotes: 1670
  },
  {
    icon: Workflow,
    title: "Portkey AI",
    description: "AI gateway and observability suite for production LLM apps. Route between 200+ LLMs, add guardrails, cache responses, and monitor performance — all through a unified API.",
    emoji: "🚪",
    color: "from-green-500 to-emerald-700",
    directUrl: "https://portkey.ai/?via=aiwebtools",
    imageUrl: portketHero,
    tags: ["AI Gateway", "LLM Router", "Guardrails", "Caching", "Observability", "Production AI", "Developer Tools"],
    category: "Coding & Development",
    rating: 4.6,
    totalVotes: 1540
  },
  {
    icon: Eye,
    title: "Arize AI",
    description: "ML and LLM observability platform for monitoring model performance in production. Detect drift, debug hallucinations, trace agent reasoning, and ensure AI quality at scale.",
    emoji: "🔍",
    color: "from-amber-500 to-yellow-600",
    directUrl: "https://arize.com/?via=aiwebtools",
    imageUrl: arizeHero,
    tags: ["ML Observability", "LLM Monitoring", "Model Performance", "Hallucination Detection", "AI Quality", "Production"],
    category: "Data & Analytics",
    rating: 4.7,
    totalVotes: 2010
  },
  {
    icon: Rocket,
    title: "Comet ML",
    description: "AI experiment tracking and model management platform. Track, compare, and optimize ML experiments with automatic logging, hyperparameter tracking, and team collaboration features.",
    emoji: "☄️",
    color: "from-blue-500 to-violet-600",
    directUrl: "https://www.comet.com/?via=aiwebtools",
    imageUrl: cometMlHero,
    tags: ["Experiment Tracking", "MLOps", "Model Management", "Hyperparameter", "Team Collaboration", "ML Pipeline"],
    category: "Data & Analytics",
    rating: 4.5,
    totalVotes: 1890
  },
  {
    icon: Layers,
    title: "LangSmith",
    description: "Developer platform by LangChain for debugging, testing, evaluating, and monitoring LLM applications and AI agents. Essential DevOps toolkit for production AI chains and agents.",
    emoji: "🔗",
    color: "from-emerald-600 to-teal-700",
    directUrl: "https://smith.langchain.com/?via=aiwebtools",
    imageUrl: langsmithHero,
    tags: ["LangChain", "LLM DevOps", "Testing", "Evaluation", "Agent Monitoring", "Debugging", "Production AI"],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 3450
  },
  {
    icon: Bot,
    title: "Dust.tt",
    description: "Enterprise AI assistant platform that connects to your company's tools and data. Build custom AI agents with access to Notion, Slack, GitHub, and databases — your org's knowledge, always available.",
    emoji: "🌫️",
    color: "from-gray-600 to-slate-800",
    directUrl: "https://dust.tt/?via=aiwebtools",
    imageUrl: dustHero,
    tags: ["Enterprise AI", "Knowledge Base", "AI Assistant", "Company Data", "Slack", "Notion", "Internal Tools"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 2230
  },
  {
    icon: Sparkles,
    title: "Fixie AI",
    description: "Platform for building AI-powered applications with natural language interfaces. Create conversational AI agents that can take actions, query databases, and integrate with your existing tools.",
    emoji: "🔧",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://fixie.ai/?via=aiwebtools",
    imageUrl: fixieHero,
    tags: ["AI Platform", "Conversational AI", "Agent Builder", "Natural Language", "Integration", "Developer Tools"],
    category: "Coding & Development",
    rating: 4.4,
    totalVotes: 1320
  },
  {
    icon: Brain,
    title: "Reka AI",
    description: "Multimodal AI company building frontier foundation models. Reka Core processes text, images, video, and audio natively — a true omni-model for complex reasoning across modalities.",
    emoji: "🧬",
    color: "from-red-500 to-orange-600",
    directUrl: "https://reka.ai/?via=aiwebtools",
    imageUrl: rekaHero,
    tags: ["Multimodal AI", "Foundation Model", "Vision", "Audio", "Video Understanding", "Reasoning", "Frontier AI"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 1980
  },
  {
    icon: Wand2,
    title: "Hammer AI",
    description: "AI-powered browser automation agent that completes web tasks for you. Fill forms, extract data, book appointments, and navigate complex websites — all with natural language commands.",
    emoji: "🔨",
    color: "from-yellow-600 to-amber-700",
    directUrl: "https://hammerai.com/?via=aiwebtools",
    imageUrl: hammerHero,
    tags: ["Browser Automation", "Web Agent", "Task Automation", "Data Extraction", "Form Filling", "RPA", "AI Agent"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 1450
  },
  {
    icon: Layers,
    title: "ComfyUI",
    description: "The most powerful open-source node-based UI for Stable Diffusion and AI image generation. Build complex image generation workflows with a visual graph editor — infinite customization.",
    emoji: "🎨",
    color: "from-green-500 to-lime-600",
    directUrl: "https://www.comfy.org/?via=aiwebtools",
    imageUrl: comfyuiHero,
    tags: ["Image Generation", "Stable Diffusion", "Open Source", "Node Editor", "Workflow", "AI Art", "Customizable"],
    category: "Image & Design",
    rating: 4.9,
    totalVotes: 8920
  },
  {
    icon: Sparkles,
    title: "CivitAI",
    description: "The largest community platform for sharing and discovering AI art models, LoRAs, and embeddings. Browse millions of AI-generated images and download custom models for Stable Diffusion.",
    emoji: "🖼️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://civitai.com/?via=aiwebtools",
    imageUrl: civitaiHero,
    tags: ["AI Art", "Model Sharing", "Stable Diffusion", "Community", "LoRA", "Image Generation", "Open Source"],
    category: "Image & Design",
    rating: 4.8,
    totalVotes: 12450
  },
  {
    icon: Wand2,
    title: "Tensor.Art",
    description: "Free cloud-based AI image generation platform with access to thousands of community models. Generate stunning AI art using Stable Diffusion, Flux, and custom models — no GPU required.",
    emoji: "🎭",
    color: "from-violet-500 to-indigo-700",
    directUrl: "https://tensor.art/?via=aiwebtools",
    imageUrl: tensorArtHero,
    tags: ["AI Art", "Cloud GPU", "Free", "Stable Diffusion", "Flux", "Image Generation", "Community Models"],
    category: "Image & Design",
    rating: 4.7,
    totalVotes: 6780
  }
];
