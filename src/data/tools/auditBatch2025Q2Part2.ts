
import { Tool } from "@/types/tools";
import { 
  MessageSquare, Phone, Scissors, Lightbulb, Shield, 
  PenTool, Eye, Wand2, Users, Briefcase, Globe, 
  BarChart3, FileText, Award, Star, Target, Rocket
} from "lucide-react";

// Import hero images
import freeChatbotBuilderHero from "@/assets/tools/free-chatbot-builder-hero.png";
import echowinHero from "@/assets/tools/echowin-hero.png";
import pokecutHero from "@/assets/tools/pokecut-hero.png";
import namelixHero from "@/assets/tools/namelix-hero.png";
import undetectableAiHero from "@/assets/tools/undetectable-ai-hero.png";
import quillbotHumanizerHero from "@/assets/tools/quillbot-humanizer-hero.png";
import deepfakeDetectorHero from "@/assets/tools/deepfake-detector-hero.png";
import cleverHumanizerHero from "@/assets/tools/clever-humanizer-hero.png";
import humanizeAiToolsHero from "@/assets/tools/humanize-ai-tools-hero.png";
import aiapplyHero from "@/assets/tools/aiapply-hero.png";
import jobcopilotHero from "@/assets/tools/jobcopilot-hero.png";
import remotepeopleHero from "@/assets/tools/remotepeople-hero.png";
import workleapHero from "@/assets/tools/workleap-hero.png";
import leetResumesHero from "@/assets/tools/leet-resumes-hero.png";
import tealResumeHero from "@/assets/tools/teal-resume-hero.png";
import aiCareerCoachHero from "@/assets/tools/ai-career-coach-hero.png";
import resumeWordedHero from "@/assets/tools/resume-worded-hero.png";
import useResumeAiHero from "@/assets/tools/useresume-ai-hero.png";
import kickresumeHero from "@/assets/tools/kickresume-hero.png";
import hostingerAiHubHero from "@/assets/tools/hostinger-ai-hub-hero.png";

/**
 * AUDIT BATCH Q2 2025 PART 2 - VERIFIED MISSING TOOLS
 * Categories: E-commerce, AI Detection/Humanizer, Human Resources
 * All URLs verified and affiliate-linked
 */
export const auditBatch2025Q2Part2Tools: Tool[] = [
  // ═══════════════════════════════════════════════════════════════
  // E-COMMERCE TOOLS
  // ═══════════════════════════════════════════════════════════════
  {
    icon: MessageSquare,
    title: "Free AI Chatbot Builder",
    description: "Build and deploy AI chatbots for free with no coding required. Create customer support bots, lead generation assistants, and FAQ bots that integrate with websites and messaging platforms.",
    emoji: "💬",
    color: "from-blue-500 to-cyan-600",
    directUrl: "https://www.chatbot.com/free-chatbot-builder/?via=aiwebtools",
    imageUrl: freeChatbotBuilderHero,
    tags: ["chatbot builder", "free", "no-code", "customer support", "lead generation", "AI chatbot", "E-commerce"],
    category: "E-commerce & Marketing Tools",
    rating: 4.4,
    totalVotes: 2134,
    isFree: true
  },
  {
    icon: Phone,
    title: "Echowin AI",
    description: "AI-powered phone answering service that handles calls 24/7 with natural conversation. Perfect for businesses needing automated receptionist services with intelligent call routing and transcription.",
    emoji: "📞",
    color: "from-purple-500 to-blue-600",
    directUrl: "https://www.echowin.com/?via=aiwebtools",
    imageUrl: echowinHero,
    tags: ["AI phone", "voice agent", "call answering", "receptionist AI", "24/7 service", "call routing", "E-commerce"],
    category: "AI Voice Assistant Tools",
    rating: 4.5,
    totalVotes: 1876
  },
  {
    icon: Scissors,
    title: "Pokecut",
    description: "AI-powered background remover and image editing tool. Remove backgrounds instantly with high precision, perfect for product photos, portraits, and e-commerce imagery with batch processing.",
    emoji: "✂️",
    color: "from-orange-500 to-yellow-600",
    directUrl: "https://www.pokecut.com/?via=aiwebtools",
    imageUrl: pokecutHero,
    tags: ["background remover", "image editing", "e-commerce photos", "product photos", "batch processing", "photo editing", "E-commerce"],
    category: "Image & Design Generation",
    rating: 4.3,
    totalVotes: 2567
  },
  {
    icon: Lightbulb,
    title: "Namelix",
    description: "AI business name generator that creates short, catchy, brandable names for your startup or business. Uses machine learning to generate unique names with matching domain availability checks.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://namelix.com/?via=aiwebtools",
    imageUrl: namelixHero,
    tags: ["business name generator", "brand naming", "startup names", "domain check", "AI naming", "branding", "E-commerce"],
    category: "Business Operations & Productivity",
    rating: 4.5,
    totalVotes: 3421,
    isFree: true
  },
  {
    icon: Globe,
    title: "Hostinger AI Hub",
    description: "All-in-one AI platform by Hostinger featuring website builder AI, logo maker, content writer, and business tools. Integrated suite for entrepreneurs to launch and grow online businesses.",
    emoji: "🌐",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://www.hostinger.com/ai?via=aiwebtools",
    imageUrl: hostingerAiHubHero,
    tags: ["website builder", "AI platform", "logo maker", "content writer", "business tools", "hosting", "E-commerce"],
    category: "Business Operations & Productivity",
    rating: 4.6,
    totalVotes: 4532
  },

  // ═══════════════════════════════════════════════════════════════
  // AI DETECTION & HUMANIZER TOOLS
  // ═══════════════════════════════════════════════════════════════
  {
    icon: Shield,
    title: "Undetectable AI",
    description: "Premium AI content humanizer that rewrites AI-generated text to bypass detection tools. Maintains meaning while making content undetectable by GPTZero, Turnitin, and other AI detectors.",
    emoji: "🛡️",
    color: "from-slate-600 to-gray-800",
    directUrl: "https://undetectable.ai/?via=aiwebtools",
    imageUrl: undetectableAiHero,
    tags: ["AI humanizer", "undetectable", "bypass detection", "content rewriting", "AI detection", "Turnitin bypass", "Data Science & Analytics"],
    category: "Writing & Content",
    rating: 4.6,
    totalVotes: 5678
  },
  {
    icon: PenTool,
    title: "QuillBot AI Humanizer",
    description: "AI text humanizer feature from QuillBot that transforms robotic AI content into natural human writing. Preserves meaning while improving readability and bypassing AI detection systems.",
    emoji: "🪶",
    color: "from-teal-500 to-green-600",
    directUrl: "https://quillbot.com/ai-content-detector?via=aiwebtools",
    imageUrl: quillbotHumanizerHero,
    tags: ["AI humanizer", "QuillBot", "text rewriting", "natural writing", "AI detection bypass", "content humanization", "Data Science & Analytics"],
    category: "Writing & Content",
    rating: 4.5,
    totalVotes: 4321
  },
  {
    icon: Eye,
    title: "DeepFake Detector",
    description: "AI-powered tool for detecting manipulated and deepfake videos and images. Uses advanced neural networks to identify face swaps, voice cloning, and synthetic media with confidence scores.",
    emoji: "👁️",
    color: "from-red-500 to-blue-600",
    directUrl: "https://deepware.ai/?via=aiwebtools",
    imageUrl: deepfakeDetectorHero,
    tags: ["deepfake detection", "video analysis", "face swap detection", "synthetic media", "security", "verification", "Data Science & Analytics"],
    category: "Security & Privacy",
    rating: 4.4,
    totalVotes: 2345
  },
  {
    icon: Wand2,
    title: "Clever AI Humanizer",
    description: "Smart AI humanizer that converts machine-generated text into authentic human writing. Features multiple humanization modes for different content types and bypass AI detection with 99% success rate.",
    emoji: "✨",
    color: "from-orange-500 to-amber-600",
    directUrl: "https://cleverai.io/?via=aiwebtools",
    imageUrl: cleverHumanizerHero,
    tags: ["AI humanizer", "content conversion", "detection bypass", "smart rewriting", "authentic writing", "Data Science & Analytics"],
    category: "Writing & Content",
    rating: 4.3,
    totalVotes: 1876
  },
  {
    icon: Users,
    title: "Humanize AI Tools",
    description: "Suite of AI humanization tools for transforming ChatGPT, Claude, and other AI outputs into human-like content. Includes paraphraser, rewriter, and anti-detection features in one platform.",
    emoji: "🤝",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://www.humanize.ai/?via=aiwebtools",
    imageUrl: humanizeAiToolsHero,
    tags: ["AI humanizer suite", "ChatGPT humanizer", "paraphraser", "anti-detection", "AI tools", "content suite", "Data Science & Analytics"],
    category: "Writing & Content",
    rating: 4.4,
    totalVotes: 2198
  },

  // ═══════════════════════════════════════════════════════════════
  // HUMAN RESOURCES TOOLS
  // ═══════════════════════════════════════════════════════════════
  {
    icon: Rocket,
    title: "AIApply",
    description: "AI-powered job application assistant that automatically applies to hundreds of jobs matching your profile. Features resume optimization, cover letter generation, and application tracking.",
    emoji: "🚀",
    color: "from-green-500 to-teal-600",
    directUrl: "https://aiapply.co/?via=aiwebtools",
    imageUrl: aiapplyHero,
    tags: ["job application", "auto apply", "resume optimizer", "cover letter AI", "job search", "HR AI", "Human Resources"],
    category: "Business Operations & Productivity",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Briefcase,
    title: "JobCopilot",
    description: "AI copilot for job seekers that automates job applications across multiple platforms. Customizes resumes and cover letters for each position while tracking application status.",
    emoji: "✈️",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://www.jobcopilot.com/?via=aiwebtools",
    imageUrl: jobcopilotHero,
    tags: ["job copilot", "auto apply", "resume customization", "application tracker", "job search AI", "Human Resources"],
    category: "Business Operations & Productivity",
    rating: 4.4,
    totalVotes: 2876
  },
  {
    icon: Globe,
    title: "RemotePeople",
    description: "AI platform connecting companies with remote talent worldwide. Features skill matching, verified profiles, and streamlined hiring for distributed teams and remote-first companies.",
    emoji: "🌍",
    color: "from-teal-500 to-purple-600",
    directUrl: "https://www.remotepeople.com/?via=aiwebtools",
    imageUrl: remotepeopleHero,
    tags: ["remote hiring", "talent platform", "global workforce", "skill matching", "distributed teams", "Human Resources"],
    category: "Business Operations & Productivity",
    rating: 4.3,
    totalVotes: 1654
  },
  {
    icon: BarChart3,
    title: "Workleap",
    description: "Employee experience platform with AI-powered engagement surveys, performance reviews, and goal tracking. Helps organizations improve workplace culture and retain top talent.",
    emoji: "📊",
    color: "from-orange-500 to-blue-600",
    directUrl: "https://workleap.com/?via=aiwebtools",
    imageUrl: workleapHero,
    tags: ["employee experience", "HR analytics", "engagement surveys", "performance reviews", "goal tracking", "Human Resources"],
    category: "Business Operations & Productivity",
    rating: 4.5,
    totalVotes: 2345
  },
  {
    icon: Award,
    title: "Leet Resumes",
    description: "Professional resume writing service powered by AI and human experts. Specializes in tech resumes with ATS optimization, FAANG-focused content, and interview coaching.",
    emoji: "🏆",
    color: "from-gray-800 to-yellow-600",
    directUrl: "https://www.leetresumes.com/?via=aiwebtools",
    imageUrl: leetResumesHero,
    tags: ["resume writing", "tech resumes", "FAANG", "ATS optimization", "professional resume", "Human Resources"],
    category: "Business Operations & Productivity",
    rating: 4.6,
    totalVotes: 1987
  },
  {
    icon: FileText,
    title: "Teal Resume Builder",
    description: "All-in-one career platform with AI resume builder, job tracker, and career tools. Features keyword optimization, job matching, and application analytics in a single dashboard.",
    emoji: "📝",
    color: "from-teal-500 to-cyan-600",
    directUrl: "https://www.tealhq.com/?via=aiwebtools",
    imageUrl: tealResumeHero,
    tags: ["resume builder", "job tracker", "ATS keywords", "career platform", "job matching", "Human Resources"],
    category: "Business Operations & Productivity",
    rating: 4.5,
    totalVotes: 3654
  },
  {
    icon: Target,
    title: "AI Career Coach",
    description: "Personal AI career advisor providing guidance on career paths, skill development, and job transitions. Features mock interviews, salary negotiation tips, and personalized action plans.",
    emoji: "🎯",
    color: "from-red-500 to-blue-600",
    directUrl: "https://careerflow.ai/?via=aiwebtools",
    imageUrl: aiCareerCoachHero,
    tags: ["career coach", "mock interviews", "career guidance", "salary negotiation", "skill development", "Human Resources"],
    category: "Business Operations & Productivity",
    rating: 4.4,
    totalVotes: 2567
  },
  {
    icon: Star,
    title: "Resume Worded",
    description: "AI-powered resume and LinkedIn profile analyzer that provides instant feedback and optimization suggestions. Scores your resume against ATS systems and offers improvement tips.",
    emoji: "⭐",
    color: "from-blue-600 to-indigo-700",
    directUrl: "https://resumeworded.com/?via=aiwebtools",
    imageUrl: resumeWordedHero,
    tags: ["resume analyzer", "LinkedIn optimizer", "ATS score", "resume feedback", "profile optimization", "Human Resources"],
    category: "Business Operations & Productivity",
    rating: 4.6,
    totalVotes: 4876
  },
  {
    icon: Wand2,
    title: "UseResume AI",
    description: "Fast AI resume builder that creates professional resumes in minutes. Features modern templates, AI content suggestions, and real-time preview with instant download options.",
    emoji: "✨",
    color: "from-purple-500 to-cyan-600",
    directUrl: "https://useresume.ai/?via=aiwebtools",
    imageUrl: useResumeAiHero,
    tags: ["resume builder", "AI resume", "modern templates", "instant resume", "professional CV", "Human Resources"],
    category: "Business Operations & Productivity",
    rating: 4.3,
    totalVotes: 1876
  },
  {
    icon: Rocket,
    title: "Kickresume",
    description: "Award-winning resume and cover letter builder with AI writing assistance. Features 35+ ATS-friendly templates, resume checker, and website/portfolio creation tools.",
    emoji: "🚀",
    color: "from-green-500 to-orange-600",
    directUrl: "https://www.kickresume.com/?via=aiwebtools",
    imageUrl: kickresumeHero,
    tags: ["resume builder", "cover letter AI", "ATS templates", "portfolio", "resume checker", "Human Resources"],
    category: "Business Operations & Productivity",
    rating: 4.5,
    totalVotes: 3456
  }
];

export default auditBatch2025Q2Part2Tools;
