
import { Tool } from "@/types/tools";

// Business & Productivity subtypes for comprehensive tagging
export const businessProductivitySubtypes = [
  "Project Management",
  "CRM",
  "Automation",
  "Marketing",
  "Sales",
  "HR & Recruitment",
  "Finance & Accounting",
  "Customer Support",
  "Team Collaboration",
  "Meeting & Scheduling",
  "Analytics & Reporting",
  "Document Management",
  "Workflow Automation",
  "Business Intelligence"
] as const;

export type BusinessProductivitySubtype = typeof businessProductivitySubtypes[number];

// Keywords associated with each business subtype
export const businessSubtypeKeywords: Record<BusinessProductivitySubtype, string[]> = {
  "Project Management": ["project management", "task management", "project tracking", "sprint", "agile", "kanban", "scrum", "milestone", "roadmap", "backlog", "asana", "jira", "monday.com", "clickup", "trello", "notion", "project plan"],
  "CRM": ["crm", "customer relationship", "contact management", "lead management", "sales pipeline", "customer data", "client management", "salesforce", "hubspot", "pipedrive", "zoho crm"],
  "Automation": ["automation", "workflow automation", "automate", "zapier", "integration", "automated", "no-code automation", "rpa", "make.com", "integromat", "n8n", "power automate"],
  "Marketing": ["marketing", "campaign", "advertising", "brand", "content marketing", "digital marketing", "social media marketing", "email marketing", "seo", "ppc", "adwords", "facebook ads"],
  "Sales": ["sales", "selling", "revenue", "deal", "pipeline", "prospect", "outreach", "closing", "quota", "territory", "sales team", "sales rep", "sales tool", "sales automation"],
  "HR & Recruitment": ["hr", "human resources", "recruiting", "recruitment", "hiring", "talent", "onboarding", "employee", "workforce", "candidate", "resume", "job posting", "applicant", "interview"],
  "Finance & Accounting": ["finance", "accounting", "financial", "invoice", "billing", "budget", "expense", "payroll", "bookkeeping", "tax", "quickbooks", "xero", "freshbooks", "financial planning"],
  "Customer Support": ["customer support", "helpdesk", "ticketing", "support tickets", "customer service", "help desk", "customer success", "zendesk", "intercom", "freshdesk", "live chat"],
  "Team Collaboration": ["collaboration", "team", "teamwork", "co-working", "shared workspace", "real-time collaboration", "team communication", "slack", "microsoft teams", "discord", "team chat"],
  "Meeting & Scheduling": ["meeting", "scheduling", "calendar", "appointment", "booking", "schedule", "video conference", "conferencing", "zoom", "google meet", "calendly", "meeting notes"],
  "Analytics & Reporting": ["analytics", "reporting", "dashboard", "metrics", "kpi", "data analysis", "insights", "business intelligence", "google analytics", "mixpanel", "amplitude"],
  "Document Management": ["document management", "documents", "file management", "knowledge base", "wiki", "documentation", "file sharing", "google docs", "notion", "confluence", "sharepoint"],
  "Workflow Automation": ["workflow", "process automation", "business process", "workflow builder", "process management", "workflow design", "business automation", "process optimization"],
  "Business Intelligence": ["business intelligence", "bi", "data visualization", "decision making", "strategic planning", "competitive analysis", "tableau", "power bi", "looker", "executive dashboard"]
};

// Detect business subtypes for a tool
export const detectBusinessProductivitySubtypes = (tool: Tool): BusinessProductivitySubtype[] => {
  const subtypes: BusinessProductivitySubtype[] = [];
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
  
  for (const [subtype, keywords] of Object.entries(businessSubtypeKeywords)) {
    if (keywords.some(keyword => searchText.includes(keyword.toLowerCase()))) {
      subtypes.push(subtype as BusinessProductivitySubtype);
    }
  }
  
  return subtypes;
};

// Check if a tool is business/productivity related
export const isBusinessProductivityTool = (tool: Tool): boolean => {
  const category = tool.category?.toLowerCase() || '';
  const title = tool.title?.toLowerCase() || '';
  const description = tool.description?.toLowerCase() || '';
  const tags = tool.tags?.map(t => t.toLowerCase()) || [];
  
  const businessCategories = [
    'business', 'productivity', 'sales', 'crm', 'hr', 'marketing',
    'project management', 'automation', 'workflow', 'finance', 'accounting'
  ];
  
  const businessKeywords = [
    'business', 'productivity', 'enterprise', 'team', 'collaboration',
    'project', 'task', 'crm', 'sales', 'marketing', 'hr', 'recruitment',
    'automation', 'workflow', 'finance', 'accounting', 'meeting', 'schedule'
  ];
  
  if (businessCategories.some(cat => category.includes(cat))) return true;
  if (businessKeywords.some(kw => title.includes(kw) || description.includes(kw))) return true;
  if (tags.some(tag => businessKeywords.some(kw => tag.includes(kw)))) return true;
  
  return false;
};
