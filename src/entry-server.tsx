/**
 * Server entry used only at build time by scripts/prerender.mjs.
 * Renders every route to static HTML so search engines and link previews get
 * full content and correct meta tags without running JavaScript.
 */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppLayout, PageComponents } from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import ServicesOverview from './pages/ServicesOverview';
import ServiceDetail from './pages/ServiceDetail';
import Animations from './pages/Animations';
import { allRoutes, notFoundMeta, RouteMeta } from './data/seo';
import { renderHead, renderRobots, renderSitemap } from './seo/head';
import { SITE_URL } from './config/site';

const serverPages: PageComponents = { About, Contact, Quote, ServicesOverview, ServiceDetail, Animations };

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppLayout pages={serverPages} />
      </StaticRouter>
    </StrictMode>,
  );
}

export const routes: RouteMeta[] = allRoutes;
export { notFoundMeta, renderHead, renderRobots, renderSitemap, SITE_URL };
