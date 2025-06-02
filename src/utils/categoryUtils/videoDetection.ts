
import { Tool } from "@/types/tools";
import { VIDEO_KEYWORDS } from "./constants";

// Enhanced video-related tool detection
export const isVideoRelatedTool = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ')} ${tool.category || ''}`.toLowerCase();
  
  // Exclude these non-video tools that might have video-related keywords
  const excludedTools = [
    'godmode gpt',
    'mary magdalene',
    'alan watts',
    'multitasker',
    'talk to the gods',
    'oraculum',
    'resurrection gpt',
    'time machine gpt',
    'tesla gpt',
    'einstein gpt',
    'stellaris',
    'criminologist',
    'survivalist',
    'fortune teller',
    'probability gpt',
    'fact checker',
    'trivia night',
    'learn any course',
    'learn any skill',
    'college degree',
    'book writer',
    'talk to history',
    'interpretis',
    'imagination traveler',
    'historical headlines',
    'alchemist scientist',
    'personalized doctor',
    'trader gpt',
    'indiana archaeologist',
    'marriage mender',
    'training manual',
    'solar land assessor',
    'data research analysis',
    'resume & job finder',
    'playwriter',
    'customizable gpt',
    'historical apothecary',
    'home-schooling assistant',
    'pharmaceutical assistant',
    'contract review bot',
    'tattoo designer',
    'firearms safety',
    'king blueberry',
    'pharma research',
    'mixologist',
    'chef sizzle',
    'restyle me',
    'celebrity chatline',
    'firefighter',
    'binary-text-image',
    'restaurant menu maker',
    'quiz maker',
    'course maker',
    'taxes gpt',
    'genome gpt',
    'game design document',
    'enter the matrix',
    'predictive credit score',
    'name insight research',
    'coloring book generator',
    'native american history',
    'public testimony writer',
    'cyber security',
    'startup validator',
    'business plan generator',
    'fungus gpt',
    'drill baby drill',
    'dream interpreter',
    'podcast script writer',
    'person information finder',
    'pptx powerpoint maker',
    'grant writer',
    'universal basic income',
    'if ai ruled the world',
    'global peace restoration',
    'artwork & vintage appraisal',
    'uncovering hidden historical',
    'sketch artist',
    'ai tools finder',
    'article and blog rewriter',
    'middlejourney',
    'snoop image ai',
    'legal draftsmith',
    'custom gpt ideas',
    'music melodies & lessons',
    'sophia aeterna',
    'children\'s picture book',
    'mental wellness',
    'legislator link'
  ];
  
  const toolTitle = tool.title.toLowerCase();
  if (excludedTools.some(excluded => toolTitle.includes(excluded))) {
    return false;
  }
  
  // Check for explicit video tools first
  const videoToolNames = [
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
    'movie scene maker'
  ];
  
  if (videoToolNames.some(name => toolTitle.includes(name))) {
    return true;
  }
  
  // Check for video keywords in the content
  const hasVideoKeyword = VIDEO_KEYWORDS.some(keyword => searchText.includes(keyword));
  
  // Check for video-related categories (more specific)
  const hasVideoCategory = tool.category && (
    tool.category.toLowerCase().includes('video') ||
    tool.category.toLowerCase().includes('advanced video') ||
    tool.category.toLowerCase().includes('video generation') ||
    tool.category.toLowerCase().includes('video editing') ||
    tool.category.toLowerCase().includes('video marketing') ||
    tool.category.toLowerCase().includes('video business') ||
    tool.category.toLowerCase().includes('film') ||
    tool.category.toLowerCase().includes('movie') ||
    tool.category.toLowerCase().includes('cinema') ||
    tool.category.toLowerCase().includes('multimedia')
  );
  
  // Check for video URLs
  const hasVideoUrl = tool.videoUrl && tool.videoUrl.trim() !== '';
  
  // Must have video category OR be a known video tool
  return hasVideoCategory || (hasVideoKeyword && videoToolNames.some(name => toolTitle.includes(name)));
};
