import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/booking/paymentConfirmation/')({
  component: IndexComponent,
});

function IndexComponent() {
  // 결제 완료 페이지 구현하기
  return 'Hello /booking/paymentConfirmation/!';
}
