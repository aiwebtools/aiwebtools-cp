
import { Tool } from "@/types/tools";
import { appraisalAndValuationGPTs } from "./aiWebTools/appraisalAndValuationGPTs";
import { healthAndWellnessGPTs } from "./aiWebTools/healthAndWellnessGPTs";
import { businessAndFinanceGPTs } from "./aiWebTools/businessAndFinanceGPTs";
import { educationAndLearningGPTs } from "./aiWebTools/educationAndLearningGPTs";
import { entertainmentAndGamingGPTs } from "./aiWebTools/entertainmentAndGamingGPTs";
import { creativeAndMediaGPTs } from "./aiWebTools/creativeAndMediaGPTs";
import { timeAndHistoryGPTs } from "./aiWebTools/timeAndHistoryGPTs";
import { spiritualAndPhilosophyGPTs } from "./aiWebTools/spiritualAndPhilosophyGPTs";
import { scienceAndResearchGPTs } from "./aiWebTools/scienceAndResearchGPTs";
import { legalAndGovernmentGPTs } from "./aiWebTools/legalAndGovernmentGPTs";
import { professionalServicesGPTs } from "./aiWebTools/professionalServicesGPTs";
import { multimediaAndContentGPTs } from "./aiWebTools/multimediaAndContentGPTs";
import { mysteriousAndUnusualGPTs } from "./aiWebTools/mysteriousAndUnusualGPTs";
import { Film, GraduationCap, Car, Theater, Shield, BookOpen, Paintbrush, Camera } from "lucide-react";

// NEW TOP PRIORITY TOOL - MOVIE MAKER STUDIO AI SUITE
const topPriorityTool: Tool = {
  icon: Film,
  title: "Movie Maker Studio AI SUITE",
  description: "-Full-Blown Music Video & Music Production Creative Suite- Transform yourself into the star of cinematic-quality music videos with our cutting-edge AI director. Build scene-by-scene visuals where you and even your band are featured in vivid, realistic scenes tied to your music.",
  emoji: "🎬",
  color: "from-purple-500 to-pink-600",
  directUrl: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
  videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E&list=TLGGyT65jYe0o6cwMTA2MjAyNQ",
  tags: ["movie production", "music videos", "AI director", "cinematic quality", "scene creation", "aiwebtools", "creative suite"],
  category: "Creative & Media",
  rating: 4.9,
  totalVotes: 7234
};

// NEW HIGH PRIORITY FEATURED TOOLS
const newFeaturedTools: Tool[] = [
  {
    icon: GraduationCap,
    title: "College Degree GPT",
    description: "College Degree GPT teaches you every college class for any degree you desire, mirroring the exact structure of your chosen institution or university. While it doesn't provide an accredited degree, it delivers a full, in-depth educational experience as if you were earning one. We believe that access to education is a fundamental human right, and it should be free for everyone. 🕊️",
    emoji: "🎓",
    color: "from-blue-500 to-indigo-600",
    directUrl: "https://college-degree-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Cd8uvD-smlM&list=TLGGLsn0bAvnp3EyODA1MjAyNQ",
    tags: ["education", "college", "degree", "learning", "free education", "aiwebtools", "academic"],
    category: "Education & Learning",
    rating: 4.8,
    totalVotes: 6892
  },
  {
    icon: Car,
    title: "Automobile GPT",
    description: "Automobile GPT is your ultimate, all-encompassing AI automotive expert, designed to guide you through every aspect of the automotive world with precision. Whether you're searching for the best deals at local dealerships, need detailed repair cost assessments, or seek expert advice on maintenance and upgrades, Automobile GPT offers unmatched accuracy and thoroughness. It's your indispensable partner for making informed, precise decisions about your vehicle.",
    emoji: "🚗",
    color: "from-red-500 to-orange-600",
    directUrl: "https://automobilegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=f_4aFnL-mk8",
    tags: ["automotive", "cars", "repairs", "maintenance", "dealerships", "aiwebtools", "vehicle advice"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 5234
  },
  {
    icon: Theater,
    title: "StageMaster AI Suite",
    description: "A powerful suite of AI tools that transforms every aspect of stage production, from set design to choreography, costume creation to lighting optimization.",
    emoji: "🎭",
    color: "from-purple-500 to-pink-600",
    directUrl: "https://stagemasterai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-QIxYSlcRWM",
    tags: ["stage production", "theater", "choreography", "costume design", "lighting", "aiwebtools", "performing arts"],
    category: "Creative & Media",
    rating: 4.6,
    totalVotes: 4567
  },
  {
    icon: Shield,
    title: "🔒Insurance Claims GPT",
    description: "Insurance Claims GPT by AIWebTools.ai is a cutting-edge AI tool revolutionizing claims management and estimation. It offers a seamless, user-friendly experience, guiding users through every step of the claims process with unparalleled accuracy and efficiency. Leveraging advanced damage analysis and generating comprehensive reports, Insurance Claims GPT ensures precise, professional, and swift insurance claim resolutions.",
    emoji: "🔒",
    color: "from-green-500 to-teal-600",
    directUrl: "https://insuranceclaimsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=WNPywJWOUzU",
    tags: ["insurance", "claims", "damage analysis", "reports", "settlements", "aiwebtools", "professional"],
    category: "Business & Finance",
    rating: 4.8,
    totalVotes: 3892
  },
  {
    icon: BookOpen,
    title: "Children's Picture Book Maker GPT",
    description: "Create Magical Picture Books for Children. Unleash your creativity with AI-powered children's book creation that brings your stories to life with vibrant illustrations and engaging narratives.",
    emoji: "📚",
    color: "from-pink-500 to-rose-600",
    directUrl: "https://childrensbookmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=MryAyvg_N0U",
    tags: ["children's books", "storytelling", "illustrations", "creative writing", "family", "aiwebtools", "publishing"],
    category: "Creative & Media",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Paintbrush,
    title: "Tattoo Designer GPT",
    description: "TattooGPT is your all-in-one tattoo and piercing assistant, designed to provide expert guidance in every aspect of body art and modification. From creating unique, high-quality tattoo designs tailored to personal styles and symbolism to assisting tattoo artists and shop owners with business planning, marketing, and compliance, TattooGPT ensures professionalism and precision.",
    emoji: "🎨",
    color: "from-indigo-500 to-purple-600",
    directUrl: "https://tattoogpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3dtGbNqXdPY",
    tags: ["tattoo design", "body art", "piercing", "artistic", "business planning", "aiwebtools", "creative"],
    category: "Creative & Media",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: Camera,
    title: "Movie Scene Maker GPT",
    description: "Transform Yourself Into A Movie Star. Become the star of your own cinematic adventure with Movie Scene Maker GPT. Create stunning, personalized movie scenes featuring you in any genre, setting, or storyline. Powered by GPT 4o Image Generation Technology.",
    emoji: "🎥",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://moviescenemakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=9fpWIE20z7s&t",
    tags: ["movie scenes", "personalized", "cinematic", "image generation", "entertainment", "aiwebtools", "GPT-4o"],
    category: "Creative & Media",
    rating: 4.6,
    totalVotes: 2987
  }
];

// Combine all AI Web Tools GPTs from organized categories
export const aiWebToolsGPTs: Tool[] = [
  // TOP PRIORITY TOOL AT THE VERY BEGINNING
  topPriorityTool,
  
  // NEW HIGH PRIORITY FEATURED TOOLS
  ...newFeaturedTools,
  
  // TIME-BASED TOOLS AT THE TOP (as requested)
  ...timeAndHistoryGPTs,
  
  // INDUSTRY-SPECIFIC SOLUTIONS TOWARDS THE TOP (as requested)
  ...businessAndFinanceGPTs,
  ...professionalServicesGPTs,
  ...healthAndWellnessGPTs,
  ...legalAndGovernmentGPTs,
  ...appraisalAndValuationGPTs,
  
  // CORE FUNCTIONAL CATEGORIES
  ...educationAndLearningGPTs,
  ...entertainmentAndGamingGPTs,
  ...creativeAndMediaGPTs,
  ...scienceAndResearchGPTs,
  ...multimediaAndContentGPTs,
  ...mysteriousAndUnusualGPTs,
  
  // SPIRITUALITY MOVED TO THE BOTTOM (as requested)
  ...spiritualAndPhilosophyGPTs,
  
  // Additional GPTs will be added here as new category files are created
];
