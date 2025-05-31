
import { Tool } from "@/types/tools";
import { aiWebToolsGPTs } from "@/data/tools/aiWebTools/aiWebToolsGPTs";

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
  
  // Get all AI Web Tools GPTs that we've added descriptions to
  const aiWebToolsWithDescriptions = aiWebToolsGPTs.filter(tool => 
    tool.description && tool.description.length > 100 // Ensure they have full descriptions
  );
  
  // Filter out any AI Web Tools GPTs that are already in priority tools
  const uniqueAiWebToolsGPTs = aiWebToolsWithDescriptions.filter(tool =>
    !priorityTools.some(pTool => pTool.title === tool.title)
  );
  
  // Additional popular tools to fill out the featured section (non-AI Web Tools)
  const additionalTools = allTools.filter(tool => 
    !priorityTools.some(pTool => pTool.title === tool.title) &&
    !aiWebToolsWithDescriptions.some(awTool => awTool.title === tool.title) &&
    (tool.rating >= 4.5 || tool.totalVotes >= 3000) &&
    !tool.directUrl?.includes('lovable.app') // Exclude other AI Web Tools without descriptions
  ).slice(0, 10);
  
  // Combine all featured tools with priority tools first, then AI Web Tools GPTs, then additional
  const allFeaturedTools = [
    ...priorityTools,
    ...uniqueAiWebToolsGPTs,
    ...additionalTools
  ];
  
  // Remove any duplicates by title
  const uniqueTools = allFeaturedTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  // Return all unique tools - this should include all your AI Web Tools GPTs
  return uniqueTools.slice(0, 100); // Increased limit to show all your GPTs
};
