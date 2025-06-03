
import { Tool } from "@/types/tools";

// Financial and money-related keywords
const financialKeywords = [
  'money', 'financial', 'finance', 'trading', 'trader', 'investment', 'investing',
  'stock', 'market', 'crypto', 'cryptocurrency', 'bitcoin', 'portfolio',
  'wealth', 'banking', 'loan', 'credit', 'debit', 'budget', 'budgeting',
  'savings', 'tax', 'taxes', 'income', 'revenue', 'profit', 'loss',
  'economic', 'economics', 'fiscal', 'monetary', 'currency', 'exchange',
  'valuation', 'appraisal', 'asset', 'liability', 'equity', 'debt',
  'mortgage', 'insurance', 'retirement', 'pension', 'dividend', 'interest'
];

const financialToolTitles = [
  'trader gpt',
  'material valuation gpt',
  'predictive credit score checker gpt',
  'taxes gpt',
  'microsaas gpt',
  'insurance claims gpt',
  'business plan generator gpt',
  'startup validator gpt',
  'property data finder gpt',
  'real estate',
  'trading',
  'financial'
];

export const matchFinancial = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  // Direct financial keyword matching
  const hasFinancialKeyword = financialKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword) || searchableText.includes(keyword)
  );

  // Tool title matching for financial tools
  const isFinancialTool = financialToolTitles.some(title => 
    tool.title.toLowerCase().includes(title) || 
    searchableText.includes(title)
  );

  // Category-based matching
  const isFinancialCategory = tool.category?.toLowerCase().includes('business') ||
                             tool.category?.toLowerCase().includes('finance') ||
                             tool.category?.toLowerCase().includes('professional');

  // Check if search term is finance-related
  const isFinanceSearch = financialKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );

  return (hasFinancialKeyword || isFinancialTool || (isFinanceSearch && isFinancialCategory));
};

export const scoreFinancial = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  let score = 0;

  // High priority for exact financial tool matches
  const exactMatches = [
    'trader gpt',
    'material valuation gpt', 
    'taxes gpt',
    'predictive credit score checker gpt',
    'insurance claims gpt',
    'business plan generator gpt'
  ];

  for (const exactMatch of exactMatches) {
    if (tool.title.toLowerCase().includes(exactMatch)) {
      score += 5000;
      break;
    }
  }

  // Medium priority for financial keywords in title
  for (const keyword of financialKeywords) {
    if (tool.title.toLowerCase().includes(keyword)) {
      score += 3000;
      break;
    }
  }

  // Lower priority for financial keywords in description
  for (const keyword of financialKeywords) {
    if (tool.description.toLowerCase().includes(keyword)) {
      score += 1500;
      break;
    }
  }

  // Business category bonus
  if (tool.category?.toLowerCase().includes('business') || 
      tool.category?.toLowerCase().includes('finance')) {
    score += 1000;
  }

  // Tag matching bonus
  if (tool.tags) {
    for (const tag of tool.tags) {
      for (const keyword of financialKeywords) {
        if (tag.toLowerCase().includes(keyword)) {
          score += 800;
        }
      }
    }
  }

  return score;
};
