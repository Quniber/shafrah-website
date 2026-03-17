import { execSync } from 'child_process';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const distDir = join(projectRoot, 'dist');

const routes = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/blog',
  '/contact',
  '/blog/app-development-qatar-2024',
  '/blog/best-software-company-doha',
  '/blog/web-development-tips-2024',
];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
};

// Step 1: Build the site
console.log('Building the site...');
execSync('npm run build', { cwd: projectRoot, stdio: 'inherit' });
console.log('Build complete.\n');

// Step 2: Start a local static server with SPA fallback
const PORT = 4173;
const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

const server = createServer((req, res) => {
  let filePath = join(distDir, req.url === '/' ? 'index.html' : req.url);

  // Try to serve the file directly
  if (existsSync(filePath) && !filePath.endsWith('/')) {
    const ext = extname(filePath);
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    try {
      const content = readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': mime });
      res.end(content);
      return;
    } catch (_) {
      // fall through to SPA fallback
    }
  }

  // SPA fallback: serve index.html for all routes
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(indexHtml);
});

server.listen(PORT, async () => {
  console.log(`Static server running on http://localhost:${PORT}\n`);

  try {
    // Step 3: Use puppeteer to prerender each route
    const puppeteer = await import('puppeteer-core');
    const browser = await puppeteer.default.launch({
      headless: true,
      executablePath: '/Users/rashid/.cache/puppeteer/chrome/mac_arm-145.0.7632.77/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    for (const route of routes) {
      const url = `http://localhost:${PORT}${route}`;
      console.log(`Prerendering: ${route}`);

      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      // Wait a bit extra for any animations/lazy content
      await page.waitForFunction(() => document.readyState === 'complete', { timeout: 10000 });

      const html = await page.content();
      await page.close();

      // Determine output path
      let outputPath;
      if (route === '/') {
        outputPath = join(distDir, 'index.html');
      } else {
        const dir = join(distDir, route.slice(1));
        mkdirSync(dir, { recursive: true });
        outputPath = join(dir, 'index.html');
      }

      writeFileSync(outputPath, html, 'utf-8');
      console.log(`  → Saved to ${outputPath}`);
    }

    await browser.close();
    console.log('\nPrerendering complete! All routes have been saved.');
  } catch (err) {
    console.error('Prerendering failed:', err);
    process.exit(1);
  } finally {
    server.close();
  }
});
