import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/booking/seats/')({
  component: IndexComponent,
});

function IndexComponent() {
  // TODO 예매 좌석 선택 페이지 구현하기
  return 'Hello /booking/seats/!!';
}
