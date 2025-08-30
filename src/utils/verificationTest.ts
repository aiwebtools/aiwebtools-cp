// Verification test for search functionality and tool count
import { allTools } from '@/data/toolsData';
import { searchTools } from '@/utils/searchUtils';

export const runVerificationTest = () => {
  console.log('🔍 VERIFICATION TEST STARTING...');
  
  // 1. Check tool count
  const totalTools = allTools.length;
  console.log(`📊 Total tools loaded: ${totalTools}`);
  console.log(`✅ Target reached (1300+): ${totalTools >= 1300 ? 'YES' : 'NO'}`);
  
  // 2. Test search functionality with enhanced keywords
  const testSearches = [
    'video', 
    'chatgpt', 
    'education', 
    'doctor', 
    'business', 
    'creative', 
    'ai tools',
    'college degree gpt',
    'book writer',
    'multitasker'
  ];
  
  console.log('🔍 Testing enhanced search functionality:');
  testSearches.forEach(searchTerm => {
    const results = searchTools(allTools, searchTerm);
    console.log(`   "${searchTerm}": ${results.length} results found`);
  });
  
  // 3. Check AI Web Tools GPTs presence
  const aiWebToolsGPTs = allTools.filter(tool => 
    tool.directUrl?.includes('lovable.app/?via=aiwebtools')
  );
  console.log(`🎯 AI Web Tools GPTs found: ${aiWebToolsGPTs.length}`);
  
  // 4. Check categories distribution
  const categories = [...new Set(allTools.map(tool => tool.category))].filter(Boolean);
  console.log(`📂 Categories available: ${categories.length}`);
  
  // 5. Sample some AI Web Tools for verification
  const sampleGPTs = [
    'COLLEGE DEGREE GPT',
    'BOOK WRITER GPT',
    'MULTITASKER GPT',
    'GODMODE GPT',
    'TIME MACHINE GPT'
  ];
  
  console.log('🔎 Checking critical AI Web Tools GPTs:');
  sampleGPTs.forEach(gptName => {
    const found = allTools.find(tool => tool.title === gptName);
    console.log(`   ${gptName}: ${found ? '✅ FOUND' : '❌ MISSING'}`);
  });
  
  // 6. Search performance test
  const startTime = Date.now();
  const performanceResults = searchTools(allTools, 'ai productivity tools');
  const endTime = Date.now();
  console.log(`⚡ Search performance: ${endTime - startTime}ms for ${performanceResults.length} results`);
  
  const verificationScore = (
    (totalTools >= 1300 ? 25 : 0) +
    (aiWebToolsGPTs.length > 100 ? 25 : 0) +
    (categories.length > 50 ? 25 : 0) +
    (sampleGPTs.every(name => allTools.find(t => t.title === name)) ? 25 : 0)
  );
  
  console.log(`\n🎯 VERIFICATION SCORE: ${verificationScore}/100`);
  console.log(`${verificationScore === 100 ? '🎉 PERFECT!' : verificationScore >= 75 ? '✅ GOOD' : '⚠️ NEEDS ATTENTION'}`);
  
  return {
    totalTools,
    aiWebToolsCount: aiWebToolsGPTs.length,
    categoriesCount: categories.length,
    searchWorking: testSearches.every(term => searchTools(allTools, term).length > 0),
    verificationScore
  };
};