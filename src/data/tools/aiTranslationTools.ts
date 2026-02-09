import { Tool } from "@/types/tools";
import { Languages, Globe, FileText, MessageSquare, Sparkles } from "lucide-react";
import deeplHero from "@/assets/tools/deepl-hero.jpg";
import googleTranslateHero from "@/assets/tools/google-translate-hero.jpg";
import smartlingHero from "@/assets/tools/smartling-hero.jpg";
import lokaliseHero from "@/assets/tools/lokalise-hero.jpg";
import phraseHero from "@/assets/tools/phrase-hero.jpg";
import microsoftTranslatorHero from "@/assets/tools/microsoft-translator-hero.jpg";

export const aiTranslationTools: Tool[] = [
  {
    icon: Languages,
    title: "DeepL",
    description: "AI-powered translation with superior accuracy and natural-sounding results. Translate text and documents in 31 languages with context-aware neural networks.",
    emoji: "🌐",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.deepl.com/?via=aiwebtools",
    imageUrl: deeplHero,
    tags: ["translation", "AI translation", "document translation", "multilingual", "neural translation", "language AI", "translator", "ai translate", "language translator", "translate text", "translation tool"],
    category: "AI Translation & Localization",
    rating: 4.9,
    totalVotes: 15678
  },
  {
    icon: Globe,
    title: "Google Translate AI",
    description: "Free AI-powered translation service supporting 130+ languages. Translate text, documents, websites, and speech with neural machine translation technology.",
    emoji: "🗺️",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://translate.google.com/",
    imageUrl: googleTranslateHero,
    tags: ["translation", "multilingual", "speech translation", "document translation", "free", "language AI", "Google", "translator", "ai translate", "language translator", "translate text"],
    category: "AI Translation & Localization",
    rating: 4.7,
    totalVotes: 28934
  },
  {
    icon: FileText,
    title: "Smartling",
    description: "AI-powered translation management platform for enterprises. Automate localization workflows, manage translations at scale, and ensure brand consistency across languages.",
    emoji: "📄",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://www.smartling.com/?via=aiwebtools",
    imageUrl: smartlingHero,
    tags: ["localization", "translation management", "enterprise translation", "workflow automation", "content localization", "TMS"],
    category: "AI Translation & Localization",
    rating: 4.6,
    totalVotes: 5234
  },
  {
    icon: MessageSquare,
    title: "Lokalise",
    description: "AI-enhanced localization platform for apps, websites, and games. Collaborate on translations, automate workflows, and ship localized products faster.",
    emoji: "💬",
    color: "from-orange-500 to-red-600",
    directUrl: "https://lokalise.com/?via=aiwebtools",
    imageUrl: lokaliseHero,
    tags: ["localization", "app translation", "website localization", "collaboration", "translation automation", "developer tools"],
    category: "AI Translation & Localization",
    rating: 4.7,
    totalVotes: 6789
  },
  {
    icon: Sparkles,
    title: "Phrase (Memsource)",
    description: "AI-powered translation management system with neural machine translation, workflow automation, and quality assurance. Scale localization for global businesses.",
    emoji: "✨",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://phrase.com/?via=aiwebtools",
    imageUrl: phraseHero,
    tags: ["translation management", "localization", "neural MT", "workflow automation", "enterprise", "TMS"],
    category: "AI Translation & Localization",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Languages,
    title: "Microsoft Translator",
    description: "AI-powered translation service with 100+ languages. Real-time conversation translation, document translation, and integration with Microsoft products.",
    emoji: "🔷",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.microsoft.com/en-us/translator/?via=aiwebtools",
    imageUrl: microsoftTranslatorHero,
    tags: ["translation", "real-time translation", "Microsoft", "conversation translation", "multilingual", "speech translation"],
    category: "AI Translation & Localization",
    rating: 4.5,
    totalVotes: 9876
  }
];
