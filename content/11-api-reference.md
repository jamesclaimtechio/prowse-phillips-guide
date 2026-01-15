---
title: API Reference
description: Reference documentation for configuration options and utilities
slug: api-reference
order: 11
---

# API Reference

Technical reference for the template's configuration and utilities.

---

## Site Configuration

The `siteConfig` object in `config/site.ts` controls all site-wide settings.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | `string` | Site name shown in header |
| `title` | `string` | Default page title |
| `titleTemplate` | `string` | Template for page titles (use `%s` for page name) |
| `description` | `string` | Default meta description |
| `keywords` | `string[]` | SEO keywords |

### Logo Configuration

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `logo.src` | `string` | `/logo.svg` | Path to logo file |
| `logo.alt` | `string` | `"Logo"` | Alt text for accessibility |
| `logo.invertOnDark` | `boolean` | `false` | Invert colors in dark mode |

### Theme Configuration

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `theme.default` | `"light" \| "dark"` | `"light"` | Initial theme |
| `theme.storageKey` | `string` | `"docs-theme"` | localStorage key |
| `theme.enableSystem` | `boolean` | `false` | Use system preference |

---

## Frontmatter Schema

Every markdown file requires these frontmatter fields:

```yaml
---
title: string       # Required - Page title
description: string # Required - SEO description
slug: string        # Required - URL path
order: number       # Required - Sort order and category grouping
---
```

### Example

```yaml
---
title: Authentication Guide
description: Learn how to implement authentication in your app
slug: authentication
order: 15
---
```

---

## Utility Functions

### `getAllDocs()`

Returns all documentation pages sorted by order.

```typescript
import { getAllDocs } from '@/lib/docs';

const docs = getAllDocs();
// Returns: DocMeta[]
```

### `getDocBySlug(slug: string)`

Fetches a single document by its slug.

```typescript
import { getDocBySlug } from '@/lib/docs';

const doc = getDocBySlug('getting-started');
// Returns: { meta: DocMeta, content: string } | null
```

### `getDocsGrouped()`

Returns docs organized by category.

```typescript
import { getDocsGrouped } from '@/lib/docs';

const grouped = getDocsGrouped();
// Returns: { category: string, docs: DocMeta[] }[]
```

---

## CSS Variables Reference

### Colors

| Variable | Light | Dark |
|----------|-------|------|
| `--color-bg` | `#fafafa` | `#09090b` |
| `--color-text` | `#18181b` | `#fafafa` |
| `--color-border` | `#e4e4e7` | `#27272a` |
| `--color-primary` | `#18181b` | `#fafafa` |

### Layout

| Variable | Value | Description |
|----------|-------|-------------|
| `--sidebar-width` | `16rem` | Sidebar width |
| `--toc-width` | `14rem` | Table of contents width |
| `--content-max-width` | `48rem` | Max content width |
| `--mobile-header-height` | `3.5rem` | Mobile header height |
