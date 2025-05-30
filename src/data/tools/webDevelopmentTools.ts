import { Globe, Code, Database, Rocket, Wand2, Settings } from "lucide-react";
import { Tool } from "@/types/tools";

export const webDevelopmentTools: Tool[] = [
  {
    icon: Globe,
    title: "V0 by Vercel",
    description: "AI-powered, chat-based website builder transforming user prompts into functional code using Next.js, React, Tailwind CSS, and shadcn UI components with seamless deployment.",
    emoji: "🚀",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://v0.dev/",
    tags: ["website builder", "Next.js", "React", "Tailwind CSS", "code generation"],
    category: "Web Development Tools",
    rating: 4.8,
    totalVotes: 4567
  },
  {
    icon: Code,
    title: "Another Wrapper",
    description: "All-in-one Next.js AI starter kit with 10+ customizable demo applications covering text generation, image processing, speech synthesis, and document analysis.",
    emoji: "🎁",
    color: "from-green-500 to-blue-600",
    directUrl: "https://anotherwrapper.com/",
    tags: ["Next.js", "AI starter kit", "demo applications", "development toolkit", "production ready"],
    category: "Web Development Tools",
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
    category: "Web Development Tools",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Rocket,
    title: "Steel.dev",
    description: "Platform offering suite of tools for building and deploying AI-driven web agents that automate tasks, scrape data, and interact with websites intelligently.",
    emoji: "⚙️",
    color: "from-gray-500 to-blue-600",
    directUrl: "https://steel.dev",
    tags: ["web agents", "automation", "data scraping", "AI models", "open source"],
    category: "Web Development Tools",
    rating: 4.5,
    totalVotes: 2456
  },
  {
    icon: Globe,
    title: "Wegic Website Generator",
    description: "AI-powered website generator that allows users to create fully functional, visually stunning websites in seconds without coding knowledge or technical expertise.",
    emoji: "🌐",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://wegic.ai/",
    tags: ["website generator", "no-code", "AI powered", "instant creation", "visual design"],
    category: "Web Development Tools",
    rating: 4.4,
    totalVotes: 2123
  },
  {
    icon: Wand2,
    title: "Create.xyz",
    description: "AI-powered no-code platform that instantly transforms text descriptions into fully functional websites, tools, and applications with built-in GPT-4o capabilities.",
    emoji: "✨",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://www.create.xyz/",
    tags: ["no-code platform", "GPT-4o", "text to website", "automation", "40+ integrations"],
    category: "Web Development Tools",
    rating: 4.6,
    totalVotes: 3123
  },
  {
    icon: Code,
    title: "B12 Website Generator",
    description: "AI-powered website builder creating professional, fully functional websites with built-in automation tools like invoicing, scheduling, eSignatures, and email marketing.",
    emoji: "🏢",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.b12.io/",
    tags: ["website builder", "business automation", "invoicing", "scheduling", "professional"],
    category: "Web Development Tools",
    rating: 4.5,
    totalVotes: 2890
  },
  {
    icon: Settings,
    title: "Flexbe.AI",
    description: "AI-driven website builder enabling users to create and publish professional websites in under 60 seconds with custom marketing insights and brand-aligned design.",
    emoji: "⚡",
    color: "from-orange-500 to-red-600",
    directUrl: "https://flexbe.ai/",
    tags: ["website builder", "60 seconds", "marketing insights", "SEO optimization", "fast hosting"],
    category: "Web Development Tools",
    rating: 4.3,
    totalVotes: 2234
  }
];
