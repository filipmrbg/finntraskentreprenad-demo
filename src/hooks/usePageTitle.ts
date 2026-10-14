import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMeta } from '../data/seo';
import { OG_IMAGE_URL, absoluteUrl } from '../config/site';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Keeps <head> in sync with the current route during client-side navigation.
 * The initial HTML for every URL is already prerendered with the same values
 * (see src/seo/head.ts and scripts/prerender.mjs), so this only matters after
 * the visitor clicks around inside the app.
 */
export function useRouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const url = absoluteUrl(meta.path === '/404' ? pathname : meta.path);

    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow');
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', OG_IMAGE_URL);
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', OG_IMAGE_URL);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (meta.noindex) {
      canonical?.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url);
    }
  }, [pathname]);
}

export function SeoManager() {
  useRouteSeo();
  return null;
}
