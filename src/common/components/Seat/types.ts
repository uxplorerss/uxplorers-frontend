import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { seat } from '../../../routes/booking/seats';

export type SeatVariant = 'OCCUPIED' | 'SELECTED' | 'NORMAL' | 'NONE';

export interface SeatPropsType {
  attr: SeatVariant;
  num?: number;
  seats: seat[];
  onSelectSeat: Dispatch<SetStateAction<seat[] | undefined>>;
}
