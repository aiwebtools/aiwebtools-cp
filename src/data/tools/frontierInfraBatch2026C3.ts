import { Tool } from "@/types/tools";
import { Globe, Bot, Brain, Shield, Search, BarChart3, Cpu, Users, Zap, Monitor, Megaphone } from "lucide-react";

import loopOsHero from "@/assets/tools/loopos-hero.jpg";
import adaptAiHero from "@/assets/tools/adaptai-hero.jpg";
import monityHero from "@/assets/tools/monity-ai-hero.jpg";
import acrobatStudioHero from "@/assets/tools/acrobat-studio-hero.jpg";
import cognigyHero from "@/assets/tools/cognigy-hero.jpg";
import causalensHero from "@/assets/tools/causalens-hero.jpg";
import openaiOperatorHero from "@/assets/tools/openai-operator-hero.jpg";

export const frontierInfraBatch2026C3: Tool[] = [
  {
    icon: Globe, title: "LoopOS",
    description: "An AI-powered 'Circular ERP' built to automate reverse logistics and resale paths for sustainable supply chains. Manage product lifecycle, returns processing, and recommerce with AI optimization.",
    emoji: "♻️", color: "from-green-500 to-green-700",
    directUrl: "https://getloopos.com/?via=aiwebtools", imageUrl: loopOsHero,
    tags: ["Business & Productivity", "AI Agents", "circular economy", "ERP", "reverse logistics", "sustainability", "resale"], category: "Business & Productivity", rating: 4.4,
  },
  {
    icon: Brain, title: "AdaptAI",
    description: "Tracks stress and behavior signals from speech to recommend breaks and automate routine replies to prevent burnout. AI-powered wellness monitoring for knowledge workers and remote teams.",
    emoji: "🧘", color: "from-teal-400 to-teal-600",
    directUrl: "https://adaptai.ai/?via=aiwebtools", imageUrl: adaptAiHero,
    tags: ["Health & Wellness", "Productivity & Utilities", "burnout prevention", "stress monitoring", "wellness", "speech analysis", "remote work"], category: "Health & Wellness", rating: 4.3,
  },
  {
    icon: Search, title: "Monity AI",
    description: "A 'Watcher Agent' that monitors website changes (pricing, competitor updates) without manual checks. Get instant alerts when competitors change pricing, content, or features.",
    emoji: "👀", color: "from-blue-500 to-blue-700",
    directUrl: "https://monity.ai/?via=aiwebtools", imageUrl: monityHero,
    tags: ["Marketing & Sales", "AI Agents", "website monitoring", "competitor tracking", "price monitoring", "alerts", "competitive intelligence"], category: "Marketing & Sales", rating: 4.4,
  },
  {
    icon: Monitor, title: "Acrobat Studio (Adobe)",
    description: "Adobe's AI workspace that pulls key data from long PDFs and generates infographics without leaving the document. Intelligent document analysis, summarization, and visual content creation from PDFs.",
    emoji: "📑", color: "from-red-500 to-red-700",
    directUrl: "https://adobe.com/acrobat/?via=aiwebtools", imageUrl: acrobatStudioHero,
    tags: ["Productivity & Utilities", "Image & Design", "Adobe", "PDF", "document analysis", "infographics", "data extraction"], category: "Productivity & Utilities", rating: 4.6,
  },
  {
    icon: Bot, title: "Cognigy",
    description: "A specialized agent platform for global enterprises focused specifically on AI-driven customer service and multi-modal CX. Omnichannel conversational AI supporting 100+ languages for enterprise contact centers.",
    emoji: "🌐", color: "from-blue-600 to-blue-800",
    directUrl: "https://cognigy.com/?via=aiwebtools", imageUrl: cognigyHero,
    tags: ["AI Agents", "AI Customer Support", "enterprise", "conversational AI", "omnichannel", "multi-language", "contact center"], category: "AI Customer Support", rating: 4.6,
  },
  {
    icon: BarChart3, title: "CausaLens",
    description: "A high-end finance agent that focuses on causal AI to predict market shifts based on 'why' things happen, not just historical trends. Enterprise-grade causal inference for financial decision-making.",
    emoji: "📈", color: "from-red-500 to-red-700",
    directUrl: "https://causalens.com/?via=aiwebtools", imageUrl: causalensHero,
    tags: ["Data & Analytics", "AI Agents", "causal AI", "finance", "market prediction", "causal inference", "enterprise analytics"], category: "Data & Analytics", rating: 4.5,
  },
];
