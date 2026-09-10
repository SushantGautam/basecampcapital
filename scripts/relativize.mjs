// Rewrite root-absolute asset URLs to relative so the site works both at
// github.io/basecampcapital/ (subpath) and thebasecampcapital.com (root).
import { readFileSync, writeFileSync } from 'node:fs';

for (const file of ['dist/index.html', 'dist/404.html']) {
  let html = readFileSync(file, 'utf8');
  html = html
    .replaceAll('href="/_astro/', 'href="./_astro/')
    .replaceAll('href="/favicon.svg"', 'href="./favicon.svg"')
    .replaceAll('href="/favicon.png"', 'href="./favicon.png"');
  writeFileSync(file, html);
}
