import { SeatVariant } from '../Seat/types';

export interface seat {
  id: number | undefined;
  status: SeatVariant;
  type?: SeatTypeVariant;
}

export interface selectSeatPropType {
  seats: seat[];
  onSelectSeat: Function;
}

type SeatTypeVariant = 'children' | 'teens' | 'adults';
