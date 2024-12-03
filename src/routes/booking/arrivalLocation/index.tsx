import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import ArrivalLocationSelectPage from '../../../pages/booking/arrivalLocation';

export const Route = createFileRoute('/booking/arrivalLocation/')({
  component: IndexComponent,
});

function IndexComponent() {
  // TODO 출발지(도착지) 선택 페이지 구현하기

  return <ArrivalLocationSelectPage />;
}
