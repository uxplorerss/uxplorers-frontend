// export type SeatVariant = 'occupied' | 'seleceted' | 'normal' | 'none';
export type SeatVariant = 'OCCUPIED' | 'SELECTED' | 'NORMAL' | 'NONE';

export interface SeatPropsType {
  attr: SeatVariant;
  num?: number;
  onSelectSeat: (num: number) => void;
}
