
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getDataAnalyticsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`📊 DATA & ANALYTICS enhanced matching for: ${categoryName}`);
  
  // Priority Data & Analytics Tools (first priority - user specified)
  const priorityDataAnalyticsTools = [
    'Illuminous World Data Explorer GPT',
    'Illuminous',
    'Data Research Analysis Report GPT',
    'Probability GPT',
    'AskCSV',
    'Sweephy',
    'Compar',
    'Claude',
    'ChatGPT',
    'Gemini',
    'Tableau',
    'Power BI',
    'DataRobot',
    'Looker',
    'Qlik Sense',
    'FinChat.io',
    'FinChat',
    'ChainGPT',
    'FACT CHECKER GPT',
    'Fact Checker GPT',
    'Person Information Finder GPT',
    'Google NotebookLM',
    'Google Notebook LM',
    'Perplexity'
  ];

  const dataAnalyticsKeywords = [
    'illuminous', 'world data', 'data research', 'data analysis', 'probability', 
    'askcsv', 'sweephy', 'compar', 'claude data', 'chatgpt data', 'gemini data',
    'tableau', 'power bi', 'datarobot', 'looker', 'qlik sense', 'finchat',
    'chaingpt', 'fact checker', 'person finder', 'property data', 'real estate',
    'perplexity', 'google notebook', 'analytics', 'intelligence', 'insights',
    'statistics', 'research', 'business intelligence', 'data science',
    'predictive analytics', 'data visualization', 'dashboard', 'reporting',
    'metrics', 'kpi', 'trend analysis', 'pattern recognition', 'forecasting',
    'machine learning analytics', 'ai analytics', 'big data', 'data mining',
    'data warehouse', 'olap', 'etl', 'data pipeline', 'real-time analytics'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = dataAnalyticsKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('data') ||
      tool.category.toLowerCase().includes('analytics') ||
      tool.category.toLowerCase().includes('research') ||
      tool.category.toLowerCase().includes('intelligence') ||
      tool.category.toLowerCase().includes('insights') ||
      tool.category.toLowerCase().includes('statistics') ||
      tool.category.toLowerCase().includes('analysis')
    );

    return keywordMatch || categoryMatch;
  });

  // Separate tools into priority groups
  const priorityTools = categoryMatchedTools.filter(tool => 
    priorityDataAnalyticsTools.some(priorityName => 
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

  console.log(`✅ Found ${finalTools.length} data & analytics tools (${priorityTools.length} priority, ${remainingTools.length} remaining)`);
  return finalTools;
};
