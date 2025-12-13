import { Tool } from "@/types/tools";

// Video & Multimedia subtypes for filtering and discovery
export const VIDEO_SUBTYPES = [
  "Video Generator",
  "Video Editor",
  "Animation",
  "Motion Graphics",
  "Streaming",
  "Video Production",
  "Avatar Video",
  "Short Form Video",
  "Script Writing",
  "Prompt Engineering",
  "3D Animation",
  "Motion Capture",
  "Live Action VFX"
] as const;

export type VideoSubtype = typeof VIDEO_SUBTYPES[number];

// Keywords that indicate each video subtype
const VIDEO_KEYWORDS: Record<VideoSubtype, string[]> = {
  "Video Generator": ["text-to-video", "video generation", "video generator", "generate video", "ai video", "video creation", "create video", "video ai", "sora", "runway", "pika", "kling", "luma", "hailuo", "veo"],
  "Video Editor": ["video editor", "video editing", "edit video", "video editing", "clip", "trim", "cut", "premiere", "davinci", "capcut", "video cut", "splice"],
  "Animation": ["animation", "animated", "animate", "cartoon", "motion", "animator", "2d animation", "animation studio", "animaker"],
  "Motion Graphics": ["motion graphics", "visual effects", "VFX", "motion design", "effects", "after effects", "graphics animation"],
  "Streaming": ["streaming", "live stream", "broadcast", "live video", "twitch", "obs", "live broadcast", "stream deck"],
  "Video Production": ["video production", "film making", "movie production", "production studio", "filmmaking", "cinematic", "movie maker", "film production"],
  "Avatar Video": ["AI avatar", "virtual presenter", "AI presenter", "digital human", "avatar video", "synthesia", "heygen", "d-id", "talking avatar", "video avatar"],
  "Short Form Video": ["short video", "viral", "tiktok", "reels", "shorts", "clips", "repurposing", "short form", "vertical video", "social video", "video clip"],
  "Script Writing": ["script", "screenplay", "video script", "scriptwriting", "movie script", "film script", "scene writing"],
  "Prompt Engineering": ["prompt", "prompt optimization", "prompt generator", "prompt engineering", "video prompt", "text to video prompt"],
  "3D Animation": ["3D animation", "3D character", "3D model", "CG animation", "blender", "maya", "3d render", "3d modeling"],
  "Motion Capture": ["motion capture", "mocap", "markerless", "tracking", "body tracking", "motion tracking"],
  "Live Action VFX": ["live-action", "VFX", "compositing", "CG characters", "green screen", "chroma key", "special effects"]
};

// Detect video subtypes for a tool
export function detectVideoSubtypes(tool: Tool): VideoSubtype[] {
  const subtypes: VideoSubtype[] = [];
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''}`.toLowerCase();
  
  for (const [subtype, keywords] of Object.entries(VIDEO_KEYWORDS)) {
    if (keywords.some(keyword => searchText.includes(keyword.toLowerCase()))) {
      subtypes.push(subtype as VideoSubtype);
    }
  }
  
  return subtypes;
}

// Check if a tool is a video/multimedia tool
export function isVideoMultimediaTool(tool: Tool): boolean {
  const videoCategories = [
    "Video",
    "Video Generation",
    "Video Tools",
    "Video & Multimedia",
    "AI Animation",
    "Animation",
    "Multimedia"
  ];
  
  const categoryMatch = videoCategories.some(cat => 
    tool.category?.toLowerCase().includes(cat.toLowerCase())
  );
  
  if (categoryMatch) return true;
  
  // Check for video keywords in tags or description
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''}`.toLowerCase();
  const videoKeywords = [
    "video", "animation", "motion", "film", "movie", "streaming", 
    "avatar", "VFX", "motion capture", "3D animation"
  ];
  
  return videoKeywords.some(keyword => searchText.includes(keyword.toLowerCase()));
}

// Get video and multimedia tools with enhanced detection
export function getVideoMultimediaTools(tools: Tool[]): Tool[] {
  return tools.filter(tool => isVideoMultimediaTool(tool));
}
