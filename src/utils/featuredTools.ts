
import { Tool } from "@/types/tools";

export const createFeaturedTools = (allTools: Tool[]): Tool[] => {
  // Priority tools that MUST be in top 10 - adding Stelaris Space Explorer
  const priorityTitles = [
    'BOOK WRITER GPT',
    'MOVIE MAKER STUDIO', 
    'STAGE MASTER SUITE',
    'Stelaris Space Explorer'
  ];
  
  // Find priority tools first
  const priorityTools = allTools.filter(tool => 
    priorityTitles.some(title => tool.title.includes(title))
  );
  
  // Prioritize AI Web Tools LLC original GPTs (those with lovable.app URLs)
  const aiWebToolsGPTs = allTools.filter(tool => 
    tool.directUrl?.includes('lovable.app') && 
    (tool.videoUrl || tool.imageUrl) &&
    !priorityTools.some(pTool => pTool.title === tool.title) // Avoid duplicates
  );
  
  // Select the best performing AI Web Tools GPTs (excluding priority tools already selected)
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
    ).slice(0, 3), // Reduced to make room for Stelaris
    
    // Additional popular GPTs with good media
    ...aiWebToolsGPTs.filter(tool => 
      tool.title.includes('ALAN WATTS GPT') ||
      tool.title.includes('Fortune Teller GPT') ||
      tool.title.includes('Phenomenon Explorer AI Suite') ||
      tool.title.includes('Legislation Writer GPT') ||
      tool.title.includes('Agronomus AI Farming Expert') ||
      tool.title.includes('COLLEGE DEGREE GPT')
    ).slice(0, 2)
  ];
  
  // If we need more featured tools, add other high-rated tools (excluding already selected)
  const alreadySelected = [...priorityTools, ...featuredAIWebToolsGPTs];
  const otherPopularTools = allTools
    .filter(tool => 
      !alreadySelected.some(selected => selected.title === tool.title) && 
      (tool.rating >= 4.5 || tool.totalVotes >= 4000)
    )
    .slice(0, 1);
  
  // Combine with priority tools first, then featured AI Web Tools GPTs, then others
  const finalFeaturedTools = [...priorityTools, ...featuredAIWebToolsGPTs, ...otherPopularTools];
  
  // Remove any potential duplicates by title and return top 9
  const uniqueTools = finalFeaturedTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  return uniqueTools.slice(0, 9);
};
