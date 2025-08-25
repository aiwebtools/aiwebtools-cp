import React from "react";

interface SimpleToolsDisplayProps {
  totalToolsCount: number;
  searchTerm: string;
  selectedCategory: string | null;
}

const SimpleToolsDisplay = ({ 
  totalToolsCount, 
  searchTerm, 
  selectedCategory 
}: SimpleToolsDisplayProps) => {
  return (
    <div className="text-center mb-8">
      <div className="text-cyan-400 font-semibold text-lg">
        {searchTerm ? (
          `${totalToolsCount} AI tools found for "${searchTerm}"`
        ) : selectedCategory ? (
          `${totalToolsCount} tools in ${selectedCategory}`
        ) : (
          `Discover ${totalToolsCount}+ curated AI tools`
        )}
      </div>
      {!searchTerm && !selectedCategory && (
        <div className="text-gray-400 text-sm mt-1">
          Featuring the best AI tools, ChatGPT alternatives, and cutting-edge artificial intelligence solutions
        </div>
      )}
    </div>
  );
};

export default SimpleToolsDisplay;