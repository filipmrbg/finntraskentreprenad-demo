#!/usr/bin/env python3
"""
Generate standard OpenGraph cards and icons following the Tengene Glow Recipe
defined in PROMPT_LIBRARY.md and the onboarding-prompt skill.
"""
import os
import sys

# Ensure user site-packages are accessible even when run in standard python environments
for p in [
    os.path.expanduser('~/Library/Python/3.9/lib/python/site-packages'),
    os.path.expanduser('~/.local/lib/python3.9/site-packages'),
    '/Library/Python/3.9/site-packages',
    '/usr/local/lib/python3.9/site-packages',
]:
    if os.path.exists(p) and p not in sys.path:
        sys.path.insert(0, p)

from PIL import Image, ImageFilter
import numpy as np

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
PUBLIC_DIR = os.path.join(PROJECT_DIR, "public")
LOGO_PATH = os.path.join(PUBLIC_DIR, "logo.png")

# Target output files
OUT_OG_PNG = os.path.join(PUBLIC_DIR, "og-image.png")
OUT_OG_JPG = os.path.join(PUBLIC_DIR, "og-image.jpg")
OUT_SQ_PNG = os.path.join(PUBLIC_DIR, "og-square.png")
OUT_SQ_JPG = os.path.join(PUBLIC_DIR, "og-square.jpg")
OUT_FAVICON = os.path.join(PUBLIC_DIR, "favicon.png")
OUT_APPLE = os.path.join(PUBLIC_DIR, "apple-touch-icon.png")

# Sleek dark slate canvas: #0F172A
BG_COLOR = (15, 23, 42, 255)

def generate_banner():
    print(f"Generating 1200x630 OG banner from {LOGO_PATH}...")
    logo = Image.open(LOGO_PATH).convert("RGBA")
    W, H = 1200, 630

    # Scale proportionally: max 800 width or 420 height
    scale = min(800.0 / logo.width, 420.0 / logo.height)
    tw = int(round(logo.width * scale))
    th = int(round(logo.height * scale))
    logo_res = logo.resize((tw, th), Image.Resampling.LANCZOS)

    # 1.35x brightness/contrast boost for punchy mobile preview
    arr = np.array(logo_res).astype(float)
    arr[:, :, :3] = np.clip(arr[:, :, :3] * 1.35, 0, 255)
    logo_crisp = Image.fromarray(arr.astype(np.uint8))

    # Base canvas
    bg = Image.new("RGBA", (W, H), BG_COLOR)

    # Full canvas glow mask eliminates any rectangular box clipping
    pos_x = (W - tw) // 2
    pos_y = (H - th) // 2

    full_alpha = Image.new("L", (W, H), 0)
    full_alpha.paste(logo_res.split()[3], (pos_x, pos_y))
    glow_mask = full_alpha.filter(ImageFilter.GaussianBlur(radius=28))

    # Soft ambient halo glow (~60 opacity)
    glow_alpha = Image.fromarray((np.array(glow_mask).astype(float) * (60.0 / 255.0)).astype(np.uint8))
    glow_layer = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    glow_layer.putalpha(glow_alpha)

    # Composite glow and crisp logo
    bg = Image.alpha_composite(bg, glow_layer)
    bg.paste(logo_crisp, (pos_x, pos_y), logo_crisp)

    # Save PNG and JPEG (95 quality)
    bg.save(OUT_OG_PNG, "PNG", optimize=True)
    print(f"Saved: {OUT_OG_PNG}")

    bg.convert("RGB").save(OUT_OG_JPG, "JPEG", quality=95, optimize=True)
    print(f"Saved: {OUT_OG_JPG}")

def generate_square():
    print(f"Generating 1080x1080 square preview...")
    logo = Image.open(LOGO_PATH).convert("RGBA")
    SW, SH = 1080, 1080

    # Scale proportionally: max 720 width or 680 height
    sq_scale = min(720.0 / logo.width, 680.0 / logo.height)
    sq_w = int(round(logo.width * sq_scale))
    sq_h = int(round(logo.height * sq_scale))
    logo_sq = logo.resize((sq_w, sq_h), Image.Resampling.LANCZOS)

    arr_sq = np.array(logo_sq).astype(float)
    arr_sq[:, :, :3] = np.clip(arr_sq[:, :, :3] * 1.35, 0, 255)
    logo_sq_crisp = Image.fromarray(arr_sq.astype(np.uint8))

    bg_sq = Image.new("RGBA", (SW, SH), BG_COLOR)
    sq_pos_x = (SW - sq_w) // 2
    sq_pos_y = (SH - sq_h) // 2

    sq_full_alpha = Image.new("L", (SW, SH), 0)
    sq_full_alpha.paste(logo_sq.split()[3], (sq_pos_x, sq_pos_y))
    sq_glow_mask = sq_full_alpha.filter(ImageFilter.GaussianBlur(radius=32))

    sq_glow_alpha = Image.fromarray((np.array(sq_glow_mask).astype(float) * (60.0 / 255.0)).astype(np.uint8))
    sq_glow_layer = Image.new("RGBA", (SW, SH), (255, 255, 255, 255))
    sq_glow_layer.putalpha(sq_glow_alpha)

    bg_sq = Image.alpha_composite(bg_sq, sq_glow_layer)
    bg_sq.paste(logo_sq_crisp, (sq_pos_x, sq_pos_y), logo_sq_crisp)

    bg_sq.save(OUT_SQ_PNG, "PNG", optimize=True)
    print(f"Saved: {OUT_SQ_PNG}")

    bg_sq.convert("RGB").save(OUT_SQ_JPG, "JPEG", quality=95, optimize=True)
    print(f"Saved: {OUT_SQ_JPG}")

def generate_icons():
    print(f"Generating 512x512 app icons and favicon...")
    logo = Image.open(LOGO_PATH).convert("RGBA")
    S = 512

    icon_scale = min(360.0 / logo.width, 360.0 / logo.height)
    iw = int(round(logo.width * icon_scale))
    ih = int(round(logo.height * icon_scale))
    logo_icon = logo.resize((iw, ih), Image.Resampling.LANCZOS)

    arr_icon = np.array(logo_icon).astype(float)
    arr_icon[:, :, :3] = np.clip(arr_icon[:, :, :3] * 1.35, 0, 255)
    logo_icon_crisp = Image.fromarray(arr_icon.astype(np.uint8))

    bg_icon = Image.new("RGBA", (S, S), BG_COLOR)
    icon_pos_x = (S - iw) // 2
    icon_pos_y = (S - ih) // 2

    # Subtle icon glow
    icon_full_alpha = Image.new("L", (S, S), 0)
    icon_full_alpha.paste(logo_icon.split()[3], (icon_pos_x, icon_pos_y))
    icon_glow_mask = icon_full_alpha.filter(ImageFilter.GaussianBlur(radius=18))

    icon_glow_alpha = Image.fromarray((np.array(icon_glow_mask).astype(float) * (50.0 / 255.0)).astype(np.uint8))
    icon_glow_layer = Image.new("RGBA", (S, S), (255, 255, 255, 255))
    icon_glow_layer.putalpha(icon_glow_alpha)

    bg_icon = Image.alpha_composite(bg_icon, icon_glow_layer)
    bg_icon.paste(logo_icon_crisp, (icon_pos_x, icon_pos_y), logo_icon_crisp)

    bg_icon.save(OUT_FAVICON, "PNG", optimize=True)
    print(f"Saved: {OUT_FAVICON}")

    bg_icon.save(OUT_APPLE, "PNG", optimize=True)
    print(f"Saved: {OUT_APPLE}")

def main():
    generate_banner()
    generate_square()
    generate_icons()
    print("All Open Graph preview assets and icons generated successfully!")

if __name__ == "__main__":
    main()
