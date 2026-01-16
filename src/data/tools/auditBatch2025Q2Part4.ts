import { Tool } from "@/types/tools";
import { Palette, Globe, Sparkles, Wand2, Layout, Zap, Building, Star } from "lucide-react";

// Import hero images
import fiverrrLogoHero from "@/assets/tools/fiverr-logo-hero.png";
import adobeLogoHero from "@/assets/tools/adobe-logo-hero.png";
import arvinLogoHero from "@/assets/tools/arvin-logo-hero.png";
import namecheapLogoHero from "@/assets/tools/namecheap-logo-hero.png";
import insmindLogoHero from "@/assets/tools/insmind-logo-hero.png";
import notionSitesHero from "@/assets/tools/notion-sites-hero.png";
import emergentAiHero from "@/assets/tools/emergent-ai-hero.png";
import hostingerHorizonsHero from "@/assets/tools/hostinger-horizons-hero.png";

export const auditBatch2025Q2Part4Tools: Tool[] = [
  // === LOGO CREATION (5 missing tools) ===
  {
    icon: Palette,
    title: "AI Logo by Fiverr",
    description: "Fiverr's AI logo maker creates professional logos instantly. Get unlimited designs, high-resolution files, and full commercial rights for your business or brand.",
    emoji: "🎨",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://www.fiverr.com/logo-maker?via=aiwebtools",
    imageUrl: fiverrrLogoHero,
    tags: ["logo maker", "Fiverr", "brand design", "AI logo", "business branding", "commercial rights", "Image & Design Generation"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 28934
  },
  {
    icon: Star,
    title: "Adobe Free Logo Maker",
    description: "Adobe Express logo maker creates stunning logos in seconds. Access thousands of templates, customize colors and fonts, and download professional logos for free.",
    emoji: "✨",
    color: "from-red-500 to-pink-600",
    directUrl: "https://www.adobe.com/express/create/logo?via=aiwebtools",
    imageUrl: adobeLogoHero,
    tags: ["logo maker", "Adobe", "free logo", "templates", "brand design", "professional logos", "Image & Design Generation"],
    category: "Image & Design",
    rating: 4.6,
    totalVotes: 45678
  },
  {
    icon: Sparkles,
    title: "Arvin AI Logo Maker",
    description: "AI-powered logo generator that creates unique, professional logos in seconds. Get custom designs based on your brand name and industry with unlimited variations.",
    emoji: "⚡",
    color: "from-purple-500 to-violet-600",
    directUrl: "https://arvin.chat/ai-logo-maker/?via=aiwebtools",
    imageUrl: arvinLogoHero,
    tags: ["AI logo maker", "Arvin", "logo generator", "brand design", "custom logos", "AI design", "Image & Design Generation"],
    category: "Image & Design",
    rating: 4.4,
    totalVotes: 12456
  },
  {
    icon: Building,
    title: "Logo Maker Namecheap",
    description: "Namecheap's free logo maker generates professional business logos instantly. Create, customize, and download high-quality logos perfect for websites and branding.",
    emoji: "🏢",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://www.namecheap.com/logo-maker/?via=aiwebtools",
    imageUrl: namecheapLogoHero,
    tags: ["logo maker", "Namecheap", "free logo", "business branding", "domain branding", "professional logos", "Image & Design Generation"],
    category: "Image & Design",
    rating: 4.3,
    totalVotes: 18765
  },
  {
    icon: Wand2,
    title: "insMind AI Logo",
    description: "AI logo generator that creates unique, customizable logos in seconds. Get professional brand identity designs with smart AI suggestions and easy editing tools.",
    emoji: "🪄",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.insmind.com/ai-logo-generator/?via=aiwebtools",
    imageUrl: insmindLogoHero,
    tags: ["AI logo", "insMind", "logo generator", "brand identity", "AI design", "customizable logos", "Image & Design Generation"],
    category: "Image & Design",
    rating: 4.4,
    totalVotes: 9876
  },

  // === WEBSITES & DESIGN (3 missing tools) ===
  {
    icon: Layout,
    title: "Notion Sites",
    description: "Turn your Notion pages into beautiful websites with custom domains. No code required - just connect your domain and publish your Notion content as a professional website.",
    emoji: "📄",
    color: "from-slate-600 to-gray-700",
    directUrl: "https://www.notion.so/product/sites?via=aiwebtools",
    imageUrl: notionSitesHero,
    tags: ["Notion", "website builder", "no-code", "custom domain", "publishing", "Notion sites", "Website & Design Tools"],
    category: "Website & Design Tools",
    rating: 4.6,
    totalVotes: 34567
  },
  {
    icon: Zap,
    title: "Emergent AI",
    description: "AI-powered design platform that generates stunning websites, apps, and digital products from simple descriptions. Create professional designs without design skills.",
    emoji: "⚡",
    color: "from-violet-500 to-purple-600",
    directUrl: "https://www.emergentai.dev/?via=aiwebtools",
    imageUrl: emergentAiHero,
    tags: ["AI design", "website builder", "app design", "generative design", "no-code", "AI development", "Website & Design Tools"],
    category: "Website & Design Tools",
    rating: 4.5,
    totalVotes: 8765
  },
  {
    icon: Globe,
    title: "Hostinger Horizons",
    description: "Hostinger's AI website builder creates professional sites in minutes. Use AI to generate content, design layouts, and launch your website with hosting included.",
    emoji: "🌐",
    color: "from-purple-600 to-indigo-700",
    directUrl: "https://www.hostinger.com/horizons?via=aiwebtools",
    imageUrl: hostingerHorizonsHero,
    tags: ["Hostinger", "AI website builder", "web hosting", "site generator", "AI design", "website creation", "Website & Design Tools"],
    category: "Website & Design Tools",
    rating: 4.6,
    totalVotes: 23456
  }
];
