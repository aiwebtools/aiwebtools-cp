
import { Tool } from "@/types/tools";
import { Bot, MessageSquare, Brain, Sparkles, Video, Film, Volume2, GraduationCap, Search, Lightbulb, Globe, Wand2 } from "lucide-react";

// Hero image imports
import grok4Hero from "@/assets/tools/grok4-hero.png";
import qwen3Hero from "@/assets/tools/qwen3-hero.png";
import kimiAiHero from "@/assets/tools/kimi-ai-hero.png";
import leChatHero from "@/assets/tools/le-chat-hero.png";
import amazonNovaHero from "@/assets/tools/amazon-nova-hero.png";
import seedanceHero from "@/assets/tools/seedance-hero.png";
import hunyuanVideoHero from "@/assets/tools/hunyuan-video-hero.png";
import wan26Hero from "@/assets/tools/wan26-hero.png";
import speechSynthesisHero from "@/assets/tools/speech-synthesis-hero.png";
import linerAiHero from "@/assets/tools/liner-ai-hero.png";
import globeExplorerHero from "@/assets/tools/globe-explorer-ai-hero.png";
import unstuckAiHero from "@/assets/tools/unstuck-ai-hero.png";

export const auditBatch2025Q2Part3: Tool[] = [
  // ============ AI CHAT & ASSISTANT ============
  {
    icon: Bot,
    title: "Grok 4",
    description: "xAI's most advanced reasoning AI model with real-time X/Twitter integration, deep thinking capabilities, and enhanced analysis for complex problem-solving and research.",
    emoji: "🤖",
    color: "from-gray-700 to-black",
    directUrl: "https://grok.x.ai/?via=aiwebtools",
    imageUrl: grok4Hero,
    tags: ["xAI", "Grok", "reasoning AI", "real-time data", "X integration", "advanced AI", "deep thinking", "Chat Assistant"],
    category: "AI Chat & Assistant",
    rating: 4.9,
    totalVotes: 2850
  },
  {
    icon: Brain,
    title: "Qwen 3",
    description: "Alibaba's latest open-source AI model series featuring advanced reasoning, multilingual support, and hybrid thinking modes for enhanced conversation and task completion.",
    emoji: "🧠",
    color: "from-purple-600 to-blue-600",
    directUrl: "https://qwenlm.github.io/blog/qwen3/?via=aiwebtools",
    imageUrl: qwen3Hero,
    tags: ["Alibaba", "Qwen", "open source", "multilingual", "reasoning", "hybrid thinking", "Chat Assistant"],
    category: "AI Chat & Assistant",
    rating: 4.7,
    totalVotes: 1890
  },
  {
    icon: MessageSquare,
    title: "Kimi.ai",
    description: "Moonshot AI's powerful assistant with ultra-long context support (up to 2M tokens), perfect for analyzing lengthy documents, research papers, and complex conversations.",
    emoji: "🌙",
    color: "from-indigo-600 to-purple-700",
    directUrl: "https://kimi.moonshot.cn/?via=aiwebtools",
    imageUrl: kimiAiHero,
    tags: ["Moonshot AI", "Kimi", "long context", "document analysis", "2M tokens", "research", "Chat Assistant"],
    category: "AI Chat & Assistant",
    rating: 4.6,
    totalVotes: 1450
  },
  {
    icon: Sparkles,
    title: "Le Chat by Mistral AI",
    description: "Mistral AI's conversational assistant offering fast, efficient responses with European AI innovation. Features multiple model options and enterprise-grade capabilities.",
    emoji: "💬",
    color: "from-orange-500 to-red-600",
    directUrl: "https://chat.mistral.ai/?via=aiwebtools",
    imageUrl: leChatHero,
    tags: ["Mistral AI", "Le Chat", "European AI", "fast responses", "enterprise", "open source", "Chat Assistant"],
    category: "AI Chat & Assistant",
    rating: 4.7,
    totalVotes: 2100
  },
  {
    icon: Bot,
    title: "Amazon Nova",
    description: "Amazon's multimodal AI foundation models offering text, image, and video understanding. Integrated with AWS services for scalable enterprise AI applications.",
    emoji: "✨",
    color: "from-orange-400 to-yellow-500",
    directUrl: "https://aws.amazon.com/ai/generative-ai/nova/?via=aiwebtools",
    imageUrl: amazonNovaHero,
    tags: ["Amazon", "AWS", "Nova", "multimodal", "enterprise AI", "foundation model", "Chat Assistant"],
    category: "AI Chat & Assistant",
    rating: 4.6,
    totalVotes: 1650
  },

  // ============ VIDEO GENERATORS ============
  {
    icon: Video,
    title: "Seedance 1.5 Pro",
    description: "ByteDance's advanced AI video generation model creating high-quality videos with realistic motion, physics simulation, and enhanced character consistency.",
    emoji: "🌱",
    color: "from-green-500 to-emerald-600",
    directUrl: "https://seedance.github.io/?via=aiwebtools",
    imageUrl: seedanceHero,
    tags: ["ByteDance", "Seedance", "video generation", "text-to-video", "motion synthesis", "AI video", "Video Generator"],
    category: "Video Generation",
    rating: 4.8,
    totalVotes: 1340
  },
  {
    icon: Film,
    title: "Hunyuan Video",
    description: "Tencent's open-source video generation model producing photorealistic videos with natural motion. Supports text-to-video and image-to-video generation.",
    emoji: "🎬",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://github.com/Tencent/HunyuanVideo?via=aiwebtools",
    imageUrl: hunyuanVideoHero,
    tags: ["Tencent", "Hunyuan", "video generation", "open source", "text-to-video", "photorealistic", "Video Generator"],
    category: "Video Generation",
    rating: 4.7,
    totalVotes: 1120
  },
  {
    icon: Wand2,
    title: "Wan2.6",
    description: "Alibaba's state-of-the-art video generation model with exceptional quality and coherence. Creates stunning videos from text prompts with advanced temporal consistency.",
    emoji: "🎭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://github.com/Wan-Video/Wan2.1?via=aiwebtools",
    imageUrl: wan26Hero,
    tags: ["Alibaba", "Wan", "video generation", "text-to-video", "temporal consistency", "AI video", "Video Generator"],
    category: "Video Generation",
    rating: 4.7,
    totalVotes: 980
  },

  // ============ TEXT TO SPEECH ============
  {
    icon: Volume2,
    title: "Speech Synthesis",
    description: "Web-native text-to-speech technology using browser Speech Synthesis API. Free, instant voice generation with multiple languages and voice options built into modern browsers.",
    emoji: "🔊",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis?via=aiwebtools",
    imageUrl: speechSynthesisHero,
    tags: ["Web API", "browser TTS", "speech synthesis", "free", "text-to-speech", "voice generation", "Text To Speech"],
    category: "Text To Speech",
    rating: 4.2,
    totalVotes: 890
  },

  // ============ EDUCATION / STUDIES ============
  {
    icon: Search,
    title: "Liner AI",
    description: "AI-powered research assistant that highlights, summarizes, and explains web content. Perfect for students and researchers who need quick insights from articles and papers.",
    emoji: "📝",
    color: "from-purple-600 to-indigo-600",
    directUrl: "https://getliner.com/?via=aiwebtools",
    imageUrl: linerAiHero,
    tags: ["research", "highlighting", "summarization", "education", "study assistant", "web clipper", "Education", "Learning Platform"],
    category: "Education & Studies",
    rating: 4.6,
    totalVotes: 1780
  },
  {
    icon: Globe,
    title: "Globe Explorer AI",
    description: "Interactive AI-powered learning platform for exploring geography, history, and world cultures. Visualize knowledge with dynamic maps and educational content.",
    emoji: "🌍",
    color: "from-blue-500 to-green-500",
    directUrl: "https://explorer.globe.engineer/?via=aiwebtools",
    imageUrl: globeExplorerHero,
    tags: ["geography", "exploration", "education", "maps", "world cultures", "interactive learning", "Education", "Learning Platform"],
    category: "Education & Studies",
    rating: 4.5,
    totalVotes: 920
  },
  {
    icon: Lightbulb,
    title: "Unstuck AI",
    description: "AI tutor that helps students overcome learning obstacles. Get step-by-step explanations, problem-solving guidance, and personalized learning support for any subject.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-500",
    directUrl: "https://www.unstuckai.com/?via=aiwebtools",
    imageUrl: unstuckAiHero,
    tags: ["tutoring", "homework help", "problem solving", "education", "learning assistant", "study help", "Education", "AI Tutor"],
    category: "Education & Studies",
    rating: 4.7,
    totalVotes: 1340
  }
];
