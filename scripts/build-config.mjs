import { writeFile } from 'node:fs/promises';

const config = {
  url: process.env.SUPABASE_URL || '',
  anonKey: process.env.SUPABASE_ANON_KEY || ''
};

await writeFile(
  new URL('../config.js', import.meta.url),
  `window.SUPABASE_CONFIG = ${JSON.stringify(config, null, 2)};\n`,
  'utf8'
);

console.log(`Generated config.js (${config.url ? 'Supabase configured' : 'fallback mode'}).`);
