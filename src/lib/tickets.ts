import { TicketList } from '../types';
import { calculateSeatListFee } from './seats';

export const calculateTicketListFee = (ticketList: TicketList) =>
  ticketList.reduce(
    (accumulator, ticket) => accumulator + calculateSeatListFee(ticket.seats),
    0
  );
