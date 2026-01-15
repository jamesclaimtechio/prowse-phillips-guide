# Knowledge Base Template

A modern, customizable documentation site built with Next.js 15, Tailwind CSS, and markdown.

## Features

- Dark/light mode with system preference support
- Fast client-side search
- Syntax-highlighted code blocks
- Responsive design
- SEO optimized
- Centralized design system

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to see your docs.

## Customization

### Site Identity

Edit `config/site.ts` to change:

```typescript
export const siteConfig = {
  name: "Your Product",
  title: "Your Product Docs",
  description: "Your description here",
  logo: {
    src: "/your-logo.svg",
    alt: "Your Product",
  },
  // ...
};
```

### Design Tokens

All styling is controlled via CSS variables in `app/globals.css`:

```css
:root {
  --color-primary: #your-brand-color;
  --color-bg: #your-background;
  /* ... */
}
```

### Adding Content

Create markdown files in `content/` with frontmatter:

```markdown
---
title: Your Page Title
description: SEO description
slug: your-url-slug
order: 1
---

# Your Content Here
```

The `order` field determines sidebar position and category grouping.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css         # Design tokens
│   └── [slug]/page.tsx     # Dynamic doc pages
├── components/             # React components
├── config/site.ts          # Site configuration
├── content/                # Markdown docs
├── lib/                    # Utilities
└── public/                 # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically on push

### Static Export

```bash
# Update next.config.ts
output: 'export'

# Build
npm run build

# Deploy the `out/` folder
```

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Fuse.js](https://fusejs.io/)
- [rehype-pretty-code](https://rehype-pretty-code.netlify.app/)

## License

MIT
