
import { Tool } from "@/types/tools";

export const createFeaturedTools = (allTools: Tool[]): Tool[] => {
  // Priority tools that MUST be in top positions
  const priorityTitles = [
    'BOOK WRITER GPT',
    'MOVIE MAKER STUDIO', 
    'STAGE MASTER SUITE',
    'GODMODE GPT',
    'TIME MACHINE GPT'
  ];
  
  // Find priority tools first
  const priorityTools = allTools.filter(tool => 
    priorityTitles.some(title => tool.title.includes(title))
  );
  
  // High-priority AI Web Tools GPTs that should be featured
  const highPriorityGPTs = [
    'Movie Script Writer GPT',
    'Illuminous World Data Explorer GPT',
    'Music Video Maker AI Studio',
    'TALK TO HISTORY GPT',
    'Stellaris: 🚀AI Space Explorer',
    'Criminologist GPT',
    'Social Safety Net GPT',
    'Resurrection GPT',
    'PERFECT PROMPT ENGINE',
    'Travel Advisor GPT',
    'TALK TO THE GODS GPT',
    'Phenomenon Explorer AI Suite',
    'Legislation Writer GPT',
    'Nikola Tesla GPT',
    'Agronomus AI Farming Expert',
    'Oraculum',
    'MULTITASKER GPT',
    'LEARN ANY SKILL GPT',
    'MATERIAL VALUATION GPT',
    'Albert Einstein GPT',
    'Titanic Resurrections GPT',
    'Indiana Archeologist GPT',
    'Training Manual Generator GPT',
    'ALAN WATTS GPT',
    'Solar Land Assessor GPT',
    'Data Research Analysis Report GPT',
    'The Resume & Job Finder Ai Suite',
    '🎭 Playwriter GPT',
    'Customizable GPT Maker',
    'Historical Apothecary GPT',
    'Home-Schooling Assistant GPT',
    'Pharmaceutical Assistant GPT',
    'Contract Review Bot',
    'Tattoo Designer GPT',
    'Firearms Safety Instructor GPT',
    'Sora Prompt Assistant',
    'King Blueberry GPT',
    'PHARMA RESEARCH PRO',
    'Mixologist GPT',
    'Chef "Sizzle" AI Culinary Assistant',
    'RESTYLE ME GPT',
    'Celebrity Chatline GPT',
    'Firefighter GPT',
    'Binary-Text-Image Converter GPT',
    'Luma Dream Machine Prompt Assistant',
    'Restaurant Menu Maker GPT',
    'Quiz Maker Ai',
    'Course Maker GPT',
    'Genome GPT',
    'Game Design Document / Developer GPT',
    'ENTER THE MATRIX GPT',
    'Predictive Credit Score Checker GPT',
    'Name Insight Research & Predictor GPT',
    'Coloring Book Generator GPT',
    'Native American History Time Machine GPT',
    'Public Testimony Writer GPT',
    'Cyber Security GPT',
    '🚀 Startup Validator GPT',
    'Drill Baby Drill Ai Suite For Oil & Gas',
    'Dream Interpreter GPT',
    'Podcast Script Writer GPT',
    'Person Information Finder GPT',
    'PPTx Powerpoint Maker GPT',
    'Grant Writer GPT',
    'Universal Basic Income Strategist GPT',
    '"IF AI RULED THE WORLD" - AI SIMULATION GPT',
    'Global Peace Restoration Strategist GPT',
    'Artwork & Vintage Appraisal GPT',
    'Uncovering Hidden Historical Patterns GPT',
    'Sketch Artist GPT',
    'AI Tools Finder GPT',
    'Article and Blog Rewriter GPT',
    'Video Second-by-Second Analysis GPT',
    '"MiddleJourney" Midjourney Prompting Assistant',
    '🕊️Mary Magdalene GPT',
    'Snoop Image Ai',
    'Legal Draftsmith GPT',
    'Custom GPT Ideas & Brainstorming Assistant',
    'Music Melodies & Lessons GPT',
    'Sophia Aeterna AI',
    'Children\'s Picture Book Maker GPT',
    'Movie Scene Maker GPT',
    'Mental Wellness GPT',
    'Legislator Link GPT'
  ];
  
  // Find high-priority GPTs from your collection
  const featuredGPTs = allTools.filter(tool => 
    highPriorityGPTs.some(title => 
      tool.title.includes(title) || 
      tool.title === title ||
      // Handle variations in naming
      (title.includes('GODMODE') && tool.title.includes('GODMODE')) ||
      (title.includes('Illuminous') && tool.title.includes('Illuminous')) ||
      (title.includes('ENTER THE MATRIX') && tool.title.includes('NEO') && tool.title.includes('MATRIX')) ||
      (title.includes('Antique and Collectible') && tool.title.includes('Artwork & Vintage')) ||
      (title.includes('MiddleJourney') && tool.title.includes('Midjourney')) ||
      (title.includes('Snoop Image') && tool.title.includes('Snoop')) ||
      (title.includes('Mental Wellness') && tool.title.includes('Mental Wellness'))
    ) &&
    !priorityTools.some(pTool => pTool.title === tool.title) // Avoid duplicates
  );
  
  // Additional popular tools to fill out the featured section
  const additionalTools = allTools.filter(tool => 
    !priorityTools.some(pTool => pTool.title === tool.title) &&
    !featuredGPTs.some(fTool => fTool.title === tool.title) &&
    (tool.rating >= 4.5 || tool.totalVotes >= 3000) &&
    tool.directUrl?.includes('lovable.app') // Prioritize AI Web Tools original GPTs
  ).slice(0, 10);
  
  // Combine all featured tools with priority tools first
  const allFeaturedTools = [
    ...priorityTools,
    ...featuredGPTs,
    ...additionalTools
  ];
  
  // Remove any duplicates by title and return a reasonable number for featured section
  const uniqueTools = allFeaturedTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  // Return a mix that showcases the breadth of your AI Web Tools
  return uniqueTools.slice(0, 48); // Increased to show more of your GPTs
};
