/**
 * Age Verification System for Adult/Dating/Relationship Tools
 * Detects tools requiring 18+ verification and manages DOB-based age gates
 * 
 * SCOPE: Dating apps, AI girlfriends/boyfriends, adult content, couples tools
 * NOT: General productivity tools that happen to mention "love" or "relationship"
 * 
 * VERSION: 2.0 - Enhanced detection with debug logging
 */

console.log('🔞 Age Verification System v2.0 loaded');

import { Tool } from "@/types/tools";

// Primary keywords that STRONGLY indicate dating/adult content
const PRIMARY_AGE_RESTRICTED_KEYWORDS = [
  // AI Dating & Companion specific
  'ai girlfriend', 'ai boyfriend', 'virtual girlfriend', 'virtual boyfriend',
  'love simulator', 'virtual relationship', 'dating app', 'dating platform',
  'romantic ai', 'ai companion chat', 'ai partner', 'ai lover',
  
  // Dating platforms
  'matchmaking app', 'dating service', 'find love', 'online dating',
  'singles', 'meet singles', 'hookup', 'flirting app',
  
  // Adult/NSFW explicit
  'adult content', 'nsfw', '18+', 'mature content', 'explicit',
  'porn', 'xxx', 'erotic', 'sensual content', 'adult only',
  
  // Couples/Relationship apps (romantic context)
  'couples app', 'relationship app', 'intimacy app', 'romantic roleplay',
  
  // Specific known adult/erotica platforms (removed from database)
  'candy ai', 'nomi.ai', 'romantic ai', 'couple.me',
  'tinder', 'bumble' // third-party dating apps we don't promote
];

// Secondary keywords - only trigger if category ALSO suggests dating/adult
// These are weaker signals that need category context to confirm
const SECONDARY_KEYWORDS = [
  'romance', 'romantic', 'flirt', 'flirting', 'intimacy',
  'virtual friend', 'emotional connection', 'soulmate'
  // NOTE: Removed 'companion' and 'roleplay' - too many false positives
  // These words are used in music education, coding, storytelling, etc.
];

// Category patterns that are automatically age-restricted
const AGE_RESTRICTED_CATEGORIES = [
  'ai dating',
  'dating & relationship',
  'ai dating & relationship',
  'adult',
  'relationship tools',
  'dating tools'
];

// Exclusion patterns - tools with these are NOT age restricted (false positives)
// These tools use words like "companion" or "roleplay" in non-dating contexts
const EXCLUSION_PATTERNS = [
  // Relationship counseling (not dating apps)
  'marriage mender',
  'marriage counseling',
  'family therapy',
  'parenting',
  
  // General phrases that don't indicate dating
  'self-love',
  'love of learning',
  'love for music',
  'i love',
  'beloved',
  
  // AIWebTools productivity/advanced tools (use "companion" generically)
  'g-mode gpt',
  'godmode gpt',
  'clarity omni',
  'multitasker gpt',
  'custom gpt maker',
  'perfect prompt engine',
  
  // Music/Education tools (use "companion" for learning)
  'music melodies',
  'learn any course',
  'learn any skill',
  'homeschool',
  'home school',
  'college degree gpt',
  
  // Coding tools (use "companion" for pair programming)
  'code companion',
  'codewhisperer',
  'github copilot',
  'coding assistant',
  
  // Spiritual/Philosophy tools (use "companion" metaphorically)
  'sophia gpt',
  'sophia aeterna',
  'alan watts',
  'talk to the gods',
  'talk to history',
  'time machine gpt',
  'resurrection gpt',
  'metatron',
  
  // Entertainment/Roleplay for storytelling (NOT dating)
  'character.ai',
  'celebrity chatline',
  'playwriter gpt',
  'movie script',
  'movie scene',
  
  // Travel/Lifestyle (use "companion" for assistance)
  'travel advisor',
  'travel agent',
  'survivalist',
  'fisherman gpt',
  
  // Pet/Animal care
  'veterinarian gpt',
  'petcare gpt',
  'pet advisor'
];

/**
 * Determines if a tool requires age verification
 * Smart detection focused specifically on dating/adult/couples tools
 */
export const requiresAgeVerification = (tool: Tool): boolean => {
  if (!tool) {
    console.log('🔞 Age check: No tool provided');
    return false;
  }
  
  const titleLower = (tool.title || '').toLowerCase();
  const descLower = (tool.description || '').toLowerCase();
  const categoryLower = (tool.category || '').toLowerCase();
  const tagsLower = (tool.tags || []).map(t => t.toLowerCase()).join(' ');
  
  const combinedText = `${titleLower} ${descLower} ${tagsLower}`;
  
  console.log(`🔞 Age check for "${tool.title}":`, {
    category: categoryLower,
    tagsLower,
    titleLower
  });
  
  // First check exclusions - if tool matches exclusion, it's NOT age restricted
  const isExcluded = EXCLUSION_PATTERNS.some(pattern => 
    combinedText.includes(pattern)
  );
  if (isExcluded) {
    console.log(`🔞 ${tool.title}: EXCLUDED (matched exclusion pattern)`);
    return false;
  }
  
  // Check if category is explicitly age-restricted
  const hasRestrictedCategory = AGE_RESTRICTED_CATEGORIES.some(cat =>
    categoryLower.includes(cat)
  );
  
  // If category is age-restricted, tool is age-restricted
  if (hasRestrictedCategory) {
    console.log(`🔞 ${tool.title}: RESTRICTED (category match: ${categoryLower})`);
    return true;
  }
  
  // Check for primary keywords (strong indicators)
  const matchedKeyword = PRIMARY_AGE_RESTRICTED_KEYWORDS.find(keyword => 
    combinedText.includes(keyword)
  );
  if (matchedKeyword) {
    console.log(`🔞 ${tool.title}: RESTRICTED (keyword match: "${matchedKeyword}")`);
    return true;
  }
  
  // Check for explicit 18+ tag
  const matchedTag = tool.tags?.find(tag => {
    const tagLower = tag.toLowerCase();
    return tagLower === '18+' || 
           tagLower === 'adult' || 
           tagLower === 'nsfw' ||
           tagLower === 'dating' ||
           tagLower === 'ai girlfriend' ||
           tagLower === 'ai boyfriend';
  });
  if (matchedTag) {
    console.log(`🔞 ${tool.title}: RESTRICTED (tag match: "${matchedTag}")`);
    return true;
  }
  
  // Secondary keywords only if category hints at dating/relationship
  const categoryHintsDating = categoryLower.includes('dating') || 
                               categoryLower.includes('relationship') ||
                               categoryLower.includes('companion');
  
  if (categoryHintsDating) {
    const secondaryMatch = SECONDARY_KEYWORDS.find(keyword =>
      combinedText.includes(keyword)
    );
    if (secondaryMatch) {
      console.log(`🔞 ${tool.title}: RESTRICTED (secondary match: "${secondaryMatch}")`);
      return true;
    }
  }
  
  console.log(`🔞 ${tool.title}: NOT RESTRICTED`);
  return false;
};

// Storage keys for age verification
const AGE_VERIFIED_KEY = 'aiwebtools_age_verified';
const AGE_VERIFIED_DOB_KEY = 'aiwebtools_verified_dob';
const AGE_VERIFIED_TIMESTAMP_KEY = 'aiwebtools_age_verification_time';

// Verification lasts for 30 days (30 * 24 * 60 * 60 * 1000 = 2592000000ms)
const VERIFICATION_DURATION_MS = 30 * 24 * 60 * 60 * 1000;

/**
 * Calculate age from date of birth with precise date comparison
 * Uses actual calendar dates, not just year subtraction
 */
export const calculateAge = (dob: Date): number => {
  const today = new Date();
  
  // Get the date components
  const birthYear = dob.getFullYear();
  const birthMonth = dob.getMonth();
  const birthDay = dob.getDate();
  
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  
  // Calculate base age from years
  let age = currentYear - birthYear;
  
  // Adjust if birthday hasn't occurred this year yet
  if (currentMonth < birthMonth) {
    age--;
  } else if (currentMonth === birthMonth && currentDay < birthDay) {
    age--;
  }
  
  return age;
};

/**
 * Check if user is 18 or older based on DOB
 * Must be EXACTLY 18 years old (birthday must have passed)
 */
export const isAdult = (dob: Date): boolean => {
  const age = calculateAge(dob);
  console.log(`🎂 Calculated age: ${age} years old (DOB: ${dob.toDateString()})`);
  return age >= 18;
};

/**
 * Check if user has already verified their age
 * Returns true only if verified AND not expired (30 days)
 */
export const isAgeVerified = (): boolean => {
  try {
    const verified = localStorage.getItem(AGE_VERIFIED_KEY);
    const timestamp = localStorage.getItem(AGE_VERIFIED_TIMESTAMP_KEY);
    
    if (verified !== 'true' || !timestamp) {
      console.log('🔓 No age verification found');
      return false;
    }
    
    // Check if verification has expired
    const verificationTime = parseInt(timestamp, 10);
    const now = Date.now();
    const elapsedMs = now - verificationTime;
    const elapsedDays = Math.floor(elapsedMs / (24 * 60 * 60 * 1000));
    
    if (elapsedMs > VERIFICATION_DURATION_MS) {
      // Expired - clear storage
      console.log(`🔓 Age verification expired (${elapsedDays} days old)`);
      clearAgeVerification();
      return false;
    }
    
    const remainingDays = 30 - elapsedDays;
    console.log(`✅ Age verified (expires in ${remainingDays} days)`);
    return true;
  } catch (error) {
    console.error('Error checking age verification:', error);
    return false;
  }
};

/**
 * Store age verification with DOB
 * Only stores if user is actually 18+
 */
export const setAgeVerified = (dob: Date): void => {
  try {
    if (!isAdult(dob)) {
      throw new Error('User is not 18 or older');
    }
    
    localStorage.setItem(AGE_VERIFIED_KEY, 'true');
    localStorage.setItem(AGE_VERIFIED_DOB_KEY, dob.toISOString());
    localStorage.setItem(AGE_VERIFIED_TIMESTAMP_KEY, Date.now().toString());
    
    console.log('✅ Age verification stored successfully (valid for 30 days)');
  } catch (error) {
    console.error('Failed to store age verification:', error);
    throw error;
  }
};

/**
 * Clear age verification (for testing/logout)
 */
export const clearAgeVerification = (): void => {
  try {
    localStorage.removeItem(AGE_VERIFIED_KEY);
    localStorage.removeItem(AGE_VERIFIED_DOB_KEY);
    localStorage.removeItem(AGE_VERIFIED_TIMESTAMP_KEY);
    console.log('🔓 Age verification cleared');
  } catch (error) {
    console.error('Failed to clear age verification:', error);
  }
};

/**
 * Get stored DOB if verified
 */
export const getVerifiedDOB = (): Date | null => {
  try {
    const dobString = localStorage.getItem(AGE_VERIFIED_DOB_KEY);
    if (!dobString) return null;
    return new Date(dobString);
  } catch {
    return null;
  }
};

/**
 * Get remaining verification days
 */
export const getRemainingVerificationDays = (): number => {
  try {
    const timestamp = localStorage.getItem(AGE_VERIFIED_TIMESTAMP_KEY);
    if (!timestamp) return 0;
    
    const verificationTime = parseInt(timestamp, 10);
    const elapsedMs = Date.now() - verificationTime;
    const remainingMs = VERIFICATION_DURATION_MS - elapsedMs;
    
    return Math.max(0, Math.ceil(remainingMs / (24 * 60 * 60 * 1000)));
  } catch {
    return 0;
  }
};
