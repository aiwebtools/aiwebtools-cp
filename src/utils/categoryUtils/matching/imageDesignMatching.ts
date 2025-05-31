
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getImageDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎨 IMAGE & DESIGN enhanced matching for: ${categoryName}`);
  
  const imageDesignKeywords = [
    'image', 'design', 'graphic', 'photo', 'picture', 'visual', 'art',
    'illustration', 'logo', 'branding', 'banner', 'poster', 'flyer',
    'editing', 'enhancement', 'filter', 'effect', 'retouching', 'manipulation',
    'generation', 'creation', 'ai art', 'stable diffusion', 'midjourney',
    'dalle', 'photoshop', 'canva', 'figma', 'sketch', 'adobe', 'gimp'
  ];

  const matchedTools = tools.filter(tool => {
    if (!tool.title && !tool.description && !tool.category) return false;
    
    const toolText = `${tool.title || ''} ${tool.description || ''} ${tool.category || ''}`.toLowerCase();
    
    // Keyword matching
    const keywordMatch = imageDesignKeywords.some(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // Category matching
    const categoryMatch = tool.category && (
      isSimilarCategory(tool.category, categoryName) ||
      tool.category.toLowerCase().includes('image') ||
      tool.category.toLowerCase().includes('design') ||
      tool.category.toLowerCase().includes('graphic') ||
      tool.category.toLowerCase().includes('visual') ||
      tool.category.toLowerCase().includes('art') ||
      tool.category.toLowerCase().includes('photo')
    );

    return keywordMatch || categoryMatch;
  });

  console.log(`✅ Found ${matchedTools.length} image & design tools`);
  return matchedTools;
};
