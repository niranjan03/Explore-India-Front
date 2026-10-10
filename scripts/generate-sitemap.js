const fs = require('fs');
const path = require('path');
const data = require('../src/data.json');

const baseUrl = 'https://www.exploring-india.com';
const publicRoutes = [
  '/',
  '/about',
  '/credits',
  '/destinations/',
  '/experiences',
  '/experiences/heritage-royal-palaces',
  '/experiences/spiritual-ayurvedic-wellness',
  '/experiences/himalayan-treks-adventure',
  '/experiences/wildlife-safaris',
  '/experiences/culinary-trails-street-food',
  '/experiences/coastal-retreats',
  '/seasons/',
  ...[
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december',
  ].map((month) => `/seasons/${month}`),
  '/itineraries/',
  '/itineraries/golden-triangle-7-days',
  '/itineraries/kerala-10-days-route',
  '/itineraries/ladakh-high-roads',
  '/itineraries/agra-jaipur-luxury-weekend',
  '/itineraries/north-india-two-week-route',
  '/journal/',
  ...[
    'first-trip-india',
    'eating-well-india',
    'indian-rail-planning',
    'temple-visit-etiquette',
    'radhanagar-beach-photo-essay',
    'solo-travel-safety',
    'blog-01',
    'blog-02',
    'blog-03',
  ].map((slug) => `/journal/${slug}`),
];

function slugify(value) {
  const slug = (value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return slug === 'maharastra' ? 'maharashtra' : slug;
}

const urls = new Set(publicRoutes.map((route) => `${baseUrl}${route}`));
const destinations = data.destinations || [];
const cityRoutes = new Set();

for (const destination of destinations) {
  if (!destination.Name) continue;

  urls.add(`${baseUrl}/place/${encodeURIComponent(destination.Name)}`);

  if (destination.State) {
    cityRoutes.add(
      `/destinations/${slugify(destination.State)}/${slugify(destination.City || destination.Name)}`,
    );
  }
}

for (const route of cityRoutes) {
  urls.add(`${baseUrl}${route}`);
}

const xmlEscape = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...[...urls].sort().map((url) => `  <url><loc>${xmlEscape(url)}</loc></url>`),
  '</urlset>',
  '',
].join('\n');

fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap, 'utf8');
console.log(`Generated sitemap.xml with ${urls.size} URLs.`);
