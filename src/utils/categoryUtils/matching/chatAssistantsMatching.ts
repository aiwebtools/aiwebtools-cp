import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getAIChatAssistantsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🤖 Getting AI Chat & Assistants tools for category: ${categoryName}`);
  
  // Priority AI Web Tools GPTs that should appear first
  const priorityAIWebToolsGPTs = [
    "GODMODE GPT",
    "MULTITASKER GPT", 
    "ENTER THE MATRIX GPT",
    "NEO👁️MATRIX GPT",
    "IF AI RULED THE WORLD",
    "AI SIMULATION GPT",
    "Historical Figure Chat GPT",
    "Personalized DR. GPT",
    "Doctor GPT",
    "Mental Wellness GPT",
    "TALK TO THE GODS GPT",
    "Mary Magdalene GPT",
    "🕊️Mary Magdalene GPT",
    "ALAN WATTS GPT",
    "Sophia Aeterna AI",
    "Custom GPT Ideas & Brainstorming Assistant",
    "AI Tools Finder GPT",
    "TALK TO HISTORY GPT",
    "Nikola Tesla GPT",
    "Albert Einstein GPT",
    "Personal Assistant GPT",
    "Communication Coach GPT"
  ];

  // Other priority chat tools that should appear early
  const priorityChatTools = [
    "Replika",
    "Character.AI",
    "Perplexity AI",
    "Monica AI",
    "Poe by Quora",
    "ChatMap",
    "Robotalk",
    "Claude by Anthropic",
    "Hugging Face Chat",
    "BotSonic",
    "Mistral",
    "AI WEB TOOLS LLC",
    "Personal AI Assistant",
    "AI Chatbot Buddy",
    "AI Knowledge Navigator",
    "AI Task Automator",
    "AI Creative Spark",
    "AI Productivity Booster",
    "AI Language Tutor",
    "AI Smart Search",
    "AI Social Connector",
    "AI Wellness Coach",
    "AI Security Guardian",
    "YesChat.ai",
    "GPT4V Online",
    "GPT4ALL",
    "Grok by X",
    "Microsoft Copilot",
    "Gemini by Google",
    "Custom GPT Store",
    "Merlin AI",
    "POE",
    "ChattyCat",
    "ChatGPT",
    "Pi, Your Personal AI",
    "YouChat",
    "AI Steve",
    "GPTGO.ai",
    "You.com",
    "Merlin",
    "Notebook LM by Google"
  ];

  // Enhanced chat and assistant keywords
  const chatAssistantKeywords = [
    "chat", "assistant", "gpt", "ai", "bot", "conversation", "talk", "speak", 
    "dialogue", "interactive", "virtual", "personal", "help", "support",
    "companion", "chatbot", "voice", "question", "answer", "query",
    "copilot", "guide", "advisor", "coach", "tutor", "mentor", "consultant"
  ];

  // Find priority AI Web Tools GPTs first
  const priorityGPTs = tools.filter(tool => 
    priorityAIWebToolsGPTs.some(priorityTitle => 
      tool.title.toLowerCase().includes(priorityTitle.toLowerCase()) ||
      priorityTitle.toLowerCase().includes(tool.title.toLowerCase())
    )
  );

  // Find other priority chat tools
  const otherPriorityTools = tools.filter(tool => 
    !priorityGPTs.some(gpt => gpt.title === tool.title) && // Don't duplicate
    priorityChatTools.some(priorityTitle => 
      tool.title.toLowerCase().includes(priorityTitle.toLowerCase()) ||
      priorityTitle.toLowerCase().includes(tool.title.toLowerCase())
    )
  );

  // Find tools that match the category or have chat/assistant functionality
  const categoryMatchingTools = tools.filter(tool => {
    if (!tool.category && !tool.title && !tool.description) return false;
    
    // Skip if already in priority lists
    if (priorityGPTs.some(gpt => gpt.title === tool.title) || 
        otherPriorityTools.some(other => other.title === tool.title)) {
      return false;
    }

    const lowerTitle = tool.title.toLowerCase();
    const lowerDescription = tool.description.toLowerCase();
    const lowerCategory = tool.category?.toLowerCase() || '';
    const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];

    // Direct category match
    if (tool.category && isSimilarCategory(tool.category, categoryName)) {
      return true;
    }

    // Check for AI Chat & Assistants related categories
    const chatCategories = [
      "ai chat & assistants", "ai assistants & search", "communication & collaboration",
      "ai development & platforms", "business operations & productivity"
    ];
    
    if (chatCategories.some(cat => isSimilarCategory(lowerCategory, cat))) {
      return true;
    }

    // Check for chat/assistant functionality in title, description, or tags
    const hasKeyword = chatAssistantKeywords.some(keyword =>
      lowerTitle.includes(keyword) || 
      lowerDescription.includes(keyword) ||
      lowerTags.some(tag => tag.includes(keyword))
    );

    if (hasKeyword) {
      return true;
    }

    // Special checks for AI tools that have conversational interfaces
    if (lowerTitle.includes('ai') && (
      lowerTitle.includes('search') || 
      lowerTitle.includes('help') || 
      lowerTitle.includes('guide') ||
      lowerDescription.includes('interact') ||
      lowerDescription.includes('conversation') ||
      lowerDescription.includes('chat') ||
      lowerDescription.includes('assistant')
    )) {
      return true;
    }

    return false;
  });

  // Combine with priority order: AI Web Tools GPTs first, then other priority tools, then category matches
  const allChatTools = [
    ...priorityGPTs,
    ...otherPriorityTools, 
    ...categoryMatchingTools
  ];

  console.log(`🤖 Found ${allChatTools.length} AI Chat & Assistants tools`);
  console.log(`📊 Breakdown: ${priorityGPTs.length} priority GPTs, ${otherPriorityTools.length} other priority, ${categoryMatchingTools.length} category matches`);
  console.log(`🎯 First 10 tools:`, allChatTools.slice(0, 10).map(t => t.title));

  return allChatTools;
};
