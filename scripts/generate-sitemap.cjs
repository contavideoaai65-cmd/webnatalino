const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BASE_URL = 'https://webnatalino.lovable.app';
const BLOG_DIR = path.join(__dirname, '../public/blog');
const PUBLIC_DIR = path.join(__dirname, '../public');

async function generateSitemap() {
  const staticPages = [
    '',
    '/blog',
    '/obrigado'
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  // Add blog posts
  if (fs.existsSync(BLOG_DIR)) {
    const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.md'));
    
    files.forEach(file => {
      const filePath = path.join(BLOG_DIR, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(content);
      const slug = data.slug || file.replace('.md', '');
      
      sitemap += `
  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${data.date || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });
  }

  sitemap += `
</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();
