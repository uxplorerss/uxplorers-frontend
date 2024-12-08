import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import MyTicketListPage from '../../pages/MyTicketListPage';

export const Route = createFileRoute('/myTicket/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <MyTicketListPage />;
}
