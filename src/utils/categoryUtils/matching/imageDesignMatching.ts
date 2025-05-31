import { Tool } from "@/types/tools";
import { isSimilarCategory } from "../normalization";

export const getImageDesignTools = (tools: Tool[], categoryName: string): Tool[] => {
  console.log(`🎨 IMAGE & DESIGN enhanced matching for: ${categoryName}`);
  
  // Priority AI Web Tools GPTs for Image & Design (first priority)
  const priorityAIWebToolsGPTs = [
    'Product Photography Image & Design GPT',
    '🎨Color Palette Generator GPT',
    '🖼️AI Image Upscaler GPT',
    'Meme Generator GPT',
    'Tattoo Design GPT',
    'AI Avatar Generator GPT',
    'Fashion Design Assistant GPT',
    'Interior Design GPT',
    'Real Estate Architect GPT',
    'Photo Filter AI',
    'AI Fashion Model Generator',
    'GRAPHIC & COVER DESIGN GPT',
    'Children\'s Picture Book Generator',
    'Coloring Book Generator GPT',
    'Graphic & Cover Design GPT',
    'Creative Logo Assistant',
    'Logo Generator GPT'
  ];

  // Other Priority Image & Design Tools (second priority)
  const otherPriorityTools = [
    'GPT-4o Image Generation',
    'Magic Eraser',
    'Palette.fm',
    '"MiddleJourney" Midjourney Prompting Assistant',
    'Sketch Artist GPT',
    'Midjourney – Image Generation Platform',
    'Midjourney',
    'Ideogram – Image Generator',
    'Ideogram',
    'RunwayML',
    'DreamStudio',
    'Stable Diffusion Online',
    'Krea AI',
    'Krea.ai',
    'Clipdrop',
    'Canva AI Image Generator',
    'Tensor.Art',
    'Neural.love',
    'Jasper Art',
    'DeepAI Image Generator',
    'NightCafe Creator',
    'NightCafe',
    'Fotor AI Image Generator',
    'FOTOR',
    'Perplexity AI Image',
    'BlueWillow',
    'Lexica',
    'Hotpot AI',
    'Freepik AI Image Generator',
    'Freepik AI',
    'Wombo Dream',
    'StarryAI',
    'Picso AI',
    'ImgCreator.AI',
    'Craiyon',
    'Dezgo',
    'Flux AI Image Generator',
    'FLUX Image Generation',
    'FLUX 1A Image Generator',
    'Recraft AI',
    'Recraft AI Image Generator',
    'Firefly AI by Adobe',
    'Photoshop AI',
    'Firefly AI',
    'Pika Labs',
    'Scenario AI',
    'Generated Photos',
    'Removal.AI',
    'Upscale.media',
    'Vectorizer.AI',
    'Colorize.cc',
    'Canva',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Figma',
    'Sketch',
    'GIMP',
    'CorelDRAW',
    'AI ART QR CODE Generator',
    'TLDRAW Computer',
    'Omagic.ai',
    'Banani UI',
    'Formia',
    'Uiverse',
    'AniEraser Watermark Remover',
    'Google Whisk',
    'Image FX by Google',
    'Playground.com Design',
    'Playground.com',
    'Playground AI',
    'Flair.ai',
    'Exactly.Ai',
    'SeeLab.ai',
    'DALL-E 3',
    'Stable Diffusion',
    'Stable Diffusion XL',
    'Leonardo AI',
    'LetsEnhance.io',
    'Let\'s Enhance Image Generator',
    'Pixlr',
    'PicWish',
    'IMGlarger',
    'Deep-Image.ai',
    'DiffusionBee',
    'Lensa',
    'Lensa AI',
    'Cutout.pro',
    'FYLM.ai',
    'Media.io',
    'Upscayl',
    'VanceAI',
    'Image Colorizer',
    'RestorePhotos.io',
    'LeiaPix Converter',
    'PicWonderful',
    'Photoroom',
    'Krita AI Diffusion',
    'Getimg.ai',
    'Artbreeder',
    'DeepAI',
    '3Dfy.ai',
    'MetaHuman',
    'FaceApp',
    'FaceCheck.ID',
    'PimEyes',
    'BlackInk.ai',
    'AI Meme Generator',
    '100,000 Humans That Don\'t Exist',
    'Deep Nostalgia',
    'AI or Not',
    'AutoDraw',
    'Background.lol',
    'Kartiv',
    'Mage Space',
    'Khroma',
    'ClickMajic',
    'RemBG.pics',
    'ObjectRemover',
    'WatermarkRemover.io',
    'VWO',
    'Kive',
    'Imagga',
    'Uizard',
    'LogoAI',
    'Cre8tiveAI',
    'Misgif.app',
    'StickerBaker',
    'Magnific AI',
    'Artistly',
    'ImageGen3 by Google',
    'AI Ease Photo Editor',
    'MolyPix.AI',
    'Free Anime Generator',
    'Text2Infographic',
    'Napkin AI',
    'Creatopy',
    'AD Maker GPT4o Image GPT',
    'COMMERCIAL SCENE IMAGE GENERATOR GPT',
    'Movie Maker Studio AI SUITE'
  ];

  const imageDesignKeywords = [
    'image', 'design', 'graphic', 'photo', 'picture', 'visual', 'art',
    'illustration', 'logo', 'branding', 'banner', 'poster', 'flyer',
    'editing', 'enhancement', 'filter', 'effect', 'retouching', 'manipulation',
    'generation', 'creation', 'ai art', 'stable diffusion', 'midjourney',
    'dalle', 'photoshop', 'canva', 'figma', 'sketch', 'adobe', 'gimp'
  ];

  // Get all tools that match the category
  const categoryMatchedTools = tools.filter(tool => {
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

  // Separate tools into priority groups
  const priorityAIWebTools = categoryMatchedTools.filter(tool => 
    priorityAIWebToolsGPTs.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const otherPriority = categoryMatchedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    otherPriorityTools.some(priorityName => 
      tool.title?.toLowerCase().includes(priorityName.toLowerCase()) ||
      priorityName.toLowerCase().includes(tool.title?.toLowerCase() || '')
    )
  );

  const remainingTools = categoryMatchedTools.filter(tool => 
    !priorityAIWebTools.includes(tool) && 
    !otherPriority.includes(tool)
  );

  // Combine in priority order
  const finalTools = [
    ...priorityAIWebTools,
    ...otherPriority,
    ...remainingTools
  ];

  console.log(`✅ Found ${finalTools.length} image & design tools (${priorityAIWebTools.length} priority AI Web Tools, ${otherPriority.length} other priority, ${remainingTools.length} remaining)`);
  return finalTools;
};
