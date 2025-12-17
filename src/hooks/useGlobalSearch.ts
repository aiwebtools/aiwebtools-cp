
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { allTools } from "@/data/toolsData";
import { searchTools } from "@/utils/searchUtils";
import { createTimePortalEffect } from "@/utils/timeEffects";
import { getCurrentToolCount } from "@/utils/toolCounter";

// ==================== LRU CACHE FOR SEARCH RESULTS ====================
// Caches the last 50 search queries to avoid recomputation on repeated searches

class LRUCache<K, V> {
  private maxSize: number;
  private cache: Map<K, V>;
  
  constructor(maxSize: number = 50) {
    this.maxSize = maxSize;
    this.cache = new Map();
  }
  
  get(key: K): V | undefined {
    if (!this.cache.has(key)) return undefined;
    
    // Move to end (most recently used)
    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  
  set(key: K, value: V): void {
    // Remove oldest if at capacity
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) this.cache.delete(firstKey);
    }
    
    // Remove existing to update position
    this.cache.delete(key);
    this.cache.set(key, value);
  }
  
  clear(): void {
    this.cache.clear();
  }
}

// Global search cache (persists across component re-renders)
const searchCache = new LRUCache<string, any[]>(50);

// ==================== INTELLIGENCE MAPS (precomputed, instant lookup) ====================

// 1. COMMON MISSPELLINGS → correct spelling
const TYPO_MAP: Record<string, string> = {
  // Major platforms
  "chatgtp": "chatgpt", "chatgot": "chatgpt", "chtgpt": "chatgpt", "chatgbt": "chatgpt",
  "cluade": "claude", "clade": "claude", "claued": "claude",
  "midjourny": "midjourney", "midjorney": "midjourney", "midjouney": "midjourney", "midjoureny": "midjourney",
  "perplexty": "perplexity", "perplexiy": "perplexity", "perpelxity": "perplexity",
  "runwya": "runway", "runwa": "runway", "ruwnay": "runway", "rnuway": "runway",
  "stabledifusion": "stable diffusion", "stablediffusion": "stable diffusion",
  "dallE": "dalle", "dall-e": "dalle", "dali": "dalle",
  "elevnlabs": "elevenlabs", "elevenlab": "elevenlabs", "11labs": "elevenlabs",
  "synthsia": "synthesia", "syntehsia": "synthesia",
  "heyegn": "heygen", "heygne": "heygen",
  "luam": "luma", "lumaa": "luma",
  "pikaa": "pika", "piak": "pika",
  "soar": "sora", "soraa": "sora",
  "gemni": "gemini", "gemnii": "gemini", "gimini": "gemini",
  "leonadro": "leonardo", "lenoardo": "leonardo",
  "notoin": "notion", "ntoion": "notion",
  "canav": "canva", "canvaa": "canva",
  "grammrly": "grammarly", "gramamrly": "grammarly",
  "jaspr": "jasper", "jaspre": "jasper",
  // Custom GPTs - Education/Learning
  "colege": "college", "collge": "college", "colleeg": "college", "colelge": "college", "colledge": "college",
  "leanr": "learn", "laern": "learn", "leran": "learn", "learnr": "learn",
  "skil": "skill", "skiil": "skill", "skll": "skill",
  "corse": "course", "coarse": "course", "coures": "course", "coursse": "course",
  "educaton": "education", "eductaion": "education", "educaiton": "education",
  // Custom GPTs - Other
  "survivlist": "survivalist", "survivlaist": "survivalist",
  "crinimologist": "criminologist", "criminoligist": "criminologist",
  "vetrinarian": "veterinarian", "veternarian": "veterinarian",
  "apotehcary": "apothecary", "apothecray": "apothecary",
  "alchemsit": "alchemist", "alchemits": "alchemist",
  "interpetis": "interpretis", "interpretsi": "interpretis",
  "oraclum": "oraculum", "oracluum": "oraculum",
  "resurection": "resurrection", "ressurection": "resurrection",
  "legistlation": "legislation", "legilsation": "legislation",
  "probabilty": "probability", "probablity": "probability",
  "phenomeon": "phenomenon", "phenomenn": "phenomenon",
  "archeologist": "archaeologist", "archeaologist": "archaeologist",
  "genone": "genome", "genoe": "genome",
  "manichaesim": "manicheism", "manichaeism": "manicheism",
  "buisness": "business", "busines": "business", "bussiness": "business",
  "writter": "writer", "writerr": "writer", "writr": "writer",
  "moive": "movie", "movei": "movie", "movvie": "movie",
  "tatto": "tattoo", "tatoo": "tattoo",
  "docter": "doctor", "doctr": "doctor",
  "helth": "health", "heatlh": "health", "healht": "health",
};

// Helper: Remove doubled letters (e.g., "learnn" → "learn", "anyy" → "any")
const removeDoubledLetters = (s: string): string => s.replace(/(.)\1+/g, '$1');

// Helper: Smart typo normalization
const normalizeTypos = (q: string): string => {
  let normalized = q.toLowerCase().trim();
  
  // Direct typo map lookup first
  if (TYPO_MAP[normalized]) return TYPO_MAP[normalized];
  
  // Remove doubled letters and check again
  const deduped = removeDoubledLetters(normalized);
  if (TYPO_MAP[deduped]) return TYPO_MAP[deduped];
  if (deduped !== normalized) normalized = deduped;
  
  // Handle multi-word queries (e.g., "learnn anyy skill")
  const words = normalized.split(/\s+/);
  if (words.length > 1) {
    const correctedWords = words.map(w => {
      if (TYPO_MAP[w]) return TYPO_MAP[w];
      const dedupedWord = removeDoubledLetters(w);
      if (TYPO_MAP[dedupedWord]) return TYPO_MAP[dedupedWord];
      return dedupedWord;
    });
    return correctedWords.join(' ');
  }
  
  return normalized;
};

// 2. ABBREVIATIONS → full names
const ABBREV_MAP: Record<string, string[]> = {
  "mj": ["midjourney"],
  "sd": ["stable diffusion"],
  "gpt": ["chatgpt", "gpt"],
  "gpt4": ["chatgpt", "gpt-4"],
  "gpt4o": ["chatgpt", "gpt-4o"],
  "llm": ["chatgpt", "claude", "gemini", "llama"],
  "ai": ["artificial intelligence", "ai"],
  "ml": ["machine learning", "runway ml"],
  "cv": ["computer vision", "resume"],
  "nlp": ["natural language"],
  "tts": ["text to speech", "elevenlabs"],
  "stt": ["speech to text", "whisper"],
  "t2v": ["text to video", "sora", "runway", "pika"],
  "t2i": ["text to image", "midjourney", "dalle", "stable diffusion"],
  "vid": ["video"],
  "img": ["image"],
  "aud": ["audio", "music"],
  "doc": ["document", "documentation"],
  "ppt": ["powerpoint", "presentation"],
  "pdf": ["document", "pdf"],
};

// 3. SYNONYMS → related terms (expanded for comprehensive intelligence)
const SYNONYM_MAP: Record<string, string[]> = {
  "picture": ["image", "photo", "visual"],
  "photo": ["image", "picture", "photography"],
  "film": ["video", "movie", "cinema", "sora", "runway", "veo", "pika", "luma"],
  "movie": ["film", "video", "cinema", "sora", "runway", "veo", "pika", "luma", "text to video", "video generation"],
  "cinema": ["movie", "film", "video"],
  "song": ["music", "audio", "melody"],
  "voice": ["audio", "speech", "tts", "sound", "elevenlabs"],
  "write": ["writing", "writer", "content", "text"],
  "code": ["coding", "programming", "developer"],
  "learn": ["education", "course", "training", "skill"],
  "money": ["finance", "trading", "investment", "budget"],
  "health": ["medical", "wellness", "doctor", "fitness"],
  "law": ["legal", "lawyer", "attorney", "contract"],
  "spirit": ["spiritual", "soul", "meditation", "philosophy"],
  "god": ["spiritual", "divine", "religious", "deity"],
  "chat": ["chatbot", "conversation", "assistant"],
  "bot": ["chatbot", "assistant", "agent"],
  "make": ["create", "generate", "build"],
  "create": ["make", "generate", "build", "design"],
  "edit": ["editing", "editor", "modify"],
  "fix": ["repair", "correct", "improve"],
  "find": ["search", "discover", "locate", "finder"],
  "exercise": ["fitness", "workout", "running", "gym"],
  "run": ["runway", "running", "execute"],
  "game": ["gaming", "video game", "game design"],
  "video": ["movie", "film", "sora", "runway", "veo", "pika", "luma", "video generation"],
  "sound": ["audio", "voice", "music", "sfx", "speech"],
  "sounds": ["audio", "voice", "music", "sfx", "speech"],
  "audio": ["sound", "voice", "music", "speech", "podcast"],
  "speech": ["voice", "audio", "tts", "text to speech"],
  "agent": ["agents", "automation", "workflow", "agentic", "autonomous", "operator"],
  "agents": ["agent", "automation", "workflow", "agentic", "autonomous", "operator", "lovable", "bolt", "n8n", "zapier"],
  "website": ["web", "site", "webpage", "landing page", "web builder"],
  "web": ["website", "site", "webpage", "internet"],
  "business": ["enterprise", "company", "startup", "productivity", "work", "professional"],
  "text to video": ["t2v", "video generation", "sora", "runway", "veo", "pika", "luma"],
  "text to speech": ["tts", "voice synthesis", "elevenlabs", "play.ht", "murf"],
};

// 4. MAJOR PLATFORM ALIASES
const PLATFORM_ALIASES: Record<string, string[]> = {
  "openai": ["chatgpt", "dalle", "sora", "whisper", "gpt"],
  "anthropic": ["claude"],
  "google": ["gemini", "bard", "vertex"],
  "meta": ["llama", "meta ai"],
  "microsoft": ["copilot", "bing", "azure"],
  "stability": ["stable diffusion", "stability ai"],
  "adobe": ["firefly", "photoshop", "premiere"],
};

// 5. INSTANT PHRASE → TOOL TITLES (bypasses heavy search for common phrases)
const PHRASE_TO_TOOLS: Record<string, string[]> = {
  // ==================== TEXT TO VIDEO ====================
  "text to video": ["Sora", "Sora 2", "SORA2 Text to Video Prompt Maker GPT", "Veo 3", "Google Veo 3", "Runway", "RunwayML", "Pika", "Pika Labs", "Luma Dream Machine", "Luma Dream Machine Prompt Assistant", "Kling AI", "HeyGen", "Synthesia", "Hailuo AI", "Higgsfield AI", "Movie Maker Studio AI SUITE"],
  "text-to-video": ["Sora", "Sora 2", "SORA2 Text to Video Prompt Maker GPT", "Veo 3", "Google Veo 3", "Runway", "RunwayML", "Pika", "Pika Labs", "Luma Dream Machine", "Luma Dream Machine Prompt Assistant", "Kling AI", "HeyGen", "Synthesia", "Hailuo AI"],
  "t2v": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Kling AI"],
  "txt to video": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine"],
  "video prompt": ["SORA2 Text to Video Prompt Maker GPT", "Luma Dream Machine Prompt Assistant", "Sora Prompt Assistant"],
  "video prompts": ["SORA2 Text to Video Prompt Maker GPT", "Luma Dream Machine Prompt Assistant", "Sora Prompt Assistant"],
  "text to video prompt": ["SORA2 Text to Video Prompt Maker GPT", "Luma Dream Machine Prompt Assistant", "Sora Prompt Assistant"],
  "video generator": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Kling AI", "HeyGen", "Synthesia"],
  "video generators": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Kling AI", "HeyGen", "Synthesia"],
  "ai video": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "HeyGen", "Synthesia", "Movie Maker Studio AI SUITE"],
  
  // ==================== VIDEO GENERATION ====================
  "video generation": ["Sora", "Sora 2", "Veo 3", "Google Veo 3", "Runway", "RunwayML", "Pika", "Pika Labs", "Luma Dream Machine", "Kling AI", "HeyGen", "Synthesia", "Hailuo AI", "Higgsfield AI", "Movie Maker Studio AI SUITE", "Music Video Maker AI Studio"],
  "generate video": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Kling AI", "HeyGen"],
  "create video": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Movie Maker Studio AI SUITE"],
  "make video": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Movie Maker Studio AI SUITE"],
  "video ai": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Kling AI", "HeyGen", "Synthesia"],
  "video tools": ["Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "Kling AI", "HeyGen", "Synthesia", "Movie Maker Studio AI SUITE", "Video Second-by-Second Analysis GPT"],
  
  // ==================== TEXT TO SPEECH ====================
  "text to speech": ["ElevenLabs", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI", "LOVO", "Speechify", "Amazon Polly", "Google Text-to-Speech"],
  "text-to-speech": ["ElevenLabs", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI", "LOVO", "Speechify"],
  "tts": ["ElevenLabs", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI", "LOVO", "Speechify"],
  "voice synthesis": ["ElevenLabs", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI"],
  "speech synthesis": ["ElevenLabs", "Play.ht", "Murf.ai", "WellSaid Labs"],
  "ai voice": ["ElevenLabs", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI", "LOVO"],
  "voice generator": ["ElevenLabs", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI"],
  "voice over": ["ElevenLabs", "Play.ht", "Murf.ai", "WellSaid Labs", "Speechify"],
  "voiceover": ["ElevenLabs", "Play.ht", "Murf.ai", "WellSaid Labs", "Speechify"],
  
  // ==================== SOUND & AUDIO ====================
  "sound": ["ElevenLabs", "Play.ht", "Murf.ai", "Suno", "Udio", "Music Melodies & Lessons GPT", "Resemble AI", "LOVO", "Speechify", "Podcast Script Writer GPT"],
  "sounds": ["ElevenLabs", "Play.ht", "Murf.ai", "Suno", "Udio", "Music Melodies & Lessons GPT", "Resemble AI", "LOVO", "Speechify"],
  "audio": ["ElevenLabs", "Play.ht", "Murf.ai", "Suno", "Udio", "Music Melodies & Lessons GPT", "Resemble AI", "LOVO", "Speechify", "Descript", "Podcast Script Writer GPT"],
  "audio tools": ["ElevenLabs", "Play.ht", "Murf.ai", "Suno", "Udio", "Music Melodies & Lessons GPT", "Descript", "Podcast Script Writer GPT"],
  "voice": ["ElevenLabs", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI", "LOVO", "Speechify"],
  "voice tools": ["ElevenLabs", "Play.ht", "Murf.ai", "WellSaid Labs", "Resemble AI", "LOVO"],
  "phone agent": ["ElevenLabs", "Vapi", "Bland AI", "Retell AI", "Air AI"],
  "voice agent": ["ElevenLabs", "Vapi", "Bland AI", "Retell AI", "Air AI"],
  "call agent": ["ElevenLabs", "Vapi", "Bland AI", "Retell AI", "Air AI"],
  
  // ==================== AGENTS ====================
  "agent": ["Lovable", "Bolt.new", "Replit Agent", "Emergent Agent", "n8n", "ChatGPT Operator", "Surf.new", "Manus", "Claude Computer Use", "OpenAI Agents", "Zapier", "Make.com", "Browser Use", "AgentGPT", "Auto-GPT", "BabyAGI", "MetaGPT"],
  "agents": ["Lovable", "Bolt.new", "Replit Agent", "Emergent Agent", "n8n", "ChatGPT Operator", "Surf.new", "Manus", "Claude Computer Use", "OpenAI Agents", "Zapier", "Make.com", "Browser Use", "AgentGPT", "Auto-GPT", "BabyAGI", "MetaGPT", "Comet", "Taxy AI", "Genspark Agent"],
  "ai agent": ["Lovable", "Bolt.new", "Replit Agent", "Emergent Agent", "n8n", "ChatGPT Operator", "Manus", "Claude Computer Use", "AgentGPT", "Auto-GPT"],
  "ai agents": ["Lovable", "Bolt.new", "Replit Agent", "Emergent Agent", "n8n", "ChatGPT Operator", "Surf.new", "Manus", "Claude Computer Use", "OpenAI Agents", "AgentGPT", "Auto-GPT", "BabyAGI"],
  "automation": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate", "IFTTT", "Workato", "Tray.io", "Bardeen"],
  "automation agent": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate", "IFTTT", "Workato"],
  "workflow": ["Zapier", "Make.com", "n8n", "Microsoft Power Automate", "IFTTT", "Workato", "Tray.io"],
  "coding agent": ["Lovable", "Bolt.new", "Replit Agent", "Cursor", "GitHub Copilot", "Codeium", "Tabnine"],
  "web agent": ["Claude Computer Use", "ChatGPT Operator", "Browser Use", "Surf.new", "Manus", "Comet", "Taxy AI"],
  "browser agent": ["Claude Computer Use", "ChatGPT Operator", "Browser Use", "Surf.new", "Manus", "Taxy AI"],
  
  // ==================== WEBSITE BUILDERS ====================
  "website": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace", "Carrd", "Vercel v0", "Durable AI", "10Web"],
  "build a website": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace", "Carrd", "Vercel v0"],
  "make a website": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace"],
  "create a website": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace"],
  "website builder": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace", "Carrd", "Durable AI"],
  "website generator": ["Lovable", "Bolt.new", "Webflow", "Framer", "Durable AI", "10Web", "Vercel v0"],
  "web builder": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace"],
  "landing page": ["Lovable", "Bolt.new", "Webflow", "Framer", "Carrd", "Unbounce"],
  "build website": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace"],
  "site builder": ["Lovable", "Bolt.new", "Webflow", "Framer", "Wix", "Squarespace"],
  
  // ==================== BUSINESS TOOLS ====================
  "business": ["Business Plan Generator GPT", "Startup Validator GPT", "MicroSaaS GPT", "Taxes GPT", "The Resume & Job Finder Ai Suite", "Grant Writer GPT", "Training Manual Generator GPT", "Data Research Analysis Report GPT", "MULTITASKER GPT"],
  "business tools": ["Business Plan Generator GPT", "Startup Validator GPT", "MicroSaaS GPT", "Taxes GPT", "The Resume & Job Finder Ai Suite", "Grant Writer GPT", "Training Manual Generator GPT", "Data Research Analysis Report GPT"],
  "startup": ["Startup Validator GPT", "Business Plan Generator GPT", "MicroSaaS GPT"],
  "business plan": ["Business Plan Generator GPT", "Startup Validator GPT"],
  "start a business": ["Business Plan Generator GPT", "Startup Validator GPT", "MicroSaaS GPT"],
  "company": ["Business Plan Generator GPT", "Startup Validator GPT", "MicroSaaS GPT", "Training Manual Generator GPT"],
  "enterprise": ["Business Plan Generator GPT", "Data Research Analysis Report GPT", "Training Manual Generator GPT"],
  "productivity": ["Notion", "ClickUp", "Asana", "Monday.com", "Todoist", "Trello", "MULTITASKER GPT"],
  "productivity tools": ["Notion", "ClickUp", "Asana", "Monday.com", "Todoist", "Trello", "MULTITASKER GPT"],
  
  // ==================== IMAGE GENERATION ====================
  "image": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI", "Ideogram", "Adobe Firefly", "Graphic & Cover Design GPT"],
  "image generation": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI", "Ideogram", "Adobe Firefly", "Flux"],
  "image generator": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI", "Ideogram", "Adobe Firefly"],
  "text to image": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI", "Ideogram", "Adobe Firefly", "Flux"],
  "ai image": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI", "Ideogram", "Adobe Firefly"],
  "generate image": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI", "Ideogram"],
  "make image": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI", "Ideogram"],
  "create image": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI", "Ideogram"],
  
  // ==================== MUSIC ====================
  "music": ["Suno", "Udio", "Music Melodies & Lessons GPT", "Music Video Maker AI Studio", "AIVA", "Soundraw", "Boomy"],
  "music generation": ["Suno", "Udio", "AIVA", "Soundraw", "Boomy", "Mubert"],
  "music generator": ["Suno", "Udio", "AIVA", "Soundraw", "Boomy"],
  "make music": ["Suno", "Udio", "Music Melodies & Lessons GPT", "AIVA", "Soundraw"],
  "create music": ["Suno", "Udio", "Music Melodies & Lessons GPT", "AIVA"],
  "ai music": ["Suno", "Udio", "AIVA", "Soundraw", "Boomy", "Mubert"],
  "song": ["Suno", "Udio", "Music Melodies & Lessons GPT"],
  "make a song": ["Suno", "Udio"],
  
  // Writing intents
  "write a book": ["BOOK WRITER GPT", "Article and Blog Rewriter GPT"],
  "want to write a book": ["BOOK WRITER GPT", "Article and Blog Rewriter GPT"],
  "i want to write a book": ["BOOK WRITER GPT", "Article and Blog Rewriter GPT"],
  "write book": ["BOOK WRITER GPT"],
  "book writing": ["BOOK WRITER GPT"],
  "write a story": ["BOOK WRITER GPT", "Movie Script Writer GPT"],
  "write a script": ["Movie Script Writer GPT", "Playwriter GPT"],
  "write a movie": ["Movie Script Writer GPT", "Movie Maker Studio AI SUITE"],
  "write a play": ["Playwriter GPT"],
  "write an article": ["Article and Blog Rewriter GPT"],
  "write a blog": ["Article and Blog Rewriter GPT"],
  "writing": ["BOOK WRITER GPT", "Article and Blog Rewriter GPT", "Movie Script Writer GPT", "Playwriter GPT", "Grammarly", "Jasper AI"],
  "writing tools": ["BOOK WRITER GPT", "Article and Blog Rewriter GPT", "Grammarly", "Jasper AI", "Writesonic"],
  
  // Learning intents
  "learn a skill": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT"],
  "want to learn": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT"],
  "i want to learn": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT"],
  "take a course": ["LEARN ANY COURSE GPT", "Course Maker GPT"],
  "go to college": ["COLLEGE DEGREE GPT"],
  "get a degree": ["COLLEGE DEGREE GPT"],
  "study": ["LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT"],
  "education": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT", "Home-Schooling Assistant GPT", "Course Maker GPT"],
  "education tools": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT", "COLLEGE DEGREE GPT", "Home-Schooling Assistant GPT"],
  
  // Video/movie intents (EXPANDED for all video production tools)
  "make a video": ["Movie Maker Studio AI SUITE", "Music Video Maker AI Studio", "Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine"],
  "create a video": ["Movie Maker Studio AI SUITE", "Music Video Maker AI Studio", "Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine"],
  "make a movie": ["Movie Maker Studio AI SUITE", "Movie Script Writer GPT", "Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine"],
  "i want to make a movie": ["Movie Maker Studio AI SUITE", "Movie Script Writer GPT", "Sora", "Sora 2", "Veo 3", "Runway"],
  "create a movie": ["Movie Maker Studio AI SUITE", "Movie Script Writer GPT", "Sora", "Sora 2", "Veo 3", "Runway"],
  "movie": ["Movie Maker Studio AI SUITE", "Movie Script Writer GPT", "Movie Scene Maker GPT", "Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine", "SORA2 Text to Video Prompt Maker GPT", "Luma Dream Machine Prompt Assistant"],
  "film": ["Movie Maker Studio AI SUITE", "Movie Script Writer GPT", "Sora", "Sora 2", "Veo 3", "Runway", "Pika", "Luma Dream Machine"],
  "video production": ["Movie Maker Studio AI SUITE", "Music Video Maker AI Studio", "Sora", "Sora 2", "Veo 3", "Runway", "Pika"],
  "make a music video": ["Music Video Maker AI Studio"],
  
  // Image intents
  "make an image": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI"],
  "create an image": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI"],
  "generate an image": ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo AI"],
  "make a picture": ["Midjourney", "DALL-E 3", "Stable Diffusion"],
  "design a logo": ["Graphic & Cover Design GPT", "Canva", "Looka"],
  "make a logo": ["Graphic & Cover Design GPT", "Canva", "Looka"],
  
  // Business intents
  "write a business plan": ["Business Plan Generator GPT"],
  "create a business plan": ["Business Plan Generator GPT"],
  "find a job": ["The Resume & Job Finder Ai Suite"],
  "get a job": ["The Resume & Job Finder Ai Suite"],
  "write a resume": ["The Resume & Job Finder Ai Suite"],
  "file taxes": ["Taxes GPT"],
  "do my taxes": ["Taxes GPT"],
  
  // Health intents
  "talk to a doctor": ["Personalized DR. GPT (Doctor GPT)"],
  "medical advice": ["Personalized DR. GPT (Doctor GPT)"],
  "health advice": ["Personalized DR. GPT (Doctor GPT)", "Mental Wellness GPT"],
  "mental health": ["Mental Wellness GPT"],
  "pet health": ["Veterinarian GPT"],
  "vet advice": ["Veterinarian GPT"],
  "health": ["Personalized DR. GPT (Doctor GPT)", "Mental Wellness GPT", "Veterinarian GPT", "Pharmaceutical Assistant GPT"],
  "health tools": ["Personalized DR. GPT (Doctor GPT)", "Mental Wellness GPT", "Veterinarian GPT"],
  
  // Spiritual/philosophy intents
  "talk to god": ["TALK TO THE GODS GPT"],
  "speak to god": ["TALK TO THE GODS GPT"],
  "talk to history": ["TALK TO HISTORY GPT", "TIME MACHINE GPT"],
  "time travel": ["TIME MACHINE GPT", "TALK TO HISTORY GPT"],
  "fortune telling": ["Fortune Teller GPT"],
  "read my fortune": ["Fortune Teller GPT"],
  "interpret my dream": ["Dream Interpreter GPT"],
  "what does my dream mean": ["Dream Interpreter GPT"],
  "spiritual": ["TALK TO THE GODS GPT", "ALAN WATTS GPT", "Sophia Aeterna AI", "Resurrection GPT", "Mary Magdalene GPT", "God Is Light GPT"],
  "spiritual tools": ["TALK TO THE GODS GPT", "ALAN WATTS GPT", "Sophia Aeterna AI", "Resurrection GPT"],
  
  // Legal intents
  "legal help": ["Public Defender GPT", "Legal Draftsmith GPT"],
  "write a contract": ["Contract Review Bot", "Legal Draftsmith GPT"],
  "review a contract": ["Contract Review Bot"],
  "legal": ["Public Defender GPT", "Legal Draftsmith GPT", "Contract Review Bot", "Legislation Writer GPT"],
  "legal tools": ["Public Defender GPT", "Legal Draftsmith GPT", "Contract Review Bot"],
  
  // Coding intents
  "build an app": ["Lovable", "Bolt.new", "Replit", "Vercel v0"],
  "make an app": ["Lovable", "Bolt.new", "Replit", "Vercel v0"],
  "create an app": ["Lovable", "Bolt.new", "Replit", "Vercel v0"],
  "coding": ["Lovable", "Bolt.new", "GitHub Copilot", "Cursor", "Replit", "Codeium", "Tabnine"],
  "coding tools": ["GitHub Copilot", "Cursor", "Lovable", "Bolt.new", "Replit", "Codeium"],
  "programming": ["GitHub Copilot", "Cursor", "Lovable", "Bolt.new", "Replit", "Codeium", "Tabnine"],
  
  // Fun/entertainment intents  
  "play trivia": ["Trivia Night GPT"],
  "trivia game": ["Trivia Night GPT"],
  "talk to a celebrity": ["Celebrity Chatline GPT"],
  "chat with celebrity": ["Celebrity Chatline GPT"],
  "make a game": ["Game Design Document / Developer GPT", "Seele Video Game Generator"],
  "create a game": ["Game Design Document / Developer GPT", "Seele Video Game Generator"],
  "game": ["Game Design Document / Developer GPT", "Seele Video Game Generator", "Trivia Night GPT"],
  "gaming": ["Game Design Document / Developer GPT", "Seele Video Game Generator"],
  
  // Question patterns - "how do I..."
  "how do i write a book": ["BOOK WRITER GPT"],
  "how do i make a video": ["Movie Maker Studio AI SUITE", "Sora", "Runway"],
  "how do i make an app": ["Lovable", "Bolt.new", "Replit"],
  "how do i learn": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT"],
  "how do i start a business": ["Business Plan Generator GPT", "Startup Validator GPT"],
  "how do i cook": ["Chef \"Sizzle\" AI Culinary Assistant"],
  "how do i trade": ["Trader GPT"],
  "how to write a book": ["BOOK WRITER GPT"],
  "how to make a video": ["Movie Maker Studio AI SUITE", "Sora", "Runway"],
  "how to make music": ["Suno", "Udio", "Music Melodies & Lessons GPT"],
  
  // "Help me..." patterns
  "help me write": ["BOOK WRITER GPT", "Article and Blog Rewriter GPT"],
  "help me learn": ["LEARN ANY SKILL GPT", "LEARN ANY COURSE GPT"],
  "help me code": ["Lovable", "GitHub Copilot", "Cursor"],
  "help me design": ["Graphic & Cover Design GPT", "Canva", "Figma"],
  "help me cook": ["Chef \"Sizzle\" AI Culinary Assistant"],
  "help me with taxes": ["Taxes GPT"],
  "help with resume": ["The Resume & Job Finder Ai Suite"],
  
  // "Best..." patterns
  "best ai for writing": ["BOOK WRITER GPT", "ChatGPT", "Claude"],
  "best ai for images": ["Midjourney", "DALL-E 3", "Stable Diffusion"],
  "best ai for video": ["Sora", "Runway", "Pika", "Veo 3"],
  "best ai for coding": ["GitHub Copilot", "Cursor", "Lovable"],
  
  // Specific task patterns
  "analyze data": ["Data Research Analysis Report GPT", "ChatGPT"],
  "check facts": ["FACT CHECKER GPT"],
  "fact check": ["FACT CHECKER GPT"],
  "find a person": ["Person Information Finder GPT"],
  "find property": ["Property Data Finder GPT"],
  "appraise antiques": ["Antique and Collectible Appraisal GPT"],
  "value antiques": ["Antique and Collectible Appraisal GPT"],
  "appraise art": ["Artwork & Vintage Appraisal GPT"],
  "value artwork": ["Artwork & Vintage Appraisal GPT"],
  "fix my home": ["Home Renovator GPT"],
  "home repair": ["Home Renovator GPT"],
  "go fishing": ["Fisherman GPT"],
  "fishing tips": ["Fisherman GPT"],
  "survival tips": ["Survivalist GPT"],
  "survive": ["Survivalist GPT"],
  "insurance claim": ["Insurance Claims GPT"],
  "file insurance": ["Insurance Claims GPT"],
  "tattoo design": ["Tattoo Designer GPT"],
  "get a tattoo": ["Tattoo Designer GPT"],
  "make a presentation": ["PPTx Powerpoint Maker GPT"],
  "create slides": ["PPTx Powerpoint Maker GPT"],
  "powerpoint": ["PPTx Powerpoint Maker GPT"],
  "write a grant": ["Grant Writer GPT"],
  "grant application": ["Grant Writer GPT"],
  "coloring book": ["Coloring Book Generator GPT"],
  "kids book": ["Children's Picture Book Maker GPT"],
  "children book": ["Children's Picture Book Maker GPT"],
  "make a quiz": ["Quiz Maker Ai"],
  "create a quiz": ["Quiz Maker Ai"],
  "podcast script": ["Podcast Script Writer GPT"],
  "write a podcast": ["Podcast Script Writer GPT"],
  
  // Chat/Assistant patterns
  "chatbot": ["ChatGPT", "Claude", "Gemini", "Perplexity", "Character.AI"],
  "chat": ["ChatGPT", "Claude", "Gemini", "Perplexity", "Character.AI"],
  "assistant": ["ChatGPT", "Claude", "Gemini", "Perplexity", "MULTITASKER GPT"],
  "ai assistant": ["ChatGPT", "Claude", "Gemini", "Perplexity", "MULTITASKER GPT"],
  
  // Design patterns
  "design": ["Canva", "Figma", "Adobe Firefly", "Graphic & Cover Design GPT", "Framer"],
  "design tools": ["Canva", "Figma", "Adobe Firefly", "Graphic & Cover Design GPT"],
  "graphic design": ["Canva", "Figma", "Adobe Firefly", "Graphic & Cover Design GPT"],
  
  // Research patterns
  "research": ["Perplexity", "ChatGPT", "Claude", "Data Research Analysis Report GPT", "FACT CHECKER GPT"],
  "research tools": ["Perplexity", "ChatGPT", "Claude", "Data Research Analysis Report GPT"],
};

// 6. INTENT KEYWORDS → tool types (fallback for partial matches)
const INTENT_MAP: Record<string, string[]> = {
  "want to write": ["book writer", "content", "writing"],
  "want to make video": ["video", "sora", "runway", "pika"],
  "want to make image": ["image", "midjourney", "dalle", "stable diffusion"],
  "want to learn": ["learn", "course", "education", "skill"],
  "want to code": ["coding", "developer", "programming"],
  "want to trade": ["trader", "trading", "finance"],
  "need help": ["assistant", "gpt", "helper"],
  "create music": ["music", "audio", "suno", "udio"],
};

// Helper: fast Levenshtein for strings (max 2 edits, extended length)
const quickLevenshtein = (a: string, b: string): number => {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 2) return 99;
  if (a.length > 15 || b.length > 15) return 99; // extended from 10 to handle longer words
  
  const m = a.length, n = b.length;
  const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i-1] === b[j-1] 
        ? dp[i-1][j-1] 
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
};

export const useGlobalSearch = () => {
  const [searchTerm, setSearchTermInternal] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [displayedCount, setDisplayedCount] = useState(50);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const toolStats = useMemo(() => getCurrentToolCount(), []);

  // Precompute lowercase fields once (keeps search snappy)
  const quickIndex = useMemo(() => {
    return allTools.map((tool) => {
      const t = tool.title?.toLowerCase() || "";
      const tNoSpace = t.replace(/[\s\-_]+/g, "");
      const words = t.split(/[\s\-_\u0026,.:()]+/).filter(w => w.length > 0);
      return {
        tool,
        t,
        tNoSpace,
        words,
        d: tool.description?.toLowerCase() || "",
        c: tool.category?.toLowerCase() || "",
        tags: tool.tags?.map(tag => tag.toLowerCase()) || [],
      };
    });
  }, []);

  // HYPER-INTELLIGENT instant search with LRU cache
  const quickSearch = useCallback((term: string) => {
    let qRaw = term.toLowerCase().trim();
    if (!qRaw) return [];

    // === CHECK CACHE FIRST (instant return for repeated searches) ===
    const cached = searchCache.get(qRaw);
    if (cached) return cached;

    // === STEP 0: INSTANT PHRASE MATCHING (bypasses all heavy computation) ===
    // Check for exact phrase matches first - this is O(1) lookup
    const phraseTools = PHRASE_TO_TOOLS[qRaw];
    if (phraseTools && phraseTools.length > 0) {
      // Find matching tools by title (case-insensitive)
      const matched: any[] = [];
      const remaining: any[] = [];
      
      for (const it of quickIndex) {
        const titleLower = it.t;
        const isMatch = phraseTools.some(pt => titleLower.includes(pt.toLowerCase()));
        if (isMatch) {
          matched.push(it.tool);
        } else {
          remaining.push(it.tool);
        }
      }
      
      // Sort matched tools by the order they appear in phraseTools
      matched.sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        const aIdx = phraseTools.findIndex(pt => aTitle.includes(pt.toLowerCase()));
        const bIdx = phraseTools.findIndex(pt => bTitle.includes(pt.toLowerCase()));
        return aIdx - bIdx;
      });
      
      const results = [...matched, ...remaining.slice(0, 50)];
      searchCache.set(qRaw, results);
      return results;
    }
    
    // Also check partial phrase matches (e.g., "i want to write" matches "i want to write a book")
    for (const [phrase, tools] of Object.entries(PHRASE_TO_TOOLS)) {
      if (phrase.startsWith(qRaw) || qRaw.startsWith(phrase)) {
        const matched: any[] = [];
        for (const it of quickIndex) {
          if (tools.some(pt => it.t.includes(pt.toLowerCase()))) {
            matched.push(it.tool);
          }
        }
        if (matched.length > 0) {
          // Continue with normal search but prepend matched tools
          const matchedTitles = new Set(matched.map(m => m.title));
          const rest = quickIndex
            .filter(it => !matchedTitles.has(it.tool.title))
            .slice(0, 30)
            .map(it => it.tool);
          const results = [...matched, ...rest];
          searchCache.set(qRaw, results);
          return results;
        }
      }
    }

    // === STEP 1: Normalize & expand query ===
    
    // Smart typo correction (handles doubled letters, common misspellings, multi-word)
    let q = normalizeTypos(qRaw);
    
    // Also keep original for prefix matching (in case typo correction went too far)
    const qOriginal = removeDoubledLetters(qRaw);
    
    // Expand abbreviations
    const abbrevExpansions = ABBREV_MAP[q] || [];
    
    // Get synonyms (but only for corrected single words)
    const synonyms = (q.split(/\s+/).length === 1) ? (SYNONYM_MAP[q] || []) : [];
    
    // Normalize compound words
    q = q
      .replace(/\s+/g, " ")
      .replace(/\brun way\b/g, "runway")
      .replace(/\bchat gpt\b/g, "chatgpt")
      .replace(/\bmid journey\b/g, "midjourney")
      .replace(/\bstable diffusion\b/g, "stablediffusion")
      .replace(/\bdall e\b/g, "dalle")
      .replace(/\beleven labs\b/g, "elevenlabs")
      .trim();

    const qNoSpace = q.replace(/\s+/g, "");
    const qOriginalNoSpace = qOriginal.replace(/\s+/g, "");

    // === STEP 2: Score all tools ===
    type Scored = { tool: any; score: number };
    const scored: Scored[] = [];

    for (let i = 0; i < quickIndex.length; i++) {
      const it = quickIndex[i];
      if (!it.t) continue;

      let score = 0;
      const isAIWebToolsGPT = it.tool.directUrl?.includes('lovable.app') || it.tool.directUrl?.includes('chatgpt.com/g/');

      // TIER 1: EXACT MATCH (highest priority)
      if (it.t === q || it.tNoSpace === qNoSpace) {
        score = 100000;
        if (isAIWebToolsGPT) score += 10000;
      }
      // TIER 2: First word of title IS the query exactly (e.g., "learn" → "LEARN ANY COURSE GPT")
      else if (it.words[0] === q) {
        score = 80000;
        if (isAIWebToolsGPT) score += 8000;
      }
      // TIER 3: Title starts with query (e.g., "le" → "LEARN ANY SKILL GPT")
      else if (it.t.startsWith(q) || it.tNoSpace.startsWith(qNoSpace)) {
        score = 60000;
        if (isAIWebToolsGPT) score += 6000;
        // Boost for complete word match at start
        if (it.t.startsWith(`${q} `) || it.t.startsWith(`${q}-`)) score += 5000;
        
        // Prefer tools where query matches MORE of the first word
        const firstWord = it.words[0] || it.t;
        const matchRatio = q.length / firstWord.length;
        score += Math.floor(matchRatio * 10000);
      }
      // TIER 4: Any word in title starts with query
      else {
        for (const word of it.words) {
          if (word.startsWith(q)) {
            score = 30000;
            if (isAIWebToolsGPT) score += 3000;
            score += Math.max(0, 1000 - word.length * 50);
            break;
          }
        }
      }

      // TIER 5: Title contains query
      if (!score && (it.t.includes(q) || it.tNoSpace.includes(qNoSpace))) {
        score = 15000;
        if (isAIWebToolsGPT) score += 1500;
      }

      // TIER 6: Abbreviation expansion matches
      if (!score && abbrevExpansions.length > 0) {
        for (const exp of abbrevExpansions) {
          if (it.t.includes(exp) || it.tNoSpace.includes(exp.replace(/\s/g, ""))) {
            score = 10000;
            if (isAIWebToolsGPT) score += 1000;
            break;
          }
        }
      }

      // TIER 7: Synonym matches (LOWER priority than direct matches)
      if (!score && synonyms.length > 0) {
        for (const syn of synonyms) {
          if (it.t.includes(syn)) {
            score = 5000;  // Much lower than direct title matches
            if (isAIWebToolsGPT) score += 500;
            break;
          }
        }
      }

      // TIER 8: Tag/category matches (2+ chars)
      if (!score && q.length >= 2) {
        if (it.c.startsWith(q) || it.c.includes(q)) {
          score = 4000;
        } else if (it.tags.some(tag => tag.startsWith(q))) {
          score = 3500;
        } else if (it.tags.some(tag => tag.includes(q))) {
          score = 3000;
        }
      }

      // TIER 9: Fuzzy match for typos (increased tolerance)
      if (!score && q.length >= 3) {
        // Check first word with 2-edit tolerance
        const firstWord = it.words[0];
        if (firstWord && firstWord.length >= 3) {
          const dist = quickLevenshtein(q.substring(0, Math.min(q.length, firstWord.length + 2)), firstWord);
          if (dist <= 2) {
            score = 2500 - dist * 500;
            if (isAIWebToolsGPT) score += 500;
          }
        }
        // Check other words
        if (!score) {
          for (const word of it.words) {
            if (word.length >= 3 && word.length <= 15) {
              const dist = quickLevenshtein(q.substring(0, Math.min(q.length, word.length + 2)), word);
              if (dist <= 2) {
                score = 2000 - dist * 400;
                if (isAIWebToolsGPT) score += 400;
                break;
              }
            }
          }
        }
      }
      
      // TIER 10: Multi-word fuzzy match (e.g., "learnn anyy skill" → "learn any skill")
      if (!score && qOriginal.includes(' ')) {
        const queryWords = qOriginal.split(/\s+/).filter(w => w.length >= 2);
        if (queryWords.length >= 2) {
          let matchedWords = 0;
          for (const qWord of queryWords) {
            for (const tWord of it.words) {
              if (tWord.startsWith(qWord) || quickLevenshtein(qWord, tWord) <= 1) {
                matchedWords++;
                break;
              }
            }
          }
          // If most query words match tool words
          if (matchedWords >= Math.ceil(queryWords.length * 0.6)) {
            score = 8000 + matchedWords * 1000;
            if (isAIWebToolsGPT) score += 2000;
          }
        }
      }

      // === BOOSTS for major platforms ===
      if (score > 0) {
        // Boost exact platform matches
        const majorPlatforms = ["runway", "chatgpt", "claude", "midjourney", "dalle", "sora", "pika", "luma", "gemini", "perplexity", "elevenlabs", "synthesia", "heygen"];
        for (const platform of majorPlatforms) {
          if (q.startsWith(platform.substring(0, Math.min(q.length, 4))) && it.t.includes(platform)) {
            score += 3000;
            break;
          }
        }
      }

      if (score > 0) {
        scored.push({ tool: it.tool, score });
      }
    }

    // === STEP 3: Sort by score, then alphabetically ===
    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const at = a.tool.title?.toLowerCase() || "";
      const bt = b.tool.title?.toLowerCase() || "";
      return at.localeCompare(bt);
    });

    const results = scored.map(s => s.tool).slice(0, 120);
    
    // === CACHE RESULTS for instant repeated searches ===
    searchCache.set(qRaw, results);
    
    return results;
  }, [quickIndex]);

  // Track current search to prevent stale updates
  const searchIdRef = useRef(0);
  const quickRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fullRef = useRef<number | null>(null);

  // INSTANT typing - defer ALL search work so input never blocks
  const setSearchTerm = useCallback((value: string) => {
    // 1) Update input state IMMEDIATELY - zero blocking
    setSearchTermInternal(value);

    // 2) Cancel any pending search operations
    if (quickRef.current) clearTimeout(quickRef.current);
    if (fullRef.current && "cancelIdleCallback" in window) {
      // @ts-ignore
      window.cancelIdleCallback(fullRef.current);
      fullRef.current = null;
    }

    const t = value.trim();
    if (!t) {
      setSearchResults([]);
      setIsOpen(false);
      setDisplayedCount(50);
      return;
    }

    setIsOpen(true);
    const currentId = ++searchIdRef.current;

    // 3) Run quick search after a TINY delay (lets input paint first)
    quickRef.current = setTimeout(() => {
      if (currentId !== searchIdRef.current) return;
      const fast = quickSearch(t);
      setSearchResults(fast);
      setDisplayedCount(50);

      // 4) Full intelligent ranking for 3+ chars (runs when browser is idle)
      if (t.length >= 3) {
        // Check cache for full search results first
        const fullCacheKey = `full:${t.toLowerCase().trim()}`;
        const cachedFull = searchCache.get(fullCacheKey);
        if (cachedFull) {
          setSearchResults(cachedFull);
          setDisplayedCount(50);
          return;
        }
        
        const runFull = () => {
          if (currentId !== searchIdRef.current) return;
          const results = searchTools(allTools, t);

          // Keep full intelligence, but ensure literal prefix matches never get buried
          const q = t.toLowerCase().trim();
          const reranked = results
            .map((tool, idx) => {
              const title = (tool?.title || "").toLowerCase();
              const words = title.split(/\s+/).filter(Boolean);
              const firstWord = words[0] || "";
              let boost = 0;

              if (title === q) boost = 400000;
              else if (firstWord === q) boost = 300000;
              else if (title.startsWith(q)) boost = 200000;
              else if (words.some((w) => w.startsWith(q))) boost = 120000;

              return { tool, idx, boost };
            })
            .sort((a, b) => {
              if (b.boost !== a.boost) return b.boost - a.boost;
              return a.idx - b.idx; // stable fallback (preserve searchTools ordering)
            })
            .map((x) => x.tool);

          // Cache full search results
          searchCache.set(fullCacheKey, reranked);
          
          setSearchResults(reranked);
          setDisplayedCount(50);
        };

        if ("requestIdleCallback" in window) {
          // @ts-ignore
          fullRef.current = window.requestIdleCallback(runFull, { timeout: 150 });
        } else {
          setTimeout(runFull, 50);
        }
      }
    }, 8); // 8ms = 1 frame, lets the keystroke paint first
  }, [quickSearch]);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (quickRef.current) {
        clearTimeout(quickRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToolClick = useCallback((toolIndex: number) => {
    setIsOpen(false);
    setSearchTermInternal("");
    navigate(`/tool/${toolIndex}`);
  }, [navigate]);

  const handleDirectAccess = useCallback((tool: any, e: React.MouseEvent) => {
    if (tool.directUrl) {
      e.preventDefault();
      e.stopPropagation();
      createTimePortalEffect(tool.directUrl);
      setIsOpen(false);
      setSearchTermInternal("");
    }
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTermInternal("");
    setSearchResults([]);
    setIsOpen(false);
    setDisplayedCount(50);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTermInternal("");
      setDisplayedCount(50);
    } else if (e.key === 'Enter' && searchTerm.trim()) {
      if (searchResults.length > 0) {
        const topResult = searchResults[0];
        const toolIndex = allTools.findIndex(t => t.title === topResult.title);
        if (toolIndex !== -1) {
          setIsOpen(false);
          setSearchTermInternal("");
          navigate(`/tool/${toolIndex}`);
        }
      }
    }
  }, [searchTerm, searchResults, navigate]);

  // INFINITE SCROLL - Load more results as user scrolls
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // Don't trigger if already loading or no more results
    if (isLoadingMore || displayedCount >= searchResults.length) return;
    
    // Trigger load when within 300px of bottom
    const threshold = 300;
    const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
    
    if (nearBottom) {
      setIsLoadingMore(true);
      
      // Load 50 more items
      requestAnimationFrame(() => {
        setDisplayedCount(prev => Math.min(prev + 50, searchResults.length));
        setIsLoadingMore(false);
      });
    }
  }, [displayedCount, searchResults.length, isLoadingMore]);

  // Generate prediction based on top result
  const prediction = useMemo(() => {
    if (!searchTerm.trim() || searchResults.length === 0) return "";
    
    const topResult = searchResults[0];
    if (!topResult?.title) return "";
    
    const topTitle = topResult.title.toLowerCase();
    const query = searchTerm.toLowerCase().trim();
    
    // Only predict if the top result starts with what user typed
    if (topTitle.startsWith(query)) {
      // Return the first word or two for cleaner predictions
      const words = topResult.title.split(/\s+/);
      if (words.length >= 2) {
        // Return first 2-3 words for multi-word predictions
        return words.slice(0, Math.min(3, words.length)).join(" ");
      }
      return topResult.title;
    }
    
    return "";
  }, [searchTerm, searchResults]);

  // Accept prediction (Tab key)
  const acceptPrediction = useCallback(() => {
    if (prediction) {
      setSearchTerm(prediction);
    }
  }, [prediction, setSearchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    displayedCount,
    isOpen,
    isLoadingMore,
    toolStats,
    searchRef,
    prediction,
    handleToolClick,
    handleDirectAccess,
    clearSearch,
    handleKeyDown,
    handleScroll,
    acceptPrediction,
  };
};
