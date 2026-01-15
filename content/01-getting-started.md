---
title: Getting Started
description: Welcome to your new knowledge base - learn how to customize and add content
slug: getting-started
order: 1
---

# Getting Started

Welcome to your new knowledge base! This template provides everything you need to create beautiful documentation.

## Quick Setup

1. **Customize your site** - Edit `config/site.ts` to change the name, logo, and navigation
2. **Add your content** - Create markdown files in the `content/` folder
3. **Style it your way** - Modify design tokens in `app/globals.css`
4. **Deploy** - Push to GitHub and connect to Vercel

---

## Adding Documentation

Create markdown files in the `content/` folder with this naming pattern:

```
XX-slug-name.md
```

Each file needs frontmatter:

```yaml
---
title: Your Page Title
description: A short description for SEO
slug: your-url-slug
order: 1
---
```

The `order` field determines both the sidebar position and category grouping.

---

## Customization

### Site Identity

Edit `config/site.ts` to change:
- Site name and title
- Logo and branding
- Navigation structure
- Sidebar categories

### Design Tokens

All visual styling is controlled in `app/globals.css`. Edit the CSS variables in `:root` and `.dark` to customize:
- Colors
- Typography
- Spacing
- Layout dimensions

---

## Features

- **Dark Mode** - Toggle between light and dark themes
- **Search** - Fast client-side search across all docs
- **Syntax Highlighting** - Beautiful code blocks with theme support
- **Responsive** - Works great on mobile devices
- **SEO Ready** - Proper meta tags and semantic HTML

---

## Next Steps

1. Delete this sample doc
2. Add your own content
3. Customize the design
4. Deploy and share!

Need help? Check the cursor rules in `.cursor/rules` for detailed guidance.
