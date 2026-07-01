import { readFileSync, writeFileSync, existsSync } from 'fs';

const PREVIEW_DOMAIN = 'talentnorth.lovable.app';
const PRODUCTION_DOMAIN = 'www.talentnorth.in';

const files = [
  'dist/index.html',
  'dist/robots.txt',
  'dist/sitemap.xml',
];

let fixed = 0;
for (const file of files) {
  if (!existsSync(file)) continue;
  const original = readFileSync(file, 'utf8');
  const updated = original.replaceAll(PREVIEW_DOMAIN, PRODUCTION_DOMAIN);
  if (updated !== original) {
    writeFileSync(file, updated, 'utf8');
    console.log(`Fixed URLs in ${file}`);
    fixed++;
  }
}
if (fixed === 0) {
  console.log('No lingering preview URLs found in dist/.');
}
