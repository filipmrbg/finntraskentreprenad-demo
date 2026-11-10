---
name: seo-domain-audit
description: Audit and correct domain-related SEO configuration in web projects. Use whenever a site is moved from a preview, demo, staging, hosting-provider, or temporary URL to its production domain, or whenever canonical links, sitemap, robots.txt, Open Graph, social previews, structured data, redirects, or metadata may reference the wrong domain.
---
# SEO Domain Audit

Use this standard before a site is published on a production domain or after its domain changes. The goal is that search engines and social platforms consistently see one authoritative public URL, never a preview or provider URL.

## Required workflow

1. Identify the intended production domain from the user or project configuration. Do not guess it. If it is unclear, stop and ask for it.
2. Search the entire project for preview, staging, demo, hosting-provider, and old-domain references. Include source files, templates, generated metadata, deployment configuration, redirects, public files, and documentation that may be copied into production.
3. Find the single source of truth for the public site URL. Use it for every absolute URL instead of duplicating domain strings.
4. Audit every route's metadata:
   - canonical URL
   - page title
   - meta description
   - robots directive
   - Open Graph URL, title, description, image, and image dimensions
   - Twitter or other social-card metadata
   - JSON-LD `url`, `@id`, logo, image, provider, and breadcrumb URLs
5. Audit generated files and publishing behavior:
   - sitemap URLs and sitemap location in robots.txt
   - prerendered HTML
   - redirects from old URLs and hostnames
   - trailing-slash behavior
   - HTTPS and preferred hostname
   - `www` versus non-`www` consistency
6. Make the smallest complete fix. Do not merely change the homepage; every public route and generated asset must use the same production domain.
7. Check that social preview images are hosted on the production domain, use a stable absolute URL, have sufficient contrast, and keep important logos or text inside generous safe margins for narrow mobile previews.
8. Build the project and inspect generated HTML, sitemap.xml, and robots.txt. Search the generated output for old domains and provider URLs. Report any warnings separately from actual failures.

## Rules

- Never invent or silently choose a production domain.
- Never leave a preview URL in canonical tags, sitemap entries, structured data, Open Graph metadata, redirects, or generated output.
- Never use a relative URL for `og:image`, `twitter:image`, canonical tags, sitemap entries, or JSON-LD URLs when the platform expects an absolute URL.
- Keep non-public design, preview, or test pages out of search results with `noindex` and exclude them from the sitemap.
- Preserve valid route paths and existing content; this is a domain consistency task, not a reason to redesign the site.
- If the site is already indexed under an old domain, recommend permanent redirects and a domain move in the search console after deployment.
- Do not claim the change is complete until the generated output has been checked.

## Completion report

Report:

- the production domain used
- which domain-related references were corrected
- whether canonical links, sitemap, robots.txt, social metadata, and structured data were checked
- whether the build passed
- any remaining action required outside the codebase, such as DNS, hosting-domain setup, redirects, or search-console configuration

## Example

If a project contains `https://preview.example-host.com` and the confirmed production domain is `https://example.se`, replace the preview domain through the shared site URL configuration. Then verify that a route such as `/services` produces:

- canonical: `https://example.se/services`
- sitemap entry: `https://example.se/services`
- Open Graph URL: `https://example.se/services`
- Open Graph image: `https://example.se/og-image.png`
- JSON-LD URLs referencing `https://example.se`

The final generated files must contain no remaining preview or provider-domain references.
