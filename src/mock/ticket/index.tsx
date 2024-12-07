import { ReactNode, useEffect } from 'react';
import { tickets } from './fixture';
import useTicketListStore from '../../stores/useTicketListStore';

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
    useTicketListStore.setState({ ticketList: tickets });
    return () => {
      useTicketListStore.setState({ ticketList: [] });
    };
  });
}
