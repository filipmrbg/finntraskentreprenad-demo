/**
 * Central site configuration.
 *
 * Alla absoluta URL:er (canonical-länkar, Open Graph, Twitter, JSON-LD,
 * sitemap.xml och robots.txt) genereras från SITE_URL nedan vid build
 * (via scripts/prerender.mjs). Om statiska kopior läggs i public/ måste
 * de hållas i synk med SITE_URL.
 */
const DEFAULT_SITE_URL = 'https://finntraskentreprenad.se';

const envUrl = (import.meta.env.VITE_SITE_URL as string | undefined) || '';

export const SITE_URL = (envUrl || DEFAULT_SITE_URL).replace(/\/+$/, '');
export const SITE_NAME = 'Finnträsk Entreprenad';
export const DEFAULT_DESCRIPTION =
  'Finnträsk Entreprenad utför markarbeten, grundläggning, skogsvägar och trädfällning i Skellefteå, Byske och Västerbotten. Begär kostnadsfri offert!';
export const OG_IMAGE_PATH = '/og-image.png';
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

export function absoluteUrl(pathname: string): string {
  if (!pathname || pathname === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}
