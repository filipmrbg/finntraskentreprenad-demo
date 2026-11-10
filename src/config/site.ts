/**
 * Central site configuration.
 *
 * Canonical-länkar, Open Graph, sitemap.xml, robots.txt och strukturerad data
 * genereras alla från detta värde vid build.
 */
const DEFAULT_SITE_URL = 'https://finntraskentreprenad.se';

const envUrl = (import.meta.env.VITE_SITE_URL as string | undefined) || '';

export const SITE_URL = (envUrl || DEFAULT_SITE_URL).replace(/\/+$/, '');
export const SITE_NAME = 'Finnträsk Entreprenad';
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export function absoluteUrl(pathname: string): string {
  if (!pathname || pathname === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}
