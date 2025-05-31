
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getAudioVoiceTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎵 AUDIO & VOICE enhanced matching for: ${categoryName}`);
  
  // HIGH PRIORITY Audio & Voice Tools (AI Web Tools GPTs that MUST appear first)
  const highPriorityAudioVoiceTools = [
    'Music Video Maker AI Studio',
    'Music Melodies & Lessons GPT',
    'Podcast Script Writer GPT',
    'Mixologist GPT',
    'Chef "Sizzle" AI Culinary Assistant'
  ];

  // Priority Audio & Voice Tools (second priority - user specified)
  const priorityAudioVoiceTools = [
    'SUNO AI MUSIC GENERATOR',
    'Suno AI',
    'UDIO MUSIC Generator',
    'Udio',
    'ElevenLabs',
    'Eleven Labs Text to Speech & Sound Effect Generation Platform',
    'MURF AI',
    'Murf AI',
    'LALAL.AI',
    'Specterr',
    'Mubert',
    'Resound.fm',
    'Timebolt',
    'Podium',
    'Wondercraft',
    'WonderCraft AI',
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
    'Descript',
    'Jukebox (OpenAI)',
    'Replica Studios',
    'Melodrive',
    'Lyrebird AI',
    'Humtap',
    'BEATOVEN.AI',
    'BeatBot',
    'SoundDraw.io',
    'Play.HT',
    'Adobe Podcast',
    'Krisp',
    'Krisp AI',
    'Boomy',
    'Riffusion',
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
    'Dictanote'
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

  // Separate tools into priority groups with EXACT matching
  const highPriorityTools = categoryMatchedTools.filter(tool => 
    highPriorityAudioVoiceTools.some(priorityName => {
      const toolTitle = tool.title?.toLowerCase() || '';
      const priorityNameLower = priorityName.toLowerCase();
      return toolTitle.includes(priorityNameLower) || 
             priorityNameLower.includes(toolTitle) ||
             toolTitle === priorityNameLower;
    })
  );

  const priorityTools = categoryMatchedTools.filter(tool => 
    !highPriorityTools.includes(tool) &&
    priorityAudioVoiceTools.some(priorityName => {
      const toolTitle = tool.title?.toLowerCase() || '';
      const priorityNameLower = priorityName.toLowerCase();
      return toolTitle.includes(priorityNameLower) || 
             priorityNameLower.includes(toolTitle) ||
             toolTitle === priorityNameLower;
    })
  );

  const remainingTools = categoryMatchedTools.filter(tool => 
    !highPriorityTools.includes(tool) && !priorityTools.includes(tool)
  );

  // Combine in priority order - HIGH PRIORITY FIRST!
  const finalTools = [
    ...highPriorityTools,
    ...priorityTools,
    ...remainingTools
  ];

  console.log(`✅ Found ${finalTools.length} audio & voice tools (${highPriorityTools.length} high priority, ${priorityTools.length} priority, ${remainingTools.length} remaining)`);
  console.log(`🎯 High Priority Tools Found:`, highPriorityTools.map(t => t.title));
  console.log(`⭐ Priority Tools Found:`, priorityTools.map(t => t.title));
  
  return finalTools;
};
