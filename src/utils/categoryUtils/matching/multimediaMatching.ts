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
    'MiniMax Video & Music Generator',
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
    'Vowel',
    'MOVIE MAKER AI STUDIO SUITE'
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

  // Separate tools into priority groups
  const priorityAIWebTools = categoryMatchedTools.filter(tool => 
    priorityAIWebToolsGPTs.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const otherPriority = categoryMatchedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    otherPriorityTools.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const remainingTools = categoryMatchedTools.filter(tool => 
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
  return finalTools;
};

export { getAudioVoiceTools } from "./audioVoiceMatching";

export const get3DVisualizationTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🧊 3D & VISUALIZATION enhanced matching for: ${categoryName}`);
  
  const threeDVisualizationKeywords = [
    '3d', 'three dimensional', 'modeling', 'rendering', 'visualization',
    'virtual reality', 'vr', 'augmented reality', 'ar', 'mixed reality',
    'cad', 'architecture', 'engineering', 'simulation', 'animation',
    'geometry', 'mesh', 'texture', 'shader', 'lighting', 'material',
    'unity', 'unreal', 'blender', 'maya', 'cinema 4d', 'sketchup'
  ];

  const matchedTools = tools.filter(tool => {
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

  console.log(`✅ Found ${matchedTools.length} 3D & visualization tools`);
  return matchedTools;
};
