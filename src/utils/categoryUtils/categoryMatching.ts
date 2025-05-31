
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

export const getDataAnalyticsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`📊 Getting data analytics tools for category: "${categoryName}"`);
  
  const dataAnalyticsTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category && !tool.tags) return false;
    
    const searchText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ')}`.toLowerCase();
    
    // Enhanced matching for data analytics tools
    const dataAnalyticsKeywords = [
      // Core data terms
      'data', 'analytics', 'analysis', 'dashboard', 'reporting', 'intelligence', 'insights',
      'tableau', 'power bi', 'looker', 'qlik', 'metabase', 'superset', 'grafana',
      'data visualization', 'business intelligence', 'bi', 'kpi', 'metrics',
      'statistical analysis', 'predictive analytics', 'data science', 'machine learning',
      'data mining', 'big data', 'data warehouse', 'data lake', 'etl',
      
      // Business analytics terms
      'business analytics', 'performance analytics', 'operational analytics',
      'sales analytics', 'marketing analytics', 'customer analytics',
      'financial analytics', 'hr analytics', 'web analytics',
      
      // Specific tools mentioned
      'data research analysis report', 'business reports', 'research reports',
      'illuminous', 'world data explorer', 'probability gpt', 'askcsv',
      'sweephy', 'compar', 'claude', 'chatgpt', 'gemini', 'datarobot',
      'finchat', 'chaingpt', 'fact checker', 'person information finder',
      'property data finder', 'perplexity', 'google notebook lm',
      
      // Data processing and manipulation
      'csv analysis', 'data cleaning', 'data transformation', 'data preprocessing',
      'data aggregation', 'data correlation', 'data comparison', 'data validation',
      'data quality', 'data governance', 'data lineage', 'data catalog',
      
      // Statistical and mathematical analysis
      'statistics', 'statistical modeling', 'regression analysis', 'correlation analysis',
      'hypothesis testing', 'probability analysis', 'distribution analysis',
      'time series analysis', 'forecasting', 'trend analysis', 'pattern recognition',
      
      // Advanced analytics
      'machine learning analytics', 'ai analytics', 'predictive modeling',
      'descriptive analytics', 'diagnostic analytics', 'prescriptive analytics',
      'real-time analytics', 'streaming analytics', 'batch analytics',
      
      // Research and fact-checking
      'research analysis', 'fact checking', 'data verification', 'information validation',
      'evidence analysis', 'source verification', 'data integrity', 'accuracy assessment',
      
      // Financial and blockchain analytics
      'financial data analysis', 'market analysis', 'investment analysis',
      'blockchain analytics', 'cryptocurrency analysis', 'trading analytics',
      'risk analysis', 'credit analysis', 'property analysis',
      
      // Information gathering and analysis
      'information finder', 'data aggregation', 'data collection', 'web scraping',
      'data extraction', 'information extraction', 'entity recognition',
      'sentiment analysis', 'text analytics', 'document analysis'
    ];
    
    const hasDataAnalyticsKeyword = dataAnalyticsKeywords.some(keyword => 
      searchText.includes(keyword)
    );
    
    const categoryMatch = tool.category && (
      tool.category.toLowerCase().includes('analytics') ||
      tool.category.toLowerCase().includes('data') ||
      tool.category.toLowerCase().includes('intelligence') ||
      tool.category.toLowerCase().includes('reporting') ||
      tool.category.toLowerCase().includes('research') ||
      tool.category.toLowerCase().includes('analysis') ||
      tool.category.toLowerCase().includes('statistical') ||
      tool.category.toLowerCase().includes('business intelligence') ||
      tool.category.toLowerCase().includes('fact checking') ||
      tool.category.toLowerCase().includes('information finder')
    );
    
    // Special handling for known data analytics tool names
    const dataAnalyticsToolNames = [
      'illuminous', 'world data explorer', 'data research analysis report',
      'probability gpt', 'askcsv', 'sweephy', 'compar', 'claude',
      'chatgpt', 'gemini', 'tableau', 'power bi', 'datarobot',
      'looker', 'qlik sense', 'finchat', 'chaingpt', 'fact checker',
      'person information finder', 'property data finder', 'perplexity',
      'google notebook lm', 'business intelligence', 'analytics platform'
    ];
    
    const toolNameMatch = dataAnalyticsToolNames.some(name => 
      tool.title.toLowerCase().includes(name) ||
      (tool.directUrl && tool.directUrl.toLowerCase().includes(name.replace(/\s+/g, '')))
    );
    
    return hasDataAnalyticsKeyword || categoryMatch || toolNameMatch;
  });
  
  console.log(`✅ Found ${dataAnalyticsTools.length} data analytics tools`);
  return dataAnalyticsTools;
};

export const getMarketingSalesTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`📈 Getting marketing & sales tools for category: "${categoryName}"`);
  
  const marketingSalesTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category && !tool.tags) return false;
    
    const searchText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ')}`.toLowerCase();
    
    const marketingSalesKeywords = [
      'marketing', 'sales', 'crm', 'lead generation', 'email marketing',
      'social media marketing', 'content marketing', 'digital marketing',
      'advertising', 'campaign', 'conversion', 'funnel', 'customer acquisition',
      'mailchimp', 'convertkit', 'klaviyo', 'hubspot', 'salesforce',
      'pipedrive', 'gong', 'outreach', 'zoominfo', 'intercom'
    ];
    
    const hasMarketingSalesKeyword = marketingSalesKeywords.some(keyword => 
      searchText.includes(keyword)
    );
    
    const categoryMatch = tool.category && (
      tool.category.toLowerCase().includes('marketing') ||
      tool.category.toLowerCase().includes('sales') ||
      tool.category.toLowerCase().includes('crm')
    );
    
    return hasMarketingSalesKeyword || categoryMatch;
  });
  
  console.log(`✅ Found ${marketingSalesTools.length} marketing & sales tools`);
  return marketingSalesTools;
};

export const getCommunicationCollaborationTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`💬 Getting communication & collaboration tools for category: "${categoryName}"`);
  
  const communicationCollaborationTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category && !tool.tags) return false;
    
    const searchText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ')}`.toLowerCase();
    
    const communicationCollaborationKeywords = [
      'communication', 'collaboration', 'team', 'meeting', 'chat', 'messaging',
      'video conferencing', 'audio conferencing', 'screen sharing', 'whiteboard',
      'project management', 'task management', 'workflow', 'slack', 'teams',
      'zoom', 'discord', 'telegram', 'whatsapp', 'notion', 'asana', 'trello'
    ];
    
    const hasCommunicationCollaborationKeyword = communicationCollaborationKeywords.some(keyword => 
      searchText.includes(keyword)
    );
    
    const categoryMatch = tool.category && (
      tool.category.toLowerCase().includes('communication') ||
      tool.category.toLowerCase().includes('collaboration') ||
      tool.category.toLowerCase().includes('meeting') ||
      tool.category.toLowerCase().includes('team')
    );
    
    return hasCommunicationCollaborationKeyword || categoryMatch;
  });
  
  console.log(`✅ Found ${communicationCollaborationTools.length} communication & collaboration tools`);
  return communicationCollaborationTools;
};

export const getAutomationPlatformsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🤖 Getting automation platforms tools for category: "${categoryName}"`);
  
  const automationPlatformsTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category && !tool.tags) return false;
    
    const searchText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ')}`.toLowerCase();
    
    const automationPlatformsKeywords = [
      'automation', 'workflow', 'process', 'integration', 'api', 'webhook',
      'zapier', 'make', 'integromat', 'automate', 'trigger', 'action',
      'bardeen', 'ifttt', 'microsoft flow', 'power automate', 'n8n'
    ];
    
    const hasAutomationPlatformsKeyword = automationPlatformsKeywords.some(keyword => 
      searchText.includes(keyword)
    );
    
    const categoryMatch = tool.category && (
      tool.category.toLowerCase().includes('automation') ||
      tool.category.toLowerCase().includes('workflow') ||
      tool.category.toLowerCase().includes('integration')
    );
    
    return hasAutomationPlatformsKeyword || categoryMatch;
  });
  
  console.log(`✅ Found ${automationPlatformsTools.length} automation platforms tools`);
  return automationPlatformsTools;
};

export const getAIChatAssistantsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`💬 Getting AI chat & assistants tools for category: "${categoryName}"`);
  
  const aiChatAssistantsTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category && !tool.tags) return false;
    
    const searchText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ')}`.toLowerCase();
    
    const aiChatAssistantsKeywords = [
      'ai chat', 'chatbot', 'virtual assistant', 'ai assistant', 'conversational ai',
      'gpt', 'claude', 'bard', 'gemini', 'chatgpt', 'openai', 'anthropic',
      'dialogue', 'conversation', 'natural language', 'nlp', 'language model'
    ];
    
    const hasAIChatAssistantsKeyword = aiChatAssistantsKeywords.some(keyword => 
      searchText.includes(keyword)
    );
    
    const categoryMatch = tool.category && (
      tool.category.toLowerCase().includes('chat') ||
      tool.category.toLowerCase().includes('assistant') ||
      tool.category.toLowerCase().includes('conversational')
    );
    
    return hasAIChatAssistantsKeyword || categoryMatch;
  });
  
  console.log(`✅ Found ${aiChatAssistantsTools.length} AI chat & assistants tools`);
  return aiChatAssistantsTools;
};

export const getContentCreationWritingTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`✍️ Getting content creation & writing tools for category: "${categoryName}"`);
  
  const contentCreationWritingTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category && !tool.tags) return false;
    
    const searchText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ')}`.toLowerCase();
    
    const contentCreationWritingKeywords = [
      'content creation', 'writing', 'copywriting', 'content writing', 'blog writing',
      'article writing', 'creative writing', 'technical writing', 'grammar',
      'proofreading', 'editing', 'text generation', 'content generation',
      'grammarly', 'jasper', 'copy.ai', 'writesonic', 'quillbot', 'hemingway'
    ];
    
    const hasContentCreationWritingKeyword = contentCreationWritingKeywords.some(keyword => 
      searchText.includes(keyword)
    );
    
    const categoryMatch = tool.category && (
      tool.category.toLowerCase().includes('content') ||
      tool.category.toLowerCase().includes('writing') ||
      tool.category.toLowerCase().includes('copywriting')
    );
    
    return hasContentCreationWritingKeyword || categoryMatch;
  });
  
  console.log(`✅ Found ${contentCreationWritingTools.length} content creation & writing tools`);
  return contentCreationWritingTools;
};

export const getImageDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎨 Getting image & design tools for category: "${categoryName}"`);
  
  const imageDesignTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category && !tool.tags) return false;
    
    const searchText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ')}`.toLowerCase();
    
    const imageDesignKeywords = [
      'image', 'design', 'graphic design', 'visual design', 'logo design',
      'illustration', 'art', 'drawing', 'painting', 'sketch', 'digital art',
      'photo editing', 'image editing', 'photo enhancement', 'image generation',
      'midjourney', 'dall-e', 'stable diffusion', 'canva', 'figma', 'photoshop'
    ];
    
    const hasImageDesignKeyword = imageDesignKeywords.some(keyword => 
      searchText.includes(keyword)
    );
    
    const categoryMatch = tool.category && (
      tool.category.toLowerCase().includes('image') ||
      tool.category.toLowerCase().includes('design') ||
      tool.category.toLowerCase().includes('graphic') ||
      tool.category.toLowerCase().includes('visual')
    );
    
    return hasImageDesignKeyword || categoryMatch;
  });
  
  console.log(`✅ Found ${imageDesignTools.length} image & design tools`);
  return imageDesignTools;
};

// Enhanced function for business operations & productivity tools
export const getBusinessOperationsProductivityTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`💼 Getting business operations & productivity tools for category: "${categoryName}"`);
  
  const businessOperationsProductivityTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category && !tool.tags) return false;
    
    const searchText = `${tool.title} ${tool.description} ${tool.category} ${tool.tags?.join(' ')}`.toLowerCase();
    
    // Enhanced matching for business operations & productivity tools
    const businessOperationsProductivityKeywords = [
      // Core business terms
      'business', 'productivity', 'operations', 'management', 'enterprise', 'professional',
      'workflow', 'process', 'efficiency', 'automation', 'optimization', 'strategy',
      
      // Industry-specific terms
      'oil', 'gas', 'drill', 'energy', 'drilling', 'petroleum', 'extraction',
      'resume', 'job', 'career', 'hiring', 'recruitment', 'employment', 'cv',
      '3d print', '3d printing', 'manufacturing', 'prototyping', 'additive manufacturing',
      'microsaas', 'saas', 'software as a service', 'startup', 'entrepreneur',
      'restaurant', 'menu', 'food service', 'hospitality', 'culinary',
      'trivia', 'quiz', 'team building', 'entertainment', 'engagement',
      'fortune', 'prediction', 'forecasting', 'analytics', 'insights',
      'imagination', 'creative', 'brainstorming', 'innovation', 'ideation',
      'algebraic', 'mathematical', 'calculation', 'formula', 'equation',
      'business plan', 'planning', 'strategic planning', 'business strategy',
      'startup validator', 'validation', 'market validation', 'business validation',
      'data research', 'analysis', 'report', 'reporting', 'research',
      'material valuation', 'valuation', 'appraisal', 'assessment', 'evaluation',
      'credit score', 'credit analysis', 'financial assessment', 'creditworthiness',
      'solar', 'renewable energy', 'land assessment', 'property assessment',
      
      // Meeting and productivity tools
      'meeting', 'transcription', 'notes', 'recording', 'collaboration',
      'speakai', 'meetgeek', 'fibery', 'sessions', 'typedesk', 'ideabuddy',
      'tinywow', 'otter.ai', 'notion', 'bardeen', 'mem ai', 'beautiful.ai',
      'fireflies', 'rewind.ai', 'rev', 'tl;dv', 'traq.ai', 'sembly.ai',
      'cogram', 'read', 'small ppt', 'superhuman', 'motion', 'reclaim ai',
      'clickup', 'clockify', 'calendly', 'docusign', 'quickbooks',
      
      // Email and communication tools
      'email', 'mailchimp', 'convertkit', 'gmail', 'constant contact',
      'klaviyo', 'proofpoint', 'boomerang', 'sanebox', 'mixmax',
      
      // CRM and sales tools
      'salesforce', 'hubspot', 'pipedrive', 'gong', 'outreach', 'zoominfo',
      'intercom', 'crm', 'customer relationship', 'sales management',
      
      // Enterprise tools
      'microsoft teams', 'slack', 'tableau', 'stripe', 'payment processing',
      
      // GPT and AI assistants for business
      'gpt workspace', 'resume writer gpt', 'hr assistant gpt',
      'compliance officer gpt', 'logistics manager gpt', 'safety inspector gpt',
      'it support gpt', 'contract review bot',
      
      // Business processes
      'contract', 'compliance', 'hr', 'human resources', 'logistics',
      'safety', 'inspection', 'it support', 'technical support',
      'document management', 'file management', 'project management',
      'task management', 'time management', 'schedule management',
      'calendar', 'appointment', 'booking', 'reservation',
      
      // Financial and accounting
      'accounting', 'finance', 'financial', 'invoice', 'billing',
      'expense', 'budget', 'cost', 'revenue', 'profit', 'loss',
      'tax', 'payroll', 'bookkeeping', 'financial planning',
      
      // Quality and compliance
      'quality', 'audit', 'compliance', 'regulation', 'standard',
      'certification', 'inspection', 'assessment', 'evaluation',
      'monitoring', 'tracking', 'reporting', 'documentation',
      
      // Performance and analytics
      'performance', 'kpi', 'metrics', 'dashboard', 'analytics',
      'intelligence', 'insights', 'visualization', 'chart', 'graph',
      'report', 'reporting', 'analysis', 'trend', 'forecast'
    ];
    
    // Check if any keyword matches
    const hasBusinessOperationsProductivityKeyword = businessOperationsProductivityKeywords.some(keyword => 
      searchText.includes(keyword)
    );
    
    // Check category matching
    const categoryMatch = tool.category && (
      tool.category.toLowerCase().includes('business') ||
      tool.category.toLowerCase().includes('productivity') ||
      tool.category.toLowerCase().includes('operations') ||
      tool.category.toLowerCase().includes('management') ||
      tool.category.toLowerCase().includes('enterprise') ||
      tool.category.toLowerCase().includes('professional') ||
      tool.category.toLowerCase().includes('workflow') ||
      tool.category.toLowerCase().includes('automation') ||
      tool.category.toLowerCase().includes('meeting') ||
      tool.category.toLowerCase().includes('transcription') ||
      tool.category.toLowerCase().includes('email') ||
      tool.category.toLowerCase().includes('crm') ||
      tool.category.toLowerCase().includes('finance') ||
      tool.category.toLowerCase().includes('accounting') ||
      tool.category.toLowerCase().includes('hr') ||
      tool.category.toLowerCase().includes('compliance') ||
      tool.category.toLowerCase().includes('logistics') ||
      tool.category.toLowerCase().includes('safety') ||
      tool.category.toLowerCase().includes('contract') ||
      tool.category.toLowerCase().includes('document')
    );
    
    // Special handling for known business tool names
    const businessToolNames = [
      'drill baby drill', 'resume job finder', '3d print gpt', 'microsaas gpt',
      'restaurant menu maker', 'trivia night gpt', 'fortune teller gpt',
      'imagination traveler gpt', 'king blueberry gpt', 'business plan generator',
      'startup validator gpt', 'data research analysis', 'material valuation',
      'predictive credit score', 'solar land assessor', 'speakai', 'meetgeek',
      'fibery', 'sessions', 'typedesk', 'ideabuddy', 'tinywow', 'otter.ai',
      'notion ai', 'bardeen', 'mem ai', 'beautiful.ai', 'fireflies',
      'rewind.ai', 'rev', 'tl;dv', 'traq.ai', 'sembly.ai', 'cogram',
      'small ppt', 'superhuman', 'motion', 'reclaim ai', 'clickup',
      'clockify', 'calendly', 'docusign', 'quickbooks', 'mailchimp',
      'convertkit', 'gmail smart compose', 'constant contact', 'klaviyo',
      'proofpoint', 'boomerang', 'sanebox', 'mixmax', 'salesforce',
      'hubspot', 'pipedrive', 'gong', 'outreach', 'zoominfo', 'intercom',
      'microsoft teams', 'slack', 'tableau', 'stripe', 'gpt workspace',
      'resume writer gpt', 'hr assistant gpt', 'compliance officer gpt',
      'logistics manager gpt', 'safety inspector gpt', 'it support gpt',
      'contract review bot'
    ];
    
    const toolNameMatch = businessToolNames.some(name => 
      tool.title.toLowerCase().includes(name) ||
      (tool.directUrl && tool.directUrl.toLowerCase().includes(name.replace(/\s+/g, '')))
    );
    
    return hasBusinessOperationsProductivityKeyword || categoryMatch || toolNameMatch;
  });
  
  console.log(`✅ Found ${businessOperationsProductivityTools.length} business operations & productivity tools`);
  return businessOperationsProductivityTools;
};
