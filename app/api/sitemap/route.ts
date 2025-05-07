import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.fusioncalling.com';
  const urls = [
    '',
    '/Privacy',
    '/Terms',
  ];
  const lastmod = new Date().toISOString();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${baseUrl}${url}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${url === '' ? '1.0' : '0.7'}</priority>
        </url>
      `
        )
        .join('')}
    </urlset>`;
  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
