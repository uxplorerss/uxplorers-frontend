import { SeatTypeVariant } from '../SelectSeat/types';

// export type SeatVariant = 'occupied' | 'seleceted' | 'normal' | 'none';
export type SeatVariant = 'OCCUPIED' | 'SELECTED' | 'NORMAL' | 'NONE';

export interface SeatPropsType {
  attr: SeatVariant;
  num?: number;
  selectedType: SeatTypeVariant;
  type?: SeatTypeVariant;
  onSelectSeat: (num: number, type: SeatTypeVariant) => void;
}
