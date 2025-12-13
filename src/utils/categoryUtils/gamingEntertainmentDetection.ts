import { Tool } from "@/types/tools";

// Gaming & Entertainment subtypes
export const GAMING_ENTERTAINMENT_SUBTYPES = [
  "Game Engine",
  "Game AI",
  "Game Asset Generator",
  "Streaming Tools",
  "Virtual Worlds",
  "Interactive Media",
  "Game Design",
  "NPC & Character AI",
  "Game Development",
  "Esports & Competitive",
  "VR/AR Gaming",
  "Trivia & Quiz Games"
] as const;

export type GamingEntertainmentSubtype = typeof GAMING_ENTERTAINMENT_SUBTYPES[number];

// STRICT Keywords for each subtype - avoid generic terms
const GAME_ENGINE_KEYWORDS = [
  "game engine", "unity game", "unreal engine", "godot engine", "game maker studio", "rpg maker",
  "construct 3", "phaser engine", "defold", "cocos2d", "cryengine", "gamebryo"
];

const GAME_AI_KEYWORDS = [
  "game ai", "npc ai", "enemy ai", "game pathfinding", "behavior tree game",
  "ai opponent", "bot ai game", "game automation"
];

const GAME_ASSET_KEYWORDS = [
  "game asset", "game sprite", "game texture", "3d game model", "game art generator",
  "pixel art game", "game graphics generator", "game character design", "game environment art"
];

const STREAMING_KEYWORDS = [
  "stream overlay", "twitch tool", "obs plugin", "streamlabs", "streaming software",
  "stream deck", "stream alert", "stream widget", "broadcast tool", "live streaming"
];

const VIRTUAL_WORLDS_KEYWORDS = [
  "virtual world", "metaverse game", "vr world", "virtual reality world",
  "virtual environment game", "3d virtual world", "immersive world", "sandbox world"
];

const INTERACTIVE_MEDIA_KEYWORDS = [
  "interactive story", "choose your own adventure", "branching narrative game",
  "interactive fiction", "visual novel", "interactive game", "gamification tool"
];

const GAME_DESIGN_KEYWORDS = [
  "game design document", "game design tool", "game concept", "game mechanics designer",
  "level design tool", "game prototype", "game planning", "game ideation"
];

const NPC_CHARACTER_AI_KEYWORDS = [
  "npc character", "character ai game", "inworld ai", "convai", "game character ai",
  "game dialogue ai", "ai companion game", "character engine game"
];

const GAME_DEVELOPMENT_KEYWORDS = [
  "game development", "game dev tool", "game programming", "game coding",
  "indie game maker", "game builder", "rosebud ai", "game creation tool"
];

const ESPORTS_KEYWORDS = [
  "esports", "competitive gaming", "esports tournament", "gaming ranking",
  "gaming leaderboard", "pro gaming", "gaming stats", "match analysis esports"
];

const VR_AR_GAMING_KEYWORDS = [
  "vr gaming", "ar gaming", "virtual reality game", "augmented reality game",
  "oculus game", "quest game", "vr experience game", "mixed reality game", "xr gaming"
];

const TRIVIA_QUIZ_KEYWORDS = [
  "trivia game", "quiz game", "trivia night", "game show", "knowledge game",
  "brain game", "puzzle game", "word game", "party game"
];

export function detectGamingEntertainmentSubtype(tool: Tool): GamingEntertainmentSubtype | null {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(" ") || ""}`.toLowerCase();
  
  if (GAME_ENGINE_KEYWORDS.some(k => searchText.includes(k))) return "Game Engine";
  if (NPC_CHARACTER_AI_KEYWORDS.some(k => searchText.includes(k))) return "NPC & Character AI";
  if (GAME_AI_KEYWORDS.some(k => searchText.includes(k))) return "Game AI";
  if (GAME_ASSET_KEYWORDS.some(k => searchText.includes(k))) return "Game Asset Generator";
  if (STREAMING_KEYWORDS.some(k => searchText.includes(k))) return "Streaming Tools";
  if (VIRTUAL_WORLDS_KEYWORDS.some(k => searchText.includes(k))) return "Virtual Worlds";
  if (INTERACTIVE_MEDIA_KEYWORDS.some(k => searchText.includes(k))) return "Interactive Media";
  if (GAME_DESIGN_KEYWORDS.some(k => searchText.includes(k))) return "Game Design";
  if (GAME_DEVELOPMENT_KEYWORDS.some(k => searchText.includes(k))) return "Game Development";
  if (ESPORTS_KEYWORDS.some(k => searchText.includes(k))) return "Esports & Competitive";
  if (VR_AR_GAMING_KEYWORDS.some(k => searchText.includes(k))) return "VR/AR Gaming";
  if (TRIVIA_QUIZ_KEYWORDS.some(k => searchText.includes(k))) return "Trivia & Quiz Games";
  
  return null;
}

export function isGamingEntertainmentTool(tool: Tool): boolean {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(" ") || ""} ${tool.category || ""}`.toLowerCase();
  
  // Check explicit gaming category
  const categoryLower = (tool.category || '').toLowerCase();
  if (categoryLower.includes('gaming') || 
      categoryLower.includes('game ') ||
      categoryLower === 'game' ||
      categoryLower.includes('esports') ||
      categoryLower.includes('entertainment & gaming')) {
    return true;
  }
  
  // Check for gaming-specific tags
  const gamingTags = ['gaming', 'game engine', 'game development', 'esports', 'streaming tool', 
                      'game design', 'game ai', 'virtual world', 'trivia game'];
  if (tool.tags?.some(tag => gamingTags.some(gt => tag.toLowerCase().includes(gt)))) {
    return true;
  }
  
  // STRICT gaming keywords - avoid generic "game" alone
  const allGamingKeywords = [
    ...GAME_ENGINE_KEYWORDS, ...GAME_AI_KEYWORDS, ...GAME_ASSET_KEYWORDS,
    ...STREAMING_KEYWORDS, ...VIRTUAL_WORLDS_KEYWORDS, ...INTERACTIVE_MEDIA_KEYWORDS,
    ...GAME_DESIGN_KEYWORDS, ...NPC_CHARACTER_AI_KEYWORDS, ...GAME_DEVELOPMENT_KEYWORDS,
    ...ESPORTS_KEYWORDS, ...VR_AR_GAMING_KEYWORDS, ...TRIVIA_QUIZ_KEYWORDS,
    "gaming platform", "video game", "gaming tool", "game maker", "gameplay"
  ];
  
  return allGamingKeywords.some(k => searchText.includes(k));
}

export function getGamingEntertainmentSubtags(tool: Tool): string[] {
  const subtags: string[] = [];
  const subtype = detectGamingEntertainmentSubtype(tool);
  
  if (subtype) {
    subtags.push(subtype);
  }
  
  return subtags;
}
