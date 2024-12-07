import { ReactNode, useEffect } from 'react';

import useReservationStore from '../../stores/useReservationStore';
import { seats } from './fixture';

export default function SeatListProvider({
  children,
}: {
  children: ReactNode;
}) {
  useSetSeatList();
  return <>{children}</>;
}

function useSetSeatList() {
  useEffect(() => {
    useReservationStore.setState((state) => ({
      ...state,
      selectedOutboundSeatList: seats,
      selectedInboundSeatList: seats,
    }));

    return () => {
      useReservationStore.setState((state) => ({
        ...state,
        selectedOutboundSeatList: [],
        selectedInboundSeatList: [],
      }));
    };
  }, []);
}
