import { createFileRoute } from '@tanstack/react-router';
import BookingConfirmationPage from '../../../pages/BookingConfirmationPage';

export const Route = createFileRoute('/booking/bookingConfirmation/')({
  component: IndexComponent,
});

function IndexComponent() {
  return <BookingConfirmationPage />;
}
