'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="w-[var(--toc-width)] shrink-0 hidden xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <h4 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
          On this page
        </h4>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li 
              key={heading.id}
              style={{ paddingLeft: heading.level === 3 ? 'var(--space-3)' : '0' }}
            >
              <a
                href={`#${heading.id}`}
                className={`
                  block py-1 transition-colors
                  ${activeId === heading.id
                    ? 'text-[var(--color-text-secondary)] font-medium'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }
                `}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
