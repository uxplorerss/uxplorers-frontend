import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/booking/payment/')({
  component: IndexComponent,
});

function IndexComponent() {
  // TODO 결제하기 페이지 구현하기

  return 'Hello /booking/payment/!';
}
