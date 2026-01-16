import { Tool } from "@/types/tools";
import { 
  Heart, 
  MessageCircle, 
  Palette, 
  Image, 
  Sparkles, 
  Camera, 
  FileText 
} from "lucide-react";

// Hero image imports
import chatgptHealthHero from "@/assets/tools/chatgpt-health-hero.png";
import whatsappScheduleHero from "@/assets/tools/whatsapp-schedule-hero.png";
import colorpageLabHero from "@/assets/tools/colorpage-lab-hero.png";
import pngAiHero from "@/assets/tools/png-ai-hero.png";
import nanoBananaProHero from "@/assets/tools/nano-banana-pro-hero.png";
import imagen4Hero from "@/assets/tools/imagen-4-hero.png";
import freeAiContentWriterHero from "@/assets/tools/free-ai-content-writer-hero.png";

export const missingToolsBatch2025: Tool[] = [
  // ChatGPT Health - OpenAI's dedicated health experience
  {
    icon: Heart,
    title: "ChatGPT Health",
    description: "OpenAI's dedicated health and wellness experience in ChatGPT. Securely connect your health information from Apple Health, Oura, and other apps to get personalized health insights, track wellness goals, and receive AI-powered health guidance.",
    emoji: "💚",
    color: "from-green-500 to-teal-600",
    directUrl: "https://openai.com/index/introducing-chatgpt-health/?via=aiwebtools",
    imageUrl: chatgptHealthHero,
    tags: ["Health AI", "Wellness", "ChatGPT", "health tracking", "personal health", "fitness insights", "medical AI", "Healthcare & Medical AI"],
    category: "Health & Wellness",
    rating: 4.7,
    totalVotes: 3245
  },

  // Blueticks WhatsApp Schedule Message
  {
    icon: MessageCircle,
    title: "Blueticks WhatsApp Scheduler",
    description: "Schedule WhatsApp messages, launch campaigns, automate replies, and resolve questions with AI Support Agent - all inside WhatsApp. Trusted by 200K+ teams for automated messaging and productivity.",
    emoji: "💬",
    color: "from-green-400 to-green-600",
    directUrl: "https://blueticks.co/?via=aiwebtools",
    imageUrl: whatsappScheduleHero,
    tags: ["WhatsApp", "Message Scheduling", "Automation", "chat automation", "productivity", "campaigns", "AI support", "Automation"],
    category: "Business & Productivity",
    rating: 4.5,
    totalVotes: 2876
  },

  // ColorPage Lab AI Coloring Page Generator
  {
    icon: Palette,
    title: "ColorPage Lab",
    description: "AI-powered coloring page generator that creates print-ready PNG/PDF coloring pages in 10 seconds. Generate any coloring page you can imagine - from superhero dinosaurs to mermaid astronauts. Perfect for kids, parents, and educators.",
    emoji: "🎨",
    color: "from-pink-500 to-purple-600",
    directUrl: "https://colorpage.ai/?via=aiwebtools",
    imageUrl: colorpageLabHero,
    tags: ["Coloring Pages", "AI Art", "Kids", "printable", "educational", "creative", "image generator", "Image & Design"],
    category: "Image & Design",
    rating: 4.4,
    totalVotes: 1987
  },

  // PNG AI - Free AI PNG Generator
  {
    icon: Image,
    title: "PNG AI",
    description: "Free online AI PNG Generator powered by Flux model. Create stunning high-quality PNG images with transparent backgrounds in just a few clicks. Ideal for designers, artists, and content creators who need quick visual assets.",
    emoji: "🖼️",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.png.ai/?via=aiwebtools",
    imageUrl: pngAiHero,
    tags: ["PNG Generator", "Image Generation", "Transparent Images", "AI art", "graphic design", "visual assets", "Image Generator"],
    category: "Image & Design",
    rating: 4.3,
    totalVotes: 2134
  },

  // Nano Banana Pro - Google Gemini Image Generator
  {
    icon: Sparkles,
    title: "Nano Banana Pro",
    description: "Google's Gemini 3 Pro image generation model that lets you doodle your dreams into reality. Draw edits directly on images with new doodle controls, add text for specifics, and Gemini does the rest. Transform vibes from sunny to moody with Pro controls.",
    emoji: "🍌",
    color: "from-yellow-400 to-orange-500",
    directUrl: "https://gemini.google/overview/image-generation/?via=aiwebtools",
    imageUrl: nanoBananaProHero,
    tags: ["Image Generator", "Google", "Gemini", "doodle", "photo editing", "AI art", "text-to-image", "AI Image Generation"],
    category: "AI Image Generation",
    rating: 4.8,
    totalVotes: 4567
  },

  // Google Imagen 4 - Latest Image Model
  {
    icon: Camera,
    title: "Google Imagen 4",
    description: "Google DeepMind's leading text-to-image model engineered for creativity. Generate photorealistic images, artistic renders, and detailed visuals from text prompts. Available in Gemini API with Imagen 4 Fast for rapid generation.",
    emoji: "📸",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://deepmind.google/models/imagen/?via=aiwebtools",
    imageUrl: imagen4Hero,
    tags: ["Image Generator", "Google", "DeepMind", "text-to-image", "photorealistic", "AI art", "creative AI", "AI Image Generation"],
    category: "AI Image Generation",
    rating: 4.9,
    totalVotes: 5123
  },

  // Free AI Content Writer by HubSpot
  {
    icon: FileText,
    title: "Free AI Content Writer",
    description: "HubSpot's free AI content creation tools for generating blog posts, social media content, emails, and marketing copy. Go from blank page to polished draft in seconds with AI-powered writing across the HubSpot customer platform.",
    emoji: "✍️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://www.hubspot.com/products/cms/ai-content-writer?via=aiwebtools",
    imageUrl: freeAiContentWriterHero,
    tags: ["Content Writing", "AI Writer", "HubSpot", "blog posts", "marketing copy", "free tool", "copywriting", "Writing & Content"],
    category: "Writing & Content",
    rating: 4.5,
    totalVotes: 3456
  }
];
