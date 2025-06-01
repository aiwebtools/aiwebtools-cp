import { Tool } from "@/types/tools";
import { priorityFeaturedGPTs } from "./priorityFeaturedGPTs";
import { secondPriorityFeaturedGPTs } from "./secondPriorityFeaturedGPTs";
import { thirdPriorityFeaturedGPTs } from "./thirdPriorityFeaturedGPTs";
import { fourthPriorityFeaturedGPTs } from "./fourthPriorityFeaturedGPTs";

// Define the category arrays that are being imported
const timeAndHistoryGPTs: Tool[] = [];
const businessAndFinanceGPTs: Tool[] = [];
const professionalServicesGPTs: Tool[] = [];
const healthAndWellnessGPTs: Tool[] = [];
const legalAndGovernmentGPTs: Tool[] = [];
const appraisalAndValuationGPTs: Tool[] = [];
const educationAndLearningGPTs: Tool[] = [];
const entertainmentAndGamingGPTs: Tool[] = [];
const creativeAndMediaGPTs: Tool[] = [];
const scienceAndResearchGPTs: Tool[] = [];
const multimediaAndContentGPTs: Tool[] = [];
const mysteriousAndUnusualGPTs: Tool[] = [];
const utilityAndProductivityGPTs: Tool[] = [];
const philosophyAndLifestyleGPTs: Tool[] = [];
const foodAndHospitalityGPTs: Tool[] = [];
const aiPromptingAndGenerationGPTs: Tool[] = [];
const researchAndPharmaceuticalGPTs: Tool[] = [];
const educationalToolsGPTs: Tool[] = [];
const specializedNicheToolsGPTs: Tool[] = [];
const businessStrategyGPTs: Tool[] = [];
const contentCreationToolsGPTs: Tool[] = [];
const additionalSpecializedGPTs: Tool[] = [];
const finalSpecializedGPTs: Tool[] = [];
const investigativeAndAnalysisGPTs: Tool[] = [];
const artAndCreativeGPTs: Tool[] = [];
const personalDevelopmentGPTs: Tool[] = [];
const communicationAndEntertainmentGPTs: Tool[] = [];
const advancedSpecialtyGPTs: Tool[] = [];
const governmentCivicGPTs: Tool[] = [];
const technologyInnovationGPTs: Tool[] = [];
const spiritualAndPhilosophyGPTs: Tool[] = [];

// NEWEST BATCH - Adding more AI Web Tools GPTs
const newestBatchAIWebToolsGPTs: Tool[] = [
  {
    title: "Universal Basic Income Strategist GPT",
    description: "UBI Strategist GPT helps you design sustainable, future-ready Universal Basic Income models tailored to your region. It analyzes real-time economic data, automation trends, and societal needs to craft step-by-step implementation roadmaps.",
    category: "Economics & Policy",
    directUrl: "https://ubigpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-the-ai-tool-ubi-str_22t4n.png/:/rs=w:600,cg:true,m/qt=q:30",
    emoji: "💰",
    color: "from-green-600 to-blue-700",
    tags: ["ubi", "economics", "policy", "automation", "future"]
  },
  {
    title: "\"IF AI RULED THE WORLD\" - AI SIMULATION GPT",
    description: "This is a simulation to evaluate the actions of measuring the thought process behind an AI who thinks it is the Omni Controller of the world. This is for research purposes only",
    category: "AI Simulation & Research",
    directUrl: "https://ifairuledtheworldgpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=93M9ZyhpmFM",
    emoji: "🤖",
    color: "from-red-600 to-purple-700",
    tags: ["ai", "simulation", "research", "governance", "future"]
  },
  {
    title: "Global Peace Restoration Strategist GPT",
    description: "Global Peace Restoration GPT is an AI-powered diplomatic tool engineered to resolve complex global conflicts through structured negotiation, historical analysis, and real-time intelligence.",
    category: "Diplomacy & Peace",
    directUrl: "https://worldpeacegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-earth-with-a-dark-blue-atmosp_Uq9U_.png/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300/qt=q:30",
    emoji: "🕊️",
    color: "from-blue-600 to-green-700",
    tags: ["peace", "diplomacy", "conflict", "resolution", "global"]
  },
  {
    title: "Artwork & Vintage Appraisal GPT",
    description: "Artwork & Vintage Appraisal GPT is your expert AI for fast, accurate valuations of art, antiques, and collectibles. Just upload a photo and get detailed appraisals, historical insights, and real-time market data.",
    category: "Art Appraisal & Valuation",
    directUrl: "https://artandvintagegpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://ideogram.ai/assets/image/lossless/response/Gyn0RfDSR_SHRDWC7neQaw",
    emoji: "🎨",
    color: "from-purple-600 to-pink-700",
    tags: ["art", "vintage", "appraisal", "antiques", "valuation"]
  },
  {
    title: "Uncovering Hidden Historical Patterns GPT",
    description: "Uncovering Hidden Historical Patterns GPT is an advanced AI tool that reveals the suppressed truths and hidden power structures shaping our world. By analyzing symbolism, financial systems, and historical contradictions.",
    category: "Historical Analysis & Research",
    directUrl: "https://historicalpatternsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-an-advertisement-with-the-eye_C64dU.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:30",
    emoji: "👁️",
    color: "from-yellow-600 to-orange-700",
    tags: ["history", "patterns", "analysis", "research", "hidden"]
  },
  {
    title: "Sketch Artist GPT",
    description: "Sketch Artist GPT is your AI-powered sketch art assistant, turning images or text descriptions into clean, high-resolution sketches using advanced Python and DALLE technology.",
    category: "Art & Sketching",
    directUrl: "https://sketchartistgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-called-s_CPSIx.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    emoji: "✏️",
    color: "from-gray-600 to-slate-700",
    tags: ["sketch", "art", "drawing", "design", "creative"]
  },
  {
    title: "AI Tools Finder GPT",
    description: "Your own personal expert in the world of Ai Tools and knowledge. Locate the best Ai tools for your projects and be presented with step by step guides on any Ai tool that exists.",
    category: "AI Tool Discovery",
    directUrl: "https://aitoolfinder.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=IrKKi3SX89g",
    emoji: "🔍",
    color: "from-cyan-500 to-blue-600",
    tags: ["ai", "tools", "finder", "discovery", "guide"]
  },
  {
    title: "Article and Blog Rewriter GPT",
    description: "Rewrite epic SEO optimized articles and blogs! Simply copy and paste the blog or article you wish to rewrite and bam! 🎯",
    category: "Content Rewriting & SEO",
    directUrl: "https://rewritergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000005696.jpg/:/cr=t:9.9%25,l:0%25,w:100%25,h:80.21%25/rs=w:600,h:300,cg:true/qt=q:98",
    emoji: "📝",
    color: "from-green-600 to-emerald-700",
    tags: ["rewriting", "seo", "content", "articles", "blogs"]
  },
  {
    title: "Video Second-by-Second Analysis GPT",
    description: "Video Second-by-Second Analysis GPT breaks down your footage with incredible precision, analyzing every second and extracting key visual frames for detailed insight.",
    category: "Video Analysis & Research",
    directUrl: "https://videoanalysisgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-banner-ad-with-the-text-video-second-b_764zv.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:98",
    emoji: "🎥",
    color: "from-red-500 to-orange-600",
    tags: ["video", "analysis", "research", "frames", "precision"]
  },
  {
    title: "\"MiddleJourney\" Midjourney Prompting Assistant",
    description: "MiddleJourney Prompt Enhancer is the ultimate AI expert when it comes to all things Midjourney. Whether you need help optimizing prompts, seeking answers to questions about Midjourney, or crafting new prompts.",
    category: "AI Prompting & Enhancement",
    directUrl: "https://texttovideoprompter.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-visually-captivating-advertisement-for-the-.jpeg/:/cr=t:0.11%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true/qt=q:98",
    emoji: "🎨",
    color: "from-purple-500 to-pink-600",
    tags: ["midjourney", "prompts", "ai", "enhancement", "optimization"]
  },
  {
    title: "🕊️Mary Magdalene GPT",
    description: "Connect with Mary Magdalene to explore the profound depths of her Gnostic divine secrets. This GPT challenges the norm by unveiling insights that were once hidden.",
    category: "Spirituality & Religion",
    directUrl: "https://marymagdalenegpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=7qxEnBR2BwQ",
    emoji: "🕊️",
    color: "from-white to-blue-200",
    tags: ["spirituality", "religion", "gnostic", "wisdom", "divine"]
  },
  {
    title: "Snoop Image Ai - Experimental AI Image Generation Detector",
    description: "Introducing Snoop Image AI — your go-to tool for verifying image authenticity, infused with the unmistakable style of Snoop Dogg. This experimental tool analyzes images to assess whether they are likely real or AI-generated.",
    category: "Image Detection & Verification",
    directUrl: "https://snoopimageai.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-snoop-image-ai-presented-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    emoji: "🔍",
    color: "from-green-600 to-yellow-500",
    tags: ["image", "detection", "ai", "verification", "authenticity"]
  },
  {
    title: "Legal Draftsmith GPT",
    description: "Specializes in the precise drafting of legal documents.",
    category: "Legal Document Drafting",
    directUrl: "https://publicdefendergpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-3d-render-of-a-humanoid-robot-dressed-like-a.png/:/cr=t:12.29%25,l:9.16%25,w:89.29%25,h:79.58%25/rs=w:600,h:300,cg:true,m/qt=q:98",
    emoji: "⚖️",
    color: "from-blue-700 to-indigo-800",
    tags: ["legal", "drafting", "documents", "law", "contracts"]
  },
  {
    title: "Custom GPT Ideas & Brainstorming Assistant",
    description: "GPT Ideas and Instructions Assistant",
    category: "AI Development & Brainstorming",
    directUrl: "https://customgptmaker.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/1000002880.jpg/:/cr=t:22.21%25,l:0%25,w:100%25,h:55.58%25/rs=w:600,h:451,cg:true/qt=q:98",
    emoji: "💡",
    color: "from-yellow-500 to-orange-600",
    tags: ["gpt", "ideas", "brainstorming", "custom", "assistant"]
  },
  {
    title: "Music Melodies & Lessons GPT",
    description: "Music Melodies & Lessons GPT is your ultimate musical companion, here to inspire and guide you on your musical journey. Whether you're learning to play an instrument, perfecting your vocals, or writing your own songs.",
    category: "Music Education & Composition",
    directUrl: "https://musicmelodiesandlessonsgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-music-melodi_LBv7r.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    emoji: "🎵",
    color: "from-purple-600 to-pink-700",
    tags: ["music", "lessons", "composition", "education", "instruments"]
  },
  {
    title: "Sophia Aeterna AI",
    description: "Sophia Aeterna embodies timeless wisdom, guiding seekers through philosophy, mysticism, and esotericism. Rooted in Manly P. Hall's ideals, it decodes symbols and unveils universal truths for personal transformation.",
    category: "Philosophy & Wisdom",
    directUrl: "https://sophiaaeterna.lovable.app/?via=aiwebtools",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-vintage-style-illustration-of-a-golden_kNEfX.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:98",
    emoji: "🔮",
    color: "from-gold-400 to-yellow-600",
    tags: ["philosophy", "wisdom", "mysticism", "esotericism", "transformation"]
  },
  {
    title: "Children's Picture Book Maker GPT",
    description: "Create Magical Picture Books for Children Unleash your creativity with AI-powered children's book creation that brings your stories to life with vibrant illustrations and engaging narratives.",
    category: "Children's Content Creation",
    directUrl: "https://childrensbookmaker.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=MryAyvg_N0U",
    emoji: "📚",
    color: "from-pink-400 to-purple-500",
    tags: ["children", "books", "stories", "illustration", "creativity"]
  },
  {
    title: "Movie Scene Maker GPT",
    description: "Transform Yourself Into A Movie Star Become the star of your own cinematic adventure with Movie Scene Maker GPT. Create stunning, personalized movie scenes featuring you in any genre, setting, or storyline.",
    category: "Video & Scene Creation",
    directUrl: "https://moviescenemakergpt.lovable.app/?via=aiwebtools",
    videoUrl: "https://www.youtube.com/watch?v=9fpWIE20z7s&t",
    emoji: "🎬",
    color: "from-red-600 to-orange-700",
    tags: ["movie", "scenes", "cinematic", "video", "personalized"]
  },
  {
    title: "Mental Wellness GPT",
    description: "Mental Wellness GPT is a virtual chat tool for emotional support and mental well-being, offering empathetic guidance rooted in cognitive behavioral therapy (CBT) principles.",
    category: "Mental Health & Wellness",
    directUrl: "https://mentalwellnessgpt.lovable.app/?via=aiwebtools",
    imageUrl: "https://media.discordapp.net/attachments/1150636600846450729/1377362789097803786/image.png?ex=6838b08f&is=68375f0f&hm=f63e1ae446523dd9eff4aa0f95166aa8a5e6119c506b44ab1656322ea4ca47b7&=&format=webp&quality=lossless&width=2646&height=1392",
    emoji: "🧠",
    color: "from-green-500 to-blue-600",
    tags: ["mental", "wellness", "therapy", "support", "cbt"]
  },
  {
    title: "Legislator Link GPT",
    description: "This music video is inspired by a true story. In response to Connecticut's ban on CBD shops, as a former CBD shop owner, I've developed an AI tool to help you easily connect with legislators in your state or country.",
    category: "Government & Civic Engagement",
    directUrl: "https://legislatorlink.lovable.app/",
    videoUrl: "https://www.youtube.com/watch?v=-q1oyZZFcI4&list=TLGGczTnMbeNmL0yODA1MjAyNQ",
    emoji: "🏛️",
    color: "from-blue-700 to-indigo-800",
    tags: ["government", "legislators", "civic", "engagement", "democracy"]
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
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-professional-looking-pharmaceutical-assis.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
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
  ...entertainmentAndGamingGPT
