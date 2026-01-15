---
title: Features
description: Explore the key features and capabilities of this documentation template
slug: features
order: 2
---

# Features

This template comes packed with everything you need for modern documentation.

---

## Dark Mode

Toggle between light and dark themes with a single click. The theme persists across sessions.

| Mode | Best For |
|------|----------|
| Light | Daytime reading, printing |
| Dark | Night reading, reduced eye strain |

---

## Search

Fast, client-side search powered by Fuse.js. No server required.

**Keyboard shortcuts:**
- `Cmd/Ctrl + K` - Open search
- `↑ ↓` - Navigate results
- `Enter` - Go to page
- `Esc` - Close

---

## Syntax Highlighting

Beautiful code blocks with automatic theme switching.

```typescript
// Example: Fetching data with TypeScript
interface User {
  id: string;
  name: string;
  email: string;
}

async function getUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}
```

```python
# Example: Python function
def greet(name: str) -> str:
    """Return a greeting message."""
    return f"Hello, {name}!"

if __name__ == "__main__":
    print(greet("World"))
```

---

## Responsive Design

The layout adapts beautifully to any screen size:

- **Desktop** - Full sidebar + table of contents
- **Tablet** - Collapsible sidebar
- **Mobile** - Hamburger menu navigation

---

## Markdown Support

Full GitHub Flavored Markdown support including:

- [x] Task lists
- [x] Tables
- [x] Strikethrough
- [x] Auto-linked URLs

> **Note:** Blockquotes are styled for callouts and important information.

---

## SEO Optimized

Every page includes proper meta tags generated from frontmatter:

- Title and description
- Open Graph tags
- Semantic HTML structure
