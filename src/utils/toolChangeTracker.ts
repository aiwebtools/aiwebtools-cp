
import { Tool } from "@/types/tools";
import { getAllToolCategories } from '@/data/toolsCollection';

interface ToolSnapshot {
  timestamp: string;
  totalCount: number;
  toolsByCategory: Record<string, number>;
  toolTitles: string[];
  operation: string;
  changes: ToolChange[];
}

interface ToolChange {
  type: 'added' | 'removed' | 'modified';
  tool: {
    title: string;
    category?: string;
    directUrl?: string;
  };
  beforeIndex?: number;
  afterIndex?: number;
  reason?: string;
}

class ToolChangeTracker {
  private snapshots: ToolSnapshot[] = [];
  private lastSnapshot: ToolSnapshot | null = null;

  createSnapshot(operation: string = 'manual_check'): ToolSnapshot {
    const allTools = getAllToolCategories();
    const toolsByCategory: Record<string, number> = {};
    const toolTitles: string[] = [];

    allTools.forEach((tool, index) => {
      const category = tool.category || 'Uncategorized';
      toolsByCategory[category] = (toolsByCategory[category] || 0) + 1;
      toolTitles.push(tool.title);
    });

    const snapshot: ToolSnapshot = {
      timestamp: new Date().toISOString(),
      totalCount: allTools.length,
      toolsByCategory,
      toolTitles,
      operation,
      changes: []
    };

    // Compare with last snapshot to detect changes
    if (this.lastSnapshot) {
      snapshot.changes = this.detectChanges(this.lastSnapshot, snapshot);
    }

    this.snapshots.push(snapshot);
    this.lastSnapshot = snapshot;

    this.logSnapshot(snapshot);
    return snapshot;
  }

  private detectChanges(before: ToolSnapshot, after: ToolSnapshot): ToolChange[] {
    const changes: ToolChange[] = [];
    const beforeTitles = new Set(before.toolTitles);
    const afterTitles = new Set(after.toolTitles);

    // Detect removed tools
    before.toolTitles.forEach((title, index) => {
      if (!afterTitles.has(title)) {
        changes.push({
          type: 'removed',
          tool: { title },
          beforeIndex: index,
          reason: 'Tool no longer present in collection'
        });
      }
    });

    // Detect added tools
    after.toolTitles.forEach((title, index) => {
      if (!beforeTitles.has(title)) {
        changes.push({
          type: 'added',
          tool: { title },
          afterIndex: index,
          reason: 'New tool added to collection'
        });
      }
    });

    return changes;
  }

  private logSnapshot(snapshot: ToolSnapshot): void {
    console.log(`\n🔍 TOOL CHANGE TRACKER - ${snapshot.operation.toUpperCase()}`);
    console.log(`⏰ Timestamp: ${snapshot.timestamp}`);
    console.log(`📊 Total Tools: ${snapshot.totalCount}`);
    
    if (snapshot.changes.length > 0) {
      console.log(`🔄 Changes Detected: ${snapshot.changes.length}`);
      
      const added = snapshot.changes.filter(c => c.type === 'added');
      const removed = snapshot.changes.filter(c => c.type === 'removed');
      
      if (added.length > 0) {
        console.log(`✅ Added Tools (${added.length}):`);
        added.forEach(change => {
          console.log(`  + "${change.tool.title}" at index ${change.afterIndex}`);
        });
      }
      
      if (removed.length > 0) {
        console.log(`❌ Removed Tools (${removed.length}):`);
        removed.forEach(change => {
          console.log(`  - "${change.tool.title}" from index ${change.beforeIndex}`);
          console.log(`    Reason: ${change.reason}`);
        });
      }
    } else {
      console.log(`✅ No changes detected`);
    }

    // Log category changes
    if (this.lastSnapshot && this.snapshots.length > 1) {
      const prevSnapshot = this.snapshots[this.snapshots.length - 2];
      this.logCategoryChanges(prevSnapshot, snapshot);
    }
  }

  private logCategoryChanges(before: ToolSnapshot, after: ToolSnapshot): void {
    const categoriesChanged: string[] = [];
    
    // Check for category count changes
    Object.keys(before.toolsByCategory).forEach(category => {
      const beforeCount = before.toolsByCategory[category] || 0;
      const afterCount = after.toolsByCategory[category] || 0;
      
      if (beforeCount !== afterCount) {
        categoriesChanged.push(category);
        const diff = afterCount - beforeCount;
        console.log(`📂 Category "${category}": ${beforeCount} → ${afterCount} (${diff > 0 ? '+' : ''}${diff})`);
      }
    });

    // Check for new categories
    Object.keys(after.toolsByCategory).forEach(category => {
      if (!before.toolsByCategory[category]) {
        categoriesChanged.push(category);
        console.log(`📂 New Category "${category}": ${after.toolsByCategory[category]} tools`);
      }
    });

    if (categoriesChanged.length === 0) {
      console.log(`📂 No category changes detected`);
    }
  }

  getLastSnapshot(): ToolSnapshot | null {
    return this.lastSnapshot;
  }

  getAllSnapshots(): ToolSnapshot[] {
    return [...this.snapshots];
  }

  compareSnapshots(snapshot1: ToolSnapshot, snapshot2: ToolSnapshot): void {
    console.log(`\n🔍 COMPARING SNAPSHOTS:`);
    console.log(`Before: ${snapshot1.timestamp} (${snapshot1.totalCount} tools)`);
    console.log(`After: ${snapshot2.timestamp} (${snapshot2.totalCount} tools)`);
    console.log(`Difference: ${snapshot2.totalCount - snapshot1.totalCount} tools`);
    
    const changes = this.detectChanges(snapshot1, snapshot2);
    if (changes.length > 0) {
      console.log(`Changes: ${changes.length}`);
      changes.forEach(change => {
        const symbol = change.type === 'added' ? '✅' : '❌';
        console.log(`${symbol} ${change.type.toUpperCase()}: "${change.tool.title}"`);
      });
    }
  }

  // Method to track changes during specific operations
  trackOperation<T>(operationName: string, operation: () => T): T {
    console.log(`\n🔄 STARTING OPERATION: ${operationName}`);
    this.createSnapshot(`before_${operationName}`);
    
    const result = operation();
    
    this.createSnapshot(`after_${operationName}`);
    console.log(`✅ OPERATION COMPLETE: ${operationName}`);
    
    return result;
  }
}

// Create global instance
export const toolChangeTracker = new ToolChangeTracker();

// Auto-create initial snapshot
toolChangeTracker.createSnapshot('initial_load');

// Export helper functions
export const trackToolChanges = (operation: string = 'manual') => {
  return toolChangeTracker.createSnapshot(operation);
};

export const compareLastTwoSnapshots = () => {
  const snapshots = toolChangeTracker.getAllSnapshots();
  if (snapshots.length >= 2) {
    const latest = snapshots[snapshots.length - 1];
    const previous = snapshots[snapshots.length - 2];
    toolChangeTracker.compareSnapshots(previous, latest);
  } else {
    console.log('Need at least 2 snapshots to compare');
  }
};

export const trackFileModification = <T>(fileName: string, operation: () => T): T => {
  return toolChangeTracker.trackOperation(`modify_${fileName}`, operation);
};
