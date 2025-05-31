
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getDataAnalyticsTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`📊 DATA & ANALYTICS enhanced matching for: ${categoryName}`);
  
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

  const dataToolNames = [
    'Illuminous World Data Explorer GPT', 'Data Research Analysis Report GPT', 
    'Probability GPT', 'AskCSV', 'Sweephy', 'Compar', 'Claude', 'ChatGPT', 
    'Gemini', 'Tableau', 'Power BI', 'DataRobot', 'Looker', 'Qlik Sense', 
    'FinChat.io', 'ChainGPT', 'FACT CHECKER GPT', 'Person Information Finder GPT',
    'Property Data Finder', 'Real Estate GPT', 'Perplexity', 'Google Notebook LM'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Direct name matching
    const nameMatch = dataToolNames.some(name => 
      tool.title?.toLowerCase().includes(name.toLowerCase()) ||
      name.toLowerCase().includes(tool.title?.toLowerCase() || '')
    );
    
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

    return nameMatch || keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} data & analytics tools`);
  return matchedTools;
};
