import { create } from 'zustand';
import type { SearchQueryState, SearchQuery } from './index.types';

const initialState = {
  searchQuery: {
    startId: '',
    destId: '',
    startDate: new Date(),
    destDate: new Date(),
  },
};

const useSearchQueryStore = create<SearchQueryState>()((set) => ({
  ...initialState,
  // setSearchQuery: (query) => set((state) => ({ ...state, ...query })),
  setSearchQuery: (query) => 
    set((state) => ({
      searchQuery: { ...state.searchQuery, ...query }
    })),
  resetSearchQuery: () => set({ ...initialState }),
}));

export default useSearchQueryStore;
