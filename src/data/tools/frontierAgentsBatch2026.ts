import { Tool } from "@/types/tools";
import { Car, Code, Database, Search, BookOpen, Scale, Beaker, FileText, Shield, Lock, Eye, Activity, Smartphone, Cpu, Zap, Brain, DollarSign, Layers, FlaskConical, ClipboardList } from "lucide-react";

// ES6 hero image imports
import wayveHero from "@/assets/tools/wayve-hero.jpg";
import mojoHero from "@/assets/tools/mojo-lang-hero.jpg";
import pineconeCanopyHero from "@/assets/tools/pinecone-canopy-hero.jpg";
import weaviateVerbaHero from "@/assets/tools/weaviate-verba-hero.jpg";
import heptabaseHero from "@/assets/tools/heptabase-hero.jpg";
import readwiseReaderHero from "@/assets/tools/readwise-reader-hero.jpg";
import evenupHero from "@/assets/tools/evenup-hero.jpg";
import osmoHero from "@/assets/tools/osmo-ai-hero.jpg";
import atomicAiHero from "@/assets/tools/atomic-ai-hero.jpg";
import formstackHero from "@/assets/tools/formstack-ai-hero.jpg";
import arthurShieldHero from "@/assets/tools/arthur-shield-hero.jpg";
import lassoSecurityHero from "@/assets/tools/lasso-security-hero.jpg";
import protectAiHero from "@/assets/tools/protect-ai-hero.jpg";
import hiddenLayerHero from "@/assets/tools/hiddenlayer-hero.jpg";
import whylabsHero from "@/assets/tools/whylabs-hero.jpg";
import humaneAiHero from "@/assets/tools/humane-ai-hero.jpg";
import nvidiaIsaacHero from "@/assets/tools/nvidia-isaac-hero.jpg";
import hailoHero from "@/assets/tools/hailo-hero.jpg";
import brainchipHero from "@/assets/tools/brainchip-hero.jpg";
import skyfireHero from "@/assets/tools/skyfire-hero.jpg";

export const frontierAgentsBatch2026: Tool[] = [
  // === 1. Multimodal & Spatial Intelligence ===
  {
    icon: Car,
    title: "Wayve",
    description: "Pioneering Embodied AI company building end-to-end deep learning models for autonomous vehicles and robotics. Wayve's AV2.0 approach uses a single neural network to navigate complex real-world environments, learning to drive from data rather than hand-coded rules. Backed by SoftBank and Microsoft.",
    emoji: "🚗",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://wayve.ai/?via=aiwebtools",
    imageUrl: wayveHero,
    tags: ["autonomous vehicles", "embodied AI", "deep learning", "robotics", "self-driving", "AV2.0", "AI Agents"],
    category: "AI GADGETS, ROBOTS & DEVICES",
    rating: 4.7,
    totalVotes: 2100
  },
  {
    icon: Code,
    title: "Mojo Programming Language",
    description: "Revolutionary programming language by Modular that combines Python's usability with C++ performance for AI/ML workloads. Mojo is up to 68,000x faster than Python, enabling high-speed AI model deployment on any hardware. The superset of Python designed for the AI era.",
    emoji: "🔥",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.modular.com/mojo?via=aiwebtools",
    imageUrl: mojoHero,
    tags: ["programming language", "AI infrastructure", "high-performance", "Python superset", "ML deployment", "Coding & Development"],
    category: "Coding & Development",
    rating: 4.8,
    totalVotes: 3200
  },

  // === 2. Agentic Data & Knowledge Operations ===
  {
    icon: Database,
    title: "Pinecone Canopy",
    description: "Open-source RAG framework built on top of Pinecone's vector database. Canopy manages the entire long-term memory pipeline for AI agents—from data chunking and embedding to retrieval and context assembly. Production-ready with built-in chat capabilities and evaluation tools.",
    emoji: "🌲",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://github.com/pinecone-io/canopy?via=aiwebtools",
    imageUrl: pineconeCanopyHero,
    tags: ["RAG framework", "vector database", "agent memory", "data retrieval", "open-source", "AI Infrastructure"],
    category: "AI Infrastructure",
    rating: 4.6,
    totalVotes: 1800
  },
  {
    icon: Search,
    title: "Weaviate Verba",
    description: "Personal data assistant powered by Weaviate's vector database that enables zero-hallucination conversations with your private files. Chat with documents, PDFs, and knowledge bases using advanced retrieval-augmented generation with transparent source attribution.",
    emoji: "🔍",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://weaviate.io/developers/weaviate?via=aiwebtools",
    imageUrl: weaviateVerbaHero,
    tags: ["vector database", "RAG", "private data", "document chat", "zero hallucination", "AI Infrastructure"],
    category: "AI Infrastructure",
    rating: 4.5,
    totalVotes: 1600
  },
  {
    icon: Layers,
    title: "Heptabase",
    description: "Visual knowledge management platform that transforms raw information into interconnected thought maps. Researchers and learners use Heptabase to organize notes, papers, and ideas into visual whiteboards that reveal hidden connections and accelerate deep understanding.",
    emoji: "🗺️",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://heptabase.com/?via=aiwebtools",
    imageUrl: heptabaseHero,
    tags: ["knowledge management", "visual thinking", "mind mapping", "research tool", "note-taking", "Productivity & Utilities"],
    category: "Productivity & Utilities",
    rating: 4.7,
    totalVotes: 2400
  },
  {
    icon: BookOpen,
    title: "Readwise Reader",
    description: "Agentic reading assistant that consolidates articles, newsletters, PDFs, and RSS feeds into a single AI-powered reading environment. Automatically highlights key insights, generates summaries, and syncs annotations to your personal knowledge base for long-term retention.",
    emoji: "📚",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://readwise.io/read?via=aiwebtools",
    imageUrl: readwiseReaderHero,
    tags: ["reading assistant", "content summarization", "knowledge base", "RSS reader", "highlighting", "Productivity & Utilities"],
    category: "Productivity & Utilities",
    rating: 4.8,
    totalVotes: 3100
  },

  // === 3. Niche Professional & Vertical Agents ===
  {
    icon: Scale,
    title: "EvenUp",
    description: "AI-powered legal agent for personal injury attorneys that autonomously generates demand packages from medical records, bills, and case law. EvenUp analyzes thousands of data points to produce comprehensive, attorney-reviewed demand letters that maximize case value.",
    emoji: "⚖️",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://www.evenuplaw.com/?via=aiwebtools",
    imageUrl: evenupHero,
    tags: ["legal AI", "personal injury", "demand packages", "medical records", "case analysis", "AI Legal Tech"],
    category: "AI Legal Tech",
    rating: 4.6,
    totalVotes: 1900
  },
  {
    icon: FlaskConical,
    title: "Osmo AI",
    description: "Groundbreaking olfactory AI that digitizes, analyzes, and predicts the smell of molecules. Osmo uses deep learning to map the relationship between molecular structure and scent perception, revolutionizing the fragrance, food, and chemical industries with AI-designed scents.",
    emoji: "👃",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.osmo.ai/?via=aiwebtools",
    imageUrl: osmoHero,
    tags: ["olfactory AI", "scent digitization", "molecular analysis", "fragrance", "deep learning", "Specialized AI Tools"],
    category: "Specialized AI Tools",
    rating: 4.5,
    totalVotes: 1400
  },
  {
    icon: Beaker,
    title: "Atomic AI",
    description: "AI-powered RNA drug discovery platform that predicts RNA 3D structures with unprecedented accuracy. Atomic AI accelerates the development of RNA-targeted medicines by understanding the complex folding patterns that determine biological function, opening new frontiers in pharma R&D.",
    emoji: "🧬",
    color: "from-green-500 to-teal-600",
    directUrl: "https://atomic.ai/?via=aiwebtools",
    imageUrl: atomicAiHero,
    tags: ["RNA structure", "drug discovery", "biotech AI", "molecular prediction", "pharmaceutical", "Health & Wellness"],
    category: "Health & Wellness",
    rating: 4.7,
    totalVotes: 1700
  },
  {
    icon: FileText,
    title: "Formstack AI",
    description: "Agentic workflow automation platform that generates intelligent forms, document workflows, and e-signature collection from natural language instructions. Formstack AI eliminates manual data entry by autonomously routing submissions through approval chains and integrating with 300+ business apps.",
    emoji: "📝",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://www.formstack.com/?via=aiwebtools",
    imageUrl: formstackHero,
    tags: ["form builder", "workflow automation", "document management", "e-signatures", "no-code", "Business & Productivity"],
    category: "Business & Productivity",
    rating: 4.5,
    totalVotes: 2200
  },

  // === 4. Agent Security, Governance & Trust ===
  {
    icon: Shield,
    title: "Arthur Shield",
    description: "Real-time AI firewall that detects and blocks hallucinations, prompt injections, toxic outputs, and sensitive data leakage from AI agents. Arthur Shield sits between your users and LLMs, providing guardrails that ensure safe, accurate, and compliant AI responses in production.",
    emoji: "🛡️",
    color: "from-red-500 to-rose-600",
    directUrl: "https://www.arthur.ai/?via=aiwebtools",
    imageUrl: arthurShieldHero,
    tags: ["AI firewall", "hallucination detection", "prompt injection", "AI safety", "guardrails", "Security & Privacy"],
    category: "Security & Privacy",
    rating: 4.7,
    totalVotes: 2000
  },
  {
    icon: Lock,
    title: "Lasso Security",
    description: "Enterprise-grade security layer purpose-built for protecting AI agents and LLM applications. Lasso prevents sensitive company data from leaking into public model training sets, blocks unauthorized data exfiltration, and enforces compliance policies across all AI interactions.",
    emoji: "🔒",
    color: "from-blue-600 to-cyan-700",
    directUrl: "https://www.lasso.security/?via=aiwebtools",
    imageUrl: lassoSecurityHero,
    tags: ["AI security", "data protection", "enterprise AI", "compliance", "data leakage prevention", "Security & Privacy"],
    category: "Security & Privacy",
    rating: 4.6,
    totalVotes: 1500
  },
  {
    icon: Eye,
    title: "Protect AI",
    description: "AI Security Posture Management (AI-SPM) platform that scans, identifies, and remediates vulnerabilities across your entire AI/ML pipeline. Protect AI guards against model hijacking, data poisoning, and supply chain attacks to ensure autonomous agents remain trustworthy and secure.",
    emoji: "🔐",
    color: "from-teal-500 to-blue-600",
    directUrl: "https://protectai.com/?via=aiwebtools",
    imageUrl: protectAiHero,
    tags: ["AI security posture", "vulnerability scanning", "model protection", "ML pipeline security", "AI-SPM", "Security & Privacy"],
    category: "Security & Privacy",
    rating: 4.6,
    totalVotes: 1600
  },
  {
    icon: Shield,
    title: "HiddenLayer",
    description: "AI security platform that protects machine learning models from adversarial attacks designed to manipulate their decision-making logic. HiddenLayer detects model evasion, extraction, and inference attacks in real-time without requiring access to model internals or training data.",
    emoji: "🕵️",
    color: "from-indigo-600 to-blue-700",
    directUrl: "https://hiddenlayer.com/?via=aiwebtools",
    imageUrl: hiddenLayerHero,
    tags: ["adversarial defense", "model security", "AI protection", "attack detection", "machine learning security", "Security & Privacy"],
    category: "Security & Privacy",
    rating: 4.5,
    totalVotes: 1400
  },
  {
    icon: Activity,
    title: "WhyLabs",
    description: "AI observability platform that monitors model performance, detects data drift, and alerts teams when agent behavior degrades over time. WhyLabs provides real-time visibility into LLM outputs, data quality, and model health to ensure reliable AI in production environments.",
    emoji: "📊",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://whylabs.ai/?via=aiwebtools",
    imageUrl: whylabsHero,
    tags: ["AI observability", "model monitoring", "data drift", "LLM monitoring", "model health", "AI Infrastructure"],
    category: "AI Infrastructure",
    rating: 4.6,
    totalVotes: 1800
  },

  // === 5. Hardware-Accelerated & Edge Infrastructure ===
  {
    icon: Smartphone,
    title: "Humane AI Pin",
    description: "Revolutionary screenless AI wearable that projects information onto your hand using a laser display. The Humane AI Pin operates via voice, gesture, and touch, providing an ambient computing experience that keeps you connected without a screen. Powered by Qualcomm Snapdragon with integrated AI.",
    emoji: "📌",
    color: "from-gray-400 to-slate-600",
    directUrl: "https://humane.com/?via=aiwebtools",
    imageUrl: humaneAiHero,
    tags: ["wearable AI", "screenless device", "ambient computing", "voice assistant", "laser projection", "AI GADGETS, ROBOTS & DEVICES"],
    category: "AI GADGETS, ROBOTS & DEVICES",
    rating: 4.2,
    totalVotes: 3500
  },
  {
    icon: Cpu,
    title: "NVIDIA Isaac",
    description: "Comprehensive robotics platform for developing, training, and deploying AI-powered robots. NVIDIA Isaac provides simulation environments, perception models, and manipulation frameworks that enable robots to learn complex tasks in virtual worlds before deployment in factories and warehouses.",
    emoji: "🤖",
    color: "from-green-500 to-lime-600",
    directUrl: "https://developer.nvidia.com/isaac",
    imageUrl: nvidiaIsaacHero,
    tags: ["robotics platform", "robot training", "simulation", "industrial automation", "NVIDIA", "AI GADGETS, ROBOTS & DEVICES"],
    category: "AI GADGETS, ROBOTS & DEVICES",
    rating: 4.8,
    totalVotes: 2800
  },
  {
    icon: Zap,
    title: "Hailo",
    description: "Specialized edge AI processor enabling real-time deep learning inference on low-power devices like cameras, drones, and autonomous vehicles. Hailo's AI chips deliver up to 26 TOPS of compute at just 2.5W, making sophisticated visual AI possible without cloud connectivity.",
    emoji: "⚡",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://hailo.ai/?via=aiwebtools",
    imageUrl: hailoHero,
    tags: ["edge AI", "AI processor", "computer vision", "low-power AI", "IoT", "AI GADGETS, ROBOTS & DEVICES"],
    category: "AI GADGETS, ROBOTS & DEVICES",
    rating: 4.6,
    totalVotes: 1900
  },
  {
    icon: Brain,
    title: "BrainChip Akida",
    description: "Neuromorphic AI processor that mimics the human brain's neural architecture, enabling on-device learning without cloud connectivity. BrainChip's Akida chip processes data at the edge with ultra-low power consumption, ideal for always-on applications in IoT, automotive, and smart home devices.",
    emoji: "🧠",
    color: "from-purple-500 to-violet-600",
    directUrl: "https://brainchip.com/?via=aiwebtools",
    imageUrl: brainchipHero,
    tags: ["neuromorphic computing", "edge AI", "on-device learning", "low-power AI", "brain-inspired chip", "AI GADGETS, ROBOTS & DEVICES"],
    category: "AI GADGETS, ROBOTS & DEVICES",
    rating: 4.5,
    totalVotes: 1600
  },
  {
    icon: DollarSign,
    title: "Skyfire",
    description: "The financial infrastructure layer for autonomous AI agents. Skyfire provides AI agents with their own digital wallets, enabling them to autonomously pay for services, APIs, and data from other agents without human intervention. Built on blockchain for transparent, secure agent-to-agent commerce.",
    emoji: "💰",
    color: "from-yellow-500 to-amber-600",
    directUrl: "https://www.skyfire.xyz/?via=aiwebtools",
    imageUrl: skyfireHero,
    tags: ["AI payments", "agent commerce", "digital wallet", "blockchain", "autonomous transactions", "AI Infrastructure"],
    category: "AI Infrastructure",
    rating: 4.4,
    totalVotes: 1300
  }
];
