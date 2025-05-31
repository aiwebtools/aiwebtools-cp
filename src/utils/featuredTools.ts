
import { Tool } from "@/types/tools";
import { aiWebToolsGPTs } from "@/data/tools/aiWebTools/aiWebToolsGPTs";

export const createFeaturedTools = (allTools: Tool[]): Tool[] => {
  console.log(`🔍 Creating featured tools from ${allTools.length} total tools`);
  console.log(`🎯 AI Web Tools GPTs available in source: ${aiWebToolsGPTs.length}`);
  
  // Priority tools that MUST be in top positions - all four sets (45 tools total)
  const priorityTitles = [
    // First priority set (14 tools)
    'BOOK WRITER GPT',
    'MOVIE MAKER STUDIO', 
    'Movie Maker Studio AI SUITE',
    'STAGE MASTER SUITE',
    'STAGEMASTER AI SUITE',
    'GODMODE GPT',
    'TIME MACHINE GPT',
    'Movie Script Writer GPT',
    'Illuminous World Data Explorer GPT',
    'Music Video Maker AI Studio',
    'TALK TO HISTORY GPT',
    'Stellaris: 🚀AI Space Explorer',
    'Criminologist GPT',
    'Social Safety Net GPT',
    'Resurrection GPT',
    'PERFECT PROMPT ENGINE',
    // Second priority set (13 tools)
    'Travel Advisor GPT',
    'Clarity Omni GPT',
    'Engineering GPT AI Suite',
    'TALK TO THE GODS GPT',
    'Phenomenon Explorer AI Suite',
    'Legislation Writer GPT',
    'Graphic & Cover Design GPT',
    'FACT CHECKER GPT',
    'Sustainable Futures GPT',
    'Nikola Tesla GPT',
    'Food Quality Inspector GPT',
    'Home Renovator GPT',
    'Fisherman GPT',
    'Agronomus AI Farming Expert',
    'Antique and Collectible Appraisal GPT',
    'Oraculum',
    'Trivia Night GPT',
    'Veterinarian GPT',
    'Insurance Claims GPT',
    'Cannabis GPT',
    'Probability GPT',
    'LEARN ANY COURSE GPT',
    'Public Defender GPT',
    'Property Data Finder GPT',
    'Algebraic Expression Inventor GPT',
    'MULTITASKER GPT',
    'Fortune Teller GPT',
    'LEARN ANY SKILL GPT',
    'MATERIAL VALUATION GPT',
    'MicroSaaS GPT',
    'Albert Einstein GPT',
    'Interpretis',
    'Imagination Traveler GPT',
    'Titanic Resurrections GPT',
    'Historical Headlines GPT',
    'Alchemist Scientist GPT',
    'Personalized DR. GPT',
    'Trader GPT',
    'Indiana Archeologist GPT',
    'Marriage Mender GPT',
    // Third priority set (additional tools)
    'Training Manual Generator GPT',
    'ALAN WATTS GPT',
    'Solar Land Assessor GPT',
    'Data Research Analysis Report GPT',
    'The Resume & Job Finder Ai Suite',
    'Playwriter GPT',
    'Customizable GPT Maker',
    'Historical Apothecary GPT',
    'Home-Schooling Assistant GPT',
    'Pharmaceutical Assistant GPT',
    // Fourth priority set (12 tools)
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
    'Binary-Text-Image Converter GPT'
  ];
  
  console.log(`🔍 Looking for ${priorityTitles.length} priority tools`);
  
  // Find priority tools first - these MUST appear in featured sections everywhere
  const priorityTools = allTools.filter(tool => 
    priorityTitles.some(title => 
      tool.title.includes(title) || 
      title.includes(tool.title) ||
      tool.title.toLowerCase().includes(title.toLowerCase()) ||
      title.toLowerCase().includes(tool.title.toLowerCase())
    )
  );
  
  console.log(`🎯 Priority tools found: ${priorityTools.length} of ${priorityTitles.length} expected`);
  console.log(`📋 Found priority tools:`, priorityTools.slice(0, 10).map(t => t.title));
  
  // Get ALL AI Web Tools GPTs directly from the source to ensure ALL are included
  console.log(`🔍 Total AI Web Tools GPTs from source: ${aiWebToolsGPTs.length}`);
  console.log(`📋 First 10 AI Web Tools GPTs:`, aiWebToolsGPTs.slice(0, 10).map(t => t.title));
  
  // Verify which AI Web Tools GPTs are actually in allTools
  const aiWebToolsInAllTools = aiWebToolsGPTs.filter(gpt => 
    allTools.some(tool => tool.title === gpt.title)
  );
  
  console.log(`✅ AI Web Tools GPTs found in allTools: ${aiWebToolsInAllTools.length} of ${aiWebToolsGPTs.length}`);
  
  if (aiWebToolsInAllTools.length < aiWebToolsGPTs.length) {
    const missing = aiWebToolsGPTs.filter(gpt => 
      !allTools.some(tool => tool.title === gpt.title)
    );
    console.warn(`❌ Missing AI Web Tools GPTs:`, missing.slice(0, 10).map(t => t.title));
  }
  
  // Filter out any AI Web Tools GPTs that are already in priority tools to avoid duplicates
  const uniqueAiWebToolsGPTs = aiWebToolsInAllTools.filter(tool =>
    !priorityTools.some(pTool => pTool.title === tool.title)
  );
  
  console.log(`✨ Unique AI Web Tools GPTs after filtering duplicates: ${uniqueAiWebToolsGPTs.length}`);
  
  // Get additional high-quality tools from the main collection (non-AI Web Tools)
  const additionalTools = allTools.filter(tool => 
    !priorityTools.some(pTool => pTool.title === tool.title) &&
    !aiWebToolsGPTs.some(awTool => awTool.title === tool.title) &&
    (tool.rating >= 4.5 || tool.totalVotes >= 3000) &&
    !tool.directUrl?.includes('lovable.app') // Exclude other AI Web Tools without proper descriptions
  ).slice(0, 50); // Limit additional tools but prioritize your GPTs
  
  // Combine all featured tools: Priority first, then ALL AI Web Tools GPTs, then additional
  const allFeaturedTools = [
    ...priorityTools, // All priority tools go first
    ...uniqueAiWebToolsGPTs, // ALL remaining AI Web Tools GPTs
    ...additionalTools // Additional high-quality tools
  ];
  
  console.log(`🚀 Total featured tools being returned: ${allFeaturedTools.length}`);
  console.log(`📊 Breakdown - Priority: ${priorityTools.length}, AI Web Tools: ${uniqueAiWebToolsGPTs.length}, Additional: ${additionalTools.length}`);
  console.log(`🏷️ First 20 featured tool titles:`, allFeaturedTools.slice(0, 20).map(t => t.title));
  
  // Remove any final duplicates by title (safety check)
  const uniqueTools = allFeaturedTools.filter((tool, index, self) => 
    index === self.findIndex(t => t.title === tool.title)
  );
  
  console.log(`✅ Final unique featured tools count: ${uniqueTools.length}`);
  console.log(`🎯 Confirming first 15 tools in final list:`, uniqueTools.slice(0, 15).map(t => t.title));
  
  // Final verification - count AI Web Tools GPTs in result
  const finalAiWebToolsCount = uniqueTools.filter(tool => 
    aiWebToolsGPTs.some(gpt => gpt.title === tool.title) ||
    tool.directUrl?.includes('lovable.app')
  ).length;
  
  console.log(`🔥 FINAL VERIFICATION: ${finalAiWebToolsCount} AI Web Tools GPTs in featured tools`);
  
  if (finalAiWebToolsCount < aiWebToolsGPTs.length) {
    console.error(`❌ CRITICAL: Only ${finalAiWebToolsCount} of ${aiWebToolsGPTs.length} AI Web Tools GPTs in featured tools!`);
    
    // Find what's missing
    const missingFromFeatured = aiWebToolsGPTs.filter(gpt => 
      !uniqueTools.some(featured => featured.title === gpt.title)
    );
    console.error(`❌ Missing from featured:`, missingFromFeatured.slice(0, 20).map(t => t.title));
  }
  
  // Return ALL unique tools - this ensures ALL AI Web Tools GPTs appear in featured sections
  return uniqueTools;
};
