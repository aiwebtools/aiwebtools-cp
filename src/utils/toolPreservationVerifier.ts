
import { Tool } from "@/types/tools";
import { getAllToolCategories } from '@/data/toolsCollection';
import { allTools } from '@/data/toolsData';

interface PreservationReport {
  timestamp: string;
  totalToolsInCollection: number;
  totalToolsInAllTools: number;
  criticalTools: CriticalToolStatus[];
  missingTools: Tool[];
  duplicateTools: DuplicateToolInfo[];
  categoryDistribution: Record<string, number>;
  integrityScore: number;
  recommendations: string[];
}

interface CriticalToolStatus {
  title: string;
  status: 'found' | 'missing' | 'modified';
  expectedCategory?: string;
  actualCategory?: string;
  expectedUrl?: string;
  actualUrl?: string;
  index?: number;
}

interface DuplicateToolInfo {
  title: string;
  count: number;
  indices: number[];
  categories: string[];
  urls: string[];
}

// Critical tools that must always be preserved (AI Web Tools GPTs)
const CRITICAL_TOOLS = [
  "TIME MACHINE GPT",
  "AUTOMOBILE GPT", 
  "COLLEGE DEGREE GPT",
  "Movie Maker Studio AI SUITE",
  "Survivalist GPT",
  "STAGEMASTER AI SUITE FOR THE Preforming Arts",
  "ImmortalizeME",
  "Movie Script Writer GPT",
  "Illuminous World Data Explorer GPT",
  "G-Mode GPT",
  "Music Video Maker AI Studio",
  "BOOK WRITER GPT",
  "TALK TO HISTORY GPT",
  "Stellaris: 🚀AI Space Explorer",
  "Criminologist GPT",
  "Social Safety Net GPT",
  "Resurrection GPT",
  "PERFECT PROMPT ENGINE",
  "Travel Advisor GPT",
  "Clarity Omni GPT",
  "Engineering GPT AI Suite",
  "TALK TO THE GODS GPT",
  "Phenomenon Explorer AI Suite",
  "Legislation Writer GPT",
  "Graphic & Cover Design GPT",
  "FACT CHECKER GPT",
  "Sustainable Futures GPT",
  "Nikola Tesla GPT",
  "Food Quality Inspector GPT",
  "Home Renovator GPT 🏡🔧",
  "Fisherman GPT🎣😊",
  "Agronomus AI Farming Expert",
  "Antique and Collectible Appraisal GPT",
  "Oraculum – The Revealer of Hidden \"Truths\"",
  "Trivia Night GPT",
  "🐾Veterinarian GPT",
  "🔒Insurance Claims GPT",
  "Cannabis GPT",
  "Probability GPT",
  "LEARN ANY COURSE GPT",
  "Public Defender GPT",
  "Property Data Finder GPT"
];

export class ToolPreservationVerifier {
  verifyAllTools(): PreservationReport {
    console.log(`\n🔍 COMPREHENSIVE TOOL PRESERVATION VERIFICATION`);
    console.log(`⏰ Starting verification at: ${new Date().toISOString()}`);
    
    const collectionTools = getAllToolCategories();
    const finalTools = allTools;
    
    console.log(`📊 Collection tools: ${collectionTools.length}`);
    console.log(`📊 Final processed tools: ${finalTools.length}`);
    
    const report: PreservationReport = {
      timestamp: new Date().toISOString(),
      totalToolsInCollection: collectionTools.length,
      totalToolsInAllTools: finalTools.length,
      criticalTools: this.verifyCriticalTools(finalTools),
      missingTools: this.findMissingTools(collectionTools, finalTools),
      duplicateTools: this.findDuplicateTools(finalTools),
      categoryDistribution: this.getCategoryDistribution(finalTools),
      integrityScore: 0,
      recommendations: []
    };
    
    // Calculate integrity score
    report.integrityScore = this.calculateIntegrityScore(report);
    
    // Generate recommendations
    report.recommendations = this.generateRecommendations(report);
    
    this.logDetailedReport(report);
    
    return report;
  }
  
  private verifyCriticalTools(tools: Tool[]): CriticalToolStatus[] {
    console.log(`\n🔍 VERIFYING ${CRITICAL_TOOLS.length} CRITICAL AI WEB TOOLS...`);
    
    const criticalToolStatus: CriticalToolStatus[] = [];
    
    CRITICAL_TOOLS.forEach(criticalTitle => {
      const foundTool = tools.find(tool => 
        tool.title === criticalTitle || 
        tool.title.includes(criticalTitle.replace(/[🚀🏡🔧🎣😊🐾🔒]/g, '').trim())
      );
      
      if (foundTool) {
        const index = tools.indexOf(foundTool);
        criticalToolStatus.push({
          title: criticalTitle,
          status: 'found',
          actualCategory: foundTool.category,
          actualUrl: foundTool.directUrl,
          index
        });
        console.log(`✅ FOUND: "${criticalTitle}" at index ${index}`);
      } else {
        criticalToolStatus.push({
          title: criticalTitle,
          status: 'missing'
        });
        console.log(`❌ MISSING: "${criticalTitle}"`);
      }
    });
    
    const foundCount = criticalToolStatus.filter(t => t.status === 'found').length;
    const missingCount = criticalToolStatus.filter(t => t.status === 'missing').length;
    
    console.log(`📊 Critical Tools Status: ${foundCount}/${CRITICAL_TOOLS.length} found, ${missingCount} missing`);
    
    return criticalToolStatus;
  }
  
  private findMissingTools(collectionTools: Tool[], finalTools: Tool[]): Tool[] {
    console.log(`\n🔍 CHECKING FOR TOOLS LOST DURING PROCESSING...`);
    
    const finalToolTitles = new Set(finalTools.map(t => t.title.toLowerCase().trim()));
    const missingTools = collectionTools.filter(tool => 
      !finalToolTitles.has(tool.title.toLowerCase().trim())
    );
    
    if (missingTools.length > 0) {
      console.log(`⚠️ FOUND ${missingTools.length} MISSING TOOLS:`);
      missingTools.forEach((tool, index) => {
        console.log(`  ${index + 1}. "${tool.title}" (${tool.category})`);
      });
    } else {
      console.log(`✅ NO TOOLS LOST during processing`);
    }
    
    return missingTools;
  }
  
  private findDuplicateTools(tools: Tool[]): DuplicateToolInfo[] {
    console.log(`\n🔍 CHECKING FOR DUPLICATE TOOLS...`);
    
    const titleMap = new Map<string, number[]>();
    
    tools.forEach((tool, index) => {
      const normalizedTitle = tool.title.toLowerCase().trim();
      if (!titleMap.has(normalizedTitle)) {
        titleMap.set(normalizedTitle, []);
      }
      titleMap.get(normalizedTitle)!.push(index);
    });
    
    const duplicates: DuplicateToolInfo[] = [];
    
    titleMap.forEach((indices, title) => {
      if (indices.length > 1) {
        const toolsWithTitle = indices.map(i => tools[i]);
        duplicates.push({
          title,
          count: indices.length,
          indices,
          categories: toolsWithTitle.map(t => t.category || 'no-category'),
          urls: toolsWithTitle.map(t => t.directUrl || 'no-url')
        });
        console.log(`🔄 DUPLICATE: "${title}" appears ${indices.length} times at indices: ${indices.join(', ')}`);
      }
    });
    
    if (duplicates.length === 0) {
      console.log(`✅ NO DUPLICATES found`);
    } else {
      console.log(`⚠️ FOUND ${duplicates.length} sets of duplicate tools`);
    }
    
    return duplicates;
  }
  
  private getCategoryDistribution(tools: Tool[]): Record<string, number> {
    const distribution: Record<string, number> = {};
    
    tools.forEach(tool => {
      const category = tool.category || 'Uncategorized';
      distribution[category] = (distribution[category] || 0) + 1;
    });
    
    return distribution;
  }
  
  private calculateIntegrityScore(report: PreservationReport): number {
    let score = 100;
    
    // Deduct points for missing critical tools
    const missingCritical = report.criticalTools.filter(t => t.status === 'missing').length;
    score -= missingCritical * 5; // 5 points per missing critical tool
    
    // Deduct points for missing tools overall
    score -= Math.min(report.missingTools.length * 2, 30); // Max 30 points deduction
    
    // Deduct points for duplicates
    score -= Math.min(report.duplicateTools.length * 3, 20); // Max 20 points deduction
    
    // Deduct points if total count is below expected
    if (report.totalToolsInAllTools < 1100) {
      score -= Math.min((1100 - report.totalToolsInAllTools) * 0.5, 25); // Max 25 points deduction
    }
    
    return Math.max(score, 0);
  }
  
  private generateRecommendations(report: PreservationReport): string[] {
    const recommendations: string[] = [];
    
    if (report.totalToolsInAllTools < 1100) {
      recommendations.push(`🚨 CRITICAL: Tool count is ${report.totalToolsInAllTools} but should be 1100+`);
    }
    
    const missingCritical = report.criticalTools.filter(t => t.status === 'missing');
    if (missingCritical.length > 0) {
      recommendations.push(`⚠️ ${missingCritical.length} critical AI Web Tools GPTs are missing`);
    }
    
    if (report.missingTools.length > 0) {
      recommendations.push(`📝 ${report.missingTools.length} tools were lost during processing`);
    }
    
    if (report.duplicateTools.length > 0) {
      recommendations.push(`🔄 ${report.duplicateTools.length} sets of duplicate tools need cleanup`);
    }
    
    if (report.integrityScore >= 95) {
      recommendations.push(`✅ Excellent tool preservation! Score: ${report.integrityScore.toFixed(1)}/100`);
    } else if (report.integrityScore >= 85) {
      recommendations.push(`⚠️ Good tool preservation but needs attention. Score: ${report.integrityScore.toFixed(1)}/100`);
    } else {
      recommendations.push(`🚨 Poor tool preservation! Immediate action required. Score: ${report.integrityScore.toFixed(1)}/100`);
    }
    
    return recommendations;
  }
  
  private logDetailedReport(report: PreservationReport): void {
    console.log(`\n📋 COMPREHENSIVE TOOL PRESERVATION REPORT`);
    console.log(`⏰ Generated: ${report.timestamp}`);
    console.log(`🎯 Integrity Score: ${report.integrityScore.toFixed(1)}/100`);
    console.log(`📊 Collection Tools: ${report.totalToolsInCollection}`);
    console.log(`📊 Final Tools: ${report.totalToolsInAllTools}`);
    console.log(`📊 Tools Lost: ${report.totalToolsInCollection - report.totalToolsInAllTools}`);
    
    // Critical tools summary
    const criticalFound = report.criticalTools.filter(t => t.status === 'found').length;
    const criticalMissing = report.criticalTools.filter(t => t.status === 'missing').length;
    console.log(`🔍 Critical Tools: ${criticalFound}/${CRITICAL_TOOLS.length} found, ${criticalMissing} missing`);
    
    if (criticalMissing > 0) {
      console.log(`❌ MISSING CRITICAL TOOLS:`);
      report.criticalTools
        .filter(t => t.status === 'missing')
        .forEach(tool => console.log(`  - "${tool.title}"`));
    }
    
    // Category distribution (top 10)
    console.log(`\n📂 TOP 10 CATEGORIES:`);
    const sortedCategories = Object.entries(report.categoryDistribution)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10);
    sortedCategories.forEach(([category, count]) => {
      console.log(`  ${category}: ${count} tools`);
    });
    
    // Recommendations
    console.log(`\n💡 RECOMMENDATIONS:`);
    report.recommendations.forEach(rec => console.log(`  ${rec}`));
    
    // Summary status
    if (report.integrityScore >= 95) {
      console.log(`\n🎉 STATUS: EXCELLENT - Tool preservation is working perfectly!`);
    } else if (report.integrityScore >= 85) {
      console.log(`\n⚠️ STATUS: GOOD - Minor issues need attention`);
    } else {
      console.log(`\n🚨 STATUS: CRITICAL - Major tool preservation issues detected!`);
    }
  }
  
  // Quick verification for console logging
  quickVerify(): void {
    const report = this.verifyAllTools();
    
    console.log(`\n🎯 QUICK VERIFICATION SUMMARY:`);
    console.log(`📊 Total Tools: ${report.totalToolsInAllTools}`);
    console.log(`🎯 Integrity Score: ${report.integrityScore.toFixed(1)}/100`);
    console.log(`🔍 Critical Tools Found: ${report.criticalTools.filter(t => t.status === 'found').length}/${CRITICAL_TOOLS.length}`);
    
    if (report.integrityScore < 90) {
      console.log(`🚨 ACTION REQUIRED: Tool preservation issues detected!`);
    } else {
      console.log(`✅ All systems green - tools are well preserved!`);
    }
  }
}

// Create and export instance
export const toolPreservationVerifier = new ToolPreservationVerifier();

// Export helper functions
export const runFullToolVerification = () => {
  return toolPreservationVerifier.verifyAllTools();
};

export const runQuickToolVerification = () => {
  return toolPreservationVerifier.quickVerify();
};

// Auto-run verification disabled for production performance
// To run manually in console: toolPreservationVerifier.quickVerify()
