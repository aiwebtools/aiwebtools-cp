
import { trackFileModification, trackToolChanges, compareLastTwoSnapshots } from './toolChangeTracker';
import { runIntegrityCheck } from './toolIntegrityChecker';

/**
 * Safely modify tool files with comprehensive tracking
 */
export const safelyModifyToolFile = <T>(
  fileName: string, 
  operation: () => T,
  skipIntegrityCheck: boolean = false
): T => {
  console.log(`\n🛡️ SAFELY MODIFYING FILE: ${fileName}`);
  
  // Create snapshot before modification
  trackToolChanges(`before_modify_${fileName}`);
  
  // Perform the modification and capture the result
  const result = trackFileModification(fileName, operation);
  
  // Create snapshot after modification
  trackToolChanges(`after_modify_${fileName}`);
  
  // Compare snapshots to see what changed
  compareLastTwoSnapshots();
  
  // Run integrity check unless skipped
  if (!skipIntegrityCheck) {
    console.log(`\n🔍 Running integrity check after modifying ${fileName}...`);
    runIntegrityCheck();
  }
  
  console.log(`✅ SAFE MODIFICATION COMPLETE: ${fileName}`);
  return result;
};

/**
 * Track tool additions with detailed logging
 */
export const trackNewToolAddition = (toolNames: string[], targetFile: string) => {
  console.log(`\n➕ TRACKING NEW TOOL ADDITION`);
  console.log(`📄 Target file: ${targetFile}`);
  console.log(`🔧 Tools to add: ${toolNames.join(', ')}`);
  
  // This will be called before and after the actual addition
  trackToolChanges(`add_tools_${toolNames.join('_').replace(/\s+/g, '_')}`);
};

/**
 * Verify specific tools exist in the database
 */
export const verifyToolsExist = (toolNames: string[]): { found: string[], missing: string[] } => {
  const allTools = require('@/data/toolsCollection').getAllToolCategories();
  const found: string[] = [];
  const missing: string[] = [];
  
  toolNames.forEach(name => {
    const exists = allTools.some((tool: any) => 
      tool.title.toLowerCase().includes(name.toLowerCase()) ||
      name.toLowerCase().includes(tool.title.toLowerCase())
    );
    
    if (exists) {
      found.push(name);
    } else {
      missing.push(name);
    }
  });
  
  console.log(`\n🔍 TOOL VERIFICATION RESULTS:`);
  console.log(`✅ Found: ${found.join(', ')}`);
  console.log(`❌ Missing: ${missing.join(', ')}`);
  
  return { found, missing };
};

/**
 * Emergency rollback helper - logs current state for manual restoration
 */
export const createEmergencyBackupLog = (operation: string) => {
  const timestamp = new Date().toISOString();
  console.log(`\n🚨 EMERGENCY BACKUP LOG - ${operation.toUpperCase()}`);
  console.log(`⏰ Timestamp: ${timestamp}`);
  
  trackToolChanges(`emergency_backup_${operation}`);
  runIntegrityCheck();
  
  console.log(`💾 Emergency backup logged for operation: ${operation}`);
  console.log(`📋 Use this log to restore if tools disappear`);
};
