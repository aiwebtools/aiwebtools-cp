
import { Tool } from "@/types/tools";
import { BookOpen, User, Sun, BarChart, Briefcase, Drama, Settings, FlaskConical, Home, Pill, Search } from "lucide-react";

import alanWattsGptHero from "@/assets/tools/alan-watts-gpt-hero.jpg";
import solarLandAssessorGptHero from "@/assets/tools/solar-land-assessor-gpt-hero.jpg";
import dataResearchAnalysisHero from "@/assets/tools/data-research-analysis-hero.jpg";
import playwriterGptHero from "@/assets/tools/playwriter-gpt-hero.jpg";
import customGptMakerHero from "@/assets/tools/custom-gpt-maker-hero.jpg";
import worldRealityDecoderHero from "@/assets/tools/world-reality-decoder-hero.jpg";

export const thirdPriorityFeaturedGPTs: Tool[] = [
  {
    icon: BookOpen,
    title: "Training Manual Generator GPT",
    description: "Our AI-powered Training Manual Generator, developed by AIwebtools.ai, creates comprehensive, customized training manuals for your business. This tool ensures perfect alignment with your company's needs, facilitating effective employee training. Enhance your onboarding process with a detailed, tailored training resource.",
    emoji: "📋",
    color: "from-blue-500 to-green-500",
    category: "Business Operations & Productivity",
    directUrl: "https://businessplanandtrainai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005968.jpg/:/cr=t:2.83%25,l:2.83%25,w:94.34%25,h:94.34%25/rs=w:1200,cg:true,m",
    rating: 4.6,
    totalVotes: 3500,
    tags: ["training", "manuals", "business", "onboarding", "documentation"]
  },
  {
    icon: User,
    title: "ALAN WATTS GPT",
    description: "I am Alan Watts GPT, your Free Thought Liberator, designed to inspire critical thinking, unravel illusions, and guide you toward deeper understanding. With the spirit of Alan Watts, I encourage open-minded exploration of philosophical, scientific, and cultural questions, helping you see the interconnectedness of all life.",
    emoji: "🧘",
    color: "from-purple-500 to-orange-500",
    category: "Spiritual & Philosophy AI Tools",
    directUrl: "https://alanwattsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=zdKfwsQwOLE",
    imageUrl: alanWattsGptHero,
    rating: 4.8,
    totalVotes: 4800,
    tags: ["philosophy", "alan watts", "spirituality", "wisdom", "consciousness"]
  },
  {
    icon: Sun,
    title: "Solar Land Assessor GPT",
    description: "I assist Solar Professionals with assessing land properties for future solar installation projects. This specialized AI tool provides comprehensive analysis of land suitability, solar potential, environmental factors, and regulatory considerations for renewable energy projects.",
    emoji: "☀️",
    color: "from-yellow-400 to-orange-500",
    category: "Industry-Specific Solutions",
    directUrl: "https://solarlandgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=CEca8C2GIpY",
    imageUrl: solarLandAssessorGptHero,
    rating: 4.5,
    totalVotes: 2800,
    tags: ["solar", "land assessment", "renewable energy", "solar panels", "environmental"]
  },
  {
    icon: BarChart,
    title: "Data Research Analysis Report GPT",
    description: "Data Analysis Report AI is a revolutionary tool that transforms complex datasets into actionable insights with unparalleled precision. Leveraging advanced statistical methods, trend identification, and predictive modeling, it excels in delivering accurate and detailed analyses. With its robust capabilities in generating professional visualizations and customizable reports, it empowers users to make informed, strategic decisions effortlessly.",
    emoji: "📊",
    color: "from-blue-600 to-purple-600",
    category: "Data Science & Analytics",
    directUrl: "https://dataanalysisandreportai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=idxjOwUAD_I",
    imageUrl: dataResearchAnalysisHero,
    rating: 4.9,
    totalVotes: 5500,
    tags: ["data analysis", "research", "reports", "statistics", "insights"]
  },
  {
    icon: Briefcase,
    title: "The Resume & Job Finder Ai Suite",
    description: "The Resume & Job Finder AI Suite by aiwebtools.ai combines Job Finder GPT, Resume Enhancer GPT, and Resume Specialist GPT to elevate your entire job search experience. Job Finder GPT uncovers tailored opportunities, Resume Enhancer GPT sharpens your resume with impactful language, and Resume Specialist GPT not only customizes your resume for specific roles but also serves as a job coach—offering expert guidance and proven job-seeking strategies.",
    emoji: "💼",
    color: "from-green-500 to-blue-600",
    category: "Professional Services & Business Solutions",
    directUrl: "https://resumeandjobsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-happy-man-with-a-job-offer-_n6N-k.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    rating: 4.7,
    totalVotes: 4200,
    tags: ["resume", "job search", "career", "employment", "job coaching"]
  },
  {
    icon: Drama,
    title: "🎭 Playwriter GPT",
    description: "Craft professional, fully structured theatrical plays from start to finish. Whether you have a concept or need inspiration, create original, engaging plays designed to captivate audiences. This AI-powered tool specializes in dramatic structure, character development, and theatrical formatting.",
    emoji: "🎭",
    color: "from-red-500 to-purple-600",
    category: "Creative & Entertainment (General & Gaming)",
    directUrl: "https://playwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://youtu.be/_QQ-oYYSFlw",
    imageUrl: playwriterGptHero,
    rating: 4.6,
    totalVotes: 3400,
    tags: ["playwriting", "theater", "drama", "scripts", "creative writing"]
  },
  {
    icon: Settings,
    title: "Customizable GPT Maker",
    description: "CUSTOM GPT MAKER is a customizable AI that transforms into any GPT you imagine, excelling in data analysis, live web data retrieval, and visualizations, ensuring precise task completion. Create and customize AI assistants tailored to your specific needs and requirements.",
    emoji: "🛠️",
    color: "from-cyan-500 to-blue-600",
    category: "AI Development & Platforms",
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=SmBXfGqXfco",
    imageUrl: customGptMakerHero,
    rating: 4.8,
    totalVotes: 4600,
    tags: ["custom gpt", "ai development", "customization", "gpt maker", "ai tools"]
  },
  {
    icon: FlaskConical,
    title: "Historical Apothecary GPT",
    description: "Historical Apothecary GPT is an immersive AI assistant embodying a traditional apothecary, offering detailed herbal remedies and historical medicinal wisdom. It provides step-by-step formulations for tinctures, salves, teas, and tonics, blending ancient knowledge with modern safety considerations. Engaging users with vivid storytelling, it recreates the ambiance of an old-world apothecary, complete with botanical lore and historical anecdotes.",
    emoji: "⚗️",
    color: "from-green-600 to-brown-500",
    category: "Health, Wellness & Personal Lifestyle",
    directUrl: "https://chatgpt.com/g/g-67d839556b848191a7572b1f3e911499-historical-apothecary-gpt/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-_kLdMI.png/:/cr=t:0%25,l:7.93%25,w:84.15%25,h:100%25/rs=w:1200,cg:true",
    rating: 4.5,
    totalVotes: 3100,
    tags: ["apothecary", "herbal medicine", "historical remedies", "natural healing", "traditional medicine"]
  },
  {
    icon: Home,
    title: "Home-Schooling Assistant GPT",
    description: "Presented by AIWEBTOOLS.AI, Home School GPT is your all-in-compassing AI-powered assistant designed to empower parents in their homeschooling journey. It provides precise, state-specific legal guidance and a wealth of educational resources, ensuring compliance and enhancing the homeschooling experience. With Home School GPT, you have a trusted partner to help create a successful and nurturing learning environment for your child.",
    emoji: "🏠",
    color: "from-blue-500 to-green-500",
    category: "Education & Research Tools",
    directUrl: "https://homeschoolgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-parent-teaching-their-ki-0096e43.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    rating: 4.7,
    totalVotes: 3900,
    tags: ["homeschooling", "education", "parenting", "curriculum", "learning"]
  },
  {
    icon: Pill,
    title: "Pharmaceutical Assistant GPT",
    description: "I'm an expert AI Pharmaceutical Assistant that supports pharmacy professionals and patients alike by streamlining medication management, offering detailed drug information, checking for interactions, and helping with scheduling, all to ensure safe and efficient healthcare practices.",
    emoji: "💊",
    color: "from-blue-600 to-teal-500",
    category: "Health, Wellness & Personal Lifestyle",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    rating: 4.6,
    totalVotes: 3700,
    tags: ["pharmaceutical", "medication", "healthcare", "pharmacy", "drug information"]
  },
  {
    icon: Search,
    title: "World Reality Decoder GPT",
    description: "World Reality Decoder GPT is an advanced AI tool that decodes the hidden layers of reality by analyzing patterns, symbols, and connections that shape our world. Using sophisticated pattern recognition and critical analysis, it helps users understand the deeper structures and hidden mechanisms behind events, systems, and phenomena. Perfect for researchers, truth seekers, and anyone looking to decode the complex reality around us.",
    emoji: "🔍",
    color: "from-indigo-500 to-purple-600",
    category: "Mysterious & Unusual",
    directUrl: "https://chatgpt.com/g/g-68c1e9e3b488819193744edfeecf7997-world-reality-decoder-gpt",
    videoUrl: "https://youtu.be/YzGrnpsScH0",
    imageUrl: worldRealityDecoderHero,
    rating: 4.6,
    totalVotes: 1234,
    tags: ["reality decoding", "pattern analysis", "truth seeking", "system analysis", "hidden connections", "critical thinking", "world analysis"]
  }
];
