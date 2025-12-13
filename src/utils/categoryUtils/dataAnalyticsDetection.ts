import { Tool } from "@/types/tools";

// Data & Analytics subtypes for filtering and discovery
export const DATA_ANALYTICS_SUBTYPES = [
  "Data Visualization",
  "Business Intelligence",
  "Predictive Analytics",
  "Database Tools",
  "Reporting",
  "Data Analysis",
  "Machine Learning",
  "AI Analytics",
  "Real-Time Analytics",
  "Financial Analytics",
  "Dashboard",
  "ETL Tools",
  "Data Warehousing",
  "Data Science"
] as const;

export type DataAnalyticsSubtype = typeof DATA_ANALYTICS_SUBTYPES[number];

// Keywords that indicate each data analytics subtype
const DATA_ANALYTICS_KEYWORDS: Record<DataAnalyticsSubtype, string[]> = {
  "Data Visualization": ["visualization", "charts", "graphs", "visual", "dashboard", "infographic", "plot", "tableau", "power bi", "looker", "data viz", "charting"],
  "Business Intelligence": ["BI", "business intelligence", "enterprise analytics", "corporate analytics", "business analytics", "strategic insights", "kpi tracking", "executive dashboard"],
  "Predictive Analytics": ["predictive", "forecasting", "prediction", "forecast", "trend prediction", "ML prediction", "future trends", "predict", "projection", "trend analysis"],
  "Database Tools": ["database", "SQL", "NoSQL", "query", "data storage", "data warehouse", "mongodb", "postgresql", "mysql", "redis", "db management"],
  "Reporting": ["report", "reporting", "report generation", "analytics report", "data report", "automated reports", "insights report", "executive report", "weekly report"],
  "Data Analysis": ["data analysis", "analytics", "data insights", "statistical analysis", "data processing", "analyze data", "data exploration", "data interpretation", "insights"],
  "Machine Learning": ["machine learning", "ML", "neural network", "deep learning", "model training", "tensorflow", "pytorch", "model deployment", "ml model", "ai model"],
  "AI Analytics": ["AI analytics", "intelligent analytics", "AI-powered analytics", "smart analytics", "ai insights", "automated insights", "cognitive analytics"],
  "Real-Time Analytics": ["real-time", "live data", "streaming analytics", "real-time monitoring", "live analytics", "instant insights", "live dashboard", "real-time data"],
  "Financial Analytics": ["financial analytics", "fintech analytics", "trading analytics", "investment analytics", "stock analysis", "market analysis", "financial data", "portfolio analytics"],
  "Dashboard": ["dashboard", "KPI", "metrics dashboard", "analytics dashboard", "executive dashboard", "operational dashboard", "data dashboard", "monitoring dashboard"],
  "ETL Tools": ["ETL", "data pipeline", "data integration", "data transformation", "data ingestion", "data flow", "airflow", "dbt", "fivetran"],
  "Data Warehousing": ["data warehouse", "data lake", "data storage", "big data", "snowflake", "redshift", "bigquery", "data lakehouse"],
  "Data Science": ["data science", "data scientist", "statistical modeling", "data exploration", "jupyter", "pandas", "numpy", "data mining", "machine learning model"]
};

// Detect data analytics subtypes for a tool
export function detectDataAnalyticsSubtypes(tool: Tool): DataAnalyticsSubtype[] {
  const subtypes: DataAnalyticsSubtype[] = [];
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''}`.toLowerCase();
  
  for (const [subtype, keywords] of Object.entries(DATA_ANALYTICS_KEYWORDS)) {
    if (keywords.some(keyword => searchText.includes(keyword.toLowerCase()))) {
      subtypes.push(subtype as DataAnalyticsSubtype);
    }
  }
  
  return subtypes;
}

// Check if a tool is a data analytics tool
export function isDataAnalyticsTool(tool: Tool): boolean {
  const dataCategories = [
    "Data & Analytics Tools",
    "AI Data Analytics & BI",
    "Financial & Trading Tools",
    "data analytics",
    "business intelligence"
  ];
  
  const categoryMatch = dataCategories.some(cat => 
    tool.category?.toLowerCase().includes(cat.toLowerCase())
  );
  
  if (categoryMatch) return true;
  
  // Check for data analytics keywords in tags or description
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''}`.toLowerCase();
  const dataKeywords = [
    "analytics", "data analysis", "visualization", "business intelligence", 
    "dashboard", "reporting", "predictive", "data science", "BI"
  ];
  
  return dataKeywords.some(keyword => searchText.includes(keyword.toLowerCase()));
}

// Get data analytics tools with enhanced detection
export function getDataAnalyticsTools(tools: Tool[]): Tool[] {
  return tools.filter(tool => isDataAnalyticsTool(tool));
}
