import { Ticket, TicketList } from '../../types';

export interface TicketListState {
  ticketList: TicketList;
  initialize: (ticketList: TicketList) => void;
  push: (ticket: Ticket) => void;
  deleteByStartId: (startId: string) => void;
  reset: () => void;
}
