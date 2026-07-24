---
version: alpha
name: "Qatchup Light"
description: "Qatchup is a user-feedback and product-listening SaaS with a light, airy marketing site. The design pairs a custom geometric sans (Aspekta) for body and UI copy with a cursive script face (Fasthand) for emotive hero labels, creating a warm-yet-structured personality. The palette is near-monochrome. near-black (#080808/#26272b) on off-white (#fafafa/#ffffff). with a vivid orange (#ff7429) as the sole brand accent. Pill-shaped buttons (border-radius: 100px) and fully rounded decorative elements dominate the radius language. Elevation is achieved through a multi-layer subtle shadow system rather than color fills. Playful hand-drawn illustrations appear in the hero alongside a structured grid background, balancing approachability with product credibility."
colors:
  dark-gray-900: "#292929"
  off-white: "#fafafa"
  surface-white: "#ffffff"
  brand-orange: "#ff7429"
  dark-charcoal: "#26272b"
  dark-gray-800: "#3d3d3d"
  mid-gray: "#696969"
  near-black: "#080808"
  light-gray-200: "#e5e5e5"
  medium-gray-400: "#b2b2b2"
typography:
  hero-heading:
    fontFamily: "Aspekta"
    fontSize: "56px"
    fontWeight: "400"
    lineHeight: "64px"
  script-label:
    fontFamily: "Fasthand"
    fontSize: "32px"
    fontWeight: "400"
    lineHeight: "44px"
    letterSpacing: "-0.32px"
  section-heading:
    fontFamily: "Aspekta"
    fontSize: "40px"
    fontWeight: "400"
    lineHeight: "48px"
    letterSpacing: "-0.8px"
  card-heading:
    fontFamily: "Aspekta"
    fontSize: "24px"
    fontWeight: "500"
    lineHeight: "32px"
    letterSpacing: "-0.24px"
  subheading:
    fontFamily: "Aspekta"
    fontSize: "20px"
    fontWeight: "500"
    lineHeight: "28px"
  body:
    fontFamily: "Aspekta"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "24px"
  body-medium:
    fontFamily: "Aspekta"
    fontSize: "16px"
    fontWeight: "500"
    lineHeight: "24px"
  small-body:
    fontFamily: "Aspekta"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "21px"
  label:
    fontFamily: "Aspekta"
    fontSize: "12px"
    fontWeight: "500"
    lineHeight: "24px"
rounded:
  pill: "999px"
  full-circle: "100px"
  card: "32px"
  panel: "24px"
  input: "16px"
  tag: "12px"
  sm: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "32px"
  3xl: "40px"
  4xl: "48px"
  5xl: "57px"
  6xl: "64px"
  7xl: "100px"
  section: "153px"
---

## Overview

Qatchup is a user-feedback and product-listening SaaS with a light, airy marketing site. The design pairs a custom geometric sans (Aspekta) for body and UI copy with a cursive script face (Fasthand) for emotive hero labels, creating a warm-yet-structured personality. The palette is near-monochrome. near-black (#080808/#26272b) on off-white (#fafafa/#ffffff). with a vivid orange (#ff7429) as the sole brand accent. Pill-shaped buttons (border-radius: 100px) and fully rounded decorative elements dominate the radius language. Elevation is achieved through a multi-layer subtle shadow system rather than color fills. Playful hand-drawn illustrations appear in the hero alongside a structured grid background, balancing approachability with product credibility.

**Signature traits:**
- Dual typeface system: Pairs Aspekta and Fasthand across the type hierarchy.
- Soft, rounded geometry: Generous corner rounding up to 999px.
- Single-accent color discipline: A neutral-led palette reserves #ff7429 as the lone accent.
- Layered elevation: Depth comes from 5 validated shadow tokens.

## Colors

The palette uses 10 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **content-text** maps to `near-black`: Role "text" is grounded by usage context "Primary heading and body text color; h1 computed color confirmed by probe".
- **action-text** maps to `mid-gray`: Role "text" is grounded by usage context "Nav links, hero body text, muted UI text; confirmed by probe (nav color: rgb(105,105,105))".
- **action-background** maps to `dark-gray-900`: Role "background" is grounded by usage context "Primary CTA button background; confirmed by probe (backgroundColor: rgb(41,41,41))".
- **border-border** maps to `light-gray-200`: Role "border" is grounded by usage context "Dividers, hairlines, and subtle borders".

### Text Scale
- **Brand Orange** (#ff7429): Brand accent — used on highlight elements, decorative icons, and key visual callouts. Role: text. {authored: rgb(255, 116, 41), space: rgb}
- **Dark Charcoal** (#26272b): Secondary text, footer copy, and UI labels. Role: text. {authored: rgb(38, 39, 43), space: rgb}
- **Dark Gray 800** (#3d3d3d): Tertiary text and subtle UI labels. Role: text. {authored: rgb(61, 61, 61), space: rgb}
- **Mid Gray** (#696969): Nav links, hero body text, muted UI text; confirmed by probe (nav color: rgb(105,105,105)). Role: text. {authored: rgb(105, 105, 105), space: rgb}
- **Near Black** (#080808): Primary heading and body text color; h1 computed color confirmed by probe. Role: text. {authored: rgb(8, 8, 8), space: rgb}

### Interactive
- **Light Gray 200** (#e5e5e5): Dividers, hairlines, and subtle borders. Role: border. {authored: rgb(229, 229, 229), space: rgb}
- **Medium Gray 400** (#b2b2b2): Placeholder text and secondary border strokes. Role: border. {authored: rgb(178, 178, 178), space: rgb}

### Surface & Shadows
- **Dark Gray 900** (#292929): Primary CTA button background; confirmed by probe (backgroundColor: rgb(41,41,41)). Role: background. {authored: rgb(41, 41, 41), space: rgb}
- **Off White** (#fafafa): Alternate section backgrounds and subtle surface fills; button text color confirmed by probe. Role: background. {authored: rgb(250, 250, 250), space: rgb}
- **Surface White** (#ffffff): Page and card surface background; button text on dark buttons. Role: background. {authored: rgb(255, 255, 255), space: rgb}

## Typography

Typography uses Aspekta, Fasthand across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes Aspekta and Fasthand for visual contrast. Weight range spans regular, medium. Sizes range from 12px to 56px.

### Font Roles
- **Headline Font**: Aspekta
- **Body Font**: Aspekta

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Primary hero h1; probe-confirmed fontSize:56px, color:#080808 | Aspekta | 56px | 400 | 64px | normal | Aspekta, Arial, sans-serif | Extracted token |
| Emotive hero eyebrow label (e.g. 'Listen!'); cursive accent typeface | Fasthand | 32px | 400 | 44px | -0.32px | Fasthand, sans-serif | Extracted token |
| Section-level headings with tight tracking | Aspekta | 40px | 400 | 48px | -0.8px | Aspekta, Arial, sans-serif | Extracted token |
| Card and feature block titles | Aspekta | 24px | 500 | 32px | -0.24px | Aspekta, Arial, sans-serif | Extracted token |
| Sub-section headings and callout labels | Aspekta | 20px | 500 | 28px | normal | Aspekta, Arial, sans-serif | Extracted token |
| Primary body copy; most frequent typography tuple (×171) | Aspekta | 16px | 400 | 24px | normal | Aspekta, Arial, sans-serif | Extracted token |
| Emphasized body text, nav links, and button labels | Aspekta | 16px | 500 | 24px | normal | Aspekta, Arial, sans-serif | Extracted token |
| Caption and helper text | Aspekta | 14px | 400 | 21px | normal | Aspekta, Arial, sans-serif | Extracted token |
| Micro-labels, tags, and badge text | Aspekta | 12px | 500 | 24px | normal | Aspekta, Arial, sans-serif | Extracted token |

## Layout

Responsive system uses 3 breakpoint tier(s): mobile, tablet, wide.

This system uses a 4px base grid with scale values 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 100.

### Responsive Strategy
- **mobile (<= 991px)**: Constrain layout for small viewports and prioritize vertical stacking.
- **tablet (>= 768px)**: Increase spacing and column structure for medium-width viewports.
- **wide (>= 1920px)**: Stretch composition with generous gutters and wider layout spans.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| xs | 4px | 4 | Extracted spacing token |
| sm | 8px | 8 | Extracted spacing token |
| md | 12px | 12 | Extracted spacing token |
| base | 16px | 16 | Extracted spacing token |
| lg | 20px | 20 | Extracted spacing token |
| xl | 24px | 24 | Extracted spacing token |
| 2xl | 32px | 32 | Extracted spacing token |
| 3xl | 40px | 40 | Extracted spacing token |
| 4xl | 48px | 48 | Extracted spacing token |
| 5xl | 57px | 57 | Extracted spacing token |
| 6xl | 64px | 64 | Extracted spacing token |
| 7xl | 100px | 100 | Extracted spacing token |
| section | 153px | 153 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| card-elevated | 5 | 0px 0px 0px 1px rgba(19, 19, 22, 0.05) |
| card-base | 4 | 0px 0px 0px 1px rgba(19, 19, 22, 0.05) |
| modal | 2 | 0px 17px 23px -6px rgba(16, 24, 40, 0.08) |
| tooltip | 3 | 0px 0px 0.5px 0.5px rgba(0, 0, 0, 0.2) |
| subtle | 1 | 0px 1px 2px 0px rgba(0, 0, 0, 0.1) |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | outline-color | rgb(105, 105, 105) ; rgb(255, 255, 255) ; rgb(38, 39, 43) |
| Light | outline-width | 3px |
| Light | outline-offset | 0px |
| Light | transform | matrix(1, 0, 0, 1, 0, 0) ; matrix(0.997564, 0.0697565, -0.0697565, 0.997564, 0, 0) ; matrix(0.999848, -0.0174524, 0.0174524, 0.999848, 0, 0) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| sm | 8px | 8 | Control corner |
| tag | 12px | 12 | Control corner |
| input | 16px | 16 | Card corner |
| panel | 24px | 24 | Large surface corner |
| card | 32px | 32 | Large surface corner |
| full-circle | 100px | 100 | Large surface corner |
| pill | 999px | 999 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| pill | 999px | px |
| full-circle | 100px | px |
| card | 32px | px |
| panel | 24px | px |
| input | 16px | px |
| tag | 12px | px |
| sm | 8px | px |

## Components

(none detected)

## Do's and Don'ts

Guardrails protect Dual typeface system, Soft, rounded geometry, Single-accent color discipline without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <= 479px | screen and (max-width: 479px) |
| Mobile | <= 767px | screen and (max-width: 767px) |
| Breakpoint 3 | <= 991px | screen and (max-width: 991px) |
| Tablet | >= 768px | (min-width: 768px) |
| Tablet | >= 992px | (min-width: 992px) |
| Desktop | >= 1920px | screen and (min-width: 1920px) |

## Agent Prompt Guide

### Example Component Prompts
- Create button component using validated primary color role and spacing tokens.
- Create card component with mapped radius role and evidence-backed elevation.
- Create form input component using inferred typography hierarchy and border roles.

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.
