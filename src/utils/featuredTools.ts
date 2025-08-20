import { Tool } from "@/types/tools";
import { aiWebToolsGPTs } from "@/data/tools/aiWebTools/aiWebToolsGPTs";

export const createFeaturedTools = (allTools: Tool[]): Tool[] => {
  console.log(`🔍 Creating featured tools from ${allTools.length} total tools`);
  console.log(`🎯 AI Web Tools GPTs available in source: ${aiWebToolsGPTs.length}`);
  
  // Tools to exclude from featured sections but keep in database (not our designs)
  const excludedFromFeatured = ['bolt.new', 'gemini'];
  
  // Verify bolt.new and gemini are still searchable in main database
  const boltTool = allTools.find(tool => tool.title.toLowerCase().includes('bolt.new'));
  const geminiTool = allTools.find(tool => tool.title.toLowerCase().includes('gemini'));
  
  console.log(`🔍 Verification - bolt.new searchable: ${!!boltTool}`);
  console.log(`🔍 Verification - gemini searchable: ${!!geminiTool}`);
  
  if (!boltTool) console.warn('⚠️ bolt.new not found in searchable database!');
  if (!geminiTool) console.warn('⚠️ gemini not found in searchable database!');
  
  // Priority tools that MUST be in top positions - all AI Web Tools GPTs
  const priorityTitles = [
    // PRIME POSITION - Soul Map GPT (newest addition)
    'Soul Map GPT',
    
    // Core AI Web Tools GPTs with videos/images (our passionate projects)
    'TIME MACHINE GPT',
    'COLLEGE DEGREE GPT', 
    'AUTOMOBILE GPT',
    'Movie Maker Studio AI SUITE',
    'MOVIE MAKER STUDIO', 
    'Survivalist GPT',
    'STAGE MASTER SUITE',
    'STAGEMASTER AI SUITE',
    'ImmortalizeME',
    'ImmortalizeMe',
    'Movie Script Writer GPT',
    'Illuminous World Data Explorer GPT',
    'GODMODE GPT',
    'Music Video Maker AI Studio',
    'BOOK WRITER GPT',
    'TALK TO HISTORY GPT',
    'Stellaris: 🚀AI Space Explorer',
    'Stellaris: AI Space Explorer',
    'Criminologist GPT',
    'Social Safety Net GPT',
    'Resurrection GPT',
    'PERFECT PROMPT ENGINE',
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
    'Contract Review Bot',
    'Tattoo Designer GPT',
    'Tattoo Design GPT',
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
    'Taxes GPT',
    'Genome GPT',
    'Game Design Document / Developer GPT',
    'ENTER THE MATRIX GPT (NEO👁️MATRIX GPT)',
    'NEO👁️MATRIX GPT',
    'NEOMATRIX GPT',
    'Predictive Credit Score Checker GPT',
    'Name Insight Research & Predictor GPT',
    'Coloring Book Generator GPT',
    'Native American History Time Machine GPT',
    'Public Testimony Writer GPT',
    'Cyber Security GPT',
    'Startup Validator GPT',
    'Business Plan Generator GPT',
    'Fungus GPT',
    'Drill Baby Drill Ai Suite For Oil & Gas',
    'Dream Interpreter GPT',
    'Podcast Script Writer GPT',
    'Person Information Finder GPT',
    'PPTx Powerpoint Maker GPT',
    'Grant Writer GPT',
    'Universal Basic Income Strategist GPT',
    'IF AI RULED THE WORLD',
    'Global Peace Restoration Strategist GPT',
    'Artwork & Vintage Appraisal GPT',
    'Uncovering Hidden Historical Patterns GPT',
    'Sketch Artist GPT',
    'AI Tools Finder GPT',
    'Article and Blog Rewriter GPT',
    'Video Second-by-Second Analysis GPT',
    'MiddleJourney Midjourney Prompting Assistant',
    'Mary Magdalene GPT',
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
  
  console.log(`🔍 Looking for ${priorityTitles.length} AI Web Tools GPTs`);
  
  // Filter function to exclude specific tools from featured but keep in database
  const isExcludedFromFeatured = (tool: Tool): boolean => {
    const toolTitle = tool.title.toLowerCase();
    return excludedFromFeatured.some(excluded => 
      toolTitle.includes(excluded.toLowerCase()) ||
      tool.directUrl?.toLowerCase().includes(excluded.toLowerCase())
    );
  };
  
  // Find ALL AI Web Tools GPTs (our creations) - these MUST appear in featured sections
  const aiWebToolsGPTsInMain = allTools.filter(tool => 
    !isExcludedFromFeatured(tool) && // Exclude bolt.new and gemini from featured
    (aiWebToolsGPTs.some(awTool => awTool.title === tool.title) ||
     tool.directUrl?.includes('lovable.app'))
  );
  
  console.log(`🎯 AI Web Tools GPTs found for featured: ${aiWebToolsGPTsInMain.length}`);
  console.log(`🚀 First 20 AI Web Tools GPTs:`, aiWebToolsGPTsInMain.slice(0, 20).map(t => t.title));
  
  // Ensure we have ALL AI Web Tools GPTs
  const missingFromFeatured = aiWebToolsGPTs.filter(gpt => 
    !aiWebToolsGPTsInMain.some(tool => tool.title === gpt.title) &&
    !isExcludedFromFeatured(gpt)
  );
  
  if (missingFromFeatured.length > 0) {
    console.warn(`⚠️ Missing AI Web Tools GPTs from featured:`, missingFromFeatured.slice(0, 10).map(t => t.title));
  }
  
  // ONLY show AI Web Tools GPTs (our creations) in featured section
  const allFeaturedTools = aiWebToolsGPTsInMain;
  
  console.log(`🚀 PORTFOLIO SHOWCASE: ${aiWebToolsGPTsInMain.length} AI Web Tools GPTs in featured section`);
  console.log(`📊 Total featured tools: ${allFeaturedTools.length}`);
  console.log(`✅ bolt.new and gemini excluded from featured but remain searchable`);
  
  // Final verification that bolt.new and gemini are searchable but not featured
  const featuredBolt = allFeaturedTools.find(tool => tool.title.toLowerCase().includes('bolt.new'));
  const featuredGemini = allFeaturedTools.find(tool => tool.title.toLowerCase().includes('gemini'));
  
  console.log(`🔍 FINAL CHECK - bolt.new in featured: ${!!featuredBolt} (should be false)`);
  console.log(`🔍 FINAL CHECK - gemini in featured: ${!!featuredGemini} (should be false)`);
  console.log(`🔍 FINAL CHECK - bolt.new searchable in main DB: ${!!boltTool} (should be true)`);
  console.log(`🔍 FINAL CHECK - gemini searchable in main DB: ${!!geminiTool} (should be true)`);
  
  return allFeaturedTools;
};
