
import { Tool } from "@/types/tools";
import { VIDEO_KEYWORDS } from "./constants";

// Enhanced video-related tool detection with stricter criteria
export const isVideoRelatedTool = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ')} ${tool.category || ''}`.toLowerCase();
  const toolTitle = tool.title.toLowerCase();
  
  // STRICT: Only include tools that are explicitly video-related
  const explicitVideoTools = [
    'movie maker studio',
    'veo 3',
    'google flow',
    'sora',
    'kling ai',
    'hailuo ai',
    'minimax',
    'higgsfield ai',
    'runwayml',
    'pika labs',
    'luma labs',
    'luma dream machine',
    'google veo',
    'music video maker',
    'd-id',
    'synthesia',
    'colossyan',
    'gling ai',
    'opus clip',
    'video fx',
    'pollo ai',
    'aivideo.com',
    'genmo.ai',
    'mochi 1',
    '2short.ai',
    'vozo ai',
    'velocity by avataar',
    'infinity ai video',
    'skyreels',
    'topview ai avatars',
    'movie scene maker',
    'pictory',
    'fliki',
    'elai.io',
    'animoto',
    'wideo',
    'visla'
  ];
  
  // Check if it's an explicit video tool
  if (explicitVideoTools.some(name => toolTitle.includes(name))) {
    return true;
  }
  
  // Check for video-specific categories ONLY
  const hasVideoCategory = tool.category && (
    tool.category.toLowerCase().includes('video') ||
    tool.category.toLowerCase().includes('advanced video') ||
    tool.category.toLowerCase().includes('video generation') ||
    tool.category.toLowerCase().includes('video editing') ||
    tool.category.toLowerCase().includes('video marketing') ||
    tool.category.toLowerCase().includes('video business') ||
    tool.category.toLowerCase().includes('film') ||
    tool.category.toLowerCase().includes('movie') && !tool.category.toLowerCase().includes('script')
  );
  
  // STRICT: Must have explicit video category AND video keywords
  const hasVideoKeyword = VIDEO_KEYWORDS.some(keyword => searchText.includes(keyword));
  
  return hasVideoCategory && hasVideoKeyword && explicitVideoTools.some(name => toolTitle.includes(name));
};
