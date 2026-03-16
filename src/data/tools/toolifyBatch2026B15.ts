
import { Tool } from "@/types/tools";
import {
  Music,
  Video,
  Mic,
  Headphones,
  Film,
  Camera,
  Sparkles,
  Search,
  BookOpen,
  GraduationCap,
  Leaf,
  ShoppingBag,
  Palette,
  Code,
  Brain,
  Zap,
  BarChart3,
  Eye,
  Flame,
  MessageSquare,
  Layers,
  FileText,
  Send
} from "lucide-react";
import sondoAiHero from "@/assets/tools/sondo-ai-hero.jpg";
import musicfulHero from "@/assets/tools/musicful-hero.jpg";
import elevenlabsMusicHero from "@/assets/tools/elevenlabs-music-hero.jpg";
import distrokidHero from "@/assets/tools/distrokid-hero.jpg";
import higgsFieldHero from "@/assets/tools/higgsfield-hero.jpg";
import wanderboatAiHero from "@/assets/tools/wanderboat-ai-hero.jpg";
import stitchHero from "@/assets/tools/stitch-hero.jpg";
import raccoonAiHero from "@/assets/tools/raccoon-ai-hero.jpg";
import morphStudioHero from "@/assets/tools/morph-studio-hero.jpg";
import memoriesAiHero from "@/assets/tools/memories-ai-hero.jpg";
import astraAiHero from "@/assets/tools/astra-ai-hero.jpg";
import plantinHero from "@/assets/tools/plantin-hero.jpg";
import knowtHero from "@/assets/tools/knowt-hero.jpg";
import weavyHero from "@/assets/tools/weavy-hero.jpg";
import skyworkAiHero from "@/assets/tools/skywork-ai-hero.jpg";
import kiroHero from "@/assets/tools/kiro-hero.jpg";
import gptResearcherHero from "@/assets/tools/gpt-researcher-hero.jpg";
import hifunHero from "@/assets/tools/hifun-hero.jpg";
import flashCoHero from "@/assets/tools/flash-co-hero.jpg";
import studydriveHero from "@/assets/tools/studydrive-hero.jpg";
import googleAntigravityHero from "@/assets/tools/google-antigravity-hero.jpg";
import stackieAiHero from "@/assets/tools/stackie-ai-hero.jpg";
import sitefireHero from "@/assets/tools/sitefire-hero.jpg";
import listenLabsHero from "@/assets/tools/listen-labs-hero.jpg";

export const toolifyBatch2026B15: Tool[] = [
  // ===== SPECIFICALLY REQUESTED MUSIC TOOLS =====
  {
    icon: Music,
    title: "Sondo AI",
    description: "Revolutionary AI music video creation agent that turns your music into stunning, beat-synced cinematic visuals instantly. Generate full AI music videos from text prompts with professional-grade production — no editing skills required.",
    emoji: "🎬",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.sondo.ai/?via=aiwebtools",
    imageUrl: sondoAiHero,
    tags: ["AI Agent", "Music Video", "AI music video", "music creation", "beat-synced", "cinematic visuals", "video generation", "music agent", "Sondo", "AI MV", "social media content", "Automation Agent"],
    category: "AI Music Generation",
    rating: 4.7,
    totalVotes: 8900
  },
  {
    icon: Headphones,
    title: "Musicful",
    description: "AI music generator that creates royalty-free full songs from text prompts in seconds. Generate professional-quality tracks with vocals, lyrics, and instrumentation for content creators, filmmakers, and musicians — a powerful Suno alternative.",
    emoji: "🎶",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://www.musicful.ai/?via=aiwebtools",
    imageUrl: musicfulHero,
    tags: ["Music Generator", "AI music", "text to music", "royalty-free", "vocals", "lyrics", "song generator", "Musicful", "Suno alternative", "content creator music"],
    category: "AI Music Generation",
    rating: 4.6,
    totalVotes: 12400
  },
  {
    icon: Music,
    title: "ElevenLabs Music (Eleven Music)",
    description: "Studio-grade AI music generation by ElevenLabs. Create original music tracks from natural language prompts in any style — from cinematic scores to lo-fi beats. Part of ElevenLabs' comprehensive AI audio platform alongside voice synthesis and sound effects.",
    emoji: "🎵",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://elevenlabs.io/music?via=aiwebtools",
    imageUrl: elevenlabsMusicHero,
    tags: ["Music Generator", "AI music", "ElevenLabs", "Eleven Music", "studio-grade", "music generation", "text to music", "AI audio", "cinematic scores", "lo-fi", "sound design"],
    category: "AI Music Generation",
    rating: 4.8,
    totalVotes: 34500
  },
  {
    icon: Send,
    title: "DistroKid",
    description: "The easiest way for musicians to get music into Spotify, Apple Music, Amazon, Tidal, TikTok, YouTube, and more. Unlimited uploads, keep 100% of your earnings, and access more features than any other music distributor. Essential for independent artists.",
    emoji: "🎤",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://distrokid.com/?via=aiwebtools",
    imageUrl: distrokidHero,
    tags: ["Music Distribution", "Spotify", "Apple Music", "TikTok", "YouTube", "DistroKid", "independent artist", "music upload", "royalties", "streaming", "music marketing"],
    category: "AI Music Production Tools",
    rating: 4.7,
    totalVotes: 89000
  },

  // ===== TOOLIFY TRENDING TOOLS (Feb/Mar 2026) =====
  {
    icon: Film,
    title: "Higgsfield",
    description: "AI-powered camera control for cinematic video generation from photos. Create stunning motion-controlled videos with professional camera movements, product videos, and cinematic content from still images with 27M+ monthly users.",
    emoji: "🎥",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://higgsfield.ai/?via=aiwebtools",
    imageUrl: higgsFieldHero,
    tags: ["AI video", "motion control", "cinematic video", "product videos", "AI camera", "video generation", "Higgsfield", "photo to video"],
    category: "AI Video Generation",
    rating: 4.7,
    totalVotes: 27100
  },
  {
    icon: Search,
    title: "Wanderboat AI",
    description: "AI-powered travel platform for personalized trip planning and point-of-interest discovery. Get customized itineraries, accommodation recommendations, restaurant picks, and activity suggestions tailored to your preferences and budget.",
    emoji: "🧳",
    color: "from-orange-400 to-rose-500",
    directUrl: "https://wanderboat.ai/?via=aiwebtools",
    imageUrl: wanderboatAiHero,
    tags: ["AI travel", "trip planning", "itinerary", "vacation", "travel guide", "accommodation", "restaurants", "Wanderboat", "personalized travel"],
    category: "AI Travel & Tourism",
    rating: 4.6,
    totalVotes: 7500
  },
  {
    icon: Layers,
    title: "Stitch",
    description: "AI-powered UI generation tool for mobile and web apps by Google DeepMind. Generate pixel-perfect user interfaces from text descriptions, export to Figma or HTML, and iterate rapidly on design ideas with multiple AI models.",
    emoji: "🧵",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://stitch.withgoogle.com/",
    imageUrl: stitchHero,
    tags: ["AI design", "UI generation", "mobile UI", "web UI", "Figma export", "HTML export", "Google DeepMind", "Stitch", "no-code design"],
    category: "AI Image & Design",
    rating: 4.7,
    totalVotes: 6300
  },
  {
    icon: Brain,
    title: "Raccoon AI",
    description: "Collaborative AI agent that builds apps, analyzes data, and automates complex end-to-end workflows. A powerful autonomous assistant for developers and businesses seeking intelligent task automation and data-driven decision making.",
    emoji: "🦝",
    color: "from-emerald-500 to-teal-600",
    directUrl: "https://raccoon.ai/?via=aiwebtools",
    imageUrl: raccoonAiHero,
    tags: ["AI Agent", "app builder", "data analysis", "workflow automation", "Raccoon AI", "autonomous agent", "task automation", "developer tools"],
    category: "AI Agents",
    rating: 4.5,
    totalVotes: 4200
  },
  {
    icon: Video,
    title: "Morph Studio",
    description: "AI video creation and editing platform with text-to-video, image-to-video, and style transfer capabilities. Create marketing videos, e-commerce content, and cinematic clips with AI-powered upscaling and background removal.",
    emoji: "🎭",
    color: "from-purple-500 to-fuchsia-600",
    directUrl: "https://morphstudio.com/?via=aiwebtools",
    imageUrl: morphStudioHero,
    tags: ["AI video", "text-to-video", "image-to-video", "video editing", "style transfer", "Morph Studio", "marketing video", "e-commerce video"],
    category: "AI Video Generation",
    rating: 4.5,
    totalVotes: 3100
  },
  {
    icon: Eye,
    title: "Memories.ai",
    description: "AI that sees, remembers, and analyzes video for deep insights. Visual memory model for intelligent video processing, search, summarization, and real-time data extraction — perfect for media production, security, sports analytics, and marketing.",
    emoji: "🧠",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://memories.ai/?via=aiwebtools",
    imageUrl: memoriesAiHero,
    tags: ["AI video analysis", "visual memory", "video analytics", "video search", "video summarization", "Memories.ai", "scene detection", "media production", "security AI"],
    category: "AI Data & Analytics",
    rating: 4.6,
    totalVotes: 890
  },
  {
    icon: GraduationCap,
    title: "Astra AI",
    description: "AI math tutor providing step-by-step guidance with 24/7 availability. Get personalized help with math, chemistry, physics, and German — powered by GPT-4 for accurate explanations and exam preparation support.",
    emoji: "⭐",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://astra-ai.co/?via=aiwebtools",
    imageUrl: astraAiHero,
    tags: ["AI tutor", "math tutor", "homework help", "exam prep", "Astra AI", "chemistry tutor", "physics tutor", "GPT-4", "step-by-step"],
    category: "Education & Learning",
    rating: 4.5,
    totalVotes: 2000
  },
  {
    icon: Leaf,
    title: "PlantIn",
    description: "AI-powered plant identification, care tips, and problem-solving app. Snap a photo to instantly identify any plant, diagnose diseases, get pest control advice, and receive personalized gardening guidance from AI botanical experts.",
    emoji: "🌿",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://myplantin.com/?via=aiwebtools",
    imageUrl: plantinHero,
    tags: ["plant identification", "plant care", "gardening", "AI botany", "PlantIn", "pest control", "plant disease", "weed identification"],
    category: "AI Agriculture & Nature",
    rating: 4.5,
    totalVotes: 1700
  },
  {
    icon: BookOpen,
    title: "Knowt",
    description: "Free Quizlet alternative with AI-powered study tools and millions of learning resources. Create flashcards, take practice tests, summarize lectures, and study smarter with AI assistance for AP exams, homework, and test preparation.",
    emoji: "📚",
    color: "from-purple-500 to-violet-600",
    directUrl: "https://knowt.com/?via=aiwebtools",
    imageUrl: knowtHero,
    tags: ["flashcards", "study tools", "AI learning", "Quizlet alternative", "Knowt", "AP exams", "practice tests", "note taking", "homework help"],
    category: "Education & Learning",
    rating: 4.5,
    totalVotes: 3400
  },
  {
    icon: Palette,
    title: "Weavy",
    description: "Node-based AI design platform for creative professionals. Build artistic AI workflows by connecting generative models, editing tools, and custom pipelines for image generation, video creation, and team collaboration.",
    emoji: "🎨",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://weavy.ai/?via=aiwebtools",
    imageUrl: weavyHero,
    tags: ["AI design", "node-based", "creative workflows", "image generation", "video generation", "Weavy", "design automation", "generative AI"],
    category: "AI Image & Design",
    rating: 4.5,
    totalVotes: 1700
  },
  {
    icon: Zap,
    title: "Skywork.ai",
    description: "AI workspace agent that saves 6+ hours daily by automating document analysis, research, content creation, report generation, and data analysis. Finish by 2PM what used to take until 8PM with AI-powered productivity acceleration.",
    emoji: "⚡",
    color: "from-sky-500 to-blue-600",
    directUrl: "https://skywork.ai/?via=aiwebtools",
    imageUrl: skyworkAiHero,
    tags: ["AI productivity", "workspace agent", "document analysis", "research", "content creation", "Skywork", "report generation", "data analysis", "time savings"],
    category: "Business & Productivity",
    rating: 4.6,
    totalVotes: 3300
  },
  {
    icon: Code,
    title: "Kiro",
    description: "AI IDE for structured, spec-driven coding from prototype to production. Built with AI agents for code generation, unit testing, documentation, and optimization — ideal for developers who want structured AI-assisted development workflows.",
    emoji: "💻",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://kiro.dev/?via=aiwebtools",
    imageUrl: kiroHero,
    tags: ["AI IDE", "AI coding", "spec-driven development", "code generation", "developer tools", "Kiro", "AI agents", "unit testing", "documentation"],
    category: "Coding & Development",
    rating: 4.6,
    totalVotes: 1900
  },
  {
    icon: Search,
    title: "GPT Researcher",
    description: "AI-powered search engine and research assistant tailored for AI agents and rapid insights. Performs automated deep research across multiple sources, generates comprehensive reports, and provides real-time knowledge retrieval with RAG capabilities.",
    emoji: "🔍",
    color: "from-amber-600 to-yellow-500",
    directUrl: "https://gptr.dev/?via=aiwebtools",
    imageUrl: gptResearcherHero,
    tags: ["AI research", "search engine", "GPT Researcher", "deep research", "automated research", "RAG", "knowledge retrieval", "AI agent", "report generation"],
    category: "AI Research & Academic",
    rating: 4.6,
    totalVotes: 816
  },
  {
    icon: Sparkles,
    title: "HiFun",
    description: "AI-powered image editor that transforms photos with natural language text prompts. Apply creative styles, generate variations, and perform uncensored AI photo editing with impressive quality and speed.",
    emoji: "✨",
    color: "from-pink-400 to-yellow-400",
    directUrl: "https://hifun.ai/?via=aiwebtools",
    imageUrl: hifunHero,
    tags: ["AI image editor", "photo editing", "text-to-image", "HiFun", "image transformation", "generative AI", "photo manipulation"],
    category: "AI Image & Design",
    rating: 4.4,
    totalVotes: 783
  },
  {
    icon: ShoppingBag,
    title: "Flash.co",
    description: "AI shopping platform for tracking purchases, earning rewards, and managing shopping emails. Discover brands, filter spam, and get personalized shopping recommendations with complete data privacy protection.",
    emoji: "⚡",
    color: "from-yellow-500 to-purple-600",
    directUrl: "https://flash.co/?via=aiwebtools",
    imageUrl: flashCoHero,
    tags: ["AI shopping", "order tracking", "rewards", "Flash.co", "email management", "brand discovery", "personalized shopping", "spam filtering"],
    category: "Business & Productivity",
    rating: 4.4,
    totalVotes: 2600
  },
  {
    icon: GraduationCap,
    title: "Studydrive",
    description: "University learning hub where students share study notes, access AI learning tools, flashcards, and career resources. Join millions of students collaborating on exam preparation with community-driven educational content.",
    emoji: "🎓",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://studydrive.net/?via=aiwebtools",
    imageUrl: studydriveHero,
    tags: ["study notes", "university", "exam prep", "Studydrive", "AI learning", "flashcards", "student community", "career development", "document sharing"],
    category: "Education & Learning",
    rating: 4.4,
    totalVotes: 1800
  },
  {
    icon: Code,
    title: "Google Antigravity",
    description: "AI-powered agentic development platform and IDE by Google. Build software with AI agents that understand your codebase, generate code, and automate development workflows in a futuristic zero-gravity coding experience.",
    emoji: "🚀",
    color: "from-blue-500 to-green-500",
    directUrl: "https://antigravity.dev/",
    imageUrl: googleAntigravityHero,
    tags: ["AI IDE", "agentic development", "Google", "code editor", "AI coding", "Antigravity", "software development", "code generation", "automation"],
    category: "Coding & Development",
    rating: 4.7,
    totalVotes: 21600
  },
  {
    icon: FileText,
    title: "Stackie.AI",
    description: "AI life logger for journaling, tracking habits, managing information, and AI-assisted learning. Capture your daily experiences, build knowledge databases, and get AI-powered insights into your personal growth patterns.",
    emoji: "📝",
    color: "from-amber-500 to-orange-500",
    directUrl: "https://stackie.ai/?via=aiwebtools",
    imageUrl: stackieAiHero,
    tags: ["life logger", "journaling", "habit tracking", "Stackie.AI", "AI learning", "personal growth", "information management", "daily tracker"],
    category: "Business & Productivity",
    rating: 4.3,
    totalVotes: 450
  },
  {
    icon: Flame,
    title: "Sitefire",
    description: "Marketing suite to improve brand visibility and citations across AI search engines and AI agents. Optimize your online presence for the new era of AI-powered search with intelligent SEO strategies for ChatGPT, Perplexity, and other AI platforms.",
    emoji: "🔥",
    color: "from-orange-600 to-red-600",
    directUrl: "https://sitefire.ai/?via=aiwebtools",
    imageUrl: sitefireHero,
    tags: ["AI SEO", "AI search optimization", "Sitefire", "brand visibility", "AI marketing", "citation building", "ChatGPT SEO", "Perplexity SEO"],
    category: "Marketing & Sales",
    rating: 4.5,
    totalVotes: 520
  },
  {
    icon: MessageSquare,
    title: "Listen Labs",
    description: "AI-powered customer interview platform for actionable insights and automated reports. Conduct AI-moderated qualitative and quantitative research, concept testing, usability studies, and brand perception analysis at scale.",
    emoji: "🎧",
    color: "from-indigo-500 to-coral-500",
    directUrl: "https://listenlabs.ai/?via=aiwebtools",
    imageUrl: listenLabsHero,
    tags: ["customer interviews", "AI research", "market research", "Listen Labs", "qualitative research", "usability testing", "concept testing", "brand perception"],
    category: "Marketing & Sales",
    rating: 4.5,
    totalVotes: 688
  }
];
