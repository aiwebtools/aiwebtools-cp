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
  
  // Get ALL AI Web Tools GPTs directly from the source
  console.log(`🔍 Total AI Web Tools GPTs available: ${aiWebToolsGPTs.length}`);
  console.log(`📝 First 20 AI Web Tools GPT titles:`, aiWebToolsGPTs.slice(0, 20).map(t => t.title));
  
  // Check for specific missing tools that were mentioned
  const specificToolsToCheck = [
    'Movie Script Writer GPT',
    'GODMODE GPT', 
    'TALK TO HISTORY GPT',
    'MULTITASKER GPT',
    'LEARN ANY SKILL GPT',
    'Illuminous World Data Explorer GPT',
    'Music Video Maker AI Studio',
    'Stellaris: 🚀AI Space Explorer',
    'PERFECT PROMPT ENGINE',
    'Travel Advisor GPT',
    'ALAN WATTS GPT',
    'Customizable GPT Maker',
    'Quiz Maker Ai'
  ];
  
  console.log(`🔍 Checking for specific mentioned tools:`);
  specificToolsToCheck.forEach(title => {
    const foundInAiWebTools = aiWebToolsGPTs.find(tool => 
      tool.title.includes(title) || title.includes(tool.title) || 
      tool.title.toLowerCase().includes(title.toLowerCase()) ||
      title.toLowerCase().includes(tool.title.toLowerCase())
    );
    const foundInAllTools = allTools.find(tool => 
      tool.title.includes(title) || title.includes(tool.title) ||
      tool.title.toLowerCase().includes(title.toLowerCase()) ||
      title.toLowerCase().includes(tool.title.toLowerCase())
    );
    console.log(`   ${title}: AI Web Tools: ${foundInAiWebTools ? '✅' : '❌'}, All Tools: ${foundInAllTools ? '✅' : '❌'}`);
    if (foundInAiWebTools) console.log(`      Found in AI Web Tools as: "${foundInAiWebTools.title}"`);
    if (foundInAllTools) console.log(`      Found in All Tools as: "${foundInAllTools.title}"`);
  });
  
  // Filter out any AI Web Tools GPTs that are already in priority tools to avoid duplicates
  const uniqueAiWebToolsGPTs = aiWebToolsGPTs.filter(tool =>
    !priorityTools.some(pTool => pTool.title === tool.title)
  );
  
  console.log(`✨ Unique AI Web Tools GPTs after filtering duplicates: ${uniqueAiWebToolsGPTs.length}`);
  
  // Get additional high-quality tools from the main collection (non-AI Web Tools)
  const additionalTools = allTools.filter(tool => 
    !priorityTools.some(pTool => pTool.title === tool.title) &&
    !aiWebToolsGPTs.some(awTool => awTool.title === tool.title) &&
    (tool.rating >= 4.5 || tool.totalVotes >= 3000) &&
    !tool.directUrl?.includes('lovable.app') // Exclude other AI Web Tools without proper descriptions
  ).slice(0, 20); // Keep some additional tools but prioritize your GPTs
  
  // Combine all featured tools: Priority first, then ALL AI Web Tools GPTs, then additional
  const allFeaturedTools = [
    ...priorityTools,
    ...uniqueAiWebToolsGPTs, // This includes ALL your GPTs with descriptions
    ...additionalTools
  ];
  
  console.log(`🚀 Total featured tools being returned: ${allFeaturedTools.length}`);
  console.log(`📊 Breakdown - Priority: ${priorityTools.length}, AI Web Tools: ${uniqueAiWebToolsGPTs.length}, Additional: ${additionalTools.length}`);
  
  // Remove any final duplicates by title (safety check)
  const uniqueTools = allFeaturedTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  console.log(`✅ Final unique tools count: ${uniqueTools.length}`);
  console.log(`🏷️ First 30 tool titles:`, uniqueTools.slice(0, 30).map(t => t.title));
  
  // Return ALL unique tools - this should include ALL your AI Web Tools GPTs
  return uniqueTools;
};
