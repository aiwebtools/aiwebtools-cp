
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
  
  console.log(`🎯 Priority tools found: ${priorityTools.length}`);
  console.log(`📋 Priority tools:`, priorityTools.map(t => t.title));
  
  // Get ALL AI Web Tools GPTs
  console.log(`🔍 Total AI Web Tools GPTs available: ${aiWebToolsGPTs.length}`);
  console.log(`📝 Some AI Web Tools GPT titles:`, aiWebToolsGPTs.slice(0, 10).map(t => t.title));
  
  // Check if specific missing tools are in the array
  const missingToolsToCheck = [
    'Movie Script Writer GPT',
    'GODMODE GPT', 
    'TALK TO HISTORY GPT',
    'MULTITASKER GPT',
    'LEARN ANY SKILL GPT'
  ];
  
  console.log(`🔍 Checking for specific tools:`);
  missingToolsToCheck.forEach(title => {
    const found = aiWebToolsGPTs.find(tool => tool.title.includes(title) || title.includes(tool.title));
    console.log(`   ${title}: ${found ? '✅ Found' : '❌ Missing'}`);
    if (found) console.log(`      Found as: "${found.title}"`);
  });
  
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
  ).slice(0, 15); // Limit additional tools to keep focus on your GPTs
  
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
  console.log(`🏷️ First 20 tool titles:`, uniqueTools.slice(0, 20).map(t => t.title));
  
  // Return ALL unique tools - this should include all your AI Web Tools GPTs
  return uniqueTools; // No artificial limit - show ALL your amazing GPTs!
};
