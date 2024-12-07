import { create } from 'zustand';
import type { BackwardBusListState } from './index.types';
import { devtools, persist } from 'zustand/middleware';

const initialState = {
  backwardBusList: [],
};

const useBackwardBusListStore = create<BackwardBusListState>()(
  persist(
    devtools((set) => ({
      ...initialState,
      concat: (newBackwardBusList) =>
        set((state) => ({
          ...state,
          backwardBusList: [...newBackwardBusList],
        })),
      deleteByStartId: (targetStartId) =>
        set((state) => ({
          ...state,
          backwardBusList: state.backwardBusList.filter(
            (backwardBus) => backwardBus.startId !== targetStartId
          ),
        })),
      reset: () => set({ ...initialState }),
    })),
    {
      name: 'backward-bus-list',
    }
  )
);

export default useBackwardBusListStore;
