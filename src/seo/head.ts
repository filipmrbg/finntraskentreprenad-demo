/**
 * Builds the per-route <head> markup used by the prerender step (scripts/prerender.mjs).
 * Only imported from src/entry-server.tsx, so it never ships to the browser.
 */
import { SITE_NAME, SITE_URL, OG_IMAGE_URL, absoluteUrl } from '../config/site';
import { RouteMeta } from '../data/seo';
import services from '../data/services';

function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function jsonLd(data: unknown): string {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}

const areaServed = [
  { '@type': 'City', name: 'Skellefteå' },
  { '@type': 'Place', name: 'Byske' },
  { '@type': 'Place', name: 'Finnträsk' },
  { '@type': 'Place', name: 'Kåge' },
  { '@type': 'Place', name: 'Ursviken' },
  { '@type': 'Place', name: 'Bureå' },
  { '@type': 'Place', name: 'Boliden' },
  { '@type': 'Place', name: 'Burträsk' },
  { '@type': 'Place', name: 'Jörn' },
  { '@type': 'City', name: 'Piteå' },
  { '@type': 'AdministrativeArea', name: 'Västerbottens län' },
];

const businessId = `${SITE_URL}/#foretag`;

function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': businessId,
    name: SITE_NAME,
    legalName: SITE_NAME,
    description:
      'Familjeföretag från Finnträsk som utför markarbeten, grundläggning, dränering, VA-arbete, skogsvägar, stugvägar, högläggning, trädgårdsanläggning, trädfällning, stubbortagning och takskottning i Skellefteå och Västerbotten.',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    image: OG_IMAGE_URL,
    telephone: '+46705884032',
    email: 'info@finntraskentreprenad.se',
    taxID: '556854-3465',
    founder: [
      { '@type': 'Person', name: 'Niklas Lundmark', telephone: '+46705884032' },
      { '@type': 'Person', name: 'Kevin Lundmark', telephone: '+46705884042' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Finnträsk',
      addressRegion: 'Västerbottens län',
      postalCode: '934 94',
      addressCountry: 'SE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 64.9961, longitude: 20.9575 },
    areaServed,
    sameAs: ['https://www.instagram.com/finntraskentreprenad/'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tjänster',
      itemListElement: services.map((svc) => ({
        '@type': 'OfferCatalog',
        name: svc.title,
        url: absoluteUrl(svc.href),
        itemListElement: svc.subServices.map((sub) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: sub.name },
        })),
      })),
    },
  };
}

function serviceSchemas(path: string): unknown[] {
  const svc = services.find((s) => s.href === path);
  if (!svc) return [];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: svc.title,
      serviceType: svc.subServices.map((s) => s.name).join(', '),
      description: svc.seoDescription,
      url: absoluteUrl(svc.href),
      image: `${SITE_URL}${svc.image}`,
      provider: { '@id': businessId },
      areaServed,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Hem', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Tjänster', item: absoluteUrl('/tjanster') },
        { '@type': 'ListItem', position: 3, name: svc.title, item: absoluteUrl(svc.href) },
      ],
    },
  ];
}

export function renderHead(meta: RouteMeta): string {
  const url = absoluteUrl(meta.path);
  const title = esc(meta.title);
  const description = esc(meta.description);
  const lines: string[] = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow'}" />`,
  ];

  if (!meta.noindex) {
    lines.push(`<link rel="canonical" href="${url}" />`);
  }

  if (meta.path === '/') {
    lines.push(`<link rel="preload" as="image" href="/hero-main.webp" fetchpriority="high" />`);
  }

  lines.push(
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="sv_SE" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE_URL}" />`,
    `<meta property="og:image:secure_url" content="${OG_IMAGE_URL}" />`,
    `<meta property="og:image:type" content="image/png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${SITE_NAME}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE_URL}" />`,
  );

  if (!meta.noindex) {
    lines.push(jsonLd(businessSchema()));
    serviceSchemas(meta.path).forEach((schema) => lines.push(jsonLd(schema)));
  }

  return lines.map((l) => `    ${l}`).join('\n');
}

export function renderSitemap(routes: RouteMeta[], lastmod: string): string {
  const urls = routes
    .filter((r) => !r.noindex)
    .map(
      (r) => `  <url>
    <loc>${absoluteUrl(r.path)}</loc>
    <lastmod>${lastmod}</lastmod>${r.changefreq ? `\n    <changefreq>${r.changefreq}</changefreq>` : ''}${
      r.priority !== undefined ? `\n    <priority>${r.priority.toFixed(1)}</priority>` : ''
    }
  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function renderRobots(): string {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}
