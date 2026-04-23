import { Tool } from "@/types/tools";
import { Eye, Search, MessageCircle, Cpu, Copy, Server, Database, Layers, Rocket, Bot } from "lucide-react";
import cluelyHero from "@/assets/tools/cluely-hero.jpg";
import feloAiHero from "@/assets/tools/felo-ai-hero.jpg";
import inflectionPiHero from "@/assets/tools/inflection-pi-hero.jpg";
import sambanovaHero from "@/assets/tools/sambanova-hero.jpg";
import sameDevHero from "@/assets/tools/same-dev-hero.jpg";
import lambdaLabsHero from "@/assets/tools/lambda-labs-hero.jpg";
import motherduckHero from "@/assets/tools/motherduck-hero.jpg";
import milvusHero from "@/assets/tools/milvus-hero.jpg";
import heybossAiHero from "@/assets/tools/heyboss-ai-hero.jpg";
import multionAiHero from "@/assets/tools/multion-ai-hero.jpg";

export const trendingAiBatch2026Apr: Tool[] = [
  {
    icon: Eye,
    title: "Cluely",
    description: "Cluely is the viral 'invisible AI' desktop assistant that watches your screen and listens to your meetings, interviews, and sales calls in real time — silently feeding you context-aware answers, talking points, and reminders through a stealth overlay window. Built for live problem-solving, sales, support, coding interviews, and any high-pressure conversation where you need an AI co-pilot whispering in your ear.",
    emoji: "👁️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://cluely.com/?via=aiwebtools",
    imageUrl: cluelyHero,
    tags: ["Cluely","invisible AI","screen AI","meeting assistant","interview assistant","real-time AI","desktop overlay","sales co-pilot","AI co-pilot","stealth AI","AI Tools & Utilities"],
    category: "AI Tools & Utilities",
    rating: 4.6,
    totalVotes: 2890
  },
  {
    icon: Search,
    title: "Felo AI",
    description: "Felo AI is a multilingual AI search and answer engine that breaks language barriers — search any topic in any language and get cited, sourced answers translated and summarized in your preferred language. Strong for global research, cross-language fact-finding, and turning queries into mind maps, presentations, and topic pages instantly.",
    emoji: "🌐",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://felo.ai/?via=aiwebtools",
    imageUrl: feloAiHero,
    tags: ["Felo","Felo AI","multilingual search","AI search engine","answer engine","global search","cross-language search","AI research","cited answers","mind map AI","Search & Productivity"],
    category: "Search & Productivity",
    rating: 4.5,
    totalVotes: 3120
  },
  {
    icon: MessageCircle,
    title: "Inflection Pi",
    description: "Pi by Inflection AI is your personal, empathetic AI companion — designed to listen, support, and chat naturally without judgment. Unlike productivity-focused chatbots, Pi is tuned for emotional intelligence, daily reflection, brainstorming personal decisions, and warm, kind conversation. A calm AI friend in your pocket, available 24/7.",
    emoji: "💗",
    color: "from-pink-400 to-purple-500",
    directUrl: "https://pi.ai/?via=aiwebtools",
    imageUrl: inflectionPiHero,
    tags: ["Pi","Inflection","Inflection Pi","Pi AI","personal AI","empathetic AI","AI companion","emotional AI","kind AI","conversational AI","AI friend","AI Chat Platforms"],
    category: "AI Chat Platforms",
    rating: 4.4,
    totalVotes: 4567
  },
  {
    icon: Cpu,
    title: "SambaNova",
    description: "SambaNova Systems delivers the world's fastest enterprise AI inference platform powered by custom RDU (Reconfigurable Dataflow Unit) chips. Run open-source frontier models like Llama and DeepSeek at record-breaking token speeds for production AI workloads, with full-stack enterprise deployment, on-prem options, and API access for developers building serious AI products.",
    emoji: "⚡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://sambanova.ai/?via=aiwebtools",
    imageUrl: sambanovaHero,
    tags: ["SambaNova","SambaNova Systems","AI inference","fast inference","RDU chip","enterprise AI","Llama hosting","DeepSeek hosting","AI chips","high-speed LLM","AI Infrastructure"],
    category: "AI Tools & Development",
    rating: 4.6,
    totalVotes: 1890
  },
  {
    icon: Copy,
    title: "Same.dev",
    description: "Same.dev is the AI website cloning tool that lets you replicate any live website pixel-perfect into editable, deployable code in minutes. Paste a URL and Same generates clean React/Next.js code matching the design, layout, and components — perfect for inspiration, redesigns, MVPs, or learning from sites you admire.",
    emoji: "🪞",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://same.dev/?via=aiwebtools",
    imageUrl: sameDevHero,
    tags: ["Same","Same.dev","website cloner","AI website clone","clone website","pixel perfect clone","React generator","Next.js generator","AI web builder","website to code","AI Tools & Development"],
    category: "AI Tools & Development",
    rating: 4.5,
    totalVotes: 2340
  },
  {
    icon: Server,
    title: "Lambda Labs",
    description: "Lambda Labs is the GPU cloud built for AI — offering on-demand and reserved access to NVIDIA H100, H200, and B200 GPUs for training, fine-tuning, and inference at scale. Trusted by frontier AI labs, startups, and researchers for cost-effective, high-performance AI compute without the hyperscaler markup.",
    emoji: "Λ",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://lambdalabs.com/?via=aiwebtools",
    imageUrl: lambdaLabsHero,
    tags: ["Lambda","Lambda Labs","GPU cloud","H100","H200","B200","AI training","AI compute","NVIDIA cloud","ML infrastructure","AI Infrastructure","AI Tools & Development"],
    category: "AI Tools & Development",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Database,
    title: "MotherDuck",
    description: "MotherDuck is the serverless analytics platform built on DuckDB that brings dual-engine (cloud + local) querying to AI and data teams. Run massive SQL workloads in seconds, share datasets instantly, and integrate with AI agents, notebooks, and BI tools — all without managing servers or warehouses.",
    emoji: "🦆",
    color: "from-yellow-500 to-orange-500",
    directUrl: "https://motherduck.com/?via=aiwebtools",
    imageUrl: motherduckHero,
    tags: ["MotherDuck","DuckDB","serverless data warehouse","SQL analytics","AI data","analytics platform","data lake","BI tools","Data & Analytics"],
    category: "AI Tools & Development",
    rating: 4.6,
    totalVotes: 1670
  },
  {
    icon: Layers,
    title: "Milvus",
    description: "Milvus is the leading open-source vector database built for AI applications — powering similarity search, RAG (retrieval-augmented generation), recommendation engines, and semantic search at billion-scale. Cloud-native, GPU-accelerated, and battle-tested by enterprise AI teams worldwide.",
    emoji: "🔷",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://milvus.io/?via=aiwebtools",
    imageUrl: milvusHero,
    tags: ["Milvus","vector database","open source vector DB","RAG","retrieval augmented generation","semantic search","embedding store","AI search","Zilliz","AI Tools & Development"],
    category: "AI Tools & Development",
    rating: 4.7,
    totalVotes: 4120
  },
  {
    icon: Rocket,
    title: "Heyboss AI",
    description: "Heyboss AI is the conversational AI app and website builder that turns plain English into fully functional apps, sites, and games in minutes. Just describe what you want and Heyboss generates, deploys, and hosts it — perfect for founders, side hustlers, and creators who want to ship products without writing a single line of code.",
    emoji: "🚀",
    color: "from-orange-500 to-pink-500",
    directUrl: "https://heyboss.xyz/?via=aiwebtools",
    imageUrl: heybossAiHero,
    tags: ["Heyboss","Heyboss AI","AI app builder","AI website builder","no code AI","text to app","text to website","AI development","ship products","app generator","AI Tools & Development"],
    category: "AI Tools & Development",
    rating: 4.5,
    totalVotes: 2780
  },
  {
    icon: Bot,
    title: "MultiOn AI",
    description: "MultiOn is an autonomous web browsing AI agent that takes natural language commands and actually performs tasks across the web — booking flights, ordering groceries, filling forms, researching across tabs, and executing multi-step workflows on your behalf. One of the leading 'AI agent that uses the internet' platforms.",
    emoji: "🤖",
    color: "from-indigo-500 to-pink-600",
    directUrl: "https://multion.ai/?via=aiwebtools",
    imageUrl: multionAiHero,
    tags: ["MultiOn","MultiOn AI","autonomous agent","web agent","AI browser agent","AI automation","task automation","internet agent","autonomous AI","agent that browses","AI Agents"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 3210
  }
];
