
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";
import { isVideoRelatedTool } from "../videoDetection";

export const getVideoMultimediaTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎬 VIDEO & MULTIMEDIA enhanced matching for: ${categoryName}`);
  
  const videoMultimediaKeywords = [
    'video', 'multimedia', 'film', 'movie', 'animation', 'motion', 'cinema',
    'editing', 'production', 'post-production', 'effects', 'transitions',
    'rendering', 'encoding', 'streaming', 'broadcast', 'live', 'recording',
    'youtube', 'tiktok', 'instagram', 'social video', 'short form', 'long form',
    'documentary', 'commercial', 'promotional', 'educational', 'tutorial'
  ];

  const matchedTools = tools.filter(tool => {
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

  console.log(`✅ Found ${matchedTools.length} video & multimedia tools`);
  return matchedTools;
};

export const getAudioVoiceTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎵 AUDIO & VOICE enhanced matching for: ${categoryName}`);
  
  const audioVoiceKeywords = [
    'audio', 'voice', 'sound', 'music', 'speech', 'podcast', 'radio',
    'recording', 'editing', 'mixing', 'mastering', 'synthesis', 'generation',
    'text-to-speech', 'speech-to-text', 'transcription', 'voice cloning',
    'voice over', 'narration', 'dubbing', 'ai voice', 'vocal', 'singing',
    'instrument', 'beat', 'melody', 'composition', 'production', 'studio'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = audioVoiceKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('audio') ||
      tool.category.toLowerCase().includes('voice') ||
      tool.category.toLowerCase().includes('sound') ||
      tool.category.toLowerCase().includes('music') ||
      tool.category.toLowerCase().includes('speech')
    );

    return keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} audio & voice tools`);
  return matchedTools;
};

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
