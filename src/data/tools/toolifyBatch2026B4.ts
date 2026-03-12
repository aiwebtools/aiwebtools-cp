import { Tool } from "@/types/tools";
import { Brain, Video, FileText, Layers, Code, Mic, Search, Camera, Globe, Palette, Users, Sparkles, Music, Target, Shield, Database, BookOpen, Box } from "lucide-react";

import glm5Hero from "@/assets/tools/glm5-hero.jpg";
import temvideoHero from "@/assets/tools/temvideo-hero.jpg";
import aitexttuneHero from "@/assets/tools/aitexttune-hero.jpg";
import genpptAiHero from "@/assets/tools/genppt-ai-hero.jpg";
import crunAiHero from "@/assets/tools/crun-ai-hero.jpg";
import outdoorbriteHero from "@/assets/tools/outdoorbrite-hero.jpg";
import listnrAiHero from "@/assets/tools/listnr-ai-hero.jpg";
import zerorankAiHero from "@/assets/tools/zerorank-ai-hero.jpg";
import everfoldHero from "@/assets/tools/everfold-hero.jpg";
import verdentAiHero from "@/assets/tools/verdent-ai-hero.jpg";
import kubrixHero from "@/assets/tools/kubrix-hero.jpg";
import fragcutHero from "@/assets/tools/fragcut-hero.jpg";
import blobuAiHero from "@/assets/tools/blobu-ai-hero.jpg";
import neatscribeHero from "@/assets/tools/neatscribe-hero.jpg";
import orphiqHero from "@/assets/tools/orphiq-hero.jpg";
import kolvaHero from "@/assets/tools/kolva-hero.jpg";
import archimystHero from "@/assets/tools/archimyst-hero.jpg";
import storyshipHero from "@/assets/tools/storyship-hero.jpg";
import facefinderAiHero from "@/assets/tools/facefinder-ai-hero.jpg";
import fimoHero from "@/assets/tools/fimo-hero.jpg";
import drumicsHero from "@/assets/tools/drumics-hero.jpg";
import interactpitchHero from "@/assets/tools/interactpitch-hero.jpg";
import gistiloHero from "@/assets/tools/gistilo-hero.jpg";
import vfastAiHero from "@/assets/tools/vfast-ai-hero.jpg";
import leaddeAiHero from "@/assets/tools/leadde-ai-hero.jpg";

export const toolifyBatch2026B4: Tool[] = [
  {
    icon: Brain, title: "GLM 5",
    description: "745B parameter open-source AI model by Z.ai built for agentic engineering and complex systems development. GLM-5 scales to 744B parameters with 40B active, targeting long-horizon agent tasks with advanced reasoning capabilities. Supports auto-generation of documents, sandboxes, and multi-step workflows.",
    emoji: "🧠", color: "from-blue-600 to-cyan-500",
    directUrl: "https://z.ai/?via=aiwebtools", imageUrl: glm5Hero,
    tags: ["LLM", "open source", "AI model", "agentic", "745B parameters", "Z.ai", "Coding & Development"],
    category: "Coding & Development", rating: 4.7, totalVotes: 3456, isFree: true,
  },
  {
    icon: Video, title: "TemVideo",
    description: "AI video ad maker that turns static product images and raw phone footage into high-converting viral videos for TikTok, Reels, and Shorts. No camera, no editing skills needed — upload casual snaps and get pro-quality video ads with auto-editing, music, and cuts in seconds.",
    emoji: "🎬", color: "from-purple-500 to-orange-500",
    directUrl: "https://temvideo.ai/?via=aiwebtools", imageUrl: temvideoHero,
    tags: ["AI video", "video ads", "TikTok", "product video", "e-commerce", "image-to-video", "Video & Multimedia Tools"],
    category: "Video & Multimedia Tools", rating: 4.4, totalVotes: 2123,
  },
  {
    icon: FileText, title: "AITextTune",
    description: "Improve your text with AI in just one click. AITextTune fixes errors, improves clarity and flow, summarizes content, generates explanations, and translates — all in real-time. Customize the writing style from formal to creative, and process text in any language with powerful AI.",
    emoji: "✍️", color: "from-blue-500 to-teal-500",
    directUrl: "https://www.aitexttune.com/?via=aiwebtools", imageUrl: aitexttuneHero,
    tags: ["text improvement", "grammar", "writing assistant", "AI editor", "translation", "clarity", "Writing & Content"],
    category: "Writing & Content", rating: 4.3, totalVotes: 1678,
  },
  {
    icon: Layers, title: "GenPPT AI",
    description: "AI-powered presentation maker that creates complete PowerPoint slide decks from a single prompt. GenPPT generates polished presentations with native .pptx export, so you can edit instantly in PowerPoint. Turn notes, links, or topics into professional slides in minutes, not hours.",
    emoji: "📊", color: "from-pink-500 to-blue-600",
    directUrl: "https://genppt.com/?via=aiwebtools", imageUrl: genpptAiHero,
    tags: ["AI presentation", "PowerPoint", "slide maker", "PPTX", "business", "productivity", "Business & Productivity"],
    category: "Business & Productivity", rating: 4.5, totalVotes: 2345,
  },
  {
    icon: Code, title: "Crun AI",
    description: "Unified API for accessing 100+ top-tier AI video, image, and audio models in one place. Fast integration, low-cost, high-performance, and developer-friendly. One API key to access all the best generative AI models with 99.9% uptime and 24/7 support.",
    emoji: "⚡", color: "from-cyan-500 to-green-600",
    directUrl: "https://crun.ai/?via=aiwebtools", imageUrl: crunAiHero,
    tags: ["API", "unified AI", "developer tools", "video API", "image API", "audio API", "Coding & Development"],
    category: "Coding & Development", rating: 4.5, totalVotes: 2234,
  },
  {
    icon: Palette, title: "OutdoorBrite",
    description: "The world's #1 AI landscape design tool that transforms outdoor spaces in less than 30 seconds. Upload a photo of your backyard, garden, patio, or front yard and instantly redesign it with photorealistic AI visualization. Used by 2.2M+ homeowners worldwide.",
    emoji: "🌿", color: "from-green-500 to-amber-500",
    directUrl: "https://www.outdoorbrite.com/?via=aiwebtools", imageUrl: outdoorbriteHero,
    tags: ["landscape design", "AI design", "backyard", "garden", "home improvement", "outdoor", "Image & Design"],
    category: "Image & Design", rating: 4.5, totalVotes: 2890,
  },
  {
    icon: Mic, title: "Listnr AI",
    description: "Ultra-realistic AI voice generator trusted by 3M+ users with 1000+ different voices in 142+ languages, including voice cloning. Create human-like voiceovers for podcasts, videos, e-learning, and audiobooks. Product Hunt #1 Product of the Day and Golden Kitty Winner.",
    emoji: "🎙️", color: "from-purple-600 to-blue-500",
    directUrl: "https://listnr.ai/?via=aiwebtools", imageUrl: listnrAiHero,
    tags: ["AI voice", "text-to-speech", "voice generator", "voice cloning", "voiceover", "TTS", "Audio & Music Tools"],
    category: "Audio & Music Tools", rating: 4.6, totalVotes: 3234,
  },
  {
    icon: Search, title: "ZeroRank AI",
    description: "Track and improve your brand's visibility in AI search with clear, actionable insights. ZeroRank helps marketers rank #1 on ChatGPT and AI search engines by monitoring brand mentions, analyzing competitor positioning, and providing optimization recommendations.",
    emoji: "📈", color: "from-green-600 to-blue-700",
    directUrl: "https://zerorank.ai/?via=aiwebtools", imageUrl: zerorankAiHero,
    tags: ["AI SEO", "brand visibility", "ChatGPT ranking", "AI search", "marketing analytics", "GEO", "Marketing & Sales"],
    category: "Marketing & Sales", rating: 4.4, totalVotes: 1987,
  },
  {
    icon: Camera, title: "EverFold",
    description: "Transform personal photos into professionally printed custom colouring books. EverFold uses AI to convert your favourite photos into beautiful line drawings, then prints and delivers a professionally bound colouring book. The perfect personalized gift for any occasion.",
    emoji: "🎨", color: "from-pink-400 to-rose-600",
    directUrl: "https://everfold.net/?via=aiwebtools", imageUrl: everfoldHero,
    tags: ["colouring book", "AI art", "photo-to-art", "custom prints", "personalized gifts", "creative", "Image & Design"],
    category: "Image & Design", rating: 4.3, totalVotes: 1567,
  },
  {
    icon: Code, title: "Verdent AI",
    description: "The leading all-in-one agentic coding platform with multiple parallel AI agents. Verdent supports GPT-5.4 and top-tier AI models, letting you build and run AI agents that code simultaneously across your project. Available for VS Code, JetBrains, and Mac.",
    emoji: "🌱", color: "from-green-500 to-green-800",
    directUrl: "https://www.verdent.app/?via=aiwebtools", imageUrl: verdentAiHero,
    tags: ["AI coding", "agentic coding", "parallel agents", "IDE", "developer tools", "VS Code", "Coding & Development"],
    category: "Coding & Development", rating: 4.6, totalVotes: 2567,
  },
  {
    icon: Video, title: "Kubrix",
    description: "AI platform for cinema-quality faceless viral video generation. Turn your ideas into high-quality viral videos for TikTok, Instagram, and YouTube with AI. Trusted by 90K+ users, Kubrix generates stunning text-to-video and faceless content with one click.",
    emoji: "🎥", color: "from-red-600 to-black",
    directUrl: "https://kubrix.ai/?via=aiwebtools", imageUrl: kubrixHero,
    tags: ["faceless video", "viral video", "AI video", "TikTok", "text-to-video", "content creation", "Video & Multimedia Tools"],
    category: "Video & Multimedia Tools", rating: 4.4, totalVotes: 2345,
  },
  {
    icon: Video, title: "FragCut",
    description: "AI-powered gaming clip generator that finds your best plays and converts them to viral-ready vertical clips 10x faster. No editing skills required — AI auto-detects highlights, clutch moments, and epic plays from your gaming streams and footage in 15-minute turnaround.",
    emoji: "🎮", color: "from-green-500 to-emerald-700",
    directUrl: "https://fragcut.io/?via=aiwebtools", imageUrl: fragcutHero,
    tags: ["gaming clips", "AI editing", "highlight generator", "Twitch", "gaming", "vertical video", "Gaming & Entertainment"],
    category: "Gaming & Entertainment", rating: 4.5, totalVotes: 1890,
  },
  {
    icon: BookOpen, title: "Blobu.ai",
    description: "AI personal learning assistant that summarizes books, creates creative mashups of insights, and organizes them into a personalized knowledge hub. Interactive Q&A with AI trained on your saved summaries for smarter knowledge management and faster learning.",
    emoji: "📚", color: "from-purple-500 to-pink-500",
    directUrl: "https://blobu.ai/?via=aiwebtools", imageUrl: blobuAiHero,
    tags: ["book summaries", "AI learning", "knowledge management", "reading", "education", "personal growth", "Education & Learning"],
    category: "Education & Learning", rating: 4.3, totalVotes: 1678,
  },
  {
    icon: Mic, title: "NeatScribe",
    description: "Intelligent audio and video to text transcription converter. Upload audio or video files and get accurate transcriptions with word-level timestamps. Edit transcripts like a document and export to TXT, SRT, or VTT formats. Supports most audio and video formats.",
    emoji: "📝", color: "from-teal-500 to-blue-600",
    directUrl: "https://neatscribe.com/?via=aiwebtools", imageUrl: neatscribeHero,
    tags: ["transcription", "audio-to-text", "video-to-text", "subtitles", "SRT", "speech recognition", "Audio & Music Tools"],
    category: "Audio & Music Tools", rating: 4.4, totalVotes: 1789,
  },
  {
    icon: Music, title: "Orphiq",
    description: "Personalized AI for music artists and their teams. Release planning and career strategy built around modern music workflows. Orphiq remembers who you are as an artist, providing personalized content ideas, release timelines, and strategic guidance for artists, managers, labels, and agencies.",
    emoji: "🎵", color: "from-purple-600 to-magenta-500",
    directUrl: "https://orphiq.co/?via=aiwebtools", imageUrl: orphiqHero,
    tags: ["music industry", "artist management", "release planning", "music marketing", "career strategy", "music AI", "Audio & Music Tools"],
    category: "Audio & Music Tools", rating: 4.4, totalVotes: 1567,
  },
  {
    icon: Users, title: "Kolva",
    description: "Pay-as-you-go AI productivity tool that runs in Chrome with no installs. Meeting transcription at $0.25/hour, AI tasks, document search, and focus planning — all pay-as-you-go with no subscriptions. Works with Zoom, Teams, and Google Meet natively in Chrome.",
    emoji: "💼", color: "from-blue-500 to-blue-700",
    directUrl: "https://kolva.io/?via=aiwebtools", imageUrl: kolvaHero,
    tags: ["meeting transcription", "productivity", "Chrome extension", "pay-as-you-go", "Zoom", "Teams", "Business & Productivity"],
    category: "Business & Productivity", rating: 4.3, totalVotes: 1456,
  },
  {
    icon: Code, title: "Archimyst",
    description: "AI-powered platform for designing, simulating, and validating high-performance system architectures. Design the top 1% of system architectures — visualize your entire stack from load balancers to distributed databases, stress-test performance and cost before deployment.",
    emoji: "🏗️", color: "from-purple-600 to-blue-700",
    directUrl: "https://www.archimyst.com/?via=aiwebtools", imageUrl: archimystHero,
    tags: ["system architecture", "AI design", "simulation", "cloud architecture", "developer tools", "infrastructure", "Coding & Development"],
    category: "Coding & Development", rating: 4.5, totalVotes: 2123,
  },
  {
    icon: Video, title: "Storyship",
    description: "AI tools for demo videos, audiobooks, and lip sync. Turn screen recordings into polished product demos with AI voiceover, script editing, and presenter-style intros. Transform manuscripts into audiobooks and sync lip movements to any audio track.",
    emoji: "🚀", color: "from-orange-500 to-red-600",
    directUrl: "https://storyship.app/?via=aiwebtools", imageUrl: storyshipHero,
    tags: ["demo videos", "audiobooks", "lip sync", "screen recording", "product demo", "AI voiceover", "Video & Multimedia Tools"],
    category: "Video & Multimedia Tools", rating: 4.3, totalVotes: 1678,
  },
  {
    icon: Search, title: "FaceFinder AI",
    description: "AI reverse face search engine for identity verification, profile finding, and facial recognition across the public web. Upload a face photo and search 212M+ indexed face vectors with ~350ms response time. Privacy-focused with developer-friendly API and self-hostable option.",
    emoji: "🔍", color: "from-red-600 to-gray-900",
    directUrl: "https://facefinderai.com/?via=aiwebtools", imageUrl: facefinderAiHero,
    tags: ["face search", "facial recognition", "identity verification", "reverse image", "security", "API", "Security & Privacy"],
    category: "Security & Privacy", rating: 4.4, totalVotes: 2234,
  },
  {
    icon: Globe, title: "Fimo",
    description: "AI builder for motion-first multi-page websites with collaborative editing. Build and deploy websites in minutes with AI-powered tools, responsive design, content management, and team collaboration. Features edit mode, asset management, and online code editing.",
    emoji: "🌐", color: "from-orange-500 to-brown-600",
    directUrl: "https://fimo.ai/?via=aiwebtools", imageUrl: fimoHero,
    tags: ["website builder", "AI builder", "motion design", "collaborative", "CMS", "no-code", "Web Development Tools"],
    category: "Web Development Tools", rating: 4.3, totalVotes: 1567,
  },
  {
    icon: Music, title: "Drumics",
    description: "AI Music Generator creating studio-quality, royalty-free tracks for content creators, filmmakers, and game developers. Generate professional music with AI in any genre, tempo, and mood. Perfect for background music, video soundtracks, and commercial projects.",
    emoji: "🥁", color: "from-red-600 to-red-900",
    directUrl: "https://drumics.com/?via=aiwebtools", imageUrl: drumicsHero,
    tags: ["AI music", "music generator", "royalty-free", "background music", "soundtrack", "content creation", "Audio & Music Tools"],
    category: "Audio & Music Tools", rating: 4.4, totalVotes: 1890,
  },
  {
    icon: Layers, title: "Interactpitch",
    description: "AI platform turning pitch decks into interactive experiences with real-time viewer analytics. Your deck explains itself — see what viewers care about, track engagement, and optimize your presentations. Transform static slides into dynamic, interactive showcases.",
    emoji: "📑", color: "from-blue-600 to-indigo-700",
    directUrl: "https://interactlabs.ai/?via=aiwebtools", imageUrl: interactpitchHero,
    tags: ["pitch deck", "interactive presentation", "sales deck", "viewer analytics", "investor pitch", "engagement", "Business & Productivity"],
    category: "Business & Productivity", rating: 4.3, totalVotes: 1567, isFree: true,
  },
  {
    icon: Sparkles, title: "Gistilo",
    description: "Clear your Watch Later backlog fast. Gistilo delivers 7 key takeaways from any YouTube video so you can decide what's worth watching in seconds. AI-powered video summarization that extracts the essential insights without watching the full content.",
    emoji: "📺", color: "from-green-400 to-emerald-600",
    directUrl: "https://gistilo.com/?via=aiwebtools", imageUrl: gistiloHero,
    tags: ["YouTube summary", "video summary", "Watch Later", "key takeaways", "productivity", "content digest", "AI Tools & Utilities"],
    category: "AI Tools & Utilities", rating: 4.3, totalVotes: 1456,
  },
  {
    icon: Video, title: "VFast AI",
    description: "All-in-one generative AI platform for image and video creation with lightning-fast generation speeds. Create professional-quality visual content from text prompts with multiple AI models, styles, and formats. Designed for speed without sacrificing quality.",
    emoji: "⚡", color: "from-orange-500 to-red-600",
    directUrl: "https://vfast.ai/?via=aiwebtools", imageUrl: vfastAiHero,
    tags: ["AI video", "AI image", "generative AI", "fast generation", "text-to-image", "text-to-video", "Video & Image Generators"],
    category: "Video & Image Generators", rating: 4.4, totalVotes: 1890,
  },
  {
    icon: Video, title: "Leadde AI",
    description: "Magically create engaging training, explainer, tutorial, and demo videos with AI. Transform scripts and documentation into professional video content with AI-generated voiceovers, visuals, and animations. Perfect for onboarding, product tutorials, and educational content.",
    emoji: "🎓", color: "from-green-600 to-teal-700",
    directUrl: "https://leadde.ai/?via=aiwebtools", imageUrl: leaddeAiHero,
    tags: ["training videos", "explainer videos", "tutorial maker", "AI video", "e-learning", "demo videos", "Education & Learning"],
    category: "Education & Learning", rating: 4.4, totalVotes: 1678,
  },
];
