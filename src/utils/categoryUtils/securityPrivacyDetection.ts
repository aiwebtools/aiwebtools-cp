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

// Keywords for each subtype
const CYBERSECURITY_KEYWORDS = [
  'cybersecurity', 'cyber security', 'cyber defense', 'cyber threat', 'cyberattack',
  'hacking', 'hacker', 'security', 'infosec', 'information security', 'defense',
  'attack', 'malware', 'ransomware', 'phishing', 'exploit', 'breach', 'intrusion'
];

const PASSWORD_MANAGEMENT_KEYWORDS = [
  'password', 'password manager', 'credential', 'vault', 'authentication',
  'passkey', 'biometric', 'login', 'mfa', 'multi-factor', '2fa', 'two-factor',
  'sso', 'single sign-on', 'identity access'
];

const VPN_NETWORK_KEYWORDS = [
  'vpn', 'virtual private network', 'network security', 'firewall', 'proxy',
  'tor', 'anonymity', 'network protection', 'dns', 'secure connection',
  'tunnel', 'encrypted connection', 'ndr', 'network detection'
];

const ENCRYPTION_KEYWORDS = [
  'encryption', 'encrypt', 'decrypt', 'cryptography', 'cipher', 'hash',
  'ssl', 'tls', 'certificate', 'pgp', 'gpg', 'secure messaging',
  'end-to-end', 'e2ee', 'cryptographic', 'aes', 'rsa'
];

const IDENTITY_PROTECTION_KEYWORDS = [
  'identity protection', 'identity theft', 'fraud protection', 'personal data',
  'data protection', 'privacy protection', 'gdpr', 'ccpa', 'pii',
  'data breach', 'identity monitoring', 'credit monitoring', 'dark web monitoring'
];

const COMPLIANCE_AUDIT_KEYWORDS = [
  'compliance', 'audit', 'regulation', 'regulatory', 'hipaa', 'sox', 'pci',
  'iso 27001', 'nist', 'gdpr', 'ccpa', 'security audit', 'risk assessment',
  'governance', 'grc', 'policy', 'framework', 'standard'
];

const VULNERABILITY_SCANNER_KEYWORDS = [
  'vulnerability', 'scanner', 'scan', 'vulnerability assessment', 'security scan',
  'cve', 'exploit', 'weakness', 'flaw', 'security testing', 'shodan', 'zoomeye',
  'reconnaissance', 'discovery', 'asset discovery'
];

const THREAT_DETECTION_KEYWORDS = [
  'threat detection', 'threat hunting', 'threat intelligence', 'siem',
  'security monitoring', 'incident detection', 'anomaly detection', 'behavioral analysis',
  'intrusion detection', 'ids', 'ips', 'alert', 'monitoring', 'surveillance'
];

const PRIVACY_TOOLS_KEYWORDS = [
  'privacy', 'anonymous', 'anonymity', 'tracker blocker', 'ad blocker',
  'anti-tracking', 'private browsing', 'data deletion', 'data removal',
  'opt-out', 'consent', 'cookie', 'fingerprint', 'browser privacy'
];

const PENTEST_KEYWORDS = [
  'penetration testing', 'pentest', 'ethical hacking', 'red team', 'blue team',
  'security testing', 'exploit', 'attack simulation', 'breach simulation',
  'offensive security', 'bug bounty', 'security research'
];

const FORENSICS_KEYWORDS = [
  'forensics', 'forensic', 'investigation', 'incident response', 'evidence',
  'analysis', 'recovery', 'trace', 'log analysis', 'memory forensics',
  'disk forensics', 'network forensics', 'digital forensics', 'criminologist'
];

const ENDPOINT_PROTECTION_KEYWORDS = [
  'endpoint', 'edr', 'xdr', 'antivirus', 'anti-malware', 'endpoint protection',
  'endpoint security', 'device security', 'workstation', 'server protection',
  'crowdstrike', 'sentinelone', 'defender', 'falcon', 'cortex'
];

// All security keywords combined
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
  
  // Check each subtype
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

// Check if a tool belongs to Security & Privacy category
export const isSecurityPrivacyTool = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
  
  // Check category
  if (tool.category?.toLowerCase().includes('security') || 
      tool.category?.toLowerCase().includes('cybersecurity') ||
      tool.category?.toLowerCase().includes('privacy')) {
    return true;
  }
  
  // Check keywords
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
