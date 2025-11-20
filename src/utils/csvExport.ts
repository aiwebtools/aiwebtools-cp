import { Tool } from "@/types/tools";

/**
 * Escapes CSV fields that contain commas, quotes, or newlines
 */
const escapeCSVField = (field: string | undefined): string => {
  if (!field) return '';
  
  // Convert to string and escape
  const str = String(field);
  
  // If field contains comma, quote, or newline, wrap in quotes and escape internal quotes
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  
  return str;
};

/**
 * Converts tools array to CSV format
 */
export const convertToolsToCSV = (tools: Tool[]): string => {
  // CSV Headers
  const headers = [
    'Tool Name',
    'Description',
    'Category',
    'Direct URL',
    'Video URL',
    'Image URL',
    'Tags',
    'Rating',
    'Total Votes',
    'Emoji',
    'Color Gradient',
    'Blockchain',
    'Is Free',
    'Index'
  ];

  // Create CSV rows
  const rows = tools.map((tool, index) => [
    escapeCSVField(tool.title),
    escapeCSVField(tool.description),
    escapeCSVField(tool.category),
    escapeCSVField(tool.directUrl),
    escapeCSVField(tool.videoUrl),
    escapeCSVField(tool.imageUrl),
    escapeCSVField(tool.tags?.join('; ')),
    escapeCSVField(tool.rating?.toString()),
    escapeCSVField(tool.totalVotes?.toString()),
    escapeCSVField(tool.emoji),
    escapeCSVField(tool.color),
    escapeCSVField(tool.blockchain),
    escapeCSVField(tool.isFree ? 'Yes' : 'No'),
    escapeCSVField(index.toString())
  ]);

  // Combine headers and rows
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  return csvContent;
};

/**
 * Triggers download of CSV file
 */
export const downloadToolsCSV = (tools: Tool[], filename: string = 'ai-web-tools-complete-directory.csv'): void => {
  const csvContent = convertToolsToCSV(tools);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
  
  console.log(`✅ CSV downloaded: ${filename} with ${tools.length} tools`);
};

/**
 * Generates CSV content with metadata header
 */
export const generateCSVWithMetadata = (tools: Tool[]): string => {
  const now = new Date().toISOString();
  const metadata = [
    `# AI Web Tools - Complete Directory`,
    `# Generated: ${now}`,
    `# Total Tools: ${tools.length}`,
    `# Website: https://aiwebtools.ai`,
    `# `,
    ``
  ].join('\n');

  return metadata + convertToolsToCSV(tools);
};
