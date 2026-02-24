# Emaar — Design & Style Guide

## Fonts

### Primary (UI / Body) — Inter
- Weight 300: light text, captions
- Weight 400: body text, paragraphs
- Weight 700: bold labels, buttons
- Applied globally to every element

### Display (Headings) — Optima
- Weight 400: standard heading
- Weight 500: medium heading
- Weight 700: bold heading
- Italic variant available
- Used exclusively for section titles and card headings
- Always `UPPERCASE`

### Font Stack
```
Body:    "Inter", "Arial", system-ui, sans-serif
Display: "Optima", "Inter", system-ui, sans-serif
```

---

## Color Palette

### Brand
| Token | Hex | Usage |
|---|---|---|
| Primary | `#071c35` | Backgrounds, buttons, headings, footer |
| White | `#ffffff` | Text on dark, card backgrounds, button text |

### Surface & Text
| Token | Hex | Usage |
|---|---|---|
| Background | `#ffffff` | Page background |
| Foreground | `#0a0a0a` | Default text |
| Secondary | `#f5f5f5` | Card backgrounds, muted surfaces |
| Muted foreground | `#737373` | Placeholder, dimmed text |
| Border | `#e5e5e5` | Dividers, input borders |

### Gray Scale (Tailwind)
| Token | Hex |
|---|---|
| gray-50 | `#f9fafb` |
| gray-200 | `#e5e7eb` |
| gray-300 | `#d1d5dc` |
| gray-400 | `#99a1af` |
| gray-500 | `#6a7282` |
| gray-600 | `#4a5565` |
| gray-700 | `#364153` |
| gray-800 | `#1e2939` |
| gray-900 | `#101828` |

### Semantic
| Token | Hex | Usage |
|---|---|---|
| Destructive | `#e40014` | Errors, alerts |
| Ring | `#a1a1a1` | Focus rings |

### Chart Accent Colors
| Hex | |
|---|---|
| `#f05100` | Orange |
| `#009588` | Teal |
| `#104e64` | Deep blue |
| `#fcbb00` | Yellow |
| `#f99c00` | Amber |

---

## Typography

### Section Heading (`.section-heading`)
```
font-family: Optima
font-size: 1.875rem (mobile) → 3rem (desktop)  [text-3xl → text-5xl]
line-height: 1.05
text-transform: uppercase
text-balance: yes
```

### Hero Heading
```
font-family: Optima
font-size: 2.25rem (mobile) → 3.75rem (desktop)  [text-4xl → text-6xl]
line-height: 1.05
text-transform: uppercase
color: #ffffff
```

### Kicker Label
```
font-family: Inter
font-size: 11px
font-weight: 600
text-transform: uppercase
letter-spacing: 0.18em
color: #4a5565 (gray-600) on light / rgba(255,255,255,0.4) on dark
```
Followed by a horizontal rule: `1px height, 64px → 112px width, same color`

### Body / Paragraph
```
font-family: Inter
font-size: 1rem → 1.125rem  [text-base → text-lg]
line-height: 1.625  [leading-relaxed]
color: #4a5565  [text-gray-600]
```

### Navigation Links
```
font-family: Inter
font-size: 11px
font-weight: 600
text-transform: uppercase
letter-spacing: 0.18em
```
Hover effect: animated underline that scales in from left (`scaleX 0 → 1`, 300ms ease-out)

### Card / Expertise Title
```
font-family: Optima
font-size: 1.125rem → 1.25rem  [text-lg → text-xl]
text-transform: uppercase
letter-spacing: tight
color: #071c35
```

### Footer Category Heading
```
font-size: 11px
font-weight: 600
text-transform: uppercase
letter-spacing: 0.18em
color: rgba(255,255,255,0.4)
```

### Footer Body / Links
```
font-size: 0.875rem  [text-sm]
font-weight: 400
color: rgba(255,255,255,0.7) → rgba(255,255,255,1) on hover
```

### Legal / Copyright
```
font-size: 0.75rem  [text-xs]
color: rgba(255,255,255,0.4)
```

---

## Spacing & Layout

### Content Container
```
max-width: 1294px
padding: 1rem (mobile) → 1.5rem (tablet) → 2rem (desktop)
         [px-4 sm:px-6 lg:px-8]
centered: margin auto
```

### Section Padding (vertical)
```
py-12  (3rem)   — mobile
py-14  (3.5rem) — sm
py-18  (4.5rem) — lg
```

### Grid
- 12-column grid (`lg:grid-cols-12`)
- Content split: 5 cols text + 7 cols image (two-column sections)
- Cards: 2 cols mobile → 3 cols desktop

### Scroll offset
```
scroll-margin-top: 6rem  [scroll-mt-24]
```

---

## Border Radius

| Name | Value | Usage |
|---|---|---|
| `rounded-xs` | `0.125rem` (2px) | Buttons, cards, images |
| `rounded-sm` | ~0.375rem | Minor UI elements |
| `rounded-md` | ~0.5rem | Modals, panels |
| `rounded-lg` | `0.625rem` | Larger containers |
| `rounded-full` | `9999px` | Icon circles, social links |

> The dominant radius is `rounded-xs` — sharp, almost flat corners. This gives the design its premium, architectural feel.

---

## Buttons

### Base
```
font-size: 0.75rem  [text-xs]
text-transform: uppercase
letter-spacing: 0.1em  [tracking-widest]
border: 2px solid primary (#071c35)
border-radius: 0.125rem  [rounded-xs]
padding: 0.75rem 0.875rem  [py-3 px-3.5]
cursor: pointer
transition: all
```

### Variants

**ctaSolid** — Primary action
```
background: #071c35
color: #ffffff
border-color: #071c35
font-weight: 700
```

**ctaOutline** — Secondary action / hero CTA
```
background: #ffffff
color: #071c35
border-color: #071c35
font-weight: 700
hover: bg-white/95
```

**ghost** — Tertiary
```
background: transparent
color: #071c35
hover: bg-gray-50
```

**link** — Inline text action
```
no border, no padding
font-weight: 600
underline on hover
normal casing
```

---

## Header

### Transparent state (over hero)
```
position: fixed, top 0, full width
background: transparent
text/icons: white
logo: inverted to white
```

### Scrolled state
```
background: rgba(255,255,255,0.95) + backdrop-blur
box-shadow: 0 14px 40px -28px rgba(9,27,54,0.45)
text/icons: #071c35
logo: original color
transition: background-color, box-shadow, backdrop-filter — 300ms
```

### Height
```
padding: py-3 (0.75rem top/bottom)
nav links: gap-14 between items
```

---

## Hero Section

```
height: 100svh / 100dvh
background: #000000 (with full-cover video overlay)
overlay: bg-black/50 (rgba(0,0,0,0.5))
text: white / white/80 for subtitle
margin-top: -6rem (pulls under fixed header, pt-24 compensates)
```

---

## Cards

### Expertise Card
```
background: #ffffff
border-radius: rounded-xs
padding: p-4 → p-6 → p-8 (mobile → sm → lg)
icon container: 40px–48px circle, bg-primary, white icon
transition: transform + background-color, 200ms
```

### Service Card
```
background: #f9fafb  [bg-gray-50]
border-radius: rounded-xs
padding: p-4 → p-6 → p-8
layout: flex column, stretched to fill
```

---

## Dividers

```
height: 1px
color: #e5e5e5 on white background
color: rgba(255,255,255,0.1) on dark background
color: rgba(255,255,255,0.15) on header (transparent)
```

---

## Icons

- Library: **Lucide React**
- Size: `h-5 w-5` (20px) standard, `h-6 w-6` (24px) larger
- Color: inherits or explicit `text-white` / `text-primary`
- Social icon circles: `h-10 w-10`, rounded-full, border border-white/15, text-white/60

---

## Image Treatments

- Fit: `object-cover` for all hero/section images
- Aspect ratio: `aspect-[4/3]` mobile → `aspect-[16/10]` sm → fixed height `450px` desktop
- Border radius: `rounded-xs`
- Grayscale icons/awards: `grayscale brightness-0`

---

## Motion & Animation

### Marquee
```
animation: translateX(0) → translateX(-50%), linear, infinite
duration: CSS variable --marquee-duration (default 28s)
pauses on hover
```

### Mobile menu slide
```
slide-in-from-left: translateX(-100%) → 0, 0.4s, cubic-bezier(0.32, 0.72, 0, 1)
slide-out-to-left: translateX(0) → -100%, 0.35s, cubic-bezier(0.32, 0.72, 0, 1)
```

### Nav underline
```
transform: scaleX(0) → scaleX(1)
origin: left
duration: 300ms
easing: ease-out
```

### Header transition
```
properties: background-color, box-shadow, backdrop-filter
duration: 300ms
```

---

## Footer

```
background: #071c35  [bg-primary]
color: white
padding: py-16 → py-20 → py-24
grid: 12 columns — 4 cols brand + 5 cols links + 3 cols CTA
bottom bar: border-top rgba(255,255,255,0.1), py-8
```

---

## Presentation Usage Notes

- **Dark navy `#071c35`** is the signature color — use for backgrounds, headings, and primary buttons.
- **White space** is essential — sections breathe with generous padding.
- **Optima** only for titles, always UPPERCASE. Never use it for body or UI copy.
- **Inter** for everything else — light (300) for captions, regular (400) for body, bold (700) for buttons.
- **Buttons are always uppercase, tiny tracking-widest text** — never sentence case.
- **Border radius is intentionally minimal (`2px`)** — sharp, not rounded.
- **Kicker labels always come before section titles** — 11px uppercase + trailing horizontal rule.
- **Color usage is near-binary**: dark navy on white, or white on dark navy. Grays are only secondary.
