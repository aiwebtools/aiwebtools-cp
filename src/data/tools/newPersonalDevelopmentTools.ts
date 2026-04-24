import { Tool } from "@/types/tools";
import { Heart, Zap, Target, Sun, Brain, Sparkles, Dumbbell } from "lucide-react";

import gratitudeGuideGptHero from "@/assets/tools/gratitude-guide-gpt-hero.jpg";
import passionIgniterGptHero from "@/assets/tools/passion-igniter-gpt-hero.jpg";
import habitBuilderGptHero from "@/assets/tools/habit-builder-gpt-hero.jpg";
import stoicGuideGptHero from "@/assets/tools/stoic-guide-gpt-hero.jpg";
import stressReliefCoachGptHero from "@/assets/tools/stress-relief-coach-gpt-hero.jpg";
import creativeSparkGptHero from "@/assets/tools/creative-spark-gpt-hero.jpg";
import selfEsteemBoosterGptHero from "@/assets/tools/self-esteem-booster-gpt-hero.jpg";
import manifestationMentorGptHero from "@/assets/tools/manifestation-mentor-gpt-hero.jpg";

export const newPersonalDevelopmentTools: Tool[] = [
  {
    icon: Heart,
    title: "Gratitude Guide GPT",
    description: "Transform your mindset with the Gratitude Guide GPT. This AI tool helps you cultivate gratitude through daily practices, journaling prompts, and mindfulness exercises. Develop a positive outlook, improve your mental well-being, and discover the power of appreciation in your daily life.",
    emoji: "🙏",
    color: "from-yellow-400 to-green-500",
    directUrl: "https://chatgpt.com/g/g-68af9eecd0048191a7ce93eddfd47559-gratitude-guide-gpt",
    imageUrl: gratitudeGuideGptHero,
    tags: ["gratitude", "appreciation", "positive emotions", "well-being", "perspective"],
    category: "Personal Development & Self-Discovery",
    rating: 4.4,
    totalVotes: 1200
  },
  {
    icon: Zap,
    title: "Passion Igniter GPT",
    description: "Discover and pursue your passions with the Passion Igniter GPT. This AI tool helps you identify your interests, overcome obstacles, and create actionable plans to turn your passions into reality. Find what truly excites you and take steps to make it a part of your life.",
    emoji: "🔥",
    color: "from-red-400 to-orange-500",
    directUrl: "https://chatgpt.com/g/g-68af9fd685a88191bbf7cc964509beef-passion-igniter",
    imageUrl: passionIgniterGptHero,
    tags: ["passion discovery", "life purpose", "motivation", "goal setting", "personal growth"],
    category: "Personal Development & Self-Discovery",
    rating: 4.3,
    totalVotes: 980
  },
  {
    icon: Target,
    title: "Habit Builder GPT",
    description: "Build lasting habits with the Habit Builder GPT. This AI tool provides personalized strategies, tracking systems, and motivation to help you establish positive routines and break negative patterns. Create the habits that will transform your life and achieve your goals.",
    emoji: "🎯",
    color: "from-blue-400 to-purple-500",
    directUrl: "https://chatgpt.com/g/g-68afa1c541cc8191be3360351f28eeda-habit-builder-gpt",
    imageUrl: habitBuilderGptHero,
    tags: ["habit formation", "routine building", "behavior change", "self-discipline", "consistency"],
    category: "Personal Development & Self-Discovery",
    rating: 4.5,
    totalVotes: 1500
  },
  {
    icon: Sun,
    title: "Purpose Finder GPT",
    description: "Discover your life's purpose with the Purpose Finder GPT. This AI tool guides you through self-reflection exercises, values clarification, and vision creation to help you identify what truly matters to you. Find direction, meaning, and fulfillment in your personal and professional life.",
    emoji: "🌟",
    color: "from-gold-400 to-yellow-500",
    directUrl: "https://chatgpt.com/g/g-68afa2aea7a88191ae30470b2547b176-purpose-finder-gpt",
    videoUrl: "https://youtu.be/LHaPL2oBUmY?si=R4KSEB9egcFPdsFu",
    tags: ["life purpose", "self-discovery", "values clarification", "meaning", "direction"],
    category: "Personal Development & Self-Discovery",
    rating: 4.6,
    totalVotes: 1800
  },
  {
    icon: Brain,
    title: "Stoic Guide GPT",
    description: "Embrace Stoic philosophy with the Stoic Guide GPT. This AI tool teaches you the principles of Stoicism, provides daily practices, and helps you apply ancient wisdom to modern challenges. Develop resilience, emotional control, and a sense of inner peace through Stoic teachings.",
    emoji: "🏛️",
    color: "from-gray-400 to-blue-500",
    directUrl: "https://chatgpt.com/g/g-68afa48b90c88191b2dbb03b479efdd7-stoic-guide-gpt",
    imageUrl: stoicGuideGptHero,
    tags: ["stoicism", "philosophy", "resilience", "emotional control", "wisdom"],
    category: "Personal Development & Self-Discovery",
    rating: 4.7,
    totalVotes: 2100
  },
  {
    icon: Sparkles,
    title: "STRESS RELIEF COACH GPT",
    description: "Manage stress effectively with the Stress Relief Coach GPT. This AI tool provides evidence-based techniques, coping strategies, and relaxation methods to help you reduce stress and improve your overall well-being. Learn to handle pressure and find calm in challenging situations.",
    emoji: "😌",
    color: "from-green-400 to-teal-500",
    directUrl: "https://chatgpt.com/g/g-68afa584de708191855d6b9dc660e169-stress-relief-coach",
    imageUrl: stressReliefCoachGptHero,
    tags: ["stress management", "relaxation", "coping strategies", "well-being", "mental health"],
    category: "Personal Development & Self-Discovery",
    rating: 4.4,
    totalVotes: 1350
  },
  {
    icon: Sparkles,
    title: "CREATIVE SPARK GPT",
    description: "Ignite your creativity with the Creative Spark GPT. This AI tool helps you overcome creative blocks, generate innovative ideas, and develop your artistic abilities. Whether you're an artist, writer, or entrepreneur, unlock your creative potential and bring your ideas to life.",
    emoji: "💡",
    color: "from-purple-400 to-pink-500",
    directUrl: "https://chatgpt.com/g/g-68afa6ce4ae88191ae0166741c7b760f-creative-spark-gpt",
    imageUrl: creativeSparkGptHero,
    tags: ["creativity", "innovation", "artistic development", "idea generation", "creative blocks"],
    category: "Personal Development & Self-Discovery",
    rating: 4.5,
    totalVotes: 1650
  },
  {
    icon: Heart,
    title: "Self Esteem Booster GPT",
    description: "Build confidence and self-worth with the Self Esteem Booster GPT. This AI tool provides personalized exercises, affirmations, and strategies to help you develop a positive self-image and overcome self-doubt. Boost your confidence and embrace your true potential.",
    emoji: "💪",
    color: "from-pink-400 to-red-500",
    directUrl: "https://chatgpt.com/g/g-68afa7de4eb481919e890a26b4655b49-self-esteem-booster",
    imageUrl: selfEsteemBoosterGptHero,
    tags: ["self-esteem", "confidence", "self-worth", "positive self-image", "personal empowerment"],
    category: "Personal Development & Self-Discovery",
    rating: 4.3,
    totalVotes: 1100
  },
  {
    icon: Sparkles,
    title: "Manifestation Mentor GPT",
    description: "Manifest your dreams with the Manifestation Mentor GPT. This AI tool combines mindfulness, visualization, and goal-setting techniques to help you attract positive outcomes and achieve your desires. Learn the principles of manifestation and turn your aspirations into reality.",
    emoji: "✨",
    color: "from-purple-400 to-blue-500",
    directUrl: "https://chatgpt.com/g/g-68afa9073e0081919c1ef87d9fdcf00d-yogi-manifestation-mentor",
    imageUrl: manifestationMentorGptHero,
    tags: ["manifestation", "visualization", "law of attraction", "goal achievement", "mindfulness"],
    category: "Personal Development & Self-Discovery",
    rating: 4.2,
    totalVotes: 950
  },
  {
    icon: Dumbbell,
    title: "FITNESS COACH GPT",
    description: "Achieve your fitness goals with the Fitness Coach GPT. This AI personal trainer provides customized workout plans, nutrition guidance, and motivation to help you get in shape and maintain a healthy lifestyle. Whether you're a beginner or advanced athlete, get the support you need to succeed.",
    emoji: "💪",
    color: "from-orange-400 to-red-500",
    directUrl: "https://chatgpt.com/g/g-68afaae3f8e881918d8b84b7ca85a413-fitness-coach/",
    videoUrl: "https://www.youtube.com/watch?v=eHInYKxyKm4",
    tags: ["fitness", "personal training", "workout plans", "nutrition", "health", "exercise", "fitness coach"],
    category: "Personal Development & Self-Discovery",
    rating: 4.6,
    totalVotes: 2200
  }
];
