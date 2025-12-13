import { Tool } from "@/types/tools";

// Security & Privacy subtypes
export const SECURITY_PRIVACY_SUBTYPES = [
  "Cybersecurity",
  "Password Management", 
  "VPN & Network Security",
  "Encryption Tools",
  "Identity Protection",
  "Compliance & Audit",
  "Vulnerability Scanner",
  "Threat Detection",
  "Privacy Tools",
  "Penetration Testing",
  "Forensics & Investigation",
  "Endpoint Protection"
] as const;

export type SecurityPrivacySubtype = typeof SECURITY_PRIVACY_SUBTYPES[number];

// STRICT keywords - must be specific to security/privacy domain
// Avoid generic terms like "security", "privacy", "login", "analysis" alone

const CYBERSECURITY_KEYWORDS = [
  'cybersecurity', 'cyber security', 'cyber defense', 'cyber threat', 'cyberattack',
  'ethical hacking', 'infosec', 'information security', 'malware detection',
  'ransomware', 'phishing detection', 'exploit detection', 'data breach',
  'intrusion detection', 'security operations', 'soc analyst', 'threat actor'
];

const PASSWORD_MANAGEMENT_KEYWORDS = [
  'password manager', 'password vault', 'credential manager', 'password generator',
  'passkey manager', 'lastpass', '1password', 'bitwarden', 'dashlane', 'keepass',
  'mfa authentication', 'authenticator app', 'totp', 'otp generator'
];

const VPN_NETWORK_KEYWORDS = [
  'vpn service', 'vpn provider', 'virtual private network', 'network security tool',
  'firewall software', 'proxy server', 'tor browser', 'anonymity network',
  'secure tunnel', 'wireguard', 'openvpn', 'nordvpn', 'expressvpn', 'protonvpn'
];

const ENCRYPTION_KEYWORDS = [
  'encryption tool', 'file encryption', 'disk encryption', 'message encryption',
  'pgp encryption', 'gpg tool', 'secure messaging app', 'signal protocol',
  'end-to-end encryption', 'e2ee messaging', 'veracrypt', 'cryptomator',
  'encrypted storage', 'encryption software'
];

const IDENTITY_PROTECTION_KEYWORDS = [
  'identity protection service', 'identity theft protection', 'fraud protection',
  'identity monitoring', 'credit monitoring service', 'dark web monitoring',
  'lifelock', 'identity guard', 'personal data protection'
];

const COMPLIANCE_AUDIT_KEYWORDS = [
  'security compliance', 'compliance tool', 'audit tool', 'hipaa compliance',
  'sox compliance', 'pci compliance', 'iso 27001', 'nist framework',
  'security audit tool', 'risk assessment tool', 'grc platform', 'governance tool'
];

const VULNERABILITY_SCANNER_KEYWORDS = [
  'vulnerability scanner', 'security scanner', 'vulnerability assessment',
  'cve scanner', 'nessus', 'qualys', 'rapid7', 'tenable', 'openvas',
  'security scan tool', 'penetration scanner', 'web scanner', 'app scanner'
];

const THREAT_DETECTION_KEYWORDS = [
  'threat detection tool', 'threat hunting', 'threat intelligence platform',
  'siem tool', 'siem platform', 'security monitoring tool', 'incident detection',
  'intrusion detection system', 'ids tool', 'ips tool', 'splunk security'
];

const PRIVACY_TOOLS_KEYWORDS = [
  'privacy tool', 'privacy browser', 'tracker blocker', 'ad blocker privacy',
  'anti-tracking tool', 'private browsing', 'data deletion tool', 'data removal',
  'browser privacy extension', 'privacy-focused', 'duckduckgo', 'brave browser'
];

const PENTEST_KEYWORDS = [
  'penetration testing', 'pentest tool', 'ethical hacking tool', 'red team tool',
  'security testing tool', 'attack simulation', 'breach simulation',
  'offensive security', 'bug bounty', 'kali linux', 'metasploit', 'burp suite'
];

const FORENSICS_KEYWORDS = [
  'digital forensics', 'forensic tool', 'incident response tool', 'evidence analysis',
  'log analysis tool', 'memory forensics', 'disk forensics', 'network forensics',
  'forensic investigation', 'autopsy tool', 'encase', 'ftk imager'
];

const ENDPOINT_PROTECTION_KEYWORDS = [
  'endpoint protection', 'endpoint security', 'edr tool', 'xdr platform',
  'antivirus software', 'anti-malware tool', 'crowdstrike', 'sentinelone',
  'carbon black', 'endpoint defense', 'endpoint detection'
];

// STRICT security tools - must have explicit security/privacy focus
const SECURITY_SPECIFIC_CATEGORY_KEYWORDS = [
  'security tool', 'security platform', 'security software', 'cybersecurity tool',
  'privacy tool', 'privacy software', 'hacking tool', 'hacker tool',
  'penetration testing', 'vulnerability', 'encryption', 'vpn', 'firewall',
  'antivirus', 'malware', 'threat', 'intrusion', 'forensic', 'password manager'
];

// All security keywords combined - STRICT versions only
export const SECURITY_PRIVACY_KEYWORDS = [
  ...CYBERSECURITY_KEYWORDS,
  ...PASSWORD_MANAGEMENT_KEYWORDS,
  ...VPN_NETWORK_KEYWORDS,
  ...ENCRYPTION_KEYWORDS,
  ...IDENTITY_PROTECTION_KEYWORDS,
  ...COMPLIANCE_AUDIT_KEYWORDS,
  ...VULNERABILITY_SCANNER_KEYWORDS,
  ...THREAT_DETECTION_KEYWORDS,
  ...PRIVACY_TOOLS_KEYWORDS,
  ...PENTEST_KEYWORDS,
  ...FORENSICS_KEYWORDS,
  ...ENDPOINT_PROTECTION_KEYWORDS
];

// Detect specific security subtype
export const detectSecurityPrivacySubtype = (tool: Tool): SecurityPrivacySubtype | null => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
  
  // Check each subtype with STRICT keywords
  if (ENDPOINT_PROTECTION_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    return "Endpoint Protection";
  }
  if (FORENSICS_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    return "Forensics & Investigation";
  }
  if (PENTEST_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    return "Penetration Testing";
  }
  if (THREAT_DETECTION_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    return "Threat Detection";
  }
  if (VULNERABILITY_SCANNER_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    return "Vulnerability Scanner";
  }
  if (COMPLIANCE_AUDIT_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    return "Compliance & Audit";
  }
  if (IDENTITY_PROTECTION_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    return "Identity Protection";
  }
  if (ENCRYPTION_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    return "Encryption Tools";
  }
  if (VPN_NETWORK_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    return "VPN & Network Security";
  }
  if (PASSWORD_MANAGEMENT_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    return "Password Management";
  }
  if (PRIVACY_TOOLS_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    return "Privacy Tools";
  }
  if (CYBERSECURITY_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    return "Cybersecurity";
  }
  
  return null;
};

// Check if a tool belongs to Security & Privacy category - STRICT detection
export const isSecurityPrivacyTool = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
  
  // Check explicit security/privacy category
  const categoryLower = (tool.category || '').toLowerCase();
  if (categoryLower.includes('cybersecurity') || 
      categoryLower.includes('security tool') ||
      categoryLower === 'security & privacy' ||
      categoryLower === 'security' ||
      categoryLower.includes('privacy tool')) {
    return true;
  }
  
  // Check for security-specific tags
  const securityTags = ['cybersecurity', 'security tool', 'privacy tool', 'vpn', 'antivirus', 
                        'password manager', 'encryption', 'firewall', 'pentest', 'forensics'];
  if (tool.tags?.some(tag => securityTags.some(st => tag.toLowerCase().includes(st)))) {
    return true;
  }
  
  // Check STRICT keywords only - avoid false positives
  return SECURITY_PRIVACY_KEYWORDS.some(keyword => 
    searchText.includes(keyword.toLowerCase())
  );
};

// Get security subtags for a tool
export const getSecurityPrivacySubtags = (tool: Tool): string[] => {
  const subtags: string[] = [];
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
  
  if (CYBERSECURITY_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    subtags.push("Cybersecurity");
  }
  if (PASSWORD_MANAGEMENT_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    subtags.push("Password Management");
  }
  if (VPN_NETWORK_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    subtags.push("VPN & Network Security");
  }
  if (ENCRYPTION_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    subtags.push("Encryption Tools");
  }
  if (IDENTITY_PROTECTION_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    subtags.push("Identity Protection");
  }
  if (COMPLIANCE_AUDIT_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    subtags.push("Compliance & Audit");
  }
  if (VULNERABILITY_SCANNER_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    subtags.push("Vulnerability Scanner");
  }
  if (THREAT_DETECTION_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    subtags.push("Threat Detection");
  }
  if (PRIVACY_TOOLS_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    subtags.push("Privacy Tools");
  }
  if (PENTEST_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    subtags.push("Penetration Testing");
  }
  if (FORENSICS_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    subtags.push("Forensics & Investigation");
  }
  if (ENDPOINT_PROTECTION_KEYWORDS.some(k => searchText.includes(k.toLowerCase()))) {
    subtags.push("Endpoint Protection");
  }
  
  return subtags;
};
