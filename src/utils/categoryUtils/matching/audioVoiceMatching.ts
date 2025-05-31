
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getAudioVoiceTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎵 AUDIO & VOICE enhanced matching for: ${categoryName}`);
  
  // Priority Audio & Voice Tools (first priority - user specified)
  const priorityAudioVoiceTools = [
    'SUNO AI MUSIC GENERATOR',
    'Suno AI',
    'SUNO AI MUSIC GENERATOR',
    'Music Video Maker AI Studio',
    'LALAL.AI',
    'Specterr',
    'Mubert',
    'Resound.fm',
    'Timebolt',
    'Podium',
    'Wondercraft',
    'WonderCraft AI',
    'UDIO MUSIC Generator',
    'Udio',
    'Stable Audio',
    'MusicLM (Google)',
    'Google MusicLM',
    'AudioCraft (Meta)',
    'Voicemod AI Voices',
    'VoiceMod',
    'Splash Pro',
    'Coqui TTS',
    'Soundful',
    'Respeecher',
    'AIVA',
    'Amper Music',
    'Speechify',
    'Endel',
    'Descript Overdub',
    'Jukebox (OpenAI)',
    'Replica Studios',
    'Melodrive',
    'Lyrebird AI',
    'Humtap',
    'MURF AI',
    'BEATOVEN.AI',
    'BeatBot',
    'SoundDraw.io',
    'Play.HT',
    'Adobe Podcast',
    'Krisp',
    'Krisp AI',
    'Boomy',
    'Riffusion',
    'ElevenLabs',
    'Eleven Labs Text to Speech & Sound Effect Generation Platform',
    'VoiceAI',
    'MyVocal.AI',
    'Resemble.ai',
    'Resemble AI',
    'Vocal Remover',
    'AutoPod.fm',
    'TexttoMusic.app',
    'Musico',
    'Songmastr',
    'Google\'s Drum Machine',
    'WavTool',
    'X-Minus.pro',
    'Loudly',
    'Databass AI',
    'Cleanvoice.ai',
    'Uberduck.ai',
    'TuneReel',
    'Listnr',
    'Xpeacho',
    'AudioNotes',
    'Dictanote',
    'Murf AI'
  ];

  const audioVoiceKeywords = [
    'audio', 'voice', 'sound', 'music', 'speech', 'podcast', 'radio',
    'recording', 'editing', 'mixing', 'mastering', 'synthesis', 'generation',
    'text-to-speech', 'speech-to-text', 'transcription', 'voice cloning',
    'voice over', 'narration', 'dubbing', 'ai voice', 'vocal', 'singing',
    'instrument', 'beat', 'melody', 'composition', 'production', 'studio',
    'suno', 'udio', 'elevenlabs', 'murf', 'speechify', 'descript',
    'music generation', 'audio generation', 'voice generation'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
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

  // Separate tools into priority groups
  const priorityTools = categoryMatchedTools.filter(tool => 
    priorityAudioVoiceTools.some(priorityName => 
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

  console.log(`✅ Found ${finalTools.length} audio & voice tools (${priorityTools.length} priority, ${remainingTools.length} remaining)`);
  return finalTools;
};
