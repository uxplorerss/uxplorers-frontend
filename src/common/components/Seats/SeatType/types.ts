import { SeatTypeVariant } from '../SelectSeat/types';

export interface SeatTypeType {
  onSelectType: (type: SeatTypeVariant) => void;
}
