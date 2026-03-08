from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"
OG_DIR = PUBLIC_DIR / "og"
SOCIAL_DIR = PUBLIC_DIR / "social"
WIDTH = 1200
HEIGHT = 630
LINKEDIN_WIDTH = 1584
LINKEDIN_HEIGHT = 396

BG = "#141218"
PURPLE = "#7b4fd4"
PURPLE_LIGHT = "#9b72e8"
SOFT = "#b3afc4"
MUTED = "#88849a"
WHITE = "#f0eee9"
GOLD = "#e8c97a"
BLUSH = "#e79b8a"
NAVY = "#17173d"
BORDER = (123, 79, 212, 72)

GEORGIA = "/System/Library/Fonts/Supplemental/Georgia.ttf"
GEORGIA_BOLD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
ARIAL = "/Library/Fonts/Arial Unicode.ttf"


PAGES = [
    {
        "title": "Behavioral Trust\nUnder Pressure",
        "subtitle": "Independent behavioral safety validation for human-facing AI systems.",
        "chips": ["Home", "Independent validation", "Human-facing AI"],
        "title_size": 66,
        "output": ["ikwe-og.png", "og/home.png"],
    },
    {
        "title": "Recognition Is\nNot Safety",
        "subtitle": "An AI can sound empathetic and still cause harm.",
        "chips": ["Research note", "Behavioral risk", "Independent validation"],
        "title_size": 68,
        "output": ["og/problem.png"],
    },
    {
        "title": "What AI\nGovernance Misses",
        "subtitle": "Behavioral safety is the missing operational layer.",
        "chips": ["Governance gap", "Operational evidence", "Human-facing AI"],
        "title_size": 66,
        "output": ["og/governance-gap.png"],
    },
    {
        "title": "Research\nsummary",
        "subtitle": "Public benchmark framing, findings, and methodology context for stakeholder alignment.",
        "chips": ["Research", "Benchmark context", "Public findings"],
        "title_size": 72,
        "output": ["og/research.png"],
    },
    {
        "title": "Eight Dimensions.\nOne Clear Answer.",
        "subtitle": "Behavioral safety testing under emotional stress.",
        "chips": ["EQ Safety Benchmark", "Safety Gate", "8 dimensions"],
        "title_size": 60,
        "output": ["og/benchmark.png"],
    },
    {
        "title": "Audit &\nvalidation",
        "subtitle": "Outside review, fix planning, and ongoing monitoring for systems already headed to real users.",
        "chips": ["Audit", "Sample outputs", "Decision support"],
        "title_size": 72,
        "output": ["og/audit.png"],
    },
    {
        "title": "Know Where Your\nSystem Stands",
        "subtitle": "Get a third-party baseline before launch risk becomes board risk.",
        "chips": ["Trust", "Third-party baseline", "Launch readiness"],
        "title_size": 62,
        "output": ["og/trust.png"],
    },
    {
        "title": "Request\nan evaluation",
        "subtitle": "Share deployment context, timeline, and stakeholders so scope can be sized correctly.",
        "chips": ["Intake", "Fast scoping", "Direct next step"],
        "title_size": 70,
        "output": ["og/intake.png"],
    },
]


def load_font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


FONT_SUBTITLE = load_font(ARIAL, 24)
FONT_KICKER = load_font(ARIAL, 18)
FONT_CHIP = load_font(ARIAL, 18)
FONT_FOOT = load_font(ARIAL, 16)


def hex_to_rgba(value: str, alpha: int = 255) -> tuple[int, int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4)) + (alpha,)


def add_radial_glow(base: Image.Image, box: tuple[int, int, int, int], color: str, blur: int) -> None:
    glow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(glow)
    draw.ellipse(box, fill=hex_to_rgba(color, 135))
    glow = glow.filter(ImageFilter.GaussianBlur(blur))
    base.alpha_composite(glow)


def add_starfield(base: Image.Image) -> None:
    stars = [
        (120, 70, 3, (255, 255, 255, 100)),
        (260, 140, 2, (255, 255, 255, 85)),
        (920, 90, 3, (255, 255, 255, 75)),
        (1080, 170, 2, (255, 255, 255, 80)),
        (180, 430, 2, (255, 255, 255, 70)),
        (840, 500, 3, (155, 114, 232, 110)),
        (980, 420, 2, (255, 255, 255, 55)),
        (720, 180, 2, (155, 114, 232, 100)),
        (1030, 540, 2, (255, 255, 255, 70)),
        (480, 540, 2, (255, 255, 255, 60)),
    ]
    draw = ImageDraw.Draw(base)
    for x, y, r, color in stars:
        draw.ellipse((x - r, y - r, x + r, y + r), fill=color)


def draw_brand_mark(base: Image.Image, cx: int, cy: int, radius: int) -> None:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    bounds = (cx - radius, cy - radius, cx + radius, cy + radius)
    draw.pieslice(bounds, start=0, end=90, fill=hex_to_rgba(GOLD))
    draw.pieslice(bounds, start=90, end=180, fill=hex_to_rgba(PURPLE_LIGHT))
    draw.pieslice(bounds, start=180, end=270, fill=hex_to_rgba(NAVY))
    draw.pieslice(bounds, start=270, end=360, fill=hex_to_rgba(BLUSH))
    draw.ellipse((cx - radius - 6, cy - radius - 6, cx + radius + 6, cy + radius + 6), outline=(230, 228, 237, 45), width=6)
    base.alpha_composite(layer)


def wrap_lines(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    lines: list[str] = []
    for raw_line in text.split("\n"):
        words = raw_line.split()
        if not words:
            lines.append("")
            continue
        current = words[0]
        for word in words[1:]:
            candidate = f"{current} {word}"
            width = draw.textbbox((0, 0), candidate, font=font)[2]
            if width <= max_width:
                current = candidate
            else:
                lines.append(current)
                current = word
        lines.append(current)
    return lines


def draw_multiline(
    draw: ImageDraw.ImageDraw,
    origin: tuple[int, int],
    text: str,
    font: ImageFont.FreeTypeFont,
    fill: str,
    spacing: int,
    max_width: int,
) -> int:
    x, y = origin
    lines = wrap_lines(draw, text, font, max_width)
    for line in lines:
        draw.text((x, y), line, font=font, fill=fill)
        bbox = draw.textbbox((x, y), line, font=font)
        y = bbox[3] + spacing
    return y


def chip_width(draw: ImageDraw.ImageDraw, label: str) -> int:
    bbox = draw.textbbox((0, 0), label, font=FONT_CHIP)
    return (bbox[2] - bbox[0]) + 44


def draw_chip(draw: ImageDraw.ImageDraw, x: int, y: int, label: str) -> int:
    width = chip_width(draw, label)
    draw.rounded_rectangle((x, y, x + width, y + 42), radius=21, fill=(123, 79, 212, 28), outline=BORDER, width=1)
    draw.text((x + 22, y + 10), label, font=FONT_CHIP, fill=SOFT)
    return x + width + 12


def build_page(page: dict[str, object]) -> None:
    image = Image.new("RGBA", (WIDTH, HEIGHT), BG)
    title_font = load_font(GEORGIA_BOLD, int(page["title_size"]))  # type: ignore[arg-type]

    add_radial_glow(image, (-160, -220, 560, 340), PURPLE, 120)
    add_radial_glow(image, (720, -120, 1350, 300), "#4c2c86", 100)
    add_radial_glow(image, (830, 220, 1320, 720), "#1d274f", 120)
    add_starfield(image)

    atmosphere = Image.new("RGBA", image.size, (0, 0, 0, 0))
    atmosphere_draw = ImageDraw.Draw(atmosphere)
    atmosphere_draw.ellipse((530, -120, 1330, 700), fill=(12, 14, 32, 120))
    atmosphere_draw.ellipse((-120, -140, 760, 640), fill=(34, 24, 58, 72))
    image.alpha_composite(atmosphere)

    draw_brand_mark(image, 943, 314, 110)

    draw = ImageDraw.Draw(image)
    draw.text((96, 84), "IKWE.AI", font=FONT_KICKER, fill=PURPLE_LIGHT)

    y = draw_multiline(draw, (96, 126), str(page["title"]), title_font, WHITE, 8, 560)
    y = draw_multiline(draw, (96, y + 10), str(page["subtitle"]), FONT_SUBTITLE, SOFT, 8, 560)

    chip_x = 96
    chip_y = min(y + 24, 470)
    for label in page["chips"]:  # type: ignore[index]
        chip_x = draw_chip(draw, chip_x, chip_y, str(label))

    footer_y = 548
    draw.text((96, footer_y), "Independent validation for human-facing AI", font=FONT_FOOT, fill=MUTED)
    draw.text((96, footer_y + 22), "ikwe.ai", font=FONT_FOOT, fill=PURPLE_LIGHT)

    line_layer = Image.new("RGBA", image.size, (0, 0, 0, 0))
    line_draw = ImageDraw.Draw(line_layer)
    line_draw.rounded_rectangle((750, 468, 1110, 472), radius=2, fill=(123, 79, 212, 120))
    line_draw.rounded_rectangle((750, 468, 960, 472), radius=2, fill=(232, 201, 122, 180))
    line_draw.rounded_rectangle((750, 506, 1110, 510), radius=2, fill=(123, 79, 212, 70))
    line_draw.rounded_rectangle((750, 506, 1030, 510), radius=2, fill=(155, 114, 232, 180))
    image.alpha_composite(line_layer)

    rgb = Image.new("RGB", image.size, BG)
    rgb.paste(image, mask=image.split()[3])

    for relative in page["output"]:  # type: ignore[index]
        target = PUBLIC_DIR / str(relative)
        target.parent.mkdir(parents=True, exist_ok=True)
        rgb.save(target, format="PNG", optimize=True)


def build_linkedin_home_banner() -> None:
    image = Image.new("RGBA", (LINKEDIN_WIDTH, LINKEDIN_HEIGHT), BG)
    title_font = load_font(GEORGIA_BOLD, 70)
    subtitle_font = load_font(ARIAL, 24)
    foot_font = load_font(ARIAL, 19)
    chip_font = load_font(ARIAL, 18)
    kicker_font = load_font(ARIAL, 20)

    add_radial_glow(image, (-220, -180, 820, 520), PURPLE, 140)
    add_radial_glow(image, (1040, -160, 1760, 340), "#4c2c86", 110)
    add_radial_glow(image, (1120, 120, 1820, 560), "#1d274f", 130)
    add_starfield(image)

    atmosphere = Image.new("RGBA", image.size, (0, 0, 0, 0))
    atmosphere_draw = ImageDraw.Draw(atmosphere)
    atmosphere_draw.ellipse((700, -200, 1720, 560), fill=(12, 14, 32, 110))
    atmosphere_draw.ellipse((-180, -220, 980, 620), fill=(34, 24, 58, 68))
    image.alpha_composite(atmosphere)

    draw_brand_mark(image, 1270, 198, 112)

    draw = ImageDraw.Draw(image)
    draw.text((110, 56), "IKWE.AI", font=kicker_font, fill=PURPLE_LIGHT)

    y = draw_multiline(draw, (110, 84), "Behavioral Trust Under Pressure", title_font, WHITE, 8, 820)
    y = draw_multiline(
        draw,
        (110, y + 2),
        "Independent behavioral safety validation for human-facing AI systems.",
        subtitle_font,
        SOFT,
        8,
        920,
    )

    chip_y = y + 10
    chip_specs = [
        ("Independent validation", 238),
        ("Human-facing AI", 186),
    ]
    chip_x = 110
    for label, width in chip_specs:
        draw.rounded_rectangle((chip_x, chip_y, chip_x + width, chip_y + 38), radius=19, fill=(123, 79, 212, 28), outline=BORDER, width=1)
        draw.text((chip_x + 18, chip_y + 9), label, font=chip_font, fill=SOFT)
        chip_x += width + 14

    footer_y = 354
    draw.text((110, footer_y), "ikwe.ai", font=foot_font, fill=PURPLE_LIGHT)

    line_layer = Image.new("RGBA", image.size, (0, 0, 0, 0))
    line_draw = ImageDraw.Draw(line_layer)
    line_draw.rounded_rectangle((1096, 292, 1470, 296), radius=2, fill=(123, 79, 212, 118))
    line_draw.rounded_rectangle((1096, 292, 1302, 296), radius=2, fill=(232, 201, 122, 180))
    line_draw.rounded_rectangle((1096, 324, 1470, 328), radius=2, fill=(123, 79, 212, 76))
    line_draw.rounded_rectangle((1096, 324, 1392, 328), radius=2, fill=(155, 114, 232, 180))
    image.alpha_composite(line_layer)

    rgb = Image.new("RGB", image.size, BG)
    rgb.paste(image, mask=image.split()[3])

    target = SOCIAL_DIR / "linkedin-home.png"
    target.parent.mkdir(parents=True, exist_ok=True)
    rgb.save(target, format="PNG", optimize=True)


def main() -> None:
    OG_DIR.mkdir(parents=True, exist_ok=True)
    SOCIAL_DIR.mkdir(parents=True, exist_ok=True)
    for page in PAGES:
        build_page(page)
    build_linkedin_home_banner()


if __name__ == "__main__":
    main()
