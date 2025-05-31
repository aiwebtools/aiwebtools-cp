
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getMarketingSalesTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`📈 MARKETING & SALES enhanced matching for: ${categoryName}`);
  
  // Priority Marketing & Sales Tools (first priority - user specified)
  const priorityMarketingSalesTools = [
    'SalesFlow',
    'Outranking',
    'Scalenut',
    'SurferSEO',
    'CopySpace.ai',
    'Printify',
    'Mentum AI',
    'Sales Handy',
    'WarmBox',
    'STRIPO',
    'Shinefy',
    'ShineRanker',
    'Revealbot',
    'KeywordInsights',
    'SalesFlare',
    'Markopolo AI',
    'Hypefury',
    'Predis',
    'Ranked',
    'Meet Alfred',
    'DIIB',
    'SEObility',
    'SENDER AI',
    'Nitreo',
    'KENJI',
    'FLOCK SOCIAL',
    'Kicksta',
    'Subpals',
    'StormViews',
    'Sonuker',
    'Confect.io',
    'ContentStudio',
    'Chatfuel',
    'MediaMister',
    'Shopify Magic',
    'Sonetel',
    'Keeper.ai',
    'JourneyPlan.co',
    'Spoken.io',
    'AWEBER',
    'MailRush.io',
    'ActiveCampaign',
    'GroupMail',
    'Benchmark Email',
    'AnswerThePublic',
    'SiteChecker AI',
    'Webscrape AI',
    'WP-Rocket',
    'SimilarContent',
    'Postaga',
    'JVZOO',
    'MailerGPT',
    'Profitology',
    'MooSend',
    'Juice.ai',
    'Luna',
    'Best Regards',
    'GetResponse',
    'Regie.ai',
    'FOLK',
    'Hunter.io',
    'ContactOut',
    'DirectIQ',
    'Marketing Consultant GPT',
    'LOGO AND AD GENERATOR GPT',
    'Jasper',
    'Copy.ai',
    'Writesonic',
    'Mailchimp',
    'HubSpot',
    'Google Analytics',
    'SEMrush',
    'Ahrefs',
    'SHOPPING GPT'
  ];

  const marketingSalesKeywords = [
    'salesflow', 'outranking', 'scalenut', 'surferseo', 'copyspace', 'printify',
    'mentum ai', 'sales handy', 'warmbox', 'stripo', 'shinefy', 'shineranker',
    'revealbot', 'keywordinsights', 'salesflare', 'markopolo', 'hypefury',
    'predis', 'ranked', 'meet alfred', 'diib', 'seobility', 'sender ai',
    'nitreo', 'kenji', 'flock social', 'kicksta', 'subpals', 'stormviews',
    'sonuker', 'confect', 'contentstudio', 'chatfuel', 'mediamister',
    'shopify magic', 'sonetel', 'keeper.ai', 'journeyplan', 'spoken.io',
    'aweber', 'mailrush', 'activecampaign', 'groupmail', 'benchmark email',
    'answerthepublic', 'sitechecker', 'webscrape', 'wp-rocket', 'similarcontent',
    'postaga', 'jvzoo', 'mailergpt', 'profitology', 'moosend', 'juice.ai',
    'luna', 'best regards', 'getresponse', 'regie.ai', 'folk', 'hunter.io',
    'contactout', 'directiq', 'marketing consultant', 'logo generator',
    'jasper', 'copy.ai', 'writesonic', 'mailchimp', 'hubspot', 'google analytics',
    'semrush', 'ahrefs', 'shopping gpt', 'marketing', 'sales', 'seo', 'email',
    'social media', 'advertising', 'lead generation', 'crm', 'automation',
    'engagement', 'conversion', 'analytics', 'growth', 'outreach', 'campaigns'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = marketingSalesKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('marketing') ||
      tool.category.toLowerCase().includes('sales') ||
      tool.category.toLowerCase().includes('seo') ||
      tool.category.toLowerCase().includes('social') ||
      tool.category.toLowerCase().includes('email') ||
      tool.category.toLowerCase().includes('advertising') ||
      tool.category.toLowerCase().includes('commerce') ||
      tool.category.toLowerCase().includes('lead') ||
      tool.category.toLowerCase().includes('crm')
    );

    return keywordMatch || categoryMatch;
  });

  // Separate tools into priority groups
  const priorityTools = categoryMatchedTools.filter(tool => 
    priorityMarketingSalesTools.some(priorityName => 
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

  console.log(`✅ Found ${finalTools.length} marketing & sales tools (${priorityTools.length} priority, ${remainingTools.length} remaining)`);
  return finalTools;
};
