import { Tool } from "@/types/tools";
import {
  businessTools,
  aiAssistants,
  videoTools,
  aiArtTools,
  audioMusicTools,
  contentCreationTools,
  aiToolsAndDevelopment,
  specializedTools
} from './tools';
import { BookOpen, Youtube } from "lucide-react";

// Additional tools that don't fit into specific categories yet
const additionalTools: Tool[] = [
  {
    icon: Youtube,
    title: "\"IF AI RULED THE WORLD\" - AI SIMULATION GPT",
    description: "Simulate scenarios where AI governs the world. Explore futuristic governance models, societal changes, and technological implications.",
    emoji: "🤖",
    color: "from-purple-500 to-pink-500",
    videoUrl: "https://www.youtube.com/watch?v=93M9ZyhpmFM",
    directUrl: "https://ifairuledtheworldgpt.lovable.app/?via=aiwebtools",
    tags: ["AI", "simulation", "future", "governance"],
    category: "Future Studies"
  },
  {
    icon: BookOpen,
    title: "Universal Basic Income Strategist GPT",
    description: "Analyze and strategize Universal Basic Income implementations. Research UBI policies, economic impacts, and social welfare strategies.",
    emoji: "🏛️",
    color: "from-blue-500 to-green-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-the-ai-tool-ubi-str_22t4n.png/:/rs=w:600,cg:true,m/qt=q:30",
    directUrl: "https://ubigpt.lovable.app/?via=aiwebtools",
    tags: ["UBI", "economics", "policy", "social welfare"],
    category: "Government & Policy"
  },
  {
    icon: BookOpen,
    title: "Global Peace Restoration Strategist GPT",
    description: "Develop strategies for global peace and conflict resolution. Analyze international relations, peace-building processes, and diplomatic solutions.",
    emoji: "🕊️",
    color: "from-blue-500 to-white-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-earth-with-a-dark-blue-atmosp_Uq9U_.png/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300/qt=q:30",
    directUrl: "https://worldpeacegpt.lovable.app/?via=aiwebtools",
    tags: ["peace", "diplomacy", "conflict resolution", "international"],
    category: "Government & Policy"
  },
  {
    icon: Youtube,
    title: "BHUMAN – Avatars Creation For Outreach",
    description: "Create personalized AI avatars for outreach and communication. Generate realistic digital personas for marketing and engagement.",
    emoji: "👤",
    color: "from-purple-500 to-blue-500",
    videoUrl: "https://www.youtube.com/watch?v=W1WHD9IhGhs",
    directUrl: "https://app.bhuman.ai/?ref=zde0otr",
    tags: ["avatars", "outreach", "marketing", "personalization"],
    category: "Marketing Tools"
  },
  {
    icon: Youtube,
    title: "Merlin Ai",
    description: "AI-powered browser extension and productivity tool. Enhance your browsing experience with AI assistance for research and content creation.",
    emoji: "🧙‍♂️",
    color: "from-purple-500 to-blue-500",
    videoUrl: "https://www.youtube.com/watch?v=rDrG5DqCCgY",
    directUrl: "https://app.getmerlin.in/plans?ref=mte1mgu4",
    tags: ["browser extension", "productivity", "research", "AI assistant"],
    category: "Productivity"
  },
  {
    icon: BookOpen,
    title: "Cheatlayer Project Atlas (SWARM BETA)",
    description: "Automate complex workflows with AI-powered automation. Create sophisticated automation sequences without coding.",
    emoji: "🤖",
    color: "from-blue-500 to-purple-500",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377352898715062323/image.png?ex=6838a759&is=683755d9&hm=d32c66c79d433b9835b19ebebb6c63553d1647f77c44eb10217104d200df597c&",
    directUrl: "https://cheatlayer.com/?ref=zta2nth",
    tags: ["automation", "workflow", "no-code", "AI agents"],
    category: "Automation"
  },
  {
    icon: BookOpen,
    title: "Meshy Ai - TEXT TO 3D Generator",
    description: "Transform text descriptions into 3D models and objects. Create 3D assets, characters, and environments from simple text prompts. Use promo code AIWEBTOOLS for 20% off!",
    emoji: "🧊",
    color: "from-blue-500 to-purple-500",
    imageUrl: "https://cdn.discordapp.com/attachments/1150636600846450729/1377357834886582463/image.png?ex=6838abf1&is=68375a71&hm=8796d07ef297f42d59644ba648de8f8e892976312a6e04ec90242aea3c02c9ad&",
    directUrl: "https://www.meshy.ai/?via=aiwebtools",
    tags: ["3D generation", "text to 3D", "modeling", "assets"],
    category: "3D & AR/VR"
  },
  {
    icon: Youtube,
    title: "BotSonic",
    description: "Create intelligent chatbots and conversational AI solutions. Build custom AI assistants for customer service and engagement.",
    emoji: "🤖",
    color: "from-blue-500 to-green-500",
    videoUrl: "https://www.youtube.com/watch?v=CzQdnpFawKI",
    directUrl: "https://writesonic.com/botsonic?via=aiwebtools",
    tags: ["chatbots", "customer service", "conversation", "AI assistant"],
    category: "Customer Service"
  },
  {
    icon: BookOpen,
    title: "Restaurant Menu Maker GPT",
    description: "Create professional restaurant menus with AI assistance. Design appealing menu layouts, descriptions, and pricing strategies.",
    emoji: "🍽️",
    color: "from-orange-500 to-red-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-restaurant-menu-with-a-vari__Oji1.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true",
    directUrl: "https://restaurantmenumakergpt.lovable.app/",
    tags: ["restaurant", "menu", "food", "hospitality", "design", "culinary"],
    category: "Business Tools"
  },
  {
    icon: BookOpen,
    title: "Coloring Book Generator GPT",
    description: "Create engaging coloring books with AI assistance. Generate line art, themes, and educational coloring content for all ages.",
    emoji: "🎨",
    color: "from-yellow-500 to-pink-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-coloring-page-of-a-robot-with-a-human-like-b.png/:/cr=t:4.3%25,l:0.78%25,w:94.34%25,h:84.09%25/rs=w:1200,h:600,cg:true,m",
    directUrl: "https://coloringbookmaker.lovable.app/?via=aiwebtools",
    tags: ["coloring books", "children", "art", "creativity", "education", "drawing"],
    category: "Art & Design"
  },
  {
    icon: BookOpen,
    title: "PINOKIO.COMPUTER",
    description: "Run AI applications locally with easy installation and management. Access various AI tools through a unified desktop interface.",
    emoji: "🖥️",
    color: "from-blue-500 to-purple-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/blob.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1152,cg:true",
    directUrl: "https://pinokio.computer/",
    tags: ["local AI", "desktop", "installation", "management", "interface"],
    category: "AI Tools"
  }
];

// Combine all tools from different categories
export const allTools: Tool[] = [
  ...businessTools,
  ...aiAssistants,
  ...videoTools,
  ...aiArtTools,
  ...audioMusicTools,
  ...contentCreationTools,
  ...aiToolsAndDevelopment,
  ...specializedTools,
  ...additionalTools
];

// Create featured tools by selecting the first 6 tools
export const featuredTools: Tool[] = allTools.slice(0, 6);

// Helper function to search tools with enhanced keywords
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const term = searchTerm.toLowerCase();
  return tools.filter(tool => 
    tool.title.toLowerCase().includes(term) ||
    tool.description.toLowerCase().includes(term) ||
    tool.category?.toLowerCase().includes(term) ||
    tool.tags?.some(tag => tag.toLowerCase().includes(term)) ||
    // Enhanced search keywords
    (term.includes('video') && (tool.title.toLowerCase().includes('video') || tool.description.toLowerCase().includes('video') || tool.category === 'Video Tools')) ||
    (term.includes('music') && (tool.title.toLowerCase().includes('music') || tool.description.toLowerCase().includes('music') || tool.category === 'Audio & Music')) ||
    (term.includes('ai') && tool.title.toLowerCase().includes('ai')) ||
    (term.includes('gpt') && tool.title.toLowerCase().includes('gpt')) ||
    (term.includes('image') && (tool.title.toLowerCase().includes('image') || tool.description.toLowerCase().includes('image'))) ||
    (term.includes('business') && (tool.title.toLowerCase().includes('business') || tool.category === 'Business Tools')) ||
    (term.includes('art') && (tool.title.toLowerCase().includes('art') || tool.category === 'AI Art')) ||
    (term.includes('chat') && tool.title.toLowerCase().includes('chat')) ||
    (term.includes('legal') && (tool.title.toLowerCase().includes('legal') || tool.category === 'Legal')) ||
    (term.includes('audio') && (tool.category === 'Audio & Music' || tool.description.toLowerCase().includes('audio'))) ||
    (term.includes('writing') && tool.tags?.some(tag => tag.toLowerCase().includes('writing'))) ||
    (term.includes('content') && tool.tags?.some(tag => tag.toLowerCase().includes('content'))) ||
    (term.includes('generation') && tool.tags?.some(tag => tag.toLowerCase().includes('generation')))
  );
};

// Helper function to get categories with counts
export const getCategoriesWithCounts = (): Record<string, number> => {
  const categoryCounts: Record<string, number> = {};
  
  allTools.forEach(tool => {
    if (tool.category) {
      categoryCounts[tool.category] = (categoryCounts[tool.category] || 0) + 1;
    }
  });
  
  return categoryCounts;
};

// Helper function to get tools by category
export const getToolsByCategory = (category: string): Tool[] => {
  return allTools.filter(tool => tool.category === category);
};
