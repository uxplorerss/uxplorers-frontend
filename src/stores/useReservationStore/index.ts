import { create } from 'zustand';
import { ReservationState } from './index.types';

const initialState = {
  selectedOutboundBus: null,
  selectedInboundBus: null,
  selectedOutboundSeatList: [],
  selectedInboundSeatList: [],
  pendingTicketList: [],
  purchasedTicketList: [],
  selectedOutboundSeat: [],
  selectedInboundSeat: [],
};

const useReservationStore = create<ReservationState>()((set) => ({
  ...initialState,
  selectOutboundBus: (bus) =>
    set((state) => ({ ...state, selectedOutboundBus: bus })),
  selectInboundBus: (bus) =>
    set((state) => ({ ...state, selectedInboundBus: bus })),
  selectOutboundSeatList: (seatList) =>
    set((state) => ({ ...state, selectedOutboundSeatList: seatList })),
  selectInboundSeatList: (seatList) =>
    set((state) => ({ ...state, selectedInboundSeatList: seatList })),
  issueTicketList: () =>
    set((state) => {
      if (state.selectedOutboundBus && state.selectedInboundBus) {
        const outboundTicket = {
          ...state.selectedOutboundBus,
          seats: [...state.selectedOutboundSeatList],
        };
        const inboundTicket = {
          ...state.selectedInboundBus,
          seats: [...state.selectedInboundSeatList],
        };

        return {
          ...state,
          pendingTicketList: [
            ...state.pendingTicketList,
            outboundTicket,
            inboundTicket,
          ],
        };
      }
      if (state.selectedOutboundBus) {
        const outboundTicket = {
          ...state.selectedOutboundBus,
          seats: [...state.selectedOutboundBus.seats],
        };

        return {
          ...state,
          pendingTicketList: [...state.pendingTicketList, outboundTicket],
        };
      }

      return {
        ...state,
      };
    }),
  purchaseTicketList: () =>
    set((state) => ({
      ...state,
      purchasedTicketList: [
        ...state.purchasedTicketList,
        ...state.pendingTicketList,
      ],
    })),
}));

export default useReservationStore;
