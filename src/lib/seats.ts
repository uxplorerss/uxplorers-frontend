import { Seat } from '../types';

export const calculateTotalFee = (seats: Seat[]) =>
  seats.reduce((accumulator, seat) => {
    return accumulator + seat.fee;
  }, 0);
