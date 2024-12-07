import { createFileRoute } from '@tanstack/react-router';
import BookingPage from '../pages/booking';

export const Route = createFileRoute('/')({
  component: IndexComponent,
});

function IndexComponent() {
  // TODO 홈 페이지 구현하기

  return <BookingPage />;
}
