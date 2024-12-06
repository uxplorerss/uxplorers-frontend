import { create } from 'zustand';
import type { SearchQueryState } from './index.types';
import { devtools, persist } from 'zustand/middleware';

const initialState = {
  searchQuery: {
    startId: '',
    destId: '',
    startDate: new Date(),
    destDate: null,
  },
};

const useSearchQueryStore = create<SearchQueryState>()(
  persist(
    devtools((set) => ({
      ...initialState,
      setSearchQuery: (query) =>
        set((state) => ({
          searchQuery: { ...state.searchQuery, ...query },
        })),
      resetSearchQuery: () => set({ ...initialState }),
    })),
    {
      name: 'search-query',
    }
  )
);

export default useSearchQueryStore;
