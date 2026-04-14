import { Tool } from "@/types/tools";
import { Music, Film, Wand2, Bot, Cpu, Globe, Box, Layers, Zap, Server, Cloud, Gamepad2, Sparkles } from "lucide-react";


export const agentsAndCreatorsBatch2026: Tool[] = [
  // === MUSIC VIDEO & CREATIVE TOOLS ===
  {
    icon: Music,
    title: "Rotor Videos",
    description: "Rotor Videos is an AI-powered music video maker that lets musicians create stunning, professional-quality music videos, lyric videos, Spotify Canvas clips, and promo content in minutes. Upload your track, choose a visual style, and Rotor automatically syncs visuals to your beat — no editing experience required.",
    emoji: "🎬",
    color: "from-purple-600 to-pink-500",
    directUrl: "https://rotorvideos.com/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["music video maker", "rotor videos", "lyric video", "spotify canvas", "music visuals", "AI music video", "video creation", "artist tools", "music promotion", "auto-sync"],
    category: "Video & Multimedia",
    rating: 4.6,
    totalVotes: 12500
  },
  {
    icon: Film,
    title: "Artlist AI",
    description: "Artlist is the ultimate creative asset platform for filmmakers, YouTubers, and content creators. Access a massive library of royalty-free music, sound effects, stock footage, templates, and plugins — all with a single unlimited license. Artlist's AI-powered tools help you find the perfect assets for any project instantly.",
    emoji: "🎞️",
    color: "from-blue-600 to-orange-500",
    directUrl: "https://artlist.io/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["artlist", "royalty-free music", "stock footage", "sound effects", "video templates", "filmmaking", "creative assets", "content creation", "music licensing", "video production"],
    category: "Video & Multimedia",
    rating: 4.8,
    totalVotes: 45000
  },

  // === AI AGENTS & SWARMS ===
  {
    icon: Bot,
    title: "TaskWeaver",
    description: "TaskWeaver is a code-first AI agent framework by Microsoft Research that converts user requests into executable code, enabling complex data analytics tasks with custom plugins. It supports rich data structures, dynamic plugin selection, and stateful conversation for sophisticated multi-step agent workflows.",
    emoji: "🕸️",
    color: "from-teal-500 to-blue-600",
    directUrl: "https://microsoft.github.io/TaskWeaver/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["taskweaver", "microsoft", "code-first agent", "data analytics", "AI agent framework", "multi-agent", "automation", "python agent", "plugin system", "code generation"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 8200
  },
  {
    icon: Sparkles,
    title: "Glif",
    description: "Glif is a visual AI workflow builder that lets you chain together AI models — image generators, LLMs, video tools — into reusable creative pipelines called 'glifs'. Build complex multi-step AI workflows without code, share them with the community, and remix others' creations. The Lego blocks of AI creativity.",
    emoji: "✨",
    color: "from-purple-500 to-cyan-500",
    directUrl: "https://glif.app/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["glif", "AI workflow", "visual programming", "creative automation", "no-code AI", "model chaining", "AI pipeline", "generative art", "workflow builder", "creative tools"],
    category: "AI Agents",
    rating: 4.6,
    totalVotes: 15000
  },
  {
    icon: Wand2,
    title: "Respell",
    description: "Respell is a no-code AI agent builder that lets you create powerful automated workflows called 'spells'. Connect AI models, APIs, and data sources visually to build agents that handle complex business processes — from customer support to data analysis — without writing a single line of code.",
    emoji: "🪄",
    color: "from-purple-700 to-amber-500",
    directUrl: "https://respell.ai/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["respell", "no-code agent", "AI automation", "workflow builder", "spells", "business automation", "AI agent builder", "process automation", "API integration", "visual builder"],
    category: "AI Agents",
    rating: 4.4,
    totalVotes: 6800
  },
  {
    icon: Zap,
    title: "Leap AI",
    description: "Leap AI is a developer-friendly platform for training, fine-tuning, and deploying custom AI models in the cloud. Generate custom images, train on your own data, and build AI-powered features into your apps with simple API calls. Perfect for developers who need custom AI without the infrastructure headache.",
    emoji: "⚡",
    color: "from-blue-500 to-white",
    directUrl: "https://tryleap.ai/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["leap ai", "model training", "fine-tuning", "custom AI", "image generation", "API", "developer tools", "machine learning", "model deployment", "cloud AI"],
    category: "Coding & Development",
    rating: 4.5,
    totalVotes: 11000
  },
  {
    icon: Bot,
    title: "AG2 (formerly AutoGen)",
    description: "AG2 is the next evolution of Microsoft's AutoGen framework — a powerful open-source platform for building multi-agent AI systems. Create teams of AI agents that collaborate, debate, and solve complex problems together through structured conversations. Supports custom agent roles, group chat, and tool integration.",
    emoji: "🤖",
    color: "from-green-500 to-green-800",
    directUrl: "https://ag2.ai/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["ag2", "autogen", "multi-agent", "agent framework", "microsoft", "conversational agents", "AI collaboration", "agent teams", "open source", "swarm intelligence", "group chat agents"],
    category: "AI Agents",
    rating: 4.7,
    totalVotes: 22000
  },
  {
    icon: Bot,
    title: "SwarmClaw AI",
    description: "SwarmClaw AI is an open-source autonomous AI agent orchestration platform built with TypeScript. Build and run agent swarms with multiple model providers, delegation, memory, skills, and schedules. Features the OpenClaw dashboard for monitoring and a gateway for managing complex multi-agent deployments at scale.",
    emoji: "🦀",
    color: "from-red-600 to-gray-700",
    directUrl: "https://github.com/swarmclawai/swarmclaw?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["swarmclaw", "agent swarm", "autonomous agents", "orchestration", "multi-agent", "open source", "TypeScript", "agent memory", "agent skills", "delegation", "swarm intelligence"],
    category: "AI Agents",
    rating: 4.3,
    totalVotes: 3500
  },
  {
    icon: Cpu,
    title: "ControlFlow",
    description: "ControlFlow is a Python framework by Prefect for building AI workflows with structured, observable agent orchestration. Define tasks declaratively, assign them to specialized agents, and maintain full control over execution flow. It bridges the gap between traditional software engineering and agentic AI with production-grade reliability.",
    emoji: "🔀",
    color: "from-blue-700 to-amber-500",
    directUrl: "https://controlflow.ai/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["controlflow", "prefect", "AI workflow", "agent orchestration", "python framework", "structured agents", "task automation", "observable AI", "production agents", "declarative AI"],
    category: "AI Agents",
    rating: 4.4,
    totalVotes: 5200
  },

  // === GAME GENERATION ===
  {
    icon: Gamepad2,
    title: "Star - AI Game Generator",
    description: "Star is a Y Combinator-backed AI game generator that transforms text descriptions into fully playable browser games in under 60 seconds. No coding required — describe your game idea in plain English, and Star generates the code, graphics, and logic automatically. Share your creations instantly with a link.",
    emoji: "⭐",
    color: "from-yellow-500 to-blue-900",
    directUrl: "https://buildwithstar.com/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["star", "AI game generator", "text-to-game", "no-code games", "browser games", "game creation", "instant games", "buildwithstar", "Y Combinator", "game maker"],
    category: "Gaming & Entertainment",
    rating: 4.7,
    totalVotes: 18000
  },
  {
    icon: Gamepad2,
    title: "Jenova AI",
    description: "Jenova AI is a cutting-edge AI game creation platform that uses frontier language models to generate characters, environments, narratives, and entire game systems through natural language prompts. Build adventure games, RPGs, and interactive experiences with persistent worlds, intelligent NPCs, and dynamic storylines — no traditional game development skills needed.",
    emoji: "🎮",
    color: "from-green-500 to-purple-700",
    directUrl: "https://www.jenova.ai/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["jenova", "AI game creation", "text-to-game", "adventure generator", "RPG creator", "NPC AI", "game development", "interactive storytelling", "world generation", "game AI"],
    category: "Gaming & Entertainment",
    rating: 4.6,
    totalVotes: 9500
  },
  {
    icon: Gamepad2,
    title: "Latitude (AI Dungeon)",
    description: "Latitude is the pioneering AI interactive storytelling company behind AI Dungeon — the world's first AI-generated text adventure game. Their platform uses advanced language models to create infinite, dynamically generated adventures where every choice leads to unique outcomes. A trailblazer in AI-powered interactive entertainment.",
    emoji: "🏰",
    color: "from-amber-600 to-blue-800",
    directUrl: "https://latitude.io/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["latitude", "AI dungeon", "interactive fiction", "text adventure", "AI storytelling", "procedural generation", "RPG", "choose your own adventure", "game AI", "narrative AI"],
    category: "Gaming & Entertainment",
    rating: 4.7,
    totalVotes: 85000
  },

  // === 3D GENERATION ===
  {
    icon: Box,
    title: "Hyper3D Rodin Gen-2",
    description: "Hyper3D Rodin Gen-2 is the next generation of AI-powered 3D model generation, producing production-ready 3D assets from text prompts or single images in seconds. With dramatically improved geometry, texturing, and material accuracy, Gen-2 outputs are suitable for games, film VFX, product visualization, and architectural rendering.",
    emoji: "🗿",
    color: "from-blue-500 to-silver",
    directUrl: "https://hyper3d.ai/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["hyper3d", "rodin gen-2", "3D generation", "text-to-3D", "image-to-3D", "3D modeling", "game assets", "VFX", "product visualization", "AI 3D"],
    category: "3D & World Creation",
    rating: 4.7,
    totalVotes: 14000
  },
  {
    icon: Box,
    title: "Stability AI SPAR3D",
    description: "SPAR3D by Stability AI is a lightning-fast 3D object reconstruction model that generates detailed, textured 3D meshes from a single image in under a second. Built on Stability's open-source foundation, it produces clean geometry with accurate materials — perfect for rapid prototyping, e-commerce, and game asset creation.",
    emoji: "💎",
    color: "from-purple-600 to-white",
    directUrl: "https://stability.ai/news/spar3d?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["stability ai", "spar3d", "3D reconstruction", "image-to-3D", "3D mesh", "rapid prototyping", "e-commerce 3D", "open source", "game assets", "3D scanning"],
    category: "3D & World Creation",
    rating: 4.5,
    totalVotes: 11000
  },
  {
    icon: Box,
    title: "Tripo 2.0",
    description: "Tripo 2.0 is the upgraded AI-powered 3D generation platform that creates high-quality, textured 3D models from text prompts or images. With improved geometry fidelity, PBR material support, and faster generation speeds, Tripo 2.0 is ideal for game developers, product designers, and 3D artists who need rapid asset creation.",
    emoji: "🔺",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.tripo3d.ai/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["tripo", "tripo 2.0", "3D generation", "text-to-3D", "image-to-3D", "PBR materials", "game assets", "3D modeling", "product design", "rapid 3D"],
    category: "3D & World Creation",
    rating: 4.6,
    totalVotes: 16500
  },

  // === AI IMAGE GENERATION ===
  {
    icon: Sparkles,
    title: "Luma Photon",
    description: "Luma Photon is a state-of-the-art AI image generation model by Luma Labs that produces photorealistic images with exceptional detail, lighting, and composition. With advanced understanding of physics, materials, and human anatomy, Photon sets a new standard for AI-generated imagery — rivaling DALL-E and Midjourney in quality.",
    emoji: "📸",
    color: "from-amber-500 to-black",
    directUrl: "https://lumalabs.ai/photon?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["luma photon", "luma labs", "image generation", "photorealistic AI", "text-to-image", "AI art", "high quality", "photography AI", "realistic images", "creative AI"],
    category: "Image & Design",
    rating: 4.8,
    totalVotes: 28000
  },

  // === GPU CLOUD & AI INFRASTRUCTURE ===
  {
    icon: Server,
    title: "CoreWeave",
    description: "CoreWeave is the AI hyperscaler purpose-built for GPU-accelerated workloads. With the largest fleet of NVIDIA GPUs in the cloud, CoreWeave provides the infrastructure backbone for training and deploying the world's most demanding AI models. Used by industry leaders for LLM training, inference, rendering, and scientific computing.",
    emoji: "🖥️",
    color: "from-blue-900 to-blue-500",
    directUrl: "https://coreweave.com/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["coreweave", "GPU cloud", "AI infrastructure", "NVIDIA GPU", "model training", "AI hyperscaler", "cloud computing", "inference", "machine learning", "enterprise AI"],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 19000
  },
  {
    icon: Cloud,
    title: "Hyperstack AI",
    description: "Hyperstack is a GPU cloud platform designed for AI and high-performance computing workloads. Access enterprise-grade NVIDIA GPUs on demand with transparent pricing, fast deployment, and optimized infrastructure for training, fine-tuning, and serving AI models at scale.",
    emoji: "📊",
    color: "from-teal-500 to-purple-600",
    directUrl: "https://www.hyperstack.cloud/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["hyperstack", "GPU cloud", "AI computing", "NVIDIA", "model training", "cloud GPU", "high-performance computing", "AI infrastructure", "on-demand GPU", "ML training"],
    category: "Coding & Development",
    rating: 4.4,
    totalVotes: 7200
  },
  {
    icon: Zap,
    title: "Lepton AI",
    description: "Lepton AI is a developer platform for running AI models efficiently in the cloud. Deploy any open-source or custom model with a single command, auto-scale based on traffic, and pay only for what you use. Designed by ex-Google and ex-Meta engineers for speed, simplicity, and cost-effectiveness.",
    emoji: "⚛️",
    color: "from-amber-500 to-black",
    directUrl: "https://www.lepton.ai/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["lepton ai", "model deployment", "cloud inference", "AI API", "serverless AI", "auto-scaling", "developer tools", "open source models", "GPU inference", "cost-effective AI"],
    category: "Coding & Development",
    rating: 4.5,
    totalVotes: 9800
  },
  {
    icon: Server,
    title: "DeepInfra",
    description: "DeepInfra is a serverless AI inference platform offering the fastest and most cost-effective way to run leading open-source AI models. Access Llama, Mistral, Stable Diffusion, and hundreds more through a simple API with automatic scaling, competitive pricing, and enterprise-grade reliability.",
    emoji: "🏗️",
    color: "from-blue-700 to-orange-500",
    directUrl: "https://deepinfra.com/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["deepinfra", "AI inference", "serverless", "open source models", "llama", "mistral", "stable diffusion", "API", "model hosting", "cloud AI"],
    category: "Coding & Development",
    rating: 4.6,
    totalVotes: 13500
  },
  {
    icon: Cpu,
    title: "Baseten",
    description: "Baseten is a platform for deploying and scaling machine learning models as production-ready APIs. With Truss, their open-source model packaging format, you can deploy any ML model — from Stable Diffusion to Whisper — with autoscaling, GPU inference, and monitoring out of the box.",
    emoji: "🧱",
    color: "from-blue-500 to-blue-200",
    directUrl: "https://baseten.co/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["baseten", "ML deployment", "model API", "Truss", "autoscaling", "GPU inference", "production ML", "model serving", "developer tools", "machine learning"],
    category: "Coding & Development",
    rating: 4.5,
    totalVotes: 8600
  },
  {
    icon: Cpu,
    title: "Brev.dev",
    description: "Brev.dev is the fastest way to fine-tune and deploy AI models on GPUs. Spin up GPU-powered dev environments in seconds, fine-tune models with simple commands, and deploy to production with one click. Built for AI engineers who want to move fast without managing infrastructure.",
    emoji: "💻",
    color: "from-green-700 to-black",
    directUrl: "https://brev.dev/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["brev", "fine-tuning", "GPU development", "AI deployment", "dev environments", "model training", "cloud GPU", "developer tools", "machine learning", "infrastructure"],
    category: "Coding & Development",
    rating: 4.4,
    totalVotes: 6200
  },
  {
    icon: Cloud,
    title: "FluidStack",
    description: "FluidStack is a distributed GPU cloud that aggregates compute from data centers worldwide to offer AI training and inference at significantly lower costs than traditional cloud providers. Access NVIDIA H100s, A100s, and more at up to 80% cheaper than hyperscalers, with global availability and flexible deployment options.",
    emoji: "🌊",
    color: "from-cyan-500 to-blue-800",
    directUrl: "https://fluidstack.io/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["fluidstack", "distributed GPU", "cloud computing", "AI training", "cheap GPU", "NVIDIA H100", "A100", "AI infrastructure", "cost-effective", "distributed computing"],
    category: "Coding & Development",
    rating: 4.3,
    totalVotes: 5400
  },
  {
    icon: Zap,
    title: "Banana Dev",
    description: "Banana Dev provides serverless GPU infrastructure for AI model inference. Deploy machine learning models and scale them automatically with pay-per-inference pricing. Built for developers who need fast, affordable GPU compute for running AI models in production without managing servers.",
    emoji: "🍌",
    color: "from-yellow-400 to-yellow-600",
    directUrl: "https://banana.dev/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["banana dev", "serverless GPU", "AI inference", "model deployment", "pay-per-use", "GPU computing", "developer tools", "machine learning", "scalable AI", "production inference"],
    category: "Coding & Development",
    rating: 4.3,
    totalVotes: 7800
  },
  {
    icon: Cloud,
    title: "Paperspace by DigitalOcean",
    description: "Paperspace, now part of DigitalOcean, provides GPU cloud computing for AI/ML development. Access powerful NVIDIA GPUs through Gradient (managed ML platform) or Core (cloud VMs) for training, fine-tuning, and deploying models. Includes Jupyter notebooks, experiment tracking, and one-click deployment.",
    emoji: "📄",
    color: "from-blue-500 to-blue-700",
    directUrl: "https://www.paperspace.com/?via=aiwebtools",
    imageUrl: "/placeholder.svg",
    tags: ["paperspace", "digitalocean", "GPU cloud", "gradient", "jupyter notebooks", "ML platform", "model training", "cloud computing", "AI development", "NVIDIA GPU"],
    category: "Coding & Development",
    rating: 4.6,
    totalVotes: 32000
  }
];
