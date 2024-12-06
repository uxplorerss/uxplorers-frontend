import { SearchQuery } from '../../types';

export interface SearchQueryState {
  searchQuery: SearchQuery;
  setSearchQuery: (query: Partial<SearchQuery>) => void;
  resetSearchQuery: () => void;
}
