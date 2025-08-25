import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  categoryCounts: Record<string, number>;
}

// Predefined categories with emojis and exact names as provided
const predefinedCategories = [
  { name: "ALL AI TOOLS", emoji: "🌟", key: "all" },
  { name: "AI CHAT & ASSISTANTS", emoji: "💬", key: "chat" },
  { name: "EDUCATION & LEARNING", emoji: "🎓", key: "education" },
  { name: "CONTENT CREATION & WRITING", emoji: "✍️", key: "writing" },
  { name: "IMAGE & DESIGN AI TOOLS", emoji: "🎨", key: "design" },
  { name: "BUSINESS OPERATIONS & PRODUCTIVITY", emoji: "💼", key: "business" },
  { name: "DATA & ANALYTICS AI TOOLS", emoji: "📊", key: "analytics" },
  { name: "MARKETING & SALES SOLUTIONS", emoji: "📈", key: "marketing" },
  { name: "COMMUNICATION & COLLABORATION TOOLS", emoji: "💬", key: "communication" },
  { name: "VIDEO & MULTIMEDIA", emoji: "🎬", key: "video" },
  { name: "AUDIO & VOICE TOOLS", emoji: "🎵", key: "audio" },
  { name: "3D & VISUALIZATION", emoji: "🧊", key: "3d" },
  { name: "CREATIVE & ENTERTAINMENT", emoji: "🎭", key: "creative" },
  { name: "HEALTH, WELLNESS & PERSONAL LIFESTYLE", emoji: "🏥", key: "health" },
  { name: "WEB3 & BLOCKCHAIN", emoji: "🌐", key: "web3" },
  { name: "AI WEB TOOLS ORIGINALS", emoji: "🌟", key: "originals" },
  { name: "HISTORICAL & TIME-BASED AI TOOLS", emoji: "🕰️", key: "historical" },
  { name: "INDUSTRY SPECIFIC AI TOOLS", emoji: "🏭", key: "industry" },
];

const CategoryFilter = ({ selectedCategory, onCategorySelect, categoryCounts }: CategoryFilterProps) => {
  const getCategoryCount = (categoryName: string) => {
    // Try exact match first
    if (categoryCounts[categoryName]) {
      return categoryCounts[categoryName];
    }
    
    // Try to find a match by searching for similar category names
    const categoryKey = Object.keys(categoryCounts).find(key => 
      key.toLowerCase().includes(categoryName.toLowerCase()) ||
      categoryName.toLowerCase().includes(key.toLowerCase())
    );
    
    return categoryKey ? categoryCounts[categoryKey] : 0;
  };

  return (
    <div className="mb-8">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-cyan-300 mb-2">Browse by Category</h3>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
        {predefinedCategories.map((category) => {
          const count = getCategoryCount(category.name);
          const isSelected = selectedCategory === category.name;
          
          return (
            <Button
              key={category.key}
              variant={isSelected ? "premium" : "outline"}
              size="sm"
              onClick={() => onCategorySelect(isSelected ? null : category.name)}
              className="h-auto p-3 text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 min-w-fit"
            >
              <span className="text-base">{category.emoji}</span>
              <span className="text-xs font-medium">{category.name}</span>
              <Badge 
                variant="secondary" 
                className="ml-1 text-xs bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
              >
                {count || 0}
              </Badge>
            </Button>
          );
        })}
        
        {/* Clear filter button */}
        {selectedCategory && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onCategorySelect(null)}
            className="h-auto p-3 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300"
          >
            Clear All
          </Button>
        )}
      </div>
    </div>
  );
};

export { CategoryFilter, predefinedCategories };
export default CategoryFilter;