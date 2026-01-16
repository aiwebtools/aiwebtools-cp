import { Tool } from "@/types/tools";
import { 
  Brain, 
  Heart, 
  Eye, 
  Baby,
  Mic,
  Sparkles,
  Apple,
  Stethoscope,
  FlaskConical,
  Users,
  Scan,
  Activity,
  Dna,
  Salad,
  Shield
} from "lucide-react";

export const healthcareAITools2025: Tool[] = [
  // MENTAL HEALTH & WELLNESS
  {
    icon: Brain,
    title: "TripleTen Burnout Test",
    description: "Free AI-powered burnout assessment tool that evaluates your workplace stress levels and detects early signs of career burnout. Take a 5-minute quiz to understand your mental health at work and get personalized recommendations.",
    emoji: "🧠",
    color: "from-blue-500 to-green-500",
    directUrl: "https://tripleten.com/tools/burnout-test/?via=aiwebtools",
    imageUrl: "/src/assets/tools/tripleten-burnout-test-hero.png",
    tags: ["mental health", "burnout assessment", "workplace wellness", "stress test", "career health", "self-assessment", "health information help"],
    category: "AI Mental Health & Wellness",
    rating: 4.7,
    totalVotes: 4621
  },
  {
    icon: Brain,
    title: "OpenSynaps AI",
    description: "AI psychologist offering hypnosis, sophrology, ASMR, and relaxation sessions. Find serenity and balance with personalized mental wellness sessions guided by AI, available 24/7 for stress relief and mental peace.",
    emoji: "🧘",
    color: "from-purple-600 to-blue-500",
    directUrl: "https://opensynaps.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/opensynaps-ai-hero.png",
    tags: ["AI psychologist", "hypnosis", "sophrology", "relaxation", "ASMR", "meditation", "mental wellness", "health information help"],
    category: "AI Mental Health & Wellness",
    rating: 4.6,
    totalVotes: 3987
  },
  {
    icon: Heart,
    title: "Freudly AI Therapist",
    description: "24/7 AI therapist powered by psychology knowledge developed by leading experts. Chat with an empathetic AI designed for mental support and psychological listening whenever you need emotional guidance.",
    emoji: "💚",
    color: "from-teal-500 to-orange-400",
    directUrl: "https://freudly.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/freudly-ai-hero.png",
    tags: ["AI therapist", "mental health", "psychology", "emotional support", "24/7 therapy", "mental wellness", "chatbot therapy", "health information help"],
    category: "AI Mental Health & Wellness",
    rating: 4.8,
    totalVotes: 5234
  },

  // HEALTHCARE & MEDICAL AI
  {
    icon: Mic,
    title: "Google MedASR",
    description: "Google's open-source medical speech recognition model trained on 105+ voice types. Easily transcribe medical dictations and exchanges between doctors and patients with specialized healthcare vocabulary understanding.",
    emoji: "🎤",
    color: "from-blue-500 via-red-500 to-green-500",
    directUrl: "https://research.google/blog/next-generation-medical-image-interpretation-with-medgemma-15-and-medical-speech-to-text-with-medasr/?via=aiwebtools",
    imageUrl: "/src/assets/tools/google-medasr-hero.png",
    tags: ["medical transcription", "speech recognition", "healthcare AI", "medical dictation", "Google AI", "voice recognition", "clinical documentation", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.8,
    totalVotes: 5721
  },
  {
    icon: Sparkles,
    title: "MedLM by Google",
    description: "Google's specialized AI models fine-tuned for the healthcare industry. MedLM provides highly capable medical question answering, clinical reasoning, and healthcare knowledge support for professionals and researchers.",
    emoji: "✨",
    color: "from-blue-600 to-purple-500",
    directUrl: "https://cloud.google.com/vertex-ai/generative-ai/docs/medlm/overview/?via=aiwebtools",
    imageUrl: "/src/assets/tools/medlm-google-hero.png",
    tags: ["healthcare AI", "medical models", "Google Cloud", "clinical AI", "medical reasoning", "healthcare LLM", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.7,
    totalVotes: 3456
  },
  {
    icon: Dna,
    title: "Tempus AI",
    description: "Precision medicine platform that dramatically improves healthcare by analyzing biomedical data using AI. Optimize personalized treatments and enable data-driven clinical decisions with advanced genomic analysis.",
    emoji: "🧬",
    color: "from-blue-600 to-orange-500",
    directUrl: "https://www.tempus.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/tempus-ai-hero.png",
    tags: ["precision medicine", "biomedical AI", "genomics", "personalized treatment", "clinical data", "oncology AI", "healthcare analytics", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.9,
    totalVotes: 4087
  },
  {
    icon: Stethoscope,
    title: "Claude Healthcare",
    description: "Anthropic's Claude AI solution dedicated to healthcare professionals. Automates prior authorizations, insurance appeal reviews, and clinical documentation tasks to streamline healthcare administration.",
    emoji: "🏥",
    color: "from-orange-500 to-amber-400",
    directUrl: "https://www.anthropic.com/news/healthcare-life-sciences/?via=aiwebtools",
    imageUrl: "/src/assets/tools/claude-healthcare-hero.png",
    tags: ["healthcare AI", "Anthropic", "Claude", "prior authorization", "insurance appeals", "clinical automation", "healthcare admin", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.7,
    totalVotes: 3654
  },
  {
    icon: Apple,
    title: "ChatGPT Health",
    description: "OpenAI's dedicated health experience in ChatGPT that securely integrates with Apple Health data. Interpret medical records, prepare for consultations, get fitness advice, and receive personalized health insights.",
    emoji: "🍎",
    color: "from-green-600 to-teal-500",
    directUrl: "https://openai.com/index/introducing-chatgpt-health/?via=aiwebtools",
    imageUrl: "/src/assets/tools/chatgpt-health-hero.png",
    tags: ["ChatGPT", "OpenAI", "health AI", "Apple Health", "medical records", "fitness advice", "health insights", "personal health", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.8,
    totalVotes: 6234
  },
  {
    icon: FlaskConical,
    title: "Medeloop",
    description: "AI-powered research platform for life sciences and healthcare. Supercharge clinical and public health research with AI agents that handle grant writing, clinical study management, and complex data analysis.",
    emoji: "🔬",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://medeloop.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/medeloop-hero.png",
    tags: ["medical research", "clinical studies", "grant writing", "healthcare AI", "research platform", "data analysis", "life sciences", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.6,
    totalVotes: 2876
  },

  // PREGNANCY & MATERNAL HEALTH
  {
    icon: Baby,
    title: "Happy Mama",
    description: "AI-powered pregnancy companion that provides instant answers to all your pregnancy and motherhood questions. Get personalized guidance throughout your pregnancy journey with supportive AI assistance.",
    emoji: "🤰",
    color: "from-pink-400 to-purple-400",
    directUrl: "https://happy-mama.vercel.app/?via=aiwebtools",
    imageUrl: "/src/assets/tools/happy-mama-hero.png",
    tags: ["pregnancy AI", "motherhood", "maternal health", "pregnancy questions", "baby care", "prenatal guidance", "health information help"],
    category: "AI Mental Health & Wellness",
    rating: 4.5,
    totalVotes: 2134
  },

  // VISION & EYE HEALTH
  {
    icon: Eye,
    title: "Eyeonic Visual Field Test",
    description: "Online visual field testing on any computer or tablet. Test your peripheral vision directly with interactive grids that assess the extent and responsiveness of your visual field for early glaucoma detection.",
    emoji: "👁️",
    color: "from-blue-600 to-cyan-500",
    directUrl: "https://eyeonic.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/eyeonic-visual-field-hero.png",
    tags: ["visual field test", "eye health", "peripheral vision", "glaucoma screening", "ophthalmology", "vision assessment", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.6,
    totalVotes: 3245
  },

  // ACCESSIBILITY
  {
    icon: Users,
    title: "Be My Eyes",
    description: "Free accessibility app connecting visually impaired people to sighted volunteers and AI for real-time visual assistance. Get help with everyday tasks through live video calls or AI-powered image recognition.",
    emoji: "👀",
    color: "from-blue-500 to-teal-400",
    directUrl: "https://www.bemyeyes.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/be-my-eyes-hero.png",
    tags: ["accessibility", "visual impairment", "blind assistance", "volunteer network", "assistive technology", "vision AI", "inclusive tech"],
    category: "Accessibility & Assistive AI",
    rating: 4.9,
    totalVotes: 8765
  },

  // BEAUTY & COSMETIC
  {
    icon: Scan,
    title: "QOVES Facial Assessment",
    description: "AI-powered facial analysis tool backed by 2000+ academic studies. Get personalized cosmetic recommendations, analyze facial symmetry, and receive science-based beauty enhancement suggestions.",
    emoji: "💄",
    color: "from-purple-500 to-pink-500",
    directUrl: "https://qoves.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/qoves-facial-hero.png",
    tags: ["facial analysis", "beauty AI", "cosmetic assessment", "facial symmetry", "skincare AI", "beauty enhancement", "glow up", "health information help"],
    category: "AI Beauty & Cosmetics",
    rating: 4.5,
    totalVotes: 4532
  },

  // NUTRITION
  {
    icon: Salad,
    title: "Sugar Free",
    description: "Intelligent food scanner AI app capable of detecting sugar levels in any food. Scan products, get personalized nutrition recommendations, and track your sugar intake for a healthier lifestyle.",
    emoji: "🥗",
    color: "from-green-500 to-lime-400",
    directUrl: "https://apps.apple.com/app/sugar-free-food-scanner-ai/id1607127197/?via=aiwebtools",
    imageUrl: "/src/assets/tools/sugar-free-hero.png",
    tags: ["nutrition AI", "food scanner", "sugar tracking", "diet app", "healthy eating", "nutrition analysis", "food health", "health information help"],
    category: "AI Health & Fitness",
    rating: 4.6,
    totalVotes: 2156
  },

  // AI COMPANION
  {
    icon: Shield,
    title: "Friend AI",
    description: "Wearable AI companion pendant designed to overcome loneliness. Interact emotionally with a discreet device that provides real-time conversational support, encouragement, and companionship without subscriptions.",
    emoji: "💜",
    color: "from-purple-500 to-blue-500",
    directUrl: "https://friend.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/friend-ai-hero.png",
    tags: ["AI companion", "wearable AI", "emotional support", "loneliness", "conversational AI", "mental wellness", "AI friend", "health information help"],
    category: "AI Companion & Social",
    rating: 4.4,
    totalVotes: 3421
  }
];
