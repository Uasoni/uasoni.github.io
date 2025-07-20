#!/usr/bin/env python3
import re
import sys
from pathlib import Path

# ─── CONFIG ────────────────────────────────────────────────────────────────────
MD_ROOT      = Path('./_transfer/parser/')   # ← adjust this
IMG_BASE_URL = '/assets/images'
# ────────────────────────────────────────────────────────────────────────────────

NOTE_LINE_RE   = re.compile(r'\[!note\]', re.IGNORECASE)
# Capture obsidian ![[fname|width]] embeds
OBS_IMAGE_RE   = re.compile(r'!\[\[([^|\]]+)(?:\|(?:center\|)?(\d+))?\]\]', re.IGNORECASE)
INLINE_MATH_RE = re.compile(r'\$(?!\$)(.+?)(?<!\$)\$', re.DOTALL)
DISPLAY_SPLIT  = re.compile(r'(\$\$.+?\$\$)', re.DOTALL)
HEADING_RE     = re.compile(r'^(#{1,6}\s+.*)$')
# Match standard markdown image embeds as fallback
MD_IMAGE_RE    = re.compile(r'!\[([^]]*)\]\(([^)]+)\)')

def process_text(text: str) -> str:
    # 1) Remove any line with [!note]
    lines = [line for line in text.splitlines() if not NOTE_LINE_RE.search(line)]
    text = "\n".join(lines)

    # 2) Convert Obsidian embeds directly to centered HTML with optional width
    def obs_to_html(m):
        fname, width = m.group(1), m.group(2)
        url = f"{IMG_BASE_URL}/{fname}"
        w_attr = f' width="{width}px"' if width else ''
        return (
            f"\n<div style=\"text-align:center\">\n"
            f"  <img src=\"{url}\" alt=\"{fname}\"{w_attr} />\n"
            f"</div>\n"
        )
    text = OBS_IMAGE_RE.sub(obs_to_html, text)

    # 3) Split on display-math, wrap display blocks in div
    parts = DISPLAY_SPLIT.split(text)
    out = []
    for part in parts:
        if part.startswith('$$') and part.endswith('$$'):
            out.append(f"\n<div>\n{part}\n</div>\n")
        else:
            out.append(INLINE_MATH_RE.sub(lambda m: f'<span class="inline-math">{m.group(0)}</span>', part))
    result = "".join(out).strip('\n') + "\n"

    # 4) Ensure blank lines around headings
    lines = result.splitlines()
    new_lines = []
    for i, line in enumerate(lines):
        if HEADING_RE.match(line):
            if new_lines and new_lines[-1] != '':
                new_lines.append('')
            new_lines.append(line)
            if i + 1 < len(lines) and lines[i+1] != '':
                new_lines.append('')
        else:
            new_lines.append(line)
    result = "\n".join(new_lines) + "\n"

    # 5) Fallback: wrap any remaining markdown image embeds as centered HTML
    lines = result.splitlines()
    wrapped = []
    for i, line in enumerate(lines):
        m = MD_IMAGE_RE.match(line.strip())
        if m:
            alt, url = m.group(1), m.group(2)
            if wrapped and wrapped[-1] != '':
                wrapped.append('')
            wrapped.append('<div style="text-align:center">')
            wrapped.append(f'  <img src="{url}" alt="{alt}" />')
            wrapped.append('</div>')
            if i + 1 < len(lines) and lines[i+1] != '':
                wrapped.append('')
        else:
            wrapped.append(line)
    return "\n".join(wrapped) + "\n"

def main():
    md_files = list(MD_ROOT.rglob('*.md'))
    if not md_files:
        print(f"No markdown files found under {MD_ROOT}", file=sys.stderr)
        sys.exit(1)

    for p in md_files:
        orig    = p.read_text(encoding='utf-8')
        updated = process_text(orig)
        if updated != orig:
            p.write_text(updated, encoding='utf-8')
            print(f"✓ Updated {p.relative_to(MD_ROOT)}")
        else:
            print(f"— No changes in {p.relative_to(MD_ROOT)}")

if __name__ == '__main__':
    main()