
import { Tool } from "@/types/tools";
import { getAllToolCategories } from '@/data/toolsCollection';

interface IntegrityReport {
  timestamp: string;
  totalTools: number;
  issues: IntegrityIssue[];
  duplicates: DuplicateIssue[];
  missingData: MissingDataIssue[];
  categoryStats: Record<string, number>;
}

interface IntegrityIssue {
  type: 'duplicate_title' | 'duplicate_url' | 'missing_title' | 'missing_description' | 'missing_category' | 'invalid_url';
  tool: Tool;
  index: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
}

interface DuplicateIssue {
  title: string;
  indices: number[];
  urls: string[];
  categories: string[];
}

interface MissingDataIssue {
  field: string;
  count: number;
  indices: number[];
}

export class ToolIntegrityChecker {
  checkIntegrity(): IntegrityReport {
    const allTools = getAllToolCategories();
    const issues: IntegrityIssue[] = [];
    const duplicates: DuplicateIssue[] = [];
    const missingData: MissingDataIssue[] = [];
    const categoryStats: Record<string, number> = {};

    console.log(`🔍 STARTING TOOL INTEGRITY CHECK`);
    console.log(`📊 Total tools to check: ${allTools.length}`);

    // Check for duplicates
    this.checkDuplicates(allTools, duplicates, issues);
    
    // Check for missing data
    this.checkMissingData(allTools, missingData, issues);
    
    // Check for invalid data
    this.checkInvalidData(allTools, issues);
    
    // Generate category stats
    allTools.forEach(tool => {
      const category = tool.category || 'Uncategorized';
      categoryStats[category] = (categoryStats[category] || 0) + 1;
    });

    const report: IntegrityReport = {
      timestamp: new Date().toISOString(),
      totalTools: allTools.length,
      issues,
      duplicates,
      missingData,
      categoryStats
    };

    this.logReport(report);
    return report;
  }

  private checkDuplicates(tools: Tool[], duplicates: DuplicateIssue[], issues: IntegrityIssue[]): void {
    const titleMap = new Map<string, number[]>();
    const urlMap = new Map<string, number[]>();

    tools.forEach((tool, index) => {
      const normalizedTitle = tool.title.toLowerCase().trim();
      
      // Track title duplicates
      if (!titleMap.has(normalizedTitle)) {
        titleMap.set(normalizedTitle, []);
      }
      titleMap.get(normalizedTitle)!.push(index);

      // Track URL duplicates
      if (tool.directUrl) {
        const normalizedUrl = tool.directUrl.toLowerCase().trim();
        if (!urlMap.has(normalizedUrl)) {
          urlMap.set(normalizedUrl, []);
        }
        urlMap.get(normalizedUrl)!.push(index);
      }
    });

    // Report title duplicates
    titleMap.forEach((indices, title) => {
      if (indices.length > 1) {
        const toolsWithTitle = indices.map(i => tools[i]);
        duplicates.push({
          title,
          indices,
          urls: toolsWithTitle.map(t => t.directUrl || 'no-url'),
          categories: toolsWithTitle.map(t => t.category || 'no-category')
        });

        indices.forEach(index => {
          issues.push({
            type: 'duplicate_title',
            tool: tools[index],
            index,
            severity: 'high',
            message: `Duplicate title "${title}" found at indices: ${indices.join(', ')}`
          });
        });
      }
    });

    // Report URL duplicates
    urlMap.forEach((indices, url) => {
      if (indices.length > 1) {
        indices.forEach(index => {
          issues.push({
            type: 'duplicate_url',
            tool: tools[index],
            index,
            severity: 'medium',
            message: `Duplicate URL "${url}" found at indices: ${indices.join(', ')}`
          });
        });
      }
    });
  }

  private checkMissingData(tools: Tool[], missingData: MissingDataIssue[], issues: IntegrityIssue[]): void {
    const missingFields: Record<string, number[]> = {
      title: [],
      description: [],
      category: [],
      directUrl: [],
      tags: []
    };

    tools.forEach((tool, index) => {
      if (!tool.title || tool.title.trim() === '') {
        missingFields.title.push(index);
        issues.push({
          type: 'missing_title',
          tool,
          index,
          severity: 'critical',
          message: 'Tool is missing title'
        });
      }

      if (!tool.description || tool.description.trim() === '') {
        missingFields.description.push(index);
        issues.push({
          type: 'missing_title',
          tool,
          index,
          severity: 'high',
          message: 'Tool is missing description'
        });
      }

      if (!tool.category || tool.category.trim() === '') {
        missingFields.category.push(index);
        issues.push({
          type: 'missing_category',
          tool,
          index,
          severity: 'medium',
          message: 'Tool is missing category'
        });
      }

      if (!tool.directUrl || tool.directUrl.trim() === '') {
        missingFields.directUrl.push(index);
      }

      if (!tool.tags || tool.tags.length === 0) {
        missingFields.tags.push(index);
      }
    });

    Object.entries(missingFields).forEach(([field, indices]) => {
      if (indices.length > 0) {
        missingData.push({
          field,
          count: indices.length,
          indices
        });
      }
    });
  }

  private checkInvalidData(tools: Tool[], issues: IntegrityIssue[]): void {
    tools.forEach((tool, index) => {
      // Check for invalid URLs
      if (tool.directUrl) {
        try {
          new URL(tool.directUrl);
        } catch {
          issues.push({
            type: 'invalid_url',
            tool,
            index,
            severity: 'medium',
            message: `Invalid URL format: "${tool.directUrl}"`
          });
        }
      }
    });
  }

  private logReport(report: IntegrityReport): void {
    console.log(`\n🔍 TOOL INTEGRITY REPORT`);
    console.log(`⏰ Generated: ${report.timestamp}`);
    console.log(`📊 Total Tools: ${report.totalTools}`);
    console.log(`⚠️ Total Issues: ${report.issues.length}`);
    console.log(`🔄 Duplicate Groups: ${report.duplicates.length}`);

    if (report.issues.length > 0) {
      const critical = report.issues.filter(i => i.severity === 'critical').length;
      const high = report.issues.filter(i => i.severity === 'high').length;
      const medium = report.issues.filter(i => i.severity === 'medium').length;
      const low = report.issues.filter(i => i.severity === 'low').length;

      console.log(`\n📈 Issue Severity Breakdown:`);
      if (critical > 0) console.log(`🔴 Critical: ${critical}`);
      if (high > 0) console.log(`🟠 High: ${high}`);
      if (medium > 0) console.log(`🟡 Medium: ${medium}`);
      if (low > 0) console.log(`🟢 Low: ${low}`);
    }

    if (report.duplicates.length > 0) {
      console.log(`\n🔄 DUPLICATE TOOLS FOUND:`);
      report.duplicates.forEach((dup, index) => {
        console.log(`${index + 1}. "${dup.title}" (${dup.indices.length} copies)`);
        console.log(`   Indices: ${dup.indices.join(', ')}`);
        console.log(`   Categories: ${dup.categories.join(', ')}`);
      });
    }

    if (report.missingData.length > 0) {
      console.log(`\n📝 MISSING DATA SUMMARY:`);
      report.missingData.forEach(missing => {
        console.log(`${missing.field}: ${missing.count} tools missing this field`);
      });
    }

    console.log(`\n📂 CATEGORY DISTRIBUTION:`);
    const sortedCategories = Object.entries(report.categoryStats)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10);
    sortedCategories.forEach(([category, count]) => {
      console.log(`${category}: ${count} tools`);
    });

    if (Object.keys(report.categoryStats).length > 10) {
      console.log(`... and ${Object.keys(report.categoryStats).length - 10} more categories`);
    }
  }
}

// Create and export checker instance
export const toolIntegrityChecker = new ToolIntegrityChecker();

// Export helper function
export const runIntegrityCheck = () => {
  return toolIntegrityChecker.checkIntegrity();
};
