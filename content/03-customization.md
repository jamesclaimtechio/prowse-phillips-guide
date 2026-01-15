---
title: Customization Guide
description: Learn how to customize colors, typography, and branding for your documentation
slug: customization
order: 3
---

# Customization Guide

Make this template your own by customizing the design and branding.

---

## Site Configuration

Edit `config/site.ts` to update your site identity:

```typescript
export const siteConfig = {
  name: "Your Product",
  title: "Your Product Documentation",
  description: "Your product description for SEO",
  
  logo: {
    src: "/your-logo.svg",
    alt: "Your Product",
    invertOnDark: false,
  },
  
  navigation: {
    homeSlug: "getting-started",
    sidebarLabel: "Documentation",
  },
};
```

---

## Design Tokens

All visual styling is controlled via CSS variables in `app/globals.css`.

### Colors

```css
:root {
  /* Backgrounds */
  --color-bg: #fafafa;
  --color-bg-subtle: #f4f4f5;
  --color-surface: #ffffff;
  
  /* Text */
  --color-text: #18181b;
  --color-text-secondary: #3f3f46;
  --color-text-muted: #71717a;
  
  /* Brand */
  --color-primary: #3b82f6;
  --color-link: #2563eb;
}
```

### Typography

```css
:root {
  --font-sans: system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, monospace;
  
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
}
```

### Spacing

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-4: 1rem;      /* 16px */
  --space-8: 2rem;      /* 32px */
}
```

---

## Adding Categories

Organize your docs into categories by editing the sidebar config:

```typescript
sidebar: {
  categories: [
    { name: "Getting Started", orderRange: [1, 10] },
    { name: "Guides", orderRange: [11, 50] },
    { name: "API Reference", orderRange: [51, 100] },
  ],
}
```

Documents are grouped based on their `order` frontmatter value.

---

## Logo Guidelines

For best results, use an SVG logo that:

- Works at small sizes (32px height)
- Uses `currentColor` for text that should match the theme
- Has a transparent background

If your logo is dark, set `invertOnDark: true` in the config to automatically invert it in dark mode.
