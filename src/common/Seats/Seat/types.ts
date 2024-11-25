import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

export type SeatVariant = 'OCCUPIED' | 'SELECTED' | 'NORMAL' | 'NONE';

export interface SeatPropsType {
  attr: SeatVariant;
  num?: number;
  handler: Dispatch<SetStateAction<number | undefined>>;
}
