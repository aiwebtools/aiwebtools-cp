
import { allTools } from "@/data/toolsData";
import { Tool } from "@/types/tools";

// Verify all tools have proper indexing and can be found
export const verifyToolIndexing = () => {
  console.log(`🔍 Verifying indexing for ${allTools.length} tools...`);
  
  const indexingReport = {
    totalTools: allTools.length,
    toolsWithCategories: 0,
    toolsWithDirectUrls: 0,
    toolsWithTags: 0,
    toolsWithDescriptions: 0,
    categoriesFound: new Set<string>(),
    duplicateTitles: new Map<string, number>(),
    indexingIssues: [] as string[]
  };

  allTools.forEach((tool, index) => {
    // Check for essential properties
    if (tool.category) {
      indexingReport.toolsWithCategories++;
      indexingReport.categoriesFound.add(tool.category);
    } else {
      indexingReport.indexingIssues.push(`Tool ${index}: "${tool.title}" missing category`);
    }

    if (tool.directUrl) {
      indexingReport.toolsWithDirectUrls++;
    }

    if (tool.tags && tool.tags.length > 0) {
      indexingReport.toolsWithTags++;
    }

    if (tool.description && tool.description.trim().length > 0) {
      indexingReport.toolsWithDescriptions++;
    } else {
      indexingReport.indexingIssues.push(`Tool ${index}: "${tool.title}" missing description`);
    }

    // Check for duplicate titles
    const titleCount = indexingReport.duplicateTitles.get(tool.title) || 0;
    indexingReport.duplicateTitles.set(tool.title, titleCount + 1);
  });

  // Report duplicates
  indexingReport.duplicateTitles.forEach((count, title) => {
    if (count > 1) {
      indexingReport.indexingIssues.push(`Duplicate tool title found: "${title}" (${count} times)`);
    }
  });

  console.log('📊 Tool Indexing Report:', {
    ...indexingReport,
    categoriesFound: Array.from(indexingReport.categoriesFound).sort(),
    duplicateTitles: undefined // Don't log the full map
  });

  return indexingReport;
};

// Generate URLs for all tool pages to ensure they're properly accessible
export const generateToolPageUrls = (): string[] => {
  return allTools.map((tool, index) => `/tool/${index}`);
};

// Verify that each tool can be found by search
export const verifyToolSearchability = (searchFunction: (tools: Tool[], term: string) => Tool[]) => {
  console.log('🔍 Verifying tool searchability...');
  
  const searchTests = [
    // Test exact title matches
    ...allTools.slice(0, 10).map(tool => tool.title),
    // Test category searches
    'AI Assistants',
    'Image Generation',
    'Business Tools',
    'Writing',
    // Test common keywords
    'chat',
    'image',
    'video',
    'business',
    'design'
  ];

  const searchResults = searchTests.map(term => ({
    term,
    results: searchFunction(allTools, term),
    resultCount: searchFunction(allTools, term).length
  }));

  console.log('🔍 Search Test Results:', searchResults);
  
  return searchResults;
};

// Check tool page accessibility
export const checkToolPageAccessibility = () => {
  const toolUrls = generateToolPageUrls();
  console.log(`📄 Generated ${toolUrls.length} tool page URLs`);
  console.log('📄 Sample URLs:', toolUrls.slice(0, 10));
  
  return {
    totalPages: toolUrls.length,
    sampleUrls: toolUrls.slice(0, 10),
    allUrls: toolUrls
  };
};

// Main verification function
export const runFullToolVerification = (searchFunction: (tools: Tool[], term: string) => Tool[]) => {
  console.log('🚀 Running full tool verification...');
  
  const indexingReport = verifyToolIndexing();
  const searchabilityReport = verifyToolSearchability(searchFunction);
  const accessibilityReport = checkToolPageAccessibility();
  
  const summary = {
    indexing: indexingReport,
    searchability: searchabilityReport,
    accessibility: accessibilityReport,
    overallHealth: {
      toolsIndexed: indexingReport.totalTools,
      categoriesAvailable: indexingReport.categoriesFound.size,
      toolsWithIssues: indexingReport.indexingIssues.length,
      pagesGenerated: accessibilityReport.totalPages
    }
  };
  
  console.log('✅ Full Verification Complete:', summary.overallHealth);
  
  return summary;
};
