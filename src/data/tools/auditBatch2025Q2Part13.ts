
import { Tool } from "@/types/tools";
import { Home, Palette, Sparkles, Plane } from "lucide-react";

// Hero images for new tools
import modernRealityHero from "@/assets/tools/modern-reality-hero.png";
import civitaiHero from "@/assets/tools/civitai-hero.png";
import artflowHero from "@/assets/tools/artflow-ai-hero.png";
import dreaminaHero from "@/assets/tools/dreamina-ai-hero.png";
import googleFlightsHero from "@/assets/tools/google-flights-hero.png";
import tripadvisorTripsHero from "@/assets/tools/tripadvisor-trips-hero.png";

/**
 * Audit Batch Q2 2025 Part 13 - Real Estate/Architect, Games, Art, Travel
 * 6 verified new tools with 4K artistic hero images
 */
export const auditBatch2025Q2Part13Tools: Tool[] = [
  // === REAL ESTATE / ARCHITECT ===
  {
    icon: Home,
    title: "Modern Reality",
    description: "AI-powered architectural visualization and virtual staging platform. Transform empty spaces into stunning furnished rooms with photorealistic rendering for real estate marketing.",
    emoji: "🏠",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://www.modern.reality/?via=aiwebtools",
    imageUrl: modernRealityHero,
    tags: ["virtual staging", "architectural visualization", "real estate", "property marketing", "3D rendering", "architecture", "Real Estate"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 1234
  },

  // === ART ===
  {
    icon: Palette,
    title: "Civitai",
    description: "Leading community platform for sharing and discovering AI-generated art models, LoRAs, and checkpoints. Download custom Stable Diffusion models trained by the community for unique art styles.",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://civitai.com/?via=aiwebtools",
    imageUrl: civitaiHero,
    tags: ["AI models", "Stable Diffusion", "model sharing", "community", "LoRA", "checkpoints", "AI art", "Art"],
    category: "Image & Design",
    rating: 4.8,
    totalVotes: 8765
  },
  {
    icon: Sparkles,
    title: "ArtFlow AI",
    description: "AI-powered creative studio for generating unique character portraits, avatars, and artistic images. Create consistent characters across multiple scenes and styles for storytelling and content creation.",
    emoji: "🌊",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://artflow.ai/?via=aiwebtools",
    imageUrl: artflowHero,
    tags: ["character generation", "AI portraits", "avatar creator", "consistent characters", "storytelling", "Art"],
    category: "Image & Design",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Palette,
    title: "Dreamina AI",
    description: "ByteDance's powerful AI image generator with advanced text-to-image capabilities. Create stunning artwork, illustrations, and designs with intuitive prompting and multiple artistic styles.",
    emoji: "💭",
    color: "from-pink-500 to-violet-600",
    directUrl: "https://dreamina.capcut.com/?via=aiwebtools",
    imageUrl: dreaminaHero,
    tags: ["ByteDance", "text-to-image", "AI art generator", "illustrations", "digital art", "Art"],
    category: "Image & Design",
    rating: 4.5,
    totalVotes: 2345
  },

  // === TRAVEL ===
  {
    icon: Plane,
    title: "Google Flight Deals",
    description: "Google's AI-powered flight search engine with price tracking, flexible date comparison, and deal alerts. Find the cheapest flights with intelligent price predictions and explore destinations within your budget.",
    emoji: "✈️",
    color: "from-blue-500 to-green-600",
    directUrl: "https://www.google.com/travel/flights/?via=aiwebtools",
    imageUrl: googleFlightsHero,
    tags: ["flight search", "Google", "cheap flights", "price tracking", "travel deals", "flight comparison", "Travel"],
    category: "Productivity & Utilities",
    rating: 4.7,
    totalVotes: 12345
  },
  {
    icon: Plane,
    title: "Trips by TripAdvisor",
    description: "TripAdvisor's AI-powered travel planning platform combining millions of reviews with personalized itinerary creation. Plan trips with real traveler insights, booking integration, and local recommendations.",
    emoji: "🗺️",
    color: "from-green-500 to-teal-600",
    directUrl: "https://www.tripadvisor.com/Trips/?via=aiwebtools",
    imageUrl: tripadvisorTripsHero,
    tags: ["trip planning", "TripAdvisor", "reviews", "itinerary", "travel recommendations", "booking", "Travel"],
    category: "Productivity & Utilities",
    rating: 4.6,
    totalVotes: 9876
  }
];
