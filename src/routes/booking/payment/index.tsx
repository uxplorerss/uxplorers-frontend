import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Typography } from '../../../common/components';
import Flex from '../../../common/components/Flex';
import useTicketListStore from '../../../stores/useTicketListStore';
import PrimaryCard from '../../../common/components/PrimaryCard';
import RouteRow from '../../../common/components/RouteRow';
import SeatDetailsTable from '../../../common/components/SeatDetailsTable';
import FeeSumRow from '../../../common/components/FeeSumRow';
import BookingPaymentPage from '../../../pages/BookingPaymentPage';

export const Route = createFileRoute('/booking/payment/')({
  component: IndexComponent,
});

function IndexComponent() {
  return <BookingPaymentPage />;
}
