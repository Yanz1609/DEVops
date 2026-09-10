import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const requiredMarkers = [
  'id="project-list"',
  'id="contact-form"',
  'createClient',
  'from(\'projects\')',
  'from(\'contact_messages\')'
];
const missing = requiredMarkers.filter((marker) => !html.includes(marker));

if (missing.length) {
  console.error(`Missing required markers: ${missing.join(', ')}`);
  process.exit(1);
}

if (!html.includes('<!DOCTYPE html>') || !html.includes('</html>')) {
  console.error('index.html does not look like a complete HTML document.');
  process.exit(1);
}

console.log('HTML integration checks passed.');
