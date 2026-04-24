import { Tool } from "@/types/tools";
import { 
  Brain, 
  Heart, 
  Sparkles,
  Stethoscope,
  Dna,
  Salad,
  Activity,
  Eye,
  Scan,
  FlaskConical,
  Baby,
  Users,
  Zap,
  Shield,
  Pill,
  Dumbbell,
  FileText,
  TreeDeciduous
} from "lucide-react";

import antibioticsOzioHero from "@/assets/tools/antibiotics-ozio-hero.jpg";

export const healthcareAITools2025Batch2: Tool[] = [
  // MENTAL HEALTH & ADDICTION RECOVERY
  {
    icon: Brain,
    title: "QuitPorn AI",
    description: "AI-powered addiction recovery assistant providing personalized counseling, expert recovery guides, and tracking tools to help overcome porn addiction. Get impulse management strategies and 24/7 support on your journey to freedom.",
    emoji: "🦅",
    color: "from-blue-500 to-gold-500",
    directUrl: "https://quitporn.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/quitporn-ai-hero.png",
    tags: ["addiction recovery", "mental health", "AI counseling", "impulse control", "wellness", "support", "recovery", "health information help"],
    category: "AI Mental Health & Wellness",
    rating: 4.6,
    totalVotes: 3421
  },
  {
    icon: Heart,
    title: "Healing Journey AI",
    description: "24/7 AI therapist offering non-judgmental psychological support with over 1 billion insights. All conversations are end-to-end encrypted for complete privacy. Get emotional guidance whenever you need it.",
    emoji: "💚",
    color: "from-purple-500 to-pink-400",
    directUrl: "https://healingjourney.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/healing-journey-ai-hero.png",
    tags: ["AI therapist", "mental health", "emotional support", "psychology", "24/7 therapy", "encrypted", "counseling", "health information help"],
    category: "AI Mental Health & Wellness",
    rating: 4.8,
    totalVotes: 5432
  },

  // SKINCARE & BEAUTY AI
  {
    icon: Sparkles,
    title: "Glow AI",
    description: "Your personal AI skincare assistant that takes care of your skin and generates adapted skincare programs. Get personalized product recommendations, ingredient analysis, and daily photo diaries to track your skin journey.",
    emoji: "✨",
    color: "from-pink-400 to-rose-300",
    directUrl: "https://www.glowy.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/glow-ai-hero.png",
    tags: ["skincare AI", "beauty", "skin routine", "product recommendations", "skin tracking", "glow up", "health information help"],
    category: "AI Beauty & Cosmetics",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Scan,
    title: "AweMyFace",
    description: "AI-powered skincare app with 99.1% accuracy in acne detection. Track skin changes, monitor daily routines, and receive personalized recommendations to achieve healthy, glowing skin.",
    emoji: "❄️",
    color: "from-blue-400 to-cyan-300",
    directUrl: "https://apps.apple.com/app/awemyface-skincare-app/id1558095819/?via=aiwebtools",
    imageUrl: "/src/assets/tools/awemyface-hero.png",
    tags: ["acne detection", "skincare", "AI skin analysis", "skin tracking", "beauty AI", "face care", "health information help"],
    category: "AI Beauty & Cosmetics",
    rating: 4.5,
    totalVotes: 2876
  },
  {
    icon: Eye,
    title: "Skinive",
    description: "AI dermatology skin scanner that analyzes over 50 skin conditions including cancer risks, HPV, herpes, acne, and rosacea. Get 24/7 online skin checks and professional-level skin health assessments.",
    emoji: "🔬",
    color: "from-orange-500 to-red-400",
    directUrl: "https://skinive.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/skinive-hero.png",
    tags: ["dermatology AI", "skin scanner", "skin disease detection", "cancer screening", "acne", "skin health", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.7,
    totalVotes: 5678
  },

  // MEDICAL IMAGING & RADIOLOGY
  {
    icon: Scan,
    title: "Quibim",
    description: "Pioneering AI-enabled imaging biomarkers platform that analyzes millions of medical images with unrivaled accuracy. Improve patient outcomes with cutting-edge clinical tools for precision medicine.",
    emoji: "🧠",
    color: "from-red-500 to-blue-600",
    directUrl: "https://quibim.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/quibim-hero.png",
    tags: ["medical imaging", "biomarkers", "radiology AI", "MRI analysis", "precision medicine", "diagnostics", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.8,
    totalVotes: 3245
  },
  {
    icon: Activity,
    title: "X-ray Interpreter",
    description: "AI-powered radiology interpretation tool for quick assessment of various radiographs. Get instant X-ray analysis to better understand medical images before professional consultations.",
    emoji: "📷",
    color: "from-blue-600 to-teal-500",
    directUrl: "https://xrayinterpreter.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/xray-interpreter-hero.png",
    tags: ["X-ray analysis", "radiology AI", "medical imaging", "radiograph", "chest X-ray", "diagnostics", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.6,
    totalVotes: 4532
  },
  {
    icon: Scan,
    title: "New Lantern",
    description: "AI-native radiology platform featuring Curie, your AI radiology resident. Cloud-native PACS viewer with smart worklist distribution, AI-powered reporting, and lightning-fast medical image analysis.",
    emoji: "🏮",
    color: "from-orange-500 to-red-500",
    directUrl: "https://newlantern.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/new-lantern-hero.png",
    tags: ["radiology AI", "PACS viewer", "medical imaging", "AI reporter", "smart worklist", "cloud radiology", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.7,
    totalVotes: 2987
  },
  {
    icon: Eye,
    title: "Lunit AI",
    description: "FDA-cleared AI for cancer detection with 97-99% accuracy. Advanced radiology AI for chest X-rays, mammography, and comprehensive cancer screening used by thousands of hospitals globally.",
    emoji: "🎯",
    color: "from-blue-700 to-indigo-600",
    directUrl: "https://www.lunit.io/?via=aiwebtools",
    imageUrl: "/src/assets/tools/lunit-ai-hero.png",
    tags: ["cancer detection", "radiology AI", "mammography", "chest X-ray", "FDA cleared", "oncology", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.9,
    totalVotes: 6789
  },

  // MEDICAL EDUCATION & TRAINING
  {
    icon: Stethoscope,
    title: "Neural Consult",
    description: "All-in-one AI medical learning platform that transforms lectures and articles into personalized journeys. Features AI medical search, Anki-style flashcards, board questions, and live patient simulations.",
    emoji: "📚",
    color: "from-green-500 to-teal-500",
    directUrl: "https://www.neuralconsult.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/neural-consult-hero.png",
    tags: ["medical education", "AI learning", "flashcards", "Anki", "clinical simulations", "medical students", "board prep", "health information help"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 4321
  },

  // HEALTHCARE PLATFORMS
  {
    icon: Users,
    title: "Hippocratic AI",
    description: "Safety-focused generative AI platform for healthcare with 300+ specialized AI agents across 25 medical specialties. Trusted by leading healthcare organizations for patient care innovation.",
    emoji: "⚕️",
    color: "from-blue-500 to-cyan-400",
    directUrl: "https://www.hippocraticai.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/hippocratic-ai-hero.png",
    tags: ["healthcare AI", "medical agents", "patient care", "AI platform", "medical specialties", "healthcare automation", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Stethoscope,
    title: "Docus AI",
    description: "All-in-one AI-powered health platform for patients, doctors, and labs. Access symptom checking, health insights, and medical expert advice with trusted AI tools for evidence-based healthcare.",
    emoji: "🩺",
    color: "from-orange-500 to-blue-500",
    directUrl: "https://docus.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/docus-ai-hero.png",
    tags: ["health platform", "symptom checker", "medical AI", "health insights", "doctor consultation", "labs", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.7,
    totalVotes: 4876
  },
  {
    icon: Stethoscope,
    title: "Medical Chat",
    description: "Intelligent AI chatbot designed to help healthcare professionals get accurate answers to complex medical questions. Access reliable medical information for clinical decision support.",
    emoji: "💬",
    color: "from-blue-500 to-blue-600",
    directUrl: "https://chatgpt.com/g/g-PFQijmS57-medical-ai/",
    imageUrl: "/src/assets/tools/medical-chat-hero.png",
    tags: ["medical chatbot", "healthcare AI", "clinical support", "medical Q&A", "doctor assistant", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Stethoscope,
    title: "Leny AI",
    description: "AI medical assistant with great capabilities in symptom analysis, differential diagnosis, treatment plans, and more. Designed for medical professionals to streamline healthcare tasks.",
    emoji: "🌍",
    color: "from-teal-500 to-green-500",
    directUrl: "https://leny.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/leny-ai-hero.png",
    tags: ["medical assistant", "symptom analysis", "differential diagnosis", "treatment plans", "healthcare AI", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.6,
    totalVotes: 3654
  },

  // SYMPTOM CHECKERS
  {
    icon: Heart,
    title: "Ubie",
    description: "AI healthcare assistant that quickly analyzes your symptoms and tries to identify potential causes. Get accurate health insights with an easy-to-use symptom checker trusted by millions.",
    emoji: "💗",
    color: "from-red-400 to-pink-400",
    directUrl: "https://ubiehealth.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/ubie-hero.png",
    tags: ["symptom checker", "health AI", "symptom analysis", "disease identification", "healthcare", "diagnosis", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.7,
    totalVotes: 7654
  },
  {
    icon: Brain,
    title: "SymptomChecker IO",
    description: "AI-powered medical symptom checker that helps you understand health concerns. Describe symptoms in your own words and get potential diagnosis suggestions backed by clinical expertise.",
    emoji: "🔍",
    color: "from-blue-600 to-purple-500",
    directUrl: "https://symptomchecker.io/?via=aiwebtools",
    imageUrl: "/src/assets/tools/symptomchecker-io-hero.png",
    tags: ["symptom checker", "AI diagnosis", "health concerns", "medical AI", "symptom analysis", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.5,
    totalVotes: 3210
  },
  {
    icon: Heart,
    title: "Yesil Health",
    description: "Evidence-based health AI providing 24/7 symptom analysis with responses from 50+ medical specialties. Access reliable health information and personalized guidance instantly.",
    emoji: "💚",
    color: "from-green-600 to-green-400",
    directUrl: "https://yesilhealth.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/yesil-health-hero.png",
    tags: ["health AI", "symptom analysis", "medical specialties", "evidence-based", "24/7 health", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.6,
    totalVotes: 2987
  },

  // HEALTHCARE ADMINISTRATION
  {
    icon: FileText,
    title: "HealthKey",
    description: "AI-powered clinical summarization platform that transforms 100s of medical records into simple patient outlines in 90 seconds. Automate chart prep and focus on patients with confidence.",
    emoji: "🔑",
    color: "from-blue-500 to-purple-500",
    directUrl: "https://healthkeyai.cc/?via=aiwebtools",
    imageUrl: "/src/assets/tools/healthkey-hero.png",
    tags: ["medical records", "clinical summarization", "chart prep", "healthcare admin", "patient history", "EHR", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.6,
    totalVotes: 2543
  },
  {
    icon: Shield,
    title: "Crosby Health",
    description: "Clinical appeals automation platform featuring Apollo, a clinical LLM for RCM automation. Generates, submits, and tracks insurance appeals to reduce provider burden from clinical denials.",
    emoji: "✅",
    color: "from-teal-500 to-cyan-500",
    directUrl: "https://www.crosbyhealth.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/crosby-health-hero.png",
    tags: ["clinical appeals", "RCM automation", "insurance claims", "healthcare admin", "denial management", "hospital billing", "health information help"],
    category: "Healthcare & Medical AI",
    rating: 4.7,
    totalVotes: 1987
  },

  // NUTRITION & FITNESS
  {
    icon: Salad,
    title: "Heali AI",
    description: "AI mobile application offering personalized therapeutic nutritional plans adapted to your tastes and needs. Get evidence-based nutrition support for 200+ health conditions from registered dietitians.",
    emoji: "🥗",
    color: "from-green-500 to-lime-400",
    directUrl: "https://www.heali.com/?via=aiwebtools",
    imageUrl: "/src/assets/tools/heali-ai-hero.png",
    tags: ["nutrition AI", "therapeutic diet", "meal plans", "dietitian", "personalized nutrition", "health conditions", "health information help"],
    category: "AI Health & Fitness",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Dumbbell,
    title: "Olyup",
    description: "AI-powered fitness coach that optimizes your athletic potential with real-time analysis and advice. Track fitness, skill, recovery, mental wellness, and nutrition across five key performance topics.",
    emoji: "🏃",
    color: "from-blue-700 to-blue-500",
    directUrl: "https://www.olyup.tech/?via=aiwebtools",
    imageUrl: "/src/assets/tools/olyup-hero.png",
    tags: ["fitness AI", "athletic coach", "performance tracking", "sports AI", "workout optimization", "recovery", "health information help"],
    category: "AI Health & Fitness",
    rating: 4.7,
    totalVotes: 2876
  },
  {
    icon: Heart,
    title: "Hoku",
    description: "Personalized AI health coach providing customized health coaching with meal and exercise plans. Achieve your wellness goals with AI-powered guidance tailored to your lifestyle.",
    emoji: "💖",
    color: "from-pink-400 to-coral-400",
    directUrl: "https://hoku.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/hoku-hero.png",
    tags: ["health coaching", "AI coach", "meal plans", "exercise", "wellness", "personalized health", "health information help"],
    category: "AI Health & Fitness",
    rating: 4.5,
    totalVotes: 2345
  },

  // MATERNAL HEALTH
  {
    icon: Baby,
    title: "Ask Poppy",
    description: "AI chatbot providing personalized support for everyday life and pregnancy. Get expert guidance on motherhood, baby care, and all your pregnancy questions from a caring AI assistant.",
    emoji: "🌸",
    color: "from-pink-300 to-coral-300",
    directUrl: "https://www.poppylist.com/askpoppy/?via=aiwebtools",
    imageUrl: "/src/assets/tools/ask-poppy-hero.png",
    tags: ["pregnancy AI", "motherhood", "baby care", "maternal health", "parenting", "new mom support", "health information help"],
    category: "AI Mental Health & Wellness",
    rating: 4.6,
    totalVotes: 3123
  },

  // BIOTECH & PHARMACEUTICAL
  {
    icon: Dna,
    title: "Cradle",
    description: "AI-powered protein engineering platform for biologists. Design improved protein variants quickly and efficiently with machine learning tools serving top pharma leaders.",
    emoji: "🧬",
    color: "from-teal-600 to-blue-600",
    directUrl: "https://www.cradle.bio/?via=aiwebtools",
    imageUrl: "/src/assets/tools/cradle-hero.png",
    tags: ["protein engineering", "biotech AI", "drug development", "pharmaceutical", "machine learning", "biologists", "health information help"],
    category: "Research & Academic",
    rating: 4.8,
    totalVotes: 2134
  },
  {
    icon: FlaskConical,
    title: "Lavo AI",
    description: "AI-accelerated drug development platform providing crystal structure prediction and computational chemistry tools. Accelerate pharmaceutical research with innovative AI solutions.",
    emoji: "⚗️",
    color: "from-purple-600 to-blue-600",
    directUrl: "https://lavo.ai/?via=aiwebtools",
    imageUrl: "/src/assets/tools/lavo-ai-hero.png",
    tags: ["drug development", "pharmaceutical AI", "crystal structure", "computational chemistry", "biotech", "drug discovery", "health information help"],
    category: "Research & Academic",
    rating: 4.7,
    totalVotes: 1876
  },

  // ANTIBIOTICS ACCESS RESOURCE
  {
    icon: Pill,
    title: "Antibiotics Without A Prescription",
    description: "Ozio provides accessible over-the-counter antibiotics for individuals who may not have health insurance or immediate access to a doctor. The maker of AIWebTools.ai believes everyone should have access to essential antibiotics regardless of insurance status — this is a vital preparedness and wellness resource. Tested and verified by the AIWebTools.ai team. Use promo code PREPPER for 10% off your order. Disclaimer: This resource is for informational purposes. Always consult a qualified healthcare professional before taking any medication.",
    emoji: "💊",
    color: "from-blue-500 to-teal-600",
    directUrl: "https://ozio.com",
    imageUrl: antibioticsOzioHero,
    tags: ["antibiotics", "prescription-free", "healthcare access", "preparedness", "wellness", "medication", "pharmacy", "over-the-counter", "health resource", "no insurance", "emergency preparedness", "prepper", "health information help"],
    category: "Health, Wellness & Personal Lifestyle",
    rating: 4.7,
    totalVotes: 1245
  }
];
