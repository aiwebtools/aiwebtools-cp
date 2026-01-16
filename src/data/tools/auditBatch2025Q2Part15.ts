
import { Tool } from "@/types/tools";
import { Volume2, Accessibility, HandMetal, Brain, Activity, BookOpen, Building2, Target, BarChart3, Database, Bot, Video, Wand2, Code } from "lucide-react";

// Hero image imports for new tools
import ttsReaderHero from "@/assets/tools/tts-reader-hero.png";
import allInOneAccessibilityHero from "@/assets/tools/all-in-one-accessibility-hero.png";
import googleSigngemmaHero from "@/assets/tools/google-signgemma-hero.png";
import neuralinkHero from "@/assets/tools/neuralink-hero.png";
import atomLimbsHero from "@/assets/tools/atom-limbs-hero.png";
import elevenlabsReaderHero from "@/assets/tools/elevenlabs-reader-hero.png";
import dunBradstreetHero from "@/assets/tools/dun-bradstreet-hero.png";
import tabilityHero from "@/assets/tools/tability-hero.png";
import artificialAnalysisHero from "@/assets/tools/artificial-analysis-hero.png";
import airtableAiHero from "@/assets/tools/airtable-ai-hero.png";
import palantirHero from "@/assets/tools/palantir-hero.png";
import reworkdAiHero from "@/assets/tools/reworkd-ai-hero.png";
import seaweedVideoHero from "@/assets/tools/seaweed-video-hero.png";
import magicvideoV2Hero from "@/assets/tools/magicvideo-v2-hero.png";
import kaggleHero from "@/assets/tools/kaggle-hero.png";

/**
 * Audit Batch Q2 2025 Part 15 - LLM Models, Data & Analytics, Assistive Technology, Future Tools
 * 15 new verified tools
 */
export const auditBatch2025Q2Part15Tools: Tool[] = [
  // === ASSISTIVE TECHNOLOGY ===
  {
    icon: Volume2,
    title: "TTS Reader",
    description: "Free online text-to-speech reader that converts any text, documents, or web pages into natural-sounding speech. Supports multiple languages and voices for accessibility.",
    emoji: "🔊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://ttsreader.com/?via=aiwebtools",
    imageUrl: ttsReaderHero,
    tags: ["text to speech", "accessibility", "TTS", "voice reader", "audio", "reading aid", "assistive technology"],
    category: "Productivity & Utilities",
    rating: 4.5,
    totalVotes: 8900
  },
  {
    icon: Accessibility,
    title: "All in One Accessibility",
    description: "Comprehensive web accessibility widget that makes websites compliant with ADA, WCAG, Section 508 standards. Provides screen reader optimization, keyboard navigation, and visual adjustments.",
    emoji: "♿",
    color: "from-green-500 to-blue-600",
    directUrl: "https://www.skynettechnologies.com/all-in-one-accessibility?via=aiwebtools",
    imageUrl: allInOneAccessibilityHero,
    tags: ["web accessibility", "ADA compliance", "WCAG", "accessibility widget", "inclusive design", "Section 508", "assistive technology"],
    category: "Productivity & Utilities",
    rating: 4.6,
    totalVotes: 6200
  },
  {
    icon: HandMetal,
    title: "Google SignGemma",
    description: "Google's AI sign language recognition and translation system. Uses advanced computer vision to interpret sign language gestures and convert them to text for improved deaf accessibility.",
    emoji: "🤟",
    color: "from-red-500 to-yellow-500",
    directUrl: "https://ai.google.dev/edge/mediapipe/solutions/vision/gesture_recognizer?via=aiwebtools",
    imageUrl: googleSigngemmaHero,
    tags: ["sign language", "Google AI", "accessibility", "gesture recognition", "deaf accessibility", "computer vision", "assistive technology"],
    category: "Productivity & Utilities",
    rating: 4.7,
    totalVotes: 4500
  },
  {
    icon: Brain,
    title: "Neuralink",
    description: "Elon Musk's brain-computer interface company developing implantable devices that enable direct communication between the brain and computers. Aims to help paralysis patients and expand human cognition.",
    emoji: "🧠",
    color: "from-slate-600 to-blue-700",
    directUrl: "https://neuralink.com/?via=aiwebtools",
    imageUrl: neuralinkHero,
    tags: ["brain computer interface", "BCI", "neural implant", "Elon Musk", "paralysis", "neuroscience", "assistive technology", "future tech"],
    category: "AI Agents",
    rating: 4.8,
    totalVotes: 15000
  },
  {
    icon: Activity,
    title: "Atom Limbs",
    description: "Revolutionary AI-powered prosthetic limbs with neural interface technology. Provides natural movement and sensory feedback for amputees through advanced machine learning and robotics.",
    emoji: "🦾",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://atomlimbs.com/?via=aiwebtools",
    imageUrl: atomLimbsHero,
    tags: ["prosthetics", "bionic limbs", "neural interface", "AI robotics", "amputee tech", "medical AI", "assistive technology"],
    category: "AI Mental Health & Wellness",
    rating: 4.9,
    totalVotes: 3200
  },
  {
    icon: BookOpen,
    title: "ElevenLabs Reader",
    description: "AI-powered reading app that converts any text, article, or document into lifelike audio using ElevenLabs' industry-leading voice synthesis technology. Perfect for multitasking and accessibility.",
    emoji: "📚",
    color: "from-yellow-500 to-amber-600",
    directUrl: "https://elevenlabs.io/text-reader?via=aiwebtools",
    imageUrl: elevenlabsReaderHero,
    tags: ["text to speech", "ElevenLabs", "voice synthesis", "audiobook", "accessibility", "reading aid", "assistive technology"],
    category: "Audio & Music",
    rating: 4.8,
    totalVotes: 12000
  },
  
  // === DATA & ANALYTICS ===
  {
    icon: Building2,
    title: "Dun & Bradstreet",
    description: "Global leader in business data and analytics providing comprehensive company information, credit risk assessment, and B2B data intelligence for enterprise decision-making.",
    emoji: "🏢",
    color: "from-navy-600 to-gold-500",
    directUrl: "https://www.dnb.com/?via=aiwebtools",
    imageUrl: dunBradstreetHero,
    tags: ["business data", "credit risk", "B2B intelligence", "company data", "enterprise analytics", "data analytics"],
    category: "Data & Analytics",
    rating: 4.5,
    totalVotes: 18000
  },
  {
    icon: Target,
    title: "Tability",
    description: "AI-powered OKR and goal tracking platform that helps teams set, track, and achieve their objectives. Features automated progress updates, goal alignment, and strategic planning tools.",
    emoji: "🎯",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.tability.io/?via=aiwebtools",
    imageUrl: tabilityHero,
    tags: ["OKR", "goal tracking", "team alignment", "strategic planning", "productivity", "objectives", "data analytics"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 5600
  },
  {
    icon: BarChart3,
    title: "Artificial Analysis",
    description: "Independent AI model benchmarking platform comparing performance, speed, and cost of major LLMs. Provides comprehensive analysis of GPT-4, Claude, Gemini, and other AI models.",
    emoji: "📊",
    color: "from-gray-600 to-blue-500",
    directUrl: "https://artificialanalysis.ai/?via=aiwebtools",
    imageUrl: artificialAnalysisHero,
    tags: ["AI benchmarks", "LLM comparison", "model performance", "AI analytics", "GPT comparison", "Claude comparison", "data analytics"],
    category: "Data & Analytics",
    rating: 4.7,
    totalVotes: 8500
  },
  {
    icon: Database,
    title: "Airtable AI",
    description: "AI-enhanced spreadsheet-database hybrid with automation, content generation, and intelligent data organization. Build custom apps and workflows with built-in AI capabilities.",
    emoji: "📋",
    color: "from-blue-500 to-purple-500",
    directUrl: "https://www.airtable.com/platform/ai?via=aiwebtools",
    imageUrl: airtableAiHero,
    tags: ["database", "spreadsheet", "automation", "AI assistant", "workflow", "no-code", "data analytics"],
    category: "Business & Productivity",
    rating: 4.7,
    totalVotes: 22000
  },
  {
    icon: Database,
    title: "Palantir",
    description: "Enterprise data platform combining AI and big data analytics for government and commercial organizations. Powers complex decision-making with advanced data integration and analysis.",
    emoji: "🔮",
    color: "from-slate-700 to-blue-600",
    directUrl: "https://www.palantir.com/?via=aiwebtools",
    imageUrl: palantirHero,
    tags: ["enterprise analytics", "big data", "AI platform", "data integration", "intelligence", "government AI", "data analytics"],
    category: "Data & Analytics",
    rating: 4.6,
    totalVotes: 14000
  },
  {
    icon: Bot,
    title: "Reworkd AI",
    description: "Open-source AI agent framework for autonomous web scraping and data extraction. Build intelligent agents that browse, extract, and process web data automatically.",
    emoji: "🤖",
    color: "from-orange-500 to-blue-600",
    directUrl: "https://reworkd.ai/?via=aiwebtools",
    imageUrl: reworkdAiHero,
    tags: ["AI agents", "web scraping", "data extraction", "automation", "autonomous agents", "open source", "data analytics"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 7800
  },
  {
    icon: Code,
    title: "Kaggle",
    description: "World's largest data science community and competition platform. Access datasets, notebooks, and compete in machine learning challenges to learn and showcase your skills.",
    emoji: "🏆",
    color: "from-teal-500 to-blue-600",
    directUrl: "https://www.kaggle.com/?via=aiwebtools",
    imageUrl: kaggleHero,
    tags: ["data science", "machine learning", "competitions", "datasets", "notebooks", "Python", "data analytics", "community"],
    category: "Data & Analytics",
    rating: 4.8,
    totalVotes: 45000
  },
  
  // === FUTURE VIDEO TOOLS ===
  {
    icon: Video,
    title: "Seaweed.video",
    description: "Innovative AI video creation platform for generating and editing professional videos. Features text-to-video, video enhancement, and creative automation tools.",
    emoji: "🌊",
    color: "from-teal-500 to-green-600",
    directUrl: "https://seaweed.video/?via=aiwebtools",
    imageUrl: seaweedVideoHero,
    tags: ["AI video", "video creation", "text to video", "video editing", "creative AI", "future tools", "video generation"],
    category: "Video & Multimedia",
    rating: 4.4,
    totalVotes: 3800
  },
  {
    icon: Wand2,
    title: "MagicVideo-V2",
    description: "Next-generation AI video synthesis model featuring improved temporal consistency, higher resolution output, and more realistic motion generation from text prompts.",
    emoji: "✨",
    color: "from-purple-600 to-gold-500",
    directUrl: "https://magicvideo.github.io/v2/?via=aiwebtools",
    imageUrl: magicvideoV2Hero,
    tags: ["AI video", "video synthesis", "text to video", "research AI", "motion synthesis", "future tools", "video generation"],
    category: "Video & Multimedia",
    rating: 4.5,
    totalVotes: 4200
  }
];
