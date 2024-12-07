import { ReactNode, useEffect } from 'react';

import useReservationStore from '../../stores/useReservationStore';
import { inboundBus, outboundBus } from './fixture';

export default function BusListProvider({ children }: { children: ReactNode }) {
  useSetBusList();

  return <>{children}</>;
}

function useSetBusList() {
  useEffect(() => {
    useReservationStore.setState((state) => ({
      ...state,
      selectedOutboundBus: outboundBus,
      selectedInboundBus: inboundBus,
    }));

    return () => {
      useReservationStore.setState((state) => ({
        ...state,
        selectedOutboundBus: null,
        selectedInboundBus: null,
      }));
    };
  }, []);
}
