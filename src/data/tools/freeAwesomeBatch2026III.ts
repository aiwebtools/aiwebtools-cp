import { Tool } from "@/types/tools";
import { Sparkles, Trophy, BookOpen, GraduationCap, Image as ImageIcon, Film, Palette, Wand2, Globe, Library, Search, Layout } from "lucide-react";

import googleAiStudioHero from "@/assets/tools/google-ai-studio-hero.jpg";
import chatbotArenaHero from "@/assets/tools/chatbot-arena-hero.jpg";
import googleIlluminateHero from "@/assets/tools/google-illuminate-hero.jpg";
import googleLearnAboutHero from "@/assets/tools/google-learn-about-hero.jpg";
import googleImagefxHero from "@/assets/tools/google-imagefx-hero.jpg";
import googleVideofxHero from "@/assets/tools/google-videofx-hero.jpg";
import microsoftDesignerHero from "@/assets/tools/microsoft-designer-hero.jpg";
import metaImagineHero from "@/assets/tools/meta-imagine-hero.jpg";
import presearchHero from "@/assets/tools/presearch-hero.jpg";
import marginaliaSearchHero from "@/assets/tools/marginalia-search-hero.jpg";
import searchgptHero from "@/assets/tools/searchgpt-hero.jpg";
import appflowyAiHero from "@/assets/tools/appflowy-ai-hero.jpg";

// Batch III 2026 — 12 verified free AI tools not previously in the directory.
// All individually confirmed unique against the existing database on 2026-07-19.
export const freeAwesomeBatch2026III: Tool[] = [
  {
    icon: Sparkles, title: "Google AI Studio",
    description: "Free browser-based playground for building with Google's Gemini models — prompt, prototype, and export code instantly. A generous free tier makes state-of-the-art AI accessible to every builder.",
    emoji: "✨", color: "from-blue-500 to-indigo-700",
    directUrl: "https://aistudio.google.com/",
    imageUrl: googleAiStudioHero,
    tags: ["Google", "Gemini", "AI Studio", "Free", "Playground", "LLM", "Developer Tools", "Prompt Engineering", "API"],
    category: "AI Development Tools", rating: 4.9, totalVotes: 48000, isFree: true,
  },
  {
    icon: Trophy, title: "Chatbot Arena",
    description: "Free open-source LLM leaderboard and side-by-side chat by LMSYS — compare top AI models blindly, vote on the winner, and help the community score real-world performance.",
    emoji: "🏆", color: "from-emerald-500 to-teal-600",
    directUrl: "https://lmarena.ai/",
    imageUrl: chatbotArenaHero,
    tags: ["Chatbot Arena", "LMSYS", "LLM Leaderboard", "Free", "Open Source", "Model Comparison", "ELO Rating", "Community"],
    category: "AI Chat Platforms", rating: 4.9, totalVotes: 62000, isFree: true,
  },
  {
    icon: BookOpen, title: "Google Illuminate",
    description: "Free experimental tool from Google Labs that transforms dense academic papers into engaging AI-hosted audio conversations — knowledge for everyone, delivered like a podcast.",
    emoji: "📖", color: "from-amber-500 to-yellow-600",
    directUrl: "https://illuminate.google.com/",
    imageUrl: googleIlluminateHero,
    tags: ["Google Illuminate", "Free", "Research Papers", "AI Podcast", "Audio Learning", "Education", "Accessibility", "Google Labs"],
    category: "AI Educational Tools", rating: 4.7, totalVotes: 14000, isFree: true,
  },
  {
    icon: GraduationCap, title: "Google Learn About",
    description: "Free Google Labs experiment that turns any topic into a personalized, curious learning journey — text, images, and follow-up questions guide you deeper. Education as a right, gifted freely.",
    emoji: "🎓", color: "from-purple-500 to-violet-700",
    directUrl: "https://learning.google.com/experiments/learn-about",
    imageUrl: googleLearnAboutHero,
    tags: ["Google Learn About", "Free", "Education", "AI Tutor", "Curiosity", "Personalized Learning", "Google Labs", "Self Study"],
    category: "AI Educational Tools", rating: 4.7, totalVotes: 11000, isFree: true,
  },
  {
    icon: ImageIcon, title: "Google ImageFX",
    description: "Free AI image generator from Google Labs powered by Imagen 3 — craft stunning visuals from text prompts with intuitive expressive chips. High-quality creative freedom for all.",
    emoji: "🖼️", color: "from-pink-500 to-rose-600",
    directUrl: "https://labs.google/fx/tools/image-fx",
    imageUrl: googleImagefxHero,
    tags: ["Google ImageFX", "Imagen 3", "Free", "AI Image Generation", "Text to Image", "Google Labs", "Art", "Creative"],
    category: "AI Image Generation", rating: 4.7, totalVotes: 32000, isFree: true,
  },
  {
    icon: Film, title: "Google VideoFX",
    description: "Free AI text-to-video generator from Google Labs powered by Veo — turn prompts into cinematic short videos with striking motion and detail. Cinematic imagination unlocked for everyone.",
    emoji: "🎞️", color: "from-teal-500 to-cyan-600",
    directUrl: "https://labs.google/fx/tools/video-fx",
    imageUrl: googleVideofxHero,
    tags: ["Google VideoFX", "Veo", "Free", "AI Video Generation", "Text to Video", "Google Labs", "Cinematic", "Creative"],
    category: "AI Video Generation", rating: 4.7, totalVotes: 21000, isFree: true,
  },
  {
    icon: Palette, title: "Microsoft Designer",
    description: "Free AI-powered design app from Microsoft — generate social graphics, invitations, and marketing visuals from a simple prompt. Design confidence gifted to every creator.",
    emoji: "🎨", color: "from-cyan-500 to-blue-600",
    directUrl: "https://designer.microsoft.com/?via=aiwebtools",
    imageUrl: microsoftDesignerHero,
    tags: ["Microsoft Designer", "Free", "AI Design", "Copilot", "Graphic Design", "Social Media", "Templates", "Canva Alternative"],
    category: "AI Design", rating: 4.7, totalVotes: 38000, isFree: true,
  },
  {
    icon: Wand2, title: "Meta Imagine",
    description: "Free AI image generator from Meta AI — dream up photoreal or artistic images from any prompt at no cost. Imagination as a shared human resource, open to all.",
    emoji: "🪄", color: "from-blue-500 to-indigo-600",
    directUrl: "https://imagine.meta.com/",
    imageUrl: metaImagineHero,
    tags: ["Meta Imagine", "Meta AI", "Free", "AI Image Generation", "Text to Image", "Photoreal", "Creative", "Llama"],
    category: "AI Image Generation", rating: 4.6, totalVotes: 41000, isFree: true,
  },
  {
    icon: Globe, title: "Presearch",
    description: "Decentralized community-powered search engine that rewards you with PRE tokens for searching — private, censorship-resistant, and free. A gentle web3 alternative to Google Search.",
    emoji: "🌐", color: "from-emerald-500 to-green-700",
    directUrl: "https://presearch.com/?via=aiwebtools",
    imageUrl: presearchHero,
    tags: ["Presearch", "Decentralized Search", "Web3", "Privacy", "Free", "Community", "Blockchain", "Google Alternative"],
    category: "AI Search Engines", rating: 4.5, totalVotes: 18000, isFree: true,
  },
  {
    icon: Library, title: "Marginalia Search",
    description: "Free open-source non-commercial search engine surfacing forgotten indie web pages, small blogs, and hidden knowledge overlooked by mainstream engines. A love letter to the human web.",
    emoji: "📚", color: "from-amber-600 to-orange-700",
    directUrl: "https://search.marginalia.nu/",
    imageUrl: marginaliaSearchHero,
    tags: ["Marginalia Search", "Open Source", "Indie Web", "Non-Commercial", "Free", "Privacy", "Alternative Search", "Small Web", "ethical ai"],
    category: "AI Search Engines", rating: 4.7, totalVotes: 9200, isFree: true,
  },
  {
    icon: Search, title: "SearchGPT",
    description: "OpenAI's free AI-powered search experience — conversational answers grounded in live web results with clear source citations. Trustworthy search, generously free.",
    emoji: "🔎", color: "from-green-500 to-emerald-700",
    directUrl: "https://chatgpt.com/search",
    imageUrl: searchgptHero,
    tags: ["SearchGPT", "OpenAI", "AI Search", "Free", "ChatGPT Search", "Web Search", "Citations", "Conversational Search"],
    category: "AI Search Engines", rating: 4.8, totalVotes: 54000, isFree: true,
  },
  {
    icon: Layout, title: "AppFlowy AI",
    description: "Open-source AI-powered workspace — notes, docs, tables, databases, and an AI copilot, all local-first and free forever. A liberating Notion alternative built for the people.",
    emoji: "🌊", color: "from-violet-500 to-purple-700",
    directUrl: "https://appflowy.io/?via=aiwebtools",
    imageUrl: appflowyAiHero,
    tags: ["AppFlowy", "Open Source", "Free", "AI Workspace", "Notion Alternative", "Local First", "Privacy", "Notes", "Databases", "ethical ai"],
    category: "Productivity & Utilities", rating: 4.8, totalVotes: 6800, isFree: true,
  },
];