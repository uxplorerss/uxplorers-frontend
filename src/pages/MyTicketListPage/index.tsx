import React from 'react';
import useReservationStore from '../../stores/useReservationStore';
import TicketCard from '../../common/components/TicketCard';

export default function MyTicketListPage() {
  const ticketList = useReservationStore((state) => state.purchasedTicketList);
  return (
    <>
      {ticketList.map((ticket) => (
        <TicketCard {...ticket} />
      ))}
    </>
  );
}
