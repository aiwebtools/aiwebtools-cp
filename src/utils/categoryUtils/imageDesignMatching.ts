
import { Tool } from "@/types/tools";
import { isSimilarCategory } from "./normalization";

export const getImageAndDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎨 FIXED IMAGE & DESIGN: Filtering ${tools.length} tools for category "${categoryName}"`);
  
  // Image and design specific keywords
  const imageDesignKeywords = [
    'image', 'photo', 'picture', 'graphic', 'design', 'visual', 'art', 'illustration',
    'logo', 'brand', 'poster', 'banner', 'icon', 'avatar', 'background', 'texture',
    'color', 'palette', 'typography', 'font', 'layout', 'composition', 'sketch',
    'drawing', 'painting', 'digital art', 'pixel art', 'vector', 'raster'
  ];
  
  // Image and design tool names
  const imageDesignTools = [
    'canva', 'photoshop', 'illustrator', 'figma', 'sketch', 'gimp', 'pixlr',
    'remove.bg', 'upscaler', 'colorize', 'enhance', 'restore', 'midjourney',
    'dall-e', 'stable diffusion', 'leonardo', 'adobe firefly', 'imagen',
    'sketch artist', 'graphic design', 'logo maker', 'poster maker',
    'restyle me', 'coloring book generator', 'artwork appraisal'
  ];
  
  // Exclude video, entertainment, and business tools from image & design
  const excludedCategories = [
    'video', 'movie', 'film', 'cinema', 'entertainment', 'business', 'finance',
    'productivity', 'communication', 'collaboration', 'automation', 'development',
    'coding', 'programming', 'health', 'medical', 'legal', 'education', 'learning'
  ];
  
  const excludedTools = [
    'movie maker studio', 'music video maker', 'movie scene maker', 'godmode gpt',
    'mary magdalene', 'alan watts', 'multitasker', 'talk to the gods', 'time machine',
    'celebrity chatline', 'fortune teller', 'trivia night', 'learn any course',
    'business plan', 'resume finder', 'taxes gpt', 'trader gpt', 'insurance claims'
  ];
  
  const filteredTools = tools.filter(tool => {
    const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ')} ${tool.category || ''}`.toLowerCase();
    const toolTitle = tool.title.toLowerCase();
    const toolCategory = tool.category?.toLowerCase() || '';
    
    // Exclude non-image/design tools
    if (excludedTools.some(excluded => toolTitle.includes(excluded))) {
      return false;
    }
    
    // Exclude tools from non-design categories
    if (excludedCategories.some(excluded => toolCategory.includes(excluded))) {
      return false;
    }
    
    // Include known image/design tools
    if (imageDesignTools.some(name => toolTitle.includes(name))) {
      return true;
    }
    
    // Include tools with image/design keywords
    const hasImageDesignKeyword = imageDesignKeywords.some(keyword => searchText.includes(keyword));
    
    // Include tools with image/design categories
    const hasImageDesignCategory = toolCategory.includes('image') || 
                                  toolCategory.includes('design') || 
                                  toolCategory.includes('graphic') || 
                                  toolCategory.includes('visual') ||
                                  toolCategory.includes('art') ||
                                  isSimilarCategory(toolCategory, categoryName);
    
    return hasImageDesignKeyword || hasImageDesignCategory;
  });
  
  console.log(`🎨 FILTERED RESULT: ${filteredTools.length} tools found for Image & Design`);
  console.log(`🎨 Sample tools:`, filteredTools.slice(0, 10).map(t => `${t.title} (${t.category})`));
  
  return filteredTools;
};
