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
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
          Browse by Category
        </h3>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
        {predefinedCategories.map((category) => {
          const count = getCategoryCount(category.name);
          const isSelected = selectedCategory === category.name;
          
          return (
            <button
              key={category.key}
              onClick={() => onCategorySelect(isSelected ? null : category.name)}
              className={`
                relative px-4 py-3 rounded-xl font-bold text-xs transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2 min-w-fit
                ${isSelected 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30 border border-cyan-400/50' 
                  : 'bg-gradient-to-r from-slate-800/90 to-slate-700/90 text-cyan-200 border border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20'
                }
                backdrop-blur-sm group
              `}
            >
              <span className="text-sm group-hover:animate-pulse">{category.emoji}</span>
              <span className="font-semibold">{category.name}</span>
              <span className={`
                px-2 py-1 rounded-full text-xs font-bold
                ${isSelected 
                  ? 'bg-white/20 text-white' 
                  : 'bg-cyan-500/20 text-cyan-300 group-hover:bg-cyan-400/30 group-hover:text-cyan-100'
                }
              `}>
                {count || 0}
              </span>
              {!isSelected && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          );
        })}
        
        {/* Clear filter button */}
        {selectedCategory && (
          <button
            onClick={() => onCategorySelect(null)}
            className="px-4 py-3 rounded-xl font-medium text-sm text-gray-400 hover:text-cyan-300 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export { CategoryFilter, predefinedCategories };
export default CategoryFilter;