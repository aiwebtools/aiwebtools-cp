/**
 * Age Verification System for Adult/Dating/Relationship Tools
 * Detects tools requiring 18+ verification and manages DOB-based age gates
 */

import { Tool } from "@/types/tools";

// Keywords that indicate adult/dating content requiring age verification
const AGE_RESTRICTED_KEYWORDS = [
  // Dating & Relationships
  'dating', 'ai girlfriend', 'ai boyfriend', 'romance', 'romantic',
  'love simulator', 'virtual relationship', 'companion', 'ai companion',
  'matchmaking', 'flirt', 'intimacy', 'roleplay', 'couple',
  'relationship app', 'dating app', 'love',
  
  // Adult/NSFW indicators
  'adult', 'nsfw', '18+', 'mature', 'explicit',
  'porn', 'xxx', 'erotic', 'sexy', 'sensual',
  
  // Specific platform indicators
  'replika', 'candy ai', 'nomi.ai', 'romantic ai',
  'lover ai', 'couple.me', 'rizz ai', 'dolores',
  
  // Other age-restricted
  'gambling', 'casino', 'betting', 'alcohol', 'mixologist',
  'cannabis', 'marijuana', 'weed', 'firearms', 'gun'
];

// Category patterns that are automatically age-restricted
const AGE_RESTRICTED_CATEGORIES = [
  'ai dating',
  'dating & relationship',
  'adult',
  'relationship tools'
];

/**
 * Determines if a tool requires age verification
 */
export const requiresAgeVerification = (tool: Tool): boolean => {
  if (!tool) return false;
  
  const titleLower = tool.title?.toLowerCase() || '';
  const descLower = tool.description?.toLowerCase() || '';
  const categoryLower = tool.category?.toLowerCase() || '';
  const tagsLower = (tool.tags || []).map(t => t.toLowerCase()).join(' ');
  
  const combinedText = `${titleLower} ${descLower} ${categoryLower} ${tagsLower}`;
  
  // Check if any age-restricted keyword is present
  const hasRestrictedKeyword = AGE_RESTRICTED_KEYWORDS.some(keyword => 
    combinedText.includes(keyword)
  );
  
  // Check if category is age-restricted
  const hasRestrictedCategory = AGE_RESTRICTED_CATEGORIES.some(cat =>
    categoryLower.includes(cat)
  );
  
  // Check for explicit 18+ tag
  const has18PlusTag = tool.tags?.some(tag => 
    tag.toLowerCase().includes('18+') || 
    tag.toLowerCase().includes('adult') ||
    tag.toLowerCase().includes('nsfw')
  );
  
  return hasRestrictedKeyword || hasRestrictedCategory || has18PlusTag;
};

// Storage key for age verification
const AGE_VERIFIED_KEY = 'aiwebtools_age_verified';
const AGE_VERIFIED_DOB_KEY = 'aiwebtools_verified_dob';
const AGE_VERIFIED_TIMESTAMP_KEY = 'aiwebtools_age_verification_time';

// Verification lasts for 30 days
const VERIFICATION_DURATION_MS = 30 * 24 * 60 * 60 * 1000;

/**
 * Calculate age from date of birth
 */
export const calculateAge = (dob: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  
  return age;
};

/**
 * Check if user is 18 or older based on DOB
 */
export const isAdult = (dob: Date): boolean => {
  return calculateAge(dob) >= 18;
};

/**
 * Check if user has already verified their age
 */
export const isAgeVerified = (): boolean => {
  try {
    const verified = localStorage.getItem(AGE_VERIFIED_KEY);
    const timestamp = localStorage.getItem(AGE_VERIFIED_TIMESTAMP_KEY);
    
    if (verified !== 'true' || !timestamp) {
      return false;
    }
    
    // Check if verification has expired
    const verificationTime = parseInt(timestamp, 10);
    const now = Date.now();
    
    if (now - verificationTime > VERIFICATION_DURATION_MS) {
      // Expired - clear storage
      clearAgeVerification();
      return false;
    }
    
    return true;
  } catch {
    return false;
  }
};

/**
 * Store age verification with DOB
 */
export const setAgeVerified = (dob: Date): void => {
  try {
    if (!isAdult(dob)) {
      throw new Error('User is not 18 or older');
    }
    
    localStorage.setItem(AGE_VERIFIED_KEY, 'true');
    localStorage.setItem(AGE_VERIFIED_DOB_KEY, dob.toISOString());
    localStorage.setItem(AGE_VERIFIED_TIMESTAMP_KEY, Date.now().toString());
    
    console.log('✅ Age verification stored successfully');
  } catch (error) {
    console.error('Failed to store age verification:', error);
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
