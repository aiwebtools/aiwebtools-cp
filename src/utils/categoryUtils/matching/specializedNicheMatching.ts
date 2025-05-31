
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getSpecializedNicheTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔧 SPECIALIZED & NICHE enhanced matching for: ${categoryName}`);
  
  // Priority Specialized & Niche Tools (first priority - user specified)
  const prioritySpecializedNicheTools = [
    'TALK TO THE GODS GPT',
    'Talk to the Gods GPT',
    'Mary Magdalene GPT',
    '🕊️Mary Magdalene GPT',
    'Oraculum – The Revealer of Hidden "Truths"',
    'Oraculum',
    'Sophia Aeterna AI',
    'Sophia Aeterna',
    'ALAN WATTS GPT',
    'Alan Watts GPT',
    'Native American History Time Machine GPT - (Special Edition)',
    'Native American History Time Machine GPT',
    'Historical Map Explorer GPT',
    'Royal Family Tree GPT',
    'Phenomenon Explorer AI Suite',
    'Phenomenon Investigator Suite',
    'Engineering GPT AI Suite',
    'Engineering GPT Suite',
    'Firefighter GPT',
    'Survivalist GPT',
    'Firearms Safety Instructor GPT',
    'Social Safety Net GPT',
    'Criminologist GPT',
    'Real Estate Advisor GPT',
    'Legal Consultant GPT',
    'Home Services GPT',
    'Construction Manager GPT',
    'Automotive Consultant GPT',
    'Culinary Expert GPT',
    'Graphic Design GPT',
    'Photography Assistant GPT',
    'Music Producer GPT',
    'Environmental Advisor GPT',
    'Aquaculture Specialist GPT',
    'Fungus GPT – AI Mushroom Specialist',
    'Fungus GPT',
    'Fungus Whisperer GPT',
    'Financial Advisor GPT',
    'Urban Planner GPT',
    'Security Consultant GPT',
    'Public Defender GPT',
    '"IF AI RULED THE WORLD" - AI SIMULATION GPT',
    'IF AI RULED THE WORLD',
    'Artwork & Vintage Appraisal GPT',
    'Antique and Collectible Appraisal GPT',
    'MATERIAL VALUATION GPT',
    'MATERIUMOR',
    'Trader GPT',
    'Taxes GPT',
    'Cyber Security GPT',
    'Tattoo Designer GPT',
    'Tattoo GPT',
    'AUTOMOBILE GPT',
    'Automobile GPT',
    '🌿Cannabis GPT',
    'Cannabis GPT',
    'Fisherman GPT',
    'Fisherman GPT🎣😊',
    'Home Renovator GPT',
    'ImmortalizeME',
    'Dream Interpreter GPT',
    'Dream Interpreter',
    'Food Quality Inspector GPT',
    'TIME MACHINE GPT',
    'Time Machine GPT',
    'Titanic Resurrections GPT',
    'Historical Headlines GPT',
    'Uncovering Hidden Historical Patterns GPT',
    'Interpretis 🕰️',
    'Interpretis',
    'Stellaris: 🚀AI Space Explorer',
    'Stellaris',
    'Nikola Tesla GPT',
    'Alchemist Scientist GPT',
    'Genome GPT',
    'Global Peace Restoration Strategist GPT',
    'ENTER THE MATRIX GPT (NEO👁️MATRIX GPT)',
    'NEO👁️MATRIX GPT',
    'ENTER THE MATRIX GPT',
    'Legislator Link GPT',
    'Customer Service AI Assistant',
    'Real Estate Agent GPT',
    'Home Repair Advisor GPT',
    'Cybersecurity Consultant GPT',
    'Auto Mechanic GPT',
    'Interior Designer GPT',
    'Chef GPT',
    'Chef "Sizzle" AI Culinary Assistant',
    'Fishing Guide GPT',
    'Agricultural Assistant',
    'Legal Document Generator GPT',
    'Legal Advisor GPT',
    'Electrician GPT',
    'Plumber GPT',
    'Arborist GPT',
    'Mixologist GPT',
    'Policy Analysis Expert GPT',
    'Regulatory Compliance Advisor GPT',
    'International Relations Analyst GPT',
    'Public Safety Policy Designer GPT',
    'Urban Planning Policy GPT',
    'Electoral Policy Advisor GPT',
    'Legislative Drafting Assistant GPT',
    'Policy Research Methodology GPT',
    'Policy Impact Evaluator GPT',
    'RESTYLE ME GPT',
    'Binary-Text-Image Converter GPT',
    'Unitree Robotics',
    'Boston Dynamics',
    'Agility Robotics',
    'Honda Robotics',
    'Tesla Bot',
    'Hanson Robotics',
    'SoftBank Robotics',
    'PAL Robotics',
    'Ubtech Robotics',
    'Figure AI',
    '1X',
    'Clone Robotics',
    'Sanctuary AI',
    'Engineered Arts',
    'Apptronik',
    'Spiritual Guidance AI',
    'Life Purpose Guide',
    'Chakra Balancer',
    'Mindfulness Companion',
    'Ancient Egypt Time Machine GPT',
    'World History Trivia GPT',
    'This Day in History GPT',
    'Ancient Roman Empire Time Machine GPT',
    'Age of Exploration Time Machine GPT',
    'Time Traveler\'s Almanac GPT',
    'Vectra AI',
    'CrowdStrike Falcon',
    'Kensho',
    'AlphaSense',
    'Yodlee',
    'Mint',
    'Zest AI',
    'LexisNexis+',
    'Westlaw Edge',
    'Kira Systems',
    'ROSS Intelligence',
    'Luminance',
    'Buy Forex Expert Advisor Online',
    'D-Wave',
    'Uber',
    'Insect Study Tool',
    'Fruit Nutrition Guide',
    'Recipe Generator',
    'AiResumeBuilder',
    'Final Round AI',
    'DistroKid',
    'Nucleus AI Inbound Call Agents Platform',
    '1000+ AI Tools List'
  ];

  const specializedNicheKeywords = [
    'talk to the gods', 'mary magdalene', 'oraculum', 'sophia aeterna', 'alan watts',
    'native american history', 'historical map', 'royal family tree', 'phenomenon explorer',
    'engineering gpt suite', 'firefighter', 'survivalist', 'firearms safety', 'social safety net',
    'criminologist', 'real estate advisor', 'legal consultant', 'home services', 'construction manager',
    'automotive consultant', 'culinary expert', 'graphic design', 'photography assistant',
    'music producer', 'environmental advisor', 'aquaculture specialist', 'fungus gpt',
    'financial advisor', 'urban planner', 'security consultant', 'public defender',
    'if ai ruled the world', 'artwork vintage appraisal', 'antique collectible appraisal',
    'material valuation', 'trader gpt', 'taxes gpt', 'cyber security', 'tattoo designer',
    'automobile gpt', 'cannabis gpt', 'fisherman gpt', 'home renovator', 'immortalizeme',
    'dream interpreter', 'food quality inspector', 'time machine', 'titanic resurrections',
    'historical headlines', 'uncovering hidden patterns', 'interpretis', 'stellaris',
    'nikola tesla', 'alchemist scientist', 'genome gpt', 'global peace restoration',
    'enter the matrix', 'neo matrix', 'legislator link', 'customer service ai',
    'real estate agent', 'home repair advisor', 'cybersecurity consultant', 'auto mechanic',
    'interior designer', 'chef gpt', 'fishing guide', 'agricultural assistant',
    'legal document generator', 'legal advisor', 'electrician gpt', 'plumber gpt',
    'arborist gpt', 'mixologist gpt', 'policy analysis expert', 'regulatory compliance',
    'international relations analyst', 'public safety policy', 'urban planning policy',
    'electoral policy advisor', 'legislative drafting', 'policy research methodology',
    'policy impact evaluator', 'restyle me', 'binary text converter', 'unitree robotics',
    'boston dynamics', 'agility robotics', 'honda robotics', 'tesla bot', 'hanson robotics',
    'softbank robotics', 'pal robotics', 'ubtech robotics', 'figure ai', 'clone robotics',
    'sanctuary ai', 'engineered arts', 'apptronik', 'spiritual guidance', 'life purpose guide',
    'chakra balancer', 'mindfulness companion', 'ancient egypt', 'world history trivia',
    'this day in history', 'ancient roman empire', 'age of exploration', 'time traveler almanac',
    'vectra ai', 'crowdstrike falcon', 'kensho', 'alphasense', 'yodlee', 'mint', 'zest ai',
    'lexisnexis', 'westlaw edge', 'kira systems', 'ross intelligence', 'luminance',
    'forex expert advisor', 'd-wave', 'uber', 'insect study tool', 'fruit nutrition guide',
    'recipe generator', 'airesume builder', 'final round ai', 'distrokid',
    'nucleus ai inbound call', 'ai tools list', 'specialized', 'niche', 'specific', 'industry',
    'professional', 'expert', 'custom', 'tailored', 'focused', 'dedicated', 'particular',
    'unique', 'special purpose', 'domain specific', 'sector specific', 'field specific'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = specializedNicheKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('specialized') ||
      tool.category.toLowerCase().includes('niche') ||
      tool.category.toLowerCase().includes('specific') ||
      tool.category.toLowerCase().includes('professional') ||
      tool.category.toLowerCase().includes('industry') ||
      tool.category.toLowerCase().includes('spirituality') ||
      tool.category.toLowerCase().includes('historical') ||
      tool.category.toLowerCase().includes('cultural') ||
      tool.category.toLowerCase().includes('time') ||
      tool.category.toLowerCase().includes('mystical') ||
      tool.category.toLowerCase().includes('mysterious') ||
      tool.category.toLowerCase().includes('unusual') ||
      tool.category.toLowerCase().includes('robotics') ||
      tool.category.toLowerCase().includes('appraisal') ||
      tool.category.toLowerCase().includes('valuation') ||
      tool.category.toLowerCase().includes('policy') ||
      tool.category.toLowerCase().includes('automotive') ||
      tool.category.toLowerCase().includes('cannabis') ||
      tool.category.toLowerCase().includes('fishing') ||
      tool.category.toLowerCase().includes('renovation') ||
      tool.category.toLowerCase().includes('food quality') ||
      tool.category.toLowerCase().includes('tattoo') ||
      tool.category.toLowerCase().includes('dream') ||
      tool.category.toLowerCase().includes('cybersecurity') ||
      tool.category.toLowerCase().includes('legal') ||
      tool.category.toLowerCase().includes('government')
    );

    return keywordMatch || categoryMatch;
  });

  // Separate tools into priority groups
  const priorityTools = categoryMatchedTools.filter(tool => 
    prioritySpecializedNicheTools.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '') ||
      tool.title?.toLowerCase() === priorityName.toLowerCase()
    )
  );

  const remainingTools = categoryMatchedTools.filter(tool => 
    !priorityTools.includes(tool)
  );

  // Combine in priority order
  const finalTools = [
    ...priorityTools,
    ...remainingTools
  ];

  console.log(`✅ Found ${finalTools.length} specialized & niche tools (${priorityTools.length} priority, ${remainingTools.length} remaining)`);
  return finalTools;
};
