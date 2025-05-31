
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

// Enhanced function for AI Development & Platforms tools
export const getAIDevelopmentPlatformsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🔧 AI DEVELOPMENT & PLATFORMS enhanced matching for: ${categoryName}`);
  
  // Priority AI Development & Platforms Tools (first priority - user specified)
  const priorityAIDevelopmentPlatformsTools = [
    'GODMODE GPT',
    'God Mode GPT',
    'PERFECT PROMPT ENGINE',
    'Illuminous World Data Explorer GPT',
    'Phenomenon Explorer AI Suite',
    'Customizable GPT Maker',
    'Custom GPT Maker',
    'ImmortalizeME',
    'Resurrection GPT',
    'Custom GPT Ideas',
    'Brainstorming Assistant',
    'ChatRTX',
    'LM STUDIO',
    'ANYTHING LLM',
    'BIG-AGI',
    'Claude',
    'TensorFlow',
    'LangChain',
    'Hugging Face',
    'Mistral',
    'AI WEB TOOLS LLC',
    'LMSYS CHATBOT ARENA',
    'Llama',
    'ChatGPT',
    'Perplexity AI',
    'Auto-GPT',
    'BabyAGI',
    'AgentGPT',
    'Microsoft JARVIS',
    'GPTPastVoices',
    'ML Agents',
    'Private LLM Agents',
    'AI Agents Google',
    'AI Agents AWS',
    'AI Agents Azure',
    'AI Town',
    'AI Steve',
    'AI Legion',
    'AI Matrix',
    'Manus Autonomous Agent',
    'Surf.new Web Agents',
    'Lindy AI Automation',
    'ChatGPT Operator',
    'Cheatlayer Project Atlas',
    'BuildAI.Space',
    'Convai',
    'Theneo',
    'OpenAI API',
    'Anthropic Claude API',
    'Pinecone',
    'Roboflow',
    'Cohere',
    'Replicate',
    'Snyk',
    'DeepCode',
    'GPT-4 Turbo',
    'Claude 3 Opus',
    'Gemini Ultra',
    'Mutable AI',
    'Sourcegraph',
    'Code Climate',
    'Durable AI Website Builder',
    'Amazon CodeWhisperer',
    'GEMINI/GOOGLE AI STUDIO',
    'CopyCoder.AI',
    'Vercel v0',
    'Netlify',
    'Supabase',
    'Cloudflare Workers AI',
    'Replit',
    'Framer',
    'Bolt.new',
    'Webflow',
    'Builder.io',
    'Railway',
    'MongoDB Atlas',
    'AWS',
    'Cloudflare',
    'Datadog',
    'Docker',
    'Kubernetes',
    'HashiCorp Vault',
    'Terraform',
    'Redis',
    'Elasticsearch',
    'GitHub Copilot',
    'Tabnine',
    'Multitasker GPT',
    'Cursor AI',
    'Hugging Face GPT Prompt Library',
    'Lovable.dev'
  ];

  const aiDevelopmentKeywords = [
    'godmode', 'perfect prompt', 'custom gpt', 'customizable gpt', 'gpt maker', 
    'immortalizeme', 'resurrection gpt', 'brainstorming assistant', 'chatrtx', 
    'lm studio', 'anything llm', 'big-agi', 'claude', 'tensorflow', 'langchain',
    'hugging face', 'mistral', 'lmsys', 'llama', 'chatgpt', 'perplexity',
    'auto-gpt', 'babygpt', 'agentgpt', 'jarvis', 'ai agents', 'ai town',
    'ai steve', 'ai legion', 'ai matrix', 'manus', 'surf.new', 'lindy',
    'cheatlayer', 'buildai.space', 'convai', 'theneo', 'openai api',
    'anthropic', 'pinecone', 'roboflow', 'cohere', 'replicate', 'snyk',
    'deepcode', 'gpt-4', 'claude 3', 'gemini', 'mutable ai', 'sourcegraph',
    'code climate', 'durable ai', 'codewhisperer', 'gemini ai studio',
    'copycoder', 'vercel v0', 'netlify', 'supabase', 'cloudflare workers',
    'replit', 'framer', 'bolt.new', 'webflow', 'builder.io', 'railway',
    'mongodb', 'aws', 'datadog', 'docker', 'kubernetes', 'vault',
    'terraform', 'redis', 'elasticsearch', 'github copilot', 'tabnine',
    'multitasker gpt', 'cursor ai', 'prompt library', 'ai development',
    'development platform', 'coding platform', 'programming platform',
    'ai framework', 'machine learning', 'deep learning', 'neural network',
    'model development', 'api development', 'ai infrastructure', 'mlops',
    'devops', 'cloud platform', 'edge computing', 'container platform',
    'lovable.dev', 'lovable'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = aiDevelopmentKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('ai development') ||
      tool.category.toLowerCase().includes('development') ||
      tool.category.toLowerCase().includes('platform') ||
      tool.category.toLowerCase().includes('coding') ||
      tool.category.toLowerCase().includes('programming') ||
      tool.category.toLowerCase().includes('api') ||
      tool.category.toLowerCase().includes('framework') ||
      tool.category.toLowerCase().includes('infrastructure') ||
      tool.category.toLowerCase().includes('cloud') ||
      tool.category.toLowerCase().includes('agent')
    );

    return keywordMatch || categoryMatch;
  });

  // Separate tools into priority groups
  const priorityTools = categoryMatchedTools.filter(tool => 
    priorityAIDevelopmentPlatformsTools.some(priorityName => 
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

  console.log(`✅ Found ${finalTools.length} AI Development & Platforms tools (${priorityTools.length} priority, ${remainingTools.length} remaining)`);
  return finalTools;
};
