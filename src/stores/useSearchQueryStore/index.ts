import { create } from 'zustand';
import type { SearchQueryState } from './index.types';
import { devtools } from 'zustand/middleware';

const initialState = {
  searchQuery: {
    startId: '',
    destId: '',
    startDate: new Date(),
    destDate: null,
  },
};

const useSearchQueryStore = create<SearchQueryState>()(
  devtools((set) => ({
    ...initialState,
    setSearchQuery: (query) =>
      set((state) => ({
        searchQuery: { ...state.searchQuery, ...query },
      })),
    resetSearchQuery: () => set({ ...initialState }),
  }))
);

export default useSearchQueryStore;
