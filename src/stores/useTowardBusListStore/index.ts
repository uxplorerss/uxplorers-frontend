import { create } from 'zustand';
import type { ForwardBusListState } from './index.types';
import { devtools, persist } from 'zustand/middleware';

const initialState = {
  forwardBusList: [],
};

const useForwardBusListStore = create<ForwardBusListState>()(
  persist(
    devtools((set) => ({
      ...initialState,
      reset: () => set({ ...initialState }),
      concat: (newforwardBusList) =>
        set((state) => ({
          ...state,
          forwardBusList: [...newforwardBusList],
        })),
      deleteByStartId: (targetStartId) =>
        set((state) => ({
          ...state,
          forwardBusList: state.forwardBusList.filter(
            (forwardBus) => forwardBus.startId !== targetStartId
          ),
        })),
    })),
    {
      name: 'forward-bus-list',
    }
  )
);

export default useForwardBusListStore;
