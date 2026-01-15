import { getAllDocsForSearch, extractHeadings } from './docs';

export interface SearchItem {
  title: string;
  slug: string;
  description: string;
  content: string;
  headings: string[];
}

/**
 * Get all searchable items for client-side search
 */
export function getSearchableItems(): SearchItem[] {
  const docs = getAllDocsForSearch();
  
  return docs.map((doc) => ({
    title: doc.title,
    slug: doc.slug,
    description: doc.description,
    content: doc.content.slice(0, 5000), // Limit content for client bundle
    headings: extractHeadings(doc.content).map(h => h.text),
  }));
}
