
import { Tool } from "@/types/tools";
import { 
  Code, 
  Globe, 
  Zap, 
  Settings, 
  Database, 
  Cloud, 
  Terminal,
  Layers,
  Cpu,
  Monitor,
  Smartphone,
  Palette
} from "lucide-react";

import vercelV0Hero from "@/assets/tools/vercel-v0-hero.jpg";
import netlifyHero from "@/assets/tools/netlify-hero.jpg";
import supabaseHero from "@/assets/tools/supabase-hero.jpg";
import replitHero from "@/assets/tools/replit-hero.jpg";
import framerHero from "@/assets/tools/framer-hero.jpg";
import boltNewHero from "@/assets/tools/bolt-new-hero.jpg";
import webflowHero from "@/assets/tools/webflow-hero.jpg";
import builderIoHero from "@/assets/tools/builder-io-hero.jpg";
import railwayHero from "@/assets/tools/railway-hero.jpg";
import cloudflareWorkersHero from "@/assets/tools/cloudflare-workers-ai-hero.jpg";
import relumeHero from "@/assets/tools/relume-hero.jpg";

export const webDevelopmentTools: Tool[] = [
  {
    icon: Code,
    title: "Vercel v0",
    description: "AI-powered web development tool that generates React components and full applications from text prompts. Ship faster with AI-assisted coding.",
    emoji: "⚡",
    color: "from-black to-gray-600",
    directUrl: "https://v0.dev/",
    imageUrl: vercelV0Hero,
    tags: ["No-Code/Low-Code", "Frontend", "React components", "AI coding", "web development", "Vercel", "code generation"],
    category: "DEVELOPMENT & CODING",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Globe,
    title: "Netlify",
    description: "Modern web development platform with AI-powered site generation, automatic deployments, and serverless functions. Build and deploy faster.",
    emoji: "🌐",
    color: "from-teal-500 to-blue-600",
    directUrl: "https://www.netlify.com/",
    imageUrl: netlifyHero,
    tags: ["Cloud Platform", "DevOps", "web platform", "automatic deployment", "serverless", "JAMstack", "modern web"],
    category: "DEVELOPMENT & CODING",
    rating: 4.6,
    totalVotes: 4321
  },
  {
    icon: Database,
    title: "Supabase",
    description: "Open-source Firebase alternative with AI features. PostgreSQL database, authentication, real-time subscriptions, and edge functions.",
    emoji: "🗄️",
    color: "from-green-500 to-teal-600",
    directUrl: "https://supabase.com/",
    imageUrl: supabaseHero,
    tags: ["Database", "Backend", "backend-as-a-service", "PostgreSQL", "authentication", "real-time", "open source"],
    category: "DEVELOPMENT & CODING",
    rating: 4.5,
    totalVotes: 3789
  },
  {
    icon: Cloud,
    title: "Cloudflare Workers AI",
    description: "Serverless AI platform that runs AI models at the edge. Deploy AI applications globally with low latency and high performance.",
    emoji: "☁️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.cloudflare.com/products/workers-ai/",
    imageUrl: cloudflareWorkersHero,
    tags: ["Cloud Platform", "Backend", "serverless AI", "edge computing", "global deployment", "low latency", "performance"],
    category: "DEVELOPMENT & CODING",
    rating: 4.4,
    totalVotes: 2987
  },
  {
    icon: Terminal,
    title: "Replit",
    description: "AI-powered online IDE and development environment. Code, collaborate, and deploy directly from your browser with AI assistance.",
    emoji: "💻",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://replit.com/",
    imageUrl: replitHero,
    tags: ["IDE", "Cloud Platform", "online IDE", "collaboration", "browser coding", "AI assistance", "deployment"],
    category: "DEVELOPMENT & CODING",
    rating: 4.3,
    totalVotes: 3234
  },
  {
    icon: Layers,
    title: "Framer",
    description: "AI-powered website builder and design tool. Create responsive websites with AI assistance, animations, and interactive components.",
    emoji: "🎨",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://www.framer.com/",
    imageUrl: framerHero,
    tags: ["No-Code/Low-Code", "Frontend", "website builder", "design tool", "responsive", "animations", "interactive"],
    category: "DEVELOPMENT & CODING",
    rating: 4.5,
    totalVotes: 2876
  },
  {
    icon: Zap,
    title: "Bolt.new",
    description: "AI-powered full-stack web development platform. Build and deploy complete applications using natural language prompts.",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://bolt.new/",
    imageUrl: boltNewHero,
    tags: ["No-Code/Low-Code", "Frontend", "Backend", "full-stack development", "natural language", "complete applications", "AI platform", "deployment"],
    category: "DEVELOPMENT & CODING",
    rating: 4.6,
    totalVotes: 2654
  },
  {
    icon: Monitor,
    title: "Webflow",
    description: "Visual web development platform with AI features. Design, build, and launch responsive websites without coding.",
    emoji: "🖥️",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://webflow.com/",
    imageUrl: webflowHero,
    tags: ["No-Code/Low-Code", "Frontend", "visual development", "no-code", "responsive design", "CMS", "web design"],
    category: "DEVELOPMENT & CODING",
    rating: 4.4,
    totalVotes: 3456
  },
  {
    icon: Smartphone,
    title: "Builder.io",
    description: "AI-powered visual development platform for creating web and mobile applications. Drag-and-drop interface with code generation.",
    emoji: "📱",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.builder.io/",
    imageUrl: builderIoHero,
    tags: ["No-Code/Low-Code", "Mobile Development", "visual development", "mobile apps", "drag-and-drop", "code generation", "cross-platform"],
    category: "DEVELOPMENT & CODING",
    rating: 4.2,
    totalVotes: 2345
  },
  {
    icon: Cpu,
    title: "Railway",
    description: "Cloud platform with AI-assisted deployment and infrastructure management. Deploy applications with zero configuration and automatic scaling.",
    emoji: "🚂",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://railway.app/",
    imageUrl: railwayHero,
    tags: ["Cloud Platform", "DevOps", "cloud platform", "zero configuration", "automatic scaling", "infrastructure", "deployment"],
    category: "DEVELOPMENT & CODING",
    rating: 4.3,
    totalVotes: 2123
  },
  {
    icon: Palette,
    title: "Relume.io",
    description: "AI website generator that turns sitemaps and prompts into structured pages, wireframes, and copy. Ship to Webflow faster with components and libraries.",
    emoji: "🧩",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.relume.io/?via=aiwebtools",
    imageUrl: relumeHero,
    tags: ["No-Code/Low-Code", "Frontend", "website generator", "AI site builder", "wireframe", "sitemap", "copywriting", "Webflow"],
    category: "DEVELOPMENT & CODING",
    rating: 4.5,
    totalVotes: 1987
  }
];
