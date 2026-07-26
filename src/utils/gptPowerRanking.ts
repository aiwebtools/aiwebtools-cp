import { Tool } from "@/types/tools";

/**
 * GPT Power Ranking System — HUMANITY ASCENSION ORDER
 *
 * Reordered per Master's directive: the tools that help humanity the most —
 * free education, health, food, governance, truth, love, creativity, history,
 * cosmos — rise to the top. Spiritual/mystical/entertainment tools sink lower.
 */

// TIER 1: HUMANITY ASCENSION — Education, Health, Food, Governance, Truth, Love
export const TIER_1_LEGENDARY_GPTS = [
  // Free education for all (post-collapse learning + upliftment)
  'COLLEGE DEGREE GPT',                // Free full university education system
  'LEARN ANY COURSE GPT',              // Free course tutor
  'LEARN ANY SKILL GPT',               // Free skill mastery
  'Home-Schooling Assistant GPT',      // Parent-led education
  // Creating great books, movies, music (creativity fosters civilization)
  'BOOK WRITER GPT',                   // Great books
  'Children\'s Picture Book Maker GPT',
  'Coloring Book Generator GPT',
  'Movie Maker Studio AI SUITE',       // Complete movie production
  'MOVIE MAKER STUDIO',
  'Music Video Maker AI Studio',       // Music/creative production
  // Health & healing (medical access after collapse)
  'Personalized DR. GPT',              // Medical care access
  'Veterinarian GPT',                  // Pet & livestock care
  'Mental Wellness GPT',               // Mental health
  'Marriage Mender GPT',               // Love each other
  // Food, farming, survival (feed the world)
  'Survivalist GPT',                   // Post-collapse survival
  'Agronomus AI Farming Expert',       // Farming
  'Fisherman GPT',                     // Food from water
  'Food Quality Inspector GPT',        // Food safety
  'Home Renovator GPT',                // Shelter
  'Firefighter GPT',                   // Emergency response
  'Firearms Safety Instructor GPT',    // Safety training
  // Governance, law, democracy (rebuild civilization)
  'Legislator Link GPT',               // Direct political engagement
  'Legislation Writer GPT',            // Draft real laws
  'Public Testimony Writer GPT',       // Civic voice
  'Public Defender GPT',               // Legal defense
  'Legal Draftsmith GPT',
  'Contract Review Bot',
  // Truth, safety, mutual aid (help each other)
  'FACT CHECKER GPT',                  // Truth in dark times
  'Cyber Security GPT',                // Digital defense
  'Social Safety Net GPT',             // Help each other
  'Universal Basic Income Strategist GPT',
  'Global Peace Restoration Strategist GPT',
  'Sustainable Futures GPT',
];

// TIER 2: HISTORY, COSMOS & TRUTH-SEEKING — Question history, explore reality
export const TIER_2_PROFESSIONAL_GPTS = [
  // History time-machines & questioning history
  'TIME MACHINE GPT',
  'TALK TO HISTORY GPT',
  'Native American History Time Machine GPT',
  'Historical Headlines GPT',
  'Uncovering Hidden Historical Patterns GPT',
  'Indiana Archeologist GPT',
  'Titanic Resurrections GPT',
  'Historical Apothecary GPT',
  // Cosmos, science, questioning reality
  'Stellaris: 🚀AI Space Explorer',
  'Stellaris: AI Space Explorer',
  'Phenomenon Explorer AI Suite',
  'Nikola Tesla GPT',
  'Albert Einstein GPT',
  'Illuminous World Data Explorer GPT',
  'Genome GPT',
  'Alchemist Scientist GPT',
  'Fungus GPT',
];

// TIER 3: PROFESSIONAL POWERHOUSES — Creativity, careers, industry
export const TIER_3_SPECIALIST_GPTS = [
  'Engineering GPT AI Suite',
  'STAGEMASTER AI SUITE',
  'STAGE MASTER SUITE',
  'Movie Script Writer GPT',
  'Playwriter GPT',
  'Movie Scene Maker GPT',
  'Graphic & Cover Design GPT',
  'Music Melodies & Lessons GPT',
  'Podcast Script Writer GPT',
  'Training Manual Generator GPT',
  'The Resume & Job Finder Ai Suite',
  'Business Plan Generator GPT',
  'Startup Validator GPT',
  'MicroSaaS GPT',
  'Grant Writer GPT',
  'Data Research Analysis Report GPT',
  'Criminologist GPT',
  'Insurance Claims GPT',
  'Taxes GPT',
  'Trader GPT',
  'PERFECT PROMPT ENGINE',
  'MULTITASKER GPT',
  'Customizable GPT Maker',
  'Custom GPT Ideas & Brainstorming Assistant',
  'G-Mode GPT',
  'Game Design Document / Developer GPT',
];

// TIER 4: USEFUL DOMAIN EXPERTS — Reliable specialist tools
export const TIER_4_UTILITY_GPTS = [
  'Drill Baby Drill Ai Suite For Oil & Gas',
  'Solar Land Assessor GPT',
  'Property Data Finder GPT',
  'MATERIAL VALUATION GPT',
  'Antique and Collectible Appraisal GPT',
  'Artwork & Vintage Appraisal GPT',
  'Predictive Credit Score Checker GPT',
  'Pharmaceutical Assistant GPT',
  'PHARMA RESEARCH PRO',
  'AUTOMOBILE GPT',
  'Travel Advisor GPT',
  'Cannabis GPT',
  'Tattoo Designer GPT',
  'Restaurant Menu Maker GPT',
  'Mixologist GPT',
  'Chef "Sizzle" AI Culinary Assistant',
  'Clarity Omni GPT',
  'Article and Blog Rewriter GPT',
  'Video Second-by-Second Analysis GPT',
  'PPTx Powerpoint Maker GPT',
  'Person Information Finder GPT',
  'AI Tools Finder GPT',
  // Creative fun / prompt helpers
  'RESTYLE ME GPT',
  'Sketch Artist GPT',
  'Sora Prompt Assistant',
  'Luma Dream Machine Prompt Assistant',
  'MiddleJourney Midjourney Prompting Assistant',
  'Course Maker GPT',
  'Quiz Maker Ai',
  'Algebraic Expression Inventor GPT',
  'Binary-Text-Image Converter GPT',
  'King Blueberry GPT',
  'ImmortalizeME',
  'ImmortalizeMe',
  'Resurrection GPT',
];

// TIER 5: SPIRITUAL, MYSTICAL & ENTERTAINMENT — Lower priority per Master's directive
export const TIER_5_ENTERTAINMENT_GPTS = [
  'TALK TO THE GODS GPT',
  'ENTER THE MATRIX GPT (NEO👁️MATRIX GPT)',
  'NEO👁️MATRIX GPT',
  'NEOMATRIX GPT',
  'ALAN WATTS GPT',
  'Mary Magdalene GPT',
  'Sophia Aeterna AI',
  'Oraculum',
  'Interpretis',
  'Dream Interpreter GPT',
  'Fortune Teller GPT',
  'Name Insight Research & Predictor GPT',
  'Probability GPT',
  'IF AI RULED THE WORLD',
  'Imagination Traveler GPT',
  'Celebrity Chatline GPT',
  'Trivia Night GPT',
  'Snoop Image Ai',
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