import { Tool } from "@/types/tools";

// Marketing & Sales subtypes for intelligent categorization
export const MARKETING_SALES_SUBTYPES = [
  "SEO Tools",
  "Social Media Marketing",
  "Email Marketing",
  "Analytics & Tracking",
  "Lead Generation",
  "Content Marketing",
  "Advertising & PPC",
  "CRM & Sales",
  "Influencer Marketing",
  "Marketing Automation",
  "Conversion Optimization",
  "Affiliate Marketing",
  "Brand Management",
  "Market Research",
  "Sales Enablement"
] as const;

export type MarketingSalesSubtype = typeof MARKETING_SALES_SUBTYPES[number];

// Keywords for detecting marketing & sales subtypes
export const MARKETING_SALES_KEYWORDS: Record<MarketingSalesSubtype, string[]> = {
  "SEO Tools": ["seo", "search engine optimization", "keyword research", "backlink", "rank tracking", "serp", "meta tags", "on-page", "off-page", "ahrefs", "semrush", "moz", "keyword tool", "google search console", "site audit"],
  "Social Media Marketing": ["social media", "instagram", "facebook", "twitter", "linkedin", "tiktok", "social scheduling", "social analytics", "hashtag", "buffer", "hootsuite", "later", "sprout social", "social post"],
  "Email Marketing": ["email marketing", "newsletter", "email campaign", "email automation", "drip campaign", "mailchimp", "sendgrid", "email list", "klaviyo", "convertkit", "constant contact", "email template"],
  "Analytics & Tracking": ["analytics", "tracking", "google analytics", "metrics", "dashboard", "reporting", "insights", "data visualization", "kpi", "mixpanel", "amplitude", "segment", "hotjar", "posthog"],
  "Lead Generation": ["lead generation", "lead capture", "lead magnet", "prospect", "outreach", "cold email", "lead scoring", "pipeline", "leads", "prospecting", "lead finder", "b2b leads", "sales lead"],
  "Content Marketing": ["content marketing", "blog", "content strategy", "content creation", "storytelling", "content calendar", "editorial", "article", "content writer", "blog post", "content plan"],
  "Advertising & PPC": ["advertising", "ppc", "google ads", "facebook ads", "ad campaign", "cpc", "cpm", "retargeting", "display ads", "paid media", "ad creative", "meta ads", "tiktok ads", "ad copy"],
  "CRM & Sales": ["crm", "salesforce", "hubspot", "customer relationship", "sales pipeline", "deal tracking", "contact management", "sales automation", "pipedrive", "zoho", "close.com"],
  "Influencer Marketing": ["influencer", "creator", "brand ambassador", "sponsored content", "influencer outreach", "ugc", "creator economy", "influencer platform", "creator marketplace"],
  "Marketing Automation": ["marketing automation", "automated workflows", "drip", "trigger", "automate marketing", "campaign automation", "workflow automation", "active campaign", "autopilot"],
  "Conversion Optimization": ["conversion", "cro", "a/b testing", "landing page", "funnel", "optimization", "split testing", "heat map", "unbounce", "instapage", "conversion rate"],
  "Affiliate Marketing": ["affiliate", "referral", "commission", "affiliate program", "partner program", "affiliate tracking", "referral program", "ambassador program"],
  "Brand Management": ["brand", "branding", "brand identity", "brand awareness", "reputation", "brand strategy", "brand guidelines", "brand kit", "brand assets", "brand voice"],
  "Market Research": ["market research", "competitor analysis", "market analysis", "consumer insights", "survey", "competitive intelligence", "market trends", "industry analysis", "market data"],
  "Sales Enablement": ["sales enablement", "sales training", "pitch deck", "sales collateral", "proposal", "quote", "contract", "sales content", "battlecard", "sales playbook"]
};

export function detectMarketingSalesSubtypes(tool: Tool): MarketingSalesSubtype[] {
  const subtypes: MarketingSalesSubtype[] = [];
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''}`.toLowerCase();
  
  for (const [subtype, keywords] of Object.entries(MARKETING_SALES_KEYWORDS)) {
    if (keywords.some(keyword => searchText.includes(keyword.toLowerCase()))) {
      subtypes.push(subtype as MarketingSalesSubtype);
    }
  }
  
  return subtypes;
}

export function isMarketingSalesTool(tool: Tool): boolean {
  const category = tool.category?.toLowerCase() || '';
  const title = tool.title?.toLowerCase() || '';
  const description = tool.description?.toLowerCase() || '';
  const tags = tool.tags?.join(' ').toLowerCase() || '';
  
  const marketingKeywords = [
    'marketing', 'sales', 'seo', 'advertising', 'analytics', 'crm',
    'email campaign', 'social media', 'lead generation', 'conversion',
    'affiliate', 'influencer', 'brand', 'ppc', 'ads'
  ];
  
  if (category.includes('marketing') || category.includes('sales')) {
    return true;
  }
  
  return marketingKeywords.some(keyword => 
    title.includes(keyword) || description.includes(keyword) || tags.includes(keyword)
  );
}

export function getMarketingSalesTools(tools: Tool[]): Tool[] {
  return tools.filter(isMarketingSalesTool);
}
