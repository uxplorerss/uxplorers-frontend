import { ReactNode, useEffect } from 'react';
import { tickets } from './fixture';
import useReservationStore from '../../stores/useReservationStore';

export default function PendingTicketListProvider({
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
      useReservationStore.setState((state) => ({
        ...state,
        pendingTicketList: [],
      }));
    };
  });
}
