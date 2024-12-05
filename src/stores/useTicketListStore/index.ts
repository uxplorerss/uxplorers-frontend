import { create } from 'zustand';
import type { TicketListState } from './index.types';
import { devtools } from 'zustand/middleware';

const initialState = {
  ticketList: [],
};

const useTicketListStore = create<TicketListState>()(
  devtools((set) => ({
    ...initialState,
    initialize: (ticketList) =>
      set((state) => ({
        ...state,
        ticketList: [...state.ticketList, ...ticketList],
      })),
    push: (ticket) =>
      set((state) => ({ ...state, ticketList: [...state.ticketList, ticket] })),
    deleteByStartId: (targetStartId) =>
      set((state) => ({
        ...state,
        ticketList: state.ticketList.filter(
          (ticket) => ticket.startId !== targetStartId
        ),
      })),
    reset: () => set({ ...initialState }),
  }))
);

export default useTicketListStore;
