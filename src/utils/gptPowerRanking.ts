import { Tool } from "@/types/tools";

/**
 * GPT Power Ranking System - Categorizes AI Web Tools GPTs by power and impressiveness
 */

// TIER 1: Astoundingly Cool & Wildly Powerful GPTs - The absolute pinnacle
export const TIER_1_LEGENDARY_GPTS = [
  'G-Mode GPT',                        // Ultimate AI companion - most versatile
  'TIME MACHINE GPT',                   // Time travel & exploration - mind-bending
  'ImmortalizeME',                      // Digital clone creation - immortality tech
  'ImmortalizeMe',
  'PERFECT PROMPT ENGINE',              // AI optimization mastery
  'Movie Maker Studio AI SUITE',       // Complete movie production suite
  'MOVIE MAKER STUDIO',
  'Music Video Maker AI Studio',       // Complete music video creation suite
  'BOOK WRITER GPT',                   // Professional book creation system
  'COLLEGE DEGREE GPT',                // Complete university education system
  'Legislator Link GPT',               // Political engagement & democracy
  'Legislation Writer GPT',            // Complete legal document creation
  'Personalized DR. GPT',              // Advanced medical AI system
  'Veterinarian GPT',                  // Complete veterinary care system
  'Engineering GPT AI Suite',          // Complete engineering mastery
  'TALK TO THE GODS GPT',              // Divine communication interface
  'Stellaris: 🚀AI Space Explorer',    // Advanced space exploration
  'Stellaris: AI Space Explorer',
  'Phenomenon Explorer AI Suite',       // Paranormal investigation suite
  'ENTER THE MATRIX GPT (NEO👁️MATRIX GPT)', // Reality exploration
  'NEO👁️MATRIX GPT',
  'NEOMATRIX GPT',
  'STAGEMASTER AI SUITE',              // Complete performing arts suite
  'STAGE MASTER SUITE',
  'Drill Baby Drill Ai Suite For Oil & Gas', // Complete industry suite
];

// TIER 2: Highly Impressive & Powerful GPTs - Professional powerhouses
export const TIER_2_PROFESSIONAL_GPTS = [
  'Illuminous World Data Explorer GPT', // Global prediction engine  
  'Criminologist GPT',                 // Advanced investigation system
  'Nikola Tesla GPT',                  // Scientific innovation engine
  'Data Research Analysis Report GPT',  // Advanced analytics
  'Cyber Security GPT',                // Security infrastructure
  'FACT CHECKER GPT',                  // Truth verification system
  'Sustainable Futures GPT',          // Environmental solutions
  'Global Peace Restoration Strategist GPT', // World peace engineering
  'Uncovering Hidden Historical Patterns GPT', // Deep pattern recognition
  'IF AI RULED THE WORLD',             // AI governance simulation
  'Movie Script Writer GPT',          // Professional screenwriting
  'Resurrection GPT',                 // Memory simulation technology
  'Social Safety Net GPT',           // Social system design
  'MULTITASKER GPT',                 // Multi-capability system
  'Customizable GPT Maker',          // AI creation tool
];

// TIER 3: Specialized & Impressive GPTs - Domain experts
export const TIER_3_SPECIALIST_GPTS = [
  'AUTOMOBILE GPT',                    // Complete automotive expertise
  'Survivalist GPT',                  // Ultimate survival companion
  'Graphic & Cover Design GPT',       // Professional design
  'TALK TO HISTORY GPT',             // Historical interaction
  'The Resume & Job Finder Ai Suite', // Career advancement
  'Training Manual Generator GPT',    // Professional training systems
  'ALAN WATTS GPT',                  // Philosophical wisdom system
  'Albert Einstein GPT',             // Scientific genius simulation
  'Trader GPT',                      // Financial trading system
  'Indiana Archeologist GPT',        // Archaeological exploration
  'Playwriter GPT',                  // Professional theater creation
  'Historical Apothecary GPT',       // Traditional medicine system
  'Tattoo Designer GPT',             // Professional tattoo design
  'Firearms Safety Instructor GPT',   // Professional safety training
  'Firefighter GPT',                 // Emergency response system
  'Genome GPT',                      // Genetic analysis system
  'Game Design Document / Developer GPT', // Game development system
];

// TIER 4: Useful & Solid GPTs - Reliable tools
export const TIER_4_UTILITY_GPTS = [
  'Travel Advisor GPT',
  'Clarity Omni GPT', 
  'Food Quality Inspector GPT',
  'Home Renovator GPT',
  'Fisherman GPT',
  'Agronomus AI Farming Expert',
  'Antique and Collectible Appraisal GPT',
  'Insurance Claims GPT',
  'Cannabis GPT',
  'LEARN ANY COURSE GPT',
  'Public Defender GPT',
  'Property Data Finder GPT',
  'Algebraic Expression Inventor GPT',
  'LEARN ANY SKILL GPT',
  'MATERIAL VALUATION GPT',
  'MicroSaaS GPT',
  'Marriage Mender GPT',
  'Solar Land Assessor GPT',
  'Home-Schooling Assistant GPT',
  'Pharmaceutical Assistant GPT',
  'Contract Review Bot',
  'Sora Prompt Assistant',
  'PHARMA RESEARCH PRO',
  'Mixologist GPT',
  'Chef "Sizzle" AI Culinary Assistant',
  'RESTYLE ME GPT',
  'Binary-Text-Image Converter GPT',
  'Luma Dream Machine Prompt Assistant',
  'Restaurant Menu Maker GPT',
  'Course Maker GPT',
  'Taxes GPT',
  'Predictive Credit Score Checker GPT',
  'Name Insight Research & Predictor GPT',
  'Coloring Book Generator GPT',
  'Native American History Time Machine GPT',
  'Public Testimony Writer GPT',
  'Startup Validator GPT',
  'Business Plan Generator GPT',
  'Fungus GPT',
  'Dream Interpreter GPT',
  'Podcast Script Writer GPT',
  'Person Information Finder GPT',
  'PPTx Powerpoint Maker GPT',
  'Grant Writer GPT',
  'Universal Basic Income Strategist GPT',
  'Artwork & Vintage Appraisal GPT',
  'Sketch Artist GPT',
  'AI Tools Finder GPT',
  'Article and Blog Rewriter GPT',
  'Video Second-by-Second Analysis GPT',
  'MiddleJourney Midjourney Prompting Assistant',
  'Legal Draftsmith GPT',
  'Custom GPT Ideas & Brainstorming Assistant',
  'Music Melodies & Lessons GPT',
  'Children\'s Picture Book Maker GPT',
  'Movie Scene Maker GPT',
  'Mental Wellness GPT',
];

// TIER 5: Entertainment & Simple GPTs - Fun but less complex
export const TIER_5_ENTERTAINMENT_GPTS = [
  'Trivia Night GPT',                 // Fun but simple trivia
  'Imagination Traveler GPT',         // Creative storytelling
  'Celebrity Chatline GPT',           // Entertainment chat
  'Oraculum',                         // Mystery/entertainment
  'Probability GPT',                  // Probability calculations
  'Interpretis',                      // Word etymology
  'Titanic Resurrections GPT',        // Historical recreation
  'Historical Headlines GPT',         // Historical news simulation
  'Alchemist Scientist GPT',          // Historical science simulation
  'King Blueberry GPT',              // Algebraic conversion
  'Quiz Maker Ai',                   // Simple quiz creation
  'Snoop Image Ai',                  // Image detection
  'Mary Magdalene GPT',              // Religious conversation
  'Sophia Aeterna AI',               // Philosophical wisdom
];

/**
 * Get power tier for a GPT tool
 */
export const getGPTPowerTier = (tool: Tool): number => {
  const title = tool.title;
  
  if (TIER_1_LEGENDARY_GPTS.some(gpt => title.includes(gpt))) return 1;
  if (TIER_2_PROFESSIONAL_GPTS.some(gpt => title.includes(gpt))) return 2;
  if (TIER_3_SPECIALIST_GPTS.some(gpt => title.includes(gpt))) return 3;
  if (TIER_4_UTILITY_GPTS.some(gpt => title.includes(gpt))) return 4;
  if (TIER_5_ENTERTAINMENT_GPTS.some(gpt => title.includes(gpt))) return 5;
  
  return 6; // Unknown/unclassified
};

/**
 * Get power score for sorting (lower number = higher priority)
 */
export const getGPTPowerScore = (tool: Tool): number => {
  const tier = getGPTPowerTier(tool);
  
  // Add position within tier for fine-tuning
  const getTierPosition = (gptTitle: string, tierArray: string[]): number => {
    return tierArray.findIndex(gpt => gptTitle.includes(gpt));
  };
  
  const title = tool.title;
  let position = 0;
  
  switch (tier) {
    case 1:
      position = getTierPosition(title, TIER_1_LEGENDARY_GPTS);
      break;
    case 2:
      position = getTierPosition(title, TIER_2_PROFESSIONAL_GPTS);
      break;
    case 3:
      position = getTierPosition(title, TIER_3_SPECIALIST_GPTS);
      break;
    case 4:
      position = getTierPosition(title, TIER_4_UTILITY_GPTS);
      break;
    case 5:
      position = getTierPosition(title, TIER_5_ENTERTAINMENT_GPTS);
      break;
  }
  
  // Calculate final score (tier * 1000 + position within tier)
  return tier * 1000 + Math.max(0, position);
};

/**
 * Sort GPTs by power ranking
 */
export const sortGPTsByPowerRanking = (tools: Tool[]): Tool[] => {
  return tools.sort((a, b) => {
    const scoreA = getGPTPowerScore(a);
    const scoreB = getGPTPowerScore(b);
    
    // Lower score = higher priority
    if (scoreA !== scoreB) {
      return scoreA - scoreB;
    }
    
    // Fall back to rating and title
    const ratingDiff = (b.rating || 0) - (a.rating || 0);
    if (ratingDiff !== 0) return ratingDiff;
    
    return a.title.localeCompare(b.title);
  });
};

console.log('🚀 GPT Power Ranking system loaded - Legendary GPTs will dominate!');