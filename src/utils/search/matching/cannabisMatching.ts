
import { Tool } from "@/types/tools";

export const matchCannabis = (tool: Tool, searchTerm: string): boolean => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  // Cannabis/hemp specific keywords
  const cannabisKeywords = [
    'cannabis',
    'hemp',
    'cbd',
    'thc',
    'marijuana',
    'weed',
    'ganja',
    'pot',
    'cultivation',
    'growing',
    'strain',
    'genetics',
    'plant medicine',
    'herbal medicine',
    'medicinal plants'
  ];

  // Check if search term contains cannabis-related keywords
  const containsCannabisKeyword = cannabisKeywords.some(keyword => 
    lowerSearchTerm.includes(keyword)
  );

  if (!containsCannabisKeyword) return false;

  // Check if tool is cannabis-related
  const isCannabisRelated = 
    searchableText.includes('cannabis') ||
    searchableText.includes('hemp') ||
    searchableText.includes('🌿') ||
    searchableText.includes('greenleaf') ||
    searchableText.includes('cannaeats') ||
    searchableText.includes('dosage determinator') ||
    searchableText.includes('compliance guide') ||
    tool.title.toLowerCase().includes('cannabis') ||
    tool.title.toLowerCase().includes('hemp') ||
    tool.description.toLowerCase().includes('cannabis') ||
    tool.description.toLowerCase().includes('hemp') ||
    tool.category?.toLowerCase().includes('cannabis');

  return isCannabisRelated;
};

export const scoreCannabis = (tool: Tool, searchTerm: string): number => {
  if (!matchCannabis(tool, searchTerm)) return 0;

  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchableText = [
    tool.title,
    tool.description,
    tool.category,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();

  let score = 0;

  // Exact title match for Cannabis GPT
  if (tool.title.toLowerCase().includes('cannabis gpt')) {
    score += 15000;
  }

  // Specific tool matches for new cannabis tools
  if (tool.title.toLowerCase().includes('greenleaf logistics gpt')) {
    score += 14000;
  }
  if (tool.title.toLowerCase().includes('cannabis compliance guide')) {
    score += 13500;
  }
  if (tool.title.toLowerCase().includes('cannabis edible dosage')) {
    score += 13000;
  }
  if (tool.title.toLowerCase().includes('cannaeats gpt')) {
    score += 12500;
  }
  if (tool.title.toLowerCase().includes('cannabis educational course maker')) {
    score += 12000;
  }

  // Title contains cannabis or hemp
  if (tool.title.toLowerCase().includes('cannabis') || tool.title.toLowerCase().includes('hemp')) {
    score += 12000;
  }

  // Description contains cannabis keywords
  if (tool.description.toLowerCase().includes('cannabis') || 
      tool.description.toLowerCase().includes('hemp') ||
      tool.description.toLowerCase().includes('cultivation') ||
      tool.description.toLowerCase().includes('strain')) {
    score += 8000;
  }

  // Emoji matches
  if (tool.emoji === '🌿' || searchableText.includes('🌿')) {
    score += 6000;
  }

  // Tag matches
  if (tool.tags) {
    const cannabisTags = ['cannabis', 'hemp', 'cultivation', 'strain genetics', 'legal cannabis', 'plant health'];
    for (const tag of tool.tags) {
      if (cannabisTags.some(cannabisTag => tag.toLowerCase().includes(cannabisTag))) {
        score += 4000;
      }
    }
  }

  // Category matches
  if (tool.category && (
    tool.category.toLowerCase().includes('specialized') ||
    tool.category.toLowerCase().includes('niche')
  )) {
    score += 2000;
  }

  console.log(`🌿 Cannabis search match for "${tool.title}" with score: ${score}`);
  return score;
};
