import { Tool } from "@/types/tools";
import { Mic, Wrench, Globe, Search, Map, Video, Briefcase, BookOpen, FileText, Languages, Code, Bot, Users } from "lucide-react";

import speecheloHero from "@/assets/tools/speechelo-hero.jpg";
import estimaticHero from "@/assets/tools/estimatic-hero.jpg";
import chefgptXyzHero from "@/assets/tools/chefgpt-xyz-hero.jpg";
import komoHero from "@/assets/tools/komo-hero.jpg";
import youratlasHero from "@/assets/tools/youratlas-hero.jpg";
import crayoHero from "@/assets/tools/crayo-hero.jpg";
import storylaneHero from "@/assets/tools/storylane-hero.jpg";
import coveoHero from "@/assets/tools/coveo-hero.jpg";
import guruHero from "@/assets/tools/guru-hero.jpg";
import languagetoolHero from "@/assets/tools/languagetool-hero.jpg";
import doclingoHero from "@/assets/tools/doclingo-hero.jpg";
import unbabelHero from "@/assets/tools/unbabel-hero.jpg";
import weglotHero from "@/assets/tools/weglot-hero.jpg";
import localazyHero from "@/assets/tools/localazy-hero.jpg";
import pairaphraseHero from "@/assets/tools/pairaphrase-hero.jpg";

export const nicheSpecialty2026B2: Tool[] = [
  {
    icon: Mic, title: "Speechelo",
    description: "Text-to-speech engine that specializes in making AI voices sound human with natural 'breaths' and inflections. Generate realistic voiceovers for YouTube, e-learning, and presentations.",
    emoji: "🗣️", color: "from-red-500 to-pink-600",
    directUrl: "https://speechelo.com/?via=aiwebtools", imageUrl: speecheloHero,
    tags: ["text-to-speech", "voiceover", "human-like voice", "YouTube", "e-learning", "audio generation"],
    category: "Audio & Music Tools", rating: 4.2,
  },
  {
    icon: Wrench, title: "Estimatic AI",
    description: "AI-powered estimation tool for contractors that generates accurate quotes using local labor and material pricing. Streamlines the bidding process for construction, renovation, and service businesses.",
    emoji: "🔧", color: "from-amber-500 to-orange-600",
    directUrl: "https://estimatic.ai/?via=aiwebtools", imageUrl: estimaticHero,
    tags: ["contractor estimates", "construction AI", "pricing", "bidding", "home services", "labor costs"],
    category: "Business & Productivity", rating: 4.3,
  },
  {
    icon: Bot, title: "ChefGPT",
    description: "AI chef that recommends personalized recipes based on the ingredients you currently have in your pantry. Supports dietary preferences, cuisine types, and cooking skill levels for perfect meal suggestions.",
    emoji: "👨‍🍳", color: "from-green-500 to-lime-600",
    directUrl: "https://chefgpt.xyz/?via=aiwebtools", imageUrl: chefgptXyzHero,
    tags: ["recipe AI", "cooking assistant", "meal planning", "pantry ingredients", "dietary preferences", "food"],
    category: "Food & Lifestyle", rating: 4.4,
  },
  {
    icon: Search, title: "Komo",
    description: "AI search engine focused on topic exploration with community-driven answers from Reddit, forums, and real user discussions. Discover authentic perspectives and deep-dive into any subject.",
    emoji: "🔍", color: "from-blue-500 to-purple-600",
    directUrl: "https://komo.ai/?via=aiwebtools", imageUrl: komoHero,
    tags: ["AI search", "community answers", "topic exploration", "Reddit", "forums", "research"],
    category: "Search & Productivity Tools", rating: 4.2,
  },
  {
    icon: Map, title: "YourAtlas",
    description: "Visualize your personal data, notes, and knowledge in an interactive 3D map format. Transform scattered information into spatial, explorable landscapes for better understanding and recall.",
    emoji: "🗺️", color: "from-indigo-500 to-blue-600",
    directUrl: "https://youratlas.com/?via=aiwebtools", imageUrl: youratlasHero,
    tags: ["3D visualization", "knowledge management", "data mapping", "personal data", "spatial computing", "notes"],
    category: "Productivity & Utilities", rating: 4.1,
  },
  {
    icon: Video, title: "Crayo",
    description: "Viral clip generator that automates voiceovers, subtitles, and gameplay backgrounds for TikTok and YouTube Shorts. Create scroll-stopping short-form content at scale in minutes.",
    emoji: "🎬", color: "from-pink-500 to-red-600",
    directUrl: "https://crayo.ai/?via=aiwebtools", imageUrl: crayoHero,
    tags: ["viral clips", "TikTok", "YouTube Shorts", "short-form video", "voiceover", "subtitles", "content creation"],
    category: "Video Generation", rating: 4.3,
  },
  {
    icon: Briefcase, title: "Storylane",
    description: "Create interactive, AI-guided product demos in minutes. Sales teams use Storylane to build clickable walkthroughs that showcase product value without live demos or engineering support.",
    emoji: "🎭", color: "from-purple-500 to-violet-600",
    directUrl: "https://storylane.io/?via=aiwebtools", imageUrl: storylaneHero,
    tags: ["product demos", "interactive demos", "sales enablement", "product walkthrough", "SaaS demos", "marketing"],
    category: "Marketing & Sales", rating: 4.4,
  },
  {
    icon: Search, title: "Coveo",
    description: "Enterprise-grade AI search and recommendation engine for large e-commerce sites and knowledge bases. Powers intelligent search, personalized recommendations, and content discovery at scale.",
    emoji: "🏢", color: "from-orange-500 to-red-600",
    directUrl: "https://coveo.com/?via=aiwebtools", imageUrl: coveoHero,
    tags: ["enterprise search", "recommendations", "e-commerce", "knowledge base", "content discovery", "personalization"],
    category: "Business & Productivity", rating: 4.5,
  },
  {
    icon: Users, title: "Guru",
    description: "AI-powered company wiki that answers employee questions by intelligently searching your internal documents, Slack, and knowledge bases. Keeps teams aligned with a single source of truth.",
    emoji: "📚", color: "from-green-500 to-teal-600",
    directUrl: "https://getguru.com/?via=aiwebtools", imageUrl: guruHero,
    tags: ["company wiki", "knowledge base", "internal search", "team alignment", "employee onboarding", "documentation"],
    category: "Business & Productivity", rating: 4.4,
  },
  {
    icon: Languages, title: "LanguageTool",
    description: "Multilingual grammar checker supporting 25+ languages with AI-powered style suggestions, tone detection, and paraphrasing. The open-source alternative to Grammarly for global teams.",
    emoji: "✏️", color: "from-blue-500 to-cyan-600",
    directUrl: "https://languagetool.org/?via=aiwebtools", imageUrl: languagetoolHero,
    tags: ["grammar checker", "multilingual", "proofreading", "writing assistant", "style suggestions", "25+ languages"],
    category: "Writing & Content", rating: 4.5,
  },
  {
    icon: FileText, title: "Doclingo",
    description: "Specialized in translating complex academic and legal PDFs while perfectly preserving the original layout, formatting, and structure. Professional-grade document translation for precision-critical fields.",
    emoji: "📋", color: "from-amber-500 to-brown-600",
    directUrl: "https://doclingo.com/?via=aiwebtools", imageUrl: doclingoHero,
    tags: ["PDF translation", "document translation", "legal translation", "academic translation", "layout preservation"],
    category: "AI Translation & Localization", rating: 4.3,
  },
  {
    icon: Globe, title: "Unbabel",
    description: "Combines AI with human editors to provide enterprise-grade language translation for customer support teams. Ensures brand-consistent, culturally accurate translations across all customer touchpoints.",
    emoji: "🌐", color: "from-purple-500 to-blue-600",
    directUrl: "https://unbabel.com/?via=aiwebtools", imageUrl: unbabelHero,
    tags: ["enterprise translation", "AI + human", "customer support", "multilingual", "brand consistency", "localization"],
    category: "AI Translation & Localization", rating: 4.5,
  },
  {
    icon: Globe, title: "Weglot",
    description: "The easiest way to translate your entire website into multiple languages with one click. Automatic detection, SEO-optimized translations, and visual editor for fine-tuning every page.",
    emoji: "🔗", color: "from-blue-600 to-indigo-700",
    directUrl: "https://weglot.com/?via=aiwebtools", imageUrl: weglotHero,
    tags: ["website translation", "multilingual website", "SEO translation", "one-click", "localization", "CMS integration"],
    category: "AI Translation & Localization", rating: 4.6,
  },
  {
    icon: Code, title: "Localazy",
    description: "AI-driven localization platform for developers to manage software app translations. Supports 80+ file formats, offers translation memory, and integrates with CI/CD pipelines for automated deployments.",
    emoji: "🌏", color: "from-cyan-500 to-blue-600",
    directUrl: "https://localazy.com/?via=aiwebtools", imageUrl: localazyHero,
    tags: ["app localization", "developer tools", "translation management", "CI/CD", "software translation", "i18n"],
    category: "AI Translation & Localization", rating: 4.3,
  },
  {
    icon: FileText, title: "Pairaphrase",
    description: "Secure, enterprise-focused translation software for business documents. Features encrypted file translation, translation memory, and team collaboration tools designed for regulated industries.",
    emoji: "🔒", color: "from-gray-600 to-blue-700",
    directUrl: "https://pairaphrase.com/?via=aiwebtools", imageUrl: pairaphraseHero,
    tags: ["secure translation", "enterprise", "document translation", "encrypted", "business translation", "regulated industries"],
    category: "AI Translation & Localization", rating: 4.2,
  },
];
