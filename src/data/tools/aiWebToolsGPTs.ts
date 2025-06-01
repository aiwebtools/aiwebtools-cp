
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
import { Film, GraduationCap, Car, Theater, Shield, BookOpen, Paintbrush, Camera, Clock, Users, Zap, Brain, Heart, Briefcase } from "lucide-react";

// TOP PRIORITY TOOL - MOVIE MAKER STUDIO AI SUITE
const topPriorityTool: Tool = {
  icon: Film,
  title: "Movie Maker Studio AI SUITE",
  description: "We proudly present to you Movie Maker Studio which consists of every tool needed for Movie & Motion Picture Production. Consisting of Movie Scripter Writer, Movie Scene Maker, Movie Trailer Poster Maker & more.....we offer you the key and show you the door, unlock your creativity my fellow humans--KB",
  emoji: "🎬",
  color: "from-purple-500 to-pink-600",
  directUrl: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
  videoUrl: "https://www.youtube.com/watch?v=Zdthelofv_E&list=TLGGyT65jYe0o6cyODA1MjAyNQ&t",
  tags: ["movie production", "music videos", "AI director", "cinematic quality", "scene creation", "aiwebtools", "creative suite"],
  category: "Creative & Media",
  rating: 4.9,
  totalVotes: 7234
};

// HIGH PRIORITY FEATURED TOOLS
const highPriorityFeaturedTools: Tool[] = [
  {
    icon: GraduationCap,
    title: "College Degree GPT",
    description: "College Degree GPT teaches you every college class for any degree you desire, mirroring the exact structure of your chosen institution or university. While it doesn't provide an accredited degree, it delivers a full, in-depth educational experience as if you were earning one. We believe that access to education is a fundamental human right, and it should be free for everyone. That's why we've open-sourced the prompt for you to save for your personal records. 🕊️",
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

// ADDITIONAL HIGH PRIORITY TOOLS - NEXT BATCH
const additionalPriorityTools: Tool[] = [
  {
    icon: Clock,
    title: "TIME MACHINE GPT",
    description: "Uncover the past, explore potential futures, and dive into alternative realities with Time Machine GPT! Experience key historical moments, interact with notable figures, and journey through different eras—unlock your imagination. For deeper, more personal conversations with historical characters, we recommend using Talk to History GPT",
    emoji: "⏰",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://time-machine-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=rXXScpdUWQo",
    tags: ["time travel", "history", "future exploration", "historical figures", "alternative realities", "aiwebtools"],
    category: "Time & History",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Users,
    title: "Survivalist GPT",
    description: "Congratulations! You now have a survival expert in your pocket. Imagine a robot with vast knowledge and experience in survival techniques, ready to assist you anytime. This GPT, offers step-by-step guidance, practical strategies, and personalized support for any survival or battlefield scenario. It's the ultimate survival companion, always by your side. Remember, with Survivalist GPT, you're never alone.",
    emoji: "🏕️",
    color: "from-green-500 to-orange-600",
    directUrl: "https://survivalistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=RX6W8KC0y18&list=TLGGkaSLRgubL1gyODA1MjAyNQ",
    tags: ["survival", "wilderness", "emergency preparedness", "outdoor skills", "safety", "aiwebtools"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 4321
  },
  {
    icon: Zap,
    title: "ImmortalizeME",
    description: "ImmortalizeMe ™ is an AI service offered by AIWebTools.AI that creates fully interactive digital clones of individuals using their voice, personality, and life stories. The team at AI Web Tools handles the entire process—from voice cloning to knowledge integration—based on the data you provide. Your digital twin can engage in real-time voice conversations and reflect your unique mannerisms and memories. It's a hands-free, done-for-you solution to preserve your legacy for future generations.",
    emoji: "🔮",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://immortalizeme.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=JXLqPMfw49Y",
    tags: ["digital cloning", "voice cloning", "legacy preservation", "AI personalities", "memory preservation", "aiwebtools"],
    category: "Professional Services",
    rating: 4.9,
    totalVotes: 6234
  },
  {
    icon: Brain,
    title: "Movie Script Writer GPT",
    description: "Unlock your creative potential with Movie Scriptwriter GPT, the ultimate AI assistant designed to help you write award-winning movie scripts. Whether you're planning scenes or developing characters, our AI supports you through each stage of the scriptwriting process. It provides professional formatting, detailed descriptions, and captivating dialogue, ensuring your script meets industry standards. Ideal for both new writers and experienced filmmakers, this tool brings your story to life on screen. Begin your path to the red carpet with Movie Scriptwriter GPT.",
    emoji: "📝",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://moviescriptwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=4e3Rkurt3-c&list=TLGGtoG6kc0vED4yODA1MjAyNQ",
    tags: ["scriptwriting", "movie scripts", "creative writing", "screenwriting", "character development", "aiwebtools"],
    category: "Creative & Media",
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: Heart,
    title: "Illuminous World Data Explorer GPT",
    description: "Illuminous specializes in data analysis and global data retrieval, designed to make accurate predictions about anything. This GPT offers real-time global data analysis, creating stunning infographics to turn complex information into clear insights and predictions. Illuminate the future of prediction with Illuminous.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    directUrl: "https://illuminous.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Nd1Ui2-VLMU",
    tags: ["data analysis", "global data", "predictions", "infographics", "insights", "aiwebtools"],
    category: "Science & Research",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Briefcase,
    title: "GODMODE GPT",
    description: "Imagine having an AI companion so powerful and versatile that it seamlessly transforms to meet every need you have—introducing GodMode GPT",
    emoji: "⚡",
    color: "from-red-500 to-purple-600",
    directUrl: "https://godmodegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=or3JtZsq6Bc",
    tags: ["versatile AI", "powerful assistant", "multi-purpose", "advanced capabilities", "godmode", "aiwebtools"],
    category: "Professional Services",
    rating: 4.9,
    totalVotes: 7890
  }
];

// Combine all AI Web Tools GPTs from organized categories
export const aiWebToolsGPTs: Tool[] = [
  // TOP PRIORITY TOOL AT THE VERY BEGINNING
  topPriorityTool,
  
  // HIGH PRIORITY FEATURED TOOLS
  ...highPriorityFeaturedTools,
  
  // ADDITIONAL HIGH PRIORITY TOOLS
  ...additionalPriorityTools,
  
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
