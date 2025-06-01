
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

// Combine all AI Web Tools GPTs from organized categories - REORGANIZED ORDER WITH NEW ADDITIONS AT TOP
export const aiWebToolsGPTs: Tool[] = [
  // NEWEST BATCH ADDED TO THE VERY TOP
  ...newestBatchAIWebToolsGPTs,
  
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
  
  // UTILITY AND SPECIALIZED CATEGORIES
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
  ...spiritualAndPhilosophyGPTs
];
