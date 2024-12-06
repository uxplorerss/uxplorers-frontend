import { Bus, Seat, TicketList } from '../../types';

export interface ReservationState {
  selectedOutboundBus?: null | Bus;
  selectedInboundBus?: null | Bus;
  selectedOutboundSeatList: Seat[];
  selectedInboundSeatList: Seat[];
  pendingTicketList: TicketList;
  purchasedTicketList: TicketList;
  selectOutboundBus: (bus: Bus) => void;
  selectInboundBus: (bus: Bus) => void;
  selectOutboundSeatList: (seatList: Seat[]) => void;
  selectInboundSeatList: (seatList: Seat[]) => void;
  issueTicketList: () => void;
  purchaseTicketList: () => void;
}
