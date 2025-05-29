
import { Tool } from "@/types/tools";

export const createFeaturedTools = (allTools: Tool[]): Tool[] => {
  // Prioritize AI Web Tools LLC original GPTs (those with lovable.app URLs)
  const aiWebToolsGPTs = allTools.filter(tool => 
    tool.directUrl?.includes('lovable.app') && 
    (tool.videoUrl || tool.imageUrl)
  );
  
  // Select the best performing and most popular AI Web Tools GPTs
  const featuredAIWebToolsGPTs = [
    // Top performing GPTs with videos
    ...aiWebToolsGPTs.filter(tool => 
      tool.title.includes('GODMODE GPT') ||
      tool.title.includes('TALK TO THE GODS GPT') ||
      tool.title.includes('TIME MACHINE GPT') ||
      tool.title.includes('MULTITASKER GPT') ||
      tool.title.includes('Illuminous World Data Explorer GPT') ||
      tool.title.includes('PERFECT PROMPT ENGINE') ||
      tool.title.includes('ImmortalizeME') ||
      tool.title.includes('Resurrection GPT') ||
      tool.title.includes('ENTER THE MATRIX GPT')
    ).slice(0, 6),
    
    // Additional popular GPTs with good media
    ...aiWebToolsGPTs.filter(tool => 
      tool.title.includes('ALAN WATTS GPT') ||
      tool.title.includes('Fortune Teller GPT') ||
      tool.title.includes('Phenomenon Explorer AI Suite') ||
      tool.title.includes('Legislation Writer GPT') ||
      tool.title.includes('Agronomus AI Farming Expert') ||
      tool.title.includes('COLLEGE DEGREE GPT')
    ).slice(0, 3)
  ];
  
  // If we need more featured tools, add other high-rated tools
  const otherPopularTools = allTools
    .filter(tool => 
      !featuredAIWebToolsGPTs.includes(tool) && 
      (tool.rating >= 4.5 || tool.totalVotes >= 4000)
    )
    .slice(0, 3);
  
  return [...featuredAIWebToolsGPTs, ...otherPopularTools].slice(0, 9);
};
