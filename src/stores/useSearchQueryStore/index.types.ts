export interface SearchQuery {
  startId: string;
  destId: string;
  startDate: Date;
  destDate: Date;
}

export interface SearchQueryState {
  searchQuery: SearchQuery;
  setSearchQuery: (query: Partial<SearchQuery>) => void;
  resetSearchQuery: () => void;
}
