
import { Tool } from "@/types/tools";

/**
 * Audio & Music subtype definitions - 14+ audio types
 */
export const AUDIO_MUSIC_SUBTYPES = {
  MUSIC_GENERATION: "Music Generator",
  VOICE_SYNTHESIS: "Voice Synthesis",
  TEXT_TO_SPEECH: "Text-to-Speech",
  SPEECH_TO_TEXT: "Speech-to-Text",
  AUDIO_EDITING: "Audio Editing",
  PODCAST: "Podcast Tools",
  VOICE_CLONING: "Voice Cloning",
  AUDIO_ENHANCEMENT: "Audio Enhancement",
  SOUND_EFFECTS: "Sound Effects",
  TRANSCRIPTION: "Transcription",
  VOICE_AGENT: "Voice Agent",
  MUSIC_MASTERING: "Music Mastering",
  STEM_SEPARATION: "Stem Separation",
  AUDIO_ANALYTICS: "Audio Analytics"
} as const;

/**
 * Keywords for music generation tools
 */
const MUSIC_GENERATION_KEYWORDS = [
  "music generation", "ai music", "music generator", "ai composer", "music creation",
  "text to music", "generate music", "ai composition", "song generation", "beats generation",
  "soundraw", "udio", "suno", "mubert", "aiva", "boomy", "riffusion", "beatbot",
  "music maker", "beat maker", "song creator", "melody generator", "music ai"
];

/**
 * Keywords for voice synthesis tools
 */
const VOICE_SYNTHESIS_KEYWORDS = [
  "voice synthesis", "speech synthesis", "ai voice", "voice generation", "voice generator",
  "natural voices", "realistic voices", "voice ai", "synthetic voice", "neural voice"
];

/**
 * Keywords for text-to-speech tools
 */
const TEXT_TO_SPEECH_KEYWORDS = [
  "text-to-speech", "text to speech", "tts", "voiceover", "voice over", "narration",
  "read aloud", "speechify", "murf", "play.ht", "wellsaid", "lovo", "natural speech"
];

/**
 * Keywords for speech-to-text tools
 */
const SPEECH_TO_TEXT_KEYWORDS = [
  "speech-to-text", "speech to text", "stt", "transcription", "transcribe", "whisper",
  "assemblyai", "deepgram", "rev.ai", "sonix", "happy scribe", "trint", "voice recognition"
];

/**
 * Keywords for audio editing tools
 */
const AUDIO_EDITING_KEYWORDS = [
  "audio editing", "audio editor", "sound editing", "podcast editing", "daw",
  "audio production", "mixing", "audio processing", "descript", "adobe podcast"
];

/**
 * Keywords for podcast tools
 */
const PODCAST_KEYWORDS = [
  "podcast", "podcasting", "podcast creation", "podcast editing", "podcast hosting",
  "podcast recording", "riverside", "anchor", "podcastle", "auphonic", "cleanvoice"
];

/**
 * Keywords for voice cloning tools
 */
const VOICE_CLONING_KEYWORDS = [
  "voice cloning", "voice clone", "clone voice", "voice replication", "voice mimicking",
  "resemble ai", "eleven labs", "elevenlabs", "respeecher", "descript overdub", "lyrebird"
];

/**
 * Keywords for audio enhancement tools
 */
const AUDIO_ENHANCEMENT_KEYWORDS = [
  "audio enhancement", "noise removal", "noise reduction", "audio cleanup", "filler removal",
  "audio quality", "enhance speech", "clean audio", "krisp", "studio sound"
];

/**
 * Keywords for sound effects tools
 */
const SOUND_EFFECTS_KEYWORDS = [
  "sound effects", "sfx", "ambient audio", "audiogen", "stable audio", "sound generation",
  "audio effects", "foley", "sound design"
];

/**
 * Keywords for transcription tools
 */
const TRANSCRIPTION_KEYWORDS = [
  "transcription", "transcript", "automated transcription", "ai transcription",
  "meeting notes", "caption", "subtitle", "meeting transcription"
];

/**
 * Keywords for voice agent tools
 */
const VOICE_AGENT_KEYWORDS = [
  "voice agent", "phone agent", "call agent", "phone ai", "voice assistant",
  "bland.ai", "vapi", "retell", "air.ai", "synthflow", "conversational ai"
];

/**
 * Keywords for music mastering tools
 */
const MUSIC_MASTERING_KEYWORDS = [
  "mastering", "music mastering", "audio mastering", "landr", "izotope",
  "master track", "professional mastering"
];

/**
 * Keywords for stem separation tools
 */
const STEM_SEPARATION_KEYWORDS = [
  "stem separation", "vocal extraction", "instrument separation", "lalal",
  "isolate vocals", "remove vocals", "extract stems"
];

/**
 * Determine the audio/music subtype for a tool
 */
export const getAudioMusicSubtype = (tool: Tool): string | null => {
  const title = tool.title.toLowerCase();
  const description = (tool.description || "").toLowerCase();
  const tags = (tool.tags || []).map(t => t.toLowerCase()).join(" ");
  const combined = `${title} ${description} ${tags}`;

  // Check for explicit subtags first
  if (tool.tags?.some(t => Object.values(AUDIO_MUSIC_SUBTYPES).includes(t as any))) {
    return tool.tags.find(t => Object.values(AUDIO_MUSIC_SUBTYPES).includes(t as any)) || null;
  }

  // Priority order: more specific types first
  if (VOICE_AGENT_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.VOICE_AGENT;
  if (VOICE_CLONING_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.VOICE_CLONING;
  if (STEM_SEPARATION_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.STEM_SEPARATION;
  if (MUSIC_MASTERING_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.MUSIC_MASTERING;
  if (PODCAST_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.PODCAST;
  if (SPEECH_TO_TEXT_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.SPEECH_TO_TEXT;
  if (AUDIO_ENHANCEMENT_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.AUDIO_ENHANCEMENT;
  if (SOUND_EFFECTS_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.SOUND_EFFECTS;
  if (TEXT_TO_SPEECH_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.TEXT_TO_SPEECH;
  if (VOICE_SYNTHESIS_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.VOICE_SYNTHESIS;
  if (MUSIC_GENERATION_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.MUSIC_GENERATION;
  if (AUDIO_EDITING_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.AUDIO_EDITING;
  if (TRANSCRIPTION_KEYWORDS.some(kw => combined.includes(kw))) return AUDIO_MUSIC_SUBTYPES.TRANSCRIPTION;

  return null;
};

/**
 * Check if a tool is an audio/music tool
 */
export const isAudioMusicTool = (tool: Tool): boolean => {
  const category = (tool.category || "").toLowerCase();
  const tags = (tool.tags || []).map(t => t.toLowerCase());

  // Check category
  if (category.includes("audio") || category.includes("music") || 
      category.includes("voice") || category.includes("podcast") ||
      category.includes("speech")) return true;

  // Check for subtype tags
  if (tool.tags?.some(t => Object.values(AUDIO_MUSIC_SUBTYPES).includes(t as any))) return true;

  // Check for audio-related tags
  const audioTags = ["voice", "audio", "music", "speech", "sound", "podcast", "tts", "stt"];
  if (tags.some(tag => audioTags.some(at => tag.includes(at)))) return true;

  // Check for subtype
  if (getAudioMusicSubtype(tool)) return true;

  return false;
};

/**
 * Get all audio/music tools from a list
 */
export const getAudioMusicTools = (tools: Tool[]): Tool[] => {
  return tools.filter(tool => isAudioMusicTool(tool));
};

/**
 * Get audio/music tools by specific subtype
 */
export const getAudioMusicToolsBySubtype = (tools: Tool[], subtype: string): Tool[] => {
  return tools.filter(tool => {
    if (!isAudioMusicTool(tool)) return false;
    const toolSubtype = getAudioMusicSubtype(tool);
    return toolSubtype === subtype;
  });
};
