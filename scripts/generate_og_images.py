#!/usr/bin/env python3
"""
Generate standard OpenGraph 1200x630 banner images for Finnträsk Entreprenad.
Supports both PIL (Pillow) and fallback via Python standard library + macOS sips.
"""
import os
import sys
import math
import struct
import subprocess

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
PUBLIC_DIR = os.path.join(PROJECT_DIR, "public")
LOGO_PATH = os.path.join(PUBLIC_DIR, "logo.png")
OUT_PNG = os.path.join(PUBLIC_DIR, "og-image.png")
OUT_JPG = os.path.join(PUBLIC_DIR, "og-image.jpg")

WIDTH = 1200
HEIGHT = 630
LOGO_TARGET_WIDTH = 680

# Dark Navy / Slate gradient background: #0B1120 to #0F1A34
# Subtle brand orange radial glow in center: #FF7900
BRAND_ORANGE = (255, 121, 0)
TOP_COLOR = (11, 17, 32)      # #0B1120
BOTTOM_COLOR = (15, 26, 52)   # #0F1A34

def generate_with_pil():
    from PIL import Image, ImageDraw, ImageFilter

    print("Generating OG banner using PIL / Pillow...")
    logo = Image.open(LOGO_PATH).convert("RGBA")
    
    # Proportional resize
    aspect = logo.height / logo.width
    new_h = int(LOGO_TARGET_WIDTH * aspect)
    logo_resized = logo.resize((LOGO_TARGET_WIDTH, new_h), Image.Resampling.LANCZOS)

    # Base canvas with vertical gradient
    base = Image.new("RGBA", (WIDTH, HEIGHT))
    for y in range(HEIGHT):
        ratio = y / (HEIGHT - 1)
        r = int(TOP_COLOR[0] * (1 - ratio) + BOTTOM_COLOR[0] * ratio)
        g = int(TOP_COLOR[1] * (1 - ratio) + BOTTOM_COLOR[1] * ratio)
        b = int(TOP_COLOR[2] * (1 - ratio) + BOTTOM_COLOR[2] * ratio)
        for x in range(WIDTH):
            base.putpixel((x, y), (r, g, b, 255))

    # Add soft radial brand glow in center
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    center_x, center_y = WIDTH // 2, HEIGHT // 2
    max_radius = 420
    
    for radius in range(max_radius, 0, -10):
        alpha = int(28 * (1 - (radius / max_radius) ** 1.5))
        if alpha > 0:
            glow_draw.ellipse(
                (center_x - radius, center_y - int(radius * 0.65),
                 center_x + radius, center_y + int(radius * 0.65)),
                fill=(BRAND_ORANGE[0], BRAND_ORANGE[1], BRAND_ORANGE[2], alpha)
            )

    glow = glow.filter(ImageFilter.GaussianBlur(radius=30))
    base.alpha_composite(glow)

    # Center the logo
    pos_x = (WIDTH - LOGO_TARGET_WIDTH) // 2
    pos_y = (HEIGHT - new_h) // 2
    base.alpha_composite(logo_resized, (pos_x, pos_y))

    # Save PNG
    rgb_img = base.convert("RGB")
    rgb_img.save(OUT_PNG, "PNG", optimize=True)
    print(f"Saved: {OUT_PNG}")

    # Save JPEG
    rgb_img.save(OUT_JPG, "JPEG", quality=95, optimize=True)
    print(f"Saved: {OUT_JPG}")

def generate_with_sips_python():
    print("Generating OG banner using Python standard library + macOS sips...")
    temp_logo_png = os.path.join(PUBLIC_DIR, "_temp_logo_resized.png")
    temp_logo_bmp = os.path.join(PUBLIC_DIR, "_temp_logo.bmp")
    temp_ppm = os.path.join(PUBLIC_DIR, "_temp_og.ppm")

    try:
        # 1. Resample logo with sips to exact target width
        subprocess.run([
            "sips", "--resampleWidth", str(LOGO_TARGET_WIDTH),
            LOGO_PATH, "--out", temp_logo_png
        ], check=True, stdout=subprocess.DEVNULL)

        # 2. Convert resampled logo to 32-bit BMP
        subprocess.run([
            "sips", "-s", "format", "bmp",
            temp_logo_png, "--out", temp_logo_bmp
        ], check=True, stdout=subprocess.DEVNULL)

        # 3. Read BMP pixels
        with open(temp_logo_bmp, "rb") as f:
            bmp_data = f.read()

        offset, = struct.unpack_from("<I", bmp_data, 10)
        lw, lh = struct.unpack_from("<ii", bmp_data, 18)
        is_top_down = lh < 0
        lh = abs(lh)
        
        logo_pixels = bmp_data[offset:]
        
        # 4. Generate 1200x630 canvas in memory
        center_x = WIDTH / 2.0
        center_y = HEIGHT / 2.0
        logo_x_start = (WIDTH - lw) // 2
        logo_y_start = (HEIGHT - lh) // 2
        
        glow_radius_x = 380.0
        glow_radius_y = 240.0
        glow_color = BRAND_ORANGE

        out_bytes = bytearray(WIDTH * HEIGHT * 3)

        for y in range(HEIGHT):
            # Vertical gradient: TOP_COLOR to BOTTOM_COLOR
            t = y / (HEIGHT - 1)
            bg_r = TOP_COLOR[0] * (1.0 - t) + BOTTOM_COLOR[0] * t
            bg_g = TOP_COLOR[1] * (1.0 - t) + BOTTOM_COLOR[1] * t
            bg_b = TOP_COLOR[2] * (1.0 - t) + BOTTOM_COLOR[2] * t

            dy = (y - center_y) / glow_radius_y
            dy_sq = dy * dy

            row_offset = y * WIDTH * 3

            for x in range(WIDTH):
                dx = (x - center_x) / glow_radius_x
                dist_sq = dx * dx + dy_sq

                # Soft radial brand glow
                if dist_sq < 1.0:
                    glow_intensity = (1.0 - math.sqrt(dist_sq)) ** 1.8 * 0.16
                    cur_r = bg_r * (1.0 - glow_intensity) + glow_color[0] * glow_intensity
                    cur_g = bg_g * (1.0 - glow_intensity) + glow_color[1] * glow_intensity
                    cur_b = bg_b * (1.0 - glow_intensity) + glow_color[2] * glow_intensity
                else:
                    cur_r, cur_g, cur_b = bg_r, bg_g, bg_b

                # Check if within logo bounds
                lx = x - logo_x_start
                ly = y - logo_y_start
                if 0 <= lx < lw and 0 <= ly < lh:
                    # In BMP top-down or bottom-up
                    bmp_y = ly if is_top_down else (lh - 1 - ly)
                    pix_idx = (bmp_y * lw + lx) * 4
                    b = logo_pixels[pix_idx]
                    g = logo_pixels[pix_idx + 1]
                    r = logo_pixels[pix_idx + 2]
                    a = logo_pixels[pix_idx + 3]

                    if a > 0:
                        alpha = a / 255.0
                        cur_r = cur_r * (1.0 - alpha) + r * alpha
                        cur_g = cur_g * (1.0 - alpha) + g * alpha
                        cur_b = cur_b * (1.0 - alpha) + b * alpha

                p_idx = row_offset + x * 3
                out_bytes[p_idx] = min(255, max(0, int(round(cur_r))))
                out_bytes[p_idx + 1] = min(255, max(0, int(round(cur_g))))
                out_bytes[p_idx + 2] = min(255, max(0, int(round(cur_b))))

        # 5. Write PPM file
        ppm_header = f"P6\n{WIDTH} {HEIGHT}\n255\n".encode("ascii")
        with open(temp_ppm, "wb") as f:
            f.write(ppm_header)
            f.write(out_bytes)

        # 6. Convert PPM to PNG and JPEG (quality 95) with sips
        subprocess.run([
            "sips", "-s", "format", "png",
            temp_ppm, "--out", OUT_PNG
        ], check=True, stdout=subprocess.DEVNULL)
        print(f"Saved: {OUT_PNG}")

        subprocess.run([
            "sips", "-s", "format", "jpeg",
            "-s", "formatOptions", "95",
            temp_ppm, "--out", OUT_JPG
        ], check=True, stdout=subprocess.DEVNULL)
        print(f"Saved: {OUT_JPG}")

    finally:
        for tmp in [temp_logo_png, temp_logo_bmp, temp_ppm]:
            if os.path.exists(tmp):
                try:
                    os.remove(tmp)
                except Exception:
                    pass

def generate_square_og():
    sq_w = 1080
    sq_h = 1080
    logo_w = 780
    out_sq_png = os.path.join(PUBLIC_DIR, "og-square.png")
    out_sq_jpg = os.path.join(PUBLIC_DIR, "og-square.jpg")

    temp_logo_png = os.path.join(PUBLIC_DIR, "_temp_sq_logo.png")
    temp_logo_bmp = os.path.join(PUBLIC_DIR, "_temp_sq_logo.bmp")
    temp_ppm = os.path.join(PUBLIC_DIR, "_temp_sq.ppm")

    try:
        subprocess.run([
            "sips", "--resampleWidth", str(logo_w),
            LOGO_PATH, "--out", temp_logo_png
        ], check=True, stdout=subprocess.DEVNULL)

        subprocess.run([
            "sips", "-s", "format", "bmp",
            temp_logo_png, "--out", temp_logo_bmp
        ], check=True, stdout=subprocess.DEVNULL)

        with open(temp_logo_bmp, "rb") as f:
            bmp_data = f.read()

        offset, = struct.unpack_from("<I", bmp_data, 10)
        lw, lh = struct.unpack_from("<ii", bmp_data, 18)
        is_top_down = lh < 0
        lh = abs(lh)
        logo_pixels = bmp_data[offset:]

        center_x = sq_w / 2.0
        center_y = sq_h / 2.0
        logo_x_start = (sq_w - lw) // 2
        logo_y_start = (sq_h - lh) // 2

        glow_radius = 460.0
        glow_color = BRAND_ORANGE

        out_bytes = bytearray(sq_w * sq_h * 3)

        for y in range(sq_h):
            t = y / (sq_h - 1)
            bg_r = TOP_COLOR[0] * (1.0 - t) + BOTTOM_COLOR[0] * t
            bg_g = TOP_COLOR[1] * (1.0 - t) + BOTTOM_COLOR[1] * t
            bg_b = TOP_COLOR[2] * (1.0 - t) + BOTTOM_COLOR[2] * t

            dy = (y - center_y) / glow_radius
            dy_sq = dy * dy
            row_offset = y * sq_w * 3

            for x in range(sq_w):
                dx = (x - center_x) / glow_radius
                dist_sq = dx * dx + dy_sq

                if dist_sq < 1.0:
                    glow_intensity = (1.0 - math.sqrt(dist_sq)) ** 1.8 * 0.18
                    cur_r = bg_r * (1.0 - glow_intensity) + glow_color[0] * glow_intensity
                    cur_g = bg_g * (1.0 - glow_intensity) + glow_color[1] * glow_intensity
                    cur_b = bg_b * (1.0 - glow_intensity) + glow_color[2] * glow_intensity
                else:
                    cur_r, cur_g, cur_b = bg_r, bg_g, bg_b

                lx = x - logo_x_start
                ly = y - logo_y_start
                if 0 <= lx < lw and 0 <= ly < lh:
                    bmp_y = ly if is_top_down else (lh - 1 - ly)
                    pix_idx = (bmp_y * lw + lx) * 4
                    b = logo_pixels[pix_idx]
                    g = logo_pixels[pix_idx + 1]
                    r = logo_pixels[pix_idx + 2]
                    a = logo_pixels[pix_idx + 3]

                    if a > 0:
                        alpha = a / 255.0
                        cur_r = cur_r * (1.0 - alpha) + r * alpha
                        cur_g = cur_g * (1.0 - alpha) + g * alpha
                        cur_b = cur_b * (1.0 - alpha) + b * alpha

                p_idx = row_offset + x * 3
                out_bytes[p_idx] = min(255, max(0, int(round(cur_r))))
                out_bytes[p_idx + 1] = min(255, max(0, int(round(cur_g))))
                out_bytes[p_idx + 2] = min(255, max(0, int(round(cur_b))))

        ppm_header = f"P6\n{sq_w} {sq_h}\n255\n".encode("ascii")
        with open(temp_ppm, "wb") as f:
            f.write(ppm_header)
            f.write(out_bytes)

        subprocess.run([
            "sips", "-s", "format", "png",
            temp_ppm, "--out", out_sq_png
        ], check=True, stdout=subprocess.DEVNULL)
        print(f"Saved: {out_sq_png}")

        subprocess.run([
            "sips", "-s", "format", "jpeg",
            "-s", "formatOptions", "95",
            temp_ppm, "--out", out_sq_jpg
        ], check=True, stdout=subprocess.DEVNULL)
        print(f"Saved: {out_sq_jpg}")

    finally:
        for tmp in [temp_logo_png, temp_logo_bmp, temp_ppm]:
            if os.path.exists(tmp):
                try:
                    os.remove(tmp)
                except Exception:
                    pass

def main():
    try:
        import PIL
        generate_with_pil()
    except ImportError:
        generate_with_sips_python()
    generate_square_og()

if __name__ == "__main__":
    main()
