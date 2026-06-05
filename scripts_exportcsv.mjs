// Tiny localStorage shim for browser-only code paths
globalThis.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {}, clear: () => {} };
globalThis.window = globalThis.window || { addEventListener: () => {}, location: { href: '' } };
globalThis.document = globalThis.document || { addEventListener: () => {} };
const { allTools } = await import('/dev-server/src/data/toolsData.ts');
const { convertToolsToCSV } = await import('/dev-server/src/utils/csvExport.ts');
const fs = await import('fs');
const csv = convertToolsToCSV(allTools);
const out = `/dev-server/public/downloads/aiwebtools-directory-list.csv`;
fs.writeFileSync(out, csv);
console.log('Tools:', allTools.length, '| Written to:', out);
