import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/account/')({
  component: IndexComponent,
});

function IndexComponent() {
  // TODO: 예매하기 페이지 구현
  return 'Hello /account/!';
}
