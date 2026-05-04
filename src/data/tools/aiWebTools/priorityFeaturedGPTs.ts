import { Tool } from "@/types/tools";
import { Crown, Heart, GraduationCap, Music, Stars, Flower2 } from "lucide-react";
import bobMarleyGptImage from "@/assets/tools/bob-marley-gpt.png";
import talkToTheStarsGptHero from "@/assets/talk-to-the-stars-gpt-hero.jpg";
import transcendanceGptHero from "@/assets/transcendance-gpt-hero.jpg";

export const priorityFeaturedGPTs: Tool[] = [
  {
    icon: Music,
    title: "Bob Marley GPT",
    description: "The living continuation of Bob Marley's message—truth, unity, and liberation in living voice. Ask Bob for advice on life, love, spirituality, and finding inner peace. Experience the wisdom of reggae's greatest legend through AI. Jah yes!",
    emoji: "🎶",
    color: "from-green-500 to-yellow-500",
    imageUrl: bobMarleyGptImage,
    directUrl: "https://chatgpt.com/g/g-69470ce966d08191aca9b8d80db20859-bob-marley-gpt",
    tags: ["bob marley", "reggae", "wisdom", "spirituality", "advice", "music legend", "rastafari", "peace", "unity", "custom gpt"],
    category: "Creative & Entertainment",
    rating: 4.9,
    totalVotes: 4200
  },
  {
    icon: Crown,
    title: "GODMODE.SPACE",
    description: "Imagine having an AI companion so powerful and versatile that it seamlessly transforms to meet every need you have—introducing GodMode from godmode.space. This revolutionary AI assistant adapts to any task, providing unmatched capabilities across all domains of knowledge and productivity.",
    emoji: "👑",
    color: "from-yellow-400 to-red-500",
    directUrl: "https://godmode.space",
    videoUrl: "https://youtu.be/m2crGAhbs5g?si=0U5gA4QC_oQG0KXS",
    tags: ["versatile ai", "all-purpose", "productivity", "godmode", "ultimate assistant"],
    category: "AI Assistants & Search",
    rating: 4.9,
    totalVotes: 6500
  },
  {
    icon: Heart,
    title: "💪 AI Wellness Coach",
    description: "AI-driven wellness coach that provides personalized fitness plans, nutrition advice, and mental health support.",
    emoji: "❤️",
    color: "from-red-500 to-pink-600",
    directUrl: "https://chatgpt.com/g/g-68ae1e75dd988191b4629abab71e625f-wellness-warrior-ai-coach-mentor-gpt",
    imageUrl: "/src/assets/tools/ai-wellness-coach-hero.png",
    tags: ["wellness coach", "fitness plans", "nutrition advice", "mental health", "Custom GPT"],
    category: "AI Assistants & Search",
    rating: 4.4,
    totalVotes: 3123
  },
  {
    icon: GraduationCap,
    title: "🎓 AI Education Platform",
    description: "AI-powered education platform that offers personalized learning experiences and educational resources.",
    emoji: "🎓",
    color: "from-blue-500 to-green-600",
    directUrl: "https://college-degree-gpt.lovable.app/?via=aiwebtools",
    imageUrl: "/src/assets/tools/ai-education-platform-hero.png",
    tags: ["education platform", "personalized learning", "educational resources", "Custom GPT"],
    category: "AI Assistants & Search",
    rating: 4.6,
    totalVotes: 3345
  },
  {
    icon: Stars,
    title: "Talk to the Stars GPT",
    description: "Simulate believable alien communications using structured sci-fi lore. Talk to the Stars GPT by AiWebTools.Ai opens an immersive cosmic dialogue — chat with extraterrestrial civilizations, decode interstellar signals, and explore the mysteries of the universe through grounded, science-fiction-inspired storytelling. Perfect for sci-fi writers, dreamers, and anyone curious about life beyond Earth.",
    emoji: "🌌",
    color: "from-indigo-600 to-purple-700",
    directUrl: "https://chatgpt.com/g/g-69f7d5dfe1748191876e969c5c78abf7-talk-to-the-stars-gpt",
    imageUrl: talkToTheStarsGptHero,
    tags: ["talk to the stars", "talk to the stars gpt", "alien", "aliens", "extraterrestrial", "et", "ufo", "cosmic", "space", "sci-fi", "science fiction", "interstellar", "stars", "galaxy", "universe", "alien communication", "alien contact", "aiwebtools", "Custom GPT"],
    category: "Mysterious & Unusual",
    rating: 4.9,
    totalVotes: 1247,
    isFree: true
  },
  {
    icon: Flower2,
    title: "Transcendance GPT",
    description: "An AI guide for TM, aligned with Maharishi Mahesh Yogi's teachings. Transcendance GPT by AiWebTools.Ai offers compassionate guidance on Transcendental Meditation, mantra practice, consciousness expansion, and the timeless wisdom of Maharishi Mahesh Yogi. Discover stillness, inner clarity, and the boundless field of pure awareness — your transcendent companion on the path inward.",
    emoji: "🪷",
    color: "from-amber-500 to-purple-600",
    directUrl: "https://chatgpt.com/g/g-kw13QJk2F-transcendance-gpt",
    imageUrl: transcendanceGptHero,
    tags: ["transcendance", "transcendance gpt", "transcendence", "tm", "transcendental meditation", "maharishi", "maharishi mahesh yogi", "meditation", "mantra", "consciousness", "spirituality", "enlightenment", "mindfulness", "inner peace", "pure awareness", "yogi", "spiritual guide", "aiwebtools", "Custom GPT"],
    category: "Spirituality & Philosophy",
    rating: 4.9,
    totalVotes: 1389,
    isFree: true
  },
];
