import { Tool } from "@/types/tools";
import { PenTool, Eraser, BookOpen, MessageSquare, Wand2 } from "lucide-react";
import excalidrawHero from "@/assets/tools/excalidraw-hero.jpg";
import cleanupPicturesHero from "@/assets/tools/cleanup-pictures-hero.jpg";
import consensusHero from "@/assets/tools/consensus-hero.jpg";
import huggingchatHero from "@/assets/tools/huggingchat-hero.jpg";
import scribbleDiffusionHero from "@/assets/tools/scribble-diffusion-hero.jpg";

/**
 * Free Awesome AI Tools — April 2026 Batch
 * 5 verified, popular, 100% free AI tools we did not yet have in the directory.
 * Each entry is fully indexed (rich tags), categorized, and SEO-tagged.
 */
export const freeAwesomeBatch2026: Tool[] = [
  {
    icon: PenTool,
    title: "Excalidraw",
    description:
      "Excalidraw is a free, open-source virtual whiteboard for sketching hand-drawn-style diagrams, flowcharts, wireframes, and mind maps — now supercharged with an AI assistant that turns plain-text prompts into editable diagrams in seconds. Real-time collaboration, end-to-end encrypted live rooms, infinite canvas, exportable to PNG/SVG, and a beloved sketchy aesthetic make it a go-to tool for engineers, designers, teachers, and product teams. Completely free to use in the browser with no signup required.",
    emoji: "✏️",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://excalidraw.com/",
    imageUrl: excalidrawHero,
    isFree: true,
    tagline: "Free AI whiteboard that turns prompts into hand-drawn diagrams.",
    tags: [
      "Excalidraw", "excalidraw", "AI diagram", "AI whiteboard", "free whiteboard",
      "open source whiteboard", "flowchart maker", "mind map", "wireframe tool",
      "hand drawn diagrams", "sketch diagram AI", "collaborative whiteboard",
      "diagram from text", "text to diagram", "prompt to diagram",
      "online whiteboard", "infinite canvas", "free design tool",
      "Productivity & Utilities", "Image & Design", "diagramming",
      "engineering diagrams", "system design diagrams", "free AI tool"
    ],
    category: "Productivity & Utilities",
    rating: 4.9,
    totalVotes: 8421
  },
  {
    icon: Eraser,
    title: "Cleanup.pictures",
    description:
      "Cleanup.pictures is a free AI photo editor that removes unwanted people, objects, text, watermarks, defects, and backgrounds from any image with a single brush stroke. Powered by the LaMa inpainting model, it intelligently rebuilds the area behind whatever you erase — no Photoshop skills required. Drag in a photo, paint over what you don't want, and download a clean version in seconds. Free in-browser tool with optional Pro for higher resolutions.",
    emoji: "🧽",
    color: "from-teal-500 to-emerald-600",
    directUrl: "https://cleanup.pictures/",
    imageUrl: cleanupPicturesHero,
    isFree: true,
    tagline: "Free AI magic eraser — remove anything from any photo in one click.",
    tags: [
      "Cleanup.pictures", "cleanup pictures", "cleanuppictures", "AI object remover",
      "remove objects from photo", "magic eraser AI", "AI photo cleanup",
      "remove people from photo", "watermark remover", "free photo editor",
      "AI inpainting", "LaMa inpainting", "background remover",
      "photo retouching AI", "remove text from image", "free AI image editor",
      "Image & Design", "photo editing", "AI eraser", "object removal",
      "free AI tool", "image cleanup", "photo enhancer"
    ],
    category: "Image & Design",
    rating: 4.8,
    totalVotes: 6932
  },
  {
    icon: BookOpen,
    title: "Consensus",
    description:
      "Consensus is a free AI-powered academic search engine that searches over 200 million peer-reviewed scientific papers and instantly summarizes the consensus on any research question. Ask 'Does intermittent fasting work?' or 'Is meditation effective for anxiety?' and Consensus pulls direct evidence-based answers from real studies, complete with citations, study quality indicators, and a Consensus Meter showing where the science stands. The free tier gives unlimited searches and AI-powered summaries — perfect for students, researchers, doctors, and curious minds.",
    emoji: "📚",
    color: "from-emerald-600 to-teal-700",
    directUrl: "https://consensus.app/",
    imageUrl: consensusHero,
    isFree: true,
    tagline: "Free AI search engine that finds the scientific consensus on anything.",
    tags: [
      "Consensus", "consensus app", "consensus.app", "AI research", "AI search engine",
      "academic search AI", "scientific papers AI", "research assistant",
      "peer reviewed search", "evidence based search", "AI literature review",
      "citation finder", "research summary AI", "scholar AI",
      "Education & Learning", "Research & Academic", "free research tool",
      "science search engine", "academic AI tool", "study finder",
      "free AI tool", "research papers", "Consensus Meter"
    ],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 5421
  },
  {
    icon: MessageSquare,
    title: "HuggingChat",
    description:
      "HuggingChat is the free, 100% open-source ChatGPT alternative from Hugging Face. Chat with the latest open-source large language models — Llama 3, Mistral, Qwen, Command R+, and more — all in one clean interface. Switch models on the fly, browse community-shared assistants, run web search, generate images, and create your own custom AI assistant in seconds. No signup required to try, completely free, privacy-respecting, and open source on GitHub.",
    emoji: "🤗",
    color: "from-yellow-500 to-amber-600",
    directUrl: "https://huggingface.co/chat/",
    imageUrl: huggingchatHero,
    isFree: true,
    tagline: "Free open-source ChatGPT alternative powered by the best community LLMs.",
    tags: [
      "HuggingChat", "Hugging Chat", "huggingface chat", "Hugging Face chat",
      "open source ChatGPT", "free ChatGPT alternative", "Llama chat",
      "Mistral chat", "Qwen chat", "Command R+ chat", "open source LLM",
      "free AI chatbot", "AI assistant free", "open source AI chat",
      "AI Assistants & Search", "free chatbot", "HuggingFace",
      "free LLM playground", "open source AI", "free AI tool",
      "AI chat free", "ChatGPT alternative free", "no signup AI chat"
    ],
    category: "AI Assistants & Search",
    rating: 4.7,
    totalVotes: 7245
  },
  {
    icon: Wand2,
    title: "Scribble Diffusion",
    description:
      "Scribble Diffusion is a free AI tool that turns your rough scribbles, doodles, and stick-figure sketches into stunning polished artwork in seconds. Powered by ControlNet + Stable Diffusion, it preserves the exact composition of your drawing while reimagining it as a photorealistic image, painting, or illustration based on your text prompt. Open in any browser, draw with your mouse or finger, type what you want, and watch your scribble transform — completely free and open source by Replicate.",
    emoji: "🎨",
    color: "from-fuchsia-500 to-pink-600",
    directUrl: "https://scribblediffusion.com/",
    imageUrl: scribbleDiffusionHero,
    isFree: true,
    tagline: "Free AI that turns kid-doodle scribbles into jaw-dropping artwork.",
    tags: [
      "Scribble Diffusion", "scribble diffusion", "scribblediffusion",
      "sketch to image AI", "scribble to art", "doodle to art AI",
      "drawing to image AI", "ControlNet", "Stable Diffusion sketch",
      "AI sketch generator", "free AI art", "AI illustration generator",
      "turn drawing into art", "Replicate AI", "free AI image generator",
      "Image & Design", "AI art tool", "creative AI",
      "free AI tool", "AI art generator", "sketch transformation",
      "drawing AI", "open source AI art"
    ],
    category: "Image & Design",
    rating: 4.7,
    totalVotes: 4380
  }
];