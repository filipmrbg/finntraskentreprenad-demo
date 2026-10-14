/**
 * Prerender step (runs after `vite build` and the SSR build).
 *
 * For every route in src/data/seo.ts it renders the React app to static HTML,
 * injects route-specific <head> tags (title, description, canonical, Open Graph,
 * JSON-LD) and writes dist/<route>.html. It also writes dist/404.html,
 * dist/sitemap.xml and dist/robots.txt. Vercel serves these with `cleanUrls`.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
const { render, routes, notFoundMeta, renderHead, renderSitemap, renderRobots, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const HEAD_BLOCK = /<!--app-head-start-->[\s\S]*?<!--app-head-end-->/;
if (!HEAD_BLOCK.test(template) || !template.includes('<!--app-html-->')) {
  throw new Error('index.html is missing the <!--app-head-start/end--> or <!--app-html--> markers');
}

function buildPage(url, meta) {
  const appHtml = render(url);
  const head = renderHead(meta).trim();
  return template
    .replace(HEAD_BLOCK, () => head)
    .replace('<!--app-html-->', () => appHtml);
}

function outputPath(routePath) {
  if (routePath === '/') return path.join(distDir, 'index.html');
  return path.join(distDir, `${routePath.replace(/^\/+/, '')}.html`);
}

async function write(file, contents) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, contents, 'utf8');
}

for (const route of routes) {
  const file = outputPath(route.path);
  await write(file, buildPage(route.path, route));
  console.log(`  prerendered ${route.path.padEnd(32)} -> ${path.relative(root, file)}`);
}

await write(path.join(distDir, '404.html'), buildPage('/sidan-finns-inte', notFoundMeta));
console.log(`  prerendered ${'404'.padEnd(32)} -> dist/404.html`);

const today = new Date().toISOString().slice(0, 10);
await write(path.join(distDir, 'sitemap.xml'), renderSitemap(routes, today));
await write(path.join(distDir, 'robots.txt'), renderRobots());
console.log(`  wrote sitemap.xml and robots.txt for ${SITE_URL}`);

await fs.rm(ssrDir, { recursive: true, force: true });
