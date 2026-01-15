import { getSearchableItems } from '@/lib/search';
import { SearchDialog } from './SearchDialog';

export function SearchWrapper() {
  const items = getSearchableItems();
  return <SearchDialog items={items} />;
}
