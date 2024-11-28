import { create } from 'zustand';
import type { SearchQueryState } from './index.types';

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
  setSearchQuery: (query) => set((state) => ({ ...state, ...query })),
  resetSearchQuery: () => set({ ...initialState }),
}));

export default useSearchQueryStore;
