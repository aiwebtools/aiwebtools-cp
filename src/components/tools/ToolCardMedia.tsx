
import { Tool } from "@/types/tools";

interface ToolCardMediaProps {
  tool: Tool;
  isFeatured: boolean;
  imageHeight: string;
}

const ToolCardMedia = ({ tool, isFeatured, imageHeight }: ToolCardMediaProps) => {
  const hasImage = tool.image && tool.image.trim() !== '';
  
  return (
    <div 
      className={`${isFeatured ? 'mb-6' : 'mb-4'} rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-200`}
      style={{ height: imageHeight }}
    >
      {hasImage ? (
        <img 
          src={tool.image} 
          alt={`${tool.title} screenshot`}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            // Fallback to emoji display if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.nextElementSibling) {
              target.nextElementSibling.classList.remove('hidden');
            }
          }}
        />
      ) : null}
      
      {/* Emoji fallback - always present but hidden if image loads */}
      <div className={`${hasImage ? 'hidden absolute inset-0' : ''} flex items-center justify-center text-6xl ${isFeatured ? 'text-7xl' : ''} opacity-50`}>
        {tool.emoji}
      </div>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </div>
  );
};

export default ToolCardMedia;
