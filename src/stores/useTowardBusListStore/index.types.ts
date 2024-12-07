import { BusList } from '../../types';

export interface ForwardBusListState {
  forwardBusList: BusList;
  concat: (forwardBusList: BusList) => void;
  deleteByStartId: (startId: string) => void;
  reset: () => void;
}
