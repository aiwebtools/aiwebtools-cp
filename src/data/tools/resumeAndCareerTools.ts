
import { FileText, Briefcase, User, Target, TrendingUp, Award } from "lucide-react";
import { Tool } from "@/types/tools";

import aiResumeBuilderHero from "@/assets/tools/ai-resume-builder-hero.jpg";
import finalRoundAiHero from "@/assets/tools/final-round-ai-hero.jpg";
import distrokidHero from "@/assets/tools/distrokid-hero.jpg";

export const resumeAndCareerTools: Tool[] = [
  {
    icon: FileText,
    title: "AiResumeBuilder",
    description: "Creates professional resumes with the power of AI. Generate ATS-friendly resumes that stand out to employers and pass through applicant tracking systems effectively.",
    emoji: "📄",
    color: "from-blue-400 to-purple-500",
    directUrl: "https://airesumebuilder.me/",
    imageUrl: aiResumeBuilderHero,
    tags: ["resume creation", "ATS-friendly", "AI generation", "professional", "job search", "resume builder", "resume maker", "cv generator", "resume writer", "job resume"],
    category: "Career & Professional Tools",
    rating: 4.5,
    totalVotes: 2890
  },
  {
    icon: Briefcase,
    title: "Final Round AI",
    description: "Innovative interview preparation platform with real-time coaching, mock interviews, AI-powered resume builder, and Chrome extension for enhanced interview performance across industries.",
    emoji: "🎯",
    color: "from-green-400 to-teal-500",
    directUrl: "https://www.finalroundai.com",
    imageUrl: finalRoundAiHero,
    tags: ["interview preparation", "mock interviews", "real-time coaching", "resume builder", "career coaching", "resume maker", "cv generator", "resume writer", "job resume"],
    category: "Career & Professional Tools",
    rating: 4.7,
    totalVotes: 3200
  },
  {
    icon: TrendingUp,
    title: "DistroKid",
    description: "Digital music distribution service enabling artists to upload music to major streaming platforms while retaining 100% earnings. Features promotional tools and website hosting for musicians.",
    emoji: "🎵",
    color: "from-purple-400 to-pink-500",
    directUrl: "https://distrokid.com",
    imageUrl: distrokidHero,
    tags: ["music distribution", "streaming platforms", "artist tools", "monetization", "promotional"],
    category: "Creative & Music Tools",
    rating: 4.6,
    totalVotes: 2450
  }
];
