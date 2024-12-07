import { Seat } from '../types';

export const calculateSeatListFee = (seats: Seat[]) =>
  seats.reduce((accumulator, seat) => {
    return accumulator + seat.fee;
  }, 0);
