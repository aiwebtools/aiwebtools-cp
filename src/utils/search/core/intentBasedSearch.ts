import { Tool } from "@/types/tools";
import { intentKeywordMapping, synonymMapping, searchPatternMapping } from "@/data/keywords/intentKeywordMapping";

/**
 * Expands a search term with synonyms and related terms
 */
export const expandSearchTerms = (searchTerm: string): string[] => {
  const lowerTerm = searchTerm.toLowerCase().trim();
  const expandedTerms = new Set([lowerTerm]);
  
  // Add exact pattern matches
  if (searchPatternMapping[lowerTerm]) {
    searchPatternMapping[lowerTerm].forEach(term => expandedTerms.add(term.toLowerCase()));
  }
  
  // Add synonyms for each word in the search term
  const words = lowerTerm.split(' ');
  words.forEach(word => {
    if (synonymMapping[word]) {
      synonymMapping[word].forEach(synonym => {
        expandedTerms.add(synonym.toLowerCase());
        // Also add the synonym in context of the full phrase
        const contextualTerm = lowerTerm.replace(word, synonym.toLowerCase());
        expandedTerms.add(contextualTerm);
      });
    }
  });
  
  // Add intent-based expansions
  Object.values(intentKeywordMapping).forEach(intent => {
    // Check if search term matches primary keywords
    const matchesPrimary = intent.primary.some(primary => 
      lowerTerm.includes(primary.toLowerCase()) || primary.toLowerCase().includes(lowerTerm)
    );
    
    if (matchesPrimary) {
      // Add all primary keywords as expanded terms
      intent.primary.forEach(primary => expandedTerms.add(primary.toLowerCase()));
      // Add all synonyms
      intent.synonyms.forEach(synonym => expandedTerms.add(synonym.toLowerCase()));
      // Add tool names for direct matching
      intent.tools.forEach(tool => expandedTerms.add(tool.toLowerCase()));
    }
  });
  
  console.log(`🔍 Expanded "${searchTerm}" to: [${Array.from(expandedTerms).join(', ')}]`);
  return Array.from(expandedTerms);
};

/**
 * Scores a tool based on intent-based keyword matching
 */
export const scoreByIntent = (tool: Tool, searchTerm: string): number => {
  const expandedTerms = expandSearchTerms(searchTerm);
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerTags = (tool.tags || []).join(' ').toLowerCase();
  const searchableText = `${lowerTitle} ${lowerDescription} ${lowerTags}`;
  
  let score = 0;
  let bestMatchCategory = '';
  
  // Check each intent category for matches
  Object.entries(intentKeywordMapping).forEach(([category, intent]) => {
    let categoryScore = 0;
    
    // High priority: Tool is explicitly listed for this intent
    if (intent.tools.some(toolName => lowerTitle.includes(toolName.toLowerCase()))) {
      categoryScore += 50000;
      console.log(`🎯 HIGH PRIORITY: ${tool.title} found in ${category} intent tools list`);
    }
    
    // Medium priority: Primary keyword matches
    intent.primary.forEach(primary => {
      if (expandedTerms.some(term => term.includes(primary.toLowerCase()))) {
        if (lowerTitle.includes(primary.toLowerCase())) {
          categoryScore += 25000;
          console.log(`🎯 TITLE MATCH: ${tool.title} matches primary "${primary}" in ${category}`);
        } else if (searchableText.includes(primary.toLowerCase())) {
          categoryScore += 15000;
          console.log(`🎯 CONTENT MATCH: ${tool.title} matches primary "${primary}" in ${category}`);
        }
      }
    });
    
    // Lower priority: Synonym matches
    intent.synonyms.forEach(synonym => {
      if (expandedTerms.some(term => term.includes(synonym.toLowerCase()))) {
        if (searchableText.includes(synonym.toLowerCase())) {
          categoryScore += 8000;
          console.log(`🎯 SYNONYM MATCH: ${tool.title} matches synonym "${synonym}" in ${category}`);
        }
      }
    });
    
    if (categoryScore > score) {
      score = categoryScore;
      bestMatchCategory = category;
    }
  });
  
  // Bonus for exact pattern matches
  Object.entries(searchPatternMapping).forEach(([pattern, tools]) => {
    if (expandedTerms.some(term => term === pattern)) {
      if (tools.some(toolName => lowerTitle.includes(toolName.toLowerCase()))) {
        score += 75000;
        console.log(`🎯 EXACT PATTERN MATCH: ${tool.title} matches pattern "${pattern}"`);
      }
    }
  });
  
  if (score > 0) {
    console.log(`🎯 Intent-based score for "${tool.title}": ${score} (category: ${bestMatchCategory})`);
  }
  
  return score;
};

/**
 * Checks if a tool matches intent-based keywords
 */
export const matchesByIntent = (tool: Tool, searchTerm: string): boolean => {
  const expandedTerms = expandSearchTerms(searchTerm);
  const searchableText = `${tool.title} ${tool.description} ${(tool.tags || []).join(' ')}`.toLowerCase();
  
  // Check if any expanded term matches the tool
  return expandedTerms.some(term => {
    return searchableText.includes(term) || term.includes(searchableText.split(' ')[0]);
  });
};

/**
 * Gets priority tools for a specific search intent
 */
export const getPriorityToolsForIntent = (searchTerm: string): string[] => {
  const lowerTerm = searchTerm.toLowerCase();
  const priorityTools = new Set<string>();
  
  // Add tools from exact pattern matches
  if (searchPatternMapping[lowerTerm]) {
    searchPatternMapping[lowerTerm].forEach(tool => priorityTools.add(tool.toLowerCase()));
  }
  
  // Add tools from intent categories
  Object.values(intentKeywordMapping).forEach(intent => {
    const matchesPrimary = intent.primary.some(primary => 
      lowerTerm.includes(primary.toLowerCase()) || primary.toLowerCase().includes(lowerTerm)
    );
    
    if (matchesPrimary) {
      intent.tools.forEach(tool => priorityTools.add(tool.toLowerCase()));
    }
  });
  
  return Array.from(priorityTools);
};