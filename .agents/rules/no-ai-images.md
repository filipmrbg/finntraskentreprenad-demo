# Strict Rule: No AI Image Generation & Media Handling

When configuring, updating, or maintaining this website or running any onboarding prompt:

1. **NEVER use `generate_image` or generate synthetic images with AI under any circumstances.**
2. **About Us Section (Photo or Logo)**:
   - Use EITHER a real photo of the owner/founder/team ("en bild på dem") OR the company's logo ("eller deras logga").
   - If a photo of the person/team is provided, use it.
   - If no photo is available or if the logo is provided, set `images.about.hero.url` to `/logo.png`. The component automatically centers the logo with contain/padding on a sleek dark background.
   - NEVER generate synthetic AI photos of craftsmen/electricians, and NEVER keep competitor or previous company photos.
3. **Gallery / Projects Isolation**:
   - The reference projects gallery on the homepage (`portfolio` and `gallery` in `src/data/images.ts`) must contain **STRICTLY AND ONLY** the images provided by the client in Section 4.
   - If the user provides 3 images, the gallery must have exactly 3 images.
   - If the user provides 4 images, the gallery must have exactly 4 images.
   - If the user provides 5 images, the gallery must have exactly 5 images.
   - **NEVER pad or backfill the gallery** with service images (`/services/*`) or AI-generated photos.
   - Unused default gallery slots must be completely removed from `src/data/images.ts` and deleted from `public/gallery/`.
4. **Hero & Services**:
   - If Hero Video/Image URL is left blank, keep the template's existing background video/image.
   - Service card images in `src/data/images.ts` must always remain the template's curated photos (`/services/service-*.jpg`).
5. Python/PIL may only be used for cropping and removing background solid color from user-provided logo files (transparency processing), never for generating AI artwork or photos.
