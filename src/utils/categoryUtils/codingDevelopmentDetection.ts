
import { Tool } from "@/types/tools";

/**
 * Coding & Development type subtags for categorization - 14+ types
 */
export const CODING_DEVELOPMENT_SUBTYPES = {
  CODE_ASSISTANT: "Code Assistant",
  IDE: "IDE",
  DEVOPS: "DevOps",
  API: "API Tools",
  TESTING: "Testing",
  DATABASE: "Database",
  CLOUD: "Cloud Platform",
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  MOBILE_DEV: "Mobile Development",
  VERSION_CONTROL: "Version Control",
  CI_CD: "CI/CD",
  SECURITY: "Security",
  NO_CODE: "No-Code/Low-Code"
} as const;

/**
 * Keywords that indicate code assistant behavior
 */
const CODE_ASSISTANT_KEYWORDS = [
  "code assistant", "coding assistant", "ai coding", "code completion",
  "copilot", "code generation", "pair programming", "code suggestions",
  "tabnine", "codeium", "cursor", "code editor", "devin", "claude code",
  "code review", "code analysis", "code helper", "programming assistant",
  "ai developer", "coding ai", "code writer", "sourcegraph"
];

/**
 * Keywords that indicate IDE behavior
 */
const IDE_KEYWORDS = [
  "ide", "code editor", "visual studio", "vs code", "integrated development",
  "development environment", "cursor", "windsurf", "replit", "jetbrains",
  "pycharm", "intellij", "webstorm", "vscode", "vim", "neovim", "emacs"
];

/**
 * Keywords that indicate DevOps behavior
 */
const DEVOPS_KEYWORDS = [
  "devops", "deployment", "infrastructure", "kubernetes", "docker",
  "ci/cd", "continuous integration", "continuous deployment", "pipeline",
  "orchestration", "containerization", "terraform", "ansible", "helm",
  "k8s", "container", "deploy", "infra", "sre", "reliability"
];

/**
 * Keywords that indicate API behavior
 */
const API_KEYWORDS = [
  "api", "rest api", "graphql", "api gateway", "api management",
  "endpoint", "integration", "postman", "swagger", "openapi",
  "api testing", "api documentation", "api design", "webhook"
];

/**
 * Keywords that indicate Testing behavior
 */
const TESTING_KEYWORDS = [
  "testing", "test automation", "unit test", "end-to-end", "e2e",
  "qa", "quality assurance", "test coverage", "selenium", "cypress",
  "playwright", "jest", "pytest", "automated testing", "test runner"
];

/**
 * Keywords that indicate Database behavior
 */
const DATABASE_KEYWORDS = [
  "database", "sql", "nosql", "postgresql", "mysql", "mongodb",
  "supabase", "firebase", "data storage", "orm", "query", "redis",
  "elasticsearch", "db", "data model", "schema", "migration"
];

/**
 * Keywords that indicate Cloud Platform behavior
 */
const CLOUD_KEYWORDS = [
  "cloud platform", "aws", "azure", "google cloud", "gcp",
  "serverless", "cloud hosting", "cloud infrastructure", "paas", "iaas",
  "lambda", "vercel", "netlify", "heroku", "digital ocean", "cloudflare"
];

/**
 * Keywords that indicate Frontend behavior
 */
const FRONTEND_KEYWORDS = [
  "frontend", "front-end", "react", "vue", "angular", "ui development",
  "user interface", "html", "css", "javascript", "typescript",
  "svelte", "next.js", "nuxt", "tailwind", "web development", "web app"
];

/**
 * Keywords that indicate Backend behavior
 */
const BACKEND_KEYWORDS = [
  "backend", "back-end", "server-side", "node.js", "python",
  "java", "golang", "api development", "microservices", "express",
  "django", "fastapi", "flask", "rust", "spring", "server"
];

/**
 * Keywords that indicate Mobile Development behavior
 */
const MOBILE_DEV_KEYWORDS = [
  "mobile development", "ios", "android", "react native", "flutter",
  "mobile app", "app development", "iphone app", "kotlin", "swift"
];

/**
 * Keywords that indicate Version Control behavior
 */
const VERSION_CONTROL_KEYWORDS = [
  "version control", "git", "github", "gitlab", "bitbucket",
  "repository", "code repository", "source control", "branch"
];

/**
 * Keywords that indicate CI/CD behavior
 */
const CI_CD_KEYWORDS = [
  "ci/cd", "continuous integration", "continuous deployment", "pipeline",
  "github actions", "jenkins", "circleci", "travis", "deployment automation"
];

/**
 * Keywords that indicate Security behavior
 */
const SECURITY_KEYWORDS = [
  "security", "cybersecurity", "vulnerability", "penetration testing",
  "code security", "devsecops", "threat detection", "encryption"
];

/**
 * Keywords that indicate No-Code/Low-Code behavior
 */
const NO_CODE_KEYWORDS = [
  "no-code", "low-code", "visual development", "drag-and-drop",
  "website builder", "app builder", "lovable", "bolt", "v0"
];

/**
 * Determine the coding/development subtype for a tool
 */
export const getCodingDevelopmentSubtype = (tool: Tool): string | null => {
  const title = tool.title.toLowerCase();
  const description = (tool.description || "").toLowerCase();
  const tags = (tool.tags || []).map(t => t.toLowerCase()).join(" ");
  const combined = `${title} ${description} ${tags}`;

  // Check for explicit subtags first
  if (tool.tags?.some(t => Object.values(CODING_DEVELOPMENT_SUBTYPES).includes(t as any))) {
    return tool.tags.find(t => Object.values(CODING_DEVELOPMENT_SUBTYPES).includes(t as any)) || null;
  }

  // Priority order: more specific types first
  if (CODE_ASSISTANT_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.CODE_ASSISTANT;
  if (IDE_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.IDE;
  if (TESTING_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.TESTING;
  if (DEVOPS_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.DEVOPS;
  if (CI_CD_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.CI_CD;
  if (DATABASE_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.DATABASE;
  if (SECURITY_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.SECURITY;
  if (MOBILE_DEV_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.MOBILE_DEV;
  if (VERSION_CONTROL_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.VERSION_CONTROL;
  if (API_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.API;
  if (NO_CODE_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.NO_CODE;
  if (CLOUD_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.CLOUD;
  if (FRONTEND_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.FRONTEND;
  if (BACKEND_KEYWORDS.some(kw => combined.includes(kw))) return CODING_DEVELOPMENT_SUBTYPES.BACKEND;

  return null;
};

/**
 * Check if a tool is a coding/development tool
 */
export const isCodingDevelopmentTool = (tool: Tool): boolean => {
  const title = tool.title.toLowerCase();
  const description = (tool.description || "").toLowerCase();
  const category = (tool.category || "").toLowerCase();

  // Check for explicit subtags
  if (tool.tags?.some(t => Object.values(CODING_DEVELOPMENT_SUBTYPES).includes(t as any))) return true;

  // Check category
  if (category.includes("development") || category.includes("coding") || 
      category.includes("developer") || category.includes("programming")) return true;

  // Check for subtype detection
  if (getCodingDevelopmentSubtype(tool)) return true;

  // Check common coding/development keywords
  const codingKeywords = [
    "code", "developer", "programming", "software", "api",
    "database", "cloud", "deployment", "testing", "devops"
  ];

  if (codingKeywords.some(kw => title.includes(kw) || description.includes(kw))) return true;

  return false;
};

/**
 * Get all coding/development tools from a list
 */
export const getCodingDevelopmentTools = (tools: Tool[]): Tool[] => {
  return tools.filter(tool => isCodingDevelopmentTool(tool));
};
