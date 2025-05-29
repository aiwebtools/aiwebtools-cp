
import { Tool } from "@/types/tools";

// Create featured tools by selecting diverse tools from different categories
export const createFeaturedTools = (allTools: Tool[]): Tool[] => {
  // Find specific GPT tools with videos that should be featured
  const movieMakerStudio = allTools.find(tool => tool.title.includes("Music Video Maker AI Studio"));
  const automobileGPT = allTools.find(tool => tool.title.includes("AUTOMOBILE GPT"));
  const survivalistGPT = allTools.find(tool => tool.title.includes("Survivalist GPT"));
  const timeMachineGPT = allTools.find(tool => tool.title.includes("TIME MACHINE GPT"));
  const nativeAmericanGPT = allTools.find(tool => tool.title.includes("Native American History Time Machine GPT"));
  const talkToHistoryGPT = allTools.find(tool => tool.title.includes("TALK TO HISTORY GPT"));
  const teslaGPT = allTools.find(tool => tool.title.includes("Nikola Tesla GPT"));
  const einsteinGPT = allTools.find(tool => tool.title.includes("Albert Einstein GPT"));
  const indianaArcheologistGPT = allTools.find(tool => tool.title.includes("Indiana Archeologist GPT"));
  const titanicGPT = allTools.find(tool => tool.title.includes("Titanic Resurrections GPT"));
  const matrixGPT = allTools.find(tool => tool.title.includes("ENTER THE MATRIX GPT"));
  const alanWattsGPT = allTools.find(tool => tool.title.includes("ALAN WATTS GPT"));
  const playwriterGPT = allTools.find(tool => tool.title.includes("Playwriter GPT"));
  const maryMagdaleneGPT = allTools.find(tool => tool.title.includes("Mary Magdalene GPT"));
  const talkToGodsGPT = allTools.find(tool => tool.title.includes("TALK TO THE GODS GPT"));
  const oraculum = allTools.find(tool => tool.title.includes("Oraculum"));
  const collegeGPT = allTools.find(tool => tool.title.includes("COLLEGE DEGREE GPT"));

  // Create array with video-enabled GPTs first, then other popular tools
  const featuredTools = [
    movieMakerStudio,
    automobileGPT, 
    survivalistGPT,
    timeMachineGPT,
    nativeAmericanGPT,
    talkToHistoryGPT
  ].filter(Boolean); // Remove any undefined tools

  // Add fallbacks from existing popular tools if we don't have enough
  const fallbacks = [
    allTools.find(tool => tool.title.includes("Claude")) || allTools[0],
    allTools.find(tool => tool.title.includes("Midjourney")) || allTools[1],
    allTools.find(tool => tool.title.includes("SUNO")) || allTools[2]
  ];

  // Combine and ensure we have exactly 6 tools
  const combined = [...featuredTools, ...fallbacks];
  return combined.slice(0, 6);
};
