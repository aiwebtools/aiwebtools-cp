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

// Keywords for each subtype
const GAME_ENGINE_KEYWORDS = [
  "game engine", "unity", "unreal", "godot", "game maker", "rpg maker",
  "construct", "phaser", "defold", "cocos", "game studio", "cryengine"
];

const GAME_AI_KEYWORDS = [
  "game ai", "npc ai", "enemy ai", "pathfinding", "behavior tree",
  "game intelligence", "ai opponent", "bot ai", "game automation"
];

const GAME_ASSET_KEYWORDS = [
  "game asset", "sprite", "texture", "3d model", "game art", "pixel art",
  "game graphics", "character design", "environment art", "game texture",
  "scenario.ai", "leonardo", "game props", "game materials"
];

const STREAMING_KEYWORDS = [
  "stream", "twitch", "obs", "broadcast", "live stream", "streamlabs",
  "gaming stream", "stream overlay", "stream deck", "streaming tools"
];

const VIRTUAL_WORLDS_KEYWORDS = [
  "virtual world", "metaverse", "second life", "vr world", "virtual reality",
  "virtual environment", "3d world", "immersive", "virtual space", "sandbox"
];

const INTERACTIVE_MEDIA_KEYWORDS = [
  "interactive", "choose your own", "branching narrative", "interactive story",
  "interactive fiction", "visual novel", "interactive experience", "gamification"
];

const GAME_DESIGN_KEYWORDS = [
  "game design", "game document", "gdd", "game concept", "game mechanics",
  "level design", "game prototype", "game ideation", "ludo.ai", "game planning"
];

const NPC_CHARACTER_AI_KEYWORDS = [
  "npc", "character ai", "inworld", "convai", "game character", "dialogue ai",
  "conversational npc", "ai companion", "game dialogue", "character engine"
];

const GAME_DEVELOPMENT_KEYWORDS = [
  "game development", "game dev", "game programming", "game coding",
  "indie game", "game builder", "rosebud", "game creation", "game maker"
];

const ESPORTS_KEYWORDS = [
  "esports", "competitive gaming", "tournament", "ranking", "leaderboard",
  "competitive", "pro gaming", "gaming stats", "match analysis"
];

const VR_AR_GAMING_KEYWORDS = [
  "vr gaming", "ar gaming", "virtual reality game", "augmented reality",
  "oculus", "quest", "vr experience", "mixed reality", "xr gaming"
];

const TRIVIA_QUIZ_KEYWORDS = [
  "trivia", "quiz", "quiz maker", "trivia night", "game show", "knowledge game",
  "question game", "brain game", "puzzle game", "word game"
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
  
  const allKeywords = [
    ...GAME_ENGINE_KEYWORDS, ...GAME_AI_KEYWORDS, ...GAME_ASSET_KEYWORDS,
    ...STREAMING_KEYWORDS, ...VIRTUAL_WORLDS_KEYWORDS, ...INTERACTIVE_MEDIA_KEYWORDS,
    ...GAME_DESIGN_KEYWORDS, ...NPC_CHARACTER_AI_KEYWORDS, ...GAME_DEVELOPMENT_KEYWORDS,
    ...ESPORTS_KEYWORDS, ...VR_AR_GAMING_KEYWORDS, ...TRIVIA_QUIZ_KEYWORDS,
    "gaming", "game", "gamer", "gameplay", "playable", "video game"
  ];
  
  return allKeywords.some(k => searchText.includes(k));
}

export function getGamingEntertainmentSubtags(tool: Tool): string[] {
  const subtags: string[] = [];
  const subtype = detectGamingEntertainmentSubtype(tool);
  
  if (subtype) {
    subtags.push(subtype);
  }
  
  return subtags;
}
