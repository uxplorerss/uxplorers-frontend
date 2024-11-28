import { BusList } from '../../types';

export interface ForwardBusListState {
  forwardBusList: BusList;
  concat: (backwardBusList: BusList) => void;
  deleteByStartId: (startId: string) => void;
  reset: () => void;
}
