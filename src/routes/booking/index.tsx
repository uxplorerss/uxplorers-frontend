import { createFileRoute } from '@tanstack/react-router';
import BookingPage from '../../pages/booking';

export const Route = createFileRoute('/booking/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <BookingPage />;
}
