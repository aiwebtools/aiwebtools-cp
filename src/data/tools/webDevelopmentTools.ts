
import { Globe, Code, Database, Server, Palette, Wrench } from "lucide-react";
import { Tool } from "@/types/tools";

export const webDevelopmentTools: Tool[] = [
  {
    icon: Globe,
    title: "Hostinger AI Website Builder",
    description: "AI-driven Website Builder that instantly generates professional sites tailored to your brand. AI-powered tools create unique content, optimize SEO, and predict user behavior without coding expertise.",
    emoji: "🌐",
    color: "from-blue-400 to-purple-500",
    directUrl: "https://hostinger.com?REFERRALCODE=1KEN504",
    tags: ["website builder", "AI design", "SEO optimization", "no-code", "professional sites"],
    category: "Web Development Tools",
    rating: 4.6,
    totalVotes: 2890
  },
  {
    icon: Wrench,
    title: "Link Whisper",
    description: "Smart internal linking tool powered by AI that suggests relevant internal links when writing articles within WordPress editor. Improves SEO and content structure automatically.",
    emoji: "🔗",
    color: "from-green-400 to-teal-500",
    directUrl: "https://linkwhisper.com/ref/2399/",
    tags: ["WordPress", "internal linking", "SEO", "content optimization", "AI suggestions"],
    category: "SEO & Content Tools",
    rating: 4.5,
    totalVotes: 2100
  },
  {
    icon: Palette,
    title: "Xona AI",
    description: "AI-powered tool for creating personalized interior designs quickly. Upload images or sketches, select styles, and generate stunning AI-crafted interiors with Magic Eraser and Find & Replace features.",
    emoji: "🏠",
    color: "from-pink-400 to-purple-500",
    directUrl: "https://www.xona.ai",
    tags: ["interior design", "AI design", "personalization", "image upload", "style selection"],
    category: "Design & Creative Tools",
    rating: 4.7,
    totalVotes: 1950
  }
];
