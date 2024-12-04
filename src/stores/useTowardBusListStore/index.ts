import { create } from 'zustand';
import type { ForwardBusListState } from './index.types';

const initialState = {
  forwardBusList: [],
};

const useForwardBusListStore = create<ForwardBusListState>((set) => ({
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
}));

export default useForwardBusListStore;
