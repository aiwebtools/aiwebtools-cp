import { Tool } from "@/types/tools";
import {
  businessTools,
  aiAssistants,
  videoTools,
  aiArtTools,
  audioMusicTools,
  contentCreationTools,
  aiToolsAndDevelopment,
  specializedTools,
  aiDevelopmentAndPlatforms,
  writingAndContent,
  imageAndDesign,
  businessAndProductivity,
  specializedAndNiche
} from './tools';
import { BookOpen, Youtube } from "lucide-react";

// Additional standalone tools that may need separate categorization
const additionalTools: Tool[] = [
  {
    icon: Youtube,
    title: "BHUMAN – Avatars Creation For Outreach",
    description: "Generates hyper-personalized video messages by cloning your face and voice for marketing and outreach campaigns.",
    emoji: "👤",
    color: "from-purple-500 to-blue-500",
    videoUrl: "https://www.youtube.com/watch?v=W1WHD9IhGhs",
    directUrl: "https://app.bhuman.ai/?ref=zde0otr",
    tags: ["avatars", "outreach", "marketing", "personalization", "video cloning"],
    category: "Video & Animation Creation"
  },
  {
    icon: Youtube,
    title: "AI Tools Finder GPT",
    description: "Discover and find the perfect AI tools for your needs. Search through comprehensive databases of AI applications and services.",
    emoji: "🛠️",
    color: "from-blue-500 to-purple-500",
    videoUrl: "https://www.youtube.com/watch?v=IrKKi3SX89g",
    directUrl: "https://aitoolfinder.lovable.app/?via=aiwebtools",
    tags: ["AI tools", "discovery", "search", "productivity", "finder", "database"],
    category: "AI Development & Platforms"
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
    category: "Business & Productivity Tools"
  },
  {
    icon: BookOpen,
    title: "🚀 Startup Validator GPT",
    description: "Validate your startup ideas with comprehensive AI analysis. Get market research, competitor analysis, and business model validation.",
    emoji: "🚀",
    color: "from-purple-500 to-blue-500",
    imageUrl: "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-ai-tool-named-st_4i8GY.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
    directUrl: "https://startupvalidatorgpt.lovable.app/?via=aiwebtools",
    tags: ["startup", "validation", "business model", "market research", "entrepreneurship"],
    category: "Business & Productivity Tools"
  }
];

// Combine all tools from different categories with enhanced categorization
export const allTools: Tool[] = [
  ...aiDevelopmentAndPlatforms,
  ...writingAndContent,
  ...imageAndDesign,
  ...videoTools,
  ...audioMusicTools,
  ...businessAndProductivity,
  ...specializedAndNiche,
  ...businessTools,
  ...aiAssistants,
  ...aiArtTools,
  ...contentCreationTools,
  ...aiToolsAndDevelopment,
  ...specializedTools,
  ...additionalTools
];

// Create featured tools by selecting diverse tools from different categories
export const featuredTools: Tool[] = [
  allTools.find(tool => tool.title.includes("Claude")) || allTools[0],
  allTools.find(tool => tool.title.includes("Midjourney")) || allTools[1],
  allTools.find(tool => tool.title.includes("SUNO")) || allTools[2],
  allTools.find(tool => tool.title.includes("Business Plan")) || allTools[3],
  allTools.find(tool => tool.title.includes("SORA")) || allTools[4],
  allTools.find(tool => tool.title.includes("Ideogram")) || allTools[5]
];

// Enhanced search function with comprehensive keywords from your directory
export const searchTools = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm.trim()) return tools;
  
  const term = searchTerm.toLowerCase();
  return tools.filter(tool => 
    tool.title.toLowerCase().includes(term) ||
    tool.description.toLowerCase().includes(term) ||
    tool.category?.toLowerCase().includes(term) ||
    tool.tags?.some(tag => tag.toLowerCase().includes(term)) ||
    
    // AI Development & Platforms keywords
    (term.includes('llm') && (tool.title.toLowerCase().includes('llm') || tool.description.toLowerCase().includes('llm') || tool.tags?.some(tag => tag.toLowerCase().includes('llm')))) ||
    (term.includes('local') && tool.tags?.some(tag => tag.toLowerCase().includes('local'))) ||
    (term.includes('development') && (tool.category?.includes('Development') || tool.tags?.some(tag => tag.toLowerCase().includes('development')))) ||
    (term.includes('platform') && (tool.category?.includes('Platform') || tool.tags?.some(tag => tag.toLowerCase().includes('platform')))) ||
    (term.includes('hosting') && tool.tags?.some(tag => tag.toLowerCase().includes('hosting'))) ||
    (term.includes('model') && tool.tags?.some(tag => tag.toLowerCase().includes('model'))) ||
    (term.includes('claude') && tool.title.toLowerCase().includes('claude')) ||
    (term.includes('gemini') && tool.title.toLowerCase().includes('gemini')) ||
    (term.includes('grok') && tool.title.toLowerCase().includes('grok')) ||
    (term.includes('groq') && tool.title.toLowerCase().includes('groq')) ||
    (term.includes('llama') && tool.title.toLowerCase().includes('llama')) ||
    (term.includes('hugging') && tool.title.toLowerCase().includes('hugging')) ||
    (term.includes('nvidia') && tool.title.toLowerCase().includes('nvidia')) ||
    (term.includes('rtx') && tool.tags?.some(tag => tag.toLowerCase().includes('rtx'))) ||
    (term.includes('anthropic') && tool.tags?.some(tag => tag.toLowerCase().includes('anthropic'))) ||
    (term.includes('meta') && tool.tags?.some(tag => tag.toLowerCase().includes('meta'))) ||
    (term.includes('openai') && tool.tags?.some(tag => tag.toLowerCase().includes('openai'))) ||
    (term.includes('mistral') && tool.title.toLowerCase().includes('mistral')) ||
    (term.includes('studio') && tool.title.toLowerCase().includes('studio')) ||
    (term.includes('bolt') && tool.title.toLowerCase().includes('bolt')) ||
    (term.includes('lovable') && tool.title.toLowerCase().includes('lovable')) ||
    (term.includes('pinokio') && tool.title.toLowerCase().includes('pinokio')) ||
    (term.includes('freedom') && tool.title.toLowerCase().includes('freedom')) ||
    (term.includes('uncensored') && tool.tags?.some(tag => tag.toLowerCase().includes('uncensored'))) ||
    (term.includes('decentralized') && tool.tags?.some(tag => tag.toLowerCase().includes('decentralized'))) ||
    (term.includes('arena') && tool.title.toLowerCase().includes('arena')) ||
    (term.includes('benchmark') && tool.tags?.some(tag => tag.toLowerCase().includes('benchmark'))) ||
    
    // Writing & Content keywords
    (term.includes('writing') && (tool.tags?.some(tag => tag.toLowerCase().includes('writing')) || tool.category?.includes('Writing'))) ||
    (term.includes('content') && (tool.tags?.some(tag => tag.toLowerCase().includes('content')) || tool.category?.includes('Content'))) ||
    (term.includes('book') && tool.tags?.some(tag => tag.toLowerCase().includes('book'))) ||
    (term.includes('script') && tool.tags?.some(tag => tag.toLowerCase().includes('script'))) ||
    (term.includes('article') && tool.tags?.some(tag => tag.toLowerCase().includes('article'))) ||
    (term.includes('blog') && tool.tags?.some(tag => tag.toLowerCase().includes('blog'))) ||
    (term.includes('rewrite') && tool.tags?.some(tag => tag.toLowerCase().includes('rewrite'))) ||
    (term.includes('prompt') && tool.tags?.some(tag => tag.toLowerCase().includes('prompt'))) ||
    (term.includes('legal') && tool.tags?.some(tag => tag.toLowerCase().includes('legal'))) ||
    (term.includes('legislation') && tool.tags?.some(tag => tag.toLowerCase().includes('legislation'))) ||
    (term.includes('grant') && tool.tags?.some(tag => tag.toLowerCase().includes('grant'))) ||
    (term.includes('presentation') && tool.tags?.some(tag => tag.toLowerCase().includes('presentation'))) ||
    (term.includes('powerpoint') && tool.tags?.some(tag => tag.toLowerCase().includes('powerpoint'))) ||
    (term.includes('ppt') && tool.title.toLowerCase().includes('ppt')) ||
    (term.includes('gamma') && tool.title.toLowerCase().includes('gamma')) ||
    (term.includes('movie') && tool.tags?.some(tag => tag.toLowerCase().includes('movie'))) ||
    (term.includes('play') && tool.tags?.some(tag => tag.toLowerCase().includes('play'))) ||
    (term.includes('theater') && tool.tags?.some(tag => tag.toLowerCase().includes('theater'))) ||
    (term.includes('podcast') && tool.tags?.some(tag => tag.toLowerCase().includes('podcast'))) ||
    (term.includes('testimony') && tool.tags?.some(tag => tag.toLowerCase().includes('testimony'))) ||
    (term.includes('training') && tool.tags?.some(tag => tag.toLowerCase().includes('training'))) ||
    (term.includes('manual') && tool.tags?.some(tag => tag.toLowerCase().includes('manual'))) ||
    (term.includes('clarity') && tool.title.toLowerCase().includes('clarity')) ||
    
    // Image & Design keywords
    (term.includes('image') && (tool.title.toLowerCase().includes('image') || tool.description.toLowerCase().includes('image'))) ||
    (term.includes('design') && (tool.category?.includes('Design') || tool.tags?.some(tag => tag.toLowerCase().includes('design')))) ||
    (term.includes('art') && (tool.title.toLowerCase().includes('art') || tool.category?.includes('Art') || tool.category?.includes('Design'))) ||
    (term.includes('generation') && tool.tags?.some(tag => tag.toLowerCase().includes('generation'))) ||
    (term.includes('graphic') && tool.tags?.some(tag => tag.toLowerCase().includes('graphic'))) ||
    (term.includes('logo') && tool.tags?.some(tag => tag.toLowerCase().includes('logo'))) ||
    (term.includes('cover') && tool.tags?.some(tag => tag.toLowerCase().includes('cover'))) ||
    (term.includes('sketch') && tool.tags?.some(tag => tag.toLowerCase().includes('sketch'))) ||
    (term.includes('coloring') && tool.tags?.some(tag => tag.toLowerCase().includes('coloring'))) ||
    (term.includes('children') && tool.tags?.some(tag => tag.toLowerCase().includes('children'))) ||
    (term.includes('tattoo') && tool.tags?.some(tag => tag.toLowerCase().includes('tattoo'))) ||
    (term.includes('artwork') && tool.tags?.some(tag => tag.toLowerCase().includes('artwork'))) ||
    (term.includes('vintage') && tool.tags?.some(tag => tag.toLowerCase().includes('vintage'))) ||
    (term.includes('appraisal') && tool.tags?.some(tag => tag.toLowerCase().includes('appraisal'))) ||
    (term.includes('ideogram') && tool.title.toLowerCase().includes('ideogram')) ||
    (term.includes('leonardo') && tool.title.toLowerCase().includes('leonardo')) ||
    (term.includes('midjourney') && tool.title.toLowerCase().includes('midjourney')) ||
    (term.includes('restyle') && tool.title.toLowerCase().includes('restyle')) ||
    (term.includes('meshy') && tool.title.toLowerCase().includes('meshy')) ||
    (term.includes('3d') && tool.tags?.some(tag => tag.toLowerCase().includes('3d'))) ||
    
    // Video & Animation keywords
    (term.includes('video') && (tool.title.toLowerCase().includes('video') || tool.description.toLowerCase().includes('video') || tool.category?.includes('Video'))) ||
    (term.includes('animation') && tool.tags?.some(tag => tag.toLowerCase().includes('animation'))) ||
    (term.includes('avatar') && tool.tags?.some(tag => tag.toLowerCase().includes('avatar'))) ||
    (term.includes('sora') && tool.title.toLowerCase().includes('sora')) ||
    (term.includes('runway') && tool.title.toLowerCase().includes('runway')) ||
    (term.includes('luma') && tool.title.toLowerCase().includes('luma')) ||
    (term.includes('kling') && tool.title.toLowerCase().includes('kling')) ||
    (term.includes('pika') && tool.title.toLowerCase().includes('pika')) ||
    (term.includes('pixverse') && tool.title.toLowerCase().includes('pixverse')) ||
    (term.includes('synthesia') && tool.title.toLowerCase().includes('synthesia')) ||
    (term.includes('heygen') && tool.title.toLowerCase().includes('heygen')) ||
    (term.includes('invideo') && tool.title.toLowerCase().includes('invideo')) ||
    (term.includes('bhuman') && tool.title.toLowerCase().includes('bhuman')) ||
    (term.includes('minimax') && tool.title.toLowerCase().includes('minimax')) ||
    (term.includes('google veo') && tool.title.toLowerCase().includes('veo')) ||
    (term.includes('veo') && tool.title.toLowerCase().includes('veo')) ||
    (term.includes('flow') && tool.title.toLowerCase().includes('flow')) ||
    (term.includes('hotshot') && tool.title.toLowerCase().includes('hotshot')) ||
    
    // Audio & Music keywords
    (term.includes('music') && (tool.title.toLowerCase().includes('music') || tool.description.toLowerCase().includes('music') || tool.category?.includes('Audio'))) ||
    (term.includes('audio') && (tool.category?.includes('Audio') || tool.description.toLowerCase().includes('audio'))) ||
    (term.includes('suno') && tool.title.toLowerCase().includes('suno')) ||
    (term.includes('udio') && tool.title.toLowerCase().includes('udio')) ||
    (term.includes('eleven') && tool.title.toLowerCase().includes('eleven')) ||
    (term.includes('speech') && tool.tags?.some(tag => tag.toLowerCase().includes('speech'))) ||
    (term.includes('text to speech') && tool.description.toLowerCase().includes('text to speech')) ||
    (term.includes('voice') && tool.tags?.some(tag => tag.toLowerCase().includes('voice'))) ||
    (term.includes('sound') && tool.tags?.some(tag => tag.toLowerCase().includes('sound'))) ||
    (term.includes('melodies') && tool.title.toLowerCase().includes('melodies')) ||
    (term.includes('lessons') && tool.tags?.some(tag => tag.toLowerCase().includes('lessons'))) ||
    
    // Business & Productivity keywords
    (term.includes('business') && (tool.title.toLowerCase().includes('business') || tool.category?.includes('Business'))) ||
    (term.includes('productivity') && tool.tags?.some(tag => tag.toLowerCase().includes('productivity'))) ||
    (term.includes('automation') && tool.tags?.some(tag => tag.toLowerCase().includes('automation'))) ||
    (term.includes('website') && tool.tags?.some(tag => tag.toLowerCase().includes('website'))) ||
    (term.includes('bot') && tool.tags?.some(tag => tag.toLowerCase().includes('bot'))) ||
    (term.includes('plan') && tool.tags?.some(tag => tag.toLowerCase().includes('plan'))) ||
    (term.includes('contract') && tool.tags?.some(tag => tag.toLowerCase().includes('contract'))) ||
    (term.includes('insurance') && tool.tags?.some(tag => tag.toLowerCase().includes('insurance'))) ||
    (term.includes('claims') && tool.tags?.some(tag => tag.toLowerCase().includes('claims'))) ||
    (term.includes('data') && tool.tags?.some(tag => tag.toLowerCase().includes('data'))) ||
    (term.includes('analysis') && tool.tags?.some(tag => tag.toLowerCase().includes('analysis'))) ||
    (term.includes('make') && tool.title.toLowerCase().includes('make')) ||
    (term.includes('10web') && tool.title.toLowerCase().includes('10web')) ||
    (term.includes('botsonic') && tool.title.toLowerCase().includes('botsonic')) ||
    (term.includes('cheatlayer') && tool.title.toLowerCase().includes('cheatlayer')) ||
    
    // Specialized & Niche keywords
    (term.includes('specialized') && tool.category?.includes('Specialized')) ||
    (term.includes('niche') && tool.category?.includes('Niche')) ||
    (term.includes('fungus') && tool.title.toLowerCase().includes('fungus')) ||
    (term.includes('mushroom') && tool.tags?.some(tag => tag.toLowerCase().includes('mushroom'))) ||
    (term.includes('oil') && tool.tags?.some(tag => tag.toLowerCase().includes('oil'))) ||
    (term.includes('gas') && tool.tags?.some(tag => tag.toLowerCase().includes('gas'))) ||
    (term.includes('drill') && tool.title.toLowerCase().includes('drill')) ||
    (term.includes('dream') && tool.tags?.some(tag => tag.toLowerCase().includes('dream'))) ||
    (term.includes('interpreter') && tool.title.toLowerCase().includes('interpreter')) ||
    (term.includes('person') && tool.tags?.some(tag => tag.toLowerCase().includes('person'))) ||
    (term.includes('finder') && tool.tags?.some(tag => tag.toLowerCase().includes('finder'))) ||
    (term.includes('snoop') && tool.title.toLowerCase().includes('snoop')) ||
    (term.includes('detection') && tool.tags?.some(tag => tag.toLowerCase().includes('detection'))) ||
    (term.includes('historical') && tool.tags?.some(tag => tag.toLowerCase().includes('historical'))) ||
    (term.includes('pattern') && tool.tags?.some(tag => tag.toLowerCase().includes('pattern'))) ||
    (term.includes('mary') && tool.title.toLowerCase().includes('mary')) ||
    (term.includes('magdalene') && tool.title.toLowerCase().includes('magdalene')) ||
    (term.includes('sophia') && tool.title.toLowerCase().includes('sophia')) ||
    (term.includes('wisdom') && tool.tags?.some(tag => tag.toLowerCase().includes('wisdom'))) ||
    (term.includes('mental') && tool.tags?.some(tag => tag.toLowerCase().includes('mental'))) ||
    (term.includes('wellness') && tool.tags?.some(tag => tag.toLowerCase().includes('wellness'))) ||
    (term.includes('ubi') && tool.tags?.some(tag => tag.toLowerCase().includes('ubi'))) ||
    (term.includes('peace') && tool.tags?.some(tag => tag.toLowerCase().includes('peace'))) ||
    (term.includes('simulation') && tool.tags?.some(tag => tag.toLowerCase().includes('simulation'))) ||
    
    // General enhanced search terms
    (term.includes('ai') && tool.title.toLowerCase().includes('ai')) ||
    (term.includes('gpt') && tool.title.toLowerCase().includes('gpt')) ||
    (term.includes('chat') && tool.title.toLowerCase().includes('chat')) ||
    (term.includes('generator') && tool.title.toLowerCase().includes('generator')) ||
    (term.includes('maker') && tool.title.toLowerCase().includes('maker')) ||
    (term.includes('creator') && tool.title.toLowerCase().includes('creator')) ||
    (term.includes('assistant') && tool.title.toLowerCase().includes('assistant')) ||
    (term.includes('tool') && tool.title.toLowerCase().includes('tool')) ||
    (term.includes('engine') && tool.title.toLowerCase().includes('engine')) ||
    (term.includes('studio') && tool.title.toLowerCase().includes('studio')) ||
    (term.includes('labs') && tool.title.toLowerCase().includes('labs')) ||
    (term.includes('suite') && (tool.title.toLowerCase().includes('suite') || tool.description.toLowerCase().includes('suite')))
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
