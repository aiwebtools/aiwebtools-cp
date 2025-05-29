
import { Bot, Brain, Code, Database, Rocket, Zap, Cpu, Network, Settings, Globe, Wand2, Terminal, Layers, Wrench } from "lucide-react";
import { Tool } from "@/types/tools";

export const aiDevelopmentTools: Tool[] = [
  {
    icon: Bot,
    title: "OpenAI",
    description: "Leading AI research lab providing GPT models, DALL-E, and Whisper. Pioneer in large language models and AI safety research.",
    emoji: "🤖",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://openai.com/",
    tags: ["GPT", "large language models", "AI research", "API", "machine learning"],
    category: "AI Development Tools",
    rating: 4.9,
    totalVotes: 8934
  },
  {
    icon: Layers,
    title: "Hugging Face",
    description: "The AI community's home for models, datasets, and applications. Hub for open-source machine learning with transformers library.",
    emoji: "🤗",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://huggingface.co/",
    tags: ["open source", "transformers", "model hub", "datasets", "community"],
    category: "AI Development Tools",
    rating: 4.8,
    totalVotes: 7234
  },
  {
    icon: Brain,
    title: "Google AI Studio",
    description: "Google's platform for exploring and integrating Gemini AI models with multimodal capabilities for text, audio, and video processing.",
    emoji: "🧠",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://aistudio.google.com/live",
    tags: ["Google AI", "Gemini models", "multimodal", "API", "real-time"],
    category: "AI Development Tools",
    rating: 4.7,
    totalVotes: 6123
  },
  {
    icon: Wrench,
    title: "Another Wrapper",
    description: "All-in-one Next.js AI starter kit with 10+ customizable demo applications covering text generation, image processing, speech synthesis, and document analysis.",
    emoji: "🎁",
    color: "from-green-500 to-blue-600",
    directUrl: "https://anotherwrapper.com/",
    tags: ["Next.js", "AI starter kit", "demo applications", "development toolkit", "production ready"],
    category: "AI Development Tools",
    rating: 4.6,
    totalVotes: 2890
  },
  {
    icon: Database,
    title: "Firebase",
    description: "Google's platform for building and managing mobile and web apps with real-time database, authentication, push notifications, and new AI features like Firebase Genkit 1.0.",
    emoji: "🔥",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://firebase.google.com/",
    tags: ["Google platform", "mobile apps", "web apps", "real-time database", "AI features"],
    category: "AI Development Tools",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Globe,
    title: "Hugging Face Spaces",
    description: "Community-driven platform for building, deploying, and sharing interactive AI applications with Gradio and Streamlit integration.",
    emoji: "🌐",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://huggingface.co/spaces",
    tags: ["community platform", "interactive AI", "Gradio", "Streamlit", "deployment"],
    category: "AI Development Tools",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Code,
    title: "Replit",
    description: "AI-powered platform for creating and deploying applications directly from devices with real-time collaboration and AI agent assistance.",
    emoji: "💻",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://replit.com/",
    tags: ["coding platform", "AI agent", "real-time collaboration", "deployment", "web development"],
    category: "AI Development Tools",
    rating: 4.6,
    totalVotes: 3890
  },
  {
    icon: Rocket,
    title: "Lovable",
    description: "AI-powered platform transforming ideas into fully functional web applications without coding, featuring seamless Supabase integration and one-click deployment.",
    emoji: "🚀",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://lovable.dev/?via=aiwebtools",
    tags: ["no-code", "web applications", "Supabase", "deployment", "AI-powered"],
    category: "AI Development Tools",
    rating: 4.9,
    totalVotes: 5678
  },
  {
    icon: Settings,
    title: "DataButton",
    description: "AI-powered platform helping users turn ideas into fully functional apps without extensive coding knowledge, with intelligent reasoning agents.",
    emoji: "⚙️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://www.databutton.com/",
    tags: ["app development", "AI reasoning", "no-code", "automation", "intelligent agents"],
    category: "AI Development Tools",
    rating: 4.5,
    totalVotes: 2456
  },
  {
    icon: Terminal,
    title: "CopyCoder.AI",
    description: "Advanced AI tool converting UI screenshots into optimized prompts for AI code generators, designed for compatibility with GPT-based models and Codex.",
    emoji: "📸",
    color: "from-orange-500 to-red-600",
    directUrl: "https://copycoder.ai/",
    tags: ["UI to code", "screenshot conversion", "prompt generation", "GPT compatibility", "code generation"],
    category: "AI Development Tools",
    rating: 4.4,
    totalVotes: 2123
  },
  {
    icon: Network,
    title: "Qwen Chat",
    description: "Alibaba's family of large language models designed for text generation, code assistance, chatbots, and enterprise AI solutions.",
    emoji: "🔗",
    color: "from-blue-500 to-green-600",
    directUrl: "https://chat.qwenlm.ai/",
    tags: ["Alibaba AI", "large language model", "enterprise solutions", "multilingual", "code assistance"],
    category: "AI Development Tools",
    rating: 4.6,
    totalVotes: 3234
  },
  {
    icon: Zap,
    title: "n8n",
    description: "Open-source workflow automation tool connecting different apps and services without coding, offering self-hosting and customization options.",
    emoji: "⚡",
    color: "from-purple-500 to-cyan-600",
    directUrl: "https://n8n.io/",
    tags: ["workflow automation", "open source", "self-hosted", "no-code", "integrations"],
    category: "AI Development Tools",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Layers,
    title: "TLDraw Computer",
    description: "Experimental tool enabling creation of AI workflows through intuitive flowchart interface, streamlining automation tasks with visual node connections.",
    emoji: "📊",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://computer.tldraw.com/",
    tags: ["AI workflows", "flowchart interface", "automation", "visual programming", "experimental"],
    category: "AI Development Tools",
    rating: 4.3,
    totalVotes: 1890
  },
  {
    icon: Code,
    title: "V0 by Vercel",
    description: "AI-powered, chat-based website builder by Vercel that transforms user prompts into functional code using Next.js, React, Tailwind CSS, and shadcn UI components.",
    emoji: "⚡",
    color: "from-black-500 to-gray-600",
    directUrl: "https://v0.dev/",
    tags: ["website builder", "Next.js", "React", "Tailwind CSS", "chat-based development"],
    category: "AI Development Tools",
    rating: 4.8,
    totalVotes: 5432
  }
];
