import { allTools } from './src/data/toolsData.ts';
import { convertToolsToCSV } from './src/utils/csvExport.ts';
import fs from 'fs';
const csv = convertToolsToCSV(allTools);
const out = `/mnt/documents/AIWebTools-Complete-Directory-${allTools.length}-Tools.csv`;
fs.writeFileSync(out, csv);
console.log('Tools exported:', allTools.length);
console.log('File:', out);
