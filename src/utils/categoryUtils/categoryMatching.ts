
import { Tool } from "@/types/tools";

export const getAudioVoiceTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎵 Getting audio & voice tools for category: "${categoryName}"`);
  
  const audioVoiceTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category && !tool.tags) return false;
    
    const searchText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ')}`.toLowerCase();
    
    // Enhanced matching for audio & voice tools
    const audioVoiceKeywords = [
      // Core audio/voice terms
      'audio', 'voice', 'music', 'sound', 'speech', 'vocal', 'tts', 'text-to-speech', 'speech-to-text',
      'suno', 'udio', 'murf', 'elevenlabs', 'eleven labs', 'speechify', 'descript', 'krisp',
      'lalal.ai', 'specterr', 'mubert', 'resound', 'timebolt', 'podium', 'wondercraft',
      'stable audio', 'musiclm', 'audiocraft', 'voicemod', 'splash pro', 'coqui tts',
      'soundful', 'respeecher', 'aiva', 'amper music', 'endel', 'jukebox', 'replica studios',
      'melodrive', 'lyrebird', 'humtap', 'beatoven', 'beatbot', 'sounddraw', 'play.ht',
      'adobe podcast', 'boomy', 'riffusion', 'voiceai', 'myvocal', 'resemble', 'vocal remover',
      'autopod', 'texttomusic', 'musico', 'songmastr', 'wavtool', 'x-minus', 'loudly',
      'databass', 'cleanvoice', 'uberduck', 'tunereel', 'listnr', 'xpeacho', 'audionotes',
      'dictanote',
      
      // Music generation terms
      'music generation', 'ai music', 'music creation', 'music composition', 'beat making',
      'song creation', 'music producer', 'music studio', 'royalty-free music', 'background music',
      'instrumental', 'soundtrack', 'melody', 'harmony', 'rhythm', 'tempo', 'genre',
      
      // Voice and speech terms
      'voice generation', 'voice synthesis', 'voice cloning', 'voice over', 'voiceover',
      'narration', 'voice assistant', 'conversational ai', 'voice bot', 'speech synthesis',
      'voice modulation', 'voice transformation', 'voice effects', 'real-time voice',
      'celebrity voices', 'character voices', 'natural voices', 'realistic voices',
      'multilingual voices', 'professional voices', 'custom voices',
      
      // Audio processing terms
      'audio editing', 'audio enhancement', 'audio cleanup', 'noise removal', 'noise cancellation',
      'echo removal', 'audio mastering', 'audio mixing', 'audio restoration', 'audio quality',
      'audio processing', 'sound editing', 'audio filters', 'audio effects',
      
      // Podcast and transcription terms
      'podcast', 'transcription', 'meeting transcription', 'voice notes', 'dictation',
      'speech recognition', 'voice recognition', 'audio transcription', 'voice transcription',
      'meeting transcription', 'podcast transcription', 'interview transcription',
      
      // Technical audio terms
      'wav', 'mp3', 'flac', 'aac', 'ogg', 'midi', 'sample rate', 'bitrate', 'stereo', 'mono',
      'surround sound', '3d audio', 'spatial audio', 'binaural', 'immersive audio'
    ];
    
    // Check if any keyword matches
    const hasAudioVoiceKeyword = audioVoiceKeywords.some(keyword => 
      searchText.includes(keyword)
    );
    
    // Check category matching
    const categoryMatch = tool.category && (
      tool.category.toLowerCase().includes('audio') ||
      tool.category.toLowerCase().includes('voice') ||
      tool.category.toLowerCase().includes('music') ||
      tool.category.toLowerCase().includes('sound') ||
      tool.category.toLowerCase().includes('speech') ||
      tool.category.toLowerCase().includes('transcription')
    );
    
    // Special handling for known audio/voice tool names
    const audioVoiceToolNames = [
      'suno', 'udio', 'murf', 'elevenlabs', 'eleven labs', 'speechify', 'descript',
      'krisp', 'lalal.ai', 'specterr', 'mubert', 'resound.fm', 'timebolt', 'podium',
      'wondercraft', 'stable audio', 'musiclm', 'audiocraft', 'voicemod', 'splash pro',
      'coqui tts', 'soundful', 'respeecher', 'aiva', 'amper music', 'endel', 'jukebox',
      'replica studios', 'melodrive', 'lyrebird', 'humtap', 'beatoven', 'beatbot',
      'sounddraw', 'play.ht', 'adobe podcast', 'boomy', 'riffusion', 'voiceai',
      'myvocal', 'resemble', 'vocal remover', 'autopod', 'texttomusic', 'musico',
      'songmastr', 'wavtool', 'x-minus', 'loudly', 'databass', 'cleanvoice',
      'uberduck', 'tunereel', 'listnr', 'xpeacho', 'audionotes', 'dictanote'
    ];
    
    const toolNameMatch = audioVoiceToolNames.some(name => 
      tool.title.toLowerCase().includes(name) ||
      (tool.directUrl && tool.directUrl.toLowerCase().includes(name))
    );
    
    return hasAudioVoiceKeyword || categoryMatch || toolNameMatch;
  });
  
  console.log(`✅ Found ${audioVoiceTools.length} audio & voice tools`);
  return audioVoiceTools;
};

export const getVideoMultimediaTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎬 Getting video & multimedia tools for category: "${categoryName}"`);
  
  const videoMultimediaTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category && !tool.tags) return false;
    
    const searchText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ')}`.toLowerCase();
    
    // Enhanced matching for video & multimedia tools
    const videoMultimediaKeywords = [
      // Core video terms
      'video', 'multimedia', 'movie', 'film', 'cinema', 'animation', 'motion', 'visual',
      'sora', 'openai', 'minimax', 'kling', 'luma', 'dream machine', 'google veo', 'pixverse',
      'pika labs', 'stable video', 'genmo', 'invideo', 'steve ai', 'bhuman', 'descript',
      'kapwing', 'filmora', 'opus clip', 'vidyo.ai', 'munch', 'vadoo', 'synthesia',
      'colossyan', 'clipchamp', 'deepbrain', 'vyond', 'rephrase.ai', 'lumen5',
      'hour one', 'tavus', 'pictory', 'fliki', 'elai.io', 'animoto', 'wideo',
      'visla', 'chat d-id', 'guidde', 'podcastle', 'myheritage', 'livereacting',
      'you-tldr', 'video2recipe', 'outfitsai', 'veed.io', 'oxolo', 'waymark',
      'kaiber.ai', 'cloudinary', 'jitter.video', 'flexclip', 'simplified',
      'moonvalley', 'hiber3d', 'sdxl turbo', 'animatediff', 'skyglass',
      'creatify', 'meshy ai', 'videoleap', 'umu ai', 'bigvu', 'ghostcut',
      'vcat ai', 'runway ml', 'd-id', 'gling ai', 'pollo ai', 'aivideo.com',
      '2short.ai', 'vozo ai', 'velocity', 'infinity ai', 'skyreels', 'topview',
      'topaz video', 'deepmotion', 'windsor.io', 'vowel',
      
      // Video creation and editing terms
      'video generation', 'video creation', 'video editing', 'video production',
      'video synthesis', 'text-to-video', 'image-to-video', 'ai video',
      'video enhancement', 'video processing', 'video automation', 'video content',
      'video platforms', 'video tools', 'video software', 'video applications',
      'cinematic', 'motion graphics', 'visual effects', 'video effects',
      'video marketing', 'video business', 'video content creation',
      'video ai', 'generative video', 'interactive video', 'immersive video',
      'avatar creation', 'digital avatars', 'virtual avatars', 'ai avatars',
      'character video', 'digital characters', 'virtual characters',
      'video editor', 'video editing software', 'video editing platform',
      'video post-production', 'video enhancement tools', 'video optimization',
      'video quality enhancement', 'video restoration', 'video correction',
      'video filters', 'video transitions', 'video templates', 'video assets',
      
      // Multimedia terms
      'multimedia production', 'multimedia creation', 'multimedia editing',
      'multimedia platform', 'multimedia studio', 'multimedia suite',
      'multimedia technology', 'rich media', 'interactive media', 'digital media',
      'media production', 'media creation', 'media editing', 'media management',
      'media processing', 'media enhancement', 'media optimization',
      'media distribution', 'media publishing', 'media sharing',
      
      // Entertainment and creative terms
      'entertainment', 'creative video', 'creative content', 'creative production',
      'creative studio', 'creative platform', 'creative suite', 'creative services',
      'creative solutions', 'creative technology', 'creative software',
      'creative applications', 'creative workflows', 'creative automation',
      
      // Specialized video categories
      'music video', 'promotional video', 'advertisement video', 'social media video',
      'video campaigns', 'video branding', 'video communication', 'video presentations',
      'video training', 'video education', 'video learning', 'video courses',
      'video tutorials', 'video demonstrations', 'video explanations',
      'video documentation', 'movie making', 'film making', 'filmmaking',
      'cinema production', 'short films', 'video podcasts', 'podcast video',
      'live streaming', 'stream production', 'broadcasting', 'video broadcasting',
      'video streaming', 'real-time video', '360 video', 'vr video', 'ar video'
    ];
    
    // Check if any keyword matches
    const hasVideoMultimediaKeyword = videoMultimediaKeywords.some(keyword => 
      searchText.includes(keyword)
    );
    
    // Check category matching
    const categoryMatch = tool.category && (
      tool.category.toLowerCase().includes('video') ||
      tool.category.toLowerCase().includes('multimedia') ||
      tool.category.toLowerCase().includes('animation') ||
      tool.category.toLowerCase().includes('film') ||
      tool.category.toLowerCase().includes('movie') ||
      tool.category.toLowerCase().includes('cinema') ||
      tool.category.toLowerCase().includes('creative') ||
      tool.category.toLowerCase().includes('entertainment') ||
      tool.category.toLowerCase().includes('media')
    );
    
    return hasVideoMultimediaKeyword || categoryMatch;
  });
  
  console.log(`✅ Found ${videoMultimediaTools.length} video & multimedia tools`);
  return videoMultimediaTools;
};

export const get3DVisualizationTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🧊 Getting 3D & visualization tools for category: "${categoryName}"`);
  
  const threeDVisualizationTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category && !tool.tags) return false;
    
    const searchText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ')}`.toLowerCase();
    
    // Enhanced matching for 3D & visualization tools
    const threeDVisualizationKeywords = [
      // Core 3D terms
      '3d', 'three dimensional', '3d modeling', '3d design', '3d generation', '3d creation',
      '3d animation', '3d rendering', '3d visualization', '3d art', '3d graphics',
      '3d models', '3d assets', '3d content', '3d development', '3d technology',
      '3d software', '3d applications', '3d platforms', '3d print', '3d printing',
      
      // Specific 3D tools mentioned
      'meshy ai', 'meshy', 'text to 3d', 'spline', 'luma ai', 'polycam', 'blender',
      
      // Visualization terms
      'visualization', 'data visualization', '3d visualization', 'visual analytics',
      'charts', 'graphs', 'interactive visualization', 'immersive visualization',
      
      // VR/AR/XR terms
      'virtual reality', 'augmented reality', 'mixed reality', 'extended reality',
      'vr', 'ar', 'mr', 'xr', 'immersive experience', 'interactive 3d',
      
      // 3D creation and processing
      'mesh generation', 'point cloud', 'photogrammetry', 'nerf', 'neural radiance',
      'volumetric', 'ray tracing', 'real-time rendering', 'physics simulation',
      'fluid simulation', 'particle systems', 'lighting simulation',
      'material design', 'texture generation', 'surface modeling',
      'lidar processing', 'holographic', '3d scanning', '3d capture',
      
      // Technical 3D terms
      'geometry', 'polygons', 'vertices', 'mesh', 'wireframe', 'solid modeling',
      'parametric design', 'procedural generation', 'generative design',
      
      // Industry applications
      'cad', 'computer aided design', 'architecture', 'engineering', 'product design',
      'industrial design', 'automotive design', 'medical visualization',
      'scientific visualization', 'data visualization', 'information visualization',
      
      // AI and 3D
      'ai 3d', '3d ai', 'text-to-3d', 'image-to-3d', 'ai 3d generation',
      'machine learning 3d', 'deep learning 3d', 'neural 3d',
      
      // 3D formats and standards
      'obj', 'fbx', 'gltf', 'usd', 'stl', 'ply', 'dae', 'collada',
      
      // 3D engines and frameworks
      'unity', 'unreal', 'three.js', 'babylonjs', 'webgl', 'opengl', 'vulkan'
    ];
    
    // Check if any keyword matches
    const hasThreeDVisualizationKeyword = threeDVisualizationKeywords.some(keyword => 
      searchText.includes(keyword)
    );
    
    // Check category matching
    const categoryMatch = tool.category && (
      tool.category.toLowerCase().includes('3d') ||
      tool.category.toLowerCase().includes('visualization') ||
      tool.category.toLowerCase().includes('modeling') ||
      tool.category.toLowerCase().includes('rendering') ||
      tool.category.toLowerCase().includes('virtual reality') ||
      tool.category.toLowerCase().includes('augmented reality') ||
      tool.category.toLowerCase().includes('mixed reality')
    );
    
    // Special handling for known 3D tool names
    const threeDToolNames = [
      '3d print gpt', 'meshy ai', 'meshy', 'spline', 'luma ai', 'polycam', 'blender',
      'autodesk', 'maya', 'cinema 4d', 'houdini', 'zbrush', 'substance', 'keyshot',
      'solidworks', 'fusion 360', 'inventor', 'rhino', 'grasshopper', 'modo',
      'lightwave', 'sketchup', 'tinkercad', 'onshape', 'shapr3d'
    ];
    
    const toolNameMatch = threeDToolNames.some(name => 
      tool.title.toLowerCase().includes(name) ||
      (tool.directUrl && tool.directUrl.toLowerCase().includes(name))
    );
    
    return hasThreeDVisualizationKeyword || categoryMatch || toolNameMatch;
  });
  
  console.log(`✅ Found ${threeDVisualizationTools.length} 3D & visualization tools`);
  return threeDVisualizationTools;
};

// Add placeholder functions for the missing imports to fix build errors
export const getDataAnalyticsTools = (tools: Tool[], categoryName: string): Tool[] => {
  return tools.filter(tool => tool.category && tool.category.toLowerCase().includes('analytics'));
};

export const getMarketingSalesTools = (tools: Tool[], categoryName: string): Tool[] => {
  return tools.filter(tool => tool.category && (
    tool.category.toLowerCase().includes('marketing') ||
    tool.category.toLowerCase().includes('sales')
  ));
};

export const getCommunicationCollaborationTools = (tools: Tool[], categoryName: string): Tool[] => {
  return tools.filter(tool => tool.category && (
    tool.category.toLowerCase().includes('communication') ||
    tool.category.toLowerCase().includes('collaboration')
  ));
};

export const getAutomationPlatformsTools = (tools: Tool[], categoryName: string): Tool[] => {
  return tools.filter(tool => tool.category && tool.category.toLowerCase().includes('automation'));
};

export const getAIChatAssistantsTools = (tools: Tool[], categoryName: string): Tool[] => {
  return tools.filter(tool => tool.category && (
    tool.category.toLowerCase().includes('chat') ||
    tool.category.toLowerCase().includes('assistant')
  ));
};

export const getContentCreationWritingTools = (tools: Tool[], categoryName: string): Tool[] => {
  return tools.filter(tool => tool.category && (
    tool.category.toLowerCase().includes('content') ||
    tool.category.toLowerCase().includes('writing')
  ));
};

export const getImageDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  return tools.filter(tool => tool.category && (
    tool.category.toLowerCase().includes('image') ||
    tool.category.toLowerCase().includes('design')
  ));
};
