import { Tool } from "@/types/tools";

// Game-related keywords and synonyms
const GAME_KEYWORDS = [
  'game', 'games', 'gaming', 'video game', 'videogame', 'video games',
  'game design', 'game development', 'game dev', 'gamedev', 'game creation',
  'game maker', 'game builder', 'game generator', 'game studio',
  '3d game', '3d games', 'three dimensional game', 'interactive game',
  'metaverse', 'virtual world', 'virtual reality game', 'vr game',
  'unity', 'unreal engine', 'unreal', 'game engine', 'godot',
  'indie game', 'indie games', 'rpg', 'action game', 'adventure game',
  'simulation', 'simulator', 'strategy game', 'puzzle game',
  'multiplayer', 'single player', 'singleplayer', 'co-op', 'cooperative',
  'game script', 'game story', 'game narrative', 'game mechanics',
  'level design', 'game assets', 'game art', 'game graphics',
  'game audio', 'game music', 'game sound', 'game soundtrack',
  'playable', 'interactive', 'immersive', 'engaging gameplay',
  'text to game', 'prompt to game', 'ai game', 'procedural generation',
  'npc', 'npc ai', 'game character', 'game characters',
  'text-to-game', 'no-code game', 'drag and drop game',
  'skybox', '360 panorama', 'vr world', 'world generation',
  'game ideation', 'game concept', 'gdd',
  'ai dungeon', 'infinite craft', 'gameer', 'gdevelop', 'buildbox', 'construct',
  'scenario', 'inworld', 'ludo ai', 'decart oasis'
];

// Game-related tools and their variations
const GAME_TOOL_NAMES = [
  'game design document',
  'gdd',
  'seele',
  'seele video game generator',
  'game script writer',
  'game developer',
  'unity assistant',
  'unreal helper',
  'gameer',
  'gdevelop',
  'buildbox',
  'construct 3',
  'ai dungeon',
  'infinite craft',
  'blockade labs',
  'skybox ai',
  'genie 3',
  'meta worldgen',
  'promethean ai',
  'rodin gen',
  'selfcad',
  'anything world',
  'ready player me',
  'avaturn',
  'didimo',
  'rive',
  'decart oasis',
  'ludo ai',
  'mochi diffusion',
  'scenario',
  'meshy',
  'kaedim',
  'inworld ai',
  'inworld',
  'core by manticore'
];

// Common game creation typos and variations
const GAME_TYPOS = {
  'gaem': 'game',
  'gam': 'game',
  'games': 'game',
  'gamin': 'gaming',
  'gameing': 'gaming',
  'vid game': 'video game',
  'videogam': 'video game',
  'video gam': 'video game',
  'game creat': 'game creation',
  'game mak': 'game maker',
  'game buil': 'game builder',
  'game gen': 'game generator',
  'game desing': 'game design',
  'game developement': 'game development',
  'game devlopment': 'game development',
  'unity3d': 'unity',
  'unreal engin': 'unreal engine',
  'metavers': 'metaverse',
  'vr gam': 'vr game',
  'virual reality': 'virtual reality',
  'interactiv': 'interactive',
  'immersiv': 'immersive',
  '3d gam': '3d game',
  'three d game': '3d game',
  'txt to game': 'text to game',
  'prompt to gam': 'prompt to game'
};

export const matchGameTools = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  const lowerCategory = tool.category?.toLowerCase() || '';

  // Handle typos first
  let correctedTerm = lowerSearchTerm;
  for (const [typo, correction] of Object.entries(GAME_TYPOS)) {
    if (correctedTerm.includes(typo)) {
      correctedTerm = correctedTerm.replace(new RegExp(typo, 'g'), correction);
    }
  }

  // Check for exact game keyword matches
  for (const keyword of GAME_KEYWORDS) {
    if (correctedTerm.includes(keyword) || lowerSearchTerm.includes(keyword)) {
      // Check if tool is game-related
      if (
        lowerTitle.includes('game') ||
        lowerDescription.includes('game') ||
        lowerTags.some(tag => tag.includes('game')) ||
        lowerCategory.includes('game') ||
        lowerTitle.includes('seele') ||
        lowerTitle.includes('unity') ||
        lowerTitle.includes('unreal') ||
        lowerDescription.includes('3d') ||
        lowerDescription.includes('metaverse') ||
        lowerDescription.includes('interactive') ||
        lowerDescription.includes('playable')
      ) {
        return true;
      }
    }
  }

  // Check for game tool name matches
  for (const toolName of GAME_TOOL_NAMES) {
    if (correctedTerm.includes(toolName) || lowerSearchTerm.includes(toolName)) {
      return true;
    }
  }

  // Special handling for specific game-related searches
  if (correctedTerm.includes('video') && correctedTerm.includes('game')) {
    return lowerTitle.includes('game') || lowerDescription.includes('game') || 
           lowerTags.some(tag => tag.includes('game'));
  }

  if (correctedTerm.includes('3d') && (correctedTerm.includes('game') || correctedTerm.includes('creation'))) {
    return lowerTitle.includes('seele') || lowerDescription.includes('3d') ||
           lowerDescription.includes('game') || lowerTitle.includes('game');
  }

  return false;
};

export const scoreGameTools = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  
  let score = 0;

  // High priority for exact game matches
  if (lowerTitle.includes('seele') && (lowerSearchTerm.includes('game') || lowerSearchTerm.includes('video'))) {
    score += 1000;
  }

  if (lowerTitle.includes('game design document') && lowerSearchTerm.includes('game')) {
    score += 950;
  }

  // Title matches
  if (lowerTitle.includes('game') && lowerSearchTerm.includes('game')) {
    score += 800;
  }

  // Description matches
  if (lowerDescription.includes('game') && lowerSearchTerm.includes('game')) {
    score += 600;
  }

  // Tag matches
  for (const tag of lowerTags) {
    if (tag.includes('game') && lowerSearchTerm.includes('game')) {
      score += 400;
    }
    if (tag.includes('3d') && lowerSearchTerm.includes('3d')) {
      score += 350;
    }
  }

  // Specific keyword boosts
  const gameKeywords = ['video game', 'game creation', 'game development', '3d game', 'game maker'];
  for (const keyword of gameKeywords) {
    if (lowerSearchTerm.includes(keyword)) {
      if (lowerTitle.includes(keyword) || lowerDescription.includes(keyword)) {
        score += 700;
      }
    }
  }

  // Boost for AI game creation tools
  if (lowerDescription.includes('ai') && lowerDescription.includes('game')) {
    score += 300;
  }

  // Boost for 3D and metaverse tools
  if (lowerDescription.includes('3d') || lowerDescription.includes('metaverse')) {
    score += 250;
  }

  return score;
};