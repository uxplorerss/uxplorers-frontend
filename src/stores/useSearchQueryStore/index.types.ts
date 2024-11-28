import { SearchQuery } from '../../types';

export interface SearchQueryState {
  searchQuery: SearchQuery;
  setSearchQuery: (query: SearchQuery) => void;
  resetSearchQuery: () => void;
}
