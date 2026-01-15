import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { SearchWrapper } from "@/components/SearchWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getDocsGrouped } from "@/lib/docs";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const groups = getDocsGrouped();

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen">
            {/* Desktop sidebar */}
            <div className="hidden lg:block fixed left-0 top-0 bottom-0 w-[var(--sidebar-width)]">
              <Sidebar groups={groups} />
            </div>
            
            {/* Mobile nav */}
            <MobileNav groups={groups} />
            
            {/* Search */}
            <SearchWrapper />
            
            {/* Main content */}
            <main className="flex-1 lg:ml-[var(--sidebar-width)] pt-[var(--mobile-header-height)] lg:pt-0">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
