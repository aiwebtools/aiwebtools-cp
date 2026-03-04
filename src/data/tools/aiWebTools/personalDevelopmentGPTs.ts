
import { Tool } from "@/types/tools";
import { 
  Heart,
  Brain,
  Sparkles,
  Target,
  Lightbulb,
  BookOpen,
  Users,
  Star,
  Compass,
  Shield,
  Zap,
  Crown,
  Gem,
  Flame,
  Sun,
  Moon,
  Eye,
  Key,
  Diamond,
  Infinity,
  Feather,
  Flower,
  Bird,
  MessageCircle
} from "lucide-react";

import clarityCoachHero from "@/assets/tools/clarity-coach-hero.jpg";
import stoicGuideHero from "@/assets/tools/stoic-guide-hero.jpg";
import manifestationMentorHero from "@/assets/tools/manifestation-mentor-hero.jpg";
import goalSetterHero from "@/assets/tools/goal-setter-hero.jpg";
import creativeSparkHero from "@/assets/tools/creative-spark-hero.jpg";
import personalLifeCoachHero from "@/assets/tools/personal-life-coach-hero.jpg";
import relationshipAdvisorHero from "@/assets/tools/relationship-advisor-hero.jpg";
import selfEsteemBoosterHero from "@/assets/tools/self-esteem-booster-hero.jpg";
import purposeFinderHero from "@/assets/tools/purpose-finder-hero.jpg";
import stressReliefCoachHero from "@/assets/tools/stress-relief-coach-hero.jpg";
import habitBuilderHero from "@/assets/tools/habit-builder-hero.jpg";
import leadershipMentorHero from "@/assets/tools/leadership-mentor-hero.jpg";
import passionIgniterHero from "@/assets/tools/passion-igniter-hero.jpg";
import gratitudeGuideHero from "@/assets/tools/gratitude-guide-hero.jpg";
import mindfulnessMentorHero from "@/assets/tools/mindfulness-mentor-hero.jpg";
import honestAdviceHero from "@/assets/tools/honest-advice-gpt-hero.jpg";
import birdwatchingHero from "@/assets/tools/birdwatching-gpt-hero.jpg";

export const personalDevelopmentGPTs: Tool[] = [
  {
    icon: Eye,
    title: "Name Insight Research & Predictor GPT",
    description: "Your name holds hidden meanings, shaping your personality, strengths, and destiny through history, numerology, and culture. Dive deep into its origins, global significance, and psychological impact with AI-driven insights. Discover what your name says about YOU today!",
    emoji: "🔮",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://whatsmynamegpt.lovable.app/?via=aiwebtools",
    imageUrl: "/src/assets/tools/name-insight-predictor-hero.png",
    tags: ["name analysis", "personality insights", "numerology", "cultural significance", "personal discovery", "name meaning", "identity", "name research", "name predictor", "name insight", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 4.7,
    totalVotes: 2890
  },
  {
    icon: MessageCircle,
    title: "Honest Advice GPT",
    description: "Get straightforward, honest advice without sugar-coating. This AI provides direct, practical guidance on personal matters, relationships, career decisions, and life challenges. Perfect for those who want clear, unfiltered perspectives to help them make better choices.",
    emoji: "💬",
    color: "from-blue-500 to-teal-500",
    directUrl: "https://chat.openai.com/g/g-8YSiwFFr8",
    videoUrl: "https://youtu.be/OPDgnBkgCOc",
    imageUrl: honestAdviceHero,
    tags: ["honest advice", "personal guidance", "life coaching", "relationship advice", "career guidance", "decision making", "straightforward", "practical advice", "personal development", "life decisions", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 4.8,
    totalVotes: 2100
  },
  {
    icon: Bird,
    title: "BirdWatching GPT",
    description: "Your ultimate AI companion for bird watching and ornithology. Identify bird species, learn about their behaviors, discover the best birding locations, and track your sightings. Perfect for beginners and experienced birders alike who want to enhance their bird watching experience.",
    emoji: "🐦",
    color: "from-green-500 to-blue-500",
    directUrl: "https://chat.openai.com/g/g-hI9vzWGHx",
    videoUrl: "https://youtu.be/pqjJc5WsyHA",
    imageUrl: birdwatchingHero,
    tags: ["bird watching", "ornithology", "bird identification", "nature", "wildlife", "birding", "bird species", "nature observation", "outdoor activities", "hobby", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 4.6,
    totalVotes: 1850
  },
  {
    icon: Heart,
    title: "Clarity Coach GPT",
    description: "Achieve clarity in your life with the Clarity Coach GPT. This AI tool helps you gain insights, set goals, and make decisions that align with your true self. Perfect for anyone seeking direction and purpose.",
    emoji: "🌟",
    color: "from-yellow-400 to-orange-500",
    directUrl: "https://chat.openai.com/g/g-j8J2j3g6L-clarity-coach",
    imageUrl: clarityCoachHero,
    tags: ["clarity", "personal growth", "goal setting", "decision making", "self-discovery", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 4.8,
    totalVotes: 3200
  },
  {
    icon: Brain,
    title: "Stoic Guide GPT",
    description: "Navigate life's challenges with the wisdom of Stoicism. The Stoic Guide GPT offers insights and exercises to help you cultivate resilience, manage emotions, and live a virtuous life. Embrace the teachings of Seneca, Epictetus, and Marcus Aurelius.",
    emoji: "🏛️",
    color: "from-gray-600 to-gray-700",
    directUrl: "https://chat.openai.com/g/g-68afa48b90c88191b2dbb03b479efdd7-stoic-guide-gpt",
    imageUrl: stoicGuideHero,
    tags: ["stoicism", "philosophy", "resilience", "emotional management", "virtue", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 4.7,
    totalVotes: 2900
  },
  {
    icon: Sparkles,
    title: "Manifestation Mentor GPT",
    description: "Unlock your potential and manifest your dreams with the Manifestation Mentor GPT. This AI tool provides guidance and techniques to help you visualize your goals, affirm your desires, and attract positive outcomes into your life.",
    emoji: "✨",
    color: "from-pink-400 to-purple-500",
    directUrl: "https://chat.openai.com/g/g-68afa9073e0081919c1ef87d9fdcf00d-yogi-manifestation-mentor",
    imageUrl: manifestationMentorHero,
    tags: ["manifestation", "law of attraction", "visualization", "affirmations", "positive thinking", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 4.6,
    totalVotes: 2700
  },
  {
    icon: Target,
    title: "Goal Setter GPT",
    description: "Achieve your ambitions with the Goal Setter GPT. This AI tool helps you define clear, actionable goals, create effective plans, and stay motivated on your journey to success. Set your sights high and make your dreams a reality.",
    emoji: "🎯",
    color: "from-green-400 to-blue-500",
    directUrl: "https://chat.openai.com/g/g-yYq97Gt93-goal-setter",
    imageUrl: goalSetterHero,
    tags: ["goal setting", "planning", "motivation", "success", "achievement", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 4.5,
    totalVotes: 2500
  },
  {
    icon: Lightbulb,
    title: "Creative Spark GPT",
    description: "Ignite your creativity with the Creative Spark GPT. This AI tool provides prompts, exercises, and inspiration to help you overcome creative blocks, explore new ideas, and express your unique vision. Unleash your inner artist and bring your imagination to life.",
    emoji: "💡",
    color: "from-orange-400 to-yellow-500",
    directUrl: "https://chat.openai.com/g/g-68afa6ce4ae88191ae0166741c7b760f-creative-spark-gpt",
    imageUrl: creativeSparkHero,
    tags: ["creativity", "inspiration", "art", "imagination", "expression", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 4.4,
    totalVotes: 2300
  },
  {
    icon: BookOpen,
    title: "Personal Life Coach GPT",
    description: "Transform your life with the Personal Life Coach GPT. This AI tool offers personalized guidance, support, and strategies to help you overcome challenges, build confidence, and create a fulfilling life. Take control of your destiny and live your best life.",
    emoji: "📖",
    color: "from-blue-400 to-purple-500",
    directUrl: "https://chatgpt.com/g/g-683f4621e2308191a5e9c023254acaad-personal-life-coach-gpt",
    imageUrl: personalLifeCoachHero,
    tags: ["life coaching", "personal transformation", "confidence", "fulfillment", "guidance", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 4.3,
    totalVotes: 2100
  },
  {
    icon: Users,
    title: "Relationship Advisor GPT",
    description: "Navigate the complexities of relationships with the Relationship Advisor GPT. This AI tool provides insights, advice, and communication strategies to help you build stronger, healthier connections with your loved ones. Improve your relationships and foster deeper intimacy.",
    emoji: "🫂",
    color: "from-pink-400 to-red-500",
    directUrl: "https://chat.openai.com/g/g-H4C9V8z8P-relationship-advisor",
    imageUrl: relationshipAdvisorHero,
    tags: ["relationships", "communication", "advice", "intimacy", "love", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 4.2,
    totalVotes: 1900
  },
  {
    icon: Star,
    title: "Self-Esteem Booster GPT",
    description: "Boost your self-esteem with the Self-Esteem Booster GPT. This AI tool offers affirmations, exercises, and positive feedback to help you build confidence, overcome self-doubt, and embrace your unique worth. Believe in yourself and shine brightly.",
    emoji: "⭐",
    color: "from-yellow-400 to-green-500",
    directUrl: "https://chat.openai.com/g/g-68afa7de4eb481919e890a26b4655b49-self-esteem-booster",
    videoUrl: "https://youtu.be/X5TlIueFcko",
    imageUrl: selfEsteemBoosterHero,
    tags: ["self-esteem", "confidence", "affirmations", "positive feedback", "self-worth", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 4.1,
    totalVotes: 1700
  },
  {
    icon: Compass,
    title: "Purpose Finder GPT",
    description: "Discover your true purpose with the Purpose Finder GPT. This AI tool helps you explore your values, passions, and talents to identify a meaningful direction for your life. Find your calling and make a difference in the world.",
    emoji: "🧭",
    color: "from-blue-400 to-orange-500",
    directUrl: "https://chat.openai.com/g/g-68afa2aea7a88191ae30470b2547b176-purpose-finder-gpt",
    videoUrl: "https://youtu.be/LHaPL2oBUmY?si=R4KSEB9egcFPdsFu",
    imageUrl: purposeFinderHero,
    tags: ["purpose", "values", "passions", "talents", "meaning", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 4.0,
    totalVotes: 1500
  },
  {
    icon: Shield,
    title: "Stress Relief Coach GPT",
    description: "Manage stress and anxiety with the Stress Relief Coach GPT. This AI tool provides relaxation techniques, mindfulness exercises, and coping strategies to help you stay calm, focused, and resilient in the face of challenges. Find inner peace and thrive under pressure.",
    emoji: "🛡️",
    color: "from-green-400 to-gray-500",
    directUrl: "https://chat.openai.com/g/g-68afa584de708191855d6b9dc660e169-stress-relief-coach",
    imageUrl: stressReliefCoachHero,
    tags: ["stress relief", "anxiety management", "relaxation", "mindfulness", "coping strategies", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 3.9,
    totalVotes: 1300
  },
  {
    icon: Zap,
    title: "Habit Builder GPT",
    description: "Build positive habits with the Habit Builder GPT. This AI tool helps you set realistic goals, track your progress, and stay motivated as you create lasting changes in your life. Transform your routines and achieve your full potential.",
    emoji: "⚡",
    color: "from-yellow-400 to-blue-500",
    directUrl: "https://chat.openai.com/g/g-68afa1c541cc8191be3360351f28eeda-habit-builder-gpt",
    videoUrl: "https://youtu.be/PbSdEDZhQgk",
    imageUrl: habitBuilderHero,
    tags: ["habit building", "goal setting", "motivation", "progress tracking", "routines", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 3.8,
    totalVotes: 1100
  },
  {
    icon: Crown,
    title: "Leadership Mentor GPT",
    description: "Develop your leadership skills with the Leadership Mentor GPT. This AI tool provides guidance, insights, and strategies to help you inspire, motivate, and empower others. Become a confident and effective leader in your personal and professional life.",
    emoji: "👑",
    color: "from-purple-400 to-green-500",
    directUrl: "https://chatgpt.com/g/g-68aed1eb015c8191bc8e2887bd4786b9-leadership-mentor-gpt",
    imageUrl: leadershipMentorHero,
    tags: ["leadership", "mentoring", "inspiration", "motivation", "empowerment", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 3.7,
    totalVotes: 900
  },
  {
    icon: Flame,
    title: "Passion Igniter GPT",
    description: "Ignite your passions with the Passion Igniter GPT. This AI tool helps you explore your interests, identify your strengths, and discover activities that bring you joy and fulfillment. Rekindle your zest for life and pursue your dreams with enthusiasm.",
    emoji: "🔥",
    color: "from-red-400 to-orange-500",
    directUrl: "https://chat.openai.com/g/g-68af9fd685a88191bbf7cc964509beef-passion-igniter",
    imageUrl: passionIgniterHero,
    tags: ["passion", "interests", "strengths", "joy", "fulfillment", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 3.5,
    totalVotes: 500
  },
  {
    icon: Sun,
    title: "Gratitude Guide GPT",
    description: "Cultivate gratitude with the Gratitude Guide GPT. This AI tool provides prompts, exercises, and reflections to help you appreciate the good things in your life, foster positive emotions, and improve your overall well-being. Embrace gratitude and transform your perspective.",
    emoji: "☀️",
    color: "from-yellow-400 to-green-500",
    directUrl: "https://chat.openai.com/g/g-68af9eecd0048191a7ce93eddfd47559-gratitude-guide-gpt",
    imageUrl: gratitudeGuideHero,
    tags: ["gratitude", "appreciation", "positive emotions", "well-being", "perspective", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 3.4,
    totalVotes: 300
  },
  {
    icon: Moon,
    title: "Mindfulness Mentor GPT",
    description: "Practice mindfulness with the Mindfulness Mentor GPT. This AI tool provides guided meditations, breathing exercises, and mindfulness techniques to help you stay present, reduce stress, and cultivate inner peace. Find calm in the midst of chaos and live in the moment.",
    emoji: "🌙",
    color: "from-blue-400 to-gray-500",
    directUrl: "https://chat.openai.com/g/g-68af9dc3d0688191830cd5a3d71e39df-mindfulness-mentor-gpt",
    imageUrl: mindfulnessMentorHero,
    tags: ["mindfulness", "meditation", "breathing exercises", "stress reduction", "inner peace", "Custom GPT"],
    category: "Personal Development & Self-Discovery",
    rating: 3.3,
    totalVotes: 100
  }
];
