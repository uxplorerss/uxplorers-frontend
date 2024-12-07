import { Fee } from '../../../../types';
import { seat } from '../SelectSeat/types';

export interface SeatsPayInfoPropsType {
  seats: seat[];
  pageType: boolean;
  onClick: () => void;
  busFee: Fee | undefined;
}
