
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
  
  // Get ALL AI Web Tools GPTs that we've added descriptions to
  // This should include all the GPTs from your comprehensive collection
  console.log(`🔍 Total AI Web Tools GPTs available: ${aiWebToolsGPTs.length}`);
  
  // Filter out any AI Web Tools GPTs that are already in priority tools
  const uniqueAiWebToolsGPTs = aiWebToolsGPTs.filter(tool =>
    !priorityTools.some(pTool => pTool.title === tool.title)
  );
  
  console.log(`✨ AI Web Tools GPTs after filtering duplicates: ${uniqueAiWebToolsGPTs.length}`);
  
  // Additional popular tools to fill out the featured section (non-AI Web Tools)
  const additionalTools = allTools.filter(tool => 
    !priorityTools.some(pTool => pTool.title === tool.title) &&
    !aiWebToolsGPTs.some(awTool => awTool.title === tool.title) &&
    (tool.rating >= 4.5 || tool.totalVotes >= 3000) &&
    !tool.directUrl?.includes('lovable.app') // Exclude other AI Web Tools without descriptions
  ).slice(0, 20); // Limit additional tools to keep focus on your GPTs
  
  // Combine all featured tools with priority tools first, then ALL AI Web Tools GPTs, then additional
  const allFeaturedTools = [
    ...priorityTools,
    ...uniqueAiWebToolsGPTs, // This should include ALL your GPTs
    ...additionalTools
  ];
  
  console.log(`🚀 Total featured tools being returned: ${allFeaturedTools.length}`);
  console.log(`📊 Breakdown - Priority: ${priorityTools.length}, AI Web Tools: ${uniqueAiWebToolsGPTs.length}, Additional: ${additionalTools.length}`);
  
  // Remove any duplicates by title (just in case)
  const uniqueTools = allFeaturedTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  console.log(`✅ Final unique tools count: ${uniqueTools.length}`);
  
  // Return ALL unique tools - this should include all your AI Web Tools GPTs
  return uniqueTools; // No artificial limit - show ALL your amazing GPTs!
};
