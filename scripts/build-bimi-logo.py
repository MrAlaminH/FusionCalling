#!/usr/bin/env python3
"""Build public/logo.svg (BIMI SVG-Tiny-PS) by tracing public/logo.webp.

BIMI SVG requirements (https://bimigroup.org/creating-bimi-svg/):
baseProfile="tiny-ps", version="1.2", one <title>, square viewBox, centered
content, no external refs / scripts / animation / text / raster, < 32 KB.

Usage: pip install vtracer pillow && python3 scripts/build-bimi-logo.py
"""
import colorsys
import re
import subprocess
import sys
import tempfile
from pathlib import Path

import vtracer
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "logo.webp"
OUT = ROOT / "public" / "logo.svg"
MAX_BYTES = 32 * 1024
FILL_MARGIN = 0.92  # content occupies ~92% of the square (safe for circle crops)


def build_masks(im):
    """Split into emblem (gradient) and dark (ring + slash) binary masks."""
    emblem = Image.new("L", im.size, 0)
    dark = Image.new("L", im.size, 0)
    e, d = emblem.load(), dark.load()
    bbox = [im.width, im.height, 0, 0]
    for y in range(im.height):
        for x in range(im.width):
            r, g, b, a = im.getpixel((x, y))
            if a < 128:
                continue
            _, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
            if s > 0.3 and v > 0.3:
                e[x, y] = 255
            elif 8 <= r <= 140 and abs(r - g) < 20 and abs(g - b) < 20:
                d[x, y] = 255
            bbox[0] = min(bbox[0], x); bbox[1] = min(bbox[1], y)
            bbox[2] = max(bbox[2], x); bbox[3] = max(bbox[3], y)
    return emblem, dark, bbox


def trace(mask):
    """Trace a binary mask to SVG path data, merged into one `d` string.

    Masks are saved black-on-white: vtracer binary mode treats dark pixels
    as the foreground.
    """
    inverted = mask.point(lambda p: 255 - p)
    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as f:
        inverted.save(f.name)
        tmp_svg = f.name + ".svg"
    vtracer.convert_image_to_svg_py(
        f.name, tmp_svg, colormode="binary", mode="spline",
        filter_speckle=2, path_precision=2,
    )
    paths = re.findall(
        r'<path d="([^"]+)"[^>]*?(?:transform="translate\(([-\d.]+),([-\d.]+)\)"[^>]*?)?/?>',
        Path(tmp_svg).read_text(),
    )
    Path(tmp_svg).unlink()
    # vtracer rebases each shape to its local origin + translate(x,y); keep both
    return [
        (d, f' transform="translate({tx},{ty})"' if tx else "")
        for d, tx, ty in paths
    ]


def gradient_stops(im, bbox, n=9):
    """Sample peak (stroke-interior) emblem colour per horizontal band.

    Peaks instead of averages: anti-aliased edges mute averages. The mark's
    gradient is linear, so band peaks should fall on one ramp — validated
    against the midpoint stop below.
    """
    stops = []
    x0, y0, x1, y1 = bbox
    for i in range(n):
        t = i / (n - 1)
        ys, ye = int(y0 + t * (y1 - y0)), int(y0 + (i + 1) / n * (y1 - y0))
        best = None
        for y in range(ys, max(ys + 1, ye)):
            for x in range(x0, x1, 2):
                r, g, b, a = im.getpixel((x, y))
                if a > 200:
                    _, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
                    if s > 0.5 and v > 0.5 and (best is None or v > best[0]):
                        best = (v, r, g, b)
        if best:
            stops.append((t, best[1], best[2], best[3]))
    # self-check: the ramp must be linear — midpoint within 6/255 per channel
    first, mid, last = stops[0], stops[len(stops) // 2], stops[-1]
    for c in range(1, 4):
        linear = first[c] + (last[c] - first[c]) * (mid[0] - first[0]) / (last[0] - first[0])
        assert abs(mid[c] - linear) <= 6, f"gradient not linear at channel {c}"
    return [stops[0], stops[-1]]


def render_preview(svg_bytes, out_png):
    """Rasterise the SVG for visual check (QuickLook on macOS)."""
    with tempfile.NamedTemporaryFile(suffix=".svg", delete=False) as f:
        f.write(svg_bytes)
        svg_path = f.name
    subprocess.run(
        ["qlmanage", "-t", "-s", "1024", "-o", str(Path(out_png).parent), svg_path],
        capture_output=True, check=True,
    )
    Path(out_png).parent.joinpath(Path(svg_path).name + ".png").rename(out_png)


def validate(svg, size):
    root = re.search(r"<svg\b[^>]*>", svg).group(0)
    assert 'baseProfile="tiny-ps"' in root, "missing baseProfile"
    assert 'version="1.2"' in root, "missing version"
    vb = [float(v) for v in re.search(r'viewBox="([^"]+)"', root).group(1).split()]
    assert vb[2] == vb[3], f"viewBox not square: {vb}"
    assert len(re.findall(r"<title>", svg)) == 1, "must have exactly one <title>"
    assert size < MAX_BYTES, f"file is {size} bytes, BIMI limit is {MAX_BYTES}"
    forbidden = re.findall(r"<(script|animate|image|text|foreignObject|use)\b", svg)
    assert not forbidden, f"forbidden elements: {forbidden}"
    hrefs = re.findall(r'href="([^"]+)"', svg)
    assert all(h.startswith("#") for h in hrefs), f"external refs: {hrefs}"


def main():
    im = Image.open(SRC).convert("RGBA")
    emblem, dark, bbox = build_masks(im)
    print(f"tracing… content bbox {bbox}")
    emblem_d, dark_d = trace(emblem), trace(dark)

    # square viewBox centred on content, paths keep original coords
    x0, y0, x1, y1 = bbox
    side = round(max(x1 - x0, y1 - y0) / FILL_MARGIN, 2)
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    vx, vy = round(cx - side / 2, 1), round(cy - side / 2, 1)

    stops = gradient_stops(im, bbox)
    print("gradient stops:", [(f"{t:.2f}", f"#{r:02x}{g:02x}{b:02x}") for t, r, g, b in stops])
    y_top, y_bot = y0, y1
    stop_els = [
        f'      <stop offset="{round((y0 + t * (y1 - y0) - y_top) / (y_bot - y_top), 3):g}" '
        f'stop-color="#{r:02x}{g:02x}{b:02x}"/>'
        for t, r, g, b in stops
    ]

    def layer(dxf, fill):
        inner = "".join(f'\n    <path d="{d}"{t}/>' for d, t in dxf)
        return f'  <g fill="{fill}">{inner}\n  </g>'

    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" width="512" height="512" viewBox="{vx} {vy} {side} {side}">
  <title>Fusion Calling</title>
  <defs>
    <linearGradient id="fc" gradientUnits="userSpaceOnUse" x1="{cx}" y1="{y_top}" x2="{cx}" y2="{y_bot}">
{chr(10).join(stop_els)}
    </linearGradient>
  </defs>
{layer(dark_d, "#2e2e2e")}
{layer(emblem_d, "url(#fc)")}
</svg>
'''
    data = svg.encode()
    validate(svg, len(data))
    OUT.write_bytes(data)
    print(f"wrote {OUT} ({len(data)} bytes, {len(data) / 1024:.1f} KB)")

    render_preview(data, ROOT / "research" / "bimi-preview.png")


if __name__ == "__main__":
    sys.exit(main())
