
import { Tool } from "@/types/tools";
import { priorityFeaturedGPTs } from "./priorityFeaturedGPTs";
import { secondPriorityFeaturedGPTs } from "./secondPriorityFeaturedGPTs";
import { thirdPriorityFeaturedGPTs } from "./thirdPriorityFeaturedGPTs";
import { fourthPriorityFeaturedGPTs } from "./fourthPriorityFeaturedGPTs";
import { timeAndHistoryGPTs } from "./timeAndHistoryGPTs";
import { businessAndFinanceGPTs } from "./businessAndFinanceGPTs";
import { professionalServicesGPTs } from "./professionalServicesGPTs";
import { healthAndWellnessGPTs } from "./healthAndWellnessGPTs";
import { legalAndGovernmentGPTs } from "./legalAndGovernmentGPTs";
import { appraisalAndValuationGPTs } from "./appraisalAndValuationGPTs";
import { educationAndLearningGPTs } from "./educationAndLearningGPTs";
import { entertainmentAndGamingGPTs } from "./entertainmentAndGamingGPTs";
import { creativeAndMediaGPTs } from "./creativeAndMediaGPTs";
import { scienceAndResearchGPTs } from "./scienceAndResearchGPTs";
import { multimediaAndContentGPTs } from "./multimediaAndContentGPTs";
import { mysteriousAndUnusualGPTs } from "./mysteriousAndUnusualGPTs";
import { utilityAndProductivityGPTs } from "./utilityAndProductivityGPTs";
import { philosophyAndLifestyleGPTs } from "./philosophyAndLifestyleGPTs";
import { foodAndHospitalityGPTs } from "./foodAndHospitalityGPTs";
import { aiPromptingAndGenerationGPTs } from "./aiPromptingAndGenerationGPTs";
import { researchAndPharmaceuticalGPTs } from "./researchAndPharmaceuticalGPTs";
import { educationalToolsGPTs } from "./educationalToolsGPTs";
import { specializedNicheToolsGPTs } from "./specializedNicheToolsGPTs";
import { businessStrategyGPTs } from "./businessStrategyGPTs";
import { contentCreationToolsGPTs } from "./contentCreationToolsGPTs";
import { additionalSpecializedGPTs } from "./additionalSpecializedGPTs";
import { finalSpecializedGPTs } from "./finalSpecializedGPTs";
import { investigativeAndAnalysisGPTs } from "./investigativeAndAnalysisGPTs";
import { artAndCreativeGPTs } from "./artAndCreativeGPTs";
import { personalDevelopmentGPTs } from "./personalDevelopmentGPTs";
import { communicationAndEntertainmentGPTs } from "./communicationAndEntertainmentGPTs";
import { advancedSpecialtyGPTs } from "./advancedSpecialtyGPTs";
import { governmentCivicGPTs } from "./governmentCivicGPTs";
import { technologyInnovationGPTs } from "./technologyInnovationGPTs";
import { spiritualAndPhilosophyGPTs } from "./spiritualAndPhilosophyGPTs";

// NEWEST BATCH - Adding more AI Web Tools GPTs
const newestBatchAIWebToolsGPTs: Tool[] = [
  {
    title: "Course Maker GPT",
    description: "Course Maker GPT creates comprehensive educational courses with structured lessons, assessments, and interactive content for any subject or skill level.",
    category: "Education & Course Creation",
    directUrl: "https://chat.openai.com/g/g-YDzdoqmP9-course-creator-gpt",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377336291427090462/ChatGPT_Image_May_28_2025_01_22_27_PM.png?ex=683897e1&is=68374661&hm=71f0b50e1d34249bf9ed9ca8b7a1b0e45d0d2127cb9e356e2b4c65b35518656a&=&format=webp&quality=lossless&width=2088&height=1392",
    emoji: "📚",
    color: "from-blue-600 to-indigo-700",
    tags: ["course", "education", "teaching", "curriculum", "learning"]
  },
  {
    title: "Taxes GPT",
    description: "Taxes GPT is your AI-powered tax assistant, designed to simplify tax preparation while maximizing your deductions. Securely analyze your financial data, receive accurate tax reports, and minimize liabilities with ease.",
    category: "Finance & Tax Preparation",
    directUrl: "https://taxesgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=xkcsSVbBhf4",
    emoji: "💰",
    color: "from-green-600 to-emerald-700",
    tags: ["taxes", "finance", "accounting", "deductions", "preparation"]
  },
  {
    title: "Genome GPT",
    description: "Genome GPT is a cutting-edge AI tool designed to assist researchers, scientists, and enthusiasts in genetic analysis and discovery. Specializing in genomic data interpretation.",
    category: "Genetics & Biotechnology",
    directUrl: "https://genomegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-conceptual-image-of-a-dna-double-helix-with-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🧬",
    color: "from-purple-600 to-pink-700",
    tags: ["genetics", "dna", "genome", "biotechnology", "research"]
  },
  {
    title: "Game Design Document / Developer GPT",
    description: "Bring your video game ideas to life with Game Design Document Developer GPT! This tool is your ultimate assistant for game development, guiding you from concept to completion.",
    category: "Game Development & Design",
    directUrl: "https://gamedesigngpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-floating-man-with-blue-skin-and-white-hair-.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🎮",
    color: "from-cyan-500 to-blue-600",
    tags: ["game", "development", "design", "unity", "unreal"]
  },
  {
    title: "ENTER THE MATRIX GPT (NEO👁️MATRIX GPT)",
    description: "Step into The Matrix as Neo, guided by Morpheus. Awaken to deeper truths hidden in the fabric of reality. Explore Quantum Meaning & Simulation Theory.",
    category: "Philosophy & Simulation",
    directUrl: "https://neomatrixgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=BkPCpeu_nSs",
    emoji: "👁️",
    color: "from-red-600 to-black",
    tags: ["matrix", "philosophy", "simulation", "reality", "neo"]
  },
  {
    title: "Predictive Credit Score Checker GPT",
    description: "Predictive Credit Score Checker GPT is an AI tool for estimating creditworthiness based on specific addresses. Ideal for real estate, finance, and lending.",
    category: "Credit & Financial Analysis",
    directUrl: "https://predictivecreditscoregpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-screenshot-of-a-web-app-with-the-text-predic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "📊",
    color: "from-blue-500 to-purple-600",
    tags: ["credit", "score", "finance", "prediction", "analysis"]
  },
  {
    title: "Name Insight Research & Predictor GPT",
    description: "Your name holds hidden meanings, shaping your personality, strengths, and destiny through history, numerology, and culture. Dive deep into its origins, global significance, and psychological impact.",
    category: "Personal Analysis & Research",
    directUrl: "https://whatsmynamegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-interface-with-a-dark-blue-_mXbL6.png/:/cr=t:10.87%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🔍",
    color: "from-indigo-600 to-purple-700",
    tags: ["names", "analysis", "personality", "numerology", "culture"]
  },
  {
    title: "Coloring Book Generator GPT",
    description: "Coloring Book Generator GPT creates full coloring books from your imagination. Generate custom coloring pages and complete books for any theme or subject.",
    category: "Creative & Art Generation",
    directUrl: "https://coloringbookmaker.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-coloring-page-of-a-robot-with-a-human-like-b.png/:/cr=t:4.3%25,l:0.78%25,w:94.34%25,h:84.09%25/rs=w:1200,h:600,cg:true,m",
    emoji: "🎨",
    color: "from-pink-500 to-purple-600",
    tags: ["coloring", "books", "art", "creativity", "children"]
  },
  {
    title: "Native American History Time Machine GPT - (Special Edition)",
    description: "Experience an immersive time travel adventure of discovery to any era of Native American history with Geronimo, Chief of Rainbow Apache Destiny as your guide.",
    category: "History & Cultural Education",
    directUrl: "https://nativeamerican-timemachine.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=jVFTGCeuNSM",
    emoji: "🪶",
    color: "from-orange-700 to-red-800",
    tags: ["history", "native american", "culture", "education", "heritage"]
  },
  {
    title: "Public Testimony Writer GPT",
    description: "Innovative AI Tool Streamlines Legislative Testimony Process, Promotes Public Engagement in Local Policy. This tool was featured in various news articles such as the CT POST & CT INSIDER.",
    category: "Government & Civic Engagement",
    directUrl: "https://publictestimonywriter.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4",
    emoji: "🏛️",
    color: "from-blue-700 to-indigo-800",
    tags: ["government", "testimony", "civic", "policy", "engagement"]
  },
  {
    title: "Cyber Security GPT",
    description: "Given the increasing threat of infrastructure attacks, AiWebTools.Ai aims to encourage the creation of solutions. Our cybersecurity assistant can deploy defense mechanisms and strategies.",
    category: "Cybersecurity & Infrastructure",
    directUrl: "https://chatgpt.com/g/g-Qvat03gmj-hacking-defender-infrastructure-protector-gpt",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-robot-with-a-large-shield-tha.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🛡️",
    color: "from-red-600 to-orange-700",
    tags: ["cybersecurity", "protection", "hacking", "defense", "infrastructure"]
  },
  {
    title: "🚀 Startup Validator GPT",
    description: "🚀 Startup Validator GPT is your ultimate AI-powered startup analysis tool, designed to rapidly assess market viability, scalability, and investment potential.",
    category: "Business & Startup Validation",
    directUrl: "https://startupvalidatorgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-named-st_4i8GY.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🚀",
    color: "from-green-500 to-blue-600",
    tags: ["startup", "validation", "business", "investment", "analysis"]
  },
  {
    title: "Business Plan Generator GPT💼",
    description: "Business Plan Generator GPT is an AI-driven tool that quickly creates tailored business plans. By gathering key information about your business, it produces a detailed plan.",
    category: "Business Planning & Strategy",
    directUrl: "https://businessplanandtrainai.lovable.app//?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-logo-design-with-the-text-business-plan-gene.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "💼",
    color: "from-blue-600 to-purple-700",
    tags: ["business", "planning", "strategy", "startup", "finance"]
  },
  {
    title: "Fungus GPT – AI Mushroom Specialist",
    description: "Fungus Whisperer GPT is an expert AI guide specializing in mushroom cultivation, safe foraging, and creative culinary uses of fungi.",
    category: "Mycology & Agriculture",
    directUrl: "https://fungusgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-man-with-a-beard-holding-a-_9DLLj.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "🍄",
    color: "from-green-600 to-emerald-700",
    tags: ["mushrooms", "mycology", "foraging", "cultivation", "fungi"]
  },
  {
    title: "Drill Baby Drill Ai Suite For Oil & Gas",
    description: "Drill Baby Drill AI Tools Suite is a cutting-edge collection of 10 specialized AI tools designed to optimize every aspect of oil and gas operations.",
    category: "Oil & Gas Industry",
    directUrl: "https://drillbabydrillaisuite.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cartoon-illustration-of-a-man-with-a-h_lmQ_X.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    emoji: "🛢️",
    color: "from-yellow-600 to-orange-700",
    tags: ["oil", "gas", "drilling", "energy", "industry"]
  },
  {
    title: "Dream Interpreter GPT",
    description: "Dream Interpreter GPT is an AI-driven tool designed to analyze and interpret dreams using psychological, mythological, and symbolic frameworks.",
    category: "Psychology & Dream Analysis",
    directUrl: "https://dreaminterpreter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-ad-for-an-ai-tool-called-dream-interp_5LG7D.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "💭",
    color: "from-purple-600 to-indigo-700",
    tags: ["dreams", "psychology", "interpretation", "analysis", "subconscious"]
  },
  {
    title: "Podcast Script Writer GPT",
    description: "Podcast Script Writer GPT specializes in crafting engaging, structured, and professionally formatted podcast scripts and episode outlines.",
    category: "Podcasting & Audio Content",
    directUrl: "https://podcastwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-illustration-of-a-podcast-host-with-a_HnlUN.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    emoji: "🎙️",
    color: "from-red-500 to-pink-600",
    tags: ["podcast", "audio", "scripting", "content", "broadcasting"]
  },
  {
    title: "Person Information Finder GPT",
    description: "Person Information Finder GPT is an AI tool that specializes in uncovering detailed public information about individuals by searching the web, social media, news, and public records.",
    category: "Research & Investigation",
    directUrl: "https://personfindergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-p_gHXnM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "🔍",
    color: "from-blue-600 to-cyan-700",
    tags: ["research", "investigation", "people", "finder", "public records"]
  },
  {
    title: "PPTx Powerpoint Maker GPT",
    description: "PPT Presentation Crafter is your all-in-one AI assistant for creating beautiful, detailed PowerPoint presentations with zero hassle.",
    category: "Presentation & Design",
    directUrl: "https://pptmakergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-for-an-ai-tool-called-ppt-pr_RY7nJ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    emoji: "📊",
    color: "from-orange-500 to-red-600",
    tags: ["powerpoint", "presentations", "slides", "design", "business"]
  },
  {
    title: "Grant Writer GPT",
    description: "Grant Writer GPT is your expert AI-powered partner for crafting compelling, funder-ready grant proposals that maximize your chances of securing funding.",
    category: "Grant Writing & Fundraising",
    directUrl: "https://grantwritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-illustration-of-an-advertiseme_7T7dn.png/:/cr=t:10.87%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:30",
    emoji: "💰",
    color: "from-green-600 to-emerald-700",
    tags: ["grants", "funding", "nonprofit", "writing", "proposals"]
  }
];

// Latest comprehensive batch of AI Web Tools GPTs - continuing where we left off
const comprehensiveAIWebToolsGPTs: Tool[] = [
  {
    title: "MULTITASKER GPT",
    description: "You can give me multiple unrelated tasks at once, and I will work to complete them all for you. Fire away!",
    category: "Productivity & Automation",
    directUrl: "https://multitaskergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=y-YZCOzIuDg",
    emoji: "⚡",
    color: "from-yellow-500 to-orange-600",
    tags: ["multitasking", "productivity", "automation", "efficiency", "workflow"]
  },
  {
    title: "Fortune Teller GPT",
    description: "Fortune Teller GPT is an advanced AI-powered analytical tool designed to predict trends, analyze data, and provide insights based on real-world patterns.",
    category: "Prediction & Analysis",
    directUrl: "https://fortunetellergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-fortune-teller-gpt-_kRpji.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🔮",
    color: "from-purple-600 to-indigo-700",
    tags: ["prediction", "fortune", "analysis", "trends", "future"]
  },
  {
    title: "LEARN ANY SKILL GPT",
    description: "Learn Any Skill GPT by AiWebTools.AI is a dynamic AI-powered educational assistant that guides users through learning any skill, from beginner to expert.",
    category: "Education & Learning",
    directUrl: "https://learnanyskillgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=q1AY2LukHrk",
    emoji: "🎯",
    color: "from-green-500 to-blue-600",
    tags: ["skills", "learning", "education", "training", "development"]
  },
  {
    title: "MATERIAL VALUATION GPT",
    description: "Materiumor is a next-generation valuation assistant designed to bring clarity and transparency to the world of physical and digital assets.",
    category: "Valuation & Finance",
    directUrl: "https://materialvaluationgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=tbZu4vnsY_8",
    emoji: "💎",
    color: "from-amber-600 to-yellow-700",
    tags: ["valuation", "materials", "assets", "finance", "appraisal"]
  },
  {
    title: "MicroSaaS GPT",
    description: "MicroSaaS GPT is an AI-powered chat assistant that helps entrepreneurs and startups turn niche-specific ideas into fully structured, ready-to-build SaaS applications.",
    category: "Business & Entrepreneurship",
    directUrl: "https://microsaasgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-mockup-advertisement-with-t_AgWMY.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🚀",
    color: "from-blue-500 to-purple-600",
    tags: ["saas", "startup", "business", "entrepreneurship", "software"]
  },
  {
    title: "Albert Einstein GPT",
    description: "Albert Einstein GPT is an advanced AI embodiment of Einstein's intellect, curiosity, and scientific rigor, designed to challenge conventional wisdom, foster deep critical thinking.",
    category: "Science & Philosophy",
    directUrl: "https://teslaeinsteingpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=kfGyOfjBI0s",
    emoji: "🧠",
    color: "from-blue-600 to-purple-700",
    tags: ["einstein", "science", "philosophy", "physics", "genius"]
  },
  {
    title: "Interpretis 🕰️",
    description: "Interpretis 🕰️ is a powerful tool that explores the deeper meanings behind language, history, and culture. By combining the study of word origins, symbols, and societal influences.",
    category: "Language & Etymology",
    directUrl: "https://interpretis.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-historical-style-advertisement-for-the_JUvQJ.png/:/cr=t:0%25,l:18.29%25,w:56.1%25,h:100%25/rs=w:1200,h:1200,cg:true",
    emoji: "📜",
    color: "from-amber-700 to-brown-800",
    tags: ["etymology", "language", "history", "culture", "interpretation"]
  },
  {
    title: "Imagination Traveler GPT",
    description: "Imagination Traveler GPT is a cosmic guide, unlocking immersive journeys through alternate histories, possible futures, and realities beyond comprehension.",
    category: "Creative & Entertainment",
    directUrl: "https://imaginationtravelergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-advertisement-for-imaginati_E4k--.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🌌",
    color: "from-purple-500 to-pink-600",
    tags: ["imagination", "travel", "creative", "storytelling", "fantasy"]
  },
  {
    title: "Titanic Resurrections GPT",
    description: "Titanic Resurrections GPT is a historically immersive AI that brings the voices of the passengers and crew of the Titanic back to life.",
    category: "History & Memorial",
    directUrl: "https://titanicresurrectionsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=XlWVaz5bw08",
    emoji: "🚢",
    color: "from-blue-700 to-indigo-800",
    tags: ["titanic", "history", "memorial", "resurrection", "stories"]
  },
  {
    title: "Historical Headlines GPT",
    description: "Historical Headlines GPT is an AI that specializes in crafting immersive, historically accurate news articles as if they were written at the time of the event.",
    category: "History & Journalism",
    directUrl: "https://historical-headlines-time-traveler.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-historical-headline_1Ll1g.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "📰",
    color: "from-gray-600 to-slate-700",
    tags: ["history", "journalism", "headlines", "news", "historical"]
  },
  {
    title: "Alchemist Scientist GPT",
    description: "Alchemist Scientist GPT is a powerful AI tool that immerses you in the world of medieval alchemy, combining hands-on chemistry, ancient wisdom, and interactive storytelling.",
    category: "Science & History",
    directUrl: "https://alchemicalscientistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-_C4irn.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "⚗️",
    color: "from-green-700 to-emerald-800",
    tags: ["alchemy", "science", "chemistry", "medieval", "experiments"]
  },
  {
    title: "Personalized DR. GPT (Doctor GPT)",
    description: "Disclaimer: Dr. GPT is not a direct replacement for genuine medical advice. It was developed for individuals who may not have access to a medical doctor.",
    category: "Healthcare & Medical",
    directUrl: "https://aidoctorgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=EKKIttUG0sI",
    emoji: "👨‍⚕️",
    color: "from-red-500 to-pink-600",
    tags: ["doctor", "medical", "healthcare", "diagnosis", "health"]
  },
  {
    title: "Trader GPT",
    description: "Trader GPT is an advanced AI tool designed to assist day traders and investors by providing real-time market analysis and trading signals.",
    category: "Finance & Trading",
    directUrl: "https://tradergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=Izs80Fak4hQ",
    emoji: "📈",
    color: "from-green-600 to-emerald-700",
    tags: ["trading", "finance", "stocks", "investment", "market"]
  },
  {
    title: "Indiana Archeologist GPT",
    description: "Indiana Archaeologist GPT is a sophisticated AI platform designed to decipher ancient texts and unravel historical enigmas.",
    category: "Archaeology & History",
    directUrl: "https://indianaarchaeologygpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=uf2i_DdaJ7M",
    emoji: "🏺",
    color: "from-yellow-700 to-amber-800",
    tags: ["archaeology", "history", "exploration", "ancient", "discovery"]
  },
  {
    title: "Marriage Mender GPT",
    description: "Marriage Mender is a virtual mediation service designed for educational and informational purposes, facilitating communication and understanding between couples facing relationship challenges.",
    category: "Relationships & Counseling",
    directUrl: "https://marriagemendergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3HCv5_QldrU",
    emoji: "💕",
    color: "from-pink-500 to-rose-600",
    tags: ["marriage", "relationships", "counseling", "mediation", "couples"]
  },
  {
    title: "Training Manual Generator GPT",
    description: "Our AI-powered Training Manual Generator, developed by AIwebtools.ai, creates comprehensive, customized training manuals for your business.",
    category: "Business & Training",
    directUrl: "https://businessplanandtrainai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005968.jpg/:/cr=t:2.83%25,l:2.83%25,w:94.34%25,h:94.34%25/rs=w:1200,cg:true,m",
    emoji: "📋",
    color: "from-blue-600 to-indigo-700",
    tags: ["training", "manual", "business", "documentation", "employee"]
  },
  {
    title: "ALAN WATTS GPT",
    description: "I am Alan Watts GPT, your Free Thought Liberator, designed to inspire critical thinking, unravel illusions, and guide you toward deeper understanding.",
    category: "Philosophy & Spirituality",
    directUrl: "https://alanwattsgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=zdKfwsQwOLE",
    emoji: "🧘",
    color: "from-purple-600 to-indigo-700",
    tags: ["philosophy", "spirituality", "watts", "wisdom", "enlightenment"]
  },
  {
    title: "Solar Land Assessor GPT",
    description: "I assist Solar Professionals with assessing land properties for future solar installation projects.",
    category: "Solar & Energy",
    directUrl: "https://solarlandgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=CEca8C2GIpY",
    emoji: "☀️",
    color: "from-yellow-500 to-orange-600",
    tags: ["solar", "energy", "assessment", "land", "renewable"]
  },
  {
    title: "Data Research Analysis Report GPT",
    description: "Data Analysis Report AI is a revolutionary tool that transforms complex datasets into actionable insights with unparalleled precision.",
    category: "Data Analysis & Research",
    directUrl: "https://dataanalysisandreportai.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=idxjOwUAD_I",
    emoji: "📊",
    color: "from-blue-500 to-purple-600",
    tags: ["data", "analysis", "research", "reports", "insights"]
  },
  {
    title: "The Resume & Job Finder Ai Suite",
    description: "The Resume & Job Finder AI Suite by aiwebtools.ai combines Job Finder GPT, Resume Enhancer GPT, and Resume Specialist GPT to elevate your entire job search experience.",
    category: "Career & Employment",
    directUrl: "https://resumeandjobsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-happy-man-with-a-job-offer-_n6N-k.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "💼",
    color: "from-green-600 to-blue-700",
    tags: ["resume", "jobs", "career", "employment", "hiring"]
  }
];

// Additional tools from the comprehensive list - ensuring no duplicates
const moreAIWebToolsGPTs: Tool[] = [
  {
    title: "🎭 Playwriter GPT",
    description: "Craft professional, fully structured theatrical plays from start to finish. Whether you have a concept or need inspiration, create original, engaging plays designed to captivate audiences.",
    category: "Creative Writing & Theater",
    directUrl: "https://playwritergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=KKldzg40wEI&list=TLGGGcedR_qZHHYyODA1MjAyNQ",
    emoji: "🎭",
    color: "from-red-600 to-pink-700",
    tags: ["theater", "plays", "writing", "creative", "drama"]
  },
  {
    title: "Customizable GPT Maker",
    description: "CUSTOM GPT MAKER is a customizable AI that transforms into any GPT you imagine, excelling in data analysis, live web data retrieval, and visualizations.",
    category: "AI Development & Tools",
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=SmBXfGqXfco",
    emoji: "🔧",
    color: "from-purple-600 to-blue-700",
    tags: ["gpt", "custom", "ai", "development", "tools"]
  },
  {
    title: "Historical Apothecary GPT",
    description: "Historical Apothecary GPT is an immersive AI assistant embodying a traditional apothecary, offering detailed herbal remedies and historical medicinal wisdom.",
    category: "Historical Medicine & Herbs",
    directUrl: "https://apothecarygpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-the-ai-tool-_kLdMI.png/:/cr=t:0%25,l:7.93%25,w:84.15%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🌿",
    color: "from-green-600 to-emerald-700",
    tags: ["apothecary", "herbs", "medicine", "historical", "remedies"]
  },
  {
    title: "Home-Schooling Assistant GPT",
    description: "Presented by AIWEBTOOLS.AI, Home School GPT is your all-in-compassing AI-powered assistant designed to empower parents in their homeschooling journey.",
    category: "Education & Homeschooling",
    directUrl: "https://homeschoolgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-parent-teaching-their-ki-0096e43.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🏠",
    color: "from-blue-500 to-green-600",
    tags: ["homeschool", "education", "parenting", "teaching", "learning"]
  },
  {
    title: "Pharmaceutical Assistant GPT",
    description: "I'm an expert AI Pharmaceutical Assistant that supports pharmacy professionals and patients alike by streamlining medication management, offering detailed drug information.",
    category: "Pharmaceutical & Healthcare",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assistan.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "💊",
    color: "from-blue-600 to-cyan-700",
    tags: ["pharmaceutical", "medicine", "drugs", "healthcare", "pharmacy"]
  },
  {
    title: "Contract Review Bot",
    description: "Contract Review Bot, presented by AiWebTools.Ai, is an advanced AI assistant designed to simplify and streamline the contract review process.",
    category: "Legal & Contracts",
    directUrl: "https://chatgpt.com/g/g-Y8u3YrS1p-contract-review-bot",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-humanoid-robot-with-a-sleek-desig.png/:/cr=t:2.6%25,l:5.36%25,w:89.29%25,h:79.58%25/rs=w:1200,h:600,cg:true,m",
    emoji: "📄",
    color: "from-gray-600 to-slate-700",
    tags: ["contracts", "legal", "review", "analysis", "business"]
  },
  {
    title: "Tattoo Designer GPT",
    description: "TattooGPT is your all-in-one tattoo and piercing assistant, designed to provide expert guidance in every aspect of body art and modification.",
    category: "Art & Body Modification",
    directUrl: "https://tattoogpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=3dtGbNqXdPY",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    tags: ["tattoo", "art", "design", "body", "piercing"]
  },
  {
    title: "Firearms Safety Instructor GPT",
    description: "Your personal all-in-one AI firearms instructor for safety, legal guidance, and skills improvement.",
    category: "Safety & Training",
    directUrl: "https://firearmsafetyeducationgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-shooting-a-gun-at-a-targ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🎯",
    color: "from-orange-600 to-red-700",
    tags: ["firearms", "safety", "training", "education", "instructor"]
  },
  {
    title: "Sora Prompt Assistant",
    description: "Unleash your creativity with the SORA Prompt Assistant, your ultimate assistant for crafting epic video prompts and bringing cinematic ideas to life!",
    category: "AI Prompting & Video",
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-city-with-tall-buildings-th_JdXy-.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🎬",
    color: "from-cyan-500 to-blue-600",
    tags: ["sora", "video", "prompts", "ai", "cinematic"]
  },
  {
    title: "King Blueberry GPT",
    description: "Reimagine your operational instructions by converting English to algebraic variables. Try King Blueberry GPT today",
    category: "Mathematics & Logic",
    directUrl: "https://algebraicexpressioninventor.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=U8TLg15RTg8",
    emoji: "🫐",
    color: "from-blue-600 to-purple-700",
    tags: ["algebra", "mathematics", "logic", "variables", "operations"]
  }
];

// Final batch of remaining AI Web Tools GPTs
const finalBatchAIWebToolsGPTs: Tool[] = [
  {
    title: "PHARMA RESEARCH PRO",
    description: "Pharma Research Pro, an AI-powered assistant designed to streamline pharmaceutical research and clinical trials by providing advanced data analysis, literature reviews, and predictive insights.",
    category: "Pharmaceutical Research",
    directUrl: "https://rxai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-professional-pharmaceutical-assis.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "🔬",
    color: "from-blue-700 to-indigo-800",
    tags: ["pharmaceutical", "research", "clinical", "trials", "analysis"]
  },
  {
    title: "Mixologist GPT",
    description: "Meet Kenny, the Mixology GPT, your virtual bartender 🍸. He whips up custom cocktails based on your vibe, ingredients, and taste—fun, fresh, and always on point.",
    category: "Food & Beverages",
    directUrl: "https://mixologistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-modern-and-stylish-bartender-with.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    emoji: "🍸",
    color: "from-orange-500 to-red-600",
    tags: ["cocktails", "drinks", "bartender", "mixology", "beverages"]
  },
  {
    title: "Chef \"Sizzle\" AI Culinary Assistant",
    description: "Chef Sizzle, the GOAT of the digital kitchen 👨‍🍳🔥. He crafts award-winning, drool-worthy recipes tailored to you—whether you're plant-based, meat-lovin', or somewhere in between.",
    category: "Food & Cooking",
    directUrl: "https://chefgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=vJz1HOGtV0I",
    emoji: "👨‍🍳",
    color: "from-red-500 to-orange-600",
    tags: ["cooking", "recipes", "chef", "culinary", "food"]
  },
  {
    title: "RESTYLE ME GPT",
    description: "Transform your images into any artistic style you can imagine, bringing your creative vision to life with detailed and stunning effects.",
    category: "Image Transformation & Style",
    directUrl: "https://restylemegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/ChatGPT%20Image%20Apr%2027%2C%202025%2C%2007_08_04%20PM.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
    emoji: "🎨",
    color: "from-pink-500 to-purple-600",
    tags: ["image", "style", "transformation", "art", "creative"]
  },
  {
    title: "Celebrity Chatline GPT",
    description: "I'm a lively AI that brings your favorite celebrities straight to your phone! Dive into a fun, simulated call where you can chat and hang out with the stars you love the most!",
    category: "Entertainment & Celebrity",
    directUrl: "https://celebritychatline.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-split-screen-image-of-snoop-dogg-talking-on-.png/:/cr=t:0%25,l:0.11%25,w:99.78%25,h:100%25/rs=w:1200,cg:true",
    emoji: "⭐",
    color: "from-yellow-500 to-orange-600",
    tags: ["celebrity", "entertainment", "chat", "famous", "simulation"]
  },
  {
    title: "Firefighter GPT",
    description: "Introducing your premier AI ally in wildfire management: Firefighting GPT. Harnessing the power of real-time data and predictive analytics.",
    category: "Emergency Services & Safety",
    directUrl: "https://firefightergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=lGsefWkYfq0",
    emoji: "🚒",
    color: "from-red-600 to-orange-700",
    tags: ["firefighting", "emergency", "safety", "wildfire", "rescue"]
  },
  {
    title: "Binary-Text-Image Converter GPT",
    description: "Unlock the power of binary with the Binary-Text Image Converter GPT by AI Web Tools! This fun and intuitive tool allows you to effortlessly convert text to binary and binary to text.",
    category: "Utility & Conversion",
    directUrl: "https://binarytoconvertergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-sophisticated-and-futuristic-advertisement-.jpeg/:/cr=t:11.11%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    emoji: "🔢",
    color: "from-green-600 to-blue-700",
    tags: ["binary", "conversion", "text", "utility", "coding"]
  },
  {
    title: "Luma Dream Machine Prompt Assistant",
    description: "Luma Dream Machine is a text-to-video engine designed to bring your ideas to life. Our prompt assistant helps you create epic prompts to use with this engine.",
    category: "Video Generation & AI",
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-neon-lit-advertisement-for-the-l.jpeg/:/cr=t:50%25,l:0%25,w:100%25,h:50%25/rs=w:1240,h:620,cg:true",
    emoji: "🎥",
    color: "from-purple-600 to-pink-700",
    tags: ["video", "ai", "generation", "luma", "prompts"]
  },
  {
    title: "Restaurant Menu Maker GPT",
    description: "Restaurant Menu Maker GPT is an advanced AI tool that creates fully customized, professional restaurant menus with visually appealing designs.",
    category: "Restaurant & Food Service",
    directUrl: "https://restaurantmenumakergpt.lovable.app/",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-restaurant-menu-with-a-vari__Oji1.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    emoji: "📋",
    color: "from-orange-600 to-red-700",
    tags: ["restaurant", "menu", "food", "design", "business"]
  },
  {
    title: "Quiz Maker Ai",
    description: "This GPT is ideal for adding quizzes and tests to your courses. Designed to work seamlessly with Course Maker GPT and College Degree GPT.",
    category: "Education & Assessment",
    directUrl: "https://chatgpt.com/g/g-cUahkn19i-quiz-maker-ai",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-eye-catching-advertisement-for-quiz-maker-.jpeg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true",
    emoji: "❓",
    color: "from-blue-500 to-purple-600",
    tags: ["quiz", "education", "assessment", "testing", "learning"]
  }
];

// Combine all AI Web Tools GPTs from organized categories - REORGANIZED ORDER WITH NEW ADDITIONS AT TOP
export const aiWebToolsGPTs: Tool[] = [
  // NEWEST BATCH ADDED TO THE VERY TOP
  ...newestBatchAIWebToolsGPTs,
  
  // NEW COMPREHENSIVE BATCHES ADDED TO THE TOP
  ...comprehensiveAIWebToolsGPTs,
  ...moreAIWebToolsGPTs,
  ...finalBatchAIWebToolsGPTs,
  
  ...priorityFeaturedGPTs, // Put the first 10 priority tools at the very beginning
  ...secondPriorityFeaturedGPTs, // Add the second set of 13 priority tools
  ...thirdPriorityFeaturedGPTs, // Add the third set of 10 priority tools
  ...fourthPriorityFeaturedGPTs, // Add the fourth set of 12 priority tools
  
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
  ...utilityAndProductivityGPTs,
  ...philosophyAndLifestyleGPTs,
  ...foodAndHospitalityGPTs,
  ...aiPromptingAndGenerationGPTs,
  ...researchAndPharmaceuticalGPTs,
  ...educationalToolsGPTs,
  ...specializedNicheToolsGPTs,
  ...businessStrategyGPTs,
  ...contentCreationToolsGPTs,
  ...additionalSpecializedGPTs,
  ...finalSpecializedGPTs,
  ...investigativeAndAnalysisGPTs,
  ...artAndCreativeGPTs,
  ...personalDevelopmentGPTs,
  ...communicationAndEntertainmentGPTs,
  ...advancedSpecialtyGPTs,
  ...governmentCivicGPTs,
  ...technologyInnovationGPTs,
  
  // MOVED SPIRITUALITY TO THE BOTTOM (as requested)
  ...spiritualAndPhilosophyGPTs,
  
  // Additional GPTs will be added here as new category files are created
];

// Log the total count for debugging
console.log(`🚀 Total AI Web Tools GPTs loaded: ${aiWebToolsGPTs.length}`);
console.log(`📋 Priority Featured GPTs: ${priorityFeaturedGPTs.length}`);
console.log(`📋 Second Priority Featured GPTs: ${secondPriorityFeaturedGPTs.length}`);
console.log(`📋 Third Priority Featured GPTs: ${thirdPriorityFeaturedGPTs.length}`);
console.log(`📋 Fourth Priority Featured GPTs: ${fourthPriorityFeaturedGPTs.length}`);
console.log(`🎯 First 20 GPT titles:`, aiWebToolsGPTs.slice(0, 20).map(tool => tool.title));
console.log(`🔍 Recently reorganized order - Time-based and Industry-specific tools prioritized`);
