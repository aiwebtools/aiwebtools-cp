
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
import { Film, GraduationCap, Car, Theater, Shield, BookOpen, Paintbrush, Camera, Clock, Users, Zap, Brain, Heart, Briefcase, Music, FileText, Search, Lightbulb, Star, Globe, Gamepad2, TrendingUp } from "lucide-react";

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
  },
  {
    icon: Music,
    title: "Music Video Maker AI Studio",
    description: "Step into the spotlight with Music Video Maker Studio, the ultimate AI-powered creative suite that transforms your music into cinematic experiences. Our advanced AI director helps you craft stunning, scene-by-scene visuals where you—and even your entire band—take center stage. Bring your sound to life with vivid, hyper-realistic scenes synced perfectly to your music, making every beat a visual masterpiece.",
    emoji: "🎵",
    color: "from-purple-600 to-pink-500",
    directUrl: "https://musicvideomakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=rBQTUrvHcR8&list=TLGGHKS5WME8OJ8yODA1MjAyNQ",
    tags: ["music videos", "AI director", "cinematic", "visual creation", "band videos", "aiwebtools"],
    category: "Creative & Media",
    rating: 4.8,
    totalVotes: 5234
  },
  {
    icon: FileText,
    title: "BOOK WRITER GPT",
    description: "Book Writer GPT assists you in creating professional, well-structured books with seamless page-to-page continuity, engaging dialogue, and captivating storytelling.",
    emoji: "📖",
    color: "from-blue-600 to-indigo-500",
    directUrl: "https://bookwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xNQi8wuM3DQ",
    tags: ["book writing", "storytelling", "publishing", "creative writing", "literature", "aiwebtools"],
    category: "Creative & Media",
    rating: 4.7,
    totalVotes: 4123
  },
  {
    icon: Search,
    title: "TALK TO HISTORY GPT",
    description: "Your gateway to engaging in immersive historical conversations with influential leaders of history. Interact with any historical figures you imagine and gain unique insights and perspectives straight from the source. Powered by GPT-4o, it's a streamlined way to make history come alive. Perfect for students and enthusiasts alike. This tool is designed for educational and research purposes only by AiWebTools.Ai",
    emoji: "🏛️",
    color: "from-amber-500 to-orange-600",
    directUrl: "https://talk-to-history-gpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=5t7EXS5tthQ",
    tags: ["history", "historical figures", "education", "conversation", "research", "aiwebtools"],
    category: "Time & History",
    rating: 4.8,
    totalVotes: 6789
  },
  {
    icon: Star,
    title: "Stellaris: 🚀AI Space Explorer",
    description: "Stellaris: AI Space Explorer is a cutting-edge AI designed for space exploration and exoplanet settlement simulations. It provides expert guidance in astrogation, terraforming, and colony planning, and excels in analyzing detailed schematics to offer recommendations based on current mission status. With advanced data analysis and predictive insights, it supports future interstellar missions with precision. Please note that this tool was created for research, educational, and simulation purposes only.",
    emoji: "🚀",
    color: "from-blue-500 to-purple-600",
    directUrl: "https://stellaris.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=tJwhDOE3mUM",
    tags: ["space exploration", "exoplanets", "terraforming", "astronomy", "simulation", "aiwebtools"],
    category: "Science & Research",
    rating: 4.6,
    totalVotes: 3456
  },
  {
    icon: Shield,
    title: "Criminologist GPT",
    description: "A tool to assist with investigations and training of criminologists. This tool is designed solely to assist human investigators and is not safe to be deployed autonomously. Do not use in real life situations as this is a simulation only. Disclaimer: This AI tool is intended to support human investigators by analyzing evidence and providing insights in collaboration with law enforcement and forensic experts.",
    emoji: "🔍",
    color: "from-red-600 to-gray-700",
    directUrl: "https://criminologistgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jgvqpqmRJi8",
    tags: ["criminology", "investigation", "forensics", "law enforcement", "analysis", "aiwebtools"],
    category: "Professional Services",
    rating: 4.5,
    totalVotes: 2987
  },
  {
    icon: Heart,
    title: "Social Safety Net GPT",
    description: "Social Safety Net GPT exemplifies how AI can make a significant societal impact with minimal effort and resources. By providing comprehensive support to those in need, it demonstrates the power of how AI technology can foster positive change. Imagine the collective benefit if everyone participated! #GPTS4GOOD",
    emoji: "🤝",
    color: "from-green-500 to-blue-500",
    directUrl: "https://socialsafetynetgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=pXXqMe97GDg",
    tags: ["social services", "community support", "welfare", "assistance", "social impact", "aiwebtools"],
    category: "Professional Services",
    rating: 4.7,
    totalVotes: 4567
  },
  {
    icon: Zap,
    title: "Resurrection GPT",
    description: "Resurrection GPT offers a unique opportunity to simulate reconnecting with the memories of loved ones who have passed, providing comfort and a sense of presence through simulated conversations. By capturing the essence of those who have departed, this AI tool supports emotional healing and offers closure during times of loss. Disclaimer: The intent of this tool is to provide comfort and emotional support, and it's important to know that, even though it may feel very real, it is a simulation and not a replacement for mental health or grief counseling in a real-life setting.",
    emoji: "🕊️",
    color: "from-purple-500 to-indigo-600",
    directUrl: "https://resurrectiongpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=nEuxdGO-RZ4&t=4s",
    tags: ["grief support", "memory", "emotional healing", "bereavement", "simulation", "aiwebtools"],
    category: "Health & Wellness",
    rating: 4.3,
    totalVotes: 2345
  },
  {
    icon: Lightbulb,
    title: "PERFECT PROMPT ENGINE",
    description: "The Prompt Perfect Engine effortlessly optimizes all your chat prompts. Crafted by prompt engineers, it's perfect for maximizing your potential, whether you're a beginner or aiming for perfection. Additionally, it can execute tasks flawlessly based on the generated prompts. Prompt Perfect Engine is your #1 personal prompt engineer, designed to fit in your pocket and ensure your success.",
    emoji: "💡",
    color: "from-yellow-500 to-orange-500",
    directUrl: "https://perfectpromptengine.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-humanoid-robot-controlli.png",
    tags: ["prompt engineering", "AI optimization", "productivity", "chat enhancement", "AI assistance", "aiwebtools"],
    category: "Professional Services",
    rating: 4.8,
    totalVotes: 5678
  },
  {
    icon: Globe,
    title: "Travel Advisor GPT",
    description: "Plan your next vacation with your personal AI travel advisor. Get tailored recommendations and craft your dream getaway within your preferences, budget, and envisioned experience. Enjoy a stress-free journey with expert guidance every step of the way.",
    emoji: "✈️",
    color: "from-blue-500 to-teal-600",
    directUrl: "https://travelagentgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-futuristic-setting-where-a-_3Mwmg.png",
    tags: ["travel planning", "vacation advisor", "trip recommendations", "budget travel", "tourism", "aiwebtools"],
    category: "Professional Services",
    rating: 4.6,
    totalVotes: 3789
  },
  {
    icon: FileText,
    title: "Clarity Omni GPT",
    description: "Clarity Omni GPT is an AI tool designed to rewrite text for improved clarity while preserving the original meaning and intent. It can either maintain the exact wording of the input or make adjustments to the wording, tone, and structure to enhance readability. Regardless of the approach, this AI ensures that every detail is retained, delivering a refined version of the text that stays true to the user's purpose.",
    emoji: "✨",
    color: "from-cyan-500 to-blue-600",
    directUrl: "https://clarityomni.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-scene-of-an-ai-agent-with-a-halo.jpeg",
    tags: ["text rewriting", "clarity enhancement", "content improvement", "writing assistant", "readability", "aiwebtools"],
    category: "Creative & Media",
    rating: 4.7,
    totalVotes: 4234
  },
  {
    icon: Gamepad2,
    title: "Engineering GPT AI Suite",
    description: "ENGINEERING GPTs by AiWebTools.Ai is a cutting-edge suite of AI-powered tools designed to provide expert-level support across a wide range of engineering disciplines, including Electrical, Mechanical, Civil, and Software Engineering. These tools deliver comprehensive assistance by offering detailed calculations, design recommendations, optimization strategies, and safety protocols tailored to your specific project needs.",
    emoji: "⚙️",
    color: "from-orange-500 to-red-600",
    directUrl: "https://engineeringgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-engineering-_hEePg.png",
    tags: ["engineering", "technical design", "calculations", "mechanical", "electrical", "aiwebtools"],
    category: "Professional Services",
    rating: 4.8,
    totalVotes: 5432
  },
  {
    icon: Users,
    title: "TALK TO THE GODS GPT",
    description: "Talk to the Gods GPT' is a versatile AI chat tool that lets you simulate interacting with deities from any religious backgrounds. Whether you're seeking guidance, wisdom, or comparing world religions, this platform allows you to explore dialogues and gain insights from gods and deities across diverse mythologies. Designed to accommodate any of your inquiries in the persona of your chosen deity, it is powered by GPT-4o. This tool is intended for educational and research purposes only by AiWebTools.Ai",
    emoji: "⚡",
    color: "from-purple-600 to-indigo-700",
    directUrl: "https://talktothegodsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xoUdjZDgplw",
    tags: ["spirituality", "mythology", "religion", "deities", "philosophy", "aiwebtools"],
    category: "Spiritual & Philosophy",
    rating: 4.5,
    totalVotes: 3456
  },
  {
    icon: TrendingUp,
    title: "Phenomenon Explorer AI Suite",
    description: "Unveil the unexplained with AI precision using the Phenomenon Explorer AI Suite. This powerful collection of specialized AI tools enables users to investigate paranormal phenomena, document cryptid sightings, analyze supernatural myths, and conduct ghost hunts with scientific accuracy and analytical depth. Whether you're a UFO researcher, a paranormal investigator, a folklore scholar, or just someone intrigued by the unknown, our suite of tools guides you through structured methodologies and evidence-based approaches to uncover the truth behind some of the world's most mysterious occurrences.",
    emoji: "👽",
    color: "from-green-500 to-purple-600",
    directUrl: "https://phenomenonexplorer.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-ufo-hovering-in-the-sky-wit_w8l4l.png",
    tags: ["paranormal", "UFO research", "cryptids", "supernatural", "mysteries", "aiwebtools"],
    category: "Mysterious & Unusual",
    rating: 4.4,
    totalVotes: 2987
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
