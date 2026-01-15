/**
 * Central configuration for the documentation site.
 * Edit this file to customize the template for your knowledge base.
 */

export const siteConfig = {
  // Site identity
  name: "Prowse Phillips App Guide",
  title: "Prowse Phillips App Guide",
  titleTemplate: "%s | Prowse Phillips",
  description: "Official documentation and guides for the Prowse Phillips application.",
  keywords: ["prowse phillips", "app guide", "documentation", "help", "guides"],

  // Logo configuration
  logo: {
    light: "/company-logo.svg",       // Used in light mode
    dark: "/company-logo-dark.svg",   // Used in dark mode
    alt: "Prowse Phillips",
  },

  // Theme configuration
  theme: {
    default: "light" as const,
    storageKey: "docs-theme",
    enableSystem: false,
  },

  // Navigation configuration
  navigation: {
    homeSlug: "getting-started",
    sidebarLabel: "Docs",
  },

  // Sidebar category configuration
  // Documents are grouped by their `order` frontmatter value
  sidebar: {
    categories: [
      { name: "Getting Started", orderRange: [1, 10] as const },
      { name: "Core Operations", orderRange: [11, 30] as const },
      { name: "Advanced Features", orderRange: [31, 50] as const },
      { name: "Reference", orderRange: [51, 70] as const },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
