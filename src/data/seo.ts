import services, { ServiceItem } from './services';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
  changefreq?: 'weekly' | 'monthly' | 'yearly';
  priority?: number;
}

const staticRoutes: RouteMeta[] = [
  {
    path: '/',
    title: 'Mark- och schaktarbeten i Skellefteå | Finnträsk Entreprenad',
    description: 'Finnträsk Entreprenad utför markarbeten, grundläggning, skogsvägar och trädfällning i Skellefteå, Byske och Västerbotten. Begär kostnadsfri offert!',
    changefreq: 'monthly',
    priority: 1.0,
  },
  {
    path: '/tjanster',
    title: 'Våra tjänster i Skellefteå och Västerbotten | Finnträsk Entreprenad',
    description: 'Markarbeten, grundläggning, skogsentreprenad och fastighetsservice i Skellefteå och Västerbotten. Se alla tjänster vi utför och begär kostnadsfri offert.',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/om-oss',
    title: 'Om Finnträsk Entreprenad | Familjeföretag i Västerbotten',
    description: 'Lär känna familjeföretaget Finnträsk Entreprenad. Stor erfarenhet inom mark, schakt och transport med stark lokal förankring i Västerbotten.',
    changefreq: 'yearly',
    priority: 0.6,
  },
  {
    path: '/kontakt',
    title: 'Kontakta Finnträsk Entreprenad | Niklas och Kevin Lundmark',
    description: 'Ring Niklas (070-588 40 32) eller Kevin (070-588 40 42) för mark- och schaktarbeten i Skellefteå och Västerbotten. Boka kostnadsfritt platsbesök!',
    changefreq: 'yearly',
    priority: 0.7,
  },
  {
    path: '/offert',
    title: 'Begär kostnadsfri offert | Finnträsk Entreprenad',
    description: 'Planerar du schaktning, husgrund, stugväg eller trädfällning i Skellefteå med omnejd? Beskriv ditt projekt och få ett tydligt prisförslag.',
    changefreq: 'yearly',
    priority: 0.8,
  },
  {
    // Internal design page, kept out of search results
    path: '/animationer',
    title: 'Animationer | Finnträsk Entreprenad',
    description: 'Intern sida.',
    noindex: true,
  },
];

const serviceRoutes: RouteMeta[] = services.map((svc: ServiceItem) => ({
  path: svc.href,
  title: svc.seoTitle,
  description: svc.seoDescription,
  changefreq: 'monthly',
  priority: 0.9,
}));

export const notFoundMeta: RouteMeta = {
  path: '/404',
  title: 'Sidan hittades inte | Finnträsk Entreprenad',
  description: 'Sidan du letar efter finns inte. Gå till startsidan eller se våra tjänster inom mark, grund och skog i Skellefteå.',
  noindex: true,
};

export const allRoutes: RouteMeta[] = [...staticRoutes, ...serviceRoutes];

export function normalizePath(pathname: string): string {
  if (!pathname) return '/';
  const clean = pathname.split('?')[0].split('#')[0];
  if (clean.length > 1 && clean.endsWith('/')) return clean.replace(/\/+$/, '');
  return clean;
}

export function getRouteMeta(pathname: string): RouteMeta {
  const path = normalizePath(pathname);
  return allRoutes.find((r) => r.path === path) || notFoundMeta;
}
