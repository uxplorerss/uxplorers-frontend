import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import BookingPaymentPage from '../../../pages/BookingPaymentPage';

export const Route = createFileRoute('/booking/payment/')({
  component: IndexComponent,
});

function IndexComponent() {
  return <BookingPaymentPage />;
}
