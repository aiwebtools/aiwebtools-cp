import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";
import { isVideoRelatedTool } from "../videoDetection";

export const getVideoMultimediaTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎬 VIDEO & MULTIMEDIA enhanced matching for: ${categoryName}`);
  
  // Priority AI Web Tools GPTs for Video & Multimedia (first priority)
  const priorityAIWebToolsGPTs = [
    'Movie Maker Studio AI SUITE',
    'Music Video Maker AI Studio',
    'STAGEMASTER AI SUITE FOR THE Performing Arts',
    'Movie Scene Maker GPT',
    'Sora Prompt Assistant',
    'Luma Dream Machine Prompt Assistant'
  ];

  // Other Priority Video & Multimedia Tools (second priority)
  const otherPriorityTools = [
    'HeyGen – Interactive Avatar Creation Hub',
    'HeyGen',
    'Google Flow Editing Studio',
    'Podcastr',
    'Syllaby.io',
    'Tolstoy',
    'RASK',
    'Hippo Video',
    'QR Code AI',
    'SubMagic.co',
    'RenderLion',
    'TimeBolt',
    'SORA – OPENAI\'s Video Generation Model',
    'Sora',
    'SORA by OpenAI',
    'KLING Video Generator',
    'KLING AI',
    'LUMA DREAM MACHINE - TEXT TO VIDEO GENERATOR',
    'Luma Dream Machine',
    'Luma Labs Dream Machine',
    'GOOGLE VEO 3 Video & FX Generator',
    'Google Veo 2',
    'Video FX by Google',
    'Google Flow',
    'PixVerse Ai',
    'Pika Labs',
    'Stable Video Diffusion',
    'Genmo AI',
    'Genmo',
    'Genmo.ai',
    'Invideo AI',
    'INVIDEO',
    'Steve AI',
    'BHUMAN – Avatars Creation For Outreach',
    'Descript',
    'Kapwing',
    'Wondershare Filmora',
    'Wondershare Filmora AI',
    'Opus Clip',
    'OPUS.PRO',
    'Vidyo.ai',
    'Munch',
    'Vadoo AI',
    'Synthesia',
    'Colossyan Creator',
    'Colossyan',
    'Clipchamp',
    'DeepBrain AI',
    'Vyond',
    'Rephrase.ai',
    'Lumen5',
    'Hour One',
    'Tavus',
    'Pictory',
    'Pictory AI',
    'Fliki',
    'Elai.io',
    'Animoto',
    'Wideo',
    'Visla',
    'Chat D-ID',
    'GUIDDE',
    'Podcastle',
    'MyHeritage Deep Nostalgia™',
    'LiveReacting',
    'You-TLDR',
    'Video2Recipe',
    'OutfitsAI',
    'VEED.IO',
    'Oxolo',
    'Waymark',
    'Kaiber.ai',
    'Kaiber AI',
    'Cloudinary',
    'Jitter.Video',
    'FlexClip',
    'Simplified',
    'MoonValley AI',
    'Hiber3D',
    'SDXL Turbo',
    'AnimateDiff',
    'SkyGlass',
    'Creatify AI',
    'AI Comic Factory',
    'Meshy AI',
    'VideoLeap',
    'UMU AI',
    'BIGVU',
    'Ghostcut',
    'VCAT AI',
    'Runway ML',
    'RunwayML Gen-2',
    'D-ID',
    'Gling AI Video Editor',
    'Pollo AI Video Generator',
    'AIVideo.com',
    '2Short.ai',
    'Vozo AI',
    'Velocity by Avataar.ai',
    'Infinity AI Video Generator',
    'SkyReels',
    'TopView AI Avatars',
    'Topaz Video AI',
    'DeepMotion',
    'WINDSOR.IO',
    'Windsor',
    'Vowel'
  ];

  const videoMultimediaKeywords = [
    'video', 'multimedia', 'film', 'movie', 'animation', 'motion', 'cinema',
    'editing', 'production', 'post-production', 'effects', 'transitions',
    'rendering', 'encoding', 'streaming', 'broadcast', 'live', 'recording',
    'youtube', 'tiktok', 'instagram', 'social video', 'short form', 'long form',
    'documentary', 'commercial', 'promotional', 'educational', 'tutorial'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Check if it's explicitly video-related
    const isVideoTool = isVideoRelatedTool(tool);
    
    // Keyword matching
    const keywordMatch = videoMultimediaKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('video') ||
      tool.category.toLowerCase().includes('multimedia') ||
      tool.category.toLowerCase().includes('film') ||
      tool.category.toLowerCase().includes('movie') ||
      tool.category.toLowerCase().includes('animation')
    );

    return isVideoTool || keywordMatch || categoryMatch;
  });

  // Remove duplicates by creating a map based on normalized titles
  const uniqueToolsMap = new Map<string, Tool>();
  
  categoryMatchedTools.forEach(tool => {
    const normalizedTitle = tool.title.toLowerCase().trim()
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s]/g, '');
    
    // If we haven't seen this tool before, or if this version is better, keep it
    if (!uniqueToolsMap.has(normalizedTitle) || 
        shouldReplaceWithBetterVersion(uniqueToolsMap.get(normalizedTitle)!, tool)) {
      uniqueToolsMap.set(normalizedTitle, tool);
    }
  });

  const deduplicatedTools = Array.from(uniqueToolsMap.values());

  // Separate tools into priority groups
  const priorityAIWebTools = deduplicatedTools.filter(tool => 
    priorityAIWebToolsGPTs.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const otherPriority = deduplicatedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    otherPriorityTools.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const remainingTools = deduplicatedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    !otherPriority.includes(tool)
  );

  // Combine in priority order
  const finalTools = [
    ...priorityAIWebTools,
    ...otherPriority,
    ...remainingTools
  ];

  console.log(`✅ Found ${finalTools.length} video & multimedia tools (${priorityAIWebTools.length} priority AI Web Tools, ${otherPriority.length} other priority, ${remainingTools.length} remaining)`);
  console.log(`🗑️ Removed ${categoryMatchedTools.length - finalTools.length} duplicates`);
  
  return finalTools;
};

// Helper function to determine if we should replace with a better version
const shouldReplaceWithBetterVersion = (existing: Tool, candidate: Tool): boolean => {
  // Prioritize AI Web Tools GPTs
  const existingIsGPT = existing.directUrl?.includes('lovable.app') || existing.directUrl?.includes('chatgpt.com/g/');
  const candidateIsGPT = candidate.directUrl?.includes('lovable.app') || candidate.directUrl?.includes('chatgpt.com/g/');
  
  if (candidateIsGPT && !existingIsGPT) return true;
  if (existingIsGPT && !candidateIsGPT) return false;
  
  // Choose based on completeness and quality
  const candidateScore = (candidate.directUrl ? 1 : 0) + 
                         (candidate.description?.length || 0) / 100 +
                         (candidate.rating || 0) +
                         (candidate.tags?.length || 0) / 10;
  
  const existingScore = (existing.directUrl ? 1 : 0) + 
                       (existing.description?.length || 0) / 100 +
                       (existing.rating || 0) +
                       (existing.tags?.length || 0) / 10;
  
  return candidateScore > existingScore;
};

export { getAudioVoiceTools } from "./audioVoiceMatching";

export const get3DVisualizationTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🧊 3D & VISUALIZATION enhanced matching for: ${categoryName}`);
  
  // Priority 3D & Visualization Tools (first priority - user specified)
  const priority3DVisualizationTools = [
    '3D Print GPT',
    'Meshy Ai - TEXT TO 3D Generator',
    'Meshy AI',
    'Spline',
    'Luma AI',
    'Polycam',
    'Blender'
  ];

  const threeDVisualizationKeywords = [
    '3d', 'three dimensional', 'modeling', 'rendering', 'visualization',
    'virtual reality', 'vr', 'augmented reality', 'ar', 'mixed reality',
    'cad', 'architecture', 'engineering', 'simulation', 'animation',
    'geometry', 'mesh', 'texture', 'shader', 'lighting', 'material',
    'unity', 'unreal', 'blender', 'maya', 'cinema 4d', 'sketchup'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = threeDVisualizationKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('3d') ||
      tool.category.toLowerCase().includes('visualization') ||
      tool.category.toLowerCase().includes('modeling') ||
      tool.category.toLowerCase().includes('rendering') ||
      tool.category.toLowerCase().includes('virtual') ||
      tool.category.toLowerCase().includes('augmented')
    );

    return keywordMatch || categoryMatch;
  });

  // Separate tools into priority groups
  const priorityTools = categoryMatchedTools.filter(tool => 
    priority3DVisualizationTools.some(priorityName => 
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

  console.log(`✅ Found ${finalTools.length} 3D & visualization tools (${priorityTools.length} priority, ${remainingTools.length} remaining)`);
  return finalTools;
};
