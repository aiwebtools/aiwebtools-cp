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
      'speech recognition', 'voice recognition', 'audio transcription', 'interview transcription',
      
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
