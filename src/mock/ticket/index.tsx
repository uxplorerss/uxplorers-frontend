import { ReactNode, useEffect } from 'react';
import { tickets } from './fixture';
import useTicketListStore from '../../stores/useTicketListStore';
import useReservationStore from '../../stores/useReservationStore';

export default function TicketListProvider({
  children,
}: {
  children: ReactNode;
}) {
  useSetTicketList();
  return <>{children}</>;
}

function useSetTicketList() {
  useEffect(() => {
    useReservationStore.setState((state) => ({
      ...state,
      pendingTicketList: tickets,
    }));
    return () => {
      useTicketListStore.setState((state) => ({
        ...state,
        pendingTicketList: [],
      }));
    };
  });
}
