import type { BusList } from '../../types';

export interface BackwardBusListState {
  backwardBusList: BusList;
  concat: (backwardBusList: BusList) => void;
  deleteByStartId: (startId: string) => void;
  reset: () => void;
}
