
import { Tool } from "@/types/tools";

export const debugNameSearch = (searchTerm: string, results: Tool[]): void => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  
  if (lowerSearchTerm.includes('name') || lowerSearchTerm.includes('meaning') || lowerSearchTerm.includes('identity')) {
    const nameResults = results.filter(tool => 
      tool.title.toLowerCase().includes('name') || 
      tool.description.toLowerCase().includes('name') ||
      tool.title.toLowerCase().includes('meaning') ||
      tool.description.toLowerCase().includes('meaning') ||
      tool.directUrl?.includes('whatsmynamegpt') ||
      tool.title.toLowerCase().includes('insight')
    ).slice(0, 10);
    
    console.log(`🏷️ Name search results (${nameResults.length}):`, nameResults.map(t => ({
      title: t.title,
      category: t.category,
      url: t.directUrl,
      hasNameInTitle: t.title.toLowerCase().includes('name'),
      hasNameInDesc: t.description.toLowerCase().includes('name'),
      hasInsightInTitle: t.title.toLowerCase().includes('insight'),
      isWhatsmynamegpt: t.directUrl?.includes('whatsmynamegpt')
    })));
    
    // Log the top 5 results for debugging
    console.log(`🔝 Top 5 results for "${searchTerm}":`, results.slice(0, 5).map(t => ({
      title: t.title,
      url: t.directUrl
    })));
  }
};

export const debugAppBuildingSearch = (searchTerm: string, results: Tool[]): void => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  
  if (lowerSearchTerm.includes('build app') || lowerSearchTerm.includes('bolt') || lowerSearchTerm.includes('lovable') || lowerSearchTerm.includes('cursor')) {
    const appBuildingResults = results.filter(tool => 
      tool.title.toLowerCase().includes('lovable') || 
      tool.title.toLowerCase().includes('bolt') || 
      tool.title.toLowerCase().includes('cursor') ||
      tool.title.toLowerCase().includes('app builder') ||
      tool.description.toLowerCase().includes('app builder')
    ).slice(0, 10);
    
    console.log(`🏗️ App building search results:`, appBuildingResults.map(t => t.title));
  }
};

export const debugMusicSearch = (searchTerm: string, results: Tool[]): void => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  
  if (lowerSearchTerm.includes('music') || lowerSearchTerm.includes('suno') || lowerSearchTerm.includes('udio')) {
    const musicResults = results.filter(tool => 
      tool.title.toLowerCase().includes('music') || 
      tool.title.toLowerCase().includes('suno') || 
      tool.title.toLowerCase().includes('udio') ||
      tool.title.toLowerCase().includes('audio')
    ).slice(0, 10);
    
    console.log(`🎵 Music search results:`, musicResults.map(t => t.title));
  }
};

export const debugPhoneAgentSearch = (searchTerm: string, results: Tool[]): void => {
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  
  if (lowerSearchTerm.includes('phone') || lowerSearchTerm.includes('call') || lowerSearchTerm.includes('agent')) {
    const phoneAgentResults = results.filter(tool => 
      tool.title.toLowerCase().includes('phone') || 
      tool.title.toLowerCase().includes('call') || 
      tool.title.toLowerCase().includes('nucleus') ||
      tool.title.toLowerCase().includes('agent')
    ).slice(0, 10);
    
    console.log(`📞 Phone/Call/Agent search results:`, phoneAgentResults.map(t => t.title));
  }
};
