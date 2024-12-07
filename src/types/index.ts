export interface SearchQuery {
  startId: string;
  destId: string;
  startDate: Date;
  destDate?: Date | null;
}

export interface Fee {
  children: number;
  teens: number;
  adults: number;
}

export interface Seat {
  seatNum: number;
  type: keyof Fee;
  fee: number;
}

export type Class = 'economy' | 'first' | 'premium';

export interface Bus {
  startDate: Date;
  startId: string;
  destIdList: string[];
  company: string;
  fee: Fee;
  eta: number;
  class: Class;
  seats: Seat[];
  distance: number;
  isExpress: boolean;
}

export type BusList = Bus[];

export interface Ticket {
  startDate: Date;
  isExpress: boolean;
  company: string;
  class: Class;
  startId: string;
  destIdList: string[];
  seats: Seat[];
}

export type TicketList = Ticket[];
