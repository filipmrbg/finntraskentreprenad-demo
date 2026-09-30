Configure the entire website for this client demo based on the information provided below.


================ 1. CLIENT INFORMATION ================

Company Name: 

Location / Area: 

Phone: 

Email: 

Organization Number: 

Owner / CEO: 

Slogan (optional): 



================ 2. ALLABOLAG / RAW TEXT ================

[Paste raw text / company description here]



================ 3. LOGO & MEDIA ================

Logo URL: 

Hero Video/Image URL (optional - leave blank to keep template default): 

About Us Image URL (Photo of owner/team or company logo): 



================ 4. IMAGE GALLERY (4-6 IMAGES) ================

Gallery Image 1 URL: 

Gallery Image 2 URL: 

Gallery Image 3 URL: 

Gallery Image 4 URL: 

Gallery Image 5 URL (optional): 

Gallery Image 6 URL (optional): 



================ 5. SOCIAL MEDIA & INSTAGRAM ================

Instagram Profile URL: 

Facebook Page URL: 

Instagram Post 1 URL: 

Instagram Post 2 URL: 

Instagram Post 3 URL: 



================ RULES FOR AI ================
1. LANGUAGE & COPYWRITING (NATURAL SWEDISH):
   - Transform the raw/Allabolag text into modern, persuasive, and trustworthy Swedish craftsmanship copy (svenska). Avoid stiff, bureaucratic or legal phrasing.
   - CLEAN GEOGRAPHIC LOCALIZATION (NO RESIDENTIAL STREET ADDRESSES):
     * If the input contains a street address, apartment number, or postal code (e.g. "Storgatan 14 lgh 1201, 852 30 Sundsvall"), the AI MUST automatically strip away the street address and extract ONLY the primary city/municipality (e.g. "Sundsvall").
     * Automatically expand the geographic reach to surrounding municipalities and region in the Hero, subheadings, and service texts (e.g. "Sundsvall • Timrå • Alnö • Medelpad" or "Mariestad med omnejd").
     * NEVER display street addresses, residential house numbers, or apartment numbers in Hero titles, section headings, breadcrumbs, service cards, or customer reviews.
   - STRICTLY AVOID UNNECESSARY HYPHENS (INGA BINDESTRECK): In Swedish, compound words must be written as a single solid word without hyphens. Hyphens make text look machine-translated and break mobile typography.
     * Write "Byggtjänster" (NEVER "Bygg-tjänster")
     * Write "Totalentreprenad" (NEVER "Total-entreprenad")
     * Write "Kvalitetsarbete" (NEVER "Kvalitets-arbete")
     * Write "Hantverkstjänster" (NEVER "Hantverks-tjänster")
     * Write "Trygghetsgaranti" (NEVER "Trygghets-garanti")
     * Use "Tak och fasad" or "Tak & fasad" instead of "Tak- och fasadrenovering".
     * Never split words with hyphens in headings, badges, or buttons.
2. NO AI CLUTTER & PRESERVE CLEAN MINIMALIST DESIGN:
   - STICK TO TEMPLATE LAYOUT: Do not invent, add, or inject any new UI elements, decorative sections, floating cards, or extra containers. Only update the text and media within the existing template components.
   - NO INVENTED BADGES OR PILLS: Do NOT add new floating badge tags, pill chips, or decorative marketing labels (e.g. no "✨ Bästa valet", "⚡ Snabb service", "🔥 Populär", "🏆 Premium").
   - ZERO EMOJIS: Never insert emojis in headings, titles, subheadings, bullet points, cards, or buttons.
3. ABSOLUTELY NO AI IMAGE GENERATION (NEVER USE generate_image):
   - ZERO AI-GENERATED IMAGES: The AI must NEVER invoke `generate_image` or generate synthetic images with AI under ANY circumstances.
   - REAL MEDIA ONLY: ONLY use images that are explicitly provided by the user via URLs in Sections 3, 4, and 5.
   - ABOUT US SECTION MEDIA (PHOTO OF OWNER/TEAM OR COMPANY LOGO):
     * The About Us section uses EITHER a real photo of the owner/founder/team ("en bild på dem") OR the company's logo ("eller deras logga").
     * If a real photo of the owner/team is provided in About Us Image URL, download and cache it locally as `public/about.webp` (or .jpg) and set `images.about.hero.url` to point to it.
     * If no photo of the people is available, or if the client's logo URL is provided for About Us, point `images.about.hero.url` to `/logo.png`. The template automatically formats and centers the logo with contain/padding on a sleek dark card.
     * NEVER generate synthetic AI photos of electricians/craftsmen.
     * NEVER keep competitor or previous company photos showing another company's van or craftsmen.
   - PRESERVE TEMPLATE DEFAULTS WHEN BLANK (HERO & SERVICES):
     * If Hero Video/Image URL is left blank, keep the template's existing background video/image.
     * Service card images in src/data/images.ts must always remain the template's curated photos (/services/service-*.jpg).
     * NO SERVICE IMAGES IN GALLERY: The images in /services/ belong exclusively to the service cards and service pages. NEVER copy, link, or pad service images into the homepage project gallery (portfolio or gallery).
   - Python/PIL may only be used for programmatic logo processing (background transparency removal, cropping, and generating favicon/og-image from the client's provided logo). NEVER generate illustrations or photos.
4. LOGO & TRANSPARENCY (MANDATORY AUTOMATION):
   - AUTOMATED BACKGROUND REMOVAL & CROPPING: The logo provided in Section 3 is often a square avatar/photo from social media or Allabolag with solid background padding (white, black, or colored). The AI MUST automatically:
     1. Download the raw logo file locally using curl or Python.
     2. Run a Python script (using PIL) to detect the content bounding box, crop away whitespace/padding, and convert solid background pixels into full alpha transparency.
     3. Generate and save the following local assets in public/:
        * public/logo.png & public/logo-white.png: Crisp transparent version with light/white typography for the dark Navbar and Hero (retaining natural accent colors on icons/emblems).
        * public/logo-dark.png: Transparent version with dark typography for light backgrounds and the Footer.
        * public/og-image.png: Branded 1200x630 card with the logo centered on a dark theme background for link previews.
        * public/favicon.png & public/apple-touch-icon.png: 512x512 square icons.
     4. Set images.logo.url to '/logo.png' and images.logoDark.url to '/logo-dark.png' in src/data/images.ts.
   - PREVENT WHITE BOXES: NEVER render a raw square avatar with a solid background box in the Navbar. The logo must blend seamlessly into the header.
   - CACHE ALL MEDIA LOCALLY: Also download and cache all provided gallery images and about images locally in public/gallery/ and public/about.webp (or .jpg) so the demo is never broken by expired CDN access tokens. If the company logo is used for About Us, point images.about.hero.url to '/logo.png'.
5. LINK PREVIEW & OPEN GRAPH (CRITICAL FOR IMESSAGE, SMS & SOCIAL MEDIA):
   - ABSOLUTE URL & DOMAIN ACCURACY (NO 404s):
     * The AI must detect or set the exact production domain for this specific deployment (e.g. `https://[project-name].vercel.app`).
     * CRITICAL: NEVER hardcode an outdated or mismatched domain in `index.html` or `src/hooks/usePageTitle.ts`. If the domain in `og:image` returns a 404 error, iMessage and SMS will fail to load the image and display an empty grey box.
     * Both `index.html` (for static social bot crawlers) and `src/hooks/usePageTitle.ts` (for client navigation) MUST use the exact matching absolute URL.
   - AUTOMATED 1200×630 OG BANNER GENERATION (MANDATORY PROGRAMMATIC ASSET):
     * NEVER point `og:image` to a raw, transparent `logo.png` directly, as transparent logos render with black/clashing backgrounds in iMessage and WhatsApp.
     * The AI MUST automatically run a Python/PIL script to generate `public/og-image.png` and `public/og-image.jpg` with standard OpenGraph dimensions (1200 × 630 px):
       1. Base canvas: 1200×630 with a sleek dark navy/slate background (`#0B1120` to `#0F1A34`) featuring a subtle, soft radial brand glow in the center.
       2. Centered logo: Place the processed, transparent company logo in the center (~650–700 px wide, proportional height), perfectly sharp and anti-aliased.
       3. Export both `public/og-image.png` and `public/og-image.jpg` (JPEG quality 95).
   - META TAGS CONFIGURATION IN index.html:
     * Set `<meta property="og:image" content="https://[domain]/og-image.png" />`
     * Set `<meta property="og:image:secure_url" content="https://[domain]/og-image.png" />`
     * Set `<meta property="og:image:width" content="1200" />`
     * Set `<meta property="og:image:height" content="630" />`
     * Set `<meta property="og:image:type" content="image/png" />`
     * Set `<meta property="og:image:alt" content="[Company Name] Logotyp" />`
     * Set `<meta name="twitter:card" content="summary_large_image" />`
     * Set `<meta name="twitter:image" content="https://[domain]/og-image.png" />`
     * Set `<meta name="image" content="https://[domain]/og-image.png" />`
     * Set `<link rel="image_src" href="https://[domain]/og-image.png" />`
     * Set `<link rel="canonical" href="https://[domain]" />`
     * Set `og:title` to: `[Company Name] | [Main Service] i [Location / Area]`
     * Set `og:description` to: A concise, persuasive 1–2 sentence Swedish summary of services.
   - SCRIPT LOGIC IN src/hooks/usePageTitle.ts:
     * Ensure the fallback `origin` matches `https://[domain]` and updates `og:image` and `twitter:image` dynamically with absolute URLs.
   - WHY THIS GUARANTEES SUCCESS:
     * iMessage only reads raw HTML before JavaScript execution: complete absolute links (https://...) with the exact domain in index.html ensure Apple's crawler never fails.
     * 1200×630 is Apple & Meta standard (1.91:1) filling preview cards perfectly.
     * Dark background behind the logo ensures light and white elements render crisply in both dark and light phone modes.
6. SERVICES & TEMPLATE CONSISTENCY: Keep the template's 4 core service cards and preset images intact. Seamlessly weave the new company name and operating location into service headings, descriptions, and FAQ items (in src/data/services.ts and throughout the site) so it feels completely local and customized.
7. REVIEWS / TESTIMONIALS: Generate 3 authentic, realistic Swedish customer reviews in Home.tsx localized to the company's operating city (with authentic Swedish names like Johan E., Karin M., Markus L.) and varied lengths matching their core services.
8. OWNER / FOUNDER SETUP (ONLY 1 PERSON): There is ONLY ONE person representing the company — the Owner/CEO. Update About.tsx with the Owner/CEO's name and title in the founder quote card (e.g. "[Name], VD och Grundare [Company Name]"), and update the single contact in CallModal.tsx and JSON-LD schema in index.html. In the About Us photo card, use the provided photo of the owner/team, OR the company logo if no photo is available. NEVER create or inject a 3-member team grid or placeholder craftsmen.
9. PROJECTS GALLERY (STRICTLY ONLY CLIENT'S REAL IMAGES - NEVER SERVICE/AI IMAGES):
   - EXCLUSIVELY CLIENT IMAGES: The homepage reference projects gallery (`portfolio` and `gallery` in `src/data/images.ts`) must contain ONLY the actual images provided by the client in Section 4.
   - EXACT ARRAY SIZING: If the user provides 4 images, `portfolio` and `gallery` in `src/data/images.ts` MUST contain EXACTLY 4 items. If 5 images are provided, contain EXACTLY 5 items. If 3 images are provided, contain EXACTLY 3 items. Do NOT keep 6 items if fewer were provided!
   - NEVER PAD WITH SERVICE/AI IMAGES: Under NO circumstances should the AI fill missing gallery slots with images from the service section (`/services/service-*.jpg`), template stock fallbacks, or AI-generated images.
   - CLEANUP UNUSED SLOTS: Completely remove any unused default slots (e.g. items 5 and 6 if only 4 were provided) from both `portfolio` and `gallery` in `src/data/images.ts`, and delete any unused old default files in `public/gallery/`.
   - TITLE & CATEGORY: For each provided image, generate an authentic, professional Swedish project title and category badge matching real electrical craftsmanship (e.g. "Belysningsdesign Villa", "Normcentral & Säkringsskåp", "Laddboxinstallation", "Stämningsbelysning").
   - IF SECTION 4 IS COMPLETELY EMPTY: Only if Section 4 has ZERO images provided (all fields left blank), keep the template's preset gallery. But whenever the user provides ANY images in Section 4, the gallery must display EXCLUSIVELY the user's provided images and nothing else.
10. CONTACT & STRUCTURED DATA: Update all click-to-call (tel:) and email (mailto:) links across Navbar, Hero, Contact Page, CallModal, and Footer. Update JSON-LD structured data (LocalBusiness schema) in index.html with the company name, city, phone, email, and logo URL.
11. SOCIAL & INSTAGRAM: If Instagram Post URLs are left blank below, hide the 3 embed cards and instead display a clean, modern "Follow us" banner.
12. CLEANUP: Remove any unused old logos, placeholder media, and unreferenced files from the project.
