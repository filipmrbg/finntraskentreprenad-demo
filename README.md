# Finnträsk Entreprenad

Website for Finnträsk Entreprenad, a family-owned earthworks and construction company based in Finnträsk, serving Skellefteå, Byske, and the wider Västerbotten region.

## Tech Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Inline styles + CSS custom properties (no Tailwind in components)
- **Backend:** Supabase (PostgreSQL database, Edge Functions, email via Resend)
- **Routing:** React Router (SPA with prerendered static HTML)

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts automatically — no need to run it manually.

## Project Structure

```
src/
  components/    Reusable UI components (Navbar, Footer, Button, etc.)
  pages/         Route-level pages (Home, ServicesOverview, ServiceDetail, About, Contact, Quote)
  data/          Static content data (services, images, SEO config)
  config/        Site-wide configuration (site.ts)
  lib/           Utilities (form submission, Supabase client)
  hooks/         Custom React hooks
  seo/           Head/meta tag management
```

## Contact Form & Email

Form submissions on the Contact and Quote pages are saved to the `contact_submissions` table in Supabase and trigger an email notification via the `send-contact-email` Edge Function.

### Required Supabase Secrets

Set these in the Supabase dashboard (Project Settings → Edge Functions → Secrets):

| Secret | Description |
|--------|-------------|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) — required for email to work |
| `RECIPIENT_EMAIL` | Email address that receives form submissions (defaults to `info@finntraskentreprenad.se`) |
| `FROM_EMAIL` | Sender address shown in outgoing emails (defaults to Resend's sandbox `onboarding@resend.dev`; set to a verified domain like `Finnträsk Entreprenad <noreply@finntraskentreprenad.se>`) |

Without `RESEND_API_KEY`, submissions are still saved to the database but no email is sent.

## Build

```bash
npm run build
```

Produces static output in `dist/` with prerendered HTML for SEO.
